import { PageProps } from "$fresh/server.ts";
import { $ } from "freact";

export default function Greet(props: PageProps) {
  return $.div({}, "Hello " + props.params.name);
}
