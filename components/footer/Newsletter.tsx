import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col items-end sm:flex-row items-center gap-6 sm:gap-20 px-[2%]">
      <div class="flex flex-col gap-2 max-w-[400px]">
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
      <form class="flex flex-1 flex-row items-center gap-2 font-body text-body w-full sm:w-[408px]">
        <input
          class="py-2 px-3 flex-grow bg-footer text-[#757575] border-b-1 focus:outline-none bg-transparent text-xs"
          placeholder="nome"
        />
        <input
          class="py-2 px-3 flex-grow bg-footer text-[#757575] border-b-1 focus:outline-none bg-transparent text-xs"
          placeholder="e-mail"
        />
        <button
          class="flex items-center justify-center py-2 px-3 bg-interactive-inverse rounded focus:outline-none bg-[#A07653] text-xs text-white font-semibold w-[100px] p-[14px] h-[40px]"
          type="bgutton" // prevent form's default behavior
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
