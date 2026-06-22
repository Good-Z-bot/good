# MATERIALS_TODO

## 1. 已识别到的素材

- 图片：28 个
- 视频：9 个
- 文档：3 个

已自动写入 `assets-manifest.json`，并复制到 `web-assets/` 供网页直接调用。

## 2. 当前缺少或建议补充的素材

- 统一命名的最终成片文件（建议固定命名）
- 可用于培训展示的关键镜头视频（建议 6-8 个高质量片段）
- 结构化提示词模板文档（md 或 pdf）
- 流程规范文档（团队版）
- 镜头级说明文案（动作、问题、处理方式）

## 3. 每类素材建议放置目录

- 最终成片：`web-assets/videos/final/`
- 粗剪视频：`web-assets/videos/rough-cut/`
- 镜头片段：`web-assets/videos/shots/`
- 分镜图：`web-assets/images/storyboard/`
- 角色参考图：`web-assets/images/characters/`
- 画面生成图：`web-assets/images/generated-frames/`
- 对比素材：`web-assets/images/comparison/`
- 文档资料：`web-assets/docs/`

## 4. 推荐命名方式

- 最终成片：`web-assets/videos/final/final-video.mp4`
- 粗剪视频：`web-assets/videos/rough-cut/storyboard-rough-cut.mp4`
- 关键镜头视频：
  - `web-assets/videos/shots/shot-01.mp4`
  - `web-assets/videos/shots/shot-02.mp4`
  - `web-assets/videos/shots/shot-03.mp4`
- 关键分镜图：
  - `web-assets/images/storyboard/shot-01.jpg`
  - `web-assets/images/storyboard/shot-02.jpg`
  - `web-assets/images/storyboard/shot-03.jpg`
- 角色参考图：
  - `web-assets/images/characters/cat-reference.jpg`
  - `web-assets/images/characters/dog-reference.jpg`
- 画面生成图：
  - `web-assets/images/generated-frames/shot-01-frame.jpg`
  - `web-assets/images/generated-frames/shot-02-frame.jpg`
- 说明文档：
  - `web-assets/docs/process-guide.md`
  - `web-assets/docs/storyboard-script.pdf`
  - `web-assets/docs/prompt-template.md`

## 5. 替换素材的方法

1. 按上述目录和命名将新素材放入 `web-assets/`。
2. 如果文件名变化较大，更新 `script.js` 里 `projectData` 的路径配置。
3. 如需重新统计素材清单，执行：

```bash
node generate_assets.js
```

4. 刷新页面后检查：
- 首页最终成片播放器
- 时间线每阶段素材
- 镜头拆解卡片
- 下载资料区

## 6. 占位提示说明

页面已内置占位组件：

- 图片占位
- 视频占位
- 文档占位
- 镜头占位
- 下载占位

素材缺失不会导致页面报错，会显示对应补充路径提示。
