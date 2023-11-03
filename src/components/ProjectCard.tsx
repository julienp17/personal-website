import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"project">["data"];
  secHeading?: boolean;
}

export default function ProjectCard({ href, frontmatter, secHeading = true }: Props) {
  const { title, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <img src={frontmatter.thumbnail} class="w-full h-250" />
        <h2 {...headerProps}>{title}</h2>
      </a>
      <p>{description}</p>
    </li>
  );
}
