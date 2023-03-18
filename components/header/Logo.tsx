import type { Image } from "deco-sites/std/components/types.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";

export interface ILogo {
  src: string;
  alt?: string;
  title?: string;
  url?: string;
}

function Logo({ logo }: { logo: ILogo }) {
  const { src, alt, title, url } = logo;
  return (
    <a href={url} title={title} class={`inline-flex items-center`}>
      <Picture class="">
        <img
          class="object-cover w-full sm:h-full"
          src={src}
          title={title}
          alt={alt}
        />
      </Picture>
    </a>
  );
}

export default Logo;
