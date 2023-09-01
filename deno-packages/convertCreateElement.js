//@ts-ignore
import CreateTree from "./CreateTree.js";

export class CCElement {

    constructor(name) {
        this.name = name;

        return this.convert();
    }

    convert() {
        return (props, ...children) => {
            if (this.name === "Fragment") {
                return children;
            }
            const w = CreateTree(this.name, props, ...children);
            return w;
        };
    }
}