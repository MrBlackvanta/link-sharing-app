import { Button, Link, LinksEmpty } from "components";
import { useState } from "react";

import { Link as LinkType } from "types";

export default function LinksForm() {
  const [links, setLinks] = useState<LinkType[]>([]);
  const [btnType, setBtnType] = useState<"button" | "submit">("button");

  function handleAddNewLink() {
    if (!links.at(-1)?.url && links.length !== 0) {
      setBtnType("submit");
    } else {
      setBtnType("button");
      const newLink = {
        index: links.length + 1,
        platform: {
          label: "",
          key: "",
        },
        url: "",
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
          type={btnType}
          form={`form-${links?.at(-1)?.index}`}
        >
          + Add new link
        </Button>
        {links.length === 0 && <LinksEmpty />}
        {links.length !== 0 && (
          <div className="grid gap-6">
            {links.map((link, idx) => (
              <Link key={idx} data={link} setLinks={setLinks} />
            ))}
          </div>
        )}
      </div>
      <hr className="mx-[-1rem] border-borders" />
      <Button
        className="mt-6 w-full"
        disabled={!links?.at(-1)?.url}
        type="submit"
        form={`form-${links?.at(-1)?.index}`}
      >
        Save
      </Button>
    </div>
  );
}
