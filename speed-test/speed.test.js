import { JSX_test } from "./jsx.jsx";
import { FReact_test } from "./freact.js";
import { render } from "https://esm.sh/preact-render-to-string@6.2.1";

const freact_array = [];
const jsx_array = [];

console.log("⚛-SpeedTest")

function ontest() {
    const callback = type => {
        if (type === "JSX") {
            jsx_array.push(Date.now() - time[type]);
        } else {
            freact_array.push(Date.now() - time[type]);
        }
    }

    const time = {};


    const FReact = () => {
        FReact_test(render);
        callback("FReact");
    }

    const JSX = () => {
        JSX_test(render);
        callback("JSX");
    }

    time.FReact = Date.now();
    FReact();
    time.JSX = Date.now();
    JSX();
}

console.log("Testing...")
for (let i = 0; i < 5; i++) {
    ontest();
}

const freact_result = freact_array.reduce((r, i) => { return r + i; }, 0);
const jsx_result = jsx_array.reduce((r, i) => { return r + i; }, 0);

console.log(" FReact ~  " + "time: " + freact_result / 1000 + "s");
console.log(" JSX ~  " + "time: " + jsx_result / 1000 + "s");
