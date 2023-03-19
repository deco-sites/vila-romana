export interface Props {
  title: string;
  text: string;
}

export default function About({ text, title }: Props) {
  return (
    <div class="flex flex-col mx-10 justify-center items-center mt-10">
      <h2 class="text-[#505050] font-black text-[23px]">{title}</h2>
      <p class="text-center text-black text-[15px] mt-3 mb-8">{text}</p>
    </div>
  );
}
