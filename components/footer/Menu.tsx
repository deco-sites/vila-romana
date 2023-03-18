import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

import MenuItem from "$store/components/footer/MenuItem.tsx";

import { useState } from "preact/hooks";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div class="flex w-full">
      <Icon
        id="Logo"
        width={50}
        height={50}
        class="text-[#adadad]"
      />

      <ul
        class={`flex w-4/5 ml-[30px] ${
          menuOpen ? "items-baseline" : "items-center"
        }`}
      >
        <li class="w-[15%] flex flex-col items-baseline">
          <div class="flex items-center gap-[5px]" onClick={toggleMenu}>
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Sobre nós
            </Text>
          </div>

          {menuOpen && (
            <div class="w-[114px]">
              <ul>
                <MenuItem title="A marca" />
                <MenuItem title="Trabalhe conosco" />
                <MenuItem title="Multimarcas" />
                <MenuItem title="Nossas lojas" />
                <MenuItem title="Mapa do site" />
              </ul>
            </div>
          )}
        </li>

        <li class="w-[15%] flex flex-col items-baseline">
          <div class="flex items-center gap-[5px]" onClick={toggleMenu}>
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Atendimento
            </Text>
          </div>

          {menuOpen && (
            <div class="w-[114px]">
              <ul>
                <MenuItem title="Dúvidas frequentes" />
                <MenuItem title="Fale Conosco" />
                <MenuItem title="Atendimento de seg à quinta das 9 às 18hrs e sex das 9 às 17hs. sac@vilaromana.com.br" />
              </ul>
            </div>
          )}
        </li>

        <li class="w-[15%] flex flex-col items-baseline">
          <div class="flex items-center gap-[5px]" onClick={toggleMenu}>
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Política
            </Text>
          </div>

          {menuOpen && (
            <div class="w-full">
              <ul>
                <MenuItem title="Trocas e devoluções" />
                <MenuItem title="Privacidade e segurança" />
                <MenuItem title="Ajuste" />
                <MenuItem title="Cashback" />
              </ul>
            </div>
          )}
        </li>

        <li class="w-[15%] flex flex-col items-baseline">
          <div class="flex items-center gap-[5px]" onClick={toggleMenu}>
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Minha conta
            </Text>
          </div>

          {menuOpen && (
            <div class="w-[114px]">
              <ul>
                <MenuItem title="Cadastro" />
                <MenuItem title="Meus pedidos" />
              </ul>
            </div>
          )}
        </li>

        <li class="w-[15%] flex flex-col items-baseline">
          <div class="flex items-center gap-[5px]" onClick={toggleMenu}>
            <Icon
              id="Arrow"
              width={8}
              height={6}
              class={`text-[#adadad] cursor-pointer ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
            <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
              Formas de pagamento
            </Text>
          </div>

          {menuOpen && (
            <div class="w-full">
              <ul>
                <MenuItem title="Parcelamento em até 6x sem juros" />
                <MenuItem title="Parcela mínima R$ 100,00" />
                <MenuItem title="Transferência bancária" />
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
