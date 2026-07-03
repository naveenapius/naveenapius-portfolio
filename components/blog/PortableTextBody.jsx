import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";
import { imageDims } from "@/lib/blog";

/**
 * Single shared serializer for post body Portable Text. Section headings render
 * through the global stencil h2; prose, quotes, lists (lime diamond bullets),
 * marks, and inline images match the BlogPost design.
 */
const components = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[18px] leading-[1.75] text-text-body">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-[18px] mt-[46px] text-[clamp(26px,3.8vw,36px)]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-body text-[22px] font-bold">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-[34px] border-l-4 border-lime pl-[22px] text-[clamp(19px,2.4vw,24px)] italic leading-[1.45] text-ink">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-7 flex flex-col gap-[14px]">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-7 flex list-decimal flex-col gap-[14px] pl-6 marker:text-lime-text">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-[14px] text-[18px] leading-[1.65] text-text-body">
        <span className="mt-[9px] h-[9px] w-[9px] flex-none rotate-45 bg-lime" aria-hidden="true" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="pl-1 text-[18px] leading-[1.65] text-text-body">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b-2 border-lime text-ink no-underline"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const dims = imageDims(value);
      return (
        <figure className="my-[clamp(28px,3.5vw,40px)] overflow-hidden rounded-[8px] border-2 border-ink">
          <Image
            src={urlForImage(value).width(1520).url()}
            alt={value?.alt || ""}
            width={dims.width}
            height={dims.height}
            className="h-auto w-full"
          />
        </figure>
      );
    },
  },
};

export default function PortableTextBody({ value }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
