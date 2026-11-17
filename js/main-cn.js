/* ==========================================================================
   天元汇算 官方网站
   JS：语言切换（中文 / English）、移动端菜单、滚动效果
   主营：高端算力显卡、服务器内存条、高端算力服务器整机
   ========================================================================== */

/* ---------- 中英文文案字典 ---------- */
/* ---------- 初始化 ---------- */
document.addEventListener("DOMContentLoaded", function () {
  /* 移动端菜单 */
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("mainNav");
  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("open");
      nav.classList.toggle("open");
    });
    /* 点击菜单项后收起 */
    var links = nav.querySelectorAll("a");
    for (var l = 0; l < links.length; l++) {
      links[l].addEventListener("click", function () {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
      });
    }
  }

  /* 当前页高亮：适配目录型干净 URL */
  var path = window.location.pathname.replace(/\/$/, "");
  if (path === "") path = "/";
  if (path === "/index.html" || path === "/index") path = "/";
  var navLinks = document.querySelectorAll(".main-nav a");
  for (var a = 0; a < navLinks.length; a++) {
    var href = navLinks[a].getAttribute("href") || "";
    href = href.replace(/\/$/, "");
    if (href === "") href = "/";
    if (href === path) {
      navLinks[a].classList.add("active");
    }
  }

  /* 滚动阴影 */
  var header = document.querySelector(".site-header");
  var toTop = document.getElementById("toTop");
  window.addEventListener("scroll", function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 500);
  });
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* 减弱动效偏好：跳过所有 JS 动画，内容保持静态可见 */
  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 滚动入场：元素进入视口时播放一次淡入上移（scroll + rect 检测，不依赖外部库） */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (revealEls.length && !prefersReducedMotion) {
    var revealTick = function () {
      for (var i = revealEls.length - 1; i >= 0; i--) {
        var rect = revealEls[i].getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 40) {
          revealEls[i].classList.add("is-in");
          revealEls.splice(i, 1);
        }
      }
    };
    revealTick();
    window.addEventListener("scroll", revealTick, { passive: true });
    window.addEventListener("resize", revealTick);
  }

  /* 品牌墙：两行错位无缝横滚；第二行反向；减弱动效时保持静态网格 */
  var brandMarquees = document.querySelectorAll(".brands-grid");
  Array.prototype.forEach.call(brandMarquees, function (rowEl, rowIndex) {
    if (prefersReducedMotion || !rowEl) return;
    var sourceItems = Array.prototype.slice.call(rowEl.querySelectorAll(".brands-item"));
    if (sourceItems.length < 6) return;
    rowEl.classList.add("is-marquee");
    var track = document.createElement("div");
    track.className = "brands-track" + (rowIndex === 1 ? " is-reverse" : "");
    function brandSet(clone) {
      var set = document.createElement("div");
      set.className = "brand-set";
      if (clone) set.setAttribute("aria-hidden", "true");
      sourceItems.forEach(function (item) {
        set.appendChild(clone ? item.cloneNode(true) : item);
      });
      return set;
    }
    track.appendChild(brandSet(false));
    track.appendChild(brandSet(true));
    rowEl.appendChild(track);
  });

  if (window.IntersectionObserver) {
    var brandMarqueeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle("is-paused", !entry.isIntersecting);
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    Array.prototype.forEach.call(document.querySelectorAll(".brands-grid.is-marquee"), function (el) {
      brandMarqueeObserver.observe(el);
    });
  }

  /* 首页全页网络背景改由 js/hero-net.js 自绘（支持端点呼吸灯） */

});
