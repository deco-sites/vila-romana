import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  ).splice(0, 5);

  return (
    <ul class="flex justify-center flex-col gap-2">
      <div class="text-gray-900 text-xs">
        Tamanho
      </div>

      <div class="flex gap-2">
        {options.map(([url, value]) => (
          <a href={url}>
            <Avatar
              class="px-2 rounded-full border-transparent border-[1px] hover:border-brow-500"
              variant="idempotent"
              content={value}
              disabled={url === product.url}
            />
          </a>
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

  const priceInstallment = product.offers?.offers[0]?.priceSpecification.filter(
    (offer) => offer.name === "Visa",
  ).at(-1);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group"
    >
      <a href={url} aria-label="product link">
        <div class="relative w-full">
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
          {seller && (
            <div
              class="absolute bottom-0 hidden sm:group-hover:flex flex-col  w-full p-2 bg-opacity-10 p-5"
              style={{
                backgroundColor: "hsla(0,0%,100%,.9);",
                backdropFilter: "blur(2px)",
              }}
            >
              <div class="text-center text-xxs text-gray-700">
                Ref: {product.isVariantOf?.model}
              </div>
              <Sizes {...product} />
              <Button
                as="a"
                href={product.url}
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
            {product.isVariantOf?.name}
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

          {priceInstallment?.billingIncrement !== price && (
            <div class="flex items-center gap-2">
              <Text
                class="text-sm text-gray-700"
                variant="caption"
              >
                {priceInstallment?.billingDuration}X de {formatPrice(
                  priceInstallment?.billingIncrement,
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
