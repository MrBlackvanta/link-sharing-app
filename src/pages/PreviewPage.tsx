import { Button } from "components";
import { useUser } from "hook/useUser";
import { MdArrowForward } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function PreviewPage() {
  const { user } = useUser();

  return (
    <>
      {/* bg */}

      <nav className="mb-[60px] grid grid-cols-2 gap-4 p-4">
        <NavLink to="/preview">
          <Button variant="secondary" className="w-full">
            Back to Editor
          </Button>
        </NavLink>
        <NavLink to="/preview">
          <Button className="w-full">Share Link</Button>
        </NavLink>
      </nav>

      <main className="grid justify-items-center">
        <div className="h-[104px] w-[104px] overflow-hidden rounded-full border-4 border-purple">
          <img src="https://i.pravatar.cc/" alt="XXXName" />
        </div>
        <h1 className="heading-m mb-2 mt-6 text-dark-grey">Ben Wright</h1>
        <h2 className="body-m text-neutral-500">{user?.email}</h2>
        <Button>
          <PiGithubLogoFill />
          <span>GitHub</span>
          <MdArrowForward />
        </Button>
      </main>
    </>
  );
}
