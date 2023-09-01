export default function CreateTree(l, e, n) {
  var f,
    r,
    t,
    o = {};
  for (t in e)
    "key" == t ? (f = e[t]) : "ref" == t ? (r = e[t]) : (o[t] = e[t]);
  if (
    (arguments.length > 2 &&
      (o.children = arguments.length > 3 ? w.call(arguments, 2) : n),
    "function" == typeof l && null != l.defaultProps)
  )
    for (t in l.defaultProps) void 0 === o[t] && (o[t] = l.defaultProps[t]);
  return S(l, o, f, r, null);
}
