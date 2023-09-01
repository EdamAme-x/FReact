import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { $ } from "freact";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return $.div(
    { class: "flex gap-8 py-6" },
     Button({ onClick: () => props.count.value -= 1, children: "-1" }),
     $.p({ class: "text-3xl" }, props.count),
     Button({ onClick: () => props.count.value += 1, children: "+1" })
  );
}