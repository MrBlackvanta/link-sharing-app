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
  const [openUpwards, setOpenUpwards] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  function handlePlatformsMenu(platform?: PlatformType) {
    if (!platform) {
      setOpenMenu((prev) => !prev);
      return;
    }
    setSelectedPlatform(platform);
    setOpenMenu(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (openMenu && dropdownRef.current && menuRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const menuHeight = menuRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (dropdownRect.bottom + menuHeight > viewportHeight) {
        setOpenUpwards(true);
      } else {
        setOpenUpwards(false);
      }
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
      {openMenu && (
        <div
          ref={menuRef}
          className={`scrollbar-hide absolute ${
            openUpwards ? "bottom-[calc(100%_+12px)]" : "top-[calc(100%_+12px)]"
          } z-10 max-h-52 w-full overflow-y-auto rounded-lg border-borders bg-white px-4 py-3 shadow-black-shadow`}
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
