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
}

export interface Props {
  features: Feature[];
}

function FeatureHighlights(
  { features }: Props,
) {
  return (
    <Container class="px-[12%] bg-[#DCD5CA] my-3">
      <div class="">
        <div class="flex justify-between sm:flex-row">
          {features.map(({ icon: id = "Truck", title }) => (
            <div class="flex flex-row gap-1 py-3 border-none justify-center">
              <Icon
                id={id}
                width={34}
                height={34}
                strokeWidth={1}
                class="text-[#6e6a64]"
              />
              <div class="flex flex-col gap-2 justify-center items-center">
                <Text variant="caption" class="text-[#6e6a64] text-sm">{title}</Text> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
