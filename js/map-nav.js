/* ==========================================================================
   地址导航：点击地址弹出地图选择（高德 / 百度 / 复制地址）
   ========================================================================== */
(function () {
  var zh = {
    title: "打开地图导航",
    hint: "选择地图后将打开对应应用或网页",
    kw: "地图将按此名称检索：",
    amap: "高德地图",
    amapHint: "步行 / 驾车导航",
    baidu: "百度地图",
    baiduHint: "步行 / 驾车导航",
    copy: "复制检索词",
    copyHint: "粘贴到任意地图应用搜索",
    copied: "已复制到剪贴板",
    cancel: "取消",
    aria: "点击查看地图导航"
  };
  var en = {
    title: "Open navigation",
    hint: "Choose a map service to open the app or web map",
    kw: "Searching by: ",
    amap: "Amap",
    amapHint: "Walking / driving",
    baidu: "Baidu Maps",
    baiduHint: "Walking / driving",
    copy: "Copy search term",
    copyHint: "Paste into any map app",
    copied: "Copied to clipboard",
    cancel: "Cancel",
    aria: "Open map navigation"
  };

  function t() {
    var lang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
    return lang.indexOf("en") === 0 ? en : zh;
  }

  function isMobile() {
    return /Android|iPhone|iPad|iPod|HarmonyOS|Mobile/i.test(navigator.userAgent);
  }

  function buildModal() {
    var m = document.createElement("div");
    m.className = "map-modal";
    m.setAttribute("role", "dialog");
    m.setAttribute("aria-modal", "true");
    m.innerHTML =
      '<div class="map-modal-panel">' +
      '<h3 class="map-modal-title"></h3>' +
      '<p class="map-modal-addr"></p>' +
      '<p class="map-modal-kw"></p>' +
      '<div class="map-modal-list">' +
      '<button type="button" class="map-modal-btn" data-map-go="amap"><span class="map-modal-name"></span><span class="map-modal-hint"></span></button>' +
      '<button type="button" class="map-modal-btn" data-map-go="baidu"><span class="map-modal-name"></span><span class="map-modal-hint"></span></button>' +
      '<button type="button" class="map-modal-btn" data-map-go="copy"><span class="map-modal-name"></span><span class="map-modal-hint"></span></button>' +
      "</div>" +
      '<button type="button" class="map-modal-cancel"></button>' +
      "</div>";
    document.body.appendChild(m);
    return m;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var triggers = document.querySelectorAll("[data-map-address]");
    if (!triggers.length) return;

    var modal = buildModal();
    var panel = modal.querySelector(".map-modal-panel");
    var titleEl = modal.querySelector(".map-modal-title");
    var addrEl = modal.querySelector(".map-modal-addr");
    var kwEl = modal.querySelector(".map-modal-kw");
    var cancelBtn = modal.querySelector(".map-modal-cancel");
    var goBtns = modal.querySelectorAll("[data-map-go]");
    var current = "";
    var currentKeyword = "";
    var lastFocus = null;

    function refreshLabels() {
      var L = t();
      titleEl.textContent = L.title;
      cancelBtn.textContent = L.cancel;
      modal.querySelector('[data-map-go="amap"] .map-modal-name').textContent = L.amap;
      modal.querySelector('[data-map-go="amap"] .map-modal-hint').textContent = L.amapHint;
      modal.querySelector('[data-map-go="baidu"] .map-modal-name').textContent = L.baidu;
      modal.querySelector('[data-map-go="baidu"] .map-modal-hint').textContent = L.baiduHint;
      var copyBtn = modal.querySelector('[data-map-go="copy"]');
      copyBtn.querySelector(".map-modal-name").textContent = L.copy;
      copyBtn.querySelector(".map-modal-hint").textContent = L.copyHint;
      for (var i = 0; i < triggers.length; i++) {
        triggers[i].setAttribute("aria-label", L.aria);
        triggers[i].setAttribute("title", L.aria);
      }
    }

    function open(addr, keyword, fromEl) {
      current = addr;
      currentKeyword = keyword || addr;
      lastFocus = fromEl || null;
      refreshLabels();
      addrEl.textContent = addr;
      var L = t();
      if (currentKeyword && currentKeyword !== addr) {
        kwEl.textContent = L.kw + currentKeyword;
        kwEl.style.display = "";
      } else {
        kwEl.textContent = "";
        kwEl.style.display = "none";
      }
      modal.classList.add("open");
      var first = modal.querySelector(".map-modal-btn");
      if (first) first.focus();
    }

    function close() {
      modal.classList.remove("open");
      if (lastFocus) lastFocus.focus();
    }

    var amapUrl = function (addr) {
      return "https://uri.amap.com/search?keyword=" + encodeURIComponent(addr) + (isMobile() ? "&callnative=1" : "");
    };
    var baiduUrl = function (addr) {
      return "https://map.baidu.com/search/" + encodeURIComponent(addr);
    };

    function openUrl(url) {
      var w = window.open(url, "_blank");
      if (!w) window.location.href = url;
    }

    for (var i = 0; i < triggers.length; i++) {
      (function (el) {
        el.classList.add("map-addr");
        if (!el.hasAttribute("role")) el.setAttribute("role", "button");
        if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
        var addr = el.getAttribute("data-map-address");
        var kw = el.getAttribute("data-map-keyword");
        el.addEventListener("click", function (e) {
          e.preventDefault();
          open(addr, kw, el);
        });
        el.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
            open(addr, kw, el);
          }
        });
      })(triggers[i]);
    }

    for (var g = 0; g < goBtns.length; g++) {
      goBtns[g].addEventListener("click", function () {
        var kind = this.getAttribute("data-map-go");
        if (kind === "copy") {
          var L = t();
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(currentKeyword || current);
          } else {
            var ta = document.createElement("textarea");
            ta.value = currentKeyword || current;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand("copy"); } catch (e) {}
            document.body.removeChild(ta);
          }
          this.querySelector(".map-modal-hint").textContent = L.copied;
          return;
        }
        openUrl(kind === "amap" ? amapUrl(currentKeyword || current) : baiduUrl(currentKeyword || current));
        close();
      });
    }

    cancelBtn.addEventListener("click", close);
    modal.addEventListener("click", function (e) {
      if (!panel.contains(e.target)) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) close();
    });

    refreshLabels();
    /* 港站切换语言后同步弹层文案 */
    document.addEventListener("tyhs:langchange", function () {
      if (modal.classList.contains("open")) refreshLabels();
      else refreshLabels();
    });
  });
})();
