# React's new syntax sugar

Let's change `.jsx` to `.js` right now.

### @legacy
```jsx
<>
  <p className="text"><span>bbb</span>aaa</p>
  <butoon onClick={alert}>button</button>
  jsx
</>
```

### @new
```js
$.Fragment({}, $.p({
	className: "text"
}, $.span({}, "bbb"), "aaa"), $.button({
	onClick: alert
}, "button"), "jsx")
```

## # Speed
|Name|Test Count|Time|Ratio|
|-|-|-|-|
|FReact|20|13.835s| 87% |
||40|22.590s| 87%|
|JSX|20|15.832s| 100%|
||40|25.942s| 100%|
<details>
<summary>Execution environment</summary>

OS: Ubuntsu(codespaces)
Runtime: Deno latest(2023 9/1)
Code: [speed-test/speed.test.js]
</details>


## # Quick Start

### Add 
```js
import { $ } from "https://deno.land/x/freact/mod.ts";
```

**End!**
Too early!

## # How to syntax?

### @Tag
`$.{tagName}({attributes}, childrens...)`

**example**

*FReact*
```js
$.p({className: "text"}, "Hello world!")
```

*JSX*
```html
<p className="text">
  Hello world!
</p>
```

### @Component
`{tagName}({...props})`

**example**

*FReact*
```js
Box({color: "red"})
```

*JSX*
```html
<Box color="red" />
```


**if component need children node in component.**

`{tagName}({...props, children: {children}})`

**example**

*FReact*
```js
Box({color: "red", children: $.p({}, "Hello React!")})
```

*JSX*
```html
<Box color="red">
  Hello React!
</Box>
```

### # I want to use original tags!!

ok

Add in file
```js
import { useState } from "preact/hooks";
import { $ } from "https://deno.land/x/freact/mod.ts";

export default function Counter() {
  const [ count, setCount ] = useState(0);
  
  $.create("countNumber");

  return $.Fragment({}, 
    $.countNumber({}, count),
    $.button({ onClick: setCount(count++) }, "+")
  )
}

```