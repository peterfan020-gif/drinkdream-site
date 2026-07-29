/* ============================================================
   DRINKDREAM V3 — Trilingual Translation System
   ============================================================ */
(function(){'use strict';

// ─── Language Data ──────────────────────────────────────
const L={
  zh:{
    // Nav & Common
    'nav.brands':'品牌矩阵','nav.about':'关于我们','nav.find':'寻找我们','nav.join':'加入我们',
    'back':'回到顶部','back.brands':'← 返回品牌矩阵',
    // Hero
    'hero.eyebrow':'品牌生态系统','hero.sub':'从一杯茶到多品牌矩阵，持续解构与重塑',
    'hero.cta':'了解集团',
    // Manifesto
    'm1.title':'DRINKDREAM, From Shanghai.','m1.desc':'2025年成立于上海，整合品牌孵化、投资、代理、经营、管理于一体的综合服务型集团。',
    'm2.title':'它诞生于对司空见惯的「饮用」行为的彻底反叛','m2.desc':'Born from a radical rebellion against the mundane act of drinking.',
    'm3.title':'根植于——Tea、Ice Cream、Gelato、Coffee','m3.desc':'Rooted in the craft of fresh beverages.',
    'm4.title':'从一杯茶到多品牌矩阵，持续解构与重塑，路虽远，上下而求索','m4.desc':'From one cup to many brands, a cycle of deconstruction and reinvention, exploring all directions.',
    // Intro
    'intro.label':'集团介绍','intro.title':'我们不只创造品牌，我们在定义新式现制饮的未来图景',
    'intro.p1':'DrinkDream饮之梦品牌管理公司，2025年成立于上海，是整合餐饮品牌集孵化、投资、代理、经营、管理于一体的综合服务型集团，旗下孵化九十叶、Black Tree、泰柯茶园、抹趣、Matcha Wang 等多家连锁轻餐品牌，现已布局北京、上海、深圳、杭州、苏州、广州等国内多个一线、新一线城市核心商圈。',
    'intro.p2':'DrinkDream拥有一支高素质管理人才和职业经理人队伍，为都市精英和城市新消费人群，持续定义高品质、高审美、高情感价值的餐饮新体验。集团致力于成为全球最具影响力的系统化品牌孵化平台。我们构建了从产品灵感、品牌战略、营销增长到供应链及资本运作的完整赋能体系。',
    'intro.p3':'我们不止创造产品与品牌，我们更在定义新式现制饮的未来图景。合作伙伴包括恒隆、德基、万象城、龙湖、K11、IFC 等顶级商业地产。',
    // Metrics
    'metrics.1':'深耕甜品市场','metrics.2':'直营门店超过','metrics.3':'门店总营收','metrics.4':'特许经营门店','metrics.5':'管理人员超',
    'metrics.u1':'年','metrics.u2':'家','metrics.u3':'亿','metrics.u4':'家','metrics.u5':'人',
    // Values
    'values.label':'核心价值观','values.title':'创新 · 快 · 卓越 · 分享',
    'v1.title':'创新','v1.desc':'构建从产品灵感到商业品牌的完整赋能体系',
    'v2.title':'快','v2.desc':'以闪电路径覆盖市场，持续锻造尖刀品牌',
    'v3.title':'卓越','v3.desc':'超越峰值，创造记忆。定义高品质餐饮新体验',
    'v4.title':'分享','v4.desc':'与超级合伙人构建共生根系统，为顶尖人才提供舞台',
    // Media
    'media.label':'媒体报道','media.title':'媒体报道',
    // Partners (about page)
    'about.partners':'战略合作伙伴','about.partners.title':'与顶尖商业地标同行',
    // Footer
    'footer.brands':'品牌','footer.group':'集团','footer.contact':'联系',
    'footer.about':'关于我们','footer.join':'加入我们','footer.find':'寻找我们',
    'footer.media':'媒体联络','footer.biz':'商务合作',
    // Stack
    'stack.explore':'探索','stack.cta':'品牌矩阵','stack.back':'返回集团介绍 ↑',
    // Find Us
    'find.title':'寻找我们','find.sub':'探索 DRINKDREAM 全国门店 · Explore our stores nationwide',
    'find.brand':'品牌筛选 · Brand','find.city':'城市筛选 · City','find.all':'全部',
    'find.count':'共 {n} 家门店','find.list':'门店列表 · Store List','find.map':'地图视图',

    // ═══ 九十葉 ═══
    'jsy.number':'BRAND 01 · 抹茶系','jsy.hero':'专注东方抹茶，延续千年茶韵。一抹茶，还原自然的纯粹。',
    'jsy.s1.sub':'品牌定位','jsy.s1.title':'专注东方抹茶 · 延续千年茶韵',
    'jsy.s1.c1.title':'品牌定位','jsy.s1.c1.desc':'九十叶相信抹茶不仅是味觉的享受，更是与自然对话的方式。还原抹茶最本真的味道，让每一位顾客都能感受到来自东方的自然之美与文化之韵。',
    'jsy.s1.c2.title':'品牌理念','jsy.s1.c2.desc':'一抹茶，还原自然的纯粹。回归自然、享受纯粹、品味东方。在这里，抹茶不仅是食物，更是一种生活态度。',
    'jsy.s2.sub':'品牌哲学','jsy.s2.title':'三大核心价值',
    'jsy.s2.i1':'回归自然 — 还原抹茶最本真的味道，让每一位顾客都能感受到来自东方的自然之美与文化之韵',
    'jsy.s2.i2':'享受纯粹 — 甄选优质抹茶原料，以匠心工艺呈现东方抹茶的醇厚与层次。每一杯都是对千年茶韵的当代诠释',
    'jsy.s2.i3':'品味东方 — 将东方抹茶的美学与仪式感融入当代生活方式。空间设计追求与自然的共生关系，营造静谧优雅的品牌场域',
    'jsy.s3.sub':'产品与空间','jsy.s3.title':'东方抹茶 · 自然共生',
    'jsy.s3.c1.title':'THE PRODUCTS','jsy.s3.c1.desc':'甄选优质抹茶原料，涵盖抹茶冰淇淋、抹茶拿铁、抹茶Gelato等产品线。招牌抹茶冰淇淋在大众点评2025年上海热门夏季冰淇淋排行多次上榜。',
    'jsy.s3.c2.title':'THE SPACE','jsy.s3.c2.desc':'空间设计追求与自然的共生关系，以东方美学为基调。全国覆盖约25个省份和地区，门店均位于当地人气最旺的商业中心。',
    'jsy.m1':'门店','jsy.m2':'覆盖省份','jsy.m3':'创立年份',

    // ═══ BLACKTREE ═══
    'bt.number':'BRAND 02 · 茶饮系','bt.hero':'都市与自然交汇处的一棵灵感之树。以黑金色调演绎泰式茶饮的浓郁风情。',
    'bt.s1.sub':'品牌理念','bt.s1.title':'理性结构 · 亲生命性 · 灵感生长',
    'bt.s1.c1.title':'Rational Structure 理性结构','bt.s1.c1.desc':'以严谨的产品逻辑构建每一杯饮品。纯正原料：选用正宗泰国茶叶、天然香料、优质鲜乳，强调甜度、茶香、奶香的平衡，带来多层次口感体验。',
    'bt.s1.c2.title':'Biophilic Nature 亲生命性','bt.s1.c2.desc':'传递泰国茶文化的悠闲、热情与精致。强调chill、放松、享受慢生活的场景感，用艺术化包装和丰富口感层次吸引年轻人。',
    'bt.s2.sub':'品牌哲学','bt.s2.title':'先锋主义 · 跨界融合',
    'bt.s2.i1':'先锋主义表达 — 用艺术化包装和口感丰富层次吸引年轻人，外形颜值高，带来感官享受。结合水果、焦糖、巧克力等打造独特泰茶变体',
    'bt.s2.i2':'跨界创意 — 与甜品、点心、咖啡、冰淇淋融合，打造独特产品线。产品涵盖泰式奶茶、咖啡、泰式咸法酪、泰奶口味冰淇淋等',
    'bt.s2.i3':'南洋风味 — 多款泰式果茶及柠檬草罗望子、香茅柚子、泰椰黑柠檬等南洋风味冰淇淋，展现东南亚热带风情',
    'bt.s3.sub':'产品与空间','bt.s3.title':'400次熔岩 · 黑金概念空间',
    'bt.s3.c1.title':'明星产品','bt.s3.c1.desc':'「400次熔岩泰茶」融合泰奶、咖啡与芝士酪乳，经过反复手工搅打，包含熔岩奶盖、焦香咖啡和泰式茶底。「鸳鸯泰式咸法酪」搭配珍珠，咸甜交织。',
    'bt.s3.c2.title':'概念空间','bt.s3.c2.desc':'首家门店设于深圳湾万象城，黑金风格空间设计契合品牌调性。已入驻南京德基广场、长沙国金街、上海青浦百联奥特莱斯等顶级商业体。',
    'bt.m1':'门店','bt.m2':'覆盖城市','bt.m3':'创立年份',

    // ═══ Matcha Wang ═══
    'mw.number':'BRAND 03 · 抹茶系','mw.hero':'回归抹茶本身——唯抹茶而已。DRINKDREAM 刺向世界的尖刃。',
    'mw.s1.sub':'品牌故事','mw.s1.title':'在潮流融合中回归原点',
    'mw.s1.c1.title':'品牌诞生','mw.s1.c1.desc':'在众多抹茶品牌追逐风味叠加与潮流融合之时，我们选择回归原点——抹茶本身。品牌诞生于对市场同质化的反思：真正的抹茶体验不应被糖浆、配料所淹没，而应展现其纯粹的风味与深邃的层次。',
    'mw.s1.c2.title':'品牌使命','mw.s1.c2.desc':'这一切源于对抹茶的敬畏与热爱。招牌产品"小羊莉莉"自2025年12月推出以来累计销量突破2万杯，在门店营收中占比70%。成为外国游客来上海必打卡的"社交货币"。',
    'mw.s2.sub':'产品哲学','mw.s2.title':'三期研磨 · 三种境界',
    'mw.s2.i1':'经遮光覆盖、低温碾磨 — 粉质细腻，有鲜嫩的清香，口感清新自然，仿佛置身于春日茶园之中',
    'mw.s2.i2':'粉质细腻如璧，口感浓郁 — 入口是鲜醇饱满的苔香，回甘迅速而明亮，仿佛饮下一盏温润的墨玉，尽显东方品味',
    'mw.s2.i3':'粉体细腻如初春原野的新绿 — 带着未经世事的纯粹。注水击拂，绿中沁黄的汤色，将凌云山麓的晨霭凝于一盏之中。香气丰富，滋味平衡',
    'mw.s3.sub':'空间与体验','mw.s3.title':'抹茶道场 · 一期一会',
    'mw.s3.c1.title':'抹茶道场','mw.s3.c1.desc':'空间以砾石、钢板与混凝土为序，构筑一处抹茶道场。从浓酽至清浅，完成一场味觉修行。使用主推的单一产地抹茶粉，以经典拼配方式展现抹茶与高端食材的对话。',
    'mw.s3.c2.title':'一期一会','mw.s3.c2.desc':'一客一接待，服务面面俱到。单一抹茶Gelato、纯抹茶、高端Gelato等产品，专注每位客人的体验。日客流稳定在900至1200人，外国游客占比极高。',
    'mw.m1':'旗舰店','mw.m2':'小羊莉莉销量','mw.m3':'创立年份',

    // ═══ Yoajung ═══
    'yj.number':'BRAND 04 · 酸奶甜品','yj.hero':'每一杯 Yoajung 都是可以自己定义的小宇宙。Less Sugar, More You.',
    'yj.s1.sub':'品牌故事','yj.s1.title':'来自首尔的酸奶冰淇淋正统',
    'yj.s1.c1.title':'品牌起源','yj.s1.c1.desc':'Yoajung（요아정）是一家韩国冷冻酸奶连锁品牌，总部位于首尔。品牌名称是"요거트 아이스크림의 정석"的缩写，意为"酸奶冰淇淋的正统"。品牌强调健康、可定制化的甜品体验。',
    'yj.s1.c2.title':'品牌使命','yj.s1.c2.desc':'坚持发酵的自然，使用真实、干净的食材，重构年轻人对"甜"的理解。致力成为新一代亚洲品牌走向世界的代表，为 DRINKDREAM 接驳世界。',
    'yj.s2.sub':'品牌定位','yj.s2.title':'Less Sugar, More You',
    'yj.s2.i1':'可定制的甜品体验 — 每一杯Yoajung都是可以自己定义的小宇宙，满足年轻世代追求自我表达的渴望',
    'yj.s2.i2':'真实干净的食材 — 拒绝标签化，坚持使用真实、干净的食材，重构年轻人对"甜"的理解',
    'yj.s2.i3':'年轻潮流品牌 — 饭圈主力人群45% · 健康甜品爱好者25% · 社交打卡消费者20% · 家庭儿童消费者10%',
    'yj.s3.sub':'核心客群','yj.s3.title':'精准定位年轻消费者',
    'yj.s3.c1.title':'目标人群','yj.s3.c1.desc':'饭圈主力人群占比最高达45%，健康甜品爱好者占25%。迅速在韩国市场获得成功后引入中国市场，同样获得年轻消费者的青睐。',
    'yj.s3.c2.title':'品牌愿景','yj.s3.c2.desc':'致力成为新一代亚洲品牌走向世界的代表。每一杯Yoajung都是一个可以自定义的小宇宙，让甜品成为自我表达的载体。',
    'yj.m1':'门店','yj.m2':'覆盖城市','yj.m3':'引入中国',

    // ═══ 抹趣 ═══
    'mq.number':'BRAND 05 · 抹茶系','mq.hero':'一个抹茶小怪兽"抹抹兽"，脑子里装满了奇思妙想。热爱抹茶是一切快乐和创意的起点。',
    'mq.s1.sub':'品牌故事','mq.s1.title':'世界上还需要再多一家普通的抹茶店吗？',
    'mq.s1.c1.title':'答案是：不需要','mq.s1.c1.desc':'当抹茶逐渐融入生活日常，成为日常便利、熟悉且可被预期的味道——抹趣开始在多元感官中探索灵感变奏。在这里，抹茶是无限可能的起点，不断打破现实与想象的边界。',
    'mq.s1.c2.title':'品牌IP · 抹抹兽','mq.s1.c2.desc':'一个脑子里装满了奇思妙想的抹茶小怪兽，热爱抹茶是它的生存本能。执着于探索抹茶与世间万物碰撞的无限可能——Love · Idea · Happy · Infinite。',
    'mq.s2.sub':'产品哲学','mq.s2.title':'百倍茶汤 · 只取一抹精华',
    'mq.s2.i1':'甄选早春明前茶 — 明前茶贵如金，采用茶道级抹茶，是制作抹茶酱的核心。慢火熬煮凝萃成酱，提炼出更醇厚的茶感、更高级的香气层次',
    'mq.s2.i2':'严苛的内部保存系统 — 追求极致的品质和口感，保证抹茶酱的每一口浓醇鲜活',
    'mq.s2.i3':'抹茶酱饮首创者 — 将茶道级抹茶慢火熬煮成酱，创造出全新的饮品品类。为 DRINKDREAM 探索新风味迈出第一步',
    'mq.s3.sub':'产品与精神','mq.s3.title':'抹茶+万物的无限可能',
    'mq.s3.c1.title':'产品系列','mq.s3.c1.desc':'抹茶酱饮系列为核心，延伸抹茶+水果、抹茶+烘焙等创意产品线。每款产品都是抹茶与另一种食材的对话，不断探索风味边界。',
    'mq.s3.c2.title':'品牌精神','mq.s3.c2.desc':'Love · Idea · Happy · Infinite —— 热爱是起点，创意是路径，快乐是终点，可能是无限的。抹抹兽将永远保持对抹茶的热爱与好奇。',
    'mq.m1':'门店','mq.m2':'覆盖城市','mq.m3':'创立年份',

    // ═══ lemonwell ═══
    'lw.number':'BRAND 06 · 茶饮系','lw.hero':'都市里的柠檬岛，献给美丽灵魂的诗意栖居。',
    'lw.s1.sub':'品牌故事','lw.s1.title':'当阳光掠过南法小镇的百叶窗',
    'lw.s1.c1.title':'品牌起源','lw.s1.c1.desc':'当阳光掠过南法小镇的百叶窗，光就有了形状。风捎来远方的讯息——信笺上，柠檬香若隐若现。LemonWell，一座浮在都市的柠檬岛。',
    'lw.s1.c2.title':'品牌愿景','lw.s1.c2.desc':'循着柠檬的香气，穿过普罗旺斯的金色夏日，掠过索伦托海岸的蓝色波浪。构筑一处让感官苏醒、让心神靠岸的岛屿时光。',
    'lw.s2.sub':'品牌哲学','lw.s2.title':'柠檬的多样风味',
    'lw.s2.i1':'专注呈现柠檬的多元风味 — 通过高品质原料、精致配方和富有设计感的呈现，为现代都市消费者提供一处可以瞬间放松、感受治愈的"柠檬岛"',
    'lw.s2.i2':'感官苏醒 · 心神靠岸 — lemon tea & gelato，在都市中心打造一座诗意栖居。尤其面向追求品质生活的女性消费者',
    'lw.s2.i3':'南法美学 — 品牌视觉与空间设计汲取南法小镇的灵感，将柠檬的黄、阳光的金、海水的蓝融入空间与产品',
    'lw.s3.sub':'产品线','lw.s3.title':'柠檬茶 · Gelato · 生活方式',
    'lw.s3.c1.title':'Lemon Tea 柠檬茶','lw.s3.c1.desc':'甄选优质柠檬，以精致配方呈现柠檬茶的多样风味与清新层次。每一杯都是对南法阳光的味觉记忆。',
    'lw.s3.c2.title':'Gelato 意式冰淇淋','lw.s3.c2.desc':'将柠檬的清新与 Gelato 的醇厚完美融合，打造独一无二的味觉体验。柠檬的酸甜与奶香的绵密交织。',
    'lw.m1':'门店','lw.m2':'覆盖城市','lw.m3':'创立年份',
  },

  'zh-TW':{
    'nav.brands':'品牌矩陣','nav.about':'關於我們','nav.find':'尋找我們','nav.join':'加入我們',
    'back':'回到頂部','back.brands':'← 返回品牌矩陣',
    'hero.eyebrow':'品牌生態系統','hero.sub':'從一杯茶到多品牌矩陣，持續解構與重塑',
    'hero.cta':'了解更多',
    'm1.title':'DRINKDREAM, From Shanghai.','m1.desc':'2025年成立於上海，整合品牌孵化、投資、代理、經營、管理於一體的綜合服務型集團。',
    'm2.title':'它誕生於對司空見慣的「飲用」行為的徹底反叛','m2.desc':'Born from a radical rebellion against the mundane act of drinking.',
    'm3.title':'根植於——Tea、Ice Cream、Gelato、Coffee','m3.desc':'Rooted in the craft of fresh beverages.',
    'm4.title':'從一杯茶到多品牌矩陣，持續解構與重塑，路雖遠，上下而求索','m4.desc':'From one cup to many brands, a cycle of deconstruction and reinvention, exploring all directions.',
    'intro.label':'集團介紹','intro.title':'我們不只創造品牌，我們在定義新式現製飲的未來圖景',
    'intro.p1':'DrinkDream飲之夢品牌管理公司，2025年成立於上海，是整合餐飲品牌集孵化、投資、代理、經營、管理於一體的綜合服務型集團，旗下孵化九十葉、Black Tree、泰柯茶園、抹趣、Matcha Wang 等多家連鎖輕餐品牌，現已佈局北京、上海、深圳、杭州、蘇州、廣州等國內多個一線、新一線城市核心商圈。',
    'intro.p2':'DrinkDream擁有一支高素質管理人才和職業經理人隊伍，為都市精英和城市新消費人群，持續定義高品質、高審美、高情感價值的餐飲新體驗。集團致力於成為全球最具影響力的系統化品牌孵化平台。我們構建了從產品靈感、品牌戰略、營銷增長到供應鏈及資本運作的完整賦能體系。',
    'intro.p3':'我們不止創造產品與品牌，我們更在定義新式現製飲的未來圖景。合作夥伴包括恒隆、德基、萬象城、龍湖、K11、IFC 等頂級商業地產。',
    'metrics.1':'深耕甜品市場','metrics.2':'直營門店超過','metrics.3':'門店總營收','metrics.4':'特許經營門店','metrics.5':'管理人員超',
    'metrics.u1':'年','metrics.u2':'家','metrics.u3':'億','metrics.u4':'家','metrics.u5':'人',
    'values.label':'核心價值觀','values.title':'創新 · 快 · 卓越 · 分享',
    'v1.title':'創新','v1.desc':'構建從產品靈感到商業品牌的完整賦能體系',
    'v2.title':'快','v2.desc':'以閃電路徑覆蓋市場，持續鍛造尖刀品牌',
    'v3.title':'卓越','v3.desc':'超越峰值，創造記憶。定義高品質餐飲新體驗',
    'v4.title':'分享','v4.desc':'與超級合夥人構建共生根系統，為頂尖人才提供舞台',
    'media.label':'媒體報導','media.title':'媒體報導',
    'about.partners':'戰略合作夥伴','about.partners.title':'與頂尖商業地標同行',
    'footer.brands':'品牌','footer.group':'集團','footer.contact':'聯絡',
    'footer.about':'關於我們','footer.join':'加入我們','footer.find':'尋找我們',
    'footer.media':'媒體聯絡','footer.biz':'商務合作',
    'stack.explore':'探索','stack.cta':'品牌矩陣','stack.back':'返回集團介紹 ↑',
    'find.title':'尋找我們','find.sub':'探索 DRINKDREAM 全國門市 · Explore our stores nationwide',
    'find.brand':'品牌篩選 · Brand','find.city':'城市篩選 · City','find.all':'全部',
    'find.count':'共 {n} 間門市','find.list':'門市列表 · Store List','find.map':'地圖視圖',

    'jsy.number':'BRAND 01 · 抹茶系','jsy.hero':'專注東方抹茶，延續千年茶韻。一抹茶，還原自然的純粹。',
    'jsy.s1.sub':'品牌定位','jsy.s1.title':'專注東方抹茶 · 延續千年茶韻',
    'jsy.s1.c1.title':'品牌定位','jsy.s1.c1.desc':'九十葉相信抹茶不僅是味覺的享受，更是與自然對話的方式。還原抹茶最本真的味道，讓每一位顧客都能感受到來自東方的自然之美與文化之韻。',
    'jsy.s1.c2.title':'品牌理念','jsy.s1.c2.desc':'一抹茶，還原自然的純粹。回歸自然、享受純粹、品味東方。在這裡，抹茶不僅是食物，更是一種生活態度。',
    'jsy.s2.sub':'品牌哲學','jsy.s2.title':'三大核心價值',
    'jsy.s2.i1':'回歸自然 — 還原抹茶最本真的味道，讓每一位顧客都能感受到來自東方的自然之美與文化之韻',
    'jsy.s2.i2':'享受純粹 — 甄選優質抹茶原料，以匠心工藝呈現東方抹茶的醇厚與層次。每一杯都是對千年茶韻的當代詮釋',
    'jsy.s2.i3':'品味東方 — 將東方抹茶的美學與儀式感融入當代生活方式。空間設計追求與自然的共生關係，營造靜謐優雅的品牌場域',
    'jsy.s3.sub':'產品與空間','jsy.s3.title':'東方抹茶 · 自然共生',
    'jsy.s3.c1.title':'THE PRODUCTS','jsy.s3.c1.desc':'甄選優質抹茶原料，涵蓋抹茶冰淇淋、抹茶拿鐵、抹茶Gelato等產品線。招牌抹茶冰淇淋在大眾點評2025年上海熱門夏季冰淇淋排行多次上榜。',
    'jsy.s3.c2.title':'THE SPACE','jsy.s3.c2.desc':'空間設計追求與自然的共生關係，以東方美學為基調。全國覆蓋約25個省份和地區，門店均位於當地人氣最旺的商業中心。',
    'jsy.m1':'門店','jsy.m2':'覆蓋省份','jsy.m3':'創立年份',

    'bt.number':'BRAND 02 · 茶飲系','bt.hero':'都市與自然交匯處的一棵靈感之樹。以黑金色調演繹泰式茶飲的濃郁風情。',
    'bt.s1.sub':'品牌理念','bt.s1.title':'理性結構 · 親生命性 · 靈感生長',
    'bt.s1.c1.title':'Rational Structure 理性結構','bt.s1.c1.desc':'以嚴謹的產品邏輯構建每一杯飲品。純正原料：選用正宗泰國茶葉、天然香料、優質鮮乳，強調甜度、茶香、奶香的平衡，帶來多層次口感體驗。',
    'bt.s1.c2.title':'Biophilic Nature 親生命性','bt.s1.c2.desc':'傳遞泰國茶文化的悠閒、熱情與精緻。強調chill、放鬆、享受慢生活的場景感，用藝術化包裝和豐富口感層次吸引年輕人。',
    'bt.s2.sub':'品牌哲學','bt.s2.title':'先鋒主義 · 跨界融合',
    'bt.s2.i1':'先鋒主義表達 — 用藝術化包裝和口感豐富層次吸引年輕人，外形顏值高，帶來感官享受。結合水果、焦糖、巧克力等打造獨特泰茶變體',
    'bt.s2.i2':'跨界創意 — 與甜品、點心、咖啡、冰淇淋融合，打造獨特產品線。產品涵蓋泰式奶茶、咖啡、泰式鹹法酪、泰奶口味冰淇淋等',
    'bt.s2.i3':'南洋風味 — 多款泰式果茶及檸檬草羅望子、香茅柚子、泰椰黑檸檬等南洋風味冰淇淋，展現東南亞熱帶風情',
    'bt.s3.sub':'產品與空間','bt.s3.title':'400次熔岩 · 黑金概念空間',
    'bt.s3.c1.title':'明星產品','bt.s3.c1.desc':'「400次熔岩泰茶」融合泰奶、咖啡與芝士酪乳，經過反覆手工攪打，包含熔岩奶蓋、焦香咖啡和泰式茶底。「鴛鴦泰式鹹法酪」搭配珍珠，鹹甜交織。',
    'bt.s3.c2.title':'概念空間','bt.s3.c2.desc':'首家門店設於深圳灣萬象城，黑金風格空間設計契合品牌調性。已入駐南京德基廣場、長沙國金街、上海青浦百聯奧特萊斯等頂級商業體。',
    'bt.m1':'門店','bt.m2':'覆蓋城市','bt.m3':'創立年份',

    'mw.number':'BRAND 03 · 抹茶系','mw.hero':'回歸抹茶本身——唯抹茶而已。DRINKDREAM 刺向世界的尖刃。',
    'mw.s1.sub':'品牌故事','mw.s1.title':'在潮流融合中回歸原點',
    'mw.s1.c1.title':'品牌誕生','mw.s1.c1.desc':'在眾多抹茶品牌追逐風味疊加與潮流融合之時，我們選擇回歸原點——抹茶本身。品牌誕生於對市場同質化的反思：真正的抹茶體驗不應被糖漿、配料所淹沒，而應展現其純粹的風味與深邃的層次。',
    'mw.s1.c2.title':'品牌使命','mw.s1.c2.desc':'這一切源於對抹茶的敬畏與熱愛。招牌產品「小羊莉莉」自2025年12月推出以來累計銷量突破2萬杯，在門店營收中佔比70%。成為外國遊客來上海必打卡的「社交貨幣」。',
    'mw.s2.sub':'產品哲學','mw.s2.title':'三期研磨 · 三種境界',
    'mw.s2.i1':'經遮光覆蓋、低溫碾磨 — 粉質細膩，有鮮嫩的清香，口感清新自然，仿佛置身於春日茶園之中',
    'mw.s2.i2':'粉質細膩如璧，口感濃郁 — 入口是鮮醇飽滿的苔香，回甘迅速而明亮，仿佛飲下一盞溫潤的墨玉，盡顯東方品味',
    'mw.s2.i3':'粉體細膩如初春原野的新綠 — 帶著未經世事的純粹。注水擊拂，綠中沁黃的湯色，將淩雲山麓的晨靄凝於一盞之中。香氣豐富，滋味平衡',
    'mw.s3.sub':'空間與體驗','mw.s3.title':'抹茶道場 · 一期一會',
    'mw.s3.c1.title':'抹茶道場','mw.s3.c1.desc':'空間以礫石、鋼板與混凝土為序，構築一處抹茶道場。從濃釅至清淺，完成一場味覺修行。使用主推的單一產地抹茶粉，以經典拼配方式展現抹茶與高端食材的對話。',
    'mw.s3.c2.title':'一期一會','mw.s3.c2.desc':'一客一接待，服務面面俱到。單一抹茶Gelato、純抹茶、高端Gelato等產品，專注每位客人的體驗。日客流穩定在900至1200人，外國遊客佔比極高。',
    'mw.m1':'旗艦店','mw.m2':'小羊莉莉銷量','mw.m3':'創立年份',

    'yj.number':'BRAND 04 · 酸奶甜品','yj.hero':'每一杯 Yoajung 都是可以自己定義的小宇宙。Less Sugar, More You.',
    'yj.s1.sub':'品牌故事','yj.s1.title':'來自首爾的酸奶冰淇淋正統',
    'yj.s1.c1.title':'品牌起源','yj.s1.c1.desc':'Yoajung（요아정）是一家韓國冷凍酸奶連鎖品牌，總部位於首爾。品牌名稱是「요거트 아이스크림의 정석」的縮寫，意為「酸奶冰淇淋的正統」。品牌強調健康、可定製化的甜品體驗。',
    'yj.s1.c2.title':'品牌使命','yj.s1.c2.desc':'堅持發酵的自然，使用真實、乾淨的食材，重構年輕人對「甜」的理解。致力成為新一代亞洲品牌走向世界的代表，為 DRINKDREAM 接駁世界。',
    'yj.s2.sub':'品牌定位','yj.s2.title':'Less Sugar, More You',
    'yj.s2.i1':'可定製的甜品體驗 — 每一杯Yoajung都是可以自己定義的小宇宙，滿足年輕世代追求自我表達的渴望',
    'yj.s2.i2':'真實乾淨的食材 — 拒絕標籤化，堅持使用真實、乾淨的食材，重構年輕人對「甜」的理解',
    'yj.s2.i3':'年輕潮流品牌 — 飯圈主力人群45% · 健康甜品愛好者25% · 社交打卡消費者20% · 家庭兒童消費者10%',
    'yj.s3.sub':'核心客群','yj.s3.title':'精準定位年輕消費者',
    'yj.s3.c1.title':'目標人群','yj.s3.c1.desc':'飯圈主力人群佔比最高達45%，健康甜品愛好者佔25%。迅速在韓國市場獲得成功後引入中國市場，同樣獲得年輕消費者的青睞。',
    'yj.s3.c2.title':'品牌願景','yj.s3.c2.desc':'致力成為新一代亞洲品牌走向世界的代表。每一杯Yoajung都是一個可以自定義的小宇宙，讓甜品成為自我表達的載體。',
    'yj.m1':'門店','yj.m2':'覆蓋城市','yj.m3':'引入中國',

    'mq.number':'BRAND 05 · 抹茶系','mq.hero':'一個抹茶小怪獸「抹抹獸」，腦子裡裝滿了奇思妙想。熱愛抹茶是一切快樂和創意的起點。',
    'mq.s1.sub':'品牌故事','mq.s1.title':'世界上還需要再多一家普通的抹茶店嗎？',
    'mq.s1.c1.title':'答案是：不需要','mq.s1.c1.desc':'當抹茶逐漸融入生活日常，成為日常便利、熟悉且可被預期的味道——抹趣開始在多元感官中探索靈感變奏。在這裡，抹茶是無限可能的起點，不斷打破現實與想像的邊界。',
    'mq.s1.c2.title':'品牌IP · 抹抹獸','mq.s1.c2.desc':'一個腦子裡裝滿了奇思妙想的抹茶小怪獸，熱愛抹茶是牠的生存本能。執著於探索抹茶與世間萬物碰撞的無限可能——Love · Idea · Happy · Infinite。',
    'mq.s2.sub':'產品哲學','mq.s2.title':'百倍茶湯 · 只取一抹精華',
    'mq.s2.i1':'甄選早春明前茶 — 明前茶貴如金，採用茶道級抹茶，是製作抹茶醬的核心。慢火熬煮凝萃成醬，提煉出更醇厚的茶感、更高級的香氣層次',
    'mq.s2.i2':'嚴苛的內部保存系統 — 追求極致的品質和口感，保證抹茶醬的每一口濃醇鮮活',
    'mq.s2.i3':'抹茶醬飲首創者 — 將茶道級抹茶慢火熬煮成醬，創造出全新的飲品品類。為 DRINKDREAM 探索新風味邁出第一步',
    'mq.s3.sub':'產品與精神','mq.s3.title':'抹茶+萬物的無限可能',
    'mq.s3.c1.title':'產品系列','mq.s3.c1.desc':'抹茶醬飲系列為核心，延伸抹茶+水果、抹茶+烘焙等創意產品線。每款產品都是抹茶與另一種食材的對話，不斷探索風味邊界。',
    'mq.s3.c2.title':'品牌精神','mq.s3.c2.desc':'Love · Idea · Happy · Infinite —— 熱愛是起點，創意是路徑，快樂是終點，可能是無限的。抹抹獸將永遠保持對抹茶的熱愛與好奇。',
    'mq.m1':'門店','mq.m2':'覆蓋城市','mq.m3':'創立年份',

    'lw.number':'BRAND 06 · 茶飲系','lw.hero':'都市裡的檸檬島，獻給美麗靈魂的詩意棲居。',
    'lw.s1.sub':'品牌故事','lw.s1.title':'當陽光掠過南法小鎮的百葉窗',
    'lw.s1.c1.title':'品牌起源','lw.s1.c1.desc':'當陽光掠過南法小鎮的百葉窗，光就有了形狀。風捎來遠方的訊息——信箋上，檸檬香若隱若現。LemonWell，一座浮在都市的檸檬島。',
    'lw.s1.c2.title':'品牌願景','lw.s1.c2.desc':'循著檸檬的香氣，穿過普羅旺斯的金色夏日，掠過索倫托海岸的藍色波浪。構築一處讓感官甦醒、讓心神靠岸的島嶼時光。',
    'lw.s2.sub':'品牌哲學','lw.s2.title':'檸檬的多樣風味',
    'lw.s2.i1':'專注呈現檸檬的多元風味 — 通過高品質原料、精緻配方和富有設計感的呈現，為現代都市消費者提供一處可以瞬間放鬆、感受治癒的「檸檬島」',
    'lw.s2.i2':'感官甦醒 · 心神靠岸 — lemon tea & gelato，在都市中心打造一座詩意棲居。尤其面向追求品質生活的女性消費者',
    'lw.s2.i3':'南法美學 — 品牌視覺與空間設計汲取南法小鎮的靈感，將檸檬的黃、陽光的光、海水的藍融入空間與產品',
    'lw.s3.sub':'產品線','lw.s3.title':'檸檬茶 · Gelato · 生活方式',
    'lw.s3.c1.title':'Lemon Tea 檸檬茶','lw.s3.c1.desc':'甄選優質檸檬，以精緻配方呈現檸檬茶的多樣風味與清新層次。每一杯都是對南法陽光的味覺記憶。',
    'lw.s3.c2.title':'Gelato 義式冰淇淋','lw.s3.c2.desc':'將檸檬的清新與 Gelato 的醇厚完美融合，打造獨一無二的味覺體驗。檸檬的酸甜與奶香的綿密交織。',
    'lw.m1':'門店','lw.m2':'覆蓋城市','lw.m3':'創立年份',
  },

  en:{
    'nav.brands':'Brands','nav.about':'About Us','nav.find':'Find Us','nav.join':'Join Us',
    'back':'Back to Top','back.brands':'← Back to Brands',
    'hero.eyebrow':'BRAND ECOSYSTEM','hero.sub':'From one cup to many brands. A cycle of deconstruction and reinvention.',
    'hero.cta':'Learn More',
    'm1.title':'DRINKDREAM, From Shanghai.','m1.desc':'Founded in 2025 in Shanghai, a comprehensive group integrating brand incubation, investment, agency, operation, and management.',
    'm2.title':'Born from a radical rebellion against the mundane act of drinking.','m2.desc':'',
    'm3.title':'Rooted in — Tea, Ice Cream, Gelato, Coffee','m3.desc':'',
    'm4.title':'From one cup to many brands, a cycle of deconstruction and reinvention.','m4.desc':'',
    'intro.label':'GROUP INTRODUCTION','intro.title':'We don\'t just create brands. We define the future of freshly made beverages.',
    'intro.p1':'DrinkDream Brand Management Co., founded in Shanghai in 2025, is a comprehensive group integrating brand incubation, investment, agency, operation, and management. Our incubation portfolio includes NINTEA MATCHA, Black Tree, TamKoKo, Very Matcha, and Matcha Wang, now present in prime commercial districts across Beijing, Shanghai, Shenzhen, Hangzhou, Suzhou, Guangzhou, and other first-tier Chinese cities.',
    'intro.p2':'DrinkDream boasts a team of high-caliber managers and professionals, continuously defining high-quality, high-aesthetic, high-emotional-value dining experiences for urban elites and new-generation consumers. We are committed to becoming the world\'s most influential systematic brand incubation platform, with a complete empowerment system covering product inspiration, brand strategy, marketing growth, supply chain, and capital operations.',
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
    'stack.explore':'Explore','stack.cta':'Brand Matrix','stack.back':'↑ Back to Intro',
    'find.title':'Find Us','find.sub':'Explore DRINKDREAM stores nationwide',
    'find.brand':'Filter by Brand','find.city':'Filter by City','find.all':'All',
    'find.count':'{n} stores found','find.list':'Store List','find.map':'Map View',

    // NINTEA MATCHA
    'jsy.number':'BRAND 01 · Matcha Series','jsy.hero':'Dedicated to Eastern matcha, continuing a thousand-year tea tradition. One scoop of matcha, the purity of nature.',
    'jsy.s1.sub':'Brand Positioning','jsy.s1.title':'Eastern Matcha · Nature in Harmony',
    'jsy.s1.c1.title':'Brand Positioning','jsy.s1.c1.desc':'NINTEA MATCHA believes matcha is not just a taste sensation but a way of dialoguing with nature. Restoring matcha to its most authentic flavor, allowing every customer to feel the natural beauty and cultural essence of the East.',
    'jsy.s1.c2.title':'Brand Philosophy','jsy.s1.c2.desc':'One scoop of matcha, the purity of nature restored. Return to nature, enjoy purity, savor the East. Here, matcha is not just food — it\'s a way of life.',
    'jsy.s2.sub':'Brand Philosophy','jsy.s2.title':'Three Core Values',
    'jsy.s2.i1':'Return to Nature — Restoring matcha to its most authentic flavor, allowing every customer to feel the natural beauty and cultural essence of the East',
    'jsy.s2.i2':'Savor Purity — Carefully selected premium matcha ingredients, presenting the richness and layers of Eastern matcha through artisanal craftsmanship. Every cup is a contemporary interpretation of a thousand-year tea tradition',
    'jsy.s2.i3':'Taste the East — Integrating the aesthetics and ritual of Eastern matcha into contemporary lifestyles. Spatial design pursues a symbiotic relationship with nature, creating a serene and elegant brand presence',
    'jsy.s3.sub':'Products & Spaces','jsy.s3.title':'Eastern Matcha · Natural Harmony',
    'jsy.s3.c1.title':'THE PRODUCTS','jsy.s3.c1.desc':'Carefully selected premium matcha ingredients, spanning matcha ice cream, matcha latte, matcha gelato, and more. The signature matcha ice cream has repeatedly ranked on Dianping\'s 2025 Shanghai Summer Ice Cream charts.',
    'jsy.s3.c2.title':'THE SPACE','jsy.s3.c2.desc':'Spatial design pursues a symbiotic relationship with nature, grounded in Eastern aesthetics. Coverage spans approximately 25 provinces and regions, with stores located in the most popular commercial centers.',
    'jsy.m1':'Stores','jsy.m2':'Provinces','jsy.m3':'Founded',

    // BLACKTREE
    'bt.number':'BRAND 02 · Tea Series','bt.hero':'An inspired tree at the intersection of the urban and the natural. Thai tea with bold black-and-gold aesthetics.',
    'bt.s1.sub':'Brand Philosophy','bt.s1.title':'Rational Structure · Biophilic Nature · Inspired Growth',
    'bt.s1.c1.title':'Rational Structure','bt.s1.c1.desc':'Building every drink with rigorous product logic. Authentic ingredients: genuine Thai tea leaves, natural spices, premium fresh milk, balancing sweetness, tea aroma, and creaminess for a multi-layered taste experience.',
    'bt.s1.c2.title':'Biophilic Nature','bt.s1.c2.desc':'Conveying the ease, passion, and refinement of Thai tea culture. Emphasizing chill, relaxation, and slow-living scenarios, attracting young people through artistic packaging and rich flavor layers.',
    'bt.s2.sub':'Brand Philosophy','bt.s2.title':'Avant-garde · Cross-Border Fusion',
    'bt.s2.i1':'Avant-garde Expression — Attracting young people through artistic packaging and rich flavor layers, delivering sensory enjoyment. Combining fruits, caramel, chocolate, and more to create unique Thai tea variations',
    'bt.s2.i2':'Cross-Border Creativity — Blending with desserts, pastries, coffee, and ice cream to create unique product lines. Products span Thai milk tea, coffee, Thai salted crème brûlée, and Thai tea flavored ice cream',
    'bt.s2.i3':'Nanyang Flavors — Multiple Thai fruit teas and Southeast Asian-inspired gelato flavors including lemongrass tamarind, pomelo citronella, and Thai coconut black lemon',
    'bt.s3.sub':'Products & Spaces','bt.s3.title':'400x Lava · Black Gold Concept',
    'bt.s3.c1.title':'Signature Products','bt.s3.c1.desc':'The "400x Lava Thai Tea" blends Thai milk tea, coffee, and cheese cream, hand-whipped repeatedly with lava cream cap, caramel coffee, and Thai tea base. "Yuanyang Thai Salted Crème Brûlée" paired with pearls, a savory-sweet symphony.',
    'bt.s3.c2.title':'Concept Spaces','bt.s3.c2.desc':'The first store opened at Shenzhen Bay MixC, with a black-gold interior design perfectly matching the brand identity. Now present in Nanjing Deji Plaza, Changsha IFS, Shanghai Qingpu Bailian Outlets, and other top-tier commercial destinations.',
    'bt.m1':'Stores','bt.m2':'Cities','bt.m3':'Founded',

    // Matcha Wang
    'mw.number':'BRAND 03 · Matcha Series','mw.hero':'Nothing but matcha. DRINKDREAM\'s blade thrusting toward the world.',
    'mw.s1.sub':'Brand Story','mw.s1.title':'Returning to the Origin Amidst Trends',
    'mw.s1.c1.title':'Brand Birth','mw.s1.c1.desc':'While many matcha brands chase flavor stacking and trend fusion, we chose to return to the origin — matcha itself. The brand was born from a reflection on market homogeneity: the true matcha experience should not be drowned in syrups and toppings, but should present its pure flavor and profound layers.',
    'mw.s1.c2.title':'Brand Mission','mw.s1.c2.desc':'All of this originates from reverence and passion for matcha. The signature "Lily the Lamb" has sold over 20,000 cups since its December 2025 launch, accounting for 70% of store revenue, becoming a must-visit "social currency" for foreign tourists in Shanghai.',
    'mw.s2.sub':'Product Philosophy','mw.s2.title':'Three Grinds · Three States of Mind',
    'mw.s2.i1':'Shade-covered, low-temperature ground — fine powder with fresh, delicate fragrance and crisp, natural mouthfeel, as if standing in a spring tea garden',
    'mw.s2.i2':'Silky smooth powder, rich texture — full-bodied mossy aroma upon entry, with a quick and bright finish, as if drinking a warm cup of polished jade, embodying Eastern taste',
    'mw.s2.i3':'Fine powder like the fresh green of early spring fields — carrying an untouched purity. When brewed, the green-tinged yellow liquor condenses the morning mist of the mountains into a single cup. Rich aroma, balanced flavor',
    'mw.s3.sub':'Space & Experience','mw.s3.title':'Matcha Dojo · Ichigo Ichie',
    'mw.s3.c1.title':'The Matcha Dojo','mw.s3.c1.desc':'A space composed of gravel, steel, and concrete — a matcha dojo. From intense to delicate, completing a sensory practice. Using flagship single-origin matcha powder, presenting the dialogue between matcha and premium ingredients through classic blending.',
    'mw.s3.c2.title':'Ichigo Ichie','mw.s3.c2.desc':'One guest, one reception, meticulous service throughout. Single-origin matcha gelato, pure matcha, premium gelato — focused on every guest\'s experience. Daily foot traffic stabilizes at 900–1,200, with an exceptionally high proportion of foreign tourists.',
    'mw.m1':'Flagship','mw.m2':'Lily Sold','mw.m3':'Founded',

    // Yoajung
    'yj.number':'BRAND 04 · Yogurt Dessert','yj.hero':'Every cup of Yoajung is a customizable little universe. Less Sugar, More You.',
    'yj.s1.sub':'Brand Story','yj.s1.title':'The Authentic Yogurt Ice Cream from Seoul',
    'yj.s1.c1.title':'Brand Origins','yj.s1.c1.desc':'Yoajung (요아정) is a Korean frozen yogurt chain headquartered in Seoul. The name is an abbreviation of "요거트 아이스크림의 정석," meaning "the orthodox standard of yogurt ice cream." The brand emphasizes healthy, customizable dessert experiences.',
    'yj.s1.c2.title':'Brand Mission','yj.s1.c2.desc':'Adhering to the nature of fermentation, using real and clean ingredients, reshaping young people\'s understanding of "sweetness." Committed to becoming the representative of a new generation of Asian brands going global, bridging DRINKDREAM to the world.',
    'yj.s2.sub':'Brand Positioning','yj.s2.title':'Less Sugar, More You',
    'yj.s2.i1':'Customizable Dessert Experience — Every cup of Yoajung is a customizable little universe, satisfying the younger generation\'s desire for self-expression',
    'yj.s2.i2':'Real & Clean Ingredients — Rejecting labels, insisting on real and clean ingredients, reshaping young people\'s understanding of "sweetness"',
    'yj.s2.i3':'Youth Trend Brand — Fandom demographic 45% · Health dessert lovers 25% · Social media check-in consumers 20% · Family & children 10%',
    'yj.s3.sub':'Core Demographics','yj.s3.title':'Precision Targeting of Young Consumers',
    'yj.s3.c1.title':'Target Audience','yj.s3.c1.desc':'The fandom demographic accounts for up to 45%, health dessert lovers 25%. After rapid success in the Korean market, the brand was introduced to China, similarly winning the favor of young consumers.',
    'yj.s3.c2.title':'Brand Vision','yj.s3.c2.desc':'Committed to becoming the representative of a new generation of Asian brands going global. Every cup of Yoajung is a customizable little universe, making dessert a vehicle for self-expression.',
    'yj.m1':'Stores','yj.m2':'Cities','yj.m3':'China Entry',

    // 抹趣 Very Matcha
    'mq.number':'BRAND 05 · Matcha Series','mq.hero':'A matcha monster named "Mo Mo," a mind bursting with whimsy. Passion for matcha is the starting point of all joy and creativity.',
    'mq.s1.sub':'Brand Story','mq.s1.title':'Does the world need yet another ordinary matcha shop?',
    'mq.s1.c1.title':'The Answer Is: No','mq.s1.c1.desc':'As matcha gradually integrates into daily life, becoming a convenient, familiar, and predictable flavor — Very Matcha began exploring inspired variations through multi-sensory experiences. Here, matcha is the starting point of infinite possibilities, constantly breaking the boundaries between reality and imagination.',
    'mq.s1.c2.title':'Brand IP · Mo Mo the Matcha Monster','mq.s1.c2.desc':'A matcha monster with a mind bursting with whimsy — passion for matcha is its survival instinct. Obsessed with exploring the infinite possibilities of matcha colliding with everything in the world — Love · Idea · Happy · Infinite.',
    'mq.s2.sub':'Product Philosophy','mq.s2.title':'A Hundred Times the Tea · One Scoop of Essence',
    'mq.s2.i1':'Selecting Early Spring Pre-Qingming Tea — As precious as gold, using ceremonial-grade matcha, the core of matcha paste. Slowly simmered and reduced to a paste, extracting richer tea sensations and higher-level aromatic layers',
    'mq.s2.i2':'Rigorous Internal Preservation System — Pursuing ultimate quality and mouthfeel, ensuring every mouthful of matcha paste is rich and vibrant',
    'mq.s2.i3':'Pioneer of Matcha Paste Drinks — Slow-simmering ceremonial-grade matcha into paste, creating an entirely new beverage category. The first step for DRINKDREAM in exploring new flavors',
    'mq.s3.sub':'Products & Spirit','mq.s3.title':'Matcha + Everything = Infinite Possibilities',
    'mq.s3.c1.title':'Product Lines','mq.s3.c1.desc':'Centered around matcha paste drinks, extending into matcha + fruit, matcha + baking, and other creative product lines. Every product is a dialogue between matcha and another ingredient, constantly exploring flavor boundaries.',
    'mq.s3.c2.title':'Brand Spirit','mq.s3.c2.desc':'Love · Idea · Happy · Infinite — Love is the starting point, creativity is the path, happiness is the destination, and possibilities are infinite. Mo Mo will forever maintain its love and curiosity for matcha.',
    'mq.m1':'Stores','mq.m2':'Cities','mq.m3':'Founded',

    // lemonwell
    'lw.number':'BRAND 06 · Tea Series','lw.hero':'A lemon island in the city, a poetic dwelling for beautiful souls.',
    'lw.s1.sub':'Brand Story','lw.s1.title':'When Sunlight Glides Through the Shutters of a Southern French Town',
    'lw.s1.c1.title':'Brand Origins','lw.s1.c1.desc':'When sunlight glides through the shutters of a Southern French town, light takes shape. The wind carries a distant message — on the letter, the scent of lemon lingers faintly. LemonWell, a lemon island floating in the city.',
    'lw.s1.c2.title':'Brand Vision','lw.s1.c2.desc':'Following the scent of lemon, passing through the golden summers of Provence, skimming the blue waves of the Sorrento coast. Creating an island moment where senses awaken and the spirit finds harbor.',
    'lw.s2.sub':'Brand Philosophy','lw.s2.title':'The Diverse Flavors of Lemon',
    'lw.s2.i1':'Dedicated to the Diverse Flavors of Lemon — Through high-quality ingredients, refined recipes, and design-forward presentation, providing modern urban consumers a "lemon island" for instant relaxation and healing',
    'lw.s2.i2':'Senses Awaken · Spirit Anchors — lemon tea & gelato, creating a poetic dwelling in the heart of the city. Especially appealing to quality-seeking female consumers',
    'lw.s2.i3':'Southern French Aesthetics — Brand visuals and spatial design draw inspiration from Southern French towns, blending lemon yellow, sunshine gold, and ocean blue into space and product',
    'lw.s3.sub':'Product Lines','lw.s3.title':'Lemon Tea · Gelato · Lifestyle',
    'lw.s3.c1.title':'Lemon Tea','lw.s3.c1.desc':'Carefully selected premium lemons, presenting the diverse flavors and refreshing layers of lemon tea through refined recipes. Every cup is a taste memory of Southern French sunshine.',
    'lw.s3.c2.title':'Gelato','lw.s3.c2.desc':'Perfectly blending the freshness of lemon with the richness of gelato, creating a unique sensory experience. The tart sweetness of lemon intertwined with creamy smoothness.',
    'lw.m1':'Stores','lw.m2':'Cities','lw.m3':'Founded',
  }
};

let lang=localStorage.getItem('dd-lang')||'zh';
function t(key){return L[lang]?.[key]||L.zh[key]||key}

// ─── Page Type Detection ────────────────────────────────
function detectPage(){
  const p=location.pathname;
  const brands={jiushiye:'jsy',blacktree:'bt','matcha-wang':'mw',yoajung:'yj',moqu:'mq',lemonwell:'lw'};
  for(const [k,v] of Object.entries(brands)){if(p.includes(k))return 'brand_'+v}
  if(p.includes('about'))return 'about';
  if(p.includes('find-us'))return 'find';
  return 'home';
}

// ─── Language Switcher ──────────────────────────────────
function initLangSwitcher(){
  const inner=document.querySelector('.header-inner');if(!inner)return;
  const langLabels={zh:'简体中文',en:'English','zh-TW':'繁體中文'};
  const sw=document.createElement('div');sw.className='lang-switch';
  sw.innerHTML=`<button class="lang-btn" id="lang-btn">${langLabels[lang]||'简体中文'} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></button>
    <div class="lang-menu" id="lang-menu">
      <button data-l="zh" class="${lang==='zh'?'active':''}">简体中文</button>
      <button data-l="zh-TW" class="${lang==='zh-TW'?'active':''}">繁體中文</button>
      <button data-l="en" class="${lang==='en'?'active':''}">English</button>
    </div>`;
  inner.appendChild(sw);

  const btn=document.getElementById('lang-btn');
  const menu=document.getElementById('lang-menu');
  btn.addEventListener('click',e=>{e.stopPropagation();menu.classList.toggle('open')});
  document.addEventListener('click',()=>menu.classList.remove('open'));

  menu.addEventListener('click',e=>{
    const b=e.target.closest('button[data-l]');if(!b)return;
    lang=b.dataset.l;localStorage.setItem('dd-lang',lang);
    menu.classList.remove('open');
    applyLang();
    btn.innerHTML=`${langLabels[lang]||'简体中文'} <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;
    menu.querySelectorAll('button').forEach(b2=>b2.classList.toggle('active',b2.dataset.l===lang));
    if(typeof updateMapLang==='function')updateMapLang(lang==='zh-TW'?'zh-TW':lang==='en'?'en':'zh-CN');
  });
}

// ─── Apply Language ─────────────────────────────────────
function applyLang(){
  document.documentElement.lang=lang==='zh-TW'?'zh-TW':lang==='zh'?'zh-CN':'en';
  const page=detectPage();

  // Generic [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});

  // Nav links
  const navLinks=document.querySelectorAll('.nav a');
  const navKeys=['nav.brands','nav.about','nav.find','nav.join'];
  navLinks.forEach((a,i)=>{if(navKeys[i])a.textContent=t(navKeys[i])});

  // Back to brands
  const backEl=document.querySelector('.back-home');
  if(backEl)backEl.textContent=t('back.brands');

  // === HOMEPAGE ===
  if(page==='home'){
    applyHomepage();
  }

  // === BRAND DETAIL PAGE ===
  if(page.startsWith('brand_')){
    applyBrandPage(page.replace('brand_',''));
  }

  // === ABOUT PAGE ===
  if(page==='about'){
    applyAboutPage();
  }

  // === FIND-US PAGE ===
  if(page==='find'){
    applyFindPage();
  }

  // Footer (all pages)
  applyFooter();
}

function applyHomepage(){
  // Hero
  const eb=document.querySelector('.hero-eyebrow');if(eb)eb.textContent=t('hero.eyebrow');
  const sub=document.querySelector('.hero-sub');if(sub)sub.textContent=t('hero.sub');
  const cta=document.querySelector('.hero-cta span');if(cta)cta.textContent=t('hero.cta');
  // Manifesto
  const ms=document.querySelectorAll('.manifesto-item');const mk=['m1','m2','m3','m4'];
  ms.forEach((m,i)=>{if(mk[i]){const h=m.querySelector('h2');const p=m.querySelector('p');if(h)h.textContent=t(mk[i]+'.title');if(p)p.textContent=t(mk[i]+'.desc')}});
  // Intro
  const il=document.querySelector('.intro-section .section-label');if(il)il.textContent=t('intro.label');
  const it=document.querySelector('.intro-content h2');if(it)it.textContent=t('intro.title');
  const ips=document.querySelectorAll('.intro-text p');const ipk=['intro.p1','intro.p2','intro.p3'];
  ips.forEach((p,i)=>{if(ipk[i])p.textContent=t(ipk[i])});
  // Metrics
  const mts=document.querySelectorAll('.metric-item span');const mtsk=['metrics.1','metrics.2','metrics.3','metrics.4','metrics.5'];
  mts.forEach((s,i)=>{if(mtsk[i])s.textContent=t(mtsk[i])});
  // Values
  const vl=document.querySelector('.values-section .section-label');if(vl)vl.textContent=t('values.label');
  const vt=document.querySelector('.values-title');if(vt)vt.textContent=t('values.title');
  const vcs=document.querySelectorAll('.value-card');const vk=['v1','v2','v3','v4'];
  vcs.forEach((vc,i)=>{if(vk[i]){const h=vc.querySelector('h3');const p=vc.querySelector('p');if(h)h.textContent=t(vk[i]+'.title');if(p)p.textContent=t(vk[i]+'.desc')}});
  // Media
  const ml=document.querySelector('.media-section .section-label');if(ml)ml.textContent=t('media.label');
  const mt=document.querySelector('.media-section .values-title');if(mt)mt.textContent=t('media.title');
  // Stack
  document.querySelectorAll('.stack-cta').forEach(a=>{
    const parts=a.textContent.split(' ');
    if(parts.length>=2)a.innerHTML=t('stack.explore')+' '+parts[1]+' <span>→</span>';
  });
  // Back-to-top
  const btt=document.querySelector('.back-to-top');if(btt)btt.title=t('back');
}

function applyBrandPage(prefix){
  if(!prefix)return;
  // Number/type tag
  const num=document.querySelector('.brand-number');if(num)num.textContent=t(prefix+'.number');
  // Hero desc
  const hero=document.querySelector('.brand-hero-desc');if(hero)hero.textContent=t(prefix+'.hero');
  // Sections - each .brand-sect contains .ssub + h2 + content
  const sects=document.querySelectorAll('.brand-sect');
  const sectKeys=['s1','s2','s3'];
  sects.forEach((sect,i)=>{
    if(i>2)return;
    const sk=sectKeys[i];
    const sub=sect.querySelector('.ssub');if(sub)sub.textContent=t(prefix+'.'+sk+'.sub');
    const h2=sect.querySelector('h2');if(h2)h2.textContent=t(prefix+'.'+sk+'.title');
    // Content blocks
    const cblocks=sect.querySelectorAll('.cblock');
    cblocks.forEach((cb,j)=>{
      const h=cb.querySelector('h3');if(h)h.textContent=t(prefix+'.'+sk+'.c'+(j+1)+'.title');
      const p=cb.querySelector('p');if(p)p.textContent=t(prefix+'.'+sk+'.c'+(j+1)+'.desc');
    });
    // Highlight list (philosophy section)
    const items=sect.querySelectorAll('.hlist li');
    items.forEach((item,j)=>{
      const strong=item.querySelector('strong');
      const prefix2=prefix+'.'+sk+'.i'+(j+1);
      const txt=t(prefix2);
      if(txt&&strong){
        // Reconstruct: keep strong but replace text
        const dashIdx=txt.indexOf(' — ');
        if(dashIdx>0){strong.textContent=txt.substring(0,dashIdx);item.childNodes[item.childNodes.length-1]&&(item.lastChild.textContent=txt.substring(dashIdx))}
        else item.textContent=txt;
      }
    });
    // Metrics
    const bm=sect.querySelectorAll('.bmetrics div span');
    bm.forEach((s,j)=>{if(j<3)s.textContent=t(prefix+'.m'+(j+1))});
  });
}

function applyAboutPage(){
  // Hero
  const eb=document.querySelector('.hero-eyebrow');if(eb)eb.textContent=t('hero.eyebrow');
  // Manifesto
  const ms=document.querySelectorAll('.manifesto-item');const mk=['m1','m2','m3','m4'];
  ms.forEach((m,i)=>{if(mk[i]){const h=m.querySelector('h2');const p=m.querySelector('p');if(h)h.textContent=t(mk[i]+'.title');if(p)p.textContent=t(mk[i]+'.desc')}});

  // Process .brand-sect sections in order
  const sects=document.querySelectorAll('.brand-sect');
  sects.forEach(sect=>{
    const h2=sect.querySelector('h2');if(!h2)return;
    const h2t=h2.textContent.trim();
    const sub=sect.querySelector('.ssub');

    // 集团介绍 section (contains .about-text-block)
    if(sect.querySelector('.about-text-block')){
      if(sub)sub.textContent=t('intro.label');
      h2.textContent=t('intro.title');
      const ps=sect.querySelectorAll('.about-text-block p');
      const ipk=['intro.p1','intro.p2','intro.p3'];
      ps.forEach((p,i)=>{if(ipk[i])p.textContent=t(ipk[i])});
    }
    // 战略合作伙伴 section (contains .partner-grid)
    else if(sect.querySelector('.partner-grid')){
      if(sub)sub.textContent=t('about.partners');
      h2.textContent=t('about.partners.title');
    }
    // 核心价值观 section (contains .values-grid)
    else if(sect.querySelector('.values-grid')){
      if(sub)sub.textContent=t('values.label');
      h2.textContent=t('values.title');
      const vcs=sect.querySelectorAll('.value-card');
      const vk=['v1','v2','v3','v4'];
      vcs.forEach((vc,i)=>{if(vk[i]){const h=vc.querySelector('h3');const p=vc.querySelector('p');if(h)h.textContent=t(vk[i]+'.title');if(p)p.textContent=t(vk[i]+'.desc')}});
    }
  });
}

function applyFindPage(){
  // Store count
  const cnt=document.getElementById('store-count');
  if(cnt){const n=cnt.getAttribute('data-total')||'0';cnt.textContent=t('find.count').replace('{n}',n)}
  // Filter labels
  const bl=document.querySelector('.filter-label-brand');if(bl)bl.textContent=t('find.brand');
  const cl=document.querySelector('.filter-label-city');if(cl)cl.textContent=t('find.city');
  // All buttons
  document.querySelectorAll('.filter-all').forEach(b=>b.textContent=t('find.all'));
  // List label
  const ll=document.querySelector('.store-list-label');if(ll)ll.textContent=t('find.list');
}

function applyFooter(){
  const fcols=document.querySelectorAll('.footer-col strong');
  const fck=['footer.brands','footer.group','footer.contact'];
  fcols.forEach((s,i)=>{if(fck[i])s.textContent=t(fck[i])});
  // Footer links
  const fAbout=document.querySelectorAll('.footer-col a');
  const flKeys=['footer.about','footer.find','footer.join','footer.media','footer.biz'];
  // Only apply to group/contact columns
  let fcIdx=0;
  document.querySelectorAll('.footer-links .footer-col').forEach((col,ci)=>{
    if(ci===0)return; // skip brand column
    col.querySelectorAll('a').forEach(a=>{
      if(fcIdx<flKeys.length){a.textContent=t(flKeys[fcIdx]);fcIdx++}
    });
  });
}

// ─── Cursor Glow ────────────────────────────────────────
function initCursorGlow(){
  const glow=document.getElementById('cursor-glow');if(!glow)return;
  let tick=false,mx=0,my=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;if(!tick){requestAnimationFrame(()=>{glow.style.left=mx+'px';glow.style.top=my+'px';tick=false});tick=true}},{passive:true});
  const stack=document.getElementById('stack-container');
  if(stack){stack.addEventListener('mouseenter',()=>glow.classList.add('visible'));stack.addEventListener('mouseleave',()=>glow.classList.remove('visible'))}
}

// ─── Scroll Reveal ──────────────────────────────────────
function initScrollReveal(){
  const targets=document.querySelectorAll('[data-reveal]');
  if(!targets.length)return;
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -60px 0px'});
  targets.forEach(el=>obs.observe(el));
}

function initHeroReveal(){
  setTimeout(()=>{document.querySelectorAll('.hero-eyebrow,.hero-line,.hero-sub,.brand-number,.brand-name,.brand-en,.brand-hero-desc').forEach(el=>el.classList.add('visible'))},300);
}

// ─── Stack Observer ─────────────────────────────────────
function initStackObserver(){
  const sections=document.querySelectorAll('.stack-section');
  const dots=document.querySelectorAll('.ring-dot');
  const ring=document.getElementById('ring-fill');
  if(!sections.length)return;
  let tick=false;const total=sections.length;
  window.addEventListener('scroll',()=>{
    if(!tick){requestAnimationFrame(()=>{
      let active=0;const mid=window.innerHeight*.42;
      sections.forEach((s,i)=>{const r=s.getBoundingClientRect();if(r.top+r.height*.3<mid)active=i});
      sections.forEach((s,i)=>{s.classList.remove('active','exiting');if(i===active)s.classList.add('active');else if(i<active)s.classList.add('exiting')});
      dots.forEach((d,i)=>d.classList.toggle('active',i===active));
      if(ring){ring.style.strokeDashoffset=106.8*(1-(active+1)/total)}
      tick=false;
    });tick=true}
  },{passive:true});
  setTimeout(()=>window.dispatchEvent(new Event('scroll')),500);
}

// ─── Parallax ───────────────────────────────────────────
function initParallax(){
  const imgs=document.querySelectorAll('.stack-image');if(!imgs.length)return;let tick=false;
  window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{
    imgs.forEach(img=>{const sec=img.closest('.stack-section');if(!sec||!sec.classList.contains('active'))return;const r=sec.getBoundingClientRect();img.style.transform=`translateY(${((window.innerHeight*.5-r.top)/(r.height+window.innerHeight)-.5)*80}px) scale(1.03)`});tick=false});tick=true}},{passive:true});
}

// ─── Counter ────────────────────────────────────────────
function initCounters(){
  const c=document.querySelectorAll('[data-count]');if(!c.length)return;
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){anim(e.target);obs.unobserve(e.target)}})},{threshold:.5});
  function anim(el){const t=parseInt(el.dataset.count,10);if(isNaN(t))return;const d=1400,s=performance.now();function step(n){const p=Math.min(1,(n-s)/d);el.textContent=Math.round((1-Math.pow(1-p,3))*t);if(p<1)requestAnimationFrame(step);else el.textContent=t}requestAnimationFrame(step)}
  c.forEach(el=>obs.observe(el));
}

// ─── Magnetic ───────────────────────────────────────────
function initMagnetic(){
  document.querySelectorAll('.stack-cta').forEach(btn=>{
    btn.addEventListener('mousemove',function(e){const r=this.getBoundingClientRect();this.style.transform=`translate(${(e.clientX-r.left)/r.width*6-3}px,${(e.clientY-r.top)/r.height*6-3}px)`});
    btn.addEventListener('mouseleave',function(){this.style.transform='';this.style.transition='transform .5s cubic-bezier(.34,1.56,.64,1)'});
    btn.addEventListener('mouseenter',function(){this.style.transition='transform .12s ease-out'});
  });
}

// ─── Header ─────────────────────────────────────────────
function initHeader(){
  const h=document.querySelector('.site-header');if(!h)return;let tick=false;
  window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{const s=window.scrollY>50;h.style.background=s?'rgba(255,255,255,.94)':'rgba(255,255,255,.82)';tick=false});tick=true}},{passive:true});
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

// ─── Copy Protection ────────────────────────────────────
function initProtection(){
  document.addEventListener('contextmenu',e=>e.preventDefault());
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&['c','a','s','u','p'].includes(e.key))e.preventDefault();if(e.key==='F12')e.preventDefault()});
  document.addEventListener('dragstart',e=>e.preventDefault());
  document.addEventListener('selectstart',e=>e.preventDefault());
}

// ─── Progress Bar ──────────────────────────────────────
function initProgressBar(){
  const bar=document.getElementById('progress-bar');if(!bar)return;
  let tick=false;
  window.addEventListener('scroll',()=>{if(!tick){requestAnimationFrame(()=>{const h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=h>0?(window.scrollY/h*100)+'%':'0';tick=false});tick=true}},{passive:true});
}

// ─── Init ───────────────────────────────────────────────
function init(){
  initProtection();initLangSwitcher();applyLang();initHeroReveal();initScrollReveal();
  initStackObserver();initParallax();initCounters();initMagnetic();initCursorGlow();
  initProgressBar();initHeader();initBackToTop();initMobileMenu();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
