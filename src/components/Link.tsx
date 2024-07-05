import { PiEqualsLight, PiGithubLogoFill, PiLinkBold } from "react-icons/pi";
import { Button, Input } from "components";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link as LinkType } from "types";
import { useState } from "react";

const PLATFORMS = [{}, {}];

export default function Link(props: LinkType) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { index, platform, url } = props;

  function handlePlatformsMenu() {
    setOpenMenu((prev) => !prev);
  }

  return (
    <div className="grid gap-3 rounded-xl bg-neutral-50 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PiEqualsLight />
          <h3 className="font-bold text-neutral-500">Link #{index}</h3>
        </div>
        <Button variant="link" className="body-m !p-0 text-neutral-500">
          Remove
        </Button>
      </div>
      <div className="grid gap-1">
        <h4 className="body-s">Platform</h4>
        <div className="relative">
          <div
            className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-borders bg-white px-4 py-3"
            onClick={handlePlatformsMenu}
          >
            <PiGithubLogoFill className="text-neutral-500" />
            <span className="body-m flex-1">{platform.label}</span>
            <IoChevronDownOutline className="text-purple" />
          </div>
          {openMenu && (
            <div className="shadow-black-shadow absolute top-[calc(100%_+12px)] z-10 w-full rounded-lg border-borders bg-white px-4 py-3">
              {PLATFORMS.map((el, idx) => (
                <div
                  className={`flex cursor-pointer items-center gap-3 border-b border-borders py-3 text-neutral-500 hover:text-purple ${index === PLATFORMS.length - 1 ? "last:border-b-0" : ""}`}
                  key={idx}
                  onClick={handlePlatformsMenu}
                >
                  <PiGithubLogoFill className="text-inherit" />
                  <span className="body-m flex-1">{platform.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Input
        icon={PiLinkBold}
        label="Link"
        placeholder="e.g. https://www.github.com/johnappleseed"
        value={url}
      />
    </div>
  );
}
