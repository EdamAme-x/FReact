import { Head } from "$fresh/runtime.ts";
import { $ } from "freact";

export default function Error404() {
  return $.Fragment(
    {},
    Head({ children: $.title({}, "404 - Page not found") }),
    $.div(
      { class: "px-4 py-8 mx-auto bg-[#86efac]" },
      $.div(
        {
          class:
            "max-w-screen-md mx-auto flex flex-col items-center justify-center",
        },
        $.img(
          {
            class: "my-6",
            src: "/logo.svg",
            width: "128",
            height: "128",
            alt: "the fresh logo: a sliced lemon dripping with juice",
          }
        ),
        $.h1({ class: "text-4xl font-bold" }, "404 - Page not found"),
        $.p({ class: "my-4" }, "The page you were looking for doesn't exist."),
        $.a({ href: "/" }, "Go back home")
      )
    )
  );
}