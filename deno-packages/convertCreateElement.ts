import CreateTree from "./CreateTree.js";

type Props = Record<string, any>;
type Child = JSX.Element | string;

export class CCElement {
  name: string;
  converter: (props: Props, ...children: Child[]) => JSX.Element | JSX.Element[] | unknown;

  constructor(name: string) {
    this.name = name;
    this.converter = this.convert();
    return this;
  }

  convert(): (props: Props, ...children: Child[]) => JSX.Element | JSX.Element[] | unknown {
    return (props: Props, ...children: Child[]): JSX.Element | JSX.Element[] | unknown => {
      if (this.name === "Fragment") {
        return children;
      }
      const w = CreateTree(this.name, props, ...children);
      return w;
    };
  }
}
