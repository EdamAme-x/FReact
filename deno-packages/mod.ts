//@ts-ignore
import { CCElement } from './convertCreateElement.ts';

const defaultTags: string[] = ["Fragment", "div", "p", "img", "title", "h1", "a", "code"]

const $: any = {};

for (const tag of defaultTags) {
    $[tag] = new CCElement(tag);
}

export {
    $
}