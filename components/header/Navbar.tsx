import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import Logo from "./Logo.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { ILogo } from "./Logo.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";

function Navbar({ logo, items, searchbar }: {
  logo: ILogo;
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2 bg-white`}
      >
        <HeaderButton variant="menu" />

        <Logo logo={logo} />

        <div class="flex gap-1 w-[20%] md:w-auto">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="sm:flex-col md:flex-col xl:flex-col justify-center items-center w-full bg-header-bg">
        <div class="hidden md:flex flex-row justify-between items-center  w-full pt-4 pb-4 bg-header-bg pr-[2%] pl-[2%]">
          <div class="flex-none w-1/3">
            <HeaderSearchMenu searchbar={searchbar} />
          </div>
          <div class="flex w-1/3 items-center justify-center">
            <Logo logo={logo} />
          </div>

          <div class="flex-none w-1/3 flex items-center justify-end gap-2">
            <Button
              as="a"
              variant="icon"
              href="/login"
              aria-label="Log in"
            >
              <Icon id="User" width={20} height={20} strokeWidth={0.4} />
              Minha conta
            </Button>
            <Button
              as="a"
              variant="icon"
              href="/institucional/lojas"
              aria-label="Log in"
            >
              <Icon id="Location" width={20} height={20} strokeWidth={0.4} />
              Lojas
            </Button>
            <HeaderButton variant="cart" />
          </div>
        </div>
        <div class="flex-auto justify-between w-full bg-header-bg pl-[2%] pr-[2%] hidden sm:flex">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
