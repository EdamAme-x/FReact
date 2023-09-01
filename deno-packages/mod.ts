//@ts-ignore
import { CCElement } from './convertCreateElement.ts';
//@ts-ignore
import { defaultTags } from "./defaultTags.ts";

const $: any = {};

for (const tag of defaultTags) {
    $[tag] = new CCElement(tag);
}

export {
    $
}