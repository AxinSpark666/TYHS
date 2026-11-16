/* ==========================================================================
   天元汇算 · 產品中心
   产品数据结构 + 左侧分类菜单 + 品牌图片矩阵 + 参数详情弹层
   图片占位路径统一为 /images/products/<分类>/<型号>-<品牌>.jpg
   ========================================================================== */

/* ---------- 双语小工具 ---------- */
function pdLang() {
  try {
    return localStorage.getItem("tyhs_lang") === "en" ? "en" : "zh";
  } catch (e) {
    return "zh";
  }
}
function pdT(pair) {
  if (Array.isArray(pair)) return pair[pdLang() === "en" ? 1 : 0];
  return pair;
}

/* ---------- 固定文案 ---------- */
var PDT = {
  sidebarTitle: ["產品分類", "Product Categories"],
  sidebarNote: ["點擊型號可快速跳轉；圖片與規格可點擊查看詳情。", "Click a model to jump; open a card for full specifications."],
  more: ["查看規格", "View specs"],
  modalKicker: ["產品參數", "Product Specifications"],
  modalNoteTitle: ["說明：", "Note: "],
  modalNote: [
    "以上為該型號的平台參考參數，不同品牌的散熱設計、出廠頻率與供電方案略有差異，實際以原廠規格與實物為準；供貨狀態與報價請聯絡業務確認。",
    "Specifications above are platform reference values for this model. Cooling design, factory clocks and power delivery vary by brand. Please refer to the manufacturer's specification and the actual product; contact our sales team for availability and pricing."
  ],
  emptyImg: ["圖片待補", "Image pending"],
  close: ["關閉", "Close"],
  uncategorized: ["其他", "Other"]
};

/* ---------- 參數標籤 ---------- */
var SP = {
  arch: ["核心架構", "Architecture"],
  cuda: ["CUDA 核心", "CUDA Cores"],
  vram: ["顯存", "Memory"],
  bus: ["顯存位寬", "Memory Bus"],
  iface: ["接口", "Interface"],
  power: ["功耗", "Power"],
  conn: ["供電接口", "Power Connector"],
  out: ["顯示輸出", "Display Outputs"],
  size: ["散熱 / 尺寸", "Cooling / Size"],
  use: ["適用場景", "Best For"],
  platform: ["平台", "Platform"],
  gpu: ["GPU 配置", "GPU Configuration"],
  vramtotal: ["顯存總量", "Total Memory"],
  bw: ["顯存帶寬", "Memory Bandwidth"],
  nvlink: ["GPU 互聯", "GPU Interconnect"],
  cpu: ["處理器", "CPU"],
  mem: ["記憶體插槽", "Memory Slots"],
  net: ["網絡", "Networking"],
  chassis: ["機箱規格", "Chassis"],
  cool: ["散熱方式", "Cooling"],
  brand: ["品牌", "Brand"],
  series: ["所屬系列", "Series"],
  status: ["供貨狀態", "Availability"]
};

/* ---------- 品牌名稱 ---------- */
var PDBRAND = {
  gigabyte: ["技嘉 GIGABYTE", "GIGABYTE"],
  asus: ["華碩 ASUS", "ASUS"],
  msi: ["微星 MSI", "MSI"],
  colorful: ["七彩虹 Colorful", "Colorful"],
  leadtek: ["麗臺 LeadTek", "Leadtek"],
  pny: ["PNY", "PNY"],
  nvidia: ["NVIDIA 公版 / HGX", "NVIDIA Founders / HGX"],
  dell: ["Dell", "Dell"],
  supermicro: ["Supermicro", "Supermicro"]
};

/* ---------- 產品資料 ---------- */
var PRODUCTS = [
  /* 1. 普通遊戲顯示卡 */
  {
    id: "gaming",
    cat: ["普通遊戲顯示卡", "Gaming Graphics Cards"],
    desc: [
      "面向主流遊戲與創作場景的 GeForce RTX 50 系列顯示卡，覆蓋 1080P 到 4K 解析度；同一型號提供多個品牌版本，散熱與出廠頻率可按需求選擇。",
      "GeForce RTX 50 series cards for mainstream gaming and content creation, covering 1080P to 4K. Each model is available in several brand versions with different cooling and factory clocks."
    ],
    models: [
      {
        id: "rtx-5060",
        name: "RTX 5060",
        tag: ["1080P 主流遊戲", "1080P Mainstream"],
        brief: "8GB GDDR7 · 128-bit · 145W",
        specs: [
          ["arch", "NVIDIA Blackwell（GB206）"],
          ["cuda", "3,840"],
          ["vram", "8GB GDDR7"],
          ["bus", "128-bit"],
          ["iface", "PCIe 5.0 x8"],
          ["power", "145W"],
          ["conn", "1 × 8-pin"],
          ["out", "3 × DisplayPort 2.1 + 1 × HDMI 2.1"],
          ["size", ["雙風扇 / 三風扇，約 2 槽", "Dual / triple fan, ~2 slots"]],
          ["use", ["1080P 高幀遊戲、輕量 AI 推理、入門工作站", "1080P high-frame gaming, light AI inference, entry workstation"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5060 EAGLE OC 8G", img: "rtx5060-gigabyte.jpg", chips: [["8GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5060 OC 8GB", img: "rtx5060-asus.jpg", chips: [["8GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5060 VENTUS 3X OC 8G", img: "rtx5060-msi.jpg", chips: [["8GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5060 Ultra W OC 8GB", img: "rtx5060-colorful.jpg", chips: [["8GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] }
        ]
      },
      {
        id: "rtx-5060-ti",
        name: "RTX 5060 Ti",
        tag: ["1080P / 2K 遊戲", "1080P / 2K Gaming"],
        brief: "8GB / 16GB GDDR7 · 128-bit · 180W",
        specs: [
          ["arch", "NVIDIA Blackwell（GB206）"],
          ["cuda", "4,608"],
          ["vram", "8GB / 16GB GDDR7"],
          ["bus", "128-bit"],
          ["iface", "PCIe 5.0 x8"],
          ["power", "180W"],
          ["conn", "1 × 8-pin"],
          ["out", "3 × DisplayPort 2.1 + 1 × HDMI 2.1"],
          ["size", ["雙風扇 / 三風扇，約 2–2.5 槽", "Dual / triple fan, ~2–2.5 slots"]],
          ["use", ["1080P / 2K 高幀遊戲、AI 推理、影片剪輯", "1080P / 2K gaming, AI inference, video editing"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5060 Ti GAMING OC 16G", img: "rtx5060ti-gigabyte.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5060 Ti OC 16GB", img: "rtx5060ti-asus.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5060 Ti GAMING TRIO OC 16G", img: "rtx5060ti-msi.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5060 Ti Ultra W OC 16GB", img: "rtx5060ti-colorful.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] }
        ]
      },
      {
        id: "rtx-5070",
        name: "RTX 5070",
        tag: ["2K 高幀遊戲", "2K High-Frame"],
        brief: "12GB GDDR7 · 192-bit · 250W",
        specs: [
          ["arch", "NVIDIA Blackwell（GB205）"],
          ["cuda", "6,144"],
          ["vram", "12GB GDDR7"],
          ["bus", "192-bit"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "250W"],
          ["conn", "12V-2x6 或 2 × 8-pin（依品牌）"],
          ["out", "3 × DisplayPort 2.1 + 1 × HDMI 2.1"],
          ["size", ["三風扇，約 2–3 槽", "Triple fan, ~2–3 slots"]],
          ["use", ["2K 高幀遊戲、AI 推理、3D 渲染", "2K gaming, AI inference, 3D rendering"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5070 GAMING OC 12G", img: "rtx5070-gigabyte.jpg", chips: [["12GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5070 OC 12GB", img: "rtx5070-asus.jpg", chips: [["12GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5070 GAMING TRIO OC 12G", img: "rtx5070-msi.jpg", chips: [["12GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5070 Ultra W OC 12GB", img: "rtx5070-colorful.jpg", chips: [["12GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] }
        ]
      },
      {
        id: "rtx-5070-ti",
        name: "RTX 5070 Ti",
        tag: ["2K / 4K 遊戲", "2K / 4K Gaming"],
        brief: "16GB GDDR7 · 256-bit · 300W",
        specs: [
          ["arch", "NVIDIA Blackwell（GB203）"],
          ["cuda", "8,960"],
          ["vram", "16GB GDDR7"],
          ["bus", "256-bit"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "300W"],
          ["conn", "12V-2x6 或 3 × 8-pin（依品牌）"],
          ["out", "3 × DisplayPort 2.1 + 1 × HDMI 2.1"],
          ["size", ["三風扇，約 3 槽", "Triple fan, ~3 slots"]],
          ["use", ["2K / 4K 遊戲、AI 微調與推理、專業渲染", "2K / 4K gaming, AI fine-tuning and inference, professional rendering"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5070 Ti GAMING OC 16G", img: "rtx5070ti-gigabyte.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5070 Ti OC 16GB", img: "rtx5070ti-asus.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5070 Ti GAMING TRIO OC 16G", img: "rtx5070ti-msi.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5070 Ti Vulcan OC 16GB", img: "rtx5070ti-colorful.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["旗艦散熱", "Flagship cooling"]] }
        ]
      },
      {
        id: "rtx-5080",
        name: "RTX 5080",
        tag: ["4K 遊戲 / 創作", "4K Gaming / Creation"],
        brief: "16GB GDDR7 · 256-bit · 360W",
        specs: [
          ["arch", "NVIDIA Blackwell（GB203）"],
          ["cuda", "10,752"],
          ["vram", "16GB GDDR7"],
          ["bus", "256-bit"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "360W"],
          ["conn", "12V-2x6"],
          ["out", "3 × DisplayPort 2.1 + 1 × HDMI 2.1"],
          ["size", ["三風扇，約 3–3.5 槽", "Triple fan, ~3–3.5 slots"]],
          ["use", ["4K 高幀遊戲、AI 訓練與推理、8K 影片與 3D 渲染", "4K gaming, AI training and inference, 8K video and 3D rendering"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5080 GAMING OC 16G", img: "rtx5080-gigabyte.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5080 OC 16GB", img: "rtx5080-asus.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5080 SUPRIM OC 16G", img: "rtx5080-msi.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["旗艦散熱", "Flagship cooling"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5080 Vulcan OC 16GB", img: "rtx5080-colorful.jpg", chips: [["16GB GDDR7"], ["三風扇", "Triple-fan"], ["旗艦散熱", "Flagship cooling"]] }
        ]
      }
    ]
  },

  /* 2. 高端算力顯示卡 */
  {
    id: "compute",
    cat: ["高端算力顯示卡", "High-End Compute GPUs"],
    desc: [
      "面向 AI 訓練推理、專業渲染與虛擬化工作站的高端顯示卡，包含旗艦級 GeForce RTX 5090 與 RTX PRO Blackwell 專業卡，可按算力規模與機箱散熱條件選配。",
      "High-end GPUs for AI training and inference, professional rendering and virtualized workstations, including the flagship GeForce RTX 5090 and RTX PRO Blackwell cards, selectable by compute scale and chassis cooling."
    ],
    models: [
      {
        id: "rtx-5090",
        name: "RTX 5090",
        tag: ["旗艦遊戲 / 算力", "Flagship Gaming / Compute"],
        brief: "32GB GDDR7 · 512-bit · 575W",
        specs: [
          ["arch", "NVIDIA Blackwell（GB202）"],
          ["cuda", "21,760"],
          ["vram", "32GB GDDR7"],
          ["bus", "512-bit"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "575W"],
          ["conn", "12V-2x6（建議 1000W 以上電源）"],
          ["out", "3 × DisplayPort 2.1 + 1 × HDMI 2.1"],
          ["size", ["三風扇 / 四風扇，約 3–4 槽", "Triple / quad fan, ~3–4 slots"]],
          ["use", ["4K / 8K 遊戲與創作、大模型推理、高負載渲染", "4K / 8K gaming and creation, LLM inference, heavy rendering"]]
        ],
        brands: [
          { brand: "gigabyte", name: "AORUS GeForce RTX 5090 MASTER 32G", img: "rtx5090-gigabyte.jpg", chips: [["32GB GDDR7"], ["四風扇", "Quad-fan"], ["旗艦散熱", "Flagship cooling"]] },
          { brand: "asus", name: "ROG Astral GeForce RTX 5090 OC 32GB", img: "rtx5090-asus.jpg", chips: [["32GB GDDR7"], ["四風扇", "Quad-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5090 SUPRIM SOC 32G", img: "rtx5090-msi.jpg", chips: [["32GB GDDR7"], ["三風扇", "Triple-fan"], ["旗艦散熱", "Flagship cooling"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5090 Vulcan OC 32GB", img: "rtx5090-colorful.jpg", chips: [["32GB GDDR7"], ["三風扇", "Triple-fan"], ["旗艦散熱", "Flagship cooling"]] }
        ]
      },
      {
        id: "rtx-pro-5000",
        name: "RTX PRO 5000",
        tag: ["專業工作站", "Professional Workstation"],
        brief: "48GB GDDR7 · 300W · 雙槽渦輪",
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["vram", "48GB GDDR7"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "300W"],
          ["size", ["雙槽渦輪散熱", "Dual-slot blower"]],
          ["out", "4 × DisplayPort 2.1"],
          ["use", ["AI 訓練與推理、CAD / 3D 渲染、數據可視化、多卡工作站", "AI training and inference, CAD / 3D rendering, visualization, multi-GPU workstations"]]
        ],
        brands: [
          { brand: "leadtek", name: "NVIDIA RTX PRO 5000 Blackwell 48G（麗臺代理）", img: "rtxpro5000-leadtek.jpg", chips: [["48GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] },
          { brand: "pny", name: "NVIDIA RTX PRO 5000 Blackwell 48GB", img: "rtxpro5000-pny.jpg", chips: [["48GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] },
          { brand: "gigabyte", name: "RTX PRO 5000 AI TOP 48G", img: "rtxpro5000-gigabyte.jpg", chips: [["48GB GDDR7"], ["渦輪散熱", "Blower"], ["多卡適配", "Multi-GPU ready"]] },
          { brand: "asus", name: "RTX PRO 5000 48G 渦輪版", img: "rtxpro5000-asus.jpg", chips: [["48GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] }
        ]
      },
      {
        id: "rtx-pro-5500",
        name: "RTX PRO 5500",
        tag: ["大顯存工作站", "Large-Memory Workstation"],
        brief: "48GB GDDR7 · 雙槽渦輪 · 多卡部署",
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["vram", ["48GB GDDR7（供貨版本依原廠配置）", "48GB GDDR7 (configuration per supply batch)"]],
          ["iface", "PCIe 5.0 x16"],
          ["power", ["300W 級（依品牌方案）", "300W class (varies by brand)"]],
          ["size", ["雙槽渦輪散熱", "Dual-slot blower"]],
          ["out", "4 × DisplayPort 2.1"],
          ["use", ["大模型推理、專業渲染、虛擬化多用戶工作站", "LLM inference, professional rendering, virtualized multi-user workstations"]]
        ],
        brands: [
          { brand: "leadtek", name: "NVIDIA RTX PRO 5500 Blackwell（麗臺代理）", img: "rtxpro5500-leadtek.jpg", chips: [["48GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] },
          { brand: "pny", name: "NVIDIA RTX PRO 5500 Blackwell", img: "rtxpro5500-pny.jpg", chips: [["48GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] },
          { brand: "gigabyte", name: "RTX PRO 5500 工作站版", img: "rtxpro5500-gigabyte.jpg", chips: [["48GB GDDR7"], ["渦輪散熱", "Blower"], ["多卡適配", "Multi-GPU ready"]] },
          { brand: "asus", name: "RTX PRO 5500 渦輪版", img: "rtxpro5500-asus.jpg", chips: [["48GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] }
        ]
      },
      {
        id: "rtx-pro-6000",
        name: "RTX PRO 6000",
        tag: ["超大顯存旗艦", "Ultra-Memory Flagship"],
        brief: "96GB GDDR7 · 600W · 雙槽渦輪",
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["vram", "96GB GDDR7"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "600W"],
          ["size", ["雙槽渦輪散熱（工作站版 / 伺服器版）", "Dual-slot blower (workstation / server edition)"]],
          ["out", "4 × DisplayPort 2.1（工作站版）"],
          ["use", ["超大模型訓練與推理、科學計算、影視級渲染", "Large-model training and inference, scientific computing, film-grade rendering"]]
        ],
        brands: [
          { brand: "leadtek", name: "NVIDIA RTX PRO 6000 Blackwell 96G（麗臺代理）", img: "rtxpro6000-leadtek.jpg", chips: [["96GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] },
          { brand: "pny", name: "NVIDIA RTX PRO 6000 Blackwell 96GB", img: "rtxpro6000-pny.jpg", chips: [["96GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] },
          { brand: "gigabyte", name: "RTX PRO 6000 AI TOP 96G", img: "rtxpro6000-gigabyte.jpg", chips: [["96GB GDDR7"], ["渦輪散熱", "Blower"], ["多卡適配", "Multi-GPU ready"]] },
          { brand: "asus", name: "RTX PRO 6000 96G 渦輪版", img: "rtxpro6000-asus.jpg", chips: [["96GB GDDR7"], ["雙槽渦輪", "Dual-slot blower"], ["專業驅動", "Pro drivers"]] }
        ]
      }
    ]
  },

  /* 3. 算力伺服器 */
  {
    id: "server",
    cat: ["算力伺服器", "AI Computing Servers"],
    desc: [
      "面向大模型訓練與高效能運算的 8-GPU 整機方案，提供 NVIDIA H100 / H200 平台與主流整機廠商機型，可依機房供電、散熱與網絡條件配置。",
      "8-GPU systems for large-model training and HPC, offering NVIDIA H100 / H200 platforms and mainstream system integrator models, configured to your power, cooling and networking conditions."
    ],
    models: [
      {
        id: "h100",
        name: "NVIDIA H100",
        tag: ["8-GPU 訓練平台", "8-GPU Training Platform"],
        brief: "8 × H100 80GB HBM3 · NVLink · 8U",
        specs: [
          ["platform", ["NVIDIA HGX H100（8-GPU）", "NVIDIA HGX H100 (8-GPU)"]],
          ["gpu", ["8 × H100 SXM5 80GB HBM3", "8 × H100 SXM5 80GB HBM3"]],
          ["vramtotal", "640GB HBM3"],
          ["bw", ["約 3.35TB/s（單 GPU）", "~3.35TB/s per GPU"]],
          ["nvlink", "900GB/s"],
          ["cpu", ["2 × Intel Xeon / AMD EPYC（依整機配置）", "2 × Intel Xeon / AMD EPYC (per system)"]],
          ["mem", ["32 × DDR5 DIMM 插槽", "32 × DDR5 DIMM slots"]],
          ["net", ["InfiniBand NDR 400G / 以太網", "InfiniBand NDR 400G / Ethernet"]],
          ["chassis", ["8U 機架式", "8U rack"]],
          ["power", ["約 10kW（滿載，依配置）", "~10kW at full load (per configuration)"]],
          ["cool", ["風冷 / 液冷（依機型）", "Air / liquid cooling (per model)"]],
          ["use", ["大模型預訓練與微調、科學計算、HPC 集群", "LLM pre-training and fine-tuning, scientific computing, HPC clusters"]]
        ],
        brands: [
          { brand: "nvidia", name: "HGX H100 8-GPU 參考平台", img: "h100-nvidia.jpg", chips: [["8 × H100 80GB"], ["NVLink 900GB/s"], ["8U", "8U"]] },
          { brand: "dell", name: "PowerEdge XE9680（8 × H100）", img: "h100-dell.jpg", chips: [["8 × H100 80GB"], ["8U", "8U"], ["整機交付", "Turnkey"]] },
          { brand: "supermicro", name: "SYS-821GE-TNHR（8 × H100）", img: "h100-supermicro.jpg", chips: [["8 × H100 80GB"], ["8U", "8U"], ["整機交付", "Turnkey"]] },
          { brand: "gigabyte", name: "G593-SD1（8 × H100）", img: "h100-gigabyte.jpg", chips: [["8 × H100 80GB"], ["8U", "8U"], ["整機交付", "Turnkey"]] }
        ]
      },
      {
        id: "h200",
        name: "NVIDIA H200",
        tag: ["大顯存推理旗艦", "Large-Memory Inference"],
        brief: "8 × H200 141GB HBM3e · 4.8TB/s · 8U",
        specs: [
          ["platform", ["NVIDIA HGX H200（8-GPU）", "NVIDIA HGX H200 (8-GPU)"]],
          ["gpu", ["8 × H200 SXM 141GB HBM3e", "8 × H200 SXM 141GB HBM3e"]],
          ["vramtotal", "1,128GB HBM3e"],
          ["bw", ["4.8TB/s（單 GPU）", "4.8TB/s per GPU"]],
          ["nvlink", "900GB/s"],
          ["cpu", ["2 × Intel Xeon / AMD EPYC（依整機配置）", "2 × Intel Xeon / AMD EPYC (per system)"]],
          ["mem", ["32 × DDR5 DIMM 插槽", "32 × DDR5 DIMM slots"]],
          ["net", ["InfiniBand NDR 400G / 以太網", "InfiniBand NDR 400G / Ethernet"]],
          ["chassis", ["8U 機架式", "8U rack"]],
          ["power", ["約 10kW（滿載，依配置）", "~10kW at full load (per configuration)"]],
          ["cool", ["風冷 / 液冷（依機型）", "Air / liquid cooling (per model)"]],
          ["use", ["大模型訓練、長上下文推理、HPC 與科學計算", "LLM training, long-context inference, HPC and scientific computing"]]
        ],
        brands: [
          { brand: "nvidia", name: "HGX H200 8-GPU 參考平台", img: "h200-nvidia.jpg", chips: [["8 × H200 141GB"], ["4.8TB/s"], ["8U", "8U"]] },
          { brand: "dell", name: "PowerEdge XE9680（8 × H200）", img: "h200-dell.jpg", chips: [["8 × H200 141GB"], ["8U", "8U"], ["整機交付", "Turnkey"]] },
          { brand: "supermicro", name: "SYS-821GE-TNHR（8 × H200）", img: "h200-supermicro.jpg", chips: [["8 × H200 141GB"], ["8U", "8U"], ["整機交付", "Turnkey"]] },
          { brand: "gigabyte", name: "G593-ZD1（8 × H200）", img: "h200-gigabyte.jpg", chips: [["8 × H200 141GB"], ["8U", "8U"], ["整機交付", "Turnkey"]] }
        ]
      }
    ]
  }
];

/* ---------- 索引 ---------- */
var PD_INDEX = {};
(function buildIndex() {
  PRODUCTS.forEach(function (cat) {
    cat.models.forEach(function (model) {
      model.brands.forEach(function (v) {
        PD_INDEX[model.id + "-" + v.brand] = { cat: cat, model: model, variant: v };
      });
    });
  });
})();

var PDIMG = "/images/products/";

function imgPath(catId, fileName) {
  if (catId === "server") return PDIMG + "server/" + fileName;
  return PDIMG + catId + "/" + fileName;
}

function escapeHtml(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function placeholderHtml(label, path) {
  return (
    '<div class="variant-ph">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' +
    "<strong>" + escapeHtml(label) + "</strong>" +
    "<span>" + escapeHtml(pdT(PDT.emptyImg)) + " · " + escapeHtml(path) + "</span>" +
    "</div>"
  );
}

/* 掛載產品圖：圖片缺失時自動替換為占位塊 */
function mountProductImage(container, path, label, lazy) {
  if (!container) return;
  container.innerHTML = "";
  var img = document.createElement("img");
  img.alt = label;
  if (lazy) img.loading = "lazy";
  img.onerror = function () {
    if (img.parentNode) img.parentNode.removeChild(img);
    if (container.querySelector(".variant-ph")) return;
    container.insertAdjacentHTML("beforeend", placeholderHtml(label, path));
  };
  img.src = path;
  container.appendChild(img);
}

/* ---------- 渲染 ---------- */
function renderProductPage() {
  var navBox = document.getElementById("productNavGroups");
  var panelBox = document.getElementById("productPanels");
  if (!navBox || !panelBox) return;

  /* 側欄 / 彈層的雙語靜態文案 */
  var titleEl = document.getElementById("pnavTitle");
  if (titleEl) titleEl.textContent = pdT(PDT.sidebarTitle);
  var noteEl = document.getElementById("pnavNote");
  if (noteEl) noteEl.textContent = pdT(PDT.sidebarNote);
  var modalNote = document.getElementById("pmodalNote");
  if (modalNote) modalNote.innerHTML = "<strong>" + escapeHtml(pdT(PDT.modalNoteTitle)) + "</strong>" + escapeHtml(pdT(PDT.modalNote));
  var closeBtn = document.querySelector(".pmodal-close");
  if (closeBtn) closeBtn.setAttribute("aria-label", pdT(PDT.close));

  var navHtml = "";
  var panelHtml = "";

  PRODUCTS.forEach(function (cat, ci) {
    var catName = pdT(cat.cat);

    /* 左側菜單 */
    navHtml += '<div class="pnav-group">';
    navHtml += '<a class="pnav-cat" href="#cat-' + cat.id + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>' +
      "<span>" + escapeHtml(catName) + "</span></a>";
    navHtml += '<div class="pnav-items">';
    cat.models.forEach(function (model) {
      navHtml += '<a href="#' + model.id + '" data-target="' + model.id + '">' + escapeHtml(model.name) + "</a>";
    });
    navHtml += "</div></div>";

    /* 右側面板 */
    panelHtml += '<section class="product-cat" id="cat-' + cat.id + '">';
    panelHtml += '<div class="product-cat-head">';
    panelHtml += '<span class="section-kicker">' + (ci + 1 < 10 ? "0" + (ci + 1) : ci + 1) + " / " + escapeHtml(cat.id.toUpperCase()) + "</span>";
    panelHtml += "<h2>" + escapeHtml(catName) + "</h2>";
    panelHtml += "<p>" + escapeHtml(pdT(cat.desc)) + "</p>";
    panelHtml += "</div>";

    cat.models.forEach(function (model) {
      panelHtml += '<article class="model-block" id="' + model.id + '">';
      panelHtml += '<div class="model-head">';
      panelHtml += '<h3 class="model-name">' + escapeHtml(model.name) + "</h3>";
      panelHtml += '<span class="model-tag">' + escapeHtml(pdT(model.tag)) + "</span>";
      panelHtml += '<span class="model-sub">' + escapeHtml(model.brief) + "</span>";
      panelHtml += "</div>";
      panelHtml += '<div class="variant-grid">';

      model.brands.forEach(function (v) {
        var pid = model.id + "-" + v.brand;
        var path = imgPath(cat.id, v.img);
        var alt = pdT(PDBRAND[v.brand]) + " " + v.name;
        panelHtml += '<button type="button" class="variant-card" data-pid="' + pid + '" aria-haspopup="dialog">';
        panelHtml += '<div class="variant-media" data-img="' + escapeHtml(path) + '" data-ph-label="' + escapeHtml(alt) + '"></div>';
        panelHtml += '<div class="variant-body">';
        panelHtml += '<span class="variant-brand">' + escapeHtml(pdT(PDBRAND[v.brand])) + "</span>";
        panelHtml += '<span class="variant-name">' + escapeHtml(v.name) + "</span>";
        panelHtml += '<div class="variant-chips">';
        v.chips.forEach(function (c) {
          panelHtml += '<span class="chip">' + escapeHtml(pdT(c)) + "</span>";
        });
        panelHtml += "</div>";
        panelHtml += '<span class="variant-more">' + escapeHtml(pdT(PDT.more)) +
          '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></span>';
        panelHtml += "</div></button>";
      });

      panelHtml += "</div></article>";
    });

    panelHtml += "</section>";
  });

  navBox.innerHTML = navHtml;
  panelBox.innerHTML = panelHtml;

  /* 圖片缺失時顯示占位塊，而不是裂圖 */
  Array.prototype.forEach.call(panelBox.querySelectorAll(".variant-media"), function (media) {
    mountProductImage(media, media.getAttribute("data-img"), media.getAttribute("data-ph-label"), true);
  });

  /* 打開參數詳情 */
  Array.prototype.forEach.call(panelBox.querySelectorAll(".variant-card"), function (card) {
    card.addEventListener("click", function () {
      openProductModal(card.getAttribute("data-pid"));
    });
  });

  bindProductScrollSpy();
}

/* ---------- 左側菜單跟隨捲動高亮 ---------- */
function bindProductScrollSpy() {
  var links = document.querySelectorAll(".pnav-items a");
  if (!links.length) return;

  var blocks = [];
  Array.prototype.forEach.call(links, function (a) {
    var el = document.getElementById(a.getAttribute("data-target"));
    if (el) blocks.push({ link: a, el: el });
  });

  function setActive(target) {
    Array.prototype.forEach.call(links, function (a) {
      a.classList.toggle("active", a.getAttribute("data-target") === target);
    });
  }

  function onScroll() {
    if (!blocks.length) return;
    var line = window.scrollY + 190;
    var current = blocks[0];
    blocks.forEach(function (b) {
      if (b.el.offsetTop <= line) current = b;
    });
    setActive(current.link.getAttribute("data-target"));
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- 參數詳情彈層 ---------- */
function specRows(model, variant) {
  var rows = "";
  rows += "<tr><th>" + escapeHtml(pdT(SP.brand)) + "</th><td>" + escapeHtml(pdT(PDBRAND[variant.brand])) + "</td></tr>";
  rows += "<tr><th>" + escapeHtml(pdT(SP.series)) + "</th><td>" + escapeHtml(model.name) + "</td></tr>";
  model.specs.forEach(function (pair) {
    var label = SP[pair[0]] ? pdT(SP[pair[0]]) : pair[0];
    rows += "<tr><th>" + escapeHtml(label) + "</th><td>" + escapeHtml(pdT(pair[1])) + "</td></tr>";
  });
  return rows;
}

function openProductModal(pid) {
  var entry = PD_INDEX[pid];
  var modal = document.getElementById("pmodal");
  if (!entry || !modal) return;
  var cat = entry.cat, model = entry.model, v = entry.variant;
  var path = imgPath(cat.id, v.img);

  var kicker = document.getElementById("pmodalKicker");
  var title = document.getElementById("pmodalTitle");
  var brand = document.getElementById("pmodalBrand");
  var media = document.getElementById("pmodalMedia");
  var table = document.getElementById("pmodalTable");

  if (kicker) kicker.textContent = pdT(PDT.modalKicker) + " · " + pdT(cat.cat);
  if (title) title.textContent = v.name;
  if (brand) brand.textContent = pdT(PDBRAND[v.brand]) + " · " + model.name;
  if (media) {
    mountProductImage(media, path, pdT(PDBRAND[v.brand]) + " " + v.name, false);
  }
  if (table) table.innerHTML = specRows(model, v);

  modal.classList.add("open");
  var closeBtn = modal.querySelector(".pmodal-close");
  if (closeBtn) closeBtn.focus();
}

function closeProductModal() {
  var modal = document.getElementById("pmodal");
  if (!modal) return;
  modal.classList.remove("open");
}

/* ---------- 初始化 ---------- */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof PRODUCTS === "undefined") return;
  renderProductPage();

  var modal = document.getElementById("pmodal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.classList.contains("pmodal-veil") || e.target.closest(".pmodal-close")) {
        closeProductModal();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) closeProductModal();
    });
  }

  /* 語言切換後重繪產品內容 */
  document.addEventListener("tyhs:langchange", function () {
    closeProductModal();
    renderProductPage();
  });
});
