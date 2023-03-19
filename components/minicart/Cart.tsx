import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";

import { useUI } from "../../sdk/useUI.ts";
import CartItem from "./CartItem.tsx";
import Coupon from "./Coupon.tsx";

const CHECKOUT_URL = "https://vilaromana.vtexcommercestable.com.br/checkout";

function Cart() {
  const { displayCart } = useUI();
  const { cart, loading } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;
  const total = cart.value?.totalizers.find((item) => item.id === "Items");
  const discounts = cart.value?.totalizers.find((item) =>
    item.id === "Discounts"
  );
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;

  console.log("cart", cart);

  if (cart.value === null) {
    return null;
  }

  // Empty State
  if (isCartEmpty) {
    return (
      <div class="flex flex-col justify-center items-center h-full gap-6">
        <Text variant="heading-2">Sua sacola está vazia</Text>
        <Button
          variant="secondary"
          onClick={() => {
            displayCart.value = false;
          }}
        >
          Escolher produtos
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Cart Items */}
      <ul
        role="list"
        class="pt-6 px-2 flex-grow-1 overflow-y-auto flex flex-col gap-6 bg-[#f6f6f6]"
      >
        {cart.value.items.map((_, index) => (
          <li>
            <CartItem index={index} key={index} />
          </li>
        ))}
      </ul>

      {/* Cart Footer */}
      <footer>
        {/* Total */}
        {total?.value && (
          <div class="border-t-1 border-default pt-4 flex flex-col justify-end items-end gap-2 mx-4">
            <div class="flex justify-between items-center w-full">
              <Text variant="bold" class="text-[#161616] text-xs">Total</Text>
              <Text
                variant="semibold"
                class="text-[#a07653] text-uppercase text-[13px]"
              >
                {formatPrice(total.value / 100, currencyCode!, locale)}
              </Text>
            </div>
          </div>
        )}
        <div class="p-4">
          <a
            class="inline-block w-full"
            target="_blank"
            href={`${CHECKOUT_URL}?orderFormId=${cart.value!.orderFormId}`}
          >
            <Button
              class="w-full text-[10px] text-uppercase bg-[#7a983e]"
              disabled={loading.value || cart.value.items.length === 0}
            >
              Finalizar Compra
            </Button>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Cart;
