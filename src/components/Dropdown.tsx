import { Dispatch, SetStateAction, useState, useEffect, useRef } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Platform as PlatformType } from "types";

type DropdownProps = {
  PLATFORMS: PlatformType[];
  selectedPlatform: PlatformType;
  setSelectedPlatform: Dispatch<SetStateAction<PlatformType>>;
};

export default function Dropdown({
  PLATFORMS,
  selectedPlatform,
  setSelectedPlatform,
}: DropdownProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function handlePlatformsMenu(platform?: PlatformType) {
    if (!platform) {
      setOpenMenu((prev) => {
        if (!prev) {
          const dropdownRect = dropdownRef.current?.getBoundingClientRect();
          if (dropdownRect) {
            setMenuPosition({
              top: dropdownRect.bottom + 10,
              left: dropdownRect.left,
              width: dropdownRect.width,
            });
          }
        }
        return !prev;
      });
      return;
    }
    setSelectedPlatform(platform);
    setOpenMenu(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    }

    function handleScroll(event: Event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  useEffect(() => {
    if (openMenu && dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const menuHeight = 208;
      const viewportHeight = window.innerHeight;

      const topPosition =
        dropdownRect.bottom + 10 + menuHeight > viewportHeight
          ? dropdownRect.top - menuHeight - 10
          : dropdownRect.bottom + 10;

      setMenuPosition({
        top: topPosition,
        left: dropdownRect.left,
        width: dropdownRect.width,
      });
    }
  }, [openMenu]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-borders bg-white px-4 py-3"
        onClick={() => handlePlatformsMenu()}
      >
        <selectedPlatform.icon className="text-neutral-500" />
        <span className="body-m flex-1">{selectedPlatform.label}</span>
        <IoChevronDownOutline className="text-purple" />
      </div>
      {openMenu && menuPosition && (
        <div
          ref={menuRef}
          className="scrollbar-hide fixed z-10 max-h-52 overflow-y-auto rounded-lg border-borders bg-white px-4 py-3 shadow-black-shadow"
          style={{
            top: menuPosition.top,
            left: menuPosition.left,
            width: menuPosition.width,
          }}
        >
          {PLATFORMS.map((platform, index) => (
            <div
              className={`flex cursor-pointer items-center gap-3 border-b border-borders py-3 text-neutral-500 hover:text-purple ${
                index === PLATFORMS.length - 1 ? "last:border-b-0" : ""
              }`}
              key={platform.label}
              onClick={() => handlePlatformsMenu(platform)}
            >
              <platform.icon className="text-inherit" />
              <span className="body-m flex-1">{platform.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
