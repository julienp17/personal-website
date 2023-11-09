import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.julienpause.com/",
  author: "Julien Pause",
  desc: "React & React Native software engineer based in Paris, France.",
  title: "Julien Pause",
  ogImage: "julien_pause_og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["en-US"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:julien.pause@epitech.eu",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/julienp17",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/julien-pause/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/julienp171",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];
