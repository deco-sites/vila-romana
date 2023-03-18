import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Social() {
  return (
    <ul class="hidden lg:flex w-[240px] gap-7">
      <Text class="text-[#505050] leading-3 text-uppercase text-[12px]">
        Follow us
      </Text>

      <a href="#">
        <Icon id="Facebook" width="15" height="12" fill="#a07653" />
      </a>

      <a href="#">
        <Icon id="Instagram" width="12" height="12" fill="#a07653" />
      </a>

      <a href="#">
        <Icon id="YouTube" width="14" height="11" fill="#a07653" />
      </a>
    </ul>
  );
}

export default Social;
