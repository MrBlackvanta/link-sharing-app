import clsx from "clsx";
import { PiEyeBold, PiLinkBold, PiUserCircleBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const baseStyles =
    "heading-s flex items-center gap-2 rounded-lg px-7 py-3 text-neutral-500 hover:text-purple";
  const activeStyles = "bg-light-purple text-purple";

  return (
    <header>
      <nav className="flex items-center p-4">
        <NavLink to="/" className="me-auto">
          <img src="logo.png" alt="logo" className="w-[27px] md:hidden" />
          <img
            src="logo-full.png"
            alt="logo"
            className="hidden w-[146px] md:block"
          />
        </NavLink>
        <NavLink
          to="links"
          className={({ isActive }) =>
            clsx(baseStyles, { [activeStyles]: isActive })
          }
        >
          <PiLinkBold />
          <span className="hidden md:block">Links</span>
        </NavLink>
        <NavLink
          to="profile-details"
          className={({ isActive }) =>
            clsx(baseStyles, { [activeStyles]: isActive })
          }
        >
          <PiUserCircleBold />
          <span className="hidden md:block">Profile Details</span>
        </NavLink>
        <Button variant="secondary" className="ms-auto !px-4">
          <PiEyeBold className="md:hidden" />
          <span className="hidden md:block">Preview</span>
        </Button>
      </nav>
    </header>
  );
}
