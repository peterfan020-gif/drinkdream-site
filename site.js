/* ============================================================
   DRINKDREAM V3 — Bilingual + Interactions
   ============================================================ */
(function(){'use strict';

// ─── Language Data ──────────────────────────────────────
const L={
  zh:{
    'nav.brands':'品牌矩阵','nav.about':'关于我们','nav.find':'寻找我们','nav.join':'加入我们',
    'hero.eyebrow':'品牌生态系统','hero.sub':'从一杯茶到多品牌矩阵，持续解构与重塑',
    'hero.cta':'了解集团',
    'm1.title':'DRINKDREAM, From Shanghai.','m1.desc':'2025年成立于上海，整合品牌孵化、投资、代理、经营、管理于一体的综合服务型集团。',
    'm2.title':'它诞生于对司空见惯的「饮用」行为的彻底反叛','m2.desc':'Born from a radical rebellion against the mundane act of drinking.',
    'm3.title':'根植于——Tea、Ice Cream、Gelato、Coffee','m3.desc':'Rooted in the craft of fresh beverages.',
    'm4.title':'从一杯茶到多品牌矩阵，持续解构与重塑','m4.desc':'From one cup to many brands, exploring all directions.',
    'intro.label':'集团介绍','intro.title':'我们不只创造品牌，我们在定义新式现制饮的未来图景',
    'intro.p1':'DrinkDream饮之梦品牌管理公司，旗下孵化九十叶、Black Tree、泰柯茶园、抹趣、Matcha Wang 等多家连锁轻餐品牌，现已布局北京、上海、深圳、杭州、苏州、广州等国内多个一线、新一线城市核心商圈。',
    'intro.p2':'我们构建了从产品灵感、品牌战略、营销增长到供应链及资本运作的完整赋能体系，将每一个创意火花系统性地淬炼为具备长期生命力的商业品牌。',
    'metrics.1':'深耕甜品市场','metrics.2':'直营门店超过','metrics.3':'门店总营收','metrics.4':'特许经营门店','metrics.5':'管理人员超',
    'metrics.u1':'年','metrics.u2':'家','metrics.u3':'亿','metrics.u4':'家','metrics.u5':'人',
    'values.label':'核心价值观',
    'values.title':'核心价值观',
    'v1.title':'创新','v1.desc':'构建从产品灵感到商业品牌的完整赋能体系',
    'v2.title':'快','v2.desc':'以闪电路径覆盖市场，持续锻造尖刀品牌',
    'v3.title':'卓越','v3.desc':'超越峰值，创造记忆。定义高品质餐饮新体验',
    'v4.title':'分享','v4.desc':'与超级合伙人构建共生根系统，为顶尖人才提供舞台',
    'media.label':'媒体报道','media.title':'媒体报道',
    'footer.brands':'品牌','footer.group':'集团','footer.contact':'联系',
    'footer.about':'关于我们','footer.join':'加入我们','footer.find':'寻找我们',
    'footer.media':'媒体联络','footer.biz':'商务合作',
    'back':'回到顶部',
    'stack.explore':'探索',
  },
  'zh-TW':{
    'nav.brands':'品牌矩陣','nav.about':'關於我們','nav.find':'尋找我們','nav.join':'加入我們',
    'hero.eyebrow':'品牌生態系統','hero.sub':'從一杯茶到多品牌矩陣，持續解構與重塑',
    'hero.cta':'了解更多',
    'm1.title':'DRINKDREAM, From Shanghai.','m1.desc':'2025年成立於上海，整合品牌孵化、投資、代理、經營、管理於一體的綜合服務型集團。',
    'm2.title':'它誕生於對司空見慣的「飲用」行為的徹底反叛','m2.desc':'Born from a radical rebellion against the mundane act of drinking.',
    'm3.title':'根植於——Tea、Ice Cream、Gelato、Coffee','m3.desc':'Rooted in the craft of fresh beverages.',
    'm4.title':'從一杯茶到多品牌矩陣，持續解構與重塑','m4.desc':'From one cup to many brands, exploring all directions.',
    'intro.label':'集團介紹','intro.title':'我們不只創造品牌，我們在定義新式現製飲的未來圖景',
    'intro.p1':'DrinkDream飲之夢品牌管理公司，旗下孵化九十葉、Black Tree、泰柯茶園、抹趣、Matcha Wang 等多家連鎖輕餐品牌，現已佈局北京、上海、深圳、杭州、蘇州、廣州等國內多個一線、新一線城市核心商圈。',
    'intro.p2':'我們構建了從產品靈感、品牌戰略、營銷增長到供應鏈及資本運作的完整賦能體系，將每一個創意火花系統性地淬煉為具備長期生命力的商業品牌。',
    'metrics.1':'深耕甜品市場','metrics.2':'直營門店超過','metrics.3':'門店總營收','metrics.4':'特許經營門店','metrics.5':'管理人員超',
    'metrics.u1':'年','metrics.u2':'家','metrics.u3':'億','metrics.u4':'家','metrics.u5':'人',
    'values.label':'核心價值觀','values.title':'核心價值觀',
    'v1.title':'創新','v1.desc':'構建從產品靈感到商業品牌的完整賦能體系',
    'v2.title':'快','v2.desc':'以閃電路徑覆蓋市場，持續鍛造尖刀品牌',
    'v3.title':'卓越','v3.desc':'超越峰值，創造記憶。定義高品質餐飲新體驗',
    'v4.title':'分享','v4.desc':'與超級合夥人構建共生根系統，為頂尖人才提供舞台',
    'media.label':'媒體報道','media.title':'媒體報道',
    'footer.brands':'品牌','footer.group':'集團','footer.contact':'聯絡',
    'footer.about':'關於我們','footer.join':'加入我們','footer.find':'尋找我們',
    'footer.media':'媒體聯絡','footer.biz':'商務合作',
    'back':'回到頂部','stack.explore':'探索',
    'find.title':'尋找我們','find.sub':'探索 DRINKDREAM 全國門市 · Explore our stores nationwide',
    'find.brand':'品牌篩選 · Brand','find.city':'城市篩選 · City','find.all':'全部','find.count':'共 {n} 間門市',
  },
  en:{
    'nav.brands':'Brands','nav.about':'About Us','nav.find':'Find Us','nav.join':'Join Us',
    'hero.eyebrow':'BRAND ECOSYSTEM','hero.sub':'From one cup to many brands. A cycle of deconstruction and reinvention.',
    'hero.cta':'Learn More',
    'm1.title':'DRINKDREAM, From Shanghai.','m1.desc':'Founded in 2025 in Shanghai, a comprehensive group integrating brand incubation, investment, agency, operation, and management.',
    'm2.title':'Born from a radical rebellion against the mundane act of drinking.','m2.desc':'',
    'm3.title':'Rooted in — Tea, Ice Cream, Gelato, Coffee','m3.desc':'',
    'm4.title':'From one cup to many brands, a cycle of deconstruction and reinvention','m4.desc':'',
    'intro.label':'GROUP INTRODUCTION','intro.title':'We don\'t just create brands. We define the future of freshly made beverages.',
    'intro.p1':'DrinkDream Brand Management Co. has incubated multiple chain brands including NINTEA MATCHA, Black Tree, TamKoKo, Very Matcha, and Matcha Wang, now present in prime commercial districts across Beijing, Shanghai, Shenzhen, Hangzhou, Suzhou, Guangzhou, and other first-tier Chinese cities.',
    'intro.p2':'We have built a complete empowerment system covering product inspiration, brand strategy, marketing growth, supply chain, and capital operations — systematically refining every creative spark into a commercial brand with long-term vitality.',
    'metrics.1':'Deep Roots in Desserts','metrics.2':'Company-owned Stores','metrics.3':'Total Store Revenue','metrics.4':'Franchised Stores','metrics.5':'Management Staff',
    'metrics.u1':'Years','metrics.u2':'Stores','metrics.u3':'Billion','metrics.u4':'Stores','metrics.u5':'People',
    'values.label':'CORE VALUES','values.title':'Core Values',
    'v1.title':'Innovation','v1.desc':'From product inspiration to a complete brand empowerment system',
    'v2.title':'Speed','v2.desc':'Cover the market with lightning speed, continuously forge flagship brands',
    'v3.title':'Excellence','v3.desc':'Beyond peaks, create memories. Define premium dining experiences',
    'v4.title':'Sharing','v4.desc':'Build symbiotic root systems with super partners, provide the best stage for top talent',
    'media.label':'MEDIA COVERAGE','media.title':'Media Coverage',
    'footer.brands':'Brands','footer.group':'Group','footer.contact':'Contact',
    'footer.about':'About Us','footer.join':'Join Us','footer.find':'Find Us',
    'footer.media':'Media Contact','footer.biz':'Business Cooperation',
    'back':'Back to Top',
    'stack.explore':'Explore',
  }
};
let lang=localStorage.getItem('dd-lang')||'zh';

function t(key){return L[lang]?.[key]||L.zh[key]||key}

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
    // Update map language if on find-us page
    if(typeof updateMapLang==='function')updateMapLang(lang==='zh-TW'?'zh-TW':lang==='en'?'en':'zh-CN');
  });
}

function applyLang(){
  document.documentElement.lang=lang==='zh-TW'?'zh-TW':lang==='zh'?'zh-CN':'en';
  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n)});
  // Update [data-i18n-nav]
  document.querySelectorAll('[data-i18n-nav]').forEach(el=>{
    const key='nav.'+el.dataset.i18nNav;
    // Find corresponding i18n key
    const map={brands:'nav.brands',about:'nav.about',find:'nav.find',join:'nav.join'};
    const k=map[el.dataset.i18nNav];if(k)el.textContent=t(k);
  });
  // Update nav
  const nav=document.querySelector('.nav');if(nav){
    const links=nav.querySelectorAll('a');const keys=['nav.brands','nav.about','nav.find','nav.join'];
    links.forEach((a,i)=>{if(keys[i])a.textContent=t(keys[i])});
  }
  // Update hero
  const eb=document.querySelector('.hero-eyebrow');if(eb)eb.textContent=t('hero.eyebrow');
  const sub=document.querySelector('.hero-sub');if(sub)sub.textContent=t('hero.sub');
  const cta=document.querySelector('.hero-cta span');if(cta)cta.textContent=t('hero.cta');
  // Update manifesto
  const ms=document.querySelectorAll('.manifesto-item');if(ms.length>=4){
    const mk=['m1','m2','m3','m4'];
    ms.forEach((m,i)=>{if(mk[i]){const h=m.querySelector('h2');const p=m.querySelector('p');if(h)h.textContent=t(mk[i]+'.title');if(p)p.textContent=t(mk[i]+'.desc')}});
  }
  // Update intro
  const il=document.querySelector('.intro-section .section-label');if(il)il.textContent=t('intro.label');
  const it=document.querySelector('.intro-content h2');if(it)it.textContent=t('intro.title');
  const ips=document.querySelectorAll('.intro-text p');if(ips.length>=2){ips[0].textContent=t('intro.p1');ips[1].textContent=t('intro.p2')}
  // Update metrics
  const ms2=document.querySelectorAll('.metric-item span');const msk=['metrics.1','metrics.2','metrics.3','metrics.4','metrics.5'];
  ms2.forEach((s,i)=>{if(msk[i])s.textContent=t(msk[i])});
  // Update values
  const vl=document.querySelector('.values-section .section-label');if(vl)vl.textContent=t('values.label');
  const vt=document.querySelector('.values-title');if(vt)vt.textContent=t('values.title');
  const vcs=document.querySelectorAll('.value-card');const vk=['v1','v2','v3','v4'];
  vcs.forEach((vc,i)=>{if(vk[i]){const h=vc.querySelector('h3');const p=vc.querySelector('p');if(h)h.textContent=t(vk[i]+'.title');if(p)p.textContent=t(vk[i]+'.desc')}});
  // Update media
  const ml=document.querySelector('.media-section .section-label');if(ml)ml.textContent=t('media.label');
  const mt=document.querySelector('.media-section .values-title');if(mt)mt.textContent=t('media.title');
  // Update stack CTAs
  document.querySelectorAll('.stack-cta').forEach(a=>{const parts=a.textContent.split(' ');if(parts.length>=2){a.innerHTML=t('stack.explore')+' '+parts[1]+' <span>→</span>'}});
  // Update footer
  const fcols=document.querySelectorAll('.footer-col strong');const fck=['footer.brands','footer.group','footer.contact'];
  fcols.forEach((s,i)=>{if(fck[i])s.textContent=t(fck[i])});
  // Update back to top
  const btt=document.querySelector('.back-to-top');if(btt)btt.title=t('back');
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
  setTimeout(()=>{document.querySelectorAll('.hero-eyebrow,.hero-line,.hero-sub').forEach(el=>el.classList.add('visible'))},300);
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
