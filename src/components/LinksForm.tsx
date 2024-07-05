import { Button, LinksEmpty, Link } from "components";
import { useState } from "react";
import { Link as LinkType } from "types";

export default function LinksForm() {
  const [links, setLinks] = useState<LinkType[]>([]);

  function handleAddNewLink() {
    const lastLink = links.at(-1);
    if ((lastLink?.platform.key && lastLink?.url) || links.length === 0) {
      const newLink = {
        index: links.length + 1,
        platform: {
          label: "GitHub",
          key: "GitHub",
        },
        url: "www.GitHub.com",
      };

      setLinks((prev) => [...prev, newLink]);
    }
  }

  return (
    <div className="flex-1 rounded-xl bg-white p-4">
      <div className="mb-6 p-2">
        <h1 className="heading-dark mb-2">Customize your links</h1>
        <p className="body-m mb-10">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <Button
          variant="secondary"
          className="mb-6 w-full"
          onClick={handleAddNewLink}
        >
          + Add new link
        </Button>
        {links.length === 0 && <LinksEmpty />}
        {links.length !== 0 && (
          <div className="grid gap-6">
            {links.map((link, idx) => (
              <Link key={idx} {...link} />
            ))}
          </div>
        )}
      </div>
      <hr className="mx-[-1rem] border-borders" />
      <Button className="mt-6 w-full" disabled>
        Save
      </Button>
    </div>
  );
}
