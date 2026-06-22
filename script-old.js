const data = {
  title: "绒绒好朋友 AI 视频制作流程演示",
  sub: "一个 1分15秒 AI 短片从想法到成片的完整制作过程",
  intro: "从需求确认到成片交付，完整展示 AI 短片制作的关键步骤。",
  tags: ["AI视频", "单人制作", "产品宣传", "图生视频", "分镜流程"],
  info: [
    ["视频时长", "1分15秒"],
    ["制作方式", "单人设计师 + AI 工具"],
    ["视觉风格", "实拍毛绒 + 手绘场景"],
    ["核心工具", "ChatGPT / 即梦 / Seedance / 剪映"]
  ],
  quick: "AI短视频不是一步出成片，而是先分镜、后生图、再生视频、最后剪辑。",
  flow: ["需求确认", "文案大纲", "分镜脚本", "角色参考", "分镜图", "视频生成", "剪辑合成", "成片交付"],
  steps: [
    ["step-1", "需求确认", "对齐目标、时长、风格。"],
    ["step-2", "文案大纲", "把卖点转成故事结构。"],
    ["step-3", "分镜脚本", "AI起稿，人工修订。"],
    ["step-4", "角色参考", "稳定角色一致性。"],
    ["step-5", "分镜图", "先静态确认，再进视频。"],
    ["step-6", "画面生成", "复杂普通镜头分开处理。"],
    ["step-7", "视频生成", "图生视频更稳定。"],
    ["step-8", "剪辑合成", "统一节奏和配乐。"],
    ["step-9", "最终成片", "导出并准备分享。"],
    ["step-10", "经验总结", "沉淀可复用流程。"]
  ],
  finalVideo: "web-assets/videos/final/绒绒好朋友-定稿.mp4",
  cover: "web-assets/cover/绒绒好朋友-视频封面.jpg"
};

const modules = [
  ["hero", "项目介绍"],
  ["quick", "快速理解"],
  ["steps-nav", "流程导航"],
  ["steps", "步骤详情"]
];

function e(id) { return document.getElementById(id); }
function ep(path) { return encodeURI(path || "").replace(/#/g, "%23"); }
function esc(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderTopNav() {
  e("top-nav").innerHTML = modules
    .map(([id, label]) => `<a href="#${id}" data-link="${id}">${label}</a>`)
    .join("");
}

function renderHero() {
  const tags = data.tags
    .map((t, i) => `<span class="tag ${i % 3 === 0 ? "green" : i % 3 === 1 ? "orange" : "blue"}">${t}</span>`)
    .join("");
  const info = data.info
    .map(([k, v]) => `<div class="info"><b>${k}</b>${v}</div>`)
    .join("");
  e("hero-content").innerHTML = `<article class="card"><h1 class="hero-title">${data.title}</h1><p class="hero-sub">${data.sub}</p><p class="hero-sub">${data.intro}</p><div class="tags">${tags}</div><div class="hero-grid"><div class="info-grid">${info}</div><figure class="media"><video controls preload="metadata" poster="${ep(data.cover)}" src="${ep(data.finalVideo)}"></video><figcaption>最终成片预览</figcaption></figure></div></article>`;
}

function renderQuick() {
  const flow = data.flow
    .map((x, i) => `<button type="button" data-scroll="${data.steps[i] ? data.steps[i][0] : "steps"}">${x}</button>`)
    .join("");
  e("quick-content").innerHTML = `<h2>快速理解区</h2><p class="line">${data.quick}</p><div class="flow">${flow}</div>`;
}

function renderStepNav() {
  e("process-nav").innerHTML = data.steps
    .map(([id, name], i) => `<button type="button" data-scroll="${id}" data-stepbtn="${id}" class="${i === 0 ? "active" : ""}">${String(i + 1).padStart(2, "0")} ${name}</button>`)
    .join("");
}

const stepStageMap = {
  "step-1": ["脚本设计"],
  "step-2": ["脚本设计"],
  "step-3": ["脚本设计"],
  "step-4": ["角色参考图"],
  "step-5": ["分镜生成"],
  "step-6": ["画面生成"],
  "step-7": ["生成视频"],
  "step-8": ["最终成片"],
  "step-9": ["最终成片"],
  "step-10": ["脚本设计", "分镜生成", "角色参考图", "画面生成", "生成视频", "最终成片"]
};

function previewHtml(item) {
  const fileName = esc(item.文件名 || "未命名素材");
  const path = item.网页副本路径 || item.文件路径 || "";
  if (!path) return `<div class="placeholder">${esc(item.文件类型 || "file")}</div>`;
  if (item.是否适合做视频播放) {
    return `<figure class="media"><video controls preload="metadata" src="${ep(path)}"></video></figure>`;
  }
  if (item.是否适合做缩略图) {
    return `<figure class="media"><img src="${ep(path)}" alt="${fileName}" data-lightbox-src="${ep(path)}" data-lightbox-caption="${fileName}"></figure>`;
  }
  return `<div class="placeholder">${esc(item.文件类型 || "file")}</div>`;
}

function renderStepMaterials(stepId, filesByStage) {
  const stages = stepStageMap[stepId] || [];
  const files = stages.flatMap((stage) => filesByStage[stage] || []).slice(0, 6);
  if (!files.length) {
    return `<div class="step-materials"><h4>对应素材说明</h4><p class="step-material-empty">当前步骤暂无关联素材。</p></div>`;
  }

  const materialCards = files.map((item) => {
    const fileName = esc(item.文件名 || "未命名素材");
    const usage = Array.isArray(item.推荐用途) ? esc(item.推荐用途.join(" / ")) : "";
    return `<article class="step-material-item">${previewHtml(item)}<h5>${fileName}</h5><p>${usage}</p></article>`;
  }).join("");

  return `<div class="step-materials"><h4>对应素材说明</h4><div class="step-material-grid">${materialCards}</div></div>`;
}

function renderSteps(filesByStage = {}) {
  e("steps-container").innerHTML = data.steps
    .map(([id, name, note], i) => `<article class="step" id="${id}" data-step="${id}"><h3>${String(i + 1).padStart(2, "0")} ${name}</h3><p>${note}</p><ul><li>输入：上一步输出</li><li>输出：下一步可用素材</li><li>优化：先确认再批量生成</li></ul>${renderStepMaterials(id, filesByStage)}</article>`)
    .join("");
}

function mapFilesByStage(manifest) {
  const files = (manifest && manifest.files) || [];
  const grouped = {};
  files.forEach((item) => {
    const stage = item.所属阶段 || "其他";
    if (!grouped[stage]) grouped[stage] = [];
    grouped[stage].push(item);
  });
  return grouped;
}

async function renderStepDetailsWithMaterials() {
  try {
    const res = await fetch(`assets-manifest.json?t=${Date.now()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const manifest = await res.json();
    renderSteps(mapFilesByStage(manifest));
    e("refresh-status").textContent = `素材清单已加载（${manifest.summary ? manifest.summary.total : manifest.files.length} 项）`;
    e("refresh-status").className = "status ok";
  } catch (_err) {
    renderSteps({});
    e("refresh-status").textContent = "步骤详情已加载（未读取到素材清单）";
    e("refresh-status").className = "status warn";
  }
}

function bindScrollSpy() {
  const links = [...document.querySelectorAll("#top-nav a")];
  const sections = modules.map(([id]) => e(id)).filter(Boolean);
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      links.forEach((a) => a.classList.toggle("active", a.dataset.link === id));
    });
  }, { rootMargin: "-20% 0px -70% 0px", threshold: 0.1 });
  sections.forEach((s) => obs.observe(s));

  const stepBtns = [...document.querySelectorAll("[data-stepbtn]")];
  const stepSecs = [...document.querySelectorAll("[data-step]")];
  const stepObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      stepBtns.forEach((b) => b.classList.toggle("active", b.dataset.stepbtn === entry.target.id));
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.2 });
  stepSecs.forEach((s) => stepObs.observe(s));
}

function bindEvents() {
  document.addEventListener("click", (ev) => {
    const scrollBtn = ev.target.closest("[data-scroll]");
    if (scrollBtn) {
      const target = e(scrollBtn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const image = ev.target.closest("[data-lightbox-src]");
    if (image) {
      const box = e("image-lightbox");
      e("lightbox-image").src = image.getAttribute("data-lightbox-src") || "";
      e("lightbox-caption").textContent = image.getAttribute("data-lightbox-caption") || "";
      box.classList.add("open");
      box.setAttribute("aria-hidden", "false");
    }
  });

  const back = e("back-to-top");
  window.addEventListener("scroll", () => back.classList.toggle("show", window.scrollY > 320));
  back.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const box = e("image-lightbox");
  e("lightbox-close").addEventListener("click", () => {
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
  });
  box.addEventListener("click", (ev) => {
    if (ev.target === box) {
      box.classList.remove("open");
      box.setAttribute("aria-hidden", "true");
    }
  });

}

async function bootstrap() {
  renderTopNav();
  renderHero();
  renderQuick();
  renderStepNav();
  await renderStepDetailsWithMaterials();
  bindScrollSpy();
  bindEvents();
}

bootstrap();
