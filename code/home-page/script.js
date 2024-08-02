
Here's the JavaScript code formatted according to standard coding practices:

```javascript
(function (e) {
    var t = {};

    function s(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
    }

    s.m = e;
    s.c = t;
    s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    };
    s.r = function (e) {
        "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        Object.defineProperty(e, "__esModule", { value: !0 });
    };
    s.t = function (e, t) {
        if ((1 & t && (e = s(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
            (s.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
        )
            for (var i in e)
                s.d(
                    n,
                    i,
                    function (t) {
                        return e[t];
                    }.bind(null, i)
                );
        return n;
    };
    s.n = function (e) {
        var t =
            e && e.__esModule
                ? function () {
                      return e.default;
                  }
                : function () {
                      return e;
                  };
        return s.d(t, "a", t), t;
    };
    s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    };
    s.p = "";
    s((s.s = 0));
})([
    function (e, t) {
        var s = document.querySelector('script[data-name="BMC-Widget"]');
        window.addEventListener("DOMContentLoaded", function () {
            new FontFace(
                "Avenir Book1",
                "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/710789a0-1557-48a1-8cec-03d52d663d74.eot)"
            );
            new FontFace(
                "Avenir Book2",
                "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/710789a0-1557-48a1-8cec-03d52d663d74.eot)"
            );
            new FontFace(
                "Avenir Book3",
                "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/710789a0-1557-48a1-8cec-03d52d663d74.eot)"
            );
            new FontFace(
                "Avenir Book4",
                "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/65d75eb0-2601-4da5-a9a4-9ee67a470a59.woff)"
            );
            new FontFace(
                "Avenir Book5",
                "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/65d75eb0-2601-4da5-a9a4-9ee67a470a59.woff)"
            );
            new FontFace(
                "Avenir Book6",
                "url(https://bmc-cdn.nyc3.digitaloceanspaces.com/Fonts/65d75eb0-2601-4da5-a9a4-9ee67a470a59.woff)"
            )
                .load()
                .then(function (e) {
                    document.fonts.add(e);
                })
                .catch(function (e) {});

            var e = window.matchMedia("(min-width: 480px)"),
                t = document.createElement("div");
            (t.id = "bmc-wbtn"),
                (t.style.display = "flex"),
                (t.style.alignItems = "center"),
                (t.style.justifyContent = "center"),
                (t.style.width = "64px"),
                (t.style.height = "64px"),
                (t.style.background = s.dataset.color),
                (t.style.color = "white"),
                (t.style.borderRadius = "32px"),
                (t.style.position = "fixed"),
                "left" == s.dataset.position
                    ? (t.style.left = s.dataset.x_margin + "px")
                    : (t.style.right = s.dataset.x_margin + "px"),
                (t.style.bottom = s.dataset.y_margin + "px"),
                (t.style.boxShadow = "0 4px 8px rgba(0,0,0,.15)"),
                (t.innerHTML =
                    '<img src="https://cdn.buymeacoffee.com/widget/assets/coffee%20cup.svg" alt="Buy Me A Coffee" style="height: 36px; width: 36px; margin: 0; padding: 0;">'),
                (t.style.zIndex = "9999"),
                (t.style.cursor = "pointer"),
                (t.style.fontWeight = "600"),
                (t.style.transition = ".25s ease all");

            var n = document.createElement("div");
            (n.style.position = "fixed"),
                (n.style.top = "0"),
                (n.style.left = "0"),
                (n.style.width = "0"),
                (n.style.height = "0"),
                (n.style.background = "rgba(0, 0, 0, 0)"),
                (n.style.textAlign = "center"),
                (n.style.zIndex = "99999");

            var i = document.createElement("div");
            n.appendChild(i),
                i.setAttribute("id", "bmc-close-btn"),
                (i.style.position = "fixed"),
                (i.style.alignItems = "center"),
                (i.style.justifyContent = "center"),
                (i.style.display = "flex"),
                (i.style.visibility = "hidden"),
                (i.style.borderRadius = "100px"),
                (i.style.width = "40px"),
                (i.style.height = "40px"),
                (i.innerHTML =
                    '<svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M2.45156 27.6516L0.351562 25.5516L11.9016 14.0016L0.351562 2.45156L2.45156 0.351562L14.0016 11.9016L25.5516 0.351562L27.6516 2.45156L16.1016 14.0016L27.6516 25.5516L25.5516 27.6516L14.0016 16.1016L2.45156 27.6516Z" fill="#666"/>\n  </svg>\n  '),
                (i.style.top = "16px"),
                (i.style.right = "16px"),
                (i.style.zIndex = "9999999"),
                (i.onclick = function () {});

            var o = document.createElement("iframe");
            o.setAttribute("id", "bmc-iframe"),
                (o.title = "Buy Me a Coffee"),
                (o.style.position = "fixed"),
                (o.style.margin = "0"),
                (o.style.border = "0"),
                e.matches
                    ? ("left" == s.dataset.position
                          ? (o.style.left = s.dataset.x_margin + "px")
                          : (o.style.right = s.dataset.x_margin + "px"),
                      (o.style.bottom =
                          parseInt(s.dataset.y_margin, 10) + 72 + "px"))
                    : ((o.style.left = "0px"),
                      (o.style.right = "0px"),
                      (o.style.top = "0px"),
                      (o.style.bottom = "32px")),
                (o.style.height = "0"),
                (o.style.opacity = "0"),
                e.matches
                    ? ((o.style.width = "calc(100% - 38px)"),
                      (o.style.width = "420px"),
                      (o.style.maxWidth = "420px"),
                      (o.style.minHeight = "620px"),
                      (o.style.maxHeight = "620px"))
                    : ((o.style.width = "calc(100% - 38px)"),
                      (o.style.width = "100vw"),
                      (o.style.maxWidth = "100vw"),
                      (o.style.minHeight = "100%"),
                      (o.style.maxHeight = "100%")),
                (o.style.borderRadius = "10px"),
                (o.style.boxShadow = "-6px 0px 30px rgba(13, 12, 34, 0.1)"),
                (o.style.background = "#fff"),
                (o.style.backgroundImage =
                    "url(https://cdn.buymeacoffee.com/assets/img/widget/loader.svg)"),
                (o.style.backgroundPosition = "center"),
                (o.style.backgroundSize
