import { $ } from "../deno-packages/mod.ts";

function FReact() {

    const name = "React"

    return $.div({}, $.p({}, "Hello world!"), $.p({}, "Hi! " + name))
}

export function FReact_test(render) {
    for (let i = 0; i < 1000000; i++) {
        render(FReact())
    }
}

