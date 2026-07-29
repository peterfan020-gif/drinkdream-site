/* ============================================================
   DRINKDREAM V3 — Enhanced Interactions + Trilingual
   ============================================================ */
(function(){'use strict';

// ─── Language Data ──────────────────────────────────────
const L={
  zh:{
    'nav.brands':'品牌矩阵','nav.about':'关于我们','nav.find':'寻找我们','nav.join':'加入我们',
    'back':'回到顶部','back.brands':'← 返回品牌矩阵',
    'hero.eyebrow':'品牌生态系统','hero.sub':'从一杯茶到多品牌矩阵',
    'hero.cta':'了解集团',
    'm1.title':'DRINKDREAM, From Shanghai.','m1.desc':'2025年成立于上海，整合品牌孵化、投资、代理、经营、管理于一体的综合服务型集团。',
    'm2.title':'它诞生于对司空见惯的「饮用」行为的彻底反叛','m2.desc':'Born from a radical rebellion against the mundane act of drinking.',
    'm3.title':'根植于——Tea、Ice Cream、Gelato、Coffee','m3.desc':'Rooted in the craft of fresh beverages.',
    'm4.title':'从一杯茶到多品牌矩阵，持续解构与重塑，路虽远，上下而求索','m4.desc':'From one cup to many brands, a cycle of deconstruction and reinvention, exploring all directions.',
    'intro.label':'集团介绍','intro.title':'我们不只创造品牌，我们在定义新式现制饮的未来图景',
    'intro.p1':'DrinkDream饮之梦品牌管理公司，2025年成立于上海，是整合餐饮品牌集孵化、投资、代理、经营、管理于一体的综合服务型集团，旗下孵化九十叶、Black Tree、泰柯茶园、抹趣、Matcha Wang 等多家连锁轻餐品牌，现已布局北京、上海、深圳、杭州、苏州、广州等国内多个一线、新一线城市核心商圈。',
    'intro.p2':'DrinkDream拥有一支高素质管理人才和职业经理人队伍，为都市精英和城市新消费人群，持续定义高品质、高审美、高情感价值的餐饮新体验。集团致力于成为全球最具影响力的系统化品牌孵化平台。我们构建了从产品灵感、品牌战略、营销增长到供应链及资本运作的完整赋能体系。',
    'intro.p3':'我们不止创造产品与品牌，我们更在定义新式现制饮的未来图景。合作伙伴包括恒隆、德基、万象城、龙湖、K11、IFC 等顶级商业地产。',
    'metrics.1':'深耕甜品市场','metrics.2':'直营门店超过','metrics.3':'门店总营收','metrics.4':'特许经营门店','metrics.5':'管理人员超',
    'metrics.u1':'年','metrics.u2':'家','metrics.u3':'亿','metrics.u4':'家','metrics.u5':'人',
    'values.label':'核心价值观','values.title':'创新 · 快 · 卓越 · 分享',
    'v1.title':'创新','v1.desc':'构建从产品灵感到商业品牌的完整赋能体系',
    'v2.title':'快','v2.desc':'以闪电路径覆盖市场，持续锻造尖刀品牌',
    'v3.title':'卓越','v3.desc':'超越峰值，创造记忆。定义高品质餐饮新体验',
    'v4.title':'分享','v4.desc':'与超级合伙人构建共生根系统，为顶尖人才提供舞台',
    'media.label':'媒体报道','media.title':'媒体报道',
    'about.partners':'战略合作伙伴','about.partners.title':'与顶尖商业地标同行',
    'footer.brands':'品牌','footer.group':'集团','footer.contact':'联系',
    'footer.about':'关于我们','footer.join':'加入我们','footer.find':'寻找我们',
    'footer.media':'媒体联络','footer.biz':'商务合作',
    'bridge.label':'了解更多','bridge.title':'关于 DRINKDREAM 集团','bridge.desc':'从一杯茶到多品牌矩阵，了解我们的品牌哲学与集团故事。','bridge.cta':'了解更多',
    'stack.explore':'探索','stack.cta':'品牌矩阵','stack.back':'返回品牌矩阵 ↑',
    'find.title':'寻找我们','find.sub':'探索 DRINKDREAM 全国门店 · Explore our stores nationwide',
    'find.brand':'品牌筛选','find.city':'城市筛选','find.all':'全部','find.count':'共 {n} 家门店','find.list':'门店列表',

    // Brands
    'jsy.number':'BRAND 01 · 抹茶系','jsy.hero':'专注东方抹茶，延续千年茶韵。一抹茶，还原自然的纯粹。',
    'jsy.s1.sub':'品牌定位','jsy.s1.title':'专注东方抹茶 · 延续千年茶韵',
    'jsy.s1.c1.title':'品牌定位','jsy.s1.c1.desc':'九十叶相信抹茶不仅是味觉的享受，更是与自然对话的方式。还原抹茶最本真的味道，让每一位顾客都能感受到来自东方的自然之美与文化之韵。',
    'jsy.s1.c2.title':'品牌理念','jsy.s1.c2.desc':'一抹茶，还原自然的纯粹。回归自然、享受纯粹、品味东方。在这里，抹茶不仅是食物，更是一种生活态度。',
    'jsy.s2.sub':'品牌哲学','jsy.s2.title':'三大核心价值',
    'jsy.s2.i1':'回归自然 — 还原抹茶最本真的味道，让每一位顾客都能感受到来自东方的自然之美与文化之韵',
    'jsy.s2.i2':'享受纯粹 — 甄选优质抹茶原料，以匠心工艺呈现东方抹茶的醇厚与层次',
    'jsy.s2.i3':'品味东方 — 将东方抹茶的美学与仪式感融入当代生活方式',
    'jsy.s3.sub':'产品与空间','jsy.s3.title':'东方抹茶 · 自然共生',
    'jsy.s3.c1.title':'THE PRODUCTS','jsy.s3.c1.desc':'甄选优质抹茶原料，涵盖抹茶冰淇淋、抹茶拿铁、抹茶Gelato等产品线。招牌抹茶冰淇淋在大众点评多次上榜。',
    'jsy.s3.c2.title':'THE SPACE','jsy.s3.c2.desc':'空间设计追求与自然的共生关系，以东方美学为基调。全国覆盖约25个省份和地区，门店均位于人气最旺的商业中心。',
    'jsy.m1':'门店','jsy.m2':'覆盖省份','jsy.m3':'创立年份',
    'bt.number':'BRAND 02 · 茶饮系','bt.hero':'都市与自然交汇处的一棵灵感之树。以黑金色调演绎泰式茶饮的浓郁风情。',
    'bt.s1.sub':'品牌理念','bt.s1.title':'理性结构 · 亲生命性 · 灵感生长',
    'bt.s1.c1.title':'Rational Structure 理性结构','bt.s1.c1.desc':'以严谨的产品逻辑构建每一杯饮品。纯正原料：选用正宗泰国茶叶、天然香料、优质鲜乳，强调甜度、茶香、奶香的平衡。',
    'bt.s1.c2.title':'Biophilic Nature 亲生命性','bt.s1.c2.desc':'传递泰国茶文化的悠闲、热情与精致。强调chill、放松、享受慢生活的场景感。',
    'bt.s2.sub':'品牌哲学','bt.s2.title':'先锋主义 · 跨界融合',
    'bt.s2.i1':'先锋主义表达 — 用艺术化包装和口感丰富层次吸引年轻人，结合水果、焦糖、巧克力等打造独特泰茶变体',
    'bt.s2.i2':'跨界创意 — 与甜品、点心、咖啡、冰淇淋融合，涵盖泰式奶茶、咖啡、泰式咸法酪、泰奶口味冰淇淋',
    'bt.s2.i3':'南洋风味 — 多款泰式果茶及柠檬草罗望子、香茅柚子、泰椰黑柠檬等南洋风味冰淇淋',
    'bt.s3.sub':'产品与空间','bt.s3.title':'400次熔岩 · 黑金概念空间',
    'bt.s3.c1.title':'明星产品','bt.s3.c1.desc':'「400次熔岩泰茶」融合泰奶、咖啡与芝士酪乳，包含熔岩奶盖、焦香咖啡和泰式茶底。「鸳鸯泰式咸法酪」咸甜交织。',
    'bt.s3.c2.title':'概念空间','bt.s3.c2.desc':'首家门店设于深圳湾万象城，黑金风格空间设计。已入驻南京德基、长沙国金街、上海百联奥特莱斯等顶级商业体。',
    'bt.m1':'门店','bt.m2':'覆盖城市','bt.m3':'创立年份',
    'mw.number':'BRAND 03 · 抹茶系','mw.hero':'回归抹茶本身——唯抹茶而已。DRINKDREAM 刺向世界的尖刃。',
    'mw.s1.sub':'品牌故事','mw.s1.title':'在潮流融合中回归原点',
    'mw.s1.c1.title':'品牌诞生','mw.s1.c1.desc':'在众多抹茶品牌追逐风味叠加与潮流融合之时，我们选择回归原点——抹茶本身。真正的抹茶体验应展现纯粹的风味与深邃的层次。',
    'mw.s1.c2.title':'品牌使命','mw.s1.c2.desc':'招牌产品"小羊莉莉"累计销量突破2万杯，在门店营收中占比70%，成为外国游客来上海必打卡的"社交货币"。',
    'mw.s2.sub':'产品哲学','mw.s2.title':'三期研磨 · 三种境界',
    'mw.s2.i1':'经遮光覆盖、低温碾磨 — 粉质细腻，有鲜嫩的清香，口感清新自然',
    'mw.s2.i2':'粉质细腻如璧，口感浓郁 — 入口是鲜醇饱满的苔香，回甘迅速而明亮',
    'mw.s2.i3':'粉体细腻如初春原野的新绿 — 带着未经世事的纯粹，香气丰富，滋味平衡',
    'mw.s3.sub':'空间与体验','mw.s3.title':'抹茶道场 · 一期一会',
    'mw.s3.c1.title':'抹茶道场','mw.s3.c1.desc':'空间以砾石、钢板与混凝土为序，构筑一处抹茶道场。从浓酽至清浅，完成一场味觉修行。',
    'mw.s3.c2.title':'一期一会','mw.s3.c2.desc':'一客一接待，服务面面俱到。日客流稳定在900至1200人，外国游客占比极高。',
    'mw.m1':'旗舰店','mw.m2':'小羊莉莉销量','mw.m3':'创立年份',
    'yj.number':'BRAND 04 · 酸奶甜品','yj.hero':'每一杯 Yoajung 都是可以自己定义的小宇宙。Less Sugar, More You.',
    'yj.s1.sub':'品牌故事','yj.s1.title':'来自首尔的酸奶冰淇淋正统',
    'yj.s1.c1.title':'品牌起源','yj.s1.c1.desc':'Yoajung是一家韩国冷冻酸奶连锁品牌，总部位于首尔。品牌名称意为"酸奶冰淇淋的正统"，强调健康、可定制化的甜品体验。',
    'yj.s1.c2.title':'品牌使命','yj.s1.c2.desc':'坚持发酵的自然，使用真实、干净的食材，致力成为新一代亚洲品牌走向世界的代表。',
    'yj.s2.sub':'品牌定位','yj.s2.title':'Less Sugar, More You',
    'yj.s2.i1':'可定制的甜品体验 — 每一杯Yoajung都是可以自己定义的小宇宙',
    'yj.s2.i2':'真实干净的食材 — 拒绝标签化，坚持使用真实、干净的食材',
    'yj.s2.i3':'年轻潮流品牌 — 饭圈主力人群45% · 健康甜品爱好者25% · 社交打卡20%',
    'yj.s3.sub':'核心客群','yj.s3.title':'精准定位年轻消费者',
    'yj.s3.c1.title':'目标人群','yj.s3.c1.desc':'饭圈主力人群占比最高达45%，健康甜品爱好者占25%。迅速在韩国市场获得成功后引入中国市场。',
    'yj.s3.c2.title':'品牌愿景','yj.s3.c2.desc':'致力成为新一代亚洲品牌走向世界的代表。每一杯Yoajung都是可以自定义的小宇宙。',
    'yj.m1':'门店','yj.m2':'覆盖城市','yj.m3':'引入中国',
    'mq.number':'BRAND 05 · 抹茶系','mq.hero':'一个抹茶小怪兽"抹抹兽"，脑子里装满了奇思妙想。热爱抹茶是一切快乐和创意的起点。',
    'mq.s1.sub':'品牌故事','mq.s1.title':'世界上还需要再多一家普通的抹茶店吗？',
    'mq.s1.c1.title':'答案是：不需要','mq.s1.c1.desc':'当抹茶逐渐融入生活日常——抹趣开始在多元感官中探索灵感变奏。抹茶是无限可能的起点。',
    'mq.s1.c2.title':'品牌IP · 抹抹兽','mq.s1.c2.desc':'一个脑子里装满了奇思妙想的抹茶小怪兽，执着于探索抹茶与万物碰撞的无限可能。',
    'mq.s2.sub':'产品哲学','mq.s2.title':'百倍茶汤 · 只取一抹精华',
    'mq.s2.i1':'甄选早春明前茶 — 明前茶贵如金，采用茶道级抹茶，慢火熬煮凝萃成酱',
    'mq.s2.i2':'严苛的内部保存系统 — 追求极致的品质和口感，保证抹茶酱的每一口浓醇鲜活',
    'mq.s2.i3':'抹茶酱饮首创者 — 将茶道级抹茶慢火熬煮成酱，创造出全新的饮品品类',
    'mq.s3.sub':'产品与精神','mq.s3.title':'抹茶+万物的无限可能',
    'mq.s3.c1.title':'产品系列','mq.s3.c1.desc':'抹茶酱饮系列为核心，延伸抹茶+水果、抹茶+烘焙等创意产品线。',
    'mq.s3.c2.title':'品牌精神','mq.s3.c2.desc':'Love · Idea · Happy · Infinite —— 热爱是起点，创意是路径，快乐是终点。',
    'mq.m1':'门店','mq.m2':'覆盖城市','mq.m3':'创立年份',
    'lw.number':'BRAND 06 · 茶饮系','lw.hero':'都市里的柠檬岛，献给美丽灵魂的诗意栖居。',
    'lw.s1.sub':'品牌故事','lw.s1.title':'当阳光掠过南法小镇的百叶窗',
    'lw.s1.c1.title':'品牌起源','lw.s1.c1.desc':'当阳光掠过南法小镇的百叶窗，光就有了形状。LemonWell，一座浮在都市的柠檬岛。',
    'lw.s1.c2.title':'品牌愿景','lw.s1.c2.desc':'循着柠檬的香气，穿过普罗旺斯的金色夏日，构筑一处让感官苏醒、让心神靠岸的岛屿时光。',
    'lw.s2.sub':'品牌哲学','lw.s2.title':'柠檬的多样风味',
    'lw.s2.i1':'专注呈现柠檬的多元风味 — 通过高品质原料、精致配方和设计感呈现，提供"柠檬岛"体验',
    'lw.s2.i2':'感官苏醒 · 心神靠岸 — lemon tea & gelato，在都市中心打造诗意栖居',
    'lw.s2.i3':'南法美学 — 品牌视觉与空间设计汲取南法灵感，将柠檬黄、阳光金、海水蓝融入空间',
    'lw.s3.sub':'产品线','lw.s3.title':'柠檬茶 · Gelato · 生活方式',
    'lw.s3.c1.title':'Lemon Tea 柠檬茶','lw.s3.c1.desc':'甄选优质柠檬，以精致配方呈现柠檬茶的多样风味与清新层次。',
    'lw.s3.c2.title':'Gelato 意式冰淇淋','lw.s3.c2.desc':'将柠檬的清新与Gelato的醇厚完美融合，打造独一无二的味觉体验。',
    'lw.m1':'门店','lw.m2':'覆盖城市','lw.m3':'创立年份',
  }};

// Add zh-TW and en by copying zh and overriding
const zh=L.zh;
L['zh-TW']=Object.assign({},zh,{
  'nav.brands':'品牌矩陣','nav.about':'關於我們','nav.find':'尋找我們','nav.join':'加入我們',
  'back':'回到頂部','back.brands':'← 返回品牌矩陣',
  'hero.eyebrow':'品牌生態系統','hero.sub':'從一杯茶到多品牌矩陣','hero.cta':'了解更多',
  'intro.label':'集團介紹','intro.title':'我們不只創造品牌，我們在定義新式現製飲的未來圖景',
  'intro.p1':'DrinkDream飲之夢品牌管理公司，2025年成立於上海，是整合餐飲品牌集孵化、投資、代理、經營、管理於一體的綜合服務型集團，旗下孵化九十葉、Black Tree、泰柯茶園、抹趣、Matcha Wang 等多家連鎖輕餐品牌，現已佈局北京、上海、深圳、杭州、蘇州、廣州等國內多個一線、新一線城市核心商圈。',
  'intro.p2':'DrinkDream擁有一支高素質管理人才和職業經理人隊伍，為都市精英和城市新消費人群，持續定義高品質、高審美、高情感價值的餐飲新體驗。集團致力於成為全球最具影響力的系統化品牌孵化平台。我們構建了從產品靈感、品牌戰略、營銷增長到供應鏈及資本運作的完整賦能體系。',
  'intro.p3':'我們不止創造產品與品牌，我們更在定義新式現製飲的未來圖景。合作夥伴包括恒隆、德基、萬象城、龍湖、K11、IFC 等頂級商業地產。',
  'metrics.1':'深耕甜品市場','metrics.2':'直營門店超過','metrics.3':'門店總營收','metrics.4':'特許經營門店','metrics.5':'管理人員超',
  'metrics.u1':'年','metrics.u2':'家','metrics.u3':'億','metrics.u4':'家','metrics.u5':'人',
  'values.title':'創新 · 快 · 卓越 · 分享',
  'v1.title':'創新','v1.desc':'構建從產品靈感到商業品牌的完整賦能體系',
  'v2.title':'快','v2.desc':'以閃電路徑覆蓋市場，持續鍛造尖刀品牌',
  'v3.title':'卓越','v3.desc':'超越峰值，創造記憶。定義高品質餐飲新體驗',
  'v4.title':'分享','v4.desc':'與超級合夥人構建共生根系統，為頂尖人才提供舞台',
  'media.label':'媒體報導','media.title':'媒體報導',
  'about.partners':'戰略合作夥伴','about.partners.title':'與頂尖商業地標同行',
  'values.label':'核心價值觀',
  'footer.brands':'品牌','footer.group':'集團','footer.contact':'聯絡',
  'footer.about':'關於我們','footer.join':'加入我們','footer.find':'尋找我們',
  'footer.media':'媒體聯絡','footer.biz':'商務合作',
  'bridge.label':'了解更多','bridge.title':'關於 DRINKDREAM 集團','bridge.desc':'從一杯茶到多品牌矩陣，了解我們的品牌哲學與集團故事。','bridge.cta':'了解更多',
  'find.title':'尋找我們','find.sub':'探索 DRINKDREAM 全國門市 · Explore our stores nationwide','find.brand':'品牌篩選','find.city':'城市篩選','find.all':'全部','find.count':'共 {n} 間門市','find.list':'門市列表',
});
L.en=Object.assign({},zh,{
  'nav.brands':'Brands','nav.about':'About Us','nav.find':'Find Us','nav.join':'Join Us',
  'back':'Back to Top','back.brands':'← Back to Brands',
  'hero.eyebrow':'BRAND ECOSYSTEM','hero.sub':'From one cup to many brands','hero.cta':'Learn More',
  'm1.title':'DRINKDREAM, From Shanghai.','m1.desc':'Founded in 2025 in Shanghai, a comprehensive group integrating brand incubation, investment, agency, operation, and management.',
  'm2.title':'Born from a radical rebellion against the mundane act of drinking.','m2.desc':'',
  'm3.title':'Rooted in — Tea, Ice Cream, Gelato, Coffee','m3.desc':'',
  'm4.title':'From one cup to many brands, a cycle of deconstruction and reinvention.','m4.desc':'',
  'intro.label':'GROUP INTRODUCTION','intro.title':'We don\'t just create brands. We define the future of freshly made beverages.',
  'intro.p1':'DrinkDream Brand Management Co., founded in Shanghai in 2025, is a comprehensive group integrating brand incubation, investment, agency, operation, and management. Our portfolio includes NINTEA MATCHA, Black Tree, TamKoKo, Very Matcha, and Matcha Wang, now present in prime commercial districts across Beijing, Shanghai, Shenzhen, Hangzhou, Suzhou, Guangzhou, and other first-tier Chinese cities.',
  'intro.p2':'DrinkDream boasts a team of high-caliber managers and professionals, continuously defining high-quality, high-aesthetic, high-emotional-value dining experiences. We are committed to becoming the world\'s most influential systematic brand incubation platform.',
  'intro.p3':'We don\'t just create products and brands — we are defining the future of freshly made beverages. Our partners include Hang Lung, Deji, MixC, Longfor, K11, IFC, and other top-tier commercial real estate.',
  'metrics.1':'Deep Roots in Desserts','metrics.2':'Company-owned Stores','metrics.3':'Total Store Revenue','metrics.4':'Franchised Stores','metrics.5':'Management Staff',
  'metrics.u1':'Years','metrics.u2':'Stores','metrics.u3':'Billion','metrics.u4':'Stores','metrics.u5':'People',
  'values.label':'CORE VALUES','values.title':'Innovation · Speed · Excellence · Sharing',
  'v1.title':'Innovation','v1.desc':'From product inspiration to a complete brand empowerment system',
  'v2.title':'Speed','v2.desc':'Cover the market with lightning speed, continuously forge flagship brands',
  'v3.title':'Excellence','v3.desc':'Beyond peaks, create memories. Define premium dining experiences',
  'v4.title':'Sharing','v4.desc':'Build symbiotic systems with super partners, provide the best stage for top talent',
  'media.label':'MEDIA COVERAGE','media.title':'Media Coverage',
  'about.partners':'Strategic Partners','about.partners.title':'Alongside the Finest Commercial Landmarks',
  'footer.brands':'Brands','footer.group':'Group','footer.contact':'Contact',
  'footer.about':'About Us','footer.join':'Join Us','footer.find':'Find Us',
  'footer.media':'Media Contact','footer.biz':'Business Cooperation',
  'bridge.label':'Learn More','bridge.title':'About DRINKDREAM Group','bridge.desc':'From one cup to many brands. Discover our philosophy and story.','bridge.cta':'Learn More',
  'stack.explore':'Explore','stack.cta':'Brand Matrix','stack.back':'↑ Back to Brands',
  'find.title':'Find Us','find.sub':'Explore DRINKDREAM stores nationwide','find.brand':'Filter by Brand','find.city':'Filter by City','find.all':'All','find.count':'{n} stores found','find.list':'Store List',
  'jsy.number':'BRAND 01 · Matcha Series','jsy.hero':'Dedicated to Eastern matcha, continuing a thousand-year tea tradition.',
  'jsy.s1.sub':'Brand Positioning','jsy.s1.title':'Eastern Matcha · Nature in Harmony',
  'jsy.s1.c1.title':'Brand Positioning','jsy.s1.c1.desc':'NINTEA MATCHA believes matcha is a way of dialoguing with nature, restoring matcha to its most authentic flavor.',
  'jsy.s1.c2.title':'Brand Philosophy','jsy.s1.c2.desc':'One scoop of matcha, the purity of nature restored. Return to nature, enjoy purity, savor the East.',
  'jsy.s2.sub':'Brand Philosophy','jsy.s2.title':'Three Core Values',
  'jsy.s2.i1':'Return to Nature — Restoring matcha to its most authentic flavor for every customer to feel the natural beauty of the East',
  'jsy.s2.i2':'Savor Purity — Carefully selected premium matcha, presenting richness and layers through artisanal craftsmanship',
  'jsy.s2.i3':'Taste the East — Integrating the aesthetics and ritual of Eastern matcha into contemporary lifestyles',
  'jsy.s3.sub':'Products & Spaces','jsy.s3.title':'Eastern Matcha · Natural Harmony',
  'jsy.s3.c1.title':'THE PRODUCTS','jsy.s3.c1.desc':'Premium matcha ice cream, latte, gelato. The signature matcha ice cream repeatedly ranked on Dianping top charts.',
  'jsy.s3.c2.title':'THE SPACE','jsy.s3.c2.desc':'Spatial design pursues natural symbiosis, grounded in Eastern aesthetics. Coverage spans 25 provinces.',
  'jsy.m1':'Stores','jsy.m2':'Provinces','jsy.m3':'Founded',
  'bt.number':'BRAND 02 · Tea Series','bt.hero':'An inspired tree at the intersection of urban and natural. Thai tea with bold aesthetics.',
  'bt.s1.sub':'Brand Philosophy','bt.s1.title':'Rational Structure · Biophilic Nature · Inspired Growth',
  'bt.s1.c1.title':'Rational Structure','bt.s1.c1.desc':'Building every drink with rigorous product logic. Authentic Thai tea leaves, natural spices, premium fresh milk.',
  'bt.s1.c2.title':'Biophilic Nature','bt.s1.c2.desc':'Conveying the ease, passion, and refinement of Thai tea culture through artistic packaging and rich flavor layers.',
  'bt.s2.sub':'Brand Philosophy','bt.s2.title':'Avant-garde · Cross-Border Fusion',
  'bt.s2.i1':'Avant-garde Expression — Artistic packaging and rich flavors combining fruits, caramel, and chocolate',
  'bt.s2.i2':'Cross-Border Creativity — Blending with desserts, pastries, coffee, and ice cream',
  'bt.s2.i3':'Nanyang Flavors — Multiple Thai fruit teas and SE Asian-inspired gelato flavors',
  'bt.s3.sub':'Products & Spaces','bt.s3.title':'400x Lava · Black Gold Concept',
  'bt.s3.c1.title':'Signature Products','bt.s3.c1.desc':'The "400x Lava Thai Tea" blends Thai milk tea, coffee, and cheese cream.',
  'bt.s3.c2.title':'Concept Spaces','bt.s3.c2.desc':'First store at Shenzhen Bay MixC, black-gold interior design. Now present in Nanjing Deji, Changsha IFS, and more.',
  'bt.m1':'Stores','bt.m2':'Cities','bt.m3':'Founded',
  'mw.number':'BRAND 03 · Matcha Series','mw.hero':'Nothing but matcha. DRINKDREAM\'s blade thrusting toward the world.',
  'mw.s1.sub':'Brand Story','mw.s1.title':'Returning to the Origin Amidst Trends',
  'mw.s1.c1.title':'Brand Birth','mw.s1.c1.desc':'While many chase flavor stacking and trends, we chose to return to the origin — matcha itself.',
  'mw.s1.c2.title':'Brand Mission','mw.s1.c2.desc':'The signature "Lily the Lamb" has sold over 20,000 cups, accounting for 70% of store revenue.',
  'mw.s2.sub':'Product Philosophy','mw.s2.title':'Three Grinds · Three States of Mind',
  'mw.s2.i1':'Shade-covered, low-temperature ground — fine powder with fresh, delicate fragrance',
  'mw.s2.i2':'Silky smooth powder, rich texture — full-bodied mossy aroma with a quick and bright finish',
  'mw.s2.i3':'Fine powder like the fresh green of early spring — carrying an untouched purity, rich aroma, balanced flavor',
  'mw.s3.sub':'Space & Experience','mw.s3.title':'Matcha Dojo · Ichigo Ichie',
  'mw.s3.c1.title':'The Matcha Dojo','mw.s3.c1.desc':'A space of gravel, steel, and concrete — a matcha dojo for sensory practice.',
  'mw.s3.c2.title':'Ichigo Ichie','mw.s3.c2.desc':'One guest, one reception. Daily traffic at 900–1,200, extremely high foreign tourist ratio.',
  'mw.m1':'Flagship','mw.m2':'Lily Sold','mw.m3':'Founded',
  'yj.number':'BRAND 04 · Yogurt Dessert','yj.hero':'Every cup of Yoajung is a customizable little universe. Less Sugar, More You.',
  'yj.s1.sub':'Brand Story','yj.s1.title':'The Authentic Yogurt Ice Cream from Seoul',
  'yj.s1.c1.title':'Brand Origins','yj.s1.c1.desc':'Yoajung is a Korean frozen yogurt chain headquartered in Seoul, emphasizing healthy, customizable experiences.',
  'yj.s1.c2.title':'Brand Mission','yj.s1.c2.desc':'Using real and clean ingredients, committed to becoming the representative of a new generation of Asian brands.',
  'yj.s2.sub':'Brand Positioning','yj.s2.title':'Less Sugar, More You',
  'yj.s2.i1':'Customizable Dessert Experience — Every cup of Yoajung is a customizable little universe',
  'yj.s2.i2':'Real & Clean Ingredients — Rejecting labels, insisting on real and clean ingredients',
  'yj.s2.i3':'Youth Trend Brand — Fandom demographic 45% · Health lovers 25% · Social check-in 20%',
  'yj.s3.sub':'Core Demographics','yj.s3.title':'Precision Targeting of Young Consumers',
  'yj.s3.c1.title':'Target Audience','yj.s3.c1.desc':'Fandom demographic accounts for up to 45%, health dessert lovers 25%.',
  'yj.s3.c2.title':'Brand Vision','yj.s3.c2.desc':'Making dessert a vehicle for self-expression. Every cup is a customizable little universe.',
  'yj.m1':'Stores','yj.m2':'Cities','yj.m3':'China Entry',
  'mq.number':'BRAND 05 · Matcha Series','mq.hero':'A matcha monster named "Mo Mo," a mind bursting with whimsy. Passion for matcha is the starting point of all creativity.',
  'mq.s1.sub':'Brand Story','mq.s1.title':'Does the world need yet another ordinary matcha shop?',
  'mq.s1.c1.title':'The Answer Is: No','mq.s1.c1.desc':'As matcha integrates into daily life, Very Matcha explores inspired variations through multi-sensory experiences.',
  'mq.s1.c2.title':'Brand IP · Mo Mo','mq.s1.c2.desc':'A matcha monster obsessed with exploring the infinite possibilities of matcha. Love · Idea · Happy · Infinite.',
  'mq.s2.sub':'Product Philosophy','mq.s2.title':'A Hundred Times the Tea · One Scoop of Essence',
  'mq.s2.i1':'Selecting Early Spring Pre-Qingming Tea — Ceremonial-grade matcha, slowly simmered into paste',
  'mq.s2.i2':'Rigorous Internal Preservation System — Pursuing ultimate quality and mouthfeel',
  'mq.s2.i3':'Pioneer of Matcha Paste Drinks — Creating an entirely new beverage category',
  'mq.s3.sub':'Products & Spirit','mq.s3.title':'Matcha + Everything = Infinite Possibilities',
  'mq.s3.c1.title':'Product Lines','mq.s3.c1.desc':'Centered around matcha paste drinks, extending into matcha + fruit, matcha + baking, and more.',
  'mq.s3.c2.title':'Brand Spirit','mq.s3.c2.desc':'Love · Idea · Happy · Infinite — Love is the starting point, creativity is the path, happiness is the destination.',
  'mq.m1':'Stores','mq.m2':'Cities','mq.m3':'Founded',
  'lw.number':'BRAND 06 · Tea Series','lw.hero':'A lemon island in the city, a poetic dwelling for beautiful souls.',
  'lw.s1.sub':'Brand Story','lw.s1.title':'When Sunlight Glides Through the Shutters of a French Town',
  'lw.s1.c1.title':'Brand Origins','lw.s1.c1.desc':'When sunlight glides through the shutters, light takes shape. LemonWell, a lemon island floating in the city.',
  'lw.s1.c2.title':'Brand Vision','lw.s1.c2.desc':'Following the scent of lemon through the golden summers of Provence.',
  'lw.s2.sub':'Brand Philosophy','lw.s2.title':'The Diverse Flavors of Lemon',
  'lw.s2.i1':'Dedicated to the Diverse Flavors of Lemon — High-quality ingredients, refined recipes, design-forward presentation',
  'lw.s2.i2':'Senses Awaken · Spirit Anchors — lemon tea & gelato, creating poetic dwelling in the city',
  'lw.s2.i3':'Southern French Aesthetics — Drawing inspiration from French towns, blending lemon yellow, sunshine gold, ocean blue',
  'lw.s3.sub':'Product Lines','lw.s3.title':'Lemon Tea · Gelato · Lifestyle',
  'lw.s3.c1.title':'Lemon Tea','lw.s3.c1.desc':'Carefully selected premium lemons, presenting diverse flavors and refreshing layers.',
  'lw.s3.c2.title':'Gelato','lw.s3.c2.desc':'Perfectly blending the freshness of lemon with the richness of gelato.',
  'lw.m1':'Stores','lw.m2':'Cities','lw.m3':'Founded',
});

let lang=localStorage.getItem('dd-lang')||'zh';
function t(key){return L[lang]?.[key]||L.zh[key]||key}

// ─── Page Detection ─────────────────────────────────────
function detectPage(){
  const p=location.pathname;
  const brands={jiushiye:'jsy',blacktree:'bt','matcha-wang':'mw',yoajung:'yj',moqu:'mq',lemonwell:'lw'};
  for(const [k,v] of Object.entries(brands)){if(p.includes(k))return 'brand_'+v}
  if(p.includes('about'))return 'about';if(p.includes('find-us'))return 'find';return 'home';
}

// ═══════ Language Switcher ═══════
function initLangSwitcher(){
  const inner=document.querySelector('.header-inner');if(!inner)return;
  const langLabels={zh:'简体中文',en:'English','zh-TW':'繁體中文'};
  const sw=document.createElement('div');sw.className='lang-switch';
  sw.innerHTML=`<button class="lang-btn" id="lang-btn">${langLabels[lang]||'简体中文'} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></button>
    <div class="lang-menu" id="lang-menu"><button data-l="zh" class="${lang==='zh'?'active':''}">简体中文</button><button data-l="zh-TW" class="${lang==='zh-TW'?'active':''}">繁體中文</button><button data-l="en" class="${lang==='en'?'active':''}">English</button></div>`;
  inner.appendChild(sw);
  const btn=document.getElementById('lang-btn'),menu=document.getElementById('lang-menu');
  btn.addEventListener('click',e=>{e.stopPropagation();menu.classList.toggle('open')});
  document.addEventListener('click',()=>menu.classList.remove('open'));
  menu.addEventListener('click',e=>{
    const b=e.target.closest('button[data-l]');if(!b)return;
    lang=b.dataset.l;localStorage.setItem('dd-lang',lang);menu.classList.remove('open');applyLang();
    btn.innerHTML=`${langLabels[lang]||'简体中文'} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;
    menu.querySelectorAll('button').forEach(b2=>b2.classList.toggle('active',b2.dataset.l===lang));
    if(typeof updateMapLang==='function')updateMapLang(lang==='zh-TW'?'zh-TW':lang==='en'?'en':'zh-CN');
  });
}

function applyLang(){
  document.documentElement.lang=lang==='zh-TW'?'zh-TW':lang==='zh'?'zh-CN':'en';
  const page=detectPage();
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});
  const navLinks=document.querySelectorAll('.nav a'),navKeys=['nav.brands','nav.about','nav.find','nav.join'];
  navLinks.forEach((a,i)=>{if(navKeys[i])a.textContent=t(navKeys[i])});
  const backEl=document.querySelector('.back-home');if(backEl)backEl.textContent=t('back.brands');
  if(page==='home')applyHomepage();
  if(page.startsWith('brand_'))applyBrandPage(page.replace('brand_',''));
  if(page==='about')applyAboutPage();
  if(page==='find')applyFindPage();
  applyFooter();
}

function applyHomepage(){
  const eb=document.querySelector('.hero-eyebrow');if(eb)eb.textContent=t('hero.eyebrow');
  const sub=document.querySelector('.hero-sub');if(sub)sub.textContent=t('hero.sub');
  // Bridge section
  const bl=document.querySelector('.bridge-label');if(bl)bl.textContent=t('bridge.label');
  const bt=document.querySelector('.bridge-title');if(bt)bt.textContent=t('bridge.title');
  const bd=document.querySelector('.bridge-desc');if(bd)bd.textContent=t('bridge.desc');
  const bc=document.querySelector('.bridge-cta');if(bc){bc.innerHTML=t('bridge.cta')+' <span class="arrow">→</span>'}
  // Stack CTAs
  document.querySelectorAll('.stack-cta').forEach(a=>{
    const parts=a.textContent.trim().split(' ');
    if(parts.length>=2)a.innerHTML=t('stack.explore')+' '+parts[1]+' <span class="arrow">→</span>';
  });
}

function applyBrandPage(prefix){
  if(!prefix)return;
  const num=document.querySelector('.brand-number');if(num)num.textContent=t(prefix+'.number');
  const hero=document.querySelector('.brand-hero-desc');if(hero)hero.textContent=t(prefix+'.hero');
  const sects=document.querySelectorAll('.brand-sect');
  sects.forEach((sect,i)=>{
    if(i>2)return;const sk='s'+(i+1);
    const sub=sect.querySelector('.ssub');if(sub)sub.textContent=t(prefix+'.'+sk+'.sub');
    const h2=sect.querySelector('h2');if(h2)h2.textContent=t(prefix+'.'+sk+'.title');
    sect.querySelectorAll('.cblock').forEach((cb,j)=>{
      const h=cb.querySelector('h3');if(h)h.textContent=t(prefix+'.'+sk+'.c'+(j+1)+'.title');
      const p=cb.querySelector('p');if(p)p.textContent=t(prefix+'.'+sk+'.c'+(j+1)+'.desc');
    });
    sect.querySelectorAll('.hlist li').forEach((item,j)=>{
      const strong=item.querySelector('strong');const txt=t(prefix+'.'+sk+'.i'+(j+1));
      if(txt&&strong){const di=txt.indexOf(' — ');if(di>0){strong.textContent=txt.substring(0,di);item.lastChild.textContent=txt.substring(di)}}else if(txt)item.textContent=txt;
    });
    sect.querySelectorAll('.bmetrics div span').forEach((s,j)=>{if(j<3)s.textContent=t(prefix+'.m'+(j+1))});
  });
}

function applyAboutPage(){
  const eb=document.querySelector('.hero-eyebrow');if(eb)eb.textContent='DRINKDREAM';
  const ms=document.querySelectorAll('.manifesto-item'),mk=['m1','m2','m3','m4'];
  ms.forEach((m,i)=>{if(mk[i]){const h=m.querySelector('h2'),p=m.querySelector('p');if(h)h.textContent=t(mk[i]+'.title');if(p)p.textContent=t(mk[i]+'.desc')}});
  document.querySelectorAll('.brand-sect').forEach(sect=>{
    const h2=sect.querySelector('h2');if(!h2)return;const sub=sect.querySelector('.ssub');
    if(sect.querySelector('.about-text-block')){
      if(sub)sub.textContent=t('intro.label');h2.textContent=t('intro.title');
      sect.querySelectorAll('.about-text-block p').forEach((p,i)=>{const k=['intro.p1','intro.p2','intro.p3'];if(k[i])p.textContent=t(k[i])});
    }else if(sect.querySelector('.partner-grid')){
      if(sub)sub.textContent=t('about.partners');h2.textContent=t('about.partners.title');
    }else if(sect.querySelector('.values-grid')){
      if(sub)sub.textContent=t('values.label');h2.textContent=t('values.title');
      sect.querySelectorAll('.value-card').forEach((vc,i)=>{const k=['v1','v2','v3','v4'];if(k[i]){const h=vc.querySelector('h3'),p=vc.querySelector('p');if(h)h.textContent=t(k[i]+'.title');if(p)p.textContent=t(k[i]+'.desc')}});
    }else if(!sect.querySelector('.media-grid')){
      // Metrics strip
      const mts=sect.querySelectorAll('.metric-item span');
      const mtsk=['metrics.1','metrics.2','metrics.3','metrics.4','metrics.5'];
      mts.forEach((s,i)=>{if(mtsk[i])s.textContent=t(mtsk[i])});
    }
  });
}

function applyFindPage(){
  const cnt=document.getElementById('store-count');if(cnt){const n=cnt.getAttribute('data-total')||'0';cnt.textContent=t('find.count').replace('{n}',n)}
  document.querySelectorAll('.filter-label-brand').forEach(bl=>bl.textContent=t('find.brand'));
  document.querySelectorAll('.filter-label-city').forEach(cl=>cl.textContent=t('find.city'));
  document.querySelectorAll('.filter-all').forEach(b=>b.textContent=t('find.all'));
  document.querySelectorAll('.store-list-label').forEach(ll=>ll.textContent=t('find.list'));
}

function applyFooter(){
  const fcols=document.querySelectorAll('.footer-col strong'),fck=['footer.brands','footer.group','footer.contact'];
  fcols.forEach((s,i)=>{if(fck[i])s.textContent=t(fck[i])});
  const bt=document.querySelector('.back-to-top');if(bt)bt.title=t('back');
}

// ═══════ INTERACTIONS ═══════

// ─── Progress Bar ───────────────────────────────────────
function initProgressBar(){
  const bar=document.getElementById('progress-bar');if(!bar)return;
  let tick=false;
  window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{const h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=h>0?(window.scrollY/h*100)+'%':'0';tick=false});tick=true}},{passive:true});
}

// ─── Header scroll effect ───────────────────────────────
function initHeader(){
  const h=document.querySelector('.site-header');if(!h)return;
  let tick=false;
  window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{h.classList.toggle('scrolled',window.scrollY>50);tick=false});tick=true}},{passive:true});
}

// ─── Cursor Glow ────────────────────────────────────────
function initCursorGlow(){
  const glow=document.getElementById('cursor-glow');if(!glow)return;
  let tick=false,mx=0,my=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;if(!tick){requestAnimationFrame(()=>{glow.style.left=mx+'px';glow.style.top=my+'px';tick=false});tick=true}},{passive:true});
  const stack=document.getElementById('stack-container');
  if(stack){stack.addEventListener('mouseenter',()=>glow.classList.add('visible'));stack.addEventListener('mouseleave',()=>glow.classList.remove('visible'))}
}

// ─── Stack Observer (smooth brand card transitions) ─────
function initStackObserver(){
  const sections=document.querySelectorAll('.stack-section');
  const dots=document.querySelectorAll('.ring-dot');
  const ring=document.getElementById('ring-fill');
  if(!sections.length)return;
  let activeIdx=-1,tick=false;
  const total=sections.length;
  window.addEventListener('scroll',()=>{
    if(!tick){requestAnimationFrame(()=>{
      let active=0;const mid=window.innerHeight*.42;
      sections.forEach((s,i)=>{const r=s.getBoundingClientRect();if(r.top+r.height*.35<mid)active=i});
      if(active===activeIdx)return;activeIdx=active;
      sections.forEach((s,i)=>{s.classList.remove('active','exiting');if(i===active)s.classList.add('active');else if(i<active)s.classList.add('exiting')});
      dots.forEach((d,i)=>d.classList.toggle('active',i===active));
      if(ring)ring.style.strokeDashoffset=106.8*(1-(active+1)/total);
      tick=false;
    });tick=true}
  },{passive:true});
  setTimeout(()=>window.dispatchEvent(new Event('scroll')),600);
}

// ─── Stack Card 3D Tilt ─────────────────────────────────
function initStackTilt(){
  const cards=document.querySelectorAll('.stack-card');
  cards.forEach(card=>{
    card.addEventListener('mousemove',function(e){
      const section=this.closest('.stack-section');
      if(!section||!section.classList.contains('active'))return;
      const r=this.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      this.classList.add('tilting');
      this.style.transform=`translateY(0) perspective(1200px) rotateY(${x*4}deg) rotateX(${-y*3}deg)`;
    });
    card.addEventListener('mouseleave',function(){
      this.classList.remove('tilting');
      this.style.transform='';
    });
  });
}

// ─── Magnetic CTA ───────────────────────────────────────
function initMagnetic(){
  document.querySelectorAll('.stack-cta').forEach(btn=>{
    btn.addEventListener('mousemove',function(e){
      const r=this.getBoundingClientRect();
      const mx=(e.clientX-r.left)/r.width*10-5,my=(e.clientY-r.top)/r.height*10-5;
      this.style.setProperty('--mx',mx+'px');this.style.setProperty('--my',my+'px');
      this.classList.add('magnetic-active');
    });
    btn.addEventListener('mouseleave',function(){this.classList.remove('magnetic-active');this.style.transform=''});
  });
}

// ─── Parallax on stack images ───────────────────────────
function initParallax(){
  const imgs=document.querySelectorAll('.stack-image');if(!imgs.length)return;
  let tick=false;
  window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{
    imgs.forEach(img=>{
      const sec=img.closest('.stack-section');if(!sec||!sec.classList.contains('active'))return;
      const r=sec.getBoundingClientRect();
      img.style.transform=`translateY(${((window.innerHeight*.5-r.top)/(r.height+window.innerHeight)-.5)*60}px) scale(1.04)`;
    });tick=false});tick=true}},{passive:true});
}

// ─── Scroll Reveal ──────────────────────────────────────
function initScrollReveal(){
  const targets=document.querySelectorAll('[data-reveal]');
  if(!targets.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{threshold:.15,rootMargin:'0px 0px -48px 0px'});
  targets.forEach(el=>obs.observe(el));
}

function initHeroReveal(){
  setTimeout(()=>{document.querySelectorAll('.hero-eyebrow,.hero-line,.hero-sub,.brand-number,.brand-name,.brand-en,.brand-hero-desc').forEach(el=>el.classList.add('visible'))},350);
}

// ─── Counter Animation ──────────────────────────────────
function initCounters(){
  const counters=document.querySelectorAll('[data-count]');if(!counters.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){animateCounter(e.target);obs.unobserve(e.target)}});
  },{threshold:.5});
  counters.forEach(el=>obs.observe(el));
}
function animateCounter(el){
  const target=parseInt(el.dataset.count,10);if(isNaN(target))return;
  const duration=1600,start=performance.now();
  function step(now){
    const progress=Math.min(1,(now-start)/duration);
    const eased=1-Math.pow(1-progress,3);
    el.textContent=Math.round(eased*target);
    if(progress<1)requestAnimationFrame(step);else el.textContent=target;
  }
  requestAnimationFrame(step);
}

// ─── Back to Top ────────────────────────────────────────
function initBackToTop(){
  let b=document.querySelector('.back-to-top');if(!b){b=document.createElement('button');b.className='back-to-top';b.innerHTML='↑';b.title=t('back');document.body.appendChild(b)}
  let tick=false;
  window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{b.classList.toggle('visible',window.scrollY>700);tick=false});tick=true}},{passive:true});
  b.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

// ─── Mobile Menu ────────────────────────────────────────
function initMobileMenu(){
  const tb=document.querySelector('.menu-toggle'),nv=document.querySelector('.nav');if(!tb||!nv)return;
  tb.addEventListener('click',()=>nv.classList.toggle('open'));
  document.addEventListener('click',e=>{if(!tb.contains(e.target)&&!nv.contains(e.target))nv.classList.remove('open')});
}

// ─── Nav Dropdown ───────────────────────────────────────
function initNavDropdown(){
  const dropdowns=document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dd=>{
    const toggle=dd.querySelector('.nav-dropdown-toggle');
    toggle.addEventListener('click',e=>{
      e.stopPropagation();e.preventDefault();
      const wasOpen=dd.classList.contains('open');
      // Close ALL dropdowns first
      dropdowns.forEach(d=>d.classList.remove('open'));
      // Then toggle current (open if was closed, close if was open)
      if(!wasOpen)dd.classList.add('open');
    });
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('.nav-dropdown'))dropdowns.forEach(dd=>dd.classList.remove('open'));
  });
}

// ─── Copy Protection ────────────────────────────────────
function initProtection(){
  document.addEventListener('contextmenu',e=>e.preventDefault());
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&['c','a','s','u','p'].includes(e.key))e.preventDefault();if(e.key==='F12')e.preventDefault()});
  document.addEventListener('dragstart',e=>e.preventDefault());
  document.addEventListener('selectstart',e=>e.preventDefault());
}

// ─── Flip Cards ──────────────────────────────────────────
function initFlipCards(){
  const cards=document.querySelectorAll('.flip-card');if(!cards.length)return;

  // Prevent CTA clicks from triggering flip
  document.querySelectorAll('.flip-cta').forEach(cta=>{
    cta.addEventListener('click',e=>{
      e.stopPropagation(); // Don't bubble to card
    });
  });

  cards.forEach(card=>{
    card.addEventListener('click',function(e){
      // Don't flip if clicking CTA or nearby
      if(e.target.closest('.flip-cta'))return;
      // Check if click is within 20px of a flip-cta (safe zone)
      const ctas=this.querySelectorAll('.flip-cta');
      for(const cta of ctas){
        const cr=cta.getBoundingClientRect();
        const pad=16; // safety margin in px
        if(e.clientX>=cr.left-pad && e.clientX<=cr.right+pad && e.clientY>=cr.top-pad && e.clientY<=cr.bottom+pad)return;
      }
      // Ripple effect
      const ripple=document.createElement('span');ripple.className='ripple';
      const r=this.getBoundingClientRect();
      ripple.style.left=(e.clientX-r.left)+'px';ripple.style.top=(e.clientY-r.top)+'px';
      ripple.style.width=ripple.style.height=r.width+'px';
      this.appendChild(ripple);
      setTimeout(()=>ripple.remove(),600);
      // Flip
      this.classList.toggle('flipped');
    });
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('.flip-card'))cards.forEach(c=>c.classList.remove('flipped'));
  });
}

// ─── Hero Parallax ──────────────────────────────────────
function initHeroParallax(){
  const hero=document.querySelector('.about-hero');
  if(!hero)return;
  let tick=false;
  window.addEventListener('scroll',()=>{
    if(!tick){requestAnimationFrame(()=>{
      const s=window.scrollY;if(s>window.innerHeight*.8)return;
      hero.style.backgroundPositionY=(-s*.15)+'px';
      tick=false;
    });tick=true}
  },{passive:true});
}

// ═══════ INIT ═══════
function init(){
  initProtection();initLangSwitcher();applyLang();
  initHeroReveal();initHeroParallax();initScrollReveal();
  initProgressBar();initHeader();initCursorGlow();
  initStackObserver();initStackTilt();initMagnetic();initParallax();
  initFlipCards();initCounters();initBackToTop();initMobileMenu();initNavDropdown();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
