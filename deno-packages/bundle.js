var z=Object.create,E=Object.defineProperty,B=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyNames,W=Object.getPrototypeOf,Y=Object.prototype.hasOwnProperty,x=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),G=(e,t)=>{for(var r in t)E(e,r,{get:t[r],enumerable:!0})},S=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of H(t))!Y.call(e,o)&&o!==r&&E(e,o,{get:()=>t[o],enumerable:!(n=B(t,o))||n.enumerable});return e},y=(e,t,r)=>(S(e,t,"default"),r&&S(r,t,"default")),O=(e,t,r)=>(r=null!=e?z(W(e)):{},S(!t&&e&&e.__esModule?r:E(r,"default",{value:e,enumerable:!0}),e)),U=x((e=>{"use strict";var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function _(){}function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var v=h.prototype=new _;v.constructor=h,y(v,b.prototype),v.isPureReactComponent=!0;var E=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},g={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,n){var o,u={},a=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)S.call(r,o)&&!g.hasOwnProperty(o)&&(u[o]=r[o]);var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){for(var i=Array(s),l=0;l<s;l++)i[l]=arguments[l+2];u.children=i}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===u[o]&&(u[o]=s[o]);return{$$typeof:t,type:e,key:a,ref:c,props:u,_owner:C.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var $=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,n,o,u,a){var c=typeof e;("undefined"===c||"boolean"===c)&&(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case t:case r:s=!0}}if(s)return a=a(s=e),e=""===u?"."+w(s,0):u,E(a)?(o="",null!=e&&(o=e.replace($,"$&/")+"/"),k(a,n,o,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace($,"$&/")+"/")+e)),n.push(a)),1;if(s=0,u=""===u?".":u+":",E(e))for(var i=0;i<e.length;i++){var l=u+w(c=e[i],i);s+=k(c,n,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(c=e.next()).done;)s+=k(c=c.value,n,o,l=u+w(c,i++),a);else if("object"===c)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function x(e,t,r){if(null==e)return e;var n=[],o=0;return k(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)}),(function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},P={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:P,ReactCurrentOwner:C};e.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},e.Component=b,e.Fragment=n,e.Profiler=u,e.PureComponent=h,e.StrictMode=o,e.Suspense=i,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,e.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,c=C.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(i in r)S.call(r,i)&&!g.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==s?s[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){s=Array(i);for(var l=0;l<i;l++)s[l]=arguments[l+2];o.children=s}return{$$typeof:t,type:e.type,key:u,ref:a,props:o,_owner:c}},e.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},e.createElement=R,e.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:s,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:j}},e.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},e.startTransition=function(e){var t=P.transition;P.transition={};try{e()}finally{P.transition=t}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(e,t){return I.current.useCallback(e,t)},e.useContext=function(e){return I.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return I.current.useDeferredValue(e)},e.useEffect=function(e,t){return I.current.useEffect(e,t)},e.useId=function(){return I.current.useId()},e.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},e.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return I.current.useMemo(e,t)},e.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},e.useRef=function(e){return I.current.useRef(e)},e.useState=function(e){return I.current.useState(e)},e.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},e.useTransition=function(){return I.current.useTransition()},e.version="18.2.0"})),$=x(((e,t)=>{"use strict";t.exports=U()})),p={};G(p,{Children:()=>le,Component:()=>ae,Fragment:()=>pe,Profiler:()=>ye,PureComponent:()=>de,StrictMode:()=>_e,Suspense:()=>me,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>he,cloneElement:()=>ve,createContext:()=>Se,createElement:()=>Ee,createFactory:()=>Re,createRef:()=>Ce,default:()=>We,forwardRef:()=>ke,isValidElement:()=>we,lazy:()=>be,memo:()=>$e,startTransition:()=>xe,unstable_act:()=>Oe,useCallback:()=>je,useContext:()=>Ie,useDebugValue:()=>ge,useDeferredValue:()=>Pe,useEffect:()=>Te,useId:()=>De,useImperativeHandle:()=>Ve,useInsertionEffect:()=>Le,useLayoutEffect:()=>Ne,useMemo:()=>Fe,useReducer:()=>Ue,useRef:()=>qe,useState:()=>Ae,useSyncExternalStore:()=>Me,useTransition:()=>ze,version:()=>Be});var M=O($());y(p,O($()));var{Children:le,Component:ae,Fragment:pe,Profiler:ye,PureComponent:de,StrictMode:_e,Suspense:me,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:he,cloneElement:ve,createContext:Se,createElement:Ee,createFactory:Re,createRef:Ce,forwardRef:ke,isValidElement:we,lazy:be,memo:$e,startTransition:xe,unstable_act:Oe,useCallback:je,useContext:Ie,useDebugValue:ge,useDeferredValue:Pe,useEffect:Te,useId:De,useImperativeHandle:Ve,useInsertionEffect:Le,useLayoutEffect:Ne,useMemo:Fe,useReducer:Ue,useRef:qe,useState:Ae,useSyncExternalStore:Me,useTransition:ze,version:Be}=M,{default:A,...He}=M,We=void 0!==A?A:He;function CreateTree(...e){return We.createElement(...e)}class CCElement{name;converter;constructor(e){return this.name=e,this.converter=this.convert(),this}convert(){return(e,...t)=>{if("Fragment"===this.name)return t;return CreateTree(this.name,e,...t)}}}const defaultTags=["Fragment","a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"],$1={};for(const e of defaultTags)$1[e]=new CCElement(e).converter;$1.create=function(e){$1[e]=new CCElement(e)};export{$1 as $};