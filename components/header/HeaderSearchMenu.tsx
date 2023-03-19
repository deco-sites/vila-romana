import { lazy, Suspense } from "preact/compat";

import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Loading from "$store/components/ui/Loading.tsx";

const Searchbar = lazy(() => import("$store/components/search/Searchbar.tsx"));

interface Props {
  searchbar: SearchbarProps;
}

export default function HeaderSearchMenu({ searchbar }: Props) {
  return (
    <div
    >
      {!!window?.location && (
        <Suspense fallback={<Loading />}>
          <Searchbar {...searchbar} variant="desktop" />
        </Suspense>
      )}
    </div>
  );
}
