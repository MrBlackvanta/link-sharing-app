import { Button, Link, LinksEmpty } from "components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as LinkType } from "types";

export default function LinksForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ url: string }>();
  const [links, setLinks] = useState<LinkType[]>([]);

  function handleAddNewLink() {
    const lastLink = links.at(-1);
    if ((lastLink?.platform.key && lastLink?.url) || links.length === 0) {
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

  function onSubmit() {}

  return (
    <form
      className="flex-1 rounded-xl bg-white p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
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
          type="button"
        >
          + Add new link
        </Button>
        {links.length === 0 && <LinksEmpty />}
        {links.length !== 0 && (
          <div className="grid gap-6">
            {links.map((link, idx) => (
              <Link key={idx} data={link} register={register} errors={errors} />
            ))}
          </div>
        )}
      </div>
      <hr className="mx-[-1rem] border-borders" />
      <Button className="mt-6 w-full" disabled={!!errors?.url}>
        Save
      </Button>
    </form>
  );
}
