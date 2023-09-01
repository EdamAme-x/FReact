import { h } from "https://esm.sh/preact";
import { render } from "https://esm.sh/preact-render-to-string@6.2.1";

function JSX() {

    const name = "React"

    return <div>
        <p>Hello world!</p>
        <p>Hi! {name}</p>
    </div>
}

export function JSX_test() {
    for (let i = 0; i < 1000000; i++) {
        render(JSX())
    }
}

