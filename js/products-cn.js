/* ==========================================================================
   天元汇算 · 产品中心
   产品数据结构 + 左侧分类菜单 + 品牌图片矩阵 + 参数详情弹层
   图片占位路径统一为 /images/products/<分类>/<型号>-<品牌>.jpg
   ========================================================================== */

/* ---------- 双语小工具（简体站固定中文） ---------- */
function pdLang() {
  return "zh";
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
  sidebarTitle: ["产品分类", "Product Categories"],
  more: ["查看规格", "View specs"],
  modalKicker: ["产品参数", "Product Specifications"],
  modalNoteTitle: ["说明：", "Note: "],
  modalNote: [
    "以上为该型号的平台参考参数，不同品牌的散热设计、出厂频率与供电方案略有差异，实际以原厂规格与实物为准；供货状态与报价请联络业务确认。",
    "Specifications above are platform reference values for this model. Cooling design, factory clocks and power delivery vary by brand. Please refer to the manufacturer's specification and the actual product; contact our sales team for availability and pricing."
  ],
  emptyImg: ["图片待补", "Image pending"],
  srcNote: [
    "以上参数取自品牌官方规格页，仅供选型参考，实际以原厂公布与出货实物为准；供货状态与报价请联络业务确认。",
    "Specifications are taken from the brand's official specification page and are for reference only. The manufacturer's published data and the shipped product prevail; contact our sales team for availability and pricing."
  ],
  close: ["关闭", "Close"],
  uncategorized: ["其他", "Other"]
};

/* ---------- 参数标签 ---------- */
var SP = {
  arch: ["核心架构", "Architecture"],
  cuda: ["CUDA 核心", "CUDA Cores"],
  vram: ["显存", "Memory"],
  bus: ["显存位宽", "Memory Bus"],
  iface: ["接口", "Interface"],
  power: ["功耗", "Power"],
  conn: ["供电接口", "Power Connector"],
  out: ["显示输出", "Display Outputs"],
  size: ["散热 / 尺寸", "Cooling / Size"],
  use: ["适用场景", "Best For"],
  platform: ["平台", "Platform"],
  gpu: ["GPU 配置", "GPU Configuration"],
  vramtotal: ["显存总量", "Total Memory"],
  bw: ["显存带宽", "Memory Bandwidth"],
  band: ["显存带宽", "Memory Bandwidth"],
  tops: ["AI 算力", "AI Performance"],
  nvlink: ["GPU 互联", "GPU Interconnect"],
  cpu: ["处理器", "CPU"],
  mem: ["内存插槽", "Memory Slots"],
  net: ["网络", "Networking"],
  chassis: ["机箱规格", "Chassis"],
  cool: ["散热方式", "Cooling"],
  brand: ["品牌", "Brand"],
  series: ["所属系列", "Series"],
  status: ["供货状态", "Availability"]
};

/* ---------- 原厂规格字段双语标签 ---------- */
var PD_LABEL = {
  "model name": ["型号", "Model"],
  "型号": ["型号", "Model"],
  "绘图引擎": ["绘图核心", "GPU"],
  "绘图核心": ["绘图核心", "GPU"],
  "cores": ["CUDA 核心", "CUDA Cores"],
  "cuda® cores": ["CUDA 核心", "CUDA Cores"],
  "cuda core": ["CUDA 核心", "CUDA Cores"],
  "cuda 核心数": ["CUDA 核心", "CUDA Cores"],
  "memory": ["内存", "Memory"],
  "内存容量": ["内存容量", "Memory Size"],
  "内存规格": ["内存类型", "Memory Type"],
  "内存形式": ["内存", "Memory"],
  "内存界面": ["内存位宽", "Memory Bus"],
  "memory interface": ["内存位宽", "Memory Bus"],
  "内存速度": ["内存速度", "Memory Speed"],
  "memory speed": ["内存速度", "Memory Speed"],
  "内存时脉": ["内存速度", "Memory Speed"],
  "动态 / 核心时脉(mhz)": ["GPU 时脉", "GPU Clock"],
  "核心时脉": ["GPU 时脉", "GPU Clock"],
  "gpu 时脉": ["GPU 时脉", "GPU Clock"],
  "ai performance": ["AI 算力", "AI Performance"],
  "科技界面": ["总线界面", "Bus Interface"],
  "总线": ["总线界面", "Bus Interface"],
  "总线规格": ["总线界面", "Bus Standard"],
  "界面": ["输出界面", "Interface"],
  "output": ["输出界面", "Outputs"],
  "输出": ["输出界面", "Outputs"],
  "directx 支援版本": ["DirectX", "DirectX"],
  "directx 支援": ["DirectX", "DirectX"],
  "opengl 支援版本": ["OpenGL", "OpenGL"],
  "opengl 支援": ["OpenGL", "OpenGL"],
  "opengl": ["OpenGL", "OpenGL"],
  "hdcp 支援": ["HDCP", "HDCP"],
  "g-sync® technology": ["G-SYNC", "G-SYNC"],
  "最大萤幕输出数量": ["多萤幕支援", "Multi-display"],
  "多萤幕支援": ["多萤幕支援", "Multi-display"],
  "最多可支援显示器数量": ["多萤幕支援", "Multi-display"],
  "digital maximum resolution": ["最大分辨率", "Max Resolution"],
  "最大数位分辨率": ["最大分辨率", "Max Resolution"],
  "分辨率": ["最大分辨率", "Resolution"],
  "nvlink/ crossfire support": ["GPU 互联", "NVLink"],
  "nvlink/ crossfire 支援": ["GPU 互联", "NVLink"],
  "功耗(w)": ["功耗", "Power"],
  "建议电源供应(w)": ["建议电源", "Recommended PSU"],
  "建议电源供应": ["建议电源", "Recommended PSU"],
  "建议电源供应器": ["建议电源", "Recommended PSU"],
  "recommended psu": ["建议电源", "Recommended PSU"],
  "psu": ["建议电源", "Recommended PSU"],
  "供电接口": ["供电接口", "Power Connectors"],
  "电源连接器": ["供电接口", "Power Connector"],
  "显卡尺寸(mm)": ["产品尺寸", "Dimensions"],
  "尺寸": ["产品尺寸", "Dimensions"],
  "产品尺寸": ["产品尺寸", "Dimensions"],
  "重量 (显卡 / 包装盒)": ["重量", "Weight"],
  "slot": ["Slot 厚度", "Slot"],
  "sff ready": ["SFF Ready", "SFF Ready"],
  "aura sync": ["灯效同步", "AURA SYNC"],
  "配件": ["配件", "Accessories"],
  "package content": ["包装内容", "Package Content"],
  "软件": ["软件", "Software"],
  "备注": ["备注", "Note"],
  "note": ["备注", "Note"],
  "pcb 规格": ["PCB 规格", "PCB Form"],
  "水管长度": ["水管长度", "Tube Length"],
  "radiator": ["冷排规格", "Radiator"],
  "fan": ["风扇", "Fan"],
  "box size": ["包装尺寸", "Box Size"],
  "box weight": ["包装重量", "Box Weight"],
  "system requirement": ["系统需求", "System Requirement"],
  "ac input": ["交流输入", "AC Input"],
  "dc output": ["直流输出", "DC Output"],
  "graphics card": ["显卡", "Graphics Card"]
};

function pdLabel(key) {
  var hit = PD_LABEL[String(key).toLowerCase()];
  return hit ? pdT(hit) : key;
}

/* ---------- 品牌名称 ---------- */
var PDBRAND = {
  gigabyte: ["技嘉 GIGABYTE", "GIGABYTE"],
  asus: ["华硕 ASUS", "ASUS"],
  msi: ["微星 MSI", "MSI"],
  colorful: ["七彩虹 Colorful", "Colorful"],
  leadtek: ["丽台 LeadTek", "Leadtek"],
  pny: ["PNY", "PNY"],
  nvidia: ["NVIDIA 原厂", "NVIDIA"],
  dell: ["Dell", "Dell"],
  supermicro: ["Supermicro", "Supermicro"]
};

/* ---------- 产品资料 ---------- */
var PRODUCTS = [
  /* 1. 普通游戏显卡 */
  {
    id: "gaming",
    cat: ["普通游戏显卡", "Gaming Graphics Cards"],
    desc: [
      "面向主流游戏与创作场景的 GeForce RTX 50 系列显卡，覆盖 1080P 到 4K 分辨率；同一型号提供多个品牌版本，散热与出厂频率可按需求选择。",
      "GeForce RTX 50 series cards for mainstream gaming and content creation, covering 1080P to 4K. Each model is available in several brand versions with different cooling and factory clocks."
    ],
    models: [
      {
        id: "rtx-5060",
        name: "RTX 5060",
        tag: ["1080P 主流游戏", "1080P Mainstream"],
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
          ["size", ["双风扇 / 三风扇，约 2 槽", "Dual / triple fan, ~2 slots"]],
          ["use", ["1080P 高帧游戏、轻量 AI 推理、入门工作站", "1080P high-frame gaming, light AI inference, entry workstation"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5060 EAGLE OC 8G", img: "rtx5060-gigabyte.jpg", chips: [["8GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5060 OC 8GB", img: "rtx5060-asus.jpg", chips: [["8GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5060 VENTUS 3X OC 8G", img: "rtx5060-msi.jpg", chips: [["8GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5060 Ultra W OC 8GB", img: "rtx5060-colorful.jpg", chips: [["8GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] }
        ]
      },
      {
        id: "rtx-5060-ti",
        name: "RTX 5060 Ti",
        tag: ["1080P / 2K 游戏", "1080P / 2K Gaming"],
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
          ["size", ["双风扇 / 三风扇，约 2–2.5 槽", "Dual / triple fan, ~2–2.5 slots"]],
          ["use", ["1080P / 2K 高帧游戏、AI 推理、影片剪辑", "1080P / 2K gaming, AI inference, video editing"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5060 Ti GAMING OC 16G", img: "rtx5060ti-gigabyte.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5060 Ti OC 16GB", img: "rtx5060ti-asus.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5060 Ti GAMING TRIO OC 16G", img: "rtx5060ti-msi.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5060 Ti Ultra W OC 16GB", img: "rtx5060ti-colorful.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] }
        ]
      },
      {
        id: "rtx-5070",
        name: "RTX 5070",
        tag: ["2K 高帧游戏", "2K High-Frame"],
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
          ["size", ["三风扇，约 2–3 槽", "Triple fan, ~2–3 slots"]],
          ["use", ["2K 高帧游戏、AI 推理、3D 渲染", "2K gaming, AI inference, 3D rendering"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5070 GAMING OC 12G", img: "rtx5070-gigabyte.jpg", chips: [["12GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5070 OC 12GB", img: "rtx5070-asus.jpg", chips: [["12GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5070 GAMING TRIO OC 12G", img: "rtx5070-msi.jpg", chips: [["12GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5070 Ultra W OC 12GB", img: "rtx5070-colorful.jpg", chips: [["12GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] }
        ]
      },
      {
        id: "rtx-5070-ti",
        name: "RTX 5070 Ti",
        tag: ["2K / 4K 游戏", "2K / 4K Gaming"],
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
          ["size", ["三风扇，约 3 槽", "Triple fan, ~3 slots"]],
          ["use", ["2K / 4K 游戏、AI 微调与推理、专业渲染", "2K / 4K gaming, AI fine-tuning and inference, professional rendering"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5070 Ti GAMING OC 16G", img: "rtx5070ti-gigabyte.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5070 Ti OC 16GB", img: "rtx5070ti-asus.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5070 Ti GAMING TRIO OC 16G", img: "rtx5070ti-msi.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5070 Ti Vulcan OC 16GB", img: "rtx5070ti-colorful.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["旗舰散热", "Flagship cooling"]] }
        ]
      },
      {
        id: "rtx-5080",
        name: "RTX 5080",
        tag: ["4K 游戏 / 创作", "4K Gaming / Creation"],
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
          ["size", ["三风扇，约 3–3.5 槽", "Triple fan, ~3–3.5 slots"]],
          ["use", ["4K 高帧游戏、AI 训练与推理、8K 影片与 3D 渲染", "4K gaming, AI training and inference, 8K video and 3D rendering"]]
        ],
        brands: [
          { brand: "gigabyte", name: "GeForce RTX 5080 GAMING OC 16G", img: "rtx5080-gigabyte.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "asus", name: "TUF Gaming GeForce RTX 5080 OC 16GB", img: "rtx5080-asus.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5080 SUPRIM OC 16G", img: "rtx5080-msi.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["旗舰散热", "Flagship cooling"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5080 Vulcan OC 16GB", img: "rtx5080-colorful.jpg", chips: [["16GB GDDR7"], ["三风扇", "Triple-fan"], ["旗舰散热", "Flagship cooling"]] }
        ]
      }
    ]
  },

  /* 2. 高端算力显卡 */
  {
    id: "compute",
    cat: ["高端算力显卡", "High-End Compute GPUs"],
    desc: [
      "面向 AI 训练推理、专业渲染与虚拟化工作站的高端显卡，包含旗舰级 GeForce RTX 5090 与 RTX PRO Blackwell 专业卡，可按算力规模与机箱散热条件选配。",
      "High-end GPUs for AI training and inference, professional rendering and virtualized workstations, including the flagship GeForce RTX 5090 and RTX PRO Blackwell cards, selectable by compute scale and chassis cooling."
    ],
    models: [
      {
        id: "rtx-5090",
        name: "RTX 5090",
        tag: ["旗舰游戏 / 算力", "Flagship Gaming / Compute"],
        brief: "32GB GDDR7 · 512-bit · 575W",
        specs: [
          ["arch", "NVIDIA Blackwell（GB202）"],
          ["cuda", "21,760"],
          ["vram", "32GB GDDR7"],
          ["bus", "512-bit"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "575W"],
          ["conn", "12V-2x6（建议 1000W 以上电源）"],
          ["out", "3 × DisplayPort 2.1 + 1 × HDMI 2.1"],
          ["size", ["三风扇 / 四风扇，约 3–4 槽", "Triple / quad fan, ~3–4 slots"]],
          ["use", ["4K / 8K 游戏与创作、大模型推理、高负载渲染", "4K / 8K gaming and creation, LLM inference, heavy rendering"]]
        ],
        brands: [
          { brand: "gigabyte", name: "AORUS GeForce RTX 5090 MASTER 32G", img: "rtx5090-gigabyte.jpg", chips: [["32GB GDDR7"], ["四风扇", "Quad-fan"], ["旗舰散热", "Flagship cooling"]] },
          { brand: "asus", name: "ROG Astral GeForce RTX 5090 OC 32GB", img: "rtx5090-asus.jpg", chips: [["32GB GDDR7"], ["四风扇", "Quad-fan"], ["OC", "OC"]] },
          { brand: "msi", name: "GeForce RTX 5090 SUPRIM SOC 32G", img: "rtx5090-msi.jpg", chips: [["32GB GDDR7"], ["三风扇", "Triple-fan"], ["旗舰散热", "Flagship cooling"]] },
          { brand: "colorful", name: "iGame GeForce RTX 5090 Vulcan OC 32GB", img: "rtx5090-colorful.jpg", chips: [["32GB GDDR7"], ["三风扇", "Triple-fan"], ["旗舰散热", "Flagship cooling"]] }
        ]
      },
      {
        id: "rtx-pro-5000",
        name: "RTX PRO 5000",
        tag: ["专业工作站", "Professional Workstation"],
        brief: ["48GB GDDR7 · 300W · 双槽涡轮", "48GB GDDR7 · 300W · Dual-slot blower"],
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["cuda", "14,080"],
          ["tops", "2,142 AI TOPS"],
          ["vram", ["48GB GDDR7（ECC）", "48GB GDDR7 (ECC)"]],
          ["iface", "PCIe 5.0 x16"],
          ["power", "300W"],
          ["size", ["双槽主动散热（涡轮）", "Dual-slot active cooling (blower)"]],
          ["out", "4 × DisplayPort 2.1"],
          ["use", ["AI 训练与推理、CAD / 3D 渲染、数据可视化、多卡工作站", "AI training and inference, CAD / 3D rendering, visualization, multi-GPU workstations"]]
        ],
        brands: [
          { brand: "leadtek", name: "NVIDIA RTX PRO 5000 Blackwell 48G（丽台代理）", img: "rtxpro5000-leadtek.jpg", chips: [["48GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] },
          { brand: "pny", name: "NVIDIA RTX PRO 5000 Blackwell 48GB", img: "rtxpro5000-pny.jpg", chips: [["48GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] },
          { brand: "gigabyte", name: "RTX PRO 5000 AI TOP 48G", img: "rtxpro5000-gigabyte.jpg", chips: [["48GB GDDR7"], ["涡轮散热", "Blower"], ["多卡适配", "Multi-GPU ready"]] },
          { brand: "asus", name: "RTX PRO 5000 48G 涡轮版", img: "rtxpro5000-asus.jpg", chips: [["48GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] }
        ]
      },
      {
        id: "rtx-pro-5500",
        name: "RTX PRO 5500",
        tag: ["大显存工作站", "Large-Memory Workstation"],
        brief: ["84GB GDDR7 · 600W · 1398 GB/s", "84GB GDDR7 · 600W · 1398 GB/s"],
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["cuda", "21,760"],
          ["vram", ["84GB GDDR7（ECC）", "84GB GDDR7 (ECC)"]],
          ["band", "1,398 GB/s"],
          ["iface", "PCIe Gen 5 x16"],
          ["power", ["最高 600W", "Up to 600W"]],
          ["size", ["双槽主动风冷（另有 RXM 液冷版）", "Dual-slot air cooling (RXM liquid-cooled available)"]],
          ["out", "4 × DisplayPort 2.1b"],
          ["use", ["大模型推理、代理式 AI、物理仿真、虚拟化多用户工作站", "LLM inference, agentic AI, physical simulation, virtualized multi-user workstations"]]
        ],
        brands: [
          { brand: "leadtek", name: "NVIDIA RTX PRO 5500 Blackwell（丽台代理）", img: "rtxpro5500-leadtek.jpg", chips: [["48GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] },
          { brand: "pny", name: "NVIDIA RTX PRO 5500 Blackwell", img: "rtxpro5500-pny.jpg", chips: [["48GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] },
          { brand: "gigabyte", name: "RTX PRO 5500 工作站版", img: "rtxpro5500-gigabyte.jpg", chips: [["48GB GDDR7"], ["涡轮散热", "Blower"], ["多卡适配", "Multi-GPU ready"]] },
          { brand: "asus", name: "RTX PRO 5500 涡轮版", img: "rtxpro5500-asus.jpg", chips: [["48GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] }
        ]
      },
      {
        id: "rtx-pro-6000",
        name: "RTX PRO 6000",
        tag: ["超大显存旗舰", "Ultra-Memory Flagship"],
        brief: ["96GB GDDR7 ECC · 300–600W · 工作站 / 服务器 / Max-Q", "96GB GDDR7 ECC · 300–600W · Workstation / Server / Max-Q"],
        specs: [
          ["arch", "NVIDIA RTX PRO Blackwell"],
          ["cuda", "24,064"],
          ["tops", "4,000 AI TOPS"],
          ["vram", ["96GB GDDR7（ECC）", "96GB GDDR7 (ECC)"]],
          ["band", "1,792 GB/s"],
          ["iface", "PCIe 5.0 x16"],
          ["power", "600W"],
          ["size", ["双槽涡轮散热（工作站版 / 服务器版）", "Dual-slot blower (workstation / server edition)"]],
          ["out", ["4 × DisplayPort 2.1（工作站版）", "4 × DisplayPort 2.1 (workstation edition)"]],
          ["use", ["超大模型训练与推理、科学计算、影视级渲染", "Large-model training and inference, scientific computing, film-grade rendering"]]
        ],
        brands: [
          { brand: "leadtek", name: "NVIDIA RTX PRO 6000 Blackwell 96G（丽台代理）", img: "rtxpro6000-leadtek.jpg", chips: [["96GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] },
          { brand: "pny", name: "NVIDIA RTX PRO 6000 Blackwell 96GB", img: "rtxpro6000-pny.jpg", chips: [["96GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] },
          { brand: "gigabyte", name: "RTX PRO 6000 AI TOP 96G", img: "rtxpro6000-gigabyte.jpg", chips: [["96GB GDDR7"], ["涡轮散热", "Blower"], ["多卡适配", "Multi-GPU ready"]] },
          { brand: "asus", name: "RTX PRO 6000 96G 涡轮版", img: "rtxpro6000-asus.jpg", chips: [["96GB GDDR7"], ["双槽涡轮", "Dual-slot blower"], ["专业驱动", "Pro drivers"]] }
        ]
      }
    ]
  },

  /* 3. 算力服务器 */
  {
    id: "server",
    cat: ["算力服务器", "AI Computing Servers"],
    desc: [
      "面向大模型训练与高效能运算的 8-GPU 整机方案，提供 NVIDIA H100 / H200 平台与主流整机厂商机型，可依机房供电、散热与网络条件配置。",
      "8-GPU systems for large-model training and HPC, offering NVIDIA H100 / H200 platforms and mainstream system integrator models, configured to your power, cooling and networking conditions."
    ],
    models: [
      {
        id: "h100",
        name: "NVIDIA H100",
        tag: ["8-GPU 训练平台", "8-GPU Training Platform"],
        brief: ["8 × H100 80GB HBM3 · NVLink · 6U–8U 机型", "8 × H100 80GB HBM3 · NVLink · 6U–8U systems"],
        specs: [
          ["platform", ["NVIDIA HGX H100（8-GPU）", "NVIDIA HGX H100 (8-GPU)"]],
          ["gpu", ["8 × H100 SXM5 80GB HBM3", "8 × H100 SXM5 80GB HBM3"]],
          ["vramtotal", "640GB HBM3"],
          ["bw", ["约 3.35TB/s（单 GPU）", "~3.35TB/s per GPU"]],
          ["nvlink", "900GB/s"],
          ["cpu", ["2 × Intel Xeon / AMD EPYC（依整机配置）", "2 × Intel Xeon / AMD EPYC (per system)"]],
          ["mem", ["32 × DDR5 DIMM 插槽", "32 × DDR5 DIMM slots"]],
          ["net", ["InfiniBand NDR 400G / 以太网", "InfiniBand NDR 400G / Ethernet"]],
          ["chassis", ["6U / 8U 机架式（依机型）", "6U / 8U rack (per model)"]],
          ["power", ["约 10kW（满载，依配置）", "~10kW at full load (per configuration)"]],
          ["cool", ["风冷 / 液冷（依机型）", "Air / liquid cooling (per model)"]],
          ["use", ["大模型预训练与微调、科学计算、HPC 集群", "LLM pre-training and fine-tuning, scientific computing, HPC clusters"]]
        ],
        brands: [
          { brand: "nvidia", name: "HGX H100 8-GPU 参考平台", img: "h100-nvidia.jpg", chips: [["8 × H100 80GB"], ["NVLink 900GB/s"], ["8U", "8U"]] },
          { brand: "dell", name: "PowerEdge XE9680（8 × H100）", img: "h100-dell.jpg", chips: [["8 × H100 80GB"], ["8U", "8U"], ["整机交付", "Turnkey"]] },
          { brand: "supermicro", name: "SYS-821GE-TNHR（8 × H100）", img: "h100-supermicro.jpg", chips: [["8 × H100 80GB"], ["8U", "8U"], ["整机交付", "Turnkey"]] },
          { brand: "gigabyte", name: "G593-SD1（8 × H100）", img: "h100-gigabyte.jpg", chips: [["8 × H100 80GB"], ["8U", "8U"], ["整机交付", "Turnkey"]] }
        ]
      },
      {
        id: "h200",
        name: "NVIDIA H200",
        tag: ["大显存推理旗舰", "Large-Memory Inference"],
        brief: ["8 × H200 141GB HBM3e · 4.8TB/s · 5U–8U 机型", "8 × H200 141GB HBM3e · 4.8TB/s · 5U–8U systems"],
        specs: [
          ["platform", ["NVIDIA HGX H200（8-GPU）", "NVIDIA HGX H200 (8-GPU)"]],
          ["gpu", ["8 × H200 SXM 141GB HBM3e", "8 × H200 SXM 141GB HBM3e"]],
          ["vramtotal", "1,128GB HBM3e"],
          ["bw", ["4.8TB/s（单 GPU）", "4.8TB/s per GPU"]],
          ["nvlink", "900GB/s"],
          ["cpu", ["2 × Intel Xeon / AMD EPYC（依整机配置）", "2 × Intel Xeon / AMD EPYC (per system)"]],
          ["mem", ["32 × DDR5 DIMM 插槽", "32 × DDR5 DIMM slots"]],
          ["net", ["InfiniBand NDR 400G / 以太网", "InfiniBand NDR 400G / Ethernet"]],
          ["chassis", ["5U / 8U 机架式（依机型）", "5U / 8U rack (per model)"]],
          ["power", ["约 10kW（满载，依配置）", "~10kW at full load (per configuration)"]],
          ["cool", ["风冷 / 液冷（依机型）", "Air / liquid cooling (per model)"]],
          ["use", ["大模型训练、长上下文推理、HPC 与科学计算", "LLM training, long-context inference, HPC and scientific computing"]]
        ],
        brands: [
          { brand: "nvidia", name: "HGX H200 8-GPU 参考平台", img: "h200-nvidia.jpg", chips: [["8 × H200 141GB"], ["4.8TB/s"], ["8U", "8U"]] },
          { brand: "dell", name: "PowerEdge XE9680（8 × H200）", img: "h200-dell.jpg", chips: [["8 × H200 141GB"], ["8U", "8U"], ["整机交付", "Turnkey"]] },
          { brand: "supermicro", name: "SYS-821GE-TNHR（8 × H200）", img: "h200-supermicro.jpg", chips: [["8 × H200 141GB"], ["8U", "8U"], ["整机交付", "Turnkey"]] },
          { brand: "gigabyte", name: "G593-ZD1（8 × H200）", img: "h200-gigabyte.jpg", chips: [["8 × H200 141GB"], ["8U", "8U"], ["整机交付", "Turnkey"]] }
        ]
      }
    ]
  },

  /* 4. 服务器内存条（产品内容整理中，暂不上架） */
  {
    id: "memory",
    cat: ["服务器内存条", "Server Memory"],
    desc: [
      "企业级服务器内存条，涵盖主流规格、容量与频率，支持兼容性验证与选型建议。型号与规格资料整理中，陆续上架。",
      "Enterprise-grade server memory covering mainstream specs, capacities and speeds, with compatibility verification and selection advice. Model data is being prepared."
    ],
    models: []
  }
];

/* ---------- 接入官网抓取的真实图与规格 ---------- */
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
        /* 5090D / 5090D V2 为中国特供型号，本站不做 */
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

  /* 高端算力卡（NVIDIA 原厂渲染图） */
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

  /* 算力服务器（整机厂官方产品照） */
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

/* 从原厂规格里挑出用于卡片标签的关键值 */
function realChips(v) {
  var s = v.spec || {};
  var out = [];
  var mem = s["MEMORY"] || s["内存形式"] || ((s["内存容量"] || "") + " " + (s["内存规格"] || ""));
  mem = String(mem).replace(/\s+/g, " ").trim();
  if (mem) out.push([mem]);
  out.push([/OC|SOC|超频/i.test(v.name) ? "OC 超频" : "标准时脉"]);
  var psu = s["建议电源供应(W)"] || s["建议电源供应"] || s["建议电源供应器"] || s["Recommended PSU"] || s["PSU"];
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

/* 挂载产品图：图片缺失时自动替换为占位块 */
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

  /* 侧栏 / 弹层的双语静态文案 */
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

    /* 左侧菜单 */
    navHtml += '<div class="pnav-group" data-cat="' + cat.id + '">';
    navHtml += '<button type="button" class="pnav-cat pnav-toggle" aria-expanded="false" aria-controls="pnav-' + cat.id + '">' +
      '<svg class="cat-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>' +
      '<span class="pnav-cat-name">' + escapeHtml(catName) + "</span>" +
      '<span class="pnav-count">' + cat.models.length + "</span>" +
      '<svg class="pnav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
      "</button>";
    navHtml += '<div class="pnav-collapse" id="pnav-' + cat.id + '"><div class="pnav-collapse-inner"><div class="pnav-items">';
    if (!cat.models.length) {
      navHtml += '<span class="pnav-empty">' + escapeHtml(pdT(["内容整理中", "Coming soon"])) + "</span>";
    }
    cat.models.forEach(function (model) {
      navHtml += '<a href="#' + model.id + '" data-target="' + model.id + '">' + escapeHtml(model.name) + "</a>";
    });
    navHtml += "</div></div></div></div>";

    /* 右侧面板 */
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

      /* 多品牌时提供品牌筛选 */
      if (model.real && variants.length > 4) {
        var counts = {};
        variants.forEach(function (v) { counts[v.brand] = (counts[v.brand] || 0) + 1; });
        panelHtml += '<div class="brand-filter" role="group" aria-label="' + escapeHtml(pdT(["品牌筛选", "Filter by brand"])) + '">';
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

    if (!cat.models.length) {
      panelHtml += '<div class="cat-empty">';
      panelHtml += '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="10" rx="1"/><path d="M9 7v10M15 7v10M7 17v3M12 17v3M17 17v3"/></svg>';
      panelHtml += "<strong>" + escapeHtml(pdT(["产品内容整理中，即将上线", "Product data is being prepared"])) + "</strong>";
      panelHtml += "<span>" + escapeHtml(pdT(["如需规格与选型建议，欢迎来信", "For specs and selection advice, please email"])) +
        ' <a href="mailto:info@tyhs.hk">info@tyhs.hk</a></span>';
      panelHtml += "</div>";
    }

    panelHtml += "</section>";
  });

  navBox.innerHTML = navHtml;
  panelBox.innerHTML = panelHtml;

  bindNavToggles(navBox);

  /* 图片缺失时显示占位块，而不是裂图 */
  Array.prototype.forEach.call(panelBox.querySelectorAll(".variant-media"), function (media) {
    mountProductImage(media, media.getAttribute("data-img"), media.getAttribute("data-ph-label"), true);
  });

  /* 打开参数详情 */
  Array.prototype.forEach.call(panelBox.querySelectorAll(".variant-card"), function (card) {
    card.addEventListener("click", function () {
      openProductModal(card.getAttribute("data-pid"));
    });
  });

  bindBrandFilters(panelBox);

  bindProductScrollSpy();
}

/* ---------- 品牌筛选 ---------- */
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

/* ---------- 左侧菜单：分类折叠 ---------- */
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
    /* 切换语言重绘时保留使用者的展开状态 */
    if (PD_OPEN_GROUPS[cat]) setNavGroupOpen(group, true);
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") !== "true";
      /* 手风琴效果：展开一个分类时，收起其他已展开的分类 */
      if (open) closeOtherGroups(navBox, group);
      setNavGroupOpen(group, open);
    });
  });

  /* 由 URL hash 决定预设展开哪个分类（#cat-compute 或 #rtx-5090） */
  expandNavGroupByTarget(navBox, location.hash);
}

/* ---------- 左侧菜单跟随卷动高亮 ---------- */
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

/* ---------- 参数详情弹层 ---------- */
function specRows(model, variant) {
  var rows = "";
  rows += "<tr><th>" + escapeHtml(pdT(SP.brand)) + "</th><td>" + escapeHtml(pdT(PDBRAND[variant.brand])) + "</td></tr>";
  rows += "<tr><th>" + escapeHtml(pdT(SP.series)) + "</th><td>" + escapeHtml(model.name) + "</td></tr>";

  if (variant.spec) {
    /* 支持两种写法：{ "KEY": "value" } 与 [["key", "value"], ...] */
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
    rows += "<tr><th>" + escapeHtml(pdT(["原厂页面", "Official Page"])) + '</th><td><a class="spec-link" href="' +
      escapeHtml(variant.url) + '" target="_blank" rel="noopener">' + escapeHtml(pdT(["查看官网规格", "View official specs"])) + "</a></td></tr>";
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

  /* 语言切换后重绘产品内容 */
  document.addEventListener("tyhs:langchange", function () {
    closeProductModal();
    renderProductPage();
  });

  /* 同页 hash 变更时同步展开对应分类 */
  window.addEventListener("hashchange", function () {
    expandNavGroupByTarget(document.getElementById("productNavGroups"), location.hash);
  });
});
