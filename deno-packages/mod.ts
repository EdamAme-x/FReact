//@ts-ignore
import { CCElement } from './convertCreateElement.js';
//@ts-ignore
import { defaultTags } from "./defaultTags.js";

const $: any = {
    create: function(tagName: string) {
        $[tagName] = new CCElement(tagName);
    }
};

for (const tag of defaultTags) {
    $[tag] = new CCElement(tag);
}

export {
    $
}