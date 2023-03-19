import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";
import type { ComponentChildren } from "preact";

interface Props {
  skuId: string;
  sellerId: string;
  children: ComponentChildren;
}

function AddToCartButton({ skuId, sellerId, children }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  return (
    <Button {...props} class="text-white bg-[#7A983E] text-base w-full py-4 rounded text-uppercase font-bold cursor-pointer" variant="buy">
      {children}
    </Button>
  );
}

export default AddToCartButton;
