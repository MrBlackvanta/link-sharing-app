import { Dispatch, SetStateAction, useState } from "react";
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

  function handlePlatformsMenu(platform?: PlatformType) {
    if (!platform) {
      setOpenMenu((prev) => !prev);
      return;
    }
    setSelectedPlatform(platform);
    setOpenMenu(false);
  }

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-borders bg-white px-4 py-3"
        onClick={() => handlePlatformsMenu(undefined)}
      >
        <selectedPlatform.icon className="text-neutral-500" />
        <span className="body-m flex-1">{selectedPlatform.label}</span>
        <IoChevronDownOutline className="text-purple" />
      </div>
      {openMenu && (
        <div className="scrollbar-hide absolute top-[calc(100%_+12px)] z-10 max-h-52 w-full overflow-y-auto rounded-lg border-borders bg-white px-4 py-3 shadow-black-shadow">
          {PLATFORMS.map((el, idx) => (
            <div
              className={`flex cursor-pointer items-center gap-3 border-b border-borders py-3 text-neutral-500 hover:text-purple ${idx === PLATFORMS.length - 1 ? "last:border-b-0" : ""}`}
              key={idx}
              onClick={() => handlePlatformsMenu(el)}
            >
              <el.icon className="text-inherit" />
              <span className="body-m flex-1">{el.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
