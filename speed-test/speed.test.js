import { JSX_test } from "./jsx.jsx";
import { FReact_test } from "./freact.js";

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
        FReact_test();
        callback("FReact");
    }

    const JSX = () => {
        JSX_test();
        callback("JSX");
    }

    time.FReact = Date.now();
    FReact();
    time.JSX = Date.now();
    JSX();
}

console.log("Testing...")
for (let i = 0; i < 40; i++) {
    ontest();
}

const freact_result = freact_array.reduce((r, i) => { return r + i; }, 0);
const jsx_result = jsx_array.reduce((r, i) => { return r + i; }, 0);

console.log(" FReact ~  " + "time: " + freact_result / 1000 + "s");
console.log(" JSX ~  " + "time: " + jsx_result / 1000 + "s");
