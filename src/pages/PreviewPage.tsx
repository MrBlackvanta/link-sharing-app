import { Button, Signature } from "components";
import { useUser } from "hook/useUser";
import toast from "react-hot-toast";
import { MdArrowForward } from "react-icons/md";
import { PiGithubLogoFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function copyUrlToClipboard() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(
    () => {
      toast.success("URL copied to clipboard");
    },
    (err) => {
      toast.error("Could not copy URL to clipboard", err);
    },
  );
}

export default function PreviewPage() {
  const { user } = useUser();

  return (
    <>
      <div className="absolute top-0 -z-10 hidden h-[357px] w-full rounded-b-[32px] bg-purple md:block" />

      <nav className="mb-[60px] grid grid-cols-2 gap-4 rounded-xl p-4 md:m-6 md:grid-cols-[max-content,max-content] md:justify-between md:bg-white">
        <NavLink to="/">
          <Button
            variant="secondary"
            className="w-full whitespace-nowrap md:w-fit"
          >
            Back to Editor
          </Button>
        </NavLink>

        <Button className="w-full md:w-fit" onClick={copyUrlToClipboard}>
          Share Link
        </Button>
      </nav>

      <main className="mx-auto mb-14 grid w-fit justify-items-center rounded-3xl md:mt-[126px] md:bg-white md:px-14 md:py-12 md:shadow-black-shadow">
        <div className="h-[104px] w-[104px] overflow-hidden rounded-full border-4 border-purple">
          <img src="https://i.pravatar.cc/" alt="XXXName" />
        </div>
        <h1 className="heading-m mb-2 mt-6 text-dark-grey">Ben Wright</h1>
        <h2 className="body-m text-neutral-500">{user?.email}</h2>
        <div className="mt-14 grid w-[237px] gap-5">
          <Button className="body-m link-card__github flex w-full items-center gap-2 !p-5">
            <PiGithubLogoFill />
            <span>GitHub</span>
            <MdArrowForward className="ms-auto" />
          </Button>
        </div>
      </main>

      <Signature />
    </>
  );
}
