import { Button } from "components";

export default function LinksPage() {
  return (
    <>
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <Button>+ Add new link</Button>
      <picture>
        <source srcSet="links-empty.avif" type="image/avif" />
        <img
          src="links-empty.png"
          alt="hand tapping a phone with 2 paper pages at the back"
        />
      </picture>
      <h2>Let’s get you started</h2>
      <p>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
      <Button>Save</Button>
    </>
  );
}
