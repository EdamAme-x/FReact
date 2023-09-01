import { h } from "https://esm.sh/preact";
/** @jsx h */

function JSX() {

    const name = "React"

    return <div>
        <p>Hello world!</p>
        <p>Hi! {name}</p>
    </div>
}

export function JSX_test(render) {
    for (let i = 0; i < 1000000; i++) {
        render(JSX())
    }
}

