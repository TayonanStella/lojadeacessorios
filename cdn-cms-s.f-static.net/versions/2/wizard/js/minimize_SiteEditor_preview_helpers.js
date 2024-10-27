/*! jQuery UI - v1.11.4 - 2023-07-05
 * http://jqueryui.com
 * Includes: core.js, widget.js, position.js, autocomplete.js, menu.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(A) {
    var t, e, i, n;

    function s(t, e) {
        var i, n, s = t.nodeName.toLowerCase();
        return "area" === s ? (n = (i = t.parentNode).name, !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && (!!(n = A("img[usemap='#" + n + "']")[0]) && o(n))) : (/^(input|select|textarea|button|object)$/.test(s) ? !t.disabled : "a" === s && t.href || e) && o(t)
    }

    function o(t) {
        return A.expr.filters.visible(t) && !A(t).parents().addBack().filter(function() {
            return "hidden" === A.css(this, "visibility")
        }).length
    }
    A.ui = A.ui || {}, A.extend(A.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), A.fn.extend({
        scrollParent: function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function() {
                    var t = A(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : A(this[0].ownerDocument || document)
        },
        uniqueId: (t = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++t)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && A(this).removeAttr("id")
            })
        }
    }), A.extend(A.expr[":"], {
        data: A.expr.createPseudo ? A.expr.createPseudo(function(e) {
            return function(t) {
                return !!A.data(t, e)
            }
        }) : function(t, e, i) {
            return !!A.data(t, i[3])
        },
        focusable: function(t) {
            return s(t, !isNaN(A.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var e = A.attr(t, "tabindex"),
                i = isNaN(e);
            return (i || 0 <= e) && s(t, !i)
        }
    }), A("<a>").outerWidth(1).jquery || A.each(["Width", "Height"], function(t, i) {
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            n = i.toLowerCase(),
            o = {
                innerWidth: A.fn.innerWidth,
                innerHeight: A.fn.innerHeight,
                outerWidth: A.fn.outerWidth,
                outerHeight: A.fn.outerHeight
            };

        function a(t, e, i, n) {
            return A.each(s, function() {
                e -= parseFloat(A.css(t, "padding" + this)) || 0, i && (e -= parseFloat(A.css(t, "border" + this + "Width")) || 0), n && (e -= parseFloat(A.css(t, "margin" + this)) || 0)
            }), e
        }
        A.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                A(this).css(n, a(this, t) + "px")
            })
        }, A.fn["outer" + i] = function(t, e) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                A(this).css(n, a(this, t, !0, e) + "px")
            })
        }
    }), A.fn.addBack || (A.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), A("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (A.fn.removeData = (e = A.fn.removeData, function(t) {
        return arguments.length ? e.call(this, A.camelCase(t)) : e.call(this)
    })), A.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), A.fn.extend({
        focus: (n = A.fn.focus, function(e, i) {
            return "number" == typeof e ? this.each(function() {
                var t = this;
                setTimeout(function() {
                    A(t).focus(), i && i.call(t)
                }, e)
            }) : n.apply(this, arguments)
        }),
        disableSelection: (i = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
            return this.bind(i + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var e, i, n = A(this[0]); n.length && n[0] !== document;) {
                    if (("absolute" === (e = n.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    n = n.parent()
                }
            return 0
        }
    }), A.ui.plugin = {
        add: function(t, e, i) {
            var n, s = A.ui[t].prototype;
            for (n in i) s.plugins[n] = s.plugins[n] || [], s.plugins[n].push([e, i[n]])
        },
        call: function(t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    };
    var a, r = 0,
        l = Array.prototype.slice;
    A.cleanData = (a = A.cleanData, function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++) try {
            (e = A._data(i, "events")) && e.remove && A(i).triggerHandler("remove")
        } catch (t) {}
        a(t)
    }), A.widget = function(t, i, e) {
        var n, s, o, a, r = {},
            l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, e || (e = i, i = A.Widget), A.expr[":"][n.toLowerCase()] = function(t) {
            return !!A.data(t, n)
        }, A[l] = A[l] || {}, s = A[l][t], o = A[l][t] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, A.extend(o, s, {
            version: e.version,
            _proto: A.extend({}, e),
            _childConstructors: []
        }), (a = new i).options = A.widget.extend({}, a.options), A.each(e, function(e, n) {
            function s() {
                return i.prototype[e].apply(this, arguments)
            }

            function o(t) {
                return i.prototype[e].apply(this, t)
            }
            A.isFunction(n) ? r[e] = function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = s, this._superApply = o, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
            } : r[e] = n
        }), o.prototype = A.widget.extend(a, {
            widgetEventPrefix: s && a.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), s ? (A.each(s._childConstructors, function(t, e) {
            var i = e.prototype;
            A.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete s._childConstructors) : i._childConstructors.push(o), A.widget.bridge(t, o), o
    }, A.widget.extend = function(t) {
        for (var e, i, n = l.call(arguments, 1), s = 0, o = n.length; s < o; s++)
            for (e in n[s]) i = n[s][e], n[s].hasOwnProperty(e) && void 0 !== i && (A.isPlainObject(i) ? t[e] = A.isPlainObject(t[e]) ? A.widget.extend({}, t[e], i) : A.widget.extend({}, i) : t[e] = i);
        return t
    }, A.widget.bridge = function(o, e) {
        var a = e.prototype.widgetFullName || o;
        A.fn[o] = function(i) {
            var t = "string" == typeof i,
                n = l.call(arguments, 1),
                s = this;
            return t ? this.each(function() {
                var t, e = A.data(this, a);
                return "instance" === i ? (s = e, !1) : e ? A.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, n)) !== e && void 0 !== t ? (s = t && t.jquery ? s.pushStack(t.get()) : t, !1) : void 0 : A.error("no such method '" + i + "' for " + o + " widget instance") : A.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
            }) : (n.length && (i = A.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                var t = A.data(this, a);
                t ? (t.option(i || {}), t._init && t._init()) : A.data(this, a, new e(i, this))
            })), s
        }
    }, A.Widget = function() {}, A.Widget._childConstructors = [], A.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = A(e || this.defaultElement || this)[0], this.element = A(e), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = A(), this.hoverable = A(), this.focusable = A(), e !== this && (A.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = A(e.style ? e.ownerDocument : e.document || e), this.window = A(this.document[0].defaultView || this.document[0].parentWindow)), this.options = A.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: A.noop,
        _getCreateEventData: A.noop,
        _create: A.noop,
        _init: A.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(A.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: A.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, s, o = t;
            if (0 === arguments.length) return A.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (n = o[t] = A.widget.extend({}, this.options[t]), s = 0; s < i.length - 1; s++) n[i[s]] = n[i[s]] || {}, n = n[i[s]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = e
                }
            return this._setOptions(o), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(s, o, t) {
            var a, r = this;
            "boolean" != typeof s && (t = o, o = s, s = !1), t ? (o = a = A(o), this.bindings = this.bindings.add(o)) : (t = o, o = this.element, a = this.widget()), A.each(t, function(t, e) {
                function i() {
                    if (s || !0 !== r.options.disabled && !A(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? r[e] : e).apply(r, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || A.guid++);
                var n = t.match(/^([\w:-]*)\s*(.*)$/),
                    t = n[1] + r.eventNamespace,
                    n = n[2];
                n ? a.delegate(n, t, i) : o.bind(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e), this.bindings = A(this.bindings.not(t).get()), this.focusable = A(this.focusable.not(t).get()), this.hoverable = A(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    A(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    A(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    A(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    A(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, s, o = this.options[t];
            if (i = i || {}, (e = A.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], s = e.originalEvent)
                for (n in s) n in e || (e[n] = s[n]);
            return this.element.trigger(e, i), !(A.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, A.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(o, a) {
        A.Widget.prototype["_" + o] = function(e, t, i) {
            var n = (t = "string" == typeof t ? {
                    effect: t
                } : t) ? !0 !== t && "number" != typeof t && t.effect || a : o,
                s = !A.isEmptyObject(t = "number" == typeof(t = t || {}) ? {
                    duration: t
                } : t);
            t.complete = i, t.delay && e.delay(t.delay), s && A.effects && A.effects.effect[n] ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function(t) {
                A(this)[o](), i && i.call(e[0]), t()
            })
        }
    });
    A.widget;
    ! function() {
        A.ui = A.ui || {};
        var n, x, C = Math.max,
            E = Math.abs,
            T = Math.round,
            s = /left|center|right/,
            o = /top|center|bottom/,
            a = /[\+\-]\d+(\.[\d]+)?%?/,
            r = /^\w+/,
            l = /%$/,
            i = A.fn.position;

        function W(t, e, i) {
            return [parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1)]
        }

        function k(t, e) {
            return parseInt(A.css(t, e), 10) || 0
        }
        A.position = {
                scrollbarWidth: function() {
                    if (void 0 !== n) return n;
                    var t, e = A("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        i = e.children()[0];
                    return A("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i
                },
                getScrollInfo: function(t) {
                    var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? A.position.scrollbarWidth() : 0,
                        height: e ? A.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var e = A(t || window),
                        i = A.isWindow(e[0]),
                        t = !!e[0] && 9 === e[0].nodeType;
                    return {
                        element: e,
                        isWindow: i,
                        isDocument: t,
                        offset: e.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: e.scrollLeft(),
                        scrollTop: e.scrollTop(),
                        width: i || t ? e.width() : e.outerWidth(),
                        height: i || t ? e.height() : e.outerHeight()
                    }
                }
            }, A.fn.position = function(c) {
                if (!c || !c.of) return i.apply(this, arguments);
                c = A.extend({}, c);
                var d, f, m, p, v, t, g = A(c.of),
                    _ = A.position.getWithinInfo(c.within),
                    b = A.position.getScrollInfo(_),
                    y = (c.collision || "flip").split(" "),
                    w = {},
                    e = 9 === (t = (e = g)[0]).nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : A.isWindow(t) ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: e.scrollTop(),
                            left: e.scrollLeft()
                        }
                    } : t.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: t.pageY,
                            left: t.pageX
                        }
                    } : {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        offset: e.offset()
                    };
                return g[0].preventDefault && (c.at = "left top"), f = e.width, m = e.height, v = A.extend({}, p = e.offset), A.each(["my", "at"], function() {
                    var t, e, i = (c[this] || "").split(" ");
                    (i = 1 === i.length ? s.test(i[0]) ? i.concat(["center"]) : o.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = s.test(i[0]) ? i[0] : "center", i[1] = o.test(i[1]) ? i[1] : "center", t = a.exec(i[0]), e = a.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], c[this] = [r.exec(i[0])[0], r.exec(i[1])[0]]
                }), 1 === y.length && (y[1] = y[0]), "right" === c.at[0] ? v.left += f : "center" === c.at[0] && (v.left += f / 2), "bottom" === c.at[1] ? v.top += m : "center" === c.at[1] && (v.top += m / 2), d = W(w.at, f, m), v.left += d[0], v.top += d[1], this.each(function() {
                    var i, t, a = A(this),
                        r = a.outerWidth(),
                        l = a.outerHeight(),
                        e = k(this, "marginLeft"),
                        n = k(this, "marginTop"),
                        s = r + e + k(this, "marginRight") + b.width,
                        o = l + n + k(this, "marginBottom") + b.height,
                        u = A.extend({}, v),
                        h = W(w.my, a.outerWidth(), a.outerHeight());
                    "right" === c.my[0] ? u.left -= r : "center" === c.my[0] && (u.left -= r / 2), "bottom" === c.my[1] ? u.top -= l : "center" === c.my[1] && (u.top -= l / 2), u.left += h[0], u.top += h[1], x || (u.left = T(u.left), u.top = T(u.top)), i = {
                        marginLeft: e,
                        marginTop: n
                    }, A.each(["left", "top"], function(t, e) {
                        A.ui.position[y[t]] && A.ui.position[y[t]][e](u, {
                            targetWidth: f,
                            targetHeight: m,
                            elemWidth: r,
                            elemHeight: l,
                            collisionPosition: i,
                            collisionWidth: s,
                            collisionHeight: o,
                            offset: [d[0] + h[0], d[1] + h[1]],
                            my: c.my,
                            at: c.at,
                            within: _,
                            elem: a
                        })
                    }), c.using && (t = function(t) {
                        var e = p.left - u.left,
                            i = e + f - r,
                            n = p.top - u.top,
                            s = n + m - l,
                            o = {
                                target: {
                                    element: g,
                                    left: p.left,
                                    top: p.top,
                                    width: f,
                                    height: m
                                },
                                element: {
                                    element: a,
                                    left: u.left,
                                    top: u.top,
                                    width: r,
                                    height: l
                                },
                                horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                                vertical: s < 0 ? "top" : 0 < n ? "bottom" : "middle"
                            };
                        f < r && E(e + i) < f && (o.horizontal = "center"), m < l && E(n + s) < m && (o.vertical = "middle"), C(E(e), E(i)) > C(E(n), E(s)) ? o.important = "horizontal" : o.important = "vertical", c.using.call(this, t, o)
                    }), a.offset(A.extend(u, {
                        using: t
                    }))
                })
            }, A.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i = e.within,
                            n = i.isWindow ? i.scrollLeft : i.offset.left,
                            s = i.width,
                            o = t.left - e.collisionPosition.marginLeft,
                            a = n - o,
                            r = o + e.collisionWidth - s - n;
                        e.collisionWidth > s ? 0 < a && r <= 0 ? (i = t.left + a + e.collisionWidth - s - n, t.left += a - i) : t.left = !(0 < r && a <= 0) && r < a ? n + s - e.collisionWidth : n : 0 < a ? t.left += a : 0 < r ? t.left -= r : t.left = C(t.left - o, t.left)
                    },
                    top: function(t, e) {
                        var i = e.within,
                            n = i.isWindow ? i.scrollTop : i.offset.top,
                            s = e.within.height,
                            o = t.top - e.collisionPosition.marginTop,
                            a = n - o,
                            r = o + e.collisionHeight - s - n;
                        e.collisionHeight > s ? 0 < a && r <= 0 ? (i = t.top + a + e.collisionHeight - s - n, t.top += a - i) : t.top = !(0 < r && a <= 0) && r < a ? n + s - e.collisionHeight : n : 0 < a ? t.top += a : 0 < r ? t.top -= r : t.top = C(t.top - o, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i = e.within,
                            n = i.offset.left + i.scrollLeft,
                            s = i.width,
                            o = i.isWindow ? i.scrollLeft : i.offset.left,
                            a = t.left - e.collisionPosition.marginLeft,
                            r = a - o,
                            l = a + e.collisionWidth - s - o,
                            u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            a = -2 * e.offset[0];
                        r < 0 ? ((n = t.left + u + i + a + e.collisionWidth - s - n) < 0 || n < E(r)) && (t.left += u + i + a) : 0 < l && (0 < (o = t.left - e.collisionPosition.marginLeft + u + i + a - o) || E(o) < l) && (t.left += u + i + a)
                    },
                    top: function(t, e) {
                        var i = e.within,
                            n = i.offset.top + i.scrollTop,
                            s = i.height,
                            o = i.isWindow ? i.scrollTop : i.offset.top,
                            a = t.top - e.collisionPosition.marginTop,
                            r = a - o,
                            l = a + e.collisionHeight - s - o,
                            u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            a = -2 * e.offset[1];
                        r < 0 ? ((n = t.top + u + i + a + e.collisionHeight - s - n) < 0 || n < E(r)) && (t.top += u + i + a) : 0 < l && (0 < (o = t.top - e.collisionPosition.marginTop + u + i + a - o) || E(o) < l) && (t.top += u + i + a)
                    }
                },
                flipfit: {
                    left: function() {
                        A.ui.position.flip.left.apply(this, arguments), A.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        A.ui.position.flip.top.apply(this, arguments), A.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, e = document.getElementsByTagName("body")[0],
                    i = document.createElement("div"),
                    n = document.createElement(e ? "div" : "body"),
                    s = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    };
                for (t in e && A.extend(s, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    }), s) n.style[t] = s[t];
                n.appendChild(i), (e = e || document.documentElement).insertBefore(n, e.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", i = A(i).offset().left, x = 10 < i && i < 11, n.innerHTML = "", e.removeChild(n)
            }()
    }();
    A.ui.position, A.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function(t) {
                    var e = A(t.target);
                    !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && A(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    var e;
                    this.previousFilter || ((e = A(t.currentTarget)).siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, e))
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        A.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var t = A(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(t) {
            var e, i, n, s = !0;
            switch (t.keyCode) {
                case A.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case A.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case A.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case A.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case A.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case A.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case A.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case A.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case A.ui.keyCode.ENTER:
                case A.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case A.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    s = !1, e = this.previousFilter || "", i = String.fromCharCode(t.keyCode), n = !1, clearTimeout(this.filterTimer), i === e ? n = !0 : i = e + i, e = this._filterMenuItems(i), (e = n && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (i = String.fromCharCode(t.keyCode), e = this._filterMenuItems(i)), e.length ? (this.focus(t, e), this.previousFilter = i, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            s && t.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e = this,
                n = this.options.icons.submenu,
                t = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), t.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = A(this),
                    e = t.parent(),
                    i = A("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
            }), (t = t.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var t = A(this);
                e._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
            }), t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !A.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
        },
        focus: function(t, e) {
            var i;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), i = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(t) {
            var e, i, n;
            this._hasScroll() && (i = parseFloat(A.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(A.css(this.activeMenu[0], "paddingTop")) || 0, e = t.offset().top - this.activeMenu.offset().top - i - n, i = this.activeMenu.scrollTop(), n = this.activeMenu.height(), t = t.outerHeight(), e < 0 ? this.activeMenu.scrollTop(i + e) : n < e + t && this.activeMenu.scrollTop(i + e - n + t))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(t) {
            var e = A.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var t = i ? this.element : A(e && e.target).closest(this.element.find(".ui-menu"));
                t.length || (t = this.element), this._close(t), this.blur(e), this.activeMenu = t
            }, this.delay)
        },
        _close: function(t) {
            (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(t) {
            return !A(t.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var n;
            (n = this.active ? "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0) : n) && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
        },
        nextPage: function(t) {
            var e, i, n;
            this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return (e = A(this)).offset().top - i - n < 0
            }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(t)
        },
        previousPage: function(t) {
            var e, i, n;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (e = A(this)).offset().top - i + n
            }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first())) : this.next(t)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || A(t.target).closest(".ui-menu-item");
            var e = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
        },
        _filterMenuItems: function(t) {
            var t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                e = new RegExp("^" + t, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return e.test(A.trim(A(this).text()))
            })
        }
    });
    A.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var i, n, s, t = this.element[0].nodeName.toLowerCase(),
                e = "textarea" === t,
                t = "input" === t;
            this.isMultiLine = e || !t && this.element.prop("isContentEditable"), this.valueMethod = this.element[e || t ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(t) {
                    if (this.element.prop("readOnly")) n = s = i = !0;
                    else {
                        n = s = i = !1;
                        var e = A.ui.keyCode;
                        switch (t.keyCode) {
                            case e.PAGE_UP:
                                i = !0, this._move("previousPage", t);
                                break;
                            case e.PAGE_DOWN:
                                i = !0, this._move("nextPage", t);
                                break;
                            case e.UP:
                                i = !0, this._keyEvent("previous", t);
                                break;
                            case e.DOWN:
                                i = !0, this._keyEvent("next", t);
                                break;
                            case e.ENTER:
                                this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
                                break;
                            case e.TAB:
                                this.menu.active && this.menu.select(t);
                                break;
                            case e.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
                                break;
                            default:
                                n = !0, this._searchTimeout(t)
                        }
                    }
                },
                keypress: function(t) {
                    if (i) return i = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || t.preventDefault());
                    if (!n) {
                        var e = A.ui.keyCode;
                        switch (t.keyCode) {
                            case e.PAGE_UP:
                                this._move("previousPage", t);
                                break;
                            case e.PAGE_DOWN:
                                this._move("nextPage", t);
                                break;
                            case e.UP:
                                this._keyEvent("previous", t);
                                break;
                            case e.DOWN:
                                this._keyEvent("next", t)
                        }
                    }
                },
                input: function(t) {
                    if (s) return s = !1, void t.preventDefault();
                    this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(t) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), this._change(t))
                }
            }), this._initSource(), this.menu = A("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    A(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var e = this;
                        this.document.one("mousedown", function(t) {
                            t.target === e.element[0] || t.target === i || A.contains(i, t.target) || e.close()
                        })
                    })
                },
                menufocus: function(t, e) {
                    var i;
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        A(t.target).trigger(t.originalEvent)
                    });
                    i = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                        item: i
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(i.value), (i = e.item.attr("aria-label") || i.value) && A.trim(i).length && (this.liveRegion.children().hide(), A("<div>").text(i).appendTo(this.liveRegion))
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                        this.previous = n, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = A("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t = !(t = !(t = t && (t.jquery || t.nodeType ? A(t) : this.document.find(t).eq(0))) || !t[0] ? this.element.closest(".ui-front") : t).length ? this.document[0].body : t
        },
        _initSource: function() {
            var i, n, s = this;
            A.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, e) {
                e(A.ui.autocomplete.filter(i, t.term))
            }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, e) {
                s.xhr && s.xhr.abort(), s.xhr = A.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(t) {
                        e(t)
                    },
                    error: function() {
                        e([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(n) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var t = this.term === this._value(),
                    e = this.menu.element.is(":visible"),
                    i = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                t && (e || i) || (this.selectedItem = null, this.search(null, n))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return A.proxy(function(t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t = t && this._normalize(t), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : A.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : A.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var e = this.menu.element.empty();
            this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position(A.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(i, t) {
            var n = this;
            A.each(t, function(t, e) {
                n._renderItemData(i, e)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(t, e) {
            return A("<li>").text(e.label).appendTo(t)
        },
        _move: function(t, e) {
            if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e);
            this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
        }
    }), A.extend(A.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, e) {
            var i = new RegExp(A.ui.autocomplete.escapeRegex(e), "i");
            return A.grep(t, function(t) {
                return i.test(t.label || t.value || t)
            })
        }
    }), A.widget("ui.autocomplete", A.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), A("<div>").text(e).appendTo(this.liveRegion))
        }
    });
    A.ui.autocomplete
});

function AutocompleteInput(settings) {
    var that = this;
    var $input = settings.$input;
    var intrface_align = settings.intrface_align;
    var maxHeight = settings.maxHeight;
    var fontSize = settings.fontSize;
    var html = settings.html ? settings.html : false;
    if ($('#jqAutocompleteCss').length === 0) $('head').append(`
<style id="jqAutocompleteCss">
.ui-autocomplete {overflow-y: auto;overflow-x: hidden;z-index: 9999;border-radius: 5px;padding-top: 0.1em;padding-bottom: 0.1em;box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important;border: 0;border-top: 1px solid #aaaaaa33;}
.ui-autocomplete .ui-menu-item {padding-top: 0.6em;padding-bottom: 0.6em;}
.ui-autocomplete .ui-menu-item.ui-state-focus {color: var(--primaryTextColor);background: var(--primary_color);}
</style>
`);
    $input.focus(function() {
        that.openList = true;
        that.init();
    });
    that.init = function() {
        if (!that.data) {
            that.loadData(that.init);
            return;
        }
        if (!$input.autocomplete('instance')) {
            $input.autocomplete({
                html: html,
                source: function(request, response) {
                    if ($input.val().length > 0 && !that.openList) {
                        settings.autoCompleteSource.call(this, function(data) {
                            response(data);
                        });
                    } else {
                        response(that.data);
                    }
                },
                minLength: 0,
                position: intrface_align == 'right' ? {
                    my: "right top",
                    at: "right bottom"
                } : {
                    my: "left top",
                    at: "left bottom"
                },
                change: function(event, ui) {
                    $input.trigger('change', [ui.item]);
                },
                select: function(event, ui) {
                    $input.trigger('change', [ui.item]);
                },
                close: function(event, ui) {
                    $input.autocomplete('widget').css('transform', '');
                    $(document).trigger('LinksAutocomplete.close');
                },
                open: function(event, ui) {
                    $input.autocomplete('widget').outerWidth($input.outerWidth());
                    if ($.isNumeric(maxHeight)) {
                        $input.autocomplete('widget').css('max-height', maxHeight + 'px');
                    }
                    if ($.isNumeric(fontSize)) {
                        $input.autocomplete('widget').css('font-size', fontSize + 'px');
                    }
                    $input.autocomplete('widget').css('transform', 'translateY(4px)');
                    $(document).trigger('LinksAutocomplete.open');
                }
            });
        }
        if (that.openList) {
            $input.autocomplete('search', '');
            that.openList = false;
        }
        $input.attr('data-a-c-initialized', true);
    };
    that.loadData = function(callback) {
        settings.pageLoadAjax.call(this, function(pages) {
            that.data = pages;
            if (callback) callback();
        });
    };
    that.reloadData = function() {
        that.data = null;
    };
}(function($) {
    var proto = $.ui.autocomplete.prototype,
        initSource = proto._initSource;

    function filter(array, term) {
        var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function(value) {
            return matcher.test($("<div>").html(value.label || value.value || value).text());
        });
    }
    $.extend(proto, {
        _initSource: function() {
            if (this.options.html && $.isArray(this.options.source)) {
                this.source = function(request, response) {
                    response(filter(this.options.source, request.term));
                };
            } else {
                initSource.call(this);
            }
        },
        _renderItem: function(ul, item) {
            return $("<li></li>")
                .data("item.autocomplete", item)
                .append($("<a></a>")[this.options.html ? "html" : "text"](item.label))
                .appendTo(ul);
        }
    });
})(jQuery);
/*! jQuery UI - v1.11.4 - 2021-01-10
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, resizable.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(w) {
    var t, e, i, s;

    function n(t, e) {
        var i, s, n = t.nodeName.toLowerCase();
        return "area" === n ? (s = (i = t.parentNode).name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (!!(s = w("img[usemap='#" + s + "']")[0]) && o(s))) : (/^(input|select|textarea|button|object)$/.test(n) ? !t.disabled : "a" === n && t.href || e) && o(t)
    }

    function o(t) {
        return w.expr.filters.visible(t) && !w(t).parents().addBack().filter(function() {
            return "hidden" === w.css(this, "visibility")
        }).length
    }
    w.ui = w.ui || {}, w.extend(w.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), w.fn.extend({
        scrollParent: function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function() {
                    var t = w(this);
                    return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : w(this[0].ownerDocument || document)
        },
        uniqueId: (t = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++t)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && w(this).removeAttr("id")
            })
        }
    }), w.extend(w.expr[":"], {
        data: w.expr.createPseudo ? w.expr.createPseudo(function(e) {
            return function(t) {
                return !!w.data(t, e)
            }
        }) : function(t, e, i) {
            return !!w.data(t, i[3])
        },
        focusable: function(t) {
            return n(t, !isNaN(w.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var e = w.attr(t, "tabindex"),
                i = isNaN(e);
            return (i || 0 <= e) && n(t, !i)
        }
    }), w("<a>").outerWidth(1).jquery || w.each(["Width", "Height"], function(t, i) {
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            s = i.toLowerCase(),
            o = {
                innerWidth: w.fn.innerWidth,
                innerHeight: w.fn.innerHeight,
                outerWidth: w.fn.outerWidth,
                outerHeight: w.fn.outerHeight
            };

        function h(t, e, i, s) {
            return w.each(n, function() {
                e -= parseFloat(w.css(t, "padding" + this)) || 0, i && (e -= parseFloat(w.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat(w.css(t, "margin" + this)) || 0)
            }), e
        }
        w.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                w(this).css(s, h(this, t) + "px")
            })
        }, w.fn["outer" + i] = function(t, e) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                w(this).css(s, h(this, t, !0, e) + "px")
            })
        }
    }), w.fn.addBack || (w.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), w("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (w.fn.removeData = (e = w.fn.removeData, function(t) {
        return arguments.length ? e.call(this, w.camelCase(t)) : e.call(this)
    })), w.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), w.fn.extend({
        focus: (s = w.fn.focus, function(e, i) {
            return "number" == typeof e ? this.each(function() {
                var t = this;
                setTimeout(function() {
                    w(t).focus(), i && i.call(t)
                }, e)
            }) : s.apply(this, arguments)
        }),
        disableSelection: (i = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
            return this.bind(i + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var e, i, s = w(this[0]); s.length && s[0] !== document;) {
                    if (("absolute" === (e = s.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(s.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    s = s.parent()
                }
            return 0
        }
    }), w.ui.plugin = {
        add: function(t, e, i) {
            var s, n = w.ui[t].prototype;
            for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([e, i[s]])
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    };
    var h, a = 0,
        r = Array.prototype.slice;
    w.cleanData = (h = w.cleanData, function(t) {
        for (var e, i, s = 0; null != (i = t[s]); s++) try {
            (e = w._data(i, "events")) && e.remove && w(i).triggerHandler("remove")
        } catch (t) {}
        h(t)
    }), w.widget = function(t, i, e) {
        var s, n, o, h, a = {},
            r = t.split(".")[0];
        return t = t.split(".")[1], s = r + "-" + t, e || (e = i, i = w.Widget), w.expr[":"][s.toLowerCase()] = function(t) {
            return !!w.data(t, s)
        }, w[r] = w[r] || {}, n = w[r][t], o = w[r][t] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, w.extend(o, n, {
            version: e.version,
            _proto: w.extend({}, e),
            _childConstructors: []
        }), (h = new i).options = w.widget.extend({}, h.options), w.each(e, function(e, s) {
            function n() {
                return i.prototype[e].apply(this, arguments)
            }

            function o(t) {
                return i.prototype[e].apply(this, t)
            }
            w.isFunction(s) ? a[e] = function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = n, this._superApply = o, t = s.apply(this, arguments), this._super = e, this._superApply = i, t
            } : a[e] = s
        }), o.prototype = w.widget.extend(h, {
            widgetEventPrefix: n && h.widgetEventPrefix || t
        }, a, {
            constructor: o,
            namespace: r,
            widgetName: t,
            widgetFullName: s
        }), n ? (w.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            w.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), w.widget.bridge(t, o), o
    }, w.widget.extend = function(t) {
        for (var e, i, s = r.call(arguments, 1), n = 0, o = s.length; n < o; n++)
            for (e in s[n]) i = s[n][e], s[n].hasOwnProperty(e) && void 0 !== i && (w.isPlainObject(i) ? t[e] = w.isPlainObject(t[e]) ? w.widget.extend({}, t[e], i) : w.widget.extend({}, i) : t[e] = i);
        return t
    }, w.widget.bridge = function(o, e) {
        var h = e.prototype.widgetFullName || o;
        w.fn[o] = function(i) {
            var t = "string" == typeof i,
                s = r.call(arguments, 1),
                n = this;
            return t ? this.each(function() {
                var t, e = w.data(this, h);
                return "instance" === i ? (n = e, !1) : e ? w.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t, !1) : void 0 : w.error("no such method '" + i + "' for " + o + " widget instance") : w.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'")
            }) : (s.length && (i = w.widget.extend.apply(null, [i].concat(s))), this.each(function() {
                var t = w.data(this, h);
                t ? (t.option(i || {}), t._init && t._init()) : w.data(this, h, new e(i, this))
            })), n
        }
    }, w.Widget = function() {}, w.Widget._childConstructors = [], w.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = w(e || this.defaultElement || this)[0], this.element = w(e), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = w(), this.hoverable = w(), this.focusable = w(), e !== this && (w.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = w(e.style ? e.ownerDocument : e.document || e), this.window = w(this.document[0].defaultView || this.document[0].parentWindow)), this.options = w.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: w.noop,
        _getCreateEventData: w.noop,
        _create: w.noop,
        _init: w.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(w.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: w.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, s, n, o = t;
            if (0 === arguments.length) return w.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (s = o[t] = w.widget.extend({}, this.options[t]), n = 0; n < i.length - 1; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                    s[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = e
                }
            return this._setOptions(o), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(n, o, t) {
            var h, a = this;
            "boolean" != typeof n && (t = o, o = n, n = !1), t ? (o = h = w(o), this.bindings = this.bindings.add(o)) : (t = o, o = this.element, h = this.widget()), w.each(t, function(t, e) {
                function i() {
                    if (n || !0 !== a.options.disabled && !w(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? a[e] : e).apply(a, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || w.guid++);
                var s = t.match(/^([\w:-]*)\s*(.*)$/),
                    t = s[1] + a.eventNamespace,
                    s = s[2];
                s ? h.delegate(s, t, i) : o.bind(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e), this.bindings = w(this.bindings.not(t).get()), this.focusable = w(this.focusable.not(t).get()), this.hoverable = w(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    w(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    w(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    w(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    w(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var s, n, o = this.options[t];
            if (i = i || {}, (e = w.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], n = e.originalEvent)
                for (s in n) s in e || (e[s] = n[s]);
            return this.element.trigger(e, i), !(w.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, w.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(o, h) {
        w.Widget.prototype["_" + o] = function(e, t, i) {
            "string" == typeof t && (t = {
                effect: t
            });
            var s, n = t ? !0 !== t && "number" != typeof t && t.effect || h : o;
            "number" == typeof(t = t || {}) && (t = {
                duration: t
            }), s = !w.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), s && w.effects && w.effects.effect[n] ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function(t) {
                w(this)[o](), i && i.call(e[0]), t()
            })
        }
    });
    w.widget;
    var l = !1;
    w(document).mouseup(function() {
        l = !1
    });
    w.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(t) {
                if (!0 === w.data(t.target, e.widgetName + ".preventClickEvent")) return w.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!l) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var e = this,
                    i = 1 === t.which,
                    s = !("string" != typeof this.options.cancel || !t.target.nodeName) && w(t.target).closest(this.options.cancel).length;
                return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === w.data(t.target, this.widgetName + ".preventClickEvent") && w.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return e._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return e._mouseUp(t)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), l = !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (w.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && w.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), l = !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    w.widget("ui.resizable", w.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseInt(t, 10) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseInt(t, 10))
        },
        _hasScroll: function(t, e) {
            if ("hidden" === w(t).css("overflow")) return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop",
                e = !1;
            return 0 < t[i] || (t[i] = 1, e = 0 < t[i], t[i] = 0, e)
        },
        _create: function() {
            var t, e, i, s, n = this,
                o = this.options;
            if (this.element.addClass("ui-resizable"), w.extend(this, {
                    _aspectRatio: !!o.aspectRatio,
                    aspectRatio: o.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(w("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = o.handles || (w(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = w(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, e = 0; e < t.length; e++) i = w.trim(t[e]), (s = w("<div class='ui-resizable-handle " + ("ui-resizable-" + i) + "'></div>")).css({
                    zIndex: o.zIndex
                }), "se" === i && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(s);
            this._renderAxis = function(t) {
                var e, i, s;
                for (e in t = t || this.element, this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = w(this.handles[e]), this._on(this.handles[e], {
                    mousedown: n._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = w(this.handles[e], this.element), s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), i = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
                n.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), n.axis = s && s[1] ? s[1] : "se")
            }), o.autoHide && (this._handles.hide(), w(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                o.disabled || (w(this).removeClass("ui-resizable-autohide"), n._handles.show())
            }).mouseleave(function() {
                o.disabled || n.resizing || (w(this).addClass("ui-resizable-autohide"), n._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();

            function t(t) {
                w(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            }
            var e;
            return this.elementIsWrapper && (t(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var e, i, s = !1;
            for (e in this.handles)(i = w(this.handles[e])[0]) !== t.target && !w.contains(i, t.target) || (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(t) {
            var e, i, s = this.options,
                n = this.element;
            return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), s.containment && (e += w(s.containment).scrollLeft() || 0, i += w(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: e,
                top: i
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: n.width(),
                height: n.height()
            }, this.originalSize = this._helper ? {
                width: n.outerWidth(),
                height: n.outerHeight()
            } : {
                width: n.width(),
                height: n.height()
            }, this.sizeDiff = {
                width: n.outerWidth() - n.width(),
                height: n.outerHeight() - n.height()
            }, this.originalPosition = {
                left: e,
                top: i
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = w(".ui-resizable-" + this.axis).css("cursor"), w("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), n.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var e = this.originalMousePosition,
                i = this.axis,
                s = t.pageX - e.left || 0,
                e = t.pageY - e.top || 0,
                i = this._change[i];
            return this._updatePrevProperties(), i && (e = i.apply(this, [t, s, e]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), e = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), w.isEmptyObject(e) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())), !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var e, i, s, n = this.options,
                o = this;
            return this._helper && (s = (e = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : o.sizeDiff.height, i = e ? 0 : o.sizeDiff.width, e = {
                width: o.helper.width() - i,
                height: o.helper.height() - s
            }, i = parseInt(o.element.css("left"), 10) + (o.position.left - o.originalPosition.left) || null, s = parseInt(o.element.css("top"), 10) + (o.position.top - o.originalPosition.top) || null, n.animate || this.element.css(w.extend(e, {
                top: s,
                left: i
            })), o.helper.height(o.size.height), o.helper.width(o.size.width), this._helper && !n.animate && this._proportionallyResize()), w("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s = this.options,
                n = {
                    minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
                    maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
                    minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
                    maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0
                };
            (this._aspectRatio || t) && (e = n.minHeight * this.aspectRatio, i = n.minWidth / this.aspectRatio, s = n.maxHeight * this.aspectRatio, t = n.maxWidth / this.aspectRatio, e > n.minWidth && (n.minWidth = e), i > n.minHeight && (n.minHeight = i), s < n.maxWidth && (n.maxWidth = s), t < n.maxHeight && (n.maxHeight = t)), this._vBoundaries = n
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                h = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                r = this.position.top + this.size.height,
                l = /sw|nw|w/.test(i),
                i = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), h && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = a - e.minWidth), s && l && (t.left = a - e.maxWidth), h && i && (t.top = r - e.minHeight), n && i && (t.top = r - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseInt(s[e], 10) || 0, i[e] += parseInt(n[e], 10) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                e = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || w("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, e, i) {
                return w.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            sw: function(t, e, i) {
                return w.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            },
            ne: function(t, e, i) {
                return w.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            nw: function(t, e, i) {
                return w.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function(t, e) {
            w.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), w.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = w(this).resizable("instance"),
                t = i.options,
                s = i._proportionallyResizeElements,
                n = s.length && /textarea/i.test(s[0].nodeName),
                o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                h = n ? 0 : i.sizeDiff.width,
                n = {
                    width: i.size.width - h,
                    height: i.size.height - o
                },
                h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(w.extend(n, o && h ? {
                top: o,
                left: h
            } : {}), {
                duration: t.animateDuration,
                easing: t.animateEasing,
                step: function() {
                    var t = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    s && s.length && w(s[0]).css({
                        width: t.width,
                        height: t.height
                    }), i._updateCache(t), i._propagate("resize", e)
                }
            })
        }
    }), w.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, s, n = w(this).resizable("instance"),
                t = n.options,
                e = n.element,
                o = t.containment,
                h = o instanceof w ? o.get(0) : /parent/.test(o) ? e.parent().get(0) : o;
            h && (n.containerElement = w(h), /document/.test(o) || o === document ? (n.containerOffset = {
                left: 0,
                top: 0
            }, n.containerPosition = {
                left: 0,
                top: 0
            }, n.parentData = {
                element: w(document),
                left: 0,
                top: 0,
                width: w(document).width(),
                height: w(document).height() || document.body.parentNode.scrollHeight
            }) : (i = w(h), s = [], w(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
                s[t] = n._num(i.css("padding" + e))
            }), n.containerOffset = i.offset(), n.containerPosition = i.position(), n.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, t = n.containerOffset, e = n.containerSize.height, o = n.containerSize.width, o = n._hasScroll(h, "left") ? h.scrollWidth : o, e = n._hasScroll(h) ? h.scrollHeight : e, n.parentData = {
                element: h,
                left: t.left,
                top: t.top,
                width: o,
                height: e
            }))
        },
        resize: function(t) {
            var e = w(this).resizable("instance"),
                i = e.options,
                s = e.containerOffset,
                n = e.position,
                o = e._aspectRatio || t.shiftKey,
                h = {
                    top: 0,
                    left: 0
                },
                a = e.containerElement,
                t = !0;
            a[0] !== document && /static/.test(a.css("position")) && (h = s), n.left < (e._helper ? s.left : 0) && (e.size.width = e.size.width + (e._helper ? e.position.left - s.left : e.position.left - h.left), o && (e.size.height = e.size.width / e.aspectRatio, t = !1), e.position.left = i.helper ? s.left : 0), n.top < (e._helper ? s.top : 0) && (e.size.height = e.size.height + (e._helper ? e.position.top - s.top : e.position.top), o && (e.size.width = e.size.height * e.aspectRatio, t = !1), e.position.top = e._helper ? s.top : 0), i = e.containerElement.get(0) === e.element.parent().get(0), n = /relative|absolute/.test(e.containerElement.css("position")), i && n ? (e.offset.left = e.parentData.left + e.position.left, e.offset.top = e.parentData.top + e.position.top) : (e.offset.left = e.element.offset().left, e.offset.top = e.element.offset().top), n = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - h.left : e.offset.left - s.left)), s = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - h.top : e.offset.top - s.top)), n + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - n, o && (e.size.height = e.size.width / e.aspectRatio, t = !1)), s + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - s, o && (e.size.width = e.size.height * e.aspectRatio, t = !1)), t || (e.position.left = e.prevPosition.left, e.position.top = e.prevPosition.top, e.size.width = e.prevSize.width, e.size.height = e.prevSize.height)
        },
        stop: function() {
            var t = w(this).resizable("instance"),
                e = t.options,
                i = t.containerOffset,
                s = t.containerPosition,
                n = t.containerElement,
                o = w(t.helper),
                h = o.offset(),
                a = o.outerWidth() - t.sizeDiff.width,
                o = o.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(n.css("position")) && w(this).css({
                left: h.left - s.left - i.left,
                width: a,
                height: o
            }), t._helper && !e.animate && /static/.test(n.css("position")) && w(this).css({
                left: h.left - s.left - i.left,
                width: a,
                height: o
            })
        }
    }), w.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = w(this).resizable("instance").options;
            w(t.alsoResize).each(function() {
                var t = w(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseInt(t.width(), 10),
                    height: parseInt(t.height(), 10),
                    left: parseInt(t.css("left"), 10),
                    top: parseInt(t.css("top"), 10)
                })
            })
        },
        resize: function(t, i) {
            var e = w(this).resizable("instance"),
                s = e.options,
                n = e.originalSize,
                o = e.originalPosition,
                h = {
                    height: e.size.height - n.height || 0,
                    width: e.size.width - n.width || 0,
                    top: e.position.top - o.top || 0,
                    left: e.position.left - o.left || 0
                };
            w(s.alsoResize).each(function() {
                var t = w(this),
                    s = w(this).data("ui-resizable-alsoresize"),
                    n = {},
                    e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                w.each(e, function(t, e) {
                    var i = (s[e] || 0) + (h[e] || 0);
                    i && 0 <= i && (n[e] = i || null)
                }), t.css(n)
            })
        },
        stop: function() {
            w(this).removeData("resizable-alsoresize")
        }
    }), w.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = w(this).resizable("instance"),
                e = t.options,
                i = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = w(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = w(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), w.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, e = w(this).resizable("instance"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                o = e.originalPosition,
                h = e.axis,
                a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                r = a[0] || 1,
                l = a[1] || 1,
                u = Math.round((s.width - n.width) / r) * r,
                d = Math.round((s.height - n.height) / l) * l,
                p = n.width + u,
                c = n.height + d,
                g = i.maxWidth && i.maxWidth < p,
                f = i.maxHeight && i.maxHeight < c,
                m = i.minWidth && i.minWidth > p,
                s = i.minHeight && i.minHeight > c;
            i.grid = a, m && (p += r), s && (c += l), g && (p -= r), f && (c -= l), /^(se|s|e)$/.test(h) ? (e.size.width = p, e.size.height = c) : /^(ne)$/.test(h) ? (e.size.width = p, e.size.height = c, e.position.top = o.top - d) : /^(sw)$/.test(h) ? (e.size.width = p, e.size.height = c, e.position.left = o.left - u) : ((c - l <= 0 || p - r <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), 0 < c - l ? (e.size.height = c, e.position.top = o.top - d) : (c = l - t.height, e.size.height = c, e.position.top = o.top + n.height - c), 0 < p - r ? (e.size.width = p, e.position.left = o.left - u) : (p = r - t.width, e.size.width = p, e.position.left = o.left + n.width - p))
        }
    });
    w.ui.resizable
});
/*!
 * Bootstrap Confirmation
 * Copyright 2013 Nimit Suwannagate <ethaizone@hotmail.com>
 * Copyright 2014-2016 Damien "Mistic" Sorel <http://www.strangeplanet.fr>
 * Licensed under the Apache License, Version 2.0 (the "License")
 */

(function($) {
    'use strict';

    // Confirmation extends popover.js
    if (!$.fn.popover) throw new Error('Confirmation requires popover.js');

    // CONFIRMATION PUBLIC CLASS DEFINITION
    // ===============================
    var Confirmation = function(element, options) {
        options.trigger = 'click';

        this.init('confirmation', element, options);

        // keep trace of selectors
        this.options._isDelegate = false;
        if (options.selector) { // container of buttons
            this.options._selector = this._options._selector = options._root_selector + ' ' + options.selector;
        } else if (options._selector) { // children of container
            this.options._selector = options._selector;
            this.options._isDelegate = true;
        } else { // standalone
            this.options._selector = options._root_selector;
        }

        var that = this;

        if (!this.options.selector) {
            // store copied attributes
            this.options._attributes = {};
            if (this.options.copyAttributes) {
                if (typeof this.options.copyAttributes === 'string') {
                    this.options.copyAttributes = this.options.copyAttributes.split(' ');
                }
            } else {
                this.options.copyAttributes = [];
            }

            this.options.copyAttributes.forEach(function(attr) {
                this.options._attributes[attr] = this.$element.attr(attr);
            }, this);

            // cancel original event
            this.$element.on(that.options.trigger, function(e, ack) {
                if (!ack) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            });

            // manage singleton
            this.$element.on('show.bs.confirmation', function(e) {

                //Add backdrop
                $('<div class="backdropManaul"></div>').appendTo('body');
                $('.backdropManaul').click(function() {
                    $(this).remove();
                });

                if (that.options.singleton) {
                    // close all other popover already initialized
                    $(that.options._selector).not($(this)).filter(function() {
                        return $(this).data('bs.confirmation') !== undefined;
                    }).confirmation('hide');
                }
            });
        }

        if (!this.options._isDelegate) {
            // manage popout
            this.eventBody = false;
            this.uid = this.$element[0].id || this.getUID('group_');

            this.$element.on('shown.bs.confirmation', function(e) {
                if (that.options.popout && !that.eventBody) {
                    var $this = $(this);
                    that.eventBody = $('body').on('click.bs.confirmation.' + that.uid, function(e) {
                        if ($(that.options._selector).is(e.target)) {
                            return;
                        }

                        // close all popover already initialized
                        $(that.options._selector).filter(function() {
                            return $(this).data('bs.confirmation') !== undefined;
                        }).confirmation('hide');

                        $('.backdropManaul').remove();

                        $('body').off('click.bs.' + that.uid);
                        that.eventBody = false;
                    });
                }
            });
        }
    };

    Confirmation.DEFAULTS = $.extend({}, $.fn.popover.Constructor.DEFAULTS, {
        placement: 'top',
        title: 'Are you sure?',
        html: true,
        popout: false,
        singleton: false,
        copyAttributes: 'href target',
        onConfirm: $.noop,
        onCancel: $.noop,
        btnOkClass: 'btn-xs btn-primary',
        btnOkIcon: 'glyphicon glyphicon-ok',
        btnOkLabel: 'Yes',
        btnCancelClass: 'btn-xs btn-default',
        btnCancelIcon: 'glyphicon glyphicon-remove',
        btnCancelLabel: 'No',
        template: '<div class="popover confirmation">' +
            '<div class="arrow"></div>' +
            '<h3 class="popover-title"></h3>' +
            '<div class="popover-content text-center">' +
            '<div class="btn-group">' +
            '<a class="btn" data-apply="confirmation"></a>' +
            '<a class="btn" data-dismiss="confirmation"></a>' +
            '</div>' +
            '</div>' +
            '</div>'
    });

    Confirmation.prototype = $.extend({}, $.fn.popover.Constructor.prototype);

    Confirmation.prototype.constructor = Confirmation;

    Confirmation.prototype.getDefaults = function() {
        return Confirmation.DEFAULTS;
    };

    Confirmation.prototype.setContent = function() {
        var that = this,
            $tip = this.tip(),
            o = this.options;

        $tip.find('.popover-title')[o.html ? 'html' : 'text'](this.getTitle());

        // configure 'ok' button
        $tip.find('[data-apply="confirmation"]')
            .addClass(o.btnOkClass)
            .html(o.btnOkLabel)
            .attr(this.options._attributes)
            .prepend($('<i></i>').addClass(o.btnOkIcon), ' ')
            .off('click')
            .one('click', function(e) {
                that.getOnConfirm.call(that).call(that.$element);
                that.$element.trigger('confirmed.bs.confirmation');
                that.$element.trigger(that.options.trigger, [true]);
                that.$element.confirmation('hide');
            });

        // configure 'cancel' button
        $tip.find('[data-dismiss="confirmation"]')
            .addClass(o.btnCancelClass)
            .html(o.btnCancelLabel)
            .prepend($('<i></i>').addClass(o.btnCancelIcon), ' ')
            .off('click')
            .one('click', function(e) {
                that.getOnCancel.call(that).call(that.$element);
                if (that.inState) that.inState.click = false; // Bootstrap 3.3.5
                that.$element.trigger('canceled.bs.confirmation');
                that.$element.confirmation('hide');
            });

        $tip.removeClass('fade top bottom left right in');

        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) {
            $tip.find('.popover-title').hide();
        }
    };

    Confirmation.prototype.getOnConfirm = function() {
        $('.backdropManaul').remove();

        if (this.$element.attr('data-on-confirm')) {
            return getFunctionFromString(this.$element.attr('data-on-confirm'));
        } else {
            return this.options.onConfirm;
        }
    };

    Confirmation.prototype.getOnCancel = function() {
        $('.backdropManaul').remove();

        if (this.$element.attr('data-on-cancel')) {
            return getFunctionFromString(this.$element.attr('data-on-cancel'));
        } else {
            return this.options.onCancel;
        }
    };

    /*
     * Generates an anonymous function from a function name
     * function name may contain dots (.) to navigate through objects
     * root context is window
     */
    function getFunctionFromString(functionName) {
        var context = window,
            namespaces = functionName.split('.'),
            func = namespaces.pop();

        for (var i = 0, l = namespaces.length; i < l; i++) {
            context = context[namespaces[i]];
        }

        return function() {
            context[func].call(this);
        };
    }


    // CONFIRMATION PLUGIN DEFINITION
    // =========================

    var old = $.fn.confirmation;

    $.fn.confirmation = function(option) {
        var options = (typeof option == 'object' && option) || {};
        options._root_selector = this.selector;

        return this.each(function() {
            var $this = $(this),
                data = $this.data('bs.confirmation');

            if (!data && option == 'destroy') {
                return;
            }
            if (!data) {
                $this.data('bs.confirmation', (data = new Confirmation(this, options)));
            }
            if (typeof option == 'string') {
                data[option]();

                if (option == 'hide' && data.inState) { //data.inState doesn't exist in Bootstrap < 3.3.5
                    data.inState.click = false;
                }
            }
        });
    };

    $.fn.confirmation.Constructor = Confirmation;


    // CONFIRMATION NO CONFLICT
    // ===================

    $.fn.confirmation.noConflict = function() {
        $.fn.confirmation = old;
        return this;
    };

}(jQuery));
var SuggestText = function() {
    var _ = {
        $bootbox: '',
        websiteID: '',
        translations: '',
        $tool: '',
        field: '',
        lang: '',
        hideQuotes: false,
        openModal: '',
        headerContentType: '1',
        inlineModulesList: ['faq_inline', 'services_inline', 'testimonials_inline', 'team_inline', 'menu_inline'],
        ModulesPreviewManageBtns: [11, 3, 5, 4, 9, 17, 52],
        stopTextGenerationFlag: true,
        intervalId: '',
        onBoardingFlag: false,
        fallBackAttempts: 1,
        fallBackAttemptsLimit: 5, // try 5 times
    };
    _.init = function(settings) {
        _.translations = settings.translations;
        _.websiteID = settings.websiteID;
        _.refresh();
        $(document).on('SuggestText.refresh', function() {
            _.refresh();
        });
    };
    _.IsRTL = function($language) {
        $language = topWindow.$('html').attr('dir') == 'rtl' ? 'he' : $language;
        if ($language === 'he_IL' || $language === 'he' || $language === 'ar_SA' || $language === 'ar' || $language === 'fa') {
            return true;
        } else {
            return false;
        }
    }
    _.getData = function(action, search, filter) {
        var deferreds = {
            system: $.Deferred(),
            quotes: $.Deferred(),
        };
        _.getSuggestTexts(search, filter, deferreds);
        if (!_.hideQuotes) {
            _.getQuotes(search, filter, deferreds, 50);
        } else {
            deferreds.quotes.resolve();
        }
        $.when(deferreds.system, deferreds.quotes).done(function(system, quotes) {
            if (action == 'open') {
                _.showModal(_.createContent(system, quotes));
            } else {
                const data = _.addSuggestText(system, quotes);
                _.$bootbox.find('.suggest-text-no-result').hide();
                if (!data) _.$bootbox.find('.suggest-text-no-result').show();
                _.$bootbox.find('.suggest-texts-tool').html('');
                _.$bootbox.find('.suggest-texts-tool').append(data);
                _.$bootbox.find('.suggest-apply-btn').on('click', function() {
                    _.setText(_.$bootbox, $(this));
                });
            }
        });
    }

    function getTextAIFieldsDesign() {
        if (_.inlineModulesList.includes(_.field) || _.field == 'headers') {
            return 'ai-text-input-grid';
        } else {
            return 'ai-text-input-wrap';
        }
    }

    function stopTextGeneration($html) {
        if (_.onBoardingFlag) return;
        $html.find('.suggest-ai-texts').css('height', '').html('');
        $html.find('.ai-generate-wrap').removeClass('hidden');
        $html.find('.ai-generate-require-msg').addClass('hidden');
        $html.find('.suggest-ai-loading').hide();
        _.stopTextGenerationFlag = false;
        if (_.ajaxObj && _.ajaxObj.readyState != 4) {
            _.ajaxObj.abort();
        }
    }

    function isAllInputsEmpty($html) {
        let allInputsEmpty = true;
        $html.find('.ai-input').each(function() {
            if ($(this).val()) {
                allInputsEmpty = false;
            }
        });
        return allInputsEmpty;
    }

    function getOpenAI() {
        let html = '<div class="suggest-ai-tool">';
        html += '<div class="suggest-ai-text widget-box static activate">';
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += `<div class="${getTextAIFieldsDesign()}">`;
        html += getOpenAIFields();
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += `
<div class="suggest-ai-loading card-clean">
<div class="suggest-ai-loading-body card-clean-body grid-justify-center">
<div class="progress" style="width:70%;position:relative;border-radius:16px;height:25px;">
<div id="progressBar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
<span style="position:absolute;top:calc(100% - 20px);${_.IsRTL(_.lang) ? 'right:50%;left:auto;' : 'left:50%;'}" id="progressText"></span>
</div>
</div>
<div style="padding: 0 40px;text-align:center;opacity:0.8;">
${_.translations.ai.loadingMsg}
</div>
</div>
</div>
`;
        html += '<div class="suggest-ai-texts full fancy-scrollbar"></div>';
        html += `
<div class="ai-text-input-grid-center ai-text-generate-btn-container ai-generate-wrap hidden">
<button class="btn btn-primary ai-text-generate-btn ai-input-btn" aria-label="generate">
${_.translations.ai.generate}
</button>
<div class="ai-generate-require-msg hidden"><br>${_.translations.ai.required}</div>
</div>`;
        html += '</div>';
        const $html = $(html);
        _.stopTextGenerationFlag = isAllInputsEmpty($html);
        $html.find('[data-rel=tooltip]').tooltip({
            container: $html,
            placement: 'auto'
        });
        $html.find('.ai-text-generate-btn').on('click', () => {
            if (_.stopTextGenerationFlag) return;
            if (_.intervalId) clearInterval(_.intervalId); // Stop the progress bar
            $html.find('#progressBar').css('width', '0').attr('aria-valuenow', 0); // Set to 0
            $html.find('#progressText').text('0%');
            $html.find('.suggest-ai-texts').html('');
            $html.find('.suggest-ai-loading').show();
            $html.find('.ai-generate-wrap').addClass('hidden');
            _.getOpenAITexts($html, 0, 'generate');
        });
        $html.find('.ai-input').on('input', function() {
            let value = $(this).val();
            if (value) {
                stopTextGeneration($html);
            } else {
                if (isAllInputsEmpty($html)) {
                    $html.find('.ai-generate-require-msg').removeClass('hidden');
                    _.stopTextGenerationFlag = true;
                }
            }
        })
        $html.find('.ai-content-type-input').on('change', (event) => {
            if (_.onBoardingFlag) return;
            if (_.intervalId) clearInterval(_.intervalId); // Stop the progress bar
            $html.find('#progressBar').css('width', '0').attr('aria-valuenow', 0); // Set to 0
            $html.find('#progressText').text('0%');
            stopTextGeneration($html);
            $html.find('.ai-generate-wrap').addClass('hidden');
            _.headerContentType = event.target.value;
            if (_.headerContentType == '4') {
                $html.find('.ai-text-input:not(".ai-text-content-input")').hide();
                $html.find('.ai-text-custom-input').show();
                $html.find('.suggest-ai-texts').html('');
                $html.find('.suggest-ai-loading').show();
                _.getOpenAITexts($html, 0, 'generate');
            } else {
                $html.find('.ai-text-input:not(".ai-text-content-input")').show();
                $html.find('.ai-text-custom-input').hide();
                $html.find('.suggest-ai-texts').html('');
                $html.find('.suggest-ai-loading').show();
                _.getOpenAITexts($html, 0, 'generate');
            }
        });
        initializeCategoryInput($html);
        _.showModal($html);
        if (!_.stopTextGenerationFlag) {
            _.getOpenAITexts($html, 0, 'openModal');
        } else {
            $html.find('.suggest-ai-loading').hide();
            $html.find('.ai-generate-wrap').removeClass('hidden');
            $html.find('.ai-generate-require-msg').removeClass('hidden');
        }
    }

    function onBoarding($html, callback, action) {
        _.onBoardingFlag = true;
        $html.find('.widget-main').append('<button class="btn btn-primary" id="onBoardingBtn">' + _.translations.ai.onboarding.save + '</button>');
        $html.find('.widget-main').prepend('<p class="text-120" id="onBoardingText">' + _.translations.ai.onboarding.title + '</button>');
        $html.find('.suggest-ai-loading').hide();
        $html.find('.suggest-ai-texts').hide();
        $html.find('.ai-text-content-input').hide();
        $html.find('#onBoardingBtn').on('click', function() {
            let inputsValues = getFieldsValue($html.find('.ai-input'));
            if (!inputsValues.about || !inputsValues.category) {
                $html.find('.ai-about-input').addClass('error');
                $html.find('.ai-category-input').addClass('error');
                if (!$html.find('.onboardingErrorMsg').length) {
                    $html.find('.ai-text-input-grid').after('<span class="onboardingErrorMsg" style="color:red;display:block">' + _.translations.ai.onboarding.error + '</span>');
                }
                $html.find('.ai-input').on('focus', function() {
                    $html.find('.ai-about-input').removeClass('error');
                    $html.find('.ai-category-input').removeClass('error');
                    $html.find('.onboardingErrorMsg').remove();
                });
                return;
            }
            updateWebsiteData(inputsValues);
            $html.find('#onBoardingBtn').hide();
            $html.find('#onBoardingText').hide();
            $html.find('.suggest-ai-loading').show();
            $html.find('.suggest-ai-texts').show();
            $html.find('.ai-text-input-grid-center').addClass('hidden');
            $html.find('.ai-text-content-input').show();
            _.onBoardingFlag = false;
            callback(action);
        });
    }

    function initializeCategoryInput($html) {
        let $input = $html.find('.ai-category-input');
        let categoriesInput = new AutocompleteInput({
            $input: $input,
            html: true,
            intrface_align_reverse: topWindow.intrface_align_reverse,
            pageLoadAjax: function(callback) {
                loadBusinessTypes({}, callback);
            },
            autoCompleteSource: function(callback) {
                loadBusinessTypes({
                    q: $input.val(),
                    language: _.lang
                }, callback);
            }
        });
        $input.addClass('autocomplete-input');

        function loadBusinessTypes(data, callback) {
            let newStructure = [];
            if (!data.q) {
                callback.call(this, newStructure);
                return;
            }
            $.ajax({
                url: '/manager/login/getBusinessTypeAjax.php',
                type: "POST",
                data: data,
                success: function(data) {
                    var data = tryParseJSON(data);
                    $.each(data, function(index, value) {
                        newStructure.push({
                            label: value.categoryHTML,
                            value: value.categoryTXT
                        });
                    });
                    callback.call(this, newStructure);
                }
            });
        }
    }

    function getFieldsValue(inputs) {
        let inputValueArry = {
            'name': '',
            'category': '',
            'position': '',
            'productCategory': '',
            'contentType': '',
            'custom': '',
            'about': '',
            'focus': '',
            'hiddenData': '',
            'description': '',
        }
        $(inputs).each(function(i, obj) {
            inputValueArry[obj.getAttribute('data-input')] = obj.value;
        });
        return inputValueArry;
    }

    function updateWebsiteData(inputValueArry) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/updateWebsiteData.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                inputsValues: inputValueArry,
            },
        });
    }

    function getWebsiteData($html, callback) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/getWebsiteData.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
            },
            success: (data) => {
                data = tryParseJSON(data);
                if (data) {
                    if (data.description) $html.find('.ai-about-input').val(data.description);
                    if (data.businessType) {
                        $html.find('.ai-category-input').val(data.businessType);
                    }
                }
                if (callback) callback.call(this);
            }
        });
    }

    function getOpenAIFields() {
        let name = topWindow.$('#name').val();
        let position = '';
        let productCategory = '';
        let description = '';
        let extraDescription = '';
        let characterLimit = 50;
        let searchBtnPosition = 'category';
        let nameInputTexts = {
            'label': _.translations.ai.business,
            'tooltip': _.translations.ai.businessTT,
            'placeholder': _.translations.ai.business,
        }
        if (['services', 'scheduleBooking', 'course', 'event', 'menu', 'blog', 'article', 'services_extra'].includes(_.field)) {
            name = name != $('input[name="title"]').val() ? $('input[name="title"]').val() : name;
            if (['blog', 'article'].includes(_.field)) {
                name = name != $('textarea[name="title"]').val() ? $('textarea[name="title"]').val() : name;
            }
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            if (_.field === 'services_extra') {
                extraDescription = $('textarea[name="description"]').val() ? $('textarea[name="description"]').val() : '';
            }
            nameInputTexts = {
                'label': _.translations.ai[_.field.replace("_extra", "")],
                'tooltip': _.translations.ai[`${_.field.replace("_extra", "")}TT`],
                'placeholder': _.translations.ai[_.field.replace("_extra", "")],
            }
        } else if (['team', 'team_extra'].includes(_.field)) {
            name = name != $('input[name="name"]').val() ? $('input[name="name"]').val() : name;
            position = name != $('input[name="job_position"]').val() ? $('input[name="job_position"]').val() : name;
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'position';
            if (_.field === 'team_extra') {
                extraDescription = $('textarea[name="description"]').val() ? $('textarea[name="description"]').val() : '';
            }
            nameInputTexts = {
                'label': _.translations.ai.member,
                'tooltip': _.translations.ai.memberTT,
                'placeholder': _.translations.ai.member,
            }
        } else if (['ecommerce', 'ecommerce_extra'].includes(_.field)) {
            name = name != $('input[name="title"]').val() ? $('input[name="title"]').val() : name;
            let productCategoryFirstOption = $('#collections').val() ? $('#collections option[value="' + $('#collections').val()[0] + '"]').attr('data-title') : '';
            productCategory = productCategory != productCategoryFirstOption ? productCategoryFirstOption : productCategory;
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'productCategory';
            if (_.field === 'ecommerce_extra') {
                extraDescription = $('textarea[name="description"]').val() ? $('textarea[name="description"]').val() : '';
            }
            nameInputTexts = {
                'label': _.translations.ai.product,
                'tooltip': _.translations.ai.productTT,
                'placeholder': _.translations.ai.product,
            }
        } else if (_.field === 'chart') {
            name = name != $('input[name="chart_title"]').val() ? $('input[name="chart_title"]').val() : name;
            var chartType = $('#chart_type') ? $('#chart_type').val() : '';
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            nameInputTexts = {
                'label': _.translations.ai.chart,
                'tooltip': _.translations.ai.chartTT,
                'placeholder': _.translations.ai.chart,
            }
        } else if (_.field === 'restaurant') {
            var address = $('#address') ? $('#address').val() : '';
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            nameInputTexts = {
                'label': _.translations.ai.chart,
                'tooltip': _.translations.ai.chartTT,
                'placeholder': _.translations.ai.chart,
            }
        } else if (_.field === 'imageCompare') {
            name = name != $('input[name="comparison_title"]').val() ? $('input[name="comparison_title"]').val() : name;
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            nameInputTexts = {
                'label': _.translations.ai.imageCompare,
                'tooltip': _.translations.ai.imageCompareTT,
                'placeholder': _.translations.ai.imageCompare,
            }
        } else if (_.field === 'faq') {
            name = name != $('input[name="question"]').val() ? $('input[name="question"]').val() : name;
            characterLimit = $('input[name="question"]').attr('data-rule-maxlength') ? $('input[name="question"]').attr('data-rule-maxlength') : characterLimit;
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'name';
            nameInputTexts = {
                'label': _.translations.ai.faq,
                'tooltip': _.translations.ai.faqTT,
                'placeholder': _.translations.ai.faq,
            }
        } else if (_.field === 'testimonials') {
            name = name != $('input[name="name"]').val() ? $('input[name="name"]').val() : name;
            description = $('input[name="title"]').val() ? $('input[name="title"]').val() : '';
            _.stopTextGeneration = name == '';
            searchBtnPosition = 'description';
            nameInputTexts = {
                'label': _.translations.ai.testimonial,
                'tooltip': _.translations.ai.testimonialTT,
                'placeholder': _.translations.ai.testimonial,
            }
        }
        const SearchBtn = `
<div class="ai-text-input-flex">
<button class="btn btn-primary ai-text-generate-btn ai-input-btn hidden" aria-label="generate">
<i class="fal fa-search"></i>
</button>
</div>
`;
        let nameInput = `
<div class="form-group ai-text-input">
<label>${nameInputTexts.label}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${nameInputTexts.tooltip}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="${characterLimit}" class="ai-input ai-name-input form-control" placeholder="${nameInputTexts.placeholder}" value="${name}" data-input="name">
${searchBtnPosition == 'name' ? SearchBtn : ''}
</div>
</div>
`;
        let categoryInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.category}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.categoryTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-category-input form-control" placeholder="${_.translations.ai.categoryPH}" data-input="category">
${searchBtnPosition == 'category' ? SearchBtn : ''}
</div>
</div>
`;
        let productCategoryInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.category}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.categoryTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-product-category-input form-control" placeholder="${_.translations.ai.categoryPH}" value="${productCategory}" data-input="productCategory">
${searchBtnPosition == 'productCategory' ? SearchBtn : ''}
</div>
</div>
`;
        let positionInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.position}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.positionTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-position-input form-control" placeholder="${_.translations.ai.positionPH}" value="${position}" data-input="position">
${searchBtnPosition == 'position' ? SearchBtn : ''}
</div>
</div>
`;
        let contentTypeInput = `
<div class="form-group ai-text-input ai-text-content-input">
<label>${_.translations.ai.contentType}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.contentTypeTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<select class="ai-input ai-content-type-input form-control" data-input="contentType">
<option value="1" ${_.headerContentType == '1' ? 'selected' : ''}>${_.translations.ai.titleOption}</option>
<option value="2" ${_.headerContentType == '2' ? 'selected' : ''}>${_.translations.ai.shortAboutOption}</option>
<option value="3" ${_.headerContentType == '3' ? 'selected' : ''}>${_.translations.ai.longAboutOption}</option>
<option value="4" ${_.headerContentType == '4' ? 'selected' : ''}>${_.translations.ai.customOption}</option>
</select>
</div>
</div>
`;
        let customInput = `
<div class="form-group ai-text-input ai-text-custom-input" style="display:none">
<label>${_.translations.ai.custom}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.customTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="200" class="ai-input ai-custom-input form-control" placeholder="${_.translations.ai.customPH}" data-input="custom">
${searchBtnPosition == 'category' ? SearchBtn : ''}
</div>
</div>
`;
        let aboutInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.about}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.aboutTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="150" class="ai-input ai-about-input form-control" placeholder="${_.translations.ai.aboutPH}" data-input="about">
${searchBtnPosition == 'about' ? SearchBtn : ''}
</div>
</div>
`;
        let focusInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.focus}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.focusTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-focus-input form-control" placeholder="${_.translations.ai.focusPH}" data-input="focus">
${searchBtnPosition == 'focus' ? SearchBtn : ''}
</div>
</div>
`;
        let descriptionInput = `
<div class="form-group ai-text-input">
<label>${_.translations.ai.description}
<a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="${_.translations.ai.descriptionTT}">
<i class="fa fa-question-circle"></i>
</a>
</label>
<div class="ai-text-input-flex">
<input type="text" maxlength="50" class="ai-input ai-description-input form-control" placeholder="${_.translations.ai.descriptionPH}" value="${description}" data-input="description">
${searchBtnPosition == 'description' ? SearchBtn : ''}
</div>
</div>
`;
        if (['services', 'scheduleBooking', 'course', 'event', 'menu', 'blog', 'article', 'imageCompare', 'faq', 'services_extra'].includes(_.field)) {
            return `
${nameInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${extraDescription}">
`;
        } else if (['team', 'team_extra'].includes(_.field)) {
            return `
${nameInput}
${positionInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${extraDescription}">
`;
        } else if (['ecommerce', 'ecommerce_extra'].includes(_.field)) {
            return `
${nameInput}
${productCategoryInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${extraDescription}">
`;
        } else if (_.field === 'headers') {
            return `
${nameInput}
${categoryInput}
${aboutInput}
${contentTypeInput}
${customInput}
`;
        } else if (_.inlineModulesList.includes(_.field)) {
            return `
${nameInput}
${categoryInput}
${aboutInput}
${focusInput}
`;
        } else if (_.field === 'chart') {
            return `
${nameInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${chartType}">
`;
        } else if (_.field === 'restaurant') {
            return `
${nameInput}
<input type="hidden" class="ai-input" data-input="hiddenData" value="${address}">
`;
        } else if (_.field === 'testimonials') {
            return `
${nameInput}
${descriptionInput}
`;
        }
        return `
${nameInput}
${categoryInput}
`;
    }

    function getOpenAiMoreText(field, inputsValues, moreText, id, $html) {
        $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html('<i class="suggest-ai-in-text-loading ace-icon fa fa-spinner fa-spin"></i>');
        return $.ajax({
            type: "POST",
            url: "/manager/suggestText/openAI.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                inputsValues: inputsValues,
                tool: field,
                moreText: moreText,
            },
            success: (data) => {
                data = tryParseJSON(data);
                $html.find('.suggest-text[data-id="' + id + '"] .suggest-ai-in-text-loading').remove();
                if (!data.response || !data.response.choices) {
                    $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html(_.translations.ai.noResults);
                } else {
                    if (field === 'services_inline_answer') {
                        $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html(`
<div class="ai-short">${data.response.choices[0].short}</div>
<div class="ai-content">${data.response.choices[0].content}</div>
<div class="ai-image hidden">${data.response.choices[0].image_keyword}</div>
`);
                    } else if (field === 'testimonials_inline_answer') {
                        $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html(`
<div class="ai-content">${data.response.choices[0].testimonial}</div>
<div class="ai-image hidden">${data.response.choices[0].image_keyword}</div>
`);
                    } else {
                        $html.find('.suggest-text[data-id="' + id + '"] .ai-text2').html(data.response.choices[0].text);
                    }
                    $html.find('.suggest-text[data-id="' + id + '"] .suggest-generate-more-btn').remove();
                    $html.find('.suggest-text[data-id="' + id + '"] .suggest-apply-ai').show();
                    $html.find('.suggest-text[data-id="' + id + '"]').off('click.textAi');
                    $html.find('.suggest-text[data-id="' + id + '"]').on('click.textAiMore', function() {
                        _.setText($html, $(this));
                        $html.find('.suggest-text[data-id="' + id + '"] .suggest-apply-ai').html(`<i class="ace-icon fa fa-check"></i>${_.translations.ai.applied}`);
                        $html.find('.suggest-text[data-id="' + id + '"] .suggest-apply-ai').removeClass('btn-primary').addClass('btn-success');
                        $html.find('.suggest-text[data-id="' + id + '"]').addClass('ai-text-disable');
                    });
                }
            }
        });
    }

    function generateImageAndApplyText($html, $this) {
        const imageKeyword = $html.find(`.suggest-text[data-id="${$this.data('id')}"] .ai-image`).text();
        let $image = $html.find(`.suggest-text[data-id="${$this.data('id')}"] .ai-image`);
        $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .suggest-apply-ai').html('<i class="suggest-ai-in-text-loading ace-icon fa fa-spinner fa-spin"></i>');
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/getImage.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                imageKeyword: imageKeyword,
                tool: _.field,
            },
            success: (data) => {
                data = tryParseJSON(data);
                if (!data.image) {
                    $image.removeClass('hidden');
                    $image.html(_.translations.ai.noResults);
                } else {
                    $image.addClass('hidden');
                    $image.html(data.image);
                    $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .suggest-apply-ai').html(`<i class="ace-icon fa fa-check"></i>${_.translations.ai.applied}`);
                    $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .suggest-apply-ai').removeClass('btn-primary').addClass('btn-success');
                    $html.find('.suggest-text[data-id="' + $this.data('id') + '"]').addClass('ai-text-disable');
                    _.setText($html, $this);
                }
            }
        });
    }
    _.getOpenAITexts = function($html, startIndex, action) {
        _.fallBackAttempts = 1;
        $html.find('.ai-text-content-input').addClass('ai-text-disable');
        let inputsValues = null;
        if (action == 'generate' || action == 'generateMore' || action == 'generate_one') {
            inputsValues = getFieldsValue($html.find('.ai-input'));
            updateWebsiteData(inputsValues);
            renderTexts(action);
        } else if (action == 'openModal') {
            getWebsiteData($html, function() {
                inputsValues = getFieldsValue($html.find('.ai-input'));
                if (inputsValues.category == '' && inputsValues.about == '') {
                    if (_.field == 'headers' || _.inlineModulesList.includes(_.field)) {
                        onBoarding($html, renderTexts, action);
                    } else {
                        renderTexts(action);
                    }
                } else {
                    renderTexts(action);
                }
            });
        }

        function renderTexts(action) {
            _.progress = action == 'generate_one' ? _.progress : 0;
            var maxTime = 50000; // 50 seconds
            var step = 1000; // 1 second
            var increment = 100 * step / maxTime;
            var inputsValues = getFieldsValue($html.find('.ai-input'));
            _.intervalId = setInterval(() => {
                _.progress += increment;
                if (_.progress > 100) {
                    _.progress = 100;
                }
                $html.find('#progressBar').css('width', _.progress + '%').attr('aria-valuenow', _.progress);
                $html.find('#progressText').text(Math.floor(_.progress) + '%');
                if (_.progress >= 100) {
                    clearInterval(_.intervalId);
                }
            }, step);
            _.ajaxObj = $.ajax({
                type: "POST",
                url: "/manager/suggestText/openAI.php",
                timeout: 40000, // Timeout in milliseconds, e.g., 30000 for 30 seconds
                data: {
                    websiteID: topWindow.websiteID,
                    w: topWindow.websiteID,
                    inputsValues: inputsValues,
                    tool: _.field,
                    action: action,
                    lang: _.lang,
                },
                success: (data) => {
                    data = tryParseJSON(data);
                    $html.find('.suggest-ai-loading').hide();
                    if (data.useLimit) {
                        if ($html.find('.suggest-ai-texts .text-ai-use-limit-msg').length === 0) {
                            $html.find('.suggest-ai-texts').append(`
<div class="text-ai-use-limit-msg">
<p>${data.useLimit.message}</p>
${data.useLimit.btn}
</div>
`);
                        }
                        return;
                    } else if (data.invalidJson && data.generate) {
                        if ($html.find('.suggest-ai-texts .suggest-text').length == 0) {
                            $html.find('.suggest-ai-loading').show();
                        }
                        if (_.fallBackAttempts < _.fallBackAttemptsLimit) {
                            renderTexts('generate_one');
                            _.fallBackAttempts++;
                            return;
                        } else if (_.fallBackAttempts >= _.fallBackAttemptsLimit) {
                            $html.find('.suggest-ai-texts .ai-error-message').remove();
                            $html.find('.suggest-ai-loading').hide();
                            $html.find('.suggest-ai-loading-more').hide();
                            if ($html.find('.ai-text-more-btn').length > 0) {
                                $html.find('.loading-more-text').css('pointer-events', 'auto').show();
                                $('<p class="ai-error-message text-center">' + _.translations.ai.noResults + '</p>').insertBefore($html.find('.ai-text-more-btn'));
                            } else {
                                $html.find('.suggest-ai-texts').append('<p class="ai-error-message text-center">' + _.translations.ai.noResults + '</p>');
                                $html.find('.ai-generate-wrap').removeClass('hidden');
                            }
                            return;
                        }
                    } else if (!data.response || !data.response.choices) {
                        $html.find('.suggest-ai-texts').append('<p class="ai-error-message">' + _.translations.ai.noResults + '</p>');
                        $html.find('.ai-generate-wrap').removeClass('hidden');
                        return;
                    }
                    clearInterval(_.intervalId);
                    $html.find('#progressBar').css('width', '100%').attr('aria-valuenow', 100);
                    $html.find('#progressText').text('100%');
                    $html.find('.suggest-ai-texts').append(_.addAiText(data.response.choices, startIndex));
                    $html.find('.suggest-text').on('click.textAi', function() {
                        if (_.inlineModulesList.includes(_.field)) {
                            generateImageAndApplyText($html, $(this));
                        } else {
                            _.setText($html, $(this));
                        }
                    });
                    $html.find('.suggest-ai-texts').find('.ai-text-more-btn').remove();
                    $html.find('.suggest-ai-texts').append(`<button class="btn btn-link ai-text-more-btn"><span class="loading-more-text">${_.translations.ai.showMore}</span><i class="suggest-ai-loading-more ace-icon fa fa-spinner fa-spin"></i></button>`);
                    $html.find('.suggest-ai-loading-more').hide();
                    $html.find('.ai-text-more-btn').on('click', function() {
                        $html.find('.suggest-ai-loading-more').show();
                        $html.find('.loading-more-text').hide();
                        $(this).css('pointer-events', 'none');
                        $html.find('.suggest-ai-texts .ai-error-message').remove();
                        _.getOpenAITexts($html, $html.find('.suggest-ai-texts .suggest-text').length, 'generateMore');
                    });
                    var winObject = topWindow;
                    if (winObject.$('.suggest-ai-text').length == '0') return;
                    winObject.$('.suggest-ai-texts').css('height', winObject.$('.suggest-ai-text').outerHeight() + 250);
                    $html.find('.ai-text-content-input').removeClass('ai-text-disable');
                },
                error: function(xhr, status, error) {
                    if (status === "timeout") {
                        if (action == 'generateMore') {
                            $html.find('.suggest-ai-loading-more').hide();
                            $html.find('.loading-more-text').show();
                            $(this).css('pointer-events', 'auto');
                        } else {
                            $html.find('.suggest-ai-loading').hide();
                            $html.find('.suggest-ai-texts').append('<p>' + _.translations.ai.noResults + '</p>');
                            $html.find('.ai-generate-wrap').removeClass('hidden');
                        }
                        return;
                    }
                }
            });
            if (action != 'generate_one') {
                setTimeout(() => {
                    clearInterval(_.intervalId);
                    $html.find('#progressBar').css('width', '100%').attr('aria-valuenow', 100);
                    $html.find('#progressText').text('100%');
                }, maxTime);
            }
        }
    }
    _.getSuggestTexts = function(search, filter, deferreds) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/suggestTextAjax.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                tool: _.$tool,
                field: _.field,
                search: search,
                filter: filter,
                language: _.lang
            },
            success: (data) => {
                if (deferreds) {
                    deferreds.system.resolve(tryParseJSON(data));
                } else {
                    return tryParseJSON(data);
                }
            }
        });
    }
    _.getQuotes = function(search, filter, deferreds, size) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/quotes.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                size: size,
                search: search,
                filter: filter
            },
            success: (data) => {
                if (deferreds) {
                    deferreds.quotes.resolve(tryParseJSON(data));
                } else {
                    return tryParseJSON(data);
                }
            }
        });
    }
    _.getAIText = function($html) {
        let name = $html.find('.ai-name-input').val();
        let about = $html.find('.ai-about-input').val();
        let rytrLanguageID = $html.find('.ai-language-select').find(':selected').data('id');
        if (name.trim().length === 0 || about.trim().length === 0) {
            $html.find('.suggest-ai-loading').hide();
            return;
        }
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/aiText.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
                name: name,
                about: about,
                rytrLanguageID: rytrLanguageID
            },
            success: (data) => {
                data = tryParseJSON(data);
                $html.find('.suggest-ai-loading').hide();
                if (!data) $html.find('.suggest-ai-texts').append('<p>' + _.translations.ai.noResults + '</p>');
                $html.find('.suggest-ai-texts').append(_.addAiText(data, 0));
                $html.find('.suggest-text').on('click', function() {
                    _.setText($html, $(this));
                });
            }
        });
    }
    _.createContent = function(data, quotes) {
        let html = '';
        html += '<div class="suggest-texts-container">';
        html += '<div class="suggest-text-search-container">';
        html += '<input type="text" maxlength="50" class="suggest-texts-search form-control" placeholder="' + _.translations.searchPlaceHolder + '">';
        html += '<i class="fal fa-search suggest-text-search-icon"></i>';
        html += '<i class="fal fa-home suggest-text-reset-search" style="display: none;"></i>';
        html += '</div>';
        html += '<select class="form-control suggest-text-filter">';
        html += '<option value="">' + _.translations.categoryAll + '</option>';
        html += !_.hideQuotes ? '<option value="quotes">' + _.translations.quotes + '</option>' : '';
        data['category'].forEach(function(ele, index) {
            html += '<option value="' + ele[0] + '">' + ele[1] + '</option>';
        })
        html += '<option value="ai_option">' + _.translations.aiText + '</option>';
        html += '</select>';
        html += '<div class="suggest-text-no-result" style="display: none;">';
        html += _.translations.noResults;
        html += '</div>';
        html += '</div>';
        html += '<div class="suggest-texts-tool fancy-scrollbar">';
        html += _.addSuggestText(data, quotes);
        html += '</div>';
        html += '<div class="suggest-ai-tool" style="display:none">';
        html += _.getAIHtml();
        html += '<div class="suggest-ai-loading text-center" style="display:none;"><i class="ace-icon fa fa-spinner fa-spin fa-4x"></i></div>';
        html += '<div class="suggest-ai-texts fancy-scrollbar">';
        html += '</div>';
        html += '</div>';
        let $html = $(html);
        $html.find('.suggest-text').on('click', function() {
            _.setText($html, $(this));
        });
        $html.find('[data-rel=tooltip]').tooltip({
            container: 'body',
            placement: 'auto'
        });
        $html.find('.suggest-texts-search').on('keydown', function(event) {
            var $this = $(this);
            var eventKey = event.which;
            clearTimeout(this.searchLibraryInputFinished);
            if (eventKey == 13) {
                _.searchText($html, $this.val());
            } else {
                this.searchLibraryInputFinished = setTimeout(function() {
                    _.searchText($html, $this.val());
                }, 1000);
            }
        });
        $html.find('.suggest-text-filter').on('change', function() {
            _.filterText($html, $(this).val());
        });
        $html.find('.ai-text-generate-btn').on('click', () => {
            $html.find('.suggest-ai-texts').html('');
            $html.find('.suggest-ai-loading').show();
            _.getAIText($html);
        });
        _.getAILanguages($html);
        return $html;
    }
    _.setText = function($html, $this) {
        if (_.$suggestTextfield ? .data('suggest-sibling')) {
            $('.suggestTextfield[data-suggest-sibling="1"]').val($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text1').text());
            $('.suggestTextfield[data-suggest-sibling="2"]').val($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text2').text());
        } else if (_.$suggestTextfield ? .data('suggest-froala') && ['faq', 'restaurant', 'ecommerce_extra', 'services_extra', 'team_extra'].includes(_.field)) {
            _.$suggestTextfield.data('froala.editor').html.set($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text').html());
            _.$suggestTextfield.data('froala.editor').events.trigger('contentChanged');
        } else if (_.$suggestTextfield ? .data('suggest-froala')) {
            _.$suggestTextfield.data('froala.editor').html.set($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text .slogan').html());
            _.$suggestTextfield.data('froala.editor').events.trigger('contentChanged');
        } else if (_.field == 'headers') {
            _.callback({
                'mainText': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .title').html(),
                'subText': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .slogan').html()
            });
        } else if (_.inlineModulesList.includes(_.field)) {
            let callbackData = {};
            if (_.field === 'faq_inline') {
                callbackData = {
                    'mainText': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1').html(),
                    'subText': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text2 .ai-answer').html(),
                };
            } else if (_.field === 'services_inline') {
                callbackData = {
                    'title': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1').html(),
                    'short': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-short').html(),
                    'image': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-image').html(),
                }
            } else if (_.field === 'testimonials_inline') {
                callbackData = {
                    'title': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .title').html(),
                    'name': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .name').html(),
                    'content': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-content').html(),
                    'image': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-image').html(),
                }
            } else if (_.field === 'team_inline') {
                callbackData = {
                    'name': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .name').html(),
                    'position': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .position').html(),
                    'info': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-content').html(),
                    'image': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-image').html(),
                }
            } else if (_.field === 'menu_inline') {
                callbackData = {
                    'title': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .title').html(),
                    'price': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-text1 .result-wrap .price').html(),
                    'description': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-content').html(),
                    'image': $html.find('.suggest-text[data-id="' + $this.data('id') + '"] .ai-image').html(),
                }
            }
            _.callback(callbackData);
        } else {
            _.$suggestTextfield.val($html.find('.suggest-text[data-id="' + $this.data('id') + '"] .text').text());
            _.$suggestTextfield.trigger('change');
        }
        if (!_.inlineModulesList.includes(_.field)) {
            _.$bootbox.modal('hide');
        }
    }
    _.addSuggestText = function(data, quotes) {
        let html = '';
        if (data['list']) {
            for (const [key, text] of Object.entries(data['list'])) {
                html += '<div class="suggest-text" data-id="' + key + '" data-category="' + text['category'] + '" style="direction: ' + (_.IsRTL(_.lang) ? 'rtl' : 'ltr') + ';">';
                html += '<div class="text">' + text['text'] + '</div>';
                html += '<div class="btn btn-primary suggest-apply-btn" data-id="' + key + '">' + _.translations.apply + '</div>';
                html += '</div>';
            }
        } else if (data['textPairsList']) {
            for (const [key, text] of Object.entries(data['textPairsList'])) {
                html += '<div class="suggest-text" data-id="' + key + '" data-category="' + text['category'] + '" style="direction: ' + (_.IsRTL(_.lang) ? 'rtl' : 'ltr') + ';">';
                html += '<div class="suggest-text-pairs">';
                html += '<div class="text1">' + text['text1'] + '</div>';
                html += '<div class="text2">' + text['text2'] + '</div>';
                html += '</div>';
                html += '<div class="btn btn-primary suggest-apply-btn" data-id="' + key + '">' + _.translations.apply + '</div>';
                html += '</div>';
            }
        }
        if (!_.hideQuotes) {
            for (const [key, text] of Object.entries(quotes)) {
                html += '<div class="suggest-text" data-id="' + key + '_quote" data-category="quotes" style="direction: ' + (_.IsRTL(_.lang) ? 'rtl' : 'ltr') + ';">';
                html += '<div class="text">&quot;' + text['text'] + (text['author'] ? '&quot; - ' + text['author'] : '&quot;') + '</div>';
                html += '<div class="btn btn-primary suggest-apply-btn" data-id="' + key + '_quote">' + _.translations.apply + '</div>';
                html += '</div>';
            }
        }
        return html;
    }
    _.addAiText = function(texts, startIndex) {
        let html = '';
        let designDirection = _.IsRTL(_.lang) ? 'rtl' : 'ltr';
        let applyButtonVisible = true;
        for (const [key, text] of Object.entries(texts)) {
            let itemKey = parseInt(key) + parseInt(startIndex);
            html += '<div class="suggest-text" data-id="' + itemKey + '_ai" data-category="ai" style="direction: ' + designDirection + ';">';
            if (_.field == 'headers' && (_.headerContentType == '1' || _.headerContentType == '4')) {
                html += '<div class="suggest-text-pairs">';
                html += '<div class="text"><span class="title">' + text['title'] + '</span></div>';
                html += '<div class="text"><span class="slogan">' + text['slogan'] + '</span></div>';
                html += '</div>';
            } else if (_.field == 'headers' && _.headerContentType == '2') {
                html += '<div class="suggest-text-pairs">';
                html += '<div class="text"><span class="title">' + _.translations.ai.about + '</span></div>';
                html += '<div class="text"><span class="slogan">' + Object.values(text)[0] + '</span></div>';
                html += '</div>';
            } else if (_.field == 'about' || (_.field == "headers" && _.headerContentType == '3')) {
                html += '<div class="suggest-text-pairs">';
                html += '<div class="text"><span class="title">' + _.translations.ai.about + '</span></div>';
                html += '<div class="text"><span class="slogan">' + Object.values(text)[0] + '</span></div>';
                html += '</div>';
            } else if (_.inlineModulesList.includes(_.field)) {
                applyButtonVisible = true;
                html += '<div class="suggest-text-pairs">';
                if (_.field === 'services_inline') {
                    html += `
<div class="text">
<span class="ai-text1">${text['title']}</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-short">${text['short']}</div>
<div class="ai-image hidden">${text['image_keyword']}</div>
</span>
</div>
`;
                } else if (_.field === 'testimonials_inline') {
                    html += `
<div class="text">
<span class="ai-text1">
<div class="result-wrap">
<div class="name">${text['name']}</div>
<div class="title">${text['title']}</div>
</div>
</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-content">${text['testimonial']}</div>
<div class="ai-image hidden">${text['image_keyword']}</div>
</span>
</div>
`;
                } else if (_.field === 'faq_inline') {
                    html += `
<div class="text">
<span class="ai-text1">${text['question']}</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-answer">${text['answer']}</div>
<div class="ai-image hidden"></div>
</span>
</div>
`;
                } else if (_.field === 'team_inline') {
                    html += `
<div class="text">
<span class="ai-text1">
<div class="result-wrap">
<div class="name">${text['name']}</div>
<div class="position">${text['position']}</div>
</div>
</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-content">${text['info']}</div>
<div class="ai-image hidden">${text['image_keyword']}</div>
</span>
</div>
`;
                } else if (_.field === 'menu_inline') {
                    html += `
<div class="text">
<span class="ai-text1">
<div class="result-wrap">
<div class="title">${text['title']}</div>
<div class="price">${text['price']}</div>
</div>
</span>
</div>
<div class="text">
<span class="ai-text2">
<div class="ai-content">${text['description']}</div>
<div class="ai-image hidden">${text['image_keyword']}</div>
</span>
</div>
`;
                }
                html += '</div>';
            } else {
                html += '<div class="text">' + text['text'] + '</div>';
            }
            if (false && _.inlineModulesList.includes(_.field)) {
                html += `<div class="btn btn-primary suggest-apply-ai suggest-generate-more-btn" data-id="${key}_ai">Generate</div>`;
            }
            html += `<div class="btn btn-primary suggest-apply-ai suggest-apply-btn" data-id="${key}_ai" ${applyButtonVisible ? '' : 'style="display:none;"'}>${_.translations.apply}</div>`;
            html += '</div>';
        }
        return html;
    }
    _.shuffle = function(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        $('.suggest-texts-tool').html(array);
    }
    _.filterText = function($html, keyword) {
        if (keyword == 'ai_option') {
            _.$bootbox.find('.suggest-texts-tool').hide();
            _.$bootbox.find('.suggest-ai-tool').show();
            $html.find('.suggest-texts-search').prop("disabled", true);
        } else {
            _.$bootbox.find('.suggest-texts-tool').show();
            _.$bootbox.find('.suggest-ai-tool').hide();
            $html.find('.suggest-texts-search').prop("disabled", false);
        }
        let $list = $html.find('.suggest-text');
        let search = $html.find('.suggest-texts-search').val();
        if (search) _.searchText($html, search);
        $list.each(function(index, ele) {
            const categoriesList = $(ele).data('category').split(',');
            const elementText = $(ele).find('.text').text().toLowerCase();
            if (categoriesList.includes(keyword) && search != '' && elementText.indexOf(search.toLowerCase()) > -1) {
                $(ele).css('display', '');
            } else if ((categoriesList.includes(keyword) || keyword == '') && search == '') {
                $(ele).css('display', '');
            } else if (keyword == '' && elementText.indexOf(search.toLowerCase()) > -1) {
                $(ele).css('display', '');
            } else {
                $(ele).css('display', 'none');
            }
        });
    }
    _.getAILanguages = function($html) {
        $.ajax({
            type: "POST",
            url: "/manager/suggestText/rytrLanguagesAjax.php",
            data: {
                websiteID: topWindow.websiteID,
                w: topWindow.websiteID,
            },
            success: (data) => {
                data = tryParseJSON(data);
                for (const [key, value] of Object.entries(data)) {
                    $html.find('.ai-language-select').append(`<option data-id="${value._id}">${value.slug}</option>`);
                }
            }
        });
    }
    _.getAIHtml = function() {
        let html = '';
        html += '<div class="suggest-ai-text widget-box static activate">';
        html += '<div class="widget-body">';
        html += '<div class="widget-main">';
        html += '<div class="ai-text-input-wrap">';
        html += '<div class="form-group ai-text-input">';
        html += '<label>' + _.translations.ai.nameInputLabel;
        html += ' <a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="' + _.translations.ai.nameInputTT + '"><i class="fa fa-question-circle"></i></a>';
        html += '</label>';
        html += '<input type="text" maxlength="50" class="ai-name-input form-control" placeholder="' + _.translations.ai.nameInputPH + '">';
        html += '</div>';
        html += '<div class="form-group ai-text-input">';
        html += '<label>' + _.translations.ai.aboutInputLabel;
        html += ' <a href="#" onclick="return false;" data-rel="tooltip" data-html="true" data-trigger="hover" title="' + _.translations.ai.aboutInputTT + '"><i class="fa fa-question-circle"></i></a>';
        html += '</label>';
        html += '<input type="text" maxlength="50" class="ai-about-input form-control" placeholder="' + _.translations.ai.aboutInputPH + '">';
        html += '</div>';
        html += '</div>';
        html += '<div class="ai-text-input-grid">';
        html += '<button class="btn btn-primary ai-text-generate-btn ai-input-btn" aria-label="generate">' + _.translations.ai.generate + '</button>';
        html += '<select class="form-control ai-language-select">';
        html += '</select>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    }
    _.searchText = function($html, text) {
        let noResult = 0;
        text = text.toLowerCase();
        let filter = $html.find('.suggest-text-filter').val();
        _.getData('search', text, filter);
    }
    _.showModal = function(content) {
        if (topWindow.SystemModals.sm_get('suggestTextModal')) topWindow.SystemModals.sm_remove('suggestTextModal');
        topWindow.SystemModals.sm_render({
            id: 'suggestTextModal',
            disposable: true,
            $parent: topWindow.$('body'),
            sizeClasses: 'size-s1 suggestTextModal',
            headerSettings: {
                id: 'suggestTextModalTitle',
                title: _.translations.title
            },
            bodySettings: { // body settings
                content: ''
            },
            footerSettings: { // footer settings
                isActive: false,
                buttons: []
            },
            shownCallback: (event, modal) => {
                modal.$html.find('.modal-body').append(content);
            },
            showCallback: () => {
                topWindow.$('#suggestTextModal').css('z-index', '9999');
            },
            hideCallback: function(event, modal) {
                if (_.ajaxObj && _.ajaxObj.readyState != 4) {
                    _.ajaxObj.abort();
                }
            },
        });
        topWindow.SystemModals.sm_updateProp('suggestTextModal', 'backdrop', true);
        topWindow.SystemModals.sm_get('suggestTextModal').show();
        _.$bootbox = topWindow.SystemModals.sm_get('suggestTextModal').$html;
    }
    _.createBtn = function($this) {
        let html = '<a class="suggestTextBtn btn btn-link" data-speech="on" data-speech-text="suggest text"><i class="fa-sharp fa-solid fa-wand-magic-sparkles"></i>TextAI</a>';
        let $html = $(html);
        $html.on('click', function() {
            _.lang = $this.data('suggest-lang');
            _.$tool = $this.data('suggest-tool');
            _.$suggestTextfield = $this.find('.suggestTextfield');
            _.field = _.$suggestTextfield.data('suggest-field');
            _.hideQuotes = $this.data('hide-quotes');
            if (_.$tool == 'openAI') {
                getOpenAI();
            } else {
                _.getData('open', '', '');
            }
        });
        return $html;
    }
    _.createInlineBtn = function(settings) {
        _.$tool = settings.tool;
        _.$suggestTextfield = settings.suggestTextfield;
        _.field = settings.field;
        _.translations = settings.translations;
        _.lang = settings.lang;
        _.callback = settings.callback;
        _.textLength = settings.textLength;
        if (_.textLength >= 100 && _.textLength <= 250) {
            _.headerContentType = '2';
        } else if (_.textLength > 250) {
            _.headerContentType = '3';
        } else {
            _.headerContentType = '1';
        }
        _.openModal = 'topWindow';
        getOpenAI();
    }
    _.getFieldNameByModuleTypeNum = function(moduleTypeNUM) {
        switch (parseInt(moduleTypeNUM)) {
            case 11:
                return 'faq_inline';
                break;
            case 3:
                return 'services_inline';
                break;
            case 5:
                return 'testimonials_inline';
                break;
            case 4:
                return 'team_inline';
                break;
            case 9:
                return 'menu_inline';
                break;
        }
    }
    _.getAddItemData = function(resultObj, itemsCategory, moduleID, moduleTypeNUM) {
        let data = {
            websiteID: topWindow.websiteID,
            w: topWindow.websiteID,
            id: 0,
            moduleTypeNUM: moduleTypeNUM,
            moduleID: moduleID,
            richEditor: 1,
            ajax: 1,
            category: itemsCategory,
        }
        switch (_.getFieldNameByModuleTypeNum(moduleTypeNUM)) {
            case 'faq_inline':
                data['question'] = resultObj.mainText;
                data['answer'] = resultObj.subText;
                break;
            case 'services_inline':
                data['title'] = resultObj.title;
                data['description'] = resultObj.short;
                data['longDescriptionActive'] = 'off';
                data['pageType'] = 1;
                data['image'] = resultObj.image;
                break;
            case 'testimonials_inline':
                data['name'] = resultObj.name;
                data['title'] = resultObj.title;
                data['description'] = resultObj.content;
                data['image'] = resultObj.image;
                break;
            case 'team_inline':
                data['name'] = resultObj.name;
                data['job_position'] = resultObj.position;
                data['more_info'] = resultObj.info;
                data['image'] = resultObj.image;
                break;
            case 'menu_inline':
                data['title'] = resultObj.title;
                data['description'] = resultObj.description;
                data['price'] = resultObj.price;
                data['image'] = resultObj.image;
                break;
        }
        return data;
    }
    _.refresh = function(settings) {
        $('.suggestText').each(function(index, ele) {
            var $this = $(this);
            if ($this.find('.suggestTextBtn').length != 0) return;
            if ($this.data('suggest-custom')) {
                $($this.data('suggest-custom')).append(_.createBtn($this));
                $($this.data('suggest-custom')).css('display', 'flex');
                $($this.data('suggest-custom')).css('place-content', 'space-between');
                $('.suggestTextBtn').css('padding-inline', '12px');
            } else {
                $this.append(_.createBtn($this));
            }
        });
    };
    return _;
}(); // Run when the page ready (before images and other resource)
jQuery(function($) {
    OpenModuleManagment();
});

function OpenModuleManagment() {
    $(document).on('s123.page.ready.wizard_preview_manage_helpers', function(event) {
        if (!IsWizard()) return;
        var modulesLimitedToOne = [112, 123, 169];
        (function() {
            (function() {
                var floating_button_header_selector = $('#mainNav').is('ul') ? '#header .header-container' : '#mainNav';
                if ($('#layoutNUM').val() == '21') {
                    var buttons = [{
                        text: translations.editHeader,
                        click: function(event) {
                            expandWizardHomepage('designTab', '#collapseHeaderOptions');
                        }
                    }, {
                        text: translations.editLogo,
                        click: function(event) {
                            expandWizardHomepage('settingsTab', '#homepageCollapse1');
                        }
                    }];
                    if (topWindow.abTestTXT != 'siteEditor_b') {
                        buttons.push({
                            text: translations.editStructure,
                            click: function(event) {
                                expandWizardHomepage('designTab', '#moreDesignOptions2');
                            }
                        });
                    }
                } else {
                    var buttons = [{
                        text: translations.editHeader,
                        click: function(event) {
                            expandWizardHomepage('designTab', '#collapseHeaderOptions');
                        }
                    }];
                    if (topWindow.abTestTXT != 'siteEditor_b') {
                        buttons.push({
                            text: translations.editStructure,
                            click: function(event) {
                                expandWizardHomepage('designTab', '#moreDesignOptions2');
                            }
                        });
                    }
                }
                if (!topWindow.IsLandingPage()) {
                    buttons.push({
                        text: topWindow.abTest_v1 = translations.pages,
                        click: function(event) {
                            topWindow.Wizard.Tabs.pages.t.trigger('click');
                        }
                    });
                }
                var lastItem = buttons[0];
                buttons[0] = buttons[buttons.length - 1];
                buttons[buttons.length - 1] = lastItem;
                addFloatingMenu({
                    type: 'menuButtons',
                    $element: $(floating_button_header_selector),
                    buttons: buttons
                });
                addFloatingMenu({
                    type: 'footerButtons',
                    $element: $('.global_footer'),
                    buttons: [{
                        text: translations.editFooter,
                        click: function(event) {
                            expandWizardHomepage('designTab', '#collapseFooterLayout');
                        }
                    }]
                });
            })();
        })();
        (function() {
            if ($('#layoutNUM').val() == '21') {
                $(document).off('centerLogo19.added').on('centerLogo19.added', function(event) {
                    $('#centerLogo19 a')
                        .off('click.showWizardLogoTab')
                        .on('click.showWizardLogoTab', function(event) {
                            expandWizardHomepage('settingsTab', '#homepageCollapse1');
                            topWindow.$('#name').select();
                        });
                });
                return;
            }
            var floating_button_header_selector = $('#mainNav').is('ul') ? '#header .header-column-logo' : '#mainNav .navbar-header';
            addFloatingMenu({
                type: 'websiteLogo',
                $element: $(floating_button_header_selector),
                buttons: [{
                    text: translations.editLogo,
                    click: function(event) {
                        expandWizardHomepage('settingsTab', '#homepageCollapse1');
                        topWindow.$('#name').select();
                    }
                }]
            });
            $('#mainNav .logo_name')
                .add('#mainNav .s123-site-logo')
                .add('#header .header-logo .s123-site-logo')
                .add('#header .logo_name')
                .each(function() {
                    var $logo = $(this);
                    $logo.off('click.showWizardLogoTab').on('click.showWizardLogoTab', function(event) {
                        expandWizardHomepage('settingsTab', '#homepageCollapse1');
                        topWindow.$('#name').select();
                    });
                    OutlineHandler.register($logo);
                });
        })();
        (function() {
            addFloatingMenu({
                type: 'websiteLogo',
                $element: $('#mainNavMobile .navbar-header'),
                buttons: [{
                    text: translations.editLogo,
                    click: function(event) {
                        expandWizardHomepage('settingsTab', '#homepageCollapse1');
                    }
                }]
            });
            OutlineHandler.register($('#mainNavMobile .logo_name, #mainNavMobile .s123-site-logo'));
        })();
        (function() {
            $('.header-phone-wrapper')
                .add('.header-address-wrapper')
                .add('.header-social-wrapper')
                .add('.header-email-wrapper')
                .add('.header-search-wrapper')
                .add('.website-languages-menu')
                .add('.header-cart-wrapper')
                .add('.header-client-zone-wrapper')
                .add('.action-button-wrapper')
                .each(function() {
                    var $this = $(this);
                    if (!$this.hasClass('action-button-wrapper') && !$this.hasClass('header-client-zone-wrapper')) {
                        OutlineHandler.register($this);
                    }
                    $this.off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                        let boxID = '';
                        let tabID = 'designTab';
                        let accordionID = '#collapseHeaderOptions';
                        if ($this.hasClass('header-phone-wrapper')) {
                            boxID = 'headerPhoneBox';
                        } else if ($this.hasClass('header-address-wrapper')) {
                            boxID = 'headerLocationBox';
                        } else if ($this.hasClass('header-social-wrapper')) {
                            boxID = 'headerSocialBox';
                        } else if ($this.hasClass('header-email-wrapper')) {
                            boxID = 'headerEmailBox';
                        } else if ($this.hasClass('header-search-wrapper')) {
                            boxID = 'headerSearchBox';
                        } else if ($this.hasClass('header-cart-wrapper')) {
                            boxID = 'headerCartBox';
                        } else if ($this.hasClass('header-client-zone-wrapper')) {
                            boxID = 'headerClientZoneBox';
                        } else if ($this.hasClass('action-button-wrapper')) {
                            boxID = 'headerButtonsBox';
                        } else if ($this.hasClass('website-languages-menu')) {
                            accordionID = '#moreLanguages';
                            tabID = 'settingsTab';
                        }
                        expandWizardHomepage(tabID, accordionID, boxID);
                    });
                });
        })();
        (function() {
            $('.s123-module').each(function() {
                var $section = $(this);
                if ($section.hasClass('s123-page-data')) return;
                if ($section.hasClass('s123-module-rich-page')) return;
                var $title = $section.find('.s123-page-header');
                var $slogan = $section.find('.s123-page-slogan');
                var $categoriesContainer = $section.find('.items-categories-container[data-category-layouts="true"], .s123-categories .filter[data-category-layouts="true"]');
                $categoriesContainer.each(function() {
                    var $this = $(this);
                    OutlineHandler.register($this);
                    var s123FloatingBar = new S123FloatingBar({
                        $el: $this,
                        template: `<div class="previewManageButton" data-header-style="${topWindow.$('#page_header_style').val()}"><a href="#" class="p-m-b-design open-category-styles">${S123.s123IconToSvg.getHtml('cog','','')}</a></div>`,
                        placement: 'bottom',
                        type: 'moduleCategoryLayouts',
                        showCallback: function(instance) {
                            instance.$html.find('.open-category-styles').tooltip({
                                title: translations.S123FloatingBar.categorySettings,
                                container: 'body',
                                placement: 'auto',
                                delay: {
                                    show: 2000,
                                    hide: 0
                                }
                            });
                            instance.$html.find('.open-category-styles').on('click', function(event) {
                                event.preventDefault();
                                instance.$html.find('.open-category-styles').tooltip('destroy');
                                var $buttons = topWindow.Wizard.tabEffectHandler.designTabHandler.$tabContent.find('#WebsiteThemeAdvancedOptionsBOX .s123-collapse-settings[data-box-id="categoryTabStyle"]');
                                expandWizardHomepage('designTab', '#websiteBackground');
                                topWindow.Wizard.tabEffectHandler.AnimationManager.designTab.show(topWindow.$('#showAdvancedStructure'));
                                topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.hide();
                                topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.showTab('WebsiteThemeAdvancedOptionsBOX');
                                $buttons.removeClass('hidden');
                                $buttons.siblings().hide();
                                $buttons.addClass('static');
                                topWindow.$(topWindow.document).one('animation_manager.hide', function() {
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.show();
                                    $buttons.addClass('hidden');
                                    $buttons.siblings().show();
                                    $buttons.removeClass('static');
                                });
                            });
                        }
                    });
                });
                if (multiLanCode != '') {
                    $title.attr('data-original-title', '');
                    $title.tooltip({
                        title: translations.s123Editible.featureDisabledTooltip,
                        container: 'body',
                        placement: 'auto'
                    });
                    $slogan.attr('data-original-title', '');
                    $slogan.tooltip({
                        title: translations.s123Editible.featureDisabledTooltip,
                        container: 'body',
                        placement: 'auto'
                    });
                    return;
                }
                var moduleID = $section.data('module-id');
                var moduleTypeNUM = $section.data('module-type-num');
                var $page = topWindow.Wizard.Pages.getPage(moduleID);
                if ($section.find('.page_header_style_14, .page_header_style_9, .page_header_style_10, .page_header_style_13').length > 0) {
                    $title = $title.find('span');
                    $title.css({
                        display: 'block'
                    });
                }
                $title.each(function() {
                    var $this = $(this);
                    if ($section.data('module-id') == '112') {
                        var editableTitle = new S123EditableElement({
                            $el: $this,
                            disableNewLine: true,
                            maxlength: parseInt($page.find('input.module_name').attr('maxlength')),
                            eventCallback: function(eventType) {
                                if (eventType == 'focus') {
                                    $this.data('name', $this.text());
                                } else if (eventType == 'blur') {
                                    if ($this.text().length == 0) {
                                        $this.text($this.data('name'));
                                    }
                                }
                                if (eventType == 'input') {
                                    clearTimeout($this.inputFinished);
                                    $this.inputFinished = setTimeout(function() {
                                        topWindow.Wizard.Save.inProgress();
                                        $.ajax({
                                            type: "POST",
                                            url: "/versions/" + $(versionNUM).val() + "/wizard/modules/eCommerce/tabs/homepage/updateSectionTitleAjax.php",
                                            data: {
                                                w: $(websiteID).val(),
                                                moduleTypeNUM: $section.data('module-type-num'),
                                                uniqueID: $this.get(0).id.replace(/(section-112-)(.*?)(-title)/, '$2'),
                                                title: $this.text()
                                            },
                                            success: function(data) {
                                                data = tryParseJSON(data);
                                                if (data.success) {
                                                    topWindow.Wizard.Save.success();
                                                } else {
                                                    topWindow.Wizard.Save.error();
                                                }
                                            },
                                            error: function() {
                                                topWindow.Wizard.Save.error();
                                            }
                                        });
                                    }, 800);
                                }
                            }
                        });
                    } else {
                        var editableTitle = new S123EditableElement({
                            $el: $this,
                            disableNewLine: true,
                            maxlength: parseInt($page.find('input.module_name').attr('maxlength')),
                            eventCallback: function(eventType) {
                                if (eventType == 'blur') {
                                    if ($this.text().trim().length == 0) {
                                        $this.text($this.data('name'));
                                    }
                                    if ($this.data('name') != $this.text()) {
                                        clearTimeout($this.inputFinished);
                                        saveModuleName();
                                    }
                                } else if (eventType == 'focus') {
                                    $this.data('name', $this.text());
                                } else if (eventType == 'input') {
                                    if ($this.data('name') != $this.text()) {
                                        if ($page.data('sync-titles')) {
                                            $page.find('input.module_name').val($this.text());
                                            topWindow.updateModuleNameInBreadCrumbs(moduleID);
                                            topWindow.updateModuleNameInMenu(moduleID);
                                        }
                                        clearTimeout($this.inputFinished);
                                        $this.inputFinished = setTimeout(function() {
                                            saveModuleName();
                                        }, 800);
                                    }
                                }

                                function saveModuleName() {
                                    var isNewTitleFlow = true;
                                    var isSyncTitles = true;
                                    var settings = topWindow.GetModuleSetting(moduleID, 'settings');
                                    settings = tryParseJSON(settings);
                                    if (!settings) {
                                        settings = {};
                                    }
                                    if (!settings.pageHeaderSettings) {
                                        settings.pageHeaderSettings = new PageHeaderSettings();
                                        isNewTitleFlow = false;
                                    }
                                    if (isNewTitleFlow) {
                                        isSyncTitles = settings.pageHeaderSettings.pageTitle == $page.find('input.module_name').val();
                                        $page.data('sync-titles', isSyncTitles);
                                    }
                                    if (isSyncTitles) {
                                        $page.find('input.module_name').val($this.text()).trigger('input', true);
                                    } else {
                                        settings.pageHeaderSettings.pageTitle = $this.text();
                                        topWindow.EditModuleSetting(moduleID, 'settings', JSON.stringify(settings));
                                        topWindow.BuildToolJSON();
                                        topWindow.AutoSaveWizard(false, true);
                                    }
                                    $this.data('name', $this.text());
                                }
                            }
                        });
                    }
                    OutlineHandler.register($this);
                    var s123FloatingBar = new S123FloatingBar({
                        $el: $this,
                        template: '<div class="previewManageButton" data-header-style="' + topWindow.$('#page_header_style').val() + '"><a href="#" class="p-m-b-design module-header-style">' + S123.escapeHtml(translations.S123FloatingBar.moduleTitleStyle) + '</a><a href="#" class="add-slogan dummy hidden"></a></div>',
                        placement: 'bottom',
                        type: 'moduleTitle',
                        showCallback: function(instance) {
                            instance.$html.find('.module-header-style').tooltip({
                                title: translations.S123FloatingBar.moduleTitleStyleTolltip,
                                container: 'body',
                                placement: 'auto',
                                delay: {
                                    show: 2000,
                                    hide: 0
                                }
                            });
                            instance.$html.find('.module-header-style').on('click', function(event) {
                                topWindow.Wizard.websiteHeaders.loadCss({
                                    'modules_color_section_main': getComputedStyle(document.documentElement).getPropertyValue('--modules_color_section_main'),
                                    'modules_color_section_btn_text': getComputedStyle(document.documentElement).getPropertyValue('--modules_color_section_btn_text'),
                                    'modules_color': getComputedStyle(document.documentElement).getPropertyValue('--modules_color'),
                                    'modules_color_text': getComputedStyle(document.documentElement).getPropertyValue('--modules_color_text'),
                                });
                                event.preventDefault();
                                var $moduleHeaderStyles = topWindow.Wizard.tabEffectHandler.designTabHandler.$tabContent.find('#moduleHeaderStyles');
                                var $moduleHeaderCustom = topWindow.Wizard.tabEffectHandler.designTabHandler.$tabContent.find('#moduleHeaderCustom');
                                expandWizardHomepage('designTab', '#websiteBackground');
                                topWindow.Wizard.tabEffectHandler.AnimationManager.designTab.show(topWindow.$('#showAdvancedStructure'));
                                topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.showTab('moduleHeaderStyles');
                                topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.children().hide();
                                topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.find('[data-tab-related="moduleHeaderStyles"]').show();
                                $moduleHeaderCustom.addClass('static');
                                $moduleHeaderStyles.attr('data-section-id', $section.data('module-id'));
                                if (IsRichPage()) {
                                    var $wizardPage = topWindow.Wizard.Pages.getPage($section.data('module-id'));
                                    $moduleHeaderCustom.attr('data-module-id', topWindow.RichPage.getParent($wizardPage).data('moduleid'));
                                    $moduleHeaderCustom.attr('data-module-type-num', topWindow.RichPage.getParent($wizardPage).data('moduletypenum'));
                                } else {
                                    $moduleHeaderCustom.attr('data-module-id', $section.data('module-id'));
                                    $moduleHeaderCustom.attr('data-module-type-num', $section.data('module-type-num'));
                                }
                                topWindow.$(topWindow.document).one('animation_manager.hide', function() {
                                    $moduleHeaderCustom.removeClass('static');
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.showTab('showWebsiteStructuresTab');
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.children().show();
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.find('[data-tab-related="moduleHeaderStyles"]').hide();
                                });
                            });
                            if ($section.data('module-id') != '112') {
                                if ($slogan.text().length == 0) {
                                    var $addSlogan = $('<a href="#" class="p-m-b-design add-slogan">' + S123.escapeHtml(translations.S123FloatingBar.addSlogan) + '</a>');
                                    $addSlogan.tooltip({
                                        title: translations.S123FloatingBar.addSloganTolltip,
                                        container: 'body',
                                        placement: 'auto',
                                        delay: {
                                            show: 2000,
                                            hide: 0
                                        }
                                    });
                                    instance.$html.find('.add-slogan.dummy').replaceWith($addSlogan);
                                    instance.$html.find('.add-slogan').on('click', function(event) {
                                        event.preventDefault();
                                        $slogan.html(S123.escapeHtml(translations.S123FloatingBar.newSlogan));
                                        convertSloganToEditable($slogan, moduleTypeNUM, moduleID);
                                        placeCaretAtEnd($slogan.get(0));
                                        $addSlogan.remove();
                                        s123FloatingBar.setPosition();
                                        topWindow.savePageSlogan(moduleTypeNUM, moduleID, decodeEntities($slogan.html()), false);
                                    });
                                }
                                (function() {
                                    if (IsRichPage()) return;
                                    instance.$html.find('.previewManageButton').append('<a class="p-m-b-design icon-only-tooltip module-custom-settings" data-action="moduleCustomSettings" title="' + S123.escapeHtml(translations.S123FloatingBar.customModuleTitles) + '"><span>' + S123.s123IconToSvg.getHtml('cog', '', '') + '</span></a>');
                                    var content = '';
                                    content += '<div class="p-h-settings">';
                                    content += '<form>';
                                    content += '<div class="form-group">';
                                    content += '<div class="module-menu-title">';
                                    content += '<label for="title">' + S123.escapeHtml(translations.pageHeaderSettings.menuTitle) + '</label>';
                                    content += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title="' + S123.escapeHtml(translations.pageHeaderSettings.menuTitleTooltip) + '">';
                                    content += '<i class="fa fa-question-circle"></i>';
                                    content += '</a>';
                                    content += '<input name="title" id="title" class="form-control" type="text" placeholder="' + S123.escapeHtml(translations.pageHeaderSettings.menuTitlePlaceholder) + '" value="">';
                                    content += '</div>';
                                    content += '</div>';
                                    content += '<div class="form-group">';
                                    content += '<div class="module-page-title">';
                                    content += '<label for="pageTitle">' + S123.escapeHtml(translations.pageHeaderSettings.pageTitle) + '</label>';
                                    content += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title="' + S123.escapeHtml(translations.pageHeaderSettings.pageTitleTooltip) + '">';
                                    content += '<i class="fa fa-question-circle"></i>';
                                    content += '</a>';
                                    content += '<input name="pageTitle" id="pageTitle" class="form-control" type="text" placeholder="' + S123.escapeHtml(translations.pageHeaderSettings.pageTitlePlaceholder) + '" value="">';
                                    content += '</div>';
                                    content += '</div>';
                                    content += '<div class="form-group">';
                                    content += '<div class="module-slogan">';
                                    content += '<label for="slogan">' + S123.escapeHtml(translations.pageHeaderSettings.slogan) + '</label>';
                                    content += '&nbsp;<a href="#" onclick="return false;" data-rel="tooltip" data-trigger="hover" title="' + S123.escapeHtml(translations.pageHeaderSettings.sloganTooltip) + '">';
                                    content += '<i class="fa fa-question-circle"></i>';
                                    content += '</a>';
                                    content += '<textarea name="slogan" id="slogan" class="form-control" type="text" placeholder="' + S123.escapeHtml(translations.pageHeaderSettings.sloganPlaceholder) + '"></textarea>';
                                    content += '</div>';
                                    content += '</div>';
                                    content += '<div class="form-group">';
                                    content += '<button id="save" type="submit" class="btn btn-sm btn-primary">' + S123.escapeHtml(translations.save) + '</button>';
                                    content += '</div>';
                                    content += '</form>';
                                    content += '</div>';
                                    var $content = $(content);
                                    var $form = $content.find('form');
                                    var s123PopOver = new S123PopOver({
                                        $el: instance.$html.find('.module-custom-settings'),
                                        customClass: 'page-header-settings layout-customizer',
                                        popoverSettings: {
                                            content: $content,
                                            placement: 'auto top'
                                        },
                                        showCallback: function() {
                                            var settings = topWindow.GetModuleSetting(moduleID, 'settings');
                                            var title = topWindow.GetModuleSetting(moduleID, 'title');
                                            var slogan = topWindow.GetModuleSetting(moduleID, 'slogan');
                                            settings = tryParseJSON(settings);
                                            var isNewTitleFlow = true;
                                            if (!settings) {
                                                settings = {};
                                            }
                                            if (!settings.pageHeaderSettings) {
                                                isNewTitleFlow = false;
                                                settings.pageHeaderSettings = new PageHeaderSettings({
                                                    pageTitle: title
                                                });
                                            }
                                            s123PopOver.popoverSettings.content.find('#title').val(title);
                                            s123PopOver.popoverSettings.content.find('#pageTitle').val(settings.pageHeaderSettings.pageTitle);
                                            s123PopOver.popoverSettings.content.find('#slogan').val(slogan);
                                            s123PopOver.popoverSettings.content.find('[data-rel=tooltip]').tooltip({
                                                container: 'body',
                                                placement: 'auto'
                                            });
                                            OutlineHandler.focus($this);
                                            s123FloatingBar.removeOnMouseOut = false;
                                            $form.find('#title')
                                                .add($form.find('#pageTitle'))
                                                .on('focus', function() {
                                                    $(this).data('name', $(this).val());
                                                })
                                                .on('blur', function() {
                                                    var $this = $(this);
                                                    if ($this.val().length == 0) {
                                                        $this.val($this.data('name'));
                                                    }
                                                });
                                            $form.off('submit').on('submit', function(event) {
                                                event.preventDefault();
                                                var savePageTitle = settings.pageHeaderSettings.pageTitle != $form.find('#pageTitle').val();
                                                var savePageMenuTitle = title != $form.find('#title').val();
                                                if ($form.find('#title').val() != $form.find('#pageTitle').val()) {
                                                    if (!isNewTitleFlow) {
                                                        savePageTitle = true;
                                                    }
                                                    isNewTitleFlow = true;
                                                }
                                                $page.data('sync-titles', $form.find('#title').val() == $form.find('#pageTitle').val());
                                                $page.data('is-new-title-flow', isNewTitleFlow);
                                                if (savePageTitle) {
                                                    settings.pageHeaderSettings.pageTitle = $form.find('#pageTitle').val();
                                                    topWindow.EditModuleSetting(moduleID, 'settings', JSON.stringify(settings));
                                                    $this.text($form.find('#pageTitle').val());
                                                    topWindow.BuildToolJSON();
                                                    topWindow.AutoSaveWizard(false, true);
                                                }
                                                if (savePageMenuTitle) {
                                                    $page.find('input.module_name').val($form.find('#title').val()).trigger('input', true);
                                                }
                                                if ($form.find('#slogan').val() != slogan) {
                                                    if ($form.find('#slogan').val().length > 0) {
                                                        $slogan.text($form.find('#slogan').val());
                                                        convertSloganToEditable($slogan, moduleTypeNUM, moduleID);
                                                        topWindow.savePageSlogan(moduleTypeNUM, moduleID, $form.find('#slogan').val(), false);
                                                    } else {
                                                        $(document).trigger('removeSlogan.' + moduleID);
                                                    }
                                                }
                                                s123PopOver.hide();
                                            });
                                        },
                                        hideCallback: function() {
                                            OutlineHandler.blur($this);
                                            s123FloatingBar.removeOnMouseOut = true;
                                            s123FloatingBar.hide();
                                        }
                                    });
                                })();
                            } else {
                                instance.$html.find('.module-custom-settings').remove();
                            }
                        }
                    });

                    function PageHeaderSettings(data) {
                        var def = {
                            pageTitle: ''
                        };
                        data = topWindow.objectAssign(def, data);
                        return data;
                    }
                });
                if ($slogan.text().length > 0) {
                    convertSloganToEditable($slogan, moduleTypeNUM, moduleID);
                }
                if (topWindow.modulesArr[moduleTypeNUM].one_item_module == 1) return;
                if (moduleTypeNUM == 112 || IsEcommerceHighlight(moduleTypeNUM)) return;
                if (moduleTypeNUM == 123) return;
                if ($section.find('.preview-highlighter').length > 0) return;
                if (moduleTypeNUM == 1 && $section.find('.g-i').length > 0) return;
                if (moduleTypeNUM == 20 && $section.find('#music-player-songs-' + $section.data('module-id')).length > 0) return;
                if ($section.find('.section-add-item-btn').length > 0) return;
                $section.append($('<div class="previewManageButton section-add-item-btn"><a class="p-m-b-design" href="#"><i class="fa fa-plus"></i>&nbsp;' + S123.escapeHtml(translations.sectionAddItemBtn.addItem) + '</a></div>'));
                var $button = $section.find('.section-add-item-btn .p-m-b-design');
                $button.tooltip({
                    title: translations.sectionAddItemBtn.addItemTooltip,
                    container: 'body',
                    placement: 'top'
                });
                $button.on('click', function(event) {
                    event.preventDefault();
                    var action = 'editItem';
                    if (moduleTypeNUM == 1 || moduleTypeNUM == 14) {
                        action = 'itemsPage';
                    }
                    openItemEditModal(moduleID, moduleTypeNUM, '', null, action);
                });
            });
            HomepageAndHeaderEditor.init();
            var OldHomepageAndOldPromo = function($el) {
                var _ = {
                    homepageSelectors: ['#home_siteSlogan', '#home_siteSlogan_2', '#home_SecondSiteSlogan'],
                    promoSelectors: ['.promoText1', '.promoText2', '.promoText3']
                };
                _.init = function() {
                    if (topWindow.abTestTXT == 'siteEditor_b') {
                        var $editableElements = $(_.promoSelectors.join(','));
                    } else {
                        var $editableElements = $(_.homepageSelectors.concat(_.promoSelectors).join(','));
                    }
                    if (multiLanCode != '') {
                        $editableElements.attr('data-original-title', '');
                        $editableElements.tooltip({
                            title: translations.s123Editible.featureDisabledTooltip,
                            container: 'body',
                            placement: 'auto'
                        });
                        return;
                    }
                    $editableElements.each(function(index, el) {
                        var $el = $(this);
                        $('.s123-tool-bar[data-rel="' + $el.get(0).id + '"]').remove();
                        if (topWindow.abTestTXT == 'siteEditor_b') {
                            var promoEditableTextHandler = new PromoEditableTextHandler({
                                $el: $el
                            });
                        } else {
                            if (_.homepageSelectors.indexOf('#' + $el.get(0).id) != -1) {
                                var homepageEditableTextHandler = new HomepageEditableTextHandler({
                                    $el: $el
                                })
                            } else {
                                var promoEditableTextHandler = new PromoEditableTextHandler({
                                    $el: $el
                                });
                            }
                        }
                        $el.off('focus.homepageAndPromoEditor.textFormatting').on('focus.homepageAndPromoEditor.textFormatting', function() {
                            var $this = $(this);
                            _.hideAllToolBars();
                            if ($this.data('s123-editable-elements').isDisabled) return false;
                            $this.data('s123-tool-bar').show();
                            $this.data('s123-tool-bar').setPosition();
                        });
                        $el.off('click.initHomepageEditor').on('click.initHomepageEditor', function(event) {
                            var $this = $(this);
                            if ($this.data('s123-editable-elements').isDisabled) return false;
                            if (!$this.data('s123-tool-bar').$toolBar.hasClass('active')) {
                                _.hideAllToolBars();
                                $this.data('s123-tool-bar').show();
                            }
                            $this.data('s123-tool-bar').setPosition();
                        });
                    });
                    $(document)
                        .add($(topWindow.document))
                        .off('click.initHomepageEditor').on('click.initHomepageEditor', function(event) {
                            var $target = $(event.target);
                            if ($target.closest('[data-s123-editable-elements="true"][data-has-s123-toolbar="true"]').length > 0) return;
                            if ($target.closest('.popover').length > 0) {
                                if ($('#' + $target.closest('.popover').data('rel')).closest('.s123-tool-bar').length > 0) {
                                    return;
                                }
                            }
                            if ($target.closest('#previewScaleDevices').length > 0) return;
                            if ($target.data('tab') == 'textLayoutTab') return;
                            if ($target.data('tab') == 'textPositionsTab') return;
                            if ($target.data('tab') == 'textAnimationTab') return;
                            _.hideAllToolBars();
                        });
                    $(document).off('previewScale.deviceTypeChange.S123ToolBar').on('previewScale.deviceTypeChange.S123ToolBar', function() {
                        var id = $('.s123-tool-bar.active').data('rel');
                        if (!id) return;
                        $('#' + id).data('s123-tool-bar').setPosition();
                    });
                    $(document).off('homepageAndPromoEditor.hideToolBar').on('homepageAndPromoEditor.hideToolBar', function(event, $el) {
                        _.hideToolBar($el);
                    });
                    topWindow.$('[data-toggle=mytabs]').off('click.previewHelpers.homepageAndPromoEditor').on('click.previewHelpers.homepageAndPromoEditor', function() {
                        _.hideAllToolBars();
                    });
                    if (topWindow.abTestTXT != 'siteEditor_b' && IsHomepage() && !IsRichPage()) {
                        if (!$('#top-section').hasClass('s-m-t-b')) {
                            var homepageBtn = new SectionMainTextBtn({
                                $section: $('#top-section'),
                                $container: $('#top-section .hm-t-c'),
                                $elements: $(_.homepageSelectors.join(',')),
                                isHomepage: true
                            });
                        }
                        var homepageTextVisiblityHandler = new TextVisiblityHandler({
                            $section: $('#top-section'),
                            $elements: $(_.homepageSelectors.join(',')),
                            isHomepage: true,
                            textOrder: ['h1', 'h2', 'p']
                        });
                        $('#top-section').off('resetTextStyles').on('resetTextStyles', function(event, $el) {
                            topWindow.resetHomepageTextStyles($el);
                        });
                    }
                    $('.s123-module[data-module-type-num="1000"]').each(function() {
                        var $this = $(this);
                        if (!$this.hasClass('s-m-t-b')) {
                            var promoBtn = new SectionMainTextBtn({
                                $section: $this,
                                $container: $this.find('.p-t-c'),
                                $elements: $this.find(_.promoSelectors.join(',')),
                                isHomepage: false
                            });
                        }
                        var promoTextVisiblityHandler = new TextVisiblityHandler({
                            $section: $this,
                            $elements: $this.find(_.promoSelectors.join(',')),
                            isHomepage: false,
                            textOrder: ['h3', 'h4', 'p']
                        });
                        $this.off('resetTextStyles').on('resetTextStyles', function(event, $el) {
                            $el.css({
                                fontSize: topWindow.getTextDefaultStyles('fontSize') + 'px',
                                letterSpacing: topWindow.getTextDefaultStyles('letterSpacing') + 'px',
                                wordSpacing: topWindow.getTextDefaultStyles('wordSpacing') + 'px',
                                lineHeight: topWindow.getTextDefaultStyles('lineHeight'),
                                marginTop: topWindow.getTextDefaultStyles('marginTop') + 'px',
                                marginBottom: topWindow.getTextDefaultStyles('marginBottom') + 'px'
                            });
                        });
                    });
                    $(document).off('homepageAndPromoEditor.refreshResizable').on('homepageAndPromoEditor.refreshResizable', function(event, goalType, moduleID) {
                        if (goalType == 'homepage') {
                            $('#top-section .homepage_goal').each(function() {
                                initHomepageGoalResizable($(this));
                            });
                        } else if (goalType == 'promo') {
                            $('.s123-module[data-module-type-num="1000"][data-module-id="' + moduleID + '"] .preview-highlighter').each(function() {
                                initPromoResizable($(this));
                            });
                        }
                    });
                    $('#top-section .homepage_goal').each(function() {
                        var $goal = $(this);
                        $goal.find('.w-helper').each(function() {
                            var $wHelper = $(this);
                            var toolName = $wHelper.data('w-helper-filter') ? $wHelper.data('w-helper-filter') : '';
                            var goalSpacingButton = getHomepageGoalSpacingButton($wHelper, $goal);
                            var moreBtn = {
                                type: 'homepageMoreBtn',
                                icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>',
                                menuType: 'popover',
                                $el: $wHelper,
                                buttons: [{
                                    type: 'goalType',
                                    icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync" class="svg-inline--fa fa-sync fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"></path></svg>',
                                    text: translations.actionType,
                                    click: function(event) {
                                        event.preventDefault();
                                        topWindow.$('#homepageImageOptionsTab .hide-available-goals-tools').removeClass('hide-available-goals-tools');
                                        topWindow.$('#homepageImageOptionsTab .homepage_goal_type_box.checkboxSingleSetting').addClass('hide-available-goals-tools');
                                        expandWizardHomepage('homepageTab', '#homepageImageOptionsTab');
                                        if (toolName == 'form') topWindow.$('#homepage_goal_type_form').removeClass('showOnlyDesign showOnlySettigns');
                                    }
                                }]
                            };
                            var buttons = [{
                                text: translations.edit,
                                type: 'edit',
                                click: function(event) {
                                    var $el = $(event.target);
                                    if ($el.closest('.promoButtons').length > 0) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }
                                    if (toolName == 'customCode_box') {
                                        topWindow.$('#customCodeManageButton').trigger('click');
                                    } else {
                                        openHomepageGoalTab($el.closest('.w-helper'));
                                        if (toolName == 'form') {
                                            topWindow.$('#homepage_goal_type_form').removeClass('showOnlyDesign');
                                            topWindow.$('#homepage_goal_type_form').addClass('showOnlySettigns');
                                        }
                                    }
                                }
                            }];
                            if (toolName == 'buttons') {
                                moreBtn.buttons.push({
                                    icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" class="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>',
                                    text: translations.settings,
                                    click: function(event) {
                                        var $buttons = topWindow.Wizard.tabEffectHandler.designTabHandler.$tabContent.find('#WebsiteThemeAdvancedOptionsBOX .s123-collapse-settings[data-box-id="actionButtonStyle"]');
                                        expandWizardHomepage('designTab', '#websiteBackground');
                                        topWindow.Wizard.tabEffectHandler.AnimationManager.designTab.show(topWindow.$('#showAdvancedStructure'));
                                        topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.hide();
                                        topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.showTab('WebsiteThemeAdvancedOptionsBOX');
                                        $buttons.removeClass('hidden');
                                        $buttons.siblings().hide();
                                        $buttons.addClass('static');
                                        topWindow.$(topWindow.document).one('animation_manager.hide', function() {
                                            topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.show();
                                            $buttons.addClass('hidden');
                                            $buttons.siblings().show();
                                            $buttons.removeClass('static');
                                        });
                                    }
                                });
                            }
                            if (toolName == 'image') {
                                $wHelper.off('click.w_helper').on('click.w_helper', function(event) {
                                    event.preventDefault();
                                    openHomepageGoalTab($wHelper);
                                });
                                var editorBtn = {
                                    type: 'goalImageEditor',
                                    icon: '<i class="fa fa-picture-o" aria-hidden="true"></i>',
                                    addCallback: function($btn) {
                                        topWindow.$('#' + topWindow.uploadFiles['home_custom_image'].id)
                                            .off('change.hompageInlineImageEditorStatus')
                                            .on('change.hompageInlineImageEditorStatus', function() {
                                                setHompageInlineImageEditorStatus($btn);
                                            });
                                        setHompageInlineImageEditorStatus($btn);

                                        function setHompageInlineImageEditorStatus($btn) {
                                            if (topWindow.uploadFiles['home_custom_image'].btns.imageEditor.css('display') !== 'none') {
                                                $btn.show();
                                            } else {
                                                $btn.hide();
                                            }
                                        }
                                    },
                                    click: function(event) {
                                        event.preventDefault();
                                        topWindow.uploadFiles['home_custom_image'].btns.imageEditor.trigger('click');
                                    }
                                };
                                buttons.push(editorBtn);
                            }
                            if (toolName == 'form') {
                                var editorBtn = {
                                    type: 'goalStyle',
                                    icon: '<i class="fa fa-paint-brush" aria-hidden="true"></i>',
                                    click: function(event) {
                                        var $el = $(event.target);
                                        openHomepageGoalTab($el.closest('.w-helper'));
                                        topWindow.$('#homepage_goal_type_form').addClass('showOnlyDesign');
                                        topWindow.$('#homepage_goal_type_form').removeClass('showOnlySettigns');
                                    }
                                };
                                buttons.push(editorBtn);
                            }
                            if (goalSpacingButton) {
                                buttons.push(goalSpacingButton);
                            }
                            moreBtn.buttons.push({
                                type: 'goalPosition',
                                icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dot-circle" class="svg-inline--fa fa-dot-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path></svg>',
                                text: translations.position,
                                addCallback: function($btn) {
                                    var $content = $('<div class="form-group"></div>');
                                    var s123PopOver = new S123PopOver({
                                        $el: $btn,
                                        popoverSettings: {
                                            content: $content,
                                            placement: 'auto bottom'
                                        },
                                        showCallback: function() {
                                            $btn.closest('.p-m-b-highlight').addClass('p-m-b-highlight-focused');
                                            $content.empty();
                                            var $select = $goal.hasClass('mainGoal') ? topWindow.$('#homepage_goal_place') : topWindow.$('#homepage_second_goal_place');
                                            var html = '';
                                            html += '<label>' + S123.escapeHtml(translations.s123ToolBar.goalPosition) + '</label>';
                                            html += '<div class="goal-position-container">';
                                            html += '<div class="goal-position">';
                                            html += '<div class="goal-box dummy"></div>';
                                            html += '<div class="goal-box" data-value="top">';
                                            html += '<span>';
                                            html += '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>';
                                            html += '</span>';
                                            html += '</div>';
                                            html += '<div class="goal-box dummy"></div>';
                                            html += '<div class="goal-box" data-value="' + getSideValue('left') + '">';
                                            html += '<span>';
                                            html += '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>';
                                            html += '</span>';
                                            html += '</div>';
                                            html += '<div class="goal-box dummy"></div>';
                                            html += '<div class="goal-box" data-value="' + getSideValue('right') + '">';
                                            html += '<span>';
                                            html += '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>';
                                            html += '</span>';
                                            html += '</div>';
                                            html += '<div class="goal-box dummy"></div>';
                                            html += '<div class="goal-box" data-value="bottom">';
                                            html += '<span>';
                                            html += '<i class="fa fa-long-arrow-down" aria-hidden="true"></i>';
                                            html += '</span>';
                                            html += '</div>';
                                            html += '<div class="goal-box dummy"></div>';
                                            html += '</div>';
                                            html += '</div>';
                                            var $html = $(html);
                                            var currentPosition = $select.val();
                                            $select.children().each(function(index, option) {
                                                var $option = $(option);
                                                var $goalBox = $html.find('.goal-box[data-value="' + $option.val() + '"]');
                                                $goalBox.addClass('available');
                                                if (currentPosition == $option.val()) {
                                                    $goalBox.addClass('active');
                                                }
                                            });
                                            $html.find('.goal-box:not(.dummy):not(.available)').each(function(index, el) {
                                                $(this).addClass('disabled');
                                                $(this).tooltip({
                                                    title: translations.s123ToolBar.goalPositionDisabledTooltip,
                                                    template: '<div class="tooltip s123-popover-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                                                    container: 'body',
                                                    placement: 'auto'
                                                });
                                            });
                                            $html.find('.goal-box').off('click').on('click', function(event) {
                                                var $this = $(this);
                                                if (!$this.data('value')) return false;
                                                if ($this.hasClass('active')) return;
                                                if ($this.hasClass('disabled')) return;
                                                $(document).trigger('S123PopOver.hide');
                                                if ($goal.hasClass('mainGoal')) {
                                                    $select.val($this.data('value')).trigger('change');
                                                } else {
                                                    $select.val($this.data('value')).trigger('change');
                                                }
                                                if ($goal.find('a[data-type="homepageMoreBtn"]').data('s123-p')) $goal.find('a[data-type="homepageMoreBtn"]').data('s123-p').hide();
                                            });
                                            $content.append($html);

                                            function getSideValue(defaultSideValue) {
                                                if (topWindow.$('#homepage_layout_kind').val() == '2' || topWindow.$('#homepage_layout_kind').val() == '3') {
                                                    if (defaultSideValue == 'right' && $select.val() != 'side') {
                                                        return 'side';
                                                    }
                                                }
                                                return defaultSideValue;
                                            }
                                        },
                                        hideCallback: function() {
                                            $btn.closest('.p-m-b-highlight').removeClass('p-m-b-highlight-focused');
                                        }
                                    });
                                }
                            });
                            moreBtn.buttons.push({
                                type: 'goalRemove',
                                icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>',
                                text: translations.remove,
                                click: function(event) {
                                    var $homepageGoal = $wHelper.closest('.homepage_goal');
                                    var $mainGoal = topWindow.$('#homepage_goal_type');
                                    var $secondGoal = topWindow.$('#homepage_second_goal_type');
                                    if ($homepageGoal.hasClass('secondGoal')) {
                                        $secondGoal.val('no').trigger('change');
                                    } else if ($homepageGoal.hasClass('mainGoal')) {
                                        if ($secondGoal.val() != 'no' && $secondGoal.val() != null) {
                                            $mainGoal.val($secondGoal.val()).trigger('change');
                                        } else {
                                            $mainGoal.val('no').trigger('change');
                                        }
                                    }
                                    if (topWindow.$('#homepageImageOptionsTab').attr('data-visible') == 'true') {
                                        topWindow.$('#wizardBox .close-wizard-tab-btn').trigger('click');
                                    }
                                }
                            });
                            buttons.push(moreBtn);
                            $wHelper.find('.p-m-b-floating-menu').remove();
                            addFloatingMenu({
                                type: 'homepageGoal',
                                $element: $wHelper,
                                buttons: buttons
                            });
                            OutlineHandler.register($wHelper);
                        });
                        initHomepageGoalResizable($goal);
                    });
                    $('.s123-module[data-module-type-num="1000"] .preview-highlighter').each(function() {
                        var $goal = $(this);
                        var $section = $goal.closest('.s123-module');
                        var moduleID = $section.data('module-id');
                        var moduleTypeNUM = $section.data('module-type-num');
                        OutlineHandler.register($(this));
                        var openTool = $goal.data('open-tool') ? $goal.data('open-tool') : '';
                        var moreBtn = {
                            type: 'homepageGoal',
                            icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>',
                            buttons: [],
                            $el: $goal,
                            menuType: 'popover',
                            click: function(event) {
                                var $el = $goal.closest('.w-helper');
                                if ($el.closest('.promoButtons').length > 0) {
                                    $el.closest('.promoButtons').data('prevent-btn-action', true);
                                }
                            }
                        };
                        var buttons = [];
                        if (openTool.length > 0) {
                            buttons.push({
                                text: translations.edit,
                                click: function(event) {
                                    event.preventDefault();
                                    var $item = $(event.target).closest('.preview-highlighter');
                                    var itemUniqueID = $item.data('unique-id') ? $item.data('unique-id') : '';
                                    topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + moduleID + '"]').closest('li').data('open-tool', openTool);
                                    openItemEditModal(moduleID, moduleTypeNUM, itemUniqueID, null);
                                }
                            });
                        }
                        if (openTool == 'button-options') {
                            buttons.push({
                                icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" class="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>',
                                click: function(event) {
                                    var $el = $goal.closest('.w-helper');
                                    if ($el.closest('.promoButtons').length > 0) {
                                        event.stopPropagation();
                                    }
                                    var $buttons = topWindow.Wizard.tabEffectHandler.designTabHandler.$tabContent.find('#WebsiteThemeAdvancedOptionsBOX .s123-collapse-settings[data-box-id="actionButtonStyle"]');
                                    expandWizardHomepage('designTab', '#websiteBackground');
                                    topWindow.Wizard.tabEffectHandler.AnimationManager.designTab.show(topWindow.$('#showAdvancedStructure'));
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.hide();
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.showTab('WebsiteThemeAdvancedOptionsBOX');
                                    $buttons.removeClass('hidden');
                                    $buttons.siblings().hide();
                                    $buttons.addClass('static');
                                    topWindow.$(topWindow.document).one('animation_manager.hide', function() {
                                        topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.show();
                                        $buttons.addClass('hidden');
                                        $buttons.siblings().show();
                                        $buttons.removeClass('static');
                                    });
                                }
                            });
                        }
                        if (openTool == 'images-options') {
                            var editorBtn = {
                                type: 'goalSpacing',
                                icon: '<i class="fa fa-picture-o" aria-hidden="true"></i>',
                                addCallback: function($btn) {
                                    var src = '';
                                    if ($goal.find('video').length > 0) {
                                        src = $goal.find('video source').attr('src');
                                    } else if ($goal.find('img').length > 0) {
                                        src = $goal.find('img').attr('data-src');
                                    }
                                    if (src.length !== 0) {
                                        var extension = src.split('.').pop();
                                        if (extension === 'svg' || extension === 'mp4') {
                                            $btn.hide();
                                        } else {
                                            $btn.show();
                                        }
                                    }
                                },
                                click: function(event) {
                                    event.preventDefault();
                                    var $item = $(event.target).closest('.preview-highlighter');
                                    var itemUniqueID = $item.data('unique-id') ? $item.data('unique-id') : '';
                                    topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + moduleID + '"]').closest('li').data('open-tool', openTool);
                                    openItemEditModal(moduleID, moduleTypeNUM, itemUniqueID, function($iframe) {
                                        topWindow.uploadFiles['image-inline-show'].btns.imageEditor.trigger('click');
                                    });
                                }
                            };
                            buttons.push(editorBtn);
                        }
                        if (openTool == 'form-settings') {
                            var editorBtn = {
                                type: 'goalSpacing',
                                icon: '<i class="fa fa-paint-brush" aria-hidden="true"></i>',
                                click: function(event) {
                                    event.preventDefault();
                                    var $item = $(event.target).closest('.preview-highlighter');
                                    var itemUniqueID = $item.data('unique-id') ? $item.data('unique-id') : '';
                                    topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + moduleID + '"]').closest('li').data('open-tool', 'form-settings-styles');
                                    openItemEditModal(moduleID, moduleTypeNUM, itemUniqueID, null);
                                }
                            };
                            buttons.push(editorBtn);
                        }
                        buttons.push({
                            icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt-v" class="svg-inline--fa fa-arrows-alt-v fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"></path></svg>',
                            addCallback: function($btn) {
                                var goalType = $goal.data('type');
                                var goalsStyles = {};
                                var minValue = 0;
                                var maxValue = 200;
                                goalsStyles[goalType] = {
                                    marginTop: parseInt($goal.css('margin-top')),
                                    marginBottom: parseInt($goal.css('margin-bottom'))
                                };
                                handleActiveClassOfGoalSpacing($btn, goalsStyles[goalType].marginTop, goalsStyles[goalType].marginBottom, minValue);
                                var s123PopOverSliders = new S123PopOverSliders({
                                    $el: $btn,
                                    popoverSettings: {
                                        placement: 'auto bottom'
                                    },
                                    customClass: 'promo-goal-settings',
                                    slidersArray: [{
                                        type: 'goalTopSpacing',
                                        label: translations.promoeGoals.actionTopSpacing,
                                        tooltip: translations.promoeGoals.actionTopSpacingTolltip,
                                        design: 'twoLines',
                                        getValue: function() {
                                            return goalsStyles[goalType].marginTop;
                                        },
                                        numberKind: 1,
                                        minValue: minValue,
                                        maxValue: maxValue,
                                        callback: function(event, value, isLive) {
                                            goalsStyles[goalType].marginTop = value;
                                            handleActiveClassOfGoalSpacing($btn, goalsStyles[goalType].marginTop, goalsStyles[goalType].marginBottom, minValue);
                                            $goal.css({
                                                marginTop: goalsStyles[goalType].marginTop + 'px'
                                            });
                                            if (!isLive) {
                                                updateMultipleSettings(moduleID, moduleTypeNUM, {
                                                    goalsStyles: JSON.stringify(goalsStyles)
                                                });
                                            }
                                        }
                                    }, {
                                        type: 'goalBottomSpacing',
                                        label: translations.promoeGoals.actionBottomSpacing,
                                        tooltip: translations.promoeGoals.actionBottomSpacingTolltip,
                                        design: 'twoLines',
                                        getValue: function() {
                                            return goalsStyles[goalType].marginBottom;
                                        },
                                        numberKind: 1,
                                        minValue: minValue,
                                        maxValue: maxValue,
                                        callback: function(event, value, isLive) {
                                            goalsStyles[goalType].marginBottom = value;
                                            handleActiveClassOfGoalSpacing($btn, goalsStyles[goalType].marginTop, goalsStyles[goalType].marginBottom, minValue);
                                            $goal.css({
                                                marginBottom: goalsStyles[goalType].marginBottom + 'px'
                                            });
                                            if (!isLive) {
                                                updateMultipleSettings(moduleID, moduleTypeNUM, {
                                                    goalsStyles: JSON.stringify(goalsStyles)
                                                });
                                            }
                                        }
                                    }],
                                    showCallback: function() {
                                        OutlineHandler.focus($goal);
                                        $(document).off('click.moreBtnHelper click.promoGoalSpacingButton').on('click.promoGoalSpacingButton').on('click.promoGoalSpacingButton').on('click.promoGoalSpacingButton', function(event) {
                                            if ($(event.target).closest('.preview-highlighter').length > 0) return;
                                            if ($(event.target).closest('.s123-popover').length > 0) return;
                                            OutlineHandler.blur($goal);
                                            $(document).off('click.promoGoalSpacingButton').on('click.promoGoalSpacingButton');
                                        });
                                    }
                                });
                            }
                        });
                        moreBtn.buttons.push({
                            type: 'goalPosition',
                            icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dot-circle" class="svg-inline--fa fa-dot-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"></path></svg>',
                            text: translations.position,
                            addCallback: function($btn) {
                                var $content = $('<div class="form-group"></div>');
                                var s123PopOver = new S123PopOver({
                                    $el: $btn,
                                    popoverSettings: {
                                        content: $content,
                                        placement: 'auto bottom'
                                    },
                                    showCallback: function() {
                                        $content.empty();
                                        var twoSideDiffBack = [3, 4, 5, 6, 15, 16, 28, 29, 35, 36];
                                        var goalType = $btn.closest('.p-m-b-highlight').data('type');
                                        var html = '';
                                        html += '<label>' + S123.escapeHtml(translations.s123ToolBar.goalPosition) + '</label>';
                                        html += '<div class="goal-position-container">';
                                        html += '<div class="goal-position">';
                                        html += '<div class="goal-box dummy"></div>';
                                        html += '<div class="goal-box available" data-value="top">';
                                        html += '<span>';
                                        html += '<i class="fa fa-long-arrow-up" aria-hidden="true"></i>';
                                        html += '</span>';
                                        html += '</div>';
                                        html += '<div class="goal-box dummy"></div>';
                                        html += '<div class="goal-box available" data-value="left">';
                                        html += '<span>';
                                        html += '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>';
                                        html += '</span>';
                                        html += '</div>';
                                        html += '<div class="goal-box dummy"></div>';
                                        html += '<div class="goal-box available" data-value="right">';
                                        html += '<span>';
                                        html += '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>';
                                        html += '</span>';
                                        html += '</div>';
                                        html += '<div class="goal-box dummy"></div>';
                                        html += '<div class="goal-box available" data-value="bottom">';
                                        html += '<span>';
                                        html += '<i class="fa fa-long-arrow-down" aria-hidden="true"></i>';
                                        html += '</span>';
                                        html += '</div>';
                                        html += '<div class="goal-box dummy"></div>';
                                        html += '</div>';
                                        html += '</div>';
                                        var $html = $(html);
                                        var currentPosition = '';
                                        if (twoSideDiffBack.includes($section.data('tool-style'))) {
                                            $html.find('.goal-box[data-value="right"]').removeClass('available');
                                            $html.find('.goal-box[data-value="left"]').removeClass('available');
                                        }
                                        if (['buttons', 'mailingSubscribeForm', 'searchButton', 'socialButtons'].includes(goalType)) {
                                            $html.find('.goal-box[data-value="right"]').removeClass('available');
                                            $html.find('.goal-box[data-value="left"]').removeClass('available');
                                        }
                                        $html.find('.goal-box:not(.dummy):not(.available)').each(function(index, el) {
                                            $(this).addClass('disabled');
                                            $(this).tooltip({
                                                title: translations.s123ToolBar.goalPositionDisabledTooltip,
                                                container: 'body',
                                                placement: 'auto'
                                            });
                                        });
                                        $html.find('.goal-box').off('click').on('click', function(event) {
                                            var $this = $(this);
                                            if (!$this.data('value')) return false;
                                            var place = {};
                                            var twoSideDiffBackReverse = [4, 5, 6, 16, 29, 36];
                                            var isReverse = twoSideDiffBackReverse.includes($section.data('tool-style'));
                                            if (twoSideDiffBack.includes($section.data('tool-style'))) {
                                                place = {
                                                    top: {
                                                        style: isReverse ? 36 : 35,
                                                        arrID: isReverse ? 1005 : 1004
                                                    },
                                                    bottom: {
                                                        style: isReverse ? 16 : 15,
                                                        arrID: isReverse ? 1005 : 1004
                                                    },
                                                };
                                            } else {
                                                place = {
                                                    top: {
                                                        style: 37,
                                                        arrID: 1024
                                                    },
                                                    right: {
                                                        style: 11,
                                                        arrID: 1000
                                                    },
                                                    bottom: {
                                                        style: 33,
                                                        arrID: 1023
                                                    },
                                                    left: {
                                                        style: 12,
                                                        arrID: 1001
                                                    },
                                                };
                                            }
                                            if ($this.hasClass('active')) return;
                                            if ($this.hasClass('disabled')) return;
                                            updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                isCustomButtonType: '1'
                                            });
                                            s123PopOver.hide();
                                            topWindow.$('#card_' + $section.data('module-id')).data('module-style', place[$this.data('value')].style);
                                            topWindow.$('#card_' + $section.data('module-id')).data('modules-arr-id', place[$this.data('value')].arrID);
                                            topWindow.BuildToolJSON();
                                            topWindow.g_ManageModuleID = $section.data('module-id');
                                            topWindow.AutoSaveWizard(true, true);
                                            if ($goal.find('a[data-type="promoMoreBtn"]').data('s123-p')) $goal.find('a[data-type="promoMoreBtn"]').data('s123-p').hide();
                                        });
                                        $content.append($html);
                                    },
                                    hideCallback: function() {}
                                });
                            }
                        });
                        moreBtn.buttons.push({
                            icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>',
                            text: translations.remove,
                            click: function($btn) {
                                updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                    buttonType: $goal.data('type')
                                }, function() {
                                    topWindow.g_ManageModuleID = $section.data('module-id');
                                    if ($section.hasClass('twoSideCallAction')) {
                                        topWindow.$('#card_' + $section.data('module-id')).data('module-style', '27');
                                        topWindow.$('#card_' + $section.data('module-id')).data('modules-arr-id', '1017');
                                        topWindow.BuildToolJSON();
                                        topWindow.AutoSaveWizard(true, true);
                                    } else {
                                        topWindow.g_ManageModuleID = $section.data('module-id');
                                        topWindow.isPreviewReload = true;
                                        topWindow.RefreshPreview();
                                    }
                                    if (topWindow.$('#pagesTab .inline-module .inline-wizard-iframe').data('moduleid') == $section.data('module-id')) {
                                        topWindow.$('#wizardBox .close-wizard-tab-btn').trigger('click');
                                    }
                                });
                            }
                        });
                        buttons.push(moreBtn);
                        addFloatingMenu({
                            type: 'homepageGoal',
                            $element: $goal,
                            buttons: buttons
                        });
                        initPromoResizable($(this));
                    });

                    function getHomepageGoalSpacingButton($el, $goal) {
                        var $marginTopInput = null;
                        var $marginBottomInput = null;
                        if ($goal.hasClass('mainGoal')) {
                            $marginTopInput = topWindow.$('#homepage_main_goal_margin_top');
                            $marginBottomInput = topWindow.$('#homepage_main_goal_margin_bottom');
                        } else if ($goal.hasClass('secondGoal')) {
                            $marginTopInput = topWindow.$('#homepage_second_goal_margin_top');
                            $marginBottomInput = topWindow.$('#homepage_second_goal_margin_bottom');
                        }
                        var minValue = $marginTopInput.data('min-val');
                        var maxValue = $marginBottomInput.data('max-val');
                        var btn = {
                            type: 'goalSpacing',
                            icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt-v" class="svg-inline--fa fa-arrows-alt-v fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"></path></svg>',
                            click: function() {
                                $el.find('[data-type="homepageMoreBtn"]').addClass('m-b-k-o');
                            },
                            addCallback: function($btn) {
                                handleActiveClassOfGoalSpacing($btn, $marginTopInput.val(), $marginBottomInput.val(), minValue);
                                var s123PopOverSliders = new S123PopOverSliders({
                                    $el: $btn,
                                    popoverSettings: {
                                        placement: 'auto bottom'
                                    },
                                    customClass: 'homepage-goal-settings',
                                    slidersArray: [{
                                        type: 'marginTop',
                                        label: translations.homepageGoals.actionMarginTop,
                                        tooltip: translations.homepageGoals.actionMarginTopTolltip,
                                        design: 'twoLines',
                                        getValue: function() {
                                            return $marginTopInput.val();
                                        },
                                        numberKind: 1,
                                        minValue: minValue,
                                        maxValue: maxValue,
                                        callback: function(event, value, isLive) {
                                            handleActiveClassOfGoalSpacing($btn, value, $marginBottomInput.val(), minValue);
                                            document.documentElement.style.setProperty('--' + $marginTopInput.get(0).id, value + 'px');
                                            $marginTopInput.val(value).trigger('input', true);
                                        }
                                    }, {
                                        type: 'marginBottom',
                                        label: translations.homepageGoals.actionMarginBottom,
                                        tooltip: translations.homepageGoals.actionMarginBottomTolltip,
                                        design: 'twoLines',
                                        getValue: function() {
                                            return $marginBottomInput.val();
                                        },
                                        numberKind: 1,
                                        minValue: minValue,
                                        maxValue: maxValue,
                                        callback: function(event, value, isLive) {
                                            handleActiveClassOfGoalSpacing($btn, $marginTopInput.val(), value, minValue);
                                            document.documentElement.style.setProperty('--' + $marginBottomInput.get(0).id, value + 'px');
                                            $marginBottomInput.val(value).trigger('input', true);
                                        }
                                    }],
                                    showCallback: function() {
                                        OutlineHandler.focus($el);
                                        $(document).off('click.moreBtnHelper click.homepageGoalSpacingButton').on('click.homepageGoalSpacingButton', function(event) {
                                            if ($(event.target).closest('.w-helper').length > 0) return;
                                            if ($(event.target).closest('.s123-popover').length > 0) return;
                                            OutlineHandler.blur($el);
                                            $(document).off('click.homepageGoalSpacingButton');
                                        });
                                    }
                                });
                                $btn.off('hidden.bs.popover.goalSpacing').on('hidden.bs.popover.goalSpacing', function(event) {
                                    $el.find('[data-type="homepageMoreBtn"]').removeClass('m-b-k-o');
                                });
                            }
                        };
                        return btn;
                    }
                };
                _.hideAllToolBars = function() {
                    $('#top-section [data-has-s123-toolbar="true"], .s123-module[data-module-type-num="1000"] [data-has-s123-toolbar="true"]').each(function() {
                        _.hideToolBar($(this));
                    });
                };
                _.hideToolBar = function($el) {
                    var toolBar = $el.data('s123-tool-bar');
                    if (!toolBar) return;
                    if (!toolBar.$toolBar.is(':visible')) return;
                    toolBar.$toolBar.find('.s123-p-s').each(function() {
                        if (!$(this).data('s123-p-s')) return;
                        $(this).data('s123-p-s').hide();
                    });
                    toolBar.$toolBar.find('.s123-p').each(function() {
                        if (!$(this).data('s123-p')) return;
                        $(this).data('s123-p').hide();
                    });
                    toolBar.hide();
                };

                function initHomepageGoalResizable($goal) {
                    var $el = $goal.find('.w-helper');
                    if ($el.data('s123-resizable')) $el.data('s123-resizable').destroy();
                    var type = $goal.data('type');
                    var maxWidth = $goal.width();
                    var maxHeight = null;
                    var minWidth = 10;
                    var minHeight = 10;
                    var supportedGoals = ['image', 'video', 'sound_cloud', 'facebook_like_box', 'twitter_box', 'pinterest_box', 'vertical_form', 'customCode_box'];
                    var preserveRatio = true;
                    var resizByWidth = true;
                    var resizByHeight = true;
                    var $wizardInputs = {};
                    if (supportedGoals.indexOf(type) == -1) return;
                    if ($el.closest('.left').length > 0) {
                        maxWidth = $el.closest('.left').width();
                    } else if ($el.closest('.right').length > 0) {
                        maxWidth = $el.closest('.right').width();
                    }
                    if ($el.hasClass('s123-resizable')) $el.data('s123-resizable').destroy();
                    switch (type) {
                        case 'image':
                            $wizardInputs = {
                                width: topWindow.$('#home_custom_image_width'),
                                height: null
                            };
                            var isOldResizeFlow = !$.isNumeric($wizardInputs.width.val());
                            var resizable = new S123Resizable({
                                $el: $el,
                                $wizardInputs: $wizardInputs,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                minWidth: minWidth,
                                minHeight: minHeight,
                                resizByWidth: resizByWidth,
                                resizByHeight: resizByHeight,
                                preserveRatio: preserveRatio,
                                resizeCallBack: function(event, ui) {
                                    if (isOldResizeFlow) {
                                        document.documentElement.style.setProperty('--home_custom_image_size', ui.size.height + 'px');
                                    }
                                    document.documentElement.style.setProperty('--home_custom_image_width', ui.size.width + 'px');
                                },
                                endCallBack: function(event, ui, isUndoRedo) {
                                    if (!isUndoRedo) {
                                        topWindow.$('#home_custom_image_size').val('');
                                        $wizardInputs.width.val(ui.size.width).trigger('change');
                                        if (isOldResizeFlow) {
                                            topWindow.window.reloadPreviewCSS = topWindow.ReloadPreviewCSS;
                                            isOldResizeFlow = false;
                                        }
                                    }
                                }
                            });
                            break;
                        case 'vertical_form':
                            minWidth = 150;
                            preserveRatio = false;
                            resizByHeight = false;
                            $wizardInputs = {
                                width: topWindow.$('#homepage_form_style_max_width'),
                                height: null
                            };
                            var resizable = new S123Resizable({
                                $el: $el,
                                $wizardInputs: $wizardInputs,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                minWidth: minWidth,
                                minHeight: minHeight,
                                resizByWidth: resizByWidth,
                                resizByHeight: resizByHeight,
                                preserveRatio: preserveRatio,
                                endCallBack: function(event, ui, isUndoRedo) {
                                    ui.element.css({
                                        width: ui.size.width + 'px',
                                    });
                                    if (!isUndoRedo) $wizardInputs.width.val(ui.size.width).trigger('input');
                                }
                            });
                            break;
                        case 'sound_cloud':
                        case 'facebook_like_box':
                        case 'twitter_box':
                        case 'pinterest_box':
                        case 'customCode_box':
                            maxHeight = 800;
                            preserveRatio = false;
                            if (type == 'facebook_like_box') {
                                maxWidth = 500;
                            }
                            var $iframe = null;
                            if (type == 'sound_cloud') {
                                $wizardInputs = {
                                    width: topWindow.$('#embed_url_width_sound_cloud'),
                                    height: topWindow.$('#embed_url_height_sound_cloud'),
                                };
                            } else if (type == 'facebook_like_box') {
                                $wizardInputs = {
                                    width: topWindow.$('#embed_url_width_facebook'),
                                    height: topWindow.$('#embed_url_height_facebook'),
                                };
                            } else if (type == 'twitter_box') {
                                $wizardInputs = {
                                    width: topWindow.$('#embed_url_width_twitter'),
                                    height: topWindow.$('#embed_url_height_twitter'),
                                };
                            } else if (type == 'pinterest_box') {
                                $wizardInputs = {
                                    width: topWindow.$('#embed_url_width_pinterest'),
                                    height: topWindow.$('#embed_url_height_pinterest'),
                                };
                            } else if (type == 'customCode_box') {
                                $wizardInputs = {
                                    width: topWindow.$('#embed_url_width_custom_code'),
                                    height: topWindow.$('#embed_url_height_custom_code'),
                                };
                            }
                            var resizable = new S123Resizable({
                                $el: $el,
                                $wizardInputs: $wizardInputs,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                minWidth: minWidth,
                                minHeight: minHeight,
                                resizByWidth: resizByWidth,
                                resizByHeight: resizByHeight,
                                preserveRatio: preserveRatio,
                                startCallBack: function(event, ui) {
                                    $iframe = $el.find('iframe');
                                    if ($iframe) {
                                        $iframe.css({
                                            maxWidth: '',
                                            width: $iframe.width() + 'px',
                                        });
                                        $iframe.removeAttr('width');
                                        $iframe.removeAttr('height');
                                    }
                                },
                                resizeCallBack: function(event, ui) {
                                    if ($iframe) {
                                        $iframe.css({
                                            width: ui.size.width + 'px',
                                            height: ui.size.height + 'px',
                                        });
                                    }
                                },
                                endCallBack: function(event, ui, isUndoRedo) {
                                    if ($iframe) {
                                        $iframe.css({
                                            maxWidth: '100%',
                                            width: ui.size.width + 'px',
                                            height: ui.size.height + 'px',
                                        });
                                    }
                                    if ($wizardInputs.width && !isUndoRedo) $wizardInputs.width.val(ui.size.width).trigger('change');
                                    if ($wizardInputs.height && !isUndoRedo) $wizardInputs.height.val(ui.size.height).trigger('change');
                                }
                            });
                            break;
                        case 'video':
                            var $iframe = null;
                            $wizardInputs = {
                                width: topWindow.$('#homepage_video_width'),
                                height: null
                            };
                            var resizable = new S123Resizable({
                                $el: $el,
                                $wizardInputs: $wizardInputs,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                minWidth: minWidth,
                                minHeight: minHeight,
                                resizByWidth: resizByWidth,
                                resizByHeight: resizByHeight,
                                preserveRatio: preserveRatio,
                                startCallBack: function(event, ui) {
                                    ui.element.removeClass('old-customer');
                                    $iframe = $el.find('iframe');
                                    if ($iframe) {
                                        $iframe.css({
                                            maxWidth: '',
                                            width: $iframe.width() + 'px',
                                        });
                                        $iframe.removeAttr('width');
                                        $iframe.removeAttr('height');
                                    }
                                },
                                resizeCallBack: function(event, ui) {
                                    if ($iframe) {
                                        $iframe.css({
                                            width: ui.size.width + 'px',
                                            height: ui.size.height + 'px',
                                        });
                                    }
                                    ui.element.css({
                                        width: ui.size.width
                                    });
                                },
                                endCallBack: function(event, ui, isUndoRedo) {
                                    if ($iframe) {
                                        $iframe.css({
                                            maxWidth: '100%',
                                            width: ui.size.width + 'px',
                                            height: ui.size.height + 'px',
                                        });
                                    }
                                    ui.element.css({
                                        width: ui.size.width
                                    });
                                    if ($wizardInputs.width && !isUndoRedo) $wizardInputs.width.val(ui.size.width).trigger('change');
                                }
                            });
                            break;
                    }
                }

                function handleActiveClassOfGoalSpacing($btn, marginTop, marginBottom, minValue) {
                    if (parseInt(marginTop) > parseInt(minValue) || parseInt(marginBottom) > parseInt(minValue)) {
                        $btn.addClass('active');
                    } else {
                        $btn.removeClass('active');
                    }
                }

                function initPromoResizable($this) {
                    if ($this.data('s123-resizable')) $this.data('s123-resizable').destroy();
                    var type = $this.data('type');
                    var maxWidth = null;
                    var maxHeight = null;
                    var minWidth = 10;
                    var minHeight = 10;
                    var supportedTools = ['imageInline', 'videoInline', 'contactUsForm'];
                    var preserveRatio = true;
                    var resizByWidth = true;
                    var resizByHeight = true;
                    if (supportedTools.indexOf(type) == -1) return;
                    if ($this.closest('.start').length > 0) {
                        maxWidth = $this.closest('.start').width();
                    } else if ($this.closest('.end').length > 0) {
                        maxWidth = $this.closest('.end').width();
                    }
                    if ($this.hasClass('s123-resizable')) $this.data('s123-resizable').destroy();
                    switch (type) {
                        case 'contactUsForm':
                            preserveRatio = false;
                            resizByHeight = false;
                            minWidth = 150;
                            var resizable = new S123Resizable({
                                $el: $this,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                minWidth: minWidth,
                                minHeight: minHeight,
                                resizByWidth: resizByWidth,
                                resizByHeight: resizByHeight,
                                preserveRatio: preserveRatio,
                                endCallBack: function(event, ui) {
                                    var $section = ui.element.closest('section');
                                    ui.element.css({
                                        width: ui.size.width
                                    });
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        promoVerticalFormWidth: ui.size.width
                                    });
                                }
                            });
                            break;
                        case 'imageInline':
                            var resizable = new S123Resizable({
                                $el: $this,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                minWidth: minWidth,
                                minHeight: minHeight,
                                resizByWidth: resizByWidth,
                                resizByHeight: resizByHeight,
                                preserveRatio: preserveRatio,
                                resizeCallBack: function(event, ui) {
                                    ui.element.find('img, video').css({
                                        width: ui.size.width,
                                        maxHeight: '100%' // drop old customers max-height setting
                                    });
                                },
                                endCallBack: function(event, ui) {
                                    var $section = ui.element.closest('section');
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        promoImageInlineWidth: ui.size.width
                                    });
                                }
                            });
                            break;
                        case 'videoInline':
                            var $iframe = null;
                            var resizable = new S123Resizable({
                                $el: $this,
                                maxWidth: maxWidth,
                                maxHeight: maxHeight,
                                minWidth: minWidth,
                                minHeight: minHeight,
                                resizByWidth: resizByWidth,
                                resizByHeight: resizByHeight,
                                preserveRatio: preserveRatio,
                                startCallBack: function(event, ui) {
                                    $this.closest('.promoVideoInline').removeClass('old-customer');
                                    $iframe = ui.element.find('iframe');
                                    if ($iframe) {
                                        $iframe.css({
                                            maxWidth: '',
                                            width: $iframe.width() + 'px',
                                        });
                                        $iframe.removeAttr('width');
                                        $iframe.removeAttr('height');
                                    }
                                    ui.element.find('img').css({
                                        width: ui.size.width + 'px'
                                    });
                                },
                                resizeCallBack: function(event, ui) {
                                    if ($iframe) {
                                        $iframe.css({
                                            width: ui.size.width + 'px',
                                            height: ui.size.height + 'px',
                                        });
                                    }
                                    ui.element.find('img').css({
                                        width: ui.size.width + 'px'
                                    });
                                },
                                endCallBack: function(event, ui) {
                                    var $section = ui.element.closest('section');
                                    if ($iframe) {
                                        $iframe.css({
                                            maxWidth: '100%',
                                            width: ui.size.width + 'px',
                                            height: ui.size.height + 'px',
                                        });
                                    }
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        promoVideoInlineWidth: ui.size.width
                                    }, false);
                                }
                            });
                            break;
                    }
                }

                function getCaretPosition(element, originalText) {
                    var start = 0;
                    var end = 0;
                    var doc = element.ownerDocument || element.document;
                    var win = doc.defaultView || doc.parentWindow;
                    var sel;
                    if (typeof win.getSelection != "undefined") {
                        sel = win.getSelection();
                        if (sel.rangeCount > 0) {
                            var range = win.getSelection().getRangeAt(0);
                            var preCaretRange = range.cloneRange();
                            preCaretRange.selectNodeContents(element);
                            preCaretRange.setEnd(range.startContainer, range.startOffset);
                            start = preCaretRange.toString().length;
                            preCaretRange.setEnd(range.endContainer, range.endOffset);
                            end = preCaretRange.toString().length;
                        }
                    } else if ((sel = doc.selection) && sel.type != "Control") {
                        var textRange = sel.createRange();
                        var preCaretTextRange = doc.body.createTextRange();
                        preCaretTextRange.moveToElementText(element);
                        preCaretTextRange.setEndPoint("EndToStart", textRange);
                        start = preCaretTextRange.text.length;
                        preCaretTextRange.setEndPoint("EndToEnd", textRange);
                        end = preCaretTextRange.text.length;
                    }
                    var arr = originalText.split('');
                    var preCaretRangeArr = preCaretRange.toString().split('');
                    for (var i = preCaretRangeArr.length; i >= 0; i--) {
                        if (['*', '_'].indexOf(arr[i]) != -1) {
                            start++;
                            end++;
                        }
                    }
                    return {
                        start: start,
                        end: end
                    };
                }

                function restoreCaretPosition(data, $el, text) {
                    var textNode = document.createTextNode(text);
                    $el.empty().append(textNode);
                    var sel = window.getSelection();
                    var range = new Range();
                    range.setStart(textNode, data.start);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }

                function HomepageEditableTextHandler(settings) {
                    var _ = {
                        $el: settings.$el
                    };
                    _.init = function() {
                        var isTextChanged = false;
                        var maxlength = 0;
                        var $input = topWindow.$('#' + _.$el.get(0).id);
                        maxlength = parseInt($input.attr('maxlength'));
                        _.$el.off('click.homepageAndPromoEditor.textFormatting').on('click.homepageAndPromoEditor.textFormatting', function(event) {
                            if (_.$el.data('showing-original-text')) return;
                            if (topWindow.Wizard.Preview.iframe.attr('data-device-type') != 'computer') return;
                            var $input = topWindow.$('#' + _.$el.get(0).id);
                            if (topWindow.isTextFormated($input.val())) {
                                var cretPosition = getCaretPosition(_.$el.get(0), $input.val());
                                _.$el.html($input.val());
                                restoreCaretPosition(cretPosition, _.$el, $input.val());
                                event.stopPropagation();
                                _.$el.data('s123-tool-bar').show();
                            }
                            _.$el.one('blur.homepageAndPromoEditor.textFormatting', function() {
                                _.$el.data('showing-original-text', false);
                            });
                            _.$el.data('showing-original-text', true);
                        });
                        var fontSizeSelector = '';
                        var fontSizeSelectorCSSVar = '';
                        var fontSizeSelectorCSSVarInt = '';
                        var fontStyleSelector = '';
                        var letterSpacingSelector = '';
                        var wordSpacingSelector = '';
                        var lineHeightSelector = '';
                        var topSpacingSelector = '';
                        var bottomSpacingSelector = '';
                        var shadowSelector = '';
                        var fontWeightSelector = '';
                        var italicSelector = '';
                        var textRotateSelector = '';
                        var minFontSize = 10;
                        var maxFontSize = 200;
                        switch (_.$el.get(0).id) {
                            case 'home_siteSlogan':
                                fontSizeSelector = '#home_text_size';
                                fontSizeSelectorCSSVar = '--home_text_size_px';
                                fontSizeSelectorCSSVarInt = '--home_text_size';
                                fontStyleSelector = 'font_slogan';
                                letterSpacingSelector = '#home_text_letter_spacing_1';
                                wordSpacingSelector = '#home_text_word_spacing_1';
                                lineHeightSelector = '#home_text_line_height_1';
                                topSpacingSelector = '#home_text_top_space_1';
                                bottomSpacingSelector = '#home_text_bottom_space_1';
                                shadowSelector = '#home_text_shadow_1';
                                fontWeightSelector = '#home_text_size_weight';
                                italicSelector = '#home_text_italic';
                                textRotateSelector = '#home_text_rotate_1';
                                break;
                            case 'home_siteSlogan_2':
                                fontSizeSelector = '#home_text_size_2';
                                fontSizeSelectorCSSVar = '--home_text_size_2_px';
                                fontSizeSelectorCSSVarInt = '--home_text_size_2';
                                fontStyleSelector = 'font_slogan_2';
                                letterSpacingSelector = '#home_text_letter_spacing_2';
                                wordSpacingSelector = '#home_text_word_spacing_2';
                                lineHeightSelector = '#home_text_line_height_2';
                                topSpacingSelector = '#home_text_top_space_2';
                                bottomSpacingSelector = '#home_text_bottom_space_2';
                                shadowSelector = '#home_text_shadow_2';
                                fontWeightSelector = '#home_text_size_2_weight';
                                italicSelector = '#home_text_2_italic';
                                textRotateSelector = '#home_text_rotate_2';
                                break;
                            case 'home_SecondSiteSlogan':
                                fontSizeSelector = '#slogan_text_size';
                                fontSizeSelectorCSSVar = '--slogan_text_size_px';
                                fontSizeSelectorCSSVarInt = '--slogan_text_size';
                                fontStyleSelector = 'font_second_slogan';
                                letterSpacingSelector = '#home_text_letter_spacing_3';
                                wordSpacingSelector = '#home_text_word_spacing_3';
                                lineHeightSelector = '#home_text_line_height_3';
                                topSpacingSelector = '#home_text_top_space_3';
                                bottomSpacingSelector = '#home_text_bottom_space_3';
                                shadowSelector = '#home_text_shadow_3';
                                fontWeightSelector = '#slogan_text_size_weight';
                                italicSelector = '#slogan_text_italic';
                                textRotateSelector = '#home_text_rotate_3';
                                break;
                        }
                        var toolBar = new S123ToolBar({
                            $el: _.$el,
                            optionsList: ['weight', 'italic', 'fontStyle', 'fontResizing', 'textMargins', 'textLayouts', 'textPositions', 'textAnimation', 'textShadow'],
                            initCallback: function(toolBar) {
                                var slidersArray = [{
                                    type: 'textSize',
                                    label: translations.s123ToolBar.textSize,
                                    tooltip: '',
                                    design: 'oneLine',
                                    getValue: function() {
                                        return topWindow.$(fontSizeSelector).val();
                                    },
                                    numberKind: 1,
                                    minValue: minFontSize,
                                    maxValue: maxFontSize,
                                    callback: function(event, fontSize, isLive) {
                                        topWindow.$(fontSizeSelector).val(fontSize).trigger('input');
                                    }
                                }, {
                                    type: 'letterSpacing',
                                    label: translations.s123ToolBar.letterSpacing,
                                    tooltip: '',
                                    design: 'oneLine',
                                    getValue: function() {
                                        return topWindow.$(letterSpacingSelector).val();
                                    },
                                    numberKind: 1,
                                    minValue: -5,
                                    maxValue: 10,
                                    callback: function(event, value, isLive) {
                                        topWindow.$(letterSpacingSelector).val(value).trigger('input');
                                    }
                                }, {
                                    type: 'wordSpacing',
                                    label: translations.s123ToolBar.wordSpacing,
                                    tooltip: '',
                                    design: 'oneLine',
                                    value: topWindow.$(wordSpacingSelector).val(),
                                    getValue: function() {
                                        return topWindow.$(wordSpacingSelector).val();
                                    },
                                    numberKind: 1,
                                    minValue: -5,
                                    maxValue: 10,
                                    callback: function(event, value, isLive) {
                                        topWindow.$(wordSpacingSelector).val(value).trigger('input');
                                    }
                                }, {
                                    type: 'lineHeight',
                                    label: translations.s123ToolBar.lineHeight,
                                    tooltip: '',
                                    design: 'oneLine',
                                    getValue: function() {
                                        return topWindow.$(lineHeightSelector).val();
                                    },
                                    numberKind: 2,
                                    minValue: 0.7,
                                    maxValue: 2,
                                    callback: function(event, value, isLive) {
                                        topWindow.$(lineHeightSelector).val(value).trigger('input');
                                    }
                                }];
                                if (parseInt(topWindow.$(textRotateSelector).val()) > 0) {
                                    slidersArray.push({
                                        type: 'textRotate',
                                        label: translations.s123ToolBar.textRotate,
                                        tooltip: '',
                                        design: 'oneLine',
                                        getValue: function() {
                                            return topWindow.$(textRotateSelector).val();
                                        },
                                        numberKind: 1,
                                        minValue: 0,
                                        maxValue: 359,
                                        callback: function(event, value, isLive) {
                                            topWindow.$(textRotateSelector).val(value).trigger('input');
                                        }
                                    });
                                }
                                var fontResizing = new S123PopOverSliders({
                                    $el: toolBar.$toolBar.find('[data-type="fontResizing"]'),
                                    popoverSettings: {
                                        placement: 'auto top'
                                    },
                                    slidersArray: slidersArray,
                                    showCallback: function() {
                                        toolBar.preventHideToolBar = true;
                                    },
                                    hideCallback: function() {
                                        toolBar.preventHideToolBar = false;
                                    }
                                });
                                var textMargins = new S123PopOverSliders({
                                    $el: toolBar.$toolBar.find('[data-type="textMargins"]'),
                                    popoverSettings: {
                                        placement: 'auto top'
                                    },
                                    slidersArray: [{
                                        type: 'topSpacing',
                                        label: translations.s123ToolBar.topSpacing,
                                        tooltip: '',
                                        design: 'oneLine',
                                        getValue: function() {
                                            return topWindow.$(topSpacingSelector).val();
                                        },
                                        numberKind: 1,
                                        minValue: 0,
                                        maxValue: 200,
                                        callback: function(event, value, isLive) {
                                            toolBar.manualActiveHandler('textMargins', parseInt(value) > 0);
                                            topWindow.$(topSpacingSelector).val(value).trigger('input');
                                        }
                                    }, {
                                        type: 'bottomSpacing',
                                        label: translations.s123ToolBar.bottomSpacing,
                                        tooltip: '',
                                        design: 'oneLine',
                                        getValue: function() {
                                            return topWindow.$(bottomSpacingSelector).val();
                                        },
                                        numberKind: 1,
                                        minValue: 10,
                                        maxValue: 200,
                                        callback: function(event, value, isLive) {
                                            toolBar.manualActiveHandler('textMargins', parseInt(value) > 10);
                                            topWindow.$(bottomSpacingSelector).val(value).trigger('input');
                                        }
                                    }],
                                    showCallback: function() {
                                        toolBar.preventHideToolBar = true;
                                    },
                                    hideCallback: function() {
                                        toolBar.preventHideToolBar = false;
                                    }
                                });
                                var $html = $('<div class="form-group"></div>');
                                var s123PopOver = new S123PopOver({
                                    $el: toolBar.$toolBar.find('[data-type="textShadow"]'),
                                    popoverSettings: {
                                        placement: 'auto top',
                                        content: $html
                                    },
                                    showCallback: function() {
                                        (function() {
                                            $html.find('.shadow-controller').remove();
                                            var $input = topWindow.$(shadowSelector);
                                            var html = '';
                                            html += '<div class="shadow-controller">';
                                            html += '<label>' + S123.escapeHtml(translations.s123ToolBar.textShadow) + '</label>';
                                            html += '<div class="shadow-controller">';
                                            html += '<a href="#" data-value="">A</a>';
                                            html += '<a href="#" data-value="shadow1" class="shadow1">A</a>';
                                            html += '<a href="#" data-value="shadow2" class="shadow2">A</a>';
                                            html += '<a href="#" data-value="shadow3" class="shadow3">A</a>';
                                            html += '<a href="#" data-value="shadow4" class="shadow4">A</a>';
                                            html += '</div>';
                                            html += '</div>';
                                            $html.append(html);
                                            $html.find('.shadow-controller a[data-value="' + $input.val() + '"]').addClass('active');
                                            $html.find('.shadow-controller').off('click').on('click', 'a', function(event) {
                                                event.preventDefault();
                                                var $this = $(this);
                                                $this.siblings().removeClass('active');
                                                $this.addClass('active');
                                                _.$el.removeClass(function(index, className) {
                                                    return (className.match(/(^|\s)shadow\S+/g) || []).join(' ');
                                                });
                                                _.$el.addClass($this.data('value'));
                                                $input.val($this.data('value')).trigger('change');
                                                toolBar.manualActiveHandler('textShadow', $this.data('value').length > 0);
                                            });
                                            $input.off('change.textShadow').on('change.textShadow', function(event, flagStatus) {
                                                if (flagStatus != 'UndoRedoChange' || flagStatus != 'ReadyTemplateChange') return;
                                                toolBar.manualActiveHandler('textShadow', topWindow.$(shadowSelector).val().length > 0);
                                            });
                                        })();
                                        toolBar.preventHideToolBar = true;
                                    },
                                    hideCallback: function() {
                                        toolBar.preventHideToolBar = false;
                                    }
                                });
                            },
                            showCallback: function() {
                                var isItalicSupported = true;
                                toolBar.manualActiveHandler('weight', topWindow.$(fontWeightSelector).val() == 'weight700');
                                toolBar.manualActiveHandler('italic', topWindow.$(italicSelector).val() == 'italic');
                                toolBar.manualActiveHandler('textShadow', topWindow.$(shadowSelector).val().length > 0);
                                var hasMargins = false;
                                if (parseInt(topWindow.$(topSpacingSelector).val()) > 0) {
                                    hasMargins = true;
                                }
                                if (parseInt(topWindow.$(bottomSpacingSelector).val()) > 10) {
                                    hasMargins = true;
                                }
                                toolBar.manualActiveHandler('textMargins', hasMargins);
                                switch (_.$el.get(0).id) {
                                    case 'home_siteSlogan':
                                        if (topWindow.websiteFonts.font_slogan) {
                                            isItalicSupported = topWindow.websiteFonts.font_slogan.isItalicSupported;
                                        }
                                        break;
                                    case 'home_siteSlogan_2':
                                        if (topWindow.websiteFonts.font_slogan_2) {
                                            isItalicSupported = topWindow.websiteFonts.font_slogan_2.isItalicSupported;
                                        }
                                        break;
                                    case 'home_SecondSiteSlogan':
                                        if (topWindow.websiteFonts.font_second_slogan) {
                                            isItalicSupported = topWindow.websiteFonts.font_second_slogan.isItalicSupported;
                                        }
                                        break;
                                }
                                if (!isItalicSupported) {
                                    toolBar.disableOption('italic');
                                    toolBar.getOptionButton('italic').tooltip({
                                        title: translations.italic.notSupported,
                                        container: 'body',
                                        placement: 'auto'
                                    });
                                } else {
                                    toolBar.getOptionButton('italic').tooltip('destroy');
                                    toolBar.enableOption('italic');
                                }
                            },
                            clickCallback: function($btn) {
                                if ($btn.data('type') == 'weight') {
                                    if ($btn.hasClass('active')) {
                                        topWindow.$(fontWeightSelector).val('weight700').trigger('change');
                                    } else {
                                        topWindow.$(fontWeightSelector).val('weight400').trigger('change');
                                    }
                                } else if ($btn.data('type') == 'italic') {
                                    if ($btn.hasClass('active')) {
                                        topWindow.$(italicSelector).val('italic').trigger('change');
                                    } else {
                                        topWindow.$(italicSelector).val('').trigger('change');
                                    }
                                } else if ($btn.data('type') == 'textLayouts' || $btn.data('type') == 'textPositions' || $btn.data('type') == 'textAnimation') {
                                    expandWizardHomepage('homepageTab', '#homepageCollapse88');
                                    var $homepageCollapse88 = topWindow.$('#homepageCollapse88');
                                    $homepageCollapse88.find('#readyTextLayoutsTabs').removeClass('hidden');
                                    if ($btn.data('type') == 'textLayouts') {
                                        topWindow.Wizard.readyTextLayoutsHandler.printSingleTextLayouts(_.$el.get(0).id);
                                        $homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header [data-tab-related]:not([data-tab-related="textLayoutTab"])').hide();
                                        $homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header [data-tab-related="textLayoutTab"]').show();
                                        var height = '100vh';
                                    } else if ($btn.data('type') == 'textPositions') {
                                        $homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header [data-tab-related]:not([data-tab-related="textPositionsTab"])').hide();
                                        $homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header [data-tab-related="textPositionsTab"]').show();
                                        var height = 'calc( 100vh - ' + ($homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header').outerHeight(true)) + 'px)';
                                    } else if ($btn.data('type') == 'textAnimation') {
                                        $homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header [data-tab-related]:not([data-tab-related="textAnimationTab"])').hide();
                                        $homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header [data-tab-related="textAnimationTab"]').show();
                                        var height = 'calc( 100vh - ' + ($homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header').outerHeight(true)) + 'px)';
                                    }
                                    $homepageCollapse88.find('.homepage-titles-container').css({
                                        height: height
                                    });
                                    $homepageCollapse88.find('#homepageTitle1').addClass('hidden');
                                    $homepageCollapse88.find('#homepageTitle2').addClass('hidden');
                                    $homepageCollapse88.find('#homepageTitle3').addClass('hidden');
                                    topWindow.$(topWindow.document).one('animation_manager.hide', function() {
                                        $homepageCollapse88.find('#homepageTitle1').removeClass('hidden');
                                        $homepageCollapse88.find('#homepageTitle2').removeClass('hidden');
                                        $homepageCollapse88.find('#homepageTitle3').removeClass('hidden');
                                        $homepageCollapse88.find('#readyTextLayoutsTabs').addClass('hidden');
                                        $homepageCollapse88.find('.homepage-titles-container').css({
                                            height: ''
                                        });
                                        if ($btn.data('type') == 'textLayouts') {
                                            $homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header [data-tab-related="textLayoutTab"]').show();
                                        } else if ($btn.data('type') == 'textPositions') {
                                            $homepageCollapse88.find('#readyTextLayoutsTabs > .i-t-header [data-tab-related="textPositionsTab"]').show();
                                        }
                                    });
                                    if ($btn.data('type') == 'textLayouts') {
                                        $homepageCollapse88.find('#readyTextLayoutsTabs [data-tab="textLayoutTab"]').trigger('click');
                                    } else if ($btn.data('type') == 'textPositions') {
                                        $homepageCollapse88.find('#readyTextLayoutsTabs [data-tab="textPositionsTab"]').trigger('click');
                                    } else if ($btn.data('type') == 'textAnimation') {
                                        $homepageCollapse88.find('#readyTextLayoutsTabs [data-tab="textAnimationTab"]').trigger('click');
                                    }
                                    toolBar.setPosition();
                                } else if ($btn.data('type') == 'fontStyle') {
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.loadThemes('singleFontThemes', fontStyleSelector, italicSelector);
                                    topWindow.OpenWizardTab('designTab', true);
                                    topWindow.Wizard.tabEffectHandler.AnimationManager.designTab.$tab.find('.t-h-e-manual-static .text-container').text(topWindow.Wizard.tabEffectHandler.AnimationManager.designTab.$tab.find('#singleFontThemes').data('static-tab-title-text'));
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.innerTabsHanler.$linkContainer.find('[data-tab="singleFontThemes"]').trigger('click');
                                }
                            }
                        });
                        var editableTitle = new S123EditableElement({
                            $el: _.$el,
                            disableNewLine: false,
                            maxlength: maxlength,
                            eventCallback: function(eventType) {
                                let text = _.$el.html().trim()
                                    .replace(/<br.*?>/ig, '\n')
                                    .replace(/&nbsp;/ig, '');
                                if (eventType == 'input' || eventType == 'paste') {
                                    $input.val(decodeEntities(text)).trigger('input', true);
                                    isTextChanged = true;
                                } else if (eventType == 'blur') {
                                    if (isTextChanged) {
                                        $input.trigger('change');
                                        topWindow.AutoSaveWizard(false, true);
                                        isTextChanged = false;
                                    }
                                    if (text.length == 0) {
                                        _.$el.closest('section').trigger('textRemoved', [_.$el.get(0).id]);
                                        toolBar.hide();
                                    }
                                    _.$el.html(topWindow.HomepageTextFormat(text));
                                    $(document).trigger('s123.page.ready.homepageRandomText');
                                }
                            }
                        });
                        var resizableText = new ResizableText({
                            $el: _.$el,
                            $section: $('#top-section'),
                            minFontSize: minFontSize,
                            maxFontSize: maxFontSize,
                            startCallBack: function(event, ui) {
                                _.$el.closest('section').data('text-visibility-handler').disable();
                            },
                            resizeCallBack: function(fontSize) {
                                document.documentElement.style.setProperty(fontSizeSelectorCSSVar, fontSize + 'px');
                                document.documentElement.style.setProperty(fontSizeSelectorCSSVarInt, fontSize);
                                toolBar.setPosition();
                            },
                            endCallBack: function(fontSize) {
                                document.documentElement.style.setProperty(fontSizeSelectorCSSVar, fontSize + 'px');
                                document.documentElement.style.setProperty(fontSizeSelectorCSSVarInt, fontSize);
                                topWindow.$(fontSizeSelector).val(fontSize);
                                topWindow.AutoSaveWizard(false, true);
                                _.$el.closest('section').data('text-visibility-handler').enable();
                            }
                        });
                    };
                    _.init();
                    return _;
                };

                function PromoEditableTextHandler(settings) {
                    var _ = {
                        $el: settings.$el
                    };
                    _.init = function() {
                        var $section = _.$el.closest('section.s123-module');
                        var id = _.$el.get(0).id.split('-').pop();
                        var fontSize = '';
                        var letterSpacing = '';
                        var wordSpacing = '';
                        var lineHeight = '';
                        var topSpacing = '';
                        var bottomSpacing = '';
                        var shadow = '';
                        var maxlength = 500;
                        var minFontSize = 10;
                        var maxFontSize = 200;
                        var fontSettingName = '';
                        switch (id) {
                            case 'promoText1':
                                fontSize = 'text1_size_custom';
                                letterSpacing = 'text1_letter_spacing';
                                wordSpacing = 'text1_word_spacing';
                                lineHeight = 'text1_line_height';
                                topSpacing = 'text1_top_space';
                                bottomSpacing = 'text1_bottom_space';
                                shadow = 'text1_shadow';
                                fontSettingName = 'text1_fontFamily';
                                break;
                            case 'promoText2':
                                fontSize = 'text2_size_custom';
                                letterSpacing = 'text2_letter_spacing';
                                wordSpacing = 'text2_word_spacing';
                                lineHeight = 'text2_line_height';
                                topSpacing = 'text2_top_space';
                                bottomSpacing = 'text2_bottom_space';
                                shadow = 'text2_shadow';
                                fontSettingName = 'text2_fontFamily';
                                break;
                            case 'promoText3':
                                fontSize = 'text3_size_custom';
                                letterSpacing = 'text3_letter_spacing';
                                wordSpacing = 'text3_word_spacing';
                                lineHeight = 'text3_line_height';
                                topSpacing = 'text3_top_space';
                                bottomSpacing = 'text3_bottom_space';
                                shadow = 'text3_shadow';
                                fontSettingName = 'text3_fontFamily';
                                maxlength = null;
                                break;
                        }
                        var resizableText = new ResizableText({
                            $el: _.$el,
                            $section: $section,
                            minFontSize: minFontSize,
                            maxFontSize: maxFontSize,
                            initCallBack: function(resizableText) {
                                var $tmpHelper = _.$el.clone();
                                $('body').append($tmpHelper);
                                resizableText.$wrapper.css('margin-top', $tmpHelper.css('margin-top'));
                                resizableText.$wrapper.css('margin-bottom', $tmpHelper.css('margin-bottom'));
                                $tmpHelper.remove();
                            },
                            startCallBack: function(event, ui) {},
                            resizeCallBack: function(size) {
                                $section.data('text-visibility-handler').setPosition(_.$el);
                                toolBar.setPosition();
                            },
                            endCallBack: function(size) {
                                _.$el.css({
                                    fontSize: size + 'px'
                                });
                                updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                    [fontSize]: size
                                });
                                _.$el.closest('section').trigger('resizableText.end', [_.$el, size]);
                            }
                        });
                        var toolBar = new S123ToolBar({
                            $el: _.$el,
                            optionsList: ['weight', 'italic', 'fontStyle', 'fontResizing', 'textMargins', 'textPositions', 'textShadow'],
                            initCallback: function(toolBar) {
                                var fontResizing = new S123PopOverSliders({
                                    $el: toolBar.$toolBar.find('[data-type="fontResizing"]'),
                                    popoverSettings: {
                                        placement: 'auto top'
                                    },
                                    slidersArray: [{
                                        type: 'textSize',
                                        label: translations.s123ToolBar.textSize,
                                        tooltip: '',
                                        design: 'oneLine',
                                        getValue: function() {
                                            return parseInt(_.$el.css('font-size'));
                                        },
                                        numberKind: 1,
                                        minValue: minFontSize,
                                        maxValue: maxFontSize,
                                        callback: function(event, value, isLive) {
                                            _.$el.css({
                                                fontSize: value + 'px'
                                            });
                                            if (!isLive) {
                                                updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                    [fontSize]: value
                                                });
                                            }
                                        }
                                    }, {
                                        type: 'letterSpacing',
                                        label: translations.s123ToolBar.letterSpacing,
                                        tooltip: '',
                                        design: 'oneLine',
                                        getValue: function() {
                                            return parseInt(_.$el.css('letter-spacing'));
                                        },
                                        numberKind: 1,
                                        minValue: -5,
                                        maxValue: 10,
                                        callback: function(event, value, isLive) {
                                            _.$el.css({
                                                letterSpacing: value + 'px'
                                            });
                                            if (!isLive) {
                                                updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                    [letterSpacing]: value
                                                });
                                            }
                                        }
                                    }, {
                                        type: 'wordSpacing',
                                        label: translations.s123ToolBar.wordSpacing,
                                        tooltip: '',
                                        design: 'oneLine',
                                        getValue: function() {
                                            return parseInt(_.$el.css('word-spacing'));
                                        },
                                        numberKind: 1,
                                        minValue: -5,
                                        maxValue: 10,
                                        callback: function(event, value, isLive) {
                                            _.$el.css({
                                                wordSpacing: value + 'px'
                                            });
                                            if (!isLive) {
                                                updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                    [wordSpacing]: value
                                                });
                                            }
                                        }
                                    }, {
                                        type: 'lineHeight',
                                        label: translations.s123ToolBar.lineHeight,
                                        tooltip: '',
                                        design: 'oneLine',
                                        getValue: function() {
                                            return ((parseInt(_.$el.css('line-height')) * 100 / parseInt(_.$el.css('font-size'))) / 100);
                                        },
                                        numberKind: 2,
                                        minValue: 0.7,
                                        maxValue: 2,
                                        callback: function(event, value, isLive) {
                                            _.$el.css({
                                                lineHeight: value
                                            });
                                            if (!isLive) {
                                                updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                    [lineHeight]: value
                                                });
                                            }
                                        }
                                    }],
                                    showCallback: function() {
                                        toolBar.preventHideToolBar = true;
                                    },
                                    hideCallback: function() {
                                        toolBar.preventHideToolBar = false;
                                    }
                                });
                                var $html = $('<div class="form-group"></div>');
                                var s123PopOver = new S123PopOver({
                                    $el: toolBar.$toolBar.find('[data-type="textShadow"]'),
                                    popoverSettings: {
                                        placement: 'auto top',
                                        content: $html
                                    },
                                    showCallback: function() {
                                        (function() {
                                            $html.find('.shadow-controller').remove();
                                            var html = '';
                                            html += '<div class="shadow-controller">';
                                            html += '<label>' + S123.escapeHtml(translations.s123ToolBar.textShadow) + '</label>';
                                            html += '<div class="shadow-controller">';
                                            html += '<a href="#" data-value="">A</a>';
                                            html += '<a href="#" data-value="shadow1" class="shadow1">A</a>';
                                            html += '<a href="#" data-value="shadow2" class="shadow2">A</a>';
                                            html += '<a href="#" data-value="shadow3" class="shadow3">A</a>';
                                            html += '<a href="#" data-value="shadow4" class="shadow4">A</a>';
                                            html += '</div>';
                                            html += '</div>';
                                            $html.append(html);
                                            $html.find('.shadow-controller a').each(function(inex, el) {
                                                var $this = $(this);
                                                if (_.$el.hasClass($this.data('value'))) {
                                                    $this.siblings().removeClass('active');
                                                    $this.addClass('active');
                                                    return false;
                                                }
                                            });
                                            $html.find('.shadow-controller').off('click').on('click', 'a', function(event) {
                                                event.preventDefault();
                                                var $this = $(this);
                                                $this.siblings().removeClass('active');
                                                $this.addClass('active');
                                                _.$el.removeClass(function(index, className) {
                                                    return (className.match(/(^|\s)shadow\S+/g) || []).join(' ');
                                                });
                                                _.$el.addClass($this.data('value'));
                                                toolBar.manualActiveHandler('textShadow', $this.data('value').length > 0);
                                                updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                    [shadow]: $this.data('value')
                                                });
                                            });
                                        })();
                                        toolBar.preventHideToolBar = true;
                                    },
                                    hideCallback: function() {
                                        toolBar.preventHideToolBar = false;
                                    }
                                });
                                (function() {
                                    var $el = _.$el;
                                    if (resizableText.$wrapper) {
                                        $el = resizableText.$wrapper;
                                    }
                                    var textMargins = new S123PopOverSliders({
                                        $el: toolBar.$toolBar.find('[data-type="textMargins"]'),
                                        popoverSettings: {
                                            placement: 'auto top'
                                        },
                                        slidersArray: [{
                                            type: 'topSpacing',
                                            label: translations.s123ToolBar.topSpacing,
                                            tooltip: '',
                                            design: 'oneLine',
                                            getValue: function() {
                                                return parseInt($el.css('margin-top'));
                                            },
                                            numberKind: 1,
                                            minValue: 0,
                                            maxValue: 200,
                                            callback: function(event, value, isLive) {
                                                $el.css({
                                                    marginTop: value + 'px'
                                                });
                                                toolBar.manualActiveHandler('textMargins', parseInt(value) > 0);
                                                if (!isLive) {
                                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                        [topSpacing]: value
                                                    });
                                                }
                                            }
                                        }, {
                                            type: 'bottomSpacing',
                                            label: translations.s123ToolBar.bottomSpacing,
                                            tooltip: '',
                                            design: 'oneLine',
                                            getValue: function() {
                                                return parseInt($el.css('margin-bottom'));
                                            },
                                            numberKind: 1,
                                            minValue: 10,
                                            maxValue: 200,
                                            callback: function(event, value, isLive) {
                                                $el.css({
                                                    marginBottom: value + 'px'
                                                });
                                                toolBar.manualActiveHandler('textMargins', parseInt(value) > 10);
                                                if (!isLive) {
                                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                        [bottomSpacing]: value
                                                    });
                                                }
                                            }
                                        }],
                                        showCallback: function() {
                                            toolBar.preventHideToolBar = true;
                                        },
                                        hideCallback: function() {
                                            toolBar.preventHideToolBar = false;
                                        }
                                    });
                                })();
                            },
                            showCallback: function() {
                                toolBar.manualActiveHandler('weight', _.$el.hasClass('weight700'));
                                toolBar.manualActiveHandler('italic', _.$el.hasClass('italic'));
                                toolBar.manualActiveHandler('textShadow', _.$el.is('[class*="shadow"]'));
                                (function() {
                                    var $el = _.$el;
                                    if (resizableText.$wrapper) {
                                        $el = resizableText.$wrapper;
                                    }
                                    var hasMargins = false;
                                    if (parseInt($el.css('margin-top')) > 0) {
                                        hasMargins = true;
                                    }
                                    if (parseInt($el.css('margin-bottom')) > 10) {
                                        hasMargins = true;
                                    }
                                    toolBar.manualActiveHandler('textMargins', hasMargins);
                                })();
                                if (!topWindow.Wizard.promoFonts.isItalicSupported(fontSettingName, $section.data('module-id'))) {
                                    toolBar.disableOption('italic');
                                    toolBar.getOptionButton('italic').tooltip({
                                        title: translations.italic.notSupported,
                                        container: 'body',
                                        placement: 'auto'
                                    });
                                } else {
                                    toolBar.getOptionButton('italic').tooltip('destroy');
                                    toolBar.enableOption('italic');
                                }
                            },
                            clickCallback: function($btn) {
                                var fontSizeSettingName = '';
                                var fontWeightSettingName = '';
                                var italicSettingName = '';
                                switch (id) {
                                    case 'promoText1':
                                        fontSizeSettingName = 'text1_size_custom';
                                        fontWeightSettingName = 'text1_weight';
                                        italicSettingName = 'text1_fontStyle';
                                        break;
                                    case 'promoText2':
                                        fontSizeSettingName = 'text2_size_custom';
                                        fontWeightSettingName = 'text2_weight';
                                        italicSettingName = 'text2_fontStyle';
                                        break;
                                    case 'promoText3':
                                        fontSizeSettingName = 'text3_size_custom';
                                        fontWeightSettingName = 'text3_weight';
                                        italicSettingName = 'text3_fontStyle';
                                        break;
                                }
                                if ($btn.data('type') == 'weight') {
                                    var settingNameAjax = fontWeightSettingName;
                                    if (_.$el.hasClass('weight700')) {
                                        _.$el.removeClass('weight700').addClass('weight400');
                                        var settingVal = 'weight400';
                                    } else {
                                        _.$el.removeClass('weight400').addClass('weight700');
                                        var settingVal = 'weight700';
                                    }
                                } else if ($btn.data('type') == 'italic') {
                                    var settingNameAjax = italicSettingName;
                                    if (_.$el.hasClass('italic')) {
                                        var settingVal = '';
                                        _.$el.removeClass('italic');
                                    } else {
                                        var settingVal = 'italic';
                                        _.$el.addClass('italic');
                                    }
                                } else if ($btn.data('type') == 'textPositions') {
                                    topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + $section.data('moduleId') + '"]').closest('li').data('open-tool', 'text-position');
                                    openItemEditModal($section.data('moduleId'), $section.data('moduleTypeNum'), '', null);
                                    return;
                                } else if ($btn.data('type') == 'fontStyle') {
                                    var $this = $(this);
                                    topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + $section.data('module-id') + '"]').closest('li').data('open-tool', 'font-themes');
                                    openItemEditModal($section.data('module-id'), $section.data('module-type-num'), '', function($iframe) {
                                        var frameWindow = $iframe.get(0).contentWindow;
                                        frameWindow.showFontThemes(fontSettingName, function(newTheme) {
                                            topWindow.Wizard.promoFonts.save($section.data('module-id'), fontSettingName, newTheme);
                                            if (!newTheme.italic && frameWindow.$('#' + italicSettingName).val() == 'italic') {
                                                updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                                    [italicSettingName]: ''
                                                });
                                            }
                                        });
                                    });
                                    return;
                                }
                                clearTimeout(_.$el['updateDelay_' + $btn.data('type')]);
                                _.$el['updateDelay_' + $btn.data('type')] = setTimeout(function() {
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        [settingNameAjax]: settingVal
                                    });
                                }, 500);
                            }
                        });
                        var editableText = new S123EditableElement({
                            $el: _.$el,
                            disableNewLine: false,
                            maxlength: maxlength,
                            eventCallback: function(eventType) {
                                if (eventType == 'blur' && _.$el.text().trim().length == 0) {
                                    _.$el.hide();
                                    $section.trigger('textRemoved', [_.$el.get(0).id]);
                                    toolBar.hide();
                                } else if (eventType == 'input' || eventType == 'paste') {
                                    clearTimeout(_.$el.inputFinished);
                                    _.$el.inputFinished = setTimeout(function() {
                                        let text = _.$el.html().trim()
                                            .replace(/<br.*?>/ig, '\n')
                                            .replace(/&nbsp;/ig, '');
                                        var settingNameAjax = '';
                                        switch (id) {
                                            case 'promoText1':
                                                settingNameAjax = 'text1';
                                                break;
                                            case 'promoText2':
                                                settingNameAjax = 'text2';
                                                break;
                                            case 'promoText3':
                                                settingNameAjax = 'text3';
                                                break;
                                        }
                                        updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                            [settingNameAjax]: decodeEntities(text)
                                        });
                                    }, 300);
                                }
                            }
                        });
                    };
                    _.init();
                    return _;
                };

                function TextVisiblityHandler(settings) {
                    var _ = {
                        $section: settings.$section,
                        $elements: settings.$elements,
                        isHomepage: settings.isHomepage,
                        $toolBar: {},
                        textOrder: settings.textOrder,
                    };
                    _.init = function() {
                        _.$elements.each(function(index, el) {
                            var $this = $(this);
                            $this.off('mouseenter.textVisiblityHandler').on('mouseenter.textVisiblityHandler', function(event) {
                                _.hideAllToolBars();
                                if (_.$toolBar[$this.get(0).id].hasClass('disabled')) return;
                                if ($('html').hasClass('disable-inline-wizard')) return;
                                _.$toolBar[$this.get(0).id].addClass('active');
                                _.setPosition($this);
                                clearTimeout(_.$toolBar[$this.get(0).id].hideDelay);
                                $this.off('mouseout.textVisiblityHandler').one('mouseout.textVisiblityHandler', function(event) {
                                    clearTimeout(_.$toolBar[$this.get(0).id].hideDelay);
                                    _.$toolBar[$this.get(0).id].hideDelay = setTimeout(function() {
                                        _.hide($this.get(0).id);
                                    }, 100);
                                });
                                disableEnableControllers($this);
                            });
                            _.$section.off('textRemoved.TextVisiblityHandler.removeText').on('textRemoved.TextVisiblityHandler.removeText', function(event, elementID) {
                                _.$elements.each(function(index, el) {
                                    if (elementID != $(this).get(0).id) return;
                                    $(this).empty();
                                });
                            });
                            addController($this);
                        });
                        _.$section.data('text-visibility-handler', _);
                    };
                    _.hideAllToolBars = function() {
                        $.each(_.$toolBar, function(index, $el) {
                            _.hide($el.data('rel'));
                        });
                    };
                    _.hide = function(id) {
                        _.$toolBar[id].tooltip('hide');
                        _.$toolBar[id].removeClass('active');
                    };
                    _.enable = function(id) {
                        if (id) {
                            _.$toolBar[id].removeClass('disabled');
                        } else {
                            $.each(_.$toolBar, function(index, $el) {
                                $el.removeClass('disabled');
                            });
                        }
                    };
                    _.disable = function(id) {
                        if (id) {
                            _.$toolBar[id].addClass('disabled');
                        } else {
                            $.each(_.$toolBar, function(index, $el) {
                                $el.addClass('disabled');
                            });
                        }
                    };
                    _.setPosition = function($el) {
                        var $controller = _.$toolBar[$el.get(0).id];
                        var offset = $el.get(0).getBoundingClientRect();
                        var top = offset.top + $(window).scrollTop();
                        var isRtl = $('html[dir="rtl"]').length > 0;
                        var outlineOffSet = {
                            x: 7,
                            y: 7
                        };
                        if ($el.closest('.s123-resizable').length > 0) {
                            outlineOffSet.x = -15;
                        }
                        if (isRtl) {
                            offset.left -= getScrollbarWidth();
                        }
                        $controller.css({
                            top: (top + offset.height - ($controller.outerHeight(true) / 2)) + outlineOffSet.y
                        });
                        var textAlign = $el.css('text-align');
                        if (textAlign != 'left' && textAlign != 'right' && textAlign != 'center') {
                            textAlign = $('html[dir="rtl"]').length > 0 ? 'right' : 'left';
                        }
                        if (textAlign == 'center') {
                            if (isRtl) {
                                $controller.css({
                                    left: offset.left - outlineOffSet.x,
                                });
                            } else {
                                $controller.css({
                                    left: offset.right - $controller.outerWidth(true) + outlineOffSet.x,
                                });
                            }
                        } else if (textAlign == 'left') {
                            $controller.css({
                                left: offset.right - $controller.outerWidth(true) + outlineOffSet.x,
                            });
                        } else if (textAlign == 'right') {
                            $controller.css({
                                left: offset.left - outlineOffSet.x
                            });
                        }
                    };

                    function disableEnableControllers($el) {
                        var $controller = _.$toolBar[$el.get(0).id];
                        var $addNew = $controller.find('.add-text');
                        var $remove = $controller.find('.remove-text');
                        var title = '';
                        var isDisabled = true;
                        $addNew.tooltip('destroy');
                        $remove.tooltip('destroy');
                        _.$elements.each(function(index, el) {
                            if ($(this).text().length == 0) {
                                isDisabled = false;
                                return false;
                            }
                        });
                        if (isDisabled) {
                            title = translations.textVisibilityHanlder.addNewTitleTooltipDisabled.replace('{{titlesAmount}}', _.$elements.length);
                            $addNew.addClass('disabled');
                        } else {
                            title = translations.textVisibilityHanlder.addNewTitleTooltip;
                            $addNew.removeClass('disabled');
                        }
                        $addNew.tooltip({
                            title: title,
                            container: 'body',
                            placement: 'top',
                            trigger: 'hover',
                            delay: {
                                show: 2000,
                                hide: 0
                            }
                        });
                        $remove.tooltip({
                            title: translations.textVisibilityHanlder.removeTitleTooltip,
                            container: 'body',
                            placement: 'top',
                            trigger: 'hover',
                            delay: {
                                show: 2000,
                                hide: 0
                            }
                        });
                    }

                    function addController($el) {
                        var html = '';
                        html += '<div class="previewManageButton t-v-handler-tools" data-style="round" data-rel="' + $el.get(0).id + '">';
                        html += '<a class="p-m-b-design add-text" href="#">';
                        html += '<i class="fa fa-plus"></i>';
                        html += '</a>';
                        html += '<a class="p-m-b-design remove-text" href="#">';
                        html += '<i class="fa fa-trash"></i>';
                        html += '</a>';
                        html += '</div>';
                        var $html = $(html);
                        $html.off('click.textVisiblityHandler').on('click.textVisiblityHandler', 'a', function(event) {
                            event.preventDefault();
                            var $this = $(this);
                            if ($this.hasClass('disabled')) return;
                            _.hide($el.get(0).id);
                            if ($this.hasClass('add-text')) {
                                _.$elements.each(function(index, el) {
                                    var $this = $(this);
                                    if ($this.text().length == 0) {
                                        $this.show().text(translations.textVisibilityHanlder.newTitle).trigger('input');
                                        placeCaretAtEnd($this.get(0));
                                        _.$section.trigger('resetTextStyles', [$this]);
                                        _.$section.trigger('textAdded', [$this.get(0).id]);
                                        return false;
                                    }
                                });
                            } else if ($this.hasClass('remove-text')) {
                                _.$section.trigger('textRemoved.TextVisiblityHandler.removeText', [$el.get(0).id]);
                                $el.trigger('input').trigger('blur');
                                _.$section.trigger('textRemoved', [$el.get(0).id]);
                            }
                            disableEnableControllers($el);
                        });
                        $html.off('mouseout.textVisiblityHandler').on('mouseout.textVisiblityHandler', function(event) {
                            event.stopPropagation();
                            clearTimeout(_.$toolBar[$el.get(0).id].hideDelay);
                            _.$toolBar[$el.get(0).id].hideDelay = setTimeout(function() {
                                _.hide($el.get(0).id);
                            }, 100);
                        });
                        $html.off('mouseover.textVisiblityHandler').on('mouseover.textVisiblityHandler', function(event) {
                            event.stopPropagation();
                            clearTimeout(_.$toolBar[$el.get(0).id].hideDelay);
                        });
                        _.$toolBar[$el.get(0).id] = $html;
                        $('body').append($html);
                    }
                    _.init();
                    return _;
                }

                function SectionMainTextBtn(settings) {
                    var _ = {
                        $section: settings.$section,
                        $elements: settings.$elements,
                        $container: settings.$container,
                        isHomepage: settings.isHomepage
                    };
                    _.init = function() {
                        _.$controller = $(generateHtml());
                        _.$controller.tooltip('destroy');
                        _.$controller.tooltip({
                            title: translations.sectionMainTextBtn.addTextTooltip,
                            container: 'body',
                            placement: 'top'
                        });
                        _.$controller.off('click.SectionMainTextBtn').on('click.SectionMainTextBtn', 'a', function(event) {
                            event.preventDefault();
                            _.$section.trigger('textAdded', [_.$elements.first().get(0).id]);
                            _.$section.trigger('resetTextStyles', [_.$elements.first()]);
                            _.$elements.first().show().text(translations.textVisibilityHanlder.newTitle).trigger('input');
                            placeCaretAtEnd(_.$elements.first().get(0));
                        });
                        _.$container.prepend(_.$controller);
                        _.$section.off('textAdded.SectionMainTextBtn').on('textAdded.SectionMainTextBtn', function(event) {
                            _.setState('disabled');
                        });
                        _.$section.off('textRemoved.SectionMainTextBtn').on('textRemoved.SectionMainTextBtn', function(event) {
                            if (hasNoTexts()) {
                                _.setState('active');
                            }
                        });
                        if (hasNoTexts()) {
                            _.setState('active');
                        }
                        if (_.isHomepage) {
                            _.$elements.each(function(index, el) {
                                var $this = $(this);
                                topWindow.$('#' + $this.get(0).id).off('input.SectionMainTextBtn').on('input.SectionMainTextBtn', function() {
                                    clearInterval(_.delay);
                                    _.delay = setTimeout(function() {
                                        if (hasNoTexts()) {
                                            _.setState('active');
                                        }
                                    }, 500);
                                });
                            });
                        }
                        _.$section.addClass('s-m-t-b');
                    };
                    _.setState = function(state) {
                        _.$section.attr('data-s-m-t-b', state);
                    };

                    function generateHtml() {
                        var html = '';
                        html += '<div class="previewManageButton section-main-text-btn" data-rel="' + _.$section.get(0).id + '">';
                        html += '<a class="p-m-b-design remove-text" href="#">';
                        html += '<i class="fa fa-plus"></i>&nbsp;' + S123.escapeHtml(translations.sectionMainTextBtn.addText);
                        html += '</a>';
                        html += '</div>';
                        return html;
                    }

                    function hasNoTexts() {
                        var noTexts = true;
                        _.$elements.each(function() {
                            if (_.isHomepage) {
                                if ($(this).is(':visible')) {
                                    noTexts = false;
                                    return false;
                                }
                            } else {
                                if ($(this).html().length > 0) {
                                    noTexts = false;
                                    return false;
                                }
                            }
                        });
                        return noTexts;
                    }
                    _.init();
                    return _;
                }
                return _;
            }();
            OldHomepageAndOldPromo.init();

            function convertSloganToEditable($slogan, moduleTypeNUM, moduleID) {
                var editableSlogan = new S123EditableElement({
                    $el: $slogan,
                    disableNewLine: false,
                    maxlength: 500,
                    eventCallback: function(eventType) {
                        if (eventType == 'focus') {
                            $slogan.data('slogan', $slogan.html());
                        } else if (eventType == 'blur') {
                            if ($slogan.data('slogan') != $slogan.html()) {
                                var slogan = $slogan.html().trim()
                                    .replace(/<br.*?>/ig, '\n');
                                topWindow.savePageSlogan(moduleTypeNUM, moduleID, decodeEntities(slogan), false);
                            }
                        }
                    }
                });
                OutlineHandler.register($slogan);
                OutlineHandler.refresh();
                S123ResizeObserver.refresh();
                var s123FloatingBar = new S123FloatingBar({
                    $el: $slogan,
                    template: '<div class="previewManageButton" data-header-style="' + topWindow.$('#page_header_style').val() + '"><a href="#" class="p-m-b-design remove-slogan"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></a></div>',
                    placement: 'bottom',
                    type: 'moduleSlogan',
                    showCallback: function(instance) {
                        instance.$html.find('.remove-slogan').tooltip({
                            title: translations.S123FloatingBar.removeSloganTolltip,
                            container: 'body',
                            placement: 'auto',
                            delay: {
                                show: 2000,
                                hide: 0
                            }
                        });
                        instance.$html.find('.remove-slogan').on('click', function(event) {
                            event.preventDefault();
                            instance.$html.find('.remove-slogan').tooltip('destroy');
                            removeSlogan();
                        });
                    }
                });
                $(document).on('removeSlogan.' + moduleID, function() {
                    removeSlogan();
                });

                function removeSlogan() {
                    $slogan.empty();
                    topWindow.savePageSlogan(moduleTypeNUM, moduleID, '', false);
                    s123FloatingBar.destroy();
                    editableSlogan.destroy();
                    OutlineHandler.destroy($slogan.get(0).id);
                    $(document).off('removeSlogan.' + moduleID);
                }
            }

            function placeCaretAtEnd(el) {
                el.focus();
                if (typeof window.getSelection != "undefined" &&
                    typeof document.createRange != "undefined") {
                    var range = document.createRange();
                    range.selectNodeContents(el);
                    range.collapse(false);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                } else if (typeof document.body.createTextRange != "undefined") {
                    var textRange = document.body.createTextRange();
                    textRange.moveToElementText(el);
                    textRange.collapse(false);
                    textRange.select();
                }
            }
            $(document).off('wizard.preview.device.changed.previewHelper').on('wizard.preview.device.changed.previewHelper', function(event, deviceType) {
                $('[data-s123-editable-elements="true"]').each(function() {
                    var $el = $(this);
                    if (deviceType != 'computer') {
                        $el.data('s123-editable-elements').disable();
                    } else {
                        $el.data('s123-editable-elements').enable();
                    }
                });
            });
        })();
        (function() {
            var $global_contact_details_container = $('#popupFloatDivSearch').find('.global-contact-details-container');
            if ($global_contact_details_container.length === 0) return;
            $global_contact_details_container.find('a').off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                event.preventDefault();
            });
            $global_contact_details_container.off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                if (topWindow.$('#collapseHeaderOptionsEnterPhoneNumber > a').length === 0) return;
                if ($global_contact_details_container.data('type') == 'address') {
                    topWindow.$('#collapseHeaderOptionsEnterAddress > a').trigger('click');
                } else {
                    topWindow.$('#collapseHeaderOptionsEnterPhoneNumber > a').trigger('click');
                }
            });
        })();
        (function() {
            $('.contact-as-details-container').each(function(index) {
                var $contact_as_details_container = $(this);
                $contact_as_details_container.find('a')
                    .attr('data-allow-external-link', 'true') // prevent from the external links alert to be shown
                    .off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                        event.preventDefault();
                    });
                $contact_as_details_container.off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                    $contact_as_details_container.closest('section').find('.previewManageButton a.edit').trigger('click');
                });
            });
        })();
        (function() {
            $('.social-details-container').each(function(index) {
                var $social_details_container = $(this);
                var $homepage_goal = $social_details_container.closest('.homepage_goal');
                $social_details_container.find('a')
                    .attr('data-allow-external-link', 'true') // prevent from the external links alert to be shown
                    .off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                        event.preventDefault();
                    });
                if ($homepage_goal.length > 0) {
                    $homepage_goal.find('.p-m-b-floating-menu-btn[data-type="edit"]')
                        .off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                            if (topWindow.$('#showSocialEditButtonForHeader').length === 0) return;
                            topWindow.$('#showSocialEditButtonForHeader').trigger('click');
                        });
                } else {
                    $social_details_container
                        .off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                            if (topWindow.$('#showSocialEditButtonForHeader').length === 0) return;
                            topWindow.$('#showSocialEditButtonForHeader').trigger('click');
                        });
                }
            });
        })();
        (function() {
            $('.upgrade-website-preview-helper').each(function(index) {
                var $upgrade_website_preview_helper = $(this);
                $upgrade_website_preview_helper.find('a')
                    .attr('data-allow-external-link', 'true') // prevent from the external links alert to be shown
                    .off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                        event.preventDefault();
                    });
                $upgrade_website_preview_helper.off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
                    if (topWindow.$('#upgradePackage').length === 0) return;
                    topWindow.$('#upgradePackage').data('upgrade-reason', 'upgrade-website-preview-helper').modal('show');
                });
            });
        })();
        (function() {
            $(document).off('S123MagicButton.initialized.preview_helpers').on('S123MagicButton.initialized.preview_helpers', function(event, type) {
                addFloatingMenu({
                    type: 'magicButton',
                    $element: $('.all-magic-buttons')
                });
                if (type == 'contact') {
                    addFloatingMenuBtn($('.all-magic-buttons .p-m-b-floating-menu[data-type="magicButton"]'), {
                        type: type,
                        text: translations.magicBtn.editMagicContactButton,
                        click: function(event) {
                            topWindow.Wizard.magicContactButton.popup.show();
                        }
                    }, true);
                } else if (type == 'share') {
                    addFloatingMenuBtn($('.all-magic-buttons .p-m-b-floating-menu[data-type="magicButton"]'), {
                        type: type,
                        text: translations.magicBtn.editMagicShareButton,
                        click: function(event) {
                            topWindow.Wizard.magicShareButton.popup.show();
                        }
                    }, true);
                }
                OutlineHandler.register($('.all-magic-buttons'));
                OutlineHandler.refresh();
                (function() {
                    $(document).off('wizard.preview.device.changed.magicButton').on('wizard.preview.device.changed.magicButton', function(event) {
                        showHideHelpers();
                    });
                    showHideHelpers();

                    function showHideHelpers() {
                        if (topWindow.Wizard.Preview.Scale.mode == 'mobile') {
                            $('.all-magic-buttons .p-m-b-floating-menu').addClass('hidden');
                            OutlineHandler.destroy($('.all-magic-buttons').get(0).id);
                        } else {
                            $('.all-magic-buttons .p-m-b-floating-menu').removeClass('hidden');
                            OutlineHandler.register($('.all-magic-buttons'));
                        }
                    }
                })();
            });
        })();
        (function() {
            ModuleItemsOutlineHandler.init();
        })();
        (function() {
            if (!IsHomepage() && !IsRichPage() && !IsInsidePage()) return;
            var modulesOrder = [];
            if (IsRichPage()) {
                topWindow.Wizard.Pages.listParent.find('li[data-parent-id="' + $('.s123-module-rich-page').data('module-id') + '"]').each(function(index, page) {
                    var $page = $(page);
                    modulesOrder.push($page.data('moduleid'));
                });
            } else if ((IsHomepage() && !IsRichPage())) {
                topWindow.Wizard.Pages.listParent.find('li[data-parent-id=""]').each(function(index, page) {
                    var $page = $(page);
                    if ($page.data('module-mp-show-in-home') != 1) return;
                    modulesOrder.push($page.data('moduleid'));
                });
            } else if (IsInsidePage() && !IsRichPage()) {
                if (topWindow.IsSinglePage()) return;
                topWindow.Wizard.Pages.listParent.find('li#card_' + $('section.s123-module').data('module-id')).each(function(index, page) {
                    var $page = $(page);
                    if ($.inArray($page.data('moduletypenum').toString(), topWindow.RichPage.unAddableModules) != -1) return;
                    modulesOrder.push($page.data('moduleid'));
                });
                if (modulesOrder.length == 0) return;
            }
            if (IsRichPage()) {
                var isPromoFirst = true;
                modulesOrder = modulesOrder.filter(function(moduleID, index) {
                    var $module = topWindow.Wizard.Pages.getPage(moduleID);
                    if (isPromoFirst && ($module.data('moduletypenum') == 1000)) {
                        return false;
                    }
                    if ($module.data('moduletypenum') != 1000) {
                        isPromoFirst = false;
                    }
                    return true;
                });
            }
            $('section.s123-module').each(function(index, page) {
                var $section = $(this);
                var moduleID = $section.data('module-id');
                var moduleTypeNUM = $section.data('module-type-num');
                if (moduleTypeNUM == '169') return;
                if ($section.hasClass('s123-module-rich-page')) {
                    if ($section.attr('data-sections-amount') == 0) {
                        var $previewManageButton = $('<div class="previewManageButton" data-type="richpageEmptySction"></div>');
                        addFloatingMenu({
                            type: 'richpageEmptySction',
                            $element: $previewManageButton,
                            buttons: [{
                                text: translations.sectionManager.addNewSection,
                                click: function(event) {
                                    event.preventDefault();
                                    addNewSectionButtonClickEvent('after', null, moduleID, $(event.target));
                                }
                            }, {
                                text: translations.sectionManager.removeModule,
                                classList: 'delete',
                                customAttributes: 'data-module-id="' + moduleID + '"'
                            }]
                        });
                        $section.append($previewManageButton);
                    }
                    return;
                }
                $section.removeClass('first-section');
                $section.removeClass('last-section');
                if (modulesOrder.length == 0) {
                    $section.addClass('first-section');
                    $section.addClass('last-section');
                } else {
                    if (modulesOrder.indexOf(moduleID) == 0) {
                        $section.addClass('first-section');
                    }
                    if (modulesOrder.indexOf(moduleID) == modulesOrder.length - 1) {
                        $section.addClass('last-section');
                    }
                }
                if ($section.find('.previewManageButton.right-side-btns').length == 0) {
                    var html = '';
                    html += '<div class="previewManageButton right-side-btns"></div>';
                    var $btnsContainer = $(html);
                    $section.append($btnsContainer);
                    if (modulesLimitedToOne.indexOf(moduleTypeNUM) == -1) {
                        var duplicateModule = new DuplicateModule({
                            moduleID: moduleID,
                            moduleTypeNUM: moduleTypeNUM,
                            $btnsContainer: $btnsContainer
                        });
                    }
                    var sortableSections = new S123SortableSections({
                        $section: $section,
                        $btnsContainer: $btnsContainer
                    });
                    if (![169, 1000].includes(parseInt(moduleTypeNUM))) {
                        $x = `
<div class="preview-module-delete">
<a class="p-m-b-design delete icon-only-tooltip" data-title="${translations.previewRemoveSectionTT}" data-module-id="${moduleID}" data-module-type="${moduleTypeNUM}" data-item-unique-id=""><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fal fa-regular fa-trash-can fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg></a>
</div>
`;
                        $section.find('.previewManageButton.right-side-btns').append($x);
                    }
                } else {
                    $section.find('.s123-sortable').data('s123-sortable').disableEnableSortingIcon();
                }
                var $module = topWindow.Wizard.Pages.getPage(moduleID);
                addNewSectionButton($section, $module.data('parent-id'));
            });
            if (topWindow.abTestTXT == 'siteEditor_b') {
                addNewSectionButton($('section#section-169'), '');
            } else {
                addNewSectionButton($('section#top-section'), '');
            }
            $('.s123-module[data-module-type-num="1000"]').each(function() {
                var $section = $(this);
                var $minHeight = $section.find('[data-action="minHeight"]');
                var $container = $section.find('.promo-container');
                var $promoTextWidth = $container.find('.start');
                var $promoGoalsWidth = $container.find('.end');
                if ($minHeight.hasClass('s123-p')) return;
                var promoMinHeight = null;
                var promoTextWidth = null;
                var promoPadding = null;
                var content = '';
                content += '<div>';
                content += '<div class="sliders-container"></div>';
                content += '<div class="custom-padding"></div>';
                content += '</div>';
                var $content = $(content);
                var promoSizing = new S123PopOver({
                    $el: $minHeight,
                    customClass: 'homepage-sizing',
                    popoverSettings: {
                        content: $content,
                        placement: $('html').attr('dir') === 'rtl' ? 'left' : 'right'
                    },
                    showCallback: function() {
                        promoMinHeight = new S123Slider({
                            label: translations.sectionManager.sectionMinHeight + ' (%)',
                            tooltip: '',
                            design: 'oneLine',
                            getValue: function() {
                                return Math.ceil((parseInt($container.css('min-height')) * 100) / $(window).height());
                            },
                            type: 'promoMinHeight',
                            numberKind: 1,
                            minValue: 1,
                            maxValue: 100,
                            callback: function(event, value, isLive) {
                                $section.addClass('has-custom-height');
                                $container.css({
                                    minHeight: value + 'vh'
                                });
                                if (!isLive) {
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        customHeight: value
                                    });
                                }
                            }
                        });
                        promoTextWidth = new S123Slider({
                            label: translations.promoWidth.textSideWidth + ' (%)',
                            tooltip: '',
                            design: 'oneLine',
                            getValue: function() {
                                return parseInt($promoTextWidth.data('width'));
                            },
                            type: 'promoTextWidth',
                            numberKind: 1,
                            minValue: 20,
                            maxValue: 80,
                            startCallback: function(event) {
                                $(document).trigger('S123Resize.start');
                            },
                            callback: function(event, newWidth, isLive) {
                                $promoTextWidth.data('width', newWidth);
                                $promoTextWidth.css({
                                    width: newWidth + '%'
                                });
                                $promoGoalsWidth.css({
                                    width: (100 - newWidth) + '%'
                                });
                                if (!isLive) {
                                    $(document).trigger('s123.page.ready.refreshParallaxImages');
                                    $(document).trigger('homepageAndPromoEditor.refreshResizable', ['promo', $section.data('module-id')]);
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        widthSize_start: newWidth
                                    });
                                }
                            }
                        });
                        promoPadding = new S123SectionPadding({
                            paddingTop: $container.data('custom-padding-top'),
                            paddingBottom: $container.data('custom-padding-bottom'),
                            calculatePadding: function(type) {
                                if ($section.hasClass('twoSideCallAction')) {
                                    if (type == 'top') {
                                        return (parseInt($container.css('padding-top')) + parseInt($container.find('.end').css('padding-top')));
                                    } else if (type == 'bottom') {
                                        return (parseInt($container.css('padding-bottom')) + parseInt($container.find('.end').css('padding-bottom')));
                                    }
                                } else {
                                    if (type == 'top') {
                                        return parseInt($container.css('padding-top'));
                                    } else if (type == 'bottom') {
                                        return parseInt($container.css('padding-bottom'));
                                    }
                                }
                            },
                            currentTab: $section.hasClass('custom-padding') ? 'custom' : 'auto',
                            tabShowCallback: function(type, paddingTop, paddingBottom) {
                                if (type == 'custom') {
                                    $container.css({
                                        paddingTop: paddingTop + 'px',
                                        paddingBottom: paddingBottom + 'px'
                                    });
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        paddingType: 'custom',
                                        paddingTop: paddingTop,
                                        paddingBottom: paddingBottom,
                                    }, false);
                                    $section.addClass('custom-padding');
                                } else if (type == 'auto') {
                                    $section.removeClass('custom-padding');
                                    $container.css({
                                        paddingTop: '',
                                        paddingBottom: ''
                                    });
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        paddingType: 'auto'
                                    });
                                }
                                $(document).trigger('S123PopOver.reposition');
                                $(document).trigger('s123.page.ready.refreshParallaxImages');
                                showHideAddNewSection($section, parseInt($container.css('padding-bottom')));
                            },
                            changeCallback: function(type, newValue) {
                                if (type == 'paddingTop') {
                                    $container.css({
                                        paddingTop: newValue + 'px'
                                    });
                                    $container.data('custom-padding-top', newValue);
                                } else {
                                    $container.css({
                                        paddingBottom: newValue + 'px'
                                    });
                                    $container.data('custom-padding-bottom', newValue);
                                }
                                showHideAddNewSection($section, parseInt($container.css('padding-bottom')));
                            },
                            finishTypingCallback: function(type, newValue) {
                                if (type == 'paddingTop') {
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        paddingTop: newValue
                                    });
                                } else {
                                    updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), {
                                        paddingBottom: newValue
                                    });
                                }
                                $(document).trigger('s123.page.ready.refreshParallaxImages');
                            }
                        });
                        $content.find('.sliders-container').append(promoMinHeight.$el);
                        $content.find('.sliders-container').append(promoTextWidth.$el);
                        $content.find('.custom-padding').html(promoPadding.$html);
                        promoTextWidth.$el.hide();
                        if ($section.hasClass('twoSideCallAction')) {
                            promoTextWidth.$el.show();
                        }
                        if ($section.find('.promoImageInline').length == 0) {
                            promoPadding.setTab('auto');
                            promoPadding.disable();
                        } else {
                            promoPadding.enable();
                        }
                    },
                    hiddenCallback: function() {
                        promoMinHeight.destroy();
                        promoTextWidth.destroy();
                    }
                });
                showHideAddNewSection($section, parseInt($container.css('padding-bottom')));
            });
            if (!IsRichPage() && $('#top-section').length > 0 && !IsInsidePage()) {
                var $homepage = $('#top-section');
                var $magic_homepage = $homepage.children('.magic_homepage');
                var $hmlMinHeight = $homepage.find('[data-action="hmlMinHeight"]');
                if ($hmlMinHeight.hasClass('s123-p')) return;
                var homepageMinHeight = null;
                var homepageTextWidth = null;
                var homepagePadding = null;
                var content = '';
                content += '<div>';
                content += '<div class="sliders-container"></div>';
                content += '<div class="custom-padding"></div>';
                content += '</div>'
                var $content = $(content);
                var s123PopOver = new S123PopOver({
                    $el: $hmlMinHeight,
                    customClass: 'homepage-sizing',
                    popoverSettings: {
                        content: $content,
                        placement: $('html').attr('dir') === 'rtl' ? 'left' : 'right'
                    },
                    showCallback: function() {
                        homepageMinHeight = new S123Slider({
                            label: translations.sectionManager.sectionMinHeight + ' (%)',
                            tooltip: '',
                            design: 'oneLine',
                            getValue: function() {
                                return topWindow.$('#homepage_layout_height').val();
                            },
                            type: 'hmMinHeight',
                            numberKind: 1,
                            minValue: 50,
                            maxValue: 100,
                            callback: function(event, value, isLive) {
                                document.documentElement.style.setProperty('--homepage_layout_height_vh', value + 'vh');
                                if (!isLive) {
                                    topWindow.$('#homepage_layout_height').val(value).trigger('change');
                                }
                            }
                        });
                        homepageTextWidth = new S123Slider({
                            label: translations.homepageWidth.textSideWidth + ' (%)',
                            tooltip: '',
                            design: 'oneLine',
                            getValue: function() {
                                return topWindow.$('#layout_left_side_width').val();
                            },
                            type: 'hmTextWidth',
                            numberKind: 1,
                            minValue: 20,
                            maxValue: 80,
                            startCallback: function(event) {
                                $(document).trigger('S123Resize.start');
                            },
                            callback: function(event, value, isLive) {
                                topWindow.$('#layout_left_side_width').val(value).trigger('input');
                                if (!isLive) {
                                    $(document).trigger('s123.page.ready.refreshParallaxImages');
                                    if (topWindow.abTestTXT == 'siteEditor_b') {
                                        $(document).trigger('homepageAndHeaderEditor.refreshResizable', ['homepage']);
                                    } else {
                                        $(document).trigger('homepageAndPromoEditor.refreshResizable', ['homepage']);
                                    }
                                }
                            }
                        });
                        homepagePadding = new S123SectionPadding({
                            paddingTop: topWindow.$('#homepage_padding_top').val(),
                            paddingBottom: topWindow.$('#homepage_padding_bottom').val(),
                            calculatePadding: function(type) {
                                if (type == 'top') {
                                    if ($.isNumeric(topWindow.$('#homepage_padding_top').val())) {
                                        return topWindow.$('#homepage_padding_top').val();
                                    } else {
                                        return 50;
                                    }
                                } else if (type == 'bottom') {
                                    var style = getComputedStyle(document.body);
                                    if ($.isNumeric(topWindow.$('#homepage_padding_bottom').val())) {
                                        return topWindow.$('#homepage_padding_bottom').val();
                                    } else {
                                        return 50 + parseInt(style.getPropertyValue('--homepage_layout_height_opacity_space_top')) + parseInt(style.getPropertyValue('--homepage_layout_height_opacity_space_bottom'));
                                    }
                                }
                            },
                            currentTab: topWindow.$('#homepage_padding_type').val(),
                            tabShowCallback: function(type) {
                                if (type == 'custom') {
                                    $('#top-section').addClass('custom-padding');
                                } else if (type == 'auto') {
                                    $('#top-section').removeClass('custom-padding');
                                }
                                topWindow.$('#homepage_padding_type').val(type);
                                $(document).trigger('S123PopOver.reposition');
                                $(document).trigger('s123.page.ready.refreshParallaxImages');
                                showHideAddNewSection($homepage, parseInt($magic_homepage.css('padding-bottom')));
                            },
                            changeCallback: function(type, newValue) {
                                if (type == 'paddingTop') {
                                    document.documentElement.style.setProperty('--homepage_padding_top', newValue + 'px');
                                    topWindow.$('#homepage_padding_top').val(newValue);
                                } else {
                                    document.documentElement.style.setProperty('--homepage_padding_bottom', newValue + 'px');
                                    topWindow.$('#homepage_padding_bottom').val(newValue);
                                }
                                showHideAddNewSection($homepage, parseInt($magic_homepage.css('padding-bottom')));
                            },
                            saveCallback: function() {
                                topWindow.AutoSaveWizard(false, true);
                                $(document).trigger('s123.page.ready.refreshParallaxImages');
                            }
                        });
                        $content.find('.sliders-container').append(homepageMinHeight.$el);
                        $content.find('.sliders-container').append(homepageTextWidth.$el);
                        $content.find('.custom-padding').html(homepagePadding.$html);
                        $hmlMinHeight.tooltip('hide');
                        homepageTextWidth.$el.hide();
                        if (topWindow.$('#homepage_layout_kind').val() == '2' || topWindow.$('#homepage_layout_kind').val() == '3') {
                            homepageTextWidth.$el.show();
                            homepagePadding.hide();
                        } else if (topWindow.$('#homepage_goal_type').val() != 'no' && (topWindow.$('#homepage_goal_place').val() == 'right' || topWindow.$('#homepage_goal_place').val() == 'left')) {
                            homepageTextWidth.$el.show();
                            homepagePadding.show();
                        }
                        $magic_homepage.addClass('live-min-height-bug-fix');
                        if (topWindow.$('#homepage_goal_type').val() == 'image') {
                            homepagePadding.enable();
                        } else {
                            homepagePadding.setTab('auto');
                            homepagePadding.disable();
                        }
                    },
                    hideCallback: function() {
                        $magic_homepage.removeClass('live-min-height-bug-fix');
                    },
                    hiddenCallback: function() {
                        homepageMinHeight.destroy();
                        homepageTextWidth.destroy();
                        $magic_homepage.removeClass('live-min-height-bug-fix');
                    }
                });
                showHideAddNewSection($homepage, parseInt($magic_homepage.css('padding-bottom')));
            }

            function showHideAddNewSection($section, paddingBottom) {
                var $addSectionAfter = $section.find('.p-s-m');
                $addSectionAfter.removeClass('hidden');
                var btnHeight = $addSectionAfter.height();
                if (!$section.hasClass('custom-padding')) return;
                if (paddingBottom < btnHeight) {
                    $addSectionAfter.addClass('hidden');
                } else if (paddingBottom > btnHeight) {
                    $addSectionAfter.removeClass('hidden');
                }
            }

            function addNewSectionButton($section, parentID) {
                if (IsInsidePage()) return;
                if ($section.find('.p-s-m').length > 0) return;
                var html = '';
                html += '<div class="p-s-m {{position}} previewManageButton" data-style="round">';
                html += '<a href="#" class="p-m-b-design p-s-m-btn icon-only-tooltip" data-parent-id="' + parentID + '" data-rel="tooltip" title="' + S123.escapeHtml(translations.sectionManager.addNewSection) + '">';
                html += '<i class="fa fa-plus"></i>';
                html += '</a>';
                html += '</div>';
                if ($section.length > 0 && $section.get(0).id != 'top-section') {
                    $section.prepend(html.replace('{{position}}', 'on-top'));
                }
                $section.append(html.replace('{{position}}', 'on-bottom'));
                $section.find('.p-s-m a').on('click', function(event) {
                    event.preventDefault();
                    if ($section.length > 0 && $section.get(0).id == 'top-section') {
                        var $module = topWindow.Wizard.Pages.list.first();
                        var action = 'before';
                    } else {
                        var $module = topWindow.Wizard.Pages.getPage($section.data('module-id'));
                        var action = $(this).parent().hasClass('on-top') ? 'before' : 'after';
                    }
                    addNewSectionButtonClickEvent(action, $module, $module.data('parent-id'), $(this));
                });
            }

            function addNewSectionButtonClickEvent(action, $module, parentID, $btn) {
                topWindow.g_ManageAddModuleData = {
                    action: action,
                    $module: $module,
                    parentID: parentID,
                    isRichPage: IsRichPage()
                };
                topWindow.$('#AddModuleWin').modal('show', $btn);
            }
        })();
        $('#top-section').on('click', function(event) {
            const $target = $(event.target);
            const goalType = topWindow.$('#homepage_goal_type').val();
            const homepageLayout = topWindow.$('#homepage_layout_kind').val();
            const isGoalClicked = $target.hasClass('w-helper') || $target.closest('.w-helper').length > 0;
            const isTextClicked = $target.hasClass('hm-txt') || $target.closest('.hm-txt').length > 0;
            if (isGoalClicked) return;
            if (isTextClicked) return;
            if (['2', '3'].includes(homepageLayout)) {
                if ($target.closest('.w-p-bg-el').length > 0) {
                    openHomepageMediaTab();
                } else if ($target.closest('.w-p-colors-el').length > 0) {
                    expandWizardHomepage('homepageTab', '#backgroundOptionsTab');
                    topWindow.Wizard.homePageBgOptions.customizeHandler.$customize.find('[data-related-id="wizardImageTabColorsRecommended"]').trigger('click');
                }
            } else if ($target.hasClass('home-image-bg') || $target.hasClass('objectPlace')) {
                openHomepageMediaTab();
            }
        });
        var $previewManageButton = $('.previewManageButton');
        $previewManageButton.each(function(index) {
            var $pmb = $(this);
            $pmb.find('a').off('click.p_m_buttons');
            switch ($pmb.data('type')) {
                case 'homepage':
                    $pmb.find('a').hide();
                    if (true) {
                        $pmb.find('[data-action="image"]')
                            .on('click.p_m_buttons', function(event) {
                                event.preventDefault();
                                if (topWindow.abTestTXT == 'siteEditor_b') {
                                    if (topWindow.$('#' + topWindow.Wizard.homePageChangingImages.fistInputID).val() == '') {
                                        topWindow.$('#backgroundOptionsTab [data-tab="backgroundColorOptionsTab"]').trigger('click');
                                    } else {
                                        topWindow.$('#backgroundOptionsTab [data-tab="backgroundMediaOptionsTab"]').trigger('click');
                                    }
                                    expandWizardHomepage('homepageTab', '#backgroundOptionsTab');
                                } else {
                                    openHomepageMediaTab();
                                }
                            })
                            .css({
                                display: 'flex'
                            });
                    }
                    $pmb.find('[data-action="layouts"]')
                        .on('click.p_m_buttons', function(event) {
                            event.preventDefault();
                            expandWizardHomepage('homepageTab', '#homepage_styles_box');
                        })
                        .css({
                            display: 'flex'
                        });
                    $pmb.find('[data-action="bgSettings"]')
                        .on('click.p_m_buttons', function(event) {
                            event.preventDefault();
                            expandWizardHomepage('homepageTab', '#backgroundOptionsTab');
                            topWindow.Wizard.homePageBgOptions.customizeHandler.$customize.find('[data-related-id="hmBgSettings"]').trigger('click');
                        })
                        .css({
                            display: 'flex'
                        });
                    $pmb.find('[data-action="wizardImageTabColorsRecommended"]')
                        .on('click.p_m_buttons', function(event) {
                            event.preventDefault();
                            expandWizardHomepage('homepageTab', '#backgroundOptionsTab');
                            topWindow.Wizard.homePageBgOptions.customizeHandler.$customize.find('[data-related-id="wizardImageTabColorsRecommended"]').trigger('click');
                        });
                    $pmb.find('[data-action="goals"]')
                        .on('click.p_m_buttons', function(event) {
                            event.preventDefault();
                            topWindow.$('#homepageImageOptionsTab .hide-available-goals-tools').removeClass('hide-available-goals-tools');
                            topWindow.$('#homepageImageOptionsTab .homepage_goal_type_box.checkboxSingleSetting').addClass('hide-available-goals-tools');
                            topWindow.$('#homepage_goal_type_form').removeClass('showOnlyDesign showOnlySettigns');
                            expandWizardHomepage('homepageTab', '#homepageImageOptionsTab');
                        })
                        .css({
                            display: 'flex'
                        });
                    if (topWindow.$('#template').val() != '15' && topWindow.$('#template').val() != '20') {
                        $pmb.find('[data-action="hmlMinHeight"]')
                            .css({
                                display: 'flex'
                            });
                    }
                    if (topWindow.$('#homepage_layout_kind').val() == '2' || topWindow.$('#homepage_layout_kind').val() == '3') {
                        $pmb.find('[data-action="wizardImageTabColorsRecommended"]').css({
                            display: 'flex'
                        });
                    } else {
                        $pmb.find('[data-action="wizardImageTabColorsRecommended"]').hide();
                        $pmb.addClass('col-count-2');
                    }
                    if ($('#top-section .homepage_goal[data-type="image"]').length > 0) {
                        $pmb.find('[data-action="editImage"]').on('click.p_m_buttons', function(event) {
                                openHomepageGoalTab($('#top-section .homepage_goal[data-type="image"] .w-helper'));
                            })
                            .css({
                                display: 'flex'
                            });
                    }
                    break;
                default:
                    $pmb.find('a.edit').on('click.p_m_buttons', function() {
                        event.preventDefault();
                        var $this = $(this);
                        if ($this.data('module-type') == 1000) {
                            topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + $this.data('module-id') + '"]').closest('li').data('open-tool', 'background-image');
                        }
                        openItemEditModal($this.data('module-id'), $this.data('module-type'), $this.data('item-unique-id'), null);
                    });
                    $pmb.find('a.e-c-manage').on('click.p_m_buttons', function() {
                        event.preventDefault();
                        var $this = $(this);
                        topWindow.Wizard.Ecommerce.openManage($this);
                    });
                    $pmb.find('a.template').on('click.p_m_buttons', function() {
                        event.preventDefault();
                        var $this = $(this);
                        if ($this.data('module-type') == 1000) {
                            topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + $this.data('module-id') + '"]').closest('li').data('open-tool', 'templates-options');
                        }
                        openItemEditModal($this.data('module-id'), $this.data('module-type'), $this.data('item-unique-id'), null);
                    });
                    $pmb.find('a.log-promo-template').on('click.p_m_buttons', function() {
                        event.preventDefault();
                        var $this = $(this);
                        if ($this.data('module-type') == 1000) {
                            topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + $this.data('module-id') + '"]').closest('li').data('open-tool', 'log-template');
                        }
                        openItemEditModal($this.data('module-id'), $this.data('module-type'), $this.data('item-unique-id'), null);
                    });
                    $pmb.find('a.bgSettings').on('click.p_m_buttons', function() {
                        event.preventDefault();
                        var $this = $(this);
                        if ($this.data('module-type') == 1000) {
                            topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + $this.data('module-id') + '"]').closest('li').data('open-tool', 'background-options');
                        }
                        openItemEditModal($this.data('module-id'), $this.data('module-type'), $this.data('item-unique-id'), null);
                    });
                    $pmb.find('.delete').each(function() {
                        var $this = $(this);
                        $this.confirmation({
                            placement: $('html').attr('dir') === 'rtl' ? 'right' : 'left',
                            title: translations.areYouSure,
                            btnOkLabel: '<i class="icon-ok-sign icon-white"></i> ' + translations.yes,
                            btnCancelLabel: '<i class="icon-remove-sign"></i> ' + translations.no,
                            popout: true,
                            singleton: true,
                            container: $this.closest('section.s123-module'),
                            btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
                            btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
                            delay: 0,
                            onConfirm: function() {
                                var $module = topWindow.Wizard.Pages.getPage($(this).data('module-id'));
                                topWindow.RemoveModule($module.find('[data-toggle="confirmation-delete-module"]'));
                            }
                        });
                        $this.on('show.bs.confirmation', function(event) {
                            $(document).on('mousedown.confirmation', function(event) {
                                var $target = $(event.target);
                                if ($target.closest('.popover.confirmation').length === 0 && !$target.hasClass('delete')) {
                                    $this.confirmation('hide');
                                    $(document).off('mousedown.confirmation');
                                }
                            });
                        });
                    });
                    $pmb.find('a.design').on('click.p_m_buttons', function() {
                        event.preventDefault();
                        var $this = $(this);
                        var moduleID = $this.data('module-id');
                        var moduleTypeNUM = $this.data('module-type');
                        var $wizardPage = topWindow.Wizard.Pages.getPage(moduleID);
                        var $designButton = topWindow.$('.moduleSortList .designModuleButton[data-module-id="' + moduleID + '"],.moduleSortList .customDesignModuleButton[data-module-id="' + moduleID + '"]');
                        if (topWindow.RichPage.isChild($wizardPage)) {
                            topWindow.Wizard.Pages.modeManager.set('richPage', topWindow.RichPage.getParent($wizardPage).data('moduleid'), false);
                        }
                        if ($designButton.hasClass('customDesignModuleButton')) {
                            if (IsDataPage() && moduleTypeNUM == 112) {
                                $designButton.data('active-inner-tab', 'productPageTab');
                                var eventID = topWindow.SystemModals.sm_eventReg('moduleWindow', 'hidden', function(event) {
                                    $designButton.data('active-inner-tab', '');
                                    topWindow.SystemModals.sm_eventRemove('moduleWindow', 'show', eventID);
                                });
                            }
                        }
                        $designButton.data('is-content-page', IsDataPage());
                        $designButton.trigger('click', 'wizard-preview');
                        if (moduleTypeNUM == '1000') {
                            $(document).on('promo_reset_button_type', function(event, moduleID) {
                                updateMultipleSettings(moduleID, '1000', {
                                    isCustomButtonType: ''
                                });
                            });
                        }
                        if (!topWindow.modulesArr[moduleTypeNUM].custom_design) {
                            topWindow.OpenWizardTab('pagesTab', true);
                        }
                    });
                    $pmb.find('a.customizeDesign').on('click.p_m_buttons', function() {
                        event.preventDefault();
                        var $this = $(this);
                        var moduleID = $this.data('module-id');
                        var moduleTypeNUM = $this.data('module-type');
                        var $wizardPage = topWindow.Wizard.Pages.getPage(moduleID);
                        var modulesArrID = $wizardPage.data('modules-arr-id');
                        if (modulesArrID == '0' && moduleTypeNUM == '7') {
                            modulesArrID = 7;
                        }
                        topWindow.$('body').trigger('mousedown.preview.styleCustomizerPopover');
                        $('body').trigger('mousedown.preview.styleCustomizerPopover');
                        if ($('body .modules-setting.layout-customizer').data('module-id') == moduleID) return;
                        var moduleLayoutCustomizer = new topWindow.ModuleLayoutCustomizer({
                            $container: $this,
                            defaultData: tryParseJSON(topWindow.modulesArr[modulesArrID]['layout_customize']),
                            moduleID: moduleID,
                            style: modulesArrID,
                            translations: topWindow.translations.layoutCustomizer,
                            isRichPage: topWindow.RichPage.isChild($wizardPage),
                            isRichPageFirstChild: topWindow.RichPage.isFirstChild($wizardPage),
                            IsInsidePage: IsInsidePage(),
                            popoverPlacement: $('html[dir=rtl]').length == topWindow.$('html[dir=rtl]').length ? 'intrface_align_reverse' : 'intrface_align',
                            onChange: function(newlayoutSetting, isRefreshPreviewOnChange) {
                                topWindow.g_ManageModuleID = moduleID;
                                var moduleSetting = topWindow.GetModuleSetting(topWindow.g_ManageModuleID, 'settings');
                                moduleSetting = tryParseJSON(moduleSetting);
                                if (!moduleSetting) {
                                    moduleSetting = {
                                        layout_customize: newlayoutSetting
                                    };
                                } else {
                                    moduleSetting.layout_customize = newlayoutSetting;
                                }
                                topWindow.EditModuleSetting(topWindow.g_ManageModuleID, 'settings', JSON.stringify(moduleSetting));
                                topWindow.BuildToolJSON();
                                topWindow.window.reloadPreviewCSS = topWindow.window.ReloadPreviewCSS;
                                if ($.inArray(parseInt(moduleTypeNUM), [1]) !== -1) {
                                    topWindow.preventScrollOnModalClose = false;
                                } else {
                                    topWindow.preventScrollOnModalClose = true;
                                }
                                if (moduleTypeNUM == '167' || moduleTypeNUM == '169') {
                                    if (topWindow.Wizard.Preview.ready) {
                                        var $module = topWindow.Wizard.Preview.$('#section-' + moduleID);
                                        if ($module.attr('data-version') == undefined || $module.attr('data-version') != '2') {
                                            topWindow.Wizard.UpdateModuleItemSettings(moduleID, moduleTypeNUM, {
                                                    'version': '2'
                                                })
                                                .then(function() {
                                                    if (moduleTypeNUM == '167' || moduleTypeNUM == '169') {
                                                        topWindow.Wizard.InlineModuleEditor.im_reload(moduleID, moduleTypeNUM);
                                                    }
                                                    isRefreshPreviewOnChange = true;
                                                });
                                        }
                                    }
                                }
                                topWindow.AutoSaveWizard(isRefreshPreviewOnChange, true);
                            },
                            onBeforeShow: function(instance) {
                                if ([167, 169].includes(moduleTypeNUM)) {
                                    if ($this.closest('.s123-module.s123-module-headers').data('parallax-images-amount') != 1) {
                                        instance.$popOverContent.find('.image-animation-setting').addClass('hidden');
                                    }
                                }
                            }
                        });
                    });
                    if ($pmb.find('a.edit-image').data('module-type') == 1000) {
                        var $section = $pmb.closest('.s123-module');
                        var $btn = $pmb.find('a.edit-image');
                        if ($section.find('.promoImageInline').length > 0) {
                            $btn.on('click.p_m_buttons', function(event) {
                                event.preventDefault();
                                var $this = $(this);
                                topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + $this.data('module-id') + '"]').closest('li').data('open-tool', 'images-options');
                                openItemEditModal($this.data('module-id'), $this.data('module-type'), $this.data('item-unique-id'));
                            });
                        } else {
                            $btn.hide();
                        }
                    }
                    $pmb.find('a.previewManageButtonAiText').each(function() {
                        var $this = $(this);
                        var moduleID = $this.data('module-id');
                        var $page = topWindow.Wizard.Pages.getPage(moduleID);
                        if ($page.data('items-module-id') && $page.data('items-module-id').length > 0) {
                            moduleID = $page.data('items-module-id');
                        }
                        var $section = $(`#section-${moduleID}`);
                        var moduleTypeNUM = $section.data('module-type-num');
                        var field = SuggestText.getFieldNameByModuleTypeNum(moduleTypeNUM);
                        if (!SuggestText.ModulesPreviewManageBtns.includes(parseInt(moduleTypeNUM))) return true;
                        $this.on('click.p_m_buttons', function() {
                            let itemsCategory = $(`#section-${moduleID}`).find('.items-categories-container li.active a').html();
                            itemsCategory = moduleTypeNUM == 9 ? $(`#section-${moduleID} .restaurant-menu-category-name`).first().text() : itemsCategory;
                            itemsCategory = itemsCategory ? itemsCategory : 'noCategory';
                            if ([52, 17].includes(moduleTypeNUM)) {
                                event.preventDefault();
                                var $this = $(this);
                                openItemEditModal($this.data('module-id'), $this.data('module-type'), '', null, 'contentGeneratorPage', '');
                            } else {
                                SuggestText.createInlineBtn({
                                    tool: 'site123',
                                    field: field,
                                    translations: translations.suggestTextTool,
                                    lang: topWindow.childLanguage,
                                    suggestTextfield: null,
                                    textLength: '',
                                    callback: function(resultObj) {
                                        $.ajax({
                                            type: "POST",
                                            url: "/versions/2/wizard/modules/addO.php",
                                            data: SuggestText.getAddItemData(resultObj, itemsCategory, moduleID, moduleTypeNUM),
                                            success: function(data) {
                                                topWindow.g_ManageModuleID = $section.data('module-id');
                                                topWindow.isPreviewReload = true;
                                                topWindow.RefreshPreview();
                                            }
                                        });
                                    },
                                });
                            }
                        });
                    });
            }
            $pmb.find('a:not(.icon-only-tooltip)').tooltip({
                template: '<div class="tooltip p-m-b-tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                container: 'body',
                placement: $('html').attr('dir') === 'rtl' ? 'right' : 'left',
                delay: {
                    show: 2000,
                    hide: 0
                }
            });
            $pmb.find('a.icon-only-tooltip').tooltip({
                container: 'body',
                placement: 'top',
                delay: {
                    show: 2000,
                    hide: 0
                }
            });
            if ($pmb.hasClass('p-s-m')) {
                $pmb.css({
                    display: 'flex'
                });
            } else {
                $pmb.css({
                    display: 'grid'
                });
            }
            if ($pmb.data('type') === 'homepage') {
                fixHomepagePreviewManageButtonsPosition($pmb);
                $(document).off('previewScale.deviceTypeChange.f_h_p_b_p').on('previewScale.deviceTypeChange.f_h_p_b_p', function(event, device) {
                    fixHomepagePreviewManageButtonsPosition($pmb);
                    if (device === 'mobile') {
                        $pmb.css({
                            top: ''
                        });
                    }
                });
                $(document).off('reloadPreviewCSS.reloaded.f_h_p_b_p').on('reloadPreviewCSS.reloaded.f_h_p_b_p', function(event, device) {
                    fixHomepagePreviewManageButtonsPosition($pmb);
                });
                $('#mainNav').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(event) {
                    fixHomepagePreviewManageButtonsPosition($pmb);
                });
            }
        });
        $previewManageButton.on('selectstart dragstart', function(event) {
            event.preventDefault();
        });
        topWindow.$('.p-m-b-wizard-accordion-flash').removeClass('p-m-b-wizard-accordion-flash');
        OutlineHandler.init();
        S123ResizeObserver.init({
            selector: '.p-m-b-highlight, .s123-action-btn',
            sizeChangeCallback: function($el, width, height) {
                OutlineHandler.handleResize($el);
                ModuleItemsOutlineHandler.handleResize();
                var $editableEl = $el.find('[data-has-s123-toolbar="true"]');
                if ($editableEl.length > 0) {
                    var s123Toolbar = $editableEl.data('s123-tool-bar');
                    if (s123Toolbar) s123Toolbar.setPosition();
                    var textVisibilityHandler = $el.closest('section').data('text-visibility-handler');
                    if (textVisibilityHandler) textVisibilityHandler.setPosition($editableEl);
                    if ($editableEl.data('s123-editable-elements')) $editableEl.data('s123-editable-elements').textLengthCounter.setPosition()
                } else if ($el.hasClass('s123-page-header') || $el.hasClass('s123-page-slogan')) {
                    if ($el.data('s123-f-b')) $el.data('s123-f-b').setPosition();
                }
            }
        });

        function fixHomepagePreviewManageButtonsPosition($pmb) {
            if (hasColidingelements($pmb)) {
                if ($('html[dir="rtl"]').length > 0) {
                    $pmb.css({
                        left: '15px',
                        right: 'auto',
                        direction: 'ltr' // change grid flow
                    });
                    $pmb.find('.s123-p').data('s123-p').updateOption('placement', 'right');
                } else {
                    $pmb.css({
                        left: 'auto',
                        right: '15px',
                        direction: 'rtl' // change grid flow
                    });
                    $pmb.find('.s123-p').data('s123-p').updateOption('placement', 'left');
                }
            }
            $pmb.css('top', '');
            if ($.inArray($('#layoutNUM').val(), ['2', '3', '4', '13', '15', '20']) !== -1) return;
            if (($('#mainNav').offset().top + $('#mainNav').height()) > $pmb.offset().top) {
                if ($(window).scrollTop() === 0) {
                    $pmb.css({
                        top: ($('#mainNav').offset().top + $('#mainNav').height() + 20) + 'px'
                    });
                }
            }

            function hasColidingelements($pmb) {
                var $textElement = $('#top-section .hm-t-c .hm-txt, #top-section .section-main-text-btn').filter(':visible').first();
                if ($textElement.length == 0) return;
                if ($textElement.offset().top > ($pmb.offset().top + $pmb.height())) return;
                if (isColliding($pmb, $textElement)) return true;
                return false;
            }

            function isColliding($div1, $div2) {
                var d1_offset = $div1.offset();
                var d1_height = $div1.outerHeight(true);
                var d1_width = $div1.outerWidth(true);
                var d1_distance_from_top = d1_offset.top + d1_height;
                var d1_distance_from_left = d1_offset.left + d1_width;
                var d2_offset = $div2.offset();
                var d2_height = $div2.outerHeight(true);
                var d2_width = $div2.outerWidth(true);
                var d2_distance_from_top = d2_offset.top + d2_height;
                var d2_distance_from_left = d2_offset.left + d2_width;
                return !(d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left);
            }
        }
        $('#page-top').on('click.websiteBackground', function(event) {
            if (event.target.id != $(this).get(0).id) return;
            if ($('body').width() === $('.body').width()) return;
            expandWizardHomepage('designTab', '#websiteBackground');
        });
        $('.previewManageButton[data-type="homepage"] a.p-m-b-design[data-original-title="Templates"] .p-m-b-text').text(translations.layouts);
        $('.previewManageButton[data-type="homepage"] a.p-m-b-design[data-original-title="Background"] .p-m-b-text').text(translations.edit);
        (function() {
            topWindow.$(topWindow.document).off('wizard_tabs_opened.richPageHandler').on('wizard_tabs_opened.richPageHandler', function(event, tabID) {
                if (tabID != 'pagesTab') return;
                setTimeout(function() {
                    openRichPage();
                }, 0);
                topWindow.$(topWindow.document).one('wizard_tabs_closed', function() {
                    if (topWindow.RichPage.isActive) topWindow.Wizard.Pages.modeManager.set('pages', '', false);
                });
            });
            setTimeout(function() {
                openRichPage();
            }, 0);

            function openRichPage() {
                if (topWindow.$('#wizardBox .tab-content[data-active-tab="pagesTab"]').length == 0) return;
                if (!IsRichPage()) {
                    if (topWindow.RichPage.isActive) topWindow.Wizard.Pages.modeManager.set('pages', '', false);
                    return;
                }
                if (topWindow.RichPage.isActive && topWindow.RichPage.moduleID == $('.s123-module-rich-page').data('module-id')) return;
                if (topWindow.$('.inline-module-back-btn.is-active').length > 0) topWindow.$('.inline-module-back-btn.is-active').trigger('click');
                topWindow.Wizard.Pages.modeManager.set('pages', '', false);
                var $richpageModule = topWindow.Wizard.Pages.getPage($('.s123-module-rich-page').data('module-id'));
                if ($richpageModule.length == 0) return;
                var $pagesTab = topWindow.$('#pagesTab');
                if ($pagesTab.attr('data-pages-n-i-m-o-h-tab') == 'showOthersTab') {
                    if ($richpageModule.data('module-show-in-footer') == '1' || $richpageModule.data('module-mp-show-in-menu') == '1') {
                        $pagesTab.attr('data-pages-n-i-m-o-h-tab', 'showPagesTab');
                        topWindow.$('#showOthersTab').removeClass('active');
                        topWindow.$('#showPagesTab').addClass('active');
                    }
                }
                topWindow.Wizard.Pages.modeManager.set('richPage', $('.s123-module-rich-page').data('module-id'), false);
            }
        })();

        function openHomepageMediaTab() {
            if (topWindow.$('#' + topWindow.Wizard.homePageChangingImages.fistInputID).val() == '') {
                topWindow.$('#backgroundOptionsTab [data-tab="backgroundColorOptionsTab"]').trigger('click');
            } else {
                topWindow.$('#backgroundOptionsTab [data-tab="backgroundMediaOptionsTab"]').trigger('click');
            }
            expandWizardHomepage('homepageTab', '#backgroundOptionsTab');
        }
    });
    $(document).off('site123.colorPicker.change.audioPlayer').on('site123.colorPicker.change.audioPlayer', function(event, id, newColor) {
        if (id != 'global_main_color' && id != 'global_main_color_btn_text_color') return;
        $('.s123-module-songs').each(function() {
            var $section = $(this);
            var $frame = $section.find(`#music-player-${$section.data('module-id')}`);
            var framWindow = $frame.get(0).contentWindow;
            var $frameDoc = framWindow.document;
            framWindow.$('.myPlayerBox').css({
                backgroundColor: '',
                border: '',
            });
            if (id == 'global_main_color') {
                $frameDoc.documentElement.style.setProperty(`--playerColor`, newColor);
                $frameDoc.documentElement.style.setProperty(`--playerColorRgba`, topWindow.hexToRGB(newColor, 0.80));
            } else {
                $frameDoc.documentElement.style.setProperty(`--playerTextColor`, newColor);
            }
        });
    });
    $(document).off('site123.colorPicker.change.seatmap').on('site123.colorPicker.change.seatmap', function(event, id, newColor) {
        var $frame = $(`#eventSeatMapIframe`);
        if ($frame.length == 0) return;
        $frame.get(0).contentWindow.document.documentElement.style.setProperty(`--global_main_color`, topWindow.$('#global_main_color').val());
        $frame.get(0).contentWindow.document.documentElement.style.setProperty(`--global_main_color_btn_text_color`, topWindow.$('#global_main_color_btn_text_color').val());
    });
    $(document).off('site123.colorPicker.change.charts').on('site123.colorPicker.change.charts', function(event, id) {
        chartsModuleInitialize_Layout1('colorChange');
    });

    function expandWizardHomepage(tab, accordionId, boxID = '') {
        var $accordion = topWindow.$(accordionId);
        topWindow.Wizard.modals.hideAll();
        topWindow.OpenWizardTab(tab, true);
        if ($accordion.hasClass('in')) {
            $accordion.closest('.panel').addClass('p-m-b-wizard-accordion-flash');
            setTimeout(function() {
                $accordion.closest('.panel').removeClass('p-m-b-wizard-accordion-flash');
            }, 500);
            return;
        }
        topWindow.$('#' + tab).one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
            $(document).trigger('wizard.accordion_animation_ended');
        });
        var animationManager = topWindow.Wizard.tabEffectHandler.AnimationManager[tab];
        animationManager.show(animationManager.$tabLinks.find('a[href="' + accordionId + '"]'));
        if (boxID != '') {
            const $box = topWindow.$('#' + boxID);
            if ($box.length == 0) return;
            topWindow.$('#' + boxID).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $box.removeClass('highlight-box');
            });
            $box.addClass('highlight-box');
            $box.closest('.tab-content').animate({
                scrollTop: $box.offset().top - $box.closest('.fancy-scrollbar').offset().top + $box.closest('.fancy-scrollbar').scrollTop() - 20
            }, 500);
        }
    }

    function S123Slider(settings) {
        var _ = {
            id: topWindow.uniqid('S123Slider-'),
            $el: null,
            label: settings.label,
            tooltip: settings.tooltip,
            design: settings.design,
            value: settings.getValue.call(this),
            numberKind: settings.numberKind,
            minValue: settings.minValue,
            maxValue: settings.maxValue,
            callback: settings.callback,
            startCallback: settings.startCallback,
        };
        _.init = function() {
            topWindow.SliderInputInitialize($('<div class="form-group" style="margin-top: 15px;"><div class="sliderInput" id="' + _.id + '" data-text="' + S123.escapeHtml(_.label) + '" data-value="' + _.value + '" data-max="' + _.maxValue + '" data-min="' + _.minValue + '" data-tooltip="' + S123.escapeHtml(_.tooltip) + '" data-number-kind="' + _.numberKind + '" data-design="' + S123.escapeHtml(_.design) + '"></div></div>').find('.sliderInput'));
            _.$el = topWindow.sliderInputs[_.id].$html;
            _.$el.find('#' + _.id).off('sliderInput.start').on('sliderInput.start', function(event) {
                if (_.startCallback) _.startCallback.call(this, event);
            });
            _.$el.find('#' + _.id).off('change.S123Slider').on('change.S123Slider', function(event) {
                _.value = $(this).val();
                _.$el.find('#' + _.id).trigger('input.S123Slider');
            });
            _.$el.find('#' + _.id).off('input.S123Slider').on('input.S123Slider', function(event) {
                _.value = $(this).val();
                if (_.callback) _.callback.call(this, event, _.value, true);
                clearTimeout(this.inputDelay);
                this.inputDelay = setTimeout(function() {
                    if (_.callback) _.callback.call(this, event, _.value, false);
                }, 300);
            });
            _.$el.find('[data-rel="tooltip"]').tooltip({
                container: _.$el,
                placement: 'top'
            });
        };
        _.destroy = function() {
            if (topWindow.sliderInputs[_.id]) topWindow.sliderInputs[_.id].destroy();
        };
        _.init();
        return _;
    };

    function S123PopOverSliders(settings) {
        var _ = {
            $el: settings.$el,
            customClass: settings.customClass ? settings.customClass : '',
            popoverSettings: settings.popoverSettings ? settings.popoverSettings : {},
            slidersArray: settings.slidersArray,
            sliders: {},
            showCallback: settings.showCallback,
            hideCallback: settings.hideCallback
        };
        _.init = function() {
            if (!_.$el.get(0).id) {
                _.$el.attr('id', topWindow.uniqid('S123PopOverSliders-tmp-'));
            }
            var $content = $('<div></div>');
            _.popoverSettings.content = $content;
            _.s123PopOver = new S123PopOver({
                $el: _.$el,
                popoverSettings: _.popoverSettings,
                customClass: 's123-popover-sliders' + _.customClass,
                showCallback: function() {
                    for (var i = 0; i < _.slidersArray.length; i++) {
                        _.sliders[_.slidersArray[i].type] = new S123Slider({
                            label: _.slidersArray[i].label,
                            tooltip: _.slidersArray[i].tooltip,
                            design: _.slidersArray[i].design,
                            getValue: _.slidersArray[i].getValue,
                            numberKind: _.slidersArray[i].numberKind,
                            minValue: _.slidersArray[i].minValue,
                            maxValue: _.slidersArray[i].maxValue,
                            callback: _.slidersArray[i].callback
                        });
                        $content.append(_.sliders[_.slidersArray[i].type].$el);
                    }
                    if (_.showCallback) _.showCallback.call(this);
                },
                hideCallback: function() {
                    if (_.hideCallback) _.hideCallback.call(this);
                },
                hiddenCallback: function() {
                    $.each(_.sliders, function(key, slider) {
                        slider.destroy();
                    });
                }
            });
            _.$el.addClass('s123-p-s');
            _.$el.data('s123-p-s', _);
        };
        _.hide = function() {
            _.s123PopOver.hide();
        };
        _.destroy = function() {
            _.s123PopOver.destroy();
            _.$el.data('s123-p-s', null);
        };
        _.init();
        return _;
    };

    function S123PopOver(settings) {
        var _ = {
            $el: settings.$el,
            isVisible: false,
            customClass: settings.customClass ? settings.customClass : '',
            popoverSettings: settings.popoverSettings,
            showCallback: settings.showCallback,
            hideCallback: settings.hideCallback,
            hiddenCallback: settings.hiddenCallback
        };
        _.init = function() {
            _.$el.off('click.S123PopOver').on('click.S123PopOver', function(event) {
                event.stopPropagation();
                event.preventDefault();
                if (_.isVisible) {
                    _.hide();
                } else {
                    _.show();
                }
            });
            if (!_.$el.get(0).id) {
                _.$el.attr('id', topWindow.uniqid('S123PopOver-tmp-'));
            }
            _.popoverSettings = new PopoverSettings(_.popoverSettings);
            _.popoverSettings.template = _.popoverSettings.template.replace('{{data-rel}}', 'data-rel="' + _.$el.get(0).id + '"');
            _.$el.popover(_.popoverSettings)
                .on('show.bs.popover', function(event) {
                    if (_.showCallback) _.showCallback.call(this);
                })
                .on('shown.bs.popover', function() {
                    _.isVisible = true;
                    $(document).one('undoRedo.change', function() {
                        _.hide();
                    });
                    $(document)
                        .add($(topWindow.document))
                        .on('mousedown.S123PopOver' + _.$el.get(0).id, function(event) {
                            if ($(event.target).closest('#' + _.$el.get(0).id + '.s123-p').length > 0) return;
                            if ($(event.target).closest('.popover.s123-popover').length > 0) return;
                            _.hide();
                        });
                })
                .on('hide.bs.popover', function(event) {
                    _.isVisible = false;
                    $(document)
                        .add($(topWindow.document))
                        .off('mousedown.S123PopOver' + _.$el.get(0).id);
                    if (_.hideCallback) _.hideCallback.call(this);
                })
                .on('hidden.bs.popover', function(event) {
                    if (_.hiddenCallback) _.hiddenCallback.call(this);
                });
            $(document).off('S123PopOver.reposition.' + _.$el.get(0).id).on('S123PopOver.reposition.' + _.$el.get(0).id, function(event) {
                if (!_.isVisible) return;
                _.reposition();
            });
            _.$el.addClass('s123-p');
            _.$el.data('s123-p', _);
        };
        _.reposition = function() {
            _.$el.popover('reposition');
        };
        _.show = function() {
            _.$el.popover('show');
        };
        _.hide = function() {
            _.$el.popover('hide');
        };
        _.destroy = function() {
            $('.popover.s123-popover[data-rel="' + _.$el.get(0).id + '"]').remove();
            _.$el.data('s123-p', null);
        };
        _.updateOption = function(optionName, value) {
            if (!_.$el.data('bs.popover')) return;
            _.$el.data('bs.popover').options[optionName] = value;
        };

        function PopoverSettings(data) {
            function Def() {
                return {
                    container: 'body',
                    html: 'true',
                    content: '',
                    template: '<div class="popover s123-popover ' + _.customClass + '" role="tooltip" {{data-rel}} style="max-width: 290px;"><div class="arrow"></div><div class="popover-content"></div></div>',
                    trigger: 'manual',
                    placement: 'auto'
                };
            }

            function objectAssign(target, sources) {
                if (Object.assign) {
                    sources = Object.assign(target, sources);
                } else {
                    for (var prop in target)
                        if (!sources.hasOwnProperty(prop)) sources[prop] = target[prop];
                }
                return sources;
            }
            var def = new Def();
            if (data) {
                data = objectAssign(new Def(), data); // (objectAssign overwrite objects)
            } else {
                data = def;
            }
            var placement = data.placement;
            if (placement.indexOf('auto') != -1 && (placement.indexOf('top') != -1 || placement.indexOf('bottom') != -1)) {
                data.placement = function(context, el) {
                    var $helper = $(context).clone();
                    var $el = $(el);
                    var prefferedPlacement = placement.indexOf('top') != -1 ? 'top' : 'bottom';
                    $helper.addClass(prefferedPlacement);
                    $helper.css({
                        visibility: 'hidden'
                    });
                    $('body').append($helper);
                    var popOverdHeight = $helper.outerHeight(true) + $el.outerHeight(true);
                    $helper.remove();
                    if (placement.indexOf('top') != -1) {
                        if (($el.offset().top - $(window).scrollTop()) < popOverdHeight) {
                            return 'bottom';
                        }
                        return 'top';
                    } else if (placement.indexOf('bottom') != -1) {
                        if (($el.offset().top - $(window).scrollTop()) + popOverdHeight > $(window).height()) {
                            return 'top';
                        }
                        return 'bottom';
                    }
                };
            }
            return data;
        };
        _.init();
        return _;
    };

    function S123Resizable(settings) {
        var _ = {
            $el: settings.$el,
            $wizardInputs: settings.$wizardInputs,
            maxWidth: $.isNumeric(settings.maxWidth) ? settings.maxWidth : null,
            maxHeight: $.isNumeric(settings.maxHeight) ? settings.maxHeight : null,
            minWidth: $.isNumeric(settings.minWidth) ? settings.minWidth : 10,
            minHeight: $.isNumeric(settings.minHeight) ? settings.minHeight : 10,
            resizByWidth: settings.resizByWidth,
            resizByHeight: settings.resizByHeight,
            preserveRatio: settings.preserveRatio,
            startCallBack: settings.startCallBack,
            resizeCallBack: settings.resizeCallBack,
            endCallBack: settings.endCallBack
        };
        _.init = function() {
            _.$el.find('.p-m-b-highlight').each(function(index, el) {
                OutlineHandler.destroy($(el).get(0).id);
            });
            OutlineHandler.register(_.$el);
            handles = 'ne, se, sw, nw';
            if (!_.resizByWidth) {
                handles = 'n, s';
            }
            if (!_.resizByHeight) {
                handles = 'w, e';
            }
            if (!_.preserveRatio && (_.resizByWidth && _.resizByHeight)) {
                handles = 'n, e, s, w, ne, se, sw, nw';
                _.$el.attr('data-s123-resizable-full-controllers', 'true');
            }
            _.$el.resizable({
                aspectRatio: _.preserveRatio,
                maxWidth: _.maxWidth,
                maxHeight: _.maxHeight,
                minWidth: _.minWidth,
                minHeight: _.minHeight,
                handles: handles,
                start: function(event, ui) {
                    _.$el.addClass('resizing');
                    $('html').addClass('disable-inline-wizard');
                    if (_.startCallBack) _.startCallBack.call(this, event, ui);
                    OutlineHandler.handleResizeStart(ui.element);
                    $(document).trigger('S123Resize.start');
                },
                stop: function(event, ui) {
                    _.$el.removeClass('resizing');
                    $('html').removeClass('disable-inline-wizard');
                    ui.element.css({
                        width: '',
                        height: ''
                    });
                    if (_.endCallBack) _.endCallBack.call(this, event, ui, false);
                    OutlineHandler.handleResizeEnd(event, ui.element);
                },
                resize: function(event, ui) {
                    ui.size.width = Math.round(ui.size.width);
                    ui.size.height = Math.round(ui.size.height);
                    if (_.resizeCallBack) _.resizeCallBack.call(this, event, ui);
                }
            });
            _.Resizable = _.$el.resizable('instance');
            if (_.$wizardInputs) {
                _.$el.resizable('option', 'size', {
                    width: _.$el.width(),
                    height: _.$el.height()
                });
                if (_.$wizardInputs.width) {
                    _.$wizardInputs.width.off('change.S123Resizable').on('change.S123Resizable', function(event, flagStatus) {
                        if (flagStatus != 'UndoRedoChange') return;
                        var ui = _.$el.resizable('instance');
                        var size = _.$el.resizable('option', 'size');
                        size.width = parseInt($(this).val());
                        _.$el.resizable('option', 'size', size);
                        if (_.endCallBack) _.endCallBack.call(this, event, ui, true);
                    });
                }
                if (_.$wizardInputs.height) {
                    _.$wizardInputs.height.off('change.S123Resizable').on('change.S123Resizable', function(event, flagStatus) {
                        if (flagStatus != 'UndoRedoChange') return;
                        var ui = _.$el.resizable('instance');
                        var size = _.$el.resizable('option', 'size');
                        size.height = parseInt($(this).val());
                        _.$el.resizable('option', 'size', size);
                        if (_.endCallBack) _.endCallBack.call(this, event, ui, true);
                    });
                }
            }
            _.$el.data('s123-resizable', _);
            _.$el.addClass('s123-resizable');
        };
        _.setOption = function(name, value) {
            _.$el.resizable('option', name, value);
        };
        _.destroy = function() {
            _.$el.data('s123-resizable', null);
            _.$el.removeClass('s123-resizable');
            _.$el.resizable('destroy');
        };
        _.init();
        return _;
    };

    function S123FloatingBar(settings) {
        var _ = {
            $el: settings.$el,
            template: settings.template,
            placement: settings.placement,
            type: settings.type,
            showCallback: settings.showCallback,
            preventHide: false,
            removeOnMouseOut: true
        };
        _.init = function() {
            if (_.$el.data('s123-f-b')) _.$el.data('s123-f-b').destroy();
            _.$el.on('mouseenter.S123FloatingBar', function(event) {
                event.stopPropagation();
                _.show();
                clearTimeout(_.$html.hideDelay);
                _.$el.off('mouseout.S123FloatingBar').on('mouseout.S123FloatingBar', function(event) {
                    if ($(event.originalEvent.relatedTarget).hasClass('s123-f-b')) return;
                    if ($(event.originalEvent.relatedTarget).parents('.s123-f-b').length > 0) return;
                    event.stopPropagation();
                    clearTimeout(_.$html.hideDelay);
                    _.$html.hideDelay = setTimeout(function() {
                        _.hide();
                    }, 100);
                });
            });
            _.$el.addClass('s123-f-b');
            _.$el.data('s123-f-b', _);
        };
        _.show = function() {
            if (!_.$html) {
                _.$html = $('<div class="s123-floating-bar" data-rel="' + _.$el.get(0).id + '" data-type="' + _.type + '">' + _.template + '</div>');
                if (_.showCallback) _.showCallback.call(this, _);
                $('body').append(_.$html);
            }
            _.$html.off('mouseout.S123FloatingBar').on('mouseout.S123FloatingBar', function(event) {
                event.stopPropagation();
                clearTimeout(_.$html.hideDelay);
                _.$html.hideDelay = setTimeout(function() {
                    _.hide();
                }, 100);
            });
            _.$html.off('mouseover.S123FloatingBar').on('mouseover.S123FloatingBar', function(event) {
                event.stopPropagation();
                clearTimeout(_.$html.hideDelay);
            });
            _.setPosition();
        };
        _.hide = function() {
            if (!_.removeOnMouseOut) return;
            if (_.$html) {
                clearTimeout(_.$html.hideDelay);
                _.$html.remove();
                _.$el.off('mouseout.S123FloatingBar');
            }
            _.$html = null;
        };
        _.destroy = function() {
            _.$el.removeClass('s123-f-b');
            _.$el.data('s123-f-b', null);
            _.$el.off('mouseenter.S123FloatingBar');
            _.$el.off('mouseout.S123FloatingBar');
            _.hide();
        };
        _.setPosition = function() {
            if (!_.$html) return;
            var offset = _.$el.get(0).getBoundingClientRect();
            var top = offset.top + $(window).scrollTop();
            var isRtl = $('html[dir="rtl"]').length > 0;
            var outlineOffset = 7;
            if (isRtl) {
                offset.left -= getScrollbarWidth();
            }
            switch (_.placement) {
                case 'bottom':
                    _.$html.css({
                        top: (top + offset.height - (_.$html.outerHeight(true) / 2)) + outlineOffset
                    });
                    break;
                case 'bottom center':
                    _.$html.css({
                        top: (top + offset.height - (_.$html.outerHeight(true) / 2)) + outlineOffset,
                        left: offset.left + (offset.width / 2) - (_.$html.outerWidth(true) / 2)
                    });
                    return;
                case 'bottom right':
                    _.$html.css({
                        top: (top + offset.height - (_.$html.outerHeight(true) / 2)) + outlineOffset,
                        left: offset.left + offset.width - _.$html.outerWidth(true) - outlineOffset
                    });
                    return;
                    break;
                case 'top':
                    if (top < 0) {
                        top = _.$html.outerHeight(true) + $(window).scrollTop();
                    }
                    _.$html.css({
                        top: (top - _.$html.outerHeight(true) / 2) - outlineOffset,
                    });
                    break;
            }
            var textAlign = _.$el.css('text-align');
            if (textAlign != 'left' && textAlign != 'right' && textAlign != 'center') {
                textAlign = $('html[dir="rtl"]').length > 0 ? 'right' : 'left';
            }
            if (textAlign == 'center') {
                if (isRtl) {
                    _.$html.css({
                        left: offset.left - outlineOffset,
                    });
                } else {
                    _.$html.css({
                        left: offset.right - _.$html.outerWidth(true) + outlineOffset,
                    });
                }
            } else if (textAlign == 'left') {
                _.$html.css({
                    left: offset.right - _.$html.outerWidth(true) + outlineOffset,
                });
            } else if (textAlign == 'right') {
                _.$html.css({
                    left: offset.left - outlineOffset
                });
            }
        };
        _.init();
        return _;
    };

    function S123EditableElement(settings) {
        var _ = {
            $el: settings.$el,
            disableNewLine: settings.disableNewLine,
            maxlength: settings.maxlength,
            eventCallback: settings.eventCallback,
            moduleID: settings.moduleID,
            isDisabled: false,
            showTextCounter: settings.showTextCounter ? settings.showTextCounter : false
        };
        _.init = function() {
            if (_.$el.data('s123-editable-elements')) _.$el.data('s123-editable-elements').destroy();
            _.$el.attr('contenteditable', true);
            _.$el.attr('data-s123-editable-elements', true);
            _.textLengthCounter = new TextLengthCounter({
                $el: _.$el,
                moduleID: _.moduleID,
                maxlength: _.maxlength,
                currentlength: _.$el.text().length,
                isEnabled: _.showTextCounter
            });
            _.$el.on('focus.convertToEditable', function() {
                if (_.isDisabled) return false;
                _.$el.attr('spellcheck', true);
                _.textLengthCounter.show();
                if (_.eventCallback) _.eventCallback.call(this, 'focus');
            });
            _.$el.on('blur.convertToEditable', function(event) {
                if (_.isDisabled) return false;
                _.$el.attr('spellcheck', false);
                _.textLengthCounter.hide();
                if (_.eventCallback) _.eventCallback.call(this, 'blur');
            });
            _.$el.on('input.convertToEditable', function() {
                if (_.isDisabled) return;
                _.textLengthCounter.update(_.$el.text().length);
                if (_.eventCallback) _.eventCallback.call(this, 'input');
            });
            inputHandler(_.$el, _.disableNewLine, _.maxlength, _.eventCallback);
            _.$el.data('s123-editable-elements', _);
            if (topWindow.Wizard.Preview.Scale.mode != 'computer') {
                _.disable();
            }
        };

        function inputHandler() {
            _.$el.on('keydown.convertToEditable.inputHandler', function(e) {
                if (_.isDisabled) return false;
                var $target = $(e.target);
                if (e.type === 'keydown') {
                    var blockedKeys = ((e.which === 13 && _.disableNewLine) || (e.ctrlKey || e.metaKey) && e.which === 66 || (e.ctrlKey || e.metaKey) && e.which === 73 || (e.ctrlKey || e.metaKey) && e.which === 85);
                    var excludedKeys = (e.which === 8 || e.which === 35 || e.which === 36 || e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 || e.which === 46 || (e.ctrlKey || e.metaKey) && e.which === 65 || (e.ctrlKey || e.metaKey) && e.which === 88 || (e.ctrlKey || e.metaKey) && e.which === 67 || (e.ctrlKey || e.metaKey) && e.which === 86 || (e.ctrlKey || e.metaKey) && e.which === 90);
                    if (blockedKeys) {
                        e.preventDefault();
                    } else if (!excludedKeys) {
                        var isSelectedBlock = window.getSelection().toString().length > 0;
                        if ($.isNumeric(_.maxlength) && (!isSelectedBlock && $target.text().length >= _.maxlength)) {
                            e.preventDefault();
                        } else if (e.which === 13) {
                            e.preventDefault();
                            var docFragment = document.createDocumentFragment();
                            var br = document.createElement('br');
                            docFragment.appendChild(br);
                            if (getCaretIndex($target.get(0)) == $target.text().length) {
                                var nolineBreak = document.createTextNode('\xa0');
                                docFragment.appendChild(nolineBreak);
                            }
                            var range = window.getSelection().getRangeAt(0);
                            range.deleteContents();
                            range.insertNode(docFragment);
                            range = document.createRange();
                            range.setStartAfter(br);
                            range.collapse(true);
                            var sel = window.getSelection();
                            sel.removeAllRanges();
                            sel.addRange(range);
                            _.textLengthCounter.update(_.$el.text().length);
                            if (_.eventCallback) _.eventCallback.call(this, 'input');
                            return false;
                        }
                    }
                }
            });
            _.$el.on('paste.convertToEditable.inputHandler', function(e) {
                if (_.isDisabled) return false;
                var $target = $(e.target);
                e.preventDefault();
                if ($.isNumeric(_.maxlength) && $target.text().length >= _.maxlength && !window.getSelection().toString().length > 0) return;
                var text = (e.originalEvent || e).clipboardData.getData('text/plain').trim();
                var range = document.getSelection().getRangeAt(0);
                range.deleteContents();
                var textNode = document.createTextNode(text);
                range.insertNode(textNode);
                range.selectNodeContents(textNode);
                range.collapse(false);
                var selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                if ($.isNumeric(_.maxlength) && $target.text().length >= _.maxlength) {
                    $target.text($target.text().slice(0, _.maxlength));
                }
                _.textLengthCounter.update(_.$el.text().length);
                if (_.eventCallback) _.eventCallback.call(this, 'paste');
            });
            _.$el.on('dragover.convertToEditable.inputHandler drop.convertToEditable.inputHandler', function(event) {
                event.preventDefault();
            });

            function getCaretIndex(element) {
                let position = 0;
                const isSupported = typeof window.getSelection !== "undefined";
                if (isSupported) {
                    const selection = window.getSelection();
                    if (selection.rangeCount !== 0) {
                        const range = window.getSelection().getRangeAt(0);
                        const preCaretRange = range.cloneRange();
                        preCaretRange.selectNodeContents(element);
                        preCaretRange.setEnd(range.endContainer, range.endOffset);
                        position = preCaretRange.toString().length;
                    }
                }
                return position;
            }
        }
        _.destroy = function() {
            _.$el.attr('contenteditable', false);
            _.$el.attr('data-s123-editable-elements', false);
            _.$el.data('s123-editable-elements', null);
            _.$el.off('focus.convertToEditable');
            _.$el.off('blur.convertToEditable');
            _.$el.off('input.convertToEditable');
            _.$el.off('click.convertToEditable');
            _.$el.off('keydown.convertToEditable.inputHandler');
            _.$el.off('paste.convertToEditable.inputHandler');
        };
        _.disable = function() {
            _.isDisabled = true;
            _.$el.attr('contenteditable', false);
        };
        _.enable = function() {
            _.isDisabled = false;
            _.$el.attr('contenteditable', true);
        };
        _.init();
        return _;
    };

    function TextLengthCounter(settings) {
        var _ = {
            $el: settings.$el,
            $section: settings.$section,
            moduleID: settings.moduleID,
            maxlength: settings.maxlength,
            currentlength: settings.currentlength,
            showOnMinLength: settings.showOnMinLength,
            isEnabled: settings.isEnabled,
            $toolBar: null,
            debugMode: false,
        };
        _.init = function() {
            if (!_.isEnabled) return;
            addController();
            _.$section.off('textRemoved.TextLengthCounter').on('textRemoved.TextLengthCounter', function(event, elementID) {
                if (_.$el.get(0).id != elementID) return;
                _.update(_.$el.data('froala.editor').getJQEl('$el').text().length);
            });
            _.$el.data('s123-text-length-counter', _);
        };
        _.update = function(newLength) {
            if (!_.isEnabled) return;
            _.currentlength = newLength;
            _.$toolBar.find('.text-current-length-counter').text(_.currentlength);
            _.$toolBar.find('.header-type').text(_.currentlength > 100 ? 'P' : 'H');
            _.setPosition();
            handleVisibility();
        };
        _.show = function() {
            if (!_.isEnabled) return;
            _.$toolBar.addClass('active');
            handleVisibility();
            _.setPosition();
        };
        _.hide = function() {
            if (!_.isEnabled) return;
            _.$toolBar.removeClass('active');
        };
        _.getLength = function() {
            if (!_.isEnabled) return 0;
            return _.currentlength;
        };
        _.setPosition = function() {
            if (!_.isEnabled) return;
            var offset = _.$el.get(0).getBoundingClientRect();
            var left = offset.left;
            var top = offset.top + $(window).scrollTop();
            var outlineOffSet = {
                x: 5,
                y: 7
            };
            if ($('html[dir="rtl"]').length > 0) {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') == -1) {
                    left -= getScrollbarWidth();
                }
            }
            _.$toolBar.css({
                top: (top + offset.height) + outlineOffSet.y
            });
            if (_.debugMode) {
                _.$el.css({
                    outline: 'solid 1px #fff'
                });
                _.$toolBar.css({
                    outline: 'solid 1px #fff'
                });
            }
            var textAlign = $('html[dir="rtl"]').length > 0 ? 'right' : 'left';
            if (textAlign == 'left') {
                _.$toolBar.css({
                    left: left - outlineOffSet.x
                });
            } else if (textAlign == 'right') {
                _.$toolBar.css({
                    left: left + (_.$el.outerWidth(true) - _.$toolBar.outerWidth(true)) + outlineOffSet.x
                });
            }
        };

        function addController() {
            var html = '';
            html += '<div class="previewManageButton t-c-handler" data-rel="' + _.moduleID + '-' + _.$el.get(0).id + '">';
            html += '<div class="p-m-b-design text-counter-contianer">';
            html += '<span class="text-current-length-counter">' + _.currentlength + '</span>/<span class="text-max-length-counter">' + _.maxlength + '</span>';
            html += '</div>';
            html += '<div class="p-m-b-design">';
            html += '<span class="header-type">' + (_.currentlength > 100 ? 'P' : 'H') + '</span>';
            html += '</div>';
            html += '</div>';
            var $html = $(html);
            _.$toolBar = $html;
            _.$toolBar.find('.header-type').tooltip({
                title: translations.homepageAndHeaderEditor.headerTypeTooltip,
                container: 'body',
                placement: 'top',
                delay: {
                    show: 2000,
                    hide: 0
                }
            });
            $('.t-c-handler[data-rel="' + _.moduleID + '-' + _.$el.get(0).id + '"]').remove();
            $('body').append($html);
        }

        function handleVisibility() {
            if (_.currentlength < _.showOnMinLength) {
                _.$toolBar.addClass('hide-text-counter');
            } else {
                _.$toolBar.removeClass('hide-text-counter');
            }
        }
        _.init();
        return _;
    }

    function updateMultipleSettings(moduleID, moduleTypeNUM, newSettingsObj, callback = null) {
        topWindow.Wizard.UpdateModuleItemSettings(moduleID, moduleTypeNUM, newSettingsObj)
            .then(function(data) {
                if (callback) callback.call(this, data);
                if ([169, 167].includes(parseInt(moduleTypeNUM))) {
                    var undoHelper = tryParseJSON($('#section-' + moduleID + ' .undo-helper').val());
                    const settings = {
                        type: 'modules',
                        isInline: true,
                        styleObj: {
                            style: topWindow.Wizard.Pages.getPage(moduleID).data('module-style'),
                            moduleArrID: topWindow.Wizard.Pages.getPage(moduleID).data('modules-arr-id'),
                        },
                        allSettings: newSettingsObj,
                        moduleID: moduleID,
                        moduleTypeNUM: moduleTypeNUM
                    };
                    if (settings.type != 'modules') {
                        delete settings.styleObj;
                    }
                    topWindow.WizardUndoRedoHandler.add(settings, $('#section-' + moduleID + ' .undo-helper'));
                }
            });
    }

    function openHomepageGoalTab($el) {
        var filter = $el.data('w-helper-filter') ? $el.data('w-helper-filter') : '';
        var $availableTools = topWindow.$('#homepageImageOptionsTab .homepage_goal_type_box.checkboxSingleSetting');
        topWindow.$('#homepageImageOptionsTab .hide-available-goals-tools').removeClass('hide-available-goals-tools');
        if (filter != '') {
            $availableTools = $availableTools.filter(function() {
                return ($(this).css("display") != "none" && $(this).attr('id') != 'homepage_goal_type_' + filter);
            });
            $availableTools.addClass('hide-available-goals-tools');
            topWindow.$('#homepageImageOptionsTab .s123-collapse-settings').addClass('hide-available-goals-tools');
            topWindow.$('#homepageImageOptionsTab .homepage-popular-goals').addClass('hide-available-goals-tools');
        }
        var $input = topWindow.$('#' + $el.get(0).id);
        topWindow.$(topWindow.document)
            .off('animation_manager.show.btnSelectFocus')
            .on('animation_manager.show.btnSelectFocus', function(event) {
                setTimeout(function() {
                    $input.select().focus();
                }, 100);
            });
        expandWizardHomepage('homepageTab', '#homepageImageOptionsTab');
        $input.select().focus();
    }
    var decodeEntities = (function() {
        var element = document.createElement('div');

        function decodeHTMLEntities(str) {
            if (str && typeof str === 'string') {
                str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
                str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
                element.innerHTML = str;
                str = element.textContent;
                element.textContent = '';
            }
            return str;
        }
        return decodeHTMLEntities;
    })();
    $(document).on('shown.bs.dropdown', '.dropdown', function() {
        var $this = $(this);
        var $ul = $this.children('.dropdown-menu');
        var $button = $this.children('.dropdown-toggle');
        var ulOffset = $ul.offset();
        var spaceUp = (ulOffset.top - $button.height() - $ul.height()) - $(window).scrollTop();
        var spaceDown = $(window).scrollTop() + $(window).height() - (ulOffset.top + $ul.height());
        if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown)) {
            $this.addClass('dropup');
        }
    }).on('hidden.bs.dropdown', '.dropdown', function() {
        $(this).removeClass('dropup');
    });
    var OutlineHandler = function() {
        var _ = {
            $elements: {},
            handled: {},
            $renderedOutlines: {},
            mouseOutTimeout: 1000,
        };
        _.init = function() {
            _.site123ReadyMultiTriggerDebounce = clearTimeout(_.site123ReadyMultiTriggerDebounce);
            _.site123ReadyMultiTriggerDebounce = setTimeout(function() {
                $('#top-section, .s123-module:is([data-module-type-num="1000"], .s123-module:is([data-module-type-num="169"],[data-module-type-num="167"])').each(function(index, section) {
                    $(this).off('textRemoved.OutlineHandler').on('textRemoved.OutlineHandler', function(event, elementID) {
                        removeElementOutlines($(this).find('.p-m-b-highlight[data-rel="' + elementID + '"]').get(0).id);
                    });
                });
                $.each(_.$elements, function(elementID, $el) {
                    registerEvents($el);
                    var animationDetector = new AnimationDetector({
                        $el: $el.closest('section'),
                        inProcess: function($el) {
                            var elementID = $el.get(0).id;
                            if (!_.$renderedOutlines[elementID]) return;
                            _.setPosition(elementID);
                        },
                        ended: function($el) {
                            var elementID = $el.get(0).id;
                            if (!_.$renderedOutlines[elementID]) return;
                            _.setPosition(elementID);
                        }
                    });
                });
                $(document).off('click.OutlineHandler').on('click.OutlineHandler', function(event) {
                        var $target = $(event.target);
                        if ($target.closest('.p-m-b-highlight').length > 0) return;
                        if ($target.hasClass('p-m-b-highlight')) return;
                        _.removeAllOutlines(false);
                    })
                    .off('OutlineHandler.rendered.handleOutlineVisiblity').on('OutlineHandler.rendered.handleOutlineVisiblity', function(event, elementID) {
                        var filterElementIDS = [elementID];
                        if (_.$elements[elementID].find('.p-m-b-highlight').length > 0) {
                            _.$elements[elementID].find('.p-m-b-highlight').each(function(index, el) {
                                filterElementIDS.push($(el).get(0).id);
                            });
                        }
                        _.removeAllOutlines(filterElementIDS);
                    })
                    .off('OutlineHandler.setPosition').on('OutlineHandler.setPosition', function(event, elementID) {
                        if (!_.$renderedOutlines[elementID]) return;
                        _.setPosition(elementID);
                    })
                    .off('ModuleItemsOutlineHandler.rendered.OutlineHandler').on('ModuleItemsOutlineHandler.rendered.OutlineHandler', function(event) {
                        _.removeAllOutlines(false);
                    });
                $(document).off('OutlineHandler.focus').on('OutlineHandler.focus', function(event, $el) {
                    _.focus($el);
                });
                $(document).off('OutlineHandler.blur').on('OutlineHandler.blur', function(event, $el) {
                    _.blur($el);
                });
                $(document).off('OutlineHandler.resetHideDelay').on('OutlineHandler.resetHideDelay', function(event, $el) {
                        if (_.$renderedOutlines[$el.get(0).id]) clearTimeout(_.$renderedOutlines[$el.get(0).id].mouseTimeout);
                    })
                    .off('ModuleItemsOutlineHandler.rendered.OutlineHandler').on('ModuleItemsOutlineHandler.rendered.OutlineHandler', function(event) {
                        _.removeAllOutlines(false);
                    });
                topWindow.$('#wizardForm').off('mouseenter.OutlineHandler').on('mouseenter.OutlineHandler', function(event) {
                    _.removeAllOutlines(false);
                });
                removeMissingDomElements();
            }, 100);
        };
        _.refresh = function() {
            $.each(_.$elements, function(elementID, $el) {
                if (_.handled[elementID]) return;
                registerEvents($el);
            });
        };
        _.render = function($el) {
            var elementID = $el.get(0).id;
            _.$renderedOutlines[elementID] = {
                outlines: {
                    $top: $('<div class="p-m-b-outline top-side"><div></div></div>'),
                    $right: $('<div class="p-m-b-outline right-side"><div></div></div>'),
                    $bottom: $('<div class="p-m-b-outline bottom-side"><div></div></div>'),
                    $left: $('<div class="p-m-b-outline left-side"><div></div></div>'),
                },
                mouseTimeout: null
            };
            var $outline = _.$renderedOutlines[elementID].outlines.$top
                .add(_.$renderedOutlines[elementID].outlines.$right)
                .add(_.$renderedOutlines[elementID].outlines.$bottom)
                .add(_.$renderedOutlines[elementID].outlines.$left);
            if ($el.hasClass('no-outline-offset')) {
                $outline.addClass('no-outline-offset');
            }
            $outline.on('mouseout.OutlineHandler', function(event) {
                var $enteredTarget = $(event.relatedTarget);
                if ($enteredTarget.hasClass('p-m-b-floating-menu-btn')) return;
                if ($enteredTarget.closest('.t-v-handler-tools').length > 0) return;
                if ($enteredTarget.closest('.s123-tool-bar').length > 0) return;
                if ($enteredTarget.closest('.t-c-handler').length > 0) return;
                if ($enteredTarget.closest('#' + elementID).length > 0) return;
                if (_.$renderedOutlines[elementID]) {
                    clearTimeout(_.$renderedOutlines[elementID].mouseTimeout);
                    _.$renderedOutlines[elementID].mouseTimeout = setTimeout(function() {
                        removeElementOutlines(elementID);
                    }, _.mouseOutTimeout);
                }
            });
            $outline.on('mouseenter.OutlineHandler', function(event) {
                $(document).trigger('OutlineHandler.outline.mouseenter', [$el, $(event.target)]);
            });
            $el.parent().append($outline);
            $el.addClass('p-m-b-highlight-visible');
            if (['relative', 'absolute'].indexOf($el.parent().css('position')) == -1) {
                $el.parent().addClass('o-h-relative');
            }
            $el.off('mouseout.OutlineHandler').on('mouseout.OutlineHandler', function(event) {
                event.stopPropagation();
                var $enteredTarget = $(event.relatedTarget);
                var $this = $(this);
                if ($enteredTarget.closest('.previewManageButton').length > 0) return;
                if ($enteredTarget.closest('#' + $el.get(0).id).length > 0) return;
                if ($enteredTarget.closest('.p-m-b-outline').length > 0) return;
                if ($enteredTarget.closest('.t-v-handler-tools').length > 0) return;
                if ($enteredTarget.closest('.s123-tool-bar').length > 0) return;
                if (_.$renderedOutlines[elementID]) {
                    clearTimeout(_.$renderedOutlines[elementID].mouseTimeout);
                    _.$renderedOutlines[elementID].mouseTimeout = setTimeout(function() {
                        removeElementOutlines(elementID);
                    }, _.mouseOutTimeout);
                }
            });
            _.setPosition(elementID);
            $(document).trigger('OutlineHandler.rendered', [elementID]);
        };
        _.removeAllOutlines = function(filterElementIDS) {
            $.each(_.$renderedOutlines, function(elementID, outline) {
                if (filterElementIDS && filterElementIDS.indexOf(elementID) != -1) return;
                if (_.$renderedOutlines[elementID]) clearTimeout(_.$renderedOutlines[elementID].mouseTimeout);
                removeElementOutlines(elementID);
            });
        };
        _.register = function($elements) {
            $elements.each(function(index, el) {
                var $el = $(el);
                if ($el.closest('.carousel').length > 0) {
                    $el = $el.closest('.carousel');
                }
                var id = $el.get(0).id;
                if (!id) {
                    id = topWindow.uniqid('OutlineHandler-tmp-');
                    $el.attr('id', id);
                }
                $el.addClass('p-m-b-highlight');
                _.$elements[id] = $el;
            });
        };
        _.destroy = function(elementID) {
            if (!_.$elements[elementID]) return;
            _.$elements[elementID].removeClass('p-m-b-highlight');
            removeElementOutlines(elementID);
            delete _.handled[elementID];
            delete _.$elements[elementID];
            delete _.$renderedOutlines[elementID];
        };
        _.setPosition = function(elementID) {
            var $el = _.$elements[elementID];
            var outlineOffset = 10;
            var includeMargins = true;
            if ($el.hasClass('no-outline-offset')) {
                outlineOffset = 0;
                includeMargins = false;
            }
            var offset = getOffsetRelativeToParent($el, outlineOffset);
            _.$renderedOutlines[elementID].outlines.$top.css({
                top: offset.top - _.$renderedOutlines[elementID].outlines.$top.outerHeight(includeMargins),
                left: offset.left,
                width: offset.width,
            });
            _.$renderedOutlines[elementID].outlines.$right.css({
                top: offset.top,
                left: offset.left + $el.outerWidth(),
                height: offset.height,
            });
            _.$renderedOutlines[elementID].outlines.$bottom.css({
                top: offset.top + $el.outerHeight(),
                left: offset.left,
                width: offset.width,
            });
            _.$renderedOutlines[elementID].outlines.$left.css({
                top: offset.top,
                left: offset.left - _.$renderedOutlines[elementID].outlines.$left.outerWidth(includeMargins),
                height: offset.height,
            });
            $(document).trigger('OutlineHandler.updatePosition', [elementID]);
        };
        _.handleResizeStart = function($el) {
            var id = $el.get(0).id;
            $.each(_.$elements, function(elementID, $el) {
                var $editable = $el.find('[contenteditable="true"]');
                if ($editable.length > 0) {
                    $editable.trigger('blur');
                    if (topWindow.abTestTXT == 'siteEditor_b') {
                        $(document).trigger('homepageAndHeaderEditor.hideToolBar', [$editable]);
                    } else {
                        $(document).trigger('homepageAndPromoEditor.hideToolBar', [$editable]);
                    }
                }
            });
        };
        _.handleResizeEnd = function(event, $el) {
            var $elementMouseOn = $(document.elementFromPoint(event.clientX, event.clientY));
            if (!$elementMouseOn.get(0)) return;
            if ($el.get(0).id == $elementMouseOn.get(0).id) return;
            if ($elementMouseOn.closest('#' + $el.get(0).id).length > 0) return;
            removeElementOutlines($el.get(0).id);
        };
        _.handleResize = function($el) {
            var id = $el.get(0).id;
            if (!_.$renderedOutlines[id]) return;
            _.setPosition(id);
        };
        _.focus = function($el) {
            if ($el.hasClass('p-m-b-highlight-focused')) return;
            $el.addClass('p-m-b-highlight-focused');
            _.removeAllOutlines();
            if (!_.$renderedOutlines[$el.get(0).id]) {
                _.render($el);
            }
        };
        _.blur = function($el) {
            $el.removeClass('p-m-b-highlight-focused');
            removeElementOutlines($el.get(0).id);
        };

        function removeElementOutlines(elementID) {
            if (!_.$renderedOutlines[elementID]) return;
            if (!_.$elements[elementID]) return;
            if (_.$elements[elementID].hasClass('p-m-b-highlight-focused')) return;
            if (_.$elements[elementID].hasClass('resizing')) return;
            _.$renderedOutlines[elementID].outlines.$top.remove();
            _.$renderedOutlines[elementID].outlines.$right.remove();
            _.$renderedOutlines[elementID].outlines.$bottom.remove();
            _.$renderedOutlines[elementID].outlines.$left.remove();
            if (_.$elements[elementID].parent().find('.p-m-b-highlight-visible').length == 0) {
                _.$elements[elementID].closest('.o-h-relative').removeClass('o-h-relative');
            }
            _.$elements[elementID].removeClass('p-m-b-highlight-visible');
            delete _.$renderedOutlines[elementID];
            $(document).trigger('OutlineHandler.removed', [elementID]);
        }

        function getOffsetRelativeToParent($el, outlineOffset) {
            var childPos = $el.offset();
            var parentPos = $el.parent().offset();
            return {
                top: childPos.top - parentPos.top,
                left: childPos.left - parentPos.left,
                width: $el.outerWidth() + outlineOffset,
                height: $el.outerHeight() + outlineOffset,
            };
        }

        function registerEvents($el) {
            var id = $el.get(0).id;
            $el.off('mouseenter.OutlineHandler').on('mouseenter.OutlineHandler', function(event) {
                if (_.$renderedOutlines[id]) clearTimeout(_.$renderedOutlines[id].mouseTimeout);
                if ($('html').hasClass('disable-inline-wizard')) return;
                if (topWindow.Wizard.Preview.Scale.mode != 'computer') return;
                if ($el.hasClass('disable-outline-on-enter')) return;
                var $this = $(this);
                var $contenteditable = $this.find('[data-s123-editable-elements="true"]');
                if ($contenteditable.length > 0 && $contenteditable.data('s123-editable-elements').isDisabled) return false;
                if (_.$elements[$this.get(0).id].hasClass('p-m-b-highlight-focused')) return;
                removeElementOutlines($this.get(0).id);
                _.render($this);
            });
            var $contenteditable = $el.find('[data-s123-editable-elements="true"]');
            if ($el.hasClass('s123-page-header') || $el.hasClass('s123-page-slogan')) {
                $contenteditable = $el;
            }
            $contenteditable.off('focus.OutlineHandler').on('focus.OutlineHandler', function(event) {
                var $this = $(this);
                if ($this.data('s123-editable-elements').isDisabled) return;
                var $el = $this.closest('.p-m-b-highlight');
                _.focus($this.closest('.p-m-b-highlight'));
            });
            $contenteditable.off('blur.OutlineHandler').on('blur.OutlineHandler', function(event) {
                var $this = $(this);
                var $el = $this.closest('.p-m-b-highlight');
                $el.removeClass('p-m-b-highlight-focused');
                removeElementOutlines($el.get(0).id);
            });
            $contenteditable.off('froalaEditor.focus.OutlineHandler').on('froalaEditor.focus.OutlineHandler', function(event, editor) {
                var $this = $(this);
                if ($this.data('s123-editable-elements').isDisabled) return;
                _.focus($this.closest('.p-m-b-highlight'));
            });
            $contenteditable.off('froalaEditor.blur.OutlineHandler').on('froalaEditor.blur.OutlineHandler', function(event, editor) {
                var $this = $(this);
                var $el = $this.closest('.p-m-b-highlight');
                $el.removeClass('p-m-b-highlight-focused');
                removeElementOutlines($el.get(0).id);
            });
            _.handled[id] = true;
        }

        function AnimationDetector(settings) {
            var _ = {
                $el: settings.$el,
                started: settings.started,
                inProcess: settings.inProcess,
                ended: settings.ended,
                animations: {}
            };
            _.init = function() {
                if (_.$el.hasClass('animation-detector')) return;
                _.$el.off('transitionstart.OutlineHandler').on('transitionstart.OutlineHandler', '.p-m-b-highlight', function(event) {
                    var $target = $(event.target);
                    if (!$target.hasClass('p-m-b-highlight')) return;
                    if (_.started) _.started.call(this, $target);
                    clearInterval(_.animations[$target.get(0).id]);
                    _.animations[$target.get(0).id] = setInterval(function() {
                        if (_.inProcess) _.inProcess.call(this, $target);
                    }, 10);
                });
                _.$el.off('transitionend.OutlineHandler webkitTransitionEnd.OutlineHandler oTransitionEnd.OutlineHandler').on('transitionend.OutlineHandler webkitTransitionEnd.OutlineHandler oTransitionEnd.OutlineHandler', '.p-m-b-highlight', function(event) {
                    var $target = $(event.target);
                    if (!$target.hasClass('p-m-b-highlight')) return;
                    clearInterval(_.animations[$target.get(0).id]);
                    if (_.ended) _.ended.call(this, $target);
                });
                _.$el.addClass('animation-detector');
            };
            _.init();
            return _;
        }

        function removeMissingDomElements() {
            $.each(_.$elements, function(elementID, $el) {
                if ($('#' + $el.get(0).id).length == 0) {
                    _.destroy($el.get(0).id);
                }
            });
        }
        return _;
    }();
    var ModuleItemsOutlineHandler = function() {
        var _ = {
            $element: null,
            animationDetector: null,
            $renderedOutlines: null,
            mouseOutTimeout: 1000,
        };
        _.init = function() {
            $(document).off('mouseenter.ModuleItemsOutlineHandler').on('mouseenter.ModuleItemsOutlineHandler', '.preview-highlighter', function(event) {
                    var $this = $(event.currentTarget);
                    if (topWindow.abTestTXT != 'siteEditor_b' && $this.closest('.s123-module:is([data-module-type-num="1000"])').length > 0) return;
                    if ($this.hasClass('s123-page-header') || $this.hasClass('s123-page-slogan')) return;
                    if ($('html').hasClass('disable-inline-wizard')) return;
                    if (topWindow.Wizard.Preview.Scale.mode != 'computer') return;
                    if ($this.hasClass('social-details-container') && $this.closest('.global_footer').length == 0) return;
                    if ($this.hasClass('p-m-b-highlight-visible')) return;
                    removePreviousItemOutlines();
                    var $item = $this;
                    var $module = $item.closest('.s123-module');
                    var itemUniqueID = $item.data('unique-id') ? $item.data('unique-id') : '';
                    var openTool = $item.data('open-tool') ? $item.data('open-tool') : '';
                    var moduleID = $module.data('module-id');
                    var moduleTypeNUM = $module.data('module-type-num');
                    var manuallAction = '';
                    if ($item.data('module-type-num')) {
                        moduleTypeNUM = $item.data('module-type-num');
                    }
                    if (topWindow.Wizard.Ecommerce.getHighlightType(moduleTypeNUM) == 'collection') {
                        moduleID = 112;
                        moduleTypeNUM = 113;
                        manuallAction = 'editItem';
                    }
                    if (moduleTypeNUM == 112 && $item.closest('.e-c-box').length > 0) {
                        moduleTypeNUM = 113;
                        itemUniqueID = $item.closest('.e-c-box').data('unique-id');
                    }
                    if ($item.data('module')) {
                        moduleID = $item.data('module');
                    }
                    let $outlinesContainer = $this.closest('.carousel').length > 0 ? $this.closest('.carousel') : $this;
                    _.render($outlinesContainer, function() {
                        var btnText = $item.find('form.custom-form, form.contactUsForm').length > 0 ? translations.settings : translations.edit;
                        var buttons = [{
                            text: btnText,
                            click: function(event) {
                                event.preventDefault();
                                if ($item.closest('.s123-c-t-a').length > 0) {
                                    event.stopPropagation();
                                }
                                if ([167, 169].includes(moduleTypeNUM)) {
                                    $item.attr('data-open-tool-caller', true);
                                }
                                openItemEditModal(moduleID, moduleTypeNUM, itemUniqueID, null, manuallAction, openTool);
                                if (IsEcommerceHighlight($module.data('module-type-num'))) {
                                    topWindow.g_ManageModuleID = $module.data('module-id');
                                }
                            }
                        }];
                        if ($item.closest('.e-c-box').data('module-type-num') != 113 && topWindow.modulesArr[moduleTypeNUM].one_item_module != 1) {
                            buttons.push({
                                type: 'delete',
                                icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" class="svg-inline--fa fa-trash fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path></svg>',
                                addCallback: function($btn) {
                                    $btn.confirmation({
                                        placement: $('html').attr('dir') === 'rtl' ? 'left' : 'right',
                                        title: translations.areYouSure,
                                        btnOkLabel: '<i class="icon-ok-sign icon-white"></i> ' + translations.yes,
                                        btnCancelLabel: '<i class="icon-remove-sign"></i> ' + translations.no,
                                        popout: true,
                                        singleton: true,
                                        container: $this.closest('section.s123-module'),
                                        btnOkClass: 'btn-danger btn-sm spacing-confirmation-btn',
                                        btnCancelClass: 'btn-default btn-sm spacing-confirmation-btn',
                                        delay: 0,
                                        onConfirm: function() {
                                            var itemsModuleID = '';
                                            var $page = topWindow.Wizard.Pages.getPage(moduleID);
                                            if ($page.data('items-module-id') && $page.data('items-module-id').length > 0) {
                                                itemsModuleID = $page.data('items-module-id');
                                            }
                                            topWindow.Wizard.Save.inProgress();
                                            $.ajax({
                                                type: "POST",
                                                url: "/versions/" + $(versionNUM).val() + "/wizard/modules/delete.php",
                                                data: {
                                                    w: $(websiteID).val(),
                                                    uniqueIDS: itemUniqueID,
                                                    moduleID: itemsModuleID.length > 0 ? itemsModuleID : moduleID,
                                                    moduleTypeNUM: moduleTypeNUM,
                                                    ajax: true
                                                },
                                                success: function(data) {
                                                    if (data == 'success') {
                                                        if (IsEcommerceHighlight($module.data('module-type-num'))) {
                                                            moduleID = $module.data('module-id');
                                                        }
                                                        topWindow.ReloadPreviewAndGoToModule(moduleID, true);
                                                        topWindow.Wizard.Save.success();
                                                    } else {
                                                        topWindow.Wizard.Save.error();
                                                    }
                                                },
                                                error: function() {
                                                    topWindow.Wizard.Save.error();
                                                }
                                            });
                                        }
                                    });
                                    $btn.on('show.bs.confirmation.ModuleItemsOutlineHandler', function(event) {
                                            $(document).on('mousedown.confirmation.ModuleItemsOutlineHandler', function(event) {
                                                var $target = $(event.target);
                                                if ($target.closest('.popover.confirmation').length === 0 && !$target.hasClass('delete')) {
                                                    $btn.confirmation('hide');
                                                    $(document).off('mousedown.confirmation.ModuleItemsOutlineHandler');
                                                }
                                            });
                                        })
                                        .on('shown.bs.confirmation.ModuleItemsOutlineHandler', function(event) {
                                            $('.popover.confirmation').on('mouseout.ModuleItemsOutlineHandler', function(event) {
                                                var $target = $(event.relatedTarget);
                                                if ($target.closest('.p-m-b-highlight-visible').length > 0) return;
                                                if ($target.closest('.popover.confirmation').length > 0) return;
                                                $('.popover.confirmation').off('mouseout.ModuleItemsOutlineHandler');
                                                removePreviousItemOutlines();
                                            });
                                        });
                                }
                            });
                        }
                        if ($item.closest('.s123-c-t-a[data-type="buttons"]').length > 0) {
                            buttons.push({
                                icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" class="svg-inline--fa fa-cog fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>',
                                click: function(event) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                    var $buttons = topWindow.Wizard.tabEffectHandler.designTabHandler.$tabContent.find('#WebsiteThemeAdvancedOptionsBOX .s123-collapse-settings[data-box-id="actionButtonStyle"]');
                                    expandWizardHomepage('designTab', '#websiteBackground');
                                    topWindow.Wizard.tabEffectHandler.AnimationManager.designTab.show(topWindow.$('#showAdvancedStructure'));
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.hide();
                                    topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.showTab('WebsiteThemeAdvancedOptionsBOX');
                                    $buttons.removeClass('hidden');
                                    $buttons.siblings().hide();
                                    $buttons.addClass('static');
                                    topWindow.$(topWindow.document).one('animation_manager.hide', function() {
                                        topWindow.Wizard.tabEffectHandler.designTabHandler.websiteStructureTabs.$linkContainer.show();
                                        $buttons.addClass('hidden');
                                        $buttons.siblings().show();
                                        $buttons.removeClass('static');
                                    });
                                }
                            });
                        }
                        addFloatingMenu({
                            type: 'moduleItem',
                            $element: $this,
                            buttons: buttons
                        });
                        $this.find('.p-m-b-floating-menu').on('mouseout.ModuleItemsOutlineHandler', function(event) {
                            var $target = $(event.relatedTarget);
                            if ($target.closest('.p-m-b-highlight-visible').length > 0) return;
                            if ($target.closest('.popover.confirmation').length > 0) return;
                            if ($target.closest('.p-m-b-floating-menu').length > 0) return;
                            removePreviousItemOutlines();
                        });
                    });
                })
                .off('OutlineHandler.rendered.ModuleItemsOutlineHandler').on('OutlineHandler.rendered.ModuleItemsOutlineHandler', function(event) {
                    removePreviousItemOutlines();
                });
            _.animationDetector = new AnimationDetector({
                $el: $(document),
                inProcess: function($el) {
                    if (!_.$renderedOutlines) return;
                    _.setPosition();
                },
                ended: function($el) {
                    if (!_.$renderedOutlines) return;
                    _.setPosition();
                }
            });
        };
        _.render = function($el, callback) {
            _.$element = $el;
            _.$renderedOutlines = {
                outlines: {
                    $top: $('<div class="p-m-b-outline top-side"><div></div></div>'),
                    $right: $('<div class="p-m-b-outline right-side"><div></div></div>'),
                    $bottom: $('<div class="p-m-b-outline bottom-side"><div></div></div>'),
                    $left: $('<div class="p-m-b-outline left-side"><div></div></div>'),
                },
                mouseTimeout: null
            };
            var $outline = _.$renderedOutlines.outlines.$top
                .add(_.$renderedOutlines.outlines.$right)
                .add(_.$renderedOutlines.outlines.$bottom)
                .add(_.$renderedOutlines.outlines.$left);
            _.$element.off('mouseout.ModuleItemsOutlineHandler').on('mouseout.ModuleItemsOutlineHandler', function(event) {
                if (!event.relatedTarget) return;
                if ($(event.relatedTarget).hasClass('p-m-b-outline')) return;
                if ($(event.relatedTarget).closest('.preview-highlighter').length !== 0) return;
                if ($(event.relatedTarget).closest('.popover.confirmation').length !== 0) return;
                removePreviousItemOutlines();
            });
            $outline.off('mouseout.ModuleItemsOutlineHandler').on('mouseout.ModuleItemsOutlineHandler', function(event) {
                removePreviousItemOutlines();
            });
            $el.parent().append($outline);
            $el.addClass('p-m-b-highlight-visible');
            if (['relative', 'absolute'].indexOf($el.parent().css('position')) == -1) {
                $el.parent().addClass('o-h-relative');
            }
            _.setPosition();
            if (callback) callback.call(this);
            $(document).trigger('ModuleItemsOutlineHandler.rendered');
        };
        _.setPosition = function() {
            var offset = getOffsetRelativeToParent(_.$element);
            _.$renderedOutlines.outlines.$top.css({
                top: offset.top - _.$renderedOutlines.outlines.$top.outerHeight(true),
                left: offset.left,
                width: offset.width,
            });
            _.$renderedOutlines.outlines.$right.css({
                top: offset.top,
                left: offset.left + _.$element.outerWidth(),
                height: offset.height,
            });
            _.$renderedOutlines.outlines.$bottom.css({
                top: offset.top + _.$element.outerHeight(),
                left: offset.left,
                width: offset.width,
            });
            _.$renderedOutlines.outlines.$left.css({
                top: offset.top,
                left: offset.left - _.$renderedOutlines.outlines.$left.outerWidth(true),
                height: offset.height,
            });
        };
        _.handleResize = function() {
            if (!_.$element) return;
            if (!_.$renderedOutlines) return;
            _.setPosition();
        };

        function removePreviousItemOutlines() {
            if (!_.$element) return;
            if (!_.$renderedOutlines) return;
            _.$renderedOutlines.outlines.$top.remove();
            _.$renderedOutlines.outlines.$right.remove();
            _.$renderedOutlines.outlines.$bottom.remove();
            _.$renderedOutlines.outlines.$left.remove();
            _.$element.removeClass('p-m-b-highlight-visible');
            _.$element.find('.p-m-b-floating-menu [data-type="delete"]').confirmation('destroy');
            _.$element.find('.p-m-b-floating-menu').remove();
            _.$renderedOutlines = null;
            _.$element = null;
        }

        function getOffsetRelativeToParent($el) {
            var outlineOffset = 10;
            var childPos = $el.offset();
            var parentPos = $el.parent().offset();
            return {
                top: childPos.top - parentPos.top,
                left: childPos.left - parentPos.left,
                width: $el.outerWidth() + outlineOffset,
                height: $el.outerHeight() + outlineOffset,
            };
        }

        function AnimationDetector(settings) {
            var _ = {
                $el: settings.$el,
                started: settings.started,
                inProcess: settings.inProcess,
                ended: settings.ended,
                animation: null
            };
            _.init = function() {
                if (_.$el.hasClass('animation-detector')) return;
                _.$el.off('transitionstart.ModuleItemsOutlineHandler').on('transitionstart.ModuleItemsOutlineHandler', '.preview-highlighter', function(event) {
                    var $target = $(event.target);
                    if (!$target.hasClass('preview-highlighter')) return;
                    if (_.started) _.started.call(this, $target);
                    clearInterval(_.animation);
                    _.animation = setInterval(function() {
                        if (_.inProcess) _.inProcess.call(this, $target);
                    }, 10);
                });
                _.$el.off('transitionend.ModuleItemsOutlineHandler webkitTransitionEnd.ModuleItemsOutlineHandler oTransitionEnd.ModuleItemsOutlineHandler').on('transitionend.ModuleItemsOutlineHandler webkitTransitionEnd.ModuleItemsOutlineHandler oTransitionEnd.ModuleItemsOutlineHandler', '.preview-highlighter', function(event) {
                    var $target = $(event.target);
                    if (!$target.hasClass('preview-highlighter')) return;
                    clearInterval(_.animation);
                    if (_.ended) _.ended.call(this, $target);
                });
                _.$el.addClass('animation-detector');
            };
            _.init();
            return _;
        }
        return _;
    }();
    var S123ResizeObserver = function() {
        var _ = {
            $elements: {},
            observers: {},
            selector: '',
            sizeChangeCallback: null
        };
        _.init = function(settings) {
            _.site123ReadyMultiTriggerDebounce = clearTimeout(_.site123ReadyMultiTriggerDebounce);
            _.site123ReadyMultiTriggerDebounce = setTimeout(function() {
                _.destroy();
                _.selector = settings.selector;
                _.sizeChangeCallback = settings.sizeChangeCallback;
                registerEvents();
            }, 100);
        };
        _.refresh = function() {
            registerEvents();
        };
        _.destroy = function() {
            $.each(_.observers, function(elementID, observer) {
                observer.destroy();
                delete _.observers[elementID];
            });
        };

        function registerEvents() {
            $(_.selector).each(function(index, el) {
                var $el = $(el);
                var id = $el.get(0).id;
                if (!id) {
                    id = topWindow.uniqid('S123ResizeObserver-tmp-');
                    $el.attr('id', id);
                }
                _.observers[id] = new Observer({
                    $el: $el,
                    returnOuterSize: false,
                    includeMargins: false,
                    callback: function($el, width, height) {
                        if (_.sizeChangeCallback) _.sizeChangeCallback.call(this, $el, width, height);
                    }
                });
            });
        }

        function Observer(settings) {
            var _ = {
                $el: settings.$el,
                returnOuterSize: settings.returnOuterSize,
                includeMargins: settings.includeMargins,
                callback: settings.callback,
                resizeObserver: null
            };
            _.init = function() {
                _.resizeObserver = new ResizeObserver(function() {
                    if ($('#' + _.$el.get(0).id).length == 0) {
                        _.destroy();
                        return;
                    }
                    if (_.callback) _.callback.call(this, _.$el, getNewSize());
                });
                _.resizeObserver.observe(_.$el.get(0));
                _.$el.addClass('s123-resize-observer');
            };
            _.destroy = function() {
                _.resizeObserver.unobserve(_.$el.get(0));
                _.$el.removeClass('s123-resize-observer');
            };

            function getNewSize() {
                if (_.returnOuterSize) {
                    return {
                        width: _.$el.outerWidth(_.includeMargins),
                        height: _.$el.outerHeight(_.includeMargins)
                    };
                } else {
                    return {
                        width: _.$el.width(),
                        height: _.$el.height()
                    };
                }
            }
            _.init();
            return _;
        };
        return _;
    }();

    function S123SectionPadding(settings) {
        var _ = {
            paddingTop: settings.paddingTop,
            paddingBottom: settings.paddingBottom,
            calculatePadding: settings.calculatePadding,
            currentTab: settings.currentTab,
            tabShowCallback: settings.tabShowCallback,
            changeCallback: settings.changeCallback,
            finishTypingCallback: settings.finishTypingCallback,
            saveCallback: settings.saveCallback,
            isDisabled: false
        };
        _.init = function() {
            _.$html = $(generateHtml());
            _.$html.find('#custom input').off('input.S123SectionPadding').on('input.S123SectionPadding', function(event, changeWithoutSaving) {
                var $this = $(this);
                if ($this.data('type') == 'paddingTop') _.paddingTop = $this.val();
                if ($this.data('type') == 'paddingBottom') _.paddingBottom = $this.val();
                if (_.changeCallback) _.changeCallback.call(this, $this.data('type'), $this.val());
                if (changeWithoutSaving) return;
                clearTimeout(this.typingDelay);
                this.typingDelay = setTimeout(function() {
                    if (_.finishTypingCallback) _.finishTypingCallback.call(this, $this.data('type'), $this.val());
                    if (_.saveCallback) _.saveCallback.call(this);
                }, 500);
            });
            _.$html.find('.s123-s-p-custom-padding-input').off('change.S123SectionPadding').on('change.S123SectionPadding', function(event, changeWithoutSaving) {
                if (_.isDisabled) return;
                var $this = $(this);
                var $paddingTop = _.$html.find('[data-type="paddingTop"]');
                var $paddingBottom = _.$html.find('[data-type="paddingBottom"]');
                $paddingTop.val(getPaddings('top'));
                $paddingBottom.val(getPaddings('bottom'));
                var state = $this.prop('checked') ? 'custom' : 'auto';
                _.setTab(state);
                if (_.tabShowCallback) _.tabShowCallback.call(this, state, $paddingTop.val(), $paddingBottom.val());
                if (changeWithoutSaving) return;
                if (_.saveCallback) _.saveCallback.call(this);
            });
            _.setTab(_.currentTab);
        };
        _.setTab = function(tab) {
            var $tabs = _.$html.find('.tab');
            $tabs.hide();
            $tabs.filter('#' + tab).fadeIn();
        };
        _.enable = function() {
            _.isDisabled = false;
            _.$html.filter('.s123-s-p-custom-padding-box').removeClass('disabled');
            _.$html.closest('.custom-padding').tooltip('destroy');
        };
        _.disable = function() {
            _.isDisabled = true;
            _.$html.filter('.s123-s-p-custom-padding-box').addClass('disabled');
            _.$html.find('.s123-s-p-custom-padding-input').prop('checked', false);
            _.$html.closest('.custom-padding').tooltip({
                title: translations.sectionPadding.disabledTooltip,
                container: 'body',
                placement: 'auto'
            });
        };
        _.hide = function() {
            _.$html.hide();
        };
        _.show = function() {
            _.$html.show();
        };

        function generateHtml() {
            var html = '';
            var state = _.currentTab === 'custom' ? 'checked' : '';
            html += '<div class="s123-s-p-custom-padding-box">';
            html += '<div class="row">';
            html += '<div class="col-xs-9">';
            html += '<label>' + translations.sectionPadding.customPadding + '</label>';
            html += '</div>';
            html += '<div class="col-xs-3">';
            html += '<label class="pull-right">';
            html += '<input class="ace ace-switch s123-s-p-custom-padding-input" type="checkbox" ' + state + '>';
            html += '<span class="lbl" style="margin: 0;"></span>';
            html += '</label>';
            html += '</div>';
            html += '<div class="col-xs-12 s123-s-p-custom-padding-properties">';
            html += '<div class="tab-content form-group">';
            html += '<div id="custom" class="tab">';
            html += '<div class="top">';
            html += '<label>' + translations.sectionPadding.top + '</label>';
            html += '<input type="number" min="0" class="form-control" placeholder="0px" data-type="paddingTop" value="' + getPaddings('top') + '">';
            html += '</div>';
            html += '<div class="bottom">';
            html += '<label>' + translations.sectionPadding.bottom + '</label>';
            html += '<input type="number" min="0" class="form-control" placeholder="0px" data-type="paddingBottom" value="' + getPaddings('bottom') + '">';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            return html;
        }

        function getPaddings(type) {
            switch (type) {
                case 'top':
                    var padding = $.isNumeric(_.paddingTop) ? _.paddingTop : null;
                    break;
                case 'bottom':
                    var padding = $.isNumeric(_.paddingBottom) ? _.paddingBottom : null;
                    break;
            }
            if (!$.isNumeric(padding)) {
                var defPadding = _.calculatePadding ? _.calculatePadding.call(this, type) : null;
                if ($.isNumeric(defPadding)) {
                    padding = defPadding;
                } else {
                    padding = 0;
                }
            }
            return padding;
        }
        _.init();
        return _;
    };

    function addFloatingMenu($options) {
        if ($options.$element.find('.p-m-b-floating-menu[data-type="' + $options.type + '"]').length !== 0 && !$options.allowMultiple) return;
        var $menu = $('<div class="p-m-b-floating-menu" data-type="' + $options.type + '"></div>');
        if ($options.buttons) {
            $.each($options.buttons, function(i, button) {
                addFloatingMenuBtn($menu, button, false);
            });
        }
        $options.$element.append($menu);
        if ($.inArray($options.$element.css('position'), ['absolute', 'relative', 'fixed']) === -1) {
            $options.$element.css({
                position: 'relative'
            });
        }
        return $menu;
    };

    function addFloatingMenuBtn($menu, settings, isManuallyAdded) {
        if (isManuallyAdded && $menu.find('[data-type="' + settings.type + '"]').length > 0) return;
        var $btn = $('<a class="p-m-b-floating-menu-btn p-m-b-design ' + (settings.classList ? settings.classList : '') + '" data-type="' + settings.type + '" ' + (settings.customAttributes ? settings.customAttributes : '') + '></a>');
        if (settings.icon && !settings.text) {
            $btn.html(settings.icon);
        } else if (!settings.icon && settings.text) {
            $btn.text(settings.text);
        } else if (settings.icon && settings.text) {
            $btn.html(settings.icon + '&nbsp;' + '<span>' + settings.text + '</span>');
        }
        $btn.off('click.p_m_helpers').on('click.p_m_helpers', function(event) {
            if (settings.click) settings.click.call(this, event);
        });
        $menu.append($btn);
        if (settings.buttons && settings.buttons.length > 0) {
            switch (settings.menuType) {
                case 'popover':
                    var $container = $('<div class="p-m-b-btn-more-container" data-type="' + settings.type + '"></div>');
                    var $list = $('<div class="p-m-b-btn-more-list"></div>');
                    $container.append($btn);
                    for (var i = 0; i < settings.buttons.length; i++) {
                        var $item = $('<div class="p-m-b-floating-menu" data-type="' + settings.buttons[i].type + '"></div>');
                        addFloatingMenuBtn($item, settings.buttons[i], true);
                        $list.append($item);
                    }
                    var s123PopOver = new S123PopOver({
                        $el: $btn,
                        customClass: 'p-m-b-btn-more-popover',
                        popoverSettings: {
                            placement: 'auto bottom',
                            content: $list
                        },
                        showCallback: function() {
                            $list.find('.p-m-b-floating-menu-btn:not(.s123-p)').one('click', function(event) {
                                s123PopOver.hide();
                            });
                            if ($menu.closest('.w-helper, .preview-highlighter').length > 0) {
                                OutlineHandler.focus($menu.closest('.w-helper, .preview-highlighter'));
                                $(document).off('click.moreBtnHelper').on('click.moreBtnHelper', function(event) {
                                    if ($(event.target).closest('.w-helper, .preview-highlighter').length > 0) return;
                                    OutlineHandler.blur($menu.closest('.w-helper, .preview-highlighter'));
                                    $(document).off('click.moreBtnHelper');
                                });
                            }
                        }
                    });
                    $btn
                        .off('show.bs.popover.moreBtn').on('show.bs.popover.moreBtn', function(event) {
                            OutlineHandler.focus(settings.$el);
                        })
                        .off('shown.bs.popover.moreBtn').on('shown.bs.popover.moreBtn', function(event) {
                            $list.find('.p-m-b-floating-menu-btn:not(.s123-p)').one('click', function(event) {
                                s123PopOver.hide();
                            });
                            $btn.on('click.preventOutlineBlur', function(event) {
                                $btn.addClass('m-b-k-o');
                            });
                        })
                        .off('hide.bs.popover.moreBtn').on('hide.bs.popover.moreBtn', function(event) {
                            $list.find('.p-m-b-floating-menu-btn').each(function(index, btn) {
                                var $this = $(this);
                                if ($this.data('s123-p')) $this.data('s123-p').hide();
                            });
                        })
                        .off('hidden.bs.popover.moreBtn').on('hidden.bs.popover.moreBtn', function(event) {
                            $btn.off('click.preventOutlineBlur');
                            if ($btn.hasClass('m-b-k-o')) {
                                $btn.removeClass('m-b-k-o');
                                return;
                            }
                            OutlineHandler.blur(settings.$el);
                        });
                    break;
                default:
                    $btn.attr('data-toggle', 'dropdown');
                    var $container = $('<div class="p-m-b-btn-more-container p-m-b-floating-menu dropdown" data-type="' + settings.type + '"></div>');
                    var $dropDown = $('<ul class="dropdown-menu"></ul>');
                    $container.append($btn);
                    $container.append($dropDown);
                    for (var i = 0; i < settings.buttons.length; i++) {
                        var $li = $('<li class="p-m-b-floating-menu" data-type="' + settings.type + '"></li>');
                        addFloatingMenuBtn($li, settings.buttons[i], true);
                        $dropDown.append($li);
                    }
                    break;
            }
            $menu.append($container);
        }
        if ($menu.children().length == 1) {
            $menu.addClass('one-btn-only');
        } else {
            $menu.removeClass('one-btn-only');
        }
        if (settings.addCallback) settings.addCallback.call(this, $btn);
    };

    function openItemEditModal(moduleID, moduleTypeNUM, itemUniqueID, loadedCallback = null, manualAction = '', openTool = '') {
        var $wizardPage = topWindow.Wizard.Pages.getPage(moduleID);
        var action = itemUniqueID == '' ? 'itemsPage' : 'editItem';
        if (manualAction.length > 0) {
            action = manualAction;
        }
        if (action == 'itemsPage') {
            if ([169, 167].includes(parseInt(moduleTypeNUM))) {
                topWindow.Wizard.InlineModuleEditor.im_show(moduleID, moduleTypeNUM, openTool, loadedCallback);
            } else if (moduleTypeNUM == 1000) {
                topWindow.OpenWizardTab('pagesTab', true);
                topWindow.OpenPromoInlineEdit($wizardPage, moduleTypeNUM, loadedCallback);
                $wizardPage.data('prevent-module-scroll', true);
                topWindow.$('.inline-module').addClass('no-header');
                topWindow.$(topWindow.document).one('animation_manager.hide', function() {
                    topWindow.$('.inline-module').removeClass('no-header');
                    $wizardPage.data('prevent-module-scroll', false);
                });
            } else {
                topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + moduleID + '"]').trigger('click', 'wizard-preview');
            }
            if (topWindow.RichPage.isChild($wizardPage)) {
                topWindow.Wizard.Pages.modeManager.set('richPage', topWindow.RichPage.getParent($wizardPage).data('moduleid'), false);
            }
        } else {
            if (moduleTypeNUM == '113') {
                var collectionData = {
                    uniqueID: itemUniqueID,
                    moduleID: moduleID,
                    isFromCollection: false
                };
                $.cookie($(websiteID).val() + '_113_collection', JSON.stringify(collectionData), {
                    expires: 1,
                    path: '/'
                });
                itemUniqueID = '';
                action = 'itemsPage';
            }
            topWindow.OpenModuleManagmentWizardFromPreview(moduleID, moduleTypeNUM, itemUniqueID, IsHomepage(), action);
        }
    }

    function S123SortableSections(settings) {
        var _ = {
            $section: settings.$section,
            $btnsContainer: settings.$btnsContainer,
            disabled: false
        };
        _.init = function() {
            if (topWindow.modulesArr[_.$section.data('module-type-num')].module_kind == '4') return;
            if (topWindow.modulesArr[_.$section.data('module-type-num')].module_kind == '5') return;
            if (topWindow.modulesArr[_.$section.data('module-type-num')].module_kind == '6') return;
            if (_.$section.data('module-type-num') == '169') return;
            _.$btnsContainer.append(generateHtml(_.$section));
            var $s123Sortable = _.$section.find('.s123-sortable');
            $s123Sortable.off('click.s123Sortable').on('click.s123Sortable', function(event) {
                event.preventDefault();
                var $this = $(this);
                if ($this.hasClass('disabled')) return;
                var moduleID = $this.data('module-id');
                var moduleTypeNum = $this.data('module-type');
                var $module = topWindow.Wizard.Pages.getPage($(this).data('module-id'));
                if ($this.hasClass('move-section-up')) {
                    $module.insertBefore(getPrevSection($module));
                } else if ($this.hasClass('move-section-down')) {
                    $module.insertAfter(getNextSection($module));
                }
                $this.tooltip('hide');
                topWindow.BuildToolJSON();
                topWindow.SortPreviewModules(true);
                topWindow.window.scrollPreview = '#section-' + $(this).data('module-id');
                topWindow.scrollToPointInPreview();
                _.disableEnableSortingIcon();
                topWindow.AutoSaveWizard(false, true);
                var wizardActiveButton = topWindow.ActionButtons.getActiveButton();
                if (wizardActiveButton) {
                    wizardActiveButton.rebuildOption('scroll');
                } else if (topWindow.$('.inline-wizard-iframe:is([data-module-type-num="169"],[data-module-type-num="167"],[data-module-type-num="1000"])').length > 0) {
                    var promoActiveButton = topWindow.$('.inline-wizard-iframe:is([data-module-type-num="169"],[data-module-type-num="167"],[data-module-type-num="1000"])').get(0).contentWindow.ActionButtons.getActiveButton();
                    if (promoActiveButton) {
                        promoActiveButton.rebuildOption('scroll');
                    }
                }
            });
            _.disableEnableSortingIcon();
            $s123Sortable.data('s123-sortable', _);
        };

        function generateHtml($section) {
            var html = '';
            html += '<div class="s123-sortable-sections">';
            html += '<a href="#" class="p-m-b-design s123-sortable move-section-up tooltip-manual" data-module-id="' + $section.data('module-id') + '" data-module-type="' + $section.data('module-type-num') + '"><i class="fa fa-arrow-up"></i></a>';
            html += '<a href="#" class="p-m-b-design s123-sortable move-section-down tooltip-manual" data-module-id="' + $section.data('module-id') + '" data-module-type="' + $section.data('module-type-num') + '"><i class="fa fa-arrow-down"></i></a>';
            html += '</div>';
            return html;
        }

        function getNextSection($module) {
            var $nexModule = $module.next();
            if (isNoSectionModule($nexModule.data('moduletypenum'))) {
                $nexModule = getNextSection($nexModule);
            }
            if (!topWindow.IsSinglePage() && (IsHomepage() && !IsRichPage()) && $nexModule.data('module-mp-show-in-home') == '0') {
                $nexModule = getNextSection($nexModule);
            }
            return $nexModule;
        }

        function getPrevSection($module) {
            var $prevModule = $module.prev();
            if (isNoSectionModule($prevModule.data('moduletypenum'))) {
                $prevModule = getPrevSection($prevModule);
            }
            if (!topWindow.IsSinglePage() && (IsHomepage() && !IsRichPage()) && $prevModule.data('module-mp-show-in-home') == '0') {
                $prevModule = getPrevSection($prevModule);
            }
            return $prevModule;
        }
        _.disableEnableSortingIcon = function() {
            _.disabled = false;
            if (IsRichPage()) {
                var isPromoFirst = true;
                var $modules = topWindow.Wizard.Pages.getPage($('.s123-module-rich-page').data('module-id')).find('ul > li').filter(function(index, module) {
                    var $module = $(module);
                    if (isPromoFirst && ($module.data('moduletypenum') == 1000)) {
                        return false;
                    }
                    if ($module.data('moduletypenum') != 1000) {
                        isPromoFirst = false;
                    }
                    return true;
                });
            } else if (IsHomepage()) {
                var $modules = topWindow.Wizard.Pages.listParent.children().filter(function(index, module) {
                    var $module = $(module);
                    if ($module.data('moduletypenum') == 78) {
                        _.disabled = true;
                    }
                    if (!$module.data('module-mp-show-in-home')) return false;
                    if (isNoSectionModule($module.data('moduletypenum'))) return false;
                    return true;
                });
            } else if (IsInsidePage()) {
                if ($.inArray($('section.s123-module').data('module-type-num').toString(), topWindow.RichPage.unAddableModules) != -1) {
                    var $modules = topWindow.Wizard.Pages.getPage($('section.s123-module').data('module-id'));
                    return true;
                } else {
                    var $modules = [];
                    return false;
                }
            }
            _.$section.parent().children().each(function(index, section) {
                var $section = $(section);
                var $moveSectionUp = $section.find('.s123-sortable.move-section-up');
                var $moveSectionDown = $section.find('.s123-sortable.move-section-down');
                var $module = topWindow.Wizard.Pages.getPage($section.data('module-id'));
                var index = $modules.index($module);
                $moveSectionUp.removeClass('disabled');
                $moveSectionDown.removeClass('disabled');
                if (index == 0) {
                    $moveSectionUp.addClass('disabled');
                }
                if (IsRichPage()) {
                    if (($module.data('moduletypenum') == 1000) && index <= 1) {
                        $moveSectionUp.addClass('disabled');
                        $moveSectionUp.addClass('rich-page-disabled-promo');
                    } else if (($module.next().data('moduletypenum') == 1000) && index == 0) {
                        $moveSectionDown.addClass('disabled');
                        $moveSectionDown.addClass('rich-page-disabled-promo');
                    }
                }
                if (index == $modules.length - 1) {
                    $moveSectionDown.addClass('disabled');
                }
                addTooltip($moveSectionUp, 'sortUp');
                addTooltip($moveSectionDown, 'sortDown');
                if (_.disabled) {
                    var $moveSectionUp = $section.find('.s123-sortable.move-section-up');
                    var $moveSectionDown = $section.find('.s123-sortable.move-section-down');
                    $moveSectionUp
                        .add($moveSectionDown)
                        .addClass('disabled')
                        .tooltip('destroy')
                        .tooltip({
                            title: translations.sectionManager.sortingDisabledTooltip,
                            container: 'body',
                            placement: 'top',
                            delay: {
                                show: 2000,
                                hide: 0
                            }
                        });
                }
            });
        }

        function isNoSectionModule(moduleTypeNUM) {
            if (topWindow.modulesArr[moduleTypeNUM].module_kind == '4') return true;
            if (topWindow.modulesArr[moduleTypeNUM].module_kind == '5') return true;
            if (topWindow.modulesArr[moduleTypeNUM].module_kind == '6') return true;
            return false;
        }

        function addTooltip($el, type) {
            $el.tooltip('destroy');
            var title = '';
            if ($el.hasClass('disabled')) {
                title = type == 'sortUp' ? translations.sectionManager.sortUpDisabledTooltip : translations.sectionManager.sortDownDisabledTooltip;
            } else {
                title = type == 'sortUp' ? translations.sectionManager.sortUpTooltip : translations.sectionManager.sortDownTooltip;
            }
            $el.tooltip({
                title: title,
                container: 'body',
                placement: 'top',
                delay: {
                    show: 2000,
                    hide: 0
                }
            });
        }
        _.init();
        return _;
    };

    function DuplicateModule(settings) {
        var _ = {
            moduleID: settings.moduleID,
            moduleTypeNUM: settings.moduleTypeNUM,
            $btnsContainer: settings.$btnsContainer
        };
        _.init = function() {
            _.$html = $(generateHTML());
            _.$btnsContainer.append(_.$html);
            _.$btn = _.$html.find('.duplicate-module');
            _.$module = _.$html.find('.duplicate-module');
            _.$btn.off('click.duplicatedModule').on('click.duplicatedModule', function(event) {
                event.preventDefault();
                _.duplicate();
            });
            _.$btn.tooltip({
                title: translations.sectionManager.duplicateModuleTooltip,
                container: 'body',
                placement: 'top',
                delay: {
                    show: 2000,
                    hide: 0
                }
            });
        };
        _.duplicate = function() {
            topWindow.g_ManageAddModuleData = {
                action: 'after',
                $module: topWindow.Wizard.Pages.getPage(_.moduleID),
            };
            topWindow.duplicateModule(_.moduleTypeNUM, _.moduleID, false, null);
        };

        function generateHTML() {
            var html = '';
            html += '<div>';
            html += '<a class="p-m-b-design duplicate-module tooltip-manual">';
            html += '<i class="ace-icon fa fa-files-o"></i>';
            html += '</a>';
            html += '</div>';
            return html;
        }
        _.init();
        return _;
    }

    function ResizableText(settings) {
        var _ = {
            $el: settings.$el,
            minFontSize: settings.minFontSize,
            maxFontSize: settings.maxFontSize,
            $wrapper: null,
            $section: settings.$section,
            initCallBack: settings.initCallBack,
            startCallBack: settings.startCallBack,
            resizeCallBack: settings.resizeCallBack,
            endCallBack: settings.endCallBack,
            customClass: settings.customClass
        };
        _.init = function() {
            if (_.$el.data('resizable-text')) _.$el.data('resizable-text').destroy();
            var heightLimits = getMinMaxResizableHeight();
            _.$el.wrap('<div class="resizable-text-wrapper visible" data-rel="' + _.$el.get(0).id + '"></div>');
            _.$wrapper = _.$el.parent();
            if (_.customClass) _.$wrapper.addClass(_.customClass);
            var resizable = new S123Resizable({
                $el: _.$wrapper,
                maxWidth: _.$el.closest('.boxBorder').width(),
                resizByWidth: false,
                resizByHeight: true,
                preserveRatio: false,
                minHeight: heightLimits.min,
                maxHeight: heightLimits.max,
                startCallBack: function(event, ui) {
                    if (_.startCallBack) _.startCallBack.call(this, event, ui);
                },
                resizeCallBack: function(event, ui) {
                    fittText(_.$el);
                    if (_.resizeCallBack) _.resizeCallBack.call(this, parseInt(_.$el.css('font-size')));
                },
                endCallBack: function(event, ui) {
                    var fontSize = parseInt(_.$el.css('font-size'));
                    _.$el.css({
                        fontSize: ''
                    });
                    if (_.endCallBack) _.endCallBack.call(this, fontSize);
                }
            });
            _.$section.off('textAdded.' + _.$el.get(0).id).on('textAdded.' + _.$el.get(0).id, function(event, elementID) {
                if (elementID != _.$el.get(0).id) return;
                _.$wrapper.addClass('visible');
            });
            _.$section.off('textRemoved.' + _.$el.get(0).id).on('textRemoved.' + _.$el.get(0).id, function(event, elementID) {
                if (elementID != _.$el.get(0).id) return;
                _.$wrapper.removeClass('visible');
            });
            if (!_.$el.is(':visible')) {
                _.$wrapper.removeClass('visible');
            }
            if (_.initCallBack) _.initCallBack.call(this, _);
            _.$el.data('resizable-text', _);
        };
        _.destroy = function() {
            _.$wrapper.data('s123-resizable').destroy();
            _.$el.unwrap();
        };

        function fittText($elements) {
            if ($elements.length == 0) return;
            $elements.each(function(index, el) {
                var $this = $(this);
                var steps = 1;
                $this.css('font-size', (parseInt($this.css('font-size')) + 10) + 'px');
                while (isOverflowing(this) && steps < 50) {
                    $this.css('font-size', (parseInt($this.css('font-size')) - 1) + 'px');
                    steps++;
                }
            });

            function isOverflowing(el) {
                el.classList.add('get-clean-scroll-width');
                var isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
                el.classList.remove('get-clean-scroll-width');
                return isOverflowing;
            }
        }

        function getMinMaxResizableHeight() {
            var heightLimits = {
                max: null,
                min: null
            };
            var $clone = _.$el.clone();
            _.$el.parent().append($clone);
            $clone.css({
                fontSize: _.minFontSize + 'px'
            });
            heightLimits.min = $clone.height();
            $clone.css({
                fontSize: _.maxFontSize + 'px'
            });
            heightLimits.max = $clone.height();
            $clone.remove();
            return heightLimits;
        }
        _.init();
        return _;
    };

    function S123ToolBar(settings) {
        var _ = {
            $el: settings.$el,
            optionsList: settings.optionsList ? settings.optionsList : [],
            clickCallback: settings.clickCallback,
            showCallback: settings.showCallback,
            hideCallback: settings.hideCallback,
            initCallback: settings.initCallback,
            preventHideToolBar: false
        };
        _.init = function() {
            if (_.$el.data('s123-tool-bar')) _.$el.data('s123-tool-bar').destroy();
            var html = '';
            html += '<div data-rel="' + _.$el.get(0).id + '" class="s123-tool-bar">';
            if (_.optionsList.indexOf('weight') != -1) {
                html += '<a data-type="weight" href="#" data-active-supported="true">' + S123.s123IconToSvg.getHtml('bold', '', '') + '</a>';
            }
            if (_.optionsList.indexOf('italic') != -1) {
                html += '<a data-type="italic" href="#" data-active-supported="true">' + S123.s123IconToSvg.getHtml('italic', '', '') + '</a>';
            }
            if (_.optionsList.indexOf('fontSize') != -1) {
                html += '<a data-type="fontSize" data-action="increase" href="#">' + S123.s123IconToSvg.getHtml('plus', '', '') + '</a>';
                html += '<a data-type="fontSize" data-action="decrease" href="#">' + S123.s123IconToSvg.getHtml('minus', '', '') + '</a>';
            }
            if (_.optionsList.indexOf('fontStyle') != -1) {
                html += '<a id="fontStyle_' + _.$el.get(0).id + '" data-type="fontStyle" href="#"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="font" class="svg-inline--fa fa-font fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"></path></svg></a>';
            }
            if (_.optionsList.indexOf('aiSuggestedText') != -1) {
                html += '<a data-type="aiSuggestedText" href="#" data-active-supported="false">' + S123.s123IconToSvg.getHtml('magic', '', '') + '</a>';
            }
            if (_.optionsList.indexOf('fontResizing') != -1) {
                html += '<a id="fontResizing_' + _.$el.get(0).id + '" data-type="fontResizing" href="#"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="text-size" class="svg-inline--fa fa-text-size fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 32H272a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h112v336h-48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-48V96h112v32a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM304 224H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-32h80v160H96a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-32V272h80v32a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16z"></path></svg></a>';
            }
            if (_.optionsList.indexOf('textMargins') != -1) {
                html += '<a id="textMargins_' + _.$el.get(0).id + '" data-type="textMargins" href="#" data-active-supported="true"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrows-alt-v" class="svg-inline--fa fa-arrows-alt-v fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z"></path></svg></a>';
            }
            if (_.optionsList.indexOf('textLayouts') != -1) {
                html += '<a id="textLayouts_' + _.$el.get(0).id + '" data-type="textLayouts" href="#"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" class="svg-inline--fa fa-palette fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg></a>';
            }
            if (_.optionsList.indexOf('textPositions') != -1) {
                html += '<a id="textPositions_' + _.$el.get(0).id + '" data-type="textPositions" href="#"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="align-center" class="svg-inline--fa fa-align-center fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM108.1 96h231.81A12.09 12.09 0 0 0 352 83.9V44.09A12.09 12.09 0 0 0 339.91 32H108.1A12.09 12.09 0 0 0 96 44.09V83.9A12.1 12.1 0 0 0 108.1 96zm231.81 256A12.09 12.09 0 0 0 352 339.9v-39.81A12.09 12.09 0 0 0 339.91 288H108.1A12.09 12.09 0 0 0 96 300.09v39.81a12.1 12.1 0 0 0 12.1 12.1z"></path></svg></a>';
            }
            if (topWindow.abTestTXT != 'siteEditor_b' && _.optionsList.indexOf('textAnimation') != -1) {
                html += '<a id="textAnimation_' + _.$el.get(0).id + '" data-type="textAnimation" href="#">' + S123.s123IconToSvg.getHtml('wand5f22b321ec201', '', '') + '</a>';
            }
            if (_.optionsList.indexOf('textShadow') != -1) {
                html += '<a id="textShadow_' + _.$el.get(0).id + '" data-type="textShadow" href="#" data-active-supported="true"><svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="mountains" class="svg-inline--fa fa-mountains fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M611.14 448h-69.72L357.48 159.68l32.84-50.37c11.57-17.75 39.8-17.75 51.37 0l194 297.6c11.77 18-2.05 41.09-24.55 41.09z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M338.33 189.07L503.5 448H30.92C6.81 448-8 422.81 4.58 403.18l207.9-324.66c12.4-19.36 42.64-19.36 55 0z"></path></g></svg></a>';
            }
            html += '</div>';
            _.$toolBar = $(html);
            _.$toolBar.off('click.S123ToolBar').on('click.S123ToolBar', 'a', function(event) {
                event.preventDefault();
                event.stopPropagation();
                var $this = $(this);
                if ($this.hasClass('disabled')) return;
                if ($this.data('active-supported')) {
                    $this.toggleClass('active');
                }
                if (_.clickCallback) _.clickCallback.call(this, $this);
            });
            _.$toolBar.off('mousedown.S123ToolBar').on('mousedown.S123ToolBar', function(event) {
                var $popoverController = $(event.target).closest('.s123-p');
                if ($popoverController.length > 0) {
                    _.$toolBar.find('.s123-p:not(#' + $popoverController.get(0).id + ')').popover('hide');
                }
                return false;
            });
            $('body').append(_.$toolBar);
            _.$el.attr('data-has-s123-toolbar', true);
            _.$el.data('s123-tool-bar', _);
            if (_.initCallback) _.initCallback.call(this, _);
        };
        _.show = function() {
            _.$toolBar.addClass('active');
            _.$toolBar.css({
                visibility: 'hidden'
            });
            clearTimeout(_.showDelay);
            _.showDelay = setTimeout(function() {
                if (_.showCallback) _.showCallback.call(this, _);
                _.$toolBar.css({
                    visibility: ''
                });
            }, 100);
        };
        _.hide = function() {
            if (_.preventHideToolBar) return;
            clearTimeout(_.showDelay);
            _.$toolBar.removeClass('active');
            if (_.hideCallback) _.hideCallback.call(this, _);
        };
        _.destroy = function() {
            _.$toolBar.remove();
            _.$el.attr('data-has-s123-toolbar', false);
            _.$el.data('s123-tool-bar', null);
        };
        _.setPosition = function() {
            var offset = _.$el.get(0).getBoundingClientRect();
            var left = offset.left;
            var top = offset.top + $(window).scrollTop();
            var outlineOffSet = 7;
            if (top < 0) {
                top = _.$toolBar.outerHeight(true) + $(window).scrollTop();
            }
            if ($('html[dir="rtl"]').length > 0) {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') == -1) {
                    left -= getScrollbarWidth();
                }
            }
            _.$toolBar.css({
                top: (top - _.$toolBar.outerHeight(true)) - outlineOffSet,
            });
            var textAlign = _.$el.css('text-align');
            if (textAlign != 'left' && textAlign != 'right' && textAlign != 'center') {
                textAlign = $('html[dir="rtl"]').length > 0 ? 'right' : 'left';
            }
            if (textAlign == 'center') {
                _.$toolBar.css({
                    left: left + (_.$el.outerWidth(true) / 2) - (_.$toolBar.outerWidth(true) / 2)
                });
            } else if (textAlign == 'left') {
                _.$toolBar.css({
                    left: left - outlineOffSet
                });
            } else if (textAlign == 'right') {
                _.$toolBar.css({
                    left: left + (_.$el.outerWidth(true) - _.$toolBar.outerWidth(true)) + outlineOffSet
                });
            }
        };
        _.enableOption = function(optionName) {
            _.$toolBar.find('[data-type="' + optionName + '"]').removeClass('disabled');
        };
        _.disableOption = function(optionName) {
            _.$toolBar.find('[data-type="' + optionName + '"]').addClass('disabled');
        };
        _.manualActiveHandler = function(optionName, isActive) {
            if (isActive) {
                _.$toolBar.find('[data-type="' + optionName + '"][data-active-supported="true"]').addClass('active');
            } else {
                _.$toolBar.find('[data-type="' + optionName + '"][data-active-supported="true"]').removeClass('active');
            }
        };
        _.getOptionButton = function(optionName) {
            return _.$toolBar.find('[data-type="' + optionName + '"]');
        };
        _.init();
        return _;
    };
    var HomepageAndHeaderEditor = function($el) {
        var _ = {
            editors: []
        };
        _.init = function() {
            _.site123ReadyMultiTriggerDebounce = clearTimeout(_.site123ReadyMultiTriggerDebounce);
            _.site123ReadyMultiTriggerDebounce = setTimeout(function() {
                if ($('.s123-module:is([data-module-type-num="169"],[data-module-type-num="167"])').length == 0) return;
                $('.s123-module:is([data-module-type-num="169"],[data-module-type-num="167"])').each(function(index, section) {
                    var $section = $(section);
                    var $texts = $section.find('.header1, .header2');
                    var $imagesContainer = $section.find('.headers-image, .carousel');
                    var sectionSmartTextSize = $section.data('smart-text-size') ? $section.data('smart-text-size') : 'limitedArea';
                    if (multiLanCode != '') {
                        $section.attr('data-original-title', '');
                        $section.tooltip({
                            title: translations.s123Editible.featureDisabledTooltip,
                            container: 'body',
                            placement: 'auto'
                        });
                        return;
                    }
                    $imagesContainer.css('cursor', 'pointer');
                    $imagesContainer.off('click.inlineEditor').on('click.inlineEditor', function(event) {
                        event.preventDefault();
                        topWindow.Wizard.InlineModuleEditor.im_show($section.data('module-id'), $section.data('module-type-num'), 'headersImageBox');
                    });
                    if ($section.hasClass('ie-open-on-click')) {
                        $section.off('click.inlineEditor').on('click.inlineEditor', function(event) {
                            var $target = $(event.target);
                            if ($target.closest('.without-images').length > 0) return;
                            if ($target.closest('.preview-highlighter').length > 0) return;
                            if ($target.closest('.p-m-b-highlight').length > 0) return;
                            if ($target.closest('.previewManageButton').length > 0) return;
                            if ($target.closest('.box-primary').length > 0) return;
                            if ($target.data('s123-editable-elements')) return;
                            topWindow.Wizard.InlineModuleEditor.im_show($section.data('module-id'), $section.data('module-type-num'), 'headersImageBox');
                        });
                    }
                    var textVisiblityHandler = new TextVisiblityHandler({
                        $section: $section,
                        $elements: $texts
                    });
                    let froalaPromises = [];
                    $texts.each(function(index, textEl) {
                        var $textEl = $(textEl);
                        var id = $textEl.data('cpl').replace(`${$section.data('module-id')}-`, '');
                        var fontSize = '';
                        var maxlength = 1500;
                        var minFontSize = 14;
                        var minLineHeight = minFontSize + 5;
                        var maxFontSize = 200;
                        var maxLineHeight = maxFontSize + 5;
                        var promiseResolve, promiseReject;
                        let froalaHelper = new Promise((resolve, reject) => {
                            promiseResolve = resolve;
                            promiseReject = reject;
                        });
                        $('.s123-tool-bar[data-rel="' + $textEl.get(0).id + '"]').remove();
                        froalaPromises.push(froalaHelper);
                        $textEl.off('focus.homepageAndHeaderEditor.textFormatting').on('focus.homepageAndHeaderEditor.textFormatting', function() {
                            var $this = $(this);
                            if ($this.data('s123-editable-elements').isDisabled) return false;
                            $this.data('s123-tool-bar').show();
                            $this.data('s123-tool-bar').setPosition();
                        });
                        $textEl.off('click.initHomepageEditor').on('click.initHomepageEditor', function(event) {
                            var $this = $(this);
                            if ($this.data('s123-editable-elements').isDisabled) return false;
                            if (!$this.data('s123-tool-bar').$toolBar.hasClass('active')) {
                                $this.data('s123-tool-bar').show();
                            }
                            $this.data('s123-tool-bar').setPosition();
                        });
                        var size = fitTextToParentContainer($textEl, parseInt($textEl.get(0).style.getPropertyValue('--header-font-size')));
                        $textEl.get(0).style.setProperty('--header-font-size', size);
                        var textLengthCounter = new TextLengthCounter({
                            $el: $textEl,
                            $section: $section,
                            moduleID: $section.data('module-id'),
                            maxlength: maxlength,
                            currentlength: $textEl.text().length,
                            showOnMinLength: 20,
                            isEnabled: true
                        });
                        if (!$textEl.hasClass('custom-font-settings')) {
                            $textEl.get(0).style.setProperty('--header-font-size', parseInt($textEl.css('font-size')));
                            $textEl.addClass('custom-font-settings');
                        }
                        var toolBar = new S123ToolBar({
                            $el: $textEl,
                            optionsList: ['weight', 'italic', 'fontStyle', 'aiSuggestedText'],
                            initCallback: function(toolBar) {},
                            showCallback: function() {
                                toolBar.manualActiveHandler('weight', $textEl.hasClass('weight700'));
                                toolBar.manualActiveHandler('italic', $textEl.hasClass('italic'));
                                if ($textEl.hasClass('custom-header-font')) {
                                    toolBar.$toolBar.find('[data-type="fontStyle"]').addClass('active');
                                } else {
                                    toolBar.$toolBar.find('[data-type="fontStyle"]').removeClass('active');
                                }
                                textLengthCounter.show();
                            },
                            hideCallback: function() {
                                textLengthCounter.hide();
                            },
                            clickCallback: function($btn) {
                                var fontWeightSettingName = `${id}_weight`;
                                var italicSettingName = `${id}_italic`;
                                var aiSettingName = `${id}_aiSuggestedText`;
                                if ($btn.data('type') == 'weight') {
                                    var settingNameAjax = fontWeightSettingName;
                                    if (!$textEl.hasClass('weight700')) {
                                        $textEl.addClass('weight700');
                                        var settingVal = true;
                                    } else {
                                        $textEl.removeClass('weight700');
                                        var settingVal = false;
                                    }
                                } else if ($btn.data('type') == 'italic') {
                                    var settingNameAjax = italicSettingName;
                                    if (!$textEl.hasClass('italic')) {
                                        $textEl.addClass('italic');
                                        var settingVal = true;
                                    } else {
                                        $textEl.removeClass('italic');
                                        var settingVal = false;
                                    }
                                } else if ($btn.data('type') == 'fontStyle') {
                                    var fontSettingName = $textEl.hasClass('custom-header-font') ? $textEl.data('custom-font') : topWindow.$('#font_modules_header').val();
                                    var lineHeight = $textEl.data('line-height') ? $textEl.data('line-height') : '';
                                    var isCustomFont = $textEl.hasClass('custom-header-font') && $textEl.data('custom-font').length > 0;
                                    topWindow.$('.moduleSortList .modulesEditButton[data-moduleid="' + $section.data('module-id') + '"]').closest('li').data('open-tool', 'font-themes');
                                    openItemEditModal($section.data('module-id'), $section.data('module-type-num'), '', function($iframe) {
                                        var frameWindow = $iframe.get(0).contentWindow;
                                        frameWindow.showFontThemes(fontSettingName, isCustomFont, lineHeight, function(newTheme) {
                                            topWindow.Wizard.promoFonts.save($section.data('module-id'), fontSettingName, newTheme, false);
                                            if (newTheme.name.length == 0) {
                                                frameWindow.$('#setDefultFonts').addClass('hidden');
                                            } else {
                                                frameWindow.$('#setDefultFonts').removeClass('hidden');
                                            }
                                            if (newTheme.name.length == 0) {
                                                $textEl.removeClass('custom-header-font');
                                                $textEl.css('font-family', topWindow.$('#font_modules_header').val());
                                            } else {
                                                $textEl.addClass('custom-header-font');
                                            }
                                            $textEl.data('custom-font', newTheme.name);
                                            $textEl.data('is-italic-supported', newTheme.italic);
                                            saveAllSettings(false);
                                        }, function(lineHeight) {
                                            $textEl.data('line-height', lineHeight);
                                            if (lineHeight.length == 0) {
                                                $textEl.css('line-height', '');
                                            } else {
                                                $textEl.css('line-height', lineHeight);
                                            }
                                            saveAllSettings(false);
                                        });
                                    }, '', 'font-themes');
                                    return;
                                } else if ($btn.data('type') == 'aiSuggestedText') {
                                    SuggestText.createInlineBtn({
                                        tool: 'site123',
                                        field: 'headers',
                                        translations: translations.suggestTextTool,
                                        lang: topWindow.childLanguage,
                                        suggestTextfield: null,
                                        textLength: $(`#subText-${$section.data('module-id')}`).data('froala.editor').getJQEl('$el').text().length,
                                        callback: function(resultObj) {
                                            $.each(resultObj, (key, val) => {
                                                let $element = $(`#${key}-${$section.data('module-id')}`);
                                                if ($element.data('froala.editor').getJQEl('$el').text().length == 0) {
                                                    textVisiblityHandler.addText($element, val);
                                                } else {
                                                    $element.data('froala.editor').html.set(val);
                                                    var size = fitTextToParentContainer($element, parseInt($element.get(0).style.getPropertyValue('--header-font-size')));
                                                    $element.get(0).style.setProperty('--header-font-size', size);
                                                    foralaContentChangeUpdate($element.data('froala.editor'), textLengthCounter, false);
                                                }
                                            });
                                            saveAllSettings(false);
                                        },
                                    });
                                }
                                if ($btn.data('type') != 'aiSuggestedText') saveAllSettings(false);
                            }
                        });
                        $(document).off(`OutlineHandler.rendered.S123ToolBar.${$textEl.data('cpl')}`)
                            .on(`OutlineHandler.rendered.S123ToolBar.${$textEl.data('cpl')}`, function(event, elementID) {
                                if ($textEl.closest(`#${elementID}`).length == 0) return;
                                toolBar.show();
                                toolBar.setPosition();
                            });
                        $(document).off(`OutlineHandler.removed.S123ToolBar.${$textEl.data('cpl')}`)
                            .on(`OutlineHandler.removed.S123ToolBar.${$textEl.data('cpl')}`, function(event, elementID) {
                                if ($textEl.closest(`#${elementID}`).length == 0) return;
                                toolBar.hide();
                            });
                        $(document).off(`OutlineHandler.outline.mouseenter.${$textEl.data('cpl')}`)
                            .on(`OutlineHandler.outline.mouseenter.${$textEl.data('cpl')}`, function(event, $resizableWrapper, $enteredOutline) {
                                if ($textEl.data('cpl') != $resizableWrapper.data('rel')) return;
                                hideUnnecessaryToolsWhileTyping($textEl.data('froala.editor'), 'show');
                            });
                        if ($textEl.data('froala.editor')) return;
                        $textEl
                            .off('froalaEditor.initialized')
                            .on('froalaEditor.initialized', function(e, editor) {
                                $textEl.attr('data-s123-editable-elements', true);
                                $textEl.data('s123-editable-elements', {
                                    isDisabled: false,
                                    textLengthCounter: textLengthCounter,
                                    disable: function() {
                                        $textEl.data('s123-editable-elements').isDisabled = true;
                                        $textEl.attr('contenteditable', false);
                                    },
                                    enable: function() {
                                        $textEl.data('s123-editable-elements').isDisabled = false;
                                        $textEl.attr('contenteditable', true);
                                    },
                                });
                                var fontSizeLabel = new FontSizeLabel({
                                    $el: $textEl,
                                    $container: textVisiblityHandler.$toolBar[$textEl.data('cpl')],
                                });
                                var resizableText = new HeaderResizableText({
                                    $el: $textEl,
                                    $section: $section,
                                    minFontSize: minFontSize,
                                    minLineHeight: minLineHeight,
                                    maxFontSize: maxFontSize,
                                    maxLineHeight: maxLineHeight,
                                    initCallBack: function(resizableText) {
                                        var $tmpHelper = $textEl.clone();
                                        resizableText.$wrapper.parent().append($tmpHelper);
                                        resizableText.$wrapper.css('margin-top', $tmpHelper.css('margin-top'));
                                        resizableText.$wrapper.css('margin-bottom', $tmpHelper.css('margin-bottom'));
                                        $textEl.css('margin-top', 0);
                                        $textEl.css('margin-bottom', 0);
                                        $tmpHelper.remove();
                                        fontSizeLabel.fsl_hide();
                                        OutlineHandler.refresh();
                                        S123ResizeObserver.refresh();
                                    },
                                    startCallBack: function(event, ui) {
                                        textVisiblityHandler.$toolBar[$textEl.data('cpl')].find('.p-m-b-design:not(.font-size-counter)').hide();
                                        fontSizeLabel.fsl_show();
                                        $textEl.data('s123ToolBar').hide();
                                    },
                                    resizeCallBack: function(size) {
                                        toolBar.setPosition();
                                        fontSizeLabel.fsl_update(`${size}px`);
                                    },
                                    endCallBack: function(size) {
                                        size = fitTextToParentContainer($textEl, size);
                                        $textEl.get(0).style.setProperty('--header-font-size', size);
                                        fontSizeLabel.fsl_hide();
                                        textVisiblityHandler.$toolBar[$textEl.data('cpl')].find('.p-m-b-design:not(.font-size-counter)').show();
                                        saveAllSettings(true);
                                        $textEl.closest('section').trigger('resizableText.end', [$textEl, size]);
                                        $textEl.data('s123ToolBar').show();
                                    }
                                });
                                S123.s123IconToSvg.handleFroalaIcons();
                                editor.getJQEl('$el').on('paste.customFroalaFix', function(e) {
                                    var clipBoardData = (e.originalEvent || e).clipboardData.getData('text/plain');
                                    var newHTML = editor.html.get();
                                    if ((newHTML.length + clipBoardData.length) > maxlength) {
                                        editor.html.set((newHTML + clipBoardData).substring(0, (maxlength - 1)));
                                    }
                                    resizableText.refresh();
                                });
                                _.editors.push(editor);
                                promiseResolve();
                                OutlineHandler.refresh();
                            })
                            .off('froalaEditor.paste.afterCleanup')
                            .on('froalaEditor.paste.afterCleanup', function(e, editor, inputEvent) {
                                editor.getJQEl('$box').data('resizable-text').refresh();
                            })
                            .off('froalaEditor.keydown')
                            .on('froalaEditor.keydown', function(e, editor, inputEvent) {
                                if (inputEvent.which == 9) {
                                    _.editors[index + 1].$el.focus();
                                }
                                toolBar.setPosition();
                                textLengthCounter.update(editor.getJQEl('$el').text().length);
                                textLengthCounter.setPosition();
                                hideUnnecessaryToolsWhileTyping(editor, 'hide');
                            })
                            .off('froalaEditor.contentChanged')
                            .on('froalaEditor.contentChanged', function(e, editor, inputEvent) {
                                clearTimeout(editor.s123SaveDelay);
                                editor.s123SaveDelay = setTimeout(function() {
                                    var size = fitTextToParentContainer($textEl, parseInt($textEl.get(0).style.getPropertyValue('--header-font-size')));
                                    $textEl.get(0).style.setProperty('--header-font-size', size);
                                    foralaContentChangeUpdate(editor, textLengthCounter, true);
                                }, 600);
                            })
                            .off('froalaEditor.click froalaEditor.focus')
                            .on('froalaEditor.click froalaEditor.focus', function(e, editor, inputEvent) {
                                editor.getJQEl('$el').addClass('cpl-focused');
                                topWindow.Wizard.InlineModuleEditor.im_show($section.data('module-id'), $section.data('module-type-num'), '');
                            })
                            .off('froalaEditor.focus.hide_unnecessary_tools')
                            .on('froalaEditor.focus.hide_unnecessary_tools', function(e, editor, inputEvent) {
                                hideUnnecessaryToolsWhileTyping(editor, 'show');
                                $section.children('.previewManageButton').each(function() {
                                    fixPreviewManageButtonsPosition(editor.getJQEl('$box'), $(this));
                                });
                            })
                            .off('froalaEditor.blur')
                            .on('froalaEditor.blur', function(e, editor) {
                                var haveAtleast1Text = false;
                                $texts.each(function() {
                                    if ($(this).data('froala.editor').getJQEl('$el').text().length > 0) {
                                        haveAtleast1Text = true;
                                        return false;
                                    }
                                });
                                if (!haveAtleast1Text) {
                                    if (textLengthCounter.getLength() == 0) {
                                        editor.html.set(translations.homepageAndHeaderEditor.defaultTitle);
                                        saveAllSettings(false);
                                    }
                                }
                                if (editor.getJQEl('$el').text().length == 0) {
                                    editor.getJQEl('$el').html('');
                                    $section.trigger('textRemoved', [editor.$box.get(0).id]);
                                }
                                editor.getJQEl('$el').removeClass('cpl-focused');
                                $section.children('.previewManageButton').each(function() {
                                    fixPreviewManageButtonsPosition(editor.getJQEl('$box'), $(this));
                                });
                                editor.selection.clear();
                                hideUnnecessaryToolsWhileTyping(editor, 'show');
                            });
                        var buttonsList = ['mainColor', 'underLineSVGStyle1', 'bold', 'italic', 'underline', 'strikeThrough', 'fr_separator', 'formatOL', 'formatUL'];
                        $textEl.css('height', `${$textEl.height()}px`);
                        let froalaEditor = new FroalaEditor(`#${$textEl.get(0).id}`, {
                            attribution: false,
                            key: 'fIE3A-9C2C1G2B4D5A3D1ud1BI1IMNBUMRWAi1AYMSTRBUZYB-16D4E3D2E3C3I2H1B10C2B1==',
                            charCounterMax: maxlength,
                            charCounterCount: true,
                            quickInsertEnabled: false,
                            dragInline: false,
                            saveInterval: 0,
                            useClasses: true,
                            direction: $GLOBALS["t_direction"],
                            enter: FroalaEditor.ENTER_BR,
                            pastePlain: true,
                            pasteDeniedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
                            htmlAllowedTags: ['span', 'b', 'strong', 'i', 'u', 'strike', 'ul', 'ol', 'li', 'br', 's', 'em', 'sub', 'sup', 'wbr'],
                            toolbarSticky: true,
                            toolbarInline: true,
                            toolbarVisibleWithoutSelection: false,
                            toolbarButtonsMD: buttonsList,
                            toolbarButtonsSM: buttonsList,
                            toolbarButtonsXS: buttonsList,
                            toolbarButtons: buttonsList,
                            lineBreakerTags: ['table', 'hr', 'form', 'dl', 'span.fr-video', '.fr-embedly', '.fr-img-caption'],
                            spellcheck: false,
                            listAdvancedTypes: false,
                            linkConvertEmailAddress: false,
                            videoEditButtons: ['videoReplace', 'videoRemove', 'videoDisplay', 'videoAlign', 'videoSize'],
                            events: {
                                initialized: function() {
                                    setTimeout(() => {
                                        $textEl.css('height', ``);
                                        this.getJQEl = function(elName) {
                                            return $(this[elName]);
                                        };
                                        $textEl.data('froala.editor', this);
                                        $textEl.trigger('froalaEditor.initialized', [this]);
                                    }, 0);
                                },
                                contentChanged: function() {
                                    $textEl.trigger('froalaEditor.contentChanged', [this]);
                                },
                                focus: function() {
                                    $textEl.trigger('froalaEditor.focus', [this]);
                                },
                                keydown: function(keydownEvent) {
                                    $textEl.trigger('froalaEditor.keydown', [this, keydownEvent]);
                                },
                                click: function() {
                                    $textEl.trigger('froalaEditor.click', [this]);
                                },
                                blur: function() {
                                    $textEl.trigger('froalaEditor.blur', [this]);
                                },
                                'paste.afterCleanup': function() {
                                    $textEl.trigger('paste.afterCleanup', [this]);
                                }
                            }
                        });
                    });
                    Promise.all(froalaPromises).then(() => {
                        var sectionMainTextBtn = new SectionMainTextBtn({
                            $section: $section,
                            $elements: $texts,
                            $container: $section.find('.headers-text-orders')
                        });
                    });
                    $section.off('resetTextStyles').on('resetTextStyles', function(event, $el) {
                        $el.removeClass('italic');
                        $el.removeClass('weight700');
                        $el.get(0).style.setProperty('--header-font-size', 25);
                        $el.removeClass('custom-header-font');
                        $el.get(0).style.setProperty('font-family', 'unset');
                        saveAllSettings(false);
                    });
                    $section.off('textRemoved.homepageAndHeaderEditor').on('textRemoved.homepageAndHeaderEditor', function(event, elementID) {
                        $section.find('.headers-text-separator').hide();
                        $section.find('.headers-text-orders').removeClass('header-goal-space');
                    });
                    $section.off('textAdded.homepageAndHeaderEditor').on('textAdded.homepageAndHeaderEditor', function(event, elementID) {
                        $section.find('.headers-text-separator').show();
                        $section.find('.headers-text-orders').addClass('header-goal-space');
                    });
                    $section.off('textRemoved.saveAllSettings').on('textRemoved.saveAllSettings', function(event, $el) {
                        updateHeadersDescriptionHeight($section);
                        saveAllSettings(false);
                    });

                    function fitTextToParentContainer($textEl, size) {
                        if (!$.isNumeric(size)) return size;
                        var $textResizeContainer = $textEl.closest('.headers-text-resize-container');
                        if ($textResizeContainer.length > 0 && $textResizeContainer.width() < $textEl.width()) {
                            $textEl.css('visibility', 'hidden');
                            var textResizeContainerWidth = $textResizeContainer.width();
                            if ($textEl.closest('section').hasClass('layout-9')) {
                                textResizeContainerWidth = textResizeContainerWidth + 5;
                            }
                            var index = 0;
                            while (textResizeContainerWidth < $textEl.width() && index < 99) {
                                index++;
                                size = size - 1;
                                $textEl.get(0).style.setProperty('--header-font-size', size);
                            }
                            $textEl.css('visibility', 'unset');
                        }
                        return size;
                    }

                    function saveAllSettings(isSmartResize) {
                        var settings = {
                            fontSettings: {}
                        };
                        $texts.each(function(index, textEl) {
                            var $textEl = $(textEl);
                            var id = $textEl.data('cpl').replace(`-${$section.data('module-id')}`, '');
                            settings.fontSettings[id] = {
                                isBold: $textEl.hasClass('weight700'),
                                isItalic: $textEl.hasClass('italic'),
                                fontSize: parseInt($textEl.css('font-size')),
                                font: $textEl.hasClass('custom-header-font') ? $textEl.data('custom-font') : '',
                                isItalicSupported: $textEl.hasClass('custom-header-font') ? $textEl.data('is-italic-supported') : '',
                            };
                            if ($textEl.data('line-height') && $textEl.data('line-height').length > 0) {
                                settings.fontSettings[id].lineHeight = $textEl.data('line-height');
                            }
                            settings[id] = $textEl.data('froala.editor').html.get();
                            if (isSmartResize) {
                                settings.fontSettings[id]['smartTextSize'] = sectionSmartTextSize;
                            }
                        });
                        settings.fontSettings = JSON.stringify(settings.fontSettings);
                        updateMultipleSettings($section.data('module-id'), $section.data('module-type-num'), settings);
                    }

                    function hideUnnecessaryToolsWhileTyping(editor, action) {
                        let resizableText = editor.getJQEl('$box').data('resizable-text');
                        clearTimeout(editor.$box.get(0).hideToolsDelay);
                        switch (action) {
                            case 'hide':
                                hide();
                                editor.$box.get(0).hideToolsDelay = setTimeout(function() {
                                    show();
                                }, 2000);
                                break;
                            case 'show':
                                show();
                                break;
                        }

                        function show() {
                            editor.getJQEl('$box').data('t-v')
                                .find('.add-text,.remove-text')
                                .add(editor.getJQEl('$box').data('s123ToolBar').$toolBar)
                                .css({
                                    visibility: ''
                                });
                            $.each(resizableText.S123Resizable.Resizable.handles, function(index, handle) {
                                handle.css({
                                    visibility: ''
                                });
                            });
                        }

                        function hide() {
                            editor.getJQEl('$box').data('t-v')
                                .find('.add-text,.remove-text')
                                .add(editor.getJQEl('$box').data('s123ToolBar').$toolBar)
                                .css({
                                    visibility: 'hidden'
                                });
                            $.each(resizableText.S123Resizable.Resizable.handles, function(index, handle) {
                                handle.css({
                                    visibility: 'hidden'
                                });
                            });
                        }
                    }

                    function foralaContentChangeUpdate(editor, textLengthCounter, save) {
                        updateHeadersDescriptionHeight(editor.getJQEl('$el').closest('section'));
                        if (save) saveAllSettings(false);
                        if (editor.getJQEl('$el').text().length > 100) {
                            if (editor.getJQEl('$oel').hasClass('header-modules-header-font')) {
                                editor.getJQEl('$oel').removeClass('header-modules-header-font');
                                editor.getJQEl('$oel').addClass('header-global-font');
                            }
                        } else {
                            if (editor.getJQEl('$oel').hasClass('header-global-font')) {
                                editor.getJQEl('$oel').removeClass('header-global-font');
                                editor.getJQEl('$oel').addClass('header-modules-header-font');
                            }
                        }
                        textLengthCounter.update(editor.getJQEl('$el').text().length);
                        if ($section.data('module-type-num') == 169) {
                            topWindow.$(topWindow.document).trigger('user_action_update_flag', [{
                                name: 'flag_HomepageUpdateTitles',
                                triggerName: false
                            }]);
                        }
                    }
                    $section.find('.previewManageButtonAiText').off('click.previewManageButtonAiText').on('click.previewManageButtonAiText', function() {
                        SuggestText.createInlineBtn({
                            tool: 'site123',
                            field: 'headers',
                            translations: translations.suggestTextTool,
                            lang: topWindow.childLanguage,
                            suggestTextfield: null,
                            textLength: $(`#subText-${$section.data('module-id')}`).data('froala.editor').getJQEl('$el').text().length,
                            callback: function(resultObj) {
                                $.each(resultObj, (key, val) => {
                                    let $element = $(`#${key}-${$section.data('module-id')}`);
                                    if ($element.data('froala.editor').$el.text().length == 0) {
                                        textVisiblityHandler.addText($element, val);
                                    } else {
                                        $element.data('froala.editor').html.set(val);
                                        var size = fitTextToParentContainer($element, parseInt($element.get(0).style.getPropertyValue('--header-font-size')));
                                        $element.get(0).style.setProperty('--header-font-size', size);
                                        foralaContentChangeUpdate($element.data('froala.editor'), $element.data('s123-text-length-counter'), false);
                                    }
                                });
                                saveAllSettings(false);
                            },
                        });
                    });
                });
                $(document).off('previewScale.deviceTypeChange.S123ToolBar').on('previewScale.deviceTypeChange.S123ToolBar', function() {
                    disableEnableInlineEdit();
                    var id = $('.s123-tool-bar.active').data('rel');
                    if (!id) return;
                    $('#' + id).data('s123-tool-bar').setPosition();
                });
                $(document).off('homepageAndHeaderEditor.hideToolBar').on('homepageAndHeaderEditor.hideToolBar', function(event, $el) {
                    _.hideToolBar($el);
                });
                $(document).off('s123.pjax.send.HomepageAndHeaderEditor').on('s123.pjax.send.HomepageAndHeaderEditor', function() {
                    _.editors.forEach(function(editor) {
                        editor.destroy();
                    });
                    _.editors = [];
                });
                disableEnableInlineEdit();
            }, 100);
        };

        function disableEnableInlineEdit() {
            $.each(_.editors, function(index, editor) {
                if (topWindow.Wizard.Preview.Scale.mode == 'computer') {
                    editor.edit.on();
                } else {
                    editor.edit.off();
                }
            });
        }
        _.hideToolBar = function($el) {
            var toolBar = $el.data('s123-tool-bar');
            if (!toolBar) return;
            if (!toolBar.$toolBar.is(':visible')) return;
            toolBar.$toolBar.find('.s123-p-s').each(function() {
                if (!$(this).data('s123-p-s')) return;
                $(this).data('s123-p-s').hide();
            });
            toolBar.$toolBar.find('.s123-p').each(function() {
                if (!$(this).data('s123-p')) return;
                $(this).data('s123-p').hide();
            });
            toolBar.hide();
        };

        function TextVisiblityHandler(settings) {
            var _ = {
                $section: settings.$section,
                $elements: settings.$elements,
                $toolBar: {},
                debugMode: false,
            };
            _.init = function() {
                $(document).off(`OutlineHandler.rendered.TextVisiblityHandler.${_.$section.get(0).id}`)
                    .on(`OutlineHandler.rendered.TextVisiblityHandler.${_.$section.get(0).id}`, function(event, elementID) {
                        _.$elements.each(function(index, el) {
                            var $el = $(el);
                            var $parent = $el.closest(`#${elementID}`);
                            if ($parent.length > 0) {
                                if (_.$toolBar[$el.get(0).id].hasClass('disabled')) return;
                                if ($('html').hasClass('disable-inline-wizard')) return;
                                _.show($el);
                            }
                        });
                    });
                $(document).off(`OutlineHandler.removed.TextVisiblityHandler.${_.$section.get(0).id}`)
                    .on(`OutlineHandler.removed.TextVisiblityHandler.${_.$section.get(0).id}`, function(event, elementID) {
                        _.$elements.each(function(index, el) {
                            var $el = $(el);
                            var $parent = $el.closest(`#${elementID}`);
                            if ($parent.length > 0) {
                                _.hide($el.get(0).id);
                            }
                        });
                    });
                _.$elements.each(function(index, el) {
                    var $this = $(this);
                    addController($this);
                    $this.off('ChangePreviewLive.update').on('ChangePreviewLive.update', function(event) {
                        if ($this.text().trim().length > 0) {
                            _.$section.trigger('textAdded', [$this.get(0).id]);
                        } else {
                            _.$section.trigger('textRemoved', [$this.get(0).id]);
                        }
                    });
                    $this.attr('data-t-v-initialized', true);
                    $this.data('t-v', _.$toolBar[$this.get(0).id]);
                });
                _.$section.data('text-visibility-handler', _);
            };
            _.hideAllToolBars = function() {
                $.each(_.$toolBar, function(index, $el) {
                    _.hide($el.data('rel'));
                });
            };
            _.show = function($el) {
                _.hideAllToolBars();
                disableEnableControllers($el);
                _.$toolBar[$el.get(0).id].addClass('active');
                _.setPosition($el);
            };
            _.hide = function(id) {
                if (_.$elements.filter(`#${id}`).closest('.p-m-b-highlight-focused').length > 0) return;
                _.$toolBar[id].tooltip('hide');
                _.$toolBar[id].removeClass('active');
            };
            _.enable = function(id) {
                if (id) {
                    _.$toolBar[id].removeClass('disabled');
                } else {
                    $.each(_.$toolBar, function(index, $el) {
                        $el.removeClass('disabled');
                    });
                }
            };
            _.disable = function(id) {
                if (id) {
                    _.$toolBar[id].addClass('disabled');
                } else {
                    $.each(_.$toolBar, function(index, $el) {
                        $el.addClass('disabled');
                    });
                }
            };
            _.setPosition = function($el) {
                var $controller = _.$toolBar[$el.get(0).id];
                var offset = $el.get(0).getBoundingClientRect();
                var top = offset.top + $(window).scrollTop();
                var isRtl = $('html[dir="rtl"]').length > 0;
                var outlineOffSet = {
                    x: 7,
                    y: 7
                };
                if ($el.closest('.s123-resizable').length > 0) {
                    outlineOffSet.y = 19;
                    outlineOffSet.x = 7;
                }
                if (isRtl) {
                    if (navigator.userAgent.toLowerCase().indexOf('firefox') == -1) {
                        offset.left -= getScrollbarWidth();
                    }
                }
                $controller.css({
                    top: (top + offset.height - ($controller.outerHeight(true) / 2)) + outlineOffSet.y
                });
                if (_.debugMode) {
                    $controller.css({
                        outline: 'solid 1px #fff'
                    });
                    _.$toolBar[$el.get(0).id].css({
                        outline: 'solid 1px #fff'
                    });
                }
                var textAlign = $el.css('text-align');
                if (textAlign != 'left' && textAlign != 'right' && textAlign != 'center') {
                    textAlign = $('html[dir="rtl"]').length > 0 ? 'right' : 'left';
                }
                if (textAlign == 'center') {
                    if (isRtl) {
                        $controller.css({
                            left: offset.left - outlineOffSet.x,
                        });
                    } else {
                        $controller.css({
                            left: offset.right - $controller.outerWidth(true) + outlineOffSet.x,
                        });
                    }
                } else if (textAlign == 'left') {
                    $controller.css({
                        left: offset.right - $controller.outerWidth(true) + outlineOffSet.x,
                    });
                } else if (textAlign == 'right') {
                    $controller.css({
                        left: offset.left - outlineOffSet.x
                    });
                }
            };
            _.addText = function($el, text) {
                $el.show().data('froala.editor').html.set(text);
                placeCaretAtEnd($el.get(0));
                _.$section.trigger('resetTextStyles', [$el]);
                _.$section.trigger('textAdded', [$el.get(0).id]);
            }

            function disableEnableControllers($el) {
                var $controller = _.$toolBar[$el.get(0).id];
                var $addNew = $controller.find('.add-text');
                var $remove = $controller.find('.remove-text');
                var addNewTitle = '';
                var removeTitle = '';
                var isAddNewDisabled = true;
                var isRemoveDisabled = false;
                $addNew.tooltip('destroy');
                $remove.tooltip('destroy');
                _.$elements.each(function(index, el) {
                    if ($(this).data('froala.editor').getJQEl('$el').text().length == 0) {
                        isAddNewDisabled = false;
                        return false;
                    }
                });
                _.$elements.each(function(index, el) {
                    if ($(this).data('froala.editor').getJQEl('$el').text().length == 0) {
                        isRemoveDisabled = true;
                        return false;
                    }
                });
                if (isAddNewDisabled) {
                    addNewTitle = translations.textVisibilityHanlder.addNewTitleTooltipDisabled.replace('{{titlesAmount}}', _.$elements.length);
                    $addNew.addClass('disabled');
                } else {
                    addNewTitle = translations.textVisibilityHanlder.addNewTitleTooltip;
                    $addNew.removeClass('disabled');
                }
                if (isRemoveDisabled) {
                    removeTitle = translations.textVisibilityHanlder.removeTitleTooltipDisabled;
                    $remove.addClass('disabled');
                } else {
                    removeTitle = translations.textVisibilityHanlder.removeTitleTooltip;
                    $remove.removeClass('disabled');
                }
                $addNew.tooltip({
                    title: addNewTitle,
                    container: 'body',
                    placement: 'top',
                    trigger: 'hover',
                    delay: {
                        show: 2000,
                        hide: 0
                    }
                });
                $remove.tooltip({
                    title: removeTitle,
                    container: 'body',
                    placement: 'top',
                    trigger: 'hover',
                    delay: {
                        show: 2000,
                        hide: 0
                    }
                });
            }

            function addController($el) {
                var html = '';
                html += '<div class="previewManageButton t-v-handler-tools" data-style="round" data-rel="' + $el.get(0).id + '">';
                html += '<a class="p-m-b-design add-text" href="#">';
                html += '<i class="fa fa-plus"></i>';
                html += '</a>';
                html += '<a class="p-m-b-design remove-text" href="#">';
                html += '<i class="fa fa-trash"></i>';
                html += '</a>';
                html += '</div>';
                var $html = $(html);
                $html.off('click.textVisiblityHandler').on('click.textVisiblityHandler', 'a', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                });
                $html.off('mousedown.textVisiblityHandler').on('mousedown.textVisiblityHandler', 'a', function(event) {
                    var $this = $(this);
                    if ($this.hasClass('disabled')) return false;
                    _.hide($el.get(0).id);
                    if ($this.hasClass('add-text')) {
                        _.$elements.each(function(index, el) {
                            var $this = $(this);
                            if ($this.data('froala.editor').getJQEl('$el').text().length == 0) {
                                _.addText($this, translations.textVisibilityHanlder.newTitle);
                                return false;
                            }
                        });
                    } else if ($this.hasClass('remove-text')) {
                        $el.data('froala.editor').html.set('');
                        $el.trigger('blur');
                        _.$section.trigger('textRemoved', [$el.get(0).id]);
                    }
                    disableEnableControllers($el);
                });
                _.$toolBar[$el.get(0).id] = $html;
                $('.t-v-handler-tools[data-rel="' + $el.get(0).id + '"]').remove();
                $('body').append($html);
            }
            _.init();
            return _;
        }

        function SectionMainTextBtn(settings) {
            var _ = {
                $section: settings.$section,
                $elements: settings.$elements,
                $container: settings.$container
            };
            _.init = function() {
                _.$controller = $(generateHtml());
                _.$controller.tooltip('destroy');
                _.$controller.tooltip({
                    title: translations.sectionMainTextBtn.addTextTooltip,
                    container: 'body',
                    placement: 'top'
                });
                _.$controller.off('click.SectionMainTextBtn').on('click.SectionMainTextBtn', 'a', function(event) {
                    event.preventDefault();
                    _.$section.trigger('textAdded', [_.$elements.first().get(0).id]);
                    _.$section.trigger('resetTextStyles', [_.$elements.first()]);
                    _.$elements.first().show().data('froala.editor').getJQEl('$el').text(translations.textVisibilityHanlder.newTitle).trigger('input');
                    placeCaretAtEnd(_.$elements.first().get(0));
                });
                _.$container.prepend(_.$controller);
                _.$section.off('textAdded.SectionMainTextBtn').on('textAdded.SectionMainTextBtn', function(event) {
                    _.setState('disabled');
                });
                _.$section.off('textRemoved.SectionMainTextBtn').on('textRemoved.SectionMainTextBtn', function(event) {
                    if (hasNoTexts()) {
                        _.setState('active');
                    }
                });
                if (hasNoTexts()) {
                    _.setState('active');
                }
                _.$section.addClass('s-m-t-b');
            };
            _.setState = function(state) {
                _.$section.attr('data-s-m-t-b', state);
            };

            function generateHtml() {
                var html = '';
                html += '<div class="previewManageButton section-main-text-btn" data-rel="' + _.$section.get(0).id + '">';
                html += '<a class="p-m-b-design remove-text" href="#">';
                html += '<i class="fa fa-plus"></i>&nbsp;' + S123.escapeHtml(translations.sectionMainTextBtn.addText);
                html += '</a>';
                html += '</div>';
                return html;
            }

            function hasNoTexts() {
                var noTexts = true;
                _.$elements.each(function() {
                    if ($(this).data('froala.editor').getJQEl('$el').text().length > 0) {
                        noTexts = false;
                        return false;
                    }
                });
                return noTexts;
            }
            _.init();
            return _;
        }

        function placeCaretAtEnd(el) {
            el.focus();
            if (typeof window.getSelection != "undefined" &&
                typeof document.createRange != "undefined") {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (typeof document.body.createTextRange != "undefined") {
                var textRange = document.body.createTextRange();
                textRange.moveToElementText(el);
                textRange.collapse(false);
                textRange.select();
            }
        }

        function getCaretPosition(element, originalText) {
            var start = 0;
            var end = 0;
            var doc = element.ownerDocument || element.document;
            var win = doc.defaultView || doc.parentWindow;
            var sel;
            if (typeof win.getSelection != "undefined") {
                sel = win.getSelection();
                if (sel.rangeCount > 0) {
                    var range = win.getSelection().getRangeAt(0);
                    var preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(element);
                    preCaretRange.setEnd(range.startContainer, range.startOffset);
                    start = preCaretRange.toString().length;
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    end = preCaretRange.toString().length;
                }
            } else if ((sel = doc.selection) && sel.type != "Control") {
                var textRange = sel.createRange();
                var preCaretTextRange = doc.body.createTextRange();
                preCaretTextRange.moveToElementText(element);
                preCaretTextRange.setEndPoint("EndToStart", textRange);
                start = preCaretTextRange.text.length;
                preCaretTextRange.setEndPoint("EndToEnd", textRange);
                end = preCaretTextRange.text.length;
            }
            var arr = originalText.split('');
            var preCaretRangeArr = preCaretRange.toString().split('');
            for (var i = preCaretRangeArr.length; i >= 0; i--) {
                if (['*', '_'].indexOf(arr[i]) != -1) {
                    start++;
                    end++;
                }
            }
            return {
                start: start,
                end: end
            };
        }

        function restoreCaretPosition(data, $el, text) {
            var textNode = document.createTextNode(text);
            $el.empty().append(textNode);
            var sel = window.getSelection();
            var range = new Range();
            range.setStart(textNode, data.start);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }

        function FontSizeLabel(settings) {
            var _ = {
                $label: null,
                $container: settings.$container
            };
            _.fsl_init = function(settings) {
                _.$label = $('<a class="p-m-b-design font-size-counter"></a>');
                _.$container.append(_.$label);
            };
            _.fsl_show = function(settings) {
                _.$label.show();
            };
            _.fsl_hide = function(settings) {
                _.$label.hide();
            };
            _.fsl_update = function(value) {
                _.$label.html(value);
            };
            _.fsl_init();
            return _;
        };

        function fixPreviewManageButtonsPosition($text, $pmb) {
            if (hasColidingelements($text, $pmb)) {
                $pmb.addClass('hidden');
            } else {
                $pmb.removeClass('hidden');
            }
            $pmb.css('top', '');

            function hasColidingelements($textElement, $pmb) {
                if ($textElement.length == 0) return false;
                if ($textElement.offset().top > ($pmb.offset().top + $pmb.height())) return false;
                if (isColliding($pmb, $textElement)) return true;
                return false;
            }

            function isColliding($div1, $div2) {
                var d1_offset = $div1.offset();
                var d1_height = $div1.outerHeight(true);
                var d1_width = $div1.outerWidth(true);
                var d1_distance_from_top = d1_offset.top + d1_height;
                var d1_distance_from_left = d1_offset.left + d1_width;
                var d2_offset = $div2.offset();
                var d2_height = $div2.outerHeight(true);
                var d2_width = $div2.outerWidth(true);
                var d2_distance_from_top = d2_offset.top + d2_height;
                var d2_distance_from_left = d2_offset.left + d2_width;
                return !(d1_distance_from_top < d2_offset.top || d1_offset.top > d2_distance_from_top || d1_distance_from_left < d2_offset.left || d1_offset.left > d2_distance_from_left);
            }
        }

        function HeaderResizableText(settings) {
            var _ = {
                $el: settings.$el,
                minFontSize: settings.minFontSize,
                minLineHeight: settings.minLineHeight,
                maxFontSize: settings.maxFontSize,
                maxLineHeight: settings.maxLineHeight,
                $wrapper: null,
                $section: settings.$section,
                initCallBack: settings.initCallBack,
                startCallBack: settings.startCallBack,
                resizeCallBack: settings.resizeCallBack,
                endCallBack: settings.endCallBack,
                customClass: settings.customClass
            };
            _.init = function() {
                if (_.$el.data('resizable-text')) _.$el.data('resizable-text').destroy();
                var heightLimits = getMinMaxResizableHeight();
                _.$el.wrap('<div class="resizable-text-wrapper visible" data-rel="' + _.$el.get(0).id + '"></div>');
                _.$wrapper = _.$el.parent();
                _.$nativeJSEl = _.$el.get(0);
                if (_.customClass) _.$wrapper.addClass(_.customClass);
                _.S123Resizable = new S123Resizable({
                    $el: _.$wrapper,
                    maxWidth: _.$el.closest('.headers-text-resize-container').width(),
                    resizByWidth: false,
                    resizByHeight: true,
                    preserveRatio: false,
                    minHeight: heightLimits.min,
                    maxHeight: heightLimits.max,
                    startCallBack: function(event, ui) {
                        if (_.startCallBack) _.startCallBack.call(this, event, ui);
                    },
                    resizeCallBack: function(event, ui) {
                        fittText();
                        if (_.resizeCallBack) _.resizeCallBack.call(this, parseInt(_.$el.get(0).style.getPropertyValue('--header-font-size')));
                    },
                    endCallBack: function(event, ui) {
                        var fontSize = parseInt(parseInt(_.$el.get(0).style.getPropertyValue('--header-font-size')));
                        _.$el.css({
                            fontSize: ''
                        });
                        if (_.endCallBack) _.endCallBack.call(this, fontSize);
                    }
                });
                _.$section.off('textAdded.' + _.$el.get(0).id).on('textAdded.' + _.$el.get(0).id, function(event, elementID) {
                    if (elementID != _.$el.get(0).id) return;
                    _.$wrapper.addClass('visible');
                });
                _.$section.off('textRemoved.' + _.$el.get(0).id).on('textRemoved.' + _.$el.get(0).id, function(event, elementID) {
                    if (elementID != _.$el.get(0).id) return;
                    _.$wrapper.removeClass('visible');
                });
                if (!_.$el.is(':visible')) {
                    _.$wrapper.removeClass('visible');
                }
                if (_.initCallBack) _.initCallBack.call(this, _);
                _.$el.data('resizable-text', _);
            };
            _.destroy = function() {
                _.$wrapper.data('s123-resizable').destroy();
                _.$el.unwrap();
            };
            _.refresh = function() {
                var heightLimits = getMinMaxResizableHeight();
                _.S123Resizable.setOption('minHeight', heightLimits.min);
                _.S123Resizable.setOption('maxHeight', heightLimits.max);
            };

            function fittText() {
                var steps = 1;
                _.$nativeJSEl.style.setProperty('--header-font-size', (parseInt(_.$nativeJSEl.style.getPropertyValue('--header-font-size'))) + 10);
                while (isOverflowing() && steps < 50) {
                    _.$nativeJSEl.style.setProperty('--header-font-size', (parseInt(_.$nativeJSEl.style.getPropertyValue('--header-font-size'))) - 1);
                    steps++;
                }

                function isOverflowing() {
                    _.$nativeJSEl.classList.add('get-clean-scroll-width');
                    var isOverflowing = _.$nativeJSEl.clientWidth < _.$nativeJSEl.scrollWidth || _.$nativeJSEl.clientHeight < _.$nativeJSEl.scrollHeight;
                    _.$nativeJSEl.classList.remove('get-clean-scroll-width');
                    return isOverflowing;
                }
            }

            function getMinMaxResizableHeight() {
                var heightLimits = {
                    max: null,
                    min: null
                };
                var $clone = _.$el.clone();
                _.$el.parent().append($clone);
                $clone.attr('style', `position: absolute; visibility: hidden; font-size: ${_.minFontSize}px !important; line-height: ${(_.minLineHeight)}px !important;`);
                heightLimits.min = $clone.height();
                $clone.attr('style', `position: absolute; visibility: hidden; font-size: ${_.maxFontSize}px !important; line-height: ${(_.maxLineHeight)}px !important;`);
                heightLimits.max = $clone.height();
                $clone.remove();
                return heightLimits;
            }
            _.init();
            return _;
        };

        function updateHeadersDescriptionHeight($section) {
            if ($section.hasClass('layout-22') || $section.hasClass('layout-29')) {
                var $headersDescription = $section.find('.headers-description');
                var $headersimage = $section.find('.headers-image');
                if ($headersimage.length > 0 && $headersDescription.length > 0) {
                    var imageHeight = 400;
                    if ($section.hasClass('layout-29')) {
                        imageHeight = $headersimage.get(0).offsetHeight;
                    }
                    if ($headersDescription.get(0).offsetHeight > imageHeight) {
                        $section.get(0).style.setProperty('--headers-description-height', $headersDescription.get(0).offsetHeight + 'px');
                    } else {
                        $section.get(0).style.setProperty('--headers-description-height', 'unset');
                    }
                } else {
                    $section.get(0).style.setProperty('--headers-description-height', 'unset');
                }
            }
        }
        return _;
    }();
}