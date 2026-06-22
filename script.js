// Slideshow configuration
const slides = [
  {
    id: "cover",
    title: "首页 / 最终成片",
    subtitle: "一个 1分15秒 AI 短片从想法到成片的完整制作过程",
    layout: "hero",
    content: {
      tags: ["AI视频", "单人制作", "产品宣传", "实拍毛绒 + 手绘场景"],
      info: [
        ["视频时长", "1分15秒"],
        ["类型", "毛绒挂件产品宣传视频"],
        ["制作方式", "单人设计师 + AI 工具"],
        ["视觉风格", "实拍毛绒 + 手绘场景"],
        ["核心工具", "ChatGPT / 即梦 / Seedance / LibTV / 剪映"]
      ],
      description: "本案例目标是制作一支温暖、轻松、有产品质感的毛绒挂件宣传短片。这个页面将通过真实项目，拆解 AI 视频从需求、脚本、分镜、画面生成、视频生成到剪辑合成的完整流程。"
    },
    media: {
      video: "web-assets/videos/final/绒绒好朋友-定稿.mp4",
      poster: "web-assets/cover/绒绒好朋友-视频封面.jpg"
    }
  },
  {
    id: "process-breakdown-overview",
    title: "制作流程拆解",
    subtitle: "接下来将 AI 短视频制作过程拆成 7 个可执行步骤",
    layout: "breakdown",
    content: {
     cards: [
       { step: "01", title: "需求确认", description: "明确视频目标、风格和交付方向。", targetId: "step-1-requirement" },
       { step: "02", title: "脚本设计", description: "从原始故事想法，到最终可执行分镜脚本。", targetId: "step-2-script" },
       { step: "03", title: "角色参考", description: "统一小猫、小狗的外形、动作和细节。", targetId: "step-3-characters" },
       { step: "04", title: "分镜图生成", description: "先生成静态画面，控制构图、角色和场景。", targetId: "step-4-storyboard-images" },
       { step: "05", title: "画面生成与优化", description: "优化每个镜头的画面质量和风格统一性。", targetId: "step-5-image-optimization" },
       { step: "06", title: "视频生成", description: "使用图生视频将静态分镜转化为动态镜头。", targetId: "step-6-video-generation" },
       { step: "07", title: "剪辑合成", description: "将视频片段、音乐、音效和片尾合成为成片。", targetId: "step-7-editing" }
     ]
    }
  },
  {
    id: "step-1-requirement",
    title: "第 1 步：需求确认",
    subtitle: "明确项目方向，避免后期返工",
    layout: "requirement-flow",
    content: {
      intro: "需求确认阶段不是简单写一句「做一个视频」，而是要先明确视频给谁看、要表达什么、产品质感必须保留到什么程度、参考风格是什么，以及最终采用什么视觉方向。本项目最终确定为：实拍毛绒产品 + 手绘场景。",
      modules: [
        {
          step: "01",
          tone: "green",
          title: "项目需求：先明确要做什么",
          desc: "本项目目标是制作一支约 1 分钟左右的毛绒挂件产品宣传短片。产品本身的毛绒质感是重点，不能被 AI 画风完全吞掉。",
          tags: [
            { label: "视频类型", value: "毛绒挂件产品宣传视频" },
            { label: "视频时长", value: "约 1 分钟（最终 1 分 15 秒）" },
            { label: "制作方式", value: "单人设计师 + AI 工具" },
            { label: "使用场景", value: "产品宣传 / AI 流程案例分享" }
          ],
          images: [],
          videos: []
        },
        {
          step: "02",
          tone: "blue",
          title: "参考方向：先找视觉和情绪参照",
          desc: "在正式进入脚本和分镜前，需要先确认参考方向。本项目参考泡泡玛特「小狗 DIMOO」宣传视频的轻松、温暖、治愈氛围。参考的是情绪基调，不是照搬内容。",
          images: [
            { src: "assets/00需求确认/参考视频截图1.png", caption: "DIMOO 宣传视频参考截图 1" },
            { src: "assets/00需求确认/参考视频截图2.png", caption: "DIMOO 宣传视频参考截图 2" },
            { src: "assets/00需求确认/参考视频截图3.png", caption: "DIMOO 宣传视频参考截图 3" }
          ],
          videos: [
            { src: "assets/00需求确认/穿越梦境，小狗DIMOO找到你啦！ - 小红书.mp4", title: "DIMOO 参考视频", note: "泡泡玛特「小狗 DIMOO」宣传视频，参考其轻松温暖的情绪氛围和产品感。" }
          ]
        },
        {
          step: "03",
          tone: "orange",
          title: "风格确认：实拍毛绒产品 + 手绘场景",
          desc: "经过需求和参考方向确认后，本项目最终确定采用「实拍毛绒产品 + 手绘场景」的视觉方向。这样既能保留产品真实质感，又能让画面更童话、更轻松。",
          stylePoints: [
            { icon: "✓", text: "角色保持真实毛绒质感，不做成纯卡通" },
            { icon: "✓", text: "场景采用手绘插画风格，扩展故事表达空间" },
            { icon: "✓", text: "整体氛围轻松温暖，贴近产品气质" },
            { icon: "✗", text: "不做纯卡通——产品质感会丢失" },
            { icon: "✗", text: "不做全实拍——故事场景表达受限" }
          ],
          images: [],
          videos: []
        }
      ],
      conclusion: {
        summary: "需求确认后，项目方向被明确为：制作一支 1 分钟左右的毛绒挂件宣传短片，画面采用真实毛绒产品与手绘场景结合的方式，重点保留产品质感，同时通过小猫、小狗的温馨互动完成故事表达。",
        tags: [
          { label: "视频类型", value: "毛绒挂件产品宣传" },
          { label: "视频时长", value: "约 1 分钟" },
          { label: "视觉方向", value: "实拍毛绒 + 手绘场景" },
          { label: "核心目标", value: "保留产品质感，降低后续返工" }
        ],
        experience: "AI 视频制作前，最重要的是先确定风格边界。尤其是产品宣传片，产品质感不能被 AI 画风吞掉。"
      }
    }
  },
  {
    id: "step-2-script",
    title: "第 2 步：脚本设计",
    subtitle: "从原始故事想法，到最终可执行分镜脚本",
    layout: "script-flow-four-cards",
    content: {
      intro: "在这个阶段，我先把脑海中的故事想法用自然语言写下来，再交给 AI 进行结构化整理，得到初版分镜脚本。随后再由设计师根据画面逻辑、动作可生成性和剪辑节奏进行人工延展，最终形成可执行脚本。",
      phaseNote: "先把故事想法交给 AI 梳理，再由设计师人工延展成可执行脚本。",
      transformFlow: [
        { 
          title: "设计师原始想法", 
          description: "一段连续的故事描述，还没有标准分镜格式。",
          tip: "这一步的重点是把脑海中的剧情和情绪先写出来，不追求格式标准。",
          cardType: "image"
        },
        { 
          title: "AI 结构化整理", 
          description: "AI 理解故事逻辑，将口语化描述整理成更清晰的叙事结构。",
          tip: "AI 在这里的作用不是替代创意，而是帮助设计师快速梳理结构。",
          aiActions: [
            "提炼故事主线",
            "整理镜头顺序",
            "拆分情绪节奏",
            "形成可继续扩展的分镜基础"
          ],
          cardType: "actions"
        },
        { 
          title: "初版分镜脚本", 
          description: "AI 根据原始想法整理出的初版脚本，用于后续人工修改和延展。",
          tip: "AI 输出的是结构化初稿，后续仍需要人工判断和修改。",
          cardType: "doc"
        },
        {
          title: "最终可执行脚本",
          description: "设计师根据画面逻辑、动作可生成性和剪辑节奏，对 AI 初稿进行逐镜头调整和延展。",
          tip: "AI 生成的是分镜骨架，人工延展才是可执行分镜。",
          cardType: "doc-extended"
        }
      ],
      methods: [
        "基于“绒绒好朋友”的产品名称，先联想到“小猫和小狗互送礼物”的温馨剧情。",
        "我先用自然语言写下脑海中的故事想法。",
        "将这段想法发送给 AI，让 AI 帮我整理成更标准的视频文案大纲。",
        "AI 负责梳理故事结构，设计师负责判断情绪、节奏和创意方向。"
      ],
      inputOutput: {
        input: "产品名称：绒绒好朋友；视频需求：毛绒挂件宣传片；初始故事想法；参考风格",
        output: "双主线故事结构、初版文案大纲、可继续拆分镜的剧情方向"
      },
      experience: "AI 可以帮助把想法整理得更有结构，但故事的温度、节奏和创意判断仍然需要设计师把控。",
      rightMediaTitle: "发送给 AI 的原始故事想法",
      rightMediaDescription: "这是我最初写给 AI 的故事描述，比较口语化、连续化，主要用于表达创意方向和情绪氛围。",
      docTitle: "初版分镜结构稿",
      docCardTitle: "AI 梳理版本",
      docDescription: "AI 根据原始想法整理出的初版分镜，为后续人工修改提供结构化基础。需要后续根据画面想法进行人工调整和延展。",
      docPreviewTitle: "文档预览（开头片段）",
      docPreviewLines: [
        "片名暂定：《好朋友的秘密礼物》",
        "角色：绒绒小狗、绒绒小猫",
        "风格基调：温馨、柔软、治愈、童话感",
        "叙事结构：双主线并行 + 交叉剪辑 + 最终汇合",
        "建议时长：30—45秒"
      ],
      docFullScript: [
        {
          title: "【整体设定】",
          subtitle: "片名 / 角色 / 风格 / 结构 / 时长",
          sections: {
            title: "《好朋友的秘密礼物》",
            content: "片名暂定：《好朋友的秘密礼物》\n角色：绒绒小狗、绒绒小猫\n风格基调：温馨、柔软、治愈、童话感\n画面质感：毛绒玩具真实质感，场景采用二维手绘插画风格\n叙事结构：双主线并行 + 交叉剪辑 + 最终汇合\n建议时长：30—45秒"
          }
        },
        {
          title: "分镜 1：小狗发现气味",
          sections: {
            content: "近景，小狗贴着地面，毛绒鼻子轻轻蹭过草地或木地板，认真地不停嗅闻。\n它的小耳朵微微晃动，身体缓慢向前挪动。",
            mirror: "低机位跟拍，镜头贴近地面，跟随小狗鼻子的移动。",
            emotion: "好奇、专注、可爱。",
            sound: "轻轻的嗅闻声，柔和的环境声。"
          }
        },
        {
          title: "分镜 2：小猫也闻到了什么",
          sections: {
            content: "切到另一处场景，小猫抬着头，毛绒小鼻子一动一动，也在空气中不停嗅闻。\n它的胡须轻轻颤动，眼神逐渐变得认真。",
            mirror: "中近景，轻微仰拍，突出小猫抬头嗅闻的动作。",
            emotion: "疑惑、敏锐、期待。",
            sound: "轻柔的嗅闻声，远处风吹草动声。"
          }
        },
        {
          title: "分镜 3：双主线同时推进",
          sections: {
            content: "画面左右分割。\n左边：小狗继续贴着地面嗅闻。\n右边：小猫继续抬头嗅闻。\n两只毛绒玩具虽然在不同地方，但动作节奏逐渐同步。",
            mirror: "左右分屏构图，两个角色分别占据一半画面。",
            emotion: "悬念感增强，像是它们同时发现了某个秘密。",
            sound: "背景音乐开始变得轻快，加入轻微节奏感。"
          }
        },
        {
          title: "分镜 4：同时发现目标",
          sections: {
            content: "左右分割画面中，小狗和小猫同时停下动作。\n它们突然瞪大眼睛，表情从疑惑变成惊喜。\n短暂停顿后，两只小动物同时转头看向画面外的某个方向。",
            mirror: "左右分屏特写，分别给到小狗和小猫的正脸反应。",
            emotion: "惊喜、发现、兴奋。",
            sound: "音乐短暂停顿，加入\"叮\"的发现音效。"
          }
        },
        {
          title: "分镜 5：小狗开始奔跑",
          sections: {
            content: "小狗撒开腿向前奔跑，毛绒耳朵和尾巴随着动作上下晃动。\n用几个特写镜头展现：耳朵、双腿、尾巴。\n小狗眼睛特写拉开至中景展示它穿过草地、跨过小路，翻过农场边的小围栏。",
            mirror: "侧面跟拍，速度稍快，带出奔跑的动感。",
            emotion: "兴奋、迫不及待。",
            sound: "轻快脚步声，草叶摩擦声。"
          }
        },
        {
          title: "分镜 6：小猫开始奔跑",
          sections: {
            content: "小猫也朝着另一个方向快速奔跑。\n用几个特写镜头展现：耳朵、双腿、尾巴。\n小猫眼睛特写拉开至中景，它动作轻巧，穿过花丛、木箱和农场小路。",
            mirror: "低机位侧跟拍，画面和上一镜形成呼应。",
            emotion: "敏捷、开心、带一点追逐感。",
            sound: "轻盈脚步声，风声掠过。"
          }
        },
        {
          title: "分镜 7：茂密树枝飞起一群鸟",
          sections: {
            content: "一片茂密的树冠，突然呼啦啦一群鸟四散飞向天空。",
            mirror: "中全景仰视，拍到树冠和黄昏的天空。",
            emotion: "宁静的场景被打破。",
            sound: "先是知了鸣叫，接着突然呼啦啦鸟群扑腾翅膀的声音夹杂着鸟叫。"
          }
        },
        {
          title: "分镜 8：小狗找到礼物",
          sections: {
            content: "小狗跳上一个柔软的草堆，动作笨拙但可爱。\n它来到农场窗台旁，发现一条粉色小鱼。\n小狗低头叼起或用小爪子抱起粉色鱼，露出开心表情。",
            mirror: "先是小狗跳上草堆的中景，再切到窗台上粉色鱼的特写，最后切回小狗抱住鱼的近景。",
            emotion: "发现宝物、开心、满足。",
            sound: "轻快跳跃声，小鱼被拿起时加入柔和的提示音。"
          }
        },
        {
          title: "分镜 9：小猫找到礼物",
          sections: {
            content: "另一处地方，小猫也停下脚步。\n它在木桶旁边发现一根骨头。\n小猫小心地把骨头抱起来，表情认真又开心。",
            mirror: "中景展示小猫发现目标，再切骨头特写，最后给小猫抱起骨头的正面近景。",
            emotion: "完成任务、开心、温柔。",
            sound: "轻轻的\"咚\"或\"叮\"声，音乐变得柔和。"
          }
        },
        {
          title: "分镜 10：黄昏山丘，故事汇合",
          sections: {
            content: "黄昏天空，金橙色云霞铺满画面。\n镜头从天空缓缓向下摇，露出一片山丘草地。\n小猫和小狗背对镜头坐在山丘上，紧紧挨在一起。\n它们安静地看着远方夕阳。",
            mirror: "从天空向下摇镜头，最后停在小猫小狗背影中远景。",
            emotion: "温馨、宁静、治愈。前面奔跑的紧张感在这里转为柔软的陪伴感。",
            sound: "音乐放慢，加入晚风声、远处农场环境声。"
          }
        },
        {
          title: "分镜 11：交换礼物的揭示",
          sections: {
            content: "镜头切到正面。\n小猫和小狗面对镜头，坐在草地上。\n小猫手里捧着粉色小鱼，小狗手里捧着骨头。\n它们互相看向对方，露出幸福的微笑。\n观众此时明白：它们一路寻找的不是自己的东西，而是送给好朋友的礼物。",
            mirror: "正面中近景，慢慢推近。最后定格在两只毛绒玩具依偎在一起的画面。",
            emotion: "暖心、友情、反转揭示。",
            sound: "音乐进入最温柔的结尾段。"
          }
        },
        {
          title: "分镜 12：品牌结束画面",
          sections: {
            content: "画面慢慢淡出至黑屏。\n可出现品牌Logo或宣传语。\n字幕建议：\"绒绒好朋友，总会把最好的留给你。\"",
            mirror: "淡出黑屏。",
            emotion: "温馨收尾",
            sound: "音乐轻柔收尾。"
          }
        }
      ],
      docCoreNarrative: "这支宣传片的重点不是单纯的追逐，而是制造一个温柔的小反转：前半段让观众以为小狗和小猫都在寻找自己喜欢的东西；结尾揭示，小狗找到了小猫喜欢的鱼，小猫找到了小狗喜欢的骨头。它们奔跑的目的，是为了给彼此准备礼物。这样会更突出\"好朋友\"的主题，也更适合毛绒玩具宣传片的温馨气质。",
      storyBeats: [
        { number: "01", title: "开头：嗅闻发现", description: "小狗和小猫分别在草地上嗅闻，发现了什么。" },
        { number: "02", title: "推进：双线奔跑", description: "小狗和小猫朝不同方向奔跑，形成寻找和奔赴的感觉。" },
        { number: "03", title: "高潮：获得礼物", description: "小狗获得鱼，小猫获得骨头。" },
        { number: "04", title: "结尾：山丘相遇", description: "小猫和小狗在黄昏山丘相遇，互相送出礼物。" }
      ],
      aiNote: "AI 输出的分镜脚本不是最终稿，而是帮助设计师快速搭建结构。最终镜头是否成立，仍然需要人工判断和修改。",
      extendedDocTitle: "最终可执行脚本",
      extendedDocCardTitle: "人工延展版本",
      extendedDocDescription: "基于 AI 初稿逐镜头修改，补充画面细节、动作逻辑和生成要求。相比初版分镜，更明确了每个镜头的可生成性和剪辑节奏。",
      extendedDocMetadata: {
        source: "03分镜脚本人工延展.docx",
        frameCount: 26,
        purpose: "指导分镜图与视频生成",
        features: "更具体、更符合实际画面、更适合 AI 执行"
      },
      extendedDocPreviewLines: [
        "内容类型：人工修改后的最终分镜脚本",
        "镜头数量：26 个镜头",
        "用途：指导分镜图与视频生成",
        "特点：更具体、更符合实际画面、更适合 AI 执行"
      ],
      extendedDocFullScript: [
        { number: "1", content: "近景特写，草丛画面，镜头推开草丛，看到绒绒小狗的背影，它翘着屁股，摇晃着尾巴，低头嗅味道，一步一步缓慢移动" },
        { number: "2", content: "切换另一处场景，绒绒小猫的翘着屁股，尾巴卷曲的背影，也低头闻嗅什么东西；" },
        { number: "3", content: "画面斜着划分左右两边，左边是绒绒小狗头顶鼻子的特写，右边是绒绒小猫头顶鼻子的特写，接着两边画面同时抬头，露出角色面部特写，眼睛瞪大，眼神发亮，嘴巴张开笑" },
        { number: "4", content: "还是左右两格画面，绒绒小狗和绒绒小猫面部特写，同时扭头看向画面右边，接着跑出画面；" },
        { number: "5", content: "全景，绒绒小狗在草丛之间奔跑的画面" },
        { number: "6", content: "全景，绒绒小猫在树林间奔跑的画面" },
        { number: "7", content: "特写，绒绒小狗腿部特写奔跑画面" },
        { number: "8", content: "特写，绒绒小猫腿部特写奔跑画面" },
        { number: "9", content: "特写，绒绒小狗耳朵在风中向后甩动画面" },
        { number: "10", content: "特写，绒绒小猫耳朵在风中晃动画面" },
        { number: "11", content: "中景，小山丘斜坡，左高右低，绒绒小狗从左入境跑下山丘" },
        { number: "12", content: "中景，小树林斜坡，左低右高，绒绒小猫从左入境跑上山坡" },
        { number: "13", content: "中景仰视角度，一片茂密的树冠画面，天空是黄昏的样子。突然一群鸟从树冠四散飞向天空" },
        { number: "14", content: "中景，绒绒小狗跑过草丛" },
        { number: "15", content: "中景，绒绒小狗跑过小溪" },
        { number: "16", content: "中景，绒绒小狗钻入农场围栏" },
        { number: "17", content: "中景，绒绒小狗跳上农场木屋旁几个草垛，爬上了窗台" },
        { number: "18", content: "窗台特写，绒绒小狗的爪子丛窗台上拿起一条粉色小鱼" },
        { number: "19", content: "中景，绒绒小猫跑过花丛" },
        { number: "20", content: "中景，绒绒小猫穿过农场公路" },
        { number: "21", content: "中景，绒绒小猫钻入篱笆墙" },
        { number: "22", content: "中景，绒绒小猫穿过几个木箱子" },
        { number: "23", content: "箱子角落特写，绒绒小猫爪子伸进箱子破洞里，拿出一根白色骨头" },
        { number: "24", content: "黄昏天空，镜橙色云霄铺满画面。镜头从天空缓缓下移，露出一片山丘草地。绒绒小狗和绒绒小猫背对镜头坐在山丘上，紧紧挨在一起，他们安静滴看着远方夕阳。" },
        { number: "25", content: "镜头切到正面。绒绒小狗和绒绒小猫咪对镜头，坐在草地上。绒绒小猫手里捧着粉色小鱼，绒绒小狗手里捧着骨头，他们呼吸看向对方，露出幸福的微笑。" },
        { number: "26", content: "四周草丛叶子等植物向画面中间聚集，直到铺满屏幕。出现宣传语：绒绒好朋友，总会把最好的留给你。" }
      ],
      nextStepNote: "脚本设计完成后，下一步就是准备角色参考，为后续的分镜图生成统一角色外形。"
    },
    media: {
      image: "web-assets/images/script/01初始想法输出.png",
      doc: "web-assets/docs/02绒绒好朋友AI分镜脚本.docx",
      docExtended: "assets/01脚本设计/03分镜脚本人工延展.docx",
      placeholder: "请将 01初始想法输出.png 放入 web-assets/images/script/ 或 assets/01脚本设计/ 文件夹。"
    }
  },
  {
    id: "step-3-characters",
    title: "第 3 步：角色参考图",
    subtitle: "统一角色外形，减少后续生成中的变化",
    layout: "character-reference",
    content: {
      goal: "提前统一小猫和小狗的外形，减少后续画面和视频生成中的角色变化。",
      approach: "使用 ChatGPT image2.0 生成角色多角度参考图。准备正面、侧面、背面、动作、表情等参考。重点记录角色细节：毛绒质感、眼睛图案、嘴巴牙齿、脚掌颜色。",
      challenges: [
        "小猫前肢应为全灰色，AI容易生成白色脚掌",
        "眼睛里的爱心和星星图案容易丢失",
        "嘴巴露出的小白牙容易被忽略",
        "毛绒真实质感和卡通背景容易互相干扰"
      ],
      inputOutput: {
        input: "产品角色图、角色设定要求、AI生图提示词",
        output: "角色三视图、表情图、动作参考图"
      },
      experience: "角色参考图越充分，后续生成越稳定。尤其是产品宣传片，细节不能只靠文字描述。"
    },
    media: {
      intro: "角色参考图的作用，是让后续 AI 生成画面时保持小猫、小狗的外形、材质和细节一致。尤其是毛绒产品宣传视频，角色细节不能只靠文字描述。",
      experienceTitle: "本阶段关键经验",
      experience: "角色参考图越充分，后续生成越稳定。尤其是产品宣传片，毛绒质感、眼睛图案、嘴巴牙齿、脚掌颜色等细节不能只靠文字描述，需要通过真实素材和 AI 设计稿共同约束。",
      groups: [
        {
          step: "01",
          title: "输入素材：真实产品细节",
          description: "展示用于约束 AI 的真实产品素材，告诉 AI 毛绒质感、眼睛刺绣图案、正面 / 侧面 / 背面结构、角色比例、脚掌颜色、嘴巴牙齿等细节。",
          tone: "green",
          images: [
            { src: "assets/03角色参考图/头顶小猫刺绣眼睛.jpg", title: "头顶小猫刺绣眼睛", note: "记录眼睛刺绣图案、毛绒质感和真实产品细节。" },
            { src: "assets/03角色参考图/cat三视图.jpg", title: "cat 三视图", note: "确认小猫正面、侧面、背面结构和整体比例。" },
            { src: "assets/03角色参考图/头顶小狗刺绣眼睛.jpg", title: "头顶小狗刺绣眼睛", note: "辅助记录小狗眼睛图案和刺绣质感。" },
            { src: "assets/03角色参考图/dog三视图.jpg", title: "dog 三视图", note: "辅助确认小狗正侧背结构和比例。" }
          ]
        },
        {
          step: "02",
          title: "AI 角色设计过程：GPT image 2.0 生成设计稿",
          description: "这一阶段展示 GPT image 2.0 根据真实产品细节生成的角色设计过程稿和动作探索稿，用于扩展角色的多角度理解。",
          tone: "blue",
          images: [
            { src: "assets/03角色参考图/GPT image 2.0生成角色设计.png", title: "GPT image 2.0 生成角色设计", note: "把真实产品细节扩展成完整的角色设计说明。" },
            { src: "assets/03角色参考图/GPT image 2.0生成角色动作1.png", title: "GPT image 2.0 生成角色动作 1", note: "AI 根据角色设定继续生成动作姿态探索。" },
            { src: "assets/03角色参考图/GPT image 2.0生成角色动作2.png", title: "GPT image 2.0 生成角色动作 2", note: "补充更多可用于后续镜头生成的动作参考方向。" }
          ]
        },
        {
          step: "03",
          title: "输出结果：最终可用角色参考图",
          description: "这一组是最终筛选出的角色参考素材，后续用于约束分镜图生成和视频生成中的角色一致性。",
          tone: "orange",
          images: [
            { src: "assets/03角色参考图/绒绒小猫角色参考图.png", title: "绒绒小猫角色参考图", note: "最终筛选出来，用于后续分镜图生成和视频生成的小猫角色参考。" },
            { src: "assets/03角色参考图/绒绒小狗角色设计说明稿.png", title: "绒绒小狗角色设计说明稿", note: "作为小狗相关镜头的辅助参考，记录角色设定和细节要求。" },
            { src: "assets/03角色参考图/绒绒小猫动作参考.png", title: "绒绒小猫动作参考", note: "最终用于后续镜头生成的小猫动作参考。" },
            { src: "assets/03角色参考图/绒绒小狗动作参考.png", title: "绒绒小狗动作参考", note: "最终用于后续镜头生成的小狗动作参考。" },
            { src: "assets/03角色参考图/绒绒小猫咬骨头.png", title: "绒绒小猫咬骨头", note: "补充剧情动作参考，用于判断动作中角色是否稳定。" }
          ]
        }
      ],
      placeholder: "角色参考图待补充：请将图片放入 web-assets/images/characters/"
    }
  },
  {
    id: "step-4-storyboard-images",
    title: "第 4 步：分镜图生成",
    subtitle: "把文字分镜转化为可审核、可生成视频的静态画面",
    layout: "storyboard-flow",
    content: {
      intro: "分镜图是 AI 视频制作中非常关键的一步。它把文字脚本转化为具体画面，用来确认构图、角色位置、场景关系和镜头节奏。分镜图生成后，先做成粗剪版本提交审核，再根据反馈调整画面和剧情逻辑。",
      phases: [
        {
          step: "01",
          title: "输入素材：ChatGPT 输入分镜需求",
          tone: "green",
          description: "这一阶段先将分镜脚本和画面要求输入给 ChatGPT，让 AI 根据文字分镜理解镜头内容、角色动作、场景关系和画面构图，并输出可用于生成静态分镜图的画面方案。",
          notes: [
            "输入内容：分镜脚本 + 画面需求",
            "目标：让 AI 理解镜头，生成静态分镜图",
            "不是直接生成视频，而是先确定每个镜头的静态画面"
          ],
          images: [
            { src: "assets/02分镜生成/ChatGPT输入分镜需求.png", title: "ChatGPT 输入分镜需求", note: "将分镜脚本和画面要求发送给 ChatGPT，让 AI 理解每个镜头的内容。" }
          ]
        },
        {
          step: "02",
          title: "输出分镜图：三段式分镜生成",
          tone: "blue",
          description: "最终分镜被拆成多个段落生成，便于控制镜头数量、画面节奏和后续修改。每一段分镜都对应故事中的一部分内容，后续再统一组合成完整粗剪。",
          notes: [],
          images: [
            { src: "assets/02分镜生成/第一段分镜.png", title: "第一段分镜", note: "开场与角色发现阶段，建立小狗、小猫的状态和寻找礼物的动机。" },
            { src: "assets/02分镜生成/第二段分镜.png", title: "第二段分镜", note: "奔跑与寻找阶段，双线并行推进，小猫和小狗分别朝目标前进。" },
            { src: "assets/02分镜生成/第三段分镜.png", title: "第三段分镜", note: "获得礼物与相遇阶段，完成剧情收束，为最终成片情绪做铺垫。" }
          ]
        },
        {
          step: "03",
          title: "粗剪预览：分镜图组合成审核版本",
          tone: "orange",
          description: "分镜图生成后，先导入剪辑软件做成粗剪版本，用于检查故事节奏、镜头顺序和剧情逻辑。这个阶段可以提前发现问题，避免后续视频生成后再大规模返工。",
          notes: [
            "粗剪不是最终成片，而是用于审核的工作版",
            "可以在视频生成前提前调整故事逻辑和镜头顺序",
            "这是降低返工成本的重要步骤"
          ],
          roughCutImage: "assets/02分镜生成/分镜粗剪辑.png",
          roughCutVideo: "assets/02分镜生成/分镜粗剪.mp4"
        }
      ],
      experience: "分镜图不是普通草稿，而是后续图生视频的控制基础。先用分镜图做粗剪，可以提前验证镜头顺序、故事节奏和画面逻辑，避免进入视频生成阶段后再大量返工。"
    }
  },
  {
    id: "step-5-image-optimization",
    title: "第 5 步：画面生成与优化",
    subtitle: "从分镜图到可用于视频生成的高质量画面",
    layout: "storyboard-flow",
    content: {
      intro: "这一阶段的目标，是把分镜图继续优化成适合图生视频的高质量画面。重点不只是出图，还要解决角色一致性、毛绒质感和局部细节错误的问题。对于始终无法直接生成正确的角色细节，会先做二维修正，再转回实体毛绒质感。",
      phases: [
        {
          step: "01",
          title: "输入素材：即梦生成画面截图",
          tone: "green",
          description: "这一阶段先基于分镜图继续生成高质量画面。输入素材主要是即梦生成过程中的画面截图，用来展示从分镜草稿到可用画面的过渡过程。",
          notes: [],
          images: [
            { src: "assets/04画面生成/即梦生成画面截图.png", title: "即梦生成画面截图", note: "即梦生成过程截图，展示画面从分镜图向正式画面过渡的过程。" }
          ]
        },
        {
          step: "02",
          title: "输出结果：最终可用画面",
          tone: "blue",
          description: "经过筛选与优化后，保留适合后续视频生成的关键画面。这些画面不仅要风格统一，还要尽量保证毛绒质感、角色比例和场景氛围稳定。",
          notes: [],
          images: [
            { src: "assets/04画面生成/00.png", title: "画面 00", note: "可用于视频生成的正式画面之一" },
            { src: "assets/04画面生成/02.png", title: "画面 02", note: "补充关键剧情画面" },
            { src: "assets/04画面生成/互换礼物-1.png", title: "互换礼物 01", note: "表现角色交换礼物的关键情节" },
            { src: "assets/04画面生成/互换礼物-2.png", title: "互换礼物 02", note: "补充交换礼物后的情绪与动作延续" }
          ]
        },
        {
          step: "03",
          title: "细节修正案例：小狗角色局部优化",
          tone: "orange",
          description: "参考人设图在直接生成时，始终无法稳定还原正确的角色细节部位，因此需要先对二维画面进行局部修改，再转回实体毛绒质感。这一步是保证角色最终可用的重要修正过程。",
          notes: [
            "为什么要修正：参考人设图无法稳定生成正确角色细节（眼睛、嘴部、脚掌等）",
            "如何修正：先做二维局部修改，调整细节到正确状态",
            "修正目标：保留正确角色细节，再恢复实体毛绒质感",
            "最终结果：得到可用于视频生成的稳定画面"
          ],
          correctionFlow: true,
          images: [
            { src: "assets/04画面生成/01小狗生图截图.png", title: "直接生成结果", note: "直接生成时的小狗画面，角色细节存在问题" },
            { src: "assets/04画面生成/画面修改参考-01小狗.png", title: "二维局部修改", note: "针对局部细节进行二维修改的参考过程" },
            { src: "assets/04画面生成/01.png", title: "修正后最终画面", note: "修正完成后重新转回毛绒质感的最终结果" }
          ],
          whyNote: "毛绒角色的眼睛、嘴部、脚掌和局部结构在直接生图时容易出错。尤其当参考图较复杂时，模型可能无法稳定还原，因此需要人工介入修正。"
        }
      ],
      experience: "画面生成不是一次出图就结束，而是筛选与修正并行的过程。对于角色细节难以稳定还原的画面，不要反复硬生图，而是先用二维方式修正关键部位，再转回目标质感，这样更高效，也更容易保证后续视频生成的一致性。"
    }
  },
  {
    id: "step-6-video-generation",
    title: "第 6 步：视频生成",
    subtitle: "将静态画面转化为可剪辑的动态镜头",
    layout: "video-generation-flow",
    content: {
      intro: "视频生成阶段不是直接生成完整成片，而是将已经确认好的静态画面逐镜头转化为动态视频素材。每个镜头都需要明确主体动作、镜头运动、角色一致性、场景稳定和音效要求。",
      inputImages: [
        { src: "assets/05生成视频/LibTV画布截图.png", title: "LibTV 画布截图", note: "图生视频工具画布界面，展示从静态图到视频生成的工作流。" },
        { src: "assets/05生成视频/Lib TV视频提示词截图.png", title: "Lib TV 视频提示词截图", note: "视频提示词输入界面，用于控制角色动作、镜头运动和画风稳定。" },
        { src: "assets/05生成视频/生成视频文件截图.png", title: "生成视频文件截图", note: "本项目生成后的视频文件整理，每个镜头单独生成、单独管理。" }
      ],
      promptStructure: [
        { label: "主体动作", desc: "角色在画面中做什么动作，需要具体描述（如：向前小跑、尾巴轻轻摆动）" },
        { label: "镜头运动", desc: "固定镜头 / 推镜 / 跟拍 / 摇镜等，不需要运镜时必须写[固定镜头]" },
        { label: "角色一致性", desc: "保持毛绒质感、角色外形和细节不变" },
        { label: "场景稳定", desc: "背景、光影、画风保持稳定，不要出现场景跳变" },
        { label: "音效要求", desc: "只要环境音效，不要背景音乐（否则后期剪辑时每段音乐不同）" },
        { label: "禁止项", desc: "不要新增角色，不要改变画面风格，不要变形" }
      ],
      promptExample: "固定镜头。毛绒小狗在手绘草地场景中向前小跑，尾巴轻轻摆动。保持角色毛绒质感和外形不变，背景稳定。只要自然音效，不要背景音乐，不要新增角色，不要改变画面风格。",
      outputVideos: [
        { src: "assets/05生成视频/01.mp4", title: "视频片段 01", note: "单镜头生成输出" },
        { src: "assets/05生成视频/视频节点 2_副本.mp4", title: "视频节点 02", note: "单镜头生成输出" },
        { src: "assets/05生成视频/视频节点 3.mp4", title: "视频节点 03", note: "单镜头生成输出" },
        { src: "assets/05生成视频/视频节点 5.mp4", title: "视频节点 05", note: "单镜头生成输出" },
        { src: "assets/05生成视频/jimeng-2026-06-04-1534-0-2秒：镜头保持仰拍，聚焦于被四周深浅不一绿树环绕的天空，云朵缓缓飘动。2.5....mp4", title: "仰拍天空树冠镜头", note: "仰拍视角，天空与树冠，云朵缓缓飘动" },
        { src: "assets/05生成视频/jimeng-2026-06-08-9129-0-1秒：先是在水底有泡泡不断地从水底冒出，2-4秒：突然绒绒小狗抱着粉色鱼就从....mp4", title: "小狗水中抱鱼", note: "水底气泡 → 小狗抱着粉色鱼跃出水面的动作镜头" }
      ],
      experience: "视频生成阶段最重要的是控制变量。每次只让一个镜头完成一个明确动作，提示词中必须写清镜头是否固定、角色是否保持一致、是否需要音效。需要后期统一配乐时，要明确写[只要音效，不要背景音乐]，避免每段视频自带不同音乐，影响后期剪辑。"
    }
  },
  {
    id: "step-7-editing",
    title: "第 7 步：剪辑合成",
    subtitle: "将 AI 生成的视频片段组合成完整成片",
    layout: "editing-flow",
    content: {
      intro: "剪辑合成阶段的任务，是把前面生成的所有视频片段按照分镜顺序组织起来，并统一节奏、音乐、音效、转场和片尾。AI 负责生成素材，剪辑负责把素材变成完整作品。",
      timelineImage: { src: "assets/06剪辑合成.png", caption: "剪辑时间线截图：将生成视频片段按分镜顺序排列，并进行节奏调整。" },
      soundPoints: [
        "统一背景音乐，避免每段视频各自带有不同音乐",
        "补充环境音效（蝉鸣、鸟叫、风声等自然声音）",
        "前期生成视频时已设置只保留音效，后期配乐更干净"
      ],
      editPoints: [
        "按分镜顺序排列所有视频片段",
        "根据节奏调整镜头时长",
        "剪辑能解决的小问题不重新生成",
        "添加必要转场和片尾"
      ],
      finalVideo: { src: "assets/07最终成片/绒绒好朋友-定稿.mp4", poster: "assets/07最终成片/绒绒好朋友-视频封面.jpg", title: "绒绒好朋友 · 最终成片", note: "经过剪辑合成后的完整成片，时长约 1 分 15 秒。" },
      experience: "AI 视频项目中，视频生成只是素材阶段，剪辑合成才决定最终作品的节奏和完整度。后期能通过剪辑、配乐、音效和转场解决的问题，不一定要反复重新生成，这能显著降低返工成本。"
    }
  },
  {
    id: "pitfalls-vs-optimization",
    title: "弯路与优化",
    subtitle: "真正沉淀出来的经验",
    layout: "comparison",
    content: {
      left: {
        title: "一开始的弯路",
        items: [
          "想法不够细就开始生成",
          "直接尝试文生视频",
          "画面和角色不稳定",
          "不同视频片段音乐不统一",
          "返工成本高"
        ]
      },
      right: {
        title: "优化后的流程",
        items: [
          "先写大纲再执行",
          "先生成分镜图再生视频",
          "用参考图控制角色和画风",
          "后期统一配乐",
          "素材按镜头编号归档"
        ]
      },
      conclusion: "AI视频制作的关键，不是一次生成完整视频，而是把不可控的生成任务拆成一个个可检查的小步骤。"
    }
  },
  {
    id: "standard-workflow",
    title: "最终标准流程",
    subtitle: "可以直接照着做的方法",
    layout: "flow",
    content: {
      description: "单人 AI 短视频推荐流程：",
      steps: [
        { step: 1, name: "确认需求", description: "与需求方对齐目标、时长、风格" },
        { step: 2, name: "写文案大纲", description: "梳理故事结构、情绪节奏" },
        { step: 3, name: "拆分镜脚本", description: "把故事分解为可执行的镜头" },
        { step: 4, name: "准备参考素材", description: "角色、场景、画风参考" },
        { step: 5, name: "生成分镜图", description: "逐镜头生成静态画面" },
        { step: 6, name: "确认分镜图", description: "与需求方审核调整" },
        { step: 7, name: "图生视频", description: "根据分镜图生成动态视频" },
        { step: 8, name: "剪辑合成", description: "素材排序、配乐、音效" },
        { step: 9, name: "检查交付", description: "最终质检和导出" },
        { step: 10, name: "项目归档", description: "整理文档和素材库" }
      ],
      note: "先分镜，后生成；先图片，后视频；能剪辑解决的，不重新生成。"
    }
  },
  {
    id: "closing",
    title: "分享感言",
    subtitle: "第一次 AI 视频制作后的真实复盘",
    layout: "closing-reflection",
    content: {
      intro: "这次案例，是我第一次相对完整地使用 AI 完成一支视频的制作。整个过程中走了一些弯路，也逐渐摸清了一个比较清晰的大流程。但这并不代表其中每一个细节都是最优解。",
      cards: [
        {
          icon: "🎯",
          title: "这是一次真实项目复盘",
          body: "这不是一套绝对标准答案，而是一次从实际项目中沉淀出来的阶段性经验。大流程可以复用：需求确认 → 脚本分镜 → 角色参考 → 分镜图 → 画面生成 → 视频生成 → 剪辑合成。但细节仍然需要根据项目不断调整，很多控制技巧需要在实战中不断验证。"
        },
        {
          icon: "⚡",
          title: "AI 工具会不断变化",
          body: "AI 工具和模型更新很快，新的能力会不断改变制作方式。设计师需要持续跟进变化，而不是固守某一个固定工具或流程。真正重要的是保持持续学习和快速验证的能力，而不是记住某一套固定步骤。"
        },
        {
          icon: "📋",
          title: "脚本和分镜依然最重要",
          body: "无论工具怎么发展，脚本和分镜仍然决定视频的方向、节奏和最终呈现。视频最终好不好看，首先取决于故事是否清楚、镜头是否成立、节奏是否合理。脚本和分镜做好了，后面的画面生成、视频生成和剪辑合成才有明确依据。"
        }
      ],
      quote: "让 AI 负责生成，让设计师负责判断。",
      quoteSecond: "先把故事和镜头想清楚，再让 AI 帮助完成画面和视频。",
      archiveNote: "相关素材与文档已随项目归档，可在项目 assets 文件夹中查看。"
    }
  }
];

const slideIndexById = Object.fromEntries(slides.map((slide, index) => [slide.id, index]));
const sectionIdFromSlideId = (slideId) => `section-${slideId}`;

// Hierarchical table of contents
const toc = [
  { type: "item", number: "01", title: "首页 / 最终成片", slideId: "cover" },
  {
    type: "group",
    number: "02",
    title: "制作流程拆解",
    slideId: "process-breakdown-overview",
    children: [
      { number: "01", title: "需求确认", slideId: "step-1-requirement" },
      { number: "02", title: "脚本设计", slideId: "step-2-script" },
      { number: "03", title: "角色参考", slideId: "step-3-characters" },
      { number: "04", title: "分镜图生成", slideId: "step-4-storyboard-images" },
      { number: "05", title: "画面生成与优化", slideId: "step-5-image-optimization" },
      { number: "06", title: "视频生成", slideId: "step-6-video-generation" },
      { number: "07", title: "剪辑合成", slideId: "step-7-editing" }
    ]
  },
  { type: "item", number: "03", title: "弯路与优化", slideId: "pitfalls-vs-optimization" },
  { type: "item", number: "04", title: "标准流程", slideId: "standard-workflow" },
  { type: "item", number: "05", title: "分享感言", slideId: "closing" }
];

// Slideshow state
let currentSlide = 0;
let scrollDebounceTimer = null;
let isTransitioning = false;
const TRANSITION_MS = 560;
const NAV_COOLDOWN_MS = 820;
let navCooldownUntil = 0;

// Helper functions
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

// Navigation to specific slide
function canNavigate() {
  const modalOpen = e("ai-script-modal")?.classList.contains("open");
  return !isTransitioning && Date.now() > navCooldownUntil && !modalOpen;
}

function setControlsDisabled(disabled) {
  const prevBtn = e("btn-prev");
  const nextBtn = e("btn-next");
  if (prevBtn) prevBtn.disabled = disabled;
  if (nextBtn) nextBtn.disabled = disabled;
}

function goToSlide(index, force = false) {
  if (index < 0 || index >= slides.length || index === currentSlide) return;
  if (!force && !canNavigate()) return;

  const direction = index > currentSlide ? "next" : "prev";
  const slideElements = document.querySelectorAll(".slide");
  const currentEl = slideElements[currentSlide];
  const nextEl = slideElements[index];
  if (!currentEl || !nextEl) return;

  isTransitioning = true;
  navCooldownUntil = Date.now() + NAV_COOLDOWN_MS;
  setControlsDisabled(true);

  const enterClass = direction === "next" ? "slide-enter-next" : "slide-enter-prev";
  const leaveClass = direction === "next" ? "slide-leave-next" : "slide-leave-prev";

  nextEl.classList.add("active", enterClass);
  nextEl.setAttribute("aria-hidden", "false");
  currentEl.classList.add(leaveClass);

  currentSlide = index;
  updateTOC();
  updateProgress();

  setTimeout(() => {
    currentEl.classList.remove("active", "slide-leave-next", "slide-leave-prev");
    currentEl.setAttribute("aria-hidden", "true");
    nextEl.classList.remove("slide-enter-next", "slide-enter-prev");
    isTransitioning = false;
    setControlsDisabled(false);
  }, TRANSITION_MS);
}

function nextSlide() {
  if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1);
}

function prevSlide() {
  if (currentSlide > 0) goToSlide(currentSlide - 1);
}

function getCurrentSlideElement() {
  return document.querySelector(`.slide[data-index="${currentSlide}"]`);
}

function getCurrentSlideScroller() {
  const slideEl = getCurrentSlideElement();
  return slideEl?.querySelector(".slide-board") || slideEl?.querySelector(".slide-content") || slideEl;
}

function isScrollable(el) {
  return !!el && el.scrollHeight > el.clientHeight + 2;
}

function isAtScrollTop(el) {
  return !el || el.scrollTop <= 2;
}

function isAtScrollBottom(el) {
  return !el || el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
}

// Update slide visibility and styling
function updateSlideDisplay() {
  const slideElements = document.querySelectorAll(".slide");
  slideElements.forEach((el, idx) => {
    if (idx === currentSlide) {
      el.classList.add("active");
      el.setAttribute("aria-hidden", "false");
    } else {
      el.classList.remove("active");
      el.setAttribute("aria-hidden", "true");
    }
  });
}

// Update table of contents highlighting based on current visible section
function updateTOC(activeSectionId) {
  const tocItems = document.querySelectorAll(".toc-item");
  const tocParents = document.querySelectorAll(".toc-group-parent");

  tocItems.forEach((item) => {
    const isActive = item.dataset.sectionId === activeSectionId;
    item.classList.toggle("active", isActive);
  });

  tocParents.forEach((parent) => {
    const childIds = (parent.dataset.childIds || "").split(",");
    const parentId = parent.dataset.sectionId;
    const isParentActive = parentId === activeSectionId || childIds.includes(activeSectionId);
    parent.classList.toggle("active-parent", isParentActive);
  });
}

// Update progress bar
function updateProgress() {
  const progress = ((currentSlide + 1) / slides.length) * 100;
  const progressBar = e("progress-fill");
  if (progressBar) progressBar.style.width = progress + "%";
  
  const pageNum = e("page-counter");
  if (pageNum) pageNum.textContent = `${currentSlide + 1} / ${slides.length}`;

  const sidePageNum = e("sidebar-page-counter");
  if (sidePageNum) sidePageNum.textContent = `${currentSlide + 1} / ${slides.length}`;

  const prevTitle = e("prev-title");
  const nextTitle = e("next-title");
  if (prevTitle) prevTitle.textContent = slides[currentSlide - 1]?.title || "已是首页";
  if (nextTitle) nextTitle.textContent = slides[currentSlide + 1]?.title || "已到末页";

  if (!isTransitioning) {
    const prevBtn = e("btn-prev");
    const nextBtn = e("btn-next");
    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide === slides.length - 1;
  }
}

// Render sections HTML (waterfall long-page layout)
function renderSlides() {
  const container = e("sections-container");
  if (!container) return;

  container.innerHTML = slides.map((slide, idx) => {
    return `<section class="page-section" id="${sectionIdFromSlideId(slide.id)}">
      ${renderSlideContent(slide, idx)}
    </section>`;
  }).join("");
}

// Render slide content based on layout type
function renderSlideContent(slide, index) {
  const num = index + 1;
  let html = `<div class="slide-content">
    <div class="slide-board">
      <div class="slide-header">
        <div class="slide-header-text">
          <h1 class="slide-title">${slide.title}</h1>
          ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ""}
        </div>
      </div>`;

  switch (slide.layout) {
    case "hero":
      html += renderHeroSlide(slide);
      break;
    case "two-column":
      html += renderTwoColumnSlide(slide);
      break;
    case "script-flow-enhanced":
      html += renderScriptFlowEnhanced(slide);
      break;
    case "script-flow-four-cards":
      html += renderScriptFlowFourCards(slide);
      break;
    case "character-reference":
      html += renderCharacterReferenceSlide(slide);
      break;
    case "storyboard-flow":
      html += renderStoryboardFlowSlide(slide);
      break;
    case "video-generation-flow":
      html += renderVideoGenerationSlide(slide);
      break;
    case "editing-flow":
      html += renderEditingFlowSlide(slide);
      break;
    case "requirement-flow":
      html += renderRequirementFlowSlide(slide);
      break;
    case "flow":
      html += renderFlowSlide(slide);
      break;
    case "breakdown":
      html += renderBreakdownSlide(slide);
      break;
    case "comparison":
      html += renderComparisonSlide(slide);
      break;
    case "closing":
    case "closing-reflection":
      html += renderClosingSlide(slide);
      break;
    case "storyboard-extended":
      html += renderStoryboardExtendedSlide(slide);
      break;
    default:
      html += `<p>${slide.content?.description || ""}</p>`;
  }

  html += `</div></div>`;
  return html;
}

function renderHeroSlide(slide) {
  const infoMap = Object.fromEntries(slide.content?.info || []);
  const tags = (slide.content?.tags || [])
    .map((t, i) => `<span class="hero-pill ${i % 4 === 0 ? "green" : i % 4 === 1 ? "blue" : i % 4 === 2 ? "orange" : "purple"}">${t}</span>`)
    .join("");
  const dataPills = [
    infoMap["视频时长"] || "1分15秒",
    "AI视频",
    "图生视频",
    infoMap["类型"] || "产品宣传"
  ].map((item, i) => `<span class="hero-data-pill tone-${i + 1}">${item}</span>`).join("");

  let media = "";
  if (slide.media?.video) {
    media = `<figure class="hero-media">
      <video controls preload="metadata" ${slide.media.poster ? `poster="${ep(slide.media.poster)}"` : ""}>
        <source src="${ep(slide.media.video)}" type="video/mp4">
      </video>
      <figcaption>最终成片 · 1分15秒</figcaption>
    </figure>`;
  } else {
    media = `<div class="placeholder-box">视频预览</div>`;
  }

  return `<div class="hero-layout">
    <div class="hero-left">
      ${slide.content?.description ? `<p class="hero-desc">${slide.content.description}</p>` : ""}
      <div class="hero-data-row">${dataPills}</div>
      <div class="hero-feature-grid">
        <article class="hero-feature-card feature-green">
          <span>项目定位</span>
          <strong>${infoMap["类型"] || "毛绒挂件产品宣传短片"}</strong>
          <p>${infoMap["视觉风格"] || "实拍毛绒 + 手绘场景"}</p>
        </article>
        <article class="hero-feature-card feature-blue">
          <span>制作方式</span>
          <strong>${infoMap["制作方式"] || "单人设计师 + AI 工具"}</strong>
          <p>${infoMap["核心工具"] || "ChatGPT / 即梦 / Seedance / LibTV / 剪映"}</p>
        </article>
      </div>
      ${tags ? `<div class="tags hero-soft-tags">${tags}</div>` : ""}
      <div class="hero-actions">
        <button type="button" class="hero-action primary" data-target-slide-id="process-breakdown-overview">开始查看流程</button>
      </div>
    </div>
    <div class="hero-right">
      ${media}
    </div>
  </div>`;
}

function renderTwoColumnSlide(slide) {
  if (slide.id === "step-2-script") return renderScriptOutlineSlide(slide);
  if (slide.id === "step-3-storyboard") return renderStoryboardExtendedSlide(slide);

  const content = slide.content || {};
  
  let left = `<div class="column-text">`;
  
  if (content.goal) {
    left += `<div class="highlight-box">
      <strong>阶段目标</strong>
      <p>${content.goal}</p>
    </div>`;
  }
  
  if (content.description) {
    left += `<p>${content.description}</p>`;
  }

  if (content.info && Array.isArray(content.info)) {
    left += `<div class="list-box">
      <strong>项目信息</strong>
      <ul>${content.info.map(([k, v]) => `<li><strong>${k}：</strong>${v}</li>`).join("")}</ul>
    </div>`;
  }
  
  if (content.approach) {
    left += `<p><strong>做法：</strong>${content.approach}</p>`;
  }
  
  if (content.requirements && Array.isArray(content.requirements)) {
    left += `<div class="list-box">
      <strong>需求清单</strong>
      <ul>${content.requirements.map(r => `<li>${r}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.methods && Array.isArray(content.methods)) {
    left += `<div class="list-box">
      <strong>我的做法</strong>
      <ul>${content.methods.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.required && Array.isArray(content.required)) {
    left += `<div class="list-box">
      <strong>分镜脚本需包含</strong>
      <ul>${content.required.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.importance && Array.isArray(content.importance)) {
    left += `<div class="list-box">
      <strong>为什么分镜图重要</strong>
      <ul>${content.importance.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.issues && Array.isArray(content.issues)) {
    left += `<div class="list-box">
      <strong>遇到的问题与调整</strong>
      <ul>${content.issues.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.process && Array.isArray(content.process)) {
    left += `<div class="list-box">
      <strong>执行流程</strong>
      <ul>${content.process.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.whyNecessary && Array.isArray(content.whyNecessary)) {
    left += `<div class="list-box">
      <strong>为什么不能省略</strong>
      <ul>${content.whyNecessary.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.promptElements && Array.isArray(content.promptElements)) {
    left += `<div class="list-box">
      <strong>视频提示词必含要素</strong>
      <ul>${content.promptElements.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.promptExample) {
    left += `<div class="highlight-box">
      <strong>提示词示例</strong>
      <p>${content.promptExample}</p>
    </div>`;
  }

  if (content.structure && typeof content.structure === "object") {
    left += `<div class="list-box">
      <strong>故事结构</strong>
      <ul>
        ${Object.entries(content.structure).map(([k, v]) => `<li><strong>${k}：</strong>${v}</li>`).join("")}
      </ul>
    </div>`;
  }

  if (content.toolChoice && Array.isArray(content.toolChoice)) {
    left += `<div class="list-box">
      <strong>工具选择</strong>
      <ul>${content.toolChoice.map(item => `<li><strong>${item.tool}：</strong>${item.use}</li>`).join("")}</ul>
    </div>`;
  }

  if (content.key) {
    left += `<div class="highlight-box">
      <strong>选择原则</strong>
      <p>${content.key}</p>
    </div>`;
  }
  
  if (content.challenges && Array.isArray(content.challenges)) {
    left += `<div class="list-box">
      <strong>难点</strong>
      <ul>${content.challenges.map(c => `<li>${c}</li>`).join("")}</ul>
    </div>`;
  }
  
  if (content.whyNeeded && Array.isArray(content.whyNeeded)) {
    left += `<div class="list-box">
      <strong>为什么必要</strong>
      <ul>${content.whyNeeded.map(w => `<li>${w}</li>`).join("")}</ul>
    </div>`;
  }
  
  if (content.tips && Array.isArray(content.tips)) {
    left += `<div class="list-box">
      <strong>经验建议</strong>
      <ul>${content.tips.map(t => `<li>${t}</li>`).join("")}</ul>
    </div>`;
  }
  
  const stageCards = [];
  if (content.inputOutput?.input) stageCards.push({ label: "输入素材", value: content.inputOutput.input });
  if (content.approach) stageCards.push({ label: "关键操作", value: content.approach });
  if (content.inputOutput?.output) stageCards.push({ label: "输出结果", value: content.inputOutput.output });
  if (content.experience) stageCards.push({ label: "本阶段经验", value: content.experience });
  if (stageCards.length) {
    left += `<div class="stage-grid">
      ${stageCards.map((item) => `<article class="stage-card"><strong>${item.label}</strong><p>${item.value}</p></article>`).join("")}
    </div>`;
  }
  
  left += `</div>`;

  let right = `<div class="column-media">`;
  if (content.rightMediaTitle) {
    right += `<div class="media-text"><strong>${content.rightMediaTitle}</strong>${content.rightMediaDescription ? `<p>${content.rightMediaDescription}</p>` : ""}</div>`;
  }
  if (slide.media?.groups && Array.isArray(slide.media.groups)) {
    right += renderGroupedMediaGallery(slide);
  } else if (slide.media?.images && Array.isArray(slide.media.images)) {
    right += renderMediaGallery(slide);
  } else if (slide.media?.video) {
    right += `<figure><video controls preload="metadata"><source src="${ep(slide.media.video)}" type="video/mp4"></video></figure>`;
  } else if (slide.media?.image) {
    right += `<figure><img src="${ep(slide.media.image)}" alt="${slide.title}" data-lightbox-src="${ep(slide.media.image)}" data-lightbox-caption="${slide.title}"></figure>`;
  } else {
    right += `<div class="placeholder">${slide.media?.placeholder || "图片或视频待补充"}</div>`;
  }
  right += `</div>`;

  let extra = "";
  if (content.storyBeats && Array.isArray(content.storyBeats)) {
    extra += `<section class="story-beats">
      ${content.storyBeats.map((beat, idx) => `
        <article class="story-beat-card">
          <span class="story-beat-num">${beat.number}</span>
          <h4>${beat.title}</h4>
          <p>${beat.description}</p>
        </article>
        ${idx < content.storyBeats.length - 1 ? `<span class="story-beat-arrow">→</span>` : ""}
      `).join("")}
    </section>`;
  }

  if (content.nextStepNote) {
    extra += `<div class="next-step-note">${content.nextStepNote}</div>`;
  }

  return `<div class="two-column-page"><div class="two-column">${left}${right}</div>${extra}</div>`;
}

function renderMediaGallery(slide) {
  const images = slide.media?.images || [];
  if (!images.length) return "";
  const [primary, ...rest] = images;
  const primaryCaption = primary.title || slide.title;
  const thumbs = rest.map((item) => `
    <figure class="reference-thumb" data-lightbox-src="${ep(item.src)}" data-lightbox-caption="${esc(item.title || slide.title)}">
      <img src="${ep(item.src)}" alt="${esc(item.title || slide.title)}" loading="lazy">
      <figcaption>
        ${item.tag ? `<span>${esc(item.tag)}</span>` : ""}
        <strong>${esc(item.title || "")}</strong>
      </figcaption>
    </figure>
  `).join("");

  return `<section class="reference-gallery">
    <div class="reference-gallery-head">
      <strong>${esc(slide.media.galleryTitle || "素材参考")}</strong>
      ${slide.media.galleryDescription ? `<p>${esc(slide.media.galleryDescription)}</p>` : ""}
    </div>
    <figure class="reference-primary" data-lightbox-src="${ep(primary.src)}" data-lightbox-caption="${esc(primaryCaption)}">
      <img src="${ep(primary.src)}" alt="${esc(primaryCaption)}">
      <figcaption>
        ${primary.tag ? `<span>${esc(primary.tag)}</span>` : ""}
        <strong>${esc(primaryCaption)}</strong>
        <em>点击查看大图</em>
      </figcaption>
    </figure>
    <div class="reference-grid">${thumbs}</div>
  </section>`;
}

function renderGroupedMediaGallery(slide) {
  const groups = slide.media?.groups || [];
  if (!groups.length) return "";

  const renderImage = (item) => {
    if (!item?.src) {
      return `<div class="reference-process-placeholder">${esc(item?.title || "素材待补充")}</div>`;
    }

    return `<figure class="reference-process-image" data-lightbox-src="${ep(item.src)}" data-lightbox-caption="${esc(item.title || slide.title)}">
      <img src="${ep(item.src)}" alt="${esc(item.title || slide.title)}" loading="lazy">
      <figcaption>
        <strong>${esc(item.title || "")}</strong>
        ${item.note ? `<span>${esc(item.note)}</span>` : ""}
      </figcaption>
    </figure>`;
  };

  return `<section class="reference-process-gallery">
    <div class="reference-gallery-head">
      <strong>${esc(slide.media.galleryTitle || "角色参考素材")}</strong>
      ${slide.media.galleryDescription ? `<p>${esc(slide.media.galleryDescription)}</p>` : ""}
    </div>
    ${groups.map((group) => `
      <article class="reference-process-group tone-${esc(group.tone || "green")}">
        <header class="reference-process-header">
          <span>${esc(group.step || "")}</span>
          <div>
            <h3>${esc(group.title || "")}</h3>
            ${group.description ? `<p>${esc(group.description)}</p>` : ""}
          </div>
        </header>
        <div class="reference-process-grid count-${Math.min((group.images || []).length, 4)}">
          ${(group.images || []).slice(0, 4).map(renderImage).join("")}
        </div>
      </article>
    `).join("")}
  </section>`;
}

function renderCharacterReferenceSlide(slide) {
  const media = slide.media || {};
  const groups = media.groups || [];

  return `<div class="character-reference-page">
    ${media.intro ? `<section class="character-reference-intro"><p>${esc(media.intro)}</p></section>` : ""}
    <section class="character-flow">
      ${groups.map((group) => renderCharacterReferenceGroup(slide, group)).join("")}
    </section>
    ${media.experience ? `<section class="character-experience-card">
      <strong>${esc(media.experienceTitle || "本阶段关键经验")}</strong>
      <p>${esc(media.experience)}</p>
    </section>` : ""}
  </div>`;
}

function renderCharacterReferenceGroup(slide, group) {
  const images = (group.images || []).slice(0, 5);
  return `<article class="character-flow-card tone-${esc(group.tone || "green")}">
    <header class="character-flow-header">
      <span>${esc(group.step || "")}</span>
      <div>
        <h3>${esc(group.title || "")}</h3>
        ${group.description ? `<p>${esc(group.description)}</p>` : ""}
      </div>
    </header>
    <div class="character-image-grid count-${Math.min(images.length, 5)}">
      ${images.map((item) => renderCharacterReferenceImage(slide, item, group.step === "03")).join("")}
    </div>
  </article>`;
}

function renderCharacterReferenceImage(slide, item, isOutput = false) {
  if (!item?.src) {
    return `<div class="character-image-placeholder">${esc(item?.title || "素材待补充")}</div>`;
  }

  return `<figure class="character-image-card ${isOutput ? "is-output" : ""}" data-lightbox-src="${ep(item.src)}" data-lightbox-caption="${esc(item.title || slide.title)}">
    <img src="${ep(item.src)}" alt="${esc(item.title || slide.title)}" loading="lazy">
    <figcaption>
      <strong>${esc(item.title || "")}</strong>
      ${item.note ? `<span>${esc(item.note)}</span>` : ""}
    </figcaption>
  </figure>`;
}

function renderScriptFlowEnhanced(slide) {
  const content = slide.content || {};
  const transform = content.transformFlow || [];

  // Card 1: Designer's Original Idea
  const card1 = `
    <article class="script-flow-card card-image">
      <div class="card-header">
        <h3>${transform[0]?.title || "设计师原始想法"}</h3>
        <p class="card-desc">${transform[0]?.description || ""}</p>
      </div>
      <div class="card-body">
        ${slide.media?.image 
          ? `<figure class="card-media">
              <img src="${ep(slide.media.image)}" alt="${transform[0]?.title || "原始想法"}" data-lightbox-src="${ep(slide.media.image)}" data-lightbox-caption="${transform[0]?.title || "原始想法"}">
            </figure>` 
          : `<div class="placeholder">${slide.media?.placeholder || "图片待补充"}</div>`
        }
      </div>
      <div class="card-footer">
        <p class="card-tip">${transform[0]?.tip || ""}</p>
      </div>
    </article>`;

  // Card 2: AI Structuring
  const aiActionsHtml = transform[1]?.aiActions 
    ? `<ul class="ai-actions">
        ${transform[1].aiActions.map(action => `<li>${action}</li>`).join("")}
      </ul>`
    : "";
  
  const card2 = `
    <article class="script-flow-card card-actions">
      <div class="card-header">
        <h3>${transform[1]?.title || "AI 结构化整理"}</h3>
        <p class="card-desc">${transform[1]?.description || ""}</p>
      </div>
      <div class="card-body">
        ${aiActionsHtml}
      </div>
      <div class="card-footer">
        <p class="card-tip">${transform[1]?.tip || ""}</p>
      </div>
    </article>`;

  // Card 3: Initial Storyboard Script
  const docPreview = content.docPreviewLines && content.docPreviewLines.length > 0
    ? `<div class="doc-preview">
        <ul>
          ${content.docPreviewLines.map(line => `<li>${line}</li>`).join("")}
        </ul>
      </div>`
    : "";

  const card3 = `
    <article class="script-flow-card card-doc">
      <div class="card-header">
        <h3>${transform[2]?.title || "初版分镜脚本"}</h3>
        <p class="card-desc">${transform[2]?.description || ""}</p>
      </div>
      <div class="card-body">
        ${docPreview}
        <div class="doc-actions">
          <button type="button" class="doc-btn" data-open-ai-script>查看完整 AI 分镜脚本</button>
        </div>
      </div>
      <div class="card-footer">
        <p class="card-tip">${transform[2]?.tip || ""}</p>
      </div>
    </article>`;

  // Story beats section
  const storyBeats = content.storyBeats && Array.isArray(content.storyBeats)
    ? `<section class="story-beats-supplement">
        <h4>AI 整理出的故事节奏</h4>
        ${content.storyBeats.map((beat, idx) => `
          <article class="story-beat-card">
            <span class="story-beat-num">${beat.number}</span>
            <h5>${beat.title}</h5>
            <p>${beat.description}</p>
          </article>
          ${idx < content.storyBeats.length - 1 ? `<span class="story-beat-arrow">→</span>` : ""}
        `).join("")}
      </section>`
    : "";

  // Notes
  const notesHtml = `${content.aiNote ? `<div class="ai-note-box">${content.aiNote}</div>` : ""}`;

  return `<div class="script-flow-enhanced">
    <div class="script-intro">
      <p>${content.intro || ""}</p>
    </div>
    
    <div class="script-flow-cards">
      ${card1}
      <span class="flow-arrow">→</span>
      ${card2}
      <span class="flow-arrow">→</span>
      ${card3}
    </div>
    
    ${storyBeats}
    ${notesHtml}
  </div>`;
}

function renderScriptFlowFourCards(slide) {
  const content = slide.content || {};
  const transform = content.transformFlow || [];

  // Helper: Render a single card
  const renderCard = (card, index, isExtended = false) => {
    const docTitle = isExtended ? content.extendedDocTitle : content.docTitle;
    const docCardTitle = isExtended ? content.extendedDocCardTitle : content.docCardTitle;
    const docPreviewLines = isExtended ? content.extendedDocPreviewLines : content.docPreviewLines;
    const buttonDataAttr = isExtended ? 'data-open-storyboard-extended' : 'data-open-ai-script';
    const buttonText = isExtended ? '查看完整人工分镜脚本' : '查看完整 AI 分镜脚本';

    let cardContent = '';
    
    if (card.cardType === 'image') {
      cardContent = `
        <div class="card-body">
          ${slide.media?.image 
            ? `<figure class="card-media">
                <img src="${ep(slide.media.image)}" alt="${card.title}" data-lightbox-src="${ep(slide.media.image)}" data-lightbox-caption="${card.title}">
                <figcaption>点击查看大图</figcaption>
              </figure>` 
            : `<div class="placeholder">${slide.media?.placeholder || "图片待补充"}</div>`
          }
        </div>`;
    } else if (card.cardType === 'actions') {
      const actions = card.aiActions || [];
      cardContent = `
        <div class="card-body">
          <ul class="ai-actions">
            ${actions.map(action => `<li>${action}</li>`).join("")}
          </ul>
        </div>`;
    } else if (card.cardType === 'doc' || card.cardType === 'doc-extended') {
      const preview = docPreviewLines || [];
      cardContent = `
        <div class="card-body">
          <div class="doc-preview">
            <ul>
              ${preview.map(line => `<li>${line}</li>`).join("")}
            </ul>
          </div>
          <div class="doc-actions">
            <button type="button" class="doc-btn" ${buttonDataAttr}>${buttonText}</button>
          </div>
        </div>`;
    }

    return `
      <article class="script-flow-card card-${card.cardType}">
        <div class="card-header">
          <span class="process-card-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${card.title}</h3>
          <p class="card-desc">${card.description || ""}</p>
        </div>
        ${cardContent}
        <div class="card-footer">
          <p class="card-tip">${card.tip || ""}</p>
        </div>
      </article>`;
  };

  // Render 4 cards
  let cardsHtml = '';
  for (let i = 0; i < transform.length; i++) {
    cardsHtml += renderCard(transform[i], i, i === 3);
    if (i < transform.length - 1) {
      cardsHtml += `<span class="flow-arrow">→</span>`;
    }
  }

  // Story beats section
  const storyBeats = content.storyBeats && Array.isArray(content.storyBeats)
    ? `<section class="story-beats-supplement">
        <h4>AI 整理出的故事节奏</h4>
        ${content.storyBeats.map((beat, idx) => `
          <article class="story-beat-card">
            <span class="story-beat-num">${beat.number}</span>
            <h5>${beat.title}</h5>
            <p>${beat.description}</p>
          </article>
          ${idx < content.storyBeats.length - 1 ? `<span class="story-beat-arrow">→</span>` : ""}
        `).join("")}
      </section>`
    : "";

  // Notes
  const notesHtml = `${content.aiNote ? `<div class="ai-note-box">${content.aiNote}</div>` : ""}`;

  return `<div class="script-flow-enhanced">
    <div class="script-intro phase-note">
      <span>这一阶段</span>
      <p>${content.phaseNote || content.intro || ""}</p>
    </div>
    
    <div class="script-flow-cards">
      ${cardsHtml}
    </div>
    
    ${storyBeats}
    ${notesHtml}
  </div>`;
}

function renderScriptOutlineSlide(slide) {
  const content = slide.content || {};

  const transform = (content.transformFlow || []).map((item, idx, arr) => `
    <article class="transform-card">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </article>
    ${idx < arr.length - 1 ? `<span class="transform-arrow">→</span>` : ""}
  `).join("");

  const imgBlock = slide.media?.image
    ? `<figure class="asset-image-card">
        <img src="${ep(slide.media.image)}" alt="${content.rightMediaTitle || "原始想法"}" data-lightbox-src="${ep(slide.media.image)}" data-lightbox-caption="${content.rightMediaTitle || "原始想法"}">
      </figure>`
    : `<div class="placeholder">${slide.media?.placeholder || "图片素材待补充"}</div>`;

  const docBlock = slide.media?.doc
    ? `<article class="doc-preview-card">
        <span class="doc-chip">AI 输出</span>
        <h4>${content.docCardTitle || "AI 梳理版本"}</h4>
        <p class="doc-intro">${content.docDescription || "AI 根据原始想法整理出的初版分镜结构，为后续人工修改提供基础。"}</p>
        <div class="doc-preview-body">
          <h5>${content.docPreviewTitle || "内容摘要"}</h5>
          <ul>${(content.docPreviewLines || []).map((line) => `<li>${line}</li>`).join("")}</ul>
        </div>
        <div class="doc-actions">
          <button type="button" class="doc-btn" data-open-ai-script>查看完整 AI 分镜脚本</button>
        </div>
      </article>`
    : `<article class="doc-preview-card">
        <span class="doc-chip">AI 输出</span>
        <h4>${content.docCardTitle || "AI 梳理版本"}</h4>
        <p class="doc-intro">${content.docDescription || "文档已找到，但无法直接预览。"}</p>
        <div class="doc-actions">
          <button type="button" class="doc-btn" data-open-ai-script>查看完整 AI 分镜脚本</button>
        </div>
      </article>`;

  const storyBeats = content.storyBeats && Array.isArray(content.storyBeats)
    ? `<section class="story-beats">
        ${content.storyBeats.map((beat, idx) => `
          <article class="story-beat-card">
            <span class="story-beat-num">${beat.number}</span>
            <h4>${beat.title}</h4>
            <p>${beat.description}</p>
          </article>
          ${idx < content.storyBeats.length - 1 ? `<span class="story-beat-arrow">→</span>` : ""}
        `).join("")}
      </section>`
    : "";

  return `<div class="script-outline-page">
    <div class="script-intro">
      <p>${content.intro || ""}</p>
    </div>
    <div class="transform-flow">${transform}</div>
    <section class="assets-dual">
      <article class="asset-panel">
        <div class="media-text">
          <strong>${content.rightMediaTitle || "发送给 AI 的原始故事想法"}</strong>
          ${content.rightMediaDescription ? `<p>${content.rightMediaDescription}</p>` : ""}
        </div>
        ${imgBlock}
      </article>
      <article class="asset-panel">
        <div class="media-text">
          <strong>${content.docTitle || "AI 梳理后的初版分镜脚本"}</strong>
          ${content.docDescription ? `<p>${content.docDescription}</p>` : ""}
        </div>
        ${docBlock}
      </article>
    </section>
    ${storyBeats}
    ${content.aiNote ? `<div class="next-step-note">${content.aiNote}</div>` : ""}
    ${content.nextStepNote ? `<div class="next-step-note">${content.nextStepNote}</div>` : ""}
  </div>`;
}

function renderStoryboardExtendedSlide(slide) {
  const content = slide.content || {};

  const transform = (content.transformFlow || []).map((item, idx, arr) => `
    <article class="transform-card">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </article>
    ${idx < arr.length - 1 ? `<span class="transform-arrow">→</span>` : ""}
  `).join("");

  const docBlock = `<article class="doc-preview-card">
    <span class="doc-chip">人工延展</span>
    <h4>${content.docCardTitle || "人工延展版本"}</h4>
    <p class="doc-intro">${content.docDescription || ""}</p>
    <div class="doc-metadata">
      <div class="metadata-item"><strong>镜头数量</strong> <span>${content.docMetadata?.frameCount || 26}</span></div>
      <div class="metadata-item"><strong>用途</strong> <span>${content.docMetadata?.purpose || ""}</span></div>
      <div class="metadata-item"><strong>特点</strong> <span>${content.docMetadata?.features || ""}</span></div>
    </div>
    <div class="doc-actions">
      <button type="button" class="doc-btn" data-open-storyboard-extended>查看完整人工分镜脚本</button>
    </div>
  </article>`;

  return `<div class="script-outline-page storyboard-extended-page">
    <div class="script-intro">
      <p>${content.intro || ""}</p>
    </div>
    ${content.goal ? `<div class="highlight-box" style="margin-bottom: 24px;">
      <strong>阶段目标</strong>
      <p>${content.goal}</p>
    </div>` : ""}
    <div class="transform-flow">${transform}</div>
    <section class="assets-dual">
      <article class="asset-panel">
        <div class="media-text">
          <strong>${content.docTitle || "人工调整后的分镜脚本"}</strong>
        </div>
        ${docBlock}
      </article>
    </section>
    ${content.whyNeeded ? `<section class="why-needed-section">
      <h3>为什么必须拆分镜</h3>
      <ul class="bullet-list">
        ${content.whyNeeded.map(item => `<li>${item}</li>`).join("")}
      </ul>
    </section>` : ""}
    ${content.required ? `<section class="required-section">
      <h3>分镜脚本需包含</h3>
      <div class="required-grid">
        ${content.required.map(item => `<div class="required-item">✓ ${item}</div>`).join("")}
      </div>
    </section>` : ""}
    ${content.aiNote ? `<div class="ai-note-box">${content.aiNote}</div>` : ""}
  </div>`;
}

function renderRequirementFlowSlide(slide) {
  const c = slide.content || {};
  const toneColors = { green: "#57b46a", blue: "#6baed6", orange: "#f3a35c" };

  const modulesHtml = (c.modules || []).map(mod => {
    const color = toneColors[mod.tone] || toneColors.green;

    // Tags row
    const tagsHtml = (mod.tags || []).map(t => `
      <div class="rf-tag">
        <span class="rf-tag-label">${esc(t.label)}</span>
        <span class="rf-tag-value">${esc(t.value)}</span>
      </div>
    `).join("");

    // Style points (module 03)
    const styleHtml = (mod.stylePoints || []).map(p => `
      <div class="rf-style-point rf-style-${p.icon === "✓" ? "yes" : "no"}">
        <span class="rf-style-icon">${p.icon}</span>
        <span>${esc(p.text)}</span>
      </div>
    `).join("");

    // Images grid
    const imagesHtml = (mod.images || []).length ? `
      <div class="vg-images-grid rf-images">
        ${mod.images.map(img => `
          <figure class="sb-image-card" data-lightbox-src="${ep(img.src)}" data-lightbox-caption="${esc(img.caption || "")}">
            <img src="${ep(img.src)}" alt="${esc(img.caption || "")}" loading="lazy">
            <figcaption><span>${esc(img.caption || "")}</span></figcaption>
          </figure>
        `).join("")}
      </div>
    ` : "";

    // Videos
    const videosHtml = (mod.videos || []).map(v => `
      <figure class="ef-video-figure rf-video">
        <video controls preload="metadata">
          <source src="${ep(v.src)}" type="video/mp4">
        </video>
        <figcaption>
          <strong>${esc(v.title || "")}</strong>
          ${v.note ? `<span>${esc(v.note)}</span>` : ""}
        </figcaption>
      </figure>
    `).join("");

    return `<div class="vg-section rf-module" style="--rf-color:${color}">
      <div class="vg-section-header">
        <span class="vg-step-num" style="background:${color};">${mod.step}</span>
        <h3>${esc(mod.title)}</h3>
      </div>
      <p class="vg-section-desc">${esc(mod.desc)}</p>
      ${tagsHtml ? `<div class="rf-tags">${tagsHtml}</div>` : ""}
      ${styleHtml ? `<div class="rf-style-list">${styleHtml}</div>` : ""}
      ${imagesHtml}
      ${videosHtml}
    </div>`;
  }).join("");

  // Conclusion
  const con = c.conclusion || {};
  const conTagsHtml = (con.tags || []).map(t => `
    <div class="rf-con-tag">
      <span class="rf-con-label">${esc(t.label)}</span>
      <span class="rf-con-value">${esc(t.value)}</span>
    </div>
  `).join("");
  const conclusionHtml = `<div class="vg-section rf-conclusion">
    <div class="vg-section-header">
      <span class="vg-step-num" style="background:#9370db;">04</span>
      <h3>本阶段结论</h3>
    </div>
    <p class="vg-section-desc">${esc(con.summary || "")}</p>
    ${conTagsHtml ? `<div class="rf-con-tags">${conTagsHtml}</div>` : ""}
    ${con.experience ? `<aside class="sb-experience-card" style="margin-top:16px;">${esc(con.experience)}</aside>` : ""}
  </div>`;

  return `<div class="requirement-flow-page">
    ${c.intro ? `<p class="sb-intro">${esc(c.intro)}</p>` : ""}
    ${modulesHtml}
    ${conclusionHtml}
  </div>`;
}

function renderEditingFlowSlide(slide) {
  const c = slide.content || {};

  // 01 input note card
  const inputHtml = `<div class="vg-section">
    <div class="vg-section-header">
      <span class="vg-step-num">01</span>
      <h3>输入素材：AI 生成的视频片段</h3>
    </div>
    <p class="vg-section-desc">剪辑阶段的输入，是前面逐镜头生成的视频片段。这些素材需要按照分镜脚本重新组合，而不是直接拼接。输入素材来自第 6 步生成的全部视频片段。</p>
    <div class="ef-why-list">
      <div class="ef-why-item">📹 单镜头独立生成的视频片段</div>
      <div class="ef-why-item">📋 分镜脚本（用于确认顺序）</div>
      <div class="ef-why-item">🎵 背景音乐与环境音效素材</div>
      <div class="ef-why-item">🎬 片尾素材</div>
    </div>
  </div>`;

  // 02 timeline image
  const tl = c.timelineImage || {};
  const timelineHtml = tl.src ? `<div class="vg-section">
    <div class="vg-section-header">
      <span class="vg-step-num" style="background:#6baed6;">02</span>
      <h3>剪辑时间线：按分镜顺序合成</h3>
    </div>
    <p class="vg-section-desc">将所有视频片段导入剪辑软件，按分镜顺序排列，并根据节奏调整每个镜头的时长。</p>
    <figure class="ef-timeline-figure" data-lightbox-src="${ep(tl.src)}" data-lightbox-caption="${esc(tl.caption || "")}">
      <img src="${ep(tl.src)}" alt="剪辑时间线截图" loading="lazy">
      <figcaption>${esc(tl.caption || "")}</figcaption>
    </figure>
  </div>` : "";

  // 03 sound & rhythm cards
  const soundItems = (c.soundPoints || []).map(p => `<li>${esc(p)}</li>`).join("");
  const editItems = (c.editPoints || []).map(p => `<li>${esc(p)}</li>`).join("");
  const soundHtml = `<div class="vg-section">
    <div class="vg-section-header">
      <span class="vg-step-num" style="background:#f3a35c;">03</span>
      <h3>声音与节奏统一</h3>
    </div>
    <p class="vg-section-desc">多段 AI 视频如果各自带有不同音乐，合成后会非常割裂。因此前面生成视频时就要尽量只保留音效，后期统一添加背景音乐和环境音。</p>
    <div class="ef-two-col">
      <div class="ef-col-card">
        <strong>🔊 声音处理</strong>
        <ul>${soundItems}</ul>
      </div>
      <div class="ef-col-card">
        <strong>✂️ 节奏处理</strong>
        <ul>${editItems}</ul>
      </div>
    </div>
  </div>`;

  // 04 final video
  const fv = c.finalVideo || {};
  const finalHtml = fv.src ? `<div class="vg-section">
    <div class="vg-section-header">
      <span class="vg-step-num" style="background:#9370db;">04</span>
      <h3>最终导出：完整成片</h3>
    </div>
    <p class="vg-section-desc">经过剪辑合成后，导出完整成片，并整理项目素材，方便后续复盘和复用。</p>
    <div class="ef-final-video">
      <figure class="ef-video-figure">
        <video controls preload="metadata" poster="${ep(fv.poster || "")}">
          <source src="${ep(fv.src)}" type="video/mp4">
        </video>
        <figcaption>
          <strong>${esc(fv.title || "最终成片")}</strong>
          ${fv.note ? `<span>${esc(fv.note)}</span>` : ""}
        </figcaption>
      </figure>
    </div>
  </div>` : `<div class="vg-section"><p class="vg-section-desc">最终成片待补充。</p></div>`;

  const expHtml = c.experience ? `
    <aside class="sb-experience-card">
      <strong>本阶段关键经验</strong>
      <p>${esc(c.experience)}</p>
    </aside>` : "";

  return `<div class="editing-flow-page">
    ${c.intro ? `<p class="sb-intro">${esc(c.intro)}</p>` : ""}
    ${inputHtml}
    ${timelineHtml}
    ${soundHtml}
    ${finalHtml}
    ${expHtml}
  </div>`;
}

function renderVideoGenerationSlide(slide) {
  const c = slide.content || {};

  // 01 Input images
  const inputImagesHtml = (c.inputImages || []).length
    ? `<div class="vg-section">
        <div class="vg-section-header">
          <span class="vg-step-num">01</span>
          <h3>输入素材：图生视频工作流程</h3>
        </div>
        <p class="vg-section-desc">视频生成前，需要先确认静态画面、角色参考图和动作提示词。静态画面决定构图和风格，角色参考图用于约束角色一致性，提示词用于控制动作和镜头。</p>
        <div class="vg-images-grid">
          ${c.inputImages.map(img => `
            <figure class="sb-image-card" data-lightbox-src="${ep(img.src)}" data-lightbox-caption="${esc(img.title)}">
              <img src="${ep(img.src)}" alt="${esc(img.title)}" loading="lazy">
              <figcaption>
                <strong>${esc(img.title)}</strong>
                ${img.note ? `<span>${esc(img.note)}</span>` : ""}
              </figcaption>
            </figure>
          `).join("")}
        </div>
      </div>`
    : `<div class="vg-section">
        <div class="vg-section-header">
          <span class="vg-step-num">01</span>
          <h3>输入素材</h3>
        </div>
        <p class="vg-section-desc">本阶段输入主要来自前一步「画面生成与优化」中筛选出的最终画面图，以及角色参考图。</p>
      </div>`;

  // 02 Prompt structure
  const promptItems = (c.promptStructure || []).map(item => `
    <div class="vg-prompt-item">
      <strong>${esc(item.label)}</strong>
      <p>${esc(item.desc)}</p>
    </div>
  `).join("");

  const promptHtml = `<div class="vg-section">
    <div class="vg-section-header">
      <span class="vg-step-num" style="background:#6baed6;">02</span>
      <h3>视频生成设置：图生视频提示词结构</h3>
    </div>
    <p class="vg-section-desc">视频提示词需要把画面动起来，但不能让角色、场景和风格乱变。因此提示词必须明确动作、镜头、角色一致性和禁止项。</p>
    <div class="vg-prompt-grid">${promptItems}</div>
    ${c.promptExample ? `
      <div class="vg-prompt-example">
        <strong>提示词示例</strong>
        <p>${esc(c.promptExample)}</p>
      </div>
    ` : ""}
  </div>`;

  // 03 Output videos
  const videoItems = (c.outputVideos || []).map(v => `
    <figure class="vg-video-card">
      <div class="vg-video-wrap">
        <video controls preload="metadata">
          <source src="${ep(v.src)}" type="video/mp4">
        </video>
      </div>
      <figcaption>
        <strong>${esc(v.title)}</strong>
        ${v.note ? `<span>${esc(v.note)}</span>` : ""}
      </figcaption>
    </figure>
  `).join("");

  const videosHtml = `<div class="vg-section">
    <div class="vg-section-header">
      <span class="vg-step-num" style="background:#f3a35c;">03</span>
      <h3>输出素材：生成后的视频片段</h3>
    </div>
    <p class="vg-section-desc">生成后的视频片段并不是最终成片，而是后续剪辑阶段使用的素材。单镜头独立生成更可控，但也需要更多筛选和管理。</p>
    <div class="vg-video-grid">${videoItems}</div>
  </div>`;

  // 04 Experience
  const expHtml = c.experience ? `
    <aside class="sb-experience-card">
      <strong>本阶段关键经验</strong>
      <p>${esc(c.experience)}</p>
    </aside>` : "";

  return `<div class="video-generation-page">
    ${c.intro ? `<p class="sb-intro">${esc(c.intro)}</p>` : ""}
    ${inputImagesHtml}
    ${promptHtml}
    ${videosHtml}
    ${expHtml}
  </div>`;
}

function renderStoryboardFlowSlide(slide) {
  const content = slide.content || {};
  const phases = content.phases || [];

  const toneColors = {
    green: { bg: "rgba(87,180,106,0.08)", border: "#57b46a", label: "#2d5a3d", num: "#57b46a" },
    blue:  { bg: "rgba(107,174,214,0.09)", border: "#6baed6", label: "#1a4a6a", num: "#6baed6" },
    orange:{ bg: "rgba(243,163,92,0.09)",  border: "#f3a35c", label: "#7a3d10", num: "#f3a35c" }
  };

  const renderPhase = (phase) => {
    const c = toneColors[phase.tone] || toneColors.green;

    // Images grid — correction flow shows arrows between images
    let imagesHtml = "";
    if (phase.images && phase.images.length) {
      const count = phase.images.length;
      // For 4-image output, use 2×2 grid; otherwise 1/2/3 cols
      let colsClass = count === 1 ? "sb-cols-1" : count === 2 ? "sb-cols-2" : count === 4 ? "sb-cols-4" : "sb-cols-3";

      if (phase.correctionFlow) {
        // Show as horizontal flow with arrows
        imagesHtml = `<div class="sb-correction-flow">
          ${phase.images.map((img, i) => `
            <div class="sb-correction-step">
              <figure class="sb-image-card" data-lightbox-src="${ep(img.src)}" data-lightbox-caption="${esc(img.title)}">
                <img src="${ep(img.src)}" alt="${esc(img.title)}" loading="lazy">
                <figcaption>
                  <strong>${esc(img.title)}</strong>
                  ${img.note ? `<span>${esc(img.note)}</span>` : ""}
                </figcaption>
              </figure>
            </div>
            ${i < phase.images.length - 1 ? `<span class="sb-correction-arrow">→</span>` : ""}
          `).join("")}
        </div>`;
      } else {
        imagesHtml = `<div class="sb-images-grid ${colsClass}">
          ${phase.images.map(img => `
            <figure class="sb-image-card" data-lightbox-src="${ep(img.src)}" data-lightbox-caption="${esc(img.title)}">
              <img src="${ep(img.src)}" alt="${esc(img.title)}" loading="lazy">
              <figcaption>
                <strong>${esc(img.title)}</strong>
                ${img.note ? `<span>${esc(img.note)}</span>` : ""}
              </figcaption>
            </figure>
          `).join("")}
        </div>`;
      }
    }

    // Rough cut for storyboard phase
    let roughCutHtml = "";
    if (phase.roughCutImage || phase.roughCutVideo) {
      roughCutHtml = `<div class="sb-roughcut-grid">
        ${phase.roughCutImage ? `
          <figure class="sb-image-card" data-lightbox-src="${ep(phase.roughCutImage)}" data-lightbox-caption="分镜粗剪辑">
            <img src="${ep(phase.roughCutImage)}" alt="分镜粗剪辑" loading="lazy">
            <figcaption><strong>分镜粗剪辑</strong><span>剪辑软件界面截图</span></figcaption>
          </figure>
        ` : `<div class="sb-placeholder">分镜粗剪辑.png 待补充</div>`}
        ${phase.roughCutVideo ? `
          <figure class="sb-video-card">
            <video controls preload="metadata" style="width:100%;border-radius:12px;display:block;">
              <source src="${ep(phase.roughCutVideo)}" type="video/mp4">
            </video>
            <figcaption><strong>分镜粗剪视频</strong><span>可在此预览镜头顺序和节奏</span></figcaption>
          </figure>
        ` : `<div class="sb-placeholder">分镜粗剪.mp4 待补充</div>`}
      </div>`;
    }

    // Why note card (for correction case)
    const whyNoteHtml = phase.whyNote ? `
      <div class="sb-why-note">
        <strong>为什么不能直接生成</strong>
        <p>${esc(phase.whyNote)}</p>
      </div>` : "";

    // Notes
    const notesHtml = phase.notes && phase.notes.length ? `
      <ul class="sb-notes">
        ${phase.notes.map(n => `<li>${esc(n)}</li>`).join("")}
      </ul>` : "";

    return `<div class="sb-phase" style="--sb-border: ${c.border}; --sb-bg: ${c.bg}; --sb-label: ${c.label}; --sb-num: ${c.num};">
      <header class="sb-phase-header">
        <span class="sb-phase-num">${esc(phase.step)}</span>
        <h3 class="sb-phase-title">${esc(phase.title)}</h3>
      </header>
      <p class="sb-phase-desc">${esc(phase.description)}</p>
      ${notesHtml}
      ${whyNoteHtml}
      ${imagesHtml}
      ${roughCutHtml}
    </div>`;
  };

  return `<div class="storyboard-flow-page">
    ${content.intro ? `<p class="sb-intro">${esc(content.intro)}</p>` : ""}
    <div class="sb-phases">
      ${phases.map(renderPhase).join("")}
    </div>
    ${content.experience ? `
      <aside class="sb-experience-card">
        <strong>本阶段关键经验</strong>
        <p>${esc(content.experience)}</p>
      </aside>
    ` : ""}
  </div>`;
}

function renderFlowSlide(slide) {
  const content = slide.content || {};
  let html = `<div class="flow-content">`;
  
  if (content.description) {
    html += `<p class="flow-desc">${content.description}</p>`;
  }
  
  if (content.flow && Array.isArray(content.flow)) {
    html += `<div class="flow-diagram">`;
    content.flow.forEach((item, idx) => {
      html += `<div class="flow-item">
        <div class="flow-number">${item.step}</div>
        <div class="flow-name">${item.name}</div>
        <div class="flow-desc">${item.description}</div>
      </div>`;
      if (idx < content.flow.length - 1) {
        html += `<div class="flow-arrow">→</div>`;
      }
    });
    html += `</div>`;
  }
  
  if (content.steps && Array.isArray(content.steps)) {
    html += `<div class="steps-grid">`;
    content.steps.forEach((step) => {
      html += `<div class="step-card">
        <div class="step-num">${step.step}</div>
        <h4>${step.name}</h4>
        <p>${step.description}</p>
      </div>`;
    });
    html += `</div>`;
  }
  
  if (content.note) {
    html += `<div class="note-box">${content.note}</div>`;
  }
  
  html += `</div>`;
  return html;
}

function renderBreakdownSlide(slide) {
  const cards = slide.content?.cards || [];
  return `<div class="breakdown-grid">
    ${cards.map((card) => `
      <button class="breakdown-card" type="button" data-target-slide-id="${card.targetId}">
        <span class="breakdown-step">${card.step}</span>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </button>
    `).join("")}
  </div>`;
}

function renderComparisonSlide(slide) {
  const content = slide.content || {};
  const left = content.left || {};
  const right = content.right || {};

  let html = `<div class="comparison-grid">
    <div class="comparison-column comparison-left">
      <h3 class="comparison-title">${left.title}</h3>
      ${left.items && Array.isArray(left.items) ? `
        <ul class="comparison-list">
          ${left.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      ` : ""}
    </div>
    <div class="comparison-column comparison-right">
      <h3 class="comparison-title">${right.title}</h3>
      ${right.items && Array.isArray(right.items) ? `
        <ul class="comparison-list">
          ${right.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      ` : ""}
    </div>
  </div>`;

  if (content.conclusion) {
    html += `<div class="conclusion-box">
      <strong>关键结论</strong>
      <p>${content.conclusion}</p>
    </div>`;
  }

  return html;
}

function renderClosingSlide(slide) {
  const c = slide.content || {};

  const cardsHtml = (c.cards || []).map(card => `
    <div class="cr-card">
      <div class="cr-card-icon">${card.icon || ""}</div>
      <h3>${esc(card.title)}</h3>
      <p>${esc(card.body)}</p>
    </div>
  `).join("");

  return `<div class="closing-reflection">
    ${c.intro ? `<p class="cr-intro">${esc(c.intro)}</p>` : ""}
    <div class="cr-cards">${cardsHtml}</div>
    ${c.quote ? `
      <div class="cr-quote-block">
        <p class="cr-quote-main">${esc(c.quote)}</p>
        ${c.quoteSecond ? `<p class="cr-quote-sub">${esc(c.quoteSecond)}</p>` : ""}
      </div>
    ` : ""}
    ${c.archiveNote ? `<p class="cr-archive-note">${esc(c.archiveNote)}</p>` : ""}
  </div>`;
}

// Render table of contents with scroll-based anchor navigation
function renderTOC() {
  const tocNav = e("slide-toc");
  if (!tocNav) return;

  tocNav.innerHTML = toc.map((item) => {
    if (item.type === "group") {
      const childIds = item.children.map((child) => child.slideId).join(",");
      return `<div class="toc-group">
        <button class="toc-item toc-group-parent" data-section-id="${item.slideId}" data-child-ids="${childIds}" title="${item.title}">
          <span class="toc-number">${item.number}</span>
          <span class="toc-title">${item.title}</span>
        </button>
        <div class="toc-children">
          ${item.children.map((child) => `
            <button class="toc-item toc-child" data-section-id="${child.slideId}" title="${child.title}">
              <span class="toc-number">${child.number}</span>
              <span class="toc-title">${child.title}</span>
            </button>
          `).join("")}
        </div>
      </div>`;
    }

    return `<button class="toc-item toc-top" data-section-id="${item.slideId}" title="${item.title}">
      <span class="toc-number">${item.number}</span>
      <span class="toc-title">${item.title}</span>
    </button>`;
  }).join("");

  // Bind TOC click: smooth scroll to section
  tocNav.querySelectorAll(".toc-item").forEach(btn => {
    btn.addEventListener("click", (ev) => {
      const sectionId = ev.currentTarget.dataset.sectionId;
      scrollToSection(sectionId);
    });
  });
}

// Smooth scroll to a section by slide ID
function scrollToSection(slideId) {
  const el = document.getElementById(sectionIdFromSlideId(slideId));
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// IntersectionObserver: highlight TOC when section enters viewport
function initScrollObserver() {
  const sections = document.querySelectorAll(".page-section");
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    // Find the topmost intersecting section
    let topEntry = null;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
          topEntry = entry;
        }
      }
    });
    if (topEntry) {
      const slideId = topEntry.target.id.replace("section-", "");
      updateTOC(slideId);
    }
  }, {
    rootMargin: "-10% 0px -60% 0px",
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}

function getScriptSlideData() {
  return slides.find((slide) => slide.id === "step-2-script") || null;
}

function openAiScriptModal() {
  const modal = e("ai-script-modal");
  const body = e("ai-script-modal-body");
  if (!modal || !body) return;

  const scriptSlide = getScriptSlideData();
  const frames = scriptSlide?.content?.docFullScript;

  if (Array.isArray(frames) && frames.length) {
    // 如果第一项是整体设定，特殊处理
    let html = '';
    frames.forEach((frame, idx) => {
      if (idx === 0 && frame.title && frame.title.includes("整体设定")) {
        // 整体设定特殊展示
        html += `
          <article class="ai-script-item ai-script-metadata">
            <h3 style="color: #57b46a; margin-bottom: 16px;">${frame.sections?.title || frame.title}</h3>
            <div style="white-space: pre-wrap; line-height: 1.8; color: #667085; font-size: 15px;">
              ${(frame.sections?.content || "").split("\n").map(line => `<div>${line}</div>`).join("")}
            </div>
          </article>
        `;
      } else {
        // 普通分镜展示
        const sections = frame.sections || {};
        html += `
          <article class="ai-script-item">
            <h4 style="color: #1f2933; margin-bottom: 12px; font-size: 16px; font-weight: 600;">
              ${frame.title}
            </h4>
            ${sections.content ? `
              <div class="script-section">
                <strong style="color: #667085; font-size: 13px;">画面内容</strong>
                <p style="white-space: pre-wrap; margin: 6px 0 12px; color: #1f2933;">${sections.content}</p>
              </div>
            ` : ""}
            ${sections.mirror ? `
              <div class="script-section">
                <strong style="color: #667085; font-size: 13px;">镜头</strong>
                <p style="margin: 6px 0 12px; color: #1f2933;">${sections.mirror}</p>
              </div>
            ` : ""}
            ${sections.emotion ? `
              <div class="script-section">
                <strong style="color: #667085; font-size: 13px;">情绪</strong>
                <p style="margin: 6px 0 12px; color: #1f2933;">${sections.emotion}</p>
              </div>
            ` : ""}
            ${sections.sound ? `
              <div class="script-section">
                <strong style="color: #667085; font-size: 13px;">音效</strong>
                <p style="margin: 6px 0 0; color: #1f2933;">${sections.sound}</p>
              </div>
            ` : ""}
          </article>
        `;
      }
    });

    // 添加核心叙事逻辑
    const narrative = scriptSlide?.content?.docCoreNarrative;
    if (narrative) {
      html += `
        <article class="ai-script-item" style="background: #eaf7ed; border-left: 4px solid #57b46a; padding: 16px; margin-top: 16px;">
          <h4 style="color: #2d5a3d; margin-bottom: 8px; font-size: 15px;">核心叙事逻辑</h4>
          <p style="white-space: pre-wrap; line-height: 1.8; color: #2d5a3d; font-size: 14px;">
            ${narrative}
          </p>
        </article>
      `;
    }

    body.innerHTML = html;
  } else {
    body.innerHTML = `
      <article class="ai-script-item">
        <h4>文档内容</h4>
        <p>暂无可用内容</p>
      </article>
    `;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeAiScriptModal() {
  const modal = e("ai-script-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function openStoryboardExtendedModal() {
  const modal = e("storyboard-extended-modal");
  const body = e("storyboard-extended-modal-body");
  if (!modal || !body) return;

  const scriptSlide = getScriptSlideData("step-2-script");
  const frames = scriptSlide?.content?.extendedDocFullScript;

  if (Array.isArray(frames) && frames.length) {
    let html = '';
    frames.forEach((frame) => {
      html += `
        <article class="ai-script-item">
          <h4 style="color: #1f2933; margin-bottom: 12px; font-size: 16px; font-weight: 600;">
            分镜 ${frame.number}
          </h4>
          <div class="script-section">
            <p style="white-space: pre-wrap; margin: 0; color: #1f2933; line-height: 1.6;">${frame.content}</p>
          </div>
        </article>
      `;
    });

    body.innerHTML = html;
  } else {
    body.innerHTML = `
      <article class="ai-script-item">
        <h4>文档内容</h4>
        <p>已找到 03分镜脚本人工延展.docx，但当前页面无法加载脚本内容。请检查数据配置。</p>
      </article>
    `;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeStoryboardExtendedModal() {
  const modal = e("storyboard-extended-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function getScriptSlideData(slideId = "step-2-script") {
  return slides.find((s) => s.id === slideId);
}

// Event listeners
function bindEvents() {
  // Keyboard: Escape to close modals only
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") {
      closeAiScriptModal();
      closeStoryboardExtendedModal();
    }
  });

  // Delegate clicks: modals, section jumps, lightbox
  document.addEventListener("click", (ev) => {
    const openAiScript = ev.target.closest("[data-open-ai-script]");
    if (openAiScript) {
      openAiScriptModal();
      return;
    }

    const openStoryboard = ev.target.closest("[data-open-storyboard-extended]");
    if (openStoryboard) {
      openStoryboardExtendedModal();
      return;
    }

    // Breakdown cards / hero buttons that reference a section
    const card = ev.target.closest("[data-target-slide-id]");
    if (card) {
      scrollToSection(card.dataset.targetSlideId);
      return;
    }

    // Image lightbox
    const img = ev.target.closest("[data-lightbox-src]");
    if (img) {
      const lightbox = e("image-lightbox");
      const lightboxImg = e("lightbox-image");
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.dataset.lightboxSrc || "";
        e("lightbox-caption").textContent = img.dataset.lightboxCaption || "";
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
      }
    }
  });

  // Lightbox close
  const lightbox = e("image-lightbox");
  if (lightbox) {
    e("lightbox-close").addEventListener("click", () => {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    });
    lightbox.addEventListener("click", (ev) => {
      if (ev.target === lightbox) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }

  // AI script modal close
  const aiScriptModal = e("ai-script-modal");
  if (aiScriptModal) {
    const closeBtn = e("ai-script-modal-close");
    const closeFooterBtn = e("ai-script-modal-close-footer");
    if (closeBtn) closeBtn.addEventListener("click", closeAiScriptModal);
    if (closeFooterBtn) closeFooterBtn.addEventListener("click", closeAiScriptModal);
    aiScriptModal.addEventListener("click", (ev) => {
      if (ev.target === aiScriptModal) closeAiScriptModal();
    });
  }

  // Storyboard extended modal close
  const storyboardModal = e("storyboard-extended-modal");
  if (storyboardModal) {
    const closeBtn = e("storyboard-modal-close");
    const closeFooterBtn = e("storyboard-modal-close-footer");
    if (closeBtn) closeBtn.addEventListener("click", closeStoryboardExtendedModal);
    if (closeFooterBtn) closeFooterBtn.addEventListener("click", closeStoryboardExtendedModal);
    storyboardModal.addEventListener("click", (ev) => {
      if (ev.target === storyboardModal) closeStoryboardExtendedModal();
    });
  }
}

// Bootstrap
function init() {
  renderSlides();
  renderTOC();
  initScrollObserver();
  bindEvents();
  // Highlight first section by default
  updateTOC(slides[0]?.id);
}

// Start when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
