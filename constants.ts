import { TimelineItem, SkillCategory, LocaleString } from './types';

export const PROFILE = {
  name: {
    en: "Yuya Kawasome",
    jp: "川染 有哉"
  },
  affiliations: [
    { en: "ZEN University", jp: "ZEN大学" },
    { en: "Keio University (Correspondence)", jp: "慶應義塾大学通信教育課程" },
    { en: "Stanford University Special Research Student", jp: "Stanford University Special research student" }
  ],
  tagline: {
    en: "Realizing a society where everyone can live positively through education.",
    jp: "誰もが前向きに生きていける社会の実現を教育から実現していく。"
  },
  description: {
    en: `I am a student entrepreneur based in Tsukuba City, Ibaraki Prefecture. My projects range from website production and coffee farm management systems to sales of coffee and tea, and the development of various AI-powered services. I aim to leap from Japan to the world.
    
    My greatest strength is my attitude of constantly adopting the latest technologies and boldly taking on new challenges.`,
    jp: `私は茨城県つくば市を拠点に活動する学生起業家です。これまでのプロジェクトでは、Webサイトの制作、コーヒー農園管理システムの開発、コーヒーやお茶の販売、さらにはAIを活用した各種サービスの開発など、多岐にわたる分野で挑戦を続け、日本から世界へと飛躍することを目指してきました。

常に最新技術を取り入れ、新たな挑戦に果敢に取り組む姿勢こそが、私の最大の強みです。`
  },
  tags: [
    { en: "Non-Cognitive Skills", jp: "非認知能力" },
    { en: "Entrepreneur", jp: "アントレプレナー" },
    { en: "Engineer", jp: "エンジニア" },
    { en: "Full Marathon", jp: "フルマラソン" },
    { en: "Workout", jp: "筋トレ" },
    { en: "Morning Activity", jp: "朝活" },
    { en: "Positive", jp: "ポジティブ" },
    { en: "AI", jp: "AI" },
    { en: "Global", jp: "グローバル" },
    { en: "Education", jp: "教育" }
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    category: { en: "Languages", jp: "プログラミング言語" },
    items: ["Python", "C", "TypeScript", "JavaScript", "React", "Next.js 14"]
  },
  {
    category: { en: "Design & Styling", jp: "デザイン" },
    items: ["Tailwind CSS", "Figma", "UI/UX Design"]
  },
  {
    category: { en: "Tools & Infra", jp: "ツール・インフラ" },
    items: ["Node.js", "MySQL", "Vue.js", "WordPress", "CMS", "Git/GitHub"]
  }
];

export const CAREER_HISTORY: TimelineItem[] = [
  {
    date: "2020.04",
    title: { en: "Entered Ibaraki National College of Technology", jp: "茨城工業高等専門学校 入学" },
    description: { en: "Department of Global Creation Engineering, Electrical and Electronic Engineering Course.", jp: "国際創造工学科 電気・電子系" },
    link: "https://www.ibaraki-ct.ac.jp/"
  },
  {
    date: "2021",
    title: { en: "Kosen Open Innovation Challenge 2021 powered by JICA", jp: "Kosen Open Innovation Challenge 2021 powered by JICA" },
    description: { en: "Winner (Best Team Award).", jp: "最優秀チーム" },
    highlight: true,
    link: "https://www.ecolabnagaokaut.com/post/kosen-open-innovation-challenge-powered-by-jica2021%E3%82%92%E9%96%8B%E5%82%AC%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F"
  },
  {
    date: "2021",
    title: { en: "World Electric Vehicle Challenge in NATORI", jp: "World Electric Vehicle Challenge in NATORI" },
    description: { en: "Fighting Spirit Award.", jp: "敢闘賞" },
    link: "https://wevc.jp/"
  },
  {
    date: "2022",
    title: { en: "World Electric Vehicle Challenge in NATORI", jp: "World Electric Vehicle Challenge in NATORI" },
    description: { en: "Fighting Spirit Award.", jp: "敢闘賞" },
    link: "https://wevc.jp/"
  },
  {
    date: "2022.04",
    title: { en: "Mito City General Athletic Meet", jp: "県北水戸総体出場" },
    description: { en: "Participant.", jp: "記録出場" },
    link: "https://ibariku.com/soku-index/2022/20220422-24/RS6_0_6_1_0_0.html"
  },
  {
    date: "2023",
    title: { en: "Stanford University School of Engineering", jp: "Stanford University School of Engineering" },
    description: { en: "2-month exchange program.", jp: "2ヶ月留学" },
    link: "https://engineering.stanford.edu/"
  },
  {
    date: "2023",
    title: { en: "Rwanda Product Verification", jp: "ルワンダ現地での収穫時期識別プロダクト検証" },
    description: { en: "Conducted harvest time identification product verification locally under JICA/Deloitte support.", jp: "JICA・Deloitteサポート下での実施" },
    highlight: true,
    link: "https://www.jica.go.jp/"
  },
  {
    date: "2023",
    title: { en: "National Kosen Programming Contest 2023", jp: "全国高専プログラミングコンテスト2023" },
    description: { en: "Fighting Spirit Award.", jp: "敢闘賞" },
    highlight: true,
    link: "https://www.ibaraki-ct.ac.jp/info/archives/69415"
  },
  {
    date: "2023",
    title: { en: "DCON (Deep Learning Contest) 2023", jp: "全国高等専門学校ディープラーニングコンテスト (DCON)" },
    description: { en: "Passed secondary screening.", jp: "二次審査通過" },
    highlight: false,
    link: "https://dcon.ai/2023/"
  },
  {
    date: "2024",
    title: { en: "CodeChrysalis & Kloud Scholarship", jp: "CodeChrysalis & Kloudスカラシッププログラム" },
    description: { en: "Silicon Valley-style software engineering training program.", jp: "シリコンバレー式ソフトウェアエンジニアリング育成プログラムへの参加" },
    highlight: true,
    link: "https://kloud.community/News/CodeChrysalis-scholarship-2024"
  },
  {
    date: "2024",
    title: { en: "Hitachi Frogs 6th Cohort", jp: "Hitachi Frogs 6期生" },
    description: { en: "Selected member.", jp: "選抜" },
    link: "https://www.ibarakifrogs.com/post/6th_selectedstudent"
  },
  {
    date: "2024",
    title: { en: "LEAP DAY 2024", jp: "LEAP DAY" },
    description: { en: "Double Award Winner (Japan Research Institute Award, Mirai Studio Award).", jp: "2冠 (日本総研賞・未来スタジオ賞)" },
    highlight: true,
    link: "https://www.leapday.jp/"
  },
  {
    date: "2024.12",
    title: { en: "Kosen Career Winter Pitch 2024", jp: "高専キャリア冬の全国大会2024 起業部ピッチ" },
    description: { en: "Triple Crown Winner (Champion, Audience Award, DEEPCORE Award).", jp: "3冠(優勝・オーディエンス賞・DEEPCORE賞)" },
    highlight: true,
    link: "https://kosen-career.tech/news/2024winter-pitch"
  },
  {
    date: "2024.12",
    title: { en: "Ibaraki Kosen AI Future Inquiry Project", jp: "茨城高専 AI未来探究プロジェクト" },
    description: { en: "TA Lead.", jp: "TA主導" },
    link: "https://www.ibaraki-ct.ac.jp/info/archives/75609"
  },
  {
    date: "2025.01",
    title: { en: "STAPS Student Entrepreneurship Program", jp: "学生起業家育成プログラム STAPS" },
    description: { en: "Selected.", jp: "選抜" },
    link: "https://stationai.co.jp/staps"
  },
  {
    date: "2025.02",
    title: { en: "AKATSUKI Conference", jp: "AKATSUKIカンファレンス" },
    description: { en: "Speaker at final report meeting.", jp: "（最終報告会）登壇" },
    link: "https://mitouteki.jp/r5/special/conference/"
  },
  {
    date: "2025.03",
    title: { en: "STATION Ai STAPS Pitch Contest", jp: "STATION Ai 学生ビジネスプランピッチコンテスト STAPS" },
    description: { en: "Excellence Award.", jp: "優秀賞" },
    highlight: true,
    link: "https://note.com/stai/n/n20025df1b4f7"
  },
  {
    date: "2025.03",
    title: { en: "TSUKUBA CONNÉCT #74", jp: "TSUKUBA CONNÉCT #74" },
    description: { en: "Speaker.", jp: "登壇" },
    link: "https://venturecafetokyo.org/event/tsukuba-connect-74/"
  },
  {
    date: "2025.03",
    title: { en: "Graduated Ibaraki National College of Technology", jp: "茨城工業高等専門学校 卒業" },
    description: { en: "Department of Global Creation Engineering.", jp: "国際創造工学科 電気・電子系" },
    link: "https://www.ibaraki-ct.ac.jp/"
  },
  {
    date: "2025.04",
    title: { en: "Entered ZEN University", jp: "ZEN大学 入学" },
    description: { en: "Faculty of Intelligent Information Society.", jp: "知能情報社会学部" },
    link: "https://zen.ac.jp/"
  },
  {
    date: "2025.05",
    title: { en: "Local Venture Pitch vol.3", jp: "Local Venture Pitch vol.3" },
    description: { en: "Pitch presenter (Ibaraki frogs & XOSS ACADEMY).", jp: "茨城frogs＆XOSS ACADEMY ピッチ" },
    link: "https://tsukuba-stapa.jp/event/3738/"
  },
  {
    date: "2025.06",
    title: { en: "Sekisui House InnoCom Square 3rd Lab.", jp: "積水ハウス InnoCom Square 3rd Lab." },
    description: { en: "Selected as 1st Gen Ambassador.", jp: "アンバサダー 1期生選出" },
    link: "https://www.square.innocom.co.jp/event/3rdlab1st"
  },
  {
    date: "2025.06",
    title: { en: "JETRO J-StarX Stanford Course", jp: "JETRO J-StarX 起業家等の派遣プログラム" },
    description: { en: "Selected for entrepreneurship dispatch program.", jp: "スタンフォードコース選抜" },
    highlight: true,
    link: "https://www.jetro.go.jp/services/j-starx/A112.html"
  },
  {
    date: "2025.08",
    title: { en: "Google AI Student Ambassador", jp: "Google AI 学生アンバサダー" },
    description: { en: "Appointed.", jp: "就任" },
    highlight: true,
    link: "https://blog.google/intl/ja-jp/feed/google-ai/"
  },
  {
    date: "2025.09",
    title: { en: "Stanford d.school Program", jp: "Stanford University d.school" },
    description: { en: "Program Completion.", jp: "プログラム修了" },
    link: "https://dschool.stanford.edu/"
  },
  {
    date: "2025.10",
    title: { en: "Entered Keio University", jp: "慶應義塾大学 入学" },
    description: { en: "Faculty of Economics (Correspondence Course) - Special Course.", jp: "経済学部 (通信教育課程) 特別課程" },
    link: "https://www.tsushin.keio.ac.jp/"
  }
];

export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://www.facebook.com/p/%E5%B7%9D%E6%9F%93%E6%9C%89%E5%93%89-100093034111137/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yuya-kawasome-77011a235/" },
  { name: "Instagram", url: "https://www.instagram.com/kawasome.yuya" },
  { name: "Note", url: "https://note.com/yuku_1230" }
];

export const CREATIVE_WORKS = [
  {
    id: 1,
    title: { en: "Product Promotion", jp: "プロダクトプロモーション" },
    category: { en: "Video Editing", jp: "動画編集" },
    type: "video",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: { en: "Coffee Plantation", jp: "コーヒー農園" },
    category: { en: "Photography", jp: "写真撮影" },
    type: "image",
    src: "https://images.unsplash.com/photo-1511537632536-b7a4896848a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: { en: "Urban Architecture", jp: "都市建築" },
    category: { en: "Photography", jp: "写真撮影" },
    type: "image",
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: { en: "Event Coverage", jp: "イベント撮影" },
    category: { en: "Videography", jp: "動画撮影" },
    type: "video",
    src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: { en: "Portrait Series", jp: "ポートレート" },
    category: { en: "Photography", jp: "写真撮影" },
    type: "image",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: { en: "Tech Conference", jp: "テックカンファレンス" },
    category: { en: "Photography", jp: "写真撮影" },
    type: "image",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];