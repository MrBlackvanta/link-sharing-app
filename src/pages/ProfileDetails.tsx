import clsx from "clsx";
import { Button, Input } from "components";
import { useUser } from "hook/useUser";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { PiImage } from "react-icons/pi";

type FormData = {
  profilePicture: FileList;
  firstName: string;
  lastName: string;
  email: string;
};

export default function ProfileDetails() {
  const { user } = useUser();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  const [image, setImage] = useState<string | null>(null);

  const validateImage = (file: File) => {
    return new Promise<boolean>((resolve) => {
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        resolve(false);
      } else {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
          URL.revokeObjectURL(img.src);
          resolve(img.width <= 1024 && img.height <= 1024);
        };
      }
    });
  };

  const onSubmit = async (data: FormData) => {
    const file = data.profilePicture[0];
    if (await validateImage(file)) {
      setImage(URL.createObjectURL(file));
    } else {
      console.error("Invalid image");
    }
  };

  return (
    <form
      className="grid flex-1 rounded-xl bg-white p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-11 grid p-2">
        <h1 className="heading-dark mb-2">Profile Details</h1>
        <p className="body-m mb-10">
          Add your details to create a personal touch to your profile.
        </p>
        <div className="mb-6 rounded-xl bg-neutral-50 p-5 md:flex md:items-center md:gap-6">
          <h2 className="body-m md:flex-1">Profile picture</h2>
          <div className="items-center md:flex md:basis-[55%] md:gap-6 xl:basis-[59%]">
            <Controller
              name="profilePicture"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      field.onChange(e);
                      const file = e.target.files?.[0];
                      if (file) {
                        setImage(URL.createObjectURL(file));
                      }
                    }}
                    hidden
                    id="fileInput"
                  />
                  <label htmlFor="fileInput">
                    <div
                      className={clsx(
                        "heading-s mb-6 mt-4 grid h-48 w-48 cursor-pointer place-content-center justify-items-center gap-2 rounded-xl bg-light-purple bg-cover bg-no-repeat text-purple md:m-0",
                        { "text-white": image },
                      )}
                      style={{
                        backgroundImage: image
                          ? `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${image})`
                          : ``,
                      }}
                    >
                      <PiImage className="h-8 w-8" />
                      <p>{image ? "Change Image" : "+ Upload Image"}</p>
                    </div>
                  </label>
                  {errors.profilePicture && (
                    <p className="text-red-500">
                      Invalid image. Must be PNG or JPG and below 1024x1024px.
                    </p>
                  )}
                </>
              )}
            />
            <button type="submit" hidden></button>
            <p className="body-s text-neutral-500">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-neutral-50 p-5">
          <div className="grid gap-3" id="profile-form">
            <Input
              label="First name*"
              placeholder="John"
              type="text"
              {...register("firstName", { required: "Can't be empty" })}
              error={errors.firstName}
              row
            />
            <Input
              label="Last name*"
              placeholder="Doe"
              type="text"
              {...register("lastName", { required: "Can't be empty" })}
              error={errors.lastName}
              row
            />
            <Input
              label="Email"
              placeholder="e.g alex@email.com"
              type="email"
              defaultValue={user?.email}
              {...register("email")}
              error={errors.email}
              row
            />
            <button type="submit" hidden></button>
          </div>
        </div>
      </div>
      <hr className="mx-[-1rem] border-borders" />
      <Button className="mt-6 w-full md:w-fit md:justify-self-end">Save</Button>
    </form>
  );
}
