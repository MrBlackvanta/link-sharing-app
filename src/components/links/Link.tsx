import { Button, Dropdown, Input } from "components/common";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { BiLogoDevTo } from "react-icons/bi";
import {
  PiCodepenLogo,
  PiEqualsLight,
  PiGithubLogoFill,
  PiLinkBold,
  PiStackOverflowLogo,
} from "react-icons/pi";
import {
  SiCodewars,
  SiFacebook,
  SiFreecodecamp,
  SiFrontendmentor,
  SiGitlab,
  SiHashnode,
  SiLinkedin,
  SiTwitch,
  SiTwitter,
  SiYoutube,
} from "react-icons/si";
import { Link as LinkType, Platform as PlatformType } from "types";

const PLATFORMS: PlatformType[] = [
  {
    id: 1,
    label: "GitHub",
    key: "github",
    icon: PiGithubLogoFill,
  },
  {
    id: 2,
    label: "Frontend Mentor",
    key: "frontend-mentor",
    icon: SiFrontendmentor,
  },
  {
    id: 3,
    label: "Twitter",
    key: "twitter",
    icon: SiTwitter,
  },
  {
    id: 4,
    label: "LinkedIn",
    key: "linkedin",
    icon: SiLinkedin,
  },
  {
    id: 5,
    label: "YouTube",
    key: "youtube",
    icon: SiYoutube,
  },
  {
    id: 6,
    label: "Facebook",
    key: "facebook",
    icon: SiFacebook,
  },
  {
    id: 7,
    label: "Twitch",
    key: "twitch",
    icon: SiTwitch,
  },
  {
    id: 8,
    label: "Dev.to",
    key: "devto",
    icon: BiLogoDevTo,
  },
  {
    id: 9,
    label: "Codewars",
    key: "cordewars",
    icon: SiCodewars,
  },
  {
    id: 10,
    label: "Codepen",
    key: "codepen",
    icon: PiCodepenLogo,
  },
  {
    id: 11,
    label: "freeCodeCamp",
    key: "freecodecamp",
    icon: SiFreecodecamp,
  },
  {
    id: 12,
    label: "GitLab",
    key: "gitlab",
    icon: SiGitlab,
  },
  {
    id: 13,
    label: "Hashnode",
    key: "hashnode",
    icon: SiHashnode,
  },
  {
    id: 14,
    label: "Stack Overflow",
    key: "stack-overflow",
    icon: PiStackOverflowLogo,
  },
];

type LinkProps = {
  data: LinkType;
  setLinks: Dispatch<SetStateAction<LinkType[]>>;
};

const validURL = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return "Invalid URL";
  }
};

export default function Link({ data, setLinks }: LinkProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ url: string }>();
  const { index, platform, url } = data;
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>(
    PLATFORMS.filter((el) => el.key === platform.key)?.[0] || PLATFORMS[0],
  );

  function onSubmit() {
    console.log(index);
  }

  return (
    <form
      className="grid gap-3 rounded-xl bg-neutral-50 p-5"
      onSubmit={handleSubmit(onSubmit)}
      id={`form-${index}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PiEqualsLight />
          <h3 className="font-bold text-neutral-500">Link #{index}</h3>
        </div>
        <Button
          variant="link"
          className="body-m !p-0 text-neutral-500"
          type="button"
        >
          Remove
        </Button>
      </div>
      <div className="grid gap-1">
        <h4 className="body-s">Platform</h4>
        <Dropdown
          PLATFORMS={PLATFORMS}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
      </div>
      <Input
        icon={PiLinkBold}
        label="Link"
        placeholder="e.g. https://www.github.com/johnappleseed"
        defaultValue={url}
        type="text"
        {...register("url", {
          required: "Can't be empty",
          validate: validURL,
          onChange(e) {
            const newLink = {
              index,
              platform: selectedPlatform,
              url: e.target.value,
            };
            setLinks((prev) =>
              prev.map((el) => (el.index === index ? newLink : el)),
            );
          },
        })}
        error={errors.url}
      />
    </form>
  );
}
