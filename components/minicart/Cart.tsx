import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";

import { useUI } from "../../sdk/useUI.ts";
import CartItem from "./CartItem.tsx";

const CHECKOUT_URL = "https://vilaromana.vtexcommercestable.com.br/checkout";

function Cart({ onClose }: { onClose: () => void }) {
  const { displayCart } = useUI();
  const { cart, loading } = useCart();
  const isCartEmpty = cart.value?.items.length === 0;
  const total = cart.value?.totalizers.find((item) => item.id === "Items");
  const discounts = cart.value?.totalizers.find((item) =>
    item.id === "Discounts"
  );
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;

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
        class="p-5 flex-grow-1 overflow-y-auto flex flex-col gap-6 bg-[#f6f6f6]"
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
              <Text variant="bold" class="text-[#161616] text-xs lg:text-base">
                Total
              </Text>
              <Text
                variant="semibold"
                class="text-[#a07653] text-uppercase text-[13px] lg:text-base"
              >
                {formatPrice(total.value / 100, currencyCode!, locale)}
              </Text>
            </div>
          </div>
        )}
        <div class="p-4 lg:p-6 lg:!flex lg:gap-1.5">
          <a
            class="hidden lg:inline-block w-1/3"
            target="_blank"
            onClick={() => onClose()}
          >
            <Button
              variant="buy"
              class="rounded lg:!text-sm lg:text-[#a07653] lg:block w-full lg:w-full text-[10px] text-uppercase lg:h-[50px] bg-transparent border-[#a07653]"
              disabled={loading.value || cart.value.items.length === 0}
            >
              Voltar
            </Button>
          </a>

          <a
            class="w-full inline-block lg:w-2/3"
            target="_blank"
            href={`${CHECKOUT_URL}?orderFormId=${cart.value!.orderFormId}`}
          >
            <Button
              variant="buy"
              class="h-[38px] w-full rounded text-white lg:!text-sm text-[10px] text-uppercase lg:h-[50px] bg-[#7a983e] font-semibold"
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
