import { $ } from "../deno-packages/mod.ts"
import { render } from "https://esm.sh/preact-render-to-string@6.2.1";

function FReact() {

    const name = "React"

    return $.div({}, $.p({}, "Hello world!"), $.p({}, "Hi! " + name))
}

export function FReact_test() {
    for (let i = 0; i < 1000000; i++) {
        render(FReact())
    }
}

