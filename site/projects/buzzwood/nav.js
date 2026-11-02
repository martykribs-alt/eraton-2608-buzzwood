/* Buzzwood site navigation. One bar for every page on buzzwood.martinkribs.com.
   To add a page: put its HTML under site/projects/buzzwood/, add one line to PAGES below, and add
   <script src="/projects/buzzwood/nav.js" defer></script> to the page. The bar draws itself inside a
   shadow root, so the page's own styles can't change it and it can't change the page. */
(function () {
  "use strict";

  // Menu, in order. `match` lists every address that should light up that item.
  var PAGES = [
    { label: "Home", href: "/", match: ["/", "/projects/buzzwood/home.html"] },
    { label: "Feasibility record", href: "/record", match: ["/record", "/index.html"] },
    { label: "Project path", href: "/projects/buzzwood/project-path.html", match: ["/projects/buzzwood/project-path.html"] },
    { label: "Buzzwood path", href: "/projects/buzzwood/buzzwood-path.html", match: ["/projects/buzzwood/buzzwood-path.html"] },
    { label: "Concepts", href: "/projects/buzzwood/concepts.html", match: ["/projects/buzzwood/concepts.html"] },
    { label: "Site plans", href: "/projects/buzzwood/site-plan.html", match: ["/projects/buzzwood/site-plan.html"] }
  ];

  var here = location.pathname.replace(/\/+$/, "") || "/";
  function isCurrent(p) {
    return p.match.some(function (m) { return (m.replace(/\/+$/, "") || "/") === here; });
  }

  var css = [
    ":host{all:initial;display:block;position:sticky;top:0;z-index:2147483000;",
    "  --bar:#1f2326;--ink:#eceae5;--muted:#a9adaa;--accent:#c39258;--line:#33383b;",
    "  font:500 14px/1 'Work Sans',system-ui,-apple-system,'Segoe UI',sans-serif}",
    "nav{background:var(--bar);color:var(--ink);border-bottom:1px solid var(--line);",
    "  padding:0 max(16px,env(safe-area-inset-left,0px));display:flex;align-items:center;gap:20px;min-height:48px}",
    ".brand{color:var(--ink);text-decoration:none;font:500 13px/1 'Jost','Futura','Avenir Next',system-ui,sans-serif;",
    "  letter-spacing:.2em;text-transform:uppercase;white-space:nowrap;display:flex;align-items:center;gap:10px}",
    ".brand i{display:block;width:16px;height:3px;background:var(--accent)}",
    "ul{list-style:none;margin:0;padding:0;display:flex;gap:4px;overflow-x:auto;scrollbar-width:none;flex:1;min-width:0;position:relative}",
    "ul::-webkit-scrollbar{display:none}",
    "a.item{display:block;color:var(--muted);text-decoration:none;padding:16px 10px 13px;border-bottom:3px solid transparent;white-space:nowrap}",
    "a.item:hover{color:var(--ink)}",
    "a.item[aria-current=page]{color:var(--ink);border-bottom-color:var(--accent)}",
    "button{all:unset;cursor:pointer;color:var(--muted);font-size:13px;white-space:nowrap;padding:6px 0}",
    "button:hover{color:var(--ink)}",
    "a:focus-visible,button:focus-visible{outline:2px solid var(--accent);outline-offset:2px}",
    "@media (max-width:640px){.brand span{display:none}nav{gap:12px}a.item{padding-inline:8px}}",
    "@media print{nav{display:none}}"
  ].join("\n");

  var items = PAGES.map(function (p) {
    return '<li><a class="item" href="' + p.href + '"' + (isCurrent(p) ? ' aria-current="page"' : "") + ">" +
      p.label + "</a></li>";
  }).join("");

  function mount() {
    if (document.querySelector("buzzwood-nav")) return;
    var host = document.createElement("buzzwood-nav");
    var root = host.attachShadow({ mode: "open" });
    root.innerHTML = "<style>" + css + "</style>" +
      '<nav aria-label="Buzzwood site">' +
      '<a class="brand" href="/"><i aria-hidden="true"></i><span>Buzzwood Village</span></a>' +
      "<ul>" + items + "</ul>" +
      '<button type="button" id="out">Sign out</button></nav>';
    root.getElementById("out").addEventListener("click", function () {
      import("https://cdn.jsdelivr.net/npm/@netlify/identity@2.0.0/+esm")
        .then(function (m) { return m.logout(); })
        .catch(function () {})
        .then(function () { location.replace("/"); });
    });
    // Run edge to edge and flush to the top whatever padding or margin the page gives its body.
    var cs = getComputedStyle(document.body);
    var px = function (a, b) { return (parseFloat(cs[a]) || 0) + (parseFloat(cs[b]) || 0); };
    var t = px("paddingTop", "marginTop"), l = px("paddingLeft", "marginLeft"), r = px("paddingRight", "marginRight");
    host.style.margin = -t + "px " + -r + "px " + t + "px " + -l + "px";
    document.body.insertBefore(host, document.body.firstChild);
    // On a narrow screen the menu scrolls sideways; bring the current page's item into view.
    var cur = root.querySelector("[aria-current]"), list = root.querySelector("ul");
    if (cur && list.scrollWidth > list.clientWidth) {
      list.scrollLeft = cur.offsetLeft - (list.clientWidth - cur.offsetWidth) / 2;
    }
  }

  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
