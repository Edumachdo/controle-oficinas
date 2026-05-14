function nf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function rf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rs = { exports: {} },
  yl = {},
  zs = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ar = Symbol.for("react.element"),
  lf = Symbol.for("react.portal"),
  of = Symbol.for("react.fragment"),
  uf = Symbol.for("react.strict_mode"),
  sf = Symbol.for("react.profiler"),
  af = Symbol.for("react.provider"),
  cf = Symbol.for("react.context"),
  ff = Symbol.for("react.forward_ref"),
  df = Symbol.for("react.suspense"),
  pf = Symbol.for("react.memo"),
  hf = Symbol.for("react.lazy"),
  fu = Symbol.iterator;
function mf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fu && e[fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Os = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Is = Object.assign,
  Ms = {};
function hn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ms),
    (this.updater = n || Os));
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ds() {}
Ds.prototype = hn.prototype;
function po(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ms),
    (this.updater = n || Os));
}
var ho = (po.prototype = new Ds());
ho.constructor = po;
Is(ho, hn.prototype);
ho.isPureReactComponent = !0;
var du = Array.isArray,
  Fs = Object.prototype.hasOwnProperty,
  mo = { current: null },
  Us = { key: !0, ref: !0, __self: !0, __source: !0 };
function $s(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Fs.call(t, r) && !Us.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ar,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: mo.current,
  };
}
function vf(e, t) {
  return {
    $$typeof: ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
}
function gf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pu = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gf("" + e.key)
    : t.toString(36);
}
function Ir(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ar:
          case lf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Bl(o, 0) : r),
      du(l)
        ? ((n = ""),
          e != null && (n = e.replace(pu, "$&/") + "/"),
          Ir(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (vo(l) &&
            (l = vf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(pu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), du(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Bl(i, u);
      o += Ir(i, t, n, s, l);
    }
  else if (((s = mf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      ((i = i.value), (s = r + Bl(i, u++)), (o += Ir(i, t, n, s, l)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ir(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function yf(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  Mr = { transition: null },
  xf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: mo,
  };
function As() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
O.Component = hn;
O.Fragment = of;
O.Profiler = sf;
O.PureComponent = po;
O.StrictMode = uf;
O.Suspense = df;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xf;
O.act = As;
O.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Is({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = mo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Fs.call(t, s) &&
        !Us.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ar, type: e.type, key: l, ref: i, props: r, _owner: o };
};
O.createContext = function (e) {
  return (
    (e = {
      $$typeof: cf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: af, _context: e }),
    (e.Consumer = e)
  );
};
O.createElement = $s;
O.createFactory = function (e) {
  var t = $s.bind(null, e);
  return ((t.type = e), t);
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (e) {
  return { $$typeof: ff, render: e };
};
O.isValidElement = vo;
O.lazy = function (e) {
  return { $$typeof: hf, _payload: { _status: -1, _result: e }, _init: yf };
};
O.memo = function (e, t) {
  return { $$typeof: pf, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function (e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
O.unstable_act = As;
O.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
O.useContext = function (e) {
  return ae.current.useContext(e);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
O.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
O.useId = function () {
  return ae.current.useId();
};
O.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
O.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
O.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
O.useRef = function (e) {
  return ae.current.useRef(e);
};
O.useState = function (e) {
  return ae.current.useState(e);
};
O.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function () {
  return ae.current.useTransition();
};
O.version = "18.3.1";
zs.exports = O;
var x = zs.exports;
const Bs = rf(x),
  wf = nf({ __proto__: null, default: Bs }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sf = x,
  kf = Symbol.for("react.element"),
  Cf = Symbol.for("react.fragment"),
  Ef = Object.prototype.hasOwnProperty,
  jf = Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Ef.call(t, r) && !Nf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: kf,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: jf.current,
  };
}
yl.Fragment = Cf;
yl.jsx = Vs;
yl.jsxs = Vs;
Rs.exports = yl;
var a = Rs.exports,
  hi = {},
  Ws = { exports: {} },
  Se = {},
  Hs = { exports: {} },
  Qs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, T) {
    var z = N.length;
    N.push(T);
    e: for (; 0 < z; ) {
      var K = (z - 1) >>> 1,
        Z = N[K];
      if (0 < l(Z, T)) ((N[K] = T), (N[z] = Z), (z = K));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var T = N[0],
      z = N.pop();
    if (z !== T) {
      N[0] = z;
      e: for (var K = 0, Z = N.length, hr = Z >>> 1; K < hr; ) {
        var kt = 2 * (K + 1) - 1,
          Al = N[kt],
          Ct = kt + 1,
          mr = N[Ct];
        if (0 > l(Al, z))
          Ct < Z && 0 > l(mr, Al)
            ? ((N[K] = mr), (N[Ct] = z), (K = Ct))
            : ((N[K] = Al), (N[kt] = z), (K = kt));
        else if (Ct < Z && 0 > l(mr, z)) ((N[K] = mr), (N[Ct] = z), (K = Ct));
        else break e;
      }
    }
    return T;
  }
  function l(N, T) {
    var z = N.sortIndex - T.sortIndex;
    return z !== 0 ? z : N.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    v = 3,
    w = !1,
    S = !1,
    g = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(N) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= N)
        (r(c), (T.sortIndex = T.expirationTime), t(s, T));
      else break;
      T = n(c);
    }
  }
  function y(N) {
    if (((g = !1), d(N), !S))
      if (n(s) !== null) ((S = !0), Ul(C));
      else {
        var T = n(c);
        T !== null && $l(y, T.startTime - N);
      }
  }
  function C(N, T) {
    ((S = !1), g && ((g = !1), p(L), (L = -1)), (w = !0));
    var z = v;
    try {
      for (
        d(T), h = n(s);
        h !== null && (!(h.expirationTime > T) || (N && !ve()));
      ) {
        var K = h.callback;
        if (typeof K == "function") {
          ((h.callback = null), (v = h.priorityLevel));
          var Z = K(h.expirationTime <= T);
          ((T = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(s) && r(s),
            d(T));
        } else r(s);
        h = n(s);
      }
      if (h !== null) var hr = !0;
      else {
        var kt = n(c);
        (kt !== null && $l(y, kt.startTime - T), (hr = !1));
      }
      return hr;
    } finally {
      ((h = null), (v = z), (w = !1));
    }
  }
  var P = !1,
    _ = null,
    L = -1,
    A = 5,
    R = -1;
  function ve() {
    return !(e.unstable_now() - R < A);
  }
  function wn() {
    if (_ !== null) {
      var N = e.unstable_now();
      R = N;
      var T = !0;
      try {
        T = _(!0, N);
      } finally {
        T ? Sn() : ((P = !1), (_ = null));
      }
    } else P = !1;
  }
  var Sn;
  if (typeof f == "function")
    Sn = function () {
      f(wn);
    };
  else if (typeof MessageChannel < "u") {
    var cu = new MessageChannel(),
      tf = cu.port2;
    ((cu.port1.onmessage = wn),
      (Sn = function () {
        tf.postMessage(null);
      }));
  } else
    Sn = function () {
      E(wn, 0);
    };
  function Ul(N) {
    ((_ = N), P || ((P = !0), Sn()));
  }
  function $l(N, T) {
    L = E(function () {
      N(e.unstable_now());
    }, T);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), Ul(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = v;
      }
      var z = v;
      v = T;
      try {
        return N();
      } finally {
        v = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, T) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var z = v;
      v = N;
      try {
        return T();
      } finally {
        v = z;
      }
    }),
    (e.unstable_scheduleCallback = function (N, T, z) {
      var K = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? K + z : K))
          : (z = K),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = z + Z),
        (N = {
          id: m++,
          callback: T,
          priorityLevel: N,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > K
          ? ((N.sortIndex = z),
            t(c, N),
            n(s) === null &&
              N === n(c) &&
              (g ? (p(L), (L = -1)) : (g = !0), $l(y, z - K)))
          : ((N.sortIndex = Z), t(s, N), S || w || ((S = !0), Ul(C))),
        N
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (N) {
      var T = v;
      return function () {
        var z = v;
        v = T;
        try {
          return N.apply(this, arguments);
        } finally {
          v = z;
        }
      };
    }));
})(Qs);
Hs.exports = Qs;
var Pf = Hs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _f = x,
  we = Pf;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ks = new Set(),
  Wn = {};
function Ft(e, t) {
  (on(e, t), on(e + "Capture", t));
}
function on(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) Ks.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  mi = Object.prototype.hasOwnProperty,
  Lf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hu = {},
  mu = {};
function Tf(e) {
  return mi.call(mu, e)
    ? !0
    : mi.call(hu, e)
      ? !1
      : Lf.test(e)
        ? (mu[e] = !0)
        : ((hu[e] = !0), !1);
}
function Rf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zf(e, t, n, r) {
  if (t === null || typeof t > "u" || Rf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o));
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var go = /[\-:]([a-z])/g;
function yo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(go, yo);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(go, yo);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(go, yo);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function xo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zf(t, n, l, r) && (n = null),
    r || l === null
      ? Tf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = _f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for("react.element"),
  Bt = Symbol.for("react.portal"),
  Vt = Symbol.for("react.fragment"),
  wo = Symbol.for("react.strict_mode"),
  vi = Symbol.for("react.profiler"),
  Ys = Symbol.for("react.provider"),
  Gs = Symbol.for("react.context"),
  So = Symbol.for("react.forward_ref"),
  gi = Symbol.for("react.suspense"),
  yi = Symbol.for("react.suspense_list"),
  ko = Symbol.for("react.memo"),
  tt = Symbol.for("react.lazy"),
  Xs = Symbol.for("react.offscreen"),
  vu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Vl;
function Tn(e) {
  if (Vl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vl = (t && t[1]) || "";
    }
  return (
    `
` +
    Vl +
    e
  );
}
var Wl = !1;
function Hl(e, t) {
  if (!e || Wl) return "";
  Wl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];
      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    ((Wl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Tn(e) : "";
}
function Of(e) {
  switch (e.tag) {
    case 5:
      return Tn(e.type);
    case 16:
      return Tn("Lazy");
    case 13:
      return Tn("Suspense");
    case 19:
      return Tn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Hl(e.type, !1)), e);
    case 11:
      return ((e = Hl(e.type.render, !1)), e);
    case 1:
      return ((e = Hl(e.type, !0)), e);
    default:
      return "";
  }
}
function xi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vt:
      return "Fragment";
    case Bt:
      return "Portal";
    case vi:
      return "Profiler";
    case wo:
      return "StrictMode";
    case gi:
      return "Suspense";
    case yi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Gs:
        return (e.displayName || "Context") + ".Consumer";
      case Ys:
        return (e._context.displayName || "Context") + ".Provider";
      case So:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ko:
        return (
          (t = e.displayName || null),
          t !== null ? t : xi(e.type) || "Memo"
        );
      case tt:
        ((t = e._payload), (e = e._init));
        try {
          return xi(e(t));
        } catch {}
    }
  return null;
}
function If(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xi(t);
    case 8:
      return t === wo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Js(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mf(e) {
  var t = Js(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          ((r = "" + o), i.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function yr(e) {
  e._valueTracker || (e._valueTracker = Mf(e));
}
function Zs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Js(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Kr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wi(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function qs(e, t) {
  ((t = t.checked), t != null && xo(e, "checked", t, !1));
}
function Si(e, t) {
  qs(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ki(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ki(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function yu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ki(e, t, n) {
  (t !== "number" || Kr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function bt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ci(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: gt(n) };
}
function bs(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ea(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ea(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var xr,
  ta = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xr = xr || document.createElement("div"),
          xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var In = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Df = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function (e) {
  Df.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
  });
});
function na(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
      ? ("" + t).trim()
      : t + "px";
}
function ra(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = na(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Ff = H(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ji(e, t) {
  if (t) {
    if (Ff[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ni(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pi = null;
function Co(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _i = null,
  en = null,
  tn = null;
function Su(e) {
  if ((e = dr(e))) {
    if (typeof _i != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Cl(t)), _i(e.stateNode, e.type, t));
  }
}
function la(e) {
  en ? (tn ? tn.push(e) : (tn = [e])) : (en = e);
}
function ia() {
  if (en) {
    var e = en,
      t = tn;
    if (((tn = en = null), Su(e), t)) for (e = 0; e < t.length; e++) Su(t[e]);
  }
}
function oa(e, t) {
  return e(t);
}
function ua() {}
var Ql = !1;
function sa(e, t, n) {
  if (Ql) return e(t, n);
  Ql = !0;
  try {
    return oa(e, t, n);
  } finally {
    ((Ql = !1), (en !== null || tn !== null) && (ua(), ia()));
  }
}
function Qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Li = !1;
if (Ye)
  try {
    var Cn = {};
    (Object.defineProperty(Cn, "passive", {
      get: function () {
        Li = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn));
  } catch {
    Li = !1;
  }
function Uf(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Mn = !1,
  Yr = null,
  Gr = !1,
  Ti = null,
  $f = {
    onError: function (e) {
      ((Mn = !0), (Yr = e));
    },
  };
function Af(e, t, n, r, l, i, o, u, s) {
  ((Mn = !1), (Yr = null), Uf.apply($f, arguments));
}
function Bf(e, t, n, r, l, i, o, u, s) {
  if ((Af.apply(this, arguments), Mn)) {
    if (Mn) {
      var c = Yr;
      ((Mn = !1), (Yr = null));
    } else throw Error(k(198));
    Gr || ((Gr = !0), (Ti = c));
  }
}
function Ut(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function aa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ku(e) {
  if (Ut(e) !== e) throw Error(k(188));
}
function Vf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ut(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return (ku(l), e);
        if (i === r) return (ku(l), t);
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) ((n = l), (r = i));
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          ((o = !0), (n = l), (r = i));
          break;
        }
        if (u === r) {
          ((o = !0), (r = l), (n = i));
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            ((o = !0), (n = i), (r = l));
            break;
          }
          if (u === r) {
            ((o = !0), (r = i), (n = l));
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function ca(e) {
  return ((e = Vf(e)), e !== null ? fa(e) : null);
}
function fa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var da = we.unstable_scheduleCallback,
  Cu = we.unstable_cancelCallback,
  Wf = we.unstable_shouldYield,
  Hf = we.unstable_requestPaint,
  Y = we.unstable_now,
  Qf = we.unstable_getCurrentPriorityLevel,
  Eo = we.unstable_ImmediatePriority,
  pa = we.unstable_UserBlockingPriority,
  Xr = we.unstable_NormalPriority,
  Kf = we.unstable_LowPriority,
  ha = we.unstable_IdlePriority,
  xl = null,
  Ae = null;
function Yf(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : Jf,
  Gf = Math.log,
  Xf = Math.LN2;
function Jf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Gf(e) / Xf) | 0)) | 0);
}
var wr = 64,
  Sr = 4194304;
function zn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = zn(u)) : ((i &= o), i !== 0 && (r = zn(i)));
  } else ((o = n & ~l), o !== 0 ? (r = zn(o)) : i !== 0 && (r = zn(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Zf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    (s === -1
      ? (!(u & n) || u & r) && (l[o] = Zf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u));
  }
}
function Ri(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ma() {
  var e = wr;
  return ((wr <<= 1), !(wr & 4194240) && (wr = 64), e);
}
function Kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n));
}
function bf(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i));
  }
}
function jo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var M = 0;
function va(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ga,
  No,
  ya,
  xa,
  wa,
  zi = !1,
  kr = [],
  st = null,
  at = null,
  ct = null,
  Kn = new Map(),
  Yn = new Map(),
  rt = [],
  ed =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ct = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = dr(t)), t !== null && No(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function td(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((st = En(st, e, t, n, r, l)), !0);
    case "dragenter":
      return ((at = En(at, e, t, n, r, l)), !0);
    case "mouseover":
      return ((ct = En(ct, e, t, n, r, l)), !0);
    case "pointerover":
      var i = l.pointerId;
      return (Kn.set(i, En(Kn.get(i) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (i = l.pointerId),
        Yn.set(i, En(Yn.get(i) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Sa(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = aa(n)), t !== null)) {
          ((e.blockedOn = t),
            wa(e.priority, function () {
              ya(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Pi = r), n.target.dispatchEvent(r), (Pi = null));
    } else return ((t = dr(n)), t !== null && No(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function ju(e, t, n) {
  Dr(e) && n.delete(t);
}
function nd() {
  ((zi = !1),
    st !== null && Dr(st) && (st = null),
    at !== null && Dr(at) && (at = null),
    ct !== null && Dr(ct) && (ct = null),
    Kn.forEach(ju),
    Yn.forEach(ju));
}
function jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zi ||
      ((zi = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, nd)));
}
function Gn(e) {
  function t(l) {
    return jn(l, e);
  }
  if (0 < kr.length) {
    jn(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && jn(st, e),
      at !== null && jn(at, e),
      ct !== null && jn(ct, e),
      Kn.forEach(t),
      Yn.forEach(t),
      n = 0;
    n < rt.length;
    n++
  )
    ((r = rt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < rt.length && ((n = rt[0]), n.blockedOn === null); )
    (Sa(n), n.blockedOn === null && rt.shift());
}
var nn = Ze.ReactCurrentBatchConfig,
  Zr = !0;
function rd(e, t, n, r) {
  var l = M,
    i = nn.transition;
  nn.transition = null;
  try {
    ((M = 1), Po(e, t, n, r));
  } finally {
    ((M = l), (nn.transition = i));
  }
}
function ld(e, t, n, r) {
  var l = M,
    i = nn.transition;
  nn.transition = null;
  try {
    ((M = 4), Po(e, t, n, r));
  } finally {
    ((M = l), (nn.transition = i));
  }
}
function Po(e, t, n, r) {
  if (Zr) {
    var l = Oi(e, t, n, r);
    if (l === null) (ni(e, t, r, qr, n), Eu(e, r));
    else if (td(l, e, t, n, r)) r.stopPropagation();
    else if ((Eu(e, r), t & 4 && -1 < ed.indexOf(e))) {
      for (; l !== null; ) {
        var i = dr(l);
        if (
          (i !== null && ga(i),
          (i = Oi(e, t, n, r)),
          i === null && ni(e, t, r, qr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ni(e, t, r, null, n);
  }
}
var qr = null;
function Oi(e, t, n, r) {
  if (((qr = null), (e = Co(r)), (e = Pt(e)), e !== null))
    if (((t = Ut(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = aa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((qr = e), null);
}
function ka(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Qf()) {
        case Eo:
          return 1;
        case pa:
          return 4;
        case Xr:
        case Kf:
          return 16;
        case ha:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null,
  _o = null,
  Fr = null;
function Ca() {
  if (Fr) return Fr;
  var e,
    t = _o,
    n = t.length,
    r,
    l = "value" in it ? it.value : it.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Fr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cr() {
  return !0;
}
function Nu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null));
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Cr
        : Nu),
      (this.isPropagationStopped = Nu),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cr));
      },
      persist: function () {},
      isPersistent: Cr,
    }),
    t
  );
}
var mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Lo = ke(mn),
  fr = H({}, mn, { view: 0, detail: 0 }),
  id = ke(fr),
  Yl,
  Gl,
  Nn,
  wl = H({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: To,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nn &&
            (Nn && e.type === "mousemove"
              ? ((Yl = e.screenX - Nn.screenX), (Gl = e.screenY - Nn.screenY))
              : (Gl = Yl = 0),
            (Nn = e)),
          Yl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gl;
    },
  }),
  Pu = ke(wl),
  od = H({}, wl, { dataTransfer: 0 }),
  ud = ke(od),
  sd = H({}, fr, { relatedTarget: 0 }),
  Xl = ke(sd),
  ad = H({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cd = ke(ad),
  fd = H({}, mn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dd = ke(fd),
  pd = H({}, mn, { data: 0 }),
  _u = ke(pd),
  hd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  md = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vd[e]) ? !!t[e] : !1;
}
function To() {
  return gd;
}
var yd = H({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = hd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? md[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: To,
    charCode: function (e) {
      return e.type === "keypress" ? Ur(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ur(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  xd = ke(yd),
  wd = H({}, wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Lu = ke(wd),
  Sd = H({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: To,
  }),
  kd = ke(Sd),
  Cd = H({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ed = ke(Cd),
  jd = H({}, wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Nd = ke(jd),
  Pd = [9, 13, 27, 32],
  Ro = Ye && "CompositionEvent" in window,
  Dn = null;
Ye && "documentMode" in document && (Dn = document.documentMode);
var _d = Ye && "TextEvent" in window && !Dn,
  Ea = Ye && (!Ro || (Dn && 8 < Dn && 11 >= Dn)),
  Tu = " ",
  Ru = !1;
function ja(e, t) {
  switch (e) {
    case "keyup":
      return Pd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Na(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Wt = !1;
function Ld(e, t) {
  switch (e) {
    case "compositionend":
      return Na(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ru = !0), Tu);
    case "textInput":
      return ((e = t.data), e === Tu && Ru ? null : e);
    default:
      return null;
  }
}
function Td(e, t) {
  if (Wt)
    return e === "compositionend" || (!Ro && ja(e, t))
      ? ((e = Ca()), (Fr = _o = it = null), (Wt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ea && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rd[e.type] : t === "textarea";
}
function Pa(e, t, n, r) {
  (la(r),
    (t = br(t, "onChange")),
    0 < t.length &&
      ((n = new Lo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Fn = null,
  Xn = null;
function zd(e) {
  Ua(e, 0);
}
function Sl(e) {
  var t = Kt(e);
  if (Zs(t)) return e;
}
function Od(e, t) {
  if (e === "change") return t;
}
var _a = !1;
if (Ye) {
  var Jl;
  if (Ye) {
    var Zl = "oninput" in document;
    if (!Zl) {
      var Ou = document.createElement("div");
      (Ou.setAttribute("oninput", "return;"),
        (Zl = typeof Ou.oninput == "function"));
    }
    Jl = Zl;
  } else Jl = !1;
  _a = Jl && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  Fn && (Fn.detachEvent("onpropertychange", La), (Xn = Fn = null));
}
function La(e) {
  if (e.propertyName === "value" && Sl(Xn)) {
    var t = [];
    (Pa(t, Xn, e, Co(e)), sa(zd, t));
  }
}
function Id(e, t, n) {
  e === "focusin"
    ? (Iu(), (Fn = t), (Xn = n), Fn.attachEvent("onpropertychange", La))
    : e === "focusout" && Iu();
}
function Md(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sl(Xn);
}
function Dd(e, t) {
  if (e === "click") return Sl(t);
}
function Fd(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function Ud(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Ud;
function Jn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!mi.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Mu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Du(e, t) {
  var n = Mu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mu(n);
  }
}
function Ta(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ta(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ra() {
  for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kr(e.document);
  }
  return t;
}
function zo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $d(e) {
  var t = Ra(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ta(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        ((r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Du(n, i)));
        var o = Du(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Ad = Ye && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  Ii = null,
  Un = null,
  Mi = !1;
function Fu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mi ||
    Ht == null ||
    Ht !== Kr(r) ||
    ((r = Ht),
    "selectionStart" in r && zo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && Jn(Un, r)) ||
      ((Un = r),
      (r = br(Ii, "onSelect")),
      0 < r.length &&
        ((t = new Lo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function Er(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qt = {
    animationend: Er("Animation", "AnimationEnd"),
    animationiteration: Er("Animation", "AnimationIteration"),
    animationstart: Er("Animation", "AnimationStart"),
    transitionend: Er("Transition", "TransitionEnd"),
  },
  ql = {},
  za = {};
Ye &&
  ((za = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qt.animationend.animation,
    delete Qt.animationiteration.animation,
    delete Qt.animationstart.animation),
  "TransitionEvent" in window || delete Qt.transitionend.transition);
function kl(e) {
  if (ql[e]) return ql[e];
  if (!Qt[e]) return e;
  var t = Qt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in za) return (ql[e] = t[n]);
  return e;
}
var Oa = kl("animationend"),
  Ia = kl("animationiteration"),
  Ma = kl("animationstart"),
  Da = kl("transitionend"),
  Fa = new Map(),
  Uu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function xt(e, t) {
  (Fa.set(e, t), Ft(t, [e]));
}
for (var bl = 0; bl < Uu.length; bl++) {
  var ei = Uu[bl],
    Bd = ei.toLowerCase(),
    Vd = ei[0].toUpperCase() + ei.slice(1);
  xt(Bd, "on" + Vd);
}
xt(Oa, "onAnimationEnd");
xt(Ia, "onAnimationIteration");
xt(Ma, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(Da, "onTransitionEnd");
on("onMouseEnter", ["mouseout", "mouseover"]);
on("onMouseLeave", ["mouseout", "mouseover"]);
on("onPointerEnter", ["pointerout", "pointerover"]);
on("onPointerLeave", ["pointerout", "pointerover"]);
Ft(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ft(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ft(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ft(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var On =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function $u(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Bf(r, t, void 0, e), (e.currentTarget = null));
}
function Ua(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          ($u(l, u, c), (i = s));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          ($u(l, u, c), (i = s));
        }
    }
  }
  if (Gr) throw ((e = Ti), (Gr = !1), (Ti = null), e);
}
function F(e, t) {
  var n = t[Ai];
  n === void 0 && (n = t[Ai] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($a(t, e, 2, !1), n.add(r));
}
function ti(e, t, n) {
  var r = 0;
  (t && (r |= 4), $a(n, e, r, t));
}
var jr = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[jr]) {
    ((e[jr] = !0),
      Ks.forEach(function (n) {
        n !== "selectionchange" && (Wd.has(n) || ti(n, !1, e), ti(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jr] || ((t[jr] = !0), ti("selectionchange", !1, t));
  }
}
function $a(e, t, n, r) {
  switch (ka(t)) {
    case 1:
      var l = rd;
      break;
    case 4:
      l = ld;
      break;
    default:
      l = Po;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Li ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function ni(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Pt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  sa(function () {
    var c = i,
      m = Co(n),
      h = [];
    e: {
      var v = Fa.get(e);
      if (v !== void 0) {
        var w = Lo,
          S = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = xd;
            break;
          case "focusin":
            ((S = "focus"), (w = Xl));
            break;
          case "focusout":
            ((S = "blur"), (w = Xl));
            break;
          case "beforeblur":
          case "afterblur":
            w = Xl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = ud;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = kd;
            break;
          case Oa:
          case Ia:
          case Ma:
            w = cd;
            break;
          case Da:
            w = Ed;
            break;
          case "scroll":
            w = id;
            break;
          case "wheel":
            w = Nd;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = dd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Lu;
        }
        var g = (t & 4) !== 0,
          E = !g && e === "scroll",
          p = g ? (v !== null ? v + "Capture" : null) : v;
        g = [];
        for (var f = c, d; f !== null; ) {
          d = f;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y),
              p !== null && ((y = Qn(f, p)), y != null && g.push(qn(f, y, d)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((v = new w(v, S, null, n, m)), h.push({ event: v, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Pi &&
            (S = n.relatedTarget || n.fromElement) &&
            (Pt(S) || S[Ge]))
        )
          break e;
        if (
          (w || v) &&
          ((v =
            m.window === m
              ? m
              : (v = m.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = c),
              (S = S ? Pt(S) : null),
              S !== null &&
                ((E = Ut(S)), S !== E || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = c)),
          w !== S)
        ) {
          if (
            ((g = Pu),
            (y = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Lu),
              (y = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (E = w == null ? v : Kt(w)),
            (d = S == null ? v : Kt(S)),
            (v = new g(y, f + "leave", w, n, m)),
            (v.target = E),
            (v.relatedTarget = d),
            (y = null),
            Pt(m) === c &&
              ((g = new g(p, f + "enter", S, n, m)),
              (g.target = d),
              (g.relatedTarget = E),
              (y = g)),
            (E = y),
            w && S)
          )
            t: {
              for (g = w, p = S, f = 0, d = g; d; d = At(d)) f++;
              for (d = 0, y = p; y; y = At(y)) d++;
              for (; 0 < f - d; ) ((g = At(g)), f--);
              for (; 0 < d - f; ) ((p = At(p)), d--);
              for (; f--; ) {
                if (g === p || (p !== null && g === p.alternate)) break t;
                ((g = At(g)), (p = At(p)));
              }
              g = null;
            }
          else g = null;
          (w !== null && Au(h, v, w, g, !1),
            S !== null && E !== null && Au(h, E, S, g, !0));
        }
      }
      e: {
        if (
          ((v = c ? Kt(c) : window),
          (w = v.nodeName && v.nodeName.toLowerCase()),
          w === "select" || (w === "input" && v.type === "file"))
        )
          var C = Od;
        else if (zu(v))
          if (_a) C = Fd;
          else {
            C = Md;
            var P = Id;
          }
        else
          (w = v.nodeName) &&
            w.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (C = Dd);
        if (C && (C = C(e, c))) {
          Pa(h, C, n, m);
          break e;
        }
        (P && P(e, v, c),
          e === "focusout" &&
            (P = v._wrapperState) &&
            P.controlled &&
            v.type === "number" &&
            ki(v, "number", v.value));
      }
      switch (((P = c ? Kt(c) : window), e)) {
        case "focusin":
          (zu(P) || P.contentEditable === "true") &&
            ((Ht = P), (Ii = c), (Un = null));
          break;
        case "focusout":
          Un = Ii = Ht = null;
          break;
        case "mousedown":
          Mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Mi = !1), Fu(h, n, m));
          break;
        case "selectionchange":
          if (Ad) break;
        case "keydown":
        case "keyup":
          Fu(h, n, m);
      }
      var _;
      if (Ro)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Wt
          ? ja(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      (L &&
        (Ea &&
          n.locale !== "ko" &&
          (Wt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Wt && (_ = Ca())
            : ((it = m),
              (_o = "value" in it ? it.value : it.textContent),
              (Wt = !0))),
        (P = br(c, L)),
        0 < P.length &&
          ((L = new _u(L, e, null, n, m)),
          h.push({ event: L, listeners: P }),
          _ ? (L.data = _) : ((_ = Na(n)), _ !== null && (L.data = _)))),
        (_ = _d ? Ld(e, n) : Td(e, n)) &&
          ((c = br(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new _u("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = _))));
    }
    Ua(h, t);
  });
}
function qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function br(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    (l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Qn(e, n)),
      i != null && r.unshift(qn(e, i, l)),
      (i = Qn(e, t)),
      i != null && r.push(qn(e, i, l))),
      (e = e.return));
  }
  return r;
}
function At(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Au(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    (u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Qn(n, i)), s != null && o.unshift(qn(n, s, u)))
        : l || ((s = Qn(n, i)), s != null && o.push(qn(n, s, u)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Hd = /\r\n?/g,
  Qd = /\u0000|\uFFFD/g;
function Bu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hd,
      `
`,
    )
    .replace(Qd, "");
}
function Nr(e, t, n) {
  if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(k(425));
}
function el() {}
var Di = null,
  Fi = null;
function Ui(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $i = typeof setTimeout == "function" ? setTimeout : void 0,
  Kd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vu = typeof Promise == "function" ? Promise : void 0,
  Yd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vu < "u"
        ? function (e) {
            return Vu.resolve(null).then(e).catch(Gd);
          }
        : $i;
function Gd(e) {
  setTimeout(function () {
    throw e;
  });
}
function ri(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Gn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Gn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + vn,
  bn = "__reactProps$" + vn,
  Ge = "__reactContainer$" + vn,
  Ai = "__reactEvents$" + vn,
  Xd = "__reactListeners$" + vn,
  Jd = "__reactHandles$" + vn;
function Pt(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wu(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Wu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function dr(e) {
  return (
    (e = e[Ue] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Cl(e) {
  return e[bn] || null;
}
var Bi = [],
  Yt = -1;
function wt(e) {
  return { current: e };
}
function U(e) {
  0 > Yt || ((e.current = Bi[Yt]), (Bi[Yt] = null), Yt--);
}
function D(e, t) {
  (Yt++, (Bi[Yt] = e.current), (e.current = t));
}
var yt = {},
  oe = wt(yt),
  pe = wt(!1),
  zt = yt;
function un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return ((e = e.childContextTypes), e != null);
}
function tl() {
  (U(pe), U(oe));
}
function Hu(e, t, n) {
  if (oe.current !== yt) throw Error(k(168));
  (D(oe, t), D(pe, n));
}
function Aa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, If(e) || "Unknown", l));
  return H({}, n, r);
}
function nl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yt),
    (zt = oe.current),
    D(oe, e),
    D(pe, pe.current),
    !0
  );
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  (n
    ? ((e = Aa(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(oe),
      D(oe, e))
    : U(pe),
    D(pe, n));
}
var We = null,
  El = !1,
  li = !1;
function Ba(e) {
  We === null ? (We = [e]) : We.push(e);
}
function Zd(e) {
  ((El = !0), Ba(e));
}
function St() {
  if (!li && We !== null) {
    li = !0;
    var e = 0,
      t = M;
    try {
      var n = We;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((We = null), (El = !1));
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), da(Eo, St), l);
    } finally {
      ((M = t), (li = !1));
    }
  }
  return null;
}
var Gt = [],
  Xt = 0,
  rl = null,
  ll = 0,
  Ce = [],
  Ee = 0,
  Ot = null,
  He = 1,
  Qe = "";
function Et(e, t) {
  ((Gt[Xt++] = ll), (Gt[Xt++] = rl), (rl = e), (ll = t));
}
function Va(e, t, n) {
  ((Ce[Ee++] = He), (Ce[Ee++] = Qe), (Ce[Ee++] = Ot), (Ot = e));
  var r = He;
  e = Qe;
  var l = 32 - Oe(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    ((i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (He = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Qe = i + e));
  } else ((He = (1 << i) | (n << l) | r), (Qe = e));
}
function Oo(e) {
  e.return !== null && (Et(e, 1), Va(e, 1, 0));
}
function Io(e) {
  for (; e === rl; )
    ((rl = Gt[--Xt]), (Gt[Xt] = null), (ll = Gt[--Xt]), (Gt[Xt] = null));
  for (; e === Ot; )
    ((Ot = Ce[--Ee]),
      (Ce[Ee] = null),
      (Qe = Ce[--Ee]),
      (Ce[Ee] = null),
      (He = Ce[--Ee]),
      (Ce[Ee] = null));
}
var xe = null,
  ye = null,
  $ = !1,
  ze = null;
function Wa(e, t) {
  var n = je(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (ye = ft(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (ye = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ot !== null ? { id: He, overflow: Qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (ye = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Vi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wi(e) {
  if ($) {
    var t = ye;
    if (t) {
      var n = t;
      if (!Ku(e, t)) {
        if (Vi(e)) throw Error(k(418));
        t = ft(n.nextSibling);
        var r = xe;
        t && Ku(e, t)
          ? Wa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (xe = e));
      }
    } else {
      if (Vi(e)) throw Error(k(418));
      ((e.flags = (e.flags & -4097) | 2), ($ = !1), (xe = e));
    }
  }
}
function Yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function Pr(e) {
  if (e !== xe) return !1;
  if (!$) return (Yu(e), ($ = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps))),
    t && (t = ye))
  ) {
    if (Vi(e)) throw (Ha(), Error(k(418)));
    for (; t; ) (Wa(e, t), (t = ft(t.nextSibling)));
  }
  if ((Yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ye = ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ye = null;
    }
  } else ye = xe ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Ha() {
  for (var e = ye; e; ) e = ft(e.nextSibling);
}
function sn() {
  ((ye = xe = null), ($ = !1));
}
function Mo(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var qd = Ze.ReactCurrentBatchConfig;
function Pn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Gu(e) {
  var t = e._init;
  return t(e._payload);
}
function Qa(e) {
  function t(p, f) {
    if (e) {
      var d = p.deletions;
      d === null ? ((p.deletions = [f]), (p.flags |= 16)) : d.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) (t(p, f), (f = f.sibling));
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      (f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling));
    return p;
  }
  function l(p, f) {
    return ((p = mt(p, f)), (p.index = 0), (p.sibling = null), p);
  }
  function i(p, f, d) {
    return (
      (p.index = d),
      e
        ? ((d = p.alternate),
          d !== null
            ? ((d = d.index), d < f ? ((p.flags |= 2), f) : d)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function u(p, f, d, y) {
    return f === null || f.tag !== 6
      ? ((f = fi(d, p.mode, y)), (f.return = p), f)
      : ((f = l(f, d)), (f.return = p), f);
  }
  function s(p, f, d, y) {
    var C = d.type;
    return C === Vt
      ? m(p, f, d.props.children, y, d.key)
      : f !== null &&
          (f.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === tt &&
              Gu(C) === f.type))
        ? ((y = l(f, d.props)), (y.ref = Pn(p, f, d)), (y.return = p), y)
        : ((y = Qr(d.type, d.key, d.props, null, p.mode, y)),
          (y.ref = Pn(p, f, d)),
          (y.return = p),
          y);
  }
  function c(p, f, d, y) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== d.containerInfo ||
      f.stateNode.implementation !== d.implementation
      ? ((f = di(d, p.mode, y)), (f.return = p), f)
      : ((f = l(f, d.children || [])), (f.return = p), f);
  }
  function m(p, f, d, y, C) {
    return f === null || f.tag !== 7
      ? ((f = Rt(d, p.mode, y, C)), (f.return = p), f)
      : ((f = l(f, d)), (f.return = p), f);
  }
  function h(p, f, d) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = fi("" + f, p.mode, d)), (f.return = p), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case gr:
          return (
            (d = Qr(f.type, f.key, f.props, null, p.mode, d)),
            (d.ref = Pn(p, null, f)),
            (d.return = p),
            d
          );
        case Bt:
          return ((f = di(f, p.mode, d)), (f.return = p), f);
        case tt:
          var y = f._init;
          return h(p, y(f._payload), d);
      }
      if (Rn(f) || kn(f))
        return ((f = Rt(f, p.mode, d, null)), (f.return = p), f);
      _r(p, f);
    }
    return null;
  }
  function v(p, f, d, y) {
    var C = f !== null ? f.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : u(p, f, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case gr:
          return d.key === C ? s(p, f, d, y) : null;
        case Bt:
          return d.key === C ? c(p, f, d, y) : null;
        case tt:
          return ((C = d._init), v(p, f, C(d._payload), y));
      }
      if (Rn(d) || kn(d)) return C !== null ? null : m(p, f, d, y, null);
      _r(p, d);
    }
    return null;
  }
  function w(p, f, d, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((p = p.get(d) || null), u(f, p, "" + y, C));
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case gr:
          return (
            (p = p.get(y.key === null ? d : y.key) || null),
            s(f, p, y, C)
          );
        case Bt:
          return (
            (p = p.get(y.key === null ? d : y.key) || null),
            c(f, p, y, C)
          );
        case tt:
          var P = y._init;
          return w(p, f, d, P(y._payload), C);
      }
      if (Rn(y) || kn(y)) return ((p = p.get(d) || null), m(f, p, y, C, null));
      _r(f, y);
    }
    return null;
  }
  function S(p, f, d, y) {
    for (
      var C = null, P = null, _ = f, L = (f = 0), A = null;
      _ !== null && L < d.length;
      L++
    ) {
      _.index > L ? ((A = _), (_ = null)) : (A = _.sibling);
      var R = v(p, _, d[L], y);
      if (R === null) {
        _ === null && (_ = A);
        break;
      }
      (e && _ && R.alternate === null && t(p, _),
        (f = i(R, f, L)),
        P === null ? (C = R) : (P.sibling = R),
        (P = R),
        (_ = A));
    }
    if (L === d.length) return (n(p, _), $ && Et(p, L), C);
    if (_ === null) {
      for (; L < d.length; L++)
        ((_ = h(p, d[L], y)),
          _ !== null &&
            ((f = i(_, f, L)),
            P === null ? (C = _) : (P.sibling = _),
            (P = _)));
      return ($ && Et(p, L), C);
    }
    for (_ = r(p, _); L < d.length; L++)
      ((A = w(_, p, L, d[L], y)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? L : A.key),
          (f = i(A, f, L)),
          P === null ? (C = A) : (P.sibling = A),
          (P = A)));
    return (
      e &&
        _.forEach(function (ve) {
          return t(p, ve);
        }),
      $ && Et(p, L),
      C
    );
  }
  function g(p, f, d, y) {
    var C = kn(d);
    if (typeof C != "function") throw Error(k(150));
    if (((d = C.call(d)), d == null)) throw Error(k(151));
    for (
      var P = (C = null), _ = f, L = (f = 0), A = null, R = d.next();
      _ !== null && !R.done;
      L++, R = d.next()
    ) {
      _.index > L ? ((A = _), (_ = null)) : (A = _.sibling);
      var ve = v(p, _, R.value, y);
      if (ve === null) {
        _ === null && (_ = A);
        break;
      }
      (e && _ && ve.alternate === null && t(p, _),
        (f = i(ve, f, L)),
        P === null ? (C = ve) : (P.sibling = ve),
        (P = ve),
        (_ = A));
    }
    if (R.done) return (n(p, _), $ && Et(p, L), C);
    if (_ === null) {
      for (; !R.done; L++, R = d.next())
        ((R = h(p, R.value, y)),
          R !== null &&
            ((f = i(R, f, L)),
            P === null ? (C = R) : (P.sibling = R),
            (P = R)));
      return ($ && Et(p, L), C);
    }
    for (_ = r(p, _); !R.done; L++, R = d.next())
      ((R = w(_, p, L, R.value, y)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? L : R.key),
          (f = i(R, f, L)),
          P === null ? (C = R) : (P.sibling = R),
          (P = R)));
    return (
      e &&
        _.forEach(function (wn) {
          return t(p, wn);
        }),
      $ && Et(p, L),
      C
    );
  }
  function E(p, f, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Vt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case gr:
          e: {
            for (var C = d.key, P = f; P !== null; ) {
              if (P.key === C) {
                if (((C = d.type), C === Vt)) {
                  if (P.tag === 7) {
                    (n(p, P.sibling),
                      (f = l(P, d.props.children)),
                      (f.return = p),
                      (p = f));
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === tt &&
                    Gu(C) === P.type)
                ) {
                  (n(p, P.sibling),
                    (f = l(P, d.props)),
                    (f.ref = Pn(p, P, d)),
                    (f.return = p),
                    (p = f));
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            d.type === Vt
              ? ((f = Rt(d.props.children, p.mode, y, d.key)),
                (f.return = p),
                (p = f))
              : ((y = Qr(d.type, d.key, d.props, null, p.mode, y)),
                (y.ref = Pn(p, f, d)),
                (y.return = p),
                (p = y));
          }
          return o(p);
        case Bt:
          e: {
            for (P = d.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === d.containerInfo &&
                  f.stateNode.implementation === d.implementation
                ) {
                  (n(p, f.sibling),
                    (f = l(f, d.children || [])),
                    (f.return = p),
                    (p = f));
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            ((f = di(d, p.mode, y)), (f.return = p), (p = f));
          }
          return o(p);
        case tt:
          return ((P = d._init), E(p, f, P(d._payload), y));
      }
      if (Rn(d)) return S(p, f, d, y);
      if (kn(d)) return g(p, f, d, y);
      _r(p, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, d)), (f.return = p), (p = f))
          : (n(p, f), (f = fi(d, p.mode, y)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return E;
}
var an = Qa(!0),
  Ka = Qa(!1),
  il = wt(null),
  ol = null,
  Jt = null,
  Do = null;
function Fo() {
  Do = Jt = ol = null;
}
function Uo(e) {
  var t = il.current;
  (U(il), (e._currentValue = t));
}
function Hi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function rn(e, t) {
  ((ol = e),
    (Do = Jt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null)));
}
function Pe(e) {
  var t = e._currentValue;
  if (Do !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jt === null)) {
      if (ol === null) throw Error(k(308));
      ((Jt = e), (ol.dependencies = { lanes: 0, firstContext: e }));
    } else Jt = Jt.next = e;
  return t;
}
var _t = null;
function $o(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Ya(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), $o(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var nt = !1;
function Ao(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ga(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Ke(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), $o(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function $r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), jo(e, n));
  }
}
function Xu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (l = i = o) : (i = i.next = o), (n = n.next));
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ul(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    ((s.next = null), o === null ? (i = c) : (o.next = c), (o = s));
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = c) : (u.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    ((o = 0), (m = c = s = null), (u = i));
    do {
      var v = u.lane,
        w = u.eventTime;
      if ((r & v) === v) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            g = u;
          switch (((v = t), (w = n), g.tag)) {
            case 1:
              if (((S = g.payload), typeof S == "function")) {
                h = S.call(w, h, v);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = g.payload),
                (v = typeof S == "function" ? S.call(w, h, v) : S),
                v == null)
              )
                break e;
              h = H({}, h, v);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (v = l.effects),
          v === null ? (l.effects = [u]) : v.push(u));
      } else
        ((w = {
          eventTime: w,
          lane: v,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((c = m = w), (s = h)) : (m = m.next = w),
          (o |= v));
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        ((v = u),
          (u = v.next),
          (v.next = null),
          (l.lastBaseUpdate = v),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    ((Mt |= o), (e.lanes = o), (e.memoizedState = h));
  }
}
function Ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var pr = {},
  Be = wt(pr),
  er = wt(pr),
  tr = wt(pr);
function Lt(e) {
  if (e === pr) throw Error(k(174));
  return e;
}
function Bo(e, t) {
  switch ((D(tr, t), D(er, e), D(Be, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ei(t, e)));
  }
  (U(Be), D(Be, t));
}
function cn() {
  (U(Be), U(er), U(tr));
}
function Xa(e) {
  Lt(tr.current);
  var t = Lt(Be.current),
    n = Ei(t, e.type);
  t !== n && (D(er, e), D(Be, n));
}
function Vo(e) {
  er.current === e && (U(Be), U(er));
}
var B = wt(0);
function sl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ii = [];
function Wo() {
  for (var e = 0; e < ii.length; e++)
    ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var Ar = Ze.ReactCurrentDispatcher,
  oi = Ze.ReactCurrentBatchConfig,
  It = 0,
  V = null,
  X = null,
  q = null,
  al = !1,
  $n = !1,
  nr = 0,
  bd = 0;
function re() {
  throw Error(k(321));
}
function Ho(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Qo(e, t, n, r, l, i) {
  if (
    ((It = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ar.current = e === null || e.memoizedState === null ? rp : lp),
    (e = n(r, l)),
    $n)
  ) {
    i = 0;
    do {
      if ((($n = !1), (nr = 0), 25 <= i)) throw Error(k(301));
      ((i += 1),
        (q = X = null),
        (t.updateQueue = null),
        (Ar.current = ip),
        (e = n(r, l)));
    } while ($n);
  }
  if (
    ((Ar.current = cl),
    (t = X !== null && X.next !== null),
    (It = 0),
    (q = X = V = null),
    (al = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ko() {
  var e = nr !== 0;
  return ((nr = 0), e);
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (q === null ? (V.memoizedState = q = e) : (q = q.next = e), q);
}
function _e() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? V.memoizedState : q.next;
  if (t !== null) ((q = t), (X = e));
  else {
    if (e === null) throw Error(k(310));
    ((X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      q === null ? (V.memoizedState = q = e) : (q = q.next = e));
  }
  return q;
}
function rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ui(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      ((l.next = i.next), (i.next = o));
    }
    ((r.baseQueue = l = i), (n.pending = null));
  }
  if (l !== null) {
    ((i = l.next), (r = r.baseState));
    var u = (o = null),
      s = null,
      c = i;
    do {
      var m = c.lane;
      if ((It & m) === m)
        (s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (V.lanes |= m),
          (Mt |= m));
      }
      c = c.next;
    } while (c !== null && c !== i);
    (s === null ? (o = r) : (s.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((i = l.lane), (V.lanes |= i), (Mt |= i), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function si(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do ((i = e(i, o.action)), (o = o.next));
    while (o !== l);
    (Me(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Ja() {}
function Za(e, t) {
  var n = V,
    r = _e(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Yo(ec.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lr(9, ba.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(k(349));
    It & 30 || qa(n, t, l);
  }
  return l;
}
function qa(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ba(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), tc(t) && nc(e));
}
function ec(e, t, n) {
  return n(function () {
    tc(t) && nc(e);
  });
}
function tc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function nc(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Zu(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = np.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function lr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function rc() {
  return _e().memoizedState;
}
function Br(e, t, n, r) {
  var l = Fe();
  ((V.flags |= e),
    (l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function jl(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && Ho(r, o.deps))) {
      l.memoizedState = lr(t, n, i, r);
      return;
    }
  }
  ((V.flags |= e), (l.memoizedState = lr(1 | t, n, i, r)));
}
function qu(e, t) {
  return Br(8390656, 8, e, t);
}
function Yo(e, t) {
  return jl(2048, 8, e, t);
}
function lc(e, t) {
  return jl(4, 2, e, t);
}
function ic(e, t) {
  return jl(4, 4, e, t);
}
function oc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function uc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    jl(4, 4, oc.bind(null, t, e), n)
  );
}
function Go() {}
function sc(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ac(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cc(e, t, n) {
  return It & 21
    ? (Me(n, t) || ((n = ma()), (V.lanes |= n), (Mt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function ep(e, t) {
  var n = M;
  ((M = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = oi.transition;
  oi.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((M = n), (oi.transition = r));
  }
}
function fc() {
  return _e().memoizedState;
}
function tp(e, t, n) {
  var r = ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dc(e))
  )
    pc(t, n);
  else if (((n = Ya(e, t, n, r)), n !== null)) {
    var l = se();
    (Ie(n, e, r, l), hc(n, t, r));
  }
}
function np(e, t, n) {
  var r = ht(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dc(e)) pc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var s = t.interleaved;
          (s === null
            ? ((l.next = l), $o(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Ya(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), hc(n, t, r)));
  }
}
function dc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function pc(e, t) {
  $n = al = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function hc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), jo(e, n));
  }
}
var cl = {
    readContext: Pe,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: Pe,
    useCallback: function (e, t) {
      return ((Fe().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Pe,
    useEffect: qu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Br(4194308, 4, oc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Br(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Br(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = tp.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Zu,
    useDebugValue: Go,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Zu(!1),
        t = e[0];
      return ((e = ep.bind(null, e[1])), (Fe().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = Fe();
      if ($) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(k(349));
        It & 30 || qa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        qu(ec.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        lr(9, ba.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = b.identifierPrefix;
      if ($) {
        var n = Qe,
          r = He;
        ((n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = bd++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  lp = {
    readContext: Pe,
    useCallback: sc,
    useContext: Pe,
    useEffect: Yo,
    useImperativeHandle: uc,
    useInsertionEffect: lc,
    useLayoutEffect: ic,
    useMemo: ac,
    useReducer: ui,
    useRef: rc,
    useState: function () {
      return ui(rr);
    },
    useDebugValue: Go,
    useDeferredValue: function (e) {
      var t = _e();
      return cc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(rr)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: Ja,
    useSyncExternalStore: Za,
    useId: fc,
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: Pe,
    useCallback: sc,
    useContext: Pe,
    useEffect: Yo,
    useImperativeHandle: uc,
    useInsertionEffect: lc,
    useLayoutEffect: ic,
    useMemo: ac,
    useReducer: si,
    useRef: rc,
    useState: function () {
      return si(rr);
    },
    useDebugValue: Go,
    useDeferredValue: function (e) {
      var t = _e();
      return X === null ? (t.memoizedState = e) : cc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = si(rr)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: Ja,
    useSyncExternalStore: Za,
    useId: fc,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    ((t = H({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qi(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ht(e),
      i = Ke(r, l);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, l)),
      t !== null && (Ie(t, e, l, r), $r(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ht(e),
      i = Ke(r, l);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = dt(e, i, l)),
      t !== null && (Ie(t, e, l, r), $r(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ht(e),
      l = Ke(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = dt(e, l, r)),
      t !== null && (Ie(t, e, r, n), $r(t, e, r)));
  },
};
function bu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Jn(n, r) || !Jn(l, i)
        : !0
  );
}
function mc(e, t, n) {
  var r = !1,
    l = yt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pe(i))
      : ((l = he(t) ? zt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? un(e, l) : yt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Nl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function es(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Nl.enqueueReplaceState(t, t.state, null));
}
function Ki(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ao(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (l.context = Pe(i))
    : ((i = he(t) ? zt : oe.current), (l.context = un(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Qi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Nl.enqueueReplaceState(l, l.state, null),
      ul(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function fn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Of(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ai(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var op = typeof WeakMap == "function" ? WeakMap : Map;
function vc(e, t, n) {
  ((n = Ke(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (dl || ((dl = !0), (ro = r)), Yi(e, t));
    }),
    n
  );
}
function gc(e, t, n) {
  ((n = Ke(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Yi(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Yi(e, t),
          typeof r != "function" &&
            (pt === null ? (pt = new Set([this])) : pt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ts(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new op();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = wp.bind(null, e, t, n)), t.then(e, e));
}
function ns(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ke(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var up = Ze.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Ka(t, null, n, r) : an(t, e.child, n, r);
}
function ls(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    rn(t, l),
    (r = Qo(e, t, n, r, i, l)),
    (n = Ko()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : ($ && n && Oo(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function is(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !nu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), yc(e, t, i, r, l))
      : ((e = Qr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jn), n(o, r) && e.ref === t.ref)
    )
      return Je(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = mt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return ((t.lanes = e.lanes), Je(e, t, l));
  }
  return Gi(e, t, n, r, l);
}
function xc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        D(qt, ge),
        (ge |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(qt, ge),
          (ge |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        D(qt, ge),
        (ge |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(qt, ge),
      (ge |= r));
  return (ue(e, t, l, n), t.child);
}
function wc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Gi(e, t, n, r, l) {
  var i = he(n) ? zt : oe.current;
  return (
    (i = un(t, i)),
    rn(t, l),
    (n = Qo(e, t, n, r, i, l)),
    (r = Ko()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : ($ && r && Oo(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function os(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    nl(t);
  } else i = !1;
  if ((rn(t, l), t.stateNode === null))
    (Vr(e, t), mc(t, n, r), Ki(t, n, r, l), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Pe(c))
      : ((c = he(n) ? zt : oe.current), (c = un(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && es(t, o, r, c)),
      (nt = !1));
    var v = t.memoizedState;
    ((o.state = v),
      ul(t, r, o, l),
      (s = t.memoizedState),
      u !== r || v !== s || pe.current || nt
        ? (typeof m == "function" && (Qi(t, n, m, r), (s = t.memoizedState)),
          (u = nt || bu(t, n, u, r, v, s, c))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = c),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Ga(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Te(t.type, u)),
      (o.props = c),
      (h = t.pendingProps),
      (v = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Pe(s))
        : ((s = he(n) ? zt : oe.current), (s = un(t, s))));
    var w = n.getDerivedStateFromProps;
    ((m =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || v !== s) && es(t, o, r, s)),
      (nt = !1),
      (v = t.memoizedState),
      (o.state = v),
      ul(t, r, o, l));
    var S = t.memoizedState;
    u !== h || v !== S || pe.current || nt
      ? (typeof w == "function" && (Qi(t, n, w, r), (S = t.memoizedState)),
        (c = nt || bu(t, n, c, r, v, S, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xi(e, t, n, r, i, l);
}
function Xi(e, t, n, r, l, i) {
  wc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && Qu(t, n, !1), Je(e, t, i));
  ((r = t.stateNode), (up.current = t));
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = an(t, e.child, null, i)), (t.child = an(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Qu(t, n, !0),
    t.child
  );
}
function Sc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Hu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hu(e, t.context, !1),
    Bo(e, t.containerInfo));
}
function us(e, t, n, r, l) {
  return (sn(), Mo(l), (t.flags |= 256), ue(e, t, n, r), t.child);
}
var Ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(B, l & 1),
    e === null)
  )
    return (
      Wi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ll(o, r, 0, null)),
              (e = Rt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Zi(n)),
              (t.memoizedState = Ji),
              e)
            : Xo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return sp(e, t, o, r, u, l, n);
  if (i) {
    ((i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling));
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = mt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = mt(u, i)) : ((i = Rt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Zi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ji),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = mt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xo(e, t) {
  return (
    (t = Ll({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lr(e, t, n, r) {
  return (
    r !== null && Mo(r),
    an(t, e.child, null, n),
    (e = Xo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function sp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ai(Error(k(422)))), Lr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Ll({ mode: "visible", children: r.children }, l, 0, null)),
          (i = Rt(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && an(t, e.child, null, o),
          (t.child.memoizedState = Zi(o)),
          (t.memoizedState = Ji),
          i);
  if (!(t.mode & 1)) return Lr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (
      (r = u),
      (i = Error(k(419))),
      (r = ai(i, r, void 0)),
      Lr(e, t, o, r)
    );
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Ie(r, e, l, -1)));
    }
    return (tu(), (r = ai(Error(k(421)))), Lr(e, t, o, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ye = ft(l.nextSibling)),
      (xe = t),
      ($ = !0),
      (ze = null),
      e !== null &&
        ((Ce[Ee++] = He),
        (Ce[Ee++] = Qe),
        (Ce[Ee++] = Ot),
        (He = e.id),
        (Qe = e.overflow),
        (Ot = t)),
      (t = Xo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ss(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Hi(e.return, t, n));
}
function ci(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Cc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ss(e, n, t);
        else if (e.tag === 19) ss(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((D(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && sl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ci(t, !1, l, n, i));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && sl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        ci(t, !0, n, null, i);
        break;
      case "together":
        ci(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = mt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function ap(e, t, n) {
  switch (t.tag) {
    case 3:
      (Sc(t), sn());
      break;
    case 5:
      Xa(t);
      break;
    case 1:
      he(t.type) && nl(t);
      break;
    case 4:
      Bo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (D(il, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? kc(e, t, n)
            : (D(B, B.current & 1),
              (e = Je(e, t, n)),
              e !== null ? e.sibling : null);
      D(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Cc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), xc(e, t, n));
  }
  return Je(e, t, n);
}
var Ec, qi, jc, Nc;
Ec = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
qi = function () {};
jc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Lt(Be.current));
    var i = null;
    switch (n) {
      case "input":
        ((l = wi(e, l)), (r = wi(e, r)), (i = []));
        break;
      case "select":
        ((l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((l = Ci(e, l)), (r = Ci(e, r)), (i = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = el);
    }
    ji(n, r);
    var o;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Wn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else (n || (i || (i = []), i.push(c, n)), (n = s));
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(c, s))
            : c === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (i = i || []).push(c, "" + s)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Wn.hasOwnProperty(c)
                  ? (s != null && c === "onScroll" && F("scroll", e),
                    i || u === s || (i = []))
                  : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Nc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function cp(e, t, n) {
  var r = t.pendingProps;
  switch ((Io(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (le(t), null);
    case 1:
      return (he(t.type) && tl(), le(t), null);
    case 3:
      return (
        (r = t.stateNode),
        cn(),
        U(pe),
        U(oe),
        Wo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ze !== null && (oo(ze), (ze = null)))),
        qi(e, t),
        le(t),
        null
      );
    case 5:
      Vo(t);
      var l = Lt(tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (jc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return (le(t), null);
        }
        if (((e = Lt(Be.current)), Pr(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[bn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (F("cancel", r), F("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < On.length; l++) F(On[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (F("error", r), F("load", r));
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              (gu(r, i), F("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                F("invalid", r));
              break;
            case "textarea":
              (xu(r, i), F("invalid", r));
          }
          (ji(n, i), (l = null));
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Wn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  F("scroll", r);
            }
          switch (n) {
            case "input":
              (yr(r), yu(r, i, !0));
              break;
            case "textarea":
              (yr(r), wu(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = el);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ea(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[bn] = r),
            Ec(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = Ni(n, r)), n)) {
              case "dialog":
                (F("cancel", e), F("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (F("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < On.length; l++) F(On[l], e);
                l = r;
                break;
              case "source":
                (F("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (F("error", e), F("load", e), (l = r));
                break;
              case "details":
                (F("toggle", e), (l = r));
                break;
              case "input":
                (gu(e, r), (l = wi(e, r)), F("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  F("invalid", e));
                break;
              case "textarea":
                (xu(e, r), (l = Ci(e, r)), F("invalid", e));
                break;
              default:
                l = r;
            }
            (ji(n, l), (u = l));
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ra(e, s)
                  : i === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && ta(e, s))
                    : i === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && Hn(e, s)
                        : typeof s == "number" && Hn(e, "" + s)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Wn.hasOwnProperty(i)
                          ? s != null && i === "onScroll" && F("scroll", e)
                          : s != null && xo(e, i, s, o));
              }
            switch (n) {
              case "input":
                (yr(e), yu(e, r, !1));
                break;
              case "textarea":
                (yr(e), wu(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? bt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      bt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = el);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (le(t), null);
    case 6:
      if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Lt(tr.current)), Lt(Be.current), Pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r));
      }
      return (le(t), null);
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ye !== null && t.mode & 1 && !(t.flags & 128))
          (Ha(), sn(), (t.flags |= 98560), (i = !1));
        else if (((i = Pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[Ue] = t;
          } else
            (sn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (le(t), (i = !1));
        } else (ze !== null && (oo(ze), (ze = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? J === 0 && (J = 3) : tu())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        cn(),
        qi(e, t),
        e === null && Zn(t.stateNode.containerInfo),
        le(t),
        null
      );
    case 10:
      return (Uo(t.type._context), le(t), null);
    case 17:
      return (he(t.type) && tl(), le(t), null);
    case 19:
      if ((U(B), (i = t.memoizedState), i === null)) return (le(t), null);
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) _n(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = sl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    _n(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (D(B, (B.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > dn &&
            ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = sl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return (le(t), null);
          } else
            2 * Y() - i.renderingStartTime > dn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          D(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function fp(e, t) {
  switch ((Io(t), t.tag)) {
    case 1:
      return (
        he(t.type) && tl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        cn(),
        U(pe),
        U(oe),
        Wo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Vo(t), null);
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        sn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (U(B), null);
    case 4:
      return (cn(), null);
    case 10:
      return (Uo(t.type._context), null);
    case 22:
    case 23:
      return (eu(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1,
  ie = !1,
  dp = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function bi(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var as = !1;
function pp(e, t) {
  if (((Di = Zr), (e = Ra()), zo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            v = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;
            )
              ((v = h), (h = w));
            for (;;) {
              if (h === e) break t;
              if (
                (v === n && ++c === l && (u = o),
                v === i && ++m === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              ((h = v), (v = h.parentNode));
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Fi = { focusedElem: e, selectionRange: n }, Zr = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (j = e));
    else
      for (; j !== null; ) {
        t = j;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var g = S.memoizedProps,
                    E = S.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Te(t.type, g),
                      E,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (y) {
          Q(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (j = e));
          break;
        }
        j = t.return;
      }
  return ((S = as), (as = !1), S);
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        ((l.destroy = void 0), i !== void 0 && bi(t, n, i));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Pl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function eo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Pc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Pc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[bn], delete t[Ai], delete t[Xd], delete t[Jd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function _c(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _c(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function to(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = el)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (to(e, t, n), e = e.sibling; e !== null; )
      (to(e, t, n), (e = e.sibling));
}
function no(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (no(e, t, n), e = e.sibling; e !== null; )
      (no(e, t, n), (e = e.sibling));
}
var ee = null,
  Re = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) (Lc(e, t, n), (n = n.sibling));
}
function Lc(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(xl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Zt(n, t);
    case 6:
      var r = ee,
        l = Re;
      ((ee = null),
        et(e, t, n),
        (ee = r),
        (Re = l),
        ee !== null &&
          (Re
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode)));
      break;
    case 18:
      ee !== null &&
        (Re
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? ri(e.parentNode, n)
              : e.nodeType === 1 && ri(e, n),
            Gn(e))
          : ri(ee, n.stateNode));
      break;
    case 4:
      ((r = ee),
        (l = Re),
        (ee = n.stateNode.containerInfo),
        (Re = !0),
        et(e, t, n),
        (ee = r),
        (Re = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          ((i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && bi(n, t, o),
            (l = l.next));
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (u) {
          Q(n, t, u);
        }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), et(e, t, n), (ie = r))
        : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function fs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new dp()),
      t.forEach(function (r) {
        var l = kp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ((ee = u.stateNode), (Re = !1));
              break e;
            case 3:
              ((ee = u.stateNode.containerInfo), (Re = !0));
              break e;
            case 4:
              ((ee = u.stateNode.containerInfo), (Re = !0));
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(k(160));
        (Lc(i, o, l), (ee = null), (Re = !1));
        var s = l.alternate;
        (s !== null && (s.return = null), (l.return = null));
      } catch (c) {
        Q(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Tc(t, e), (t = t.sibling));
}
function Tc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), De(e), r & 4)) {
        try {
          (An(3, e, e.return), Pl(3, e));
        } catch (g) {
          Q(e, e.return, g);
        }
        try {
          An(5, e, e.return);
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 1:
      (Le(t, e), De(e), r & 512 && n !== null && Zt(n, n.return));
      break;
    case 5:
      if (
        (Le(t, e),
        De(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Hn(l, "");
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            (u === "input" && i.type === "radio" && i.name != null && qs(l, i),
              Ni(u, o));
            var c = Ni(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                h = s[o + 1];
              m === "style"
                ? ra(l, h)
                : m === "dangerouslySetInnerHTML"
                  ? ta(l, h)
                  : m === "children"
                    ? Hn(l, h)
                    : xo(l, m, h, c);
            }
            switch (u) {
              case "input":
                Si(l, i);
                break;
              case "textarea":
                bs(l, i);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? bt(l, !!i.multiple, w, !1)
                  : v !== !!i.multiple &&
                    (i.defaultValue != null
                      ? bt(l, !!i.multiple, i.defaultValue, !0)
                      : bt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[bn] = i;
          } catch (g) {
            Q(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Le(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        ((l = e.stateNode), (i = e.memoizedProps));
        try {
          l.nodeValue = i;
        } catch (g) {
          Q(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gn(t.containerInfo);
        } catch (g) {
          Q(e, e.return, g);
        }
      break;
    case 4:
      (Le(t, e), De(e));
      break;
    case 13:
      (Le(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qo = Y())),
        r & 4 && fs(e));
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || m), Le(t, e), (ie = c)) : Le(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (j = e, m = e.child; m !== null; ) {
            for (h = j = m; j !== null; ) {
              switch (((v = j), (w = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  An(4, v, v.return);
                  break;
                case 1:
                  Zt(v, v.return);
                  var S = v.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    ((r = v), (n = v.return));
                    try {
                      ((t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount());
                    } catch (g) {
                      Q(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Zt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ps(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = v), (j = w)) : ps(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                ((l = h.stateNode),
                  c
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = na("display", o))));
              } catch (g) {
                Q(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (g) {
                Q(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (m === h && (m = null), (h = h.return));
          }
          (m === h && (m = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (Le(t, e), De(e), r & 4 && fs(e));
      break;
    case 21:
      break;
    default:
      (Le(t, e), De(e));
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_c(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Hn(l, ""), (r.flags &= -33));
          var i = cs(e);
          no(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = cs(e);
          to(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      Q(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hp(e, t, n) {
  ((j = e), Rc(e));
}
function Rc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Tr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Tr;
        var c = ie;
        if (((Tr = o), (ie = s) && !c))
          for (j = l; j !== null; )
            ((o = j),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? hs(l)
                : s !== null
                  ? ((s.return = o), (j = s))
                  : hs(l));
        for (; i !== null; ) ((j = i), Rc(i), (i = i.sibling));
        ((j = l), (Tr = u), (ie = c));
      }
      ds(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : ds(e);
  }
}
function ds(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Ju(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ju(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Gn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && eo(t));
      } catch (v) {
        Q(t, t.return, v);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function ps(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function hs(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var i = t.return;
          try {
            eo(t);
          } catch (s) {
            Q(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            eo(t);
          } catch (s) {
            Q(t, o, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      ((u.return = t.return), (j = u));
      break;
    }
    j = t.return;
  }
}
var mp = Math.ceil,
  fl = Ze.ReactCurrentDispatcher,
  Jo = Ze.ReactCurrentOwner,
  Ne = Ze.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  G = null,
  te = 0,
  ge = 0,
  qt = wt(0),
  J = 0,
  ir = null,
  Mt = 0,
  _l = 0,
  Zo = 0,
  Bn = null,
  fe = null,
  qo = 0,
  dn = 1 / 0,
  Ve = null,
  dl = !1,
  ro = null,
  pt = null,
  Rr = !1,
  ot = null,
  pl = 0,
  Vn = 0,
  lo = null,
  Wr = -1,
  Hr = 0;
function se() {
  return I & 6 ? Y() : Wr !== -1 ? Wr : (Wr = Y());
}
function ht(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : qd.transition !== null
        ? (Hr === 0 && (Hr = ma()), Hr)
        : ((e = M),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ka(e.type))),
          e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Vn) throw ((Vn = 0), (lo = null), Error(k(185)));
  (cr(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (_l |= n), J === 4 && lt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((dn = Y() + 500), El && St())));
}
function me(e, t) {
  var n = e.callbackNode;
  qf(e, t);
  var r = Jr(e, e === b ? te : 0);
  if (r === 0)
    (n !== null && Cu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cu(n), t === 1))
      (e.tag === 0 ? Zd(ms.bind(null, e)) : Ba(ms.bind(null, e)),
        Yd(function () {
          !(I & 6) && St();
        }),
        (n = null));
    else {
      switch (va(r)) {
        case 1:
          n = Eo;
          break;
        case 4:
          n = pa;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = ha;
          break;
        default:
          n = Xr;
      }
      n = $c(n, zc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function zc(e, t) {
  if (((Wr = -1), (Hr = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (ln() && e.callbackNode !== n) return null;
  var r = Jr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = Ic();
    (b !== e || te !== t) && ((Ve = null), (dn = Y() + 500), Tt(e, t));
    do
      try {
        yp();
        break;
      } catch (u) {
        Oc(e, u);
      }
    while (!0);
    (Fo(),
      (fl.current = i),
      (I = l),
      G !== null ? (t = 0) : ((b = null), (te = 0), (t = J)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ri(e)), l !== 0 && ((r = l), (t = io(e, l)))), t === 1)
    )
      throw ((n = ir), Tt(e, 0), lt(e, r), me(e, Y()), n);
    if (t === 6) lt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !vp(l) &&
          ((t = hl(e, r)),
          t === 2 && ((i = Ri(e)), i !== 0 && ((r = i), (t = io(e, i)))),
          t === 1))
      )
        throw ((n = ir), Tt(e, 0), lt(e, r), me(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          jt(e, fe, Ve);
          break;
        case 3:
          if (
            (lt(e, r), (r & 130023424) === r && ((t = qo + 500 - Y()), 10 < t))
          ) {
            if (Jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (se(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = $i(jt.bind(null, e, fe, Ve), t);
            break;
          }
          jt(e, fe, Ve);
          break;
        case 4:
          if ((lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            ((i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i));
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * mp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $i(jt.bind(null, e, fe, Ve), r);
            break;
          }
          jt(e, fe, Ve);
          break;
        case 5:
          jt(e, fe, Ve);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return (me(e, Y()), e.callbackNode === n ? zc.bind(null, e) : null);
}
function io(e, t) {
  var n = Bn;
  return (
    e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256),
    (e = hl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && oo(t)),
    e
  );
}
function oo(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function vp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function lt(e, t) {
  for (
    t &= ~Zo,
      t &= ~_l,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ms(e) {
  if (I & 6) throw Error(k(327));
  ln();
  var t = Jr(e, 0);
  if (!(t & 1)) return (me(e, Y()), null);
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ri(e);
    r !== 0 && ((t = r), (n = io(e, r)));
  }
  if (n === 1) throw ((n = ir), Tt(e, 0), lt(e, t), me(e, Y()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, fe, Ve),
    me(e, Y()),
    null
  );
}
function bo(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    ((I = n), I === 0 && ((dn = Y() + 500), El && St()));
  }
}
function Dt(e) {
  ot !== null && ot.tag === 0 && !(I & 6) && ln();
  var t = I;
  I |= 1;
  var n = Ne.transition,
    r = M;
  try {
    if (((Ne.transition = null), (M = 1), e)) return e();
  } finally {
    ((M = r), (Ne.transition = n), (I = t), !(I & 6) && St());
  }
}
function eu() {
  ((ge = qt.current), U(qt));
}
function Tt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Kd(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Io(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && tl());
          break;
        case 3:
          (cn(), U(pe), U(oe), Wo());
          break;
        case 5:
          Vo(r);
          break;
        case 4:
          cn();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          Uo(r.type._context);
          break;
        case 22:
        case 23:
          eu();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (G = e = mt(e.current, null)),
    (te = ge = t),
    (J = 0),
    (ir = null),
    (Zo = _l = Mt = 0),
    (fe = Bn = null),
    _t !== null)
  ) {
    for (t = 0; t < _t.length; t++)
      if (((n = _t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          ((i.next = l), (r.next = o));
        }
        n.pending = r;
      }
    _t = null;
  }
  return e;
}
function Oc(e, t) {
  do {
    var n = G;
    try {
      if ((Fo(), (Ar.current = cl), al)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        al = !1;
      }
      if (
        ((It = 0),
        (q = X = V = null),
        ($n = !1),
        (nr = 0),
        (Jo.current = null),
        n === null || n.return === null)
      ) {
        ((J = 1), (ir = t), (G = null));
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = m.alternate;
            v
              ? ((m.updateQueue = v.updateQueue),
                (m.memoizedState = v.memoizedState),
                (m.lanes = v.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = ns(o);
          if (w !== null) {
            ((w.flags &= -257),
              rs(w, o, u, i, t),
              w.mode & 1 && ts(i, c, t),
              (t = w),
              (s = c));
            var S = t.updateQueue;
            if (S === null) {
              var g = new Set();
              (g.add(s), (t.updateQueue = g));
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              (ts(i, c, t), tu());
              break e;
            }
            s = Error(k(426));
          }
        } else if ($ && u.mode & 1) {
          var E = ns(o);
          if (E !== null) {
            (!(E.flags & 65536) && (E.flags |= 256),
              rs(E, o, u, i, t),
              Mo(fn(s, u)));
            break e;
          }
        }
        ((i = s = fn(s, u)),
          J !== 4 && (J = 2),
          Bn === null ? (Bn = [i]) : Bn.push(i),
          (i = o));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var p = vc(i, s, t);
              Xu(i, p);
              break e;
            case 1:
              u = s;
              var f = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (pt === null || !pt.has(d))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var y = gc(i, u, t);
                Xu(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dc(n);
    } catch (C) {
      ((t = C), G === n && n !== null && (G = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Ic() {
  var e = fl.current;
  return ((fl.current = cl), e === null ? cl : e);
}
function tu() {
  ((J === 0 || J === 3 || J === 2) && (J = 4),
    b === null || (!(Mt & 268435455) && !(_l & 268435455)) || lt(b, te));
}
function hl(e, t) {
  var n = I;
  I |= 2;
  var r = Ic();
  (b !== e || te !== t) && ((Ve = null), Tt(e, t));
  do
    try {
      gp();
      break;
    } catch (l) {
      Oc(e, l);
    }
  while (!0);
  if ((Fo(), (I = n), (fl.current = r), G !== null)) throw Error(k(261));
  return ((b = null), (te = 0), J);
}
function gp() {
  for (; G !== null; ) Mc(G);
}
function yp() {
  for (; G !== null && !Wf(); ) Mc(G);
}
function Mc(e) {
  var t = Uc(e.alternate, e, ge);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Dc(e) : (G = t),
    (Jo.current = null));
}
function Dc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = fp(n, t)), n !== null)) {
        ((n.flags &= 32767), (G = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((J = 6), (G = null));
        return;
      }
    } else if (((n = cp(n, t, ge)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function jt(e, t, n) {
  var r = M,
    l = Ne.transition;
  try {
    ((Ne.transition = null), (M = 1), xp(e, t, n, r));
  } finally {
    ((Ne.transition = l), (M = r));
  }
  return null;
}
function xp(e, t, n, r) {
  do ln();
  while (ot !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (bf(e, i),
    e === b && ((G = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rr ||
      ((Rr = !0),
      $c(Xr, function () {
        return (ln(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = Ne.transition), (Ne.transition = null));
    var o = M;
    M = 1;
    var u = I;
    ((I |= 4),
      (Jo.current = null),
      pp(e, n),
      Tc(n, e),
      $d(Fi),
      (Zr = !!Di),
      (Fi = Di = null),
      (e.current = n),
      hp(n),
      Hf(),
      (I = u),
      (M = o),
      (Ne.transition = i));
  } else e.current = n;
  if (
    (Rr && ((Rr = !1), (ot = e), (pl = l)),
    (i = e.pendingLanes),
    i === 0 && (pt = null),
    Yf(n.stateNode),
    me(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (dl) throw ((dl = !1), (e = ro), (ro = null), e);
  return (
    pl & 1 && e.tag !== 0 && ln(),
    (i = e.pendingLanes),
    i & 1 ? (e === lo ? Vn++ : ((Vn = 0), (lo = e))) : (Vn = 0),
    St(),
    null
  );
}
function ln() {
  if (ot !== null) {
    var e = va(pl),
      t = Ne.transition,
      n = M;
    try {
      if (((Ne.transition = null), (M = 16 > e ? 16 : e), ot === null))
        var r = !1;
      else {
        if (((e = ot), (ot = null), (pl = 0), I & 6)) throw Error(k(331));
        var l = I;
        for (I |= 4, j = e.current; j !== null; ) {
          var i = j,
            o = i.child;
          if (j.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (j = c; j !== null; ) {
                  var m = j;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) ((h.return = m), (j = h));
                  else
                    for (; j !== null; ) {
                      m = j;
                      var v = m.sibling,
                        w = m.return;
                      if ((Pc(m), m === c)) {
                        j = null;
                        break;
                      }
                      if (v !== null) {
                        ((v.return = w), (j = v));
                        break;
                      }
                      j = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var E = g.sibling;
                    ((g.sibling = null), (g = E));
                  } while (g !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) ((o.return = i), (j = o));
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    An(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                ((p.return = i.return), (j = p));
                break e;
              }
              j = i.return;
            }
        }
        var f = e.current;
        for (j = f; j !== null; ) {
          o = j;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) ((d.return = o), (j = d));
          else
            e: for (o = f; j !== null; ) {
              if (((u = j), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, u);
                  }
                } catch (C) {
                  Q(u, u.return, C);
                }
              if (u === o) {
                j = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                ((y.return = u.return), (j = y));
                break e;
              }
              j = u.return;
            }
        }
        if (
          ((I = l), St(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(xl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((M = n), (Ne.transition = t));
    }
  }
  return !1;
}
function vs(e, t, n) {
  ((t = fn(n, t)),
    (t = vc(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = se()),
    e !== null && (cr(e, 1, t), me(e, t)));
}
function Q(e, t, n) {
  if (e.tag === 3) vs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pt === null || !pt.has(r)))
        ) {
          ((e = fn(n, e)),
            (e = gc(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = se()),
            t !== null && (cr(t, 1, e), me(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function wp(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > Y() - qo)
        ? Tt(e, 0)
        : (Zo |= n)),
    me(e, t));
}
function Fc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Sr), (Sr <<= 1), !(Sr & 130023424) && (Sr = 4194304))
      : (t = 1));
  var n = se();
  ((e = Xe(e, t)), e !== null && (cr(e, t, n), me(e, n)));
}
function Sp(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Fc(e, n));
}
function kp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  (r !== null && r.delete(t), Fc(e, n));
}
var Uc;
Uc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((de = !1), ap(e, t, n));
      de = !!(e.flags & 131072);
    }
  else ((de = !1), $ && t.flags & 1048576 && Va(t, ll, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Vr(e, t), (e = t.pendingProps));
      var l = un(t, oe.current);
      (rn(t, n), (l = Qo(null, t, r, e, l, n)));
      var i = Ko();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), nl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ao(t),
            (l.updater = Nl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ki(t, r, e, n),
            (t = Xi(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Oo(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Ep(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Gi(null, t, r, e, n);
            break e;
          case 1:
            t = os(null, t, r, e, n);
            break e;
          case 11:
            t = ls(null, t, r, e, n);
            break e;
          case 14:
            t = is(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Gi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        os(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Sc(t), e === null)) throw Error(k(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ga(e, t),
          ul(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((l = fn(Error(k(423)), t)), (t = us(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = fn(Error(k(424)), t)), (t = us(e, t, r, n, l)));
            break e;
          } else
            for (
              ye = ft(t.stateNode.containerInfo.firstChild),
                xe = t,
                $ = !0,
                ze = null,
                n = Ka(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((sn(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xa(t),
        e === null && Wi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ui(r, l) ? (o = null) : i !== null && Ui(r, i) && (t.flags |= 32),
        wc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Wi(t), null);
    case 13:
      return kc(e, t, n);
    case 4:
      return (
        Bo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = an(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        ls(e, t, r, l, n)
      );
    case 7:
      return (ue(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ue(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ue(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          D(il, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      ((s = Ke(-1, n & -n)), (s.tag = 2));
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        (m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s));
                      }
                    }
                    ((i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Hi(i.return, n, t),
                      (u.lanes |= n));
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                ((o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Hi(o, n, t),
                  (o = i.sibling));
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    ((i.return = o.return), (o = i));
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        (ue(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        rn(t, n),
        (l = Pe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        is(e, t, r, l, n)
      );
    case 15:
      return yc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Vr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), nl(t)) : (e = !1),
        rn(t, n),
        mc(t, r, l),
        Ki(t, r, l, n),
        Xi(null, t, r, !0, e, n)
      );
    case 19:
      return Cc(e, t, n);
    case 22:
      return xc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function $c(e, t) {
  return da(e, t);
}
function Cp(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function je(e, t, n, r) {
  return new Cp(e, t, n, r);
}
function nu(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Ep(e) {
  if (typeof e == "function") return nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === So)) return 11;
    if (e === ko) return 14;
  }
  return 2;
}
function mt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) nu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Vt:
        return Rt(n.children, l, i, t);
      case wo:
        ((o = 8), (l |= 8));
        break;
      case vi:
        return (
          (e = je(12, n, t, l | 2)),
          (e.elementType = vi),
          (e.lanes = i),
          e
        );
      case gi:
        return ((e = je(13, n, t, l)), (e.elementType = gi), (e.lanes = i), e);
      case yi:
        return ((e = je(19, n, t, l)), (e.elementType = yi), (e.lanes = i), e);
      case Xs:
        return Ll(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ys:
              o = 10;
              break e;
            case Gs:
              o = 9;
              break e;
            case So:
              o = 11;
              break e;
            case ko:
              o = 14;
              break e;
            case tt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(o, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function Rt(e, t, n, r) {
  return ((e = je(7, e, r, t)), (e.lanes = n), e);
}
function Ll(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Xs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fi(e, t, n) {
  return ((e = je(6, e, null, t)), (e.lanes = n), e);
}
function di(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jp(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Kl(0)),
    (this.expirationTimes = Kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Kl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function ru(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new jp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ao(i),
    e
  );
}
function Np(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ac(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Aa(e, n, t);
  }
  return t;
}
function Bc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = ru(n, r, !0, e, l, i, o, u, s)),
    (e.context = Ac(null)),
    (n = e.current),
    (r = se()),
    (l = ht(n)),
    (i = Ke(r, l)),
    (i.callback = t ?? null),
    dt(n, i, l),
    (e.current.lanes = l),
    cr(e, l, r),
    me(e, r),
    e
  );
}
function Tl(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ht(l);
  return (
    (n = Ac(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ke(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(l, t, o)),
    e !== null && (Ie(e, l, o, i), $r(e, l, o)),
    o
  );
}
function ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lu(e, t) {
  (gs(e, t), (e = e.alternate) && gs(e, t));
}
function Pp() {
  return null;
}
var Vc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function iu(e) {
  this._internalRoot = e;
}
Rl.prototype.render = iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Tl(e, t, null, null);
};
Rl.prototype.unmount = iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Dt(function () {
      Tl(null, e, null, null);
    }),
      (t[Ge] = null));
  }
};
function Rl(e) {
  this._internalRoot = e;
}
Rl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++);
    (rt.splice(n, 0, e), n === 0 && Sa(e));
  }
};
function ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ys() {}
function _p(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = ml(o);
        i.call(c);
      };
    }
    var o = Bc(t, r, e, 0, null, !1, !1, "", ys);
    return (
      (e._reactRootContainer = o),
      (e[Ge] = o.current),
      Zn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = ml(s);
      u.call(c);
    };
  }
  var s = ru(e, 0, !1, null, null, !1, !1, "", ys);
  return (
    (e._reactRootContainer = s),
    (e[Ge] = s.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      Tl(t, s, n, r);
    }),
    s
  );
}
function Ol(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = ml(o);
        u.call(s);
      };
    }
    Tl(t, o, e, l);
  } else o = _p(n, t, e, l, r);
  return ml(o);
}
ga = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 &&
          (jo(t, n | 1), me(t, Y()), !(I & 6) && ((dn = Y() + 500), St()));
      }
      break;
    case 13:
      (Dt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        lu(e, 1));
  }
};
No = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    lu(e, 134217728);
  }
};
ya = function (e) {
  if (e.tag === 13) {
    var t = ht(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    lu(e, t);
  }
};
xa = function () {
  return M;
};
wa = function (e, t) {
  var n = M;
  try {
    return ((M = e), t());
  } finally {
    M = n;
  }
};
_i = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Si(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Cl(r);
            if (!l) throw Error(k(90));
            (Zs(r), Si(r, l));
          }
        }
      }
      break;
    case "textarea":
      bs(e, n);
      break;
    case "select":
      ((t = n.value), t != null && bt(e, !!n.multiple, t, !1));
  }
};
oa = bo;
ua = Dt;
var Lp = { usingClientEntryPoint: !1, Events: [dr, Kt, Cl, la, ia, bo] },
  Ln = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Tp = {
    bundleType: Ln.bundleType,
    version: Ln.version,
    rendererPackageName: Ln.rendererPackageName,
    rendererConfig: Ln.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ze.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = ca(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Ln.findFiberByHostInstance || Pp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber)
    try {
      ((xl = zr.inject(Tp)), (Ae = zr));
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lp;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ou(t)) throw Error(k(200));
  return Np(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!ou(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Vc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ru(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return ((e = ca(t)), (e = e === null ? null : e.stateNode), e);
};
Se.flushSync = function (e) {
  return Dt(e);
};
Se.hydrate = function (e, t, n) {
  if (!zl(t)) throw Error(k(200));
  return Ol(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!ou(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Vc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Bc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ge] = t.current),
    Zn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Rl(t);
};
Se.render = function (e, t, n) {
  if (!zl(t)) throw Error(k(200));
  return Ol(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!zl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Dt(function () {
        Ol(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ge] = null));
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = bo;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ol(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function Wc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc);
    } catch (e) {
      console.error(e);
    }
}
(Wc(), (Ws.exports = Se));
var Rp = Ws.exports,
  xs = Rp;
((hi.createRoot = xs.createRoot), (hi.hydrateRoot = xs.hydrateRoot));
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function or() {
  return (
    (or = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    or.apply(this, arguments)
  );
}
var ut;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(ut || (ut = {}));
const ws = "popstate";
function zp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return uo(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : vl(l);
  }
  return Ip(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function uu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Op() {
  return Math.random().toString(36).substr(2, 8);
}
function Ss(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function uo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    or(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? gn(t) : t,
      { state: n, key: (t && t.key) || r || Op() },
    )
  );
}
function vl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function gn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function Ip(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = ut.Pop,
    s = null,
    c = m();
  c == null && ((c = 0), o.replaceState(or({}, o.state, { idx: c }), ""));
  function m() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    u = ut.Pop;
    let E = m(),
      p = E == null ? null : E - c;
    ((c = E), s && s({ action: u, location: g.location, delta: p }));
  }
  function v(E, p) {
    u = ut.Push;
    let f = uo(g.location, E, p);
    c = m() + 1;
    let d = Ss(f, c),
      y = g.createHref(f);
    try {
      o.pushState(d, "", y);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(y);
    }
    i && s && s({ action: u, location: g.location, delta: 1 });
  }
  function w(E, p) {
    u = ut.Replace;
    let f = uo(g.location, E, p);
    c = m();
    let d = Ss(f, c),
      y = g.createHref(f);
    (o.replaceState(d, "", y),
      i && s && s({ action: u, location: g.location, delta: 0 }));
  }
  function S(E) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      f = typeof E == "string" ? E : vl(E);
    return (
      (f = f.replace(/ $/, "%20")),
      W(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          f,
      ),
      new URL(f, p)
    );
  }
  let g = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(E) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ws, h),
        (s = E),
        () => {
          (l.removeEventListener(ws, h), (s = null));
        }
      );
    },
    createHref(E) {
      return t(l, E);
    },
    createURL: S,
    encodeLocation(E) {
      let p = S(E);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: v,
    replace: w,
    go(E) {
      return o.go(E);
    },
  };
  return g;
}
var ks;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(ks || (ks = {}));
function Mp(e, t, n) {
  return (n === void 0 && (n = "/"), Dp(e, t, n));
}
function Dp(e, t, n, r) {
  let l = typeof t == "string" ? gn(t) : t,
    i = pn(l.pathname || "/", n);
  if (i == null) return null;
  let o = Hc(e);
  Fp(o);
  let u = null;
  for (let s = 0; u == null && s < o.length; ++s) {
    let c = Gp(i);
    u = Kp(o[s], c);
  }
  return u;
}
function Hc(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (W(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = vt([r, s.relativePath]),
      m = n.concat(s);
    (i.children &&
      i.children.length > 0 &&
      (W(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".'),
      ),
      Hc(i.children, t, m, c)),
      !(i.path == null && !i.index) &&
        t.push({ path: c, score: Hp(c, i.index), routesMeta: m }));
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let s of Qc(i.path)) l(i, o, s);
    }),
    t
  );
}
function Qc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Qc(r.join("/")),
    u = [];
  return (
    u.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && u.push(...o),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Fp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Qp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Up = /^:[\w-]+$/,
  $p = 3,
  Ap = 2,
  Bp = 1,
  Vp = 10,
  Wp = -2,
  Cs = (e) => e === "*";
function Hp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Cs) && (r += Wp),
    t && (r += Ap),
    n
      .filter((l) => !Cs(l))
      .reduce((l, i) => l + (Up.test(i) ? $p : i === "" ? Bp : Vp), r)
  );
}
function Qp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Kp(e, t, n) {
  let { routesMeta: r } = e,
    l = {},
    i = "/",
    o = [];
  for (let u = 0; u < r.length; ++u) {
    let s = r[u],
      c = u === r.length - 1,
      m = i === "/" ? t : t.slice(i.length) || "/",
      h = so(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        m,
      ),
      v = s.route;
    if (!h) return null;
    (Object.assign(l, h.params),
      o.push({
        params: l,
        pathname: vt([i, h.pathname]),
        pathnameBase: bp(vt([i, h.pathnameBase])),
        route: v,
      }),
      h.pathnameBase !== "/" && (i = vt([i, h.pathnameBase])));
  }
  return o;
}
function so(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Yp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((c, m, h) => {
      let { paramName: v, isOptional: w } = m;
      if (v === "*") {
        let g = u[h] || "";
        o = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const S = u[h];
      return (
        w && !S ? (c[v] = void 0) : (c[v] = (S || "").replace(/%2F/g, "/")),
        c
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Yp(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    uu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Gp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      uu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function pn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Xp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Jp = (e) => Xp.test(e);
function Zp(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: l = "",
    } = typeof e == "string" ? gn(e) : e,
    i;
  if (n)
    if (Jp(n)) i = n;
    else {
      if (n.includes("//")) {
        let o = n;
        ((n = n.replace(/\/\/+/g, "/")),
          uu(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (o + " -> " + n),
          ));
      }
      n.startsWith("/") ? (i = Es(n.substring(1), "/")) : (i = Es(n, t));
    }
  else i = t;
  return { pathname: i, search: eh(r), hash: th(l) };
}
function Es(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function qp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function su(e, t) {
  let n = qp(e);
  return t
    ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function au(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = gn(e))
    : ((l = or({}, e)),
      W(
        !l.pathname || !l.pathname.includes("?"),
        pi("?", "pathname", "search", l),
      ),
      W(
        !l.pathname || !l.pathname.includes("#"),
        pi("#", "pathname", "hash", l),
      ),
      W(!l.search || !l.search.includes("#"), pi("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (o == null) u = n;
  else {
    let h = t.length - 1;
    if (!r && o.startsWith("..")) {
      let v = o.split("/");
      for (; v[0] === ".."; ) (v.shift(), (h -= 1));
      l.pathname = v.join("/");
    }
    u = h >= 0 ? t[h] : "/";
  }
  let s = Zp(l, u),
    c = o && o !== "/" && o.endsWith("/"),
    m = (i || o === ".") && n.endsWith("/");
  return (!s.pathname.endsWith("/") && (c || m) && (s.pathname += "/"), s);
}
const vt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  bp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  eh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  th = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function nh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Kc = ["post", "put", "patch", "delete"];
new Set(Kc);
const rh = ["get", ...Kc];
new Set(rh);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ur() {
  return (
    (ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ur.apply(this, arguments)
  );
}
const Il = x.createContext(null),
  Yc = x.createContext(null),
  qe = x.createContext(null),
  Ml = x.createContext(null),
  be = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gc = x.createContext(null);
function lh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  yn() || W(!1);
  let { basename: r, navigator: l } = x.useContext(qe),
    { hash: i, pathname: o, search: u } = Fl(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : vt([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function yn() {
  return x.useContext(Ml) != null;
}
function $t() {
  return (yn() || W(!1), x.useContext(Ml).location);
}
function Xc(e) {
  x.useContext(qe).static || x.useLayoutEffect(e);
}
function Dl() {
  let { isDataRoute: e } = x.useContext(be);
  return e ? xh() : ih();
}
function ih() {
  yn() || W(!1);
  let e = x.useContext(Il),
    { basename: t, future: n, navigator: r } = x.useContext(qe),
    { matches: l } = x.useContext(be),
    { pathname: i } = $t(),
    o = JSON.stringify(su(l, n.v7_relativeSplatPath)),
    u = x.useRef(!1);
  return (
    Xc(() => {
      u.current = !0;
    }),
    x.useCallback(
      function (c, m) {
        if ((m === void 0 && (m = {}), !u.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let h = au(c, JSON.parse(o), i, m.relative === "path");
        (e == null &&
          t !== "/" &&
          (h.pathname = h.pathname === "/" ? t : vt([t, h.pathname])),
          (m.replace ? r.replace : r.push)(h, m.state, m));
      },
      [t, r, o, i, e],
    )
  );
}
const oh = x.createContext(null);
function uh(e) {
  let t = x.useContext(be).outlet;
  return t && x.createElement(oh.Provider, { value: e }, t);
}
function Fl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(qe),
    { matches: l } = x.useContext(be),
    { pathname: i } = $t(),
    o = JSON.stringify(su(l, r.v7_relativeSplatPath));
  return x.useMemo(() => au(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function sh(e, t) {
  return ah(e, t);
}
function ah(e, t, n, r) {
  yn() || W(!1);
  let { navigator: l } = x.useContext(qe),
    { matches: i } = x.useContext(be),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let c = $t(),
    m;
  if (t) {
    var h;
    let E = typeof t == "string" ? gn(t) : t;
    (s === "/" || ((h = E.pathname) != null && h.startsWith(s)) || W(!1),
      (m = E));
  } else m = c;
  let v = m.pathname || "/",
    w = v;
  if (s !== "/") {
    let E = s.replace(/^\//, "").split("/");
    w = "/" + v.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let S = Mp(e, { pathname: w }),
    g = hh(
      S &&
        S.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, u, E.params),
            pathname: vt([
              s,
              l.encodeLocation
                ? l.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? s
                : vt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
      r,
    );
  return t && g
    ? x.createElement(
        Ml.Provider,
        {
          value: {
            location: ur(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              m,
            ),
            navigationType: ut.Pop,
          },
        },
        g,
      )
    : g;
}
function ch() {
  let e = yh(),
    t = nh(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const fh = x.createElement(ch, null);
class dh extends x.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          be.Provider,
          { value: this.props.routeContext },
          x.createElement(Gc.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function ph(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = x.useContext(Il);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(be.Provider, { value: t }, r)
  );
}
function hh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let m = o.findIndex(
      (h) => h.route.id && (u == null ? void 0 : u[h.route.id]) !== void 0,
    );
    (m >= 0 || W(!1), (o = o.slice(0, Math.min(o.length, m + 1))));
  }
  let s = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let m = 0; m < o.length; m++) {
      let h = o[m];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = m),
        h.route.id)
      ) {
        let { loaderData: v, errors: w } = n,
          S =
            h.route.loader &&
            v[h.route.id] === void 0 &&
            (!w || w[h.route.id] === void 0);
        if (h.route.lazy || S) {
          ((s = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((m, h, v) => {
    let w,
      S = !1,
      g = null,
      E = null;
    n &&
      ((w = u && h.route.id ? u[h.route.id] : void 0),
      (g = h.route.errorElement || fh),
      s &&
        (c < 0 && v === 0
          ? (wh("route-fallback"), (S = !0), (E = null))
          : c === v &&
            ((S = !0), (E = h.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, v + 1)),
      f = () => {
        let d;
        return (
          w
            ? (d = g)
            : S
              ? (d = E)
              : h.route.Component
                ? (d = x.createElement(h.route.Component, null))
                : h.route.element
                  ? (d = h.route.element)
                  : (d = m),
          x.createElement(ph, {
            match: h,
            routeContext: { outlet: m, matches: p, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (h.route.ErrorBoundary || h.route.errorElement || v === 0)
      ? x.createElement(dh, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: w,
          children: f(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var Jc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Jc || {}),
  Zc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Zc || {});
function mh(e) {
  let t = x.useContext(Il);
  return (t || W(!1), t);
}
function vh(e) {
  let t = x.useContext(Yc);
  return (t || W(!1), t);
}
function gh(e) {
  let t = x.useContext(be);
  return (t || W(!1), t);
}
function qc(e) {
  let t = gh(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || W(!1), n.route.id);
}
function yh() {
  var e;
  let t = x.useContext(Gc),
    n = vh(),
    r = qc();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function xh() {
  let { router: e } = mh(Jc.UseNavigateStable),
    t = qc(Zc.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Xc(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (l, i) {
        (i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, ur({ fromRouteId: t }, i))));
      },
      [e, t],
    )
  );
}
const js = {};
function wh(e, t, n) {
  js[e] || (js[e] = !0);
}
function Sh(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Ns(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  yn() || W(!1);
  let { future: i, static: o } = x.useContext(qe),
    { matches: u } = x.useContext(be),
    { pathname: s } = $t(),
    c = Dl(),
    m = au(t, su(u, i.v7_relativeSplatPath), s, l === "path"),
    h = JSON.stringify(m);
  return (
    x.useEffect(
      () => c(JSON.parse(h), { replace: n, state: r, relative: l }),
      [c, h, l, n, r],
    ),
    null
  );
}
function kh(e) {
  return uh(e.context);
}
function Nt(e) {
  W(!1);
}
function Ch(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ut.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  yn() && W(!1);
  let s = t.replace(/^\/*/, "/"),
    c = x.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: ur({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, i, o],
    );
  typeof r == "string" && (r = gn(r));
  let {
      pathname: m = "/",
      search: h = "",
      hash: v = "",
      state: w = null,
      key: S = "default",
    } = r,
    g = x.useMemo(() => {
      let E = pn(m, s);
      return E == null
        ? null
        : {
            location: { pathname: E, search: h, hash: v, state: w, key: S },
            navigationType: l,
          };
    }, [s, m, h, v, w, S, l]);
  return g == null
    ? null
    : x.createElement(
        qe.Provider,
        { value: c },
        x.createElement(Ml.Provider, { children: n, value: g }),
      );
}
function Eh(e) {
  let { children: t, location: n } = e;
  return sh(ao(t), n);
}
new Promise(() => {});
function ao(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === x.Fragment) {
        n.push.apply(n, ao(r.props.children, i));
        return;
      }
      (r.type !== Nt && W(!1), !r.props.index || !r.props.children || W(!1));
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = ao(r.props.children, i)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gl() {
  return (
    (gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gl.apply(this, arguments)
  );
}
function bc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    ((l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]));
  return n;
}
function jh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Nh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !jh(e);
}
const Ph = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  _h = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Lh = "6";
try {
  window.__reactRouterVersion = Lh;
} catch {}
const Th = x.createContext({ isTransitioning: !1 }),
  Rh = "startTransition",
  Ps = wf[Rh];
function zh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = x.useRef();
  i.current == null && (i.current = zp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = x.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    m = x.useCallback(
      (h) => {
        c && Ps ? Ps(() => s(h)) : s(h);
      },
      [s, c],
    );
  return (
    x.useLayoutEffect(() => o.listen(m), [o, m]),
    x.useEffect(() => Sh(r), [r]),
    x.createElement(Ch, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
const Oh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ih = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Mh = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: c,
        preventScrollReset: m,
        viewTransition: h,
      } = t,
      v = bc(t, Ph),
      { basename: w } = x.useContext(qe),
      S,
      g = !1;
    if (typeof c == "string" && Ih.test(c) && ((S = c), Oh))
      try {
        let d = new URL(window.location.href),
          y = c.startsWith("//") ? new URL(d.protocol + c) : new URL(c),
          C = pn(y.pathname, w);
        y.origin === d.origin && C != null
          ? (c = C + y.search + y.hash)
          : (g = !0);
      } catch {}
    let E = lh(c, { relative: l }),
      p = Fh(c, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: m,
        relative: l,
        viewTransition: h,
      });
    function f(d) {
      (r && r(d), d.defaultPrevented || p(d));
    }
    return x.createElement(
      "a",
      gl({}, v, { href: S || E, onClick: g || i ? r : f, ref: n, target: s }),
    );
  }),
  Or = x.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: u,
        to: s,
        viewTransition: c,
        children: m,
      } = t,
      h = bc(t, _h),
      v = Fl(s, { relative: h.relative }),
      w = $t(),
      S = x.useContext(Yc),
      { navigator: g, basename: E } = x.useContext(qe),
      p = S != null && Uh(v) && c === !0,
      f = g.encodeLocation ? g.encodeLocation(v).pathname : v.pathname,
      d = w.pathname,
      y =
        S && S.navigation && S.navigation.location
          ? S.navigation.location.pathname
          : null;
    (l ||
      ((d = d.toLowerCase()),
      (y = y ? y.toLowerCase() : null),
      (f = f.toLowerCase())),
      y && E && (y = pn(y, E) || y));
    const C = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let P = d === f || (!o && d.startsWith(f) && d.charAt(C) === "/"),
      _ =
        y != null &&
        (y === f || (!o && y.startsWith(f) && y.charAt(f.length) === "/")),
      L = { isActive: P, isPending: _, isTransitioning: p },
      A = P ? r : void 0,
      R;
    typeof i == "function"
      ? (R = i(L))
      : (R = [
          i,
          P ? "active" : null,
          _ ? "pending" : null,
          p ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let ve = typeof u == "function" ? u(L) : u;
    return x.createElement(
      Mh,
      gl({}, h, {
        "aria-current": A,
        className: R,
        ref: n,
        style: ve,
        to: s,
        viewTransition: c,
      }),
      typeof m == "function" ? m(L) : m,
    );
  });
var co;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(co || (co = {}));
var _s;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(_s || (_s = {}));
function Dh(e) {
  let t = x.useContext(Il);
  return (t || W(!1), t);
}
function Fh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      viewTransition: u,
    } = t === void 0 ? {} : t,
    s = Dl(),
    c = $t(),
    m = Fl(e, { relative: o });
  return x.useCallback(
    (h) => {
      if (Nh(h, n)) {
        h.preventDefault();
        let v = r !== void 0 ? r : vl(c) === vl(m);
        s(e, {
          replace: v,
          state: l,
          preventScrollReset: i,
          relative: o,
          viewTransition: u,
        });
      }
    },
    [c, s, m, r, l, n, e, i, o, u],
  );
}
function Uh(e, t) {
  t === void 0 && (t = {});
  let n = x.useContext(Th);
  n == null && W(!1);
  let { basename: r } = Dh(co.useViewTransitionState),
    l = Fl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = pn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = pn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return so(l.pathname, o) != null || so(l.pathname, i) != null;
}
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $h = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ef = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ah = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bh = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: i,
      iconNode: o,
      ...u
    },
    s,
  ) =>
    x.createElement(
      "svg",
      {
        ref: s,
        ...Ah,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: ef("lucide", l),
        ...u,
      },
      [
        ...o.map(([c, m]) => x.createElement(c, m)),
        ...(Array.isArray(i) ? i : [i]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xn = (e, t) => {
  const n = x.forwardRef(({ className: r, ...l }, i) =>
    x.createElement(Bh, {
      ref: i,
      iconNode: t,
      className: ef(`lucide-${$h(e)}`, r),
      ...l,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fo = xn("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vh = xn("ClipboardCheck", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wh = xn("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  [
    "rect",
    { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
  ],
  [
    "rect",
    { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
  ],
  [
    "rect",
    { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hh = xn("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qh = xn("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kh = xn("Users", [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ]),
  Yh = typeof window < "u" ? window.location.hostname : "localhost",
  Gh = `http://${Yh}:3001/api`;
async function $e(e, t = {}) {
  const n = await fetch(`${Gh}${e}`, {
    headers: { "Content-Type": "application/json", ...(t.headers || {}) },
    ...t,
  });
  if (!n.ok) throw new Error("Erro na comunicação com a API");
  return n.json();
}
function Xh() {
  const [e, t] = x.useState("admin@escola.edu.br"),
    [n, r] = x.useState("123456"),
    l = Dl(),
    [i, o] = x.useState("");
  async function u(s) {
    (s.preventDefault(), o(""));
    try {
      const c = await $e("/login", {
        method: "POST",
        body: JSON.stringify({ email: e, password: n }),
      });
      (localStorage.setItem("token", c.token), l("/", { replace: !0 }));
    } catch (c) {
      (o(
        "Não foi possível conectar ao servidor. Verifique se o backend está disponível e use o IP correto.",
      ),
        console.error(c));
    }
  }
  return a.jsxs("div", {
    className: "loginPage",
    children: [
      a.jsxs("section", {
        className: "loginHero",
        children: [
          a.jsxs("div", {
            className: "brand",
            children: [
              a.jsx("div", {
                className: "brandIcon",
                children: a.jsx(fo, { size: 24 }),
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("strong", { children: "Controle de Oficinas" }),
                  a.jsx("span", { children: "Sistema Educacional" }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "heroText",
            children: [
              a.jsxs("h1", {
                children: [
                  "Gerencie suas ",
                  a.jsx("span", { children: "oficinas" }),
                  " com facilidade.",
                ],
              }),
              a.jsx("p", {
                children:
                  "Controle inscrições, presenças, professores e alunos em um único lugar.",
              }),
              a.jsxs("div", {
                className: "heroStats",
                children: [
                  a.jsxs("strong", {
                    children: ["5+", a.jsx("small", { children: "Oficinas" })],
                  }),
                  a.jsxs("strong", {
                    children: ["120+", a.jsx("small", { children: "Alunos" })],
                  }),
                  a.jsxs("strong", {
                    children: [
                      "8",
                      a.jsx("small", { children: "Professores" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsx("section", {
        className: "loginFormArea",
        children: a.jsxs("form", {
          onSubmit: u,
          className: "loginForm",
          children: [
            a.jsx("h2", { children: "Bem-vindo de volta" }),
            a.jsx("p", { children: "Acesse sua conta para continuar." }),
            a.jsx("label", { children: "E-mail" }),
            a.jsx("input", {
              type: "email",
              value: e,
              onChange: (s) => t(s.target.value),
            }),
            a.jsx("label", { children: "Senha" }),
            a.jsx("input", {
              type: "password",
              value: n,
              onChange: (s) => r(s.target.value),
            }),
            a.jsx("button", { type: "submit", children: "Entrar" }),
            i && a.jsx("p", { className: "error", children: i }),
            a.jsx("a", { children: "Esqueci minha senha" }),
          ],
        }),
      }),
    ],
  });
}
function sr({ status: e }) {
  const t =
    {
      Ativa: "badge success",
      Ativo: "badge success",
      Planejada: "badge warning",
      Encerrada: "badge muted",
      Inativo: "badge muted",
      Professor: "badge blue",
      Tutor: "badge warning",
      Aluno: "badge success",
      Administrador: "badge purple",
    }[e] || "badge";
  return a.jsx("span", { className: t, children: e });
}
function Jh() {
  const [e, t] = x.useState(null);
  return (
    x.useEffect(() => {
      $e("/dashboard").then(t);
    }, []),
    e
      ? a.jsxs(a.Fragment, {
          children: [
            a.jsx("h1", { children: "Dashboard" }),
            a.jsxs("div", {
              className: "statsGrid",
              children: [
                a.jsxs("div", {
                  className: "card",
                  children: [
                    a.jsx("span", { children: "Total de Oficinas" }),
                    a.jsx("strong", { children: e.totalWorkshops }),
                    a.jsx("small", { children: "+2 este mês" }),
                  ],
                }),
                a.jsxs("div", {
                  className: "card",
                  children: [
                    a.jsx("span", { children: "Total de Alunos" }),
                    a.jsx("strong", { children: e.totalStudents }),
                    a.jsx("small", { children: "+14 este mês" }),
                  ],
                }),
                a.jsxs("div", {
                  className: "card",
                  children: [
                    a.jsx("span", { children: "Professores" }),
                    a.jsx("strong", { children: e.totalTeachers }),
                    a.jsx("small", { children: "Estável" }),
                  ],
                }),
                a.jsxs("div", {
                  className: "card",
                  children: [
                    a.jsx("span", { children: "Tutores" }),
                    a.jsx("strong", { children: e.totalTutors }),
                    a.jsx("small", { children: "+1 este mês" }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "dashboardGrid",
              children: [
                a.jsxs("div", {
                  className: "panel",
                  children: [
                    a.jsx("h2", { children: "Inscrições por mês" }),
                    a.jsx("div", {
                      className: "chart",
                      children: [2, 4, 3, 6, 5, 8].map((n, r) =>
                        a.jsxs(
                          "div",
                          {
                            className: "barWrap",
                            children: [
                              a.jsx("div", {
                                className: "bar",
                                style: { height: `${n * 22}px` },
                              }),
                              a.jsx("span", {
                                children: [
                                  "Jan",
                                  "Fev",
                                  "Mar",
                                  "Abr",
                                  "Mai",
                                  "Jun",
                                ][r],
                              }),
                            ],
                          },
                          r,
                        ),
                      ),
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "panel",
                  children: [
                    a.jsx("h2", { children: "Atividade Recente" }),
                    a.jsx("ul", {
                      className: "activity",
                      children: e.activities.map((n) =>
                        a.jsxs(
                          "li",
                          {
                            children: [
                              n,
                              a.jsx("small", { children: "há poucos minutos" }),
                            ],
                          },
                          n,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "panel",
              children: [
                a.jsx("h2", { children: "Próximas Oficinas" }),
                e.upcomingWorkshops.map((n) =>
                  a.jsxs(
                    "div",
                    {
                      className: "upcomingItem",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("strong", { children: n.name }),
                            a.jsxs("span", {
                              children: [n.date, " • ", n.time],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx(sr, { status: n.status }),
                            a.jsxs("small", {
                              children: [
                                n.enrolled,
                                "/",
                                n.maxStudents,
                                " vagas",
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    n.id,
                  ),
                ),
              ],
            }),
          ],
        })
      : a.jsx("p", { children: "Carregando..." })
  );
}
const Ls = {
  name: "",
  theme: "",
  description: "",
  teacher: "",
  tutor: "",
  date: "",
  time: "",
  location: "",
  maxStudents: 20,
};
function Zh() {
  const [e, t] = x.useState([]),
    [n, r] = x.useState(""),
    [l, i] = x.useState(!1),
    [o, u] = x.useState(!1),
    [s, c] = x.useState(null),
    [m, h] = x.useState(Ls);
  function v() {
    $e(`/workshops?search=${n}`).then(t);
  }
  x.useEffect(() => {
    v();
  }, [n]);
  async function w(g) {
    (g.preventDefault(),
      await $e("/workshops", { method: "POST", body: JSON.stringify(m) }),
      h(Ls),
      i(!1),
      v());
  }
  function S(g) {
    (c(g), u(!0));
  }
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs("div", {
        className: "pageHeader",
        children: [
          a.jsxs("div", {
            children: [
              a.jsx("h1", { children: "Gestão de Oficinas" }),
              a.jsxs("p", { children: [e.length, " oficinas cadastradas"] }),
            ],
          }),
          a.jsx("button", { onClick: () => i(!l), children: "+ Nova Oficina" }),
        ],
      }),
      l &&
        a.jsx("div", {
          className: "modalOverlay",
          onClick: () => i(!1),
          children: a.jsx("div", {
            className: "modalContent",
            onClick: (g) => g.stopPropagation(),
            children: a.jsxs("form", {
              className: "formPanel",
              onSubmit: w,
              children: [
                a.jsx("h2", { children: "Cadastro de Oficina" }),
                [
                  ["name", "Nome da oficina"],
                  ["theme", "Tema"],
                  ["teacher", "Professor responsável"],
                  ["tutor", "Tutor responsável"],
                  ["date", "Data"],
                  ["time", "Horário"],
                  ["location", "Local"],
                  ["maxStudents", "Limite de vagas"],
                ].map(([g, E]) =>
                  a.jsxs(
                    "label",
                    {
                      children: [
                        E,
                        a.jsx("input", {
                          type:
                            g === "date"
                              ? "date"
                              : g === "maxStudents"
                                ? "number"
                                : "text",
                          value: m[g],
                          onChange: (p) => h({ ...m, [g]: p.target.value }),
                          required: !0,
                        }),
                      ],
                    },
                    g,
                  ),
                ),
                a.jsxs("label", {
                  className: "full",
                  children: [
                    "Descrição",
                    a.jsx("textarea", {
                      value: m.description,
                      onChange: (g) => h({ ...m, description: g.target.value }),
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "actions",
                  children: [
                    a.jsx("button", {
                      type: "button",
                      className: "secondary",
                      onClick: () => i(!1),
                      children: "Cancelar",
                    }),
                    a.jsx("button", { children: "Salvar" }),
                  ],
                }),
              ],
            }),
          }),
        }),
      o &&
        s &&
        a.jsx("div", {
          className: "modalOverlay",
          onClick: () => u(!1),
          children: a.jsx("div", {
            className: "modalContent",
            onClick: (g) => g.stopPropagation(),
            children: a.jsxs("div", {
              className: "formPanel",
              children: [
                a.jsx("h2", { children: "Detalhes da Oficina" }),
                a.jsxs("div", {
                  className: "workshopDetails",
                  children: [
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Nome:" }),
                        a.jsx("span", { children: s.name }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Tema:" }),
                        a.jsx("span", { children: s.theme }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Professor:" }),
                        a.jsx("span", { children: s.teacher }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Tutor:" }),
                        a.jsx("span", { children: s.tutor }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Data:" }),
                        a.jsx("span", { children: s.date }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Horário:" }),
                        a.jsx("span", { children: s.time }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Local:" }),
                        a.jsx("span", { children: s.location }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Vagas:" }),
                        a.jsxs("span", {
                          children: [s.enrolled, "/", s.maxStudents],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className: "detailRow",
                      children: [
                        a.jsx("strong", { children: "Status:" }),
                        a.jsx(sr, { status: s.status }),
                      ],
                    }),
                    s.description &&
                      a.jsxs("div", {
                        className: "detailRow full",
                        children: [
                          a.jsx("strong", { children: "Descrição:" }),
                          a.jsx("p", { children: s.description }),
                        ],
                      }),
                  ],
                }),
                a.jsx("div", {
                  className: "actions",
                  children: a.jsx("button", {
                    type: "button",
                    className: "secondary",
                    onClick: () => u(!1),
                    children: "Fechar",
                  }),
                }),
              ],
            }),
          }),
        }),
      a.jsx("input", {
        className: "searchInput",
        placeholder: "Buscar por nome ou tema...",
        value: n,
        onChange: (g) => r(g.target.value),
      }),
      a.jsx("div", {
        className: "workshopGrid",
        children: e.map((g) => {
          const E = Math.min(100, (g.enrolled / g.maxStudents) * 100);
          return a.jsxs(
            "div",
            {
              className: "workshopCard",
              children: [
                a.jsx("div", { className: "workshopAccent" }),
                a.jsxs("div", {
                  className: "workshopTop",
                  children: [
                    a.jsxs("div", {
                      children: [
                        a.jsx("h2", { children: g.name }),
                        a.jsx("p", { children: g.theme }),
                      ],
                    }),
                    a.jsx(sr, { status: g.status }),
                  ],
                }),
                a.jsxs("div", {
                  className: "workshopInfo",
                  children: [
                    a.jsxs("span", { children: [g.date, " • ", g.time] }),
                    a.jsx("span", { children: g.location }),
                    a.jsxs("span", { children: ["Prof. ", g.teacher] }),
                  ],
                }),
                a.jsxs("div", {
                  className: "progressText",
                  children: [
                    a.jsx("span", { children: "Vagas preenchidas" }),
                    a.jsxs("strong", {
                      children: [g.enrolled, "/", g.maxStudents],
                    }),
                  ],
                }),
                a.jsx("div", {
                  className: "progress",
                  children: a.jsx("div", { style: { width: `${E}%` } }),
                }),
                a.jsx("button", {
                  className: "detailsButton",
                  onClick: () => S(g),
                  children: "Ver detalhes",
                }),
              ],
            },
            g.id,
          );
        }),
      }),
    ],
  });
}
const Ts = { name: "", email: "", phone: "", course: "", role: "Aluno" };
function qh() {
  const [e, t] = x.useState([]),
    [n, r] = x.useState([]),
    [l, i] = x.useState(""),
    [o, u] = x.useState(""),
    [s, c] = x.useState(!1),
    [m, h] = x.useState(Ts),
    [v, w] = x.useState("");
  x.useEffect(() => {
    ($e(`/users?search=${l}&role=${o}`).then(t),
      $e("/workshops").then((d) => {
        const y = d
          .filter((C) => C.status === "Ativa" || C.status === "Planejada")
          .map((C) => C.name)
          .filter((C, P, _) => _.indexOf(C) === P);
        r(y);
      }));
  }, [l, o]);
  function S(d) {
    const C = d.replace(/\D/g, "").match(/^(\d{2})(\d{4,5})(\d{4})$/);
    return C ? `(${C[1]}) ${C[2]}-${C[3]}` : d;
  }
  function g(d) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d);
  }
  function E(d) {
    const y = d.target.value;
    (h({ ...m, email: y }), y && !g(y) ? w("E-mail inválido") : w(""));
  }
  function p(d) {
    const y = S(d.target.value);
    h({ ...m, phone: y });
  }
  async function f(d) {
    if ((d.preventDefault(), !g(m.email))) {
      w("E-mail inválido");
      return;
    }
    (await $e("/users", { method: "POST", body: JSON.stringify(m) }),
      h(Ts),
      c(!1),
      w(""),
      $e(`/users?search=${l}&role=${o}`).then(t));
  }
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs("div", {
        className: "pageHeader",
        children: [
          a.jsxs("div", {
            children: [
              a.jsx("h1", { children: "Gestão de Usuários" }),
              a.jsxs("p", { children: [e.length, " usuários cadastrados"] }),
            ],
          }),
          a.jsx("button", { onClick: () => c(!0), children: "+ Novo Usuário" }),
        ],
      }),
      s &&
        a.jsx("div", {
          className: "modalOverlay",
          onClick: () => c(!1),
          children: a.jsx("div", {
            className: "modalContent",
            onClick: (d) => d.stopPropagation(),
            children: a.jsxs("form", {
              className: "formPanel",
              onSubmit: f,
              children: [
                a.jsx("h2", { children: "Cadastro de Usuário" }),
                a.jsxs("label", {
                  children: [
                    "Nome completo",
                    a.jsx("input", {
                      type: "text",
                      value: m.name,
                      onChange: (d) => h({ ...m, name: d.target.value }),
                      required: !0,
                    }),
                  ],
                }),
                a.jsxs("label", {
                  children: [
                    "E-mail",
                    a.jsx("input", {
                      type: "email",
                      value: m.email,
                      onChange: E,
                      required: !0,
                    }),
                    v && a.jsx("span", { className: "error", children: v }),
                  ],
                }),
                a.jsxs("label", {
                  children: [
                    "Telefone",
                    a.jsx("input", {
                      type: "text",
                      value: m.phone,
                      onChange: p,
                      placeholder: "(11) 99999-9999",
                      required: !0,
                    }),
                  ],
                }),
                a.jsxs("label", {
                  children: [
                    "Curso",
                    a.jsxs("select", {
                      value: m.course,
                      onChange: (d) => h({ ...m, course: d.target.value }),
                      required: !0,
                      children: [
                        a.jsx("option", {
                          value: "",
                          children: "Selecione um curso",
                        }),
                        n.map((d) =>
                          a.jsx("option", { value: d, children: d }, d),
                        ),
                      ],
                    }),
                  ],
                }),
                a.jsxs("label", {
                  className: "full",
                  children: [
                    "Tipo de perfil",
                    a.jsxs("select", {
                      value: m.role,
                      onChange: (d) => h({ ...m, role: d.target.value }),
                      required: !0,
                      children: [
                        a.jsx("option", { value: "Aluno", children: "Aluno" }),
                        a.jsx("option", {
                          value: "Professor",
                          children: "Professor",
                        }),
                        a.jsx("option", { value: "Tutor", children: "Tutor" }),
                        a.jsx("option", {
                          value: "Administrador",
                          children: "Administrador",
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  className: "actions",
                  children: [
                    a.jsx("button", {
                      type: "button",
                      className: "secondary",
                      onClick: () => {
                        (c(!1), w(""));
                      },
                      children: "Cancelar",
                    }),
                    a.jsx("button", { disabled: !!v, children: "Salvar" }),
                  ],
                }),
              ],
            }),
          }),
        }),
      a.jsxs("div", {
        className: "filters",
        children: [
          a.jsx("input", {
            placeholder: "Buscar por nome ou e-mail...",
            value: l,
            onChange: (d) => i(d.target.value),
          }),
          a.jsxs("select", {
            value: o,
            onChange: (d) => u(d.target.value),
            children: [
              a.jsx("option", { value: "", children: "Todos os perfis" }),
              a.jsx("option", { value: "Professor", children: "Professor" }),
              a.jsx("option", { value: "Tutor", children: "Tutor" }),
              a.jsx("option", { value: "Aluno", children: "Aluno" }),
              a.jsx("option", {
                value: "Administrador",
                children: "Administrador",
              }),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "tablePanel",
        children: a.jsxs("table", {
          children: [
            a.jsx("thead", {
              children: a.jsxs("tr", {
                children: [
                  a.jsx("th", { children: "Usuário" }),
                  a.jsx("th", { children: "Contato" }),
                  a.jsx("th", { children: "Curso" }),
                  a.jsx("th", { children: "Perfil" }),
                  a.jsx("th", { children: "Status" }),
                ],
              }),
            }),
            a.jsx("tbody", {
              children: e.map((d) =>
                a.jsxs(
                  "tr",
                  {
                    children: [
                      a.jsxs("td", {
                        children: [
                          a.jsx("span", {
                            className: "miniAvatar",
                            children: d.name.slice(0, 2).toUpperCase(),
                          }),
                          d.name,
                        ],
                      }),
                      a.jsxs("td", {
                        children: [
                          d.email,
                          a.jsx("small", { children: d.phone }),
                        ],
                      }),
                      a.jsx("td", { children: d.course }),
                      a.jsx("td", { children: a.jsx(sr, { status: d.role }) }),
                      a.jsx("td", {
                        children: a.jsx(sr, { status: d.status }),
                      }),
                    ],
                  },
                  d.id,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function bh() {
  const [e, t] = x.useState([]);
  x.useEffect(() => {
    $e("/attendance/1").then(t);
  }, []);
  async function n(u) {
    const s = await $e(`/attendance/${u.id}`, {
      method: "PATCH",
      body: JSON.stringify({ present: !u.present }),
    });
    t(e.map((c) => (c.id === u.id ? s : c)));
  }
  const r = e.length,
    l = e.filter((u) => u.present).length,
    i = r - l,
    o = r ? Math.round((l / r) * 100) : 0;
  return a.jsxs("div", {
    className: "attendancePage",
    children: [
      a.jsx("h1", { children: "Controle de Presença" }),
      a.jsx("p", { children: "Registre a presença dos alunos na oficina" }),
      a.jsxs("div", {
        className: "panel",
        children: [
          a.jsx("label", { children: "Oficina" }),
          a.jsx("select", {
            children: a.jsx("option", {
              children: "Introdução ao Python — 12/05/2026",
            }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "attendanceStats",
        children: [
          a.jsxs("div", {
            className: "card",
            children: [
              a.jsx("strong", { children: r }),
              a.jsx("span", { children: "Total" }),
            ],
          }),
          a.jsxs("div", {
            className: "card green",
            children: [
              a.jsx("strong", { children: l }),
              a.jsx("span", { children: "Presentes" }),
            ],
          }),
          a.jsxs("div", {
            className: "card red",
            children: [
              a.jsx("strong", { children: i }),
              a.jsx("span", { children: "Ausentes" }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className: "panel",
        children: [
          a.jsxs("div", {
            className: "progressText",
            children: [
              a.jsx("strong", { children: "Taxa de participação" }),
              a.jsxs("strong", { children: [o, "%"] }),
            ],
          }),
          a.jsx("div", {
            className: "progress",
            children: a.jsx("div", { style: { width: `${o}%` } }),
          }),
        ],
      }),
      a.jsxs("div", {
        className: "panel",
        children: [
          a.jsx("h2", { children: "Lista de Alunos" }),
          e.map((u) =>
            a.jsxs(
              "label",
              {
                className: u.present ? "student present" : "student",
                children: [
                  a.jsx("input", {
                    type: "checkbox",
                    checked: u.present,
                    onChange: () => n(u),
                  }),
                  a.jsx("span", {
                    className: "miniAvatar",
                    children: u.student.slice(0, 2).toUpperCase(),
                  }),
                  a.jsx("strong", { children: u.student }),
                  a.jsx("em", { children: u.present ? "Presente" : "Ausente" }),
                ],
              },
              u.id,
            ),
          ),
        ],
      }),
    ],
  });
}
function em() {
  const [e, t] = x.useState(!1),
    n = Dl();
  function r() {
    (localStorage.removeItem("token"), n("/login", { replace: !0 }));
  }
  function l() {
    t(!1);
  }
  return a.jsxs("div", {
    className: `app ${e ? "menu-open" : ""}`,
    children: [
      a.jsxs("aside", {
        className: `sidebar ${e ? "open" : ""}`,
        children: [
          a.jsxs("div", {
            className: "brand",
            children: [
              a.jsx("div", {
                className: "brandIcon",
                children: a.jsx(fo, { size: 22 }),
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("strong", { children: "Controle de Oficinas" }),
                  a.jsx("span", { children: "Sistema Educacional" }),
                ],
              }),
            ],
          }),
          a.jsxs("nav", {
            children: [
              a.jsxs(Or, {
                to: "/",
                end: !0,
                onClick: l,
                children: [a.jsx(Wh, { size: 18 }), "Dashboard"],
              }),
              a.jsxs(Or, {
                to: "/oficinas",
                onClick: l,
                children: [a.jsx(fo, { size: 18 }), "Oficinas"],
              }),
              a.jsxs(Or, {
                to: "/usuarios",
                onClick: l,
                children: [a.jsx(Kh, { size: 18 }), "Usuários"],
              }),
              a.jsxs(Or, {
                to: "/presenca",
                onClick: l,
                children: [a.jsx(Vh, { size: 18 }), "Presença"],
              }),
            ],
          }),
          a.jsxs("button", {
            className: "logout",
            onClick: r,
            children: [a.jsx(Hh, { size: 18 }), "Sair"],
          }),
        ],
      }),
      e && a.jsx("div", { className: "menuBackdrop", onClick: l }),
      a.jsxs("main", {
        className: "main",
        children: [
          a.jsxs("header", {
            className: "topbar",
            children: [
              a.jsx("button", {
                className: "menuButton",
                type: "button",
                onClick: () => t(!e),
                children: a.jsx(Qh, { size: 20 }),
              }),
              a.jsx("input", { placeholder: "Buscar..." }),
              a.jsx("div", { className: "avatar", children: "AD" }),
            ],
          }),
          a.jsx("section", { className: "content", children: a.jsx(kh, {}) }),
        ],
      }),
    ],
  });
}
function tm() {
  const [e, t] = x.useState(!!localStorage.getItem("token")),
    n = $t();
  return (
    x.useEffect(() => {
      t(!!localStorage.getItem("token"));
    }, [n.pathname]),
    a.jsxs(Eh, {
      children: [
        a.jsx(Nt, {
          path: "/login",
          element: e ? a.jsx(Ns, { to: "/", replace: !0 }) : a.jsx(Xh, {}),
        }),
        a.jsxs(Nt, {
          path: "/",
          element: e ? a.jsx(em, {}) : a.jsx(Ns, { to: "/login", replace: !0 }),
          children: [
            a.jsx(Nt, { index: !0, element: a.jsx(Jh, {}) }),
            a.jsx(Nt, { path: "oficinas", element: a.jsx(Zh, {}) }),
            a.jsx(Nt, { path: "usuarios", element: a.jsx(qh, {}) }),
            a.jsx(Nt, { path: "presenca", element: a.jsx(bh, {}) }),
          ],
        }),
      ],
    })
  );
}
hi.createRoot(document.getElementById("root")).render(
  a.jsx(Bs.StrictMode, { children: a.jsx(zh, { children: a.jsx(tm, {}) }) }),
);
