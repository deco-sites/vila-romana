import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col items-end sm:flex-row items-center sm:gap-20 px-[2%]">
      <div class="flex items-center justify-between w-full lg:hidden pb-1 border-b-1">
        <Text class="text-uppercase text-[#505050] !text-xs">Follow us</Text>

        <Text
          variant="semibold"
          class="text-uppercase !text-sm text-[#505050] "
        >
          Newsletter
        </Text>

        <a href="#">
          <Icon id="Facebook" width="15" height="12" fill="#a07653" />
        </a>

        <a href="#">
          <Icon id="Instagram" width="12" height="12" fill="#a07653" />
        </a>

        <a href="#">
          <Icon id="YouTube" width="20" height="20" fill="#a07653" />
        </a>
      </div>

      <div class="flex w-full items-center justify-center flex-col lg:hidden mt-1.5 mb-5">
        <Text class="text-uppercase text-[#505050] !text-[11px]">
          Receba nossas novidades imperdíveis!
        </Text>
        <Text class="text-uppercase !text-[11px] text-[#9F7755]">
          Cadastre-se
        </Text>
      </div>

      <div class="hidden lg:flex flex-col gap-2 max-w-[400px]">
        <Text
          variant="heading-2"
          tone="default-inverse"
          class="text-black font-bold text-[27px] tracking-[4px] text-uppercase"
        >
          Newsletter
        </Text>
        <Text
          variant="caption"
          tone="default-inverse"
          class="text-[11px] text-[#505050] text-uppercase tracking-[0.5px]"
        >
          Receba nossas novidades imperdíveis!{" "}
          <Text class="text-[11px] text-[#9F7755] tracking-[0.5px]">
            Cadastre-se
          </Text>
        </Text>
      </div>
      <form class="flex flex-1 flex-col lg:flex-row items-center gap-2 font-body text-body w-full w-full sm:w-[408px]">
        <input
          class="w-full py-2 px-3 flex-grow bg-footer text-[#757575] border-b-1 focus:outline-none bg-transparent text-xs lg:text-lowercase"
          placeholder="Nome"
        />
        <input
          class="w-full py-2 px-3 flex-grow bg-footer text-[#757575] border-b-1 focus:outline-none bg-transparent text-xs lg:text-lowercase"
          placeholder="E-mail"
        />
        <button
          class="mt-8 lg:mt-0 w-full border flex items-center justify-center py-2 px-3 bg-interactive-inverse lg:rounded focus:outline-none lg:bg-[#A07653] text-xs lg:text-white font-semibold lg:w-[100px] p-[14px] h-[40px]"
          type="bgutton" // prevent form's default behavior
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
