import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Menu() {
  return (
    <div class="flex w-full">
      <Icon
        id="Logo"
        width={50}
        height={50}
        class="text-[#adadad]"
      />

      <ul class="flex w-4/5 ml-[30px] items-center">
        <li class="w-[15%] flex items-center gap-[5px]">
          <Icon
            id="Arrow"
            width={8}
            height={6}
            class="text-[#adadad]"
          />
          <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
            Sobre nós
          </Text>
        </li>
        <li class="w-[15%] flex items-center gap-[5px]">
          <Icon
            id="Arrow"
            width={8}
            height={6}
            class="text-[#adadad]"
          />
          <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
            Atendimento
          </Text>
        </li>
        <li class="w-[15%] flex items-center gap-[5px]">
          <Icon
            id="Arrow"
            width={8}
            height={6}
            class="text-[#adadad]"
          />
          <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
            Política
          </Text>
        </li>
        <li class="w-[15%] flex items-center gap-[5px]">
          <Icon
            id="Arrow"
            width={8}
            height={6}
            class="text-[#adadad]"
          />
          <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
            Minha conta
          </Text>
        </li>
        <li class="w-[15%] flex items-center gap-[5px]">
          <Icon
            id="Arrow"
            width={8}
            height={6}
            class="text-[#adadad]"
          />
          <Text class="cursor-pointer text-[#505050] text-uppercase text-[11px] leading-[23px]">
            Formas de pagamento
          </Text>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
