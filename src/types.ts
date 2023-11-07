export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
};

export type SocialMedia =
  | "Github"
  | "LinkedIn"
  | "Mail"
  | "Twitter";

export type SocialObject = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
};

export type SocialObjects = SocialObject[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};