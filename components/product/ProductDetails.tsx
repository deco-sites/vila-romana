import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
    isVariantOf,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];

  console.log({ product });

  return (
    <Container class="py-0 mt-44 bg-[#f6f6f6] pb-10">
      <Breadcrumb
        itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
      />
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-10">
        {/* Image Gallery */}
        <div class="flex flex-row flex-wrap overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2 sm:w-[75%]">
          {images?.map((img, index) => (
            <Image
              style={{ aspectRatio: "665 / 1013" }}
              class="min-w-[100vw] sm:min-w-0"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              width={665}
              height={1013}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {/* Product Info */}
        <div class="flex-auto px-4 sm:px-0 w-[25%]">
          {/* Breadcrumb */}
          {/* Code and name */}
          <div class="mt-4 sm:mt-8">
            <h1>
              <Text variant="heading-3">{isVariantOf?.name}</Text>
            </h1>
            <div>
              <Text tone="subdued" variant="caption">
                Ref:. {gtin}
              </Text>
            </div>
          </div>
          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-col gap-0 items-start">
              <p class="line-through text-uppercase text-[12px] font-thin text-[#888]">
                De: {formatPrice(listPrice, offers!.priceCurrency!)}
              </p>
              <p class="text-[#a07653] text-[18px] font-bold">
                <span class="text-uppercase text-[12px] font-thin">Por:</span>
                {" "}
                {formatPrice(price, offers!.priceCurrency!)}
              </p>
            </div>
            {/* MOCK */}
            <p class="text-[12px] text-uppercase font-thin">
              Até 6X no cartão
            </p>
          </div>
          {/* Sku Selector */}
          <div class="mt-4 sm:mt-6">
            <ProductSelector product={product} />
          </div>
          {/* Add to Cart and Favorites button */}
          <div class="mt-4 sm:mt-10 flex flex-col gap-2">
            {seller && (
              <AddToCartButton
                skuId={productID}
                sellerId={seller}
              >
                COMPRAR
              </AddToCartButton>
            )}
          </div>
          {/* Description card */}
          <div class="mt-4 sm:mt-6">
            {description && (
              <div class="mb-10">
                <p class="text-uppercase font-heading-1 text-xs">Descrição</p>
                <div class="mt-2.5 text-xs text-[#888]">{description}</div>
              </div>
            )}
            {/* MOCK */}
            <div>
              <p class="text-uppercase font-heading-1 text-xs">Composição</p>
              <div class="my-2.5 text-xs text-[#888]">
                90% ALGODAO / 10% POLIESTER
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
