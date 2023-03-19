import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";

interface Props {
  index: number;
}

function CartItem({ index }: Props) {
  const { loading, cart, updateItems } = useCart();
  const item = cart.value!.items[index];
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const {
    imageUrl,
    skuName,
    sellingPrice,
    name,
    quantity,
  } = item;

  const isGift = sellingPrice < 0.01;

  return (
    <div class="flex flex-row justify-between items-start gap-4 relative">
      <Image
        src={imageUrl}
        alt={skuName}
        width={108}
        height={150}
        class="object-cover object-center"
      />
      <div class="flex-grow">
        <Text
          variant="body"
          class="block truncate max-w-[170px] text-xs lg:max-w-full"
        >
          {name}
        </Text>
        <div class="flex flex-col items-baseline">
          <Text tone="price" variant="bold" class="!text-xs pb-5">
            {isGift
              ? "Grátis"
              : formatPrice(sellingPrice / 100, currencyCode!, locale)}
          </Text>

          <Text class="text-xs text-[#505050]">Quantidade: {quantity}</Text>
          <Text class="text-xs text-[#505050]">Tamanho:</Text>
          <Text class="lg:hidden text-xs text-[#505050]">Cor:</Text>
        </div>
      </div>
      <Button
        onClick={() => updateItems({ orderItems: [{ index, quantity: 0 }] })}
        disabled={loading.value || isGift}
        loading={loading.value}
        variant="icon"
        class="absolute bottom-0 right-0 italic"
      >
        <Icon
          id="XMark"
          class="text-[#a9a9a9]"
          width={15}
          height={20}
          strokeWidth={2}
        />
        <Text class="text-[#a07653] text-[11px] tracking-[0.05px]">
          Excluir
        </Text>
      </Button>
    </div>
  );
}

export default CartItem;
