import { Children } from "preact/compat";
import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["ul"] & {
  snap?: string;
  showItems?: number;
};

function Slider({
  children,
  snap = "snap-center",
  class: _class = "gap-6 scrollbar-none",
  showItems = 3,
  ...props
}: Props) {
  return (
    <ul
      data-slider
      class={`grid grid-flow-col items-center overflow-x-auto overscroll-x-contain snap-x snap-mandatory ${_class}`}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <li
          data-slider-item={index}
          class="snap h-full"
        >
          {child}
        </li>
      ))}
    </ul>
  );
}

export default Slider;
