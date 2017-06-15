window.touchCheck = function() {
        return Modernizr.touch
    },
    window.mobileCheck = function() {
        return $(window).width() <= mobileThreshold
    },
    window.landscapeCheck = function() {
        return 90 === window.orientation || -90 === window.orientation
    },
    window.mobileThreshold = 700,
    $(document).ready(function() {
        function h() {
            g ? j() : i()
        }

        function i() {
            g = !0;
            var a = $(window).height();
            $(".menu,.menu-button").addClass("menu-is-open"),
                $(".menu").css({
                    transform: "translate(0," + -a + "px)"
                })
                .transition({
                    y: 0,
                    duration: 400
                });
            var b = $(".menu-link:not(.mobile-hide)");
            b.each(function(c) {
                $(this).css({
                    transform: "translate(0," + -a + "px)"
                }).
                transition({
                    y: 0,
                    duration: 400 + 70 * (b.length - c)
                })
            })
        }

        function j() {
            g = !1;
            var a = $(window).height();
            $(".menu-button").removeClass("menu-is-open"), $(".menu").transition({
                y: -a,
                duration: 250,
                easing: "easeInQuad"
            }, function() {
                $(".menu").removeClass("menu-is-open")
            })
        }

        function n() {
            ++k >= l && !m && (m = !0, o())
        }

        function o() {
            setTimeout(p, 150)
        }

        function p() {
            $(".preloader-container").transition({
                scale: 0,
                rotate: 15,
                easing: "easeInQuad",
                duration: 400
            }, function() {
                $(".preloader-container").remove(), $(".cover").css({
                    transformOrigin: "0 0"
                }), $(".cover").transition({
                    y: "100%",
                    skewY: 0,
                    duration: 600,
                    easing: "easeInQuad"
                }, function() {
                    $(".cover").remove()
                }), $("#home .layer").each(function() {
                    var a = $(this),
                        b = a.children("canvas"),
                        c = a.attr("data-parallax"),
                        d = 1 + 2.4 * c;
                    b.css({
                        transformOrigin: a.css("transform-origin"),
                        transform: "scale(" + d + "," + d + ") translate(" + 30 * c + "px,0)"
                    }), b.transition({
                        scale: 1,
                        x: 0,
                        duration: 1400
                    })
                })
            })
        }

        function q() {
            var g = $(window).width(),
                h = $(window).height();
            f = g / c;
            var j = b * d * f,
                k = (h - j) / 2,
                l = 0;
            k > 0 && (k = 0, f = h / (b * d), l = (g - a * d * f) / 2), $(".menu").attr("data-0", "transform:translate3d(0,0px,0)");
            var m = $(".menu").height(),
                n = h - m;
            $(".menu").attr("data-top", "transform:translate3d(0," + -n + "px,0)"), $(".parallax").each(function() {
                null != $(this).data("height") && $(this).css({
                    height: $(this).data("height") * d * f
                })
            }), $(".parallax .layers").css({
                left: l
            }), $(".garden .layers").css({
                top: 0
            }), $(".garden").css({
                height: h
            });
            var o = 0;
            null != e && (o = e.getScrollTop(), e.destroy(), e = null), g < mobileThreshold ? $(".menu").css({
                lineHeight: h + "px"
            }) : $(".menu").css({
                lineHeight: "70px"
            });
            var p = $(".viewport").height() - h,
                q = $(".viewport").data("parallax-keyframes");
            null != q && $(".viewport").attr("data-" + q, null), $(".viewport").attr("data-" + p, "transform:translate3d(0," + -p + "px,0)"), $(".viewport").data("parallax-keyframes", p), $(".layer").each(function() {
                var a = $(this),
                    b = void 0 !== a.attr("data-only-touch"),
                    c = void 0 !== a.attr("data-no-touch");
                if (!mobileCheck() && (!touchCheck() && !b || touchCheck() && (!c || b))) {
                    var e = a.data("parallax-keyframes");
                    if (null != e) {
                        for (var i = 0; i < e.length; i++) a.attr("data-" + e[i], null);
                        a.data("parallax-keyframes", null)
                    }
                    var k = a.data("pos-y"),
                        l = a.data("pos-x"),
                        m = a.data("parallax"),
                        n = a.data("scale");
                    if (null != l ? a.css({
                            left: l * d * f
                        }) : l = 0, null != k ? a.css({
                            top: k * d * f
                        }) : k = 0, a.css({
                            transform: "translate3d(0,0,0)"
                        }), null != m) {
                        var o = 0;
                        o = a.parent().offset().top;
                        var q = a.parent().data("parallax-offset");
                        null == q && (q = 0);
                        var s = .5;
                        null != a.parent().data("parallax-strength") && (s = a.parent().data("parallax-strength"));
                        var t = 700,
                            u = (t - t * m) * s;
                        o += j * q, keyStart = o - h, keyEnd = o + h;
                        var v = "",
                            w = "";
                        if (1 == n) {
                            var x = 1 * s;
                            v = " scale(1," + (1 + x) + ")", w = " scale(1," + (1 - x) + ")"
                        }
                        var y = u;
                        if (keyEnd > p) {
                            var z = keyEnd - p;
                            z /= t, y = u - u * z, n && (w = " scale(1," + (1 - (x - x * z)) + ")"), keyEnd = p
                        }
                        a.css({
                            transformOrigin: g / 2 - l * d * f + "px " + (.9 * h - k * d * f) + "px"
                        }), a.attr("data-" + keyStart, "transform:translate3d(0," + -u + "px,0)" + v), a.attr("data-" + keyEnd, "transform:translate3d(0," + y + "px,0)" + w), a.data("parallax-keyframes", [keyStart, keyEnd])
                    }
                    r(a)
                }
            }), $(".garden .layers").css({
                top: k
            }), $(".layer img").css({
                position: "absolute",
                transform: touchCheck() ? "" : "translate3d(0,0,0)"
            }), $(".layer.layer-scale>*").css({
                position: "absolute",
                transformOrigin: "0 0",
                transform: "scale(" + f + "," + f + ")" + (touchCheck() ? "" : " translate3d(0,0,0)")
            }), $(".layer-no-scale>*").css({
                position: "absolute",
                transformOrigin: "0 0",
                transform: touchCheck() ? "" : " translate3d(0,0,0)"
            }), touchCheck() ? $(".viewport").css({
                position: "relative"
            }) : (e = skrollr.init({
                smoothScrolling: !1,
                smoothScrollingDuration: 350,
                mobileDeceleration: .005
            }), e.setScrollTop(o, !0))
        }

        function r(a) {
            var b = $("<canvas/>"),
                c = new Image;
            c.src = a.attr("data-src");
            var d = b.get(0).getContext("2d");
            a.find("canvas").remove(), c.onload = function(e) {
                a.find("canvas").remove();
                var g = window.devicePixelRatio;
                void 0 === g && (g = 1);
                var h = Math.round(c.width * f * g),
                    i = Math.round(c.height * f * g);
                b.attr("width", h), b.attr("height", i), b.appendTo(a).css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translate3d(0,0,0)"
                }), b.css({
                    width: Math.round(h / g),
                    height: Math.round(i / g)
                }), d.drawImage(c, 0, 0, h, i), n()
            }
        }

        function w() {
            $(".draw").each(function() {
                var a = $(this),
                    b = a.data("last-v"),
                    c = a.attr("data-v");
                if (b != c && (a.hasClass("line") && a.css({
                        transform: "scale(" + c + ",1)"
                    }), a.data("loaded"))) {
                    var d = $(this).data("snap");
                    if (null != d) {
                        d.selectAll("path,line,polyline,polygon,ellipse").forEach(function(a) {
                            var b = a.attr("data-length");
                            null == b && (b = a.getTotalLength(), a.attr("data-length", b)), void 0 === b && (b = 1e3), a.attr({
                                strokeDasharray: c * b + "," + b
                            })
                        })
                    }
                    a.data("last-v", c)
                }
            }), requestAnimationFrame(w)
        }

        function x() {
            $(".portfolio-item").each(function() {
                var a = $(this),
                    b = a.data("video-visible"),
                    c = a.attr("data-v"),
                    d = !1;
                if (c > .65 && (d = !0), d != b) {
                    var e = a.find(".portfolio-item-video");
                    e.css({
                        display: d ? "block" : "none"
                    }), d ? e.get(0).play() : e.get(0).pause()
                }
                a.data("video-visible", d)
            }), requestAnimationFrame(x)
        }
        var a = 841.89,
            b = 532.29,
            c = 1754,
            d = c / a,
            e = null,
            f = 1,
            g = !1;
        $(".menu-button").click(function() {
            h()
        }), $(".menu-link a").click(function() {
            mobileCheck() && j()
        });
        var k = 0,
            l = $(".layer").length;
        touchCheck() ? l -= $(".layer[data-no-touch]").length : l -= $(".layer[data-only-touch]").length, mobileCheck() && (l = 0);
        var m = !1;
        touchCheck() && $("video").remove(),
            function() {
                var a = $(".preloader-ball"),
                    b = a.length,
                    c = 13,
                    d = .45;
                a.each(function(a) {
                    var e = $(this),
                        f = a / b * (2 * Math.PI);
                    e.css({
                        left: Math.cos(f) * c,
                        top: Math.sin(f) * c,
                        animation: "ball-anim " + d + "s ease-in " + d / b * a + "s infinite"
                    })
                }), $(".preloader").css({
                    visibility: "inherit"
                })
            }(), $(".portfolio-item").each(function() {
                var a = $(this),
                    b = a.find(".inline-svg");
                b.on("load", function() {
                    b.find("#url").text(a.attr("data-url"));
                    a.attr("data-video")
                })
            }), $(".layer").each(function() {
                $(this).data("pos-x", $(this).data("x")), $(this).data("pos-y", $(this).data("y"))
            }), $(".draw").each(function() {
                var a = $(this);
                a.attr("data-" + a.height() + "-bottom", "@data-v:0"), a.attr("data-80-center", "@data-v:1"), a.attr("data-v", 0)
            });
        touchCheck() ? $(window).on("orientationchange", function(a) {
            q()
        }) : $(window).resize(function() {
            q()
        }), q(), touchCheck() || (w(), x())
    }), $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                    scrollTop: a.offset().top
                }, 1500), !1
            }
        })
    });
window.touchCheck = function() {
    return Modernizr.touch
}, window.mobileCheck = function() {
    return $(window).width() <= mobileThreshold
}, window.landscapeCheck = function() {
    return 90 === window.orientation || -90 === window.orientation
}, window.mobileThreshold = 700, $(document).ready(function() {
    function h() {
        g ? j() : i()
    }

    function i() {
        g = !0;
        var a = $(window).height();
        $(".menu,.menu-button").addClass("menu-is-open"), $(".menu").css({
            transform: "translate(0," + -a + "px)"
        }).transition({
            y: 0,
            duration: 400
        });
        var b = $(".menu-link:not(.mobile-hide)");
        b.each(function(c) {
            $(this).css({
                transform: "translate(0," + -a + "px)"
            }).transition({
                y: 0,
                duration: 400 + 70 * (b.length - c)
            })
        })
    }

    function j() {
        g = !1;
        var a = $(window).height();
        $(".menu-button").removeClass("menu-is-open"), $(".menu").transition({
            y: -a,
            duration: 250,
            easing: "easeInQuad"
        }, function() {
            $(".menu").removeClass("menu-is-open")
        })
    }

    function n() {
        ++k >= l && !m && (m = !0, o())
    }

    function o() {
        setTimeout(p, 150)
    }

    function p() {
        $(".preloader-container").transition({
            scale: 0,
            rotate: 15,
            easing: "easeInQuad",
            duration: 400
        }, function() {
            $(".preloader-container").remove(), $(".cover").css({
                transformOrigin: "0 0"
            }), $(".cover").transition({
                y: "100%",
                skewY: 0,
                duration: 600,
                easing: "easeInQuad"
            }, function() {
                $(".cover").remove()
            }), $("#home .layer").each(function() {
                var a = $(this),
                    b = a.children("canvas"),
                    c = a.attr("data-parallax"),
                    d = 1 + 2.4 * c;
                b.css({
                    transformOrigin: a.css("transform-origin"),
                    transform: "scale(" + d + "," + d + ") translate(" + 30 * c + "px,0)"
                }), b.transition({
                    scale: 1,
                    x: 0,
                    duration: 1400
                })
            })
        })
    }

    function q() {
        var g = $(window).width(),
            h = $(window).height();
        f = g / c;
        var j = b * d * f,
            k = (h - j) / 2,
            l = 0;
        k > 0 && (k = 0, f = h / (b * d), l = (g - a * d * f) / 2), $(".menu").attr("data-0", "transform:translate3d(0,0px,0)");
        var m = $(".menu").height(),
            n = h - m;
        $(".menu").attr("data-top", "transform:translate3d(0," + -n + "px,0)"), $(".parallax").each(function() {
            null != $(this).data("height") && $(this).css({
                height: $(this).data("height") * d * f
            })
        }), $(".parallax .layers").css({
            left: l
        }), $(".garden .layers").css({
            top: 0
        }), $(".garden").css({
            height: h
        });
        var o = 0;
        null != e && (o = e.getScrollTop(), e.destroy(), e = null), g < mobileThreshold ? $(".menu").css({
            lineHeight: h + "px"
        }) : $(".menu").css({
            lineHeight: "70px"
        });
        var p = $(".viewport").height() - h,
            q = $(".viewport").data("parallax-keyframes");
        null != q && $(".viewport").attr("data-" + q, null), $(".viewport").attr("data-" + p, "transform:translate3d(0," + -p + "px,0)"), $(".viewport").data("parallax-keyframes", p), $(".layer").each(function() {
            var a = $(this),
                b = void 0 !== a.attr("data-only-touch"),
                c = void 0 !== a.attr("data-no-touch");
            if (!mobileCheck() && (!touchCheck() && !b || touchCheck() && (!c || b))) {
                var e = a.data("parallax-keyframes");
                if (null != e) {
                    for (var i = 0; i < e.length; i++) a.attr("data-" + e[i], null);
                    a.data("parallax-keyframes", null)
                }
                var k = a.data("pos-y"),
                    l = a.data("pos-x"),
                    m = a.data("parallax"),
                    n = a.data("scale");
                if (null != l ? a.css({
                        left: l * d * f
                    }) : l = 0, null != k ? a.css({
                        top: k * d * f
                    }) : k = 0, a.css({
                        transform: "translate3d(0,0,0)"
                    }), null != m) {
                    var o = 0;
                    o = a.parent().offset().top;
                    var q = a.parent().data("parallax-offset");
                    null == q && (q = 0);
                    var s = .5;
                    null != a.parent().data("parallax-strength") && (s = a.parent().data("parallax-strength"));
                    var t = 700,
                        u = (t - t * m) * s;
                    o += j * q, keyStart = o - h, keyEnd = o + h;
                    var v = "",
                        w = "";
                    if (1 == n) {
                        var x = 1 * s;
                        v = " scale(1," + (1 + x) + ")", w = " scale(1," + (1 - x) + ")"
                    }
                    var y = u;
                    if (keyEnd > p) {
                        var z = keyEnd - p;
                        z /= t, y = u - u * z, n && (w = " scale(1," + (1 - (x - x * z)) + ")"), keyEnd = p
                    }
                    a.css({
                        transformOrigin: g / 2 - l * d * f + "px " + (.9 * h - k * d * f) + "px"
                    }), a.attr("data-" + keyStart, "transform:translate3d(0," + -u + "px,0)" + v), a.attr("data-" + keyEnd, "transform:translate3d(0," + y + "px,0)" + w), a.data("parallax-keyframes", [keyStart, keyEnd])
                }
                r(a)
            }
        }), $(".garden .layers").css({
            top: k
        }), $(".layer img").css({
            position: "absolute",
            transform: touchCheck() ? "" : "translate3d(0,0,0)"
        }), $(".layer.layer-scale>*").css({
            position: "absolute",
            transformOrigin: "0 0",
            transform: "scale(" + f + "," + f + ")" + (touchCheck() ? "" : " translate3d(0,0,0)")
        }), $(".layer-no-scale>*").css({
            position: "absolute",
            transformOrigin: "0 0",
            transform: touchCheck() ? "" : " translate3d(0,0,0)"
        }), touchCheck() ? $(".viewport").css({
            position: "relative"
        }) : (e = skrollr.init({
            smoothScrolling: !1,
            smoothScrollingDuration: 350,
            mobileDeceleration: .005
        }), e.setScrollTop(o, !0))
    }

    function r(a) {
        var b = $("<canvas/>"),
            c = new Image;
        c.src = a.attr("data-src");
        var d = b.get(0).getContext("2d");
        a.find("canvas").remove(), c.onload = function(e) {
            a.find("canvas").remove();
            var g = window.devicePixelRatio;
            void 0 === g && (g = 1);
            var h = Math.round(c.width * f * g),
                i = Math.round(c.height * f * g);
            b.attr("width", h), b.attr("height", i), b.appendTo(a).css({
                position: "absolute",
                top: 0,
                left: 0,
                transform: "translate3d(0,0,0)"
            }), b.css({
                width: Math.round(h / g),
                height: Math.round(i / g)
            }), d.drawImage(c, 0, 0, h, i), n()
        }
    }

    function w() {
        $(".draw").each(function() {
            var a = $(this),
                b = a.data("last-v"),
                c = a.attr("data-v");
            if (b != c && (a.hasClass("line") && a.css({
                    transform: "scale(" + c + ",1)"
                }), a.data("loaded"))) {
                var d = $(this).data("snap");
                if (null != d) {
                    d.selectAll("path,line,polyline,polygon,ellipse").forEach(function(a) {
                        var b = a.attr("data-length");
                        null == b && (b = a.getTotalLength(), a.attr("data-length", b)), void 0 === b && (b = 1e3), a.attr({
                            strokeDasharray: c * b + "," + b
                        })
                    })
                }
                a.data("last-v", c)
            }
        }), requestAnimationFrame(w)
    }

    function x() {
        $(".portfolio-item").each(function() {
            var a = $(this),
                b = a.data("video-visible"),
                c = a.attr("data-v"),
                d = !1;
            if (c > .65 && (d = !0), d != b) {
                var e = a.find(".portfolio-item-video");
                e.css({
                    display: d ? "block" : "none"
                }), d ? e.get(0).play() : e.get(0).pause()
            }
            a.data("video-visible", d)
        }), requestAnimationFrame(x)
    }
    var a = 841.89,
        b = 532.29,
        c = 1754,
        d = c / a,
        e = null,
        f = 1,
        g = !1;
    $(".menu-button").click(function() {
        h()
    }), $(".menu-link a").click(function() {
        mobileCheck() && j()
    });
    var k = 0,
        l = $(".layer").length;
    touchCheck() ? l -= $(".layer[data-no-touch]").length : l -= $(".layer[data-only-touch]").length, mobileCheck() && (l = 0);
    var m = !1;
    touchCheck() && $("video").remove(),
        function() {
            var a = $(".preloader-ball"),
                b = a.length,
                c = 13,
                d = .45;
            a.each(function(a) {
                var e = $(this),
                    f = a / b * (2 * Math.PI);
                e.css({
                    left: Math.cos(f) * c,
                    top: Math.sin(f) * c,
                    animation: "ball-anim " + d + "s ease-in " + d / b * a + "s infinite"
                })
            }), $(".preloader").css({
                visibility: "inherit"
            })
        }(), $(".portfolio-item").each(function() {
            var a = $(this),
                b = a.find(".inline-svg");
            b.on("load", function() {
                b.find("#url").text(a.attr("data-url"));
                a.attr("data-video")
            })
        }), $(".layer").each(function() {
            $(this).data("pos-x", $(this).data("x")), $(this).data("pos-y", $(this).data("y"))
        }), $(".draw").each(function() {
            var a = $(this);
            a.attr("data-" + a.height() + "-bottom", "@data-v:0"), a.attr("data-80-center", "@data-v:1"), a.attr("data-v", 0)
        });
    touchCheck() ? $(window).on("orientationchange", function(a) {
        q()
    }) : $(window).resize(function() {
        q()
    }), q(), touchCheck() || (w(), x())
}), $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                scrollTop: a.offset().top
            }, 1500), !1
        }
    })
});