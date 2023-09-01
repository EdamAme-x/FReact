//@ts-ignore
import { h } from "https://esm.sh/preact";

export class CCElement {

    name: string;

    constructor(name: string) {
        this.name = name;

        return this.convert();
    }

    convert(): any {
        return (props: any, ...children: any[]) => h(this.name, props, ...children);
    }
}