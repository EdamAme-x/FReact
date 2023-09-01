import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { $ } from "freact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return $.button({
    ...props,
    class:
      "px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors",
    disabled: !IS_BROWSER || props.disabled
  });
};