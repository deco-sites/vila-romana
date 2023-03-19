import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Social() {
  return (
    <ul class="hidden lg:flex w-[240px] gap-7">
      <Text class="text-[#505050] leading-3 text-uppercase text-[12px]">
        Follow us
      </Text>

      <a
        href="https://www.facebook.com/vilaromanaoficial"
        aria-label="Facebook"
      >
        <Icon id="Facebook" width="15" height="12" fill="#a07653" />
      </a>

      <a
        href="https://www.instagram.com/vilaromanaoficial/"
        aria-label="Instagram"
      >
        <Icon id="Instagram" width="12" height="12" fill="#a07653" />
      </a>

      <a href="https://www.youtube.com/user/VILAROMANABR" aria-label="Youtube">
        <Icon id="YouTube" width="14" height="11" fill="#a07653" />
      </a>
    </ul>
  );
}

export default Social;
