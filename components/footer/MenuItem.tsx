import Text from "$store/components/ui/Text.tsx";

export interface Props {
  title: string;
  url?: string;
}

function MenuItem({ title, url }: Props) {
  return (
    <li>
      <a href={url || "#"}>
        <Text class="text-[#505050] text-[11px] hover:text-[#9F7755]">
          {title}
        </Text>
      </a>
    </li>
  );
}

export default MenuItem;
