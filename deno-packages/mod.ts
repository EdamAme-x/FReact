//@ts-ignore
import { CCElement } from './convertCreateElement.ts';
import defaultTags from './default_tags.json' assert { type: 'json' };

const $: object = {};

for (const tag of defaultTags.tags) {
    $[tag] = new CCElement(tag);
}

export {
    $
}