import { $ } from "freact";

export default function App() {
  return $.Fragment(
    $.div({ className: "text" }, $.p({}, "Hello world!")),
    $.img({ src: "https://picsum.photos/200/300" }),
  );
}
