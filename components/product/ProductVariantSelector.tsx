import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product }: Props) {
  const possibilities = useVariantPossibilities(product);
  const { url: currentUrl } = product;

  return (
    <ul class="flex flex-col gap-4">
      {Object.keys(possibilities).map((name) => (
        <li class="flex flex-col gap-2">
          <Text variant="caption">{name}</Text>
          <ul class="hidden flex-row flex-wrap gap-2 md:flex">
            {Object.entries(possibilities[name]).map(([url, value]) => (
              <li>
                <a href={url}>
                  <Avatar
                    // deno-lint-ignore no-explicit-any
                    content={value as any}
                    disabled={url === currentUrl}
                    variant={name === "COR" ? "color" : "abbreviation"}
                  />
                </a>
              </li>
            ))}
          </ul>
          <select class="flex flex-row flex-wrap gap-2 md:hidden border-1 border-[#a07653] border-solid rounded text-[#505050] text-[10px] h-10 min-w-[60px] px-2 ">
          <option>
                <a>
                  Tam
                </a>
              </option>
            {Object.entries(possibilities[name]).map(([url, value]) => (
              <option>
                <a href={url}>
                  <Avatar
                    // deno-lint-ignore no-explicit-any
                    content={value as any}
                    disabled={url === currentUrl}
                    variant={name === "COR" ? "color" : "abbreviation"}
                  />
                </a>
              </option>
            ))}
          </select>
        </li>
      ))}
    </ul>
  );
}

export default VariantSelector;
