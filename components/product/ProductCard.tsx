import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { useState } from "preact/hooks";
import { useMediaQuery } from "$store/hooks/useMediaQuery.ts";

type SizesProps = {
  product: Product;
  selected: string | null;
  onSelected: (value: string) => void;
};

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes({ product, selected, onSelected }: SizesProps) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  ).splice(0, 5);

  function handleClick(url: string) {
    onSelected(url);
  }

  return (
    <ul class="flex justify-center flex-col gap-2">
      <div class="text-gray-900 text-xs">
        Tamanho
      </div>

      <div class="flex gap-2">
        {options.map(([url, value]) => (
          <button
            class={`flex justify-center items-center px-2 rounded-full border-[1px] hover:border-brow-500 ${
              selected === url ? "border-brow-500" : "border-transparent"
            }`}
            onClick={() => handleClick(url)}
            // disabled={url === product.url}
          >
            {value}
          </button>
        ))}
      </div>
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);
  const matches = useMediaQuery("(max-width: 768px)");

  const [selected, setSelected] = useState<string | null>(null);

  const priceInstallment = product.offers?.offers[0]?.priceSpecification.filter(
    (offer) => offer.name === "Visa",
  ).at(-1);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group"
    >
      <a
        href={matches ? product.url : undefined}
        as={matches ? "a" : "div"}
        aria-label="product link"
      >
        <div class="relative w-full">
          <a href={url}>
            <Image
              src={back?.url ?? front.url!}
              alt={front.alternateName}
              width={200}
              height={279}
              class="rounded w-full group-hover:hidden"
              preload={preload}
              loading={preload ? "eager" : "lazy"}
              sizes="(max-width: 640px) 50vw, 20vw"
            />
            <Image
              src={front.url!}
              alt={back?.alternateName ?? front.alternateName}
              width={200}
              height={279}
              class="rounded w-full hidden group-hover:block"
              sizes="(max-width: 640px) 50vw, 20vw"
            />
          </a>
          {seller && (
            <div class="absolute bottom-0 hidden sm:group-hover:flex flex-col bg-white w-full p-2 p-5">
              <div class="text-center text-xxs text-gray-700">
                Ref: {product.isVariantOf?.model}
              </div>
              <Sizes
                product={product}
                selected={selected}
                onSelected={setSelected}
              />
              <Button
                as="a"
                href={selected || product.url}
                variant="simple"
                class="mt-3 bg-green-700 rounded-md hover:bg-green-900 w-[65%] m-auto text-white"
              >
                Comprar
              </Button>
            </div>
          )}
        </div>

        <div class="flex flex-col gap-1 py-2">
          <Text
            class="overflow-hidden overflow-ellipsis whitespace-nowrap"
            variant="caption"
          >
            <a href={url}>{product.isVariantOf?.name}</a>
          </Text>

          <Text
            class="text-xxs text-gray-700"
            variant="caption"
          >
            Ref: {product.isVariantOf?.model}
          </Text>
          <div class="flex items-center gap-2">
            <Text class="text-sm text-brow-500" variant="caption" tone="price">
              {formatPrice(price, offers!.priceCurrency!)}
            </Text>
          </div>

          {priceInstallment?.billingIncrement &&
            priceInstallment.billingIncrement !== price && (
            <div class="flex items-center gap-2">
              <Text
                class="text-sm text-gray-700"
                variant="caption"
              >
                {priceInstallment.billingDuration}X de {formatPrice(
                  priceInstallment.billingIncrement,
                  offers!.priceCurrency!,
                )} sem juros
              </Text>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
