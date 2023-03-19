import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Item({ name, item }: { name?: string; item?: string }) {
  if (!name || !item) {
    return null;
  }

  return (
    <li class="whitespace-nowrap overflow-hidden overflow-ellipsis leading-none">
      <a href={item} class="hover:underline text-[10px] text-[#888] font-italic">
        <Text variant="caption" class="text-[10px] text-[#888]">
          {name}
        </Text>
      </a>
    </li>
  );
}

function Breadcrumb({ itemListElement = [] }: Props) {
  return (
    <ul class="flex flex-row items-center gap-2 items-center w-full px-[3%] py-4">
      <Item name="Home" item="/" /> 
      {itemListElement.map((item) => (
        <>
          <li class="mx-3 text-[12px] text-[#888]">
            |
          </li>
          <Item {...item} />
        </>
      ))}
    </ul>
  );
}

export default Breadcrumb;
