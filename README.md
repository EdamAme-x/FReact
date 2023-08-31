# React's new syntax sugar

### legacy
```jsx
<>
  <p className="text"><span>bbb</span>aaa</p>
  <butoon onClick={alert}>button</button>
  jsx
</>
```

### new
```js
$.Fragment({}, $.p({
	className: "text"
}, $.span({}, "bbb"), "aaa"), $.button({
	onClick: alert
}, "button"), "jsx")
```
