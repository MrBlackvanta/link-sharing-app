import { Button } from "components";

export default function LinksPage() {
  return (
    <main className="m-4 rounded-xl bg-white p-4">
      <div className="mb-6 p-2">
        <h1 className="mb-2 text-2xl font-bold text-dark-grey">
          Customize your links
        </h1>
        <p className="body-m mb-10">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button variant="secondary" className="mb-6 w-full">
          + Add new link
        </Button>
        <div className="grid justify-items-center gap-6 rounded-xl bg-neutral-50 px-5 py-[46.5px] text-center">
          <picture>
            <source srcSet="links-empty.avif" type="image/avif" />
            <img
              src="links-empty.png"
              alt="hand tapping a phone with 2 paper pages at the back"
              className="h-20"
            />
          </picture>
          <h2 className="text-2xl font-bold text-dark-grey">
            Let’s get you started
          </h2>
          <p className="body-m text-neutral-500">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      </div>
      <hr className="mx-[-1rem] border-borders" />
      <Button className="mt-6 w-full" disabled>
        Save
      </Button>
    </main>
  );
}
