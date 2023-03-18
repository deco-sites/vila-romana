import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export interface Props {
  text?: string;
}

function Info({ text }: Props) {
  return (
    <div class="flex items-center justify-center mt-6 px-[2%]">
      <Text class="text-[13px] text-[#949494] flex-1 leading-[13px] text-center">
        {text ??
          "KASLO COMERCIO DE VESTUARIO LTDA / CNPJ: 11.593.303/0021-25 / Rua: Guilherme Luiz de Carvalho, 163 - Vila Menck - Osasco - SP - 06288-220"}
      </Text>

      <ul class="flex gap-[15px] w-[215px] h-8">
        <li>
          <a href="https://agenciaeplus.com.br" target="_blank">
            <Icon id="e-Plus" width="110" height="32" />
          </a>
        </li>
        <li>
          <a href="https://vtex.com" target="_blank">
            <Icon id="VTEX" width="75" height="30" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Info;
