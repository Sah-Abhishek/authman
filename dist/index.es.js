import Lt, { forwardRef as at, createElement as Ce, useState as M } from "react";
var me = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Ft() {
  if (Ie) return ne;
  Ie = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, s, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      a = {};
      for (var c in s)
        c !== "key" && (a[c] = s[c]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: n,
      key: o,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return ne.Fragment = t, ne.jsx = r, ne.jsxs = r, ne;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ut() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === de ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case b:
          return "Fragment";
        case R:
          return "Profiler";
        case h:
          return "StrictMode";
        case I:
          return "Suspense";
        case P:
          return "SuspenseList";
        case ue:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case w:
            return "Portal";
          case N:
            return l.displayName || "Context";
          case S:
            return (l._context.displayName || "Context") + ".Consumer";
          case _:
            var y = l.render;
            return l = l.displayName, l || (l = y.displayName || y.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case ee:
            return y = l.displayName || null, y !== null ? y : e(l.type) || "Memo";
          case $:
            y = l._payload, l = l._init;
            try {
              return e(l(y));
            } catch {
            }
        }
      return null;
    }
    function t(l) {
      return "" + l;
    }
    function r(l) {
      try {
        t(l);
        var y = !1;
      } catch {
        y = !0;
      }
      if (y) {
        y = console;
        var O = y.error, A = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return O.call(
          y,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), t(l);
      }
    }
    function n(l) {
      if (l === b) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === $)
        return "<...>";
      try {
        var y = e(l);
        return y ? "<" + y + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var l = H.A;
      return l === null ? null : l.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(l) {
      if (z.call(l, "key")) {
        var y = Object.getOwnPropertyDescriptor(l, "key").get;
        if (y && y.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function c(l, y) {
      function O() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          y
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: O,
        configurable: !0
      });
    }
    function m() {
      var l = e(this.type);
      return te[l] || (te[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function f(l, y, O, A, J, Oe) {
      var C = O.ref;
      return l = {
        $$typeof: d,
        type: l,
        key: y,
        props: O,
        _owner: A
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Oe
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function u(l, y, O, A, J, Oe) {
      var C = y.children;
      if (C !== void 0)
        if (A)
          if (q(C)) {
            for (A = 0; A < C.length; A++)
              g(C[A]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(C);
      if (z.call(y, "key")) {
        C = e(l);
        var X = Object.keys(y).filter(function(vt) {
          return vt !== "key";
        });
        A = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", fe[C + A] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          C,
          X,
          C
        ), fe[C + A] = !0);
      }
      if (C = null, O !== void 0 && (r(O), C = "" + O), o(y) && (r(y.key), C = "" + y.key), "key" in y) {
        O = {};
        for (var Te in y)
          Te !== "key" && (O[Te] = y[Te]);
      } else O = y;
      return C && c(
        O,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), f(
        l,
        C,
        O,
        s(),
        J,
        Oe
      );
    }
    function g(l) {
      E(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === $ && (l._payload.status === "fulfilled" ? E(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function E(l) {
      return typeof l == "object" && l !== null && l.$$typeof === d;
    }
    var T = Lt, d = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), N = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), de = Symbol.for("react.client.reference"), H = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, q = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var F, te = {}, U = T.react_stack_bottom_frame.bind(
      T,
      a
    )(), re = K(n(a)), fe = {};
    se.Fragment = b, se.jsx = function(l, y, O) {
      var A = 1e4 > H.recentlyCreatedOwnerStacks++;
      return u(
        l,
        y,
        O,
        !1,
        A ? Error("react-stack-top-frame") : U,
        A ? K(n(l)) : re
      );
    }, se.jsxs = function(l, y, O) {
      var A = 1e4 > H.recentlyCreatedOwnerStacks++;
      return u(
        l,
        y,
        O,
        !0,
        A ? Error("react-stack-top-frame") : U,
        A ? K(n(l)) : re
      );
    };
  })()), se;
}
var $e;
function Dt() {
  return $e || ($e = 1, process.env.NODE_ENV === "production" ? me.exports = Ft() : me.exports = Ut()), me.exports;
}
var p = Dt();
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mt = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), He = (e) => {
  const t = Mt(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, it = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), It = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var qt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = at(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: o,
    ...c
  }, m) => Ce(
    "svg",
    {
      ref: m,
      ...qt,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: it("lucide", s),
      ...!a && !It(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...o.map(([f, u]) => Ce(f, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = (e, t) => {
  const r = at(
    ({ className: n, ...s }, a) => Ce($t, {
      ref: a,
      iconNode: t,
      className: it(
        `lucide-${Bt(He(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = He(e), r;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], zt = Fe("eye-off", Ht);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Wt = Fe("eye", Jt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
], Yt = Fe("log-in", Vt), Tn = ({
  onSubmit: e,
  heading: t = "Welcome Back",
  subheading: r = "Sign in to your account to continue",
  fields: n = [
    { name: "email", type: "email", label: "Email" }
  ]
}) => {
  const [s, a] = M({}), [o, c] = M({}), [m, f] = M(!1), [u, g] = M(!1), [E, T] = M(!1), d = (h) => {
    a({ ...s, [h.target.name]: h.target.value });
  }, w = () => {
    const h = {};
    return n.forEach((R) => {
      const S = s[R.name]?.trim() || "";
      S ? R.type === "email" && !/\S+@\S+\.\S+/.test(S) && (h[R.name] = "Please enter a valid email address") : h[R.name] = `${R.label || R.name} is required`;
    }), s.password ? s.password.length < 6 && (h.password = "Password must be at least 6 characters") : h.password = "Password is required", h;
  }, b = (h) => {
    h.preventDefault(), f(!0);
    const R = w();
    c(R), Object.keys(R).length === 0 && e?.(s, E);
  };
  return /* @__PURE__ */ p.jsx("div", { className: "bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "w-full max-w-3xl mx-auto py-16 px-10 md:px-16", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ p.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight", children: t }),
      /* @__PURE__ */ p.jsx("p", { className: "text-lg text-gray-500 font-light", children: r })
    ] }),
    /* @__PURE__ */ p.jsxs("form", { onSubmit: b, className: "space-y-6", children: [
      n.map((h) => /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx(
          "label",
          {
            htmlFor: h.name,
            className: "block text-sm font-semibold text-gray-700 mb-2 capitalize",
            children: h.label || h.name
          }
        ),
        /* @__PURE__ */ p.jsx(
          "input",
          {
            id: h.name,
            name: h.name,
            type: h.type,
            value: s[h.name] || "",
            onChange: d,
            placeholder: `Enter your ${h.name}`,
            className: `w-full px-4 py-3 border-2 rounded-xl text-gray-800 transition-all duration-200 font-medium
                  focus:outline-none
                  ${m && o[h.name] ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200" : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"}`
          }
        ),
        m && o[h.name] && /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-xs mt-2 font-semibold flex items-center gap-1", children: [
          /* @__PURE__ */ p.jsx("span", { children: "✕" }),
          " ",
          o[h.name]
        ] })
      ] }, h.name)),
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx(
          "label",
          {
            htmlFor: "password",
            className: "block text-sm font-semibold text-gray-700 mb-2",
            children: "Password"
          }
        ),
        /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ p.jsx(
            "input",
            {
              id: "password",
              name: "password",
              type: u ? "text" : "password",
              value: s.password || "",
              onChange: d,
              placeholder: "Enter your password",
              className: `w-full px-4 py-3 border-2 rounded-xl text-gray-800 transition-all duration-200 font-medium pr-12
                  focus:outline-none
                  ${m && o.password ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200" : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"}`
            }
          ),
          /* @__PURE__ */ p.jsx(
            "button",
            {
              type: "button",
              onClick: () => g(!u),
              className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors duration-200",
              "aria-label": u ? "Hide password" : "Show password",
              children: u ? /* @__PURE__ */ p.jsx(zt, { size: 20 }) : /* @__PURE__ */ p.jsx(Wt, { size: 20 })
            }
          )
        ] }),
        m && o.password && /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-xs mt-2 font-semibold flex items-center gap-1", children: [
          /* @__PURE__ */ p.jsx("span", { children: "✕" }),
          " ",
          o.password
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
        /* @__PURE__ */ p.jsxs("label", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ p.jsx(
            "input",
            {
              type: "checkbox",
              className: "accent-indigo-600 h-4 w-4",
              name: "remember",
              value: E,
              onChange: (h) => T(h.target.checked)
            }
          ),
          "Remember me"
        ] }),
        /* @__PURE__ */ p.jsx(
          "a",
          {
            href: "/forgot-password",
            className: "text-sm text-indigo-600 hover:text-indigo-700 font-medium",
            children: "Forgot password?"
          }
        )
      ] }),
      /* @__PURE__ */ p.jsxs(
        "button",
        {
          type: "submit",
          className: "w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-lg py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500/30 shadow-lg shadow-indigo-200 mt-8 flex items-center justify-center gap-2",
          children: [
            /* @__PURE__ */ p.jsx(Yt, { size: 22 }),
            "Sign In"
          ]
        }
      ),
      /* @__PURE__ */ p.jsxs("p", { className: "text-center text-gray-600 text-sm mt-6", children: [
        "Don’t have an account?",
        " ",
        /* @__PURE__ */ p.jsx(
          "a",
          {
            href: "/signup",
            className: "font-semibold text-indigo-600 hover:text-indigo-700 transition-colors duration-200",
            children: "Create one"
          }
        )
      ] })
    ] })
  ] }) });
}, An = ({
  onSubmit: e,
  fields: t = [],
  heading: r = "Create Account",
  subheading: n = "Join us today and start your journey"
}) => {
  const [s, a] = M({}), [o, c] = M({}), [m, f] = M(!1), [u, g] = M(!1), [E, T] = M(!1), d = (h) => {
    a({ ...s, [h.target.name]: h.target.value });
  }, w = () => {
    const h = {};
    t.forEach((N) => {
      const _ = s[N.name]?.trim() || "";
      _ ? N.type === "email" && !/\S+@\S+\.\S+/.test(_) && (h[N.name] = "Please enter a valid email address") : h[N.name] = `${N.label || N.name} is required`;
    });
    const R = s.password || "", S = s.confirmPassword || "";
    return R ? R.length < 6 && (h.password = "Password must be at least 6 characters") : h.password = "Password is required", S ? R && S && R !== S && (h.confirmPassword = "Passwords do not match") : h.confirmPassword = "Please confirm your password", h;
  }, b = (h) => {
    h.preventDefault(), f(!0);
    const R = w();
    c(R), Object.keys(R).length === 0 && e?.(s);
  };
  return /* @__PURE__ */ p.jsx("div", { className: "bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100", children: /* @__PURE__ */ p.jsxs("div", { className: "w-full bg-white border border-gray-200 shadow-sm", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "text-center pt-12 pb-8 px-6 border-b border-gray-100", children: [
      /* @__PURE__ */ p.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-3", children: r }),
      /* @__PURE__ */ p.jsx("p", { className: "text-lg text-gray-500", children: n })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "max-w-6xl mx-auto w-full p-8 md:p-14", children: /* @__PURE__ */ p.jsxs("form", { onSubmit: b, className: "space-y-7", children: [
      t.map((h) => /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx(
          "label",
          {
            htmlFor: h.name,
            className: "block text-sm font-semibold text-gray-700 mb-2 capitalize",
            children: h.label || h.name
          }
        ),
        /* @__PURE__ */ p.jsx(
          "input",
          {
            id: h.name,
            name: h.name,
            type: h.type,
            value: s[h.name] || "",
            onChange: d,
            placeholder: `Enter your ${h.name}`,
            className: `w-full px-4 py-3 border-2 rounded-xl text-gray-800 font-medium transition-all duration-200
                    focus:outline-none
                    ${m && o[h.name] ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200" : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"}`
          }
        ),
        m && o[h.name] && /* @__PURE__ */ p.jsx("p", { className: "text-red-600 text-sm mt-2 font-semibold", children: o[h.name] })
      ] }, h.name)),
      /* @__PURE__ */ p.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Password"
            }
          ),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: "password",
                name: "password",
                type: u ? "text" : "password",
                value: s.password || "",
                onChange: d,
                placeholder: "Minimum 6 characters",
                className: `w-full px-4 py-3 border-2 rounded-xl text-gray-800 font-medium pr-12 transition-all duration-200
                      ${m && o.password ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200" : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"}`
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => g(!u),
                className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition",
                children: u ? /* @__PURE__ */ p.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: [
                  /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" }),
                  /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })
                ] }) : /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" }) })
              }
            )
          ] }),
          m && o.password && /* @__PURE__ */ p.jsx("p", { className: "text-red-600 text-sm mt-2 font-semibold", children: o.password })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { children: [
          /* @__PURE__ */ p.jsx(
            "label",
            {
              htmlFor: "confirmPassword",
              className: "block text-sm font-semibold text-gray-700 mb-2",
              children: "Confirm Password"
            }
          ),
          /* @__PURE__ */ p.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ p.jsx(
              "input",
              {
                id: "confirmPassword",
                name: "confirmPassword",
                type: E ? "text" : "password",
                value: s.confirmPassword || "",
                onChange: d,
                placeholder: "Re-enter your password",
                className: `w-full px-4 py-3 border-2 rounded-xl text-gray-800 font-medium pr-12 transition-all duration-200
                      ${m && o.confirmPassword ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200" : "border-gray-200 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 hover:border-gray-300"}`
              }
            ),
            /* @__PURE__ */ p.jsx(
              "button",
              {
                type: "button",
                onClick: () => T(!E),
                className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition",
                children: E ? /* @__PURE__ */ p.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: [
                  /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" }),
                  /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" })
                ] }) : /* @__PURE__ */ p.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ p.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" }) })
              }
            )
          ] }),
          m && o.confirmPassword && /* @__PURE__ */ p.jsx("p", { className: "text-red-600 text-sm mt-2 font-semibold", children: o.confirmPassword })
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "pt-6", children: /* @__PURE__ */ p.jsx(
        "button",
        {
          type: "submit",
          className: "w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-lg py-4 px-6 rounded-xl transition-transform duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500/30 shadow-lg shadow-indigo-200 flex items-center justify-center gap-2",
          children: "Create My Account"
        }
      ) }),
      /* @__PURE__ */ p.jsxs("p", { className: "text-center text-gray-600 text-sm mt-6", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ p.jsx(
          "a",
          {
            href: "/login",
            className: "font-semibold text-indigo-600 hover:text-indigo-700 transition-colors",
            children: "Sign in here"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs("div", { className: "bg-gray-50 py-6 border-t border-gray-100 flex items-center justify-center gap-6 text-sm text-gray-600", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ p.jsx("span", { className: "text-green-600 font-bold", children: "✓" }),
        /* @__PURE__ */ p.jsx("span", { children: "Secure & Encrypted" })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "h-3 w-px bg-gray-300" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ p.jsx("span", { className: "text-green-600 font-bold", children: "✓" }),
        /* @__PURE__ */ p.jsx("span", { children: "Privacy Protected" })
      ] })
    ] })
  ] }) });
};
function ct(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Kt } = Object.prototype, { getPrototypeOf: Ue } = Object, { iterator: ye, toStringTag: lt } = Symbol, xe = /* @__PURE__ */ ((e) => (t) => {
  const r = Kt.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), D = (e) => (e = e.toLowerCase(), (t) => xe(t) === e), Ee = (e) => (t) => typeof t === e, { isArray: Z } = Array, G = Ee("undefined");
function ae(e) {
  return e !== null && !G(e) && e.constructor !== null && !G(e.constructor) && v(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ut = D("ArrayBuffer");
function Xt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ut(e.buffer), t;
}
const Gt = Ee("string"), v = Ee("function"), dt = Ee("number"), ie = (e) => e !== null && typeof e == "object", Zt = (e) => e === !0 || e === !1, he = (e) => {
  if (xe(e) !== "object")
    return !1;
  const t = Ue(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(lt in e) && !(ye in e);
}, Qt = (e) => {
  if (!ie(e) || ae(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, er = D("Date"), tr = D("File"), rr = D("Blob"), nr = D("FileList"), sr = (e) => ie(e) && v(e.pipe), or = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || v(e.append) && ((t = xe(e)) === "formdata" || // detect form-data instance
  t === "object" && v(e.toString) && e.toString() === "[object FormData]"));
}, ar = D("URLSearchParams"), [ir, cr, lr, ur] = ["ReadableStream", "Request", "Response", "Headers"].map(D), dr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ce(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), Z(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    if (ae(e))
      return;
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let c;
    for (n = 0; n < o; n++)
      c = a[n], t.call(null, e[c], c, e);
  }
}
function ft(e, t) {
  if (ae(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const W = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, mt = (e) => !G(e) && e !== W;
function _e() {
  const { caseless: e, skipUndefined: t } = mt(this) && this || {}, r = {}, n = (s, a) => {
    const o = e && ft(r, a) || a;
    he(r[o]) && he(s) ? r[o] = _e(r[o], s) : he(s) ? r[o] = _e({}, s) : Z(s) ? r[o] = s.slice() : (!t || !G(s)) && (r[o] = s);
  };
  for (let s = 0, a = arguments.length; s < a; s++)
    arguments[s] && ce(arguments[s], n);
  return r;
}
const fr = (e, t, r, { allOwnKeys: n } = {}) => (ce(t, (s, a) => {
  r && v(s) ? e[a] = ct(s, r) : e[a] = s;
}, { allOwnKeys: n }), e), mr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), pr = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, hr = (e, t, r, n) => {
  let s, a, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!n || n(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = r !== !1 && Ue(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, br = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, gr = (e) => {
  if (!e) return null;
  if (Z(e)) return e;
  let t = e.length;
  if (!dt(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, wr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ue(Uint8Array)), yr = (e, t) => {
  const n = (e && e[ye]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, xr = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Er = D("HTMLFormElement"), Rr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), ze = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Sr = D("RegExp"), pt = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  ce(r, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (n[a] = o || s);
  }), Object.defineProperties(e, n);
}, Or = (e) => {
  pt(e, (t, r) => {
    if (v(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (v(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Tr = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return Z(e) ? n(e) : n(String(e).split(t)), r;
}, Ar = () => {
}, Nr = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function jr(e) {
  return !!(e && v(e.append) && e[lt] === "FormData" && e[ye]);
}
const Cr = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (ie(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (ae(n))
        return n;
      if (!("toJSON" in n)) {
        t[s] = n;
        const a = Z(n) ? [] : {};
        return ce(n, (o, c) => {
          const m = r(o, s + 1);
          !G(m) && (a[c] = m);
        }), t[s] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, _r = D("AsyncFunction"), kr = (e) => e && (ie(e) || v(e)) && v(e.then) && v(e.catch), ht = ((e, t) => e ? setImmediate : t ? ((r, n) => (W.addEventListener("message", ({ source: s, data: a }) => {
  s === W && a === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), W.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  v(W.postMessage)
), Pr = typeof queueMicrotask < "u" ? queueMicrotask.bind(W) : typeof process < "u" && process.nextTick || ht, vr = (e) => e != null && v(e[ye]), i = {
  isArray: Z,
  isArrayBuffer: ut,
  isBuffer: ae,
  isFormData: or,
  isArrayBufferView: Xt,
  isString: Gt,
  isNumber: dt,
  isBoolean: Zt,
  isObject: ie,
  isPlainObject: he,
  isEmptyObject: Qt,
  isReadableStream: ir,
  isRequest: cr,
  isResponse: lr,
  isHeaders: ur,
  isUndefined: G,
  isDate: er,
  isFile: tr,
  isBlob: rr,
  isRegExp: Sr,
  isFunction: v,
  isStream: sr,
  isURLSearchParams: ar,
  isTypedArray: wr,
  isFileList: nr,
  forEach: ce,
  merge: _e,
  extend: fr,
  trim: dr,
  stripBOM: mr,
  inherits: pr,
  toFlatObject: hr,
  kindOf: xe,
  kindOfTest: D,
  endsWith: br,
  toArray: gr,
  forEachEntry: yr,
  matchAll: xr,
  isHTMLForm: Er,
  hasOwnProperty: ze,
  hasOwnProp: ze,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: pt,
  freezeMethods: Or,
  toObjectSet: Tr,
  toCamelCase: Rr,
  noop: Ar,
  toFiniteNumber: Nr,
  findKey: ft,
  global: W,
  isContextDefined: mt,
  isSpecCompliantForm: jr,
  toJSONObject: Cr,
  isAsyncFn: _r,
  isThenable: kr,
  setImmediate: ht,
  asap: Pr,
  isIterable: vr
};
function x(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s, this.status = s.status ? s.status : null);
}
i.inherits(x, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: i.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const bt = x.prototype, gt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  gt[e] = { value: e };
});
Object.defineProperties(x, gt);
Object.defineProperty(bt, "isAxiosError", { value: !0 });
x.from = (e, t, r, n, s, a) => {
  const o = Object.create(bt);
  i.toFlatObject(e, o, function(u) {
    return u !== Error.prototype;
  }, (f) => f !== "isAxiosError");
  const c = e && e.message ? e.message : "Error", m = t == null && e ? e.code : t;
  return x.call(o, c, m, r, n, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", a && Object.assign(o, a), o;
};
const Lr = null;
function ke(e) {
  return i.isPlainObject(e) || i.isArray(e);
}
function wt(e) {
  return i.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Je(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = wt(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Fr(e) {
  return i.isArray(e) && !e.some(ke);
}
const Ur = i.toFlatObject(i, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Re(e, t, r) {
  if (!i.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = i.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, b) {
    return !i.isUndefined(b[w]);
  });
  const n = r.metaTokens, s = r.visitor || u, a = r.dots, o = r.indexes, m = (r.Blob || typeof Blob < "u" && Blob) && i.isSpecCompliantForm(t);
  if (!i.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(d) {
    if (d === null) return "";
    if (i.isDate(d))
      return d.toISOString();
    if (i.isBoolean(d))
      return d.toString();
    if (!m && i.isBlob(d))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return i.isArrayBuffer(d) || i.isTypedArray(d) ? m && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, w, b) {
    let h = d;
    if (d && !b && typeof d == "object") {
      if (i.endsWith(w, "{}"))
        w = n ? w : w.slice(0, -2), d = JSON.stringify(d);
      else if (i.isArray(d) && Fr(d) || (i.isFileList(d) || i.endsWith(w, "[]")) && (h = i.toArray(d)))
        return w = wt(w), h.forEach(function(S, N) {
          !(i.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Je([w], N, a) : o === null ? w : w + "[]",
            f(S)
          );
        }), !1;
    }
    return ke(d) ? !0 : (t.append(Je(b, w, a), f(d)), !1);
  }
  const g = [], E = Object.assign(Ur, {
    defaultVisitor: u,
    convertValue: f,
    isVisitable: ke
  });
  function T(d, w) {
    if (!i.isUndefined(d)) {
      if (g.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      g.push(d), i.forEach(d, function(h, R) {
        (!(i.isUndefined(h) || h === null) && s.call(
          t,
          h,
          i.isString(R) ? R.trim() : R,
          w,
          E
        )) === !0 && T(h, w ? w.concat(R) : [R]);
      }), g.pop();
    }
  }
  if (!i.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function We(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function De(e, t) {
  this._pairs = [], e && Re(e, this, t);
}
const yt = De.prototype;
yt.append = function(t, r) {
  this._pairs.push([t, r]);
};
yt.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, We);
  } : We;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Dr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function xt(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Dr;
  i.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let a;
  if (s ? a = s(t, r) : a = i.isURLSearchParams(t) ? t.toString() : new De(t, r).toString(n), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Ve {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    i.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Et = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Br = typeof URLSearchParams < "u" ? URLSearchParams : De, Mr = typeof FormData < "u" ? FormData : null, Ir = typeof Blob < "u" ? Blob : null, qr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Br,
    FormData: Mr,
    Blob: Ir
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Be = typeof window < "u" && typeof document < "u", Pe = typeof navigator == "object" && navigator || void 0, $r = Be && (!Pe || ["ReactNative", "NativeScript", "NS"].indexOf(Pe.product) < 0), Hr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", zr = Be && window.location.href || "http://localhost", Jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Be,
  hasStandardBrowserEnv: $r,
  hasStandardBrowserWebWorkerEnv: Hr,
  navigator: Pe,
  origin: zr
}, Symbol.toStringTag, { value: "Module" })), k = {
  ...Jr,
  ...qr
};
function Wr(e, t) {
  return Re(e, new k.classes.URLSearchParams(), {
    visitor: function(r, n, s, a) {
      return k.isNode && i.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Vr(e) {
  return i.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Yr(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function Rt(e) {
  function t(r, n, s, a) {
    let o = r[a++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), m = a >= r.length;
    return o = !o && i.isArray(s) ? s.length : o, m ? (i.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !c) : ((!s[o] || !i.isObject(s[o])) && (s[o] = []), t(r, n, s[o], a) && i.isArray(s[o]) && (s[o] = Yr(s[o])), !c);
  }
  if (i.isFormData(e) && i.isFunction(e.entries)) {
    const r = {};
    return i.forEachEntry(e, (n, s) => {
      t(Vr(n), s, r, 0);
    }), r;
  }
  return null;
}
function Kr(e, t, r) {
  if (i.isString(e))
    try {
      return (t || JSON.parse)(e), i.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const le = {
  transitional: Et,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = i.isObject(t);
    if (a && i.isHTMLForm(t) && (t = new FormData(t)), i.isFormData(t))
      return s ? JSON.stringify(Rt(t)) : t;
    if (i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t) || i.isReadableStream(t))
      return t;
    if (i.isArrayBufferView(t))
      return t.buffer;
    if (i.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Wr(t, this.formSerializer).toString();
      if ((c = i.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const m = this.env && this.env.FormData;
        return Re(
          c ? { "files[]": t } : t,
          m && new m(),
          this.formSerializer
        );
      }
    }
    return a || s ? (r.setContentType("application/json", !1), Kr(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || le.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (i.isResponse(t) || i.isReadableStream(t))
      return t;
    if (t && i.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? x.from(c, x.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: k.classes.FormData,
    Blob: k.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
i.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  le.headers[e] = {};
});
const Xr = i.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Gr = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && Xr[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Ye = Symbol("internals");
function oe(e) {
  return e && String(e).trim().toLowerCase();
}
function be(e) {
  return e === !1 || e == null ? e : i.isArray(e) ? e.map(be) : String(e);
}
function Zr(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Qr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ae(e, t, r, n, s) {
  if (i.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!i.isString(t)) {
    if (i.isString(n))
      return t.indexOf(n) !== -1;
    if (i.isRegExp(n))
      return n.test(t);
  }
}
function en(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function tn(e, t) {
  const r = i.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, a, o) {
        return this[n].call(this, t, s, a, o);
      },
      configurable: !0
    });
  });
}
let L = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function a(c, m, f) {
      const u = oe(m);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const g = i.findKey(s, u);
      (!g || s[g] === void 0 || f === !0 || f === void 0 && s[g] !== !1) && (s[g || m] = be(c));
    }
    const o = (c, m) => i.forEach(c, (f, u) => a(f, u, m));
    if (i.isPlainObject(t) || t instanceof this.constructor)
      o(t, r);
    else if (i.isString(t) && (t = t.trim()) && !Qr(t))
      o(Gr(t), r);
    else if (i.isObject(t) && i.isIterable(t)) {
      let c = {}, m, f;
      for (const u of t) {
        if (!i.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        c[f = u[0]] = (m = c[f]) ? i.isArray(m) ? [...m, u[1]] : [m, u[1]] : u[1];
      }
      o(c, r);
    } else
      t != null && a(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = oe(t), t) {
      const n = i.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Zr(s);
        if (i.isFunction(r))
          return r.call(this, s, n);
        if (i.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = oe(t), t) {
      const n = i.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ae(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function a(o) {
      if (o = oe(o), o) {
        const c = i.findKey(n, o);
        c && (!r || Ae(n, n[c], c, r)) && (delete n[c], s = !0);
      }
    }
    return i.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || Ae(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return i.forEach(this, (s, a) => {
      const o = i.findKey(n, a);
      if (o) {
        r[o] = be(s), delete r[a];
        return;
      }
      const c = t ? en(a) : String(a).trim();
      c !== a && delete r[a], r[c] = be(s), n[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return i.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && i.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Ye] = this[Ye] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const c = oe(o);
      n[c] || (tn(s, o), n[c] = !0);
    }
    return i.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
i.reduceDescriptors(L.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
i.freezeMethods(L);
function Ne(e, t) {
  const r = this || le, n = t || r, s = L.from(n.headers);
  let a = n.data;
  return i.forEach(e, function(c) {
    a = c.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function St(e) {
  return !!(e && e.__CANCEL__);
}
function Q(e, t, r) {
  x.call(this, e ?? "canceled", x.ERR_CANCELED, t, r), this.name = "CanceledError";
}
i.inherits(Q, x, {
  __CANCEL__: !0
});
function Ot(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new x(
    "Request failed with status code " + r.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function rn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function nn(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(m) {
    const f = Date.now(), u = n[a];
    o || (o = f), r[s] = m, n[s] = f;
    let g = a, E = 0;
    for (; g !== s; )
      E += r[g++], g = g % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), f - o < t)
      return;
    const T = u && f - u;
    return T ? Math.round(E * 1e3 / T) : void 0;
  };
}
function sn(e, t) {
  let r = 0, n = 1e3 / t, s, a;
  const o = (f, u = Date.now()) => {
    r = u, s = null, a && (clearTimeout(a), a = null), e(...f);
  };
  return [(...f) => {
    const u = Date.now(), g = u - r;
    g >= n ? o(f, u) : (s = f, a || (a = setTimeout(() => {
      a = null, o(s);
    }, n - g)));
  }, () => s && o(s)];
}
const we = (e, t, r = 3) => {
  let n = 0;
  const s = nn(50, 250);
  return sn((a) => {
    const o = a.loaded, c = a.lengthComputable ? a.total : void 0, m = o - n, f = s(m), u = o <= c;
    n = o;
    const g = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: m,
      rate: f || void 0,
      estimated: f && c && u ? (c - o) / f : void 0,
      event: a,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(g);
  }, r);
}, Ke = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, Xe = (e) => (...t) => i.asap(() => e(...t)), on = k.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, k.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(k.origin),
  k.navigator && /(msie|trident)/i.test(k.navigator.userAgent)
) : () => !0, an = k.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, a) {
      const o = [e + "=" + encodeURIComponent(t)];
      i.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), i.isString(n) && o.push("path=" + n), i.isString(s) && o.push("domain=" + s), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function cn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ln(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Tt(e, t, r) {
  let n = !cn(t);
  return e && (n || r == !1) ? ln(e, t) : t;
}
const Ge = (e) => e instanceof L ? { ...e } : e;
function Y(e, t) {
  t = t || {};
  const r = {};
  function n(f, u, g, E) {
    return i.isPlainObject(f) && i.isPlainObject(u) ? i.merge.call({ caseless: E }, f, u) : i.isPlainObject(u) ? i.merge({}, u) : i.isArray(u) ? u.slice() : u;
  }
  function s(f, u, g, E) {
    if (i.isUndefined(u)) {
      if (!i.isUndefined(f))
        return n(void 0, f, g, E);
    } else return n(f, u, g, E);
  }
  function a(f, u) {
    if (!i.isUndefined(u))
      return n(void 0, u);
  }
  function o(f, u) {
    if (i.isUndefined(u)) {
      if (!i.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, u);
  }
  function c(f, u, g) {
    if (g in t)
      return n(f, u);
    if (g in e)
      return n(void 0, f);
  }
  const m = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (f, u, g) => s(Ge(f), Ge(u), g, !0)
  };
  return i.forEach(Object.keys({ ...e, ...t }), function(u) {
    const g = m[u] || s, E = g(e[u], t[u], u);
    i.isUndefined(E) && g !== c || (r[u] = E);
  }), r;
}
const At = (e) => {
  const t = Y({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: s, xsrfCookieName: a, headers: o, auth: c } = t;
  if (t.headers = o = L.from(o), t.url = xt(Tt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), i.isFormData(r)) {
    if (k.hasStandardBrowserEnv || k.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (i.isFunction(r.getHeaders)) {
      const m = r.getHeaders(), f = ["content-type", "content-length"];
      Object.entries(m).forEach(([u, g]) => {
        f.includes(u.toLowerCase()) && o.set(u, g);
      });
    }
  }
  if (k.hasStandardBrowserEnv && (n && i.isFunction(n) && (n = n(t)), n || n !== !1 && on(t.url))) {
    const m = s && a && an.read(a);
    m && o.set(s, m);
  }
  return t;
}, un = typeof XMLHttpRequest < "u", dn = un && function(e) {
  return new Promise(function(r, n) {
    const s = At(e);
    let a = s.data;
    const o = L.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: m, onDownloadProgress: f } = s, u, g, E, T, d;
    function w() {
      T && T(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let b = new XMLHttpRequest();
    b.open(s.method.toUpperCase(), s.url, !0), b.timeout = s.timeout;
    function h() {
      if (!b)
        return;
      const S = L.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), _ = {
        data: !c || c === "text" || c === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: S,
        config: e,
        request: b
      };
      Ot(function(P) {
        r(P), w();
      }, function(P) {
        n(P), w();
      }, _), b = null;
    }
    "onloadend" in b ? b.onloadend = h : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, b.onabort = function() {
      b && (n(new x("Request aborted", x.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function(N) {
      const _ = N && N.message ? N.message : "Network Error", I = new x(_, x.ERR_NETWORK, e, b);
      I.event = N || null, n(I), b = null;
    }, b.ontimeout = function() {
      let N = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const _ = s.transitional || Et;
      s.timeoutErrorMessage && (N = s.timeoutErrorMessage), n(new x(
        N,
        _.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        e,
        b
      )), b = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in b && i.forEach(o.toJSON(), function(N, _) {
      b.setRequestHeader(_, N);
    }), i.isUndefined(s.withCredentials) || (b.withCredentials = !!s.withCredentials), c && c !== "json" && (b.responseType = s.responseType), f && ([E, d] = we(f, !0), b.addEventListener("progress", E)), m && b.upload && ([g, T] = we(m), b.upload.addEventListener("progress", g), b.upload.addEventListener("loadend", T)), (s.cancelToken || s.signal) && (u = (S) => {
      b && (n(!S || S.type ? new Q(null, e, b) : S), b.abort(), b = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const R = rn(s.url);
    if (R && k.protocols.indexOf(R) === -1) {
      n(new x("Unsupported protocol " + R + ":", x.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(a || null);
  });
}, fn = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), s;
    const a = function(f) {
      if (!s) {
        s = !0, c();
        const u = f instanceof Error ? f : this.reason;
        n.abort(u instanceof x ? u : new Q(u instanceof Error ? u.message : u));
      }
    };
    let o = t && setTimeout(() => {
      o = null, a(new x(`timeout ${t} of ms exceeded`, x.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(a) : f.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((f) => f.addEventListener("abort", a));
    const { signal: m } = n;
    return m.unsubscribe = () => i.asap(c), m;
  }
}, mn = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, s;
  for (; n < r; )
    s = n + t, yield e.slice(n, s), n = s;
}, pn = async function* (e, t) {
  for await (const r of hn(e))
    yield* mn(r, t);
}, hn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Ze = (e, t, r, n) => {
  const s = pn(e, t);
  let a = 0, o, c = (m) => {
    o || (o = !0, n && n(m));
  };
  return new ReadableStream({
    async pull(m) {
      try {
        const { done: f, value: u } = await s.next();
        if (f) {
          c(), m.close();
          return;
        }
        let g = u.byteLength;
        if (r) {
          let E = a += g;
          r(E);
        }
        m.enqueue(new Uint8Array(u));
      } catch (f) {
        throw c(f), f;
      }
    },
    cancel(m) {
      return c(m), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Qe = 64 * 1024, { isFunction: pe } = i, bn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(i.global), {
  ReadableStream: et,
  TextEncoder: tt
} = i.global, rt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, gn = (e) => {
  e = i.merge.call({
    skipUndefined: !0
  }, bn, e);
  const { fetch: t, Request: r, Response: n } = e, s = t ? pe(t) : typeof fetch == "function", a = pe(r), o = pe(n);
  if (!s)
    return !1;
  const c = s && pe(et), m = s && (typeof tt == "function" ? /* @__PURE__ */ ((d) => (w) => d.encode(w))(new tt()) : async (d) => new Uint8Array(await new r(d).arrayBuffer())), f = a && c && rt(() => {
    let d = !1;
    const w = new r(k.origin, {
      body: new et(),
      method: "POST",
      get duplex() {
        return d = !0, "half";
      }
    }).headers.has("Content-Type");
    return d && !w;
  }), u = o && c && rt(() => i.isReadableStream(new n("").body)), g = {
    stream: u && ((d) => d.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((d) => {
    !g[d] && (g[d] = (w, b) => {
      let h = w && w[d];
      if (h)
        return h.call(w);
      throw new x(`Response type '${d}' is not supported`, x.ERR_NOT_SUPPORT, b);
    });
  });
  const E = async (d) => {
    if (d == null)
      return 0;
    if (i.isBlob(d))
      return d.size;
    if (i.isSpecCompliantForm(d))
      return (await new r(k.origin, {
        method: "POST",
        body: d
      }).arrayBuffer()).byteLength;
    if (i.isArrayBufferView(d) || i.isArrayBuffer(d))
      return d.byteLength;
    if (i.isURLSearchParams(d) && (d = d + ""), i.isString(d))
      return (await m(d)).byteLength;
  }, T = async (d, w) => {
    const b = i.toFiniteNumber(d.getContentLength());
    return b ?? E(w);
  };
  return async (d) => {
    let {
      url: w,
      method: b,
      data: h,
      signal: R,
      cancelToken: S,
      timeout: N,
      onDownloadProgress: _,
      onUploadProgress: I,
      responseType: P,
      headers: ee,
      withCredentials: $ = "same-origin",
      fetchOptions: ue
    } = At(d), de = t || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let H = fn([R, S && S.toAbortSignal()], N), z = null;
    const q = H && H.unsubscribe && (() => {
      H.unsubscribe();
    });
    let K;
    try {
      if (I && f && b !== "get" && b !== "head" && (K = await T(ee, h)) !== 0) {
        let l = new r(w, {
          method: "POST",
          body: h,
          duplex: "half"
        }), y;
        if (i.isFormData(h) && (y = l.headers.get("content-type")) && ee.setContentType(y), l.body) {
          const [O, A] = Ke(
            K,
            we(Xe(I))
          );
          h = Ze(l.body, Qe, O, A);
        }
      }
      i.isString($) || ($ = $ ? "include" : "omit");
      const F = a && "credentials" in r.prototype, te = {
        ...ue,
        signal: H,
        method: b.toUpperCase(),
        headers: ee.normalize().toJSON(),
        body: h,
        duplex: "half",
        credentials: F ? $ : void 0
      };
      z = a && new r(w, te);
      let U = await (a ? de(z, ue) : de(w, te));
      const re = u && (P === "stream" || P === "response");
      if (u && (_ || re && q)) {
        const l = {};
        ["status", "statusText", "headers"].forEach((J) => {
          l[J] = U[J];
        });
        const y = i.toFiniteNumber(U.headers.get("content-length")), [O, A] = _ && Ke(
          y,
          we(Xe(_), !0)
        ) || [];
        U = new n(
          Ze(U.body, Qe, O, () => {
            A && A(), q && q();
          }),
          l
        );
      }
      P = P || "text";
      let fe = await g[i.findKey(g, P) || "text"](U, d);
      return !re && q && q(), await new Promise((l, y) => {
        Ot(l, y, {
          data: fe,
          headers: L.from(U.headers),
          status: U.status,
          statusText: U.statusText,
          config: d,
          request: z
        });
      });
    } catch (F) {
      throw q && q(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new x("Network Error", x.ERR_NETWORK, d, z),
        {
          cause: F.cause || F
        }
      ) : x.from(F, F && F.code, d, z);
    }
  };
}, wn = /* @__PURE__ */ new Map(), Nt = (e) => {
  let t = e ? e.env : {};
  const { fetch: r, Request: n, Response: s } = t, a = [
    n,
    s,
    r
  ];
  let o = a.length, c = o, m, f, u = wn;
  for (; c--; )
    m = a[c], f = u.get(m), f === void 0 && u.set(m, f = c ? /* @__PURE__ */ new Map() : gn(t)), u = f;
  return f;
};
Nt();
const ve = {
  http: Lr,
  xhr: dn,
  fetch: {
    get: Nt
  }
};
i.forEach(ve, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nt = (e) => `- ${e}`, yn = (e) => i.isFunction(e) || e === null || e === !1, jt = {
  getAdapter: (e, t) => {
    e = i.isArray(e) ? e : [e];
    const { length: r } = e;
    let n, s;
    const a = {};
    for (let o = 0; o < r; o++) {
      n = e[o];
      let c;
      if (s = n, !yn(n) && (s = ve[(c = String(n)).toLowerCase()], s === void 0))
        throw new x(`Unknown adapter '${c}'`);
      if (s && (i.isFunction(s) || (s = s.get(t))))
        break;
      a[c || "#" + o] = s;
    }
    if (!s) {
      const o = Object.entries(a).map(
        ([m, f]) => `adapter ${m} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let c = r ? o.length > 1 ? `since :
` + o.map(nt).join(`
`) : " " + nt(o[0]) : "as no adapter specified";
      throw new x(
        "There is no suitable adapter to dispatch the request " + c,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: ve
};
function je(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Q(null, e);
}
function st(e) {
  return je(e), e.headers = L.from(e.headers), e.data = Ne.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), jt.getAdapter(e.adapter || le.adapter, e)(e).then(function(n) {
    return je(e), n.data = Ne.call(
      e,
      e.transformResponse,
      n
    ), n.headers = L.from(n.headers), n;
  }, function(n) {
    return St(n) || (je(e), n && n.response && (n.response.data = Ne.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = L.from(n.response.headers))), Promise.reject(n);
  });
}
const Ct = "1.12.2", Se = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Se[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ot = {};
Se.transitional = function(t, r, n) {
  function s(a, o) {
    return "[Axios v" + Ct + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, c) => {
    if (t === !1)
      throw new x(
        s(o, " has been removed" + (r ? " in " + r : "")),
        x.ERR_DEPRECATED
      );
    return r && !ot[o] && (ot[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, o, c) : !0;
  };
};
Se.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function xn(e, t, r) {
  if (typeof e != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], o = t[a];
    if (o) {
      const c = e[a], m = c === void 0 || o(c, a, e);
      if (m !== !0)
        throw new x("option " + a + " must be " + m, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new x("Unknown option " + a, x.ERR_BAD_OPTION);
  }
}
const ge = {
  assertOptions: xn,
  validators: Se
}, B = ge.validators;
let V = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ve(),
      response: new Ve()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const a = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Y(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && ge.assertOptions(n, {
      silentJSONParsing: B.transitional(B.boolean),
      forcedJSONParsing: B.transitional(B.boolean),
      clarifyTimeoutError: B.transitional(B.boolean)
    }, !1), s != null && (i.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ge.assertOptions(s, {
      encode: B.function,
      serialize: B.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ge.assertOptions(r, {
      baseUrl: B.spelling("baseURL"),
      withXsrfToken: B.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && i.merge(
      a.common,
      a[r.method]
    );
    a && i.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete a[d];
      }
    ), r.headers = L.concat(o, a);
    const c = [];
    let m = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(r) === !1 || (m = m && w.synchronous, c.unshift(w.fulfilled, w.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(w) {
      f.push(w.fulfilled, w.rejected);
    });
    let u, g = 0, E;
    if (!m) {
      const d = [st.bind(this), void 0];
      for (d.unshift(...c), d.push(...f), E = d.length, u = Promise.resolve(r); g < E; )
        u = u.then(d[g++], d[g++]);
      return u;
    }
    E = c.length;
    let T = r;
    for (; g < E; ) {
      const d = c[g++], w = c[g++];
      try {
        T = d(T);
      } catch (b) {
        w.call(this, b);
        break;
      }
    }
    try {
      u = st.call(this, T);
    } catch (d) {
      return Promise.reject(d);
    }
    for (g = 0, E = f.length; g < E; )
      u = u.then(f[g++], f[g++]);
    return u;
  }
  getUri(t) {
    t = Y(this.defaults, t);
    const r = Tt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return xt(r, t.params, t.paramsSerializer);
  }
};
i.forEach(["delete", "get", "head", "options"], function(t) {
  V.prototype[t] = function(r, n) {
    return this.request(Y(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
i.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, o, c) {
      return this.request(Y(c || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  V.prototype[t] = r(), V.prototype[t + "Form"] = r(!0);
});
let En = class _t {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const o = new Promise((c) => {
        n.subscribe(c), a = c;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, t(function(a, o, c) {
      n.reason || (n.reason = new Q(a, o, c), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new _t(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Rn(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Sn(e) {
  return i.isObject(e) && e.isAxiosError === !0;
}
const Le = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Le).forEach(([e, t]) => {
  Le[t] = e;
});
function kt(e) {
  const t = new V(e), r = ct(V.prototype.request, t);
  return i.extend(r, V.prototype, t, { allOwnKeys: !0 }), i.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return kt(Y(e, s));
  }, r;
}
const j = kt(le);
j.Axios = V;
j.CanceledError = Q;
j.CancelToken = En;
j.isCancel = St;
j.VERSION = Ct;
j.toFormData = Re;
j.AxiosError = x;
j.Cancel = j.CanceledError;
j.all = function(t) {
  return Promise.all(t);
};
j.spread = Rn;
j.isAxiosError = Sn;
j.mergeConfig = Y;
j.AxiosHeaders = L;
j.formToJSON = (e) => Rt(i.isHTMLForm(e) ? new FormData(e) : e);
j.getAdapter = jt.getAdapter;
j.HttpStatusCode = Le;
j.default = j;
const {
  Axios: Cn,
  AxiosError: _n,
  CanceledError: kn,
  isCancel: Pn,
  CancelToken: vn,
  VERSION: Ln,
  all: Fn,
  Cancel: Un,
  isAxiosError: Dn,
  spread: Bn,
  toFormData: Mn,
  AxiosHeaders: In,
  HttpStatusCode: qn,
  formToJSON: $n,
  getAdapter: Hn,
  mergeConfig: zn
} = j;
let Me = j.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json"
  }
});
const Jn = (e = {}) => {
  const { baseURL: t = "http://localhost:3000", headers: r = {} } = e;
  Me = j.create({
    baseURL: t,
    headers: {
      "Content-Type": "application/json",
      ...r
    }
  });
}, Wn = async (e, t) => {
  try {
    return (await Me.post(e, t)).data;
  } catch (r) {
    throw Pt(r);
  }
}, Vn = async (e, t, r = !1) => {
  try {
    const n = await Me.post(e, t), s = r ? localStorage : sessionStorage;
    return n?.data?.token && s.setItem("auth_token", n.data.token), n?.data?.user && s.setItem("user", JSON.stringify(n.data.user)), n.data;
  } catch (n) {
    throw Pt(n);
  }
}, Yn = () => {
  localStorage.removeItem("auth_token"), localStorage.removeItem("user"), sessionStorage.removeItem("auth_token"), sessionStorage.removeItem("user");
}, Pt = (e) => e.response ? new Error(e.response.data.message || "Server Error") : e.request ? new Error("No response from the server") : new Error(e.message);
export {
  Tn as Login,
  An as Signup,
  Jn as configureAuthService,
  Pt as handleError,
  Vn as login,
  Yn as logout,
  Wn as signup
};
