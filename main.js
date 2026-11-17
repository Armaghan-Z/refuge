/* ===========================================
   THE REFUGE — main.js
   Navigation · Google Translate · Chatbot
   =========================================== */

/* ─── 1. Navigation ─────────────────────────── */
(function initNav() {
  const header   = document.getElementById('site-header');
  const toggle   = document.querySelector('.nav__toggle');
  const navLinks = document.getElementById('nav-links');

  if (header) {
    const onScroll = () => header.classList.toggle('site-header--solid', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      navLinks.classList.toggle('open', !open);
    });
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      })
    );
  }

  const banner  = document.getElementById('emergency-banner');
  const dismiss = document.getElementById('banner-dismiss');
  if (banner && dismiss) {
    if (sessionStorage.getItem('banner-dismissed')) banner.style.display = 'none';
    dismiss.addEventListener('click', () => {
      banner.style.display = 'none';
      sessionStorage.setItem('banner-dismissed', '1');
    });
  }
})();

/* ─── 2. Scroll Progress + Reveal ───────────── */
(function initScroll() {
  const bar = document.querySelector('.scroll-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
      bar.style.width = Math.min(pct, 100) + '%';
    }, { passive: true });
  }

  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => io.observe(el));
})();

/* ─── 3. Active Nav Link ─────────────────────── */
(function markActive() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.setAttribute('aria-current', 'page');
  });
})();

/* ─── 4. Contact Form ────────────────────────── */
(function initForm() {
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.disabled = true; btn.textContent = 'Sending…';
    setTimeout(() => {
      form.reset();
      btn.disabled = false; btn.textContent = 'Send Message';
      if (success) success.style.display = 'flex';
    }, 900);
  });
})();

/* ─── 5. Job Filter ──────────────────────────── */
(function initJobFilter() {
  const btns = document.querySelectorAll('.filter-btn[data-filter]');
  if (!btns.length) return;
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.job-card[data-category]').forEach(card => {
      card.hidden = f !== 'all' && card.dataset.category !== f;
    });
  }));
})();

/* ─── 6. Jump Links ──────────────────────────── */
(function initJumpLinks() {
  const links = document.querySelectorAll('.jump-link[href^="#"]');
  if (!links.length) return;
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('jump-link--active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  sections.forEach(s => io.observe(s));
})();

/* ─── 7. Google Translate + Language Modal ───── */
var Translate = (function() {
  var currentLang = 'en';

  var ALL_LANGS = [
    {code:'af',native:'Afrikaans',english:'Afrikaans'},
    {code:'sq',native:'Shqip',english:'Albanian'},
    {code:'am',native:'አማርኛ',english:'Amharic'},
    {code:'ar',native:'العربية',english:'Arabic'},
    {code:'hy',native:'Հայերևն',english:'Armenian'},
    {code:'az',native:'Azərbaycan',english:'Azerbaijani'},
    {code:'be',native:'Беларуская',english:'Belarusian'},
    {code:'bn',native:'বাংলা',english:'Bengali'},
    {code:'bs',native:'Bosanski',english:'Bosnian'},
    {code:'bg',native:'Български',english:'Bulgarian'},
    {code:'ca',native:'Català',english:'Catalan'},
    {code:'zh-CN',native:'中文 (简体)',english:'Chinese (Simplified)'},
    {code:'zh-TW',native:'中文 (繁體)',english:'Chinese (Traditional)'},
    {code:'hr',native:'Hrvatski',english:'Croatian'},
    {code:'cs',native:'Čeština',english:'Czech'},
    {code:'da',native:'Dansk',english:'Danish'},
    {code:'nl',native:'Nederlands',english:'Dutch'},
    {code:'en',native:'English',english:'English'},
    {code:'et',native:'Eesti',english:'Estonian'},
    {code:'fi',native:'Suomi',english:'Finnish'},
    {code:'fr',native:'Français',english:'French'},
    {code:'gl',native:'Galego',english:'Galician'},
    {code:'ka',native:'ქართული',english:'Georgian'},
    {code:'de',native:'Deutsch',english:'German'},
    {code:'el',native:'Ελληνικά',english:'Greek'},
    {code:'gu',native:'ગુજરાતી',english:'Gujarati'},
    {code:'ht',native:'Kreyòl Ayisyen',english:'Haitian Creole'},
    {code:'ha',native:'Hausa',english:'Hausa'},
    {code:'he',native:'עברית',english:'Hebrew'},
    {code:'hi',native:'हिन्दी',english:'Hindi'},
    {code:'hmn',native:'Hmoob',english:'Hmong'},
    {code:'hu',native:'Magyar',english:'Hungarian'},
    {code:'is',native:'Íslenska',english:'Icelandic'},
    {code:'ig',native:'Igbo',english:'Igbo'},
    {code:'id',native:'Bahasa Indonesia',english:'Indonesian'},
    {code:'ga',native:'Gaeilge',english:'Irish'},
    {code:'it',native:'Italiano',english:'Italian'},
    {code:'ja',native:'日本語',english:'Japanese'},
    {code:'jv',native:'Basa Jawa',english:'Javanese'},
    {code:'kn',native:'ಕನ್ನಡ',english:'Kannada'},
    {code:'kk',native:'Қазақша',english:'Kazakh'},
    {code:'km',native:'ខ្មែរ',english:'Khmer'},
    {code:'ko',native:'한국어',english:'Korean'},
    {code:'ku',native:'Kurdî',english:'Kurdish'},
    {code:'ky',native:'Кыргызча',english:'Kyrgyz'},
    {code:'lo',native:'ລາວ',english:'Lao'},
    {code:'lv',native:'Latviešu',english:'Latvian'},
    {code:'lt',native:'Lietuvių',english:'Lithuanian'},
    {code:'mk',native:'Македонски',english:'Macedonian'},
    {code:'ms',native:'Bahasa Melayu',english:'Malay'},
    {code:'ml',native:'മലയാളം',english:'Malayalam'},
    {code:'mt',native:'Malti',english:'Maltese'},
    {code:'mi',native:'Te Reo Māori',english:'Maori'},
    {code:'mr',native:'मराठी',english:'Marathi'},
    {code:'mn',native:'Монгол',english:'Mongolian'},
    {code:'my',native:'မြန်မာ',english:'Myanmar (Burmese)'},
    {code:'ne',native:'नेपाली',english:'Nepali'},
    {code:'no',native:'Norsk',english:'Norwegian'},
    {code:'ps',native:'پښتو',english:'Pashto'},
    {code:'fa',native:'فارسی / دری',english:'Persian / Dari'},
    {code:'pl',native:'Polski',english:'Polish'},
    {code:'pt',native:'Português',english:'Portuguese'},
    {code:'pa',native:'ਪੰਜਾਬੀ',english:'Punjabi'},
    {code:'ro',native:'Română',english:'Romanian'},
    {code:'ru',native:'Русский',english:'Russian'},
    {code:'sm',native:'Gagana Samoa',english:'Samoan'},
    {code:'sr',native:'Српски',english:'Serbian'},
    {code:'sn',native:'Shona',english:'Shona'},
    {code:'si',native:'සිංහල',english:'Sinhala'},
    {code:'sk',native:'Slovenčina',english:'Slovak'},
    {code:'sl',native:'Slovenščina',english:'Slovenian'},
    {code:'so',native:'Soomaali',english:'Somali'},
    {code:'es',native:'Español',english:'Spanish'},
    {code:'sw',native:'Kiswahili',english:'Swahili'},
    {code:'sv',native:'Svenska',english:'Swedish'},
    {code:'tl',native:'Filipino',english:'Tagalog (Filipino)'},
    {code:'tg',native:'Тоҷикӣ',english:'Tajik'},
    {code:'ta',native:'தமிழ்',english:'Tamil'},
    {code:'te',native:'తెలుగు',english:'Telugu'},
    {code:'th',native:'ภาษาไทย',english:'Thai'},
    {code:'tr',native:'Türkçe',english:'Turkish'},
    {code:'tk',native:'Türkmen',english:'Turkmen'},
    {code:'uk',native:'Українська',english:'Ukrainian'},
    {code:'ur',native:'اردو',english:'Urdu'},
    {code:'uz',native:'Oʻzbekcha',english:'Uzbek'},
    {code:'vi',native:'Tiếng Việt',english:'Vietnamese'},
    {code:'cy',native:'Cymraeg',english:'Welsh'},
    {code:'xh',native:'isiXhosa',english:'Xhosa'},
    {code:'yi',native:'ייִדיש',english:'Yiddish'},
    {code:'yo',native:'Yorùbá',english:'Yoruba'},
    {code:'zu',native:'isiZulu',english:'Zulu'},
  ];

  var FEATURED = [
    {code:'en',native:'English',english:'English'},
    {code:'ar',native:'العربية',english:'Arabic'},
    {code:'es',native:'Español',english:'Spanish'},
    {code:'fr',native:'Français',english:'French'},
    {code:'fa',native:'دری / فارسی',english:'Dari / Persian'},
    {code:'ps',native:'پښتو',english:'Pashto'},
  ];

  function applyLanguage(code) {
    currentLang = code;
    if (code === 'en') {
      var combo = document.querySelector('.goog-te-combo');
      if (combo) { combo.value = ''; combo.dispatchEvent(new Event('change')); }
      return;
    }
    var combo = document.querySelector('.goog-te-combo');
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event('change'));
    } else {
      document.cookie = 'googtrans=/en/' + code + '; path=/';
      location.reload();
    }
  }

  function openModal() {
    var m = document.getElementById('lang-modal');
    if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
  }

  function closeModal() {
    var m = document.getElementById('lang-modal');
    if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
  }

  function buildModal() {
    var modal = document.createElement('div');
    modal.className = 'lang-modal';
    modal.id = 'lang-modal';
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    modal.setAttribute('aria-labelledby','lang-modal-title');

    var featuredBtns = FEATURED.map(function(l){
      return '<button class="lang-btn'+(l.code===currentLang?' selected':'')+'" data-lang="'+l.code+'" type="button">'+
             '<span class="lang-btn__native">'+l.native+'</span>'+
             '<span class="lang-btn__english">'+l.english+'</span></button>';
    }).join('');

    var allBtns = ALL_LANGS.map(function(l){
      return '<button class="lang-all-btn'+(l.code===currentLang?' selected':'')+'" data-lang="'+l.code+'" type="button">'+
             '<span>'+l.native+'</span>'+
             '<small class="lang-all-btn__native">'+l.english+'</small></button>';
    }).join('');

    modal.innerHTML =
      '<div class="lang-modal__backdrop" id="lang-backdrop"></div>'+
      '<div class="lang-modal__panel" role="document">'+
        '<div class="lang-modal__header">'+
          '<div>'+
            '<h2 class="lang-modal__title" id="lang-modal-title">Choose language</h2>'+
            '<p class="lang-modal__subtitle">اختر اللغة · Elige el idioma · Choisir la langue</p>'+
          '</div>'+
          '<button class="lang-modal__close" id="lang-close" aria-label="Close language picker">✕</button>'+
        '</div>'+
        '<p class="lang-modal__section-title">Most common</p>'+
        '<div class="lang-featured">'+featuredBtns+'</div>'+
        '<p class="lang-modal__section-title" style="margin-top:0">All languages ('+ALL_LANGS.length+'+)</p>'+
        '<div class="lang-modal__search-wrap">'+
          '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'+
          '<input class="lang-search" id="lang-search" type="search" placeholder="Search language…" autocomplete="off" aria-label="Search languages">'+
        '</div>'+
        '<div class="lang-all-grid" id="lang-all-grid">'+allBtns+'</div>'+
      '</div>';

    document.body.appendChild(modal);

    document.getElementById('lang-backdrop').addEventListener('click', closeModal);
    document.getElementById('lang-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeModal(); });

    document.getElementById('lang-search').addEventListener('input', function(e){
      var q = e.target.value.trim().toLowerCase();
      document.querySelectorAll('.lang-all-btn').forEach(function(btn){
        btn.style.display = btn.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    });

    modal.addEventListener('click', function(e){
      var btn = e.target.closest('[data-lang]');
      if (!btn) return;
      var code = btn.dataset.lang;
      modal.querySelectorAll('[data-lang]').forEach(function(b){ b.classList.remove('selected'); });
      modal.querySelectorAll('[data-lang="'+code+'"]').forEach(function(b){ b.classList.add('selected'); });
      applyLanguage(code);
      var activeLang = ALL_LANGS.find(function(l){ return l.code===code; });
      if (activeLang) {
        var label = document.getElementById('lang-btn-label');
        if (label) label.textContent = activeLang.native;
      }
      setTimeout(closeModal, 300);
    });
  }

  function init() {
    buildModal();
    var btn = document.getElementById('lang-btn');
    if (btn) btn.addEventListener('click', openModal);
    var heroBtn = document.getElementById('hero-lang-btn');
    if (heroBtn) heroBtn.addEventListener('click', openModal);
  }

  window.googleTranslateElementInit = function(){
    new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false},'google_translate_element');
  };
  var s = document.createElement('script');
  s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.head.appendChild(s);

  return { init: init };
})();

/* ─── 8. Chatbot ─────────────────────────────── */
var Chatbot = (function() {

  var KB = [
    {
      patterns: ['emergency','urgent','danger','immediate','right now','help now','crisis'],
      answer: function(){return '<strong>🚨 For immediate emergencies:</strong><br>'+
        '• Call <a href="tel:911">911</a> for police/fire/medical emergencies<br>'+
        '• Call <a href="tel:211">2-1-1</a> for local social services, housing crisis, food (24/7)<br>'+
        '• USCIS immigration emergency: <a href="tel:18003755283">1-800-375-5283</a> (24/7)<br>'+
        '• IRC San Diego emergency line: <a href="tel:6196417510">(619) 641-7510</a><br><br>'+
        'See all emergency resources on our <a href="resources.html#emergency">Resources page</a>.';}
    },
    {
      patterns: ['housing','shelter','home','apartment','rent','eviction','homeless','place to stay','live'],
      answer: function(){return '<strong>🏠 Housing resources in San Diego:</strong><br>'+
        '• <strong>IRC Transitional Housing:</strong> <a href="tel:6196417510">(619) 641-7510</a><br>'+
        '• <strong>Catholic Charities (RHSP):</strong> <a href="tel:6192879454">(619) 287-9454</a> ext. 2100<br>'+
        '• <strong>211 San Diego</strong> — call or text <a href="tel:211">2-1-1</a> for emergency shelter<br>'+
        '• <strong>Family Migrant Shelter:</strong> <a href="tel:6195360823">(619) 536-0823</a><br><br>'+
        'More details on our <a href="resources.html#housing">Housing Resources page</a>.';}
    },
    {
      patterns: ['legal','lawyer','attorney','immigration','visa','status','deportation','asylum','ead','work permit','green card'],
      answer: function(){return '<strong>⚖️ Free legal help for refugees:</strong><br>'+
        '• <strong>IRC Legal Services:</strong> <a href="tel:6196417510">(619) 641-7510</a> — free consultations<br>'+
        '• <strong>World Relief San Diego:</strong> <a href="mailto:socalsandiego@wr.org">socalsandiego@wr.org</a><br>'+
        '• <strong>Legal Aid Society of San Diego:</strong> (619) 471-2666<br>'+
        '• <strong>Catholic Charities Immigration:</strong> <a href="tel:6192879454">(619) 287-9454</a><br><br>'+
        'See our <a href="resources.html#legal">Legal Aid resources</a>.';}
    },
    {
      patterns: ['doctor','health','medical','clinic','hospital','medicine','sick','insurance','medi-cal','healthcare'],
      answer: function(){return '<strong>🏥 Free & low-cost healthcare:</strong><br>'+
        '• <strong>FHCSD:</strong> Sliding scale fees — (619) 234-5252<br>'+
        '• <strong>San Ysidro Health:</strong> (619) 428-1281<br>'+
        '• <strong>County Refugee Health Program:</strong> (619) 692-8838<br>'+
        '• <strong>Medi-Cal:</strong> Free health insurance — apply at <a href="https://www.coveredca.com" target="_blank" rel="noopener">CoveredCA.com</a><br><br>'+
        'See all options on our <a href="resources.html#healthcare">Healthcare page</a>.';}
    },
    {
      patterns: ['mental health','trauma','stress','anxiety','depression','counseling','therapy','ptsd','psychological','torture'],
      answer: function(){return '<strong>💙 Mental health support (free):</strong><br>'+
        '• <strong>Survivors of Torture International:</strong> <a href="tel:6192782400">(619) 278-2400</a> — specialized trauma care, free<br>'+
        '• <strong>County Behavioral Health:</strong> <a href="tel:8887247240">(888) 724-7240</a> — 24/7 crisis line<br>'+
        '• <strong>IRC Mental Health Services:</strong> <a href="tel:6196417510">(619) 641-7510</a><br>'+
        '• <strong>SAMHSA Helpline:</strong> <a href="tel:18006624357">1-800-662-4357</a> (multilingual)<br><br>'+
        'Seeking mental health support is a sign of strength.';}
    },
    {
      patterns: ['food','hungry','eat','grocery','calfresh','snap','ebt','foodbank','pantry','nutrition'],
      answer: function(){return '<strong>🍎 Food assistance:</strong><br>'+
        '• <strong>CalFresh:</strong> Apply at <a href="https://www.benefitscal.com" target="_blank" rel="noopener">BenefitsCal.com</a><br>'+
        '• <strong>San Diego Food Bank:</strong> <a href="tel:8588272873">(858) 827-2873</a> — free, no ID required<br>'+
        '• <strong>211:</strong> Call <a href="tel:211">2-1-1</a> for nearest food pantry<br><br>'+
        '<em>CalFresh eligibility may have changed — verify at BenefitsCal.com before applying.</em>';}
    },
    {
      patterns: ['school','education','english','esl','learn english','ged','college','enroll','kids school'],
      answer: function(){return '<strong>📚 Education & English classes:</strong><br>'+
        '• <strong>SDCCE:</strong> FREE ESL, GED, citizenship prep — (619) 388-1800<br>'+
        '• <strong>El Cajon Adult School:</strong> FREE ESL — <a href="tel:6195880748">(619) 588-0748</a><br>'+
        '• <strong>Chula Vista Adult School:</strong> FREE ESL + vocational — (619) 422-7040<br>'+
        '• <strong>Kids school enrollment:</strong> Schools must enroll children regardless of documentation status<br><br>'+
        'More on our <a href="resources.html#education">Education resources page</a>.';}
    },
    {
      patterns: ['job','work','employment','career','resume','hire','interview','find work'],
      answer: function(){return '<strong>💼 Employment help:</strong><br>'+
        '• <strong>IRC Employment Services:</strong> <a href="tel:6196417510">(619) 641-7510</a><br>'+
        '• <strong>County Refugee Employment Services:</strong> (619) 236-6353<br>'+
        '• <strong>SDWP Connect2Work</strong> (ages 16-24): (619) 228-2900<br>'+
        '• <strong>Goodwill Industries:</strong> (858) 753-6655<br><br>'+
        'See job listings on our <a href="employment.html">Employment page</a>.';}
    },
    {
      patterns: ['benefit','cash assistance','rca','calworks','welfare','financial help','government help'],
      answer: function(){return '<strong>💰 Public benefits for refugees:</strong><br>'+
        '• <strong>Refugee Cash Assistance (RCA):</strong> Up to 12 months cash support<br>'+
        '• <strong>Medi-Cal:</strong> Free health insurance — BenefitsCal.com<br>'+
        '• <strong>CalFresh:</strong> Food assistance — BenefitsCal.com<br>'+
        '• <strong>CalWORKs:</strong> For families with children<br><br>'+
        'See our <a href="benefits.html">Benefits Guide</a> for full details.';}
    },
    {
      patterns: ['ssn','social security','social security number','identification','id card'],
      answer: function(){return '<strong>🪪 Getting your Social Security Number:</strong><br>'+
        '1. Most refugees receive an SSN automatically through the ORR process<br>'+
        '2. If not, visit SSA: 7060 Mission Gorge Rd, San Diego<br>'+
        '3. Bring: I-94, refugee travel document, and passport or birth certificate<br>'+
        '4. Call SSA: <a href="tel:18007721213">1-800-772-1213</a> (multilingual)<br><br>'+
        'See our <a href="first-steps.html">First Steps guide</a> for the full timeline.';}
    },
    {
      patterns: ['driver','license','drive','car','dmv','ab60'],
      answer: function(){return '<strong>🚗 Getting a California Driver\'s License:</strong><br>'+
        '• California AB 60 allows driver\'s licenses regardless of immigration status<br>'+
        '• San Diego DMV: 3960 Normal St — call (800) 777-0133 for appointment<br>'+
        '• Pass written test + driving test<br><br>'+
        'See our <a href="first-steps.html">First Steps page</a> for more.';}
    },
    {
      patterns: ['bank','banking','account','financial','credit','debit'],
      answer: function(){return '<strong>🏦 Banking without an SSN:</strong><br>'+
        '• Bank of America Opportunity Checking accepts ITIN or passport<br>'+
        '• Mission Federal Credit Union and California Coast CU are refugee-friendly<br>'+
        '• You can open an account with: Refugee Travel Document, I-94, or passport + proof of address<br><br>'+
        'See our <a href="resources.html#financial">Financial Resources</a> section.';}
    },
    {
      patterns: ['transport','bus','trolley','mts','get around','travel','train'],
      answer: function(){return '<strong>🚌 Getting around San Diego:</strong><br>'+
        '• <strong>MTS:</strong> Buses and trolleys throughout San Diego<br>'+
        '• <strong>Compass Card:</strong> Reloadable transit card — MTS store at 1255 Imperial Ave<br>'+
        '• <strong>Trip planning:</strong> Call 511 or use Google Maps<br><br>'+
        'See our <a href="resources.html#transportation">Transportation section</a>.';}
    },
    {
      patterns: ['clothing','clothes','furniture','household','free items'],
      answer: function(){return '<strong>👕 Free clothing & household items:</strong><br>'+
        '• <strong>IRC San Diego:</strong> New Roots program — <a href="tel:6196417510">(619) 641-7510</a><br>'+
        '• <strong>House of Refuge:</strong> (619) 234-7948 — furniture and household goods<br>'+
        '• <strong>211 San Diego:</strong> Call <a href="tel:211">2-1-1</a> for clothing banks near you';}
    },
    {
      patterns: ['resettlement','arrive','arrival','just arrived','first steps','what do i do','where do i start','just got here'],
      answer: function(){return '<strong>🌟 Welcome! Your first steps:</strong><br>'+
        '1. <strong>Days 1–7:</strong> Contact your resettlement agency, get housing/food secured<br>'+
        '2. <strong>Days 1–30:</strong> Apply for SSN, Medi-Cal, CalFresh<br>'+
        '3. <strong>Days 30–90:</strong> Enroll in ESL, start employment, get California ID<br>'+
        '4. <strong>After 90 days:</strong> Long-term planning, green card at year 1<br><br>'+
        'See our complete <a href="first-steps.html">90-Day First Steps guide</a>.';}
    },
    {
      patterns: ['community','meet people','events','organization','volunteer','cultural'],
      answer: function(){return '<strong>🤝 Community & social resources:</strong><br>'+
        '• <strong>IRC San Diego:</strong> Cultural orientation, community events<br>'+
        '• <strong>Alliance for African Assistance:</strong> (619) 265-7683<br>'+
        '• <strong>JFS/HIAS San Diego:</strong> (858) 872-0101<br>'+
        '• <strong>Catholic Charities:</strong> (619) 287-9454<br><br>'+
        'Visit our <a href="community.html">Community page</a> for a full list.';}
    },
    {
      patterns: ['child','children','baby','pregnant','family','parent','kids'],
      answer: function(){return '<strong>👨‍👩‍👧 Resources for families with children:</strong><br>'+
        '• Enroll kids in school immediately — no documentation required by law<br>'+
        '• <strong>WIC program:</strong> Free food/nutrition for pregnant women and children under 5<br>'+
        '• <strong>CalWORKs:</strong> Cash assistance for families with children<br>'+
        '• <strong>Rady Children\'s Hospital:</strong> (858) 576-1700 — has interpreter services';}
    },
    {
      patterns: ['language','translate','interpreter','my language','translate page'],
      answer: function(){return '<strong>🌐 Language support:</strong><br>'+
        'This website supports 100+ languages through Google Translate. Click the <strong>🌐 Language</strong> button in the navigation bar to switch.<br><br>'+
        '• IRC San Diego provides interpreters: <a href="tel:6196417510">(619) 641-7510</a><br>'+
        '• Language Line: Available for phone calls — ask any service provider';}
    },
    {
      patterns: ['about','who are you','what is this','this website','purpose'],
      answer: function(){return '<strong>ℹ️ About The Refuge:</strong><br>'+
        'The Refuge is a free resource hub for refugees in San Diego, built by Armaghan Zarak, a Pashtun American student who tutors refugee families.<br><br>'+
        '<strong>Everything here is free.</strong> We do not charge for any information or services listed.';}
    },
  ];

  var CHIPS = ['Emergency help','Find housing','Medical care','Legal aid','ESL classes','Get a job','Benefits'];

  function matchQuery(query) {
    var q = query.toLowerCase();
    for (var i=0; i<KB.length; i++) {
      if (KB[i].patterns.some(function(p){ return q.indexOf(p) !== -1; })) return KB[i].answer();
    }
    return 'I didn\'t find a specific answer, but here are your best options:<br><br>'+
      '• <strong>IRC San Diego:</strong> <a href="tel:6196417510">(619) 641-7510</a><br>'+
      '• <strong>211 San Diego:</strong> Call <a href="tel:211">2-1-1</a> — 24/7 help line<br>'+
      '• Browse our <a href="resources.html">full Resources page</a><br>'+
      '• See our <a href="first-steps.html">First Steps guide</a><br><br>'+
      'You can also ask me about: housing, healthcare, legal aid, food, employment, ESL, benefits, banking, or transportation.';
  }

  function appendMsg(container, text, role) {
    var div = document.createElement('div');
    div.className = 'chat-msg chat-msg--' + role;
    if (role === 'bot') {
      div.innerHTML = '<div class="chat-msg__avatar">AI</div><div class="chat-msg__bubble">'+text+'</div>';
    } else {
      div.innerHTML = '<div class="chat-msg__bubble">'+text+'</div>';
    }
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
  }

  function showTyping(container) {
    var w = document.createElement('div');
    w.className = 'chat-msg chat-msg--bot';
    w.id = 'chat-typing';
    w.innerHTML = '<div class="chat-msg__avatar">AI</div><div class="chat-typing"><span></span><span></span><span></span></div>';
    container.appendChild(w);
    container.scrollTop = container.scrollHeight;
    return w;
  }

  function init() {
    var trigger = document.createElement('button');
    trigger.className = 'chat-trigger';
    trigger.id = 'chat-trigger';
    trigger.setAttribute('aria-label','Open help chatbot');
    trigger.setAttribute('aria-expanded','false');
    trigger.innerHTML =
      '<div class="chat-trigger__icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>'+
      '<span class="chat-trigger__label">Get Help</span>'+
      '<div class="chat-trigger__dot"></div>';
    document.body.appendChild(trigger);

    var panel = document.createElement('div');
    panel.className = 'chat-panel';
    panel.id = 'chat-panel';
    panel.hidden = true;
    panel.setAttribute('role','complementary');
    panel.setAttribute('aria-label','Help assistant');
    panel.innerHTML =
      '<div class="chat-header">'+
        '<div class="chat-header__info">'+
          '<div class="chat-header__avatar"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>'+
          '<div>'+
            '<div class="chat-header__name">Refuge Helper</div>'+
            '<div class="chat-header__status">Online — ready to help</div>'+
          '</div>'+
        '</div>'+
        '<button class="chat-close" id="chat-close" aria-label="Close chat">✕</button>'+
      '</div>'+
      '<div class="chat-messages" id="chat-messages"></div>'+
      '<div class="chat-chips" id="chat-chips"></div>'+
      '<div class="chat-input-area">'+
        '<input class="chat-input" id="chat-input" type="text" placeholder="Ask about housing, healthcare, legal aid…" aria-label="Type your question">'+
        '<button class="chat-send" id="chat-send" aria-label="Send message"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>'+
      '</div>';
    document.body.appendChild(panel);

    var messages = document.getElementById('chat-messages');
    var input    = document.getElementById('chat-input');
    var chips    = document.getElementById('chat-chips');

    appendMsg(messages, '👋 Hello! I\'m here to help you find resources in San Diego.<br><br>Ask me about <strong>housing, healthcare, legal aid, food, employment, ESL classes</strong>, or anything else you need. What can I help you with today?', 'bot');

    CHIPS.forEach(function(text) {
      var btn = document.createElement('button');
      btn.className = 'chat-chip';
      btn.textContent = text;
      btn.addEventListener('click', function(){ sendMessage(text); });
      chips.appendChild(btn);
    });

    var panelOpen = false;

    function sendMessage(text) {
      if (!text.trim()) return;
      appendMsg(messages, text, 'user');
      input.value = '';
      var typing = showTyping(messages);
      setTimeout(function(){
        typing.remove();
        appendMsg(messages, matchQuery(text), 'bot');
      }, 700 + Math.random() * 400);
    }

    trigger.addEventListener('click', function(){
      panelOpen = !panelOpen;
      panel.hidden = !panelOpen;
      trigger.setAttribute('aria-expanded', String(panelOpen));
      if (panelOpen) input.focus();
    });

    document.getElementById('chat-close').addEventListener('click', function(){
      panelOpen = false;
      panel.hidden = true;
      trigger.setAttribute('aria-expanded','false');
    });

    input.addEventListener('keydown', function(e){ if(e.key==='Enter') sendMessage(input.value); });
    document.getElementById('chat-send').addEventListener('click', function(){ sendMessage(input.value); });
  }

  return { init: init };
})();

/* ─── 9. Boot ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  Translate.init();
  Chatbot.init();
});
