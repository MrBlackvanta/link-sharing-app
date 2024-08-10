import clsx from "clsx";
import { PiEyeBold, PiLinkBold, PiUserCircleBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Button from "./common/Button";

export default function Header() {
  const baseStyles =
    "heading-s flex items-center gap-2 rounded-lg px-7 py-3 text-neutral-500 hover:text-purple";
  const activeStyles = "bg-light-purple text-purple";

  return (
    <header className="md:p-6">
      <nav className="flex items-center rounded-lg bg-white p-4">
        <NavLink to="/" className="me-auto">
          <picture>
            <source srcSet="logo.avif" type="image/avif" />
            <img src="logo.png" alt="logo" className="w-[27px] md:hidden" />
          </picture>
          <picture>
            <source srcSet="logo-full.avif" type="image/avif" />
            <img
              src="logo-full.png"
              alt="logo"
              className="hidden w-[146px] md:block"
            />
          </picture>
        </NavLink>
        <NavLink
          to="/links"
          className={({ isActive }) =>
            clsx(baseStyles, { [activeStyles]: isActive })
          }
        >
          <PiLinkBold />
          <span className="hidden md:block">Links</span>
        </NavLink>
        <NavLink
          to="/profile-details"
          className={({ isActive }) =>
            clsx(baseStyles, { [activeStyles]: isActive })
          }
        >
          <PiUserCircleBold />
          <span className="hidden md:block">Profile Details</span>
        </NavLink>
        <NavLink to="/preview" className="ms-auto">
          <Button variant="secondary" className="!px-4">
            <PiEyeBold className="md:hidden" />
            <span className="hidden md:block">Preview</span>
          </Button>
        </NavLink>
      </nav>
    </header>
  );
}
