import { AppProps } from "$fresh/server.ts";
import { $ } from "freact";

export default function App({ Component }: AppProps) {
  return $.Fragment({},
    Component()
  );
}
