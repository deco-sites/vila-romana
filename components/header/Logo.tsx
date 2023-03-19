import type { Image } from "deco-sites/std/components/types.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Icon from "../ui/Icon.tsx";

export interface ILogo {
  src: string;
  alt?: string;
  title?: string;
  url?: string;
}

function Logo({ logo }: { logo: ILogo }) {
  const { src, alt, title, url } = logo;
  return (
    <a
      href={url}
      title={title}
      class={`inline-flex items-center w-[60%] md:w-auto`}
    >
      <Icon
        id="LogoHeader"
        width={238}
        height={56}
        class="block text-[#adadad]"
      />
    </a>
  );
}

export default Logo;
