"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 20);
}([function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(8),
      r = n(3);
  t.ArrayStrategy = r["default"], t["default"] = o["default"];
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(45);

  function r(e, t, n, o) {
    var r = e(o, n),
        i = r.maxVisibleItemsOverride > -1 ? r.maxVisibleItemsOverride : n.behavior.maxVisibleItems,
        a = o.item.length > i,
        u = o.sumItemsHeight(i);
    t.open(u, r.type, a);
  }

  t.dispatchOpen = r;
  var i = r.bind(null, o["default"]);
  t["default"] = i;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e) {
    return e.reduce(function (e, t) {
      if ("string" == typeof t) e.push(t);else {
        var n = t[0],
            o = t[1];
        n && e.push(o);
      }
      return e;
    }, []).join(" ");
  };
}, function (e, t, n) {
  "use strict";

  var o;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    e.PUSH = "PUSH", e.REPLACE = "REPLACE";
  }(o || (o = {})), t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e, t, n) {
    void 0 === n && (n = !1);
    var o = e.parentNode;
    if (n && e.matches(t)) return e;

    for (; o && o !== document.body;) {
      if (o.matches && o.matches(t)) return o;
      if (!o.parentNode) return null;
      o = o.parentNode;
    }

    return null;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.OPTION = '[data-ref~="option"]';
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] = function (e, t) {
    var n = t.actions,
        o = t.timers;
    window.clearTimeout(o.keyingTimeoutId), n.keying(), o.keyingTimeoutId = window.setTimeout(function () {
      return n.resetKeying();
    }, 100), e.disabled = !0, setTimeout(function () {
      e.disabled = !1, e.focus();
    });
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t["default"] = [];
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(30),
      r = n(3),
      i = n(31),
      a = n(32),
      u = n(33),
      s = n(9);

  function l(e, t, n) {
    void 0 === n && (n = null);
    var a,
        c = "undefined" != typeof window,
        d = [];
    if (a = n instanceof o["default"] ? n : new o["default"](), "boolean" == typeof n && !0 === n) a.deep = !0;else if (n && a !== n && "object" == _typeof(n) && (l(a, n), [r["default"].PUSH, r["default"].REPLACE].indexOf(a.arrayStrategy) < 0)) throw RangeError(s.INVALID_ARRAY_STRATEGY(a.arrayStrategy));
    if (!e || "object" != _typeof(e)) throw new TypeError(s.TYPE_ERROR_TARGET(e));
    if (!t || "object" != _typeof(t)) throw new TypeError(s.TYPE_ERROR_SOURCE(t));

    if (Array.isArray(t)) {
      if (a.arrayStrategy === r["default"].PUSH) return e.push.apply(e, t), e;

      for (var f = 0; f < t.length; f++) {
        d.push(f.toString());
      }
    } else d = Object.getOwnPropertyNames(t);

    for (var p = 0, h = d; p < h.length; p++) {
      var v = h[p],
          b = Object.getOwnPropertyDescriptor(t, v);
      if (("function" != typeof b.get || b.set || a.includeReadOnly) && (b.enumerable || a.includeNonEmurable)) if (!a.deep || "object" != _typeof(t[v]) || c && t[v] instanceof window.Node || c && t[v] === window.document.body || c && t[v] === window.document.documentElement || null === t[v] || Array.isArray(t[v]) && a.useReferenceIfArray || !e[v] && a.useReferenceIfTargetUnset) try {
        e[v] = t[v];
      } catch (t) {
        u["default"](t, e, v, a.errorMessage);
      } else {
        if (!Object.prototype.hasOwnProperty.call(e, v) || null === e[v]) try {
          e[v] = Array.isArray(t[v]) ? [] : a.preserveTypeIfTargetUnset ? i["default"](t[v]) : {};
        } catch (t) {
          u["default"](t, e, v, a.errorMessage);
        }
        l(e[v], t[v], a);
      }
    }

    return e;
  }

  Object.keys(a["default"].prototype).forEach(function (e) {
    return l[e] = function (e) {
      return function () {
        for (var t, n = [], o = 0; o < arguments.length; o++) {
          n[o] = arguments[o];
        }

        return (t = new a["default"]())[e].apply(t, n);
      };
    }(e);
  }), t["default"] = l;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.MERGE_ERROR = function (e, t) {
    return void 0 === t && (t = ""), 'Unknown property "' + e + '"' + (t ? '. Did you mean "' + t + '"?' : "");
  }, t.TYPE_ERROR_TARGET = function (e) {
    return '[Helpful Merge] Target "' + e + '" must be a valid object';
  }, t.TYPE_ERROR_SOURCE = function (e) {
    return '[Helpful Merge] Source "' + e + '" must be a valid object';
  }, t.INVALID_ARRAY_STRATEGY = function (e) {
    return '[Helpful Merge] Invalid array strategy "' + e + '"';
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(34),
      r = n(35),
      i = n(36),
      a = function a() {
    this.callbacks = new r["default"](), this.classNames = new i["default"](), this.behavior = new o["default"](), Object.seal(this);
  };

  t["default"] = a;
}, function (e, t, n) {
  "use strict";

  var o;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    e.NONE = "NONE", e.TOP = "TOP", e.BOTTOM = "BOTTOM";
  }(o || (o = {})), t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.UP = 38, t.DOWN = 40, t.SPACE = 32, t.ENTER = 13, t.ESC = 27;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e, t) {
    var n = t.state,
        o = t.actions,
        r = t.dom;
    n.isOpen && (o.close(), r.select.blur());
  };
}, function (e, t, n) {
  "use strict";

  var o;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    e.ADD = "ADD", e.EDIT = "EDIT", e.REMOVE = "REMOVE";
  }(o || (o = {})), t["default"] = o;
}, function (e, t, n) {
  "use strict";

  var o;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    e.NONE = "NONE", e.FULL = "FULL", e.REPLACE = "REPLACE", e.INNER = "INNER", e.OUTER = "OUTER";
  }(o = t.DomChangeType || (t.DomChangeType = {})), t["default"] = o;
}, function (e, t, n) {
  "use strict";

  var o;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    e.CLOSED = "CLOSED", e.OPEN_ABOVE = "OPEN_ABOVE", e.OPEN_BELOW = "OPEN_BELOW";
  }(o || (o = {})), t["default"] = o;
}, function (e, t, n) {
  "use strict";

  var o;
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), function (e) {
    e.AT_TOP = "AT_TOP", e.SCROLLED = "SCROLLED", e.AT_BOTTOM = "AT_BOTTOM";
  }(o || (o = {})), t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function () {
    function e() {
      this.label = "", this.options = [], this.isDisabled = !1;
    }

    return Object.defineProperty(e.prototype, "totalOptions", {
      get: function get() {
        return this.options.length;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "hasLabel", {
      get: function get() {
        return "" !== this.label;
      },
      enumerable: !0,
      configurable: !0
    }), e;
  }();

  t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function o() {
    this.label = "", this.value = "", this.isDisabled = !1;
  };

  t["default"] = o;
}, function (e, t, n) {
  n(21), n(24), n(78), e.exports = n(79);
}, function (e, t, n) {
  (function (e) {
    var t, o, r;
    !function e(n, o, r) {
      function i(u, s) {
        if (!o[u]) {
          if (!n[u]) {
            if (!s && "function" == typeof t && t) return t(u, !0);
            if (a) return a(u, !0);
            var l = new Error("Cannot find module '" + u + "'");
            throw l.code = "MODULE_NOT_FOUND", l;
          }

          var c = o[u] = {
            exports: {}
          };
          n[u][0].call(c.exports, function (e) {
            return i(n[u][1][e] || e);
          }, c, c.exports, e, n, o, r);
        }

        return o[u].exports;
      }

      for (var a = "function" == typeof t && t, u = 0; u < r.length; u++) {
        i(r[u]);
      }

      return i;
    }({
      1: [function (e, t, n) {
        "use strict";
        /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

        "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (e) {
          if ("Element" in e) {
            var t = e.Element.prototype,
                n = Object,
                o = String.prototype.trim || function () {
              return this.replace(/^\s+|\s+$/g, "");
            },
                r = Array.prototype.indexOf || function (e) {
              for (var t = 0, n = this.length; t < n; t++) {
                if (t in this && this[t] === e) return t;
              }

              return -1;
            },
                i = function i(e, t) {
              this.name = e, this.code = DOMException[e], this.message = t;
            },
                a = function a(e, t) {
              if ("" === t) throw new i("SYNTAX_ERR", "An invalid or illegal string was specified");
              if (/\s/.test(t)) throw new i("INVALID_CHARACTER_ERR", "String contains an invalid character");
              return r.call(e, t);
            },
                u = function u(e) {
              for (var t = o.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], r = 0, i = n.length; r < i; r++) {
                this.push(n[r]);
              }

              this._updateClassName = function () {
                e.setAttribute("class", this.toString());
              };
            },
                s = u.prototype = [],
                l = function l() {
              return new u(this);
            };

            if (i.prototype = Error.prototype, s.item = function (e) {
              return this[e] || null;
            }, s.contains = function (e) {
              return -1 !== a(this, e += "");
            }, s.add = function () {
              var e,
                  t = arguments,
                  n = 0,
                  o = t.length,
                  r = !1;

              do {
                e = t[n] + "", -1 === a(this, e) && (this.push(e), r = !0);
              } while (++n < o);

              r && this._updateClassName();
            }, s.remove = function () {
              var e,
                  t,
                  n = arguments,
                  o = 0,
                  r = n.length,
                  i = !1;

              do {
                for (e = n[o] + "", t = a(this, e); -1 !== t;) {
                  this.splice(t, 1), i = !0, t = a(this, e);
                }
              } while (++o < r);

              i && this._updateClassName();
            }, s.toggle = function (e, t) {
              e += "";
              var n = this.contains(e),
                  o = n ? !0 !== t && "remove" : !1 !== t && "add";
              return o && this[o](e), !0 === t || !1 === t ? t : !n;
            }, s.toString = function () {
              return this.join(" ");
            }, n.defineProperty) {
              var c = {
                get: l,
                enumerable: !0,
                configurable: !0
              };

              try {
                n.defineProperty(t, "classList", c);
              } catch (e) {
                void 0 !== e.number && -2146823252 !== e.number || (c.enumerable = !1, n.defineProperty(t, "classList", c));
              }
            } else n.prototype.__defineGetter__ && t.__defineGetter__("classList", l);
          }
        }(window.self), function () {
          var e = document.createElement("_");

          if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function t(e) {
              var t = DOMTokenList.prototype[e];

              DOMTokenList.prototype[e] = function (e) {
                var n,
                    o = arguments.length;

                for (n = 0; n < o; n++) {
                  e = arguments[n], t.call(this, e);
                }
              };
            };

            t("add"), t("remove");
          }

          if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;

            DOMTokenList.prototype.toggle = function (e, t) {
              return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e);
            };
          }

          e = null;
        }());
      }, {}],
      2: [function (e, t, i) {
        "use strict";

        var a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        };
        /*!
          * domready (c) Dustin Diaz 2014 - License MIT
          */

        !function (e, u) {
          void 0 !== t ? t.exports = u() : "object" == a(n(23)) ? void 0 === (r = "function" == typeof (o = u) ? o.call(i, n, i, t) : o) || (t.exports = r) : this.domready = u();
        }(0, function () {
          var _e,
              t = [],
              n = document,
              o = n.documentElement.doScroll,
              r = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);

          return r || n.addEventListener("DOMContentLoaded", _e = function e() {
            for (n.removeEventListener("DOMContentLoaded", _e), r = 1; _e = t.shift();) {
              _e();
            }
          }), function (e) {
            r ? setTimeout(e, 0) : t.push(e);
          };
        });
      }, {}],
      3: [function (e, t, n) {
        "use strict";

        var o;
        t.exports = ((o = document.createElement("div")).setAttribute("data-a-b", "c"), Boolean(o.dataset && "c" === o.dataset.aB) ? function (e) {
          return e.dataset;
        } : function (e) {
          var t = {},
              n = e.attributes;

          function o() {
            return this.value;
          }

          function r(e, t) {
            void 0 === t ? this.removeAttribute(e) : this.setAttribute(e, t);
          }

          for (var i = 0, a = n.length; i < a; i++) {
            var u = n[i];

            if (u) {
              var s = u.name;

              if (0 === s.indexOf("data-")) {
                var l = s.slice(5).replace(/-./g, function (e) {
                  return e.charAt(1).toUpperCase();
                }),
                    c = u.value;
                Object.defineProperty(t, l, {
                  enumerable: !0,
                  get: o.bind({
                    value: c || ""
                  }),
                  set: r.bind(e, s)
                });
              }
            }
          }

          return t;
        });
      }, {}],
      4: [function (e, t, n) {
        "use strict";

        var o;
        "function" != typeof (o = window.Element.prototype).matches && (o.matches = o.msMatchesSelector || o.mozMatchesSelector || o.webkitMatchesSelector || function (e) {
          for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = 0; t[n] && t[n] !== this;) {
            ++n;
          }

          return Boolean(t[n]);
        }), "function" != typeof o.closest && (o.closest = function (e) {
          for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode;
          }

          return null;
        });
      }, {}],
      5: [function (e, t, i) {
        "use strict";

        !function () {
          var e,
              a = {
            polyfill: function polyfill() {
              if (!("KeyboardEvent" in window) || "key" in KeyboardEvent.prototype) return !1;
              var e = {
                get: function get(e) {
                  var t = a.keys[this.which || this.keyCode];
                  return Array.isArray(t) && (t = t[+this.shiftKey]), t;
                }
              };
              return Object.defineProperty(KeyboardEvent.prototype, "key", e), e;
            },
            keys: {
              3: "Cancel",
              6: "Help",
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
              28: "Convert",
              29: "NonConvert",
              30: "Accept",
              31: "ModeChange",
              32: " ",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "ArrowLeft",
              38: "ArrowUp",
              39: "ArrowRight",
              40: "ArrowDown",
              41: "Select",
              42: "Print",
              43: "Execute",
              44: "PrintScreen",
              45: "Insert",
              46: "Delete",
              48: ["0", ")"],
              49: ["1", "!"],
              50: ["2", "@"],
              51: ["3", "#"],
              52: ["4", "$"],
              53: ["5", "%"],
              54: ["6", "^"],
              55: ["7", "&"],
              56: ["8", "*"],
              57: ["9", "("],
              91: "OS",
              93: "ContextMenu",
              144: "NumLock",
              145: "ScrollLock",
              181: "VolumeMute",
              182: "VolumeDown",
              183: "VolumeUp",
              186: [";", ":"],
              187: ["=", "+"],
              188: [",", "<"],
              189: ["-", "_"],
              190: [".", ">"],
              191: ["/", "?"],
              192: ["`", "~"],
              219: ["[", "{"],
              220: ["\\", "|"],
              221: ["]", "}"],
              222: ["'", '"'],
              224: "Meta",
              225: "AltGraph",
              246: "Attn",
              247: "CrSel",
              248: "ExSel",
              249: "EraseEof",
              250: "Play",
              251: "ZoomOut"
            }
          };

          for (e = 1; e < 25; e++) {
            a.keys[111 + e] = "F" + e;
          }

          var u = "";

          for (e = 65; e < 91; e++) {
            u = String.fromCharCode(e), a.keys[e] = [u.toLowerCase(), u.toUpperCase()];
          }

          void 0 === (r = "function" == typeof (o = a) ? o.call(i, n, i, t) : o) || (t.exports = r);
        }();
      }, {}],
      6: [function (t, n, o) {
        (function (e) {
          "use strict";

          var t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
            return _typeof(e);
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
          },
              o = "Expected a function",
              r = NaN,
              i = "[object Symbol]",
              a = /^\s+|\s+$/g,
              u = /^[-+]0x[0-9a-f]+$/i,
              s = /^0b[01]+$/i,
              l = /^0o[0-7]+$/i,
              c = parseInt,
              d = "object" == (void 0 === e ? "undefined" : t(e)) && e && e.Object === Object && e,
              f = "object" == ("undefined" == typeof self ? "undefined" : t(self)) && self && self.Object === Object && self,
              p = d || f || Function("return this")(),
              h = Object.prototype.toString,
              v = Math.max,
              b = Math.min,
              y = function y() {
            return p.Date.now();
          };

          function g(e) {
            var n = void 0 === e ? "undefined" : t(e);
            return !!e && ("object" == n || "function" == n);
          }

          function m(e) {
            return "symbol" == (void 0 === e ? "undefined" : t(e)) || function (e) {
              return !!e && "object" == (void 0 === e ? "undefined" : t(e));
            }(e) && h.call(e) == i;
          }

          function O(e) {
            if ("number" == typeof e) return e;
            if (m(e)) return r;

            if (g(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = g(t) ? t + "" : t;
            }

            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(a, "");
            var n = s.test(e);
            return n || l.test(e) ? c(e.slice(2), n ? 2 : 8) : u.test(e) ? r : +e;
          }

          n.exports = function (e, t, n) {
            var r,
                i,
                a,
                u,
                s,
                l,
                c = 0,
                d = !1,
                f = !1,
                p = !0;
            if ("function" != typeof e) throw new TypeError(o);

            function h(t) {
              var n = r,
                  o = i;
              return r = i = void 0, c = t, u = e.apply(o, n);
            }

            function m(e) {
              var n = e - l;
              return void 0 === l || n >= t || n < 0 || f && e - c >= a;
            }

            function w() {
              var e = y();
              if (m(e)) return E(e);
              s = setTimeout(w, function (e) {
                var n = t - (e - l);
                return f ? b(n, a - (e - c)) : n;
              }(e));
            }

            function E(e) {
              return s = void 0, p && r ? h(e) : (r = i = void 0, u);
            }

            function _() {
              var e = y(),
                  n = m(e);

              if (r = arguments, i = this, l = e, n) {
                if (void 0 === s) return function (e) {
                  return c = e, s = setTimeout(w, t), d ? h(e) : u;
                }(l);
                if (f) return s = setTimeout(w, t), h(l);
              }

              return void 0 === s && (s = setTimeout(w, t)), u;
            }

            return t = O(t) || 0, g(n) && (d = !!n.leading, a = (f = "maxWait" in n) ? v(O(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p), _.cancel = function () {
              void 0 !== s && clearTimeout(s), c = 0, r = l = i = s = void 0;
            }, _.flush = function () {
              return void 0 === s ? u : E(y());
            }, _;
          };
        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}],
      7: [function (e, t, n) {
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        "use strict";

        var o = Object.getOwnPropertySymbols,
            r = Object.prototype.hasOwnProperty,
            i = Object.prototype.propertyIsEnumerable;

        function a(e) {
          if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e);
        }

        t.exports = function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;

            for (var t = {}, n = 0; n < 10; n++) {
              t["_" + String.fromCharCode(n)] = n;
            }

            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
              return t[e];
            }).join("")) return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (e) {
              o[e] = e;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("");
          } catch (e) {
            return !1;
          }
        }() ? Object.assign : function (e, t) {
          for (var n, u, s = a(e), l = 1; l < arguments.length; l++) {
            for (var c in n = Object(arguments[l])) {
              r.call(n, c) && (s[c] = n[c]);
            }

            if (o) {
              u = o(n);

              for (var d = 0; d < u.length; d++) {
                i.call(n, u[d]) && (s[u[d]] = n[u[d]]);
              }
            }
          }

          return s;
        };
      }, {}],
      8: [function (e, t, n) {
        "use strict";

        var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        },
            r = e("object-assign"),
            i = e("../delegate"),
            a = e("../delegateAll"),
            u = /^(.+):delegate\((.+)\)$/,
            s = function s(e, t) {
          var n = e[t];
          return delete e[t], n;
        };

        t.exports = function (e, t) {
          var n = Object.keys(e).reduce(function (t, n) {
            var l = function (e, t) {
              var n,
                  l,
                  c = e.match(u);
              c && (e = c[1], n = c[2]), "object" === (void 0 === t ? "undefined" : o(t)) && (l = {
                capture: s(t, "capture"),
                passive: s(t, "passive")
              });
              var d = {
                selector: n,
                delegate: "object" === (void 0 === t ? "undefined" : o(t)) ? a(t) : n ? i(n, t) : t,
                options: l
              };
              return e.indexOf(" ") > -1 ? e.split(" ").map(function (e) {
                return r({
                  type: e
                }, d);
              }) : (d.type = e, [d]);
            }(n, e[n]);

            return t.concat(l);
          }, []);
          return r({
            add: function add(e) {
              n.forEach(function (t) {
                e.addEventListener(t.type, t.delegate, t.options);
              });
            },
            remove: function remove(e) {
              n.forEach(function (t) {
                e.removeEventListener(t.type, t.delegate, t.options);
              });
            }
          }, t);
        };
      }, {
        "../delegate": 10,
        "../delegateAll": 11,
        "object-assign": 7
      }],
      9: [function (e, t, n) {
        "use strict";

        t.exports = function (e) {
          return function (t) {
            return e.some(function (e) {
              return !1 === e.call(this, t);
            }, this);
          };
        };
      }, {}],
      10: [function (e, t, n) {
        "use strict";

        e("element-closest"), t.exports = function (e, t) {
          return function (n) {
            var o = n.target.closest(e);
            if (o) return t.call(o, n);
          };
        };
      }, {
        "element-closest": 4
      }],
      11: [function (e, t, n) {
        "use strict";

        var o = e("../delegate"),
            r = e("../compose");

        t.exports = function (e) {
          var t = Object.keys(e);
          if (1 === t.length && "*" === t[0]) return e["*"];
          var n = t.reduce(function (t, n) {
            return t.push(o(n, e[n])), t;
          }, []);
          return r(n);
        };
      }, {
        "../compose": 9,
        "../delegate": 10
      }],
      12: [function (e, t, n) {
        "use strict";

        t.exports = function (e, t) {
          return function (n) {
            if (e !== n.target && !e.contains(n.target)) return t.call(this, n);
          };
        };
      }, {}],
      13: [function (e, t, n) {
        "use strict";

        t.exports = {
          behavior: e("./behavior"),
          delegate: e("./delegate"),
          delegateAll: e("./delegateAll"),
          ignore: e("./ignore"),
          keymap: e("./keymap")
        };
      }, {
        "./behavior": 8,
        "./delegate": 10,
        "./delegateAll": 11,
        "./ignore": 12,
        "./keymap": 14
      }],
      14: [function (e, t, n) {
        "use strict";

        e("keyboardevent-key-polyfill");
        var o = {
          Alt: "altKey",
          Control: "ctrlKey",
          Ctrl: "ctrlKey",
          Shift: "shiftKey"
        };
        t.exports = function (e) {
          var t = Object.keys(e).some(function (e) {
            return e.indexOf("+") > -1;
          });
          return function (n) {
            var r = function (e, t) {
              var n = e.key;
              if (t) for (var r in o) {
                !0 === e[o[r]] && (n = [r, n].join("+"));
              }
              return n;
            }(n, t);

            return [r, r.toLowerCase()].reduce(function (t, o) {
              return o in e && (t = e[r].call(this, n)), t;
            }, void 0);
          };
        }, t.exports.MODIFIERS = o;
      }, {
        "keyboardevent-key-polyfill": 5
      }],
      15: [function (e, t, n) {
        "use strict";

        t.exports = function (e, t) {
          var n = function n(o) {
            return o.currentTarget.removeEventListener(o.type, n, t), e.call(this, o);
          };

          return n;
        };
      }, {}],
      16: [function (e, t, n) {
        "use strict";

        var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        },
            r = /(^\s+)|(\s+$)/g,
            i = /\s+/,
            a = String.prototype.trim ? function (e) {
          return e.trim();
        } : function (e) {
          return e.replace(r, "");
        },
            u = function u(e) {
          return this.querySelector('[id="' + e.replace(/"/g, '\\"') + '"]');
        };

        t.exports = function (e, t) {
          if ("string" != typeof e) throw new Error("Expected a string but got " + (void 0 === e ? "undefined" : o(e)));
          t || (t = window.document);
          var n = t.getElementById ? t.getElementById.bind(t) : u.bind(t);
          return 1 === (e = a(e).split(i)).length && "" === e[0] ? [] : e.map(function (e) {
            var t = n(e);
            if (!t) throw new Error('no element with id: "' + e + '"');
            return t;
          });
        };
      }, {}],
      17: [function (e, t, n) {
        "use strict";

        function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        var r = e("../utils/select"),
            i = e("../utils/behavior"),
            a = e("../utils/toggle"),
            u = e("../utils/is-in-viewport"),
            s = e("../events").CLICK,
            l = e("../config").prefix,
            c = "." + l + "-accordion, ." + l + "-accordion--bordered",
            d = "." + l + "-accordion__button[aria-controls]",
            f = function f(e) {
          return r(d, e).filter(function (t) {
            return t.closest(c) === e;
          });
        },
            p = function p(e, t) {
          var n,
              o = e.closest(c);
          if (!o) throw new Error(d + " is missing outer " + c);
          n = a(e, t);
          var r = "true" === o.getAttribute("aria-multiselectable");
          n && !r && f(o).forEach(function (t) {
            t !== e && a(t, !1);
          });
        },
            h = i(o({}, s, o({}, d, function (e) {
          e.preventDefault(), p(this), "true" === this.getAttribute("aria-expanded") && (u(this) || this.scrollIntoView());
        })), {
          init: function init(e) {
            r(d, e).forEach(function (e) {
              var t = "true" === e.getAttribute("aria-expanded");
              p(e, t);
            });
          },
          ACCORDION: c,
          BUTTON: d,
          show: function show(e) {
            return p(e, !0);
          },
          hide: function hide(e) {
            return p(e, !1);
          },
          toggle: p,
          getButtons: f
        });

        t.exports = h;
      }, {
        "../config": 26,
        "../events": 27,
        "../utils/behavior": 32,
        "../utils/is-in-viewport": 34,
        "../utils/select": 35,
        "../utils/toggle": 38
      }],
      18: [function (e, t, n) {
        "use strict";

        function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        var r = e("../utils/behavior"),
            i = e("../events").CLICK,
            a = e("../config").prefix,
            u = "." + a + "-banner__header",
            s = a + "-banner__header--expanded";
        t.exports = r(o({}, i, o({}, u + " [aria-controls]", function (e) {
          e.preventDefault(), this.closest(u).classList.toggle(s);
        })));
      }, {
        "../config": 26,
        "../events": 27,
        "../utils/behavior": 32
      }],
      19: [function (e, t, n) {
        "use strict";

        function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        var r = e("lodash.debounce"),
            i = e("../utils/behavior"),
            a = e("../utils/select"),
            u = e("../events").CLICK,
            s = e("../config").prefix,
            l = "hidden",
            c = "." + s + "-footer--big" + " nav",
            d = c + " ." + s + "-footer__primary-link",
            f = "." + s + "-footer__primary-content--collapsible",
            p = 480;
        var h = void 0,
            v = r(function () {
          if (h !== window.innerWidth) {
            h = window.innerWidth;
            var e = window.innerWidth < p;
            a(f).forEach(function (t) {
              return t.classList.toggle(l, e);
            });
          }
        }, 180);
        t.exports = i(o({}, u, o({}, d, function () {
          if (window.innerWidth < p) {
            var e = this.closest(f);
            e.classList.toggle(l), a(f, e.closest(c)).forEach(function (t) {
              t !== e && t.classList.add(l);
            });
          }
        })), {
          HIDE_MAX_WIDTH: p,
          DEBOUNCE_RATE: 180,
          init: function init() {
            v(), window.addEventListener("resize", v);
          },
          teardown: function teardown() {
            window.removeEventListener("resize", v);
          }
        });
      }, {
        "../config": 26,
        "../events": 27,
        "../utils/behavior": 32,
        "../utils/select": 35,
        "lodash.debounce": 6
      }],
      20: [function (e, t, n) {
        "use strict";

        var o = e("./accordion"),
            r = e("./banner"),
            i = e("./footer"),
            a = e("./navigation"),
            u = e("./password"),
            s = e("./search"),
            l = e("./skipnav"),
            c = e("./validator");
        t.exports = {
          accordion: o,
          banner: r,
          footer: i,
          navigation: a,
          password: u,
          search: s,
          skipnav: l,
          validator: c
        };
      }, {
        "./accordion": 17,
        "./banner": 18,
        "./footer": 19,
        "./navigation": 21,
        "./password": 22,
        "./search": 23,
        "./skipnav": 24,
        "./validator": 25
      }],
      21: [function (e, t, n) {
        "use strict";

        var o;

        function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        var i = e("../utils/behavior"),
            a = e("../utils/select"),
            u = e("../utils/toggle"),
            s = e("../utils/focus-trap"),
            l = e("./accordion"),
            c = e("../events").CLICK,
            d = e("../config").prefix,
            f = "." + d + "-nav",
            p = f + " a",
            h = "button." + d + "-nav__link",
            v = "." + d + "-menu-btn",
            b = "." + d + "-nav__close",
            y = b + ", ." + d + "-overlay",
            g = [f, "." + d + "-overlay"].join(", "),
            m = void 0,
            O = void 0,
            w = function w() {
          return document.body.classList.contains("usa-js-mobile-nav--active");
        },
            E = function E(e) {
          var t = document.body,
              n = "boolean" == typeof e ? e : !w();
          t.classList.toggle("usa-js-mobile-nav--active", n), a(g).forEach(function (e) {
            return e.classList.toggle("is-visible", n);
          }), m.focusTrap.update(n);
          var o = t.querySelector(b),
              r = t.querySelector(v);
          return n && o ? o.focus() : !n && document.activeElement === o && r && r.focus(), n;
        },
            _ = function _() {
          var e = document.body.querySelector(b);
          w() && e && 0 === e.getBoundingClientRect().width && m.toggleNav.call(e, !1);
        },
            j = function j() {
          return m.toggleNav.call(m, !1);
        },
            P = function P() {
          u(O, !1), O = null;
        };

        m = i(r({}, c, (r(o = {}, h, function () {
          return O && O !== this && P(), O ? P() : u(O = this, !0), !1;
        }), r(o, "body", function () {
          O && P();
        }), r(o, v, E), r(o, y, E), r(o, p, function () {
          var e = this.closest(l.ACCORDION);
          e && l.getButtons(e).forEach(function (e) {
            return l.hide(e);
          }), w() && m.toggleNav.call(m, !1);
        }), o)), {
          init: function init(e) {
            var t = e.querySelector(f);
            t && (m.focusTrap = s(t, {
              Escape: j
            })), _(), window.addEventListener("resize", _, !1);
          },
          teardown: function teardown() {
            window.removeEventListener("resize", _, !1), O = !1;
          },
          focusTrap: null,
          toggleNav: E
        }), t.exports = m;
      }, {
        "../config": 26,
        "../events": 27,
        "../utils/behavior": 32,
        "../utils/focus-trap": 33,
        "../utils/select": 35,
        "../utils/toggle": 38,
        "./accordion": 17
      }],
      22: [function (e, t, n) {
        "use strict";

        function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        var r = e("../utils/behavior"),
            i = e("../utils/toggle-form-input"),
            a = e("../events").CLICK,
            u = e("../config").prefix,
            s = "." + u + "-show-password, ." + u + "-show-multipassword";
        t.exports = r(o({}, a, o({}, s, function (e) {
          e.preventDefault(), i(this);
        })));
      }, {
        "../config": 26,
        "../events": 27,
        "../utils/behavior": 32,
        "../utils/toggle-form-input": 37
      }],
      23: [function (e, t, n) {
        "use strict";

        function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        var r = e("receptor/ignore"),
            i = e("../utils/behavior"),
            a = e("../utils/select"),
            u = e("../events").CLICK,
            s = ".js-search-form",
            l = void 0,
            c = function c(e, t) {
          var n = function (e) {
            var t = e.closest("header");
            return t ? t.querySelector(s) : document.querySelector(s);
          }(e);

          if (!n) throw new Error("No " + s + " found for search toggle in header!");

          if (e.hidden = t, n.hidden = !t, t) {
            var o = n.querySelector("[type=search]");
            o && o.focus();
            var i = r(n, function () {
              l && d.call(l), document.body.removeEventListener(u, i);
            });
            setTimeout(function () {
              document.body.addEventListener(u, i);
            }, 0);
          }
        };

        function d() {
          c(this, !1), l = void 0;
        }

        var f = i(o({}, u, o({}, ".js-search-button", function () {
          c(this, !0), l = this;
        })), {
          init: function init(e) {
            a(".js-search-button", e).forEach(function (e) {
              c(e, !1);
            });
          },
          teardown: function teardown() {
            l = void 0;
          }
        });
        t.exports = f;
      }, {
        "../events": 27,
        "../utils/behavior": 32,
        "../utils/select": 35,
        "receptor/ignore": 12
      }],
      24: [function (e, t, n) {
        "use strict";

        function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e;
        }

        var r = e("receptor/once"),
            i = e("../utils/behavior"),
            a = e("../events").CLICK,
            u = e("../config").prefix,
            s = "." + u + '-skipnav[href^="#"], .' + u + '-footer__return-to-top [href^="#"]',
            l = "main-content";
        t.exports = i(o({}, a, o({}, s, function () {
          var e = this.getAttribute("href"),
              t = document.getElementById("#" === e ? l : e.slice(1));
          t && (t.style.outline = "0", t.setAttribute("tabindex", 0), t.focus(), t.addEventListener("blur", r(function () {
            t.setAttribute("tabindex", -1);
          })));
        })));
      }, {
        "../config": 26,
        "../events": 27,
        "../utils/behavior": 32,
        "receptor/once": 15
      }],
      25: [function (e, t, n) {
        "use strict";

        var o = e("../utils/behavior"),
            r = e("../utils/validate-input");
        var i = o({
          "keyup change": {
            "input[data-validation-element]": function inputDataValidationElement() {
              r(this);
            }
          }
        });
        t.exports = i;
      }, {
        "../utils/behavior": 32,
        "../utils/validate-input": 39
      }],
      26: [function (e, t, n) {
        "use strict";

        t.exports = {
          prefix: "usa"
        };
      }, {}],
      27: [function (e, t, n) {
        "use strict";

        t.exports = {
          CLICK: "click"
        };
      }, {}],
      28: [function (e, t, n) {
        "use strict";

        var o = window.HTMLElement.prototype;
        "hidden" in o || Object.defineProperty(o, "hidden", {
          get: function get() {
            return this.hasAttribute("hidden");
          },
          set: function set(e) {
            e ? this.setAttribute("hidden", "") : this.removeAttribute("hidden");
          }
        });
      }, {}],
      29: [function (e, t, n) {
        "use strict";

        e("classlist-polyfill"), e("./element-hidden");
      }, {
        "./element-hidden": 28,
        "classlist-polyfill": 1
      }],
      30: [function (e, t, n) {
        "use strict";

        var o = e("domready");
        e("./polyfills");
        var r = e("./config"),
            i = e("./components");
        r.components = i, o(function () {
          var e = document.body;
          Object.keys(i).forEach(function (t) {
            i[t].on(e);
          });
        }), t.exports = r;
      }, {
        "./components": 20,
        "./config": 26,
        "./polyfills": 29,
        domready: 2
      }],
      31: [function (e, t, n) {
        "use strict";

        t.exports = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
          return e.activeElement;
        };
      }, {}],
      32: [function (e, t, n) {
        "use strict";

        var o = e("object-assign"),
            r = e("receptor/behavior"),
            i = function i() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
            t[n] = arguments[n];
          }

          return function () {
            var e = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
            t.forEach(function (t) {
              "function" == typeof e[t] && e[t].call(e, n);
            });
          };
        };

        t.exports = function (e, t) {
          return r(e, o({
            on: i("init", "add"),
            off: i("teardown", "remove")
          }, t));
        };
      }, {
        "object-assign": 7,
        "receptor/behavior": 8
      }],
      33: [function (e, t, n) {
        "use strict";

        var o = e("object-assign"),
            r = e("receptor").keymap,
            i = e("./behavior"),
            a = e("./select"),
            u = e("./active-element"),
            s = function s(e) {
          var t = a('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', e),
              n = t[0],
              o = t[t.length - 1];
          return {
            firstTabStop: n,
            lastTabStop: o,
            tabAhead: function tabAhead(e) {
              u() === o && (e.preventDefault(), n.focus());
            },
            tabBack: function tabBack(e) {
              u() === n && (e.preventDefault(), o.focus());
            }
          };
        };

        t.exports = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = s(e),
              a = r(o({
            Tab: n.tabAhead,
            "Shift+Tab": n.tabBack
          }, t)),
              u = i({
            keydown: a
          }, {
            init: function init() {
              n.firstTabStop.focus();
            },
            update: function update(e) {
              e ? this.on() : this.off();
            }
          });
          return u;
        };
      }, {
        "./active-element": 31,
        "./behavior": 32,
        "./select": 35,
        "object-assign": 7,
        receptor: 13
      }],
      34: [function (e, t, n) {
        "use strict";

        t.exports = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.documentElement,
              o = e.getBoundingClientRect();
          return o.top >= 0 && o.left >= 0 && o.bottom <= (t.innerHeight || n.clientHeight) && o.right <= (t.innerWidth || n.clientWidth);
        };
      }, {}],
      35: [function (e, t, n) {
        "use strict";

        var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        };

        t.exports = function (e, t) {
          if ("string" != typeof e) return [];
          var n;
          t && (n = t) && "object" === (void 0 === n ? "undefined" : o(n)) && 1 === n.nodeType || (t = window.document);
          var r = t.querySelectorAll(e);
          return Array.prototype.slice.call(r);
        };
      }, {}],
      36: [function (e, t, n) {
        "use strict";

        t.exports = function (e, t) {
          e.setAttribute("autocapitalize", "off"), e.setAttribute("autocorrect", "off"), e.setAttribute("type", t ? "password" : "text");
        };
      }, {}],
      37: [function (e, t, n) {
        "use strict";

        var o = e("resolve-id-refs"),
            r = e("./toggle-field-mask");

        t.exports = function (e) {
          var t = e.hasAttribute("aria-pressed") && "true" !== e.getAttribute("aria-pressed");
          o(e.getAttribute("aria-controls")).forEach(function (e) {
            return r(e, t);
          }), e.hasAttribute("data-show-text") || e.setAttribute("data-show-text", e.textContent);

          var n = e.getAttribute("data-show-text"),
              i = e.getAttribute("data-hide-text") || function (e) {
            return e.replace(/\bShow\b/i, function (e) {
              return ("S" === e[0] ? "H" : "h") + "ide";
            });
          }(n);

          return e.textContent = t ? n : i, e.setAttribute("aria-pressed", t), t;
        };
      }, {
        "./toggle-field-mask": 36,
        "resolve-id-refs": 16
      }],
      38: [function (e, t, n) {
        "use strict";

        t.exports = function (e, t) {
          var n = t;
          "boolean" != typeof n && (n = "false" === e.getAttribute("aria-expanded")), e.setAttribute("aria-expanded", n);
          var o = e.getAttribute("aria-controls"),
              r = document.getElementById(o);
          if (!r) throw new Error('No toggle target found with id: "' + o + '"');
          return n ? r.removeAttribute("hidden") : r.setAttribute("hidden", ""), n;
        };
      }, {}],
      39: [function (e, t, n) {
        "use strict";

        var o = function o(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return function (e, t) {
            var n = [],
                o = !0,
                r = !1,
                i = void 0;

            try {
              for (var a, u = e[Symbol.iterator](); !(o = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0) {
                ;
              }
            } catch (e) {
              r = !0, i = e;
            } finally {
              try {
                !o && u["return"] && u["return"]();
              } finally {
                if (r) throw i;
              }
            }

            return n;
          }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        },
            r = e("elem-dataset"),
            i = e("../config").prefix,
            a = i + "-checklist__item--checked";

        t.exports = function (e) {
          var t = r(e),
              n = t.validationElement,
              i = "#" === n.charAt(0) ? document.querySelector(n) : document.getElementById(n);
          if (!i) throw new Error('No validation element found with id: "' + n + '"');
          Object.entries(t).forEach(function (t) {
            var n = o(t, 2),
                r = n[0],
                u = n[1];

            if (r.startsWith("validate")) {
              var s = r.substr("validate".length).toLowerCase(),
                  l = new RegExp(u),
                  c = '[data-validator="' + s + '"]',
                  d = i.querySelector(c);
              if (!d) throw new Error('No validator checkbox found for: "' + s + '"');
              var f = l.test(e.value);
              d.classList.toggle(a, f), d.setAttribute("aria-checked", f);
            }
          });
        };
      }, {
        "../config": 26,
        "elem-dataset": 3
      }]
    }, {}, [30]);
  }).call(this, n(22));
}, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
}, function (e, t) {
  (function (t) {
    e.exports = t;
  }).call(this, {});
}, function (e, t, n) {
  n(25), easydropdown.all();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), n(26), n(27);
  var o = n(28);
  t["default"] = o["default"];
}, function (e, t) {
  !function () {
    if ("undefined" != typeof window) try {
      var e = new window.CustomEvent("test", {
        cancelable: !0
      });
      if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default");
    } catch (e) {
      var t = function t(e, _t) {
        var n, o;
        return _t = _t || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, _t.bubbles, _t.cancelable, _t.detail), o = n.preventDefault, n.preventDefault = function () {
          o.call(this);

          try {
            Object.defineProperty(this, "defaultPrevented", {
              get: function get() {
                return !0;
              }
            });
          } catch (e) {
            this.defaultPrevented = !0;
          }
        }, n;
      };

      t.prototype = window.Event.prototype, window.CustomEvent = t;
    }
  }();
}, function (e, t) {
  Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector);
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(7),
      r = n(29),
      i = n(77);

  function a(e, t) {
    void 0 === t && (t = {});
    var n = e;
    if ("string" == typeof e && (n = document.querySelector(e)), !(n instanceof HTMLSelectElement)) throw new TypeError("[EasyDropDown] Invalid select element provided");
    if (n.multiple) throw new Error("[EasyDropDown] EasyDropDown does not support the `multiple` attribute on select elements.");

    for (var a = 0, u = o["default"]; a < u.length; a++) {
      var s = u[a];
      if (s.selectElement === n) return new i["default"](s);
    }

    var l = new r["default"](n, t);
    return o["default"].push(l), new i["default"](l);
  }

  var u,
      s = ((u = a).all = function (e) {
    void 0 === e && (e = {});
    var t = document.querySelectorAll("select");
    Array.prototype.forEach.call(t, function (t) {
      return a(t, e);
    });
  }, u.destroy = function () {
    o["default"].slice().forEach(function (e) {
      return e.destroy();
    });
  }, u);
  t["default"] = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(0),
      r = n(10),
      i = n(37),
      a = n(54),
      u = n(1),
      s = n(67),
      l = n(68),
      c = n(69),
      d = n(70),
      f = n(71),
      p = n(73),
      h = n(7),
      v = n(76),
      b = function () {
    function e(e, t) {
      this.config = o["default"](new r["default"](), t, !0), this.state = p["default"].mapFromSelect(e, this.config), this.renderer = new a["default"](this.config.classNames), this.dom = this.renderer.render(this.state, e), this.timers = new v["default"](), this.actions = f["default"].proxyActions(this.state, {
        closeOthers: c["default"].bind(null, this, h["default"]),
        scrollToView: d["default"].bind(null, this.dom, this.timers)
      }, this.handleStateUpdate.bind(this)), this.eventBindings = i["default"]({
        actions: this.actions,
        config: this.config,
        dom: this.dom,
        state: this.state,
        timers: this.timers
      }), this.timers.pollChangeIntervalId = s["default"](this.dom.select, this.state, this.actions, this.config), this.config.behavior.liveUpdates && (this.timers.pollMutationIntervalId = l["default"](this.dom.select, this.state, this.refresh.bind(this)));
    }

    return Object.defineProperty(e.prototype, "selectElement", {
      get: function get() {
        return this.dom.select;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "value", {
      get: function get() {
        return this.state.value;
      },
      set: function set(e) {
        if ("string" != typeof e) throw new TypeError("[EasyDropDown] Provided value not a valid string");
        this.dom.select.value = e;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.open = function () {
      u["default"](this.actions, this.config, this.dom);
    }, e.prototype.close = function () {
      this.actions.close();
    }, e.prototype.refresh = function () {
      this.state = o["default"](this.state, p["default"].mapFromSelect(this.dom.select, this.config)), this.renderer.update(this.state), this.dom.group.length = this.dom.option.length = this.dom.item.length = 0, a["default"].queryDomRefs(this.dom, ["group", "option", "item"]);
    }, e.prototype.destroy = function () {
      this.timers.clear(), this.eventBindings.forEach(function (e) {
        return e.unbind();
      }), this.renderer.destroy();
      var e = h["default"].indexOf(this);
      h["default"].splice(e, 1);
    }, e.prototype.handleStateUpdate = function (e, t) {
      var n,
          o = this.config.callbacks;

      switch (this.renderer.update(e, t), t) {
        case "bodyStatus":
          "function" == typeof (n = e.isOpen ? o.onOpen : o.onClose) && n();
          break;

        case "selectedIndex":
          "function" == typeof (n = o.onSelect) && n(e.value);
      }
    }, e;
  }();

  t["default"] = b;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(3),
      r = n(9),
      i = function i() {
    this.deep = !1, this.useReferenceIfTargetUnset = !1, this.useReferenceIfArray = !1, this.preserveTypeIfTargetUnset = !1, this.includeReadOnly = !1, this.includeNonEmurable = !1, this.arrayStrategy = o["default"].REPLACE, this.errorMessage = r.MERGE_ERROR, Object.seal(this);
  };

  t["default"] = i;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e) {
    var t = e.constructor;
    return "function" == typeof t && t !== Object ? new t() : {};
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(8),
      r = function () {
    function e() {
      this.target = null, this.sources = [], this.config = {};
    }

    return e.prototype.to = function (e) {
      return this.target = e, this;
    }, e.prototype.from = function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }

      return this.sources = e, this;
    }, e.prototype["with"] = function (e) {
      return this.config = e, this;
    }, e.prototype.exec = function () {
      var e = this;
      return this.sources.reduce(function (t, n) {
        return o["default"](t, n, e.config);
      }, this.target || {});
    }, e;
  }();

  t["default"] = r;
}, function (e, t, n) {
  "use strict";

  function o(e, t, n, o) {
    var i = r(o.toLowerCase(), e),
        a = Math.abs(o.length - t.length);
    return i > n.totalMatching || i === n.totalMatching && a < n.delta ? {
      key: o,
      delta: a,
      totalMatching: i
    } : n;
  }

  function r(e, t) {
    for (var n = e.length > t.length ? e : t, o = n === e ? t : e, r = 0, i = 0, a = 0, u = -1; r < n.length; r++) {
      for (; 0 === a && n[r] !== o[i] && i < o.length;) {
        i++;
      }

      if (n[r] === o[i]) {
        if (u !== r - 1 && (a = 0), u = r, i++, ++a === o.length) break;
      } else {
        if (a > 1) break;
        a = i = 0;
      }
    }

    u = -1;

    for (var s = 0, l = 0, c = 0, d = n.length - 1, f = o.length - 1; s < n.length - r; s++) {
      for (; 0 === c && n[d - s] !== o[f - l] && l < o.length;) {
        l++;
      }

      if (n[d - s] === o[f - l]) u !== s - 1 && (c = 0), u = s, c++, l++;else {
        if (c > 1) break;
        c = l = 0;
      }
    }

    return Math.min(o.length, a + c);
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getTotalMatching = r, t["default"] = function (e, t, n, r) {
    if (Object.hasOwnProperty.call(t, n) || !Object.isSealed(t) || Object.isExtensible(t) || !(e instanceof TypeError)) throw e;
    var i = o.bind(null, n, n.toLowerCase()),
        a = {
      key: "",
      delta: 1 / 0,
      totalMatching: 0
    },
        u = Object.keys(t).reduce(i, a),
        s = u && u.totalMatching > 1 ? u.key : "";
    throw new TypeError(r(n, s));
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function o() {
    this.showPlaceholderWhenOpen = !1, this.openOnFocus = !1, this.closeOnSelect = !0, this.useNativeUiOnMobile = !0, this.loop = !1, this.clampMaxVisibleItems = !0, this.liveUpdates = !1, this.maxVisibleItems = 15, Object.seal(this);
  };

  t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function o() {
    this.onOpen = null, this.onClose = null, this.onSelect = null, Object.seal(this);
  };

  t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function o() {
    this.root = "edd-root", this.rootOpen = "edd-root-open", this.rootOpenAbove = "edd-root-open-above", this.rootOpenBelow = "edd-root-open-below", this.rootDisabled = "edd-root-disabled", this.rootInvalid = "edd-root-invalid", this.rootFocused = "edd-root-focused", this.rootHasValue = "edd-root-has-value", this.rootNative = "edd-root-native", this.gradientTop = "edd-gradient-top", this.gradientBottom = "edd-gradient-bottom", this.head = "edd-head", this.value = "edd-value", this.arrow = "edd-arrow", this.select = "edd-select", this.body = "edd-body", this.bodyScrollable = "edd-body-scrollable", this.bodyAtTop = "edd-body-at-top", this.bodyAtBottom = "edd-body-at-bottom", this.itemsList = "edd-items-list", this.group = "edd-group", this.groupDisabled = "edd-group-disabled", this.groupHasLabel = "edd-group-has-label", this.groupLabel = "edd-group-label", this.option = "edd-option", this.optionDisabled = "edd-option-disabled", this.optionFocused = "edd-option-focused", this.optionSelected = "edd-option-selected", Object.seal(this);
  };

  t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(38),
      r = n(39),
      i = n(40);

  function a(e, t) {
    var n = new r["default"](t);
    if (!n.target) return n;

    var i = function i(t) {
      return n.handler(t, e);
    };

    return n.throttle > 0 ? n.boundHandler = o["default"](i, n.throttle) : n.boundHandler = i, n.target.addEventListener(n.type, n.boundHandler), n;
  }

  t.bindEvent = a, t["default"] = function (e) {
    return i["default"](e.dom).map(a.bind(null, e));
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e, t) {
    var n = null,
        o = -1 / 0;
    return function () {
      for (var r = this, i = [], a = 0; a < arguments.length; a++) {
        i[a] = arguments[a];
      }

      var u = Date.now(),
          s = function s() {
        n = null, e.apply(r, i), o = u;
      },
          l = u - o;

      l >= t ? s() : (clearTimeout(n), n = setTimeout(s, t - l));
    };
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(0),
      r = function () {
    function e(e) {
      this.type = "", this.target = null, this.debounce = 0, this.throttle = 0, this.handler = null, this.boundHandler = null, this.passive = !1, o["default"](this, e), Object.seal(this);
    }

    return e.prototype.unbind = function () {
      this.target && this.target.removeEventListener(this.type, this.boundHandler);
    }, e;
  }();

  t["default"] = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(41),
      r = n(42),
      i = n(43),
      a = n(44),
      u = n(46),
      s = n(47),
      l = n(48),
      c = n(49),
      d = n(50),
      f = n(53),
      p = n(13),
      h = n(13);

  t["default"] = function (e) {
    return [{
      target: e.head,
      type: "click",
      handler: a["default"]
    }, {
      target: e.body,
      type: "mousedown",
      handler: r["default"]
    }, {
      target: e.body,
      type: "click",
      handler: o["default"]
    }, {
      target: e.body,
      type: "mouseover",
      handler: i["default"]
    }, {
      target: e.itemsList,
      type: "scroll",
      handler: u["default"]
    }, {
      target: e.select,
      type: "keydown",
      handler: d["default"]
    }, {
      target: e.select,
      type: "invalid",
      handler: c["default"]
    }, {
      target: e.select,
      type: "keypress",
      handler: f["default"]
    }, {
      target: e.select,
      type: "focus",
      handler: l["default"]
    }, {
      target: e.select,
      type: "blur",
      handler: s["default"]
    }, {
      target: document.documentElement,
      type: "click",
      handler: p["default"]
    }, {
      target: window,
      type: "resize",
      handler: h["default"],
      throttle: 100
    }];
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(4),
      r = n(5);

  t["default"] = function (e, t) {
    t.state;
    var n = t.actions,
        i = t.dom,
        a = t.config;
    e.stopPropagation();
    var u = o["default"](e.target, r.OPTION, !0);

    if (u) {
      var s = Array.prototype.indexOf.call(i.option, u);
      n.selectOption(s, a.behavior.closeOnSelect);
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(4),
      r = n(5);

  t["default"] = function (e, t) {
    var n = t.actions;
    e.stopPropagation(), o["default"](e.target, r.OPTION, !0) && n.startClickSelecting();
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(4),
      r = n(5);

  t["default"] = function (e, t) {
    var n = t.state,
        i = t.actions,
        a = t.dom;
    e.stopPropagation();
    var u = o["default"](e.target, r.OPTION, !0);

    if (u && !n.isKeying) {
      var s = Array.prototype.indexOf.call(a.option, u);
      i.focusOption(s);
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(1);

  t["default"] = function (e, t) {
    var n = t.state,
        r = t.actions,
        i = t.dom,
        a = t.config;
    n.isUseNativeMode || (e.stopPropagation(), n.isClosed ? (o["default"](r, a, i), i.select.focus()) : r.close());
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(11),
      r = 10;

  function i(e, t, n, r) {
    var i = o["default"].NONE,
        a = -1;

    if (e <= n && t <= n) {
      var u = Math.max(t, e);
      i = e < t ? o["default"].TOP : o["default"].BOTTOM, a = Math.floor(u / r);
    } else e <= n ? i = o["default"].TOP : t <= n && (i = o["default"].BOTTOM);

    return {
      type: i,
      maxVisibleItemsOverride: a
    };
  }

  t.mapCollisionData = i, t["default"] = function (e, t) {
    var n = e.head.getBoundingClientRect(),
        a = window.innerHeight,
        u = n.top - r,
        s = a - n.bottom - r;
    if (e.option.length < 1) return {
      type: o["default"].NONE,
      maxVisibleItemsOverride: -1
    };
    var l = Math.min(t.behavior.maxVisibleItems, e.item.length);
    return i(u, s, e.sumItemsHeight(l), e.sumItemsHeight(1));
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e, t) {
    t.state;
    var n = t.actions,
        o = t.dom;
    e.stopPropagation();
    var r = o.itemsList,
        i = r.offsetHeight,
        a = r.scrollHeight,
        u = r.scrollTop;
    0 === u ? n.topOut() : u === a - i ? n.bottomOut() : n.scroll();
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e, t) {
    var n = t.actions,
        o = t.state,
        r = t.config;
    o.isKeying || (n.blur(), r.behavior.openOnFocus && !o.isClickSelecting && n.close());
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(1);

  t["default"] = function (e, t) {
    var n = t.actions,
        r = t.config,
        i = t.dom,
        a = t.state;
    n.focus(), r.behavior.openOnFocus && !a.isUseNativeMode && o["default"](n, r, i);
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e, t) {
    var n = t.actions;
    t.config, t.dom, n.invalidate();
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(1),
      r = n(6),
      i = n(12),
      a = n(51),
      u = n(52);

  t["default"] = function (e, t) {
    var n = e.keyCode,
        s = e.target,
        l = t.state,
        c = t.actions,
        d = t.dom,
        f = t.config;
    if (!l.isUseNativeMode && !l.isDisabled) switch (n) {
      case i.DOWN:
        a["default"](e, t);
        break;

      case i.UP:
        u["default"](e, t);
        break;

      case i.SPACE:
        if (l.isSearching) return void e.stopPropagation();

      case i.ENTER:
        e.stopPropagation(), e.preventDefault(), r["default"](s, t), l.isOpen ? c.selectOption(l.focusedIndex, f.behavior.closeOnSelect) : o["default"](c, f, d);
        break;

      case i.ESC:
        c.close();
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(1),
      r = n(6);

  t["default"] = function (e, t) {
    var n = e.metaKey,
        i = e.target,
        a = t.state,
        u = t.dom,
        s = t.actions,
        l = t.config,
        c = a.focusedIndex > -1 ? a.focusedIndex : a.selectedIndex,
        d = 0,
        f = 1;
    e.preventDefault(), r["default"](i, t), n && (f = Math.round(Math.max(a.totalOptions / 2, l.behavior.maxVisibleItems)));

    do {
      c += f, f = 1, c >= a.totalOptions && (c = l.behavior.loop ? 0 : a.totalOptions - 1), s.focusOption(c, !0), d++;
    } while (a.focusedOption && a.focusedOption.isDisabled && d <= a.totalOptions);

    a.isClosed && o["default"](s, l, u);
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(1),
      r = n(6);

  t["default"] = function (e, t) {
    var n = e.metaKey,
        i = e.target,
        a = t.state,
        u = t.config,
        s = t.dom,
        l = t.actions,
        c = a.focusedIndex > -1 ? a.focusedIndex : a.selectedIndex,
        d = 0,
        f = 1;
    e.preventDefault(), r["default"](i, t), n && (f = Math.round(Math.max(a.totalOptions / 2, u.behavior.maxVisibleItems)));

    do {
      c -= f, f = 1, c < 0 && (c = u.behavior.loop ? a.totalOptions - 1 : 0), l.focusOption(c, !0), d++;
    } while (a.focusedOption && a.focusedOption.isDisabled && d < a.totalOptions);

    a.isClosed && o["default"](l, u, s);
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(12),
      r = 1200;

  t["default"] = function (e, t, n) {
    var i = e.keyCode,
        a = t.actions,
        u = t.timers,
        s = t.state;
    void 0 === n && (n = r), s.isUseNativeMode || [o.UP, o.DOWN].includes(i) || (window.clearTimeout(u.searchTimeoutId), a.search(), u.searchTimeoutId = window.setTimeout(function () {
      return a.resetSearch();
    }, n));
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(55),
      r = n(62),
      i = n(63),
      a = n(64),
      u = n(66),
      s = function () {
    function e(e) {
      this.dom = new i["default"](), this.classNames = e;
    }

    return e.prototype.render = function (t, n) {
      var a = o["default"](t, this.classNames),
          u = r["default"](a);
      return this.dom = new i["default"](), this.dom.root = u, this.dom.option.length = this.dom.group.length = 0, e.queryDomRefs(this.dom), this.injectSelect(n), this.dom;
    }, e.prototype.update = function (e, t) {
      var n = o["default"](e, this.classNames),
          i = r["default"](n),
          s = a["default"](this.dom.root, i);
      u["default"](this.dom.root, s), "selectedIndex" === t && this.syncSelectWithValue(e.value);
    }, e.prototype.destroy = function () {
      this.dom.select.classList.remove(this.classNames.select);

      try {
        this.dom.root.parentElement.replaceChild(this.dom.select, this.dom.root);
      } catch (e) {}
    }, e.prototype.injectSelect = function (e) {
      var t = e.parentElement,
          n = this.dom.select;
      if (!t) throw new Error("[EasyDropDown] The provided `<select>` element must exist within a document");
      t.replaceChild(this.dom.root, e), n.parentElement.replaceChild(e, n), e.className = this.classNames.select, e.setAttribute("aria-hidden", "true"), this.dom.select = e;
    }, e.prototype.syncSelectWithValue = function (e) {
      if (this.dom.select.value !== e) {
        var t = new CustomEvent("change", {
          bubbles: !0
        });
        this.dom.select.value = e, this.dom.select.dispatchEvent(t);
      }
    }, e.queryDomRefs = function (e, t) {
      return void 0 === t && (t = Object.keys(e)), t.reduce(function (e, t) {
        var n = '[data-ref~="' + t + '"]',
            o = e.root.querySelectorAll(n);
        if (o.length < 1 || "root" === t) return e;
        var r = o[0],
            i = e[t];
        return null === i ? e[t] = r : Array.isArray(i) && Array.prototype.push.apply(i, o), e;
      }, e);
    }, e;
  }();

  t["default"] = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(2),
      r = n(56),
      i = n(59);

  t["default"] = function (e, t) {
    return '\n        <div\n            class="' + o["default"]([t.root, [e.isDisabled, t.rootDisabled], [e.isInvalid, t.rootInvalid], [e.isOpen, t.rootOpen], [e.isFocused, t.rootFocused], [e.hasValue, t.rootHasValue], [e.isOpenAbove, t.rootOpenAbove], [e.isOpenBelow, t.rootOpenBelow], [e.isUseNativeMode, t.rootNative]]) + '"\n            role="widget combobox"\n            aria-haspopup="listbox"\n            ' + (e.isOpen ? 'aria-expanded="true"' : "") + "\n            " + (e.isRequired ? 'aria-required="true"' : "") + "\n            " + (e.isDisabled ? 'aria-disabled="true"' : "") + "\n            " + (e.isInvalid ? 'aria-invalid="true"' : "") + "\n        >\n            " + i["default"](e, t) + "\n            " + (e.isUseNativeMode ? "" : r["default"](e, t)) + "\n        </div>\n    ";
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(2),
      r = n(57);

  t["default"] = function (e, t) {
    var n = o["default"]([t.body, [e.isAtTop, t.bodyAtTop], [e.isAtBottom, t.bodyAtBottom], [e.isScrollable, t.bodyScrollable]]),
        i = e.isOpen ? 'style="max-height: ' + e.maxBodyHeight + 'px;"' : "";
    return '\n        <div\n            class="' + n + '"\n            data-ref="body"\n            role="listbox"\n            ' + (e.isOpen ? "" : "aria-hidden") + '\n        >\n            <div class="' + t.itemsList + '"\n                data-ref="itemsList"\n                ' + i + ">\n                " + e.groups.map(function (n) {
      return r["default"](n, e, t);
    }).join("") + "\n            </div>\n            <div class=" + t.gradientTop + ' role="presentation"></div>\n            <div class=' + t.gradientBottom + ' role="presentation"></div>\n        </div>\n    ';
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(2),
      r = n(58);

  t["default"] = function (e, t, n) {
    return '\n        <div class="' + o["default"]([n.group, [e.isDisabled, n.groupDisabled], [e.hasLabel, n.groupHasLabel]]) + '" data-ref="group" role="group">\n            ' + (e.hasLabel ? '<div class="' + n.groupLabel + '" data-ref="item">' + e.label + "</div>" : "") + "\n            " + e.options.map(function (e) {
      return r["default"](e, t, n);
    }).join("") + "\n        </div>\n    ";
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(2);

  t["default"] = function (e, t, n) {
    var r = t.selectedOption === e;
    return '\n        <div\n            class="' + o["default"]([n.option, [r, n.optionSelected], [e === t.focusedOption, n.optionFocused], [e.isDisabled, n.optionDisabled]]) + '"\n            data-ref="option item"\n            role="option"\n            title="' + e.label + '"\n            ' + (r ? 'aria-selected="true"' : "") + "\n            " + (e.isDisabled ? 'aria-disabled="true"' : "") + "\n            >\n                " + e.label + "\n        </div>\n    ";
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(60),
      r = n(61);

  t["default"] = function (e, t) {
    return '\n    <div class="' + t.head + '" data-ref="head">\n        ' + r["default"](e, t) + "\n        " + o["default"](e, t) + '\n        <select class="' + t.select + '" data-ref="select"></select>\n    </div>\n';
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] = function (e, t) {
    return '<div class="' + t.arrow + '" role="presentation"></div>';
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] = function (e, t) {
    return '\n        <div\n            class="' + t.value + '"\n            data-ref="value"\n            ' + (e.isPlaceholderShown ? 'aria-placeholder="' + e.humanReadableValue + '"' : "") + "\n        >\n            " + e.humanReadableValue + "\n        </div>\n    ";
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e) {
    var t = document.createElement("div");
    return t.innerHTML = e, t.firstElementChild;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function () {
    function e() {
      this.select = null, this.root = null, this.head = null, this.value = null, this.body = null, this.arrow = null, this.itemsList = null, this.item = [], this.group = [], this.option = [];
    }

    return e.prototype.sumItemsHeight = function (e) {
      void 0 === e && (e = 1 / 0);

      for (var t = 0, n = 0, o = void 0; (o = this.item[n]) && n !== e; n++) {
        t += o.offsetHeight;
      }

      return t;
    }, e;
  }();

  t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(0),
      r = n(14),
      i = n(15),
      a = n(65);

  function u(e, t) {
    for (var n = Math.max(e.attributes.length, t.attributes.length), o = {}, a = [], u = 0; u < n; u++) {
      var s = e.attributes[u],
          l = t.attributes[u];
      s && void 0 === o[s.name] && (o[s.name] = []), l && void 0 === o[l.name] && (o[l.name] = []), s && (o[s.name][0] = s.value), l && (o[l.name][1] = l.value);
    }

    var c = Object.keys(o);
    c.length > 1 && c.sort();
    u = 0;

    for (var d = void 0; d = c[u]; u++) {
      var f = o[d],
          p = {
        type: null,
        name: d,
        value: null
      };
      f[0] !== f[1] && (void 0 === f[0] ? (p.type = r["default"].ADD, p.value = f[1]) : void 0 === f[1] ? (p.type = r["default"].REMOVE, p.value = "") : (p.type = r["default"].EDIT, p.value = f[1]), a.push(p));
    }

    return {
      type: i["default"].OUTER,
      attributeChanges: a
    };
  }

  t["default"] = function e(t, n) {
    var r = -1,
        s = new a["default"]();
    if (t instanceof HTMLSelectElement) return s.type = i["default"].NONE, s;
    if (t instanceof Text && n instanceof Text) t.textContent === n.textContent ? s.type = i["default"].NONE : (s.type = i["default"].INNER, s.newTextContent = n.textContent);else if (t instanceof HTMLElement && n instanceof HTMLElement) {
      if (t.tagName !== n.tagName) s.type = i["default"].REPLACE, s.newNode = n;else if (t.outerHTML === n.outerHTML) s.type = i["default"].NONE;else if (t.innerHTML === n.innerHTML) o["default"](s, u(t, n));else if (o["default"](s, u(t, n)), s.attributeChanges.length > 0 ? s.type = i["default"].FULL : s.type = i["default"].INNER, (r = t.childNodes.length) > 0 && r === n.childNodes.length) for (var l = 0, c = void 0; c = t.childNodes[l]; l++) {
        s.childCommands.push(e(c, n.childNodes[l]));
      } else s.newInnerHtml = n.innerHTML;
    } else s.type = i["default"].REPLACE, s.newNode = n;
    return s;
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function o() {
    this.newNode = null, this.newInnerHtml = "", this.newTextContent = "", this.attributeChanges = [], this.childCommands = [], this.index = null;
  };

  t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(14),
      r = n(15);

  function i(e, t) {
    var n = window.requestAnimationFrame;
    t.forEach(function (t) {
      n && ["class", "style"].indexOf(t.name) > -1 ? n(function () {
        return a(e, t);
      }) : a(e, t);
    });
  }

  function a(e, t) {
    switch (t.type) {
      case o["default"].ADD:
      case o["default"].EDIT:
        e.setAttribute(t.name, t.value);
        break;

      case o["default"].REMOVE:
        e.removeAttribute(t.name);
    }
  }

  t["default"] = function e(t, n) {
    switch (n.type) {
      case r["default"].NONE:
        return t;

      case r["default"].REPLACE:
        return t.parentElement.replaceChild(n.newNode, t), n.newNode;

      case r["default"].INNER:
        return t instanceof Text ? t.textContent = n.newTextContent : n.childCommands.length > 0 ? n.childCommands.forEach(function (n, o) {
          return e(t.childNodes[o], n);
        }) : t.innerHTML = n.newInnerHtml, t;

      case r["default"].OUTER:
        return i(t, n.attributeChanges), t;

      case r["default"].FULL:
        return n.childCommands.length > 0 ? n.childCommands.forEach(function (n, o) {
          return e(t.childNodes[o], n);
        }) : t.innerHTML = n.newInnerHtml, i(t, n.attributeChanges), t;
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = 100;

  t["default"] = function (e, t, n, r) {
    var i = e.value;
    return window.setInterval(function () {
      if (e.value !== i) {
        var o = t.getOptionIndexFromValue(e.value);
        n.selectOption(o, r.behavior.closeOnSelect), n.focusOption(o, !0);
      }

      i = e.value;
    }, o);
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = 300;

  t["default"] = function (e, t, n) {
    var r = e.outerHTML;
    return window.setInterval(function () {
      var o = e.outerHTML;
      o === r || t.isKeying || n(), r = o;
    }, o);
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e, t) {
    for (var n = 0, o = t; n < o.length; n++) {
      var r = o[n];
      r !== e && r.actions.close();
    }
  };
}, function (e, t, n) {
  "use strict";

  function o(e, t, n, o, r) {
    var i;
    return t < e ? t - r : (i = t + n - (e + o)) > 0 ? e + i + r : e;
  }

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getScrollTop = o, t["default"] = function (e, t, n, r) {
    void 0 === r && (r = !1);
    var i = Math.max(0, n.focusedIndex > -1 ? n.focusedIndex : n.selectedIndex),
        a = e.option[i];

    if (a) {
      var u = r ? n.maxBodyHeight / 2 - a.offsetHeight / 2 : 0,
          s = o(e.itemsList.scrollTop, a.offsetTop, a.offsetHeight, n.maxBodyHeight, u);
      s !== e.itemsList.scrollTop && (e.itemsList.scrollTop = s);
    }
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(0),
      r = n(72),
      i = function () {
    function e() {}

    return e.proxyActions = function (t, n, i) {
      var a = e.createStateProxy(t, i),
          u = r["default"](a);
      return o["default"](u, n), u;
    }, e.createStateProxy = function (t, n) {
      return Object.seal(e.getPropertyDescriptorsFromValue(t, n).reduce(function (e, t) {
        var n = t.key,
            o = t.get,
            r = t.set;
        return Object.defineProperty(e, n, {
          enumerable: !0,
          get: o,
          set: r
        });
      }, {}));
    }, e.getPropertyDescriptorsFromValue = function (t, n) {
      var o = Object.getPrototypeOf(t);
      return Object.keys(t).concat(Object.keys(o)).reduce(function (r, i) {
        var a = "function" == typeof (Object.getOwnPropertyDescriptor(t, i) || Object.getOwnPropertyDescriptor(o, i)).get;
        return r.push({
          get: e.readPropertyValue.bind(null, t, i),
          set: a ? void 0 : e.updatePropertyValue.bind(null, t, i, n),
          key: i
        }), r;
      }, []);
    }, e.readPropertyValue = function (e, t) {
      return e[t];
    }, e.updatePropertyValue = function (e, t, n, o) {
      e[t] !== o && (e[t] = o, n(e, t));
    }, e;
  }();

  t["default"] = i;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var o = n(11),
      r = n(16),
      i = n(17);

  t["default"] = function (e) {
    return {
      focus: function focus() {
        e.isFocused = !0;
      },
      blur: function blur() {
        e.isFocused = !1;
      },
      invalidate: function invalidate() {
        e.isInvalid = !0;
      },
      validate: function validate() {
        e.isInvalid = !1;
      },
      topOut: function topOut() {
        e.scrollStatus = i["default"].AT_TOP;
      },
      bottomOut: function bottomOut() {
        e.scrollStatus = i["default"].AT_BOTTOM;
      },
      scroll: function scroll() {
        e.scrollStatus = i["default"].SCROLLED;
      },
      makeScrollable: function makeScrollable() {
        e.isScrollable = !0;
      },
      makeUnscrollable: function makeUnscrollable() {
        e.isScrollable = !1;
      },
      open: function open(t, n, i) {
        if (!e.isDisabled) {
          switch (this.closeOthers(), n) {
            case o["default"].NONE:
            case o["default"].TOP:
              e.bodyStatus = r["default"].OPEN_BELOW;
              break;

            case o["default"].BOTTOM:
              e.bodyStatus = r["default"].OPEN_ABOVE;
          }

          e.isScrollable = i, e.maxBodyHeight = t, this.scrollToView(e, !0);
        }
      },
      close: function close() {
        e.bodyStatus = r["default"].CLOSED, e.focusedIndex = -1;
      },
      startClickSelecting: function startClickSelecting() {
        e.isClickSelecting = !0;
      },
      selectOption: function selectOption(t, n) {
        void 0 === n && (n = !0);
        var o = e.getOptionFromIndex(t);
        e.isClickSelecting = !1, t > -1 && (!o || o.isDisabled) || (e.selectedIndex = t, e.isInvalid && this.validate(), e.isSearching ? this.scrollToView(e) : n && this.close());
      },
      focusOption: function focusOption(t, n) {
        void 0 === n && (n = !1);
        var o = Math.abs(t - e.focusedIndex) > 1;
        e.focusedIndex = t, n && this.scrollToView(e, o);
      },
      search: function search() {
        e.isSearching = !0;
      },
      resetSearch: function resetSearch() {
        e.isSearching = !1;
      },
      keying: function keying() {
        e.isKeying = !0;
      },
      resetKeying: function resetKeying() {
        e.isKeying = !1;
      },
      useNative: function useNative() {
        e.isUseNativeMode = !0;
      }
    };
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(0),
      r = n(74),
      i = n(18),
      a = n(19),
      u = n(75),
      s = function () {
    function e() {}

    return e.mapFromSelect = function (t, n) {
      var o = new u["default"](null, n),
          i = !1;
      o.name = t.name, o.isDisabled = t.disabled, o.isRequired = t.required, o.isUseNativeMode = n.behavior.useNativeUiOnMobile && r["default"](window.navigator.userAgent);

      for (var a = 0, s = void 0; s = t.children[a]; a++) {
        if (0 !== a || null === s.getAttribute("data-placeholder")) {
          if (s instanceof HTMLOptionElement) !1 === i && (o.groups.push(e.mapGroup()), i = !0), o.lastGroup.options.push(e.mapOption(s)), s.selected && (o.selectedIndex = o.totalOptions - 1);else {
            if (!(s instanceof HTMLOptGroupElement)) throw new TypeError('[EasyDropDown] Invalid child tag "' + s.tagName + '" found in provided `<select>` element');
            i = !0, o.groups.push(e.mapGroup(s));

            for (var l = 0, c = void 0; c = s.children[l]; l++) {
              o.lastGroup.options.push(e.mapOption(c, s)), c.selected && (o.selectedIndex = o.totalOptions - 1);
            }

            i = !1;
          }
        } else o.placeholder = s.textContent, s.value = "";
      }

      return Object.seal(o);
    }, e.mapGroup = function (e) {
      return void 0 === e && (e = null), o["default"](new i["default"](), {
        label: e ? e.label : "",
        isDisabled: !!e && e.disabled
      });
    }, e.mapOption = function (e, t) {
      if (void 0 === t && (t = null), !(e instanceof HTMLOptionElement)) throw new TypeError("[EasyDropDown] Invalid markup structure");
      var n = null !== t && t.disabled;
      return o["default"](new a["default"](), {
        label: e.textContent,
        value: e.value,
        isDisabled: e.disabled || n
      });
    }, e;
  }();

  t["default"] = s;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t["default"] = function (e) {
    var t = /(ipad|iphone|ipod)/gi.test(e),
        n = /android/gi.test(e),
        o = /opera mini/gi.test(e),
        r = /windows phone/gi.test(e);
    return !!(t || n || o || r);
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = n(0),
      r = n(10),
      i = n(16),
      a = n(17),
      u = n(18),
      s = n(19),
      l = function () {
    function e(e, t) {
      void 0 === e && (e = null), void 0 === t && (t = new r["default"]()), this.groups = [], this.focusedIndex = -1, this.selectedIndex = -1, this.maxVisibleItemsOverride = -1, this.maxBodyHeight = -1, this.name = "", this.placeholder = "", this.scrollStatus = a["default"].AT_TOP, this.bodyStatus = i["default"].CLOSED, this.isDisabled = !1, this.isRequired = !1, this.isInvalid = !1, this.isFocused = !1, this.isUseNativeMode = !1, this.isScrollable = !1, this.isClickSelecting = !1, this.isSearching = !1, this.isKeying = !1, this.config = t, e && (o["default"](this, e), this.groups = this.groups.map(function (e) {
        var t = o["default"](new u["default"](), e);
        return t.options = t.options.map(function (e) {
          return o["default"](new s["default"](), e);
        }), t;
      }));
    }

    return Object.defineProperty(e.prototype, "totalGroups", {
      get: function get() {
        return this.groups.length;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastGroup", {
      get: function get() {
        return this.groups[this.groups.length - 1];
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "totalOptions", {
      get: function get() {
        return this.groups.reduce(function (e, t) {
          return e + t.totalOptions;
        }, 0);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "selectedOption", {
      get: function get() {
        return this.getOptionFromIndex(this.selectedIndex);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "focusedOption", {
      get: function get() {
        return this.getOptionFromIndex(this.focusedIndex);
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "value", {
      get: function get() {
        return this.selectedOption ? this.selectedOption.value : "";
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "humanReadableValue", {
      get: function get() {
        return !this.hasValue && this.hasPlaceholder || this.config.behavior.showPlaceholderWhenOpen && this.hasPlaceholder && this.isOpen ? this.placeholder : this.label;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "label", {
      get: function get() {
        return this.selectedOption ? this.selectedOption.label : "";
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "hasPlaceholder", {
      get: function get() {
        return "" !== this.placeholder;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isPlaceholderShown", {
      get: function get() {
        return this.hasPlaceholder && !this.hasValue;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "hasValue", {
      get: function get() {
        return "" !== this.value;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isGrouped", {
      get: function get() {
        return Boolean(this.groups.find(function (e) {
          return e.hasLabel;
        }));
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isOpen", {
      get: function get() {
        return this.bodyStatus !== i["default"].CLOSED;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isClosed", {
      get: function get() {
        return this.bodyStatus === i["default"].CLOSED;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isOpenAbove", {
      get: function get() {
        return this.bodyStatus === i["default"].OPEN_ABOVE;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isOpenBelow", {
      get: function get() {
        return this.bodyStatus === i["default"].OPEN_BELOW;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isAtTop", {
      get: function get() {
        return this.scrollStatus === a["default"].AT_TOP;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(e.prototype, "isAtBottom", {
      get: function get() {
        return this.scrollStatus === a["default"].AT_BOTTOM;
      },
      enumerable: !0,
      configurable: !0
    }), e.prototype.getOptionFromIndex = function (e) {
      for (var t = 0, n = 0, o = this.groups; n < o.length; n++) {
        var r = o[n];
        if (e < 0) break;
        if (e <= Math.max(0, t + r.totalOptions - 1)) return r.options[e - t];
        t += r.totalOptions;
      }

      return null;
    }, e.prototype.getOptionIndexFromValue = function (e) {
      for (var t = -1, n = 0, o = this.groups; n < o.length; n++) {
        for (var r = 0, i = o[n].options; r < i.length; r++) {
          if (t++, i[r].value === e) return t;
        }
      }

      return -1;
    }, e;
  }();

  t["default"] = l;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function () {
    function e() {}

    return e.prototype.clear = function () {
      var e = this;
      Object.keys(this).forEach(function (t) {
        return window.clearInterval(e[t]);
      });
    }, e;
  }();

  t["default"] = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var o = function o(e) {
    this.open = e.open.bind(e), this.close = e.close.bind(e), this.refresh = e.refresh.bind(e), this.destroy = e.destroy.bind(e), Object.defineProperties(this, {
      value: {
        get: function get() {
          return e.value;
        },
        set: function set(t) {
          return e.value = t;
        }
      }
    });
  };

  t["default"] = o;
}, function (e, t) {}, function (e, t, n) {
  n(80);
}, function (e, t) {
  !function () {
    "use strict";

    var e = 0,
        t = {},
        n = {};

    function o(e, t) {
      return Array.prototype.slice.call((t || document).querySelectorAll(e));
    }

    function r(e) {
      if (e.closest) return e.closest("[data-a11y-toggle]");

      for (; e;) {
        if (1 === e.nodeType && e.hasAttribute("data-a11y-toggle")) return e;
        e = e.parentNode;
      }

      return null;
    }

    function i(e) {
      var o = e && n[e.getAttribute("aria-controls")];
      if (!o) return !1;
      var r = t["#" + o.id],
          i = "false" === o.getAttribute("aria-hidden");
      o.setAttribute("aria-hidden", i), r.forEach(function (e) {
        e.setAttribute("aria-expanded", !i);
      });
    }

    var a = function a(r) {
      t = o("[data-a11y-toggle]", r).reduce(function (e, t) {
        var n = "#" + t.getAttribute("data-a11y-toggle");
        return e[n] = e[n] || [], e[n].push(t), e;
      }, t);
      var i = Object.keys(t);
      i.length && o(i).forEach(function (o) {
        var r = t["#" + o.id],
            i = o.hasAttribute("data-a11y-toggle-open"),
            a = [];
        r.forEach(function (t) {
          t.id || t.setAttribute("id", "a11y-toggle-" + e++), t.setAttribute("aria-controls", o.id), t.setAttribute("aria-expanded", i), a.push(t.id);
        }), o.setAttribute("aria-hidden", !i), o.hasAttribute("aria-labelledby") || o.setAttribute("aria-labelledby", a.join(" ")), n[o.id] = o;
      });
    };

    document.addEventListener("DOMContentLoaded", function () {
      a();
    }), document.addEventListener("click", function (e) {
      i(r(e.target));
    }), document.addEventListener("keyup", function (e) {
      if (13 === e.which || 32 === e.which) {
        var t = r(e.target);
        t && "button" === t.getAttribute("role") && i(t);
      }
    }), window && (window.a11yToggle = a);
  }();
}]);