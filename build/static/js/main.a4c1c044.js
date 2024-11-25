/*! For license information please see main.a4c1c044.js.LICENSE.txt */
(() => {
  var e = {
      219: (e, t, n) => {
        "use strict";
        var r = n(86),
          a = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function s(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || a;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = i);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var a = p(n);
              a && a !== h && e(t, a, r);
            }
            var i = c(n);
            f && (i = i.concat(f(n)));
            for (var l = s(t), g = s(n), m = 0; m < i.length; ++m) {
              var v = i[m];
              if (!o[v] && (!r || !r[v]) && (!g || !g[v]) && (!l || !l[v])) {
                var y = d(n, v);
                try {
                  u(t, v, y);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      730: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
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
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function g(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
                ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
                : ((t = a.attributeName),
                  (r = a.attributeNamespace),
                  null === n
                    ? e.removeAttribute(t)
                    : ((n =
                        3 === (a = a.type) || (4 === a && !0 === n)
                          ? ""
                          : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            m[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              m[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            m[t] = new g(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1,
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1,
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          _ = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          O = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          L = Symbol.for("react.suspense_list"),
          R = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var j = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var F = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (F && e[F]) || e["@@iterator"])
              ? e
              : null;
        }
        var I,
          A = Object.assign;
        function M(e) {
          if (void 0 === I)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              I = (t && t[1]) || "";
            }
          return "\n" + I + e;
        }
        var D = !1;
        function U(e, t) {
          if (!e || D) return "";
          D = !0;
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
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function $(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case k:
              return "Portal";
            case _:
              return "Profiler";
            case E:
              return "StrictMode";
            case N:
              return "Suspense";
            case L:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case O:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case R:
                return null !== (t = e.displayName || null)
                  ? t
                  : $(e.type) || "Memo";
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (n) {}
            }
          return null;
        }
        function B(e) {
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
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
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
              return $(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return A({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          G(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return A({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
              ? "http://www.w3.org/1999/xhtml"
              : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
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
          he = ["Webkit", "ms", "Moz", "O"];
        function ge(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
                "number" !== typeof t ||
                0 === t ||
                (pe.hasOwnProperty(e) && pe[e])
              ? ("" + t).trim()
              : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ge(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = A(
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
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var Se = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          xe = null,
          Ee = null;
        function _e(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          xe ? (Ee ? Ee.push(e) : (Ee = [e])) : (xe = e);
        }
        function Oe() {
          if (xe) {
            var e = xe,
              t = Ee;
            if (((Ee = xe = null), _e(e), t))
              for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Ne() {}
        var Le = !1;
        function Re(e, t, n) {
          if (Le) return e(t, n);
          Le = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Le = !1), (null !== xe || null !== Ee) && (Ne(), Oe());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var je = !1;
        if (c)
          try {
            var Fe = {};
            Object.defineProperty(Fe, "passive", {
              get: function () {
                je = !0;
              },
            }),
              window.addEventListener("test", Fe, Fe),
              window.removeEventListener("test", Fe, Fe);
          } catch (ce) {
            je = !1;
          }
        function ze(e, t, n, r, a, o, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Ie = !1,
          Ae = null,
          Me = !1,
          De = null,
          Ue = {
            onError: function (e) {
              (Ie = !0), (Ae = e);
            },
          };
        function Ve(e, t, n, r, a, o, i, l, s) {
          (Ie = !1), (Ae = null), ze.apply(Ue, arguments);
        }
        function $e(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Be(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if ($e(e) !== e) throw Error(o(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = $e(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ke = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Je = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
              ? 1073741824
              : 0;
        }
        function gt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function St(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          xt,
          Et,
          _t,
          Ct = !1,
          Ot = [],
          Pt = null,
          Nt = null,
          Lt = null,
          Rt = new Map(),
          Tt = new Map(),
          jt = [],
          Ft =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " ",
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Lt = null;
              break;
            case "pointerover":
            case "pointerout":
              Rt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function It(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function At(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = $e(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Be(n)))
                  return (
                    (e.blockedOn = t),
                    void _t(e.priority, function () {
                      xt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Se = r), n.target.dispatchEvent(r), (Se = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== Pt && Mt(Pt) && (Pt = null),
            null !== Nt && Mt(Nt) && (Nt = null),
            null !== Lt && Mt(Lt) && (Lt = null),
            Rt.forEach(Dt),
            Tt.forEach(Dt);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function $t(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Ot.length) {
            Vt(Ot[0], e);
            for (var n = 1; n < Ot.length; n++) {
              var r = Ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Vt(Pt, e),
              null !== Nt && Vt(Nt, e),
              null !== Lt && Vt(Lt, e),
              Rt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < jt.length;
            n++
          )
            (r = jt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < jt.length && null === (n = jt[0]).blockedOn; )
            At(n), null === n.blockedOn && jt.shift();
        }
        var Bt = S.ReactCurrentBatchConfig,
          Ht = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            o = Bt.transition;
          Bt.transition = null;
          try {
            (bt = 1), Kt(e, t, n, r);
          } finally {
            (bt = a), (Bt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            o = Bt.transition;
          Bt.transition = null;
          try {
            (bt = 4), Kt(e, t, n, r);
          } finally {
            (bt = a), (Bt.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          if (Ht) {
            var a = Jt(e, t, n, r);
            if (null === a) Hr(e, t, r, qt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = It(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = It(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Lt = It(Lt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Rt.set(o, It(Rt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Tt.set(o, It(Tt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Ft.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Jt(e, t, n, r)) && Hr(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Jt(e, t, n, r) {
          if (((qt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = $e(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Be(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
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
              switch (Xe()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Xt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            A(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = A({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = A({}, fn, {
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
            getModifierState: _n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          gn = an(A({}, pn, { dataTransfer: 0 })),
          mn = an(A({}, fn, { relatedTarget: 0 })),
          vn = an(
            A({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          yn = A({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          Sn = an(A({}, un, { data: 0 })),
          wn = {
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
          kn = {
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
          xn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = xn[e]) && !!t[e];
        }
        function _n() {
          return En;
        }
        var Cn = A({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? kn[e.keyCode] || "Unidentified"
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
            getModifierState: _n,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
            },
          }),
          On = an(Cn),
          Pn = an(
            A({}, pn, {
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
          ),
          Nn = an(
            A({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: _n,
            }),
          ),
          Ln = an(
            A({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Rn = A({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
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
          Tn = an(Rn),
          jn = [9, 13, 27, 32],
          Fn = c && "CompositionEvent" in window,
          zn = null;
        c && "documentMode" in document && (zn = document.documentMode);
        var In = c && "TextEvent" in window && !zn,
          An = c && (!Fn || (zn && 8 < zn && 11 >= zn)),
          Mn = String.fromCharCode(32),
          Dn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== jn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var $n = !1;
        var Bn = {
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
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Bn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ce(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Kn = null;
        function qn(e) {
          Mr(e, 0);
        }
        function Jn(e) {
          if (K(Sa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Xn = Zn;
          } else Xn = !1;
          Gn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Kn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Jn(Kn)) {
            var t = [];
            Wn(t, Kn, e, we(e)), Re(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Kn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Jn(Kn);
        }
        function or(e, t) {
          if ("click" === e) return Jn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Jn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var gr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          vr = null,
          yr = null,
          br = !1;
        function Sr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          br ||
            null == mr ||
            mr !== q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          xr = {},
          Er = {};
        function _r(e) {
          if (xr[e]) return xr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (xr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Cr = _r("animationend"),
          Or = _r("animationiteration"),
          Pr = _r("animationstart"),
          Nr = _r("transitionend"),
          Lr = new Map(),
          Rr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Tr(e, t) {
          Lr.set(e, t), s(t, [e]);
        }
        for (var jr = 0; jr < Rr.length; jr++) {
          var Fr = Rr[jr];
          Tr(Fr.toLowerCase(), "on" + (Fr[0].toUpperCase() + Fr.slice(1)));
        }
        Tr(Cr, "onAnimationEnd"),
          Tr(Or, "onAnimationIteration"),
          Tr(Pr, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(Nr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Ir = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr),
          );
        function Ar(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, u) {
              if ((Ve.apply(this, arguments), Ie)) {
                if (!Ie) throw Error(o(198));
                var c = Ae;
                (Ie = !1), (Ae = null), Me || ((Me = !0), (De = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Ar(a, l, u), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Ar(a, l, u), (o = s);
                }
            }
          }
          if (Me) throw ((e = De), (Me = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[ga];
          void 0 === n && (n = t[ga] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Br(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Br(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function $r(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Ir.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Br(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Kt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !je ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
                ? e.addEventListener(t, n, { passive: a })
                : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ya(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Re(function () {
            var r = o,
              a = we(n),
              i = [];
            e: {
              var l = Lr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = On;
                    break;
                  case "focusin":
                    (u = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Nn;
                    break;
                  case Cr:
                  case Or:
                  case Pr:
                    s = vn;
                    break;
                  case Nr:
                    s = Ln;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = Tn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var g = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== g &&
                      ((p = g),
                      null !== d &&
                        null != (g = Te(h, d)) &&
                        c.push(Wr(h, g, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === Se ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                        ? l.defaultView || l.parentWindow
                        : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (f = $e(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (g = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (g = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : Sa(s)),
                  (p = null == u ? l : Sa(u)),
                  ((l = new c(g, h + "leave", s, n, a)).target = f),
                  (l.relatedTarget = p),
                  (g = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = f),
                    (g = c)),
                  (f = g),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = Kr(p)) h++;
                    for (p = 0, g = d; g; g = Kr(g)) p++;
                    for (; 0 < h - p; ) (c = Kr(c)), h--;
                    for (; 0 < p - h; ) (d = Kr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Kr(c)), (d = Kr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qr(i, l, s, c, !1),
                  null !== u && null !== f && qr(i, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? Sa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var m = Yn;
              else if (Hn(l))
                if (Gn) m = ir;
                else {
                  m = ar;
                  var v = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? Wn(i, m, n, a)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? Sa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(v) || "true" === v.contentEditable) &&
                    ((mr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), Sr(i, n, a);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  Sr(i, n, a);
              }
              var y;
              if (Fn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                $n
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (An &&
                  "ko" !== n.locale &&
                  ($n || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && $n && (y = en())
                    : ((Xt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      ($n = !0))),
                0 < (v = Qr(r, b)).length &&
                  ((b = new Sn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Vn(n)) && (b.data = y))),
                (y = In
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if ($n)
                        return "compositionend" === e || (!Fn && Un(e, t))
                          ? ((e = en()), (Zt = Xt = Gt = null), ($n = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new Sn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Mr(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Te(e, n)) && r.unshift(Wr(e, o, a)),
              null != (o = Te(e, t)) && r.push(Wr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Kr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Te(n, o)) && i.unshift(Wr(n, s, l))
                : a || (null != (s = Te(n, o)) && i.push(Wr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Jr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Jr, "\n")
            .replace(Yr, "");
        }
        function Xr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
                ? function (e) {
                    return oa.resolve(null).then(e).catch(la);
                  }
                : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void $t(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          $t(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ga = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          va = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Sa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ka = [],
          xa = -1;
        function Ea(e) {
          return { current: e };
        }
        function _a(e) {
          0 > xa || ((e.current = ka[xa]), (ka[xa] = null), xa--);
        }
        function Ca(e, t) {
          xa++, (ka[xa] = e.current), (e.current = t);
        }
        var Oa = {},
          Pa = Ea(Oa),
          Na = Ea(!1),
          La = Oa;
        function Ra(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Oa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function ja() {
          _a(Na), _a(Pa);
        }
        function Fa(e, t, n) {
          if (Pa.current !== Oa) throw Error(o(168));
          Ca(Pa, t), Ca(Na, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, B(e) || "Unknown", a));
          return A({}, n, r);
        }
        function Ia(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Oa),
            (La = Pa.current),
            Ca(Pa, e),
            Ca(Na, Na.current),
            !0
          );
        }
        function Aa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, La)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              _a(Na),
              _a(Pa),
              Ca(Pa, e))
            : _a(Na),
            Ca(Na, n);
        }
        var Ma = null,
          Da = !1,
          Ua = !1;
        function Va(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function $a() {
          if (!Ua && null !== Ma) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ma;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ma = null), (Da = !1);
            } catch (a) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), Ke(Ze, $a), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Ba = [],
          Ha = 0,
          Wa = null,
          Qa = 0,
          Ka = [],
          qa = 0,
          Ja = null,
          Ya = 1,
          Ga = "";
        function Xa(e, t) {
          (Ba[Ha++] = Qa), (Ba[Ha++] = Wa), (Wa = e), (Qa = t);
        }
        function Za(e, t, n) {
          (Ka[qa++] = Ya), (Ka[qa++] = Ga), (Ka[qa++] = Ja), (Ja = e);
          var r = Ya;
          e = Ga;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ga = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Ga = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Wa; )
            (Wa = Ba[--Ha]), (Ba[Ha] = null), (Qa = Ba[--Ha]), (Ba[Ha] = null);
          for (; e === Ja; )
            (Ja = Ka[--qa]),
              (Ka[qa] = null),
              (Ga = Ka[--qa]),
              (Ka[qa] = null),
              (Ya = Ka[--qa]),
              (Ka[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Ru(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ja ? { id: Ya, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ru(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function go(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = S.ReactCurrentBatchConfig;
        function vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function yo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e,
              ),
            ))
          );
        }
        function bo(e) {
          return (0, e._init)(e._payload);
        }
        function So(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = ju(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Au(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === x
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === o ||
                    ("object" === typeof o &&
                      null !== o &&
                      o.$$typeof === T &&
                      bo(o) === t.type))
                ? (((r = a(t, n.props)).ref = vo(e, t, n)), (r.return = e), r)
                : (((r = Fu(n.type, n.key, n.props, null, e.mode, r)).ref = vo(
                    e,
                    t,
                    n,
                  )),
                  (r.return = e),
                  r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Mu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = zu(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Au("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Fu(t.type, t.key, t.props, null, e.mode, n)).ref = vo(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Mu(t, e.mode, n)).return = e), t;
                case T:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = zu(t, e.mode, n, null)).return = e), t;
              yo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case T:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : f(e, t, n, r, null);
              yo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a,
                  );
                case T:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              yo(t, r);
            }
            return null;
          }
          function g(a, o, l, s) {
            for (
              var u = null, c = null, f = o, g = (o = 0), m = null;
              null !== f && g < l.length;
              g++
            ) {
              f.index > g ? ((m = f), (f = null)) : (m = f.sibling);
              var v = p(a, f, l[g], s);
              if (null === v) {
                null === f && (f = m);
                break;
              }
              e && f && null === v.alternate && t(a, f),
                (o = i(v, o, g)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (f = m);
            }
            if (g === l.length) return n(a, f), ao && Xa(a, g), u;
            if (null === f) {
              for (; g < l.length; g++)
                null !== (f = d(a, l[g], s)) &&
                  ((o = i(f, o, g)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ao && Xa(a, g), u;
            }
            for (f = r(a, f); g < l.length; g++)
              null !== (m = h(f, a, g, l[g], s)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? g : m.key),
                (o = i(m, o, g)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, g),
              u
            );
          }
          function m(a, l, s, u) {
            var c = z(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var f = (c = null), g = l, m = (l = 0), v = null, y = s.next();
              null !== g && !y.done;
              m++, y = s.next()
            ) {
              g.index > m ? ((v = g), (g = null)) : (v = g.sibling);
              var b = p(a, g, y.value, u);
              if (null === b) {
                null === g && (g = v);
                break;
              }
              e && g && null === b.alternate && t(a, g),
                (l = i(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (g = v);
            }
            if (y.done) return n(a, g), ao && Xa(a, m), c;
            if (null === g) {
              for (; !y.done; m++, y = s.next())
                null !== (y = d(a, y.value, u)) &&
                  ((l = i(y, l, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ao && Xa(a, m), c;
            }
            for (g = r(a, g); !y.done; m++, y = s.next())
              null !== (y = h(g, a, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  g.delete(null === y.key ? m : y.key),
                (l = i(y, l, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                g.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              c
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === x &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === x) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === T &&
                            bo(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = vo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === x
                      ? (((o = zu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = Fu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s,
                        )).ref = vo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Mu(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case T:
                  return e(r, o, (c = i._init)(i._payload), s);
              }
              if (te(i)) return g(r, o, i, s);
              if (z(i)) return m(r, o, i, s);
              yo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Au(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var wo = So(!0),
          ko = So(!1),
          xo = Ea(null),
          Eo = null,
          _o = null,
          Co = null;
        function Oo() {
          Co = _o = Eo = null;
        }
        function Po(e) {
          var t = xo.current;
          _a(xo), (e._currentValue = t);
        }
        function No(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Lo(e, t) {
          (Eo = e),
            (Co = _o = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bl = !0), (e.firstContext = null));
        }
        function Ro(e) {
          var t = e._currentValue;
          if (Co !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === _o)
            ) {
              if (null === Eo) throw Error(o(308));
              (_o = e), (Eo.dependencies = { lanes: 0, firstContext: e });
            } else _o = _o.next = e;
          return t;
        }
        var To = null;
        function jo(e) {
          null === To ? (To = [e]) : To.push(e);
        }
        function Fo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), jo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            zo(e, r)
          );
        }
        function zo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Io = !1;
        function Ao(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Mo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Do(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Uo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              zo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), jo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            zo(e, n)
          );
        }
        function Vo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function $o(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Bo(e, t, n, r) {
          var a = e.updateQueue;
          Io = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = u = s = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    g = l;
                  switch (((d = t), (p = n), g.tag)) {
                    case 1:
                      if ("function" === typeof (h = g.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = g.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = A({}, f, d);
                      break e;
                    case 2:
                      Io = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Is |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Ho(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Wo = {},
          Qo = Ea(Wo),
          Ko = Ea(Wo),
          qo = Ea(Wo);
        function Jo(e) {
          if (e === Wo) throw Error(o(174));
          return e;
        }
        function Yo(e, t) {
          switch ((Ca(qo, t), Ca(Ko, e), Ca(Qo, Wo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          _a(Qo), Ca(Qo, t);
        }
        function Go() {
          _a(Qo), _a(Ko), _a(qo);
        }
        function Xo(e) {
          Jo(qo.current);
          var t = Jo(Qo.current),
            n = se(t, e.type);
          t !== n && (Ca(Ko, e), Ca(Qo, n));
        }
        function Zo(e) {
          Ko.current === e && (_a(Qo), _a(Ko));
        }
        var ei = Ea(0);
        function ti(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function ri() {
          for (var e = 0; e < ni.length; e++)
            ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var ai = S.ReactCurrentDispatcher,
          oi = S.ReactCurrentBatchConfig,
          ii = 0,
          li = null,
          si = null,
          ui = null,
          ci = !1,
          fi = !1,
          di = 0,
          pi = 0;
        function hi() {
          throw Error(o(321));
        }
        function gi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function mi(e, t, n, r, a, i) {
          if (
            ((ii = i),
            (li = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? Zi : el),
            (e = n(r, a)),
            fi)
          ) {
            i = 0;
            do {
              if (((fi = !1), (di = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (ui = si = null),
                (t.updateQueue = null),
                (ai.current = tl),
                (e = n(r, a));
            } while (fi);
          }
          if (
            ((ai.current = Xi),
            (t = null !== si && null !== si.next),
            (ii = 0),
            (ui = si = li = null),
            (ci = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function vi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function yi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ui ? (li.memoizedState = ui = e) : (ui = ui.next = e), ui
          );
        }
        function bi() {
          if (null === si) {
            var e = li.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = si.next;
          var t = null === ui ? li.memoizedState : ui.next;
          if (null !== t) (ui = t), (si = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (si = e).memoizedState,
              baseState: si.baseState,
              baseQueue: si.baseQueue,
              queue: si.queue,
              next: null,
            }),
              null === ui ? (li.memoizedState = ui = e) : (ui = ui.next = e);
          }
          return ui;
        }
        function Si(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function wi(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = si,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var f = c.lane;
              if ((ii & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
                  (li.lanes |= f),
                  (Is |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (bl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (li.lanes |= i), (Is |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ki(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (bl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function xi() {}
        function Ei(e, t) {
          var n = li,
            r = bi(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (bl = !0)),
            (r = r.queue),
            Ii(Oi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== ui && 1 & ui.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ri(9, Ci.bind(null, n, r, a, t), void 0, null),
              null === Ns)
            )
              throw Error(o(349));
            0 !== (30 & ii) || _i(n, t, a);
          }
          return a;
        }
        function _i(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e);
        }
        function Ci(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Pi(t) && Ni(e);
        }
        function Oi(e, t, n) {
          return n(function () {
            Pi(t) && Ni(e);
          });
        }
        function Pi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ni(e) {
          var t = zo(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Li(e) {
          var t = yi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Si,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = qi.bind(null, li, e)),
            [t.memoizedState, e]
          );
        }
        function Ri(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = li.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (li.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
                ? (t.lastEffect = e.next = e)
                : ((r = n.next),
                  (n.next = e),
                  (e.next = r),
                  (t.lastEffect = e)),
            e
          );
        }
        function Ti() {
          return bi().memoizedState;
        }
        function ji(e, t, n, r) {
          var a = yi();
          (li.flags |= e),
            (a.memoizedState = Ri(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Fi(e, t, n, r) {
          var a = bi();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== si) {
            var i = si.memoizedState;
            if (((o = i.destroy), null !== r && gi(r, i.deps)))
              return void (a.memoizedState = Ri(t, n, o, r));
          }
          (li.flags |= e), (a.memoizedState = Ri(1 | t, n, o, r));
        }
        function zi(e, t) {
          return ji(8390656, 8, e, t);
        }
        function Ii(e, t) {
          return Fi(2048, 8, e, t);
        }
        function Ai(e, t) {
          return Fi(4, 2, e, t);
        }
        function Mi(e, t) {
          return Fi(4, 4, e, t);
        }
        function Di(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
              ? ((e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                })
              : void 0;
        }
        function Ui(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Fi(4, 4, Di.bind(null, t, e), n)
          );
        }
        function Vi() {}
        function $i(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && gi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Bi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && gi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Hi(e, t, n) {
          return 0 === (21 & ii)
            ? (e.baseState && ((e.baseState = !1), (bl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = gt()), (li.lanes |= n), (Is |= n), (e.baseState = !0)),
              t);
        }
        function Wi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = oi.transition;
          oi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (oi.transition = r);
          }
        }
        function Qi() {
          return bi().memoizedState;
        }
        function Ki(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Ji(e))
          )
            Yi(t, n);
          else if (null !== (n = Fo(e, t, n, r))) {
            nu(n, e, r, eu()), Gi(n, t, r);
          }
        }
        function qi(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Ji(e)) Yi(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), jo(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Fo(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), Gi(n, t, r));
          }
        }
        function Ji(e) {
          var t = e.alternate;
          return e === li || (null !== t && t === li);
        }
        function Yi(e, t) {
          fi = ci = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Gi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Xi = {
            readContext: Ro,
            useCallback: hi,
            useContext: hi,
            useEffect: hi,
            useImperativeHandle: hi,
            useInsertionEffect: hi,
            useLayoutEffect: hi,
            useMemo: hi,
            useReducer: hi,
            useRef: hi,
            useState: hi,
            useDebugValue: hi,
            useDeferredValue: hi,
            useTransition: hi,
            useMutableSource: hi,
            useSyncExternalStore: hi,
            useId: hi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: Ro,
            useCallback: function (e, t) {
              return (yi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ro,
            useEffect: zi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                ji(4194308, 4, Di.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return ji(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return ji(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = yi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = yi();
              return (
                (t = void 0 !== n ? n(t) : t),
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
                (e = e.dispatch = Ki.bind(null, li, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (yi().memoizedState = e);
            },
            useState: Li,
            useDebugValue: Vi,
            useDeferredValue: function (e) {
              return (yi().memoizedState = e);
            },
            useTransition: function () {
              var e = Li(!1),
                t = e[0];
              return (
                (e = Wi.bind(null, e[1])), (yi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = li,
                a = yi();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ns)) throw Error(o(349));
                0 !== (30 & ii) || _i(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                zi(Oi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ri(9, Ci.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = yi(),
                t = Ns.identifierPrefix;
              if (ao) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = di++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: Ro,
            useCallback: $i,
            useContext: Ro,
            useEffect: Ii,
            useImperativeHandle: Ui,
            useInsertionEffect: Ai,
            useLayoutEffect: Mi,
            useMemo: Bi,
            useReducer: wi,
            useRef: Ti,
            useState: function () {
              return wi(Si);
            },
            useDebugValue: Vi,
            useDeferredValue: function (e) {
              return Hi(bi(), si.memoizedState, e);
            },
            useTransition: function () {
              return [wi(Si)[0], bi().memoizedState];
            },
            useMutableSource: xi,
            useSyncExternalStore: Ei,
            useId: Qi,
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: Ro,
            useCallback: $i,
            useContext: Ro,
            useEffect: Ii,
            useImperativeHandle: Ui,
            useInsertionEffect: Ai,
            useLayoutEffect: Mi,
            useMemo: Bi,
            useReducer: ki,
            useRef: Ti,
            useState: function () {
              return ki(Si);
            },
            useDebugValue: Vi,
            useDeferredValue: function (e) {
              var t = bi();
              return null === si
                ? (t.memoizedState = e)
                : Hi(t, si.memoizedState, e);
            },
            useTransition: function () {
              return [ki(Si)[0], bi().memoizedState];
            },
            useMutableSource: xi,
            useSyncExternalStore: Ei,
            useId: Qi,
            unstable_isNewReconciler: !1,
          };
        function nl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = A({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : A({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var al = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && $e(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Do(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Uo(e, o, a)) && (nu(t, e, a, r), Vo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Do(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Uo(e, o, a)) && (nu(t, e, a, r), Vo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Do(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Uo(e, a, r)) && (nu(t, e, r, n), Vo(t, e, r));
          },
        };
        function ol(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function il(e, t, n) {
          var r = !1,
            a = Oa,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Ro(o))
              : ((a = Ta(t) ? La : Pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ra(e, a)
                  : Oa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function ll(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && al.enqueueReplaceState(t, t.state, null);
        }
        function sl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Ao(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Ro(o))
            : ((o = Ta(t) ? La : Pa.current), (a.context = Ra(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (rl(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && al.enqueueReplaceState(a, a.state, null),
              Bo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function ul(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function cl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var dl = "function" === typeof WeakMap ? WeakMap : Map;
        function pl(e, t, n) {
          ((n = Do(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), (Ws = r)), fl(0, t);
            }),
            n
          );
        }
        function hl(e, t, n) {
          (n = Do(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new dl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = _u.bind(null, e, t, n)), t.then(e, e));
        }
        function ml(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Do(-1, 1)).tag = 2), Uo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yl = S.ReactCurrentOwner,
          bl = !1;
        function Sl(e, t, n, r) {
          t.child = null === e ? ko(t, null, n, r) : wo(t, e.child, n, r);
        }
        function wl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Lo(t, a),
            (r = mi(e, t, n, r, o, a)),
            (n = vi()),
            null === e || bl
              ? (ao && n && eo(t), (t.flags |= 1), Sl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hl(e, t, a))
          );
        }
        function kl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Tu(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), xl(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Hl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = ju(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xl(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((bl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hl(e, t, a);
              0 !== (131072 & e.flags) && (bl = !0);
            }
          }
          return Cl(e, t, n, r, a);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(js, Ts),
                (Ts |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(js, Ts),
                  (Ts |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ca(js, Ts),
                (Ts |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(js, Ts),
              (Ts |= r);
          return Sl(e, t, a, n), t.child;
        }
        function _l(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, n, r, a) {
          var o = Ta(n) ? La : Pa.current;
          return (
            (o = Ra(t, o)),
            Lo(t, a),
            (n = mi(e, t, n, r, o, a)),
            (r = vi()),
            null === e || bl
              ? (ao && r && eo(t), (t.flags |= 1), Sl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hl(e, t, a))
          );
        }
        function Ol(e, t, n, r, a) {
          if (Ta(n)) {
            var o = !0;
            Ia(t);
          } else o = !1;
          if ((Lo(t, a), null === t.stateNode))
            Bl(e, t), il(t, n, r), sl(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ro(u))
              : (u = Ra(t, (u = Ta(n) ? La : Pa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && ll(t, i, r, u)),
              (Io = !1);
            var d = t.memoizedState;
            (i.state = d),
              Bo(t, r, i, a),
              (s = t.memoizedState),
              l !== r || d !== s || Na.current || Io
                ? ("function" === typeof c &&
                    (rl(t, n, c, r), (s = t.memoizedState)),
                  (l = Io || ol(t, n, l, r, d, s, u))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Mo(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : nl(t.type, l)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ro(s))
                : (s = Ra(t, (s = Ta(n) ? La : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== s) && ll(t, i, r, s)),
              (Io = !1),
              (d = t.memoizedState),
              (i.state = d),
              Bo(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Na.current || Io
              ? ("function" === typeof p &&
                  (rl(t, n, p, r), (h = t.memoizedState)),
                (u = Io || ol(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pl(e, t, n, r, o, a);
        }
        function Pl(e, t, n, r, a, o) {
          _l(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Aa(t, n, !1), Hl(e, t, o);
          (r = t.stateNode), (yl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = wo(t, e.child, null, o)),
                (t.child = wo(t, null, l, o)))
              : Sl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Aa(t, n, !0),
            t.child
          );
        }
        function Nl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Fa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Fa(0, t.context, !1),
            Yo(e, t.containerInfo);
        }
        function Ll(e, t, n, r, a) {
          return ho(), go(a), (t.flags |= 256), Sl(e, t, n, r), t.child;
        }
        var Rl,
          Tl,
          jl,
          Fl,
          zl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Al(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ei.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ca(ei, 1 & i),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                      ? (t.lanes = 8)
                      : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Iu(s, a, 0, null)),
                      (e = zu(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Il(n)),
                      (t.memoizedState = zl),
                      e)
                    : Ml(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Dl(e, t, l, (r = cl(Error(o(422))))))
                  : null !== t.memoizedState
                    ? ((t.child = e.child), (t.flags |= 128), null)
                    : ((i = r.fallback),
                      (a = t.mode),
                      (r = Iu(
                        { mode: "visible", children: r.children },
                        a,
                        0,
                        null,
                      )),
                      ((i = zu(i, a, l, null)).flags |= 2),
                      (r.return = t),
                      (i.return = t),
                      (r.sibling = i),
                      (t.child = r),
                      0 !== (1 & t.mode) && wo(t, e.child, null, l),
                      (t.child.memoizedState = Il(l)),
                      (t.memoizedState = zl),
                      i);
              if (0 === (1 & t.mode)) return Dl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Dl(e, t, l, (r = cl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), bl || s)) {
                if (null !== (r = Ns)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
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
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), zo(e, a), nu(r, e, a, -1));
                }
                return gu(), Dl(e, t, l, (r = cl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ou.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Ka[qa++] = Ya),
                    (Ka[qa++] = Ga),
                    (Ka[qa++] = Ja),
                    (Ya = e.id),
                    (Ga = e.overflow),
                    (Ja = t)),
                  (t = Ml(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = ju(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = ju(r, l))
                : ((l = zu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Il(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = zl),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = ju(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ml(e, t) {
          return (
            ((t = Iu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null,
            )).return = e),
            (e.child = t)
          );
        }
        function Dl(e, t, n, r) {
          return (
            null !== r && go(r),
            wo(t, e.child, null, n),
            ((e = Ml(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ul(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), No(e.return, t, n);
        }
        function Vl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function $l(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((Sl(e, t, r.children, n), 0 !== (2 & (r = ei.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
                else if (19 === e.tag) Ul(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(ei, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ti(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Vl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ti(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Vl(t, !0, n, null, o);
                break;
              case "together":
                Vl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Bl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Is |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = ju((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = ju(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Kl(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
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
              return Ql(t), null;
            case 1:
            case 17:
              return Ta(t.type) && ja(), Ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Go(),
                _a(Na),
                _a(Pa),
                ri(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (iu(oo), (oo = null)))),
                Tl(e, t),
                Ql(t),
                null
              );
            case 5:
              Zo(t);
              var a = Jo(qo.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                jl(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Ql(t), null;
                }
                if (((e = Jo(Qo.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Dr(zr[a], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Dr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Dr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Dr("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Dr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                          ? (e = s.createElement(n, { is: r.is }))
                          : ((e = s.createElement(n)),
                            "select" === n &&
                              ((s = e),
                              r.multiple
                                ? (s.multiple = !0)
                                : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Rl(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Dr(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Dr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), (a = r);
                        break;
                      case "details":
                        Dr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = J(e, r)), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = A({}, r, { value: void 0 })),
                          Dr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Dr("invalid", e);
                    }
                    for (i in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === i
                            ? null != (c = c ? c.__html : void 0) && fe(e, c)
                            : "children" === i
                              ? "string" === typeof c
                                ? ("textarea" !== n || "" !== c) && de(e, c)
                                : "number" === typeof c && de(e, "" + c)
                              : "suppressContentEditableWarning" !== i &&
                                "suppressHydrationWarning" !== i &&
                                "autoFocus" !== i &&
                                (l.hasOwnProperty(i)
                                  ? null != c &&
                                    "onScroll" === i &&
                                    Dr("scroll", e)
                                  : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
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
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ql(t), null;
            case 6:
              if (e && null != t.stateNode) Fl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Jo(qo.current)), Jo(Qo.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r,
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Ql(t), null;
            case 13:
              if (
                (_a(ei),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ql(t), (i = !1);
                } else null !== oo && (iu(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ei.current)
                        ? 0 === Fs && (Fs = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null);
            case 4:
              return (
                Go(),
                Tl(e, t),
                null === e && $r(t.stateNode.containerInfo),
                Ql(t),
                null
              );
            case 10:
              return Po(t.type._context), Ql(t), null;
            case 19:
              if ((_a(ei), null === (i = t.memoizedState))) return Ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Wl(i, !1);
                else {
                  if (0 !== Fs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ti(e))) {
                        for (
                          t.flags |= 128,
                            Wl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(ei, (1 & ei.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ge() > $s &&
                    ((t.flags |= 128),
                    (r = !0),
                    Wl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ti(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return Ql(t), null;
                  } else
                    2 * Ge() - i.renderingStartTime > $s &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Wl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = ei.current),
                  Ca(ei, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ts) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function ql(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && ja(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Go(),
                _a(Na),
                _a(Pa),
                ri(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if (
                (_a(ei),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return _a(ei), null;
            case 4:
              return Go(), null;
            case 10:
              return Po(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Rl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Tl = function () {}),
          (jl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Jo(Qo.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (i = []);
                  break;
                case "select":
                  (a = A({}, a, { value: void 0 })),
                    (r = A({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                        ? ("string" !== typeof u && "number" !== typeof u) ||
                          (i = i || []).push(c, "" + u)
                        : "suppressContentEditableWarning" !== c &&
                          "suppressHydrationWarning" !== c &&
                          (l.hasOwnProperty(c)
                            ? (null != u && "onScroll" === c && Dr("scroll", e),
                              i || s === u || (i = []))
                            : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Fl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Jl = !1,
          Yl = !1,
          Gl = "function" === typeof WeakSet ? WeakSet : Set,
          Xl = null;
        function Zl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
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
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ga],
              delete t[ma],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Yl || Zl(n, t);
            case 6:
              var r = cs,
                a = fs;
              (cs = null),
                ds(e, t, n),
                (fs = a),
                null !== (cs = r) &&
                  (fs
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    $t(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (cs = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (
                !Yl &&
                (Zl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Eu(n, t, l);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yl = (r = Yl) || null !== n.memoizedState),
                  ds(e, t, n),
                  (Yl = r))
                : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gl()),
              t.forEach(function (t) {
                var r = Pu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(o(160));
                ps(i, l, a), (cs = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ms(t, e), (t = t.sibling);
        }
        function ms(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), vs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (m) {
                  Eu(e, e.return, m);
                }
                try {
                  ns(5, e, e.return);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 1:
              gs(t, e), vs(e), 512 & r && null !== n && Zl(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                vs(e),
                512 & r && null !== n && Zl(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      G(a, i),
                      be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                          ? fe(a, d)
                          : "children" === f
                            ? de(a, d)
                            : b(a, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (m) {
                    Eu(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  $t(t.containerInfo);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              break;
            case 4:
            default:
              gs(t, e), vs(e);
              break;
            case 13:
              gs(t, e),
                vs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Vs = Ge())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yl = (c = Yl) || f), gs(t, e), (Yl = c))
                  : gs(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Xl = e, f = e.child; null !== f; ) {
                    for (d = Xl = f; null !== Xl; ) {
                      switch (((h = (p = Xl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Zl(p, p.return);
                          var g = p.stateNode;
                          if ("function" === typeof g.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (g.props = t.memoizedProps),
                                (g.state = t.memoizedState),
                                g.componentWillUnmount();
                            } catch (m) {
                              Eu(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Zl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Xl = h)) : ws(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = ge("display", l)));
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), vs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    us(e, ls(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, ls(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Eu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Xl = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xl; ) {
            var a = Xl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Jl;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Yl;
                l = Jl;
                var u = Yl;
                if (((Jl = i), (Yl = s) && !u))
                  for (Xl = a; null !== Xl; )
                    (s = (i = Xl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(a)
                        : null !== s
                          ? ((s.return = i), (Xl = s))
                          : ks(a);
                for (; null !== o; ) (Xl = o), bs(o, t, n), (o = o.sibling);
                (Xl = a), (Jl = l), (Yl = u);
              }
              Ss(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Xl = o))
                : Ss(e);
          }
        }
        function Ss(e) {
          for (; null !== Xl; ) {
            var t = Xl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : nl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ho(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ho(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && $t(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Yl || (512 & t.flags && as(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Xl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xl = n);
              break;
            }
            Xl = t.return;
          }
        }
        function ws(e) {
          for (; null !== Xl; ) {
            var t = Xl;
            if (t === e) {
              Xl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xl = n);
              break;
            }
            Xl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Xl; ) {
            var t = Xl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              Xl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Xl = l);
              break;
            }
            Xl = t.return;
          }
        }
        var xs,
          Es = Math.ceil,
          _s = S.ReactCurrentDispatcher,
          Cs = S.ReactCurrentOwner,
          Os = S.ReactCurrentBatchConfig,
          Ps = 0,
          Ns = null,
          Ls = null,
          Rs = 0,
          Ts = 0,
          js = Ea(0),
          Fs = 0,
          zs = null,
          Is = 0,
          As = 0,
          Ms = 0,
          Ds = null,
          Us = null,
          Vs = 0,
          $s = 1 / 0,
          Bs = null,
          Hs = !1,
          Ws = null,
          Qs = null,
          Ks = !1,
          qs = null,
          Js = 0,
          Ys = 0,
          Gs = null,
          Xs = -1,
          Zs = 0;
        function eu() {
          return 0 !== (6 & Ps) ? Ge() : -1 !== Xs ? Xs : (Xs = Ge());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== Rs
              ? Rs & -Rs
              : null !== mo.transition
                ? (0 === Zs && (Zs = gt()), Zs)
                : 0 !== (e = bt)
                  ? e
                  : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ys) throw ((Ys = 0), (Gs = null), Error(o(185)));
          vt(e, n, r),
            (0 !== (2 & Ps) && e === Ns) ||
              (e === Ns && (0 === (2 & Ps) && (As |= n), 4 === Fs && lu(e, Rs)),
              ru(e, r),
              1 === n &&
                0 === Ps &&
                0 === (1 & t.mode) &&
                (($s = Ge() + 500), Da && $a()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ns ? Rs : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), Va(e);
                  })(su.bind(null, e))
                : Va(su.bind(null, e)),
                ia(function () {
                  0 === (6 & Ps) && $a();
                }),
                (n = null);
            else {
              switch (St(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Nu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Xs = -1), (Zs = 0), 0 !== (6 & Ps))) throw Error(o(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ns ? Rs : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mu(e, r);
          else {
            t = r;
            var a = Ps;
            Ps |= 2;
            var i = hu();
            for (
              (Ns === e && Rs === t) ||
              ((Bs = null), ($s = Ge() + 500), du(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            Oo(),
              (_s.current = i),
              (Ps = a),
              null !== Ls ? (t = 0) : ((Ns = null), (Rs = 0), (t = Fs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = zs), du(e, 0), lu(e, r), ru(e, Ge()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = mu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = ou(e, i))),
                  1 === t))
              )
                throw ((n = zs), du(e, 0), lu(e, r), ru(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wu(e, Us, Bs);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Vs + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, Us, Bs), t);
                    break;
                  }
                  wu(e, Us, Bs);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
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
                                    : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, Us, Bs), r);
                    break;
                  }
                  wu(e, Us, Bs);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ru(e, Ge()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Ds;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = mu(e, t)) && ((t = Us), (Us = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Us ? (Us = e) : Us.push.apply(Us, e);
        }
        function lu(e, t) {
          for (
            t &= ~Ms,
              t &= ~As,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Ps)) throw Error(o(327));
          ku();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ru(e, Ge()), null;
          var n = mu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = zs), du(e, 0), lu(e, t), ru(e, Ge()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Us, Bs),
            ru(e, Ge()),
            null
          );
        }
        function uu(e, t) {
          var n = Ps;
          Ps |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ps = n) && (($s = Ge() + 500), Da && $a());
          }
        }
        function cu(e) {
          null !== qs && 0 === qs.tag && 0 === (6 & Ps) && ku();
          var t = Ps;
          Ps |= 1;
          var n = Os.transition,
            r = bt;
          try {
            if (((Os.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Os.transition = n), 0 === (6 & (Ps = t)) && $a();
          }
        }
        function fu() {
          (Ts = js.current), _a(js);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ls))
            for (n = Ls.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    ja();
                  break;
                case 3:
                  Go(), _a(Na), _a(Pa), ri();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Go();
                  break;
                case 13:
                case 19:
                  _a(ei);
                  break;
                case 10:
                  Po(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ns = e),
            (Ls = e = ju(e.current, null)),
            (Rs = Ts = t),
            (Fs = 0),
            (zs = null),
            (Ms = As = Is = 0),
            (Us = Ds = null),
            null !== To)
          ) {
            for (t = 0; t < To.length; t++)
              if (null !== (r = (n = To[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            To = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ls;
            try {
              if ((Oo(), (ai.current = Xi), ci)) {
                for (var r = li.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ci = !1;
              }
              if (
                ((ii = 0),
                (ui = si = li = null),
                (fi = !1),
                (di = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (Fs = 1), (zs = t), (Ls = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Rs),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = ml(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && gl(i, c, t),
                      (u = c);
                    var g = (t = h).updateQueue;
                    if (null === g) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else g.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(i, c, t), gu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var v = ml(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vl(v, l, s, 0, t),
                      go(ul(u, s));
                    break e;
                  }
                }
                (i = u = ul(u, s)),
                  4 !== Fs && (Fs = 2),
                  null === Ds ? (Ds = [i]) : Ds.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        $o(i, pl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qs || !Qs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          $o(i, hl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              Su(n);
            } catch (S) {
              (t = S), Ls === n && null !== n && (Ls = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = _s.current;
          return (_s.current = Xi), null === e ? Xi : e;
        }
        function gu() {
          (0 !== Fs && 3 !== Fs && 2 !== Fs) || (Fs = 4),
            null === Ns ||
              (0 === (268435455 & Is) && 0 === (268435455 & As)) ||
              lu(Ns, Rs);
        }
        function mu(e, t) {
          var n = Ps;
          Ps |= 2;
          var r = hu();
          for ((Ns === e && Rs === t) || ((Bs = null), du(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((Oo(), (Ps = n), (_s.current = r), null !== Ls))
            throw Error(o(261));
          return (Ns = null), (Rs = 0), Fs;
        }
        function vu() {
          for (; null !== Ls; ) bu(Ls);
        }
        function yu() {
          for (; null !== Ls && !Je(); ) bu(Ls);
        }
        function bu(e) {
          var t = xs(e.alternate, e, Ts);
          (e.memoizedProps = e.pendingProps),
            null === t ? Su(e) : (Ls = t),
            (Cs.current = null);
        }
        function Su(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Kl(n, t, Ts))) return void (Ls = n);
            } else {
              if (null !== (n = ql(n, t)))
                return (n.flags &= 32767), void (Ls = n);
              if (null === e) return (Fs = 6), void (Ls = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ls = t);
            Ls = t = e;
          } while (null !== t);
          0 === Fs && (Fs = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            a = Os.transition;
          try {
            (Os.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== qs);
                if (0 !== (6 & Ps)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Ns && ((Ls = Ns = null), (Rs = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Nu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Os.transition), (Os.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (s = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === i && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Xl = t;
                        null !== Xl;

                      )
                        if (
                          ((e = (t = Xl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xl = e);
                        else
                          for (; null !== Xl; ) {
                            t = Xl;
                            try {
                              var g = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== g) {
                                      var m = g.memoizedProps,
                                        v = g.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : nl(t.type, m),
                                          v,
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var S = t.stateNode.containerInfo;
                                    1 === S.nodeType
                                      ? (S.textContent = "")
                                      : 9 === S.nodeType &&
                                        S.documentElement &&
                                        S.removeChild(S.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              Eu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xl = e);
                              break;
                            }
                            Xl = t.return;
                          }
                      (g = ts), (ts = !1);
                    })(e, n),
                    ms(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ye(),
                    (Ps = s),
                    (bt = l),
                    (Os.transition = i);
                } else e.current = n;
                if (
                  (Ks && ((Ks = !1), (qs = e), (Js = a)),
                  (i = e.pendingLanes),
                  0 === i && (Qs = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags),
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hs) throw ((Hs = !1), (e = Ws), (Ws = null), e);
                0 !== (1 & Js) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Gs
                      ? Ys++
                      : ((Ys = 0), (Gs = e))
                    : (Ys = 0),
                  $a();
              })(e, t, n, r);
          } finally {
            (Os.transition = a), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== qs) {
            var e = St(Js),
              t = Os.transition,
              n = bt;
            try {
              if (((Os.transition = null), (bt = 16 > e ? 16 : e), null === qs))
                var r = !1;
              else {
                if (((e = qs), (qs = null), (Js = 0), 0 !== (6 & Ps)))
                  throw Error(o(331));
                var a = Ps;
                for (Ps |= 4, Xl = e.current; null !== Xl; ) {
                  var i = Xl,
                    l = i.child;
                  if (0 !== (16 & Xl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Xl = c; null !== Xl; ) {
                          var f = Xl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Xl = d);
                          else
                            for (; null !== Xl; ) {
                              var p = (f = Xl).sibling,
                                h = f.return;
                              if ((os(f), f === c)) {
                                Xl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Xl = p);
                                break;
                              }
                              Xl = h;
                            }
                        }
                      }
                      var g = i.alternate;
                      if (null !== g) {
                        var m = g.child;
                        if (null !== m) {
                          g.child = null;
                          do {
                            var v = m.sibling;
                            (m.sibling = null), (m = v);
                          } while (null !== m);
                        }
                      }
                      Xl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Xl = l);
                  else
                    e: for (; null !== Xl; ) {
                      if (0 !== (2048 & (i = Xl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Xl = y);
                        break e;
                      }
                      Xl = i.return;
                    }
                }
                var b = e.current;
                for (Xl = b; null !== Xl; ) {
                  var S = (l = Xl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== S)
                    (S.return = l), (Xl = S);
                  else
                    e: for (l = b; null !== Xl; ) {
                      if (0 !== (2048 & (s = Xl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          Eu(s, s.return, k);
                        }
                      if (s === l) {
                        Xl = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Xl = w);
                        break e;
                      }
                      Xl = s.return;
                    }
                }
                if (
                  ((Ps = a),
                  $a(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Os.transition = t);
            }
          }
          return !1;
        }
        function xu(e, t, n) {
          (e = Uo(e, (t = pl(0, (t = ul(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (vt(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) xu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qs || !Qs.has(r)))
                ) {
                  (t = Uo(t, (e = hl(t, (e = ul(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (vt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _u(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ns === e &&
              (Rs & n) === n &&
              (4 === Fs ||
              (3 === Fs && (130023424 & Rs) === Rs && 500 > Ge() - Vs)
                ? du(e, 0)
                : (Ms |= n)),
            ru(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = zo(e, t)) && (vt(e, t, n), ru(e, n));
        }
        function Ou(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function Pu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function Nu(e, t) {
          return Ke(e, t);
        }
        function Lu(e, t, n, r) {
          (this.tag = e),
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
            (this.alternate = null);
        }
        function Ru(e, t, n, r) {
          return new Lu(e, t, n, r);
        }
        function Tu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function ju(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ru(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Fu(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Tu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case x:
                return zu(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case _:
                return (
                  ((e = Ru(12, n, t, 2 | a)).elementType = _), (e.lanes = i), e
                );
              case N:
                return (
                  ((e = Ru(13, n, t, a)).elementType = N), (e.lanes = i), e
                );
              case L:
                return (
                  ((e = Ru(19, n, t, a)).elementType = L), (e.lanes = i), e
                );
              case j:
                return Iu(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case O:
                      l = 9;
                      break e;
                    case P:
                      l = 11;
                      break e;
                    case R:
                      l = 14;
                      break e;
                    case T:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ru(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function zu(e, t, n, r) {
          return ((e = Ru(7, e, r, t)).lanes = n), e;
        }
        function Iu(e, t, n, r) {
          return (
            ((e = Ru(22, e, r, t)).elementType = j),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Au(e, t, n) {
          return ((e = Ru(6, e, null, t)).lanes = n), e;
        }
        function Mu(e, t, n) {
          return (
            ((t = Ru(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Du(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uu(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new Du(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ru(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ao(o),
            e
          );
        }
        function Vu(e) {
          if (!e) return Oa;
          e: {
            if ($e((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ta(n)) return za(e, n, t);
          }
          return t;
        }
        function $u(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = Uu(n, r, !0, e, 0, o, 0, l, s)).context = Vu(null)),
            (n = e.current),
            ((o = Do((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Uo(n, o, a),
            (e.current.lanes = a),
            vt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Bu(e, t, n, r) {
          var a = t.current,
            o = eu(),
            i = tu(a);
          return (
            (n = Vu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Do(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Uo(a, t, i)) && (nu(e, a, i, o), Vo(e, a, i)),
            i
          );
        }
        function Hu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Wu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          Wu(e, t), (e = e.alternate) && Wu(e, t);
        }
        xs = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) bl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Nl(t), ho();
                        break;
                      case 5:
                        Xo(t);
                        break;
                      case 1:
                        Ta(t.type) && Ia(t);
                        break;
                      case 4:
                        Yo(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(xo, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(ei, 1 & ei.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? Al(e, t, n)
                              : (Ca(ei, 1 & ei.current),
                                null !== (e = Hl(e, t, n)) ? e.sibling : null);
                        Ca(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return $l(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(ei, ei.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return Hl(e, t, n);
                  })(e, t, n)
                );
              bl = 0 !== (131072 & e.flags);
            }
          else (bl = !1), ao && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Bl(e, t), (e = t.pendingProps);
              var a = Ra(t, Pa.current);
              Lo(t, n), (a = mi(null, t, r, e, a, n));
              var i = vi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((i = !0), Ia(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ao(t),
                    (a.updater = al),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    sl(t, r, e, n),
                    (t = Pl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    Sl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Bl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Tu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = nl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Cl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ol(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, nl(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Cl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ol(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 3:
              e: {
                if ((Nl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Mo(e, t),
                  Bo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ll(e, t, r, n, (a = ul(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ll(e, t, r, n, (a = ul(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = ko(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Hl(e, t, n);
                    break e;
                  }
                  Sl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Xo(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                _l(e, t),
                Sl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Al(e, t, n);
            case 4:
              return (
                Yo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wo(t, null, r, n)) : Sl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wl(e, t, r, (a = t.elementType === r ? a : nl(r, a)), n)
              );
            case 7:
              return Sl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Sl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Ca(xo, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Na.current) {
                      t = Hl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Do(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              No(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          No(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                Sl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Lo(t, n),
                (r = r((a = Ro(a)))),
                (t.flags |= 1),
                Sl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = nl((r = t.type), t.pendingProps)),
                kl(e, t, r, (a = nl(r.type, a)), n)
              );
            case 15:
              return xl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : nl(r, a)),
                Bl(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), Ia(t)) : (e = !1),
                Lo(t, n),
                il(t, r, a),
                sl(t, r, a, n),
                Pl(null, t, r, !0, e, n)
              );
            case 19:
              return $l(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Ku =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function qu(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Xu() {}
        function Zu(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Hu(i);
                l.call(e);
              };
            }
            Bu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Hu(i);
                    o.call(e);
                  };
                }
                var i = $u(t, r, e, 0, null, !1, 0, "", Xu);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  $r(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Hu(s);
                  l.call(e);
                };
              }
              var s = Uu(e, 0, !1, null, 0, !1, 0, "", Xu);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                $r(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Bu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Hu(i);
        }
        (Ju.prototype.render = qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Bu(e, t, null, null);
          }),
          (Ju.prototype.unmount = qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Bu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ju.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < jt.length && 0 !== t && t < jt[n].priority;
                n++
              );
              jt.splice(n, 0, e), 0 === n && At(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ge()),
                    0 === (6 & Ps) && (($s = Ge() + 500), $a()));
                }
                break;
              case 13:
                cu(function () {
                  var t = zo(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = zo(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Qu(e, 134217728);
            }
          }),
          (xt = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = zo(e, t);
              if (null !== n) nu(n, e, t, eu());
              Qu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (_t = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" +
                        JSON.stringify("" + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      K(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = uu),
          (Ne = cu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, Sa, wa, Ce, Oe, uu],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: S.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (ot = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Yu(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Yu(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              $r(8 === e.nodeType ? e.parentNode : e),
              new qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Gu(t)) throw Error(o(200));
            return Zu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Yu(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Ku;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = $u(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              $r(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ju(t);
          }),
          (t.render = function (e, t, n) {
            if (!Gu(t)) throw Error(o(200));
            return Zu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Gu(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                Zu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Gu(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zu(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        "use strict";
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      366: (e) => {
        "use strict";
        var t = Array.isArray,
          n = Object.keys,
          r = Object.prototype.hasOwnProperty,
          a = "undefined" !== typeof Element;
        function o(e, i) {
          if (e === i) return !0;
          if (e && i && "object" == typeof e && "object" == typeof i) {
            var l,
              s,
              u,
              c = t(e),
              f = t(i);
            if (c && f) {
              if ((s = e.length) != i.length) return !1;
              for (l = s; 0 !== l--; ) if (!o(e[l], i[l])) return !1;
              return !0;
            }
            if (c != f) return !1;
            var d = e instanceof Date,
              p = i instanceof Date;
            if (d != p) return !1;
            if (d && p) return e.getTime() == i.getTime();
            var h = e instanceof RegExp,
              g = i instanceof RegExp;
            if (h != g) return !1;
            if (h && g) return e.toString() == i.toString();
            var m = n(e);
            if ((s = m.length) !== n(i).length) return !1;
            for (l = s; 0 !== l--; ) if (!r.call(i, m[l])) return !1;
            if (a && e instanceof Element && i instanceof Element)
              return e === i;
            for (l = s; 0 !== l--; )
              if (("_owner" !== (u = m[l]) || !e.$$typeof) && !o(e[u], i[u]))
                return !1;
            return !0;
          }
          return e !== e && i !== i;
        }
        e.exports = function (e, t) {
          try {
            return o(e, t);
          } catch (n) {
            if (
              (n.message && n.message.match(/stack|recursion/i)) ||
              -2146828260 === n.number
            )
              return (
                console.warn(
                  "Warning: react-fast-compare does not handle circular references.",
                  n.name,
                  n.message,
                ),
                !1
              );
            throw n;
          }
        };
      },
      82: (e, t) => {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          a = n ? Symbol.for("react.portal") : 60106,
          o = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          s = n ? Symbol.for("react.provider") : 60109,
          u = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          g = n ? Symbol.for("react.memo") : 60115,
          m = n ? Symbol.for("react.lazy") : 60116,
          v = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          S = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case o:
                  case l:
                  case i:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case d:
                      case m:
                      case g:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case a:
                return t;
            }
          }
        }
        function k(e) {
          return w(e) === f;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = u),
          (t.ContextProvider = s),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = o),
          (t.Lazy = m),
          (t.Memo = g),
          (t.Portal = a),
          (t.Profiler = l),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return k(e) || w(e) === c;
          }),
          (t.isConcurrentMode = k),
          (t.isContextConsumer = function (e) {
            return w(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return w(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return w(e) === d;
          }),
          (t.isFragment = function (e) {
            return w(e) === o;
          }),
          (t.isLazy = function (e) {
            return w(e) === m;
          }),
          (t.isMemo = function (e) {
            return w(e) === g;
          }),
          (t.isPortal = function (e) {
            return w(e) === a;
          }),
          (t.isProfiler = function (e) {
            return w(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return w(e) === i;
          }),
          (t.isSuspense = function (e) {
            return w(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === o ||
              e === f ||
              e === l ||
              e === i ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === g ||
                  e.$$typeof === s ||
                  e.$$typeof === u ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === S ||
                  e.$$typeof === v))
            );
          }),
          (t.typeOf = w);
      },
      86: (e, t, n) => {
        "use strict";
        e.exports = n(82);
      },
      153: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          m = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var S = (b.prototype = new y());
        (S.constructor = b), g(S, v.prototype), (S.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          x = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: x.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var O = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + P(s, 0) : o),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(O, "$&/") + "/"),
                  N(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(O, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + P((l = e[u]), u);
              s += N(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += N((l = l.value), t, a, (c = o + P(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return s;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          j = { transition: null },
          F = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: j,
            ReactCurrentOwner: x,
          };
        function z() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
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
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (t.act = z),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var a = g({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = x.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = j.transition;
            j.transition = {};
            try {
              e();
            } finally {
              j.transition = t;
            }
          }),
          (t.unstable_act = z),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(153);
      },
      234: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          g = !1,
          m = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function S(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), S(e), !g))
            if (null !== r(u)) (g = !0), j(k);
            else {
              var t = r(c);
              null !== t && F(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (g = !1), m && ((m = !1), y(C), (C = -1)), (h = !0);
          var o = p;
          try {
            for (
              S(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(u) && a(u),
                  S(n);
              } else a(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && F(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          E = !1,
          _ = null,
          C = -1,
          O = 5,
          P = -1;
        function N() {
          return !(t.unstable_now() - P < O);
        }
        function L() {
          if (null !== _) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = _(!0, e);
            } finally {
              n ? x() : ((E = !1), (_ = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          x = function () {
            b(L);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(),
            T = R.port2;
          (R.port1.onmessage = L),
            (x = function () {
              T.postMessage(null);
            });
        } else
          x = function () {
            v(L, 0);
          };
        function j(e) {
          (_ = e), E || ((E = !0), x());
        }
        function F(e, n) {
          C = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            g || h || ((g = !0), j(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (O = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (y(C), (C = -1)) : (m = !0), F(w, o - i)))
                : ((e.sortIndex = l), n(u, e), g || h || ((g = !0), j(k))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(234);
      },
      844: (e) => {
        e.exports = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(o, i), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = n(391);
      const t = {
        type: "logger",
        log(e) {
          this.output("log", e);
        },
        warn(e) {
          this.output("warn", e);
        },
        error(e) {
          this.output("error", e);
        },
        output(e, t) {
          console && console[e] && console[e].apply(console, t);
        },
      };
      class r {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.init(e, t);
        }
        init(e) {
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.prefix = n.prefix || "i18next:"),
            (this.logger = e || t),
            (this.options = n),
            (this.debug = n.debug);
        }
        log() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "log", "", !0);
        }
        warn() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "", !0);
        }
        error() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "error", "");
        }
        deprecate() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
        }
        forward(e, t, n, r) {
          return r && !this.debug
            ? null
            : ("string" === typeof e[0] &&
                (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
              this.logger[t](e));
        }
        create(e) {
          return new r(this.logger, {
            prefix: "".concat(this.prefix, ":").concat(e, ":"),
            ...this.options,
          });
        }
        clone(e) {
          return (
            ((e = e || this.options).prefix = e.prefix || this.prefix),
            new r(this.logger, e)
          );
        }
      }
      var a = new r();
      class o {
        constructor() {
          this.observers = {};
        }
        on(e, t) {
          return (
            e.split(" ").forEach((e) => {
              this.observers[e] || (this.observers[e] = new Map());
              const n = this.observers[e].get(t) || 0;
              this.observers[e].set(t, n + 1);
            }),
            this
          );
        }
        off(e, t) {
          this.observers[e] &&
            (t ? this.observers[e].delete(t) : delete this.observers[e]);
        }
        emit(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          if (this.observers[e]) {
            Array.from(this.observers[e].entries()).forEach((e) => {
              let [t, r] = e;
              for (let a = 0; a < r; a++) t(...n);
            });
          }
          if (this.observers["*"]) {
            Array.from(this.observers["*"].entries()).forEach((t) => {
              let [r, a] = t;
              for (let o = 0; o < a; o++) r.apply(r, [e, ...n]);
            });
          }
        }
      }
      function i() {
        let e, t;
        const n = new Promise((n, r) => {
          (e = n), (t = r);
        });
        return (n.resolve = e), (n.reject = t), n;
      }
      function l(e) {
        return null == e ? "" : "" + e;
      }
      const s = /###/g;
      function u(e, t, n) {
        function r(e) {
          return e && e.indexOf("###") > -1 ? e.replace(s, ".") : e;
        }
        function a() {
          return !e || "string" === typeof e;
        }
        const o = "string" !== typeof t ? t : t.split(".");
        let i = 0;
        for (; i < o.length - 1; ) {
          if (a()) return {};
          const t = r(o[i]);
          !e[t] && n && (e[t] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}),
            ++i;
        }
        return a() ? {} : { obj: e, k: r(o[i]) };
      }
      function c(e, t, n) {
        const { obj: r, k: a } = u(e, t, Object);
        if (void 0 !== r || 1 === t.length) return void (r[a] = n);
        let o = t[t.length - 1],
          i = t.slice(0, t.length - 1),
          l = u(e, i, Object);
        for (; void 0 === l.obj && i.length; )
          (o = "".concat(i[i.length - 1], ".").concat(o)),
            (i = i.slice(0, i.length - 1)),
            (l = u(e, i, Object)),
            l &&
              l.obj &&
              "undefined" !== typeof l.obj["".concat(l.k, ".").concat(o)] &&
              (l.obj = void 0);
        l.obj["".concat(l.k, ".").concat(o)] = n;
      }
      function f(e, t) {
        const { obj: n, k: r } = u(e, t);
        if (n) return n[r];
      }
      function d(e, t, n) {
        for (const r in t)
          "__proto__" !== r &&
            "constructor" !== r &&
            (r in e
              ? "string" === typeof e[r] ||
                e[r] instanceof String ||
                "string" === typeof t[r] ||
                t[r] instanceof String
                ? n && (e[r] = t[r])
                : d(e[r], t[r], n)
              : (e[r] = t[r]));
        return e;
      }
      function p(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var h = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      function g(e) {
        return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (e) => h[e]) : e;
      }
      const m = [" ", ",", "?", "!", ";"],
        v = new (class {
          constructor(e) {
            (this.capacity = e),
              (this.regExpMap = new Map()),
              (this.regExpQueue = []);
          }
          getRegExp(e) {
            const t = this.regExpMap.get(e);
            if (void 0 !== t) return t;
            const n = new RegExp(e);
            return (
              this.regExpQueue.length === this.capacity &&
                this.regExpMap.delete(this.regExpQueue.shift()),
              this.regExpMap.set(e, n),
              this.regExpQueue.push(e),
              n
            );
          }
        })(20);
      function y(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
        if (!e) return;
        if (e[t]) return e[t];
        const r = t.split(n);
        let a = e;
        for (let o = 0; o < r.length; ) {
          if (!a || "object" !== typeof a) return;
          let e,
            t = "";
          for (let i = o; i < r.length; ++i)
            if ((i !== o && (t += n), (t += r[i]), (e = a[t]), void 0 !== e)) {
              if (
                ["string", "number", "boolean"].indexOf(typeof e) > -1 &&
                i < r.length - 1
              )
                continue;
              o += i - o + 1;
              break;
            }
          a = e;
        }
        return a;
      }
      function b(e) {
        return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
      }
      class S extends o {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
          super(),
            (this.data = e || {}),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            void 0 === this.options.ignoreJSONStructure &&
              (this.options.ignoreJSONStructure = !0);
        }
        addNamespaces(e) {
          this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
        }
        removeNamespaces(e) {
          const t = this.options.ns.indexOf(e);
          t > -1 && this.options.ns.splice(t, 1);
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          const a =
              void 0 !== r.keySeparator
                ? r.keySeparator
                : this.options.keySeparator,
            o =
              void 0 !== r.ignoreJSONStructure
                ? r.ignoreJSONStructure
                : this.options.ignoreJSONStructure;
          let i;
          e.indexOf(".") > -1
            ? (i = e.split("."))
            : ((i = [e, t]),
              n &&
                (Array.isArray(n)
                  ? i.push(...n)
                  : "string" === typeof n && a
                    ? i.push(...n.split(a))
                    : i.push(n)));
          const l = f(this.data, i);
          return (
            !l &&
              !t &&
              !n &&
              e.indexOf(".") > -1 &&
              ((e = i[0]), (t = i[1]), (n = i.slice(2).join("."))),
            l || !o || "string" !== typeof n
              ? l
              : y(this.data && this.data[e] && this.data[e][t], n, a)
          );
        }
        addResource(e, t, n, r) {
          let a =
            arguments.length > 4 && void 0 !== arguments[4]
              ? arguments[4]
              : { silent: !1 };
          const o =
            void 0 !== a.keySeparator
              ? a.keySeparator
              : this.options.keySeparator;
          let i = [e, t];
          n && (i = i.concat(o ? n.split(o) : n)),
            e.indexOf(".") > -1 && ((i = e.split(".")), (r = t), (t = i[1])),
            this.addNamespaces(t),
            c(this.data, i, r),
            a.silent || this.emit("added", e, t, n, r);
        }
        addResources(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : { silent: !1 };
          for (const a in n)
            ("string" === typeof n[a] || Array.isArray(n[a])) &&
              this.addResource(e, t, a, n[a], { silent: !0 });
          r.silent || this.emit("added", e, t, n);
        }
        addResourceBundle(e, t, n, r, a) {
          let o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : { silent: !1, skipCopy: !1 },
            i = [e, t];
          e.indexOf(".") > -1 &&
            ((i = e.split(".")), (r = n), (n = t), (t = i[1])),
            this.addNamespaces(t);
          let l = f(this.data, i) || {};
          o.skipCopy || (n = JSON.parse(JSON.stringify(n))),
            r ? d(l, n, a) : (l = { ...l, ...n }),
            c(this.data, i, l),
            o.silent || this.emit("added", e, t, n);
        }
        removeResourceBundle(e, t) {
          this.hasResourceBundle(e, t) && delete this.data[e][t],
            this.removeNamespaces(t),
            this.emit("removed", e, t);
        }
        hasResourceBundle(e, t) {
          return void 0 !== this.getResource(e, t);
        }
        getResourceBundle(e, t) {
          return (
            t || (t = this.options.defaultNS),
            "v1" === this.options.compatibilityAPI
              ? { ...this.getResource(e, t) }
              : this.getResource(e, t)
          );
        }
        getDataByLanguage(e) {
          return this.data[e];
        }
        hasLanguageSomeTranslations(e) {
          const t = this.getDataByLanguage(e);
          return !!((t && Object.keys(t)) || []).find(
            (e) => t[e] && Object.keys(t[e]).length > 0,
          );
        }
        toJSON() {
          return this.data;
        }
      }
      var w = {
        processors: {},
        addPostProcessor(e) {
          this.processors[e.name] = e;
        },
        handle(e, t, n, r, a) {
          return (
            e.forEach((e) => {
              this.processors[e] &&
                (t = this.processors[e].process(t, n, r, a));
            }),
            t
          );
        },
      };
      const k = {};
      class x extends o {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (function (e, t, n) {
              e.forEach((e) => {
                t[e] && (n[e] = t[e]);
              });
            })(
              [
                "resourceStore",
                "languageUtils",
                "pluralResolver",
                "interpolator",
                "backendConnector",
                "i18nFormat",
                "utils",
              ],
              e,
              this,
            ),
            (this.options = t),
            void 0 === this.options.keySeparator &&
              (this.options.keySeparator = "."),
            (this.logger = a.create("translator"));
        }
        changeLanguage(e) {
          e && (this.language = e);
        }
        exists(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} };
          if (void 0 === e || null === e) return !1;
          const n = this.resolve(e, t);
          return n && void 0 !== n.res;
        }
        extractFromKey(e, t) {
          let n =
            void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
          void 0 === n && (n = ":");
          const r =
            void 0 !== t.keySeparator
              ? t.keySeparator
              : this.options.keySeparator;
          let a = t.ns || this.options.defaultNS || [];
          const o = n && e.indexOf(n) > -1,
            i =
              !this.options.userDefinedKeySeparator &&
              !t.keySeparator &&
              !this.options.userDefinedNsSeparator &&
              !t.nsSeparator &&
              !(function (e, t, n) {
                (t = t || ""), (n = n || "");
                const r = m.filter((e) => t.indexOf(e) < 0 && n.indexOf(e) < 0);
                if (0 === r.length) return !0;
                const a = v.getRegExp(
                  "(".concat(
                    r.map((e) => ("?" === e ? "\\?" : e)).join("|"),
                    ")",
                  ),
                );
                let o = !a.test(e);
                if (!o) {
                  const t = e.indexOf(n);
                  t > 0 && !a.test(e.substring(0, t)) && (o = !0);
                }
                return o;
              })(e, n, r);
          if (o && !i) {
            const t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return { key: e, namespaces: a };
            const o = e.split(n);
            (n !== r || (n === r && this.options.ns.indexOf(o[0]) > -1)) &&
              (a = o.shift()),
              (e = o.join(r));
          }
          return "string" === typeof a && (a = [a]), { key: e, namespaces: a };
        }
        translate(e, t, n) {
          if (
            ("object" !== typeof t &&
              this.options.overloadTranslationOptionHandler &&
              (t = this.options.overloadTranslationOptionHandler(arguments)),
            "object" === typeof t && (t = { ...t }),
            t || (t = {}),
            void 0 === e || null === e)
          )
            return "";
          Array.isArray(e) || (e = [String(e)]);
          const r =
              void 0 !== t.returnDetails
                ? t.returnDetails
                : this.options.returnDetails,
            a =
              void 0 !== t.keySeparator
                ? t.keySeparator
                : this.options.keySeparator,
            { key: o, namespaces: i } = this.extractFromKey(e[e.length - 1], t),
            l = i[i.length - 1],
            s = t.lng || this.language,
            u =
              t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (s && "cimode" === s.toLowerCase()) {
            if (u) {
              const e = t.nsSeparator || this.options.nsSeparator;
              return r
                ? {
                    res: "".concat(l).concat(e).concat(o),
                    usedKey: o,
                    exactUsedKey: o,
                    usedLng: s,
                    usedNS: l,
                    usedParams: this.getUsedParamsDetails(t),
                  }
                : "".concat(l).concat(e).concat(o);
            }
            return r
              ? {
                  res: o,
                  usedKey: o,
                  exactUsedKey: o,
                  usedLng: s,
                  usedNS: l,
                  usedParams: this.getUsedParamsDetails(t),
                }
              : o;
          }
          const c = this.resolve(e, t);
          let f = c && c.res;
          const d = (c && c.usedKey) || o,
            p = (c && c.exactUsedKey) || o,
            h = Object.prototype.toString.apply(f),
            g =
              void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
            m = !this.i18nFormat || this.i18nFormat.handleAsObject;
          if (
            m &&
            f &&
            "string" !== typeof f &&
            "boolean" !== typeof f &&
            "number" !== typeof f &&
            ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(
              h,
            ) < 0 &&
            ("string" !== typeof g || !Array.isArray(f))
          ) {
            if (!t.returnObjects && !this.options.returnObjects) {
              this.options.returnedObjectHandler ||
                this.logger.warn(
                  "accessing an object - but returnObjects options is not enabled!",
                );
              const e = this.options.returnedObjectHandler
                ? this.options.returnedObjectHandler(d, f, { ...t, ns: i })
                : "key '"
                    .concat(o, " (")
                    .concat(
                      this.language,
                      ")' returned an object instead of string.",
                    );
              return r
                ? ((c.res = e),
                  (c.usedParams = this.getUsedParamsDetails(t)),
                  c)
                : e;
            }
            if (a) {
              const e = Array.isArray(f),
                n = e ? [] : {},
                r = e ? p : d;
              for (const o in f)
                if (Object.prototype.hasOwnProperty.call(f, o)) {
                  const e = "".concat(r).concat(a).concat(o);
                  (n[o] = this.translate(e, { ...t, joinArrays: !1, ns: i })),
                    n[o] === e && (n[o] = f[o]);
                }
              f = n;
            }
          } else if (m && "string" === typeof g && Array.isArray(f))
            (f = f.join(g)), f && (f = this.extendTranslation(f, e, t, n));
          else {
            let r = !1,
              i = !1;
            const u = void 0 !== t.count && "string" !== typeof t.count,
              d = x.hasDefaultValue(t),
              p = u ? this.pluralResolver.getSuffix(s, t.count, t) : "",
              h =
                t.ordinal && u
                  ? this.pluralResolver.getSuffix(s, t.count, { ordinal: !1 })
                  : "",
              g =
                u &&
                !t.ordinal &&
                0 === t.count &&
                this.pluralResolver.shouldUseIntlApi(),
              m =
                (g &&
                  t[
                    "defaultValue".concat(this.options.pluralSeparator, "zero")
                  ]) ||
                t["defaultValue".concat(p)] ||
                t["defaultValue".concat(h)] ||
                t.defaultValue;
            !this.isValidLookup(f) && d && ((r = !0), (f = m)),
              this.isValidLookup(f) || ((i = !0), (f = o));
            const v =
                (t.missingKeyNoValueFallbackToKey ||
                  this.options.missingKeyNoValueFallbackToKey) &&
                i
                  ? void 0
                  : f,
              y = d && m !== f && this.options.updateMissing;
            if (i || r || y) {
              if (
                (this.logger.log(
                  y ? "updateKey" : "missingKey",
                  s,
                  l,
                  o,
                  y ? m : f,
                ),
                a)
              ) {
                const e = this.resolve(o, { ...t, keySeparator: !1 });
                e &&
                  e.res &&
                  this.logger.warn(
                    "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                  );
              }
              let e = [];
              const n = this.languageUtils.getFallbackCodes(
                this.options.fallbackLng,
                t.lng || this.language,
              );
              if ("fallback" === this.options.saveMissingTo && n && n[0])
                for (let t = 0; t < n.length; t++) e.push(n[t]);
              else
                "all" === this.options.saveMissingTo
                  ? (e = this.languageUtils.toResolveHierarchy(
                      t.lng || this.language,
                    ))
                  : e.push(t.lng || this.language);
              const r = (e, n, r) => {
                const a = d && r !== f ? r : v;
                this.options.missingKeyHandler
                  ? this.options.missingKeyHandler(e, l, n, a, y, t)
                  : this.backendConnector &&
                    this.backendConnector.saveMissing &&
                    this.backendConnector.saveMissing(e, l, n, a, y, t),
                  this.emit("missingKey", e, l, n, f);
              };
              this.options.saveMissing &&
                (this.options.saveMissingPlurals && u
                  ? e.forEach((e) => {
                      const n = this.pluralResolver.getSuffixes(e, t);
                      g &&
                        t[
                          "defaultValue".concat(
                            this.options.pluralSeparator,
                            "zero",
                          )
                        ] &&
                        n.indexOf(
                          "".concat(this.options.pluralSeparator, "zero"),
                        ) < 0 &&
                        n.push("".concat(this.options.pluralSeparator, "zero")),
                        n.forEach((n) => {
                          r([e], o + n, t["defaultValue".concat(n)] || m);
                        });
                    })
                  : r(e, o, m));
            }
            (f = this.extendTranslation(f, e, t, c, n)),
              i &&
                f === o &&
                this.options.appendNamespaceToMissingKey &&
                (f = "".concat(l, ":").concat(o)),
              (i || r) &&
                this.options.parseMissingKeyHandler &&
                (f =
                  "v1" !== this.options.compatibilityAPI
                    ? this.options.parseMissingKeyHandler(
                        this.options.appendNamespaceToMissingKey
                          ? "".concat(l, ":").concat(o)
                          : o,
                        r ? f : void 0,
                      )
                    : this.options.parseMissingKeyHandler(f));
          }
          return r
            ? ((c.res = f), (c.usedParams = this.getUsedParamsDetails(t)), c)
            : f;
        }
        extendTranslation(e, t, n, r, a) {
          var o = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            e = this.i18nFormat.parse(
              e,
              { ...this.options.interpolation.defaultVariables, ...n },
              n.lng || this.language || r.usedLng,
              r.usedNS,
              r.usedKey,
              { resolved: r },
            );
          else if (!n.skipInterpolation) {
            n.interpolation &&
              this.interpolator.init({
                ...n,
                interpolation: {
                  ...this.options.interpolation,
                  ...n.interpolation,
                },
              });
            const i =
              "string" === typeof e &&
              (n &&
              n.interpolation &&
              void 0 !== n.interpolation.skipOnVariables
                ? n.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables);
            let l;
            if (i) {
              const t = e.match(this.interpolator.nestingRegexp);
              l = t && t.length;
            }
            let s = n.replace && "string" !== typeof n.replace ? n.replace : n;
            if (
              (this.options.interpolation.defaultVariables &&
                (s = { ...this.options.interpolation.defaultVariables, ...s }),
              (e = this.interpolator.interpolate(
                e,
                s,
                n.lng || this.language,
                n,
              )),
              i)
            ) {
              const t = e.match(this.interpolator.nestingRegexp);
              l < (t && t.length) && (n.nest = !1);
            }
            !n.lng &&
              "v1" !== this.options.compatibilityAPI &&
              r &&
              r.res &&
              (n.lng = r.usedLng),
              !1 !== n.nest &&
                (e = this.interpolator.nest(
                  e,
                  function () {
                    for (
                      var e = arguments.length, r = new Array(e), i = 0;
                      i < e;
                      i++
                    )
                      r[i] = arguments[i];
                    return a && a[0] === r[0] && !n.context
                      ? (o.logger.warn(
                          "It seems you are nesting recursively key: "
                            .concat(r[0], " in key: ")
                            .concat(t[0]),
                        ),
                        null)
                      : o.translate(...r, t);
                  },
                  n,
                )),
              n.interpolation && this.interpolator.reset();
          }
          const i = n.postProcess || this.options.postProcess,
            l = "string" === typeof i ? [i] : i;
          return (
            void 0 !== e &&
              null !== e &&
              l &&
              l.length &&
              !1 !== n.applyPostProcessor &&
              (e = w.handle(
                l,
                e,
                t,
                this.options && this.options.postProcessPassResolved
                  ? {
                      i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n),
                      },
                      ...n,
                    }
                  : n,
                this,
              )),
            e
          );
        }
        resolve(e) {
          let t,
            n,
            r,
            a,
            o,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (
            "string" === typeof e && (e = [e]),
            e.forEach((e) => {
              if (this.isValidLookup(t)) return;
              const l = this.extractFromKey(e, i),
                s = l.key;
              n = s;
              let u = l.namespaces;
              this.options.fallbackNS &&
                (u = u.concat(this.options.fallbackNS));
              const c = void 0 !== i.count && "string" !== typeof i.count,
                f =
                  c &&
                  !i.ordinal &&
                  0 === i.count &&
                  this.pluralResolver.shouldUseIntlApi(),
                d =
                  void 0 !== i.context &&
                  ("string" === typeof i.context ||
                    "number" === typeof i.context) &&
                  "" !== i.context,
                p = i.lngs
                  ? i.lngs
                  : this.languageUtils.toResolveHierarchy(
                      i.lng || this.language,
                      i.fallbackLng,
                    );
              u.forEach((e) => {
                this.isValidLookup(t) ||
                  ((o = e),
                  !k["".concat(p[0], "-").concat(e)] &&
                    this.utils &&
                    this.utils.hasLoadedNamespace &&
                    !this.utils.hasLoadedNamespace(o) &&
                    ((k["".concat(p[0], "-").concat(e)] = !0),
                    this.logger.warn(
                      'key "'
                        .concat(n, '" for languages "')
                        .concat(
                          p.join(", "),
                          '" won\'t get resolved as namespace "',
                        )
                        .concat(o, '" was not yet loaded'),
                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                    )),
                  p.forEach((n) => {
                    if (this.isValidLookup(t)) return;
                    a = n;
                    const o = [s];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                      this.i18nFormat.addLookupKeys(o, s, n, e, i);
                    else {
                      let e;
                      c && (e = this.pluralResolver.getSuffix(n, i.count, i));
                      const t = "".concat(this.options.pluralSeparator, "zero"),
                        r = ""
                          .concat(this.options.pluralSeparator, "ordinal")
                          .concat(this.options.pluralSeparator);
                      if (
                        (c &&
                          (o.push(s + e),
                          i.ordinal &&
                            0 === e.indexOf(r) &&
                            o.push(
                              s + e.replace(r, this.options.pluralSeparator),
                            ),
                          f && o.push(s + t)),
                        d)
                      ) {
                        const n = ""
                          .concat(s)
                          .concat(this.options.contextSeparator)
                          .concat(i.context);
                        o.push(n),
                          c &&
                            (o.push(n + e),
                            i.ordinal &&
                              0 === e.indexOf(r) &&
                              o.push(
                                n + e.replace(r, this.options.pluralSeparator),
                              ),
                            f && o.push(n + t));
                      }
                    }
                    let l;
                    for (; (l = o.pop()); )
                      this.isValidLookup(t) ||
                        ((r = l), (t = this.getResource(n, e, l, i)));
                  }));
              });
            }),
            { res: t, usedKey: n, exactUsedKey: r, usedLng: a, usedNS: o }
          );
        }
        isValidLookup(e) {
          return (
            void 0 !== e &&
            !(!this.options.returnNull && null === e) &&
            !(!this.options.returnEmptyString && "" === e)
          );
        }
        getResource(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource
            ? this.i18nFormat.getResource(e, t, n, r)
            : this.resourceStore.getResource(e, t, n, r);
        }
        getUsedParamsDetails() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = [
              "defaultValue",
              "ordinal",
              "context",
              "replace",
              "lng",
              "lngs",
              "fallbackLng",
              "ns",
              "keySeparator",
              "nsSeparator",
              "returnObjects",
              "returnDetails",
              "joinArrays",
              "postProcess",
              "interpolation",
            ],
            n = e.replace && "string" !== typeof e.replace;
          let r = n ? e.replace : e;
          if (
            (n && "undefined" !== typeof e.count && (r.count = e.count),
            this.options.interpolation.defaultVariables &&
              (r = { ...this.options.interpolation.defaultVariables, ...r }),
            !n)
          ) {
            r = { ...r };
            for (const e of t) delete r[e];
          }
          return r;
        }
        static hasDefaultValue(e) {
          const t = "defaultValue";
          for (const n in e)
            if (
              Object.prototype.hasOwnProperty.call(e, n) &&
              t === n.substring(0, 12) &&
              void 0 !== e[n]
            )
              return !0;
          return !1;
        }
      }
      function E(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      class _ {
        constructor(e) {
          (this.options = e),
            (this.supportedLngs = this.options.supportedLngs || !1),
            (this.logger = a.create("languageUtils"));
        }
        getScriptPartFromCode(e) {
          if (!(e = b(e)) || e.indexOf("-") < 0) return null;
          const t = e.split("-");
          return 2 === t.length
            ? null
            : (t.pop(),
              "x" === t[t.length - 1].toLowerCase()
                ? null
                : this.formatLanguageCode(t.join("-")));
        }
        getLanguagePartFromCode(e) {
          if (!(e = b(e)) || e.indexOf("-") < 0) return e;
          const t = e.split("-");
          return this.formatLanguageCode(t[0]);
        }
        formatLanguageCode(e) {
          if ("string" === typeof e && e.indexOf("-") > -1) {
            const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let n = e.split("-");
            return (
              this.options.lowerCaseLng
                ? (n = n.map((e) => e.toLowerCase()))
                : 2 === n.length
                  ? ((n[0] = n[0].toLowerCase()),
                    (n[1] = n[1].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 &&
                      (n[1] = E(n[1].toLowerCase())))
                  : 3 === n.length &&
                    ((n[0] = n[0].toLowerCase()),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    "sgn" !== n[0] &&
                      2 === n[2].length &&
                      (n[2] = n[2].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 &&
                      (n[1] = E(n[1].toLowerCase())),
                    t.indexOf(n[2].toLowerCase()) > -1 &&
                      (n[2] = E(n[2].toLowerCase()))),
              n.join("-")
            );
          }
          return this.options.cleanCode || this.options.lowerCaseLng
            ? e.toLowerCase()
            : e;
        }
        isSupportedCode(e) {
          return (
            ("languageOnly" === this.options.load ||
              this.options.nonExplicitSupportedLngs) &&
              (e = this.getLanguagePartFromCode(e)),
            !this.supportedLngs ||
              !this.supportedLngs.length ||
              this.supportedLngs.indexOf(e) > -1
          );
        }
        getBestMatchFromCodes(e) {
          if (!e) return null;
          let t;
          return (
            e.forEach((e) => {
              if (t) return;
              const n = this.formatLanguageCode(e);
              (this.options.supportedLngs && !this.isSupportedCode(n)) ||
                (t = n);
            }),
            !t &&
              this.options.supportedLngs &&
              e.forEach((e) => {
                if (t) return;
                const n = this.getLanguagePartFromCode(e);
                if (this.isSupportedCode(n)) return (t = n);
                t = this.options.supportedLngs.find((e) =>
                  e === n
                    ? e
                    : e.indexOf("-") < 0 && n.indexOf("-") < 0
                      ? void 0
                      : (e.indexOf("-") > 0 &&
                            n.indexOf("-") < 0 &&
                            e.substring(0, e.indexOf("-")) === n) ||
                          (0 === e.indexOf(n) && n.length > 1)
                        ? e
                        : void 0,
                );
              }),
            t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
            t
          );
        }
        getFallbackCodes(e, t) {
          if (!e) return [];
          if (
            ("function" === typeof e && (e = e(t)),
            "string" === typeof e && (e = [e]),
            Array.isArray(e))
          )
            return e;
          if (!t) return e.default || [];
          let n = e[t];
          return (
            n || (n = e[this.getScriptPartFromCode(t)]),
            n || (n = e[this.formatLanguageCode(t)]),
            n || (n = e[this.getLanguagePartFromCode(t)]),
            n || (n = e.default),
            n || []
          );
        }
        toResolveHierarchy(e, t) {
          const n = this.getFallbackCodes(
              t || this.options.fallbackLng || [],
              e,
            ),
            r = [],
            a = (e) => {
              e &&
                (this.isSupportedCode(e)
                  ? r.push(e)
                  : this.logger.warn(
                      "rejecting language code not found in supportedLngs: ".concat(
                        e,
                      ),
                    ));
            };
          return (
            "string" === typeof e &&
            (e.indexOf("-") > -1 || e.indexOf("_") > -1)
              ? ("languageOnly" !== this.options.load &&
                  a(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load &&
                  "currentOnly" !== this.options.load &&
                  a(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load &&
                  a(this.getLanguagePartFromCode(e)))
              : "string" === typeof e && a(this.formatLanguageCode(e)),
            n.forEach((e) => {
              r.indexOf(e) < 0 && a(this.formatLanguageCode(e));
            }),
            r
          );
        }
      }
      let C = [
          {
            lngs: [
              "ach",
              "ak",
              "am",
              "arn",
              "br",
              "fil",
              "gun",
              "ln",
              "mfe",
              "mg",
              "mi",
              "oc",
              "pt",
              "pt-BR",
              "tg",
              "tl",
              "ti",
              "tr",
              "uz",
              "wa",
            ],
            nr: [1, 2],
            fc: 1,
          },
          {
            lngs: [
              "af",
              "an",
              "ast",
              "az",
              "bg",
              "bn",
              "ca",
              "da",
              "de",
              "dev",
              "el",
              "en",
              "eo",
              "es",
              "et",
              "eu",
              "fi",
              "fo",
              "fur",
              "fy",
              "gl",
              "gu",
              "ha",
              "hi",
              "hu",
              "hy",
              "ia",
              "it",
              "kk",
              "kn",
              "ku",
              "lb",
              "mai",
              "ml",
              "mn",
              "mr",
              "nah",
              "nap",
              "nb",
              "ne",
              "nl",
              "nn",
              "no",
              "nso",
              "pa",
              "pap",
              "pms",
              "ps",
              "pt-PT",
              "rm",
              "sco",
              "se",
              "si",
              "so",
              "son",
              "sq",
              "sv",
              "sw",
              "ta",
              "te",
              "tk",
              "ur",
              "yo",
            ],
            nr: [1, 2],
            fc: 2,
          },
          {
            lngs: [
              "ay",
              "bo",
              "cgg",
              "fa",
              "ht",
              "id",
              "ja",
              "jbo",
              "ka",
              "km",
              "ko",
              "ky",
              "lo",
              "ms",
              "sah",
              "su",
              "th",
              "tt",
              "ug",
              "vi",
              "wo",
              "zh",
            ],
            nr: [1],
            fc: 3,
          },
          {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4,
          },
          { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
          { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
          { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ["fr"], nr: [1, 2], fc: 9 },
          { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ["is"], nr: [1, 2], fc: 12 },
          { lngs: ["jv"], nr: [0, 1], fc: 13 },
          { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
          { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
          { lngs: ["mk"], nr: [1, 2], fc: 17 },
          { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
          { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ["or"], nr: [2, 1], fc: 2 },
          { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
          { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
        ],
        O = {
          1: function (e) {
            return Number(e > 1);
          },
          2: function (e) {
            return Number(1 != e);
          },
          3: function (e) {
            return 0;
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                  ? 1
                  : 2 == e
                    ? 2
                    : e % 100 >= 3 && e % 100 <= 10
                      ? 3
                      : e % 100 >= 11
                        ? 4
                        : 5,
            );
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
          },
          7: function (e) {
            return Number(
              1 == e
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
          },
          9: function (e) {
            return Number(e >= 2);
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
          },
          11: function (e) {
            return Number(
              1 == e || 11 == e
                ? 0
                : 2 == e || 12 == e
                  ? 1
                  : e > 2 && e < 20
                    ? 2
                    : 3,
            );
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11);
          },
          13: function (e) {
            return Number(0 !== e);
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                  ? 1
                  : 2,
            );
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2);
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                  ? 1
                  : e % 100 > 10 && e % 100 < 20
                    ? 2
                    : 3,
            );
          },
          20: function (e) {
            return Number(
              1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2,
            );
          },
          21: function (e) {
            return Number(
              e % 100 == 1
                ? 1
                : e % 100 == 2
                  ? 2
                  : e % 100 == 3 || e % 100 == 4
                    ? 3
                    : 0,
            );
          },
          22: function (e) {
            return Number(
              1 == e
                ? 0
                : 2 == e
                  ? 1
                  : (e < 0 || e > 10) && e % 10 == 0
                    ? 2
                    : 3,
            );
          },
        };
      const P = ["v1", "v2", "v3"],
        N = ["v4"],
        L = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
      class R {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.languageUtils = e),
            (this.options = t),
            (this.logger = a.create("pluralResolver")),
            (this.options.compatibilityJSON &&
              !N.includes(this.options.compatibilityJSON)) ||
              ("undefined" !== typeof Intl && Intl.PluralRules) ||
              ((this.options.compatibilityJSON = "v3"),
              this.logger.error(
                "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
              )),
            (this.rules = (function () {
              const e = {};
              return (
                C.forEach((t) => {
                  t.lngs.forEach((n) => {
                    e[n] = { numbers: t.nr, plurals: O[t.fc] };
                  });
                }),
                e
              );
            })());
        }
        addRule(e, t) {
          this.rules[e] = t;
        }
        getRule(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(b("dev" === e ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal",
              });
            } catch (n) {
              return;
            }
          return (
            this.rules[e] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(e)]
          );
        }
        needsPlural(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.getRule(e, t);
          return this.shouldUseIntlApi()
            ? n && n.resolvedOptions().pluralCategories.length > 1
            : n && n.numbers.length > 1;
        }
        getPluralFormsOfKey(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.getSuffixes(e, n).map((e) => "".concat(t).concat(e));
        }
        getSuffixes(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.getRule(e, t);
          return n
            ? this.shouldUseIntlApi()
              ? n
                  .resolvedOptions()
                  .pluralCategories.sort((e, t) => L[e] - L[t])
                  .map((e) =>
                    ""
                      .concat(this.options.prepend)
                      .concat(
                        t.ordinal ? "ordinal".concat(this.options.prepend) : "",
                      )
                      .concat(e),
                  )
              : n.numbers.map((n) => this.getSuffix(e, n, t))
            : [];
        }
        getSuffix(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const r = this.getRule(e, n);
          return r
            ? this.shouldUseIntlApi()
              ? ""
                  .concat(this.options.prepend)
                  .concat(
                    n.ordinal ? "ordinal".concat(this.options.prepend) : "",
                  )
                  .concat(r.select(t))
              : this.getSuffixRetroCompatible(r, t)
            : (this.logger.warn("no plural rule found for: ".concat(e)), "");
        }
        getSuffixRetroCompatible(e, t) {
          const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
          let r = e.numbers[n];
          this.options.simplifyPluralSuffix &&
            2 === e.numbers.length &&
            1 === e.numbers[0] &&
            (2 === r ? (r = "plural") : 1 === r && (r = ""));
          const a = () =>
            this.options.prepend && r.toString()
              ? this.options.prepend + r.toString()
              : r.toString();
          return "v1" === this.options.compatibilityJSON
            ? 1 === r
              ? ""
              : "number" === typeof r
                ? "_plural_".concat(r.toString())
                : a()
            : "v2" === this.options.compatibilityJSON ||
                (this.options.simplifyPluralSuffix &&
                  2 === e.numbers.length &&
                  1 === e.numbers[0])
              ? a()
              : this.options.prepend && n.toString()
                ? this.options.prepend + n.toString()
                : n.toString();
        }
        shouldUseIntlApi() {
          return !P.includes(this.options.compatibilityJSON);
        }
      }
      function T(e, t, n) {
        let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : ".",
          a =
            !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          o = (function (e, t, n) {
            const r = f(e, n);
            return void 0 !== r ? r : f(t, n);
          })(e, t, n);
        return (
          !o &&
            a &&
            "string" === typeof n &&
            ((o = y(e, n, r)), void 0 === o && (o = y(t, n, r))),
          o
        );
      }
      class j {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = a.create("interpolator")),
            (this.options = e),
            (this.format =
              (e.interpolation && e.interpolation.format) || ((e) => e)),
            this.init(e);
        }
        init() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e.interpolation || (e.interpolation = { escapeValue: !0 });
          const {
            escape: t,
            escapeValue: n,
            useRawValueToEscape: r,
            prefix: a,
            prefixEscaped: o,
            suffix: i,
            suffixEscaped: l,
            formatSeparator: s,
            unescapeSuffix: u,
            unescapePrefix: c,
            nestingPrefix: f,
            nestingPrefixEscaped: d,
            nestingSuffix: h,
            nestingSuffixEscaped: m,
            nestingOptionsSeparator: v,
            maxReplaces: y,
            alwaysFormat: b,
          } = e.interpolation;
          (this.escape = void 0 !== t ? t : g),
            (this.escapeValue = void 0 === n || n),
            (this.useRawValueToEscape = void 0 !== r && r),
            (this.prefix = a ? p(a) : o || "{{"),
            (this.suffix = i ? p(i) : l || "}}"),
            (this.formatSeparator = s || ","),
            (this.unescapePrefix = u ? "" : c || "-"),
            (this.unescapeSuffix = this.unescapePrefix ? "" : u || ""),
            (this.nestingPrefix = f ? p(f) : d || p("$t(")),
            (this.nestingSuffix = h ? p(h) : m || p(")")),
            (this.nestingOptionsSeparator = v || ","),
            (this.maxReplaces = y || 1e3),
            (this.alwaysFormat = void 0 !== b && b),
            this.resetRegExp();
        }
        reset() {
          this.options && this.init(this.options);
        }
        resetRegExp() {
          const e = (e, t) =>
            e && e.source === t ? ((e.lastIndex = 0), e) : new RegExp(t, "g");
          (this.regexp = e(
            this.regexp,
            "".concat(this.prefix, "(.+?)").concat(this.suffix),
          )),
            (this.regexpUnescape = e(
              this.regexpUnescape,
              ""
                .concat(this.prefix)
                .concat(this.unescapePrefix, "(.+?)")
                .concat(this.unescapeSuffix)
                .concat(this.suffix),
            )),
            (this.nestingRegexp = e(
              this.nestingRegexp,
              "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix),
            ));
        }
        interpolate(e, t, n, r) {
          let a, o, i;
          const s =
            (this.options &&
              this.options.interpolation &&
              this.options.interpolation.defaultVariables) ||
            {};
          function u(e) {
            return e.replace(/\$/g, "$$$$");
          }
          const c = (e) => {
            if (e.indexOf(this.formatSeparator) < 0) {
              const a = T(
                t,
                s,
                e,
                this.options.keySeparator,
                this.options.ignoreJSONStructure,
              );
              return this.alwaysFormat
                ? this.format(a, void 0, n, { ...r, ...t, interpolationkey: e })
                : a;
            }
            const a = e.split(this.formatSeparator),
              o = a.shift().trim(),
              i = a.join(this.formatSeparator).trim();
            return this.format(
              T(
                t,
                s,
                o,
                this.options.keySeparator,
                this.options.ignoreJSONStructure,
              ),
              i,
              n,
              { ...r, ...t, interpolationkey: o },
            );
          };
          this.resetRegExp();
          const f =
              (r && r.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            d =
              r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                ? r.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables;
          return (
            [
              { regex: this.regexpUnescape, safeValue: (e) => u(e) },
              {
                regex: this.regexp,
                safeValue: (e) => (this.escapeValue ? u(this.escape(e)) : u(e)),
              },
            ].forEach((t) => {
              for (i = 0; (a = t.regex.exec(e)); ) {
                const n = a[1].trim();
                if (((o = c(n)), void 0 === o))
                  if ("function" === typeof f) {
                    const t = f(e, a, r);
                    o = "string" === typeof t ? t : "";
                  } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                    o = "";
                  else {
                    if (d) {
                      o = a[0];
                      continue;
                    }
                    this.logger.warn(
                      "missed to pass in variable "
                        .concat(n, " for interpolating ")
                        .concat(e),
                    ),
                      (o = "");
                  }
                else
                  "string" === typeof o ||
                    this.useRawValueToEscape ||
                    (o = l(o));
                const s = t.safeValue(o);
                if (
                  ((e = e.replace(a[0], s)),
                  d
                    ? ((t.regex.lastIndex += o.length),
                      (t.regex.lastIndex -= a[0].length))
                    : (t.regex.lastIndex = 0),
                  i++,
                  i >= this.maxReplaces)
                )
                  break;
              }
            }),
            e
          );
        }
        nest(e, t) {
          let n,
            r,
            a,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          function i(e, t) {
            const n = this.nestingOptionsSeparator;
            if (e.indexOf(n) < 0) return e;
            const r = e.split(new RegExp("".concat(n, "[ ]*{")));
            let o = "{".concat(r[1]);
            (e = r[0]), (o = this.interpolate(o, a));
            const i = o.match(/'/g),
              l = o.match(/"/g);
            ((i && i.length % 2 === 0 && !l) || l.length % 2 !== 0) &&
              (o = o.replace(/'/g, '"'));
            try {
              (a = JSON.parse(o)), t && (a = { ...t, ...a });
            } catch (s) {
              return (
                this.logger.warn(
                  "failed parsing options string in nesting for key ".concat(e),
                  s,
                ),
                "".concat(e).concat(n).concat(o)
              );
            }
            return (
              a.defaultValue &&
                a.defaultValue.indexOf(this.prefix) > -1 &&
                delete a.defaultValue,
              e
            );
          }
          for (; (n = this.nestingRegexp.exec(e)); ) {
            let s = [];
            (a = { ...o }),
              (a = a.replace && "string" !== typeof a.replace ? a.replace : a),
              (a.applyPostProcessor = !1),
              delete a.defaultValue;
            let u = !1;
            if (
              -1 !== n[0].indexOf(this.formatSeparator) &&
              !/{.*}/.test(n[1])
            ) {
              const e = n[1].split(this.formatSeparator).map((e) => e.trim());
              (n[1] = e.shift()), (s = e), (u = !0);
            }
            if (
              ((r = t(i.call(this, n[1].trim(), a), a)),
              r && n[0] === e && "string" !== typeof r)
            )
              return r;
            "string" !== typeof r && (r = l(r)),
              r ||
                (this.logger.warn(
                  "missed to resolve ".concat(n[1], " for nesting ").concat(e),
                ),
                (r = "")),
              u &&
                (r = s.reduce(
                  (e, t) =>
                    this.format(e, t, o.lng, {
                      ...o,
                      interpolationkey: n[1].trim(),
                    }),
                  r.trim(),
                )),
              (e = e.replace(n[0], r)),
              (this.regexp.lastIndex = 0);
          }
          return e;
        }
      }
      function F(e) {
        const t = {};
        return function (n, r, a) {
          const o = r + JSON.stringify(a);
          let i = t[o];
          return i || ((i = e(b(r), a)), (t[o] = i)), i(n);
        };
      }
      class z {
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (this.logger = a.create("formatter")),
            (this.options = e),
            (this.formats = {
              number: F((e, t) => {
                const n = new Intl.NumberFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              currency: F((e, t) => {
                const n = new Intl.NumberFormat(e, { ...t, style: "currency" });
                return (e) => n.format(e);
              }),
              datetime: F((e, t) => {
                const n = new Intl.DateTimeFormat(e, { ...t });
                return (e) => n.format(e);
              }),
              relativetime: F((e, t) => {
                const n = new Intl.RelativeTimeFormat(e, { ...t });
                return (e) => n.format(e, t.range || "day");
              }),
              list: F((e, t) => {
                const n = new Intl.ListFormat(e, { ...t });
                return (e) => n.format(e);
              }),
            }),
            this.init(e);
        }
        init(e) {
          const t = (
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { interpolation: {} }
          ).interpolation;
          this.formatSeparator = t.formatSeparator
            ? t.formatSeparator
            : t.formatSeparator || ",";
        }
        add(e, t) {
          this.formats[e.toLowerCase().trim()] = t;
        }
        addCached(e, t) {
          this.formats[e.toLowerCase().trim()] = F(t);
        }
        format(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return t.split(this.formatSeparator).reduce((e, t) => {
            const { formatName: a, formatOptions: o } = (function (e) {
              let t = e.toLowerCase().trim();
              const n = {};
              if (e.indexOf("(") > -1) {
                const r = e.split("(");
                t = r[0].toLowerCase().trim();
                const a = r[1].substring(0, r[1].length - 1);
                "currency" === t && a.indexOf(":") < 0
                  ? n.currency || (n.currency = a.trim())
                  : "relativetime" === t && a.indexOf(":") < 0
                    ? n.range || (n.range = a.trim())
                    : a.split(";").forEach((e) => {
                        if (e) {
                          const [t, ...r] = e.split(":"),
                            a = r
                              .join(":")
                              .trim()
                              .replace(/^'+|'+$/g, ""),
                            o = t.trim();
                          n[o] || (n[o] = a),
                            "false" === a && (n[o] = !1),
                            "true" === a && (n[o] = !0),
                            isNaN(a) || (n[o] = parseInt(a, 10));
                        }
                      });
              }
              return { formatName: t, formatOptions: n };
            })(t);
            if (this.formats[a]) {
              let t = e;
              try {
                const i =
                    (r &&
                      r.formatParams &&
                      r.formatParams[r.interpolationkey]) ||
                    {},
                  l = i.locale || i.lng || r.locale || r.lng || n;
                t = this.formats[a](e, l, { ...o, ...r, ...i });
              } catch (i) {
                this.logger.warn(i);
              }
              return t;
            }
            return (
              this.logger.warn("there was no format function for ".concat(a)), e
            );
          }, e);
        }
      }
      class I extends o {
        constructor(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          super(),
            (this.backend = e),
            (this.store = t),
            (this.services = n),
            (this.languageUtils = n.languageUtils),
            (this.options = r),
            (this.logger = a.create("backendConnector")),
            (this.waitingReads = []),
            (this.maxParallelReads = r.maxParallelReads || 10),
            (this.readingCalls = 0),
            (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
            (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
            (this.state = {}),
            (this.queue = []),
            this.backend &&
              this.backend.init &&
              this.backend.init(n, r.backend, r);
        }
        queueLoad(e, t, n, r) {
          const a = {},
            o = {},
            i = {},
            l = {};
          return (
            e.forEach((e) => {
              let r = !0;
              t.forEach((t) => {
                const i = "".concat(e, "|").concat(t);
                !n.reload && this.store.hasResourceBundle(e, t)
                  ? (this.state[i] = 2)
                  : this.state[i] < 0 ||
                    (1 === this.state[i]
                      ? void 0 === o[i] && (o[i] = !0)
                      : ((this.state[i] = 1),
                        (r = !1),
                        void 0 === o[i] && (o[i] = !0),
                        void 0 === a[i] && (a[i] = !0),
                        void 0 === l[t] && (l[t] = !0)));
              }),
                r || (i[e] = !0);
            }),
            (Object.keys(a).length || Object.keys(o).length) &&
              this.queue.push({
                pending: o,
                pendingCount: Object.keys(o).length,
                loaded: {},
                errors: [],
                callback: r,
              }),
            {
              toLoad: Object.keys(a),
              pending: Object.keys(o),
              toLoadLanguages: Object.keys(i),
              toLoadNamespaces: Object.keys(l),
            }
          );
        }
        loaded(e, t, n) {
          const r = e.split("|"),
            a = r[0],
            o = r[1];
          t && this.emit("failedLoading", a, o, t),
            n &&
              this.store.addResourceBundle(a, o, n, void 0, void 0, {
                skipCopy: !0,
              }),
            (this.state[e] = t ? -1 : 2);
          const i = {};
          this.queue.forEach((n) => {
            !(function (e, t, n, r) {
              const { obj: a, k: o } = u(e, t, Object);
              (a[o] = a[o] || []),
                r && (a[o] = a[o].concat(n)),
                r || a[o].push(n);
            })(n.loaded, [a], o),
              (function (e, t) {
                void 0 !== e.pending[t] &&
                  (delete e.pending[t], e.pendingCount--);
              })(n, e),
              t && n.errors.push(t),
              0 !== n.pendingCount ||
                n.done ||
                (Object.keys(n.loaded).forEach((e) => {
                  i[e] || (i[e] = {});
                  const t = n.loaded[e];
                  t.length &&
                    t.forEach((t) => {
                      void 0 === i[e][t] && (i[e][t] = !0);
                    });
                }),
                (n.done = !0),
                n.errors.length ? n.callback(n.errors) : n.callback());
          }),
            this.emit("loaded", i),
            (this.queue = this.queue.filter((e) => !e.done));
        }
        read(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            a =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : this.retryTimeout,
            o = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return o(null, {});
          if (this.readingCalls >= this.maxParallelReads)
            return void this.waitingReads.push({
              lng: e,
              ns: t,
              fcName: n,
              tried: r,
              wait: a,
              callback: o,
            });
          this.readingCalls++;
          const i = (i, l) => {
              if ((this.readingCalls--, this.waitingReads.length > 0)) {
                const e = this.waitingReads.shift();
                this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
              }
              i && l && r < this.maxRetries
                ? setTimeout(() => {
                    this.read.call(this, e, t, n, r + 1, 2 * a, o);
                  }, a)
                : o(i, l);
            },
            l = this.backend[n].bind(this.backend);
          if (2 !== l.length) return l(e, t, i);
          try {
            const n = l(e, t);
            n && "function" === typeof n.then
              ? n.then((e) => i(null, e)).catch(i)
              : i(null, n);
          } catch (s) {
            i(s);
          }
        }
        prepareLoading(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources.",
              ),
              r && r()
            );
          "string" === typeof e &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            "string" === typeof t && (t = [t]);
          const a = this.queueLoad(e, t, n, r);
          if (!a.toLoad.length) return a.pending.length || r(), null;
          a.toLoad.forEach((e) => {
            this.loadOne(e);
          });
        }
        load(e, t, n) {
          this.prepareLoading(e, t, {}, n);
        }
        reload(e, t, n) {
          this.prepareLoading(e, t, { reload: !0 }, n);
        }
        loadOne(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          const n = e.split("|"),
            r = n[0],
            a = n[1];
          this.read(r, a, "read", void 0, void 0, (n, o) => {
            n &&
              this.logger.warn(
                ""
                  .concat(t, "loading namespace ")
                  .concat(a, " for language ")
                  .concat(r, " failed"),
                n,
              ),
              !n &&
                o &&
                this.logger.log(
                  ""
                    .concat(t, "loaded namespace ")
                    .concat(a, " for language ")
                    .concat(r),
                  o,
                ),
              this.loaded(e, n, o);
          });
        }
        saveMissing(e, t, n, r, a) {
          let o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {},
            i =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : () => {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
          )
            this.logger.warn(
              'did not save key "'
                .concat(n, '" as the namespace "')
                .concat(t, '" was not yet loaded'),
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
            );
          else if (void 0 !== n && null !== n && "" !== n) {
            if (this.backend && this.backend.create) {
              const s = { ...o, isUpdate: a },
                u = this.backend.create.bind(this.backend);
              if (u.length < 6)
                try {
                  let a;
                  (a = 5 === u.length ? u(e, t, n, r, s) : u(e, t, n, r)),
                    a && "function" === typeof a.then
                      ? a.then((e) => i(null, e)).catch(i)
                      : i(null, a);
                } catch (l) {
                  i(l);
                }
              else u(e, t, n, r, i, s);
            }
            e && e[0] && this.store.addResource(e[0], t, n, r);
          }
        }
      }
      function A() {
        return {
          debug: !1,
          initImmediate: !0,
          ns: ["translation"],
          defaultNS: ["translation"],
          fallbackLng: ["dev"],
          fallbackNS: !1,
          supportedLngs: !1,
          nonExplicitSupportedLngs: !1,
          load: "all",
          preload: !1,
          simplifyPluralSuffix: !0,
          keySeparator: ".",
          nsSeparator: ":",
          pluralSeparator: "_",
          contextSeparator: "_",
          partialBundledLanguages: !1,
          saveMissing: !1,
          updateMissing: !1,
          saveMissingTo: "fallback",
          saveMissingPlurals: !0,
          missingKeyHandler: !1,
          missingInterpolationHandler: !1,
          postProcess: !1,
          postProcessPassResolved: !1,
          returnNull: !1,
          returnEmptyString: !0,
          returnObjects: !1,
          joinArrays: !1,
          returnedObjectHandler: !1,
          parseMissingKeyHandler: !1,
          appendNamespaceToMissingKey: !1,
          appendNamespaceToCIMode: !1,
          overloadTranslationOptionHandler: function (e) {
            let t = {};
            if (
              ("object" === typeof e[1] && (t = e[1]),
              "string" === typeof e[1] && (t.defaultValue = e[1]),
              "string" === typeof e[2] && (t.tDescription = e[2]),
              "object" === typeof e[2] || "object" === typeof e[3])
            ) {
              const n = e[3] || e[2];
              Object.keys(n).forEach((e) => {
                t[e] = n[e];
              });
            }
            return t;
          },
          interpolation: {
            escapeValue: !0,
            format: (e) => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0,
          },
        };
      }
      function M(e) {
        return (
          "string" === typeof e.ns && (e.ns = [e.ns]),
          "string" === typeof e.fallbackLng &&
            (e.fallbackLng = [e.fallbackLng]),
          "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            e.supportedLngs.indexOf("cimode") < 0 &&
            (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
          e
        );
      }
      function D() {}
      class U extends o {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          var n;
          if (
            (super(),
            (this.options = M(e)),
            (this.services = {}),
            (this.logger = a),
            (this.modules = { external: [] }),
            (n = this),
            Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(
              (e) => {
                "function" === typeof n[e] && (n[e] = n[e].bind(n));
              },
            ),
            t && !this.isInitialized && !e.isClone)
          ) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
              this.init(e, t);
            }, 0);
          }
        }
        init() {
          var e = this;
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = arguments.length > 1 ? arguments[1] : void 0;
          (this.isInitializing = !0),
            "function" === typeof t && ((n = t), (t = {})),
            !t.defaultNS &&
              !1 !== t.defaultNS &&
              t.ns &&
              ("string" === typeof t.ns
                ? (t.defaultNS = t.ns)
                : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
          const r = A();
          function o(e) {
            return e ? ("function" === typeof e ? new e() : e) : null;
          }
          if (
            ((this.options = { ...r, ...this.options, ...M(t) }),
            "v1" !== this.options.compatibilityAPI &&
              (this.options.interpolation = {
                ...r.interpolation,
                ...this.options.interpolation,
              }),
            void 0 !== t.keySeparator &&
              (this.options.userDefinedKeySeparator = t.keySeparator),
            void 0 !== t.nsSeparator &&
              (this.options.userDefinedNsSeparator = t.nsSeparator),
            !this.options.isClone)
          ) {
            let t;
            this.modules.logger
              ? a.init(o(this.modules.logger), this.options)
              : a.init(null, this.options),
              this.modules.formatter
                ? (t = this.modules.formatter)
                : "undefined" !== typeof Intl && (t = z);
            const n = new _(this.options);
            this.store = new S(this.options.resources, this.options);
            const i = this.services;
            (i.logger = a),
              (i.resourceStore = this.store),
              (i.languageUtils = n),
              (i.pluralResolver = new R(n, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              !t ||
                (this.options.interpolation.format &&
                  this.options.interpolation.format !==
                    r.interpolation.format) ||
                ((i.formatter = o(t)),
                i.formatter.init(i, this.options),
                (this.options.interpolation.format = i.formatter.format.bind(
                  i.formatter,
                ))),
              (i.interpolator = new j(this.options)),
              (i.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (i.backendConnector = new I(
                o(this.modules.backend),
                i.resourceStore,
                i,
                this.options,
              )),
              i.backendConnector.on("*", function (t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    a = 1;
                  a < n;
                  a++
                )
                  r[a - 1] = arguments[a];
                e.emit(t, ...r);
              }),
              this.modules.languageDetector &&
                ((i.languageDetector = o(this.modules.languageDetector)),
                i.languageDetector.init &&
                  i.languageDetector.init(
                    i,
                    this.options.detection,
                    this.options,
                  )),
              this.modules.i18nFormat &&
                ((i.i18nFormat = o(this.modules.i18nFormat)),
                i.i18nFormat.init && i.i18nFormat.init(this)),
              (this.translator = new x(this.services, this.options)),
              this.translator.on("*", function (t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    a = 1;
                  a < n;
                  a++
                )
                  r[a - 1] = arguments[a];
                e.emit(t, ...r);
              }),
              this.modules.external.forEach((e) => {
                e.init && e.init(this);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            n || (n = D),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            const e = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng,
            );
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0]);
          }
          this.services.languageDetector ||
            this.options.lng ||
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined",
            );
          [
            "getResource",
            "hasResourceBundle",
            "getResourceBundle",
            "getDataByLanguage",
          ].forEach((t) => {
            this[t] = function () {
              return e.store[t](...arguments);
            };
          });
          [
            "addResource",
            "addResources",
            "addResourceBundle",
            "removeResourceBundle",
          ].forEach((t) => {
            this[t] = function () {
              return e.store[t](...arguments), e;
            };
          });
          const l = i(),
            s = () => {
              const e = (e, t) => {
                (this.isInitializing = !1),
                  this.isInitialized &&
                    !this.initializedStoreOnce &&
                    this.logger.warn(
                      "init: i18next is already initialized. You should call init just once!",
                    ),
                  (this.isInitialized = !0),
                  this.options.isClone ||
                    this.logger.log("initialized", this.options),
                  this.emit("initialized", this.options),
                  l.resolve(t),
                  n(e, t);
              };
              if (
                this.languages &&
                "v1" !== this.options.compatibilityAPI &&
                !this.isInitialized
              )
                return e(null, this.t.bind(this));
              this.changeLanguage(this.options.lng, e);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? s()
              : setTimeout(s, 0),
            l
          );
        }
        loadResources(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
          const n = "string" === typeof e ? e : this.language;
          if (
            ("function" === typeof e && (t = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (
              n &&
              "cimode" === n.toLowerCase() &&
              (!this.options.preload || 0 === this.options.preload.length)
            )
              return t();
            const e = [],
              r = (t) => {
                if (!t) return;
                if ("cimode" === t) return;
                this.services.languageUtils
                  .toResolveHierarchy(t)
                  .forEach((t) => {
                    "cimode" !== t && e.indexOf(t) < 0 && e.push(t);
                  });
              };
            if (n) r(n);
            else {
              this.services.languageUtils
                .getFallbackCodes(this.options.fallbackLng)
                .forEach((e) => r(e));
            }
            this.options.preload && this.options.preload.forEach((e) => r(e)),
              this.services.backendConnector.load(e, this.options.ns, (e) => {
                e ||
                  this.resolvedLanguage ||
                  !this.language ||
                  this.setResolvedLanguage(this.language),
                  t(e);
              });
          } else t(null);
        }
        reloadResources(e, t, n) {
          const r = i();
          return (
            e || (e = this.languages),
            t || (t = this.options.ns),
            n || (n = D),
            this.services.backendConnector.reload(e, t, (e) => {
              r.resolve(), n(e);
            }),
            r
          );
        }
        use(e) {
          if (!e)
            throw new Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()",
            );
          if (!e.type)
            throw new Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()",
            );
          return (
            "backend" === e.type && (this.modules.backend = e),
            ("logger" === e.type || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            "languageDetector" === e.type &&
              (this.modules.languageDetector = e),
            "i18nFormat" === e.type && (this.modules.i18nFormat = e),
            "postProcessor" === e.type && w.addPostProcessor(e),
            "formatter" === e.type && (this.modules.formatter = e),
            "3rdParty" === e.type && this.modules.external.push(e),
            this
          );
        }
        setResolvedLanguage(e) {
          if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
            for (let t = 0; t < this.languages.length; t++) {
              const e = this.languages[t];
              if (
                !(["cimode", "dev"].indexOf(e) > -1) &&
                this.store.hasLanguageSomeTranslations(e)
              ) {
                this.resolvedLanguage = e;
                break;
              }
            }
        }
        changeLanguage(e, t) {
          var n = this;
          this.isLanguageChangingTo = e;
          const r = i();
          this.emit("languageChanging", e);
          const a = (e) => {
              (this.language = e),
                (this.languages =
                  this.services.languageUtils.toResolveHierarchy(e)),
                (this.resolvedLanguage = void 0),
                this.setResolvedLanguage(e);
            },
            o = (e, o) => {
              o
                ? (a(o),
                  this.translator.changeLanguage(o),
                  (this.isLanguageChangingTo = void 0),
                  this.emit("languageChanged", o),
                  this.logger.log("languageChanged", o))
                : (this.isLanguageChangingTo = void 0),
                r.resolve(function () {
                  return n.t(...arguments);
                }),
                t &&
                  t(e, function () {
                    return n.t(...arguments);
                  });
            },
            l = (t) => {
              e || t || !this.services.languageDetector || (t = []);
              const n =
                "string" === typeof t
                  ? t
                  : this.services.languageUtils.getBestMatchFromCodes(t);
              n &&
                (this.language || a(n),
                this.translator.language || this.translator.changeLanguage(n),
                this.services.languageDetector &&
                  this.services.languageDetector.cacheUserLanguage &&
                  this.services.languageDetector.cacheUserLanguage(n)),
                this.loadResources(n, (e) => {
                  o(e, n);
                });
            };
          return (
            e ||
            !this.services.languageDetector ||
            this.services.languageDetector.async
              ? !e &&
                this.services.languageDetector &&
                this.services.languageDetector.async
                ? 0 === this.services.languageDetector.detect.length
                  ? this.services.languageDetector.detect().then(l)
                  : this.services.languageDetector.detect(l)
                : l(e)
              : l(this.services.languageDetector.detect()),
            r
          );
        }
        getFixedT(e, t, n) {
          var r = this;
          const a = function (e, t) {
            let o;
            if ("object" !== typeof t) {
              for (
                var i = arguments.length,
                  l = new Array(i > 2 ? i - 2 : 0),
                  s = 2;
                s < i;
                s++
              )
                l[s - 2] = arguments[s];
              o = r.options.overloadTranslationOptionHandler([e, t].concat(l));
            } else o = { ...t };
            (o.lng = o.lng || a.lng),
              (o.lngs = o.lngs || a.lngs),
              (o.ns = o.ns || a.ns),
              (o.keyPrefix = o.keyPrefix || n || a.keyPrefix);
            const u = r.options.keySeparator || ".";
            let c;
            return (
              (c =
                o.keyPrefix && Array.isArray(e)
                  ? e.map((e) => "".concat(o.keyPrefix).concat(u).concat(e))
                  : o.keyPrefix
                    ? "".concat(o.keyPrefix).concat(u).concat(e)
                    : e),
              r.t(c, o)
            );
          };
          return (
            "string" === typeof e ? (a.lng = e) : (a.lngs = e),
            (a.ns = t),
            (a.keyPrefix = n),
            a
          );
        }
        t() {
          return this.translator && this.translator.translate(...arguments);
        }
        exists() {
          return this.translator && this.translator.exists(...arguments);
        }
        setDefaultNamespace(e) {
          this.options.defaultNS = e;
        }
        hasLoadedNamespace(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages,
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages,
              ),
              !1
            );
          const n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            a = this.languages[this.languages.length - 1];
          if ("cimode" === n.toLowerCase()) return !0;
          const o = (e, t) => {
            const n =
              this.services.backendConnector.state["".concat(e, "|").concat(t)];
            return -1 === n || 2 === n;
          };
          if (t.precheck) {
            const e = t.precheck(this, o);
            if (void 0 !== e) return e;
          }
          return (
            !!this.hasResourceBundle(n, e) ||
            !(
              this.services.backendConnector.backend &&
              (!this.options.resources || this.options.partialBundledLanguages)
            ) ||
            !(!o(n, e) || (r && !o(a, e)))
          );
        }
        loadNamespaces(e, t) {
          const n = i();
          return this.options.ns
            ? ("string" === typeof e && (e = [e]),
              e.forEach((e) => {
                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
              }),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        loadLanguages(e, t) {
          const n = i();
          "string" === typeof e && (e = [e]);
          const r = this.options.preload || [],
            a = e.filter(
              (e) =>
                r.indexOf(e) < 0 &&
                this.services.languageUtils.isSupportedCode(e),
            );
          return a.length
            ? ((this.options.preload = r.concat(a)),
              this.loadResources((e) => {
                n.resolve(), t && t(e);
              }),
              n)
            : (t && t(), Promise.resolve());
        }
        dir(e) {
          if (
            (e ||
              (e =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0
                  ? this.languages[0]
                  : this.language)),
            !e)
          )
            return "rtl";
          const t =
            (this.services && this.services.languageUtils) || new _(A());
          return [
            "ar",
            "shu",
            "sqr",
            "ssh",
            "xaa",
            "yhd",
            "yud",
            "aao",
            "abh",
            "abv",
            "acm",
            "acq",
            "acw",
            "acx",
            "acy",
            "adf",
            "ads",
            "aeb",
            "aec",
            "afb",
            "ajp",
            "apc",
            "apd",
            "arb",
            "arq",
            "ars",
            "ary",
            "arz",
            "auz",
            "avl",
            "ayh",
            "ayl",
            "ayn",
            "ayp",
            "bbz",
            "pga",
            "he",
            "iw",
            "ps",
            "pbt",
            "pbu",
            "pst",
            "prp",
            "prd",
            "ug",
            "ur",
            "ydd",
            "yds",
            "yih",
            "ji",
            "yi",
            "hbo",
            "men",
            "xmn",
            "fa",
            "jpr",
            "peo",
            "pes",
            "prs",
            "dv",
            "sam",
            "ckb",
          ].indexOf(t.getLanguagePartFromCode(e)) > -1 ||
            e.toLowerCase().indexOf("-arab") > 1
            ? "rtl"
            : "ltr";
        }
        static createInstance() {
          return new U(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            arguments.length > 1 ? arguments[1] : void 0,
          );
        }
        cloneInstance() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : D;
          const n = e.forkResourceStore;
          n && delete e.forkResourceStore;
          const r = { ...this.options, ...e, isClone: !0 },
            a = new U(r);
          (void 0 === e.debug && void 0 === e.prefix) ||
            (a.logger = a.logger.clone(e));
          return (
            ["store", "services", "language"].forEach((e) => {
              a[e] = this[e];
            }),
            (a.services = { ...this.services }),
            (a.services.utils = {
              hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
            }),
            n &&
              ((a.store = new S(this.store.data, r)),
              (a.services.resourceStore = a.store)),
            (a.translator = new x(a.services, r)),
            a.translator.on("*", function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              a.emit(e, ...n);
            }),
            a.init(r, t),
            (a.translator.options = r),
            (a.translator.backendConnector.services.utils = {
              hasLoadedNamespace: a.hasLoadedNamespace.bind(a),
            }),
            a
          );
        }
        toJSON() {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        }
      }
      const V = U.createInstance();
      V.createInstance = U.createInstance;
      V.createInstance,
        V.dir,
        V.init,
        V.loadResources,
        V.reloadResources,
        V.use,
        V.changeLanguage,
        V.getFixedT,
        V.t,
        V.exists,
        V.setDefaultNamespace,
        V.hasLoadedNamespace,
        V.loadNamespaces,
        V.loadLanguages;
      var $ = n(43),
        B = n.t($, 2);
      n(844);
      Object.create(null);
      const H =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        W = {
          "&amp;": "&",
          "&#38;": "&",
          "&lt;": "<",
          "&#60;": "<",
          "&gt;": ">",
          "&#62;": ">",
          "&apos;": "'",
          "&#39;": "'",
          "&quot;": '"',
          "&#34;": '"',
          "&nbsp;": " ",
          "&#160;": " ",
          "&copy;": "\xa9",
          "&#169;": "\xa9",
          "&reg;": "\xae",
          "&#174;": "\xae",
          "&hellip;": "\u2026",
          "&#8230;": "\u2026",
          "&#x2F;": "/",
          "&#47;": "/",
        },
        Q = (e) => W[e];
      let K,
        q = {
          bindI18n: "languageChanged",
          bindI18nStore: "",
          transEmptyNodeValue: "",
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: "",
          transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
          useSuspense: !0,
          unescape: (e) => e.replace(H, Q),
        };
      const J = {
          type: "3rdParty",
          init(e) {
            !(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              q = { ...q, ...e };
            })(e.options.react),
              (function (e) {
                K = e;
              })(e);
          },
        },
        Y = (0, $.createContext)();
      function G(e) {
        let { i18n: t, defaultNS: n, children: r } = e;
        const a = (0, $.useMemo)(() => ({ i18n: t, defaultNS: n }), [t, n]);
        return (0, $.createElement)(Y.Provider, { value: a }, r);
      }
      var X,
        Z = n(950),
        ee = n.t(Z, 2);
      function te() {
        return (
          (te = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          te.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(X || (X = {}));
      const ne = "popstate";
      function re(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function ae(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function oe(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function ie(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          te(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? se(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            },
          )
        );
      }
      function le(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function se(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function ue(e, t, n, r) {
        void 0 === r && (r = {});
        let { window: a = document.defaultView, v5Compat: o = !1 } = r,
          i = a.history,
          l = X.Pop,
          s = null,
          u = c();
        function c() {
          return (i.state || { idx: null }).idx;
        }
        function f() {
          l = X.Pop;
          let e = c(),
            t = null == e ? null : e - u;
          (u = e), s && s({ action: l, location: p.location, delta: t });
        }
        function d(e) {
          let t =
              "null" !== a.location.origin
                ? a.location.origin
                : a.location.href,
            n = "string" === typeof e ? e : le(e);
          return (
            (n = n.replace(/ $/, "%20")),
            re(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n,
            ),
            new URL(n, t)
          );
        }
        null == u && ((u = 0), i.replaceState(te({}, i.state, { idx: u }), ""));
        let p = {
          get action() {
            return l;
          },
          get location() {
            return e(a, i);
          },
          listen(e) {
            if (s)
              throw new Error("A history only accepts one active listener");
            return (
              a.addEventListener(ne, f),
              (s = e),
              () => {
                a.removeEventListener(ne, f), (s = null);
              }
            );
          },
          createHref: (e) => t(a, e),
          createURL: d,
          encodeLocation(e) {
            let t = d(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            l = X.Push;
            let r = ie(p.location, e, t);
            n && n(r, e), (u = c() + 1);
            let f = oe(r, u),
              d = p.createHref(r);
            try {
              i.pushState(f, "", d);
            } catch (h) {
              if (h instanceof DOMException && "DataCloneError" === h.name)
                throw h;
              a.location.assign(d);
            }
            o && s && s({ action: l, location: p.location, delta: 1 });
          },
          replace: function (e, t) {
            l = X.Replace;
            let r = ie(p.location, e, t);
            n && n(r, e), (u = c());
            let a = oe(r, u),
              f = p.createHref(r);
            i.replaceState(a, "", f),
              o && s && s({ action: l, location: p.location, delta: 0 });
          },
          go: (e) => i.go(e),
        };
        return p;
      }
      var ce;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(ce || (ce = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function fe(e, t, n) {
        void 0 === n && (n = "/");
        let r = _e(("string" === typeof t ? se(t) : t).pathname || "/", n);
        if (null == r) return null;
        let a = de(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
                ),
          );
        })(a);
        let o = null;
        for (let i = 0; null == o && i < a.length; ++i) {
          let e = Ee(r);
          o = ke(a[i], e);
        }
        return o;
      }
      function de(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (re(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let l = Le([r, i.relativePath]),
            s = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (re(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            de(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: we(l, e.index), routesMeta: s });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of pe(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function pe(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = pe(r.join("/")),
          l = [];
        return (
          l.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && l.push(...i),
          l.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const he = /^:[\w-]+$/,
        ge = 3,
        me = 2,
        ve = 1,
        ye = 10,
        be = -2,
        Se = (e) => "*" === e;
      function we(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(Se) && (r += be),
          t && (r += me),
          n
            .filter((e) => !Se(e))
            .reduce((e, t) => e + (he.test(t) ? ge : "" === t ? ve : ye), r)
        );
      }
      function ke(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          o = [];
        for (let i = 0; i < n.length; ++i) {
          let e = n[i],
            l = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            u = xe(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              s,
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = e.route;
          o.push({
            params: r,
            pathname: Le([a, u.pathname]),
            pathnameBase: Re(Le([a, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (a = Le([a, u.pathnameBase]));
        }
        return o;
      }
      function xe(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            ae(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    ),
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
                ? (a += "\\/*$")
                : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          l = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = l[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const s = l[n];
            return (
              (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function Ee(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            ae(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ").",
            ),
            e
          );
        }
      }
      function _e(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function Ce(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function Oe(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
        );
      }
      function Pe(e, t) {
        let n = Oe(e);
        return t
          ? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function Ne(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = se(e))
            : ((a = te({}, e)),
              re(
                !a.pathname || !a.pathname.includes("?"),
                Ce("?", "pathname", "search", a),
              ),
              re(
                !a.pathname || !a.pathname.includes("#"),
                Ce("#", "pathname", "hash", a),
              ),
              re(
                !a.search || !a.search.includes("#"),
                Ce("#", "search", "hash", a),
              ));
        let o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (null == l) o = n;
        else {
          let e = t.length - 1;
          if (!r && l.startsWith("..")) {
            let t = l.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let s = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? se(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: Te(r), hash: je(a) };
          })(a, o),
          u = l && "/" !== l && l.endsWith("/"),
          c = (i || "." === l) && n.endsWith("/");
        return s.pathname.endsWith("/") || (!u && !c) || (s.pathname += "/"), s;
      }
      const Le = (e) => e.join("/").replace(/\/\/+/g, "/"),
        Re = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        Te = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        je = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function Fe(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const ze = ["post", "put", "patch", "delete"],
        Ie = (new Set(ze), ["get", ...ze]);
      new Set(Ie), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function Ae() {
        return (
          (Ae = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ae.apply(this, arguments)
        );
      }
      const Me = $.createContext(null);
      const De = $.createContext(null);
      const Ue = $.createContext(null);
      const Ve = $.createContext(null);
      const $e = $.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1,
      });
      const Be = $.createContext(null);
      function He() {
        return null != $.useContext(Ve);
      }
      function We() {
        return He() || re(!1), $.useContext(Ve).location;
      }
      function Qe(e) {
        $.useContext(Ue).static || $.useLayoutEffect(e);
      }
      function Ke() {
        let { isDataRoute: e } = $.useContext($e);
        return e
          ? (function () {
              let { router: e } = nt(et.UseNavigateStable),
                t = at(tt.UseNavigateStable),
                n = $.useRef(!1);
              return (
                Qe(() => {
                  n.current = !0;
                }),
                $.useCallback(
                  function (r, a) {
                    void 0 === a && (a = {}),
                      n.current &&
                        ("number" === typeof r
                          ? e.navigate(r)
                          : e.navigate(r, Ae({ fromRouteId: t }, a)));
                  },
                  [e, t],
                )
              );
            })()
          : (function () {
              He() || re(!1);
              let e = $.useContext(Me),
                { basename: t, future: n, navigator: r } = $.useContext(Ue),
                { matches: a } = $.useContext($e),
                { pathname: o } = We(),
                i = JSON.stringify(Pe(a, n.v7_relativeSplatPath)),
                l = $.useRef(!1);
              return (
                Qe(() => {
                  l.current = !0;
                }),
                $.useCallback(
                  function (n, a) {
                    if ((void 0 === a && (a = {}), !l.current)) return;
                    if ("number" === typeof n) return void r.go(n);
                    let s = Ne(n, JSON.parse(i), o, "path" === a.relative);
                    null == e &&
                      "/" !== t &&
                      (s.pathname =
                        "/" === s.pathname ? t : Le([t, s.pathname])),
                      (a.replace ? r.replace : r.push)(s, a.state, a);
                  },
                  [t, r, i, o, e],
                )
              );
            })();
      }
      function qe(e, t, n, r) {
        He() || re(!1);
        let { navigator: a } = $.useContext(Ue),
          { matches: o } = $.useContext($e),
          i = o[o.length - 1],
          l = i ? i.params : {},
          s = (i && i.pathname, i ? i.pathnameBase : "/");
        i && i.route;
        let u,
          c = We();
        if (t) {
          var f;
          let e = "string" === typeof t ? se(t) : t;
          "/" === s ||
            (null == (f = e.pathname) ? void 0 : f.startsWith(s)) ||
            re(!1),
            (u = e);
        } else u = c;
        let d = u.pathname || "/",
          p = d;
        if ("/" !== s) {
          let e = s.replace(/^\//, "").split("/");
          p = "/" + d.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let h = fe(e, { pathname: p });
        let g = Ze(
          h &&
            h.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, l, e.params),
                pathname: Le([
                  s,
                  a.encodeLocation
                    ? a.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? s
                    : Le([
                        s,
                        a.encodeLocation
                          ? a.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              }),
            ),
          o,
          n,
          r,
        );
        return t && g
          ? $.createElement(
              Ve.Provider,
              {
                value: {
                  location: Ae(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    u,
                  ),
                  navigationType: X.Pop,
                },
              },
              g,
            )
          : g;
      }
      function Je() {
        let e = (function () {
            var e;
            let t = $.useContext(Be),
              n = rt(tt.UseRouteError),
              r = at(tt.UseRouteError);
            if (void 0 !== t) return t;
            return null == (e = n.errors) ? void 0 : e[r];
          })(),
          t = Fe(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
              ? e.message
              : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          a = { padding: "0.5rem", backgroundColor: r };
        return $.createElement(
          $.Fragment,
          null,
          $.createElement("h2", null, "Unexpected Application Error!"),
          $.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? $.createElement("pre", { style: a }, n) : null,
          null,
        );
      }
      const Ye = $.createElement(Je, null);
      class Ge extends $.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t,
          );
        }
        render() {
          return void 0 !== this.state.error
            ? $.createElement(
                $e.Provider,
                { value: this.props.routeContext },
                $.createElement(Be.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      }
      function Xe(e) {
        let { routeContext: t, match: n, children: r } = e,
          a = $.useContext(Me);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = n.route.id),
          $.createElement($e.Provider, { value: t }, r)
        );
      }
      function Ze(e, t, n, r) {
        var a;
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = null),
          void 0 === r && (r = null),
          null == e)
        ) {
          var o;
          if (null == (o = n) || !o.errors) return null;
          e = n.matches;
        }
        let i = e,
          l = null == (a = n) ? void 0 : a.errors;
        if (null != l) {
          let e = i.findIndex(
            (e) =>
              e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id]),
          );
          e >= 0 || re(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
        }
        let s = !1,
          u = -1;
        if (n && r && r.v7_partialHydration)
          for (let c = 0; c < i.length; c++) {
            let e = i[c];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (u = c),
              e.route.id)
            ) {
              let { loaderData: t, errors: r } = n,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!r || void 0 === r[e.route.id]);
              if (e.route.lazy || a) {
                (s = !0), (i = u >= 0 ? i.slice(0, u + 1) : [i[0]]);
                break;
              }
            }
          }
        return i.reduceRight((e, r, a) => {
          let o,
            c = !1,
            f = null,
            d = null;
          var p;
          n &&
            ((o = l && r.route.id ? l[r.route.id] : void 0),
            (f = r.route.errorElement || Ye),
            s &&
              (u < 0 && 0 === a
                ? ((p = "route-fallback"),
                  !1 || ot[p] || (ot[p] = !0),
                  (c = !0),
                  (d = null))
                : u === a &&
                  ((c = !0), (d = r.route.hydrateFallbackElement || null))));
          let h = t.concat(i.slice(0, a + 1)),
            g = () => {
              let t;
              return (
                (t = o
                  ? f
                  : c
                    ? d
                    : r.route.Component
                      ? $.createElement(r.route.Component, null)
                      : r.route.element
                        ? r.route.element
                        : e),
                $.createElement(Xe, {
                  match: r,
                  routeContext: {
                    outlet: e,
                    matches: h,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
            ? $.createElement(Ge, {
                location: n.location,
                revalidation: n.revalidation,
                component: f,
                error: o,
                children: g(),
                routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var et = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(et || {}),
        tt = (function (e) {
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
        })(tt || {});
      function nt(e) {
        let t = $.useContext(Me);
        return t || re(!1), t;
      }
      function rt(e) {
        let t = $.useContext(De);
        return t || re(!1), t;
      }
      function at(e) {
        let t = (function (e) {
            let t = $.useContext($e);
            return t || re(!1), t;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || re(!1), n.route.id;
      }
      const ot = {};
      B.startTransition;
      function it(e) {
        re(!1);
      }
      function lt(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: r,
          navigationType: a = X.Pop,
          navigator: o,
          static: i = !1,
          future: l,
        } = e;
        He() && re(!1);
        let s = t.replace(/^\/*/, "/"),
          u = $.useMemo(
            () => ({
              basename: s,
              navigator: o,
              static: i,
              future: Ae({ v7_relativeSplatPath: !1 }, l),
            }),
            [s, l, o, i],
          );
        "string" === typeof r && (r = se(r));
        let {
            pathname: c = "/",
            search: f = "",
            hash: d = "",
            state: p = null,
            key: h = "default",
          } = r,
          g = $.useMemo(() => {
            let e = _e(c, s);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: f,
                    hash: d,
                    state: p,
                    key: h,
                  },
                  navigationType: a,
                };
          }, [s, c, f, d, p, h, a]);
        return null == g
          ? null
          : $.createElement(
              Ue.Provider,
              { value: u },
              $.createElement(Ve.Provider, { children: n, value: g }),
            );
      }
      function st(e) {
        let { children: t, location: n } = e;
        return qe(ut(t), n);
      }
      new Promise(() => {});
      $.Component;
      function ut(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          $.Children.forEach(e, (e, r) => {
            if (!$.isValidElement(e)) return;
            let a = [...t, r];
            if (e.type === $.Fragment)
              return void n.push.apply(n, ut(e.props.children, a));
            e.type !== it && re(!1),
              e.props.index && e.props.children && re(!1);
            let o = {
              id: e.props.id || a.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (o.children = ut(e.props.children, a)),
              n.push(o);
          }),
          n
        );
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      try {
        window.__reactRouterVersion = "6";
      } catch ($o) {}
      new Map();
      const ct = B.startTransition;
      ee.flushSync, B.useId;
      function ft(e) {
        let { basename: t, children: n, future: r, window: a } = e,
          o = $.useRef();
        var i;
        null == o.current &&
          (o.current =
            (void 0 === (i = { window: a, v5Compat: !0 }) && (i = {}),
            ue(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return ie(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default",
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : le(t);
              },
              null,
              i,
            )));
        let l = o.current,
          [s, u] = $.useState({ action: l.action, location: l.location }),
          { v7_startTransition: c } = r || {},
          f = $.useCallback(
            (e) => {
              c && ct ? ct(() => u(e)) : u(e);
            },
            [u, c],
          );
        return (
          $.useLayoutEffect(() => l.listen(f), [l, f]),
          $.createElement(lt, {
            basename: t,
            children: n,
            location: s.location,
            navigationType: s.action,
            navigator: l,
            future: r,
          })
        );
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
      var dt, pt;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(dt || (dt = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(pt || (pt = {}));
      var ht = n(579);
      const gt = () => {
        const e = We();
        Ke();
        return (
          console.log("location", e),
          (0, ht.jsx)("h1", {
            children:
              "\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",
          })
        );
      };
      var mt = function (e) {
        return (
          (function (e) {
            return !!e && "object" === typeof e;
          })(e) &&
          !(function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              "[object RegExp]" === t ||
              "[object Date]" === t ||
              (function (e) {
                return e.$$typeof === vt;
              })(e)
            );
          })(e)
        );
      };
      var vt =
        "function" === typeof Symbol && Symbol.for
          ? Symbol.for("react.element")
          : 60103;
      function yt(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? St(((n = e), Array.isArray(n) ? [] : {}), e, t)
          : e;
        var n;
      }
      function bt(e, t, n) {
        return e.concat(t).map(function (e) {
          return yt(e, n);
        });
      }
      function St(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || bt),
          (n.isMergeableObject = n.isMergeableObject || mt);
        var r = Array.isArray(t);
        return r === Array.isArray(e)
          ? r
            ? n.arrayMerge(e, t, n)
            : (function (e, t, n) {
                var r = {};
                return (
                  n.isMergeableObject(e) &&
                    Object.keys(e).forEach(function (t) {
                      r[t] = yt(e[t], n);
                    }),
                  Object.keys(t).forEach(function (a) {
                    n.isMergeableObject(t[a]) && e[a]
                      ? (r[a] = St(e[a], t[a], n))
                      : (r[a] = yt(t[a], n));
                  }),
                  r
                );
              })(e, t, n)
          : yt(t, n);
      }
      St.all = function (e, t) {
        if (!Array.isArray(e))
          throw new Error("first argument should be an array");
        return e.reduce(function (e, n) {
          return St(e, n, t);
        }, {});
      };
      const wt = St;
      const kt =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
      var xt =
        "object" == typeof self && self && self.Object === Object && self;
      const Et = kt || xt || Function("return this")();
      const _t = Et.Symbol;
      var Ct = Object.prototype,
        Ot = Ct.hasOwnProperty,
        Pt = Ct.toString,
        Nt = _t ? _t.toStringTag : void 0;
      const Lt = function (e) {
        var t = Ot.call(e, Nt),
          n = e[Nt];
        try {
          e[Nt] = void 0;
          var r = !0;
        } catch ($o) {}
        var a = Pt.call(e);
        return r && (t ? (e[Nt] = n) : delete e[Nt]), a;
      };
      var Rt = Object.prototype.toString;
      const Tt = function (e) {
        return Rt.call(e);
      };
      var jt = _t ? _t.toStringTag : void 0;
      const Ft = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : jt && jt in Object(e)
            ? Lt(e)
            : Tt(e);
      };
      const zt = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
      const It = zt(Object.getPrototypeOf, Object);
      const At = function (e) {
        return null != e && "object" == typeof e;
      };
      var Mt = Function.prototype,
        Dt = Object.prototype,
        Ut = Mt.toString,
        Vt = Dt.hasOwnProperty,
        $t = Ut.call(Object);
      const Bt = function (e) {
        if (!At(e) || "[object Object]" != Ft(e)) return !1;
        var t = It(e);
        if (null === t) return !0;
        var n = Vt.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && Ut.call(n) == $t;
      };
      const Ht = function () {
        (this.__data__ = []), (this.size = 0);
      };
      const Wt = function (e, t) {
        return e === t || (e !== e && t !== t);
      };
      const Qt = function (e, t) {
        for (var n = e.length; n--; ) if (Wt(e[n][0], t)) return n;
        return -1;
      };
      var Kt = Array.prototype.splice;
      const qt = function (e) {
        var t = this.__data__,
          n = Qt(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : Kt.call(t, n, 1), --this.size, !0)
        );
      };
      const Jt = function (e) {
        var t = this.__data__,
          n = Qt(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
      const Yt = function (e) {
        return Qt(this.__data__, e) > -1;
      };
      const Gt = function (e, t) {
        var n = this.__data__,
          r = Qt(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      };
      function Xt(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Xt.prototype.clear = Ht),
        (Xt.prototype.delete = qt),
        (Xt.prototype.get = Jt),
        (Xt.prototype.has = Yt),
        (Xt.prototype.set = Gt);
      const Zt = Xt;
      const en = function () {
        (this.__data__ = new Zt()), (this.size = 0);
      };
      const tn = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
      const nn = function (e) {
        return this.__data__.get(e);
      };
      const rn = function (e) {
        return this.__data__.has(e);
      };
      const an = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
      const on = function (e) {
        if (!an(e)) return !1;
        var t = Ft(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
      const ln = Et["__core-js_shared__"];
      var sn = (function () {
        var e = /[^.]+$/.exec((ln && ln.keys && ln.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
      const un = function (e) {
        return !!sn && sn in e;
      };
      var cn = Function.prototype.toString;
      const fn = function (e) {
        if (null != e) {
          try {
            return cn.call(e);
          } catch ($o) {}
          try {
            return e + "";
          } catch ($o) {}
        }
        return "";
      };
      var dn = /^\[object .+?Constructor\]$/,
        pn = Function.prototype,
        hn = Object.prototype,
        gn = pn.toString,
        mn = hn.hasOwnProperty,
        vn = RegExp(
          "^" +
            gn
              .call(mn)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      const yn = function (e) {
        return !(!an(e) || un(e)) && (on(e) ? vn : dn).test(fn(e));
      };
      const bn = function (e, t) {
        return null == e ? void 0 : e[t];
      };
      const Sn = function (e, t) {
        var n = bn(e, t);
        return yn(n) ? n : void 0;
      };
      const wn = Sn(Et, "Map");
      const kn = Sn(Object, "create");
      const xn = function () {
        (this.__data__ = kn ? kn(null) : {}), (this.size = 0);
      };
      const En = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
      var _n = Object.prototype.hasOwnProperty;
      const Cn = function (e) {
        var t = this.__data__;
        if (kn) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return _n.call(t, e) ? t[e] : void 0;
      };
      var On = Object.prototype.hasOwnProperty;
      const Pn = function (e) {
        var t = this.__data__;
        return kn ? void 0 !== t[e] : On.call(t, e);
      };
      const Nn = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = kn && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
      function Ln(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Ln.prototype.clear = xn),
        (Ln.prototype.delete = En),
        (Ln.prototype.get = Cn),
        (Ln.prototype.has = Pn),
        (Ln.prototype.set = Nn);
      const Rn = Ln;
      const Tn = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new Rn(),
            map: new (wn || Zt)(),
            string: new Rn(),
          });
      };
      const jn = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
      const Fn = function (e, t) {
        var n = e.__data__;
        return jn(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
      const zn = function (e) {
        var t = Fn(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
      const In = function (e) {
        return Fn(this, e).get(e);
      };
      const An = function (e) {
        return Fn(this, e).has(e);
      };
      const Mn = function (e, t) {
        var n = Fn(this, e),
          r = n.size;
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      };
      function Dn(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (Dn.prototype.clear = Tn),
        (Dn.prototype.delete = zn),
        (Dn.prototype.get = In),
        (Dn.prototype.has = An),
        (Dn.prototype.set = Mn);
      const Un = Dn;
      const Vn = function (e, t) {
        var n = this.__data__;
        if (n instanceof Zt) {
          var r = n.__data__;
          if (!wn || r.length < 199)
            return r.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new Un(r);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
      function $n(e) {
        var t = (this.__data__ = new Zt(e));
        this.size = t.size;
      }
      ($n.prototype.clear = en),
        ($n.prototype.delete = tn),
        ($n.prototype.get = nn),
        ($n.prototype.has = rn),
        ($n.prototype.set = Vn);
      const Bn = $n;
      const Hn = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length;
          ++n < r && !1 !== t(e[n], n, e);

        );
        return e;
      };
      const Wn = (function () {
        try {
          var e = Sn(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch ($o) {}
      })();
      const Qn = function (e, t, n) {
        "__proto__" == t && Wn
          ? Wn(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
      var Kn = Object.prototype.hasOwnProperty;
      const qn = function (e, t, n) {
        var r = e[t];
        (Kn.call(e, t) && Wt(r, n) && (void 0 !== n || t in e)) || Qn(e, t, n);
      };
      const Jn = function (e, t, n, r) {
        var a = !n;
        n || (n = {});
        for (var o = -1, i = t.length; ++o < i; ) {
          var l = t[o],
            s = r ? r(n[l], e[l], l, n, e) : void 0;
          void 0 === s && (s = e[l]), a ? Qn(n, l, s) : qn(n, l, s);
        }
        return n;
      };
      const Yn = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
      const Gn = function (e) {
        return At(e) && "[object Arguments]" == Ft(e);
      };
      var Xn = Object.prototype,
        Zn = Xn.hasOwnProperty,
        er = Xn.propertyIsEnumerable;
      const tr = Gn(
        (function () {
          return arguments;
        })(),
      )
        ? Gn
        : function (e) {
            return At(e) && Zn.call(e, "callee") && !er.call(e, "callee");
          };
      const nr = Array.isArray;
      const rr = function () {
        return !1;
      };
      var ar =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        or =
          ar &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        ir = or && or.exports === ar ? Et.Buffer : void 0;
      const lr = (ir ? ir.isBuffer : void 0) || rr;
      var sr = /^(?:0|[1-9]\d*)$/;
      const ur = function (e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == n || ("symbol" != n && sr.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
      const cr = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
      var fr = {};
      (fr["[object Float32Array]"] =
        fr["[object Float64Array]"] =
        fr["[object Int8Array]"] =
        fr["[object Int16Array]"] =
        fr["[object Int32Array]"] =
        fr["[object Uint8Array]"] =
        fr["[object Uint8ClampedArray]"] =
        fr["[object Uint16Array]"] =
        fr["[object Uint32Array]"] =
          !0),
        (fr["[object Arguments]"] =
          fr["[object Array]"] =
          fr["[object ArrayBuffer]"] =
          fr["[object Boolean]"] =
          fr["[object DataView]"] =
          fr["[object Date]"] =
          fr["[object Error]"] =
          fr["[object Function]"] =
          fr["[object Map]"] =
          fr["[object Number]"] =
          fr["[object Object]"] =
          fr["[object RegExp]"] =
          fr["[object Set]"] =
          fr["[object String]"] =
          fr["[object WeakMap]"] =
            !1);
      const dr = function (e) {
        return At(e) && cr(e.length) && !!fr[Ft(e)];
      };
      const pr = function (e) {
        return function (t) {
          return e(t);
        };
      };
      var hr =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        gr =
          hr &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        mr = gr && gr.exports === hr && kt.process;
      const vr = (function () {
        try {
          var e = gr && gr.require && gr.require("util").types;
          return e || (mr && mr.binding && mr.binding("util"));
        } catch ($o) {}
      })();
      var yr = vr && vr.isTypedArray;
      const br = yr ? pr(yr) : dr;
      var Sr = Object.prototype.hasOwnProperty;
      const wr = function (e, t) {
        var n = nr(e),
          r = !n && tr(e),
          a = !n && !r && lr(e),
          o = !n && !r && !a && br(e),
          i = n || r || a || o,
          l = i ? Yn(e.length, String) : [],
          s = l.length;
        for (var u in e)
          (!t && !Sr.call(e, u)) ||
            (i &&
              ("length" == u ||
                (a && ("offset" == u || "parent" == u)) ||
                (o &&
                  ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                ur(u, s))) ||
            l.push(u);
        return l;
      };
      var kr = Object.prototype;
      const xr = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || kr);
      };
      const Er = zt(Object.keys, Object);
      var _r = Object.prototype.hasOwnProperty;
      const Cr = function (e) {
        if (!xr(e)) return Er(e);
        var t = [];
        for (var n in Object(e))
          _r.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
      const Or = function (e) {
        return null != e && cr(e.length) && !on(e);
      };
      const Pr = function (e) {
        return Or(e) ? wr(e) : Cr(e);
      };
      const Nr = function (e, t) {
        return e && Jn(t, Pr(t), e);
      };
      const Lr = function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      };
      var Rr = Object.prototype.hasOwnProperty;
      const Tr = function (e) {
        if (!an(e)) return Lr(e);
        var t = xr(e),
          n = [];
        for (var r in e)
          ("constructor" != r || (!t && Rr.call(e, r))) && n.push(r);
        return n;
      };
      const jr = function (e) {
        return Or(e) ? wr(e, !0) : Tr(e);
      };
      const Fr = function (e, t) {
        return e && Jn(t, jr(t), e);
      };
      var zr =
          "object" == typeof exports && exports && !exports.nodeType && exports,
        Ir =
          zr &&
          "object" == typeof module &&
          module &&
          !module.nodeType &&
          module,
        Ar = Ir && Ir.exports === zr ? Et.Buffer : void 0,
        Mr = Ar ? Ar.allocUnsafe : void 0;
      const Dr = function (e, t) {
        if (t) return e.slice();
        var n = e.length,
          r = Mr ? Mr(n) : new e.constructor(n);
        return e.copy(r), r;
      };
      const Ur = function (e, t) {
        var n = -1,
          r = e.length;
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
        return t;
      };
      const Vr = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, a = 0, o = [];
          ++n < r;

        ) {
          var i = e[n];
          t(i, n, e) && (o[a++] = i);
        }
        return o;
      };
      const $r = function () {
        return [];
      };
      var Br = Object.prototype.propertyIsEnumerable,
        Hr = Object.getOwnPropertySymbols;
      const Wr = Hr
        ? function (e) {
            return null == e
              ? []
              : ((e = Object(e)),
                Vr(Hr(e), function (t) {
                  return Br.call(e, t);
                }));
          }
        : $r;
      const Qr = function (e, t) {
        return Jn(e, Wr(e), t);
      };
      const Kr = function (e, t) {
        for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
        return e;
      };
      const qr = Object.getOwnPropertySymbols
        ? function (e) {
            for (var t = []; e; ) Kr(t, Wr(e)), (e = It(e));
            return t;
          }
        : $r;
      const Jr = function (e, t) {
        return Jn(e, qr(e), t);
      };
      const Yr = function (e, t, n) {
        var r = t(e);
        return nr(e) ? r : Kr(r, n(e));
      };
      const Gr = function (e) {
        return Yr(e, Pr, Wr);
      };
      const Xr = function (e) {
        return Yr(e, jr, qr);
      };
      const Zr = Sn(Et, "DataView");
      const ea = Sn(Et, "Promise");
      const ta = Sn(Et, "Set");
      const na = Sn(Et, "WeakMap");
      var ra = "[object Map]",
        aa = "[object Promise]",
        oa = "[object Set]",
        ia = "[object WeakMap]",
        la = "[object DataView]",
        sa = fn(Zr),
        ua = fn(wn),
        ca = fn(ea),
        fa = fn(ta),
        da = fn(na),
        pa = Ft;
      ((Zr && pa(new Zr(new ArrayBuffer(1))) != la) ||
        (wn && pa(new wn()) != ra) ||
        (ea && pa(ea.resolve()) != aa) ||
        (ta && pa(new ta()) != oa) ||
        (na && pa(new na()) != ia)) &&
        (pa = function (e) {
          var t = Ft(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? fn(n) : "";
          if (r)
            switch (r) {
              case sa:
                return la;
              case ua:
                return ra;
              case ca:
                return aa;
              case fa:
                return oa;
              case da:
                return ia;
            }
          return t;
        });
      const ha = pa;
      var ga = Object.prototype.hasOwnProperty;
      const ma = function (e) {
        var t = e.length,
          n = new e.constructor(t);
        return (
          t &&
            "string" == typeof e[0] &&
            ga.call(e, "index") &&
            ((n.index = e.index), (n.input = e.input)),
          n
        );
      };
      const va = Et.Uint8Array;
      const ya = function (e) {
        var t = new e.constructor(e.byteLength);
        return new va(t).set(new va(e)), t;
      };
      const ba = function (e, t) {
        var n = t ? ya(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
      var Sa = /\w*$/;
      const wa = function (e) {
        var t = new e.constructor(e.source, Sa.exec(e));
        return (t.lastIndex = e.lastIndex), t;
      };
      var ka = _t ? _t.prototype : void 0,
        xa = ka ? ka.valueOf : void 0;
      const Ea = function (e) {
        return xa ? Object(xa.call(e)) : {};
      };
      const _a = function (e, t) {
        var n = t ? ya(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
      const Ca = function (e, t, n) {
        var r = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return ya(e);
          case "[object Boolean]":
          case "[object Date]":
            return new r(+e);
          case "[object DataView]":
            return ba(e, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return _a(e, n);
          case "[object Map]":
          case "[object Set]":
            return new r();
          case "[object Number]":
          case "[object String]":
            return new r(e);
          case "[object RegExp]":
            return wa(e);
          case "[object Symbol]":
            return Ea(e);
        }
      };
      var Oa = Object.create;
      const Pa = (function () {
        function e() {}
        return function (t) {
          if (!an(t)) return {};
          if (Oa) return Oa(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
      const Na = function (e) {
        return "function" != typeof e.constructor || xr(e) ? {} : Pa(It(e));
      };
      const La = function (e) {
        return At(e) && "[object Map]" == ha(e);
      };
      var Ra = vr && vr.isMap;
      const Ta = Ra ? pr(Ra) : La;
      const ja = function (e) {
        return At(e) && "[object Set]" == ha(e);
      };
      var Fa = vr && vr.isSet;
      const za = Fa ? pr(Fa) : ja;
      var Ia = "[object Arguments]",
        Aa = "[object Function]",
        Ma = "[object Object]",
        Da = {};
      (Da[Ia] =
        Da["[object Array]"] =
        Da["[object ArrayBuffer]"] =
        Da["[object DataView]"] =
        Da["[object Boolean]"] =
        Da["[object Date]"] =
        Da["[object Float32Array]"] =
        Da["[object Float64Array]"] =
        Da["[object Int8Array]"] =
        Da["[object Int16Array]"] =
        Da["[object Int32Array]"] =
        Da["[object Map]"] =
        Da["[object Number]"] =
        Da[Ma] =
        Da["[object RegExp]"] =
        Da["[object Set]"] =
        Da["[object String]"] =
        Da["[object Symbol]"] =
        Da["[object Uint8Array]"] =
        Da["[object Uint8ClampedArray]"] =
        Da["[object Uint16Array]"] =
        Da["[object Uint32Array]"] =
          !0),
        (Da["[object Error]"] = Da[Aa] = Da["[object WeakMap]"] = !1);
      const Ua = function e(t, n, r, a, o, i) {
        var l,
          s = 1 & n,
          u = 2 & n,
          c = 4 & n;
        if ((r && (l = o ? r(t, a, o, i) : r(t)), void 0 !== l)) return l;
        if (!an(t)) return t;
        var f = nr(t);
        if (f) {
          if (((l = ma(t)), !s)) return Ur(t, l);
        } else {
          var d = ha(t),
            p = d == Aa || "[object GeneratorFunction]" == d;
          if (lr(t)) return Dr(t, s);
          if (d == Ma || d == Ia || (p && !o)) {
            if (((l = u || p ? {} : Na(t)), !s))
              return u ? Jr(t, Fr(l, t)) : Qr(t, Nr(l, t));
          } else {
            if (!Da[d]) return o ? t : {};
            l = Ca(t, d, s);
          }
        }
        i || (i = new Bn());
        var h = i.get(t);
        if (h) return h;
        i.set(t, l),
          za(t)
            ? t.forEach(function (a) {
                l.add(e(a, n, r, a, t, i));
              })
            : Ta(t) &&
              t.forEach(function (a, o) {
                l.set(o, e(a, n, r, o, t, i));
              });
        var g = f ? void 0 : (c ? (u ? Xr : Gr) : u ? jr : Pr)(t);
        return (
          Hn(g || t, function (a, o) {
            g && (a = t[(o = a)]), qn(l, o, e(a, n, r, o, t, i));
          }),
          l
        );
      };
      const Va = function (e) {
        return Ua(e, 5);
      };
      var $a = n(366),
        Ba = n.n($a);
      const Ha = function (e, t) {};
      const Wa = function (e) {
        return Ua(e, 4);
      };
      const Qa = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r; )
          a[n] = t(e[n], n, e);
        return a;
      };
      const Ka = function (e) {
        return "symbol" == typeof e || (At(e) && "[object Symbol]" == Ft(e));
      };
      function qa(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function () {
          var r = arguments,
            a = t ? t.apply(this, r) : r[0],
            o = n.cache;
          if (o.has(a)) return o.get(a);
          var i = e.apply(this, r);
          return (n.cache = o.set(a, i) || o), i;
        };
        return (n.cache = new (qa.Cache || Un)()), n;
      }
      qa.Cache = Un;
      const Ja = qa;
      var Ya =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ga = /\\(\\)?/g,
        Xa = (function (e) {
          var t = Ja(e, function (e) {
              return 500 === n.size && n.clear(), e;
            }),
            n = t.cache;
          return t;
        })(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(Ya, function (e, n, r, a) {
              t.push(r ? a.replace(Ga, "$1") : n || e);
            }),
            t
          );
        });
      const Za = Xa;
      const eo = function (e) {
        if ("string" == typeof e || Ka(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
      };
      var to = _t ? _t.prototype : void 0,
        no = to ? to.toString : void 0;
      const ro = function e(t) {
        if ("string" == typeof t) return t;
        if (nr(t)) return Qa(t, e) + "";
        if (Ka(t)) return no ? no.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
      };
      const ao = function (e) {
        return null == e ? "" : ro(e);
      };
      const oo = function (e) {
        return nr(e) ? Qa(e, eo) : Ka(e) ? [e] : Ur(Za(ao(e)));
      };
      n(219);
      function io() {
        return (
          (io =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          io.apply(this, arguments)
        );
      }
      function lo(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function so(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function uo(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      var co = (0, $.createContext)(void 0);
      co.displayName = "FormikContext";
      var fo = co.Provider;
      co.Consumer;
      function po() {
        var e = (0, $.useContext)(co);
        return e || Ha(!1), e;
      }
      var ho = function (e) {
          return Array.isArray(e) && 0 === e.length;
        },
        go = function (e) {
          return "function" === typeof e;
        },
        mo = function (e) {
          return null !== e && "object" === typeof e;
        },
        vo = function (e) {
          return String(Math.floor(Number(e))) === e;
        },
        yo = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        bo = function (e) {
          return 0 === $.Children.count(e);
        },
        So = function (e) {
          return mo(e) && go(e.then);
        };
      function wo(e, t, n, r) {
        void 0 === r && (r = 0);
        for (var a = oo(t); e && r < a.length; ) e = e[a[r++]];
        return r === a.length || e ? (void 0 === e ? n : e) : n;
      }
      function ko(e, t, n) {
        for (var r = Wa(e), a = r, o = 0, i = oo(t); o < i.length - 1; o++) {
          var l = i[o],
            s = wo(e, i.slice(0, o + 1));
          if (s && (mo(s) || Array.isArray(s))) a = a[l] = Wa(s);
          else {
            var u = i[o + 1];
            a = a[l] = vo(u) && Number(u) >= 0 ? [] : {};
          }
        }
        return (0 === o ? e : a)[i[o]] === n
          ? e
          : (void 0 === n ? delete a[i[o]] : (a[i[o]] = n),
            0 === o && void 0 === n && delete r[i[o]],
            r);
      }
      function xo(e, t, n, r) {
        void 0 === n && (n = new WeakMap()), void 0 === r && (r = {});
        for (var a = 0, o = Object.keys(e); a < o.length; a++) {
          var i = o[a],
            l = e[i];
          mo(l)
            ? n.get(l) ||
              (n.set(l, !0),
              (r[i] = Array.isArray(l) ? [] : {}),
              xo(l, t, n, r[i]))
            : (r[i] = t);
        }
        return r;
      }
      var Eo = {},
        _o = {};
      function Co(e) {
        var t = e.validateOnChange,
          n = void 0 === t || t,
          r = e.validateOnBlur,
          a = void 0 === r || r,
          o = e.validateOnMount,
          i = void 0 !== o && o,
          l = e.isInitialValid,
          s = e.enableReinitialize,
          u = void 0 !== s && s,
          c = e.onSubmit,
          f = so(e, [
            "validateOnChange",
            "validateOnBlur",
            "validateOnMount",
            "isInitialValid",
            "enableReinitialize",
            "onSubmit",
          ]),
          d = io(
            {
              validateOnChange: n,
              validateOnBlur: a,
              validateOnMount: i,
              onSubmit: c,
            },
            f,
          ),
          p = (0, $.useRef)(d.initialValues),
          h = (0, $.useRef)(d.initialErrors || Eo),
          g = (0, $.useRef)(d.initialTouched || _o),
          m = (0, $.useRef)(d.initialStatus),
          v = (0, $.useRef)(!1),
          y = (0, $.useRef)({});
        (0, $.useEffect)(function () {
          return (
            (v.current = !0),
            function () {
              v.current = !1;
            }
          );
        }, []);
        var b = (0, $.useState)(0)[1],
          S = (0, $.useRef)({
            values: Va(d.initialValues),
            errors: Va(d.initialErrors) || Eo,
            touched: Va(d.initialTouched) || _o,
            status: Va(d.initialStatus),
            isSubmitting: !1,
            isValidating: !1,
            submitCount: 0,
          }),
          w = S.current,
          k = (0, $.useCallback)(function (e) {
            var t = S.current;
            (S.current = (function (e, t) {
              switch (t.type) {
                case "SET_VALUES":
                  return io({}, e, { values: t.payload });
                case "SET_TOUCHED":
                  return io({}, e, { touched: t.payload });
                case "SET_ERRORS":
                  return Ba()(e.errors, t.payload)
                    ? e
                    : io({}, e, { errors: t.payload });
                case "SET_STATUS":
                  return io({}, e, { status: t.payload });
                case "SET_ISSUBMITTING":
                  return io({}, e, { isSubmitting: t.payload });
                case "SET_ISVALIDATING":
                  return io({}, e, { isValidating: t.payload });
                case "SET_FIELD_VALUE":
                  return io({}, e, {
                    values: ko(e.values, t.payload.field, t.payload.value),
                  });
                case "SET_FIELD_TOUCHED":
                  return io({}, e, {
                    touched: ko(e.touched, t.payload.field, t.payload.value),
                  });
                case "SET_FIELD_ERROR":
                  return io({}, e, {
                    errors: ko(e.errors, t.payload.field, t.payload.value),
                  });
                case "RESET_FORM":
                  return io({}, e, t.payload);
                case "SET_FORMIK_STATE":
                  return t.payload(e);
                case "SUBMIT_ATTEMPT":
                  return io({}, e, {
                    touched: xo(e.values, !0),
                    isSubmitting: !0,
                    submitCount: e.submitCount + 1,
                  });
                case "SUBMIT_FAILURE":
                case "SUBMIT_SUCCESS":
                  return io({}, e, { isSubmitting: !1 });
                default:
                  return e;
              }
            })(t, e)),
              t !== S.current &&
                b(function (e) {
                  return e + 1;
                });
          }, []),
          x = (0, $.useCallback)(
            function (e, t) {
              return new Promise(function (n, r) {
                var a = d.validate(e, t);
                null == a
                  ? n(Eo)
                  : So(a)
                    ? a.then(
                        function (e) {
                          n(e || Eo);
                        },
                        function (e) {
                          r(e);
                        },
                      )
                    : n(a);
              });
            },
            [d.validate],
          ),
          E = (0, $.useCallback)(
            function (e, t) {
              var n = d.validationSchema,
                r = go(n) ? n(t) : n,
                a =
                  t && r.validateAt
                    ? r.validateAt(t, e)
                    : (function (e, t, n, r) {
                        void 0 === n && (n = !1);
                        var a = Po(e);
                        return t[n ? "validateSync" : "validate"](a, {
                          abortEarly: !1,
                          context: r || a,
                        });
                      })(e, r);
              return new Promise(function (e, t) {
                a.then(
                  function () {
                    e(Eo);
                  },
                  function (n) {
                    "ValidationError" === n.name
                      ? e(
                          (function (e) {
                            var t = {};
                            if (e.inner) {
                              if (0 === e.inner.length)
                                return ko(t, e.path, e.message);
                              var n = e.inner,
                                r = Array.isArray(n),
                                a = 0;
                              for (n = r ? n : n[Symbol.iterator](); ; ) {
                                var o;
                                if (r) {
                                  if (a >= n.length) break;
                                  o = n[a++];
                                } else {
                                  if ((a = n.next()).done) break;
                                  o = a.value;
                                }
                                var i = o;
                                wo(t, i.path) || (t = ko(t, i.path, i.message));
                              }
                            }
                            return t;
                          })(n),
                        )
                      : t(n);
                  },
                );
              });
            },
            [d.validationSchema],
          ),
          _ = (0, $.useCallback)(function (e, t) {
            return new Promise(function (n) {
              return n(y.current[e].validate(t));
            });
          }, []),
          C = (0, $.useCallback)(
            function (e) {
              var t = Object.keys(y.current).filter(function (e) {
                  return go(y.current[e].validate);
                }),
                n =
                  t.length > 0
                    ? t.map(function (t) {
                        return _(t, wo(e, t));
                      })
                    : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
              return Promise.all(n).then(function (e) {
                return e.reduce(function (e, n, r) {
                  return (
                    "DO_NOT_DELETE_YOU_WILL_BE_FIRED" === n ||
                      (n && (e = ko(e, t[r], n))),
                    e
                  );
                }, {});
              });
            },
            [_],
          ),
          O = (0, $.useCallback)(
            function (e) {
              return Promise.all([
                C(e),
                d.validationSchema ? E(e) : {},
                d.validate ? x(e) : {},
              ]).then(function (e) {
                var t = e[0],
                  n = e[1],
                  r = e[2];
                return wt.all([t, n, r], { arrayMerge: No });
              });
            },
            [d.validate, d.validationSchema, C, x, E],
          ),
          P = Ro(function (e) {
            return (
              void 0 === e && (e = w.values),
              k({ type: "SET_ISVALIDATING", payload: !0 }),
              O(e).then(function (e) {
                return (
                  v.current &&
                    (k({ type: "SET_ISVALIDATING", payload: !1 }),
                    k({ type: "SET_ERRORS", payload: e })),
                  e
                );
              })
            );
          });
        (0, $.useEffect)(
          function () {
            i &&
              !0 === v.current &&
              Ba()(p.current, d.initialValues) &&
              P(p.current);
          },
          [i, P],
        );
        var N = (0, $.useCallback)(
          function (e) {
            var t = e && e.values ? e.values : p.current,
              n =
                e && e.errors
                  ? e.errors
                  : h.current
                    ? h.current
                    : d.initialErrors || {},
              r =
                e && e.touched
                  ? e.touched
                  : g.current
                    ? g.current
                    : d.initialTouched || {},
              a =
                e && e.status
                  ? e.status
                  : m.current
                    ? m.current
                    : d.initialStatus;
            (p.current = t), (h.current = n), (g.current = r), (m.current = a);
            var o = function () {
              k({
                type: "RESET_FORM",
                payload: {
                  isSubmitting: !!e && !!e.isSubmitting,
                  errors: n,
                  touched: r,
                  status: a,
                  values: t,
                  isValidating: !!e && !!e.isValidating,
                  submitCount:
                    e && e.submitCount && "number" === typeof e.submitCount
                      ? e.submitCount
                      : 0,
                },
              });
            };
            if (d.onReset) {
              var i = d.onReset(w.values, J);
              So(i) ? i.then(o) : o();
            } else o();
          },
          [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset],
        );
        (0, $.useEffect)(
          function () {
            !0 !== v.current ||
              Ba()(p.current, d.initialValues) ||
              (u && ((p.current = d.initialValues), N(), i && P(p.current)));
          },
          [u, d.initialValues, N, i, P],
        ),
          (0, $.useEffect)(
            function () {
              u &&
                !0 === v.current &&
                !Ba()(h.current, d.initialErrors) &&
                ((h.current = d.initialErrors || Eo),
                k({ type: "SET_ERRORS", payload: d.initialErrors || Eo }));
            },
            [u, d.initialErrors],
          ),
          (0, $.useEffect)(
            function () {
              u &&
                !0 === v.current &&
                !Ba()(g.current, d.initialTouched) &&
                ((g.current = d.initialTouched || _o),
                k({ type: "SET_TOUCHED", payload: d.initialTouched || _o }));
            },
            [u, d.initialTouched],
          ),
          (0, $.useEffect)(
            function () {
              u &&
                !0 === v.current &&
                !Ba()(m.current, d.initialStatus) &&
                ((m.current = d.initialStatus),
                k({ type: "SET_STATUS", payload: d.initialStatus }));
            },
            [u, d.initialStatus, d.initialTouched],
          );
        var L = Ro(function (e) {
            if (y.current[e] && go(y.current[e].validate)) {
              var t = wo(w.values, e),
                n = y.current[e].validate(t);
              return So(n)
                ? (k({ type: "SET_ISVALIDATING", payload: !0 }),
                  n
                    .then(function (e) {
                      return e;
                    })
                    .then(function (t) {
                      k({
                        type: "SET_FIELD_ERROR",
                        payload: { field: e, value: t },
                      }),
                        k({ type: "SET_ISVALIDATING", payload: !1 });
                    }))
                : (k({
                    type: "SET_FIELD_ERROR",
                    payload: { field: e, value: n },
                  }),
                  Promise.resolve(n));
            }
            return d.validationSchema
              ? (k({ type: "SET_ISVALIDATING", payload: !0 }),
                E(w.values, e)
                  .then(function (e) {
                    return e;
                  })
                  .then(function (t) {
                    k({
                      type: "SET_FIELD_ERROR",
                      payload: { field: e, value: wo(t, e) },
                    }),
                      k({ type: "SET_ISVALIDATING", payload: !1 });
                  }))
              : Promise.resolve();
          }),
          R = (0, $.useCallback)(function (e, t) {
            var n = t.validate;
            y.current[e] = { validate: n };
          }, []),
          T = (0, $.useCallback)(function (e) {
            delete y.current[e];
          }, []),
          j = Ro(function (e, t) {
            return (
              k({ type: "SET_TOUCHED", payload: e }),
              (void 0 === t ? a : t) ? P(w.values) : Promise.resolve()
            );
          }),
          F = (0, $.useCallback)(function (e) {
            k({ type: "SET_ERRORS", payload: e });
          }, []),
          z = Ro(function (e, t) {
            var r = go(e) ? e(w.values) : e;
            return (
              k({ type: "SET_VALUES", payload: r }),
              (void 0 === t ? n : t) ? P(r) : Promise.resolve()
            );
          }),
          I = (0, $.useCallback)(function (e, t) {
            k({ type: "SET_FIELD_ERROR", payload: { field: e, value: t } });
          }, []),
          A = Ro(function (e, t, r) {
            return (
              k({ type: "SET_FIELD_VALUE", payload: { field: e, value: t } }),
              (void 0 === r ? n : r) ? P(ko(w.values, e, t)) : Promise.resolve()
            );
          }),
          M = (0, $.useCallback)(
            function (e, t) {
              var n,
                r = t,
                a = e;
              if (!yo(e)) {
                e.persist && e.persist();
                var o = e.target ? e.target : e.currentTarget,
                  i = o.type,
                  l = o.name,
                  s = o.id,
                  u = o.value,
                  c = o.checked,
                  f = (o.outerHTML, o.options),
                  d = o.multiple;
                (r = t || l || s),
                  (a = /number|range/.test(i)
                    ? ((n = parseFloat(u)), isNaN(n) ? "" : n)
                    : /checkbox/.test(i)
                      ? (function (e, t, n) {
                          if ("boolean" === typeof e) return Boolean(t);
                          var r = [],
                            a = !1,
                            o = -1;
                          if (Array.isArray(e))
                            (r = e), (a = (o = e.indexOf(n)) >= 0);
                          else if (!n || "true" == n || "false" == n)
                            return Boolean(t);
                          if (t && n && !a) return r.concat(n);
                          if (!a) return r;
                          return r.slice(0, o).concat(r.slice(o + 1));
                        })(wo(w.values, r), c, u)
                      : f && d
                        ? (function (e) {
                            return Array.from(e)
                              .filter(function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                return e.value;
                              });
                          })(f)
                        : u);
              }
              r && A(r, a);
            },
            [A, w.values],
          ),
          D = Ro(function (e) {
            if (yo(e))
              return function (t) {
                return M(t, e);
              };
            M(e);
          }),
          U = Ro(function (e, t, n) {
            return (
              void 0 === t && (t = !0),
              k({ type: "SET_FIELD_TOUCHED", payload: { field: e, value: t } }),
              (void 0 === n ? a : n) ? P(w.values) : Promise.resolve()
            );
          }),
          V = (0, $.useCallback)(
            function (e, t) {
              e.persist && e.persist();
              var n = e.target,
                r = n.name,
                a = n.id,
                o = (n.outerHTML, t || r || a);
              U(o, !0);
            },
            [U],
          ),
          B = Ro(function (e) {
            if (yo(e))
              return function (t) {
                return V(t, e);
              };
            V(e);
          }),
          H = (0, $.useCallback)(function (e) {
            go(e)
              ? k({ type: "SET_FORMIK_STATE", payload: e })
              : k({
                  type: "SET_FORMIK_STATE",
                  payload: function () {
                    return e;
                  },
                });
          }, []),
          W = (0, $.useCallback)(function (e) {
            k({ type: "SET_STATUS", payload: e });
          }, []),
          Q = (0, $.useCallback)(function (e) {
            k({ type: "SET_ISSUBMITTING", payload: e });
          }, []),
          K = Ro(function () {
            return (
              k({ type: "SUBMIT_ATTEMPT" }),
              P().then(function (e) {
                var t = e instanceof Error;
                if (!t && 0 === Object.keys(e).length) {
                  var n;
                  try {
                    if (void 0 === (n = Y())) return;
                  } catch (r) {
                    throw r;
                  }
                  return Promise.resolve(n)
                    .then(function (e) {
                      return v.current && k({ type: "SUBMIT_SUCCESS" }), e;
                    })
                    .catch(function (e) {
                      if (v.current) throw (k({ type: "SUBMIT_FAILURE" }), e);
                    });
                }
                if (v.current && (k({ type: "SUBMIT_FAILURE" }), t)) throw e;
              })
            );
          }),
          q = Ro(function (e) {
            e && e.preventDefault && go(e.preventDefault) && e.preventDefault(),
              e &&
                e.stopPropagation &&
                go(e.stopPropagation) &&
                e.stopPropagation(),
              K().catch(function (e) {
                console.warn(
                  "Warning: An unhandled error was caught from submitForm()",
                  e,
                );
              });
          }),
          J = {
            resetForm: N,
            validateForm: P,
            validateField: L,
            setErrors: F,
            setFieldError: I,
            setFieldTouched: U,
            setFieldValue: A,
            setStatus: W,
            setSubmitting: Q,
            setTouched: j,
            setValues: z,
            setFormikState: H,
            submitForm: K,
          },
          Y = Ro(function () {
            return c(w.values, J);
          }),
          G = Ro(function (e) {
            e && e.preventDefault && go(e.preventDefault) && e.preventDefault(),
              e &&
                e.stopPropagation &&
                go(e.stopPropagation) &&
                e.stopPropagation(),
              N();
          }),
          X = (0, $.useCallback)(
            function (e) {
              return {
                value: wo(w.values, e),
                error: wo(w.errors, e),
                touched: !!wo(w.touched, e),
                initialValue: wo(p.current, e),
                initialTouched: !!wo(g.current, e),
                initialError: wo(h.current, e),
              };
            },
            [w.errors, w.touched, w.values],
          ),
          Z = (0, $.useCallback)(
            function (e) {
              return {
                setValue: function (t, n) {
                  return A(e, t, n);
                },
                setTouched: function (t, n) {
                  return U(e, t, n);
                },
                setError: function (t) {
                  return I(e, t);
                },
              };
            },
            [A, U, I],
          ),
          ee = (0, $.useCallback)(
            function (e) {
              var t = mo(e),
                n = t ? e.name : e,
                r = wo(w.values, n),
                a = { name: n, value: r, onChange: D, onBlur: B };
              if (t) {
                var o = e.type,
                  i = e.value,
                  l = e.as,
                  s = e.multiple;
                "checkbox" === o
                  ? void 0 === i
                    ? (a.checked = !!r)
                    : ((a.checked = !(!Array.isArray(r) || !~r.indexOf(i))),
                      (a.value = i))
                  : "radio" === o
                    ? ((a.checked = r === i), (a.value = i))
                    : "select" === l &&
                      s &&
                      ((a.value = a.value || []), (a.multiple = !0));
              }
              return a;
            },
            [B, D, w.values],
          ),
          te = (0, $.useMemo)(
            function () {
              return !Ba()(p.current, w.values);
            },
            [p.current, w.values],
          ),
          ne = (0, $.useMemo)(
            function () {
              return "undefined" !== typeof l
                ? te
                  ? w.errors && 0 === Object.keys(w.errors).length
                  : !1 !== l && go(l)
                    ? l(d)
                    : l
                : w.errors && 0 === Object.keys(w.errors).length;
            },
            [l, te, w.errors, d],
          );
        return io({}, w, {
          initialValues: p.current,
          initialErrors: h.current,
          initialTouched: g.current,
          initialStatus: m.current,
          handleBlur: B,
          handleChange: D,
          handleReset: G,
          handleSubmit: q,
          resetForm: N,
          setErrors: F,
          setFormikState: H,
          setFieldTouched: U,
          setFieldValue: A,
          setFieldError: I,
          setStatus: W,
          setSubmitting: Q,
          setTouched: j,
          setValues: z,
          submitForm: K,
          validateForm: P,
          validateField: L,
          isValid: ne,
          dirty: te,
          unregisterField: T,
          registerField: R,
          getFieldProps: ee,
          getFieldMeta: X,
          getFieldHelpers: Z,
          validateOnBlur: a,
          validateOnChange: n,
          validateOnMount: i,
        });
      }
      function Oo(e) {
        var t = Co(e),
          n = e.component,
          r = e.children,
          a = e.render,
          o = e.innerRef;
        return (
          (0, $.useImperativeHandle)(o, function () {
            return t;
          }),
          (0, $.createElement)(
            fo,
            { value: t },
            n
              ? (0, $.createElement)(n, t)
              : a
                ? a(t)
                : r
                  ? go(r)
                    ? r(t)
                    : bo(r)
                      ? null
                      : $.Children.only(r)
                  : null,
          )
        );
      }
      function Po(e) {
        var t = Array.isArray(e) ? [] : {};
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r = String(n);
            !0 === Array.isArray(e[r])
              ? (t[r] = e[r].map(function (e) {
                  return !0 === Array.isArray(e) || Bt(e)
                    ? Po(e)
                    : "" !== e
                      ? e
                      : void 0;
                }))
              : Bt(e[r])
                ? (t[r] = Po(e[r]))
                : (t[r] = "" !== e[r] ? e[r] : void 0);
          }
        return t;
      }
      function No(e, t, n) {
        var r = e.slice();
        return (
          t.forEach(function (t, a) {
            if ("undefined" === typeof r[a]) {
              var o = !1 !== n.clone && n.isMergeableObject(t);
              r[a] = o ? wt(Array.isArray(t) ? [] : {}, t, n) : t;
            } else
              n.isMergeableObject(t)
                ? (r[a] = wt(e[a], t, n))
                : -1 === e.indexOf(t) && r.push(t);
          }),
          r
        );
      }
      var Lo =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? $.useLayoutEffect
          : $.useEffect;
      function Ro(e) {
        var t = (0, $.useRef)(e);
        return (
          Lo(function () {
            t.current = e;
          }),
          (0, $.useCallback)(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return t.current.apply(void 0, n);
          }, [])
        );
      }
      function To(e) {
        var t = e.validate,
          n = e.name,
          r = e.render,
          a = e.children,
          o = e.as,
          i = e.component,
          l = e.className,
          s = so(e, [
            "validate",
            "name",
            "render",
            "children",
            "as",
            "component",
            "className",
          ]),
          u = so(po(), ["validate", "validationSchema"]);
        var c = u.registerField,
          f = u.unregisterField;
        (0, $.useEffect)(
          function () {
            return (
              c(n, { validate: t }),
              function () {
                f(n);
              }
            );
          },
          [c, f, n, t],
        );
        var d = u.getFieldProps(io({ name: n }, s)),
          p = u.getFieldMeta(n),
          h = { field: d, form: u };
        if (r) return r(io({}, h, { meta: p }));
        if (go(a)) return a(io({}, h, { meta: p }));
        if (i) {
          if ("string" === typeof i) {
            var g = s.innerRef,
              m = so(s, ["innerRef"]);
            return (0, $.createElement)(
              i,
              io({ ref: g }, d, m, { className: l }),
              a,
            );
          }
          return (0, $.createElement)(
            i,
            io({ field: d, form: u }, s, { className: l }),
            a,
          );
        }
        var v = o || "input";
        if ("string" === typeof v) {
          var y = s.innerRef,
            b = so(s, ["innerRef"]);
          return (0, $.createElement)(
            v,
            io({ ref: y }, d, b, { className: l }),
            a,
          );
        }
        return (0, $.createElement)(v, io({}, d, s, { className: l }), a);
      }
      var jo = (0, $.forwardRef)(function (e, t) {
        var n = e.action,
          r = so(e, ["action"]),
          a = null != n ? n : "#",
          o = po(),
          i = o.handleReset,
          l = o.handleSubmit;
        return (0, $.createElement)(
          "form",
          io({ onSubmit: l, ref: t, onReset: i, action: a }, r),
        );
      });
      jo.displayName = "Form";
      var Fo = function (e, t, n) {
          var r = zo(e);
          return r.splice(t, 0, n), r;
        },
        zo = function (e) {
          if (e) {
            if (Array.isArray(e)) return [].concat(e);
            var t = Object.keys(e)
              .map(function (e) {
                return parseInt(e);
              })
              .reduce(function (e, t) {
                return t > e ? t : e;
              }, 0);
            return Array.from(io({}, e, { length: t + 1 }));
          }
          return [];
        },
        Io = function (e, t) {
          var n = "function" === typeof e ? e : t;
          return function (e) {
            if (Array.isArray(e) || mo(e)) {
              var t = zo(e);
              return n(t);
            }
            return e;
          };
        },
        Ao = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).updateArrayField = function (
                e,
                t,
                r,
              ) {
                var a = n.props,
                  o = a.name;
                (0, a.formik.setFormikState)(function (n) {
                  var a = Io(r, e),
                    i = Io(t, e),
                    l = ko(n.values, o, e(wo(n.values, o))),
                    s = r ? a(wo(n.errors, o)) : void 0,
                    u = t ? i(wo(n.touched, o)) : void 0;
                  return (
                    ho(s) && (s = void 0),
                    ho(u) && (u = void 0),
                    io({}, n, {
                      values: l,
                      errors: r ? ko(n.errors, o, s) : n.errors,
                      touched: t ? ko(n.touched, o, u) : n.touched,
                    })
                  );
                });
              }),
              (n.push = function (e) {
                return n.updateArrayField(
                  function (t) {
                    return [].concat(zo(t), [Va(e)]);
                  },
                  !1,
                  !1,
                );
              }),
              (n.handlePush = function (e) {
                return function () {
                  return n.push(e);
                };
              }),
              (n.swap = function (e, t) {
                return n.updateArrayField(
                  function (n) {
                    return (function (e, t, n) {
                      var r = zo(e),
                        a = r[t];
                      return (r[t] = r[n]), (r[n] = a), r;
                    })(n, e, t);
                  },
                  !0,
                  !0,
                );
              }),
              (n.handleSwap = function (e, t) {
                return function () {
                  return n.swap(e, t);
                };
              }),
              (n.move = function (e, t) {
                return n.updateArrayField(
                  function (n) {
                    return (function (e, t, n) {
                      var r = zo(e),
                        a = r[t];
                      return r.splice(t, 1), r.splice(n, 0, a), r;
                    })(n, e, t);
                  },
                  !0,
                  !0,
                );
              }),
              (n.handleMove = function (e, t) {
                return function () {
                  return n.move(e, t);
                };
              }),
              (n.insert = function (e, t) {
                return n.updateArrayField(
                  function (n) {
                    return Fo(n, e, t);
                  },
                  function (t) {
                    return Fo(t, e, null);
                  },
                  function (t) {
                    return Fo(t, e, null);
                  },
                );
              }),
              (n.handleInsert = function (e, t) {
                return function () {
                  return n.insert(e, t);
                };
              }),
              (n.replace = function (e, t) {
                return n.updateArrayField(
                  function (n) {
                    return (function (e, t, n) {
                      var r = zo(e);
                      return (r[t] = n), r;
                    })(n, e, t);
                  },
                  !1,
                  !1,
                );
              }),
              (n.handleReplace = function (e, t) {
                return function () {
                  return n.replace(e, t);
                };
              }),
              (n.unshift = function (e) {
                var t = -1;
                return (
                  n.updateArrayField(
                    function (n) {
                      var r = n ? [e].concat(n) : [e];
                      return (t = r.length), r;
                    },
                    function (e) {
                      return e ? [null].concat(e) : [null];
                    },
                    function (e) {
                      return e ? [null].concat(e) : [null];
                    },
                  ),
                  t
                );
              }),
              (n.handleUnshift = function (e) {
                return function () {
                  return n.unshift(e);
                };
              }),
              (n.handleRemove = function (e) {
                return function () {
                  return n.remove(e);
                };
              }),
              (n.handlePop = function () {
                return function () {
                  return n.pop();
                };
              }),
              (n.remove = n.remove.bind(uo(n))),
              (n.pop = n.pop.bind(uo(n))),
              n
            );
          }
          lo(t, e);
          var n = t.prototype;
          return (
            (n.componentDidUpdate = function (e) {
              this.props.validateOnChange &&
                this.props.formik.validateOnChange &&
                !Ba()(
                  wo(e.formik.values, e.name),
                  wo(this.props.formik.values, this.props.name),
                ) &&
                this.props.formik.validateForm(this.props.formik.values);
            }),
            (n.remove = function (e) {
              var t;
              return (
                this.updateArrayField(
                  function (n) {
                    var r = n ? zo(n) : [];
                    return (
                      t || (t = r[e]),
                      go(r.splice) && r.splice(e, 1),
                      go(r.every) &&
                      r.every(function (e) {
                        return void 0 === e;
                      })
                        ? []
                        : r
                    );
                  },
                  !0,
                  !0,
                ),
                t
              );
            }),
            (n.pop = function () {
              var e;
              return (
                this.updateArrayField(
                  function (t) {
                    var n = t.slice();
                    return e || (e = n && n.pop && n.pop()), n;
                  },
                  !0,
                  !0,
                ),
                e
              );
            }),
            (n.render = function () {
              var e = {
                  push: this.push,
                  pop: this.pop,
                  swap: this.swap,
                  move: this.move,
                  insert: this.insert,
                  replace: this.replace,
                  unshift: this.unshift,
                  remove: this.remove,
                  handlePush: this.handlePush,
                  handlePop: this.handlePop,
                  handleSwap: this.handleSwap,
                  handleMove: this.handleMove,
                  handleInsert: this.handleInsert,
                  handleReplace: this.handleReplace,
                  handleUnshift: this.handleUnshift,
                  handleRemove: this.handleRemove,
                },
                t = this.props,
                n = t.component,
                r = t.render,
                a = t.children,
                o = t.name,
                i = io({}, e, {
                  form: so(t.formik, ["validate", "validationSchema"]),
                  name: o,
                });
              return n
                ? (0, $.createElement)(n, i)
                : r
                  ? r(i)
                  : a
                    ? "function" === typeof a
                      ? a(i)
                      : bo(a)
                        ? null
                        : $.Children.only(a)
                    : null;
            }),
            t
          );
        })($.Component);
      Ao.defaultProps = { validateOnChange: !0 };
      const Mo = () =>
          (0, ht.jsxs)(ht.Fragment, {
            children: [
              (0, ht.jsx)("p", { children: "\u0424\u043e\u0440\u043c\u0430" }),
              (0, ht.jsx)(Oo, {
                initialValues: { email: "", password: "" },
                onSubmit: (e) => {
                  console.log("values", e);
                },
                children: (0, ht.jsxs)(jo, {
                  children: [
                    (0, ht.jsx)(To, { type: "email", name: "email" }),
                    (0, ht.jsx)(To, { type: "password", name: "password" }),
                    (0, ht.jsx)("button", {
                      type: "submit",
                      children:
                        "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
                    }),
                  ],
                }),
              }),
            ],
          }),
        Do = () =>
          (0, ht.jsx)(ft, {
            children: (0, ht.jsxs)(st, {
              children: [
                (0, ht.jsx)(it, { path: "/", element: (0, ht.jsx)(gt, {}) }),
                (0, ht.jsx)(it, {
                  path: "*",
                  element: (0, ht.jsx)("div", { children: " 404 (not found)" }),
                }),
                (0, ht.jsx)(it, {
                  path: "login",
                  element: (0, ht.jsx)(Mo, {}),
                }),
              ],
            }),
          }),
        Uo = { ru: {} },
        Vo = async () => {
          const e = V.createInstance();
          return (
            await e.use(J).init({ resources: Uo, fallbackLng: "ru" }),
            (0, ht.jsx)(G, { i18n: e, children: (0, ht.jsx)(Do, {}) })
          );
        };
      (async () => {
        e.createRoot(document.getElementById("root")).render(await Vo());
      })();
    })();
})();
//# sourceMappingURL=main.a4c1c044.js.map
