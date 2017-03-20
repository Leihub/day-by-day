window.cancelAnimationFrame = function() {
	var n = window,
		e = n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.oCancelAnimationFrame,
		t = !! e;
	return function(n) {
		t ? e(n) : clearInterval(n)
	}
}, window.requestAnimationFrame = function() {
	var n = window,
		e = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame,
		t = !! e;
	if (e && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(e.toString()) && (t = !1), t) return function(n, t) {
		return e(n, t)
	};
	var i = {},
		a = 0,
		o = 1,
		r = null,
		u = +new Date;
	return function(n, e) {
		return i[o++] = n, a++, null === r && (r = setInterval(function() {
			var n = +new Date,
				e = i;
			i = {}, a = 0;
			for (var t in e) e.hasOwnProperty(t) && (e[t](n), u = n);
			n - u > 2500 && (clearInterval(r), r = null)
		}, 1e3 / 60)), r
	}
}(), window.scrollAnimateTo = function() {
	return function(n, e, t, i) {
		function a() {
			r += 1 / 60;
			var c = r / e,
				m = u[t](c);
			c < 1 ? (requestAnimationFrame(a), i.scrollTo(0, o + (n - o) * m)) : i.scrollTo(0, n)
		}
		i = i || window;
		var o = i.scrollY,
			r = 0;
		n = n || 0, t = t || "easeOutSine", e = e || .5;
		var u = (Math.PI, {
			easeOutSine: function(n) {
				return Math.sin(n * (Math.PI / 2))
			},
			easeInOutSine: function(n) {
				return -.5 * (Math.cos(Math.PI * n) - 1)
			},
			easeInOutQuint: function(n) {
				return (n /= .5) < 1 ? .5 * Math.pow(n, 5) : .5 * (Math.pow(n - 2, 5) + 2)
			}
		});
		a()
	}
}(), function(n, e) {
	var t = n.documentElement,
		i = "orientationchange" in window ? "orientationchange" : "resize",
		a = function() {
			var n = t.clientWidth;
			if (n) {
				var e = 20 * (n / 320);
				e = e > 54 ? 54 : e, ~~e !== e && (e = ~~e), /windows phone|iphone|android/gi.test(window.navigator.userAgent) || (e = 20), t.REM2PX = 20, t.style.fontSize = e + "px";
				var i = window.devicePixelRatio;
				document.querySelector('meta[name="viewport"]');
				t.setAttribute("data-dpi", i)
			}
		};
	n.addEventListener && (e.addEventListener(i, a, !1), n.addEventListener("DOMContentLoaded", a, !1), a())
}(document, window)
