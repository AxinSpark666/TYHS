/* ==========================================================================
   天元汇算 官方网站
   JS：语言切换（中文 / English）、移动端菜单、滚动效果
   主营：高端算力显卡、服务器内存条、高端算力服务器整机
   ========================================================================== */

/* ---------- 中英文文案字典 ---------- */
var I18N = {
  en: {
    /* Page titles */
    "t.index": "Home - Tianyuan AI Solution",
    "t.about": "About Us - Tianyuan AI Solution",
    "t.services": "Services - Tianyuan AI Solution",
    "t.contact": "Contact Us - Tianyuan AI Solution",

    /* Brand */
    "brand.name": "Tianyuan AI Solution",
    "brand.sub": "TIANYUAN AI SOLUTION",

    /* Nav */
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact Us",

    /* Home hero */
    "hero.kicker": "High-Performance Computing · Powering the Future",
    "hero.title": "Your Trusted High-End Computing Hardware Partner",
    "hero.sub": "Tianyuan AI Solution specializes in the sales and technical services of high-end computing GPU cards, server memory modules and computing servers, empowering your business with professionalism and integrity.",
    "hero.btn1": "Learn More",
    "hero.btn2": "Contact Us",

    /* Home intro */
    "intro.kicker": "About Us",
    "intro.title": "Built on Hardware, Driven by Customers",
    "intro.p1": "TIANYUAN AI COMPUTING SOLUTION CO., LIMITED focuses on high-end computing hardware products and technical services, covering high-end computing GPU cards, server memory modules and high-end computing servers with supporting technical support and solutions.",
    "intro.p2": "Our business covers the sales and technical services of high-performance computing GPU cards, server memory modules and computing servers, committed to delivering reliable, quality computing hardware and professional services for customers in AI, big data and high-performance computing scenarios.",
    "intro.pt1": "Genuine Products",
    "intro.pt2": "Stable Supply",
    "intro.pt3": "Customer First",
    "intro.pt4": "Integrity",
    "intro.link": "View Details",
    "intro.alt": "Team collaboration and computing dashboard",
    "front.alt": "AI computing network visual",

    /* Brand partners */
    "brands.kicker": "BRAND PARTNERS",
    "brands.title": "Brand Suppliers in Our Portfolio",
    "brands.sub": "We maintain stable supply cooperation with leading global computing hardware brands to ensure genuine products and reliable delivery.",
    "brands.note": "All brand trademarks belong to their respective owners.",

    /* Services block */
    "sv.kicker": "Our Services",
    "sv.title": "One-Stop Computing Hardware Supply",
    "sv.sub": "Focused on computing hardware needs, we provide full-process professional services covering selection, supply, deployment and after-sales support.",
    "sv1.t": "High-end GPU Cards",
    "sv1.d": "Sales of high-end computing GPU cards for AI training, deep learning inference and graphics rendering, with genuine products and stable supply.",
    "sv2.t": "Server Memory",
    "sv2.d": "Enterprise-grade server memory sales and adaptation services, including selection advice and compatibility verification for stable, efficient operation.",
    "sv3.t": "Computing Servers",
    "sv3.d": "Sales and custom configuration of high-end computing servers for compute-intensive scenarios such as AI training and HPC.",
    "sv4.t": "Computing Solutions",
    "sv4.d": "Hardware selection, configuration evaluation and overall solution design based on your application scenarios and budget.",
    "sv5.t": "Technical Support",
    "sv5.d": "Hardware installation, compatibility verification, after-sales support and maintenance to ensure stable long-term operation.",
    "sv6.t": "Expansion & Upgrade",
    "sv6.d": "Server computing expansion, hardware upgrades and component supply to continuously improve computing power at optimized cost.",

    /* Why choose us */
    "why.kicker": "Why Choose Us",
    "why.title": "Built on Quality, Driven by Service",
    "why1.t": "Professional Team",
    "why1.d": "A professional team familiar with computing hardware and technical solutions, providing reliable procurement and technical services.",
    "why2.t": "Quality Assurance",
    "why2.d": "Strict source quality control to ensure every hardware product is genuine, reliable and stable.",
    "why3.t": "Customer First",
    "why3.d": "Rapid response to customer needs with attentive service throughout selection, delivery and after-sales.",
    "why4.t": "Continuous Innovation",
    "why4.d": "Keeping pace with AI and computing technology trends, continuously improving product supply and service experience.",

    /* CTA */
    "cta.title": "Need Computing Hardware? Let's Talk",
    "cta.sub": "We will work with you to create value with professionalism and quality service.",
    "cta.btn": "Contact Now",

    /* Breadcrumb */
    "bc.home": "Home",
    "bc.about": "About Us",
    "bc.services": "Services",
    "bc.contact": "Contact Us",

    /* About page */
    "about.hero.kicker": "About Us",
    "about.hero.title": "Tianyuan AI Solution",
    "about.hero.sub": "Professional computing hardware supply, a partner you can trust",
    "about.profile.title": "Company Profile",
    "about.p1": "TIANYUAN AI COMPUTING SOLUTION CO., LIMITED (Hong Kong) focuses on high-end computing hardware and technical services, covering high-end computing GPU cards, server memory modules and computing servers. We provide genuine products, stable supply and after-sales support for AI training, deep learning and high-performance computing scenarios.",
    "about.p2": "Oriented by customer needs and backed by stable supply channels and a professional technical team, we provide quality computing hardware products and supporting technical services for customers in AI, big data and high-performance computing, earning trust and recognition in the market.",
    "about.p3": "Looking ahead, Tianyuan AI Solution will uphold the philosophy of \"Professionalism, Integrity, Innovation and Win-Win\", continue to broaden product supply capabilities and technical services, grow together with customers and partners, and contribute to the intelligent era.",
    "about.info.title": "Company Information",
    "info.group.hk": "Hong Kong Company",
    "info.name": "Company Name",
    "info.name.hk": "Hong Kong Company Name",
    "info.name.v.hk": "TIANYUAN AI COMPUTING SOLUTION CO., LIMITED",
    "info.hkaddr": "Hong Kong Address",
    "info.hkaddr.v": "Room 101A, 1/F, Tai Chung Industrial Building, 56 Hoi Yuen Road, Kwun Tong, Hong Kong",
    "info.email": "E-mail",
    "info.email.v": "info@tyhs.hk",
    "about.values.title": "Corporate Values",
    "v1.t": "Integrity",
    "v1.d": "Treat people with sincerity, build business on trust, and honor every commitment.",
    "v2.t": "Professionalism",
    "v2.d": "Deep expertise in computing hardware, serving every customer with professional capability.",
    "v3.t": "Innovation",
    "v3.d": "Embrace change and keep exploring better products and services.",
    "v4.t": "Win-Win",
    "v4.d": "Share growth value with customers and partners, moving forward together.",

    /* Services page */
    "svpage.hero.kicker": "Services",
    "svpage.hero.title": "One-Stop Computing Hardware Supply & Services",
    "svpage.hero.sub": "One-stop supply covering high-end computing hardware sales and technical services",
    "svpage.core.title": "Core Services",
    "svpage.core.sub": "Six core product and service directions built around enterprise computing needs.",
    "svpage.d1": "Sales of high-end computing GPU cards for AI training, deep learning inference and graphics rendering, covering mainstream brands and models with genuine products and stable supply, plus selection consulting and performance evaluation.",
    "svpage.d2": "Enterprise-grade server memory sales and adaptation services covering mainstream specifications, with compatibility verification and selection advice to keep servers stable and efficient under high load.",
    "svpage.d3": "Sales and configuration of high-end computing servers, with hardware solutions tailored to business scenarios for compute-intensive applications such as AI training and HPC, ready to use upon delivery.",
    "svpage.d4": "Hardware selection, configuration evaluation and overall solution design based on your application scenarios and budget, helping you get optimal computing power at reasonable cost with lower decision risk.",
    "svpage.d5": "Hardware installation, compatibility verification, after-sales support and maintenance with a rapid response mechanism, ensuring devices are stable from day one and reliable in the long run.",
    "svpage.d6": "Server computing expansion, hardware upgrades and component supply services to continuously improve computing power at optimized cost and extend equipment lifecycles.",
    "svpage.process.title": "Our Process",
    "svpage.process.sub": "A standardized process keeps every project clear, controllable and efficiently delivered.",
    "p1.t": "Requirement Communication",
    "p1.d": "Deeply understand your business and goals, clarify requirements and scope.",
    "p2.t": "Solution Design",
    "p2.d": "Develop technical solutions and implementation plans, confirm delivery standards.",
    "p3.t": "Implementation & Delivery",
    "p3.d": "Supply and deliver on schedule with quality control and progress tracking.",
    "p4.t": "Ongoing Support",
    "p4.d": "Post-delivery after-sales support and continuous optimization services.",

    /* Contact page */
    "ct.hero.kicker": "Contact Us",
    "ct.hero.title": "We Look Forward to Hearing From You",
    "ct.hero.sub": "For product inquiries, technical cooperation or commercial matters, we respond promptly",
    "ct.info.title": "Contact Information",
    "ct.email.t": "E-mail",
    "ct.email.lbl": "E-mail: ",
    "ct.email.v": "info@tyhs.hk",
    "ct.hkaddr.t": "Hong Kong Address",
    "ct.hkaddr.lbl": "Hong Kong Address: ",
    "ct.hkaddr.v": "Room 101A, 1/F, Tai Chung Industrial Building, 56 Hoi Yuen Road, Kwun Tong, Hong Kong",

    /* Footer */
    "footer.about": "Tianyuan AI Solution focuses on the sales and technical services of high-end computing GPU cards, server memory modules and computing servers. With professionalism, integrity and innovation, we are your trustworthy partner.",
    "footer.ql": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.email.lbl": "E-mail: ",
    "footer.addr.hk": "Hong Kong: ",
    "footer.rights": "© 2026 TIANYUAN AI COMPUTING SOLUTION CO., LIMITED. All Rights Reserved."
  },

  /* ---------- 繁體中文（香港用語） ---------- */
  hant: {
    /* 頁面標題 */
    "t.index": "首頁 - 天元匯算",
    "t.about": "關於我們 - 天元匯算",
    "t.services": "服務範圍 - 天元匯算",
    "t.contact": "聯絡我們 - 天元匯算",

    /* 品牌 */
    "brand.name": "天元匯算",
    "brand.sub": "TIANYUAN AI SOLUTION",

    /* 導航 */
    "nav.home": "首頁",
    "nav.about": "關於我們",
    "nav.services": "服務範圍",
    "nav.contact": "聯絡我們",

    /* 首頁橫幅 */
    "hero.kicker": "專業算力 · 匯算未來",
    "hero.title": "值得信賴的高端算力硬件供應夥伴",
    "hero.sub": "天元匯算專注高端算力顯示卡、伺服器記憶體與算力伺服器整機的銷售及技術服務，以專業與誠信助力企業智能化發展。",
    "hero.btn1": "了解更多",
    "hero.btn2": "聯絡我們",

    /* 首頁簡介 */
    "intro.kicker": "關於我們",
    "intro.title": "以硬件為基，以客戶為中心",
    "intro.p1": "天元匯算科技有限公司專注高端算力硬件產品與技術服務，涵蓋高端算力顯示卡、伺服器記憶體與高端算力伺服器整機，並提供配套技術支援與解決方案。",
    "intro.p2": "業務涵蓋高效能算力顯示卡、伺服器記憶體、算力伺服器整機的銷售與技術服務，致力為人工智能、大數據及高效能運算等場景客戶提供可靠優質的算力硬件與專業服務。",
    "intro.pt1": "正品保障",
    "intro.pt2": "貨源穩定",
    "intro.pt3": "客戶至上",
    "intro.pt4": "誠信經營",
    "intro.link": "查看詳情",
    "intro.alt": "團隊協作與算力數據看板",
    "front.alt": "智能算力網絡視覺",

    /* 品牌合作 */
    "brands.kicker": "品牌合作",
    "brands.title": "合作品牌供應商",
    "brands.sub": "與全球主流算力硬件品牌保持穩定供貨合作，確保產品正品與交付可靠。",
    "brands.note": "以上品牌商標歸各權利人所有。",

    /* 服務區塊 */
    "sv.kicker": "我們的服務",
    "sv.title": "一站式算力硬件供應",
    "sv.sub": "聚焦算力硬件需求，提供涵蓋選型、供應、部署與售後的全流程專業服務。",
    "sv1.t": "高端算力顯示卡",
    "sv1.d": "提供面向 AI 訓練、深度學習推理與圖形渲染等場景的高端算力顯示卡銷售服務，正品保障、貨源穩定。",
    "sv2.t": "伺服器記憶體",
    "sv2.d": "提供企業級伺服器記憶體的銷售與適配服務，支援選型建議與兼容性驗證，保障伺服器穩定高效運行。",
    "sv3.t": "算力伺服器整機",
    "sv3.d": "提供高端算力伺服器整機的銷售與定制配置，涵蓋 AI 訓練、高效能運算等算力密集型場景。",
    "sv4.t": "算力方案定制",
    "sv4.d": "根據客戶應用場景與預算，提供算力硬件選型、配置評估與整體方案設計服務。",
    "sv5.t": "技術支援服務",
    "sv5.d": "提供硬件安裝調試、兼容性驗證、售後技術支援與維保服務，確保設備穩定長期運行。",
    "sv6.t": "擴容與升級",
    "sv6.d": "提供伺服器算力擴容、硬件升級與配件供應服務，幫助客戶以更優成本持續提升算力。",

    /* 為何選擇我們 */
    "why.kicker": "為何選擇我們",
    "why.title": "以品質立身，以服務致遠",
    "why1.t": "專業團隊",
    "why1.d": "擁有熟悉算力硬件與技術方案的專業團隊，為客戶提供可靠的採購與技術服務。",
    "why2.t": "品質保障",
    "why2.d": "嚴格把控貨源品質，確保每一件硬件產品正品可靠、穩定運行。",
    "why3.t": "客戶至上",
    "why3.d": "快速響應客戶需求，提供選型、交付、售後的全程貼心服務。",
    "why4.t": "持續創新",
    "why4.d": "緊貼 AI 與算力技術前沿，持續優化產品供應與服務體驗。",

    /* CTA */
    "cta.title": "有採購需求？歡迎聯絡我們",
    "cta.sub": "我們將以專業的態度與優質的服務，與您攜手共創價值。",
    "cta.btn": "立即聯絡",

    /* 麵包屑 */
    "bc.home": "首頁",
    "bc.about": "關於我們",
    "bc.services": "服務範圍",
    "bc.contact": "聯絡我們",

    /* 關於頁 */
    "about.hero.kicker": "關於我們",
    "about.hero.title": "天元匯算",
    "about.hero.sub": "專業算力硬件供應，值得信賴的合作夥伴",
    "about.profile.title": "公司簡介",
    "about.p1": "天元匯算科技有限公司立足香港，專注高端算力硬件與技術服務，涵蓋高端算力顯示卡、伺服器記憶體與算力伺服器整機；我們提供正品保障、穩定貨源與售後支援，服務人工智能、大數據及高效能運算場景。",
    "about.p2": "公司以客戶需求為導向，依託穩定的貨源渠道與專業的技術團隊，為人工智能、大數據、高效能運算等領域的客戶提供優質算力硬件產品與配套技術服務，贏得了市場的信賴與認可。",
    "about.p3": "未來，天元匯算將繼續堅持「專業、誠信、創新、共贏」的經營理念，不斷拓寬產品供應能力與技術服務範圍，與客戶和合作夥伴共同成長，為智能時代貢獻科技力量。",
    "about.info.title": "公司基本資料",
    "info.group.hk": "香港公司",
    "info.name": "公司名稱",
    "info.name.hk": "香港公司名稱",
    "info.name.v.hk": "天元匯算科技有限公司（TIANYUAN AI COMPUTING SOLUTION CO., LIMITED）",
    "info.hkaddr": "香港地址",
    "info.hkaddr.v": "香港觀塘開源道56號大眾工業大廈1字樓101A室",
    "info.email": "企業電郵",
    "info.email.v": "info@tyhs.hk",
    "about.values.title": "企業價值觀",
    "v1.t": "誠信",
    "v1.d": "以誠待人，以信立業，堅守商業道德與承諾。",
    "v2.t": "專業",
    "v2.d": "深耕算力硬件領域，以專業能力服務每一位客戶。",
    "v3.t": "創新",
    "v3.d": "擁抱變化，持續探索更優的產品與服務。",
    "v4.t": "共贏",
    "v4.d": "與客戶、夥伴共享成長價值，攜手走向未來。",

    /* 服務頁 */
    "svpage.hero.kicker": "服務範圍",
    "svpage.hero.title": "一站式算力硬件供應與技術服務",
    "svpage.hero.sub": "涵蓋高端算力硬件銷售與技術服務的一站式供應",
    "svpage.core.title": "核心服務",
    "svpage.core.sub": "圍繞企業算力建設需求，提供六大核心產品與服務方向。",
    "svpage.d1": "面向 AI 訓練、深度學習推理與圖形渲染等應用場景，提供高端算力顯示卡的銷售服務，涵蓋主流品牌與型號，正品保障、貨源穩定，並支援選型諮詢與效能評估。",
    "svpage.d2": "提供企業級伺服器記憶體的銷售與適配服務，涵蓋主流規格型號，支援兼容性驗證與選型建議，保障伺服器在高負載下穩定高效運行。",
    "svpage.d3": "提供高端算力伺服器整機的銷售與配置服務，按業務場景定制硬件方案，涵蓋 AI 訓練、高效能運算等算力密集型應用，交付即可投入使用。",
    "svpage.d4": "根據客戶應用場景與預算，提供算力硬件選型、配置評估與整體方案設計，幫助客戶以合理成本獲得最優算力，降低採購決策風險。",
    "svpage.d5": "提供硬件的安裝調試、兼容性驗證、售後技術支援與維保服務，建立快速響應機制，確保設備上線即穩定、長期可運行。",
    "svpage.d6": "提供伺服器算力擴容、硬件升級與配件供應服務，幫助客戶以更優成本持續提升算力水平，延長設備使用週期。",
    "svpage.process.title": "服務流程",
    "svpage.process.sub": "標準化流程，讓每個項目清晰可控、高效交付。",
    "p1.t": "需求溝通",
    "p1.d": "深入了解客戶業務與目標，明確需求與範圍。",
    "p2.t": "方案設計",
    "p2.d": "制定技術方案與實施計劃，確認交付標準。",
    "p3.t": "實施交付",
    "p3.d": "按計劃供應交付，全程質量把控與進度同步。",
    "p4.t": "持續服務",
    "p4.d": "交付後提供售後支援與持續優化服務。",

    /* 聯絡頁 */
    "ct.hero.kicker": "聯絡我們",
    "ct.hero.title": "期待與您的溝通與合作",
    "ct.hero.sub": "無論是產品詢價、技術合作，還是商務往來，我們都將及時響應",
    "ct.info.title": "聯絡方式",
    "ct.email.t": "企業電郵",
    "ct.email.lbl": "企業電郵：",
    "ct.email.v": "info@tyhs.hk",
    "ct.hkaddr.t": "香港地址",
    "ct.hkaddr.lbl": "香港地址：",
    "ct.hkaddr.v": "香港觀塘開源道56號大眾工業大廈1字樓101A室",

    /* 頁腳 */
    "footer.about": "天元匯算，專注高端算力顯示卡、伺服器記憶體與算力伺服器整機的銷售及技術服務，以專業、誠信與創新，成為您值得信賴的合作夥伴。",
    "footer.ql": "快速連結",
    "footer.contact": "聯絡方式",
    "footer.email.lbl": "企業電郵：",
    "footer.addr.hk": "香港地址：",
    "footer.rights": "版權所有 © 2026 天元匯算科技有限公司（TIANYUAN AI COMPUTING SOLUTION CO., LIMITED）"
  }
};

/* ---------- 工具函数 ---------- */
function getStoredLang() {
  try {
    var saved = localStorage.getItem("tyhs_lang");
    if (saved === "en") return "en";
    return "hant";
  } catch (e) {
    return "hant";
  }
}

function applyLang(lang) {
  var dict = I18N[lang];
  if (!dict) return;

  var htmlLang = lang === "en" ? "en" : "zh-Hant";
  document.documentElement.setAttribute("lang", htmlLang);

  /* 文本节点 */
  var nodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-i18n");
    if (dict[key]) nodes[i].textContent = dict[key];
  }

  /* HTML 内容节点 */
  var htmls = document.querySelectorAll("[data-i18n-html]");
  for (var j = 0; j < htmls.length; j++) {
    var k2 = htmls[j].getAttribute("data-i18n-html");
    if (dict[k2]) htmls[j].innerHTML = dict[k2];
  }

  /* 占位符 */
  var phs = document.querySelectorAll("[data-i18n-ph]");
  for (var m = 0; m < phs.length; m++) {
    var k3 = phs[m].getAttribute("data-i18n-ph");
    if (dict[k3]) phs[m].setAttribute("placeholder", dict[k3]);
  }

  /* 图片 alt */
  var alts = document.querySelectorAll("[data-i18n-alt]");
  for (var p = 0; p < alts.length; p++) {
    var k4 = alts[p].getAttribute("data-i18n-alt");
    if (dict[k4]) alts[p].setAttribute("alt", dict[k4]);
  }

  /* 语言菜单高亮 + 当前语言显示 */
  var langItems = document.querySelectorAll(".lang-menu li");
  for (var n = 0; n < langItems.length; n++) {
    var lv = langItems[n].getAttribute("data-lang");
    langItems[n].classList.toggle("active", lv === lang);
    if (lv === lang) {
      var labelEl = document.getElementById("langLabel");
      if (labelEl) labelEl.textContent = langItems[n].getAttribute("data-label") || langItems[n].textContent;
    }
  }

  /* 页面标题 */
  var titleKey = document.body.getAttribute("data-title-key");
  if (titleKey && dict[titleKey]) document.title = dict[titleKey];

  try {
    localStorage.setItem("tyhs_lang", lang);
  } catch (e) {}
}

function switchLang(lang) {
  applyLang(lang);
  document.documentElement.style.transition = "opacity .25s";
}

/* ---------- 初始化 ---------- */
document.addEventListener("DOMContentLoaded", function () {
  /* 语言 */
  applyLang(getStoredLang());

  /* 语言下拉菜单 */
  var langSelect = document.getElementById("langSelect");
  var langCurrent = document.getElementById("langCurrent");
  var langOpts = document.querySelectorAll(".lang-menu li");
  if (langSelect && langCurrent) {
    var closeLangMenu = function () {
      langSelect.classList.remove("open");
      langCurrent.setAttribute("aria-expanded", "false");
    };
    langCurrent.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = langSelect.classList.toggle("open");
      langCurrent.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    for (var o = 0; o < langOpts.length; o++) {
      langOpts[o].addEventListener("click", function () {
        switchLang(this.getAttribute("data-lang"));
        closeLangMenu();
      });
    }
    document.addEventListener("click", function (e) {
      if (!langSelect.contains(e.target)) closeLangMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLangMenu();
    });
  }

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

  /* 当前页高亮 */
  var path = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".main-nav a");
  for (var a = 0; a < navLinks.length; a++) {
    var href = navLinks[a].getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
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

  /* 滚动入场（ScrollReveal；库未加载时不隐藏任何内容） */
  if (window.ScrollReveal && !prefersReducedMotion) {
    var sr = ScrollReveal({
      duration: 720,
      distance: "26px",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      opacity: 0,
      reset: false
    });
    sr.reveal(".reveal", { interval: 60 });
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

  /* 首页封面：3D 跟随倾斜（仅桌面端启用；移动端与减弱动效时静态展示） */
  var heroTilt = document.getElementById("heroTilt");
  var desktopWide =
    window.matchMedia && window.matchMedia("(min-width: 1024px)").matches;
  if (heroTilt && window.Atropos && !prefersReducedMotion && desktopWide) {
    new Atropos({
      el: heroTilt,
      rotateXMax: 8,
      rotateYMax: 10,
      shadow: false,
      highlight: false,
      activeOffset: 40,
      duration: 250
    });
  }

  /* 首屏氛围背景：克制的网络粒子；减弱动效/库缺失时保持静态深色 */
  var heroBg = document.querySelector(".hero-home");
  if (heroBg && window.VANTA && window.THREE && !prefersReducedMotion) {
    try {
      var net = window.VANTA.NET({
        el: heroBg,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 0,
        minWidth: 0,
        color: 0x4da69a,
        color2: 0x2f6f8f,
        backgroundColor: 0x0b1626,
        points: 11,
        maxDistance: 19,
        spacing: 14
      });
      if (net && "IntersectionObserver" in window) {
        var heroIo = new IntersectionObserver(function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) { if (net.resume) net.resume(); }
            else { if (net.pause) net.pause(); }
          });
        }, { threshold: 0.04 });
        heroIo.observe(heroBg);
      }
    } catch (bgErr) {
      /* 渲染失败时沿用深色渐变静态背景 */
    }
  }

});
