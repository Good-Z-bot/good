# 绒绒好朋友 AI 视频制作流程复盘网页

这是一个可本地直接打开的「可滚动交互式流程案例页」。
页面用于公开分享或内部培训，目标是让读者按自己的节奏浏览完整 AI 短片制作流程，而不是强制翻页。

## 1. 本地运行

1. 进入项目目录。
2. 可直接打开 `index.html`。
3. 如果浏览器限制本地 `fetch`，建议启动静态服务。

示例：

```bash
python3 -m http.server 8000
# 或
npx serve .
```

访问 `http://localhost:8000`。

## 2. 页面结构（滚动模式）

页面由以下模块构成：

1. 项目介绍（标题、标签、信息卡、最终成片）
2. 快速理解区（核心结论 + 可点击流程条）
3. 流程导航（吸顶步骤导航）
4. 步骤详情（10 步标准结构卡片）
5. 镜头拆解（默认关键镜头 + 展开详情）
6. 弯路与优化对比
7. 工具使用说明
8. 经验总结
9. 标准流程模板
10. 素材与下载区

## 3. 主要交互

1. 顶部导航支持锚点跳转，并随滚动高亮当前模块。
2. 流程导航支持平滑跳转到对应步骤，并随滚动高亮当前步骤。
3. 镜头卡支持展开/收起详情。
4. 图片支持点击放大（Lightbox）。
5. 视频支持页内播放。
6. 右下角支持一键回到顶部。

## 4. 素材目录约定

1. 原始素材目录：`assets/`（只读，不建议网页直接引用）
2. 网页素材目录：`web-assets/`
3. 清单文件：`assets-manifest.json`

推荐结构：

1. `web-assets/cover/`
2. `web-assets/videos/final/`
3. `web-assets/videos/rough-cut/`
4. `web-assets/videos/shots/`
5. `web-assets/images/script/`
6. `web-assets/images/storyboard/`
7. `web-assets/images/characters/`
8. `web-assets/images/generated-frames/`
9. `web-assets/images/editing/`
10. `web-assets/docs/`
## 5. 素材刷新与扫描

顶部按钮：

1. `刷新素材`：重新读取 `assets-manifest.json`。
2. `扫描文件夹`：浏览器支持时可直接选择本地目录扫描并即时预览。

推荐流程：

1. 把新素材放入 `web-assets/` 对应目录。
2. 执行脚本更新清单：

```bash
node generate_assets.js
```

3. 回到页面点击 `刷新素材`。
4. 如果不想生成清单，可使用 `扫描文件夹` 进行临时预览。

## 6. 维护入口（重点）

核心配置集中在 `script.js` 顶部的 `slides` 数组：

1. `title`、`subtitle`：页面标题文案
2. `layout`：页面布局类型
3. `content`：页面正文、卡片、流程和经验内容
4. `media`：页面视频、图片、文档或占位说明

## 7. 如何新增步骤

1. 在 `script.js` 的 `slides` 数组中追加页面对象。
2. 至少补齐：`id`、`title`、`subtitle`、`layout`、`content`。
3. 给 `id` 使用唯一值（如 `step-11`）。
4. 如需出现在左侧目录中，同步更新 `toc` 配置。
5. 刷新页面后即可查看新页面。

## 8. 如何新增镜头拆解

1. 将镜头图放到 `web-assets/images/storyboard/` 或 `web-assets/images/generated-frames/`。
2. 将镜头视频放到 `web-assets/videos/shots/`。
3. 如需定制文案，可在 `buildShotCards()` 中补充 `description / prompt / issue / solution`。

## 9. 占位策略

当图片、视频或文档缺失时，页面会自动显示占位卡，不会报错中断。
占位卡会提示：

1. 建议存放路径
2. 建议文件格式

便于后续按规范补素材。

## 10. 部署说明

部署到任意静态站点即可（Nginx、OSS、内网静态托管等）。
请保持以下内容同级：

1. `index.html`
2. `styles.css`
3. `script.js`
4. `assets-manifest.json`
5. `web-assets/`
