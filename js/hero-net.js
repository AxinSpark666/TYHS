/* ==========================================================================
   首页全页背景：自绘神经网络
   - 节点按簇分布（若干簇心缓慢漂移），簇内连线紧密、簇间少量长连接
   - 每个端点带呼吸灯：明暗 + 光晕随呼吸缩放
   - 鼠标靠近时节点轻微受吸引并额外连线
   - 尊重 prefers-reduced-motion（不创建）；标签页隐藏时暂停
   ========================================================================== */
(function () {
  "use strict";

  if (!document.querySelector(".hero-home")) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  if (!window.requestAnimationFrame) return;

  var layer = document.createElement("div");
  layer.className = "page-net";
  layer.setAttribute("aria-hidden", "true");
  var canvas = document.createElement("canvas");
  layer.appendChild(canvas);
  document.body.insertBefore(layer, document.body.firstChild);

  var ctx = canvas.getContext("2d");
  if (!ctx) return;

  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W = 1, H = 1, LINK = 160;
  var nodes = [];
  var clusters = [];
  var mouse = { x: -9999, y: -9999, on: false };
  var t0 = performance.now();

  function rand(a, b) { return a + Math.random() * (b - a); }

  /* 近似高斯：均值 0，把节点拢在簇心周围 */
  function gauss() {
    return (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
  }

  /* 稳定伪随机：同一对节点的长连接不会每帧闪断 */
  function hash2(i, j) {
    var h = ((i + 1) * 73856093) ^ ((j + 1) * 19349663);
    return ((h >>> 0) % 1000) / 1000;
  }

  function build() {
    /* 端点数量较上一版减少约 30% */
    var count = Math.round(((W * H) / 8600) * 0.7);
    count = Math.max(22, Math.min(140, count));

    /* 簇心按网格铺满全屏，保证整页都有神经簇，而不是几团孤立的线球 */
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
      /* 随机归属一个簇心，让节点铺满全屏而不是挤在中心 */
      var ci = Math.floor(Math.random() * clusters.length);
      var cl = clusters[ci];
      var ang = rand(0, Math.PI * 2);
      var dist = Math.abs(gauss()) * Math.min(W, H) * 0.26;
      var x = cl.x + Math.cos(ang) * dist;
      var y = cl.y + Math.sin(ang) * dist * 0.9;
      nodes.push({
        x: Math.min(W + 10, Math.max(-10, x)),
        y: Math.min(H + 10, Math.max(-10, y)),
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

  function resize() {
    W = Math.max(1, window.innerWidth);
    H = Math.max(1, window.innerHeight);
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    build();
  }

  function color(n, a) {
    return n.cyan ? "rgba(84,210,208," + a + ")" : "rgba(139,146,255," + a + ")";
  }

  function draw(now) {
    var time = (now - t0) / 1000;
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";

    var i, j, n, m, dx, dy, d, a, w, longLink;

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

      /* 轻微簇归属：缓慢被拉回簇心，形成神经簇的聚合感 */
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

    longLink = LINK * 1.8;

    /* 连线：簇内较亮，簇间少量长线 */
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

        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = color(n, a);
        ctx.lineWidth = w;
        ctx.stroke();
      }
    }

    /* 鼠标连线 */
    if (mouse.on) {
      for (i = 0; i < nodes.length; i++) {
        n = nodes[i];
        dx = mouse.x - n.x;
        dy = mouse.y - n.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = color(n, (1 - d / 150) * 0.3);
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    /* 端点：呼吸灯 */
    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      var wave = 0.5 + 0.5 * Math.sin(time * n.speed + n.phase);
      var breathe = 0.3 + wave * 0.7;

      if (n.glow) {
        var rr = n.r * (3.4 + wave * 2.8);
        var g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rr);
        g.addColorStop(0, color(n, 0.85 * breathe));
        g.addColorStop(0.45, color(n, 0.28 * breathe));
        g.addColorStop(1, color(n, 0));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, rr, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * (0.8 + wave * 0.8), 0, Math.PI * 2);
      ctx.fillStyle = color(n, 0.55 + breathe * 0.45);
      ctx.fill();
    }

    ctx.globalCompositeOperation = "source-over";
  }

  var raf = 0, running = false, hidden = false;

  function loop(now) {
    draw(now);
    raf = requestAnimationFrame(loop);
  }

  function start() {
    if (running || hidden) return;
    running = true;
    t0 = performance.now();
    raf = requestAnimationFrame(loop);
  }

  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  resize();

  var rz = 0;
  window.addEventListener("resize", function () {
    clearTimeout(rz);
    rz = setTimeout(resize, 180);
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

  start();
})();
