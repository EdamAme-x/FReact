//@ts-ignore
import { CCElement } from './convertCreateElement.ts';
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