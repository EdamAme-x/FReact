//@ts-ignore
import { h } from "https://esm.sh/preact";

export class CCElement {

    name: string;

    constructor(name) {
        this.name = name;

        return this.convert();
    }

    convert(): any {
        return (props, ...children: any[]) => h(this.name, props, ...children);
    }
}