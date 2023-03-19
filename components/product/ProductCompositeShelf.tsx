import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { ResultCollection } from "../../functions/vtexLegacyProductList.ts";
import { useId, useState } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

export interface Props {
  title: string;
  productsCollections: LoaderReturnType<ResultCollection[]>;
}

function ProductCompositeShelf({
  title,
  productsCollections,
}: Props) {
  const id = "text-5666";

  const titles = productsCollections.map((collection) => collection.title);

  const [selectedTitle, setSelectedTitle] = useState(titles[0]);

  const products = productsCollections.find((collection) =>
    collection.title === selectedTitle
  )?.products;

  function handleSelectCollection(title: string) {
    setSelectedTitle(title);
  }

  return (
    <div class="mt-16">
      <h2 class="text-center row-start-1 col-span-full">
        <Text variant="heading-2">{title}</Text>
      </h2>
      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] grid-rows-[48px_1fr_48px_1fr] py-10 pt-6 px-0 sm:px-5"
      >
        <div class="text-center row-start-1 col-span-full">
          <div class="flex justify-center items-center gap-1">
            {titles.map((title, index) => (
              <Button
                variant="simple"
                class="text-center"
                onClick={() => handleSelectCollection(title)}
              >
                <Text
                  variant="body"
                  class={`italic font-light ${
                    title === selectedTitle
                      ? "text-brow-500 font-normal after after:m-auto after:mt-0.5 after:block after:w-4 after:bg-brow-500 after:h-0.5"
                      : ""
                  }`}
                >
                  {title}
                </Text>
              </Button>
            ))}
          </div>
        </div>

        <Slider
          class="gap-10 col-span-full row-start-2 row-end-5 p-2.5"
          snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
        >
          {products?.map((product) => (
            <div class="w-[100%]">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>

        <div class="hidden relative sm:block z-10 col-start-1 row-start-3">
          <div class="absolute right-1/2 bg-interactive-inverse border-transparent rounded-full border">
            <Button
              variant="icon"
              data-slide="prev"
              aria-label="Previous item"
            >
              <Icon
                class="text-gray-300"
                size={20}
                id="ChevronLeft"
                strokeWidth={3}
              />
            </Button>
          </div>
        </div>
        <div class="hidden relative sm:block z-10 col-start-3 row-start-3">
          <div class="absolute left-1/2 bg-interactive-inverse border-transparent rounded-full border">
            <Button variant="icon" data-slide="next" aria-label="Next item">
              <Icon
                class="text-gray-300"
                size={20}
                id="ChevronRight"
                strokeWidth={3}
              />
            </Button>
          </div>
        </div>

        <SliderControllerJS rootId={id} showItems={[1, 3.5]} />
      </div>
    </div>
  );
}

export default ProductCompositeShelf;
