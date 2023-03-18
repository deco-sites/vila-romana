import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-row items-center text-uppercase">
      <div class="flex flex-col gap-2 w-[40%]">
        <Text
          variant="heading-2"
          tone="default-inverse"
          class="text-black tracking-[0.25rem] font-bold text-[27px]"
        >
          Newsletter
        </Text>
        <Text
          variant="caption"
          tone="default-inverse"
          class="text-[#505050] text-xs tracking-[0.05px]"
        >
          Receba nossas novidades imperdíveis!{" "}
          <Text class="text-[#9f7755] text-[11px]">Cadastre-se</Text>
        </Text>
      </div>
      <form class="flex flex-row items-center gap-2 font-body text-body w-full">
        <input
          class="border-b-[1px] text-[#505050] text-lowercase placeholder:font-sans pl-4 h-11 focus:outline-none w-[43%] mr-[2%] text-xs"
          placeholder="nome"
        />
        <input
          class="border-b-[1px] text-[#505050] text-lowercase placeholder:font-sans pl-4 h-11 focus:outline-none w-[43%] mr-[2%] text-xs"
          placeholder="e-mail"
        />
        <button
          class="rounded text-white bg-[#a07653] text-xs font-semibold w-[95px] p-4"
          type="bgutton" // prevent form's default behavior
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
