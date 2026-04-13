/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// 五维人格特质
export type TraitKey = '甲抗性' | '创造力' | '拖延指数' | '工具精通' | '细节控';

export interface TraitWeights {
  甲抗性: number;  // 0-100
  创造力: number;
  拖延指数: number;
  工具精通: number;
  细节控: number;
}

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    weights: TraitWeights;
  }[];
}

export interface Personality {
  id: string;
  title: string;
  description: string;
  story: string;
  rarity: 'Common' | 'Rare' | 'Epic';
  imageSeed: string;
  stats: {
    label: string;
    value: number; // 0-100
  }[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "看到\"Logo再大一点\"的反馈时，你的内心OS是？",
    options: [
      { text: "默默调大，甲方开心就好", weights: { 甲抗性: 98, 创造力: 5, 拖延指数: 10, 工具精通: 20, 细节控: 5 } },
      { text: "准备十版方案，证明现在的比例最完美", weights: { 甲抗性: 50, 创造力: 60, 拖延指数: 40, 工具精通: 70, 细节控: 85 } },
      { text: "想当场变成甲方，自己给自己改", weights: { 甲抗性: 3, 创造力: 95, 拖延指数: 50, 工具精通: 40, 细节控: 55 } }
    ]
  },
  {
    id: 2,
    text: "面对\"五彩斑斓的黑\"的需求，你通常会？",
    options: [
      { text: "认真找参考，试图理解甲方的玄学", weights: { 甲抗性: 75, 创造力: 15, 拖延指数: 30, 工具精通: 65, 细节控: 40 } },
      { text: "解释色彩原理，试图说服对方", weights: { 甲抗性: 20, 创造力: 55, 拖延指数: 25, 工具精通: 80, 细节控: 70 } },
      { text: "直接上渐变色，赌一把", weights: { 甲抗性: 90, 创造力: 92, 拖延指数: 10, 工具精通: 50, 细节控: 5 } }
    ]
  },
  {
    id: 3,
    text: "你的主要灵感来源是？",
    options: [
      { text: "追竞品，看看大家都在抄什么", weights: { 甲抗性: 85, 创造力: 8, 拖延指数: 45, 工具精通: 60, 细节控: 25 } },
      { text: "刷Behance/Dribbble，寻找视觉冲击", weights: { 甲抗性: 50, 创造力: 65, 拖延指数: 40, 工具精通: 85, 细节控: 50 } },
      { text: "马桶上的灵光一现，或者梦里", weights: { 甲抗性: 15, 创造力: 100, 拖延指数: 85, 工具精通: 30, 细节控: 10 } }
    ]
  },
  {
    id: 4,
    text: "Deadline 还有 2 小时，你还没开始动笔，此时你在？",
    options: [
      { text: "疯狂找素材，试图在 1 小时内拼凑出来", weights: { 甲抗性: 70, 创造力: 35, 拖延指数: 98, 工具精通: 75, 细节控: 15 } },
      { text: "冷静分析需求，制定极简方案", weights: { 甲抗性: 55, 创造力: 50, 拖延指数: 25, 工具精通: 85, 细节控: 75 } },
      { text: "在群里吐槽需求不合理，顺便点个外卖", weights: { 甲抗性: 10, 创造力: 90, 拖延指数: 100, 工具精通: 35, 细节控: 5 } }
    ]
  },
  {
    id: 5,
    text: "图层命名对你来说意味着？",
    options: [
      { text: "图层 1, 图层 1 副本, 图层 1 副本 2...", weights: { 甲抗性: 98, 创造力: 10, 拖延指数: 60, 工具精通: 30, 细节控: 0 } },
      { text: "关键图层命名，其他的随缘", weights: { 甲抗性: 65, 创造力: 40, 拖延指数: 45, 工具精通: 60, 细节控: 55 } },
      { text: "严格的 BEM 命名规范，甚至有文件夹层级", weights: { 甲抗性: 30, 创造力: 50, 拖延指数: 30, 工具精通: 95, 细节控: 100 } }
    ]
  },
  {
    id: 6,
    text: "甲方说\"感觉不对\"，你的反应是？",
    options: [
      { text: "全盘推翻，重做一版完全不同的", weights: { 甲抗性: 5, 创造力: 85, 拖延指数: 75, 工具精通: 45, 细节控: 35 } },
      { text: "微调细节，换个颜色再发一遍", weights: { 甲抗性: 85, 创造力: 25, 拖延指数: 20, 工具精通: 55, 细节控: 50 } },
      { text: "反问：请问是哪种不对？是视觉、逻辑还是灵魂？", weights: { 甲抗性: 3, 创造力: 95, 拖延指数: 35, 工具精通: 90, 细节控: 80 } }
    ]
  },
  {
    id: 7,
    text: "你对 Figma 插件的态度是？",
    options: [
      { text: "什么是插件？我只用基础工具", weights: { 甲抗性: 95, 创造力: 15, 拖延指数: 50, 工具精通: 5, 细节控: 30 } },
      { text: "装了一堆，但常用的就那几个", weights: { 甲抗性: 60, 创造力: 45, 拖延指数: 45, 工具精通: 65, 细节控: 40 } },
      { text: "插件狂魔，甚至想自己写一个", weights: { 甲抗性: 20, 创造力: 80, 拖延指数: 25, 工具精通: 100, 细节控: 60 } }
    ]
  },
  {
    id: 8,
    text: "看到 1px 的对齐偏差，你会？",
    options: [
      { text: "看不见，看不见...", weights: { 甲抗性: 98, 创造力: 25, 拖延指数: 60, 工具精通: 25, 细节控: 0 } },
      { text: "强迫症发作，必须对齐", weights: { 甲抗性: 55, 创造力: 35, 拖延指数: 30, 工具精通: 70, 细节控: 80 } },
      { text: "放大 3200% 检查每一个像素点", weights: { 甲抗性: 10, 创造力: 50, 拖延指数: 50, 工具精通: 95, 细节控: 100 } }
    ]
  },
  {
    id: 9,
    text: "你认为设计的本质是？",
    options: [
      { text: "让东西变好看", weights: { 甲抗性: 85, 创造力: 50, 拖延指数: 55, 工具精通: 35, 细节控: 30 } },
      { text: "解决问题，提升效率", weights: { 甲抗性: 50, 创造力: 45, 拖延指数: 45, 工具精通: 85, 细节控: 60 } },
      { text: "商业价值的视觉变现", weights: { 甲抗性: 15, 创造力: 90, 拖延指数: 40, 工具精通: 65, 细节控: 50 } }
    ]
  },
  {
    id: 10,
    text: "你的社交电量通常在什么时候耗尽？",
    options: [
      { text: "开会 5 分钟后", weights: { 甲抗性: 5, 创造力: 80, 拖延指数: 45, 工具精通: 45, 细节控: 55 } },
      { text: "和甲方沟通完一轮后", weights: { 甲抗性: 40, 创造力: 55, 拖延指数: 55, 工具精通: 50, 细节控: 45 } },
      { text: "我永远有电，我爱社交", weights: { 甲抗性: 95, 创造力: 30, 拖延指数: 70, 工具精通: 40, 细节控: 25 } }
    ]
  },
  {
    id: 11,
    text: "尝试一种从未用过的视觉风格时，你？",
    options: [
      { text: "犹豫不决，最后还是用了安全牌", weights: { 甲抗性: 92, 创造力: 5, 拖延指数: 80, 工具精通: 45, 细节控: 40 } },
      { text: "先在小项目里试水", weights: { 甲抗性: 50, 创造力: 60, 拖延指数: 50, 工具精通: 70, 细节控: 55 } },
      { text: "直接梭哈，不行再改", weights: { 甲抗性: 8, 创造力: 98, 拖延指数: 65, 工具精通: 55, 细节控: 30 } }
    ]
  },
  {
    id: 12,
    text: "你如何看待\"极简主义\"？",
    options: [
      { text: "因为懒得画细节", weights: { 甲抗性: 88, 创造力: 20, 拖延指数: 70, 工具精通: 25, 细节控: 0 } },
      { text: "一种克制的审美表达", weights: { 甲抗性: 45, 创造力: 65, 拖延指数: 45, 工具精通: 60, 细节控: 70 } },
      { text: "对信息密度的极致压缩", weights: { 甲抗性: 10, 创造力: 95, 拖延指数: 40, 工具精通: 85, 细节控: 98 } }
    ]
  },
  {
    id: 13,
    text: "下班时间到了，但你刚找到灵感，你会？",
    options: [
      { text: "立刻关机，灵感明天再说", weights: { 甲抗性: 95, 创造力: 15, 拖延指数: 5, 工具精通: 50, 细节控: 35 } },
      { text: "记下灵感，回家再弄", weights: { 甲抗性: 60, 创造力: 50, 拖延指数: 35, 工具精通: 55, 细节控: 45 } },
      { text: "通宵爆肝，趁热打铁", weights: { 甲抗性: 5, 创造力: 100, 拖延指数: 100, 工具精通: 40, 细节控: 40 } }
    ]
  },
  {
    id: 14,
    text: "如果设计工具突然收费翻倍，你会？",
    options: [
      { text: "含泪续费，离不开它", weights: { 甲抗性: 98, 创造力: 15, 拖延指数: 50, 工具精通: 98, 细节控: 45 } },
      { text: "寻找开源替代品", weights: { 甲抗性: 55, 创造力: 45, 拖延指数: 55, 工具精通: 65, 细节控: 50 } },
      { text: "自学代码，自己写一个", weights: { 甲抗性: 3, 创造力: 98, 拖延指数: 70, 工具精通: 80, 细节控: 65 } }
    ]
  },
  {
    id: 15,
    text: "你对\"竞品分析\"的理解是？",
    options: [
      { text: "看看别人怎么抄，我也怎么抄", weights: { 甲抗性: 95, 创造力: 3, 拖延指数: 55, 工具精通: 55, 细节控: 20 } },
      { text: "寻找差异化突破口", weights: { 甲抗性: 50, 创造力: 60, 拖延指数: 45, 工具精通: 70, 细节控: 55 } },
      { text: "解构对方的底层逻辑", weights: { 甲抗性: 10, 创造力: 95, 拖延指数: 40, 工具精通: 90, 细节控: 85 } }
    ]
  },
  {
    id: 16,
    text: "在团队协作中，你更倾向于？",
    options: [
      { text: "听指挥，我只管画图", weights: { 甲抗性: 90, 创造力: 20, 拖延指数: 55, 工具精通: 50, 细节控: 40 } },
      { text: "参与讨论，给出建议", weights: { 甲抗性: 45, 创造力: 55, 拖延指数: 45, 工具精通: 65, 细节控: 50 } },
      { text: "主导流程，把控全局", weights: { 甲抗性: 8, 创造力: 85, 拖延指数: 35, 工具精通: 90, 细节控: 75 } }
    ]
  },
  {
    id: 17,
    text: "甲方要求\"大气一点\"，你通常会？",
    options: [
      { text: "留白，留白，还是留白", weights: { 甲抗性: 5, 创造力: 90, 拖延指数: 35, 工具精通: 45, 细节控: 75 } },
      { text: "加粗字体，放大图片", weights: { 甲抗性: 60, 创造力: 40, 拖延指数: 40, 工具精通: 60, 细节控: 45 } },
      { text: "加个金色渐变", weights: { 甲抗性: 92, 创造力: 50, 拖延指数: 20, 工具精通: 30, 细节控: 5 } }
    ]
  },
  {
    id: 18,
    text: "你的桌面文件通常是？",
    options: [
      { text: "铺满屏幕，甚至重叠", weights: { 甲抗性: 85, 创造力: 30, 拖延指数: 95, 工具精通: 20, 细节控: 0 } },
      { text: "按项目分类文件夹", weights: { 甲抗性: 55, 创造力: 45, 拖延指数: 50, 工具精通: 65, 细节控: 55 } },
      { text: "空无一物，全部进云端", weights: { 甲抗性: 30, 创造力: 75, 拖延指数: 25, 工具精通: 95, 细节控: 90 } }
    ]
  },
  {
    id: 19,
    text: "面对突如其来的改稿需求，你的第一反应是？",
    options: [
      { text: "叹气，然后开始改", weights: { 甲抗性: 80, 创造力: 25, 拖延指数: 45, 工具精通: 55, 细节控: 45 } },
      { text: "愤怒，想砸电脑", weights: { 甲抗性: 3, 创造力: 80, 拖延指数: 60, 工具精通: 40, 细节控: 30 } },
      { text: "麻木，已经习惯了", weights: { 甲抗性: 98, 创造力: 10, 拖延指数: 70, 工具精通: 45, 细节控: 25 } }
    ]
  },
  {
    id: 20,
    text: "你认为最好的设计应该是？",
    options: [
      { text: "让人惊叹的艺术品", weights: { 甲抗性: 40, 创造力: 98, 拖延指数: 55, 工具精通: 35, 细节控: 50 } },
      { text: "无感但好用的工具", weights: { 甲抗性: 65, 创造力: 40, 拖延指数: 45, 工具精通: 90, 细节控: 60 } },
      { text: "改变世界的交互方式", weights: { 甲抗性: 5, 创造力: 100, 拖延指数: 40, 工具精通: 80, 细节控: 75 } }
    ]
  },
  {
    id: 21,
    text: "你的字体库里有多少种字体？",
    options: [
      { text: "几千种，虽然只用那几种", weights: { 甲抗性: 70, 创造力: 45, 拖延指数: 60, 工具精通: 70, 细节控: 25 } },
      { text: "精选几十种，每种都烂熟于心", weights: { 甲抗性: 40, 创造力: 60, 拖延指数: 30, 工具精通: 90, 细节控: 85 } },
      { text: "系统自带的就够了", weights: { 甲抗性: 88, 创造力: 15, 拖延指数: 50, 工具精通: 35, 细节控: 35 } }
    ]
  },
  {
    id: 22,
    text: "你如何处理\"审美疲劳\"？",
    options: [
      { text: "换个行业看参考", weights: { 甲抗性: 60, 创造力: 65, 拖延指数: 50, 工具精通: 60, 细节控: 45 } },
      { text: "出去旅游，远离屏幕", weights: { 甲抗性: 30, 创造力: 95, 拖延指数: 70, 工具精通: 40, 细节控: 50 } },
      { text: "硬看，看到不疲劳为止", weights: { 甲抗性: 85, 创造力: 25, 拖延指数: 15, 工具精通: 50, 细节控: 40 } }
    ]
  },
  {
    id: 23,
    text: "在设计评审会上，你通常？",
    options: [
      { text: "据理力争，捍卫方案", weights: { 甲抗性: 0, 创造力: 85, 拖延指数: 40, 工具精通: 65, 细节控: 80 } },
      { text: "虚心接受，记录建议", weights: { 甲抗性: 65, 创造力: 40, 拖延指数: 50, 工具精通: 60, 细节控: 55 } },
      { text: "全程静音，内心弹幕", weights: { 甲抗性: 92, 创造力: 30, 拖延指数: 60, 工具精通: 45, 细节控: 35 } }
    ]
  },
  {
    id: 24,
    text: "你对\"新技术（如AI设计）\"的态度是？",
    options: [
      { text: "积极拥抱，它是生产力工具", weights: { 甲抗性: 35, 创造力: 90, 拖延指数: 35, 工具精通: 98, 细节控: 50 } },
      { text: "保持观望，怕被替代", weights: { 甲抗性: 70, 创造力: 40, 拖延指数: 55, 工具精通: 55, 细节控: 45 } },
      { text: "不屑一顾，艺术不可替代", weights: { 甲抗性: 15, 创造力: 80, 拖延指数: 65, 工具精通: 25, 细节控: 70 } }
    ]
  },
  {
    id: 25,
    text: "你的设计稿版本通常命名为？",
    options: [
      { text: "最终版, 最终版 2, 打死不改版...", weights: { 甲抗性: 95, 创造力: 10, 拖延指数: 98, 工具精通: 15, 细节控: 0 } },
      { text: "V1, V2, V3...", weights: { 甲抗性: 60, 创造力: 40, 拖延指数: 55, 工具精通: 65, 细节控: 45 } },
      { text: "日期_项目名_版本号", weights: { 甲抗性: 25, 创造力: 55, 拖延指数: 20, 工具精通: 95, 细节控: 98 } }
    ]
  },
  {
    id: 26,
    text: "你认为设计师最重要的素质是？",
    options: [
      { text: "审美", weights: { 甲抗性: 50, 创造力: 85, 拖延指数: 50, 工具精通: 45, 细节控: 55 } },
      { text: "沟通", weights: { 甲抗性: 55, 创造力: 50, 拖延指数: 45, 工具精通: 60, 细节控: 45 } },
      { text: "同理心", weights: { 甲抗性: 25, 创造力: 75, 拖延指数: 40, 工具精通: 55, 细节控: 65 } }
    ]
  },
  {
    id: 27,
    text: "看到别人的烂设计，你会？",
    options: [
      { text: "内心疯狂吐槽", weights: { 甲抗性: 55, 创造力: 50, 拖延指数: 55, 工具精通: 55, 细节控: 75 } },
      { text: "截图发群里一起笑", weights: { 甲抗性: 20, 创造力: 80, 拖延指数: 65, 工具精通: 45, 细节控: 35 } },
      { text: "关我屁事", weights: { 甲抗性: 92, 创造力: 15, 拖延指数: 75, 工具精通: 40, 细节控: 20 } }
    ]
  },
  {
    id: 28,
    text: "你如何看待\"甲方\"？",
    options: [
      { text: "衣食父母", weights: { 甲抗性: 100, 创造力: 5, 拖延指数: 45, 工具精通: 45, 细节控: 30 } },
      { text: "合作伙伴", weights: { 甲抗性: 50, 创造力: 50, 拖延指数: 40, 工具精通: 65, 细节控: 50 } },
      { text: "创意杀手", weights: { 甲抗性: 0, 创造力: 95, 拖延指数: 60, 工具精通: 50, 细节控: 45 } }
    ]
  },
  {
    id: 29,
    text: "你的工作环境通常是？",
    options: [
      { text: "极简整洁，甚至有香薰", weights: { 甲抗性: 30, 创造力: 80, 拖延指数: 15, 工具精通: 60, 细节控: 95 } },
      { text: "乱中有序，全是手办", weights: { 甲抗性: 50, 创造力: 85, 拖延指数: 55, 工具精通: 55, 细节控: 50 } },
      { text: "废墟现场，全是外卖盒", weights: { 甲抗性: 80, 创造力: 40, 拖延指数: 92, 工具精通: 35, 细节控: 10 } }
    ]
  },
  {
    id: 30,
    text: "如果可以重来，你还会选择做设计师吗？",
    options: [
      { text: "会，我爱这一行", weights: { 甲抗性: 25, 创造力: 95, 拖延指数: 35, 工具精通: 65, 细节控: 55 } },
      { text: "可能会，看给多少钱", weights: { 甲抗性: 70, 创造力: 45, 拖延指数: 55, 工具精通: 55, 细节控: 45 } },
      { text: "绝对不，我想去卖红薯", weights: { 甲抗性: 98, 创造力: 15, 拖延指数: 85, 工具精通: 25, 细节控: 15 } }
    ]
  }
];

export const PERSONALITIES: Personality[] = [
  {
    id: "P1",
    title: "永动机式改稿人",
    description: "甲方虐我千百遍，我待甲方如初恋。",
    story: "你拥有惊人的耐力和极低的自尊心（在改稿面前）。你坚信只要改得够快，甲方的意见就追不上你。你的硬盘里装满了名为'最终版108'的文件，但你依然能在凌晨三点微笑着按下 Ctrl+S。",
    rarity: "Common",
    imageSeed: "robot-designer",
    stats: [
      { label: "甲抗性", value: 95 },
      { label: "创造力", value: 10 },
      { label: "拖延指数", value: 5 },
      { label: "工具精通", value: 35 },
      { label: "细节控", value: 20 }
    ]
  },
  {
    id: "P2",
    title: "灵感黑洞",
    description: "我的大脑是一片荒漠，偶尔刮起沙尘暴。",
    story: "你总是在 Deadline 前一秒才突然惊醒。你的灵感来源极其随机，可能是路边的电线杆，也可能是昨晚没吃完的泡面。虽然过程痛苦，但你总能用一种'诡异'的方式完成任务。",
    rarity: "Epic",
    imageSeed: "blackhole-creative",
    stats: [
      { label: "甲抗性", value: 5 },
      { label: "创造力", value: 100 },
      { label: "拖延指数", value: 98 },
      { label: "工具精通", value: 20 },
      { label: "细节控", value: 5 }
    ]
  },
  {
    id: "P3",
    title: "配色赌徒",
    description: "梭哈是一种智慧，渐变是一种信仰。",
    story: "你坚信自己的色感走在时代前沿，直到甲方选中了那个你用来凑数的颜色。你喜欢在危险的边缘试探，用最饱和的红配最诡异的绿，然后告诉大家这叫'新丑风'。",
    rarity: "Rare",
    imageSeed: "color-gambler",
    stats: [
      { label: "甲抗性", value: 90 },
      { label: "创造力", value: 92 },
      { label: "拖延指数", value: 10 },
      { label: "工具精通", value: 45 },
      { label: "细节控", value: 5 }
    ]
  },
  {
    id: "P4",
    title: "理性缝合怪",
    description: "我不是抄，我是在向经典致敬。",
    story: "你拥有极强的逻辑分析能力，能把 Behance 上的前十名完美融合在一起。你的设计方案总是无懈可击，因为每一个像素都有出处。你是甲方的最爱，因为你总能给出'最稳'的方案。",
    rarity: "Common",
    imageSeed: "logic-stitcher",
    stats: [
      { label: "甲抗性", value: 85 },
      { label: "创造力", value: 15 },
      { label: "拖延指数", value: 25 },
      { label: "工具精通", value: 92 },
      { label: "细节控", value: 95 }
    ]
  },
  {
    id: "P5",
    title: "像素级强迫症",
    description: "1px 的偏差，就是对设计的亵渎。",
    story: "你的眼睛自带网格线，能瞬间发现未对齐的图层。你花在对齐上的时间比画图的时间还长。你甚至会因为甲方电脑的分辨率太低而感到痛苦。你的设计稿是开发者的噩梦，因为太完美了。",
    rarity: "Rare",
    imageSeed: "pixel-perfectionist",
    stats: [
      { label: "甲抗性", value: 10 },
      { label: "创造力", value: 50 },
      { label: "拖延指数", value: 50 },
      { label: "工具精通", value: 95 },
      { label: "细节控", value: 100 }
    ]
  },
  {
    id: "P6",
    title: "甲方终结者",
    description: "我不是在做设计，我是在教你做人。",
    story: "你拥有极强的专业气场，能用一堆专业术语把甲方说得哑口无言。你从不改稿，因为你认为自己的第一版就是终极答案。你是设计界的孤勇者，虽然经常没饭吃，但你赢得了尊严。",
    rarity: "Epic",
    imageSeed: "client-terminator",
    stats: [
      { label: "甲抗性", value: 0 },
      { label: "创造力", value: 95 },
      { label: "拖延指数", value: 35 },
      { label: "工具精通", value: 90 },
      { label: "细节控", value: 75 }
    ]
  },
  {
    id: "P7",
    title: "素材搬运工",
    description: "只要素材找得好，下班回家早。",
    story: "你是各大素材库的终身会员。你擅长在海量的素材中找到那个最合适的，然后通过精妙的'微调'让它看起来像是原创。你的口头禅是：'这叫资源整合能力'。",
    rarity: "Common",
    imageSeed: "asset-mover",
    stats: [
      { label: "甲抗性", value: 98 },
      { label: "创造力", value: 5 },
      { label: "拖延指数", value: 15 },
      { label: "工具精通", value: 70 },
      { label: "细节控", value: 30 }
    ]
  },
  {
    id: "P8",
    title: "深夜爆肝王",
    description: "太阳升起的时候，就是我交稿的时候。",
    story: "你的生物钟与常人迥异。凌晨两点是你思维最活跃的时刻。你享受在寂静的深夜独自创作的感觉，虽然这通常是因为你白天都在摸鱼。你的黑眼圈是你最骄傲的勋章。",
    rarity: "Rare",
    imageSeed: "midnight-worker",
    stats: [
      { label: "甲抗性", value: 5 },
      { label: "创造力", value: 98 },
      { label: "拖延指数", value: 100 },
      { label: "工具精通", value: 40 },
      { label: "细节控", value: 40 }
    ]
  },
  {
    id: "P9",
    title: "工具狂热者",
    description: "Figma就是我的第二个家。",
    story: "你拥有惊人的插件储备量，你的快捷键熟练度堪比钢琴家。你对工具的热爱超越了对设计的热爱，你相信好的工具能弥补一切不足。",
    rarity: "Rare",
    imageSeed: "tool-geek",
    stats: [
      { label: "甲抗性", value: 95 },
      { label: "创造力", value: 15 },
      { label: "拖延指数", value: 25 },
      { label: "工具精通", value: 100 },
      { label: "细节控", value: 60 }
    ]
  },
  {
    id: "P10",
    title: "极简主义信徒",
    description: "少即是多，多即是灾难。",
    story: "你痴迷于留白和干净的视觉层级。你认为设计的第一步是删除不必要的元素。你经常为了一个像素的间距而反复调整，直到它完美。",
    rarity: "Epic",
    imageSeed: "minimalist-believer",
    stats: [
      { label: "甲抗性", value: 5 },
      { label: "创造力", value: 90 },
      { label: "拖延指数", value: 40 },
      { label: "工具精通", value: 85 },
      { label: "细节控", value: 98 }
    ]
  },
  {
    id: "P11",
    title: "格式规范警察",
    description: "命名不规范，设计两行泪。",
    story: "你对图层命名和文件组织有着近乎偏执的追求。你的Figma文件是团队的标准参考，但你的同事有时候会觉得你太啰嗦了。",
    rarity: "Common",
    imageSeed: "format-police",
    stats: [
      { label: "甲抗性", value: 92 },
      { label: "创造力", value: 10 },
      { label: "拖延指数", value: 20 },
      { label: "工具精通", value: 95 },
      { label: "细节控", value: 100 }
    ]
  },
  {
    id: "P12",
    title: "PPT艺术家",
    description: "设计不是做图，是演一场视觉大戏。",
    story: "你把每一个PPT都当作电影来制作。动画要流畅过度，配色要精心设计。你做的汇报PPT总是让领导印象深刻，即使内容可能有点空洞。",
    rarity: "Common",
    imageSeed: "ppt-artist",
    stats: [
      { label: "甲抗性", value: 60 },
      { label: "创造力", value: 85 },
      { label: "拖延指数", value: 55 },
      { label: "工具精通", value: 60 },
      { label: "细节控", value: 50 }
    ]
  },
  {
    id: "P13",
    title: "移动端适配焦虑症",
    description: "我的设计稿在安卓上看起来是这样的...吗？",
    story: "你对移动端适配有着深深的恐惧。你会为了一像素的偏差而在两个平台之间来回切换。你经常发现一些诡异的问题，比如某品牌手机特有的底部安全区。",
    rarity: "Rare",
    imageSeed: "mobile-anxiety",
    stats: [
      { label: "甲抗性", value: 15 },
      { label: "创造力", value: 50 },
      { label: "拖延指数", value: 70 },
      { label: "工具精通", value: 98 },
      { label: "细节控", value: 95 }
    ]
  },
  {
    id: "P14",
    title: "品牌标识偏执狂",
    description: "这个蓝色不对，是#0066CC还是#0066CC？",
    story: "你对品牌规范有着近乎疯狂的执念。你能一眼分辨出客户给的logo是否被压缩过，你对品牌色的执念超越了生活的其他方面。",
    rarity: "Epic",
    imageSeed: "brand-paranoid",
    stats: [
      { label: "甲抗性", value: 3 },
      { label: "创造力", value: 65 },
      { label: "拖延指数", value: 35 },
      { label: "工具精通", value: 90 },
      { label: "细节控", value: 100 }
    ]
  },
  {
    id: "P15",
    title: "栅格系统信徒",
    description: "没有12px的间距基准线，就像没有地基的房子。",
    story: "你在设计之前一定会先设置好栅格系统。你对8px、4px、2px的倍数关系有着本能的信任。你认为一个好的栅格系统可以解决99%的对齐问题。",
    rarity: "Common",
    imageSeed: "grid-believer",
    stats: [
      { label: "甲抗性", value: 88 },
      { label: "创造力", value: 25 },
      { label: "拖延指数", value: 30 },
      { label: "工具精通", value: 95 },
      { label: "细节控", value: 98 }
    ]
  },
  {
    id: "P16",
    title: "渐变上瘾者",
    description: "没有渐变的设计是没有灵魂的。",
    story: "你喜欢用渐变来表达一切：按钮要用渐变，背景要用渐变，甚至文字也要试试渐变。你相信渐变可以解决90%的设计问题，剩下的10%只需要加粗渐变。",
    rarity: "Rare",
    imageSeed: "gradient-addict",
    stats: [
      { label: "甲抗性", value: 92 },
      { label: "创造力", value: 90 },
      { label: "拖延指数", value: 50 },
      { label: "工具精通", value: 50 },
      { label: "细节控", value: 10 }
    ]
  },
  {
    id: "P17",
    title: "投影恐惧症",
    description: "这个阴影太硬了，软一点，再软一点。",
    story: "你对阴影有着极致追求。你会花半小时调整阴影的角度、模糊度和透明度，直到它看起来\"自然\"。你坚信好的阴影能让平庸的设计瞬间高级。",
    rarity: "Common",
    imageSeed: "shadow-phobic",
    stats: [
      { label: "甲抗性", value: 25 },
      { label: "创造力", value: 75 },
      { label: "拖延指数", value: 65 },
      { label: "工具精通", value: 85 },
      { label: "细节控", value: 98 }
    ]
  },
  {
    id: "P18",
    title: "字体选择困难户",
    description: "我需要再试300种字体才能确定。",
    story: "你花了大量时间在Google Fonts上浏览，试图找到那个\"完美\"的字体。你有几千种字体收藏，但每次做设计还是觉得缺一种。你经常在思源黑体和思源宋体之间反复横跳。",
    rarity: "Rare",
    imageSeed: "font-selector",
    stats: [
      { label: "甲抗性", value: 40 },
      { label: "创造力", value: 60 },
      { label: "拖延指数", value: 95 },
      { label: "工具精通", value: 70 },
      { label: "细节控", value: 85 }
    ]
  },
  {
    id: "P19",
    title: "手绘风格爱好者",
    description: "数字化的设计太冰冷，手绘才有温度。",
    story: "你喜欢把所有东西都变成手绘风格。你会花额外的时间添加手绘纹理、手写字体和不规则的线条。你认为这能让你在众多设计师中脱颖而出。",
    rarity: "Epic",
    imageSeed: "sketch-lover",
    stats: [
      { label: "甲抗性", value: 30 },
      { label: "创造力", value: 98 },
      { label: "拖延指数", value: 70 },
      { label: "工具精通", value: 60 },
      { label: "细节控", value: 55 }
    ]
  },
  {
    id: "P20",
    title: "动效痴迷者",
    description: "静态设计是二维的，动态设计才是三维的。",
    story: "你坚信交互和动效是设计的灵魂。你会为按钮设计复杂的微交互，会仔细调整每一个缓动曲线。你经常被说\"这个动效太花哨了\"，但你从不妥协。",
    rarity: "Rare",
    imageSeed: "motion-addict",
    stats: [
      { label: "甲抗性", value: 15 },
      { label: "创造力", value: 95 },
      { label: "拖延指数", value: 60 },
      { label: "工具精通", value: 80 },
      { label: "细节控", value: 85 }
    ]
  },
  {
    id: "P21",
    title: "无障碍设计倡导者",
    description: "4.5:1的对比度是底线，不是上限。",
    story: "你时刻关注设计的包容性。你会为配色是否符合WCAG标准而反复检查，你会为盲人用户考虑非视觉交互方式。你的设计稿注释比代码还长。",
    rarity: "Epic",
    imageSeed: "accessibility-advocate",
    stats: [
      { label: "甲抗性", value: 10 },
      { label: "创造力", value: 65 },
      { label: "拖延指数", value: 45 },
      { label: "工具精通", value: 90 },
      { label: "细节控", value: 95 }
    ]
  },
  {
    id: "P22",
    title: "设计系统狂热粉",
    description: "没有设计系统的团队是不完整的。",
    story: "你痴迷于建立和维护设计系统。你会为按钮的4种状态创建详细的规范文档，你会为主色调创建10种衍生色。你相信只有完美的设计系统才能拯救团队。",
    rarity: "Rare",
    imageSeed: "design-system-fan",
    stats: [
      { label: "甲抗性", value: 85 },
      { label: "创造力", value: 30 },
      { label: "拖延指数", value: 40 },
      { label: "工具精通", value: 98 },
      { label: "细节控", value: 100 }
    ]
  },
  {
    id: "P23",
    title: "创意文案大师",
    description: "设计不只是视觉，是故事。",
    story: "你不仅会设计，还能写一手好文案。你相信好的设计需要好的叙事来支撑。你经常为了一个slogan反复推敲，直到它完美契合视觉风格。",
    rarity: "Common",
    imageSeed: "copywriter-master",
    stats: [
      { label: "甲抗性", value: 25 },
      { label: "创造力", value: 95 },
      { label: "拖延指数", value: 55 },
      { label: "工具精通", value: 60 },
      { label: "细节控", value: 60 }
    ]
  },
  {
    id: "P24",
    title: "设计评审终结者",
    description: "我的方案不需要评审，因为没有更好的选择。",
    story: "你在设计评审会上总是胸有成竹。你会准备详尽的设计决策文档，预测所有可能的质疑，并准备好令人信服的答案。你很少需要大幅改稿。",
    rarity: "Epic",
    imageSeed: "review-terminator",
    stats: [
      { label: "甲抗性", value: 0 },
      { label: "创造力", value: 85 },
      { label: "拖延指数", value: 30 },
      { label: "工具精通", value: 95 },
      { label: "细节控", value: 90 }
    ]
  },
  {
    id: "P25",
    title: "设计伦理主义者",
    description: "设计应当有所为，有所不为。",
    story: "你关注设计的社会责任。你会拒绝那些诱导用户过度消费的设计，你会为暗模式设计辩护，你会质疑那些利用心理弱点来操纵用户的行为。你相信设计可以改变世界，但往好的方向。",
    rarity: "Epic",
    imageSeed: "ethics-advocate",
    stats: [
      { label: "甲抗性", value: 3 },
      { label: "创造力", value: 75 },
      { label: "拖延指数", value: 40 },
      { label: "工具精通", value: 85 },
      { label: "细节控", value: 92 }
    ]
  }
];
