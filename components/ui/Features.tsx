import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";

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
  description: string;
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <div class="p-6 sm:px-0 sm:py-4 bg-beige-500 my-3">
      <div class="">
        <div class="flex flex-col justify-evenly sm:flex-row divide-y-1 sm:divide-y-0 sm:divide-x-1 divide-default mx-6 sm:mx-0">
          {features.map(({ icon: id = "Truck", title, description }) => (
            <div class="flex flex-row items-center gap-4 py-6 sm:py-0 sm:px-10 text-gray-800">
              <Icon
                id={id}
                width={40}
                height={40}
                strokeWidth={2}
              />
              <Text variant="body" class="text-gray-800 font-semibold">
                {title}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
