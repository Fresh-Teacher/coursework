! function() {
    var u = {
            249: function(u, e) {
                var t;
                u.exports = (t = t || function(u, e) {
                    var t = Object.create || function() {
                            function u() {}
                            return function(e) {
                                var t;
                                return u.prototype = e, t = new u, u.prototype = null, t
                            }
                        }(),
                        r = {},
                        n = r.lib = {},
                        D = n.Base = {
                            extend: function(u) {
                                var e = t(this);
                                return u && e.mixIn(u), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                                    e.$super.init.apply(this, arguments)
                                }), e.init.prototype = e, e.$super = this, e
                            },
                            create: function() {
                                var u = this.extend();
                                return u.init.apply(u, arguments), u
                            },
                            init: function() {},
                            mixIn: function(u) {
                                for (var e in u) u.hasOwnProperty(e) && (this[e] = u[e]);
                                u.hasOwnProperty("toString") && (this.toString = u.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        },
                        i = n.WordArray = D.extend({
                            init: function(u, e) {
                                u = this.words = u || [], this.sigBytes = null != e ? e : 4 * u.length
                            },
                            toString: function(u) {
                                return (u || a).stringify(this)
                            },
                            concat: function(u) {
                                var e = this.words,
                                    t = u.words,
                                    r = this.sigBytes,
                                    n = u.sigBytes;
                                if (this.clamp(), r % 4)
                                    for (var D = 0; D < n; D++) {
                                        var i = t[D >>> 2] >>> 24 - D % 4 * 8 & 255;
                                        e[r + D >>> 2] |= i << 24 - (r + D) % 4 * 8
                                    } else
                                        for (D = 0; D < n; D += 4) e[r + D >>> 2] = t[D >>> 2];
                                return this.sigBytes += n, this
                            },
                            clamp: function() {
                                var e = this.words,
                                    t = this.sigBytes;
                                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = u.ceil(t / 4)
                            },
                            clone: function() {
                                var u = D.clone.call(this);
                                return u.words = this.words.slice(0), u
                            },
                            random: function(e) {
                                for (var t, r = [], n = function(e) {
                                        var t = 987654321,
                                            r = 4294967295;
                                        return function() {
                                            var n = ((t = 36969 * (65535 & t) + (t >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                                            return n /= 4294967296, (n += .5) * (u.random() > .5 ? 1 : -1)
                                        }
                                    }, D = 0; D < e; D += 4) {
                                    var o = n(4294967296 * (t || u.random()));
                                    t = 987654071 * o(), r.push(4294967296 * o() | 0)
                                }
                                return new i.init(r, e)
                            }
                        }),
                        o = r.enc = {},
                        a = o.Hex = {
                            stringify: function(u) {
                                for (var e = u.words, t = u.sigBytes, r = [], n = 0; n < t; n++) {
                                    var D = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                    r.push((D >>> 4).toString(16)), r.push((15 & D).toString(16))
                                }
                                return r.join("")
                            },
                            parse: function(u) {
                                for (var e = u.length, t = [], r = 0; r < e; r += 2) t[r >>> 3] |= parseInt(u.substr(r, 2), 16) << 24 - r % 8 * 4;
                                return new i.init(t, e / 2)
                            }
                        },
                        s = o.Latin1 = {
                            stringify: function(u) {
                                for (var e = u.words, t = u.sigBytes, r = [], n = 0; n < t; n++) {
                                    var D = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                                    r.push(String.fromCharCode(D))
                                }
                                return r.join("")
                            },
                            parse: function(u) {
                                for (var e = u.length, t = [], r = 0; r < e; r++) t[r >>> 2] |= (255 & u.charCodeAt(r)) << 24 - r % 4 * 8;
                                return new i.init(t, e)
                            }
                        },
                        c = o.Utf8 = {
                            stringify: function(u) {
                                try {
                                    return decodeURIComponent(escape(s.stringify(u)))
                                } catch (u) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(u) {
                                return s.parse(unescape(encodeURIComponent(u)))
                            }
                        },
                        A = n.BufferedBlockAlgorithm = D.extend({
                            reset: function() {
                                this._data = new i.init, this._nDataBytes = 0
                            },
                            _append: function(u) {
                                "string" == typeof u && (u = c.parse(u)), this._data.concat(u), this._nDataBytes += u.sigBytes
                            },
                            _process: function(e) {
                                var t = this._data,
                                    r = t.words,
                                    n = t.sigBytes,
                                    D = this.blockSize,
                                    o = n / (4 * D),
                                    a = (o = e ? u.ceil(o) : u.max((0 | o) - this._minBufferSize, 0)) * D,
                                    s = u.min(4 * a, n);
                                if (a) {
                                    for (var c = 0; c < a; c += D) this._doProcessBlock(r, c);
                                    var A = r.splice(0, a);
                                    t.sigBytes -= s
                                }
                                return new i.init(A, s)
                            },
                            clone: function() {
                                var u = D.clone.call(this);
                                return u._data = this._data.clone(), u
                            },
                            _minBufferSize: 0
                        }),
                        F = (n.Hasher = A.extend({
                            cfg: D.extend(),
                            init: function(u) {
                                this.cfg = this.cfg.extend(u), this.reset()
                            },
                            reset: function() {
                                A.reset.call(this), this._doReset()
                            },
                            update: function(u) {
                                return this._append(u), this._process(), this
                            },
                            finalize: function(u) {
                                return u && this._append(u), this._doFinalize()
                            },
                            blockSize: 16,
                            _createHelper: function(u) {
                                return function(e, t) {
                                    return new u.init(t).finalize(e)
                                }
                            },
                            _createHmacHelper: function(u) {
                                return function(e, t) {
                                    return new F.HMAC.init(u, t).finalize(e)
                                }
                            }
                        }), r.algo = {});
                    return r
                }(Math), t)
            },
            269: function(u, e, t) {
                var r, n, D;
                u.exports = (r = t(249), D = (n = r).lib.WordArray, n.enc.Base64 = {
                    stringify: function(u) {
                        var e = u.words,
                            t = u.sigBytes,
                            r = this._map;
                        u.clamp();
                        for (var n = [], D = 0; D < t; D += 3)
                            for (var i = (e[D >>> 2] >>> 24 - D % 4 * 8 & 255) << 16 | (e[D + 1 >>> 2] >>> 24 - (D + 1) % 4 * 8 & 255) << 8 | e[D + 2 >>> 2] >>> 24 - (D + 2) % 4 * 8 & 255, o = 0; o < 4 && D + .75 * o < t; o++) n.push(r.charAt(i >>> 6 * (3 - o) & 63));
                        var a = r.charAt(64);
                        if (a)
                            for (; n.length % 4;) n.push(a);
                        return n.join("")
                    },
                    parse: function(u) {
                        var e = u.length,
                            t = this._map,
                            r = this._reverseMap;
                        if (!r) {
                            r = this._reverseMap = [];
                            for (var n = 0; n < t.length; n++) r[t.charCodeAt(n)] = n
                        }
                        var i = t.charAt(64);
                        if (i) {
                            var o = u.indexOf(i); - 1 !== o && (e = o)
                        }
                        return function(u, e, t) {
                            for (var r = [], n = 0, i = 0; i < e; i++)
                                if (i % 4) {
                                    var o = t[u.charCodeAt(i - 1)] << i % 4 * 2,
                                        a = t[u.charCodeAt(i)] >>> 6 - i % 4 * 2;
                                    r[n >>> 2] |= (o | a) << 24 - n % 4 * 8, n++
                                }
                            return D.create(r, n)
                        }(u, e, r)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }, r.enc.Base64)
            },
            153: function(u, e, t) {
                var r;
                u.exports = (r = t(249), function(u) {
                    var e = r,
                        t = e.lib,
                        n = t.WordArray,
                        D = t.Hasher,
                        i = e.algo,
                        o = [],
                        a = [];
                    ! function() {
                        function e(e) {
                            for (var t = u.sqrt(e), r = 2; r <= t; r++)
                                if (!(e % r)) return !1;
                            return !0
                        }

                        function t(u) {
                            return 4294967296 * (u - (0 | u)) | 0
                        }
                        for (var r = 2, n = 0; n < 64;) e(r) && (n < 8 && (o[n] = t(u.pow(r, .5))), a[n] = t(u.pow(r, 1 / 3)), n++), r++
                    }();
                    var s = [],
                        c = i.SHA256 = D.extend({
                            _doReset: function() {
                                this._hash = new n.init(o.slice(0))
                            },
                            _doProcessBlock: function(u, e) {
                                for (var t = this._hash.words, r = t[0], n = t[1], D = t[2], i = t[3], o = t[4], c = t[5], A = t[6], F = t[7], C = 0; C < 64; C++) {
                                    if (C < 16) s[C] = 0 | u[e + C];
                                    else {
                                        var h = s[C - 15],
                                            E = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3,
                                            f = s[C - 2],
                                            l = (f << 15 | f >>> 17) ^ (f << 13 | f >>> 19) ^ f >>> 10;
                                        s[C] = E + s[C - 7] + l + s[C - 16]
                                    }
                                    var d = r & n ^ r & D ^ n & D,
                                        B = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                        p = F + ((o << 26 | o >>> 6) ^ (o << 21 | o >>> 11) ^ (o << 7 | o >>> 25)) + (o & c ^ ~o & A) + a[C] + s[C];
                                    F = A, A = c, c = o, o = i + p | 0, i = D, D = n, n = r, r = p + (B + d) | 0
                                }
                                t[0] = t[0] + r | 0, t[1] = t[1] + n | 0, t[2] = t[2] + D | 0, t[3] = t[3] + i | 0, t[4] = t[4] + o | 0, t[5] = t[5] + c | 0, t[6] = t[6] + A | 0, t[7] = t[7] + F | 0
                            },
                            _doFinalize: function() {
                                var e = this._data,
                                    t = e.words,
                                    r = 8 * this._nDataBytes,
                                    n = 8 * e.sigBytes;
                                return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = u.floor(r / 4294967296), t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash
                            },
                            clone: function() {
                                var u = D.clone.call(this);
                                return u._hash = this._hash.clone(), u
                            }
                        });
                    e.SHA256 = D._createHelper(c), e.HmacSHA256 = D._createHmacHelper(c)
                }(Math), r.SHA256)
            },
            524: function(u) {
                var e;
                u.exports = (e = function() {
                    this.listeners = {}, this.registerListener = function(e, t, r) {
                        var n = e.constructor.name;
                        r = this.validateNumber(r || "any"), "Array" !== n && (e = [e]), e.forEach((function(e) {
                            if ("String" !== e.constructor.name) throw new Error("Only `String` and array of `String` are accepted for the event names!");
                            u.listeners[e] = u.listeners[e] || [], u.listeners[e].push({
                                callback: t,
                                number: r
                            })
                        }))
                    }, this.validateNumber = function(u) {
                        var e = u.constructor.name;
                        if ("Number" === e) return u;
                        if ("String" === e && "any" === u.toLowerCase()) return "any";
                        throw new Error("Only `Number` and `any` are accepted in the number of possible executions!")
                    }, this.toBeRemoved = function(u) {
                        var e = u.number;
                        return u.execution = u.execution || 0, u.execution++, !("any" === e || u.execution < e)
                    };
                    var u = this;
                    return {
                        on: function(e, t) {
                            u.registerListener.bind(u)(e, t, "any")
                        },
                        once: function(e, t) {
                            u.registerListener.bind(u)(e, t, 1)
                        },
                        exactly: function(e, t, r) {
                            u.registerListener.bind(u)(t, r, e)
                        },
                        die: function(e) {
                            delete u.listeners[e]
                        },
                        off: function(u) {
                            this.die(u)
                        },
                        detach: function(e, t) {
                            if (void 0 === t) return u.listeners[e] = [], !0;
                            for (var r in u.listeners[e])
                                if (u.listeners[e].hasOwnProperty(r) && u.listeners[e][r].callback === t) return u.listeners[e].splice(r, 1), this.detach(e, t);
                            return !0
                        },
                        detachAll: function() {
                            for (var e in u.listeners) u.listeners.hasOwnProperty(e) && this.detach(e)
                        },
                        emit: function(e, t) {
                            var r = [];
                            for (name in u.listeners)
                                if (u.listeners.hasOwnProperty(name) && (name === e && Array.prototype.push.apply(r, u.listeners[name]), name.indexOf("*") >= 0)) {
                                    var n = name.replace(/\*\*/, "([^.]+.?)+");
                                    n = n.replace(/\*/g, "[^.]+");
                                    var D = e.match(n);
                                    D && e === D[0] && Array.prototype.push.apply(r, u.listeners[name])
                                }
                            var i = arguments;
                            t = t || this, r.forEach((function(r, n) {
                                var D = r.callback;
                                r.number, t && (D = D.bind(t));
                                var o = [];
                                Object.keys(i).map((function(u) {
                                    u > 1 && o.push(i[u])
                                })), u.toBeRemoved(r) && u.listeners[e].splice(n, 1), D.apply(null, o)
                            }))
                        }
                    }
                }, e), u.exports.default = u.exports
            },
            142: function(u) {
                u.exports = function() {
                    "use strict";

                    function u(u, e) {
                        return u(e = {
                            exports: {}
                        }, e.exports), e.exports
                    }
                    var e = u((function(u) {
                            var e = u.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                            "number" == typeof __g && (__g = e)
                        })),
                        t = u((function(u) {
                            var e = u.exports = {
                                version: "2.6.5"
                            };
                            "number" == typeof __e && (__e = e)
                        })),
                        r = (t.version, function(u) {
                            return "object" == typeof u ? null !== u : "function" == typeof u
                        }),
                        n = function(u) {
                            if (!r(u)) throw TypeError(u + " is not an object!");
                            return u
                        },
                        D = function(u) {
                            try {
                                return !!u()
                            } catch (u) {
                                return !0
                            }
                        },
                        i = !D((function() {
                            return 7 != Object.defineProperty({}, "a", {
                                get: function() {
                                    return 7
                                }
                            }).a
                        })),
                        o = e.document,
                        a = r(o) && r(o.createElement),
                        s = !i && !D((function() {
                            return 7 != Object.defineProperty((u = "div", a ? o.createElement(u) : {}), "a", {
                                get: function() {
                                    return 7
                                }
                            }).a;
                            var u
                        })),
                        c = Object.defineProperty,
                        A = {
                            f: i ? Object.defineProperty : function(u, e, t) {
                                if (n(u), e = function(u, e) {
                                        if (!r(u)) return u;
                                        var t, n;
                                        if (e && "function" == typeof(t = u.toString) && !r(n = t.call(u))) return n;
                                        if ("function" == typeof(t = u.valueOf) && !r(n = t.call(u))) return n;
                                        if (!e && "function" == typeof(t = u.toString) && !r(n = t.call(u))) return n;
                                        throw TypeError("Can't convert object to primitive value")
                                    }(e, !0), n(t), s) try {
                                    return c(u, e, t)
                                } catch (u) {}
                                if ("get" in t || "set" in t) throw TypeError("Accessors not supported!");
                                return "value" in t && (u[e] = t.value), u
                            }
                        },
                        F = i ? function(u, e, t) {
                            return A.f(u, e, function(u, e) {
                                return {
                                    enumerable: !(1 & u),
                                    configurable: !(2 & u),
                                    writable: !(4 & u),
                                    value: e
                                }
                            }(1, t))
                        } : function(u, e, t) {
                            return u[e] = t, u
                        },
                        C = {}.hasOwnProperty,
                        h = function(u, e) {
                            return C.call(u, e)
                        },
                        E = 0,
                        f = Math.random(),
                        l = u((function(u) {
                            var r = "__core-js_shared__",
                                n = e[r] || (e[r] = {});
                            (u.exports = function(u, e) {
                                return n[u] || (n[u] = void 0 !== e ? e : {})
                            })("versions", []).push({
                                version: t.version,
                                mode: "global",
                                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                            })
                        })),
                        d = l("native-function-to-string", Function.toString),
                        B = u((function(u) {
                            var r = function(u) {
                                    return "Symbol(".concat(void 0 === u ? "" : u, ")_", (++E + f).toString(36))
                                }("src"),
                                n = "toString",
                                D = ("" + d).split(n);
                            t.inspectSource = function(u) {
                                return d.call(u)
                            }, (u.exports = function(u, t, n, i) {
                                var o = "function" == typeof n;
                                o && (h(n, "name") || F(n, "name", t)), u[t] !== n && (o && (h(n, r) || F(n, r, u[t] ? "" + u[t] : D.join(String(t)))), u === e ? u[t] = n : i ? u[t] ? u[t] = n : F(u, t, n) : (delete u[t], F(u, t, n)))
                            })(Function.prototype, n, (function() {
                                return "function" == typeof this && this[r] || d.call(this)
                            }))
                        })),
                        p = function(u, e, t) {
                            if (function(u) {
                                    if ("function" != typeof u) throw TypeError(u + " is not a function!")
                                }(u), void 0 === e) return u;
                            switch (t) {
                                case 1:
                                    return function(t) {
                                        return u.call(e, t)
                                    };
                                case 2:
                                    return function(t, r) {
                                        return u.call(e, t, r)
                                    };
                                case 3:
                                    return function(t, r, n) {
                                        return u.call(e, t, r, n)
                                    }
                            }
                            return function() {
                                return u.apply(e, arguments)
                            }
                        },
                        v = function(u, r, n) {
                            var D, i, o, a, s = u & v.F,
                                c = u & v.G,
                                A = u & v.S,
                                C = u & v.P,
                                h = u & v.B,
                                E = c ? e : A ? e[r] || (e[r] = {}) : (e[r] || {}).prototype,
                                f = c ? t : t[r] || (t[r] = {}),
                                l = f.prototype || (f.prototype = {});
                            for (D in c && (n = r), n) o = ((i = !s && E && void 0 !== E[D]) ? E : n)[D], a = h && i ? p(o, e) : C && "function" == typeof o ? p(Function.call, o) : o, E && B(E, D, o, u & v.U), f[D] != o && F(f, D, a), C && l[D] != o && (l[D] = o)
                        };
                    e.core = t, v.F = 1, v.G = 2, v.S = 4, v.P = 8, v.B = 16, v.W = 32, v.U = 64, v.R = 128;
                    var y, g = v,
                        w = Math.ceil,
                        _ = Math.floor,
                        m = function(u) {
                            return isNaN(u = +u) ? 0 : (u > 0 ? _ : w)(u)
                        },
                        S = (y = !1, function(u, e) {
                            var t, r, n = String(function(u) {
                                    if (null == u) throw TypeError("Can't call method on  " + u);
                                    return u
                                }(u)),
                                D = m(e),
                                i = n.length;
                            return D < 0 || D >= i ? y ? "" : void 0 : (t = n.charCodeAt(D)) < 55296 || t > 56319 || D + 1 === i || (r = n.charCodeAt(D + 1)) < 56320 || r > 57343 ? y ? n.charAt(D) : t : y ? n.slice(D, D + 2) : r - 56320 + (t - 55296 << 10) + 65536
                        });
                    g(g.P, "String", {
                        codePointAt: function(u) {
                            return S(this, u)
                        }
                    }), t.String.codePointAt;
                    var b = Math.max,
                        N = Math.min,
                        x = function(u, e) {
                            return (u = m(u)) < 0 ? b(u + e, 0) : N(u, e)
                        },
                        P = String.fromCharCode,
                        k = String.fromCodePoint;
                    g(g.S + g.F * (!!k && 1 != k.length), "String", {
                        fromCodePoint: function(u) {
                            for (var e, t = arguments, r = [], n = arguments.length, D = 0; n > D;) {
                                if (e = +t[D++], x(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                                r.push(e < 65536 ? P(e) : P(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                            }
                            return r.join("")
                        }
                    }), t.String.fromCodePoint;
                    var O, I, T, R, L, U, j, H, V, z, K, M, $, q, J = {
                            Space_Separator: /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                            ID_Start: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
                            ID_Continue: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
                        },
                        G = function(u) {
                            return "string" == typeof u && J.Space_Separator.test(u)
                        },
                        Y = function(u) {
                            return "string" == typeof u && (u >= "a" && u <= "z" || u >= "A" && u <= "Z" || "$" === u || "_" === u || J.ID_Start.test(u))
                        },
                        W = function(u) {
                            return "string" == typeof u && (u >= "a" && u <= "z" || u >= "A" && u <= "Z" || u >= "0" && u <= "9" || "$" === u || "_" === u || "‌" === u || "‍" === u || J.ID_Continue.test(u))
                        },
                        Q = function(u) {
                            return "string" == typeof u && /[0-9]/.test(u)
                        },
                        X = function(u) {
                            return "string" == typeof u && /[0-9A-Fa-f]/.test(u)
                        };

                    function Z(u, e, t) {
                        var r = u[e];
                        if (null != r && "object" == typeof r)
                            for (var n in r) {
                                var D = Z(r, n, t);
                                void 0 === D ? delete r[n] : r[n] = D
                            }
                        return t.call(u, e, r)
                    }

                    function uu() {
                        for (z = "default", K = "", M = !1, $ = 1;;) {
                            q = eu();
                            var u = ru[z]();
                            if (u) return u
                        }
                    }

                    function eu() {
                        if (O[R]) return String.fromCodePoint(O.codePointAt(R))
                    }

                    function tu() {
                        var u = eu();
                        return "\n" === u ? (L++, U = 0) : u ? U += u.length : U++, u && (R += u.length), u
                    }
                    var ru = {
                        default: function() {
                            switch (q) {
                                case "\t":
                                case "\v":
                                case "\f":
                                case " ":
                                case " ":
                                case "\ufeff":
                                case "\n":
                                case "\r":
                                case "\u2028":
                                case "\u2029":
                                    return void tu();
                                case "/":
                                    return tu(), void(z = "comment");
                                case void 0:
                                    return tu(), nu("eof")
                            }
                            if (!G(q)) return ru[I]();
                            tu()
                        },
                        comment: function() {
                            switch (q) {
                                case "*":
                                    return tu(), void(z = "multiLineComment");
                                case "/":
                                    return tu(), void(z = "singleLineComment")
                            }
                            throw cu(tu())
                        },
                        multiLineComment: function() {
                            switch (q) {
                                case "*":
                                    return tu(), void(z = "multiLineCommentAsterisk");
                                case void 0:
                                    throw cu(tu())
                            }
                            tu()
                        },
                        multiLineCommentAsterisk: function() {
                            switch (q) {
                                case "*":
                                    return void tu();
                                case "/":
                                    return tu(), void(z = "default");
                                case void 0:
                                    throw cu(tu())
                            }
                            tu(), z = "multiLineComment"
                        },
                        singleLineComment: function() {
                            switch (q) {
                                case "\n":
                                case "\r":
                                case "\u2028":
                                case "\u2029":
                                    return tu(), void(z = "default");
                                case void 0:
                                    return tu(), nu("eof")
                            }
                            tu()
                        },
                        value: function() {
                            switch (q) {
                                case "{":
                                case "[":
                                    return nu("punctuator", tu());
                                case "n":
                                    return tu(), Du("ull"), nu("null", null);
                                case "t":
                                    return tu(), Du("rue"), nu("boolean", !0);
                                case "f":
                                    return tu(), Du("alse"), nu("boolean", !1);
                                case "-":
                                case "+":
                                    return "-" === tu() && ($ = -1), void(z = "sign");
                                case ".":
                                    return K = tu(), void(z = "decimalPointLeading");
                                case "0":
                                    return K = tu(), void(z = "zero");
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                    return K = tu(), void(z = "decimalInteger");
                                case "I":
                                    return tu(), Du("nfinity"), nu("numeric", 1 / 0);
                                case "N":
                                    return tu(), Du("aN"), nu("numeric", NaN);
                                case '"':
                                case "'":
                                    return M = '"' === tu(), K = "", void(z = "string")
                            }
                            throw cu(tu())
                        },
                        identifierNameStartEscape: function() {
                            if ("u" !== q) throw cu(tu());
                            tu();
                            var u = iu();
                            switch (u) {
                                case "$":
                                case "_":
                                    break;
                                default:
                                    if (!Y(u)) throw Fu()
                            }
                            K += u, z = "identifierName"
                        },
                        identifierName: function() {
                            switch (q) {
                                case "$":
                                case "_":
                                case "‌":
                                case "‍":
                                    return void(K += tu());
                                case "\\":
                                    return tu(), void(z = "identifierNameEscape")
                            }
                            if (!W(q)) return nu("identifier", K);
                            K += tu()
                        },
                        identifierNameEscape: function() {
                            if ("u" !== q) throw cu(tu());
                            tu();
                            var u = iu();
                            switch (u) {
                                case "$":
                                case "_":
                                case "‌":
                                case "‍":
                                    break;
                                default:
                                    if (!W(u)) throw Fu()
                            }
                            K += u, z = "identifierName"
                        },
                        sign: function() {
                            switch (q) {
                                case ".":
                                    return K = tu(), void(z = "decimalPointLeading");
                                case "0":
                                    return K = tu(), void(z = "zero");
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                    return K = tu(), void(z = "decimalInteger");
                                case "I":
                                    return tu(), Du("nfinity"), nu("numeric", $ * (1 / 0));
                                case "N":
                                    return tu(), Du("aN"), nu("numeric", NaN)
                            }
                            throw cu(tu())
                        },
                        zero: function() {
                            switch (q) {
                                case ".":
                                    return K += tu(), void(z = "decimalPoint");
                                case "e":
                                case "E":
                                    return K += tu(), void(z = "decimalExponent");
                                case "x":
                                case "X":
                                    return K += tu(), void(z = "hexadecimal")
                            }
                            return nu("numeric", 0 * $)
                        },
                        decimalInteger: function() {
                            switch (q) {
                                case ".":
                                    return K += tu(), void(z = "decimalPoint");
                                case "e":
                                case "E":
                                    return K += tu(), void(z = "decimalExponent")
                            }
                            if (!Q(q)) return nu("numeric", $ * Number(K));
                            K += tu()
                        },
                        decimalPointLeading: function() {
                            if (Q(q)) return K += tu(), void(z = "decimalFraction");
                            throw cu(tu())
                        },
                        decimalPoint: function() {
                            switch (q) {
                                case "e":
                                case "E":
                                    return K += tu(), void(z = "decimalExponent")
                            }
                            return Q(q) ? (K += tu(), void(z = "decimalFraction")) : nu("numeric", $ * Number(K))
                        },
                        decimalFraction: function() {
                            switch (q) {
                                case "e":
                                case "E":
                                    return K += tu(), void(z = "decimalExponent")
                            }
                            if (!Q(q)) return nu("numeric", $ * Number(K));
                            K += tu()
                        },
                        decimalExponent: function() {
                            switch (q) {
                                case "+":
                                case "-":
                                    return K += tu(), void(z = "decimalExponentSign")
                            }
                            if (Q(q)) return K += tu(), void(z = "decimalExponentInteger");
                            throw cu(tu())
                        },
                        decimalExponentSign: function() {
                            if (Q(q)) return K += tu(), void(z = "decimalExponentInteger");
                            throw cu(tu())
                        },
                        decimalExponentInteger: function() {
                            if (!Q(q)) return nu("numeric", $ * Number(K));
                            K += tu()
                        },
                        hexadecimal: function() {
                            if (X(q)) return K += tu(), void(z = "hexadecimalInteger");
                            throw cu(tu())
                        },
                        hexadecimalInteger: function() {
                            if (!X(q)) return nu("numeric", $ * Number(K));
                            K += tu()
                        },
                        string: function() {
                            switch (q) {
                                case "\\":
                                    return tu(), void(K += function() {
                                        switch (eu()) {
                                            case "b":
                                                return tu(), "\b";
                                            case "f":
                                                return tu(), "\f";
                                            case "n":
                                                return tu(), "\n";
                                            case "r":
                                                return tu(), "\r";
                                            case "t":
                                                return tu(), "\t";
                                            case "v":
                                                return tu(), "\v";
                                            case "0":
                                                if (tu(), Q(eu())) throw cu(tu());
                                                return "\0";
                                            case "x":
                                                return tu(),
                                                    function() {
                                                        var u = "",
                                                            e = eu();
                                                        if (!X(e)) throw cu(tu());
                                                        if (u += tu(), e = eu(), !X(e)) throw cu(tu());
                                                        return u += tu(), String.fromCodePoint(parseInt(u, 16))
                                                    }();
                                            case "u":
                                                return tu(), iu();
                                            case "\n":
                                            case "\u2028":
                                            case "\u2029":
                                                return tu(), "";
                                            case "\r":
                                                return tu(), "\n" === eu() && tu(), "";
                                            case "1":
                                            case "2":
                                            case "3":
                                            case "4":
                                            case "5":
                                            case "6":
                                            case "7":
                                            case "8":
                                            case "9":
                                            case void 0:
                                                throw cu(tu())
                                        }
                                        return tu()
                                    }());
                                case '"':
                                    return M ? (tu(), nu("string", K)) : void(K += tu());
                                case "'":
                                    return M ? void(K += tu()) : (tu(), nu("string", K));
                                case "\n":
                                case "\r":
                                    throw cu(tu());
                                case "\u2028":
                                case "\u2029":
                                    ! function(u) {
                                        console.warn("JSON5: '" + Cu(u) + "' in strings is not valid ECMAScript; consider escaping")
                                    }(q);
                                    break;
                                case void 0:
                                    throw cu(tu())
                            }
                            K += tu()
                        },
                        start: function() {
                            switch (q) {
                                case "{":
                                case "[":
                                    return nu("punctuator", tu())
                            }
                            z = "value"
                        },
                        beforePropertyName: function() {
                            switch (q) {
                                case "$":
                                case "_":
                                    return K = tu(), void(z = "identifierName");
                                case "\\":
                                    return tu(), void(z = "identifierNameStartEscape");
                                case "}":
                                    return nu("punctuator", tu());
                                case '"':
                                case "'":
                                    return M = '"' === tu(), void(z = "string")
                            }
                            if (Y(q)) return K += tu(), void(z = "identifierName");
                            throw cu(tu())
                        },
                        afterPropertyName: function() {
                            if (":" === q) return nu("punctuator", tu());
                            throw cu(tu())
                        },
                        beforePropertyValue: function() {
                            z = "value"
                        },
                        afterPropertyValue: function() {
                            switch (q) {
                                case ",":
                                case "}":
                                    return nu("punctuator", tu())
                            }
                            throw cu(tu())
                        },
                        beforeArrayValue: function() {
                            if ("]" === q) return nu("punctuator", tu());
                            z = "value"
                        },
                        afterArrayValue: function() {
                            switch (q) {
                                case ",":
                                case "]":
                                    return nu("punctuator", tu())
                            }
                            throw cu(tu())
                        },
                        end: function() {
                            throw cu(tu())
                        }
                    };

                    function nu(u, e) {
                        return {
                            type: u,
                            value: e,
                            line: L,
                            column: U
                        }
                    }

                    function Du(u) {
                        for (var e = 0, t = u; e < t.length; e += 1) {
                            var r = t[e];
                            if (eu() !== r) throw cu(tu());
                            tu()
                        }
                    }

                    function iu() {
                        for (var u = "", e = 4; e-- > 0;) {
                            var t = eu();
                            if (!X(t)) throw cu(tu());
                            u += tu()
                        }
                        return String.fromCodePoint(parseInt(u, 16))
                    }
                    var ou = {
                        start: function() {
                            if ("eof" === j.type) throw Au();
                            au()
                        },
                        beforePropertyName: function() {
                            switch (j.type) {
                                case "identifier":
                                case "string":
                                    return H = j.value, void(I = "afterPropertyName");
                                case "punctuator":
                                    return void su();
                                case "eof":
                                    throw Au()
                            }
                        },
                        afterPropertyName: function() {
                            if ("eof" === j.type) throw Au();
                            I = "beforePropertyValue"
                        },
                        beforePropertyValue: function() {
                            if ("eof" === j.type) throw Au();
                            au()
                        },
                        beforeArrayValue: function() {
                            if ("eof" === j.type) throw Au();
                            "punctuator" !== j.type || "]" !== j.value ? au() : su()
                        },
                        afterPropertyValue: function() {
                            if ("eof" === j.type) throw Au();
                            switch (j.value) {
                                case ",":
                                    return void(I = "beforePropertyName");
                                case "}":
                                    su()
                            }
                        },
                        afterArrayValue: function() {
                            if ("eof" === j.type) throw Au();
                            switch (j.value) {
                                case ",":
                                    return void(I = "beforeArrayValue");
                                case "]":
                                    su()
                            }
                        },
                        end: function() {}
                    };

                    function au() {
                        var u;
                        switch (j.type) {
                            case "punctuator":
                                switch (j.value) {
                                    case "{":
                                        u = {};
                                        break;
                                    case "[":
                                        u = []
                                }
                                break;
                            case "null":
                            case "boolean":
                            case "numeric":
                            case "string":
                                u = j.value
                        }
                        if (void 0 === V) V = u;
                        else {
                            var e = T[T.length - 1];
                            Array.isArray(e) ? e.push(u) : e[H] = u
                        }
                        if (null !== u && "object" == typeof u) T.push(u), I = Array.isArray(u) ? "beforeArrayValue" : "beforePropertyName";
                        else {
                            var t = T[T.length - 1];
                            I = null == t ? "end" : Array.isArray(t) ? "afterArrayValue" : "afterPropertyValue"
                        }
                    }

                    function su() {
                        T.pop();
                        var u = T[T.length - 1];
                        I = null == u ? "end" : Array.isArray(u) ? "afterArrayValue" : "afterPropertyValue"
                    }

                    function cu(u) {
                        return hu(void 0 === u ? "JSON5: invalid end of input at " + L + ":" + U : "JSON5: invalid character '" + Cu(u) + "' at " + L + ":" + U)
                    }

                    function Au() {
                        return hu("JSON5: invalid end of input at " + L + ":" + U)
                    }

                    function Fu() {
                        return hu("JSON5: invalid identifier character at " + L + ":" + (U -= 5))
                    }

                    function Cu(u) {
                        var e = {
                            "'": "\\'",
                            '"': '\\"',
                            "\\": "\\\\",
                            "\b": "\\b",
                            "\f": "\\f",
                            "\n": "\\n",
                            "\r": "\\r",
                            "\t": "\\t",
                            "\v": "\\v",
                            "\0": "\\0",
                            "\u2028": "\\u2028",
                            "\u2029": "\\u2029"
                        };
                        if (e[u]) return e[u];
                        if (u < " ") {
                            var t = u.charCodeAt(0).toString(16);
                            return "\\x" + ("00" + t).substring(t.length)
                        }
                        return u
                    }

                    function hu(u) {
                        var e = new SyntaxError(u);
                        return e.lineNumber = L, e.columnNumber = U, e
                    }
                    return {
                        parse: function(u, e) {
                            O = String(u), I = "start", T = [], R = 0, L = 1, U = 0, j = void 0, H = void 0, V = void 0;
                            do {
                                j = uu(), ou[I]()
                            } while ("eof" !== j.type);
                            return "function" == typeof e ? Z({
                                "": V
                            }, "", e) : V
                        },
                        stringify: function(u, e, t) {
                            var r, n, D, i = [],
                                o = "",
                                a = "";
                            if (null == e || "object" != typeof e || Array.isArray(e) || (t = e.space, D = e.quote, e = e.replacer), "function" == typeof e) n = e;
                            else if (Array.isArray(e)) {
                                r = [];
                                for (var s = 0, c = e; s < c.length; s += 1) {
                                    var A = c[s],
                                        F = void 0;
                                    "string" == typeof A ? F = A : ("number" == typeof A || A instanceof String || A instanceof Number) && (F = String(A)), void 0 !== F && r.indexOf(F) < 0 && r.push(F)
                                }
                            }
                            return t instanceof Number ? t = Number(t) : t instanceof String && (t = String(t)), "number" == typeof t ? t > 0 && (t = Math.min(10, Math.floor(t)), a = "          ".substr(0, t)) : "string" == typeof t && (a = t.substr(0, 10)), C("", {
                                "": u
                            });

                            function C(u, e) {
                                var t = e[u];
                                switch (null != t && ("function" == typeof t.toJSON5 ? t = t.toJSON5(u) : "function" == typeof t.toJSON && (t = t.toJSON(u))), n && (t = n.call(e, u, t)), t instanceof Number ? t = Number(t) : t instanceof String ? t = String(t) : t instanceof Boolean && (t = t.valueOf()), t) {
                                    case null:
                                        return "null";
                                    case !0:
                                        return "true";
                                    case !1:
                                        return "false"
                                }
                                return "string" == typeof t ? h(t) : "number" == typeof t ? String(t) : "object" == typeof t ? Array.isArray(t) ? function(u) {
                                    if (i.indexOf(u) >= 0) throw TypeError("Converting circular structure to JSON5");
                                    i.push(u);
                                    var e = o;
                                    o += a;
                                    for (var t, r = [], n = 0; n < u.length; n++) {
                                        var D = C(String(n), u);
                                        r.push(void 0 !== D ? D : "null")
                                    }
                                    if (0 === r.length) t = "[]";
                                    else if ("" === a) t = "[" + r.join(",") + "]";
                                    else {
                                        var s = ",\n" + o,
                                            c = r.join(s);
                                        t = "[\n" + o + c + ",\n" + e + "]"
                                    }
                                    return i.pop(), o = e, t
                                }(t) : function(u) {
                                    if (i.indexOf(u) >= 0) throw TypeError("Converting circular structure to JSON5");
                                    i.push(u);
                                    var e = o;
                                    o += a;
                                    for (var t, n, D = [], s = 0, c = r || Object.keys(u); s < c.length; s += 1) {
                                        var A = c[s],
                                            F = C(A, u);
                                        if (void 0 !== F) {
                                            var h = E(A) + ":";
                                            "" !== a && (h += " "), h += F, D.push(h)
                                        }
                                    }
                                    if (0 === D.length) t = "{}";
                                    else if ("" === a) t = "{" + (n = D.join(",")) + "}";
                                    else {
                                        var f = ",\n" + o;
                                        n = D.join(f), t = "{\n" + o + n + ",\n" + e + "}"
                                    }
                                    return i.pop(), o = e, t
                                }(t) : void 0
                            }

                            function h(u) {
                                for (var e = {
                                        "'": .1,
                                        '"': .2
                                    }, t = {
                                        "'": "\\'",
                                        '"': '\\"',
                                        "\\": "\\\\",
                                        "\b": "\\b",
                                        "\f": "\\f",
                                        "\n": "\\n",
                                        "\r": "\\r",
                                        "\t": "\\t",
                                        "\v": "\\v",
                                        "\0": "\\0",
                                        "\u2028": "\\u2028",
                                        "\u2029": "\\u2029"
                                    }, r = "", n = 0; n < u.length; n++) {
                                    var i = u[n];
                                    switch (i) {
                                        case "'":
                                        case '"':
                                            e[i]++, r += i;
                                            continue;
                                        case "\0":
                                            if (Q(u[n + 1])) {
                                                r += "\\x00";
                                                continue
                                            }
                                    }
                                    if (t[i]) r += t[i];
                                    else if (i < " ") {
                                        var o = i.charCodeAt(0).toString(16);
                                        r += "\\x" + ("00" + o).substring(o.length)
                                    } else r += i
                                }
                                var a = D || Object.keys(e).reduce((function(u, t) {
                                    return e[u] < e[t] ? u : t
                                }));
                                return a + (r = r.replace(new RegExp(a, "g"), t[a])) + a
                            }

                            function E(u) {
                                if (0 === u.length) return h(u);
                                var e = String.fromCodePoint(u.codePointAt(0));
                                if (!Y(e)) return h(u);
                                for (var t = e.length; t < u.length; t++)
                                    if (!W(String.fromCodePoint(u.codePointAt(t)))) return h(u);
                                return u
                            }
                        }
                    }
                }()
            },
            499: function(u, e, t) {
                "use strict";
                var r = t(153),
                    n = t(269),
                    D = t(64),
                    i = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";

                function o(u) {
                    if (void 0 === u && (u = 128), u < 43 || u > 128) throw new Error("expected length " + u + " between 43 and 128");
                    return function(u) {
                        for (var e = "", t = D(u), r = 256 / i.length, n = 0; n < u; n++) e += i.charAt(Math.floor(t[n] / r));
                        return e
                    }(u)
                }

                function a(u) {
                    return function(u) {
                        return u.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                    }((e = u, n.stringify(r(e))));
                    var e
                }
                e.Ue = function(u) {
                    void 0 === u && (u = 128);
                    var e = o(u);
                    return {
                        codeVerifier: e,
                        codeChallenge: a(e)
                    }
                }
            },
            64: function(u, e, t) {
                var r;
                ! function(n) {
                    "use strict";

                    function D(u, e) {
                        if (e = e || {
                                type: "Array"
                            }, "undefined" != typeof process && "number" == typeof process.pid && process.versions && process.versions.node) return function(u, e) {
                            var r = t(954).randomBytes(u);
                            switch (e.type) {
                                case "Array":
                                    return [].slice.call(r);
                                case "Buffer":
                                    return r;
                                case "Uint8Array":
                                    for (var n = new Uint8Array(u), D = 0; D < u; ++D) n[D] = r.readUInt8(D);
                                    return n;
                                default:
                                    throw new Error(e.type + " is unsupported.")
                            }
                        }(u, e);
                        if (!window.crypto && !window.msCrypto) throw new Error("Your browser does not support window.crypto.");
                        return function(u, e) {
                            var t = new Uint8Array(u);
                            switch ((window.crypto || window.msCrypto).getRandomValues(t), e.type) {
                                case "Array":
                                    return [].slice.call(t);
                                case "Buffer":
                                    try {
                                        new Buffer(1)
                                    } catch (u) {
                                        throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.")
                                    }
                                    return new Buffer(t);
                                case "Uint8Array":
                                    return t;
                                default:
                                    throw new Error(e.type + " is unsupported.")
                            }
                        }(u, e)
                    }
                    void 0 === (r = function() {
                        return D
                    }.apply(e, [])) || (u.exports = r), D.randomArray = function(u) {
                        return D(u, {
                            type: "Array"
                        })
                    }, D.randomUint8Array = function(u) {
                        return D(u, {
                            type: "Uint8Array"
                        })
                    }, D.randomBuffer = function(u) {
                        return D(u, {
                            type: "Buffer"
                        })
                    }
                }()
            },
            954: function() {}
        },
        e = {};

    function t(r) {
        var n = e[r];
        if (void 0 !== n) return n.exports;
        var D = e[r] = {
            exports: {}
        };
        return u[r].call(D.exports, D, D.exports, t), D.exports
    }
    t.n = function(u) {
            var e = u && u.__esModule ? function() {
                return u.default
            } : function() {
                return u
            };
            return t.d(e, {
                a: e
            }), e
        }, t.d = function(u, e) {
            for (var r in e) t.o(e, r) && !t.o(u, r) && Object.defineProperty(u, r, {
                enumerable: !0,
                get: e[r]
            })
        }, t.o = function(u, e) {
            return Object.prototype.hasOwnProperty.call(u, e)
        },
        function() {
            "use strict";
            var u, e, r, n = t(524),
                D = t.n(n);
            ! function(u) {
                u.INIT = "init", u.RENDER = "render", u.AUTH = "auth", u.LOG_OUT = "log_out", u.ACCOUNT_FETCH = "account_fetch", u.ERROR = "error"
            }(u || (u = {}));
            class i {
                constructor(u) {
                    this.raw = u
                }
                get id() {
                    return this.raw.id
                }
                get publicId() {
                    return this.raw.public_id
                }
                get username() {
                    return this.raw.username
                }
                get email() {
                    return this.raw.email
                }
                get isEmailVerified() {
                    return this.raw.email_verified
                }
                get lastLogin() {
                    return new Date(this.raw.last_login)
                }
                get dateOfBirth() {
                    return new Date(this.raw.date_of_birth)
                }
                get updatedAt() {
                    return new Date(this.raw.updated_at)
                }
                get createdAt() {
                    return new Date(this.raw.created_at)
                }
                get country() {
                    return this.raw.country
                }
                get locale() {
                    return this.raw.locale
                }
                get userNameUpdatedAt() {
                    return this.raw.username_updated_at ? new Date(this.raw.username_updated_at) : null
                }
                get avatarUrl() {
                    return this.raw.avatar.image_url
                }
                output() {
                    return {
                        id: this.id,
                        username: this.username,
                        avatarUrl: this.avatarUrl
                    }
                }
            }! function(u) {
                u.SIGNIN = "signin", u.REGISTER = "registration"
            }(e || (e = {}));
            class o extends Error {}
            class a extends Error {}
            class s {
                constructor(u, e, t, r, n, D = (() => window.location.toString()), i = (u => {}), o = (u => null), a = (() => {})) {
                    this.oauthSite = u, this.apiKey = e, this.httpService = t, this.authStoreService = r, this.pkceService = n, this.preLogoutHook = D, this.preAuthHook = i, this.postAuthHook = o, this.clientStateHook = a, this.pair = this.pkceService.createPKCE(), this.httpService.setAuth(this)
                }
                buildOAuthRedirect(u) {
                    const t = (null == u ? void 0 : u.redirectUrl) || window.location.origin + window.location.pathname,
                        r = (null == u ? void 0 : u.prefer) || e.SIGNIN,
                        n = "string" == typeof this.clientStateHook ? this.clientStateHook : this.clientStateHook();
                    if (r !== e.SIGNIN && r !== e.REGISTER) throw new Error("Prefer option should be one of: signin or register.");
                    const D = {
                            client_state: n,
                            redirect_uri: t
                        },
                        i = new URLSearchParams({
                            redirect_url: t,
                            client_id: this.apiKey,
                            state: JSON.stringify(D),
                            code_method: "S256",
                            code_challenge: this.pair.codeChallenge,
                            prefer: r,
                            ...this.appendUtmParams(),
                            ...null == u ? void 0 : u.queryParams
                        });
                    return (null == u ? void 0 : u.forceVerify) && i.append("force_verify", "true"), `${this.oauthSite}/oauth?${i.toString()}`
                }
                static cleanUrl(u) {
                    const [e] = u.split(/auth_code|error/), t = "#" === e ? "" : e.replace("&", ""), r = window.location.pathname + window.location.search + t;
                    history.pushState("", document.title, r)
                }
                parseResponseParams() {
                    const {
                        search: u = ""
                    } = window.location, e = new URLSearchParams(u), t = e.get("state");
                    let r = {};
                    if (!(e.get("auth_code") && t || e.get("error"))) return null;
                    try {
                        r = t ? JSON.parse(t) : {}
                    } catch (u) {
                        console.error("Illegal char present when trying to parse state - parseResponseParams"), r = {}
                    }
                    return s.cleanUrl(u), { ...Object.fromEntries(e),
                        state: r
                    }
                }
                async handleAuth() {
                    if (this.authStoreService.isAuthorized()) throw s.cleanAuthUrl(), new o("Not in auth flow");
                    const u = this.parseResponseParams();
                    if (!u) throw new o("Not in auth flow");
                    const {
                        auth_code: e,
                        state: t,
                        error: r
                    } = u, n = t.redirect_uri || window.location.origin + window.location.pathname, D = t.client_state || {};
                    if (r) throw new a(r);
                    this.preAuthHook();
                    const c = this.pkceService.getVerifier(),
                        {
                            access_token: A,
                            refresh_token: F,
                            account: C
                        } = await this.httpService.post("/sessions/auth/token?options=refresh_token&options=account", {
                            grant_type: "authorization_code",
                            code: e,
                            code_verifier: c,
                            redirect_uri: n
                        });
                    return s.cleanAuthUrl(), this.pkceService.removeVerifier(), this.authStoreService.storeAuth({
                        access_token: A,
                        refresh_token: F
                    }), this.postAuthHook(D), new i(C)
                }
                async handleLogout() {
                    this.authStoreService.removeAuth();
                    const u = new URLSearchParams({
                        ref: "string" == typeof this.preLogoutHook ? this.preLogoutHook : this.preLogoutHook()
                    });
                    window.location.replace(`${this.oauthSite}/logout?${u.toString()}`)
                }
                async refreshAccessToken(u) {
                    this.authStoreService.removeAccessToken();
                    const e = await this.httpService.post("/sessions/auth/token?options=refresh_token", {
                        grant_type: "refresh_token",
                        code: u
                    });
                    this.authStoreService.storeAuth(e)
                }
                static cleanAuthUrl() {
                    const {
                        search: u = ""
                    } = window.location, e = new URLSearchParams(u);
                    e.delete("auth_code"), e.delete("state");
                    const t = e.toString(),
                        r = t ? `?${t}` : t;
                    history.pushState("", document.title, window.location.pathname + r)
                }
                appendUtmParams() {
                    const {
                        search: u
                    } = window.location, e = new URLSearchParams(u), t = {};
                    for (const [u, r] of e) u.includes("utm_") && (t[u] = r);
                    return t
                }
            }! function(u) {
                u[u.BAD_TOKEN = 3] = "BAD_TOKEN", u[u.INVALID_CREDENTIALS = 1012] = "INVALID_CREDENTIALS"
            }(r || (r = {}));
            var c = t(142),
                A = t.n(c);
            const F = "_agType",
                C = "_agValue",
                h = "datetime",
                E = "binary",
                f = "objectid",
                l = "localized",
                d = "calendar_controlled";
            class B {
                constructor(u) {
                    this.slug = u.slug || "", this.default = u.default || "", this.localizations = u.localizations || {}
                }
                get agType() {
                    return l
                }
                get isLocalized() {
                    return !0
                }
                toString() {
                    return this.default
                }
                serialize() {
                    return {
                        slug: this.slug,
                        default: this.default,
                        localizations: this.localizations
                    }
                }
            }
            class p {
                constructor(u) {
                    this.default = u.default, this.rendered = u.rendered
                }
                get agType() {
                    return d
                }
                get isCalendarControlled() {
                    return !0
                }
                serialize() {
                    return {
                        default: this.default
                    }
                }
            }
            class v {
                constructor(u) {
                    this.id = u
                }
                get agType() {
                    return f
                }
                get isObjectId() {
                    return !0
                }
                serialize() {
                    return this.id
                }
            }
            class y {
                constructor(u) {
                    this.data = u || ""
                }
                get agType() {
                    return E
                }
                get isBinary() {
                    return !0
                }
                serialize() {
                    return this.data
                }
            }
            const g = (u, e) => {
                    const t = {
                            [h]: u => new Date(u.replace(/([+-])(\d{2})(\d{2})$/, "$1$2:$3")),
                            [E]: u => new y(u),
                            [l]: u => new B(u),
                            [d]: u => new p(u),
                            [f]: u => new v(u)
                        },
                        {
                            type: r,
                            value: n
                        } = (() => {
                            try {
                                const u = e._agType,
                                    t = e._agValue;
                                if (u) return {
                                    type: u,
                                    value: t
                                }
                            } catch (u) {}
                            return {
                                type: null,
                                value: e
                            }
                        })(),
                        D = t[r],
                        i = r ? {
                            [F]: r,
                            [C]: n
                        } : n;
                    if (!D) return i;
                    try {
                        return D.call(null, n)
                    } catch (u) {
                        return i
                    }
                },
                w = function(u) {
                    const e = {
                            [h]: u => u.toISOString(),
                            [E]: u => u.serialize(),
                            [l]: u => u.serialize(),
                            [d]: u => u.serialize(),
                            [f]: u => u.serialize()
                        },
                        t = this[u],
                        r = (u => u instanceof Date ? h : u && u.agType ? u.agType : null)(t),
                        n = e[r];
                    if (!n) return t;
                    try {
                        const u = n.call(null, t);
                        return {
                            [F]: r,
                            [C]: u
                        }
                    } catch (u) {
                        return t
                    }
                };
            var _, m, S = u => {
                    try {
                        return (u => A().parse(u, g))(u)
                    } catch (e) {
                        return u
                    }
                },
                b = (u, e = "") => {
                    try {
                        return ((u, e = "") => JSON.stringify(u, w, e))(u, e)
                    } catch (e) {
                        return u
                    }
                };
            ! function(u) {
                u.GET = "get", u.POST = "post", u.PUT = "put", u.DELETE = "delete"
            }(_ || (_ = {})),
            function(u) {
                u[u.BAD_REQUEST = 400] = "BAD_REQUEST", u[u.INVALID_AUTH = 403] = "INVALID_AUTH"
            }(m || (m = {}));
            class N extends Error {
                constructor(u, e) {
                    super(u), this.error = null, this.error = e
                }
            }
            class x {
                constructor(u, e) {
                    this.apiEndpoint = u, this.apiKey = e
                }
                setAuth(u) {
                    this.authService = u
                }
                setAuthStore(u) {
                    this.authStoreService = u
                }
                baseFetch(u, e, t = {}, r) {
                    const {
                        access_token: n,
                        refresh_token: D
                    } = this.authStoreService.getStoredAuth() || {};
                    return fetch(`${this.apiEndpoint}${u}`, {
                        method: e,
                        headers: Object.assign({}, {
                            "X-Hydra-API-Key": this.apiKey,
                            "Content-Type": "application/json"
                        }, n && {
                            "X-Hydra-Access-Token": n
                        }, t),
                        body: r
                    }).then((async i => {
                        const {
                            status: o
                        } = i;
                        return o === m.BAD_REQUEST ? this.handleBadRequest({
                            res: i,
                            accessToken: n,
                            refreshToken: D,
                            url: u,
                            method: e,
                            headers: t,
                            body: r
                        }) : o === m.INVALID_AUTH ? this.handleInvalidAuth({
                            res: i,
                            accessToken: n,
                            refreshToken: D,
                            url: u,
                            method: e,
                            headers: t,
                            body: r
                        }) : i.text()
                    })).then((u => S(u)))
                }
                async handleBadRequest(u) {
                    var e;
                    const {
                        res: t,
                        accessToken: n,
                        refreshToken: D,
                        url: i,
                        method: o,
                        headers: a,
                        body: s
                    } = u, c = await t.json().catch((() => ({}))), {
                        hydra_error: A
                    } = c;
                    if (A === r.BAD_TOKEN) {
                        try {
                            await this.authService.refreshAccessToken(D)
                        } catch (u) {
                            const t = null === (e = this.authStoreService.getStoredAuth()) || void 0 === e ? void 0 : e.access_token;
                            if (A !== r.INVALID_CREDENTIALS || t === n || !t) throw this.authStoreService.removeAuth(), u
                        }
                        return this.baseFetch(i, o, a, s)
                    }
                    throw new N(`Hydra error ${A}`, c)
                }
                async handleInvalidAuth(u) {
                    const {
                        res: e,
                        accessToken: t,
                        refreshToken: r,
                        url: n,
                        method: D,
                        headers: i,
                        body: o
                    } = u, a = await e.json().catch((() => ({})));
                    if (!t && r) return await this.authService.refreshAccessToken(r), this.baseFetch(n, D, i, o);
                    throw new N("Could not auth user", a)
                }
                get(u, e = {}) {
                    return this.apiKey ? this.baseFetch(u, _.GET, e) : Promise.reject("No API key defined!")
                }
                put(u, e, t = {}) {
                    return this.apiKey ? this.baseFetch(u, _.PUT, t, b(e)) : Promise.reject("No API key defined!")
                }
                post(u, e, t = {}) {
                    return this.apiKey ? this.baseFetch(u, _.POST, t, b(e)) : Promise.reject("No API key defined!")
                }
                delete(u, e = {}) {
                    return this.apiKey ? this.baseFetch(u, _.DELETE, e) : Promise.reject("No API key defined!")
                }
            }
            class P {
                constructor(u, e, t) {
                    this.httpService = u, this.authStoreService = e, this.authService = t
                }
                async fetchAccount() {
                    if (!this.authStoreService.isAuthorized()) return Promise.resolve(null);
                    const {
                        access_token: u,
                        refresh_token: e
                    } = this.authStoreService.getStoredAuth() || {};
                    return !u && e && await this.authService.refreshAccessToken(e), this.httpService.get("/accounts/me").then((u => u.id ? new i(u) : null))
                }
            }
            class k {
                constructor(u) {
                    this.httpService = u, this.httpService.setAuthStore(this)
                }
                storeAuth(u) {
                    window.localStorage.setItem(k.KEY, JSON.stringify(u))
                }
                getStoredAuth() {
                    const u = window.localStorage.getItem(k.KEY);
                    return u ? JSON.parse(u) : null
                }
                removeAuth() {
                    window.localStorage.removeItem(k.KEY)
                }
                removeAccessToken() {
                    const {
                        access_token: u,
                        ...e
                    } = this.getStoredAuth() || {};
                    "refresh_token" in e && this.storeAuth(e)
                }
                isAuthorized() {
                    return null !== this.getStoredAuth()
                }
            }
            k.KEY = "__webridge_auth";
            var O = t(499);
            class I {
                constructor() {
                    this.verifier = window.localStorage.getItem(I.KEY)
                }
                createPKCE() {
                    const u = (0, O.Ue)();
                    return window.localStorage.setItem(I.KEY, u.codeVerifier), this.verifier || (this.verifier = u.codeVerifier), u
                }
                getVerifier() {
                    return this.verifier
                }
                removeVerifier() {
                    window.localStorage.removeItem(I.KEY), this.invalidateVerifier()
                }
                invalidateVerifier() {
                    this.verifier = null
                }
            }
            I.KEY = "__webridge_pkce";
            const T = {
                SDK: class {
                    constructor(u) {
                        this.__authRequest = null, this.__fetchRequest = null, this.account = null,
                            function(u) {
                                if (!u) throw new Error("Missing configuration object in the SDK constructor.");
                                if (!u.apiKey) throw new Error("Missing apiKey option in the configruation object.");
                                if (!u.apiEndpoint) throw new Error("Missing Hydra API URL in the configruation object.");
                                if (!u.oauthSite) throw new Error("Missing OAuth site option in the configuration object.")
                            }(u), this.addEventListener = this.addEventListener.bind(this), this.logout = this.logout.bind(this), this.render = this.render.bind(this), this.__dispatch = this.__dispatch.bind(this), this.__fetchAccount = this.__fetchAccount.bind(this), this.__handleAuth = this.__handleAuth.bind(this), this.__handleError = this.__handleError.bind(this), this.options = u, this.__eventBus = new(D()), this.__pkceService = new I, this.__httpService = new x(this.options.apiEndpoint, this.options.apiKey), this.__authStoreService = new k(this.__httpService), this.__authService = new s(this.options.oauthSite, this.options.apiKey, this.__httpService, this.__authStoreService, this.__pkceService, this.options.preLogoutHook, this.options.preAuthHook, this.options.postAuthHook, this.options.clientStateHook), this.__accountService = new P(this.__httpService, this.__authStoreService, this.__authService)
                    }
                    loginLink(u) {
                        return this.__authService.buildOAuthRedirect(u)
                    }
                    addEventListener(u, e) {
                        this.__eventBus.on(u, e)
                    }
                    async render(e, t) {
                        const r = document.querySelector("script[data-wb-network-bridge]"),
                            n = "wb-pn-sdk-widget-script",
                            D = document.querySelector(`#${n}`);
                        D && D.remove();
                        const i = document.createElement("script");
                        i.src = function(u, e) {
                            const t = document.createElement("a");
                            t.href = u;
                            const r = t.pathname.split("/");
                            r[r.length - 1] = "widget.js";
                            const n = r.join("/");
                            return `${t.protocol}//${t.host}${n}${t.search}`
                        }(r.src), i.id = n, i.addEventListener("load", (() => {
                            window.__P1__banner__initApp && (window.__P1__banner__initApp(e, this, t), delete window.__P1__banner__initApp, this.__dispatch(u.RENDER))
                        })), document.body.append(i)
                    }
                    async getAccount() {
                        try {
                            await this.__handleAuth()
                        } catch (u) {
                            if (!(u instanceof o)) throw this.__handleError(u), u;
                            this.__fetchRequest || (this.__fetchRequest = this.__fetchAccount()), await this.__fetchRequest, this.__fetchRequest = null
                        }
                        return this.account
                    }
                    async getFriends() {}
                    async logout() {
                        try {
                            this.__pkceService.invalidateVerifier(), this.__dispatch(u.LOG_OUT), await this.__authService.handleLogout()
                        } catch (u) {
                            this.__handleError(u)
                        }
                    }
                    get accessToken() {
                        const u = this.__authStoreService.getStoredAuth();
                        return u && u.access_token || null
                    }
                    get httpService() {
                        return this.__httpService
                    }
                    __dispatch(u, e) {
                        this.__eventBus.emit(u, null, e)
                    }
                    __handleError(e) {
                        this.__dispatch(u.ERROR, e.message)
                    }
                    async __fetchAccount() {
                        try {
                            const e = await this.__accountService.fetchAccount();
                            return e ? (this.account = e, this.__dispatch(u.ACCOUNT_FETCH, null == e ? void 0 : e.output()), this.account) : (this.account = null, null)
                        } catch (u) {
                            this.account = null
                        }
                        return null
                    }
                    async __handleAuth() {
                        this.__authRequest || (this.__authRequest = this.__authService.handleAuth());
                        const e = await this.__authRequest;
                        return this.__authRequest = null, this.__dispatch(u.AUTH), this.account = e, this.account
                    }
                },
                EventEnum: u,
                OAuthPreferMethodEnum: e,
                AuthError: o,
                OAuthError: a
            };
            window.WeBridge = T
        }()
}();