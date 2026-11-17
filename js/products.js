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
  if (Array.isArray(pair)) {
    var v = pair[pdLang() === "en" ? 1 : 0];
    return v == null ? pair[0] : v;
  }
  return pair;
}

/* ---------- 固定文案 ---------- */
var PDT = {
  sidebarTitle: ["產品分類", "Product Categories"],
  more: ["查看規格", "View specs"],
  modalKicker: ["產品參數", "Product Specifications"],
  modalNoteTitle: ["說明：", "Note: "],
  modalNote: [
    "以上為該型號的平台參考參數，不同品牌的散熱設計、出廠頻率與供電方案略有差異，實際以原廠規格與實物為準；供貨狀態與報價請聯絡業務確認。",
    "Specifications above are platform reference values for this model. Cooling design, factory clocks and power delivery vary by brand. Please refer to the manufacturer's specification and the actual product; contact our sales team for availability and pricing."
  ],
  emptyImg: ["圖片待補", "Image pending"],
  srcNote: [
    "以上參數取自品牌官方規格頁，僅供選型參考，實際以原廠公佈與出貨實物為準；供貨狀態與報價請聯絡業務確認。",
    "Specifications are taken from the brand's official specification page and are for reference only. The manufacturer's published data and the shipped product prevail; contact our sales team for availability and pricing."
  ],
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
  band: ["顯存帶寬", "Memory Bandwidth"],
  tops: ["AI 算力", "AI Performance"],
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

/* ---------- 原廠規格欄位雙語標籤 ---------- */
var PD_LABEL = {
  "model name": ["型號", "Model"],
  "型號": ["型號", "Model"],
  "繪圖引擎": ["繪圖核心", "GPU"],
  "繪圖核心": ["繪圖核心", "GPU"],
  "cores": ["CUDA 核心", "CUDA Cores"],
  "cuda® cores": ["CUDA 核心", "CUDA Cores"],
  "cuda core": ["CUDA 核心", "CUDA Cores"],
  "cuda 核心數": ["CUDA 核心", "CUDA Cores"],
  "memory": ["記憶體", "Memory"],
  "記憶體容量": ["記憶體容量", "Memory Size"],
  "記憶體規格": ["記憶體類型", "Memory Type"],
  "記憶體形式": ["記憶體", "Memory"],
  "記憶體介面": ["記憶體位寬", "Memory Bus"],
  "memory interface": ["記憶體位寬", "Memory Bus"],
  "記憶體速度": ["記憶體速度", "Memory Speed"],
  "memory speed": ["記憶體速度", "Memory Speed"],
  "記憶體時脈": ["記憶體速度", "Memory Speed"],
  "動態 / 核心時脈(mhz)": ["GPU 時脈", "GPU Clock"],
  "核心時脈": ["GPU 時脈", "GPU Clock"],
  "gpu 時脈": ["GPU 時脈", "GPU Clock"],
  "ai performance": ["AI 算力", "AI Performance"],
  "科技介面": ["匯流排介面", "Bus Interface"],
  "匯流排": ["匯流排介面", "Bus Interface"],
  "匯流排規格": ["匯流排介面", "Bus Standard"],
  "介面": ["輸出介面", "Interface"],
  "output": ["輸出介面", "Outputs"],
  "輸出": ["輸出介面", "Outputs"],
  "directx 支援版本": ["DirectX", "DirectX"],
  "directx 支援": ["DirectX", "DirectX"],
  "opengl 支援版本": ["OpenGL", "OpenGL"],
  "opengl 支援": ["OpenGL", "OpenGL"],
  "opengl": ["OpenGL", "OpenGL"],
  "hdcp 支援": ["HDCP", "HDCP"],
  "g-sync® technology": ["G-SYNC", "G-SYNC"],
  "最大螢幕輸出數量": ["多螢幕支援", "Multi-display"],
  "多螢幕支援": ["多螢幕支援", "Multi-display"],
  "最多可支援顯示器數量": ["多螢幕支援", "Multi-display"],
  "digital maximum resolution": ["最大解析度", "Max Resolution"],
  "最大數位解析度": ["最大解析度", "Max Resolution"],
  "解析度": ["最大解析度", "Resolution"],
  "nvlink/ crossfire support": ["GPU 互聯", "NVLink"],
  "nvlink/ crossfire 支援": ["GPU 互聯", "NVLink"],
  "功耗(w)": ["功耗", "Power"],
  "建議電源供應(w)": ["建議電源", "Recommended PSU"],
  "建議電源供應": ["建議電源", "Recommended PSU"],
  "建議電源供應器": ["建議電源", "Recommended PSU"],
  "recommended psu": ["建議電源", "Recommended PSU"],
  "psu": ["建議電源", "Recommended PSU"],
  "供電接口": ["供電接口", "Power Connectors"],
  "電源連接器": ["供電接口", "Power Connector"],
  "顯示卡尺寸(mm)": ["產品尺寸", "Dimensions"],
  "尺寸": ["產品尺寸", "Dimensions"],
  "產品尺寸": ["產品尺寸", "Dimensions"],
  "重量 (顯示卡 / 包裝盒)": ["重量", "Weight"],
  "slot": ["Slot 厚度", "Slot"],
  "sff ready": ["SFF Ready", "SFF Ready"],
  "aura sync": ["燈效同步", "AURA SYNC"],
  "配件": ["配件", "Accessories"],
  "package content": ["包裝內容", "Package Content"],
  "軟體": ["軟體", "Software"],
  "備註": ["備註", "Note"],
  "note": ["備註", "Note"],
  "pcb 規格": ["PCB 規格", "PCB Form"],
  "水管長度": ["水管長度", "Tube Length"],
  "radiator": ["冷排規格", "Radiator"],
  "fan": ["風扇", "Fan"],
  "box size": ["包裝尺寸", "Box Size"],
  "box weight": ["包裝重量", "Box Weight"],
  "system requirement": ["系統需求", "System Requirement"],
  "ac input": ["交流輸入", "AC Input"],
  "dc output": ["直流輸出", "DC Output"],
  "graphics card": ["顯示卡", "Graphics Card"]
};

function pdLabel(key) {
  var hit = PD_LABEL[String(key).toLowerCase()];
  return hit ? pdT(hit) : key;
}

/* ---------- 品牌名稱 ---------- */
var PDBRAND = {
  gigabyte: ["技嘉 GIGABYTE", "GIGABYTE"],
  asus: ["華碩 ASUS", "ASUS"],
  msi: ["微星 MSI", "MSI"],
  colorful: ["七彩虹 Colorful", "Colorful"],
  leadtek: ["麗臺 LeadTek", "Leadtek"],
  pny: ["PNY", "PNY"],
  nvidia: ["NVIDIA 原廠", "NVIDIA"],
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
        brief: ["48GB GDDR7 · 300W · 雙槽渦輪", "48GB GDDR7 · 300W · Dual-slot blower"],
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["cuda", "14,080"],
          ["tops", "2,142 AI TOPS"],
          ["vram", ["48GB GDDR7（ECC）", "48GB GDDR7 (ECC)"]],
          ["iface", "PCIe 5.0 x16"],
          ["power", "300W"],
          ["size", ["雙槽主動散熱（渦輪）", "Dual-slot active cooling (blower)"]],
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
        brief: ["84GB GDDR7 · 600W · 1398 GB/s", "84GB GDDR7 · 600W · 1398 GB/s"],
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["cuda", "21,760"],
          ["vram", ["84GB GDDR7（ECC）", "84GB GDDR7 (ECC)"]],
          ["band", "1,398 GB/s"],
          ["iface", "PCIe Gen 5 x16"],
          ["power", ["最高 600W", "Up to 600W"]],
          ["size", ["雙槽主動風冷（另有 RXM 液冷版）", "Dual-slot air cooling (RXM liquid-cooled available)"]],
          ["out", "4 × DisplayPort 2.1b"],
          ["use", ["大模型推理、代理式 AI、物理仿真、虛擬化多用戶工作站", "LLM inference, agentic AI, physical simulation, virtualized multi-user workstations"]]
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
        brief: ["96GB GDDR7 ECC · 300–600W · 工作站 / 伺服器 / Max-Q", "96GB GDDR7 ECC · 300–600W · Workstation / Server / Max-Q"],
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["cuda", "24,064"],
          ["tops", "4,000 AI TOPS"],
          ["vram", ["96GB GDDR7（ECC）", "96GB GDDR7 (ECC)"]],
          ["band", "1,792 GB/s"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "600W"],
          ["size", ["雙槽渦輪散熱（工作站版 / 伺服器版）", "Dual-slot blower (workstation / server edition)"]],
          ["out", ["4 × DisplayPort 2.1（工作站版）", "4 × DisplayPort 2.1 (workstation edition)"]],
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
        brief: ["8 × H100 80GB HBM3 · NVLink · 6U–8U 機型", "8 × H100 80GB HBM3 · NVLink · 6U–8U systems"],
        specs: [
          ["platform", ["NVIDIA HGX H100（8-GPU）", "NVIDIA HGX H100 (8-GPU)"]],
          ["gpu", ["8 × H100 SXM5 80GB HBM3", "8 × H100 SXM5 80GB HBM3"]],
          ["vramtotal", "640GB HBM3"],
          ["bw", ["約 3.35TB/s（單 GPU）", "~3.35TB/s per GPU"]],
          ["nvlink", "900GB/s"],
          ["cpu", ["2 × Intel Xeon / AMD EPYC（依整機配置）", "2 × Intel Xeon / AMD EPYC (per system)"]],
          ["mem", ["32 × DDR5 DIMM 插槽", "32 × DDR5 DIMM slots"]],
          ["net", ["InfiniBand NDR 400G / 以太網", "InfiniBand NDR 400G / Ethernet"]],
          ["chassis", ["6U / 8U 機架式（依機型）", "6U / 8U rack (per model)"]],
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
        brief: ["8 × H200 141GB HBM3e · 4.8TB/s · 5U–8U 機型", "8 × H200 141GB HBM3e · 4.8TB/s · 5U–8U systems"],
        specs: [
          ["platform", ["NVIDIA HGX H200（8-GPU）", "NVIDIA HGX H200 (8-GPU)"]],
          ["gpu", ["8 × H200 SXM 141GB HBM3e", "8 × H200 SXM 141GB HBM3e"]],
          ["vramtotal", "1,128GB HBM3e"],
          ["bw", ["4.8TB/s（單 GPU）", "4.8TB/s per GPU"]],
          ["nvlink", "900GB/s"],
          ["cpu", ["2 × Intel Xeon / AMD EPYC（依整機配置）", "2 × Intel Xeon / AMD EPYC (per system)"]],
          ["mem", ["32 × DDR5 DIMM 插槽", "32 × DDR5 DIMM slots"]],
          ["net", ["InfiniBand NDR 400G / 以太網", "InfiniBand NDR 400G / Ethernet"]],
          ["chassis", ["5U / 8U 機架式（依機型）", "5U / 8U rack (per model)"]],
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

/* ---------- 接入官網抓取的真實圖與規格 ---------- */
(function mergeRealData() {
  if (typeof PD_REAL === "undefined") return;
  var map = {
    "rtx-5060": "5060",
    "rtx-5060-ti": "5060Ti",
    "rtx-5070": "5070",
    "rtx-5070-ti": "5070Ti",
    "rtx-5080": "5080",
    "rtx-5090": "5090"
  };
  var order = ["msi", "gigabyte", "asus"];
  PRODUCTS.forEach(function (cat) {
    cat.models.forEach(function (model) {
      var series = map[model.id];
      var real = series && PD_REAL[series];
      if (!real) return;
      var list = [];
      order.forEach(function (b) {
        (real[b] || []).forEach(function (v) {
          list.push({ brand: b, name: v.n, img: v.img, url: v.u, spec: v.s });
        });
      });
      if (list.length) {
        /* 5090D / 5090D V2 為中國特供型號，本站不做 */
        if (model.id === "rtx-5090") {
          list = list.filter(function (v) {
            return !/5090\s*D(\s*v2)?\b/i.test(v.name);
          });
        }
        if (list.length) {
          model.real = list;
          model.brands = null;
        }
      }
    });
  });

  /* 高端算力卡（NVIDIA 原廠渲染圖） */
  if (typeof PD_COMPUTE !== "undefined") {
    PRODUCTS.forEach(function (cat) {
      cat.models.forEach(function (model) {
        var items = PD_COMPUTE[model.id];
        if (!items || !items.length) return;
        model.real = items.map(function (v) {
          return { brand: v.brand || "nvidia", name: v.name, img: v.img, url: v.url, chips: v.chips, spec: v.spec || null };
        });
        model.brands = null;
      });
    });
  }

  /* 算力伺服器（整機廠官方產品照） */
  if (typeof PD_SERVER !== "undefined") {
    PRODUCTS.forEach(function (cat) {
      cat.models.forEach(function (model) {
        var items = PD_SERVER[model.id];
        if (!items || !items.length) return;
        model.real = items.map(function (v) {
          return { brand: v.brand, name: v.name, img: v.img, url: v.url, chips: v.chips, spec: null };
        });
        model.brands = null;
      });
    });
  }
})();

/* 從原廠規格裡挑出用於卡片標籤的關鍵值 */
function realChips(v) {
  var s = v.spec || {};
  var out = [];
  var mem = s["MEMORY"] || s["記憶體形式"] || ((s["記憶體容量"] || "") + " " + (s["記憶體規格"] || ""));
  mem = String(mem).replace(/\s+/g, " ").trim();
  if (mem) out.push([mem]);
  out.push([/OC|SOC|超頻/i.test(v.name) ? "OC 超頻" : "標準時脈"]);
  var psu = s["建議電源供應(W)"] || s["建議電源供應"] || s["建議電源供應器"] || s["Recommended PSU"] || s["PSU"];
  if (psu) out.push(["PSU " + String(psu).replace(/\s+/g, " ").trim()]);
  return out;
}

/* ---------- 索引 ---------- */
var PD_INDEX = {};
(function buildIndex() {
  PRODUCTS.forEach(function (cat) {
    cat.models.forEach(function (model) {
      if (model.real) {
        model.real.forEach(function (v, i) {
          PD_INDEX[model.id + "-" + v.brand + "-" + i] = { cat: cat, model: model, variant: v };
        });
        return;
      }
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
  var modalNote = document.getElementById("pmodalNote");
  if (modalNote) modalNote.innerHTML = "<strong>" + escapeHtml(pdT(PDT.modalNoteTitle)) + "</strong>" + escapeHtml(pdT(PDT.modalNote));
  var closeBtn = document.querySelector(".pmodal-close");
  if (closeBtn) closeBtn.setAttribute("aria-label", pdT(PDT.close));

  var navHtml = "";
  var panelHtml = "";

  PRODUCTS.forEach(function (cat, ci) {
    var catName = pdT(cat.cat);

    /* 左側菜單 */
    navHtml += '<div class="pnav-group" data-cat="' + cat.id + '">';
    navHtml += '<button type="button" class="pnav-cat pnav-toggle" aria-expanded="false" aria-controls="pnav-' + cat.id + '">' +
      '<svg class="cat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>' +
      '<span class="pnav-cat-name">' + escapeHtml(catName) + "</span>" +
      '<span class="pnav-count">' + cat.models.length + "</span>" +
      '<svg class="pnav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
      "</button>";
    navHtml += '<div class="pnav-collapse" id="pnav-' + cat.id + '"><div class="pnav-collapse-inner"><div class="pnav-items">';
    cat.models.forEach(function (model) {
      navHtml += '<a href="#' + model.id + '" data-target="' + model.id + '">' + escapeHtml(model.name) + "</a>";
    });
    navHtml += "</div></div></div></div>";

    /* 右側面板 */
    panelHtml += '<section class="product-cat" id="cat-' + cat.id + '">';
    panelHtml += '<div class="product-cat-head">';
    panelHtml += '<span class="section-kicker">' + (ci + 1 < 10 ? "0" + (ci + 1) : ci + 1) + " / " + escapeHtml(cat.id.toUpperCase()) + "</span>";
    panelHtml += "<h2>" + escapeHtml(catName) + "</h2>";
    panelHtml += "<p>" + escapeHtml(pdT(cat.desc)) + "</p>";
    panelHtml += "</div>";

    cat.models.forEach(function (model) {
      var variants = model.real || model.brands || [];
      panelHtml += '<article class="model-block" id="' + model.id + '">';
      panelHtml += '<div class="model-head">';
      panelHtml += '<h3 class="model-name">' + escapeHtml(model.name) + "</h3>";
      panelHtml += '<span class="model-tag">' + escapeHtml(pdT(model.tag)) + "</span>";
      panelHtml += '<span class="model-sub">' + escapeHtml(pdT(model.brief)) + "</span>";
      if (model.real) {
        var cntLabel = pdLang() === "en" ? (variants.length === 1 ? "model" : "models") : "款";
        panelHtml += '<span class="model-count">' + variants.length + " " + escapeHtml(cntLabel) + "</span>";
      }
      panelHtml += "</div>";

      /* 多品牌時提供品牌篩選 */
      if (model.real && variants.length > 4) {
        var counts = {};
        variants.forEach(function (v) { counts[v.brand] = (counts[v.brand] || 0) + 1; });
        panelHtml += '<div class="brand-filter" role="group" aria-label="' + escapeHtml(pdT(["品牌篩選", "Filter by brand"])) + '">';
        panelHtml += '<button type="button" class="is-active" data-brand="all">' + escapeHtml(pdT(["全部", "All"])) + " <i>" + variants.length + "</i></button>";
        ["msi", "gigabyte", "asus"].forEach(function (b) {
          if (!counts[b]) return;
          panelHtml += '<button type="button" data-brand="' + b + '">' + escapeHtml(pdT(PDBRAND[b])) + " <i>" + counts[b] + "</i></button>";
        });
        panelHtml += "</div>";
      }

      panelHtml += '<div class="variant-grid">';

      variants.forEach(function (v, vi) {
        var pid = model.real ? model.id + "-" + v.brand + "-" + vi : model.id + "-" + v.brand;
        var path = model.real ? v.img : imgPath(cat.id, v.img);
        var alt = pdT(PDBRAND[v.brand]) + " " + v.name;
        panelHtml += '<button type="button" class="variant-card" data-pid="' + pid + '" data-brand="' + v.brand + '" aria-haspopup="dialog">';
        panelHtml += '<div class="variant-media" data-img="' + escapeHtml(path) + '" data-ph-label="' + escapeHtml(alt) + '"></div>';
        panelHtml += '<div class="variant-body">';
        panelHtml += '<span class="variant-brand">' + escapeHtml(pdT(PDBRAND[v.brand])) + "</span>";
        panelHtml += '<span class="variant-name">' + escapeHtml(String(v.name).replace(/[™®]/g, "")) + "</span>";
        var chips = model.real && !v.chips ? realChips(v) : v.chips;
        panelHtml += '<div class="variant-chips">';
        chips.forEach(function (c) {
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

  bindNavToggles(navBox);

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

  bindBrandFilters(panelBox);

  bindProductScrollSpy();
}

/* ---------- 品牌篩選 ---------- */
function bindBrandFilters(panelBox) {
  Array.prototype.forEach.call(panelBox.querySelectorAll(".brand-filter"), function (bar) {
    var grid = bar.parentNode.querySelector(".variant-grid");
    if (!grid) return;
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-brand]");
      if (!btn) return;
      var brand = btn.getAttribute("data-brand");
      Array.prototype.forEach.call(bar.querySelectorAll("button"), function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      Array.prototype.forEach.call(grid.querySelectorAll(".variant-card"), function (card) {
        var show = brand === "all" || card.getAttribute("data-brand") === brand;
        card.hidden = !show;
      });
    });
  });
}

/* ---------- 左側菜單：分類折疊 ---------- */
var PD_OPEN_GROUPS = {};

function setNavGroupOpen(group, open) {
  if (!group) return;
  var btn = group.querySelector(".pnav-toggle");
  var panel = group.querySelector(".pnav-collapse");
  if (!btn || !panel) return;
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  panel.classList.toggle("open", open);
  var cat = group.getAttribute("data-cat");
  if (cat) PD_OPEN_GROUPS[cat] = !!open;
}

function closeOtherGroups(navBox, keepGroup) {
  Array.prototype.forEach.call(navBox.querySelectorAll(".pnav-group"), function (g) {
    if (g !== keepGroup) setNavGroupOpen(g, false);
  });
}

function expandNavGroupByTarget(navBox, hash) {
  if (!navBox) return;
  hash = (hash || "").replace("#", "");
  if (!hash) return;
  var group = navBox.querySelector('.pnav-group[data-cat="' + hash.replace("cat-", "") + '"]');
  if (!group) {
    var link = navBox.querySelector('.pnav-items a[data-target="' + hash + '"]');
    if (link) group = link.closest(".pnav-group");
  }
  if (!group) return;
  closeOtherGroups(navBox, group);
  setNavGroupOpen(group, true);
}

function bindNavToggles(navBox) {
  Array.prototype.forEach.call(navBox.querySelectorAll(".pnav-toggle"), function (btn) {
    var group = btn.closest(".pnav-group");
    var cat = group.getAttribute("data-cat");
    /* 切換語言重繪時保留使用者的展開狀態 */
    if (PD_OPEN_GROUPS[cat]) setNavGroupOpen(group, true);
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") !== "true";
      /* 手風琴效果：展開一個分類時，收起其他已展開的分類 */
      if (open) closeOtherGroups(navBox, group);
      setNavGroupOpen(group, open);
    });
  });

  /* 由 URL hash 決定預設展開哪個分類（#cat-compute 或 #rtx-5090） */
  expandNavGroupByTarget(navBox, location.hash);
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

  if (variant.spec) {
    /* 支持兩種寫法：{ "KEY": "value" } 與 [["key", "value"], ...] */
    var pairs = Array.isArray(variant.spec)
      ? variant.spec
      : Object.keys(variant.spec).map(function (k) { return [k, variant.spec[k]]; });
    pairs.forEach(function (p) {
      var k = p[0], v = p[1];
      if (!v || !String(v).trim()) return;
      if (k === "MARKETING NAME") return;
      var label = SP[k] ? pdT(SP[k]) : pdLabel(k);
      rows += "<tr><th>" + escapeHtml(label) + "</th><td>" + escapeHtml(String(pdT(v)).replace(/\s+/g, " ").trim()) + "</td></tr>";
    });
  } else {
    model.specs.forEach(function (pair) {
      var label = SP[pair[0]] ? pdT(SP[pair[0]]) : pair[0];
      rows += "<tr><th>" + escapeHtml(label) + "</th><td>" + escapeHtml(pdT(pair[1])) + "</td></tr>";
    });
  }

  if (variant.url) {
    rows += "<tr><th>" + escapeHtml(pdT(["原廠頁面", "Official Page"])) + '</th><td><a class="spec-link" href="' +
      escapeHtml(variant.url) + '" target="_blank" rel="noopener">' + escapeHtml(pdT(["查看官網規格", "View official specs"])) + "</a></td></tr>";
  }
  return rows;
}

function openProductModal(pid) {
  var entry = PD_INDEX[pid];
  var modal = document.getElementById("pmodal");
  if (!entry || !modal) return;
  var cat = entry.cat, model = entry.model, v = entry.variant;
  var path = v.img && String(v.img).charAt(0) === "/" ? v.img : imgPath(cat.id, v.img);

  var kicker = document.getElementById("pmodalKicker");
  var title = document.getElementById("pmodalTitle");
  var brand = document.getElementById("pmodalBrand");
  var media = document.getElementById("pmodalMedia");
  var table = document.getElementById("pmodalTable");

  if (kicker) kicker.textContent = pdT(PDT.modalKicker) + " · " + pdT(cat.cat);
  if (title) title.textContent = String(v.name).replace(/[™®]/g, "");
  if (brand) brand.textContent = pdT(PDBRAND[v.brand]) + " · " + model.name;
  if (media) {
    mountProductImage(media, path, pdT(PDBRAND[v.brand]) + " " + v.name, false);
  }
  if (table) table.innerHTML = specRows(model, v);
  var note = document.getElementById("pmodalNote");
  if (note) {
    var noteText = (v.spec || v.url) ? pdT(PDT.srcNote) : pdT(PDT.modalNote);
    note.innerHTML = "<strong>" + escapeHtml(pdT(PDT.modalNoteTitle)) + "</strong>" + escapeHtml(noteText);
  }

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

  /* 同頁 hash 變更時同步展開對應分類 */
  window.addEventListener("hashchange", function () {
    expandNavGroupByTarget(document.getElementById("productNavGroups"), location.hash);
  });
});
