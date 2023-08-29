# JSXのシンタックスシュガーを関数宣言で実現

### legacy
```jsx
<>
  <p className="text"><span>bbb</span>aaa</p>
  <butoon onClick={alert}>button</button>
  jsx
</>
```

### modern
```js
$.Fragment({}, $.p({
	className: "text"
}, $.span({}, "bbb"), "aaa"), $.button({
	onClick: alert
}, "button"), "jsx")
```
