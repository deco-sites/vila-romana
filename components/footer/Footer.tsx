import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Container from "$store/components/ui/Container.tsx";

import Newsletter from "$store/components/footer/Newsletter.tsx";
import Menu from "$store/components/footer/Menu.tsx";
import Social from "$store/components/footer/Social.tsx";
import Info from "$store/components/footer/Info.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export interface Props {
  text?: string;
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-0 ${_class}`}>{children}</div>;
}

function MenuContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return (
    <div class={`flex items-center bg-[#f6f6f6] py-3.5 px-[2%] ${_class}`}>
      {children}
    </div>
  );
}

function Footer({ text }: Props) {
  return (
    <footer class="w-full bg-white flex flex-col divide-y-1 divide-default">
      <div>
        <Container class="w-full flex flex-col divide-default">
          <FooterContainer>
            <Newsletter />
          </FooterContainer>

          <FooterContainer>
            <MenuContainer>
              <Menu />
              <Social />
            </MenuContainer>
            <Info text={text} />
          </FooterContainer>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
