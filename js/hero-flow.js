/* ==========================================================================
   首屏流光：随机端点向中心汇聚的光束（独立 Canvas 2D 层）
   - 每 1.0–2.1 秒随机发射 2–4 束光，从画布四周端点沿弧形轨迹向中心汇聚
   - 到达中心时扩散一圈细光环；光束带拖尾与头部辉光
   - 尊重 prefers-reduced-motion；首屏离开视口时暂停
   ========================================================================== */
(function () {
  "use strict";

  var host = document.querySelector(".hero-home");
  if (!host || !window.requestAnimationFrame) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var canvas = document.createElement("canvas");
  canvas.className = "flow-canvas";
  canvas.setAttribute("aria-hidden", "true");
  host.appendChild(canvas);

  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W = 1, H = 1, CX = 0, CY = 0, R = 1;

  var COLORS = [
    { r: 139, g: 146, b: 255 },
    { r: 84, g: 210, b: 208 },
    { r: 233, g: 234, b: 255 }
  ];

  var beams = [];
  var rings = [];

  function rand(a, b) { return a + Math.random() * (b - a); }

  function resize() {
    var box = host.getBoundingClientRect();
    W = Math.max(1, Math.round(box.width));
    H = Math.max(1, Math.round(box.height));
    CX = W / 2;
    CY = H * 0.5;
    R = Math.sqrt(W * W + H * H) / 2;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  /* 从画布四周端点出发，沿二次曲线汇聚中心 */
  function spawnBeam(delay) {
    var ang = rand(0, Math.PI * 2);
    var sx = CX + Math.cos(ang) * R * rand(0.72, 1.02);
    var sy = CY + Math.sin(ang) * R * rand(0.45, 0.78);
    sx = Math.max(-10, Math.min(W + 10, sx));
    sy = Math.max(-10, Math.min(H + 10, sy));

    var mx = (sx + CX) / 2;
    var my = (sy + CY) / 2;
    var nx = CY - sy;
    var ny = CX - sx;
    var len = Math.sqrt(nx * nx + ny * ny) || 1;
    var bend = rand(-1, 1) * rand(40, 110);

    beams.push({
      sx: sx, sy: sy,
      cx: mx + (nx / len) * bend,
      cy: my + (ny / len) * bend,
      t: -delay,
      dur: rand(2.6, 4.2),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      trail: [],
      head: rand(3.2, 5.2),
      alpha: rand(0.7, 1)
    });
  }

  function burst() {
    var n = 2 + Math.floor(Math.random() * 3);
    for (var i = 0; i < n; i++) spawnBeam(i * rand(0.06, 0.4));
  }

  function draw(dt) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    for (var i = rings.length - 1; i >= 0; i--) {
      var ring = rings[i];
      ring.t += dt;
      var rp = ring.t / ring.dur;
      if (rp >= 1) { rings.splice(i, 1); continue; }
      ctx.beginPath();
      ctx.arc(CX, CY, 6 + rp * 34, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(" + ring.color.r + "," + ring.color.g + "," + ring.color.b + "," + (0.42 * (1 - rp)) + ")";
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    for (var b = beams.length - 1; b >= 0; b--) {
      var beam = beams[b];
      beam.t += dt;
      if (beam.t < 0) continue;

      var k = beam.t / beam.dur;
      if (k >= 1) {
        rings.push({ t: 0, dur: 0.6, color: beam.color });
        beams.splice(b, 1);
        continue;
      }

      var e = k * k * (2.4 - 1.4 * k);
      var x = (1 - e) * (1 - e) * beam.sx + 2 * (1 - e) * e * beam.cx + e * e * CX;
      var y = (1 - e) * (1 - e) * beam.sy + 2 * (1 - e) * e * beam.cy + e * e * CY;

      var tail = beam.trail[beam.trail.length - 1];
      if (!tail || Math.abs(x - tail.x) + Math.abs(y - tail.y) > 5) {
        beam.trail.push({ x: x, y: y });
        if (beam.trail.length > 26) beam.trail.shift();
      }

      for (var j = 0; j < beam.trail.length - 1; j++) {
        var p1 = beam.trail[j];
        var p2 = beam.trail[j + 1];
        var ta = beam.alpha * ((j + 1) / beam.trail.length) * 0.8;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = "rgba(" + beam.color.r + "," + beam.color.g + "," + beam.color.b + "," + ta + ")";
        ctx.lineWidth = 0.3 + (j / beam.trail.length) * 2.2;
        ctx.stroke();
      }

      var fade = k < 0.15 ? k / 0.15 : (k > 0.8 ? (1 - k) / 0.2 : 1);
      var hr = beam.head * 3.4;
      var grd = ctx.createRadialGradient(x, y, 0, x, y, hr);
      grd.addColorStop(0, "rgba(255,255,255," + (0.92 * beam.alpha * fade) + ")");
      grd.addColorStop(0.26, "rgba(" + beam.color.r + "," + beam.color.g + "," + beam.color.b + "," + (0.72 * beam.alpha * fade) + ")");
      grd.addColorStop(1, "rgba(" + beam.color.r + "," + beam.color.g + "," + beam.color.b + ",0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(x, y, hr, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  var raf = 0, last = 0, nextBurst = 0, paused = false;

  function frame(now) {
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (now > nextBurst) {
      burst();
      nextBurst = now + rand(650, 1500);
    }
    draw(dt);
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (raf || paused) return;
    resize();
    last = performance.now();
    nextBurst = performance.now() + 300;
    for (var i = 0; i < 3; i++) spawnBeam(i * 0.35);
    raf = requestAnimationFrame(frame);
  }

  function stop() {
    if (!raf) return;
    cancelAnimationFrame(raf);
    raf = 0;
    beams.length = 0;
    rings.length = 0;
    ctx.clearRect(0, 0, W, H);
  }

  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { if (raf) resize(); }, 180);
  }, { passive: true });

  if (window.IntersectionObserver) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { paused = false; start(); }
        else { paused = true; stop(); }
      });
    }, { threshold: 0.05 }).observe(host);
  } else {
    start();
  }
})();
