void (async function () {
  // যদি আগে থেকেই UI লোড হয়ে থাকে, তবে আবার লোড করবে না
  if (document.getElementById("shortner-aincrad-root")) return;

  // আপনার পুরনো কোডের কুকি সেট করার অংশ
  if (document.cookie.indexOf("__session=") === -1) {
    const B = "eyJnZXRrZXlfaW5pdGlhdGVkX2F0IjoxNzg5Mzc2Mzc1NDQxLCJnZXRrZXlfY29tcGxldGVkIjpmYWxzZSwiYmFubmVkIjpmYWxzZX0%3D.m27QGejM%2Fe1p1g6eksDF6XfcPxFbVEsWWDmUbQFjxaM";
    document.cookie = "__session=" + B + "; path=/; max-age=86400; SameSite=Lax";
  }

  // নতুন UI এর CSS ইনজেক্ট করা
  const style = document.createElement("style");
  style.id = "aincrad_styles";
  style.textContent = `
    #shortner-aincrad-root{position:fixed;inset:0;z-index:2147483647;overflow:auto;background:linear-gradient(135deg,#eafcff 0%,#f7fbff 45%,#eef0ff 100%)}
    *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
    html,body{margin:0;width:100%;height:100%;overflow:hidden;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#17324d}
    body{background:transparent}
    #water{display:none}
    .blob{display:none;position:fixed;border-radius:50%;filter:blur(34px);opacity:.42;pointer-events:none;z-index:1}
    .b1{width:230px;height:230px;background:#59e9ff;top:-80px;left:-60px}
    .b2{width:260px;height:260px;background:#8e83ff;right:-90px;bottom:-80px}
    .b3{width:170px;height:170px;background:#62dfff;left:45%;top:20%;opacity:.22}
    .page{position:absolute;inset:0;z-index:2;display:grid;place-items:center;padding:22px;opacity:0;visibility:hidden;transform:translateY(10px) scale(.985);transition:opacity .18s ease,transform .18s ease,visibility .18s}
    .page.active{opacity:1;visibility:visible;transform:none}
    .booting .page{opacity:0!important;visibility:hidden!important}
    .card{width:min(430px,100%);padding:30px 24px 22px;border:1px solid rgba(255,255,255,.8);border-radius:30px;background:rgba(255,255,255,.42);box-shadow:0 24px 70px rgba(63,119,155,.18),inset 0 1px 0 rgba(255,255,255,.95);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);text-align:center;position:relative;overflow:hidden}
    .card:before{content:"";position:absolute;left:-30%;top:-65%;width:160%;height:90%;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.5) 48%,transparent 63%);transform:rotate(-8deg);pointer-events:none}
    .logo{width:74px;height:74px;margin:0 auto 13px;filter:drop-shadow(0 10px 15px rgba(36,171,214,.22))}
    h1{font-size:30px;letter-spacing:5px;margin:0;font-weight:800}
    .sub{margin:6px 0 19px;font-size:11px;letter-spacing:3px;color:#5f7d91;font-weight:700}
    .status{display:inline-flex;align-items:center;gap:7px;padding:7px 11px;border-radius:99px;background:rgba(255,255,255,.55);font-size:10px;font-weight:800;letter-spacing:1.4px;color:#477086;margin-bottom:19px}
    .dot{width:7px;height:7px;border-radius:50%;background:#19d69b;box-shadow:0 0 0 5px rgba(25,214,155,.12)}
    .field{width:100%;height:54px;border:1px solid rgba(117,164,185,.25);border-radius:17px;background:rgba(255,255,255,.57);outline:none;padding:0 16px;text-align:center;font-size:16px;letter-spacing:2px;color:#17324d;box-shadow:inset 0 1px 2px rgba(40,100,130,.06)}
    .field:focus{border-color:rgba(46,197,231,.65);box-shadow:0 0 0 4px rgba(52,207,235,.1)}
    button{width:100%;height:52px;border:0;border-radius:17px;margin-top:12px;color:white;font-weight:800;letter-spacing:1.7px;font-size:12px;cursor:pointer;box-shadow:0 13px 27px rgba(62,128,184,.22);position:relative;overflow:hidden;transition:transform .12s ease}
    .primary{background:linear-gradient(100deg,#18cfe8,#477cf6,#895cf4);background-size:180% 100%}
    @keyframes grad{to{background-position:180% 0}}
    .primary.animating{animation:grad .55s ease-in-out 1}
    .secondary{background:rgba(255,255,255,.58);color:#46728b;border:1px solid rgba(104,160,185,.2);box-shadow:none}
    button:active{transform:scale(.985)}
    .hint{font-size:10px;color:#7892a3;margin:12px 0 0}
    .footer{font-size:9px;letter-spacing:2px;color:#7d98a8;margin-top:20px}
    .notice-wrap{position:fixed;right:14px;top:14px;z-index:20;pointer-events:none}
    .notice{width:min(310px,calc(100vw - 28px));padding:14px 16px;border-radius:18px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.9);box-shadow:0 18px 45px rgba(46,101,132,.2);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);transform:translateY(-24px);opacity:0;transition:transform .16s ease,opacity .16s ease;display:flex;align-items:center;gap:11px}
    .notice.show{transform:translateY(0);opacity:1}
    .notice.hide-down{transform:translateY(38px);opacity:0}
    .nicon{width:31px;height:31px;border-radius:11px;display:grid;place-items:center;background:linear-gradient(135deg,#18d9e8,#6672f6);color:#fff;font-weight:900}
    .ntitle{font-size:12px;font-weight:900;letter-spacing:1.3px}
    .ntext{font-size:10px;color:#6b8596;margin-top:2px}
    .time-inputs{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;margin-top:10px}
    .time-box{width:42%;position:relative}
    .time-box .field{width:100%;padding:0 10px;font-size:20px;font-weight:800;letter-spacing:1px}
    .time-box span{display:block;margin-top:6px;font-size:8px;font-weight:800;letter-spacing:1.5px;color:#7893a2}
    .time-separator{font-size:28px;font-weight:800;color:#66879a;margin-top:-18px}
    .time-box input::-webkit-outer-spin-button,.time-box input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
    .time-box input[type=number]{appearance:textfield;-moz-appearance:textfield}
    .count-ring{width:190px;height:190px;margin:18px auto;border-radius:50%;padding:8px;overflow:hidden;background:conic-gradient(#18cfe8 0%,#537bf6 0%,rgba(117,164,185,.18) 0%);box-shadow:0 10px 28px rgba(62,128,184,.18);display:grid;place-items:center;transition:background .12s linear}.count-ring-inner{width:100%;height:100%;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.58);border:1px solid rgba(255,255,255,.82);box-shadow:inset 0 2px 8px rgba(40,100,130,.08)}.count{font-size:0;width:0;height:0;overflow:hidden;font-weight:850;letter-spacing:3px;line-height:1;margin:18px 0;color:#23425b;text-shadow:0 7px 20px rgba(68,132,164,.13)}
    .small-label{font-size:10px;letter-spacing:2px;color:#7893a2;font-weight:800}
    .progress-shell{margin-top:30px;width:100%;height:38px;border-radius:99px;padding:5px;background:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.82);box-shadow:inset 0 2px 7px rgba(40,100,130,.08)}
    .progress{height:100%;width:0%;border-radius:99px;position:relative;overflow:hidden;background:linear-gradient(90deg,#1bd6e9,#5879f5,#875df3);transition:width .12s linear}
    .progress:after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent,rgba(255,255,255,.55),transparent);animation:shine 1.2s linear infinite}
    @keyframes shine{from{transform:translateX(-100%)}to{transform:translateX(100%)}}
    .progress-text{margin-top:9px;font-size:10px;font-weight:900;letter-spacing:1.8px;color:#5e7d90}
    .ripple{position:fixed;z-index:15;width:12px;height:12px;border-radius:50%;pointer-events:none;border:2px solid rgba(55,204,232,.62);transform:translate(-50%,-50%) scale(1);animation:ripple .5s ease-out forwards}
    .drop{position:fixed;z-index:15;width:5px;height:5px;border-radius:50%;background:rgba(64,195,230,.6);pointer-events:none;animation:drop .45s ease-out forwards}
    @keyframes ripple{to{opacity:0;transform:translate(-50%,-50%) scale(7)}}
    @keyframes drop{to{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.2)}}
    .process-card{min-height:520px;display:flex;flex-direction:column;align-items:center;justify-content:center}
    .loader-wrap{width:170px;height:170px;position:relative;display:grid;place-items:center;margin:12px auto 20px}
    .multi-loader{width:122px;height:122px;border-radius:50%;border:9px solid transparent;border-top-color:#18d9e8;border-right-color:#537bf6;border-bottom-color:#895cf4;border-left-color:#39d8b2;animation:spinLoader 1.05s linear infinite;filter:drop-shadow(0 0 13px rgba(73,126,246,.28))}
    .multi-loader:before{content:"";position:absolute;inset:28px;border-radius:50%;border:7px solid transparent;border-top-color:#895cf4;border-left-color:#18d9e8;animation:spinLoaderReverse .72s linear infinite}
    .loader-glow{position:absolute;width:145px;height:145px;border-radius:50%;background:radial-gradient(circle,rgba(75,211,235,.10),transparent 68%);animation:pulseLoader 1.5s ease-in-out infinite}
    @keyframes spinLoader{to{transform:rotate(360deg)}} @keyframes spinLoaderReverse{to{transform:rotate(-360deg)}} @keyframes pulseLoader{50%{transform:scale(1.12);opacity:.55}}
    .process-title{font-size:15px;font-weight:900;letter-spacing:3px;color:#274b65}
    .process-message{margin-top:6px;color:#7892a3;font-size:10px;letter-spacing:.8px;min-height:16px}
    .logs{width:100%;max-height:105px;overflow:hidden;margin-top:16px;padding:9px 12px;border-radius:15px;background:rgba(255,255,255,.38);border:1px solid rgba(117,164,185,.18);text-align:left;font:10px/1.55 "Courier New",monospace;color:#668294}
    .log-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:0;transform:translateY(5px);animation:logIn .18s ease forwards}
    .log-line.ok{color:#159d78}.log-line.err{color:#d84e6a}.log-line.info{color:#58798e}
    @keyframes logIn{to{opacity:1;transform:none}}
    .process-error{display:none;width:100%;margin-top:12px;padding:10px 12px;border-radius:13px;background:rgba(255,90,110,.08);border:1px solid rgba(220,75,100,.22);color:#c64d67;font-size:10px;line-height:1.45;text-align:left}
    .key-result-card{padding-top:27px}
    .key-section{width:100%;padding:14px 16px;margin-top:2px;border-radius:17px 17px 0 0;background:rgba(255,255,255,.50);border:1px solid rgba(117,164,185,.25);border-bottom:0}
    .key-section-title{font-size:11px;font-weight:900;letter-spacing:3px;color:#5f7d91}
    .key-value-box{width:100%;min-height:78px;padding:13px 15px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(117,164,185,.25);border-radius:0 0 17px 17px;background:rgba(255,255,255,.57);box-shadow:inset 0 1px 2px rgba(40,100,130,.06)}
    .api-key{width:100%;min-height:28px;display:flex;align-items:center;justify-content:center;color:#17324d;font:800 clamp(16px,4.7vw,22px)/1.25 "Courier New",monospace;letter-spacing:1px;word-break:break-all;text-align:center}
    .key-expire{margin:12px 0 2px;color:#7892a3;font:10px "Courier New",monospace}
    .touch-ripple{position:fixed;width:18px;height:18px;border-radius:50%;border:2px solid rgba(71,124,246,.65);background:radial-gradient(circle,rgba(23,217,235,.22),rgba(83,123,246,.08) 45%,transparent 70%);transform:translate(-50%,-50%) scale(.35);pointer-events:none;z-index:99999;animation:touchRipple .58s cubic-bezier(.18,.72,.24,1) forwards;}
    .touch-ripple:after{content:"";position:absolute;inset:-9px;border-radius:50%;border:1px solid rgba(23,217,235,.34);}
    @keyframes touchRipple{0%{opacity:.9;transform:translate(-50%,-50%) scale(.35)}100%{opacity:0;transform:translate(-50%,-50%) scale(4.4)}}
    @media(max-width:480px){.card{padding:27px 19px 20px;border-radius:27px}h1{font-size:27px}.notice-wrap{top:10px;right:10px}}
    .key-card{width:min(430px,100%);padding:30px 24px 22px;border:1px solid rgba(255,255,255,.8);border-radius:30px;background:rgba(255,255,255,.42);box-shadow:0 24px 70px rgba(63,119,155,.18),inset 0 1px 0 rgba(255,255,255,.95);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);text-align:center;position:relative;overflow:hidden;}
    .key-card:before{content:"";position:absolute;left:-30%;top:-65%;width:160%;height:90%;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.5) 48%,transparent 63%);transform:rotate(-8deg);pointer-events:none;}
    .key-inner{position:relative;padding:0;border:0;border-radius:0;background:transparent;box-shadow:none;overflow:visible;}
    .key-logo{width:74px;height:74px;margin:0 auto 13px;display:block;filter:drop-shadow(0 10px 15px rgba(36,171,214,.22));}
    .key-main-title{font-size:30px;letter-spacing:5px;margin:0;font-weight:800;color:#17324d;}
    .key-sub{margin:6px 0 19px;font-size:11px;letter-spacing:3px;color:#5f7d91;font-weight:700;}
    .key-status{display:inline-flex;align-items:center;gap:7px;padding:7px 11px;border-radius:99px;background:rgba(255,255,255,.55);font-size:10px;font-weight:800;letter-spacing:1.4px;color:#477086;margin-bottom:19px;}
    .key-status-dot{width:7px;height:7px;border-radius:50%;background:#19d69b;box-shadow:0 0 0 5px rgba(25,214,155,.12);}
    .key-box{width:100%;min-height:108px;padding:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px solid rgba(117,164,185,.25);border-radius:17px;background:rgba(255,255,255,.57);box-shadow:inset 0 1px 2px rgba(40,100,130,.06);overflow:hidden;}
    .key-label{margin-bottom:9px;color:#5f7d91;font-size:10px;font-weight:800;letter-spacing:2.2px;}
    .key-expire{margin:14px 0 3px;text-align:center;color:#7892a3;font-size:10px;letter-spacing:.3px;}
    .key-copy{background:linear-gradient(100deg,#18cfe8,#477cf6,#895cf4);color:#fff;border:0;box-shadow:0 13px 27px rgba(62,128,184,.22);}
    .key-back{background:rgba(255,255,255,.58);color:#46728b;border:1px solid rgba(104,160,185,.2);box-shadow:none;}
    @media(max-width:480px){
      .key-card{padding:27px 19px 20px;border-radius:27px;}
      .key-main-title{font-size:27px}
      .key-card{width:94vw;border-radius:38px;padding:10px}
      .key-inner{padding:19px 15px 20px;border-radius:29px}
      .key-title{font-size:22px;letter-spacing:3.5px;gap:12px}
      .key-title i{width:10px;height:10px}
      .key-box{min-height:140px;padding:24px 9px 20px;border-radius:22px}
      .key-label{font-size:16px;letter-spacing:4px;margin-bottom:22px}
      .key-expire{margin:27px 0 24px}
      .key-copy,.key-dismiss{height:68px;font-size:19px;border-radius:25px}
    }
  `;
  document.head.appendChild(style);

  // নতুন UI এর HTML ইনজেক্ট করা
  const root = document.createElement("div");
  root.id = "shortner-aincrad-root";
  root.classList.add("booting");
  root.innerHTML = `
    <canvas id="water"></canvas>
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>

    <div class="notice-wrap">
      <div id="notice" class="notice">
        <div id="nicon" class="nicon">✓</div>
        <div>
          <div id="ntitle" class="ntitle">KEY VERIFIED</div>
          <div id="ntext" class="ntext">Access confirmed</div>
        </div>
      </div>
    </div>

    <section id="accessPage" class="page">
      <div class="card">
        <svg class="logo" viewBox="0 0 100 100">
          <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#17d9eb"/><stop offset=".55" stop-color="#537bf6"/><stop offset="1" stop-color="#8a5cf3"/></linearGradient></defs>
          <path fill="url(#lg)" d="M50 5C50 5 17 42 17 63C17 83 32 95 50 95S83 83 83 63C83 42 50 5 50 5Z"/>
          <path fill="none" stroke="white" stroke-width="5" stroke-linecap="round" d="M27 66c8-7 16 7 24 0s16-7 22 0"/>
        </svg>
        <h1>SHORTNER</h1>
        <div class="sub">SECURE ACCESS</div>
        <div class="status"><span class="dot"></span>ONLINE SYSTEM</div>
        <input id="license" class="field" autocomplete="off" spellcheck="false" placeholder="ENTER LICENSE KEY">
        <button id="verify" class="primary">VERIFY ACCESS</button>
        <button id="community" class="secondary">JOIN COMMUNITY</button>
        <div class="hint">Secure liquid gateway • Ready</div>
        <div class="footer">SHORTNER TEAM • BUILD 3.1.0</div>
      </div>
    </section>

    <section id="processPage" class="page">
      <div class="card process-card">
        <svg class="logo" viewBox="0 0 100 100">
          <defs><linearGradient id="processLogo" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="#17d9eb"/><stop offset=".55" stop-color="#537bf6"/><stop offset="1" stop-color="#8a5cf3"/>
          </linearGradient></defs>
          <path fill="url(#processLogo)" d="M50 5C50 5 17 42 17 63C17 83 32 95 50 95S83 83 83 63C83 42 50 5 50 5Z"/>
          <path fill="none" stroke="white" stroke-width="5" stroke-linecap="round" d="M27 66c8-7 16 7 24 0s16-7 22 0"/>
        </svg>
        <h1>SHORTNER</h1>
        <div class="sub">LIQUID ACCESS</div>
        <div class="status"><span class="dot"></span>PROCESSING</div>
        <div class="loader-wrap"><div class="multi-loader"></div><div class="loader-glow"></div></div>
        <div id="processTitle" class="process-title">CONNECTING</div>
        <div id="processMessage" class="process-message">Waiting for API response...</div>
        <div id="logs" class="logs"></div>
        <div id="processError" class="process-error"></div>
        <div class="footer">SHORTNER TEAM • BUILD 3.1.0</div>
      </div>
    </section>

    <section id="keyPage" class="page">
      <div class="card key-result-card">
        <svg class="logo" viewBox="0 0 100 100">
          <defs><linearGradient id="keyResultLogo" x1="0" y1="0" x2="1" y2="1">
            <stop stop-color="#17d9eb"/><stop offset=".55" stop-color="#537bf6"/><stop offset="1" stop-color="#8a5cf3"/>
          </linearGradient></defs>
          <path fill="url(#keyResultLogo)" d="M50 5C50 5 17 42 17 63C17 83 32 95 50 95S83 83 83 63C83 42 50 5 50 5Z"/>
          <path fill="none" stroke="white" stroke-width="5" stroke-linecap="round" d="M27 66c8-7 16 7 24 0s16-7 22 0"/>
        </svg>
        <h1>SHORTNER</h1>
        <div class="sub">LIQUID ACCESS</div>
        <div class="status"><span class="dot"></span>KEY READY</div>
        <div class="key-section"><div class="key-section-title">ACCESS KEY</div></div>
        <div class="key-value-box"><div id="apiKey" class="api-key"></div></div>
        <div class="key-expire">Expires at 24h from now</div>
        <button id="copyKey" class="primary">COPY KEY</button>
        <button id="backKey" class="secondary">BACK</button>
        <div class="footer">SHORTNER TEAM • BUILD 3.1.0</div>
      </div>
    </section>
  `;
  document.body.appendChild(root);

  // --------------------------------------------------------------------------
  // নিচের অংশে সমস্ত লজিক, এনিমেশন, লগইন এবং আসল API ফেচিং দেওয়া হলো
  // --------------------------------------------------------------------------

  const LICENSE_API_URL = "https://licensedevices.akhildotto338.workers.dev/api/trpc/license.validate";
  const SCRIPT_NAME = "AINCRAD";
  const DEVICE_STORAGE_KEY = "aincrad_device_id";
  const SAVED_LICENSE_KEY = "saved_license_key";
  const SUPPORTED_DOMAINS = ["tarviral.com", "rodaemotor.com", "donpviral.xyz"];
  
  const canvas = document.getElementById("water");
  const ctx = canvas.getContext("2d", {alpha:true});
  let W=0,H=0,dpr=1;
  function resize(){
    dpr=Math.min(devicePixelRatio||1,1.5);
    W=innerWidth; H=innerHeight;
    canvas.width=W*dpr; canvas.height=H*dpr;
    canvas.style.width=W+"px"; canvas.style.height=H+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  addEventListener("resize",resize,{passive:true});
  resize();
  let t=0;
  function drawWater(){
    t+=0.012;
    ctx.clearRect(0,0,W,H);
    ctx.lineWidth=1;
    ctx.strokeStyle="rgba(55,190,220,.10)";
    const gap=48;
    for(let y=-gap;y<H+gap;y+=gap){
      ctx.beginPath();
      for(let x=-20;x<=W+20;x+=20){
        const yy=y+Math.sin(x*.012+t+y*.018)*4;
        if(x===-20)ctx.moveTo(x,yy);else ctx.lineTo(x,yy);
      }
      ctx.stroke();
    }
    requestAnimationFrame(drawWater);
  }
  drawWater();
  
  const notice=document.getElementById("notice");
  const ntitle=document.getElementById("ntitle");
  const ntext=document.getElementById("ntext");
  const nicon=document.getElementById("nicon");
  let noticeTimer;
  function showNotice(title,text,icon="✓",ms=900){
    clearTimeout(noticeTimer);
    notice.classList.remove("hide-down");
    ntitle.textContent=title;
    ntext.textContent=text;
    nicon.textContent=icon;
    notice.classList.add("show");
    noticeTimer=setTimeout(()=>{
      notice.classList.add("hide-down");
      setTimeout(()=>notice.classList.remove("show","hide-down"),170);
    },ms);
  }
  function page(id){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    requestAnimationFrame(()=>document.getElementById(id).classList.add("active"));
  }
  
  function getDeviceId(){
    let id=localStorage.getItem(DEVICE_STORAGE_KEY);
    if(!id){
      const seed=[screen.width+"x"+screen.height,screen.colorDepth,Intl.DateTimeFormat().resolvedOptions().timeZone,navigator.language,navigator.userAgent,navigator.hardwareConcurrency||"na",Date.now(),Math.random()].join("###");
      id="WEB_"+Array.from(new TextEncoder().encode(seed)).map(b=>b.toString(16).padStart(2,"0")).join("").slice(0,64);
      localStorage.setItem(DEVICE_STORAGE_KEY,id);
    }
    return id;
  }
  
  async function verifyLicense(licenseKey){
    try{
      const response=await fetch(LICENSE_API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({licenseKey,hwid:getDeviceId(),scriptName:SCRIPT_NAME})});
      const responseJson=await response.json();
      const data=responseJson?.result?.data;
      if(!data)return {allowed:false,message:"Invalid server response"};
      if(data.allowed)return {allowed:true,data};
      return {allowed:false,reason:data.reason,message:data.message||"License access denied"};
    }catch(error){
      return {allowed:false,message:"Network error: "+(error.message||"Unable to connect")};
    }
  }
  
  function targetSequence(){
    page("processPage");
    startApiProcessing();
  }

  document.getElementById("verify").addEventListener("click",async()=>{
    const btn=document.getElementById("verify");
    const key=document.getElementById("license").value.trim();
    btn.classList.remove("animating");
    void btn.offsetWidth;
    btn.classList.add("animating");
    setTimeout(()=>btn.classList.remove("animating"),600);
    if(!key){showNotice("ENTER LICENSE","Please enter a key","!",700);return;}
    btn.disabled=true;
    btn.textContent="VERIFYING...";
    const result=await verifyLicense(key);
    if(result.allowed){
      localStorage.setItem(SAVED_LICENSE_KEY,key);
      btn.textContent="VERIFIED";
      showNotice("KEY VERIFIED",result.data?.message||"Access confirmed","✓",800);
      setTimeout(()=>{
        btn.disabled=false;
        btn.textContent="VERIFY ACCESS";
        targetSequence();
      },850);
    }else{
      const reason=result.reason?"Reason: "+result.reason:"";
      showNotice("ACCESS DENIED",(result.message||"License validation failed")+(reason?" • "+reason:""),"!",2400);
      btn.disabled=false;
      btn.textContent="VERIFY ACCESS";
    }
  });
  document.getElementById("license").addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("verify").click();});
  document.getElementById("community").addEventListener("click",()=>{location.href="https://t.me/+Qjrl3DUTGVU2MWZl";});
  
  /* KEY PAGE ACTIONS */
  document.getElementById("copyKey").addEventListener("click",async()=>{
    const value=document.getElementById("apiKey").textContent.trim();
    if(!value){
      showNotice("KEY NOT READY","The API did not return a key","!",1000);
      return;
    }
    try{
      await navigator.clipboard.writeText(value);
      showNotice("KEY COPIED","Access key copied","✓",1000);
    }catch(error){
      showNotice("COPY FAILED","Clipboard access was blocked","!",1200);
    }
  });

  const processLog=document.getElementById("logs");
  const processTitle=document.getElementById("processTitle");
  const processMessage=document.getElementById("processMessage");
  const processError=document.getElementById("processError");

  function addLog(message,type="info"){
    const line=document.createElement("div");
    line.className="log-line "+type;
    line.textContent="// "+message;
    processLog.appendChild(line);
    processLog.scrollTop=processLog.scrollHeight;
  }

  function clearProcess(){
    processLog.innerHTML="";
    processError.style.display="none";
    processError.textContent="";
    processTitle.textContent="CONNECTING";
    processMessage.textContent="Waiting for API response...";
  }

  function showProcessError(reason){
    processTitle.textContent="PROCESS FAILED";
    processMessage.textContent="API returned an error";
    processError.style.display="block";
    processError.textContent="ERROR: "+reason;
    addLog("ERROR: "+reason,"err");
  }

  // --- মেইন ফেচিং লজিক যা শুধুমাত্র লগইন হওয়ার পরেই রান করবে ---
  async function startApiProcessing(){
    clearProcess();
    addLog("Starting API request...");
    processTitle.textContent="CONNECTING";
    processMessage.textContent="Contacting API...";

    // ফেক প্রোসেসিং (১.৫ সেকেন্ড অপেক্ষা)
    await new Promise(resolve => setTimeout(resolve, 1500));

    try{
      addLog("Initiating secure connection...");
      
      // আপনার পুরোনো কোডের API কল
      const a = await fetch("https://zxi-file-loader.ah4734536.workers.dev?file=zxi.txt&key=Hey&user=2");
      const g = await a.text();
      
      addLog("Target URL resolved, establishing link...");
      const G = await fetch(g.trim());
      const o = await G.text();
      
      addLog("Parsing response payload...");
      const j = o.match(/font-mono[^>]*>([\s\S]*?)<\/code/i);
      const R = j ? j[1].trim() : null;

      if(R) {
        addLog("API response received.", "ok");
        processTitle.textContent = "ACCESS READY";
        processMessage.textContent = "Preparing access key...";
        addLog("Preparing key display...", "ok");

        document.getElementById("apiKey").textContent = R;

        await new Promise(resolve=>setTimeout(resolve,450));
        page("keyPage");
        showNotice("ACCESS READY","Key page loaded","✓",900);
      } else {
        // এরর ম্যাপিং (আপনার পুরোনো কোড অনুযায়ী)
        const F = o.indexOf("anomaly") !== -1;
        const l = o.indexOf("no_session") !== -1;
        const X = o.indexOf("Just a moment") !== -1;
        
        const U = F ? "SECURITY ANOMALY" : l ? "SESSION TERMINATED" : X ? "CHALLENGE REQUIRED" : "TOKEN UNRESOLVED";
        showProcessError(U);
      }
    }catch(error){
      showProcessError(error?.message || "Gateway Unreachable");
    }
  }

  document.getElementById("backKey").addEventListener("click",()=>{
    page("accessPage");
    document.getElementById("license").focus();
  });

  // Touch Feedback Effects (আপনার দেওয়া কোড অনুযায়ী)
  let lastTouch = 0;
  function bubbleTouch(x, y){
    const now = performance.now();
    if(now - lastTouch < 35) return;
    lastTouch = now;

    const count = 22;
    for(let i = 0; i < count; i++){
      const bubble = document.createElement("span");
      bubble.style.position = "fixed";
      bubble.style.left = x + "px";
      bubble.style.top = y + "px";
      bubble.style.width = (3 + Math.random() * 7) + "px";
      bubble.style.height = bubble.style.width;
      bubble.style.borderRadius = "50%";
      bubble.style.pointerEvents = "none";
      bubble.style.zIndex = "2147483648";
      bubble.style.background = "radial-gradient(circle at 30% 25%,rgba(255,255,255,.95),rgba(80,215,235,.48) 42%,rgba(80,125,245,.18))";
      bubble.style.border = "1px solid rgba(255,255,255,.65)";
      bubble.style.boxShadow = "0 0 5px rgba(55,200,230,.25),inset 0 0 3px rgba(255,255,255,.8)";

      const angle = Math.random() * Math.PI * 2;
      const distance = 35 + Math.random() * 85;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const duration = 650 + Math.random() * 500;

      bubble.animate([
        {transform:"translate(-50%,-50%) scale(.2)",opacity:0},
        {transform:"translate(-50%,-50%) scale(1)",opacity:.9,offset:.18},
        {transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.35)`,opacity:0}
      ], {duration,easing:"cubic-bezier(.16,.72,.22,1)",fill:"forwards"});

      document.body.appendChild(bubble);
      setTimeout(() => bubble.remove(), duration + 50);
    }

    const center = document.createElement("span");
    center.style.position = "fixed";
    center.style.left = x + "px";
    center.style.top = y + "px";
    center.style.width = "12px";
    center.style.height = "12px";
    center.style.borderRadius = "50%";
    center.style.pointerEvents = "none";
    center.style.zIndex = "2147483648";
    center.style.border = "1px solid rgba(70,205,230,.6)";
    center.style.boxShadow = "0 0 10px rgba(65,205,230,.25)";
    center.animate([
      {transform:"translate(-50%,-50%) scale(.2)",opacity:.8},
      {transform:"translate(-50%,-50%) scale(3)",opacity:0}
    ], {duration:500,easing:"ease-out",fill:"forwards"});
    document.body.appendChild(center);
    setTimeout(() => center.remove(), 550);
  }

  addEventListener("pointerdown", e => bubbleTouch(e.clientX, e.clientY), {passive:true});

  function createTouchRipple(x,y){
    const ripple=document.createElement("span");
    ripple.className="touch-ripple";
    ripple.style.left=x+"px";
    ripple.style.top=y+"px";
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend",()=>ripple.remove(),{once:true});
  }

  document.addEventListener("pointerdown",(e)=>{
    if(e.pointerType==="mouse" && e.button!==0) return;
    createTouchRipple(e.clientX,e.clientY);
  },{passive:true});

  // Startup auto-login: saved key থাকলে database-এ যাচাই করে valid হলে
  // login page না দেখিয়ে সরাসরি existing processing flow চালানো হবে।
  async function initializeSavedLicense(){
    const savedKey=localStorage.getItem(SAVED_LICENSE_KEY);
    if(!savedKey){
      root.classList.remove("booting");
      page("accessPage");
      return;
    }

    const result=await verifyLicense(savedKey);
    if(result.allowed){
      root.classList.remove("booting");
      targetSequence();
      return;
    }

    // Key invalid/expired হলে পরেরবার আর auto-login চেষ্টা করবে না।
    // সাময়িক network error হলে key রেখে দেওয়া হবে।
    const isNetworkError=result.message && result.message.startsWith("Network error:");
    if(!isNetworkError) localStorage.removeItem(SAVED_LICENSE_KEY);
    root.classList.remove("booting");
    page("accessPage");
    if(result.message){
      showNotice(isNetworkError ? "CONNECTION ERROR" : "KEY EXPIRED", isNetworkError ? "Please try again" : "Please enter your license key again", "!", 1800);
    }
  }

  initializeSavedLicense();

}());
