(function() {
    var e = {
            718: function(e, t, n) {
                "use strict";
                n.r(t);
                var o = n(81),
                    r = n.n(o),
                    s = n(645),
                    i = n.n(s),
                    l = i()(r());
                l.push([e.id, ".wb-account-avatar-container[data-v-4cce9dfe]{width:100%;display:flex;justify-content:right;align-items:center}.wb-account-avatar[data-v-4cce9dfe]{width:38px;height:38px;border:2px solid #fff;border-radius:100%;margin-right:12px}", ""]), t["default"] = l
            },
            474: function(e, t, n) {
                "use strict";
                n.r(t);
                var o = n(81),
                    r = n.n(o),
                    s = n(645),
                    i = n.n(s),
                    l = i()(r());
                l.push([e.id, ".wb-account-container[data-v-1e5b2b6a]{background-color:#000;color:#fff;height:66px;display:flex;align-items:center;position:relative;font-family:Roboto Condensed,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}.wb-account-link[data-v-1e5b2b6a]{display:flex;align-items:center;justify-content:right;margin:0;padding:0 12px;height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-weight:700;cursor:pointer;transition:text-shadow .2s ease-in-out}.wb-account-link[data-v-1e5b2b6a]:hover{text-shadow:0 0 15px #fff,0 0 30px #09f}a.wb-account-link[data-v-1e5b2b6a],a.wb-account-link[data-v-1e5b2b6a]:active,a.wb-account-link[data-v-1e5b2b6a]:hover{-webkit-user-select:all;-moz-user-select:all;user-select:all;text-decoration:none;color:#fff}button.wb-account-link[data-v-1e5b2b6a]{background:none;color:inherit;border:none}.wb-account-bar[data-v-1e5b2b6a]{width:100%;display:flex;justify-content:right;align-self:center}", ""]), t["default"] = l
            },
            843: function(e, t, n) {
                "use strict";
                n.r(t);
                var o = n(81),
                    r = n.n(o),
                    s = n(645),
                    i = n.n(s),
                    l = i()(r());
                l.push([e.id, ".wb-account-dropdown[data-v-ea58cb5e]{background-color:#000;position:absolute;top:4px;right:4px;width:300px;padding:12px 12px 0;opacity:0;transform:translateY(-100%);pointer-events:none;transition:transform .3s ease-in-out,opacity .3s ease-in-out}.wb-account-overlay[data-v-ea58cb5e]{position:fixed;top:66px;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);overflow:hidden;transition:opacity .3s ease-in-out;opacity:0;pointer-events:none}.wb-account-opened[data-v-ea58cb5e]{opacity:1;pointer-events:auto}.wb-account-opened .wb-account-dropdown[data-v-ea58cb5e]{opacity:1;transform:translateY(0);pointer-events:auto}.wb-account-link[data-v-ea58cb5e]{display:block;color:#fff;text-decoration:none;line-height:24px;padding:8px 0 12px;border-top:1px solid #777}.wb-account-link[data-v-ea58cb5e]:hover{text-shadow:0 0 15px #fff,0 0 30px #09f}.wb-account-link>span[data-v-ea58cb5e]{vertical-align:middle}.wb-account-logout[data-v-ea58cb5e]{background-color:#3998d8;color:#fff;border:0;display:block;width:100%;height:50px;margin-bottom:12px;font-size:16px;cursor:pointer;font-weight:700}.wb-account-logout[data-v-ea58cb5e]:hover{box-shadow:0 0 30px #09f}.wb-account-icon[data-v-ea58cb5e]{padding-right:12px;font-family:initial;font-size:28px;color:#3998d8}", ""]), t["default"] = l
            },
            645: function(e) {
                "use strict";
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var n = "",
                                o = "undefined" !== typeof t[5];
                            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), o && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), o && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                        })).join("")
                    }, t.i = function(e, n, o, r, s) {
                        "string" === typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var i = {};
                        if (o)
                            for (var l = 0; l < this.length; l++) {
                                var c = this[l][0];
                                null != c && (i[c] = !0)
                            }
                        for (var a = 0; a < e.length; a++) {
                            var u = [].concat(e[a]);
                            o && i[u[0]] || ("undefined" !== typeof s && ("undefined" === typeof u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = s), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = r) : u[4] = "".concat(r)), t.push(u))
                        }
                    }, t
                }
            },
            81: function(e) {
                "use strict";
                e.exports = function(e) {
                    return e[1]
                }
            },
            744: function(e, t) {
                "use strict";
                t.Z = (e, t) => {
                    const n = e.__vccOpts || e;
                    for (const [o, r] of t) n[o] = r;
                    return n
                }
            },
            904: function(e, t, n) {
                var o = n(718);
                o.__esModule && (o = o.default), "string" === typeof o && (o = [
                    [e.id, o, ""]
                ]), o.locals && (e.exports = o.locals);
                var r = n(402).Z;
                r("1287581c", o, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            },
            258: function(e, t, n) {
                var o = n(474);
                o.__esModule && (o = o.default), "string" === typeof o && (o = [
                    [e.id, o, ""]
                ]), o.locals && (e.exports = o.locals);
                var r = n(402).Z;
                r("65ddab75", o, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            },
            111: function(e, t, n) {
                var o = n(843);
                o.__esModule && (o = o.default), "string" === typeof o && (o = [
                    [e.id, o, ""]
                ]), o.locals && (e.exports = o.locals);
                var r = n(402).Z;
                r("34eb690b", o, !0, {
                    sourceMap: !1,
                    shadowMode: !1
                })
            },
            402: function(e, t, n) {
                "use strict";

                function o(e, t) {
                    for (var n = [], o = {}, r = 0; r < t.length; r++) {
                        var s = t[r],
                            i = s[0],
                            l = s[1],
                            c = s[2],
                            a = s[3],
                            u = {
                                id: e + ":" + r,
                                css: l,
                                media: c,
                                sourceMap: a
                            };
                        o[i] ? o[i].parts.push(u) : n.push(o[i] = {
                            id: i,
                            parts: [u]
                        })
                    }
                    return n
                }
                n.d(t, {
                    Z: function() {
                        return h
                    }
                });
                var r = "undefined" !== typeof document;
                if ("undefined" !== typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                var s = {},
                    i = r && (document.head || document.getElementsByTagName("head")[0]),
                    l = null,
                    c = 0,
                    a = !1,
                    u = function() {},
                    f = null,
                    p = "data-vue-ssr-id",
                    d = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function h(e, t, n, r) {
                    a = n, f = r || {};
                    var i = o(e, t);
                    return g(i),
                        function(t) {
                            for (var n = [], r = 0; r < i.length; r++) {
                                var l = i[r],
                                    c = s[l.id];
                                c.refs--, n.push(c)
                            }
                            t ? (i = o(e, t), g(i)) : i = [];
                            for (r = 0; r < n.length; r++) {
                                c = n[r];
                                if (0 === c.refs) {
                                    for (var a = 0; a < c.parts.length; a++) c.parts[a]();
                                    delete s[c.id]
                                }
                            }
                        }
                }

                function g(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t],
                            o = s[n.id];
                        if (o) {
                            o.refs++;
                            for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
                            for (; r < n.parts.length; r++) o.parts.push(b(n.parts[r]));
                            o.parts.length > n.parts.length && (o.parts.length = n.parts.length)
                        } else {
                            var i = [];
                            for (r = 0; r < n.parts.length; r++) i.push(b(n.parts[r]));
                            s[n.id] = {
                                id: n.id,
                                refs: 1,
                                parts: i
                            }
                        }
                    }
                }

                function v() {
                    var e = document.createElement("style");
                    return e.type = "text/css", i.appendChild(e), e
                }

                function b(e) {
                    var t, n, o = document.querySelector("style[" + p + '~="' + e.id + '"]');
                    if (o) {
                        if (a) return u;
                        o.parentNode.removeChild(o)
                    }
                    if (d) {
                        var r = c++;
                        o = l || (l = v()), t = y.bind(null, o, r, !1), n = y.bind(null, o, r, !0)
                    } else o = v(), t = _.bind(null, o), n = function() {
                        o.parentNode.removeChild(o)
                    };
                    return t(e),
                        function(o) {
                            if (o) {
                                if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return;
                                t(e = o)
                            } else n()
                        }
                }
                var m = function() {
                    var e = [];
                    return function(t, n) {
                        return e[t] = n, e.filter(Boolean).join("\n")
                    }
                }();

                function y(e, t, n, o) {
                    var r = n ? "" : o.css;
                    if (e.styleSheet) e.styleSheet.cssText = m(t, r);
                    else {
                        var s = document.createTextNode(r),
                            i = e.childNodes;
                        i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(s, i[t]) : e.appendChild(s)
                    }
                }

                function _(e, t) {
                    var n = t.css,
                        o = t.media,
                        r = t.sourceMap;
                    if (o && e.setAttribute("media", o), f.ssrId && e.setAttribute(p, t.id), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
                    else {
                        while (e.firstChild) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n))
                    }
                }
            }
        },
        t = {};

    function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var s = t[o] = {
            id: o,
            exports: {}
        };
        return e[o](s, s.exports, n), s.exports
    }! function() {
        n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e["default"]
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }
    }(),
    function() {
        n.d = function(e, t) {
            for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
        }
    }(),
    function() {
        n.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }()
    }(),
    function() {
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }(),
    function() {
        n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }();
    ! function() {
        "use strict";

        function e(e, t) {
            const n = Object.create(null),
                o = e.split(",");
            for (let r = 0; r < o.length; r++) n[o[r]] = !0;
            return t ? e => !!n[e.toLowerCase()] : e => !!n[e]
        }
        const t = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
            o = e(t);

        function r(e) {
            return !!e || "" === e
        }

        function s(e) {
            if (x(e)) {
                const t = {};
                for (let n = 0; n < e.length; n++) {
                    const o = e[n],
                        r = E(o) ? c(o) : s(o);
                    if (r)
                        for (const e in r) t[e] = r[e]
                }
                return t
            }
            return E(e) || A(e) ? e : void 0
        }
        const i = /;(?![^(]*\))/g,
            l = /:(.+)/;

        function c(e) {
            const t = {};
            return e.split(i).forEach((e => {
                if (e) {
                    const n = e.split(l);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim())
                }
            })), t
        }

        function a(e) {
            let t = "";
            if (E(e)) t = e;
            else if (x(e))
                for (let n = 0; n < e.length; n++) {
                    const o = a(e[n]);
                    o && (t += o + " ")
                } else if (A(e))
                    for (const n in e) e[n] && (t += n + " ");
            return t.trim()
        }
        const u = e => E(e) ? e : null == e ? "" : x(e) || A(e) && (e.toString === M || !O(e.toString)) ? JSON.stringify(e, f, 2) : String(e),
            f = (e, t) => t && t.__v_isRef ? f(e, t.value) : S(t) ? {
                [`Map(${t.size})`]: [...t.entries()].reduce(((e, [t, n]) => (e[`${t} =>`] = n, e)), {})
            } : C(t) ? {
                [`Set(${t.size})`]: [...t.values()]
            } : !A(t) || x(t) || N(t) ? t : String(t),
            p = {},
            d = [],
            h = () => {},
            g = () => !1,
            v = /^on[^a-z]/,
            b = e => v.test(e),
            m = e => e.startsWith("onUpdate:"),
            y = Object.assign,
            _ = (e, t) => {
                const n = e.indexOf(t);
                n > -1 && e.splice(n, 1)
            },
            w = Object.prototype.hasOwnProperty,
            k = (e, t) => w.call(e, t),
            x = Array.isArray,
            S = e => "[object Map]" === j(e),
            C = e => "[object Set]" === j(e),
            O = e => "function" === typeof e,
            E = e => "string" === typeof e,
            L = e => "symbol" === typeof e,
            A = e => null !== e && "object" === typeof e,
            F = e => A(e) && O(e.then) && O(e.catch),
            M = Object.prototype.toString,
            j = e => M.call(e),
            T = e => j(e).slice(8, -1),
            N = e => "[object Object]" === j(e),
            P = e => E(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
            $ = e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
            B = e => {
                const t = Object.create(null);
                return n => {
                    const o = t[n];
                    return o || (t[n] = e(n))
                }
            },
            R = /-(\w)/g,
            U = B((e => e.replace(R, ((e, t) => t ? t.toUpperCase() : "")))),
            D = /\B([A-Z])/g,
            I = B((e => e.replace(D, "-$1").toLowerCase())),
            V = B((e => e.charAt(0).toUpperCase() + e.slice(1))),
            W = B((e => e ? `on${V(e)}` : "")),
            K = (e, t) => !Object.is(e, t),
            J = (e, t) => {
                for (let n = 0; n < e.length; n++) e[n](t)
            },
            z = (e, t, n) => {
                Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !1,
                    value: n
                })
            },
            q = e => {
                const t = parseFloat(e);
                return isNaN(t) ? e : t
            };
        let H;
        const Z = () => H || (H = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof n.g ? n.g : {});
        let G;
        class Y {
            constructor(e = !1) {
                this.active = !0, this.effects = [], this.cleanups = [], !e && G && (this.parent = G, this.index = (G.scopes || (G.scopes = [])).push(this) - 1)
            }
            run(e) {
                if (this.active) {
                    const t = G;
                    try {
                        return G = this, e()
                    } finally {
                        G = t
                    }
                } else 0
            }
            on() {
                G = this
            }
            off() {
                G = this.parent
            }
            stop(e) {
                if (this.active) {
                    let t, n;
                    for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
                    for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
                    if (this.scopes)
                        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
                    if (this.parent && !e) {
                        const e = this.parent.scopes.pop();
                        e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index)
                    }
                    this.active = !1
                }
            }
        }

        function X(e, t = G) {
            t && t.active && t.effects.push(e)
        }
        const Q = e => {
                const t = new Set(e);
                return t.w = 0, t.n = 0, t
            },
            ee = e => (e.w & ie) > 0,
            te = e => (e.n & ie) > 0,
            ne = ({
                deps: e
            }) => {
                if (e.length)
                    for (let t = 0; t < e.length; t++) e[t].w |= ie
            },
            oe = e => {
                const {
                    deps: t
                } = e;
                if (t.length) {
                    let n = 0;
                    for (let o = 0; o < t.length; o++) {
                        const r = t[o];
                        ee(r) && !te(r) ? r.delete(e) : t[n++] = r, r.w &= ~ie, r.n &= ~ie
                    }
                    t.length = n
                }
            },
            re = new WeakMap;
        let se = 0,
            ie = 1;
        const le = 30;
        let ce;
        const ae = Symbol(""),
            ue = Symbol("");
        class fe {
            constructor(e, t = null, n) {
                this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, X(this, n)
            }
            run() {
                if (!this.active) return this.fn();
                let e = ce,
                    t = de;
                while (e) {
                    if (e === this) return;
                    e = e.parent
                }
                try {
                    return this.parent = ce, ce = this, de = !0, ie = 1 << ++se, se <= le ? ne(this) : pe(this), this.fn()
                } finally {
                    se <= le && oe(this), ie = 1 << --se, ce = this.parent, de = t, this.parent = void 0, this.deferStop && this.stop()
                }
            }
            stop() {
                ce === this ? this.deferStop = !0 : this.active && (pe(this), this.onStop && this.onStop(), this.active = !1)
            }
        }

        function pe(e) {
            const {
                deps: t
            } = e;
            if (t.length) {
                for (let n = 0; n < t.length; n++) t[n].delete(e);
                t.length = 0
            }
        }
        let de = !0;
        const he = [];

        function ge() {
            he.push(de), de = !1
        }

        function ve() {
            const e = he.pop();
            de = void 0 === e || e
        }

        function be(e, t, n) {
            if (de && ce) {
                let t = re.get(e);
                t || re.set(e, t = new Map);
                let o = t.get(n);
                o || t.set(n, o = Q());
                const r = void 0;
                me(o, r)
            }
        }

        function me(e, t) {
            let n = !1;
            se <= le ? te(e) || (e.n |= ie, n = !ee(e)) : n = !e.has(ce), n && (e.add(ce), ce.deps.push(e))
        }

        function ye(e, t, n, o, r, s) {
            const i = re.get(e);
            if (!i) return;
            let l = [];
            if ("clear" === t) l = [...i.values()];
            else if ("length" === n && x(e)) i.forEach(((e, t) => {
                ("length" === t || t >= o) && l.push(e)
            }));
            else switch (void 0 !== n && l.push(i.get(n)), t) {
                case "add":
                    x(e) ? P(n) && l.push(i.get("length")) : (l.push(i.get(ae)), S(e) && l.push(i.get(ue)));
                    break;
                case "delete":
                    x(e) || (l.push(i.get(ae)), S(e) && l.push(i.get(ue)));
                    break;
                case "set":
                    S(e) && l.push(i.get(ae));
                    break
            }
            if (1 === l.length) l[0] && _e(l[0]);
            else {
                const e = [];
                for (const t of l) t && e.push(...t);
                _e(Q(e))
            }
        }

        function _e(e, t) {
            const n = x(e) ? e : [...e];
            for (const o of n) o.computed && we(o, t);
            for (const o of n) o.computed || we(o, t)
        }

        function we(e, t) {
            (e !== ce || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
        }
        const ke = e("__proto__,__v_isRef,__isVue"),
            xe = new Set(Object.getOwnPropertyNames(Symbol).filter((e => "arguments" !== e && "caller" !== e)).map((e => Symbol[e])).filter(L)),
            Se = Ae(),
            Ce = Ae(!1, !0),
            Oe = Ae(!0),
            Ee = Le();

        function Le() {
            const e = {};
            return ["includes", "indexOf", "lastIndexOf"].forEach((t => {
                e[t] = function(...e) {
                    const n = _t(this);
                    for (let t = 0, r = this.length; t < r; t++) be(n, "get", t + "");
                    const o = n[t](...e);
                    return -1 === o || !1 === o ? n[t](...e.map(_t)) : o
                }
            })), ["push", "pop", "shift", "unshift", "splice"].forEach((t => {
                e[t] = function(...e) {
                    ge();
                    const n = _t(this)[t].apply(this, e);
                    return ve(), n
                }
            })), e
        }

        function Ae(e = !1, t = !1) {
            return function(n, o, r) {
                if ("__v_isReactive" === o) return !e;
                if ("__v_isReadonly" === o) return e;
                if ("__v_isShallow" === o) return t;
                if ("__v_raw" === o && r === (e ? t ? at : ct : t ? lt : it).get(n)) return n;
                const s = x(n);
                if (!e && s && k(Ee, o)) return Reflect.get(Ee, o, r);
                const i = Reflect.get(n, o, r);
                return (L(o) ? xe.has(o) : ke(o)) ? i : (e || be(n, "get", o), t ? i : Ot(i) ? s && P(o) ? i : i.value : A(i) ? e ? ht(i) : pt(i) : i)
            }
        }
        const Fe = je(),
            Me = je(!0);

        function je(e = !1) {
            return function(t, n, o, r) {
                let s = t[n];
                if (bt(s) && Ot(s) && !Ot(o)) return !1;
                if (!e && !bt(o) && (mt(o) || (o = _t(o), s = _t(s)), !x(t) && Ot(s) && !Ot(o))) return s.value = o, !0;
                const i = x(t) && P(n) ? Number(n) < t.length : k(t, n),
                    l = Reflect.set(t, n, o, r);
                return t === _t(r) && (i ? K(o, s) && ye(t, "set", n, o, s) : ye(t, "add", n, o)), l
            }
        }

        function Te(e, t) {
            const n = k(e, t),
                o = e[t],
                r = Reflect.deleteProperty(e, t);
            return r && n && ye(e, "delete", t, void 0, o), r
        }

        function Ne(e, t) {
            const n = Reflect.has(e, t);
            return L(t) && xe.has(t) || be(e, "has", t), n
        }

        function Pe(e) {
            return be(e, "iterate", x(e) ? "length" : ae), Reflect.ownKeys(e)
        }
        const $e = {
                get: Se,
                set: Fe,
                deleteProperty: Te,
                has: Ne,
                ownKeys: Pe
            },
            Be = {
                get: Oe,
                set(e, t) {
                    return !0
                },
                deleteProperty(e, t) {
                    return !0
                }
            },
            Re = y({}, $e, {
                get: Ce,
                set: Me
            }),
            Ue = e => e,
            De = e => Reflect.getPrototypeOf(e);

        function Ie(e, t, n = !1, o = !1) {
            e = e["__v_raw"];
            const r = _t(e),
                s = _t(t);
            n || (t !== s && be(r, "get", t), be(r, "get", s));
            const {
                has: i
            } = De(r), l = o ? Ue : n ? xt : kt;
            return i.call(r, t) ? l(e.get(t)) : i.call(r, s) ? l(e.get(s)) : void(e !== r && e.get(t))
        }

        function Ve(e, t = !1) {
            const n = this["__v_raw"],
                o = _t(n),
                r = _t(e);
            return t || (e !== r && be(o, "has", e), be(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r)
        }

        function We(e, t = !1) {
            return e = e["__v_raw"], !t && be(_t(e), "iterate", ae), Reflect.get(e, "size", e)
        }

        function Ke(e) {
            e = _t(e);
            const t = _t(this),
                n = De(t),
                o = n.has.call(t, e);
            return o || (t.add(e), ye(t, "add", e, e)), this
        }

        function Je(e, t) {
            t = _t(t);
            const n = _t(this),
                {
                    has: o,
                    get: r
                } = De(n);
            let s = o.call(n, e);
            s || (e = _t(e), s = o.call(n, e));
            const i = r.call(n, e);
            return n.set(e, t), s ? K(t, i) && ye(n, "set", e, t, i) : ye(n, "add", e, t), this
        }

        function ze(e) {
            const t = _t(this),
                {
                    has: n,
                    get: o
                } = De(t);
            let r = n.call(t, e);
            r || (e = _t(e), r = n.call(t, e));
            const s = o ? o.call(t, e) : void 0,
                i = t.delete(e);
            return r && ye(t, "delete", e, void 0, s), i
        }

        function qe() {
            const e = _t(this),
                t = 0 !== e.size,
                n = void 0,
                o = e.clear();
            return t && ye(e, "clear", void 0, void 0, n), o
        }

        function He(e, t) {
            return function(n, o) {
                const r = this,
                    s = r["__v_raw"],
                    i = _t(s),
                    l = t ? Ue : e ? xt : kt;
                return !e && be(i, "iterate", ae), s.forEach(((e, t) => n.call(o, l(e), l(t), r)))
            }
        }

        function Ze(e, t, n) {
            return function(...o) {
                const r = this["__v_raw"],
                    s = _t(r),
                    i = S(s),
                    l = "entries" === e || e === Symbol.iterator && i,
                    c = "keys" === e && i,
                    a = r[e](...o),
                    u = n ? Ue : t ? xt : kt;
                return !t && be(s, "iterate", c ? ue : ae), {
                    next() {
                        const {
                            value: e,
                            done: t
                        } = a.next();
                        return t ? {
                            value: e,
                            done: t
                        } : {
                            value: l ? [u(e[0]), u(e[1])] : u(e),
                            done: t
                        }
                    },
                    [Symbol.iterator]() {
                        return this
                    }
                }
            }
        }

        function Ge(e) {
            return function(...t) {
                return "delete" !== e && this
            }
        }

        function Ye() {
            const e = {
                    get(e) {
                        return Ie(this, e)
                    },
                    get size() {
                        return We(this)
                    },
                    has: Ve,
                    add: Ke,
                    set: Je,
                    delete: ze,
                    clear: qe,
                    forEach: He(!1, !1)
                },
                t = {
                    get(e) {
                        return Ie(this, e, !1, !0)
                    },
                    get size() {
                        return We(this)
                    },
                    has: Ve,
                    add: Ke,
                    set: Je,
                    delete: ze,
                    clear: qe,
                    forEach: He(!1, !0)
                },
                n = {
                    get(e) {
                        return Ie(this, e, !0)
                    },
                    get size() {
                        return We(this, !0)
                    },
                    has(e) {
                        return Ve.call(this, e, !0)
                    },
                    add: Ge("add"),
                    set: Ge("set"),
                    delete: Ge("delete"),
                    clear: Ge("clear"),
                    forEach: He(!0, !1)
                },
                o = {
                    get(e) {
                        return Ie(this, e, !0, !0)
                    },
                    get size() {
                        return We(this, !0)
                    },
                    has(e) {
                        return Ve.call(this, e, !0)
                    },
                    add: Ge("add"),
                    set: Ge("set"),
                    delete: Ge("delete"),
                    clear: Ge("clear"),
                    forEach: He(!0, !0)
                },
                r = ["keys", "values", "entries", Symbol.iterator];
            return r.forEach((r => {
                e[r] = Ze(r, !1, !1), n[r] = Ze(r, !0, !1), t[r] = Ze(r, !1, !0), o[r] = Ze(r, !0, !0)
            })), [e, n, t, o]
        }
        const [Xe, Qe, et, tt] = Ye();

        function nt(e, t) {
            const n = t ? e ? tt : et : e ? Qe : Xe;
            return (t, o, r) => "__v_isReactive" === o ? !e : "__v_isReadonly" === o ? e : "__v_raw" === o ? t : Reflect.get(k(n, o) && o in t ? n : t, o, r)
        }
        const ot = {
                get: nt(!1, !1)
            },
            rt = {
                get: nt(!1, !0)
            },
            st = {
                get: nt(!0, !1)
            };
        const it = new WeakMap,
            lt = new WeakMap,
            ct = new WeakMap,
            at = new WeakMap;

        function ut(e) {
            switch (e) {
                case "Object":
                case "Array":
                    return 1;
                case "Map":
                case "Set":
                case "WeakMap":
                case "WeakSet":
                    return 2;
                default:
                    return 0
            }
        }

        function ft(e) {
            return e["__v_skip"] || !Object.isExtensible(e) ? 0 : ut(T(e))
        }

        function pt(e) {
            return bt(e) ? e : gt(e, !1, $e, ot, it)
        }

        function dt(e) {
            return gt(e, !1, Re, rt, lt)
        }

        function ht(e) {
            return gt(e, !0, Be, st, ct)
        }

        function gt(e, t, n, o, r) {
            if (!A(e)) return e;
            if (e["__v_raw"] && (!t || !e["__v_isReactive"])) return e;
            const s = r.get(e);
            if (s) return s;
            const i = ft(e);
            if (0 === i) return e;
            const l = new Proxy(e, 2 === i ? o : n);
            return r.set(e, l), l
        }

        function vt(e) {
            return bt(e) ? vt(e["__v_raw"]) : !(!e || !e["__v_isReactive"])
        }

        function bt(e) {
            return !(!e || !e["__v_isReadonly"])
        }

        function mt(e) {
            return !(!e || !e["__v_isShallow"])
        }

        function yt(e) {
            return vt(e) || bt(e)
        }

        function _t(e) {
            const t = e && e["__v_raw"];
            return t ? _t(t) : e
        }

        function wt(e) {
            return z(e, "__v_skip", !0), e
        }
        const kt = e => A(e) ? pt(e) : e,
            xt = e => A(e) ? ht(e) : e;

        function St(e) {
            de && ce && (e = _t(e), me(e.dep || (e.dep = Q())))
        }

        function Ct(e, t) {
            e = _t(e), e.dep && _e(e.dep)
        }

        function Ot(e) {
            return !(!e || !0 !== e.__v_isRef)
        }

        function Et(e) {
            return Ot(e) ? e.value : e
        }
        const Lt = {
            get: (e, t, n) => Et(Reflect.get(e, t, n)),
            set: (e, t, n, o) => {
                const r = e[t];
                return Ot(r) && !Ot(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o)
            }
        };

        function At(e) {
            return vt(e) ? e : new Proxy(e, Lt)
        }
        class Ft {
            constructor(e, t, n, o) {
                this._setter = t, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new fe(e, (() => {
                    this._dirty || (this._dirty = !0, Ct(this))
                })), this.effect.computed = this, this.effect.active = this._cacheable = !o, this["__v_isReadonly"] = n
            }
            get value() {
                const e = _t(this);
                return St(e), !e._dirty && e._cacheable || (e._dirty = !1, e._value = e.effect.run()), e._value
            }
            set value(e) {
                this._setter(e)
            }
        }

        function Mt(e, t, n = !1) {
            let o, r;
            const s = O(e);
            s ? (o = e, r = h) : (o = e.get, r = e.set);
            const i = new Ft(o, r, s || !r, n);
            return i
        }

        function jt(e, t, n, o) {
            let r;
            try {
                r = o ? e(...o) : e()
            } catch (s) {
                Nt(s, t, n)
            }
            return r
        }

        function Tt(e, t, n, o) {
            if (O(e)) {
                const r = jt(e, t, n, o);
                return r && F(r) && r.catch((e => {
                    Nt(e, t, n)
                })), r
            }
            const r = [];
            for (let s = 0; s < e.length; s++) r.push(Tt(e[s], t, n, o));
            return r
        }

        function Nt(e, t, n, o = !0) {
            const r = t ? t.vnode : null;
            if (t) {
                let o = t.parent;
                const r = t.proxy,
                    s = n;
                while (o) {
                    const t = o.ec;
                    if (t)
                        for (let n = 0; n < t.length; n++)
                            if (!1 === t[n](e, r, s)) return;
                    o = o.parent
                }
                const i = t.appContext.config.errorHandler;
                if (i) return void jt(i, null, 10, [e, r, s])
            }
            Pt(e, n, r, o)
        }

        function Pt(e, t, n, o = !0) {
            console.error(e)
        }
        let $t = !1,
            Bt = !1;
        const Rt = [];
        let Ut = 0;
        const Dt = [];
        let It = null,
            Vt = 0;
        const Wt = [];
        let Kt = null,
            Jt = 0;
        const zt = Promise.resolve();
        let qt = null,
            Ht = null;

        function Zt(e) {
            const t = qt || zt;
            return e ? t.then(this ? e.bind(this) : e) : t
        }

        function Gt(e) {
            let t = Ut + 1,
                n = Rt.length;
            while (t < n) {
                const o = t + n >>> 1,
                    r = sn(Rt[o]);
                r < e ? t = o + 1 : n = o
            }
            return t
        }

        function Yt(e) {
            Rt.length && Rt.includes(e, $t && e.allowRecurse ? Ut + 1 : Ut) || e === Ht || (null == e.id ? Rt.push(e) : Rt.splice(Gt(e.id), 0, e), Xt())
        }

        function Xt() {
            $t || Bt || (Bt = !0, qt = zt.then(ln))
        }

        function Qt(e) {
            const t = Rt.indexOf(e);
            t > Ut && Rt.splice(t, 1)
        }

        function en(e, t, n, o) {
            x(e) ? n.push(...e) : t && t.includes(e, e.allowRecurse ? o + 1 : o) || n.push(e), Xt()
        }

        function tn(e) {
            en(e, It, Dt, Vt)
        }

        function nn(e) {
            en(e, Kt, Wt, Jt)
        }

        function on(e, t = null) {
            if (Dt.length) {
                for (Ht = t, It = [...new Set(Dt)], Dt.length = 0, Vt = 0; Vt < It.length; Vt++) It[Vt]();
                It = null, Vt = 0, Ht = null, on(e, t)
            }
        }

        function rn(e) {
            if (on(), Wt.length) {
                const e = [...new Set(Wt)];
                if (Wt.length = 0, Kt) return void Kt.push(...e);
                for (Kt = e, Kt.sort(((e, t) => sn(e) - sn(t))), Jt = 0; Jt < Kt.length; Jt++) Kt[Jt]();
                Kt = null, Jt = 0
            }
        }
        const sn = e => null == e.id ? 1 / 0 : e.id;

        function ln(e) {
            Bt = !1, $t = !0, on(e), Rt.sort(((e, t) => sn(e) - sn(t)));
            try {
                for (Ut = 0; Ut < Rt.length; Ut++) {
                    const e = Rt[Ut];
                    e && !1 !== e.active && jt(e, null, 14)
                }
            } finally {
                Ut = 0, Rt.length = 0, rn(e), $t = !1, qt = null, (Rt.length || Dt.length || Wt.length) && ln(e)
            }
        }
        new Set;
        new Map;

        function cn(e, t, ...n) {
            if (e.isUnmounted) return;
            const o = e.vnode.props || p;
            let r = n;
            const s = t.startsWith("update:"),
                i = s && t.slice(7);
            if (i && i in o) {
                const e = `${"modelValue"===i?"model":i}Modifiers`,
                    {
                        number: t,
                        trim: s
                    } = o[e] || p;
                s && (r = n.map((e => e.trim()))), t && (r = n.map(q))
            }
            let l;
            let c = o[l = W(t)] || o[l = W(U(t))];
            !c && s && (c = o[l = W(I(t))]), c && Tt(c, e, 6, r);
            const a = o[l + "Once"];
            if (a) {
                if (e.emitted) {
                    if (e.emitted[l]) return
                } else e.emitted = {};
                e.emitted[l] = !0, Tt(a, e, 6, r)
            }
        }

        function an(e, t, n = !1) {
            const o = t.emitsCache,
                r = o.get(e);
            if (void 0 !== r) return r;
            const s = e.emits;
            let i = {},
                l = !1;
            if (!O(e)) {
                const o = e => {
                    const n = an(e, t, !0);
                    n && (l = !0, y(i, n))
                };
                !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o)
            }
            return s || l ? (x(s) ? s.forEach((e => i[e] = null)) : y(i, s), o.set(e, i), i) : (o.set(e, null), null)
        }

        function un(e, t) {
            return !(!e || !b(t)) && (t = t.slice(2).replace(/Once$/, ""), k(e, t[0].toLowerCase() + t.slice(1)) || k(e, I(t)) || k(e, t))
        }
        let fn = null,
            pn = null;

        function dn(e) {
            const t = fn;
            return fn = e, pn = e && e.type.__scopeId || null, t
        }

        function hn(e) {
            pn = e
        }

        function gn() {
            pn = null
        }

        function vn(e, t = fn, n) {
            if (!t) return e;
            if (e._n) return e;
            const o = (...n) => {
                o._d && mr(-1);
                const r = dn(t),
                    s = e(...n);
                return dn(r), o._d && mr(1), s
            };
            return o._n = !0, o._c = !0, o._d = !0, o
        }

        function bn(e) {
            const {
                type: t,
                vnode: n,
                proxy: o,
                withProxy: r,
                props: s,
                propsOptions: [i],
                slots: l,
                attrs: c,
                emit: a,
                render: u,
                renderCache: f,
                data: p,
                setupState: d,
                ctx: h,
                inheritAttrs: g
            } = e;
            let v, b;
            const y = dn(e);
            try {
                if (4 & n.shapeFlag) {
                    const e = r || o;
                    v = Nr(u.call(e, e, f, s, d, p, h)), b = c
                } else {
                    const e = t;
                    0, v = Nr(e.length > 1 ? e(s, {
                        attrs: c,
                        slots: l,
                        emit: a
                    }) : e(s, null)), b = t.props ? c : mn(c)
                }
            } catch (w) {
                dr.length = 0, Nt(w, e, 1), v = Lr(fr)
            }
            let _ = v;
            if (b && !1 !== g) {
                const e = Object.keys(b),
                    {
                        shapeFlag: t
                    } = _;
                e.length && 7 & t && (i && e.some(m) && (b = yn(b, i)), _ = Mr(_, b))
            }
            return n.dirs && (_ = Mr(_), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && (_.transition = n.transition), v = _, dn(y), v
        }
        const mn = e => {
                let t;
                for (const n in e)("class" === n || "style" === n || b(n)) && ((t || (t = {}))[n] = e[n]);
                return t
            },
            yn = (e, t) => {
                const n = {};
                for (const o in e) m(o) && o.slice(9) in t || (n[o] = e[o]);
                return n
            };

        function _n(e, t, n) {
            const {
                props: o,
                children: r,
                component: s
            } = e, {
                props: i,
                children: l,
                patchFlag: c
            } = t, a = s.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && c >= 0)) return !(!r && !l || l && l.$stable) || o !== i && (o ? !i || wn(o, i, a) : !!i);
            if (1024 & c) return !0;
            if (16 & c) return o ? wn(o, i, a) : !!i;
            if (8 & c) {
                const e = t.dynamicProps;
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    if (i[n] !== o[n] && !un(a, n)) return !0
                }
            }
            return !1
        }

        function wn(e, t, n) {
            const o = Object.keys(t);
            if (o.length !== Object.keys(e).length) return !0;
            for (let r = 0; r < o.length; r++) {
                const s = o[r];
                if (t[s] !== e[s] && !un(n, s)) return !0
            }
            return !1
        }

        function kn({
            vnode: e,
            parent: t
        }, n) {
            while (t && t.subTree === e)(e = t.vnode).el = n, t = t.parent
        }
        const xn = e => e.__isSuspense;

        function Sn(e, t) {
            t && t.pendingBranch ? x(e) ? t.effects.push(...e) : t.effects.push(e) : nn(e)
        }

        function Cn(e, t) {
            if (Vr) {
                let n = Vr.provides;
                const o = Vr.parent && Vr.parent.provides;
                o === n && (n = Vr.provides = Object.create(o)), n[e] = t
            } else 0
        }

        function On(e, t, n = !1) {
            const o = Vr || fn;
            if (o) {
                const r = null == o.parent ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides;
                if (r && e in r) return r[e];
                if (arguments.length > 1) return n && O(t) ? t.call(o.proxy) : t
            } else 0
        }
        const En = {};

        function Ln(e, t, n) {
            return An(e, t, n)
        }

        function An(e, t, {
            immediate: n,
            deep: o,
            flush: r,
            onTrack: s,
            onTrigger: i
        } = p) {
            const l = Vr;
            let c, a, u = !1,
                f = !1;
            if (Ot(e) ? (c = () => e.value, u = mt(e)) : vt(e) ? (c = () => e, o = !0) : x(e) ? (f = !0, u = e.some((e => vt(e) || mt(e))), c = () => e.map((e => Ot(e) ? e.value : vt(e) ? jn(e) : O(e) ? jt(e, l, 2) : void 0))) : c = O(e) ? t ? () => jt(e, l, 2) : () => {
                    if (!l || !l.isUnmounted) return a && a(), Tt(e, l, 3, [d])
                } : h, t && o) {
                const e = c;
                c = () => jn(e())
            }
            let d = e => {
                a = m.onStop = () => {
                    jt(e, l, 4)
                }
            };
            if (Zr) return d = h, t ? n && Tt(t, l, 3, [c(), f ? [] : void 0, d]) : c(), h;
            let g = f ? [] : En;
            const v = () => {
                if (m.active)
                    if (t) {
                        const e = m.run();
                        (o || u || (f ? e.some(((e, t) => K(e, g[t]))) : K(e, g))) && (a && a(), Tt(t, l, 3, [e, g === En ? void 0 : g, d]), g = e)
                    } else m.run()
            };
            let b;
            v.allowRecurse = !!t, b = "sync" === r ? v : "post" === r ? () => nr(v, l && l.suspense) : () => tn(v);
            const m = new fe(c, b);
            return t ? n ? v() : g = m.run() : "post" === r ? nr(m.run.bind(m), l && l.suspense) : m.run(), () => {
                m.stop(), l && l.scope && _(l.scope.effects, m)
            }
        }

        function Fn(e, t, n) {
            const o = this.proxy,
                r = E(e) ? e.includes(".") ? Mn(o, e) : () => o[e] : e.bind(o, o);
            let s;
            O(t) ? s = t : (s = t.handler, n = t);
            const i = Vr;
            Kr(this);
            const l = An(r, s.bind(o), n);
            return i ? Kr(i) : Jr(), l
        }

        function Mn(e, t) {
            const n = t.split(".");
            return () => {
                let t = e;
                for (let e = 0; e < n.length && t; e++) t = t[n[e]];
                return t
            }
        }

        function jn(e, t) {
            if (!A(e) || e["__v_skip"]) return e;
            if (t = t || new Set, t.has(e)) return e;
            if (t.add(e), Ot(e)) jn(e.value, t);
            else if (x(e))
                for (let n = 0; n < e.length; n++) jn(e[n], t);
            else if (C(e) || S(e)) e.forEach((e => {
                jn(e, t)
            }));
            else if (N(e))
                for (const n in e) jn(e[n], t);
            return e
        }

        function Tn() {
            const e = {
                isMounted: !1,
                isLeaving: !1,
                isUnmounting: !1,
                leavingVNodes: new Map
            };
            return to((() => {
                e.isMounted = !0
            })), ro((() => {
                e.isUnmounting = !0
            })), e
        }
        const Nn = [Function, Array],
            Pn = {
                name: "BaseTransition",
                props: {
                    mode: String,
                    appear: Boolean,
                    persisted: Boolean,
                    onBeforeEnter: Nn,
                    onEnter: Nn,
                    onAfterEnter: Nn,
                    onEnterCancelled: Nn,
                    onBeforeLeave: Nn,
                    onLeave: Nn,
                    onAfterLeave: Nn,
                    onLeaveCancelled: Nn,
                    onBeforeAppear: Nn,
                    onAppear: Nn,
                    onAfterAppear: Nn,
                    onAppearCancelled: Nn
                },
                setup(e, {
                    slots: t
                }) {
                    const n = Wr(),
                        o = Tn();
                    let r;
                    return () => {
                        const s = t.default && Vn(t.default(), !0);
                        if (!s || !s.length) return;
                        let i = s[0];
                        if (s.length > 1) {
                            let e = !1;
                            for (const t of s)
                                if (t.type !== fr) {
                                    0,
                                    i = t,
                                    e = !0;
                                    break
                                }
                        }
                        const l = _t(e),
                            {
                                mode: c
                            } = l;
                        if (o.isLeaving) return Un(i);
                        const a = Dn(i);
                        if (!a) return Un(i);
                        const u = Rn(a, l, o, n);
                        In(a, u);
                        const f = n.subTree,
                            p = f && Dn(f);
                        let d = !1;
                        const {
                            getTransitionKey: h
                        } = a.type;
                        if (h) {
                            const e = h();
                            void 0 === r ? r = e : e !== r && (r = e, d = !0)
                        }
                        if (p && p.type !== fr && (!xr(a, p) || d)) {
                            const e = Rn(p, l, o, n);
                            if (In(p, e), "out-in" === c) return o.isLeaving = !0, e.afterLeave = () => {
                                o.isLeaving = !1, n.update()
                            }, Un(i);
                            "in-out" === c && a.type !== fr && (e.delayLeave = (e, t, n) => {
                                const r = Bn(o, p);
                                r[String(p.key)] = p, e._leaveCb = () => {
                                    t(), e._leaveCb = void 0, delete u.delayedLeave
                                }, u.delayedLeave = n
                            })
                        }
                        return i
                    }
                }
            },
            $n = Pn;

        function Bn(e, t) {
            const {
                leavingVNodes: n
            } = e;
            let o = n.get(t.type);
            return o || (o = Object.create(null), n.set(t.type, o)), o
        }

        function Rn(e, t, n, o) {
            const {
                appear: r,
                mode: s,
                persisted: i = !1,
                onBeforeEnter: l,
                onEnter: c,
                onAfterEnter: a,
                onEnterCancelled: u,
                onBeforeLeave: f,
                onLeave: p,
                onAfterLeave: d,
                onLeaveCancelled: h,
                onBeforeAppear: g,
                onAppear: v,
                onAfterAppear: b,
                onAppearCancelled: m
            } = t, y = String(e.key), _ = Bn(n, e), w = (e, t) => {
                e && Tt(e, o, 9, t)
            }, k = (e, t) => {
                const n = t[1];
                w(e, t), x(e) ? e.every((e => e.length <= 1)) && n() : e.length <= 1 && n()
            }, S = {
                mode: s,
                persisted: i,
                beforeEnter(t) {
                    let o = l;
                    if (!n.isMounted) {
                        if (!r) return;
                        o = g || l
                    }
                    t._leaveCb && t._leaveCb(!0);
                    const s = _[y];
                    s && xr(e, s) && s.el._leaveCb && s.el._leaveCb(), w(o, [t])
                },
                enter(e) {
                    let t = c,
                        o = a,
                        s = u;
                    if (!n.isMounted) {
                        if (!r) return;
                        t = v || c, o = b || a, s = m || u
                    }
                    let i = !1;
                    const l = e._enterCb = t => {
                        i || (i = !0, w(t ? s : o, [e]), S.delayedLeave && S.delayedLeave(), e._enterCb = void 0)
                    };
                    t ? k(t, [e, l]) : l()
                },
                leave(t, o) {
                    const r = String(e.key);
                    if (t._enterCb && t._enterCb(!0), n.isUnmounting) return o();
                    w(f, [t]);
                    let s = !1;
                    const i = t._leaveCb = n => {
                        s || (s = !0, o(), w(n ? h : d, [t]), t._leaveCb = void 0, _[r] === e && delete _[r])
                    };
                    _[r] = e, p ? k(p, [t, i]) : i()
                },
                clone(e) {
                    return Rn(e, t, n, o)
                }
            };
            return S
        }

        function Un(e) {
            if (Kn(e)) return e = Mr(e), e.children = null, e
        }

        function Dn(e) {
            return Kn(e) ? e.children ? e.children[0] : void 0 : e
        }

        function In(e, t) {
            6 & e.shapeFlag && e.component ? In(e.component.subTree, t) : 128 & e.shapeFlag ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
        }

        function Vn(e, t = !1, n) {
            let o = [],
                r = 0;
            for (let s = 0; s < e.length; s++) {
                let i = e[s];
                const l = null == n ? i.key : String(n) + String(null != i.key ? i.key : s);
                i.type === ar ? (128 & i.patchFlag && r++, o = o.concat(Vn(i.children, t, l))) : (t || i.type !== fr) && o.push(null != l ? Mr(i, {
                    key: l
                }) : i)
            }
            if (r > 1)
                for (let s = 0; s < o.length; s++) o[s].patchFlag = -2;
            return o
        }
        const Wn = e => !!e.type.__asyncLoader;
        const Kn = e => e.type.__isKeepAlive;
        RegExp, RegExp;

        function Jn(e, t) {
            return x(e) ? e.some((e => Jn(e, t))) : E(e) ? e.split(",").includes(t) : !!e.test && e.test(t)
        }

        function zn(e, t) {
            Hn(e, "a", t)
        }

        function qn(e, t) {
            Hn(e, "da", t)
        }

        function Hn(e, t, n = Vr) {
            const o = e.__wdc || (e.__wdc = () => {
                let t = n;
                while (t) {
                    if (t.isDeactivated) return;
                    t = t.parent
                }
                return e()
            });
            if (Xn(t, o, n), n) {
                let e = n.parent;
                while (e && e.parent) Kn(e.parent.vnode) && Zn(o, t, n, e), e = e.parent
            }
        }

        function Zn(e, t, n, o) {
            const r = Xn(t, e, o, !0);
            so((() => {
                _(o[t], r)
            }), n)
        }

        function Gn(e) {
            let t = e.shapeFlag;
            256 & t && 256, 512 & t && 512, e.shapeFlag = t
        }

        function Yn(e) {
            return 128 & e.shapeFlag ? e.ssContent : e
        }

        function Xn(e, t, n = Vr, o = !1) {
            if (n) {
                const r = n[e] || (n[e] = []),
                    s = t.__weh || (t.__weh = (...o) => {
                        if (n.isUnmounted) return;
                        ge(), Kr(n);
                        const r = Tt(t, n, e, o);
                        return Jr(), ve(), r
                    });
                return o ? r.unshift(s) : r.push(s), s
            }
        }
        const Qn = e => (t, n = Vr) => (!Zr || "sp" === e) && Xn(e, t, n),
            eo = Qn("bm"),
            to = Qn("m"),
            no = Qn("bu"),
            oo = Qn("u"),
            ro = Qn("bum"),
            so = Qn("um"),
            io = Qn("sp"),
            lo = Qn("rtg"),
            co = Qn("rtc");

        function ao(e, t = Vr) {
            Xn("ec", e, t)
        }

        function uo(e, t, n, o) {
            const r = e.dirs,
                s = t && t.dirs;
            for (let i = 0; i < r.length; i++) {
                const l = r[i];
                s && (l.oldValue = s[i].value);
                let c = l.dir[o];
                c && (ge(), Tt(c, n, 8, [e.el, l, e, t]), ve())
            }
        }
        const fo = "components";

        function po(e, t) {
            return vo(fo, e, !0, t) || e
        }
        const ho = Symbol();

        function go(e) {
            return E(e) ? vo(fo, e, !1) || e : e || ho
        }

        function vo(e, t, n = !0, o = !1) {
            const r = fn || Vr;
            if (r) {
                const n = r.type;
                if (e === fo) {
                    const e = os(n, !1);
                    if (e && (e === t || e === U(t) || e === V(U(t)))) return n
                }
                const s = bo(r[e] || n[e], t) || bo(r.appContext[e], t);
                return !s && o ? n : s
            }
        }

        function bo(e, t) {
            return e && (e[t] || e[U(t)] || e[V(U(t))])
        }
        const mo = e => e ? zr(e) ? ns(e) || e.proxy : mo(e.parent) : null,
            yo = y(Object.create(null), {
                $: e => e,
                $el: e => e.vnode.el,
                $data: e => e.data,
                $props: e => e.props,
                $attrs: e => e.attrs,
                $slots: e => e.slots,
                $refs: e => e.refs,
                $parent: e => mo(e.parent),
                $root: e => mo(e.root),
                $emit: e => e.emit,
                $options: e => Oo(e),
                $forceUpdate: e => e.f || (e.f = () => Yt(e.update)),
                $nextTick: e => e.n || (e.n = Zt.bind(e.proxy)),
                $watch: e => Fn.bind(e)
            }),
            _o = {
                get({
                    _: e
                }, t) {
                    const {
                        ctx: n,
                        setupState: o,
                        data: r,
                        props: s,
                        accessCache: i,
                        type: l,
                        appContext: c
                    } = e;
                    let a;
                    if ("$" !== t[0]) {
                        const l = i[t];
                        if (void 0 !== l) switch (l) {
                            case 1:
                                return o[t];
                            case 2:
                                return r[t];
                            case 4:
                                return n[t];
                            case 3:
                                return s[t]
                        } else {
                            if (o !== p && k(o, t)) return i[t] = 1, o[t];
                            if (r !== p && k(r, t)) return i[t] = 2, r[t];
                            if ((a = e.propsOptions[0]) && k(a, t)) return i[t] = 3, s[t];
                            if (n !== p && k(n, t)) return i[t] = 4, n[t];
                            wo && (i[t] = 0)
                        }
                    }
                    const u = yo[t];
                    let f, d;
                    return u ? ("$attrs" === t && be(e, "get", t), u(e)) : (f = l.__cssModules) && (f = f[t]) ? f : n !== p && k(n, t) ? (i[t] = 4, n[t]) : (d = c.config.globalProperties, k(d, t) ? d[t] : void 0)
                },
                set({
                    _: e
                }, t, n) {
                    const {
                        data: o,
                        setupState: r,
                        ctx: s
                    } = e;
                    return r !== p && k(r, t) ? (r[t] = n, !0) : o !== p && k(o, t) ? (o[t] = n, !0) : !k(e.props, t) && (("$" !== t[0] || !(t.slice(1) in e)) && (s[t] = n, !0))
                },
                has({
                    _: {
                        data: e,
                        setupState: t,
                        accessCache: n,
                        ctx: o,
                        appContext: r,
                        propsOptions: s
                    }
                }, i) {
                    let l;
                    return !!n[i] || e !== p && k(e, i) || t !== p && k(t, i) || (l = s[0]) && k(l, i) || k(o, i) || k(yo, i) || k(r.config.globalProperties, i)
                },
                defineProperty(e, t, n) {
                    return null != n.get ? e._.accessCache[t] = 0 : k(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
                }
            };
        let wo = !0;

        function ko(e) {
            const t = Oo(e),
                n = e.proxy,
                o = e.ctx;
            wo = !1, t.beforeCreate && So(t.beforeCreate, e, "bc");
            const {
                data: r,
                computed: s,
                methods: i,
                watch: l,
                provide: c,
                inject: a,
                created: u,
                beforeMount: f,
                mounted: p,
                beforeUpdate: d,
                updated: g,
                activated: v,
                deactivated: b,
                beforeDestroy: m,
                beforeUnmount: y,
                destroyed: _,
                unmounted: w,
                render: k,
                renderTracked: S,
                renderTriggered: C,
                errorCaptured: E,
                serverPrefetch: L,
                expose: F,
                inheritAttrs: M,
                components: j,
                directives: T,
                filters: N
            } = t, P = null;
            if (a && xo(a, o, P, e.appContext.config.unwrapInjectedRef), i)
                for (const h in i) {
                    const e = i[h];
                    O(e) && (o[h] = e.bind(n))
                }
            if (r) {
                0;
                const t = r.call(n, n);
                0, A(t) && (e.data = pt(t))
            }
            if (wo = !0, s)
                for (const x in s) {
                    const e = s[x],
                        t = O(e) ? e.bind(n, n) : O(e.get) ? e.get.bind(n, n) : h;
                    0;
                    const r = !O(e) && O(e.set) ? e.set.bind(n) : h,
                        i = ss({
                            get: t,
                            set: r
                        });
                    Object.defineProperty(o, x, {
                        enumerable: !0,
                        configurable: !0,
                        get: () => i.value,
                        set: e => i.value = e
                    })
                }
            if (l)
                for (const h in l) Co(l[h], o, n, h);
            if (c) {
                const e = O(c) ? c.call(n) : c;
                Reflect.ownKeys(e).forEach((t => {
                    Cn(t, e[t])
                }))
            }

            function $(e, t) {
                x(t) ? t.forEach((t => e(t.bind(n)))) : t && e(t.bind(n))
            }
            if (u && So(u, e, "c"), $(eo, f), $(to, p), $(no, d), $(oo, g), $(zn, v), $(qn, b), $(ao, E), $(co, S), $(lo, C), $(ro, y), $(so, w), $(io, L), x(F))
                if (F.length) {
                    const t = e.exposed || (e.exposed = {});
                    F.forEach((e => {
                        Object.defineProperty(t, e, {
                            get: () => n[e],
                            set: t => n[e] = t
                        })
                    }))
                } else e.exposed || (e.exposed = {});
            k && e.render === h && (e.render = k), null != M && (e.inheritAttrs = M), j && (e.components = j), T && (e.directives = T)
        }

        function xo(e, t, n = h, o = !1) {
            x(e) && (e = Mo(e));
            for (const r in e) {
                const n = e[r];
                let s;
                s = A(n) ? "default" in n ? On(n.from || r, n.default, !0) : On(n.from || r) : On(n), Ot(s) && o ? Object.defineProperty(t, r, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => s.value,
                    set: e => s.value = e
                }) : t[r] = s
            }
        }

        function So(e, t, n) {
            Tt(x(e) ? e.map((e => e.bind(t.proxy))) : e.bind(t.proxy), t, n)
        }

        function Co(e, t, n, o) {
            const r = o.includes(".") ? Mn(n, o) : () => n[o];
            if (E(e)) {
                const n = t[e];
                O(n) && Ln(r, n)
            } else if (O(e)) Ln(r, e.bind(n));
            else if (A(e))
                if (x(e)) e.forEach((e => Co(e, t, n, o)));
                else {
                    const o = O(e.handler) ? e.handler.bind(n) : t[e.handler];
                    O(o) && Ln(r, o, e)
                }
            else 0
        }

        function Oo(e) {
            const t = e.type,
                {
                    mixins: n,
                    extends: o
                } = t,
                {
                    mixins: r,
                    optionsCache: s,
                    config: {
                        optionMergeStrategies: i
                    }
                } = e.appContext,
                l = s.get(t);
            let c;
            return l ? c = l : r.length || n || o ? (c = {}, r.length && r.forEach((e => Eo(c, e, i, !0))), Eo(c, t, i)) : c = t, s.set(t, c), c
        }

        function Eo(e, t, n, o = !1) {
            const {
                mixins: r,
                extends: s
            } = t;
            s && Eo(e, s, n, !0), r && r.forEach((t => Eo(e, t, n, !0)));
            for (const i in t)
                if (o && "expose" === i);
                else {
                    const o = Lo[i] || n && n[i];
                    e[i] = o ? o(e[i], t[i]) : t[i]
                }
            return e
        }
        const Lo = {
            data: Ao,
            props: To,
            emits: To,
            methods: To,
            computed: To,
            beforeCreate: jo,
            created: jo,
            beforeMount: jo,
            mounted: jo,
            beforeUpdate: jo,
            updated: jo,
            beforeDestroy: jo,
            beforeUnmount: jo,
            destroyed: jo,
            unmounted: jo,
            activated: jo,
            deactivated: jo,
            errorCaptured: jo,
            serverPrefetch: jo,
            components: To,
            directives: To,
            watch: No,
            provide: Ao,
            inject: Fo
        };

        function Ao(e, t) {
            return t ? e ? function() {
                return y(O(e) ? e.call(this, this) : e, O(t) ? t.call(this, this) : t)
            } : t : e
        }

        function Fo(e, t) {
            return To(Mo(e), Mo(t))
        }

        function Mo(e) {
            if (x(e)) {
                const t = {};
                for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
                return t
            }
            return e
        }

        function jo(e, t) {
            return e ? [...new Set([].concat(e, t))] : t
        }

        function To(e, t) {
            return e ? y(y(Object.create(null), e), t) : t
        }

        function No(e, t) {
            if (!e) return t;
            if (!t) return e;
            const n = y(Object.create(null), e);
            for (const o in t) n[o] = jo(e[o], t[o]);
            return n
        }

        function Po(e, t, n, o = !1) {
            const r = {},
                s = {};
            z(s, Sr, 1), e.propsDefaults = Object.create(null), Bo(e, t, r, s);
            for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
            n ? e.props = o ? r : dt(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s
        }

        function $o(e, t, n, o) {
            const {
                props: r,
                attrs: s,
                vnode: {
                    patchFlag: i
                }
            } = e, l = _t(r), [c] = e.propsOptions;
            let a = !1;
            if (!(o || i > 0) || 16 & i) {
                let o;
                Bo(e, t, r, s) && (a = !0);
                for (const s in l) t && (k(t, s) || (o = I(s)) !== s && k(t, o)) || (c ? !n || void 0 === n[s] && void 0 === n[o] || (r[s] = Ro(c, l, s, void 0, e, !0)) : delete r[s]);
                if (s !== l)
                    for (const e in s) t && k(t, e) || (delete s[e], a = !0)
            } else if (8 & i) {
                const n = e.vnode.dynamicProps;
                for (let o = 0; o < n.length; o++) {
                    let i = n[o];
                    if (un(e.emitsOptions, i)) continue;
                    const u = t[i];
                    if (c)
                        if (k(s, i)) u !== s[i] && (s[i] = u, a = !0);
                        else {
                            const t = U(i);
                            r[t] = Ro(c, l, t, u, e, !1)
                        }
                    else u !== s[i] && (s[i] = u, a = !0)
                }
            }
            a && ye(e, "set", "$attrs")
        }

        function Bo(e, t, n, o) {
            const [r, s] = e.propsOptions;
            let i, l = !1;
            if (t)
                for (let c in t) {
                    if ($(c)) continue;
                    const a = t[c];
                    let u;
                    r && k(r, u = U(c)) ? s && s.includes(u) ? (i || (i = {}))[u] = a : n[u] = a : un(e.emitsOptions, c) || c in o && a === o[c] || (o[c] = a, l = !0)
                }
            if (s) {
                const t = _t(n),
                    o = i || p;
                for (let i = 0; i < s.length; i++) {
                    const l = s[i];
                    n[l] = Ro(r, t, l, o[l], e, !k(o, l))
                }
            }
            return l
        }

        function Ro(e, t, n, o, r, s) {
            const i = e[n];
            if (null != i) {
                const e = k(i, "default");
                if (e && void 0 === o) {
                    const e = i.default;
                    if (i.type !== Function && O(e)) {
                        const {
                            propsDefaults: s
                        } = r;
                        n in s ? o = s[n] : (Kr(r), o = s[n] = e.call(null, t), Jr())
                    } else o = e
                }
                i[0] && (s && !e ? o = !1 : !i[1] || "" !== o && o !== I(n) || (o = !0))
            }
            return o
        }

        function Uo(e, t, n = !1) {
            const o = t.propsCache,
                r = o.get(e);
            if (r) return r;
            const s = e.props,
                i = {},
                l = [];
            let c = !1;
            if (!O(e)) {
                const o = e => {
                    c = !0;
                    const [n, o] = Uo(e, t, !0);
                    y(i, n), o && l.push(...o)
                };
                !n && t.mixins.length && t.mixins.forEach(o), e.extends && o(e.extends), e.mixins && e.mixins.forEach(o)
            }
            if (!s && !c) return o.set(e, d), d;
            if (x(s))
                for (let u = 0; u < s.length; u++) {
                    0;
                    const e = U(s[u]);
                    Do(e) && (i[e] = p)
                } else if (s) {
                    0;
                    for (const e in s) {
                        const t = U(e);
                        if (Do(t)) {
                            const n = s[e],
                                o = i[t] = x(n) || O(n) ? {
                                    type: n
                                } : n;
                            if (o) {
                                const e = Wo(Boolean, o.type),
                                    n = Wo(String, o.type);
                                o[0] = e > -1, o[1] = n < 0 || e < n, (e > -1 || k(o, "default")) && l.push(t)
                            }
                        }
                    }
                }
            const a = [i, l];
            return o.set(e, a), a
        }

        function Do(e) {
            return "$" !== e[0]
        }

        function Io(e) {
            const t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : null === e ? "null" : ""
        }

        function Vo(e, t) {
            return Io(e) === Io(t)
        }

        function Wo(e, t) {
            return x(t) ? t.findIndex((t => Vo(t, e))) : O(t) && Vo(t, e) ? 0 : -1
        }
        const Ko = e => "_" === e[0] || "$stable" === e,
            Jo = e => x(e) ? e.map(Nr) : [Nr(e)],
            zo = (e, t, n) => {
                if (t._n) return t;
                const o = vn(((...e) => Jo(t(...e))), n);
                return o._c = !1, o
            },
            qo = (e, t, n) => {
                const o = e._ctx;
                for (const r in e) {
                    if (Ko(r)) continue;
                    const n = e[r];
                    if (O(n)) t[r] = zo(r, n, o);
                    else if (null != n) {
                        0;
                        const e = Jo(n);
                        t[r] = () => e
                    }
                }
            },
            Ho = (e, t) => {
                const n = Jo(t);
                e.slots.default = () => n
            },
            Zo = (e, t) => {
                if (32 & e.vnode.shapeFlag) {
                    const n = t._;
                    n ? (e.slots = _t(t), z(t, "_", n)) : qo(t, e.slots = {})
                } else e.slots = {}, t && Ho(e, t);
                z(e.slots, Sr, 1)
            },
            Go = (e, t, n) => {
                const {
                    vnode: o,
                    slots: r
                } = e;
                let s = !0,
                    i = p;
                if (32 & o.shapeFlag) {
                    const e = t._;
                    e ? n && 1 === e ? s = !1 : (y(r, t), n || 1 !== e || delete r._) : (s = !t.$stable, qo(t, r)), i = t
                } else t && (Ho(e, t), i = {
                    default: 1
                });
                if (s)
                    for (const l in r) Ko(l) || l in i || delete r[l]
            };

        function Yo() {
            return {
                app: null,
                config: {
                    isNativeTag: g,
                    performance: !1,
                    globalProperties: {},
                    optionMergeStrategies: {},
                    errorHandler: void 0,
                    warnHandler: void 0,
                    compilerOptions: {}
                },
                mixins: [],
                components: {},
                directives: {},
                provides: Object.create(null),
                optionsCache: new WeakMap,
                propsCache: new WeakMap,
                emitsCache: new WeakMap
            }
        }
        let Xo = 0;

        function Qo(e, t) {
            return function(n, o = null) {
                O(n) || (n = Object.assign({}, n)), null == o || A(o) || (o = null);
                const r = Yo(),
                    s = new Set;
                let i = !1;
                const l = r.app = {
                    _uid: Xo++,
                    _component: n,
                    _props: o,
                    _container: null,
                    _context: r,
                    _instance: null,
                    version: ls,
                    get config() {
                        return r.config
                    },
                    set config(e) {
                        0
                    },
                    use(e, ...t) {
                        return s.has(e) || (e && O(e.install) ? (s.add(e), e.install(l, ...t)) : O(e) && (s.add(e), e(l, ...t))), l
                    },
                    mixin(e) {
                        return r.mixins.includes(e) || r.mixins.push(e), l
                    },
                    component(e, t) {
                        return t ? (r.components[e] = t, l) : r.components[e]
                    },
                    directive(e, t) {
                        return t ? (r.directives[e] = t, l) : r.directives[e]
                    },
                    mount(s, c, a) {
                        if (!i) {
                            0;
                            const u = Lr(n, o);
                            return u.appContext = r, c && t ? t(u, s) : e(u, s, a), i = !0, l._container = s, s.__vue_app__ = l, ns(u.component) || u.component.proxy
                        }
                    },
                    unmount() {
                        i && (e(null, l._container), delete l._container.__vue_app__)
                    },
                    provide(e, t) {
                        return r.provides[e] = t, l
                    }
                };
                return l
            }
        }

        function er(e, t, n, o, r = !1) {
            if (x(e)) return void e.forEach(((e, s) => er(e, t && (x(t) ? t[s] : t), n, o, r)));
            if (Wn(o) && !r) return;
            const s = 4 & o.shapeFlag ? ns(o.component) || o.component.proxy : o.el,
                i = r ? null : s,
                {
                    i: l,
                    r: c
                } = e;
            const a = t && t.r,
                u = l.refs === p ? l.refs = {} : l.refs,
                f = l.setupState;
            if (null != a && a !== c && (E(a) ? (u[a] = null, k(f, a) && (f[a] = null)) : Ot(a) && (a.value = null)), O(c)) jt(c, l, 12, [i, u]);
            else {
                const t = E(c),
                    o = Ot(c);
                if (t || o) {
                    const l = () => {
                        if (e.f) {
                            const n = t ? u[c] : c.value;
                            r ? x(n) && _(n, s) : x(n) ? n.includes(s) || n.push(s) : t ? (u[c] = [s], k(f, c) && (f[c] = u[c])) : (c.value = [s], e.k && (u[e.k] = c.value))
                        } else t ? (u[c] = i, k(f, c) && (f[c] = i)) : o && (c.value = i, e.k && (u[e.k] = i))
                    };
                    i ? (l.id = -1, nr(l, n)) : l()
                } else 0
            }
        }

        function tr() {}
        const nr = Sn;

        function or(e) {
            return rr(e)
        }

        function rr(e, t) {
            tr();
            const n = Z();
            n.__VUE__ = !0;
            const {
                insert: o,
                remove: r,
                patchProp: s,
                createElement: i,
                createText: l,
                createComment: c,
                setText: a,
                setElementText: u,
                parentNode: f,
                nextSibling: g,
                setScopeId: v = h,
                cloneNode: b,
                insertStaticContent: m
            } = e, y = (e, t, n, o = null, r = null, s = null, i = !1, l = null, c = !!t.dynamicChildren) => {
                if (e === t) return;
                e && !xr(e, t) && (o = G(e), W(e, r, s, !0), e = null), -2 === t.patchFlag && (c = !1, t.dynamicChildren = null);
                const {
                    type: a,
                    ref: u,
                    shapeFlag: f
                } = t;
                switch (a) {
                    case ur:
                        _(e, t, n, o);
                        break;
                    case fr:
                        w(e, t, n, o);
                        break;
                    case pr:
                        null == e && k(t, n, o, i);
                        break;
                    case ar:
                        j(e, t, n, o, r, s, i, l, c);
                        break;
                    default:
                        1 & f ? C(e, t, n, o, r, s, i, l, c) : 6 & f ? T(e, t, n, o, r, s, i, l, c) : (64 & f || 128 & f) && a.process(e, t, n, o, r, s, i, l, c, X)
                }
                null != u && r && er(u, e && e.ref, s, t || e, !t)
            }, _ = (e, t, n, r) => {
                if (null == e) o(t.el = l(t.children), n, r);
                else {
                    const n = t.el = e.el;
                    t.children !== e.children && a(n, t.children)
                }
            }, w = (e, t, n, r) => {
                null == e ? o(t.el = c(t.children || ""), n, r) : t.el = e.el
            }, k = (e, t, n, o) => {
                [e.el, e.anchor] = m(e.children, t, n, o, e.el, e.anchor)
            }, x = ({
                el: e,
                anchor: t
            }, n, r) => {
                let s;
                while (e && e !== t) s = g(e), o(e, n, r), e = s;
                o(t, n, r)
            }, S = ({
                el: e,
                anchor: t
            }) => {
                let n;
                while (e && e !== t) n = g(e), r(e), e = n;
                r(t)
            }, C = (e, t, n, o, r, s, i, l, c) => {
                i = i || "svg" === t.type, null == e ? O(t, n, o, r, s, i, l, c) : A(e, t, r, s, i, l, c)
            }, O = (e, t, n, r, l, c, a, f) => {
                let p, d;
                const {
                    type: h,
                    props: g,
                    shapeFlag: v,
                    transition: m,
                    patchFlag: y,
                    dirs: _
                } = e;
                if (e.el && void 0 !== b && -1 === y) p = e.el = b(e.el);
                else {
                    if (p = e.el = i(e.type, c, g && g.is, g), 8 & v ? u(p, e.children) : 16 & v && L(e.children, p, null, r, l, c && "foreignObject" !== h, a, f), _ && uo(e, null, r, "created"), g) {
                        for (const t in g) "value" === t || $(t) || s(p, t, null, g[t], c, e.children, r, l, H);
                        "value" in g && s(p, "value", null, g.value), (d = g.onVnodeBeforeMount) && Rr(d, r, e)
                    }
                    E(p, e, e.scopeId, a, r)
                }
                _ && uo(e, null, r, "beforeMount");
                const w = (!l || l && !l.pendingBranch) && m && !m.persisted;
                w && m.beforeEnter(p), o(p, t, n), ((d = g && g.onVnodeMounted) || w || _) && nr((() => {
                    d && Rr(d, r, e), w && m.enter(p), _ && uo(e, null, r, "mounted")
                }), l)
            }, E = (e, t, n, o, r) => {
                if (n && v(e, n), o)
                    for (let s = 0; s < o.length; s++) v(e, o[s]);
                if (r) {
                    let n = r.subTree;
                    if (t === n) {
                        const t = r.vnode;
                        E(e, t, t.scopeId, t.slotScopeIds, r.parent)
                    }
                }
            }, L = (e, t, n, o, r, s, i, l, c = 0) => {
                for (let a = c; a < e.length; a++) {
                    const c = e[a] = l ? Pr(e[a]) : Nr(e[a]);
                    y(null, c, t, n, o, r, s, i, l)
                }
            }, A = (e, t, n, o, r, i, l) => {
                const c = t.el = e.el;
                let {
                    patchFlag: a,
                    dynamicChildren: f,
                    dirs: d
                } = t;
                a |= 16 & e.patchFlag;
                const h = e.props || p,
                    g = t.props || p;
                let v;
                n && sr(n, !1), (v = g.onVnodeBeforeUpdate) && Rr(v, n, t, e), d && uo(t, e, n, "beforeUpdate"), n && sr(n, !0);
                const b = r && "foreignObject" !== t.type;
                if (f ? F(e.dynamicChildren, f, c, n, o, b, i) : l || U(e, t, c, null, n, o, b, i, !1), a > 0) {
                    if (16 & a) M(c, t, h, g, n, o, r);
                    else if (2 & a && h.class !== g.class && s(c, "class", null, g.class, r), 4 & a && s(c, "style", h.style, g.style, r), 8 & a) {
                        const i = t.dynamicProps;
                        for (let t = 0; t < i.length; t++) {
                            const l = i[t],
                                a = h[l],
                                u = g[l];
                            u === a && "value" !== l || s(c, l, a, u, r, e.children, n, o, H)
                        }
                    }
                    1 & a && e.children !== t.children && u(c, t.children)
                } else l || null != f || M(c, t, h, g, n, o, r);
                ((v = g.onVnodeUpdated) || d) && nr((() => {
                    v && Rr(v, n, t, e), d && uo(t, e, n, "updated")
                }), o)
            }, F = (e, t, n, o, r, s, i) => {
                for (let l = 0; l < t.length; l++) {
                    const c = e[l],
                        a = t[l],
                        u = c.el && (c.type === ar || !xr(c, a) || 70 & c.shapeFlag) ? f(c.el) : n;
                    y(c, a, u, null, o, r, s, i, !0)
                }
            }, M = (e, t, n, o, r, i, l) => {
                if (n !== o) {
                    for (const c in o) {
                        if ($(c)) continue;
                        const a = o[c],
                            u = n[c];
                        a !== u && "value" !== c && s(e, c, u, a, l, t.children, r, i, H)
                    }
                    if (n !== p)
                        for (const c in n) $(c) || c in o || s(e, c, n[c], null, l, t.children, r, i, H);
                    "value" in o && s(e, "value", n.value, o.value)
                }
            }, j = (e, t, n, r, s, i, c, a, u) => {
                const f = t.el = e ? e.el : l(""),
                    p = t.anchor = e ? e.anchor : l("");
                let {
                    patchFlag: d,
                    dynamicChildren: h,
                    slotScopeIds: g
                } = t;
                g && (a = a ? a.concat(g) : g), null == e ? (o(f, n, r), o(p, n, r), L(t.children, n, p, s, i, c, a, u)) : d > 0 && 64 & d && h && e.dynamicChildren ? (F(e.dynamicChildren, h, n, s, i, c, a), (null != t.key || s && t === s.subTree) && ir(e, t, !0)) : U(e, t, n, p, s, i, c, a, u)
            }, T = (e, t, n, o, r, s, i, l, c) => {
                t.slotScopeIds = l, null == e ? 512 & t.shapeFlag ? r.ctx.activate(t, n, o, i, c) : N(t, n, o, r, s, i, c) : P(e, t, c)
            }, N = (e, t, n, o, r, s, i) => {
                const l = e.component = Ir(e, o, r);
                if (Kn(e) && (l.ctx.renderer = X), Gr(l), l.asyncDep) {
                    if (r && r.registerDep(l, B), !e.el) {
                        const e = l.subTree = Lr(fr);
                        w(null, e, t, n)
                    }
                } else B(l, e, t, n, r, s, i)
            }, P = (e, t, n) => {
                const o = t.component = e.component;
                if (_n(e, t, n)) {
                    if (o.asyncDep && !o.asyncResolved) return void R(o, t, n);
                    o.next = t, Qt(o.update), o.update()
                } else t.el = e.el, o.vnode = t
            }, B = (e, t, n, o, r, s, i) => {
                const l = () => {
                        if (e.isMounted) {
                            let t, {
                                    next: n,
                                    bu: o,
                                    u: l,
                                    parent: c,
                                    vnode: a
                                } = e,
                                u = n;
                            0, sr(e, !1), n ? (n.el = a.el, R(e, n, i)) : n = a, o && J(o), (t = n.props && n.props.onVnodeBeforeUpdate) && Rr(t, c, n, a), sr(e, !0);
                            const p = bn(e);
                            0;
                            const d = e.subTree;
                            e.subTree = p, y(d, p, f(d.el), G(d), e, r, s), n.el = p.el, null === u && kn(e, p.el), l && nr(l, r), (t = n.props && n.props.onVnodeUpdated) && nr((() => Rr(t, c, n, a)), r)
                        } else {
                            let i;
                            const {
                                el: l,
                                props: c
                            } = t, {
                                bm: a,
                                m: u,
                                parent: f
                            } = e, p = Wn(t);
                            if (sr(e, !1), a && J(a), !p && (i = c && c.onVnodeBeforeMount) && Rr(i, f, t), sr(e, !0), l && ee) {
                                const n = () => {
                                    e.subTree = bn(e), ee(l, e.subTree, e, r, null)
                                };
                                p ? t.type.__asyncLoader().then((() => !e.isUnmounted && n())) : n()
                            } else {
                                0;
                                const i = e.subTree = bn(e);
                                0, y(null, i, n, o, e, r, s), t.el = i.el
                            }
                            if (u && nr(u, r), !p && (i = c && c.onVnodeMounted)) {
                                const e = t;
                                nr((() => Rr(i, f, e)), r)
                            }(256 & t.shapeFlag || f && Wn(f.vnode) && 256 & f.vnode.shapeFlag) && e.a && nr(e.a, r), e.isMounted = !0, t = n = o = null
                        }
                    },
                    c = e.effect = new fe(l, (() => Yt(a)), e.scope),
                    a = e.update = () => c.run();
                a.id = e.uid, sr(e, !0), a()
            }, R = (e, t, n) => {
                t.component = e;
                const o = e.vnode.props;
                e.vnode = t, e.next = null, $o(e, t.props, o, n), Go(e, t.children, n), ge(), on(void 0, e.update), ve()
            }, U = (e, t, n, o, r, s, i, l, c = !1) => {
                const a = e && e.children,
                    f = e ? e.shapeFlag : 0,
                    p = t.children,
                    {
                        patchFlag: d,
                        shapeFlag: h
                    } = t;
                if (d > 0) {
                    if (128 & d) return void I(a, p, n, o, r, s, i, l, c);
                    if (256 & d) return void D(a, p, n, o, r, s, i, l, c)
                }
                8 & h ? (16 & f && H(a, r, s), p !== a && u(n, p)) : 16 & f ? 16 & h ? I(a, p, n, o, r, s, i, l, c) : H(a, r, s, !0) : (8 & f && u(n, ""), 16 & h && L(p, n, o, r, s, i, l, c))
            }, D = (e, t, n, o, r, s, i, l, c) => {
                e = e || d, t = t || d;
                const a = e.length,
                    u = t.length,
                    f = Math.min(a, u);
                let p;
                for (p = 0; p < f; p++) {
                    const o = t[p] = c ? Pr(t[p]) : Nr(t[p]);
                    y(e[p], o, n, null, r, s, i, l, c)
                }
                a > u ? H(e, r, s, !0, !1, f) : L(t, n, o, r, s, i, l, c, f)
            }, I = (e, t, n, o, r, s, i, l, c) => {
                let a = 0;
                const u = t.length;
                let f = e.length - 1,
                    p = u - 1;
                while (a <= f && a <= p) {
                    const o = e[a],
                        u = t[a] = c ? Pr(t[a]) : Nr(t[a]);
                    if (!xr(o, u)) break;
                    y(o, u, n, null, r, s, i, l, c), a++
                }
                while (a <= f && a <= p) {
                    const o = e[f],
                        a = t[p] = c ? Pr(t[p]) : Nr(t[p]);
                    if (!xr(o, a)) break;
                    y(o, a, n, null, r, s, i, l, c), f--, p--
                }
                if (a > f) {
                    if (a <= p) {
                        const e = p + 1,
                            f = e < u ? t[e].el : o;
                        while (a <= p) y(null, t[a] = c ? Pr(t[a]) : Nr(t[a]), n, f, r, s, i, l, c), a++
                    }
                } else if (a > p)
                    while (a <= f) W(e[a], r, s, !0), a++;
                else {
                    const h = a,
                        g = a,
                        v = new Map;
                    for (a = g; a <= p; a++) {
                        const e = t[a] = c ? Pr(t[a]) : Nr(t[a]);
                        null != e.key && v.set(e.key, a)
                    }
                    let b, m = 0;
                    const _ = p - g + 1;
                    let w = !1,
                        k = 0;
                    const x = new Array(_);
                    for (a = 0; a < _; a++) x[a] = 0;
                    for (a = h; a <= f; a++) {
                        const o = e[a];
                        if (m >= _) {
                            W(o, r, s, !0);
                            continue
                        }
                        let u;
                        if (null != o.key) u = v.get(o.key);
                        else
                            for (b = g; b <= p; b++)
                                if (0 === x[b - g] && xr(o, t[b])) {
                                    u = b;
                                    break
                                }
                        void 0 === u ? W(o, r, s, !0) : (x[u - g] = a + 1, u >= k ? k = u : w = !0, y(o, t[u], n, null, r, s, i, l, c), m++)
                    }
                    const S = w ? lr(x) : d;
                    for (b = S.length - 1, a = _ - 1; a >= 0; a--) {
                        const e = g + a,
                            f = t[e],
                            p = e + 1 < u ? t[e + 1].el : o;
                        0 === x[a] ? y(null, f, n, p, r, s, i, l, c) : w && (b < 0 || a !== S[b] ? V(f, n, p, 2) : b--)
                    }
                }
            }, V = (e, t, n, r, s = null) => {
                const {
                    el: i,
                    type: l,
                    transition: c,
                    children: a,
                    shapeFlag: u
                } = e;
                if (6 & u) return void V(e.component.subTree, t, n, r);
                if (128 & u) return void e.suspense.move(t, n, r);
                if (64 & u) return void l.move(e, t, n, X);
                if (l === ar) {
                    o(i, t, n);
                    for (let e = 0; e < a.length; e++) V(a[e], t, n, r);
                    return void o(e.anchor, t, n)
                }
                if (l === pr) return void x(e, t, n);
                const f = 2 !== r && 1 & u && c;
                if (f)
                    if (0 === r) c.beforeEnter(i), o(i, t, n), nr((() => c.enter(i)), s);
                    else {
                        const {
                            leave: e,
                            delayLeave: r,
                            afterLeave: s
                        } = c, l = () => o(i, t, n), a = () => {
                            e(i, (() => {
                                l(), s && s()
                            }))
                        };
                        r ? r(i, l, a) : a()
                    }
                else o(i, t, n)
            }, W = (e, t, n, o = !1, r = !1) => {
                const {
                    type: s,
                    props: i,
                    ref: l,
                    children: c,
                    dynamicChildren: a,
                    shapeFlag: u,
                    patchFlag: f,
                    dirs: p
                } = e;
                if (null != l && er(l, null, n, e, !0), 256 & u) return void t.ctx.deactivate(e);
                const d = 1 & u && p,
                    h = !Wn(e);
                let g;
                if (h && (g = i && i.onVnodeBeforeUnmount) && Rr(g, t, e), 6 & u) q(e.component, n, o);
                else {
                    if (128 & u) return void e.suspense.unmount(n, o);
                    d && uo(e, null, t, "beforeUnmount"), 64 & u ? e.type.remove(e, t, n, r, X, o) : a && (s !== ar || f > 0 && 64 & f) ? H(a, t, n, !1, !0) : (s === ar && 384 & f || !r && 16 & u) && H(c, t, n), o && K(e)
                }(h && (g = i && i.onVnodeUnmounted) || d) && nr((() => {
                    g && Rr(g, t, e), d && uo(e, null, t, "unmounted")
                }), n)
            }, K = e => {
                const {
                    type: t,
                    el: n,
                    anchor: o,
                    transition: s
                } = e;
                if (t === ar) return void z(n, o);
                if (t === pr) return void S(e);
                const i = () => {
                    r(n), s && !s.persisted && s.afterLeave && s.afterLeave()
                };
                if (1 & e.shapeFlag && s && !s.persisted) {
                    const {
                        leave: t,
                        delayLeave: o
                    } = s, r = () => t(n, i);
                    o ? o(e.el, i, r) : r()
                } else i()
            }, z = (e, t) => {
                let n;
                while (e !== t) n = g(e), r(e), e = n;
                r(t)
            }, q = (e, t, n) => {
                const {
                    bum: o,
                    scope: r,
                    update: s,
                    subTree: i,
                    um: l
                } = e;
                o && J(o), r.stop(), s && (s.active = !1, W(i, e, t, n)), l && nr(l, t), nr((() => {
                    e.isUnmounted = !0
                }), t), t && t.pendingBranch && !t.isUnmounted && e.asyncDep && !e.asyncResolved && e.suspenseId === t.pendingId && (t.deps--, 0 === t.deps && t.resolve())
            }, H = (e, t, n, o = !1, r = !1, s = 0) => {
                for (let i = s; i < e.length; i++) W(e[i], t, n, o, r)
            }, G = e => 6 & e.shapeFlag ? G(e.component.subTree) : 128 & e.shapeFlag ? e.suspense.next() : g(e.anchor || e.el), Y = (e, t, n) => {
                null == e ? t._vnode && W(t._vnode, null, null, !0) : y(t._vnode || null, e, t, null, null, null, n), rn(), t._vnode = e
            }, X = {
                p: y,
                um: W,
                m: V,
                r: K,
                mt: N,
                mc: L,
                pc: U,
                pbc: F,
                n: G,
                o: e
            };
            let Q, ee;
            return t && ([Q, ee] = t(X)), {
                render: Y,
                hydrate: Q,
                createApp: Qo(Y, Q)
            }
        }

        function sr({
            effect: e,
            update: t
        }, n) {
            e.allowRecurse = t.allowRecurse = n
        }

        function ir(e, t, n = !1) {
            const o = e.children,
                r = t.children;
            if (x(o) && x(r))
                for (let s = 0; s < o.length; s++) {
                    const e = o[s];
                    let t = r[s];
                    1 & t.shapeFlag && !t.dynamicChildren && ((t.patchFlag <= 0 || 32 === t.patchFlag) && (t = r[s] = Pr(r[s]), t.el = e.el), n || ir(e, t))
                }
        }

        function lr(e) {
            const t = e.slice(),
                n = [0];
            let o, r, s, i, l;
            const c = e.length;
            for (o = 0; o < c; o++) {
                const c = e[o];
                if (0 !== c) {
                    if (r = n[n.length - 1], e[r] < c) {
                        t[o] = r, n.push(o);
                        continue
                    }
                    s = 0, i = n.length - 1;
                    while (s < i) l = s + i >> 1, e[n[l]] < c ? s = l + 1 : i = l;
                    c < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o)
                }
            }
            s = n.length, i = n[s - 1];
            while (s-- > 0) n[s] = i, i = t[i];
            return n
        }
        const cr = e => e.__isTeleport;
        const ar = Symbol(void 0),
            ur = Symbol(void 0),
            fr = Symbol(void 0),
            pr = Symbol(void 0),
            dr = [];
        let hr = null;

        function gr(e = !1) {
            dr.push(hr = e ? null : [])
        }

        function vr() {
            dr.pop(), hr = dr[dr.length - 1] || null
        }
        let br = 1;

        function mr(e) {
            br += e
        }

        function yr(e) {
            return e.dynamicChildren = br > 0 ? hr || d : null, vr(), br > 0 && hr && hr.push(e), e
        }

        function _r(e, t, n, o, r, s) {
            return yr(Er(e, t, n, o, r, s, !0))
        }

        function wr(e, t, n, o, r) {
            return yr(Lr(e, t, n, o, r, !0))
        }

        function kr(e) {
            return !!e && !0 === e.__v_isVNode
        }

        function xr(e, t) {
            return e.type === t.type && e.key === t.key
        }
        const Sr = "__vInternal",
            Cr = ({
                key: e
            }) => null != e ? e : null,
            Or = ({
                ref: e,
                ref_key: t,
                ref_for: n
            }) => null != e ? E(e) || Ot(e) || O(e) ? {
                i: fn,
                r: e,
                k: t,
                f: !!n
            } : e : null;

        function Er(e, t = null, n = null, o = 0, r = null, s = (e === ar ? 0 : 1), i = !1, l = !1) {
            const c = {
                __v_isVNode: !0,
                __v_skip: !0,
                type: e,
                props: t,
                key: t && Cr(t),
                ref: t && Or(t),
                scopeId: pn,
                slotScopeIds: null,
                children: n,
                component: null,
                suspense: null,
                ssContent: null,
                ssFallback: null,
                dirs: null,
                transition: null,
                el: null,
                anchor: null,
                target: null,
                targetAnchor: null,
                staticCount: 0,
                shapeFlag: s,
                patchFlag: o,
                dynamicProps: r,
                dynamicChildren: null,
                appContext: null
            };
            return l ? ($r(c, n), 128 & s && e.normalize(c)) : n && (c.shapeFlag |= E(n) ? 8 : 16), br > 0 && !i && hr && (c.patchFlag > 0 || 6 & s) && 32 !== c.patchFlag && hr.push(c), c
        }
        const Lr = Ar;

        function Ar(e, t = null, n = null, o = 0, r = null, i = !1) {
            if (e && e !== ho || (e = fr), kr(e)) {
                const o = Mr(e, t, !0);
                return n && $r(o, n), br > 0 && !i && hr && (6 & o.shapeFlag ? hr[hr.indexOf(e)] = o : hr.push(o)), o.patchFlag |= -2, o
            }
            if (rs(e) && (e = e.__vccOpts), t) {
                t = Fr(t);
                let {
                    class: e,
                    style: n
                } = t;
                e && !E(e) && (t.class = a(e)), A(n) && (yt(n) && !x(n) && (n = y({}, n)), t.style = s(n))
            }
            const l = E(e) ? 1 : xn(e) ? 128 : cr(e) ? 64 : A(e) ? 4 : O(e) ? 2 : 0;
            return Er(e, t, n, o, r, l, i, !0)
        }

        function Fr(e) {
            return e ? yt(e) || Sr in e ? y({}, e) : e : null
        }

        function Mr(e, t, n = !1) {
            const {
                props: o,
                ref: r,
                patchFlag: s,
                children: i
            } = e, l = t ? Br(o || {}, t) : o, c = {
                __v_isVNode: !0,
                __v_skip: !0,
                type: e.type,
                props: l,
                key: l && Cr(l),
                ref: t && t.ref ? n && r ? x(r) ? r.concat(Or(t)) : [r, Or(t)] : Or(t) : r,
                scopeId: e.scopeId,
                slotScopeIds: e.slotScopeIds,
                children: i,
                target: e.target,
                targetAnchor: e.targetAnchor,
                staticCount: e.staticCount,
                shapeFlag: e.shapeFlag,
                patchFlag: t && e.type !== ar ? -1 === s ? 16 : 16 | s : s,
                dynamicProps: e.dynamicProps,
                dynamicChildren: e.dynamicChildren,
                appContext: e.appContext,
                dirs: e.dirs,
                transition: e.transition,
                component: e.component,
                suspense: e.suspense,
                ssContent: e.ssContent && Mr(e.ssContent),
                ssFallback: e.ssFallback && Mr(e.ssFallback),
                el: e.el,
                anchor: e.anchor
            };
            return c
        }

        function jr(e = " ", t = 0) {
            return Lr(ur, null, e, t)
        }

        function Tr(e = "", t = !1) {
            return t ? (gr(), wr(fr, null, e)) : Lr(fr, null, e)
        }

        function Nr(e) {
            return null == e || "boolean" === typeof e ? Lr(fr) : x(e) ? Lr(ar, null, e.slice()) : "object" === typeof e ? Pr(e) : Lr(ur, null, String(e))
        }

        function Pr(e) {
            return null === e.el || e.memo ? e : Mr(e)
        }

        function $r(e, t) {
            let n = 0;
            const {
                shapeFlag: o
            } = e;
            if (null == t) t = null;
            else if (x(t)) n = 16;
            else if ("object" === typeof t) {
                if (65 & o) {
                    const n = t.default;
                    return void(n && (n._c && (n._d = !1), $r(e, n()), n._c && (n._d = !0)))
                } {
                    n = 32;
                    const o = t._;
                    o || Sr in t ? 3 === o && fn && (1 === fn.slots._ ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024)) : t._ctx = fn
                }
            } else O(t) ? (t = {
                default: t,
                _ctx: fn
            }, n = 32) : (t = String(t), 64 & o ? (n = 16, t = [jr(t)]) : n = 8);
            e.children = t, e.shapeFlag |= n
        }

        function Br(...e) {
            const t = {};
            for (let n = 0; n < e.length; n++) {
                const o = e[n];
                for (const e in o)
                    if ("class" === e) t.class !== o.class && (t.class = a([t.class, o.class]));
                    else if ("style" === e) t.style = s([t.style, o.style]);
                else if (b(e)) {
                    const n = t[e],
                        r = o[e];
                    !r || n === r || x(n) && n.includes(r) || (t[e] = n ? [].concat(n, r) : r)
                } else "" !== e && (t[e] = o[e])
            }
            return t
        }

        function Rr(e, t, n, o = null) {
            Tt(e, t, 7, [n, o])
        }
        const Ur = Yo();
        let Dr = 0;

        function Ir(e, t, n) {
            const o = e.type,
                r = (t ? t.appContext : e.appContext) || Ur,
                s = {
                    uid: Dr++,
                    vnode: e,
                    type: o,
                    parent: t,
                    appContext: r,
                    root: null,
                    next: null,
                    subTree: null,
                    effect: null,
                    update: null,
                    scope: new Y(!0),
                    render: null,
                    proxy: null,
                    exposed: null,
                    exposeProxy: null,
                    withProxy: null,
                    provides: t ? t.provides : Object.create(r.provides),
                    accessCache: null,
                    renderCache: [],
                    components: null,
                    directives: null,
                    propsOptions: Uo(o, r),
                    emitsOptions: an(o, r),
                    emit: null,
                    emitted: null,
                    propsDefaults: p,
                    inheritAttrs: o.inheritAttrs,
                    ctx: p,
                    data: p,
                    props: p,
                    attrs: p,
                    slots: p,
                    refs: p,
                    setupState: p,
                    setupContext: null,
                    suspense: n,
                    suspenseId: n ? n.pendingId : 0,
                    asyncDep: null,
                    asyncResolved: !1,
                    isMounted: !1,
                    isUnmounted: !1,
                    isDeactivated: !1,
                    bc: null,
                    c: null,
                    bm: null,
                    m: null,
                    bu: null,
                    u: null,
                    um: null,
                    bum: null,
                    da: null,
                    a: null,
                    rtg: null,
                    rtc: null,
                    ec: null,
                    sp: null
                };
            return s.ctx = {
                _: s
            }, s.root = t ? t.root : s, s.emit = cn.bind(null, s), e.ce && e.ce(s), s
        }
        let Vr = null;
        const Wr = () => Vr || fn,
            Kr = e => {
                Vr = e, e.scope.on()
            },
            Jr = () => {
                Vr && Vr.scope.off(), Vr = null
            };

        function zr(e) {
            return 4 & e.vnode.shapeFlag
        }
        let qr, Hr, Zr = !1;

        function Gr(e, t = !1) {
            Zr = t;
            const {
                props: n,
                children: o
            } = e.vnode, r = zr(e);
            Po(e, n, r, t), Zo(e, o);
            const s = r ? Yr(e, t) : void 0;
            return Zr = !1, s
        }

        function Yr(e, t) {
            const n = e.type;
            e.accessCache = Object.create(null), e.proxy = wt(new Proxy(e.ctx, _o));
            const {
                setup: o
            } = n;
            if (o) {
                const n = e.setupContext = o.length > 1 ? ts(e) : null;
                Kr(e), ge();
                const r = jt(o, e, 0, [e.props, n]);
                if (ve(), Jr(), F(r)) {
                    if (r.then(Jr, Jr), t) return r.then((n => {
                        Xr(e, n, t)
                    })).catch((t => {
                        Nt(t, e, 0)
                    }));
                    e.asyncDep = r
                } else Xr(e, r, t)
            } else Qr(e, t)
        }

        function Xr(e, t, n) {
            O(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : A(t) && (e.setupState = At(t)), Qr(e, n)
        }

        function Qr(e, t, n) {
            const o = e.type;
            if (!e.render) {
                if (!t && qr && !o.render) {
                    const t = o.template;
                    if (t) {
                        0;
                        const {
                            isCustomElement: n,
                            compilerOptions: r
                        } = e.appContext.config, {
                            delimiters: s,
                            compilerOptions: i
                        } = o, l = y(y({
                            isCustomElement: n,
                            delimiters: s
                        }, r), i);
                        o.render = qr(t, l)
                    }
                }
                e.render = o.render || h, Hr && Hr(e)
            }
            Kr(e), ge(), ko(e), ve(), Jr()
        }

        function es(e) {
            return new Proxy(e.attrs, {
                get(t, n) {
                    return be(e, "get", "$attrs"), t[n]
                }
            })
        }

        function ts(e) {
            const t = t => {
                e.exposed = t || {}
            };
            let n;
            return {
                get attrs() {
                    return n || (n = es(e))
                },
                slots: e.slots,
                emit: e.emit,
                expose: t
            }
        }

        function ns(e) {
            if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(At(wt(e.exposed)), {
                get(t, n) {
                    return n in t ? t[n] : n in yo ? yo[n](e) : void 0
                }
            }))
        }

        function os(e, t = !0) {
            return O(e) ? e.displayName || e.name : e.name || t && e.__name
        }

        function rs(e) {
            return O(e) && "__vccOpts" in e
        }
        const ss = (e, t) => Mt(e, t, Zr);

        function is(e, t, n) {
            const o = arguments.length;
            return 2 === o ? A(t) && !x(t) ? kr(t) ? Lr(e, null, [t]) : Lr(e, t) : Lr(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : 3 === o && kr(n) && (n = [n]), Lr(e, t, n))
        }
        Symbol("");
        const ls = "3.2.37",
            cs = "http://www.w3.org/2000/svg",
            as = "undefined" !== typeof document ? document : null,
            us = as && as.createElement("template"),
            fs = {
                insert: (e, t, n) => {
                    t.insertBefore(e, n || null)
                },
                remove: e => {
                    const t = e.parentNode;
                    t && t.removeChild(e)
                },
                createElement: (e, t, n, o) => {
                    const r = t ? as.createElementNS(cs, e) : as.createElement(e, n ? {
                        is: n
                    } : void 0);
                    return "select" === e && o && null != o.multiple && r.setAttribute("multiple", o.multiple), r
                },
                createText: e => as.createTextNode(e),
                createComment: e => as.createComment(e),
                setText: (e, t) => {
                    e.nodeValue = t
                },
                setElementText: (e, t) => {
                    e.textContent = t
                },
                parentNode: e => e.parentNode,
                nextSibling: e => e.nextSibling,
                querySelector: e => as.querySelector(e),
                setScopeId(e, t) {
                    e.setAttribute(t, "")
                },
                cloneNode(e) {
                    const t = e.cloneNode(!0);
                    return "_value" in e && (t._value = e._value), t
                },
                insertStaticContent(e, t, n, o, r, s) {
                    const i = n ? n.previousSibling : t.lastChild;
                    if (r && (r === s || r.nextSibling)) {
                        while (1)
                            if (t.insertBefore(r.cloneNode(!0), n), r === s || !(r = r.nextSibling)) break
                    } else {
                        us.innerHTML = o ? `<svg>${e}</svg>` : e;
                        const r = us.content;
                        if (o) {
                            const e = r.firstChild;
                            while (e.firstChild) r.appendChild(e.firstChild);
                            r.removeChild(e)
                        }
                        t.insertBefore(r, n)
                    }
                    return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
                }
            };

        function ps(e, t, n) {
            const o = e._vtc;
            o && (t = (t ? [t, ...o] : [...o]).join(" ")), null == t ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
        }

        function ds(e, t, n) {
            const o = e.style,
                r = E(n);
            if (n && !r) {
                for (const e in n) gs(o, e, n[e]);
                if (t && !E(t))
                    for (const e in t) null == n[e] && gs(o, e, "")
            } else {
                const s = o.display;
                r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s)
            }
        }
        const hs = /\s*!important$/;

        function gs(e, t, n) {
            if (x(n)) n.forEach((n => gs(e, t, n)));
            else if (null == n && (n = ""), t.startsWith("--")) e.setProperty(t, n);
            else {
                const o = ms(e, t);
                hs.test(n) ? e.setProperty(I(o), n.replace(hs, ""), "important") : e[o] = n
            }
        }
        const vs = ["Webkit", "Moz", "ms"],
            bs = {};

        function ms(e, t) {
            const n = bs[t];
            if (n) return n;
            let o = U(t);
            if ("filter" !== o && o in e) return bs[t] = o;
            o = V(o);
            for (let r = 0; r < vs.length; r++) {
                const n = vs[r] + o;
                if (n in e) return bs[t] = n
            }
            return t
        }
        const ys = "http://www.w3.org/1999/xlink";

        function _s(e, t, n, s, i) {
            if (s && t.startsWith("xlink:")) null == n ? e.removeAttributeNS(ys, t.slice(6, t.length)) : e.setAttributeNS(ys, t, n);
            else {
                const s = o(t);
                null == n || s && !r(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n)
            }
        }

        function ws(e, t, n, o, s, i, l) {
            if ("innerHTML" === t || "textContent" === t) return o && l(o, s, i), void(e[t] = null == n ? "" : n);
            if ("value" === t && "PROGRESS" !== e.tagName && !e.tagName.includes("-")) {
                e._value = n;
                const o = null == n ? "" : n;
                return e.value === o && "OPTION" !== e.tagName || (e.value = o), void(null == n && e.removeAttribute(t))
            }
            let c = !1;
            if ("" === n || null == n) {
                const o = typeof e[t];
                "boolean" === o ? n = r(n) : null == n && "string" === o ? (n = "", c = !0) : "number" === o && (n = 0, c = !0)
            }
            try {
                e[t] = n
            } catch (a) {
                0
            }
            c && e.removeAttribute(t)
        }
        const [ks, xs] = (() => {
            let e = Date.now,
                t = !1;
            if ("undefined" !== typeof window) {
                Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
                const n = navigator.userAgent.match(/firefox\/(\d+)/i);
                t = !!(n && Number(n[1]) <= 53)
            }
            return [e, t]
        })();
        let Ss = 0;
        const Cs = Promise.resolve(),
            Os = () => {
                Ss = 0
            },
            Es = () => Ss || (Cs.then(Os), Ss = ks());

        function Ls(e, t, n, o) {
            e.addEventListener(t, n, o)
        }

        function As(e, t, n, o) {
            e.removeEventListener(t, n, o)
        }

        function Fs(e, t, n, o, r = null) {
            const s = e._vei || (e._vei = {}),
                i = s[t];
            if (o && i) i.value = o;
            else {
                const [n, l] = js(t);
                if (o) {
                    const i = s[t] = Ts(o, r);
                    Ls(e, n, i, l)
                } else i && (As(e, n, i, l), s[t] = void 0)
            }
        }
        const Ms = /(?:Once|Passive|Capture)$/;

        function js(e) {
            let t;
            if (Ms.test(e)) {
                let n;
                t = {};
                while (n = e.match(Ms)) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0
            }
            return [I(e.slice(2)), t]
        }

        function Ts(e, t) {
            const n = e => {
                const o = e.timeStamp || ks();
                (xs || o >= n.attached - 1) && Tt(Ns(e, n.value), t, 5, [e])
            };
            return n.value = e, n.attached = Es(), n
        }

        function Ns(e, t) {
            if (x(t)) {
                const n = e.stopImmediatePropagation;
                return e.stopImmediatePropagation = () => {
                    n.call(e), e._stopped = !0
                }, t.map((e => t => !t._stopped && e && e(t)))
            }
            return t
        }
        const Ps = /^on[a-z]/,
            $s = (e, t, n, o, r = !1, s, i, l, c) => {
                "class" === t ? ps(e, o, r) : "style" === t ? ds(e, n, o) : b(t) ? m(t) || Fs(e, t, n, o, i) : ("." === t[0] ? (t = t.slice(1), 1) : "^" === t[0] ? (t = t.slice(1), 0) : Bs(e, t, o, r)) ? ws(e, t, o, s, i, l, c) : ("true-value" === t ? e._trueValue = o : "false-value" === t && (e._falseValue = o), _s(e, t, o, r))
            };

        function Bs(e, t, n, o) {
            return o ? "innerHTML" === t || "textContent" === t || !!(t in e && Ps.test(t) && O(n)) : "spellcheck" !== t && "draggable" !== t && "translate" !== t && ("form" !== t && (("list" !== t || "INPUT" !== e.tagName) && (("type" !== t || "TEXTAREA" !== e.tagName) && ((!Ps.test(t) || !E(n)) && t in e))))
        }
        "undefined" !== typeof HTMLElement && HTMLElement;
        const Rs = "transition",
            Us = "animation",
            Ds = (e, {
                slots: t
            }) => is($n, Ks(e), t);
        Ds.displayName = "Transition";
        const Is = {
                name: String,
                type: String,
                css: {
                    type: Boolean,
                    default: !0
                },
                duration: [String, Number, Object],
                enterFromClass: String,
                enterActiveClass: String,
                enterToClass: String,
                appearFromClass: String,
                appearActiveClass: String,
                appearToClass: String,
                leaveFromClass: String,
                leaveActiveClass: String,
                leaveToClass: String
            },
            Vs = (Ds.props = y({}, $n.props, Is), (e, t = []) => {
                x(e) ? e.forEach((e => e(...t))) : e && e(...t)
            }),
            Ws = e => !!e && (x(e) ? e.some((e => e.length > 1)) : e.length > 1);

        function Ks(e) {
            const t = {};
            for (const y in e) y in Is || (t[y] = e[y]);
            if (!1 === e.css) return t;
            const {
                name: n = "v",
                type: o,
                duration: r,
                enterFromClass: s = `${n}-enter-from`,
                enterActiveClass: i = `${n}-enter-active`,
                enterToClass: l = `${n}-enter-to`,
                appearFromClass: c = s,
                appearActiveClass: a = i,
                appearToClass: u = l,
                leaveFromClass: f = `${n}-leave-from`,
                leaveActiveClass: p = `${n}-leave-active`,
                leaveToClass: d = `${n}-leave-to`
            } = e, h = Js(r), g = h && h[0], v = h && h[1], {
                onBeforeEnter: b,
                onEnter: m,
                onEnterCancelled: _,
                onLeave: w,
                onLeaveCancelled: k,
                onBeforeAppear: x = b,
                onAppear: S = m,
                onAppearCancelled: C = _
            } = t, O = (e, t, n) => {
                Hs(e, t ? u : l), Hs(e, t ? a : i), n && n()
            }, E = (e, t) => {
                e._isLeaving = !1, Hs(e, f), Hs(e, d), Hs(e, p), t && t()
            }, L = e => (t, n) => {
                const r = e ? S : m,
                    i = () => O(t, e, n);
                Vs(r, [t, i]), Zs((() => {
                    Hs(t, e ? c : s), qs(t, e ? u : l), Ws(r) || Ys(t, o, g, i)
                }))
            };
            return y(t, {
                onBeforeEnter(e) {
                    Vs(b, [e]), qs(e, s), qs(e, i)
                },
                onBeforeAppear(e) {
                    Vs(x, [e]), qs(e, c), qs(e, a)
                },
                onEnter: L(!1),
                onAppear: L(!0),
                onLeave(e, t) {
                    e._isLeaving = !0;
                    const n = () => E(e, t);
                    qs(e, f), ti(), qs(e, p), Zs((() => {
                        e._isLeaving && (Hs(e, f), qs(e, d), Ws(w) || Ys(e, o, v, n))
                    })), Vs(w, [e, n])
                },
                onEnterCancelled(e) {
                    O(e, !1), Vs(_, [e])
                },
                onAppearCancelled(e) {
                    O(e, !0), Vs(C, [e])
                },
                onLeaveCancelled(e) {
                    E(e), Vs(k, [e])
                }
            })
        }

        function Js(e) {
            if (null == e) return null;
            if (A(e)) return [zs(e.enter), zs(e.leave)]; {
                const t = zs(e);
                return [t, t]
            }
        }

        function zs(e) {
            const t = q(e);
            return t
        }

        function qs(e, t) {
            t.split(/\s+/).forEach((t => t && e.classList.add(t))), (e._vtc || (e._vtc = new Set)).add(t)
        }

        function Hs(e, t) {
            t.split(/\s+/).forEach((t => t && e.classList.remove(t)));
            const {
                _vtc: n
            } = e;
            n && (n.delete(t), n.size || (e._vtc = void 0))
        }

        function Zs(e) {
            requestAnimationFrame((() => {
                requestAnimationFrame(e)
            }))
        }
        let Gs = 0;

        function Ys(e, t, n, o) {
            const r = e._endId = ++Gs,
                s = () => {
                    r === e._endId && o()
                };
            if (n) return setTimeout(s, n);
            const {
                type: i,
                timeout: l,
                propCount: c
            } = Xs(e, t);
            if (!i) return o();
            const a = i + "end";
            let u = 0;
            const f = () => {
                    e.removeEventListener(a, p), s()
                },
                p = t => {
                    t.target === e && ++u >= c && f()
                };
            setTimeout((() => {
                u < c && f()
            }), l + 1), e.addEventListener(a, p)
        }

        function Xs(e, t) {
            const n = window.getComputedStyle(e),
                o = e => (n[e] || "").split(", "),
                r = o(Rs + "Delay"),
                s = o(Rs + "Duration"),
                i = Qs(r, s),
                l = o(Us + "Delay"),
                c = o(Us + "Duration"),
                a = Qs(l, c);
            let u = null,
                f = 0,
                p = 0;
            t === Rs ? i > 0 && (u = Rs, f = i, p = s.length) : t === Us ? a > 0 && (u = Us, f = a, p = c.length) : (f = Math.max(i, a), u = f > 0 ? i > a ? Rs : Us : null, p = u ? u === Rs ? s.length : c.length : 0);
            const d = u === Rs && /\b(transform|all)(,|$)/.test(n[Rs + "Property"]);
            return {
                type: u,
                timeout: f,
                propCount: p,
                hasTransform: d
            }
        }

        function Qs(e, t) {
            while (e.length < t.length) e = e.concat(e);
            return Math.max(...t.map(((t, n) => ei(t) + ei(e[n]))))
        }

        function ei(e) {
            return 1e3 * Number(e.slice(0, -1).replace(",", "."))
        }

        function ti() {
            return document.body.offsetHeight
        }
        new WeakMap, new WeakMap;
        const ni = ["ctrl", "shift", "alt", "meta"],
            oi = {
                stop: e => e.stopPropagation(),
                prevent: e => e.preventDefault(),
                self: e => e.target !== e.currentTarget,
                ctrl: e => !e.ctrlKey,
                shift: e => !e.shiftKey,
                alt: e => !e.altKey,
                meta: e => !e.metaKey,
                left: e => "button" in e && 0 !== e.button,
                middle: e => "button" in e && 1 !== e.button,
                right: e => "button" in e && 2 !== e.button,
                exact: (e, t) => ni.some((n => e[`${n}Key`] && !t.includes(n)))
            },
            ri = (e, t) => (n, ...o) => {
                for (let e = 0; e < t.length; e++) {
                    const o = oi[t[e]];
                    if (o && o(n, t)) return
                }
                return e(n, ...o)
            };
        const si = y({
            patchProp: $s
        }, fs);
        let ii;

        function li() {
            return ii || (ii = or(si))
        }
        const ci = (...e) => {
            const t = li().createApp(...e);
            const {
                mount: n
            } = t;
            return t.mount = e => {
                const o = ai(e);
                if (!o) return;
                const r = t._component;
                O(r) || r.render || r.template || (r.template = o.innerHTML), o.innerHTML = "";
                const s = n(o, !1, o instanceof SVGElement);
                return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s
            }, t
        };

        function ai(e) {
            if (E(e)) {
                const t = document.querySelector(e);
                return t
            }
            return e
        }

        function ui(e, t, n, o, r, s) {
            const i = po("Banner");
            return gr(), wr(i, {
                onClick: t[0] || (t[0] = ri((() => {}), ["stop"])),
                account: r.account,
                "oauth-site": r.oauthSite,
                "login-link": r.loginLink,
                "handle-logout": s.handleLogout
            }, null, 8, ["account", "oauth-site", "login-link", "handle-logout"])
        }
        const fi = {
                class: "wb-account-container"
            },
            pi = {
                key: 0,
                class: "wb-account-bar"
            },
            di = {
                key: 1
            };

        function hi(e, t, n, o, r, s) {
            const i = po("Account"),
                l = po("DropdownMenu");
            return gr(), _r("div", fi, [(gr(), wr(go(s.accountExists ? "button" : "a"), {
                class: "wb-account-link",
                href: s.accountExists ? null : n.loginLink,
                onClick: s.toggleDrawer
            }, {
                default: vn((() => [s.accountExists ? (gr(), _r("div", pi, [Lr(i, {
                    account: n.account
                }, null, 8, ["account"])])) : (gr(), _r("span", di, u(e.$t("banner.login.link")), 1))])),
                _: 1
            }, 8, ["href", "onClick"])), n.account ? (gr(), wr(l, {
                key: 0,
                onClose: s.toggleDrawer,
                onLogout: n.handleLogout,
                "oauth-site": n.oauthSite,
                "is-drawer-open": r.isDrawerOpen,
                account: n.account
            }, null, 8, ["onClose", "onLogout", "oauth-site", "is-drawer-open", "account"])) : Tr("", !0)])
        }
        const gi = {
                class: "wb-account-avatar-container"
            },
            vi = ["src"];

        function bi(e, t, n, o, r, s) {
            return gr(), _r("div", gi, [Er("img", {
                alt: "Your avatar",
                role: "presentation",
                class: "wb-account-avatar",
                src: n.account.avatarUrl
            }, null, 8, vi), jr(" " + u(n.account.username), 1)])
        }
        var mi = {
                name: "Account",
                props: {
                    account: {
                        required: !0,
                        type: Object
                    }
                }
            },
            yi = (n(904), n(744));
        const _i = (0, yi.Z)(mi, [
            ["render", bi],
            ["__scopeId", "data-v-4cce9dfe"]
        ]);
        var wi = _i;
        const ki = e => (hn("data-v-ea58cb5e"), e = e(), gn(), e),
            xi = ["href"],
            Si = ki((() => Er("span", {
                class: "wb-account-icon"
            }, "⚙", -1)));

        function Ci(e, t, n, o, r, s) {
            return gr(), _r("div", {
                class: a(["wb-account-overlay", {
                    "wb-account-opened": n.isDrawerOpen
                }]),
                onClick: t[2] || (t[2] = ri((t => e.$emit("close")), ["stop"]))
            }, [Er("div", {
                class: "wb-account-dropdown",
                onClick: t[1] || (t[1] = ri((() => {}), ["stop"]))
            }, [Er("button", {
                class: "wb-account-logout",
                onClick: t[0] || (t[0] = t => e.$emit("logout"))
            }, u(e.$t("banner.logout.link")), 1), Er("a", {
                class: "wb-account-link",
                href: `${n.oauthSite}/account`,
                target: "_blank",
                rel: "noreferrer noopener"
            }, [Si, Er("span", null, u(e.$t("banner.account-settings.link")), 1)], 8, xi)])], 2)
        }
        var Oi = {
            name: "DropdownMenu",
            props: {
                account: {
                    required: !0,
                    type: Object
                },
                isDrawerOpen: {
                    required: !0,
                    type: Boolean
                },
                oauthSite: {
                    required: !0,
                    type: String
                }
            }
        };
        n(111);
        const Ei = (0, yi.Z)(Oi, [
            ["render", Ci],
            ["__scopeId", "data-v-ea58cb5e"]
        ]);
        var Li = Ei,
            Ai = {
                name: "Banner",
                props: {
                    loginLink: {
                        required: !0,
                        type: String
                    },
                    account: {
                        required: !0,
                        type: Object
                    },
                    handleLogout: {
                        required: !0,
                        type: Function
                    },
                    oauthSite: {
                        required: !0,
                        type: String
                    }
                },
                computed: {
                    accountExists() {
                        return this.account && Object.keys(this.account).length > 0
                    }
                },
                data() {
                    return {
                        isDrawerOpen: !1
                    }
                },
                methods: {
                    toggleDrawer() {
                        this.accountExists && (this.isDrawerOpen = !this.isDrawerOpen)
                    }
                },
                components: {
                    Account: wi,
                    DropdownMenu: Li
                }
            };
        n(258);
        const Fi = (0, yi.Z)(Ai, [
            ["render", hi],
            ["__scopeId", "data-v-1e5b2b6a"]
        ]);
        var Mi = Fi,
            ji = {
                name: "App",
                components: {
                    Banner: Mi
                },
                props: {
                    WeBridgeSDK: {
                        required: !0,
                        type: Object
                    },
                    LoginLinkSettings: {
                        required: !0,
                        type: Object
                    }
                },
                data() {
                    return {
                        account: {},
                        oauthSite: "",
                        loginLink: ""
                    }
                },
                methods: {
                    async handleLogout() {
                        await this.WeBridgeSDK.logout()
                    }
                },
                async created() {
                    this.WeBridgeSDK && (this.oauthSite = this.WeBridgeSDK.options.oauthSite, this.account = await this.WeBridgeSDK.getAccount(), this.loginLink = this.WeBridgeSDK.loginLink(this.LoginLinkSettings))
                }
            };
        const Ti = (0, yi.Z)(ji, [
            ["render", ui]
        ]);
        var Ni = Ti,
            Pi = JSON.parse('{"banner.account-settings.link":"إعدادت الحساب","banner.login.link":"تسجيل دخول","banner.logout.link":"تسجيل خروج"}'),
            $i = JSON.parse('{"banner.account-settings.link":"Kontoindstillinger","banner.login.link":"Log ind","banner.logout.link":"Log ud"}'),
            Bi = JSON.parse('{"banner.account-settings.link":"Kontoeinstellungen","banner.login.link":"Anmelden","banner.logout.link":"Abmelden"}'),
            Ri = JSON.parse('{"banner.account-settings.link":"Account settings","banner.login.link":"Sign in","banner.logout.link":"Sign out"}'),
            Ui = JSON.parse('{"banner.account-settings.link":"Configuración de la cuenta","banner.login.link":"Iniciar sesión","banner.logout.link":"Cerrar sesión"}'),
            Di = JSON.parse('{"banner.account-settings.link":"Configuración de cuenta","banner.login.link":"Iniciar sesión","banner.logout.link":"Cerrar sesión"}'),
            Ii = JSON.parse('{"banner.account-settings.link":"Tiliasetukset","banner.login.link":"Kirjaudu sisään","banner.logout.link":"Kirjaudu ulos"}'),
            Vi = JSON.parse('{"banner.account-settings.link":"Paramètres de compte","banner.login.link":"Se connecter","banner.logout.link":"Se déconnecter"}'),
            Wi = JSON.parse('{"banner.account-settings.link":"Impostazioni account","banner.login.link":"Accedi","banner.logout.link":"Esci"}'),
            Ki = JSON.parse('{"banner.account-settings.link":"アカウント設定","banner.login.link":"サインイン","banner.logout.link":"サインアウト"}'),
            Ji = JSON.parse('{"banner.account-settings.link":"계정 설정","banner.login.link":"로그인","banner.logout.link":"로그아웃"}'),
            zi = JSON.parse('{"banner.account-settings.link":"Kontoinnstillinger","banner.login.link":"Logg inn","banner.logout.link":"Logg ut"}'),
            qi = JSON.parse('{"banner.account-settings.link":"Ustawienia konta","banner.login.link":"Zaloguj","banner.logout.link":"Wyloguj"}'),
            Hi = JSON.parse('{"banner.account-settings.link":"Configurações de Conta","banner.login.link":"Entrar","banner.logout.link":"Sair"}'),
            Zi = JSON.parse('{"banner.account-settings.link":"Настройки учетной записи","banner.login.link":"Войти","banner.logout.link":"Выйти"}'),
            Gi = JSON.parse('{"banner.account-settings.link":"Kontoinställningar","banner.login.link":"Logga in","banner.logout.link":"Logga ut"}'),
            Yi = JSON.parse('{"banner.account-settings.link":"Hesap Ayarları","banner.login.link":"Oturum aç","banner.logout.link":"Oturumu kapat"}'),
            Xi = JSON.parse('{"banner.account-settings.link":"帐户设置","banner.login.link":"登入","banner.logout.link":"登出"}'),
            Qi = JSON.parse('{"banner.account-settings.link":"帳戶設定","banner.login.link":"登入","banner.logout.link":"登出"}');
        const el = {
            "ar-ae": Pi,
            "da-dk": $i,
            "de-de": Bi,
            "en-us": Ri,
            "es-es": Ui,
            "es-mx": Di,
            "fi-fi": Ii,
            "fr-fr": Vi,
            "it-it": Wi,
            "ja-jp": Ki,
            "ko-kr": Ji,
            "no-no": zi,
            "pl-pl": qi,
            "pt-br": Hi,
            "ru-ru": Zi,
            "sv-se": Gi,
            "tr-tr": Yi,
            "zh-cn": Xi,
            "zh-tw": Qi
        };
        var tl = el;
        class nl {
            constructor(e, t) {
                this._defaultFallback = "en-us", this._messages = tl, this._fallback = "", this._locale = "", this._fallback = t || this._defaultFallback, this._locale = e || this._defaultFallback
            }
            get locale() {
                return this._locale
            }
            set locale(e) {
                this._locale = e
            }
            get fallback() {
                return this._fallback
            }
            get messages() {
                return this._messages
            }
            get supportedLocales() {
                return Object.keys(this.messages)
            }
            t(e) {
                if (!e) return console.warn("Translator needs a key to work"), "";
                let t = this.locale.toLocaleLowerCase();
                this.supportedLocales.includes(t) || (t = this.supportedLocales.includes(this.fallback) ? this.fallback : this._defaultFallback);
                let n = this.messages[t][e];
                return n || (n = this.messages[this.fallback] && this.messages[this.fallback][e], n = n || this.messages[this._defaultFallback][e]), n || e
            }
        }
        var ol = nl;
        const rl = (e, t, n) => {
            var o, r;
            const s = ci(Ni, {
                    WeBridgeSDK: t,
                    LoginLinkSettings: null === n || void 0 === n ? void 0 : n.loginLinkSettings
                }),
                i = new ol(null === (o = null === n || void 0 === n ? void 0 : n.settings) || void 0 === o ? void 0 : o.locale, null === (r = null === n || void 0 === n ? void 0 : n.settings) || void 0 === r ? void 0 : r.localeFallback);
            s.config.globalProperties.$t = i.t.bind(i), s.mount(e)
        };
        window.__P1__banner__initApp = rl
    }()
})();