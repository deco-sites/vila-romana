import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import MenuItem from "$store/components/footer/MenuItem.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

import { useState } from "preact/hooks";

export interface Props {
  imageOne?: LiveImage;
  imageTwo?: LiveImage;
}

function Menu({ imageOne, imageTwo }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenMobile, setMenuOpenMobile] = useState(0);
  const isMobile = window.innerWidth < 1024;

  const toggleMenu = (menuId: number) => {
    setMenuOpen(!menuOpen);
    setMenuOpenMobile(menuId === menuOpenMobile ? 0 : menuId);
  };

  return (
    <div class="flex flex-col lg:flex-row w-full bg-[#f6f6f6]">
      <Icon
        id="Logo"
        width={50}
        height={50}
        class="hidden lg:block text-[#adadad]"
      />

      <ul
        class={`flex w-4/5 flex-col lg:flex-row lg:ml-[30px] w-full pt-2 px-[2%] ${
          menuOpen ? "items-baseline" : "items-center"
        }`}
      >
        <li class="w-full lg:w-[15%] flex flex-col items-baseline mb-2.5 lg:mb-0">
          <div
            class="flex items-center gap-[5px]"
            onClick={() => toggleMenu(1)}
          >
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpenMobile === 1 ? "rotate-180" : "rotate-90"
              } lg:${menuOpen ? "rotate-180" : ""}`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Sobre nós
            </Text>
          </div>

          {!isMobile && menuOpen && (
            <div class="w-full">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="A marca" />
                <MenuItem title="Trabalhe conosco" />
                <MenuItem title="Multimarcas" />
                <MenuItem title="Nossas lojas" />
                <MenuItem title="Mapa do site" />
              </ul>
            </div>
          )}

          {isMobile && menuOpenMobile === 1 && (
            <div class="w-full">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="A marca" />
                <MenuItem title="Trabalhe conosco" />
                <MenuItem title="Multimarcas" />
                <MenuItem title="Nossas lojas" />
                <MenuItem title="Mapa do site" />
              </ul>
            </div>
          )}
        </li>

        <li class="w-full lg:w-[15%] flex flex-col items-baseline mb-2.5 lg:mb-0">
          <div
            class="flex items-center gap-[5px]"
            onClick={() => toggleMenu(2)}
          >
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpenMobile === 2 ? "rotate-180" : "rotate-90"
              } lg:${menuOpen ? "rotate-180" : ""}`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Atendimento
            </Text>
          </div>

          {!isMobile && menuOpen && (
            <div class="w-[114px]">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="Dúvidas frequentes" />
                <MenuItem title="Fale Conosco" />
                <MenuItem title="Atendimento de seg à quinta das 9 às 18hrs e sex das 9 às 17hs. sac@vilaromana.com.br" />
              </ul>
            </div>
          )}

          {isMobile && menuOpenMobile === 2 && (
            <div class="w-full">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="Dúvidas frequentes" />
                <MenuItem title="Fale Conosco" />
                <MenuItem title="Atendimento de seg à quinta das 9 às 18hrs e sex das 9 às 17hs. sac@vilaromana.com.br" />
              </ul>
            </div>
          )}
        </li>

        <li class="w-full lg:w-[15%] flex flex-col items-baseline mb-2.5 lg:mb-0">
          <div
            class="flex items-center gap-[5px]"
            onClick={() => toggleMenu(3)}
          >
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpenMobile === 3 ? "rotate-180" : "rotate-90"
              } lg:${menuOpen ? "rotate-180" : ""}`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Política
            </Text>
          </div>

          {!isMobile && menuOpen && (
            <div class="w-full">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="Trocas e devoluções" />
                <MenuItem title="Privacidade e segurança" />
                <MenuItem title="Ajuste" />
                <MenuItem title="Cashback" />
              </ul>
            </div>
          )}

          {isMobile && menuOpenMobile === 3 && (
            <div class="w-full">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="Trocas e devoluções" />
                <MenuItem title="Privacidade e segurança" />
                <MenuItem title="Ajuste" />
                <MenuItem title="Cashback" />
              </ul>
            </div>
          )}
        </li>

        <li class="w-full lg:w-[15%] flex flex-col items-baseline mb-2.5 lg:mb-0">
          <div
            class="flex items-center gap-[5px]"
            onClick={() => toggleMenu(4)}
          >
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpenMobile === 4 ? "rotate-180" : "rotate-90"
              } lg:${menuOpen ? "rotate-180" : ""}`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Minha conta
            </Text>
          </div>

          {!isMobile && menuOpen && (
            <div class="w-[114px]">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="Cadastro" />
                <MenuItem title="Meus pedidos" />
              </ul>
            </div>
          )}

          {isMobile && menuOpenMobile === 4 && (
            <div class="w-full">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="Cadastro" />
                <MenuItem title="Meus pedidos" />
              </ul>
            </div>
          )}
        </li>

        {/* Desktop */}
        <li class="hidden lg:block w-full lg:w-[15%] flex flex-col items-baseline">
          <div
            class="flex items-center gap-[5px]"
            onClick={() => toggleMenu(5)}
          >
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpenMobile === 5 ? "rotate-180" : "rotate-90"
              } lg:${menuOpen ? "rotate-180" : ""}`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Formas de pagamento
            </Text>
          </div>

          {!isMobile && menuOpen && (
            <div class="w-full">
              <ul>
                <MenuItem title="Parcelamento em até 6x sem juros" />
                <MenuItem title="Parcela mínima R$ 100,00" />
                <MenuItem title="Transferência bancária" />
              </ul>
            </div>
          )}

          {isMobile && menuOpenMobile === 5 && (
            <div class="w-full">
              <ul class="ml-3.5 lg:ml-0">
                <MenuItem title="Parcelamento em até 6x sem juros" />
                <MenuItem title="Parcela mínima R$ 100,00" />
                <MenuItem title="Transferência bancária" />
              </ul>
            </div>
          )}
        </li>
      </ul>

      {/* Mobile */}
      <div class="lg:hidden flex flex-col pb-2.5 w-full items-center justify-center">
        <Text class="flex items-center justify-center text-uppercase text-[#505050] text-xs py-2 !font-semibold">
          Formas de pagamento
        </Text>

        <Text class="text-[11px] text-[#505050]">
          Parcelamento em até 6x sem juros
        </Text>
        <Text class="text-[11px] text-[#505050] pb-5">
          Parcela mínima R$ 100
        </Text>
        <Text class="text-[11px] text-[#505050]">Transferência bancária</Text>
      </div>
    </div>
  );
}

export default Menu;
