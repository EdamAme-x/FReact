//@ts-ignore
import { h } from "https://esm.sh/preact";

const $ = {
    Fragment: (props, ...children: any[]) => h("Fragment", props, ...children),
    div: (props, ...children: any[]) => h("div", props, ...children),
    p: (props, ...children: any[]) => h("p", props, ...children),
    img: (props, ...children: any[]) => h("img", props, ...children),
}

export {
    $
}