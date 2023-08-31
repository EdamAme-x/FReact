// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var w, d, j, b, $, z, H, N = {}, J = [], re = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, W = Array.isArray;
function k(e, t) {
    for(var _ in t)e[_] = t[_];
    return e;
}
function K(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function le(e, t, _) {
    var r, l, o, s = {};
    for(o in t)o == "key" ? r = t[o] : o == "ref" ? l = t[o] : s[o] = t[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? w.call(arguments, 2) : _), typeof e == "function" && e.defaultProps != null) for(o in e.defaultProps)s[o] === void 0 && (s[o] = e.defaultProps[o]);
    return S(e, s, r, l, null);
}
function S(e, t, _, r, l) {
    var o = {
        type: e,
        props: t,
        key: _,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: l ?? ++j
    };
    return l == null && d.vnode != null && d.vnode(o), o;
}
function A(e) {
    return e.children;
}
function T(e, t) {
    this.props = e, this.context = t;
}
function P(e, t) {
    if (t == null) return e.__ ? P(e.__, e.__.__k.indexOf(e) + 1) : null;
    for(var _; t < e.__k.length; t++)if ((_ = e.__k[t]) != null && _.__e != null) return _.__e;
    return typeof e.type == "function" ? P(e) : null;
}
function Q(e) {
    var t, _;
    if ((e = e.__) != null && e.__c != null) {
        for(e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)if ((_ = e.__k[t]) != null && _.__e != null) {
            e.__e = e.__c.base = _.__e;
            break;
        }
        return Q(e);
    }
}
function I(e) {
    (!e.__d && (e.__d = !0) && b.push(e) && !L.__r++ || $ !== d.debounceRendering) && (($ = d.debounceRendering) || z)(L);
}
function L() {
    var e, t, _, r, l, o, s, u;
    for(b.sort(H); e = b.shift();)e.__d && (t = b.length, r = void 0, l = void 0, s = (o = (_ = e).__v).__e, (u = _.__P) && (r = [], (l = k({}, o)).__v = o.__v + 1, O(u, o, l, _.__n, u.ownerSVGElement !== void 0, o.__h != null ? [
        s
    ] : null, r, s ?? P(o), o.__h), te(r, o), o.__e != s && Q(o)), b.length > t && b.sort(H));
    L.__r = 0;
}
function X(e, t, _, r, l, o, s, u, p, a) {
    var n, h, c, i, f, x, v, y = r && r.__k || J, g = y.length;
    for(_.__k = [], n = 0; n < t.length; n++)if ((i = _.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" ? S(null, i, null, null, i) : W(i) ? S(A, {
        children: i
    }, null, null, null) : i.__b > 0 ? S(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null) {
        if (i.__ = _, i.__b = _.__b + 1, (c = y[n]) === null || c && i.key == c.key && i.type === c.type) y[n] = void 0;
        else for(h = 0; h < g; h++){
            if ((c = y[h]) && i.key == c.key && i.type === c.type) {
                y[h] = void 0;
                break;
            }
            c = null;
        }
        O(e, i, c = c || N, l, o, s, u, p, a), f = i.__e, (h = i.ref) && c.ref != h && (v || (v = []), c.ref && v.push(c.ref, null, i), v.push(h, i.__c || f, i)), f != null ? (x == null && (x = f), typeof i.type == "function" && i.__k === c.__k ? i.__d = p = Y(i, p, e) : p = Z(e, i, c, y, f, p), typeof _.type == "function" && (_.__d = p)) : p && c.__e == p && p.parentNode != e && (p = P(c));
    }
    for(_.__e = x, n = g; n--;)y[n] != null && (typeof _.type == "function" && y[n].__e != null && y[n].__e == _.__d && (_.__d = ee(r).nextSibling), ne(y[n], y[n]));
    if (v) for(n = 0; n < v.length; n++)_e(v[n], v[++n], v[++n]);
}
function Y(e, t, _) {
    for(var r, l = e.__k, o = 0; l && o < l.length; o++)(r = l[o]) && (r.__ = e, t = typeof r.type == "function" ? Y(r, t, _) : Z(_, r, r, l, r.__e, t));
    return t;
}
function Z(e, t, _, r, l, o) {
    var s, u, p;
    if (t.__d !== void 0) s = t.__d, t.__d = void 0;
    else if (_ == null || l != o || l.parentNode == null) e: if (o == null || o.parentNode !== e) e.appendChild(l), s = null;
    else {
        for(u = o, p = 0; (u = u.nextSibling) && p < r.length; p += 1)if (u == l) break e;
        e.insertBefore(l, o), s = o;
    }
    return s !== void 0 ? s : l.nextSibling;
}
function ee(e) {
    var t, _, r;
    if (e.type == null || typeof e.type == "string") return e.__e;
    if (e.__k) {
        for(t = e.__k.length - 1; t >= 0; t--)if ((_ = e.__k[t]) && (r = ee(_))) return r;
    }
    return null;
}
function se(e, t, _, r, l) {
    var o;
    for(o in _)o === "children" || o === "key" || o in t || M(e, o, null, _[o], r);
    for(o in t)l && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || _[o] === t[o] || M(e, o, t[o], _[o], r);
}
function B(e, t, _) {
    t[0] === "-" ? e.setProperty(t, _ ?? "") : e[t] = _ == null ? "" : typeof _ != "number" || re.test(t) ? _ : _ + "px";
}
function M(e, t, _, r, l) {
    var o;
    e: if (t === "style") if (typeof _ == "string") e.style.cssText = _;
    else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r) for(t in r)_ && t in _ || B(e.style, t, "");
        if (_) for(t in _)r && _[t] === r[t] || B(e.style, t, _[t]);
    }
    else if (t[0] === "o" && t[1] === "n") o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = _, _ ? r || e.addEventListener(t, o ? V : G, o) : e.removeEventListener(t, o ? V : G, o);
    else if (t !== "dangerouslySetInnerHTML") {
        if (l) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e) try {
            e[t] = _ ?? "";
            break e;
        } catch  {}
        typeof _ == "function" || (_ == null || _ === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, _));
    }
}
function G(e) {
    return this.l[e.type + !1](d.event ? d.event(e) : e);
}
function V(e) {
    return this.l[e.type + !0](d.event ? d.event(e) : e);
}
function O(e, t, _, r, l, o, s, u, p) {
    var a, n, h, c, i, f, x, v, y, g, E, C, R, U, F, m = t.type;
    if (t.constructor !== void 0) return null;
    _.__h != null && (p = _.__h, u = t.__e = _.__e, t.__h = null, o = [
        u
    ]), (a = d.__b) && a(t);
    try {
        e: if (typeof m == "function") {
            if (v = t.props, y = (a = m.contextType) && r[a.__c], g = a ? y ? y.props.value : a.__ : r, _.__c ? x = (n = t.__c = _.__c).__ = n.__E : ("prototype" in m && m.prototype.render ? t.__c = n = new m(v, g) : (t.__c = n = new T(v, g), n.constructor = m, n.render = ce), y && y.sub(n), n.props = v, n.state || (n.state = {}), n.context = g, n.__n = r, h = n.__d = !0, n.__h = [], n._sb = []), n.__s == null && (n.__s = n.state), m.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = k({}, n.__s)), k(n.__s, m.getDerivedStateFromProps(v, n.__s))), c = n.props, i = n.state, n.__v = t, h) m.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(), n.componentDidMount != null && n.__h.push(n.componentDidMount);
            else {
                if (m.getDerivedStateFromProps == null && v !== c && n.componentWillReceiveProps != null && n.componentWillReceiveProps(v, g), !n.__e && n.shouldComponentUpdate != null && n.shouldComponentUpdate(v, n.__s, g) === !1 || t.__v === _.__v) {
                    for(t.__v !== _.__v && (n.props = v, n.state = n.__s, n.__d = !1), n.__e = !1, t.__e = _.__e, t.__k = _.__k, t.__k.forEach(function(D) {
                        D && (D.__ = t);
                    }), E = 0; E < n._sb.length; E++)n.__h.push(n._sb[E]);
                    n._sb = [], n.__h.length && s.push(n);
                    break e;
                }
                n.componentWillUpdate != null && n.componentWillUpdate(v, n.__s, g), n.componentDidUpdate != null && n.__h.push(function() {
                    n.componentDidUpdate(c, i, f);
                });
            }
            if (n.context = g, n.props = v, n.__P = e, C = d.__r, R = 0, "prototype" in m && m.prototype.render) {
                for(n.state = n.__s, n.__d = !1, C && C(t), a = n.render(n.props, n.state, n.context), U = 0; U < n._sb.length; U++)n.__h.push(n._sb[U]);
                n._sb = [];
            } else do n.__d = !1, C && C(t), a = n.render(n.props, n.state, n.context), n.state = n.__s;
            while (n.__d && ++R < 25)
            n.state = n.__s, n.getChildContext != null && (r = k(k({}, r), n.getChildContext())), h || n.getSnapshotBeforeUpdate == null || (f = n.getSnapshotBeforeUpdate(c, i)), X(e, W(F = a != null && a.type === A && a.key == null ? a.props.children : a) ? F : [
                F
            ], t, _, r, l, o, s, u, p), n.base = t.__e, t.__h = null, n.__h.length && s.push(n), x && (n.__E = n.__ = null), n.__e = !1;
        } else o == null && t.__v === _.__v ? (t.__k = _.__k, t.__e = _.__e) : t.__e = ue(_.__e, t, _, r, l, o, s, p);
        (a = d.diffed) && a(t);
    } catch (D) {
        t.__v = null, (p || o != null) && (t.__e = u, t.__h = !!p, o[o.indexOf(u)] = null), d.__e(D, t, _);
    }
}
function te(e, t) {
    d.__c && d.__c(t, e), e.some(function(_) {
        try {
            e = _.__h, _.__h = [], e.some(function(r) {
                r.call(_);
            });
        } catch (r) {
            d.__e(r, _.__v);
        }
    });
}
function ue(e, t, _, r, l, o, s, u) {
    var p, a, n, h = _.props, c = t.props, i = t.type, f = 0;
    if (i === "svg" && (l = !0), o != null) {
        for(; f < o.length; f++)if ((p = o[f]) && "setAttribute" in p == !!i && (i ? p.localName === i : p.nodeType === 3)) {
            e = p, o[f] = null;
            break;
        }
    }
    if (e == null) {
        if (i === null) return document.createTextNode(c);
        e = l ? document.createElementNS("http://www.w3.org/2000/svg", i) : document.createElement(i, c.is && c), o = null, u = !1;
    }
    if (i === null) h === c || u && e.data === c || (e.data = c);
    else {
        if (o = o && w.call(e.childNodes), a = (h = _.props || N).dangerouslySetInnerHTML, n = c.dangerouslySetInnerHTML, !u) {
            if (o != null) for(h = {}, f = 0; f < e.attributes.length; f++)h[e.attributes[f].name] = e.attributes[f].value;
            (n || a) && (n && (a && n.__html == a.__html || n.__html === e.innerHTML) || (e.innerHTML = n && n.__html || ""));
        }
        if (se(e, c, h, l, u), n) t.__k = [];
        else if (X(e, W(f = t.props.children) ? f : [
            f
        ], t, _, r, l && i !== "foreignObject", o, s, o ? o[0] : _.__k && P(_, 0), u), o != null) for(f = o.length; f--;)o[f] != null && K(o[f]);
        u || ("value" in c && (f = c.value) !== void 0 && (f !== e.value || i === "progress" && !f || i === "option" && f !== h.value) && M(e, "value", f, h.value, !1), "checked" in c && (f = c.checked) !== void 0 && f !== e.checked && M(e, "checked", f, h.checked, !1));
    }
    return e;
}
function _e(e, t, _) {
    try {
        typeof e == "function" ? e(t) : e.current = t;
    } catch (r) {
        d.__e(r, _);
    }
}
function ne(e, t, _) {
    var r, l;
    if (d.unmount && d.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || _e(r, null, t)), (r = e.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (o) {
            d.__e(o, t);
        }
        r.base = r.__P = null, e.__c = void 0;
    }
    if (r = e.__k) for(l = 0; l < r.length; l++)r[l] && ne(r[l], t, _ || typeof e.type != "function");
    _ || e.__e == null || K(e.__e), e.__ = e.__e = e.__d = void 0;
}
function ce(e, t, _) {
    return this.constructor(e, _);
}
function fe(e, t, _) {
    var r, l, o;
    d.__ && d.__(e, t), l = (r = typeof _ == "function") ? null : _ && _.__k || t.__k, o = [], O(t, e = (!r && _ || t).__k = le(A, null, [
        e
    ]), l || N, N, t.ownerSVGElement !== void 0, !r && _ ? [
        _
    ] : l ? null : t.firstChild ? w.call(t.childNodes) : null, o, !r && _ ? _ : l ? l.__e : t.firstChild, r), te(o, e);
}
w = J.slice, d = {
    __e: function(e, t, _, r) {
        for(var l, o, s; t = t.__;)if ((l = t.__c) && !l.__) try {
            if ((o = l.constructor) && o.getDerivedStateFromError != null && (l.setState(o.getDerivedStateFromError(e)), s = l.__d), l.componentDidCatch != null && (l.componentDidCatch(e, r || {}), s = l.__d), s) return l.__E = l;
        } catch (u) {
            e = u;
        }
        throw e;
    }
}, j = 0, T.prototype.setState = function(e, t) {
    var _;
    _ = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e == "function" && (e = e(k({}, _), this.props)), e && k(_, e), e != null && this.__v && (t && this._sb.push(t), I(this));
}, T.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), I(this));
}, T.prototype.render = A, b = [], z = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, H = function(e, t) {
    return e.__v.__b - t.__v.__b;
}, L.__r = 0, 0;

fe(__default(), document.getElementById("app"));
