import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <div class="sm:px-0 sm:py-4 bg-beige-500 mt-5">
      <div class="">
        <div class="flex sm:mx-0 overflow-x-auto">
          {features.map(({ icon: id = "Truck", title }) => (
            <div
              class={`flex flex-row justify-center min-w-[100vw] sm:min-w-[${
                100 / features.length
              }%]  items-center gap-4 py-6 sm:py-0 sm:px-10 text-gray-800`}
            >
              <Icon
                id={id}
                width={34}
                height={34}
                strokeWidth={1}
                class="text-[#6e6a64]"
              />
              <div class="flex flex-col gap-2 justify-center items-center">
                <Text variant="caption" class="text-[#6e6a64] text-sm">
                  {title}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
