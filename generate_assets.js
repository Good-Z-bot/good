const fs = require('fs');
const path = require('path');

const root = process.cwd();
const assetsDir = path.join(root, 'assets');
const webAssetsDir = path.join(root, 'web-assets');

const imageExts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp', '.svg']);
const videoExts = new Set(['.mp4', '.mov', '.webm', '.m4v']);
const docExts = new Set(['.md', '.txt', '.doc', '.docx', '.pdf', '.xlsx', '.xls', '.csv']);

const webDirs = [
  'cover',
  'videos/final',
  'videos/rough-cut',
  'videos/shots',
  'images/script',
  'images/storyboard',
  'images/characters',
  'images/generated-frames',
  'images/editing',
  'images/comparison',
  'docs',
  'thumbnails'
];

for (const dir of webDirs) {
  fs.mkdirSync(path.join(webAssetsDir, dir), { recursive: true });
}

function walk(dirPath) {
  const files = [];
  for (const item of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (item.name === '.DS_Store') continue;
    const fullPath = path.join(dirPath, item.name);
    if (item.isDirectory()) {
      files.push(...walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function detectType(ext) {
  if (imageExts.has(ext)) return 'image';
  if (videoExts.has(ext)) return 'video';
  if (docExts.has(ext)) return 'document';
  return 'other';
}

function detectStage(relPath, baseName) {
  const p = toPosix(relPath);
  if (p.includes('/01脚本设计/')) return '脚本设计';
  if (p.includes('/02分镜生成/')) return '分镜生成';
  if (p.includes('/03角色参考图/')) return '角色参考图';
  if (p.includes('/04画面生成/')) return '画面生成';
  if (p.includes('/05生成视频/')) return '视频生成';
  if (p.includes('/07最终成片/')) return '最终成片';
  if (baseName.includes('剪辑')) return '剪辑合成';
  if (baseName.includes('流程说明')) return '项目说明';
  return '未分类';
}

function getRecommendedUses(stage, type, baseName) {
  const uses = [];

  if (stage === '项目说明') uses.push('流程说明文档', '下载资料');
  if (stage === '脚本设计') {
    if (type === 'document') uses.push('流程节点文案', '下载资料');
    if (type === 'image') uses.push('首页案例引导图', '流程节点-文案大纲');
  }
  if (stage === '分镜生成') {
    if (type === 'image') uses.push('流程节点-分镜图生成', '镜头拆解');
    if (type === 'video') {
      if (baseName.includes('粗剪')) uses.push('分镜粗剪展示', '流程节点-分镜审核');
      else uses.push('流程节点-分镜生成视频');
    }
  }
  if (stage === '角色参考图' && type === 'image') uses.push('角色一致性说明', '流程节点-角色参考');
  if (stage === '画面生成' && type === 'image') uses.push('流程节点-画面生成', '对比展示');
  if (stage === '视频生成') {
    if (type === 'video') uses.push('镜头拆解视频片段', '流程节点-视频生成');
    if (type === 'image') uses.push('视频生成过程截图', '工具流程说明');
  }
  if (stage === '剪辑合成' && type === 'image') uses.push('流程节点-剪辑合成');
  if (stage === '最终成片') {
    if (type === 'video') uses.push('首页最终成片播放', '流程节点-最终成片');
    if (type === 'image') uses.push('首页封面候选', '最终成片缩略图');
  }
  if (uses.length === 0) uses.push('待补充用途');

  return uses;
}

function copyToWebAssets(sourceFile, stage, type, baseName) {
  let targetRel = null;

  if (stage === '脚本设计' && type === 'image') targetRel = `images/script/${baseName}`;
  if (stage === '脚本设计' && type === 'document') targetRel = `docs/${baseName}`;

  if (stage === '分镜生成' && type === 'image') targetRel = `images/storyboard/${baseName}`;
  if (stage === '分镜生成' && type === 'video') {
    targetRel = baseName.includes('粗剪') ? `videos/rough-cut/${baseName}` : `videos/shots/${baseName}`;
  }

  if (stage === '角色参考图' && type === 'image') targetRel = `images/characters/${baseName}`;

  if (stage === '画面生成' && type === 'image') {
    if (baseName.includes('修改参考') || baseName.includes('对比')) {
      targetRel = `images/comparison/${baseName}`;
    } else {
      targetRel = `images/generated-frames/${baseName}`;
    }
  }

  if (stage === '视频生成' && type === 'video') targetRel = `videos/shots/${baseName}`;
  if (stage === '视频生成' && type === 'image') targetRel = `images/editing/${baseName}`;

  if (stage === '剪辑合成' && type === 'image') targetRel = `images/editing/${baseName}`;

  if (stage === '最终成片' && type === 'video') targetRel = `videos/final/${baseName}`;
  if (stage === '最终成片' && type === 'image') {
    if (baseName.includes('封面')) targetRel = `cover/${baseName}`;
    else targetRel = `thumbnails/${baseName}`;
  }

  if (stage === '项目说明' && type === 'document') targetRel = `docs/${baseName}`;

  if (!targetRel) {
    if (type === 'document') targetRel = `docs/${baseName}`;
    else if (type === 'image') targetRel = `thumbnails/${baseName}`;
    else if (type === 'video') targetRel = `videos/shots/${baseName}`;
  }

  if (!targetRel) return null;

  const targetAbs = path.join(webAssetsDir, targetRel);
  fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
  fs.copyFileSync(sourceFile, targetAbs);

  if (type === 'image' && !baseName.includes('封面')) {
    const thumbAbs = path.join(webAssetsDir, 'thumbnails', baseName);
    if (!fs.existsSync(thumbAbs)) {
      fs.copyFileSync(sourceFile, thumbAbs);
    }
  }

  return toPosix(path.join('web-assets', targetRel));
}

if (!fs.existsSync(assetsDir)) {
  console.error('assets folder not found.');
  process.exit(1);
}

const sourceFiles = walk(assetsDir);
const items = sourceFiles.map((absFile) => {
  const relPath = toPosix(path.relative(root, absFile));
  const baseName = path.basename(absFile);
  const ext = path.extname(baseName).toLowerCase();
  const type = detectType(ext);
  const stage = detectStage(relPath, baseName);
  const webCopyPath = copyToWebAssets(absFile, stage, type, baseName);

  return {
    文件名: baseName,
    文件路径: relPath,
    文件类型: type,
    所属阶段: stage,
    推荐用途: getRecommendedUses(stage, type, baseName),
    是否适合做缩略图: type === 'image' || (type === 'video' && stage === '最终成片'),
    是否适合做视频播放: type === 'video',
    是否适合做下载资料: type === 'document',
    网页副本路径: webCopyPath
  };
});

const summary = items.reduce(
  (acc, item) => {
    acc.total += 1;
    if (item.文件类型 === 'image') acc.images += 1;
    if (item.文件类型 === 'video') acc.videos += 1;
    if (item.文件类型 === 'document') acc.documents += 1;
    if (item.文件类型 === 'other') acc.others += 1;
    return acc;
  },
  { total: 0, images: 0, videos: 0, documents: 0, others: 0 }
);

const manifest = {
  generatedAt: new Date().toISOString(),
  projectName: '绒绒好朋友 AI 视频制作流程复盘',
  sourceDir: 'assets',
  webAssetsDir: 'web-assets',
  summary,
  files: items
};

fs.writeFileSync(path.join(root, 'assets-manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
console.log(`Generated assets-manifest.json: ${summary.total} files`);
