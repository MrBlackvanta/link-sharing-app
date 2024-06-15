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
        <NavLink to="/" className="me-auto w-[27px]">
          <img src="logo.png" alt="logo" />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(baseStyles, { [activeStyles]: isActive })
          }
        >
          <PiLinkBold />
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(baseStyles, { [activeStyles]: isActive })
          }
        >
          <PiUserCircleBold />
        </NavLink>
        <Button variant="secondary" className="ms-auto !px-4">
          <PiEyeBold />
        </Button>
        {/* <NavLink
          to="/"
          className=" block rounded-lg border border-purple px-4 py-3 text-purple"
        ></NavLink> */}
      </nav>
    </header>
  );
}
