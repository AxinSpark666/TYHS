/* ==========================================================================
   站点入口页背景特效（仅 body.gate 生效）
   1) .page-net   —— 全屏神经网络 + 端点呼吸灯（与首页同一套观感）
   2) .page-flow  —— 流光流星：从画布四周发射，沿弧线汇聚到两个终点
                    终点 = 左侧、右侧公司名称区域的中心
   - 尊重 prefers-reduced-motion；标签页隐藏时暂停
   ========================================================================== */
(function () {
  "use strict";

  if (!document.body || !document.body.classList.contains("gate")) return;
  if (!window.requestAnimationFrame) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W = 1, H = 1;

  function rand(a, b) { return a + Math.random() * (b - a); }
  function gauss() { return (Math.random() + Math.random() + Math.random() - 1.5) / 1.5; }
  function hash2(i, j) {
    var h = ((i + 1) * 73856093) ^ ((j + 1) * 19349663);
    return ((h >>> 0) % 1000) / 1000;
  }

  /* ---------------------------------------------------------------- 网络层 */
  var netLayer = document.createElement("div");
  netLayer.className = "page-net";
  netLayer.setAttribute("aria-hidden", "true");
  var netCanvas = document.createElement("canvas");
  netLayer.appendChild(netCanvas);
  document.body.insertBefore(netLayer, document.body.firstChild);

  var nctx = netCanvas.getContext("2d");
  if (!nctx) return;

  var LINK = 160;
  var nodes = [];
  var clusters = [];
  var mouse = { x: -9999, y: -9999, on: false };
  var t0 = performance.now();

  function buildNet() {
    var count = Math.round(((W * H) / 8600) * 0.7);
    count = Math.max(22, Math.min(140, count));

    var cols = W >= 780 ? 3 : 2;
    var rows = 3;
    var cells = [];
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) cells.push({ c: c, r: r });
    }
    cells.sort(function () { return Math.random() - 0.5; });

    var clusterCount = Math.min(cells.length, Math.max(6, Math.round(count / 7.5)));
    var cw = W / cols, ch = H / rows;
    clusters = [];
    for (var k = 0; k < clusterCount; k++) {
      var cell = cells[k];
      clusters.push({
        x: cell.c * cw + cw * rand(0.25, 0.75),
        y: cell.r * ch + ch * rand(0.3, 0.7),
        vx: rand(-0.05, 0.05),
        vy: rand(-0.05, 0.05)
      });
    }

    nodes.length = 0;
    for (var i = 0; i < count; i++) {
      var ci = Math.floor(Math.random() * clusters.length);
      var cl = clusters[ci];
      var ang = rand(0, Math.PI * 2);
      var dist = Math.abs(gauss()) * Math.min(W, H) * 0.26;
      nodes.push({
        x: Math.min(W + 10, Math.max(-10, cl.x + Math.cos(ang) * dist)),
        y: Math.min(H + 10, Math.max(-10, cl.y + Math.sin(ang) * dist * 0.9)),
        vx: rand(-0.14, 0.14),
        vy: rand(-0.14, 0.14),
        r: rand(1.3, 2.7),
        phase: rand(0, Math.PI * 2),
        speed: rand(0.55, 1.7),
        cyan: Math.random() < 0.42,
        glow: Math.random() < 0.18,
        ci: ci
      });
    }

    LINK = Math.max(130, Math.min(W, H) * 0.185);
  }

  function netColor(n, a) {
    return n.cyan ? "rgba(84,210,208," + a + ")" : "rgba(139,146,255," + a + ")";
  }

  function drawNet(time) {
    nctx.clearRect(0, 0, W, H);
    nctx.globalCompositeOperation = "lighter";

    var i, j, n, m, dx, dy, d, a, w;

    for (i = 0; i < clusters.length; i++) {
      var cl = clusters[i];
      cl.x += cl.vx;
      cl.y += cl.vy;
      if (cl.x < W * 0.06 || cl.x > W * 0.94) cl.vx *= -1;
      if (cl.y < H * 0.06 || cl.y > H * 0.94) cl.vy *= -1;
    }

    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      var c0 = clusters[n.ci];
      n.x += (c0.x - n.x) * 0.0009;
      n.y += (c0.y - n.y) * 0.0009;

      if (n.x < -20) n.x = W + 20;
      if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20;
      if (n.y > H + 20) n.y = -20;

      if (mouse.on) {
        dx = mouse.x - n.x;
        dy = mouse.y - n.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d > 1 && d < 110) {
          n.x += (dx / d) * 0.22;
          n.y += (dy / d) * 0.22;
        }
      }
    }

    var longLink = LINK * 1.8;
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      for (j = i + 1; j < nodes.length; j++) {
        m = nodes[j];
        dx = m.x - n.x;
        dy = m.y - n.y;
        if (Math.abs(dx) > longLink || Math.abs(dy) > longLink) continue;
        d = Math.sqrt(dx * dx + dy * dy);

        if (d > LINK) {
          if (d > longLink || hash2(i, j) > 0.12) continue;
          a = (1 - d / longLink) * 0.3;
          w = 0.7;
        } else {
          a = (1 - d / LINK) * 0.62;
          w = 0.95;
        }

        nctx.beginPath();
        nctx.moveTo(n.x, n.y);
        nctx.lineTo(m.x, m.y);
        nctx.strokeStyle = netColor(n, a);
        nctx.lineWidth = w;
        nctx.stroke();
      }
    }

    if (mouse.on) {
      for (i = 0; i < nodes.length; i++) {
        n = nodes[i];
        dx = mouse.x - n.x;
        dy = mouse.y - n.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          nctx.beginPath();
          nctx.moveTo(n.x, n.y);
          nctx.lineTo(mouse.x, mouse.y);
          nctx.strokeStyle = netColor(n, (1 - d / 150) * 0.3);
          nctx.lineWidth = 0.7;
          nctx.stroke();
        }
      }
    }

    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      var wave = 0.5 + 0.5 * Math.sin(time * n.speed + n.phase);
      var breathe = 0.3 + wave * 0.7;

      if (n.glow) {
        var rr = n.r * (3.4 + wave * 2.8);
        var g = nctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rr);
        g.addColorStop(0, netColor(n, 0.85 * breathe));
        g.addColorStop(0.45, netColor(n, 0.28 * breathe));
        g.addColorStop(1, netColor(n, 0));
        nctx.fillStyle = g;
        nctx.beginPath();
        nctx.arc(n.x, n.y, rr, 0, Math.PI * 2);
        nctx.fill();
      }

      nctx.beginPath();
      nctx.arc(n.x, n.y, n.r * (0.8 + wave * 0.8), 0, Math.PI * 2);
      nctx.fillStyle = netColor(n, 0.55 + breathe * 0.45);
      nctx.fill();
    }

    nctx.globalCompositeOperation = "source-over";
  }

  /* ---------------------------------------------------------------- 流光层 */
  var flowLayer = document.createElement("div");
  flowLayer.className = "page-flow";
  flowLayer.setAttribute("aria-hidden", "true");
  var flowCanvas = document.createElement("canvas");
  flowLayer.appendChild(flowCanvas);
  document.body.insertBefore(flowLayer, document.body.firstChild);

  var fctx = flowCanvas.getContext("2d");
  if (!fctx) return;

  var COLORS = [
    { r: 139, g: 146, b: 255 },
    { r: 84, g: 210, b: 208 },
    { r: 233, g: 234, b: 255 }
  ];

  var beams = [];
  var rings = [];
  var targets = [];
  var R = 1;

  /* 两个终点：左右公司名称区域的中心 */
  function measureTargets() {
    var names = document.querySelectorAll(".gate-name");
    targets = [];
    for (var i = 0; i < names.length; i++) {
      var box = names[i].getBoundingClientRect();
      if (box.width < 1) continue;
      targets.push({ x: box.left + box.width / 2, y: box.top + box.height / 2, weight: 0 });
    }
    if (!targets.length) targets.push({ x: W / 2, y: H / 2, weight: 0 });
  }

  function spawnBeam(delay) {
    var tg = targets[Math.floor(Math.random() * targets.length)];
    var ang = rand(0, Math.PI * 2);
    var sx = tg.x + Math.cos(ang) * R * rand(0.62, 1.05);
    var sy = tg.y + Math.sin(ang) * R * rand(0.42, 0.82);
    sx = Math.max(-10, Math.min(W + 10, sx));
    sy = Math.max(-10, Math.min(H + 10, sy));

    /* 起点到终点的向量，法线方向做弧度弯折 */
    var dx = tg.x - sx;
    var dy = tg.y - sy;
    var len = Math.sqrt(dx * dx + dy * dy) || 1;
    var bend = rand(-1, 1) * rand(40, 130);

    beams.push({
      sx: sx, sy: sy,
      cx: (sx + tg.x) / 2 + (-dy / len) * bend,
      cy: (sy + tg.y) / 2 + (dx / len) * bend,
      tx: tg.x, ty: tg.y,
      t: -delay,
      dur: rand(2.4, 4.0),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      trail: [],
      head: rand(3.2, 5.4),
      alpha: rand(0.72, 1)
    });
  }

  /* 单次发射数量为首页方案的两倍 */
  function burst() {
    var n = 4 + Math.floor(Math.random() * 5);
    for (var i = 0; i < n; i++) spawnBeam(i * rand(0.05, 0.32));
  }

  function drawFlow(dt) {
    fctx.globalCompositeOperation = "source-over";
    fctx.clearRect(0, 0, W, H);
    fctx.globalCompositeOperation = "lighter";

    for (var i = rings.length - 1; i >= 0; i--) {
      var ring = rings[i];
      ring.t += dt;
      var rp = ring.t / ring.dur;
      if (rp >= 1) { rings.splice(i, 1); continue; }
      fctx.beginPath();
      fctx.arc(ring.x, ring.y, 6 + rp * 38, 0, Math.PI * 2);
      fctx.strokeStyle = "rgba(" + ring.color.r + "," + ring.color.g + "," + ring.color.b + "," + (0.45 * (1 - rp)) + ")";
      fctx.lineWidth = 1.2;
      fctx.stroke();
    }

    for (var b = beams.length - 1; b >= 0; b--) {
      var beam = beams[b];
      beam.t += dt;
      if (beam.t < 0) continue;

      var k = beam.t / beam.dur;
      if (k >= 1) {
        rings.push({ t: 0, dur: 0.7, color: beam.color, x: beam.tx, y: beam.ty });
        beams.splice(b, 1);
        continue;
      }

      var e = k * k * (2.4 - 1.4 * k);
      var x = (1 - e) * (1 - e) * beam.sx + 2 * (1 - e) * e * beam.cx + e * e * beam.tx;
      var y = (1 - e) * (1 - e) * beam.sy + 2 * (1 - e) * e * beam.cy + e * e * beam.ty;

      var tail = beam.trail[beam.trail.length - 1];
      if (!tail || Math.abs(x - tail.x) + Math.abs(y - tail.y) > 5) {
        beam.trail.push({ x: x, y: y });
        if (beam.trail.length > 28) beam.trail.shift();
      }

      for (var j = 0; j < beam.trail.length - 1; j++) {
        var p1 = beam.trail[j];
        var p2 = beam.trail[j + 1];
        var ta = beam.alpha * ((j + 1) / beam.trail.length) * 0.85;
        fctx.beginPath();
        fctx.moveTo(p1.x, p1.y);
        fctx.lineTo(p2.x, p2.y);
        fctx.strokeStyle = "rgba(" + beam.color.r + "," + beam.color.g + "," + beam.color.b + "," + ta + ")";
        fctx.lineWidth = 0.3 + (j / beam.trail.length) * 2.4;
        fctx.stroke();
      }

      var fade = k < 0.14 ? k / 0.14 : (k > 0.8 ? (1 - k) / 0.2 : 1);
      var hr = beam.head * 3.4;
      var grd = fctx.createRadialGradient(x, y, 0, x, y, hr);
      grd.addColorStop(0, "rgba(255,255,255," + (0.94 * beam.alpha * fade) + ")");
      grd.addColorStop(0.26, "rgba(" + beam.color.r + "," + beam.color.g + "," + beam.color.b + "," + (0.74 * beam.alpha * fade) + ")");
      grd.addColorStop(1, "rgba(" + beam.color.r + "," + beam.color.g + "," + beam.color.b + ",0)");
      fctx.fillStyle = grd;
      fctx.beginPath();
      fctx.arc(x, y, hr, 0, Math.PI * 2);
      fctx.fill();
    }
  }

  /* ---------------------------------------------------------------- 调度 */
  function resize() {
    W = Math.max(1, window.innerWidth);
    H = Math.max(1, window.innerHeight);

    netCanvas.width = Math.round(W * DPR);
    netCanvas.height = Math.round(H * DPR);
    netCanvas.style.width = W + "px";
    netCanvas.style.height = H + "px";
    nctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildNet();

    flowCanvas.width = Math.round(W * DPR);
    flowCanvas.height = Math.round(H * DPR);
    flowCanvas.style.width = W + "px";
    flowCanvas.style.height = H + "px";
    fctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    R = Math.sqrt(W * W + H * H) / 2;
    measureTargets();
  }

  var raf = 0, running = false, hidden = false, last = 0, nextBurst = 0;

  function loop(now) {
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (now > nextBurst) {
      burst();
      nextBurst = now + rand(620, 1400);
    }
    drawNet((now - t0) / 1000);
    drawFlow(dt);
    raf = requestAnimationFrame(loop);
  }

  function start() {
    if (running || hidden) return;
    running = true;
    last = performance.now();
    t0 = performance.now();
    nextBurst = performance.now() + 260;
    for (var i = 0; i < 6; i++) spawnBeam(i * 0.3);
    raf = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    beams.length = 0;
    rings.length = 0;
  }

  resize();

  var rz = 0;
  window.addEventListener("resize", function () {
    clearTimeout(rz);
    rz = setTimeout(function () { resize(); if (!running) start(); }, 180);
  }, { passive: true });

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.on = true;
  }, { passive: true });
  window.addEventListener("mouseout", function () { mouse.on = false; }, { passive: true });

  document.addEventListener("visibilitychange", function () {
    hidden = document.hidden;
    if (hidden) stop(); else start();
  });

  /* 字体加载会改变名称排版位置，测点前再校正一次 */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { measureTargets(); });
  }
  window.addEventListener("load", function () { measureTargets(); });

  start();
})();
