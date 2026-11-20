(()=>{
'use strict';
const $=s=>document.querySelector(s);
const KEY='ethossai_3layer_demo_v1';
const I={
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 book:'<path d="M2 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15a2 2 0 0 0-2-2H2z"/><path d="M22 5a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v15a2 2 0 0 1 2-2h8z"/>',
 head:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
 film:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 12h18M3 7.5h4M3 16.5h4M17 7.5h4M17 16.5h4"/>',
 user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
 check:'<path d="M20 6 9 17l-5-5"/>',
 share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
 flame:'<path d="M12 2c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z"/>',
 x:'<path d="M18 6 6 18M6 6l12 12"/>',
 back:'<path d="M15 18l-6-6 6-6"/>',
 next:'<path d="M9 18l6-6-6-6"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
 lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
 play:'<path d="M6 4l14 8-14 8z"/>',
 pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
 skipb:'<path d="M19 20 9 12l10-8zM5 19V5"/>',
 skipf:'<path d="M5 4l10 8-10 8zM19 5v14"/>',
 gauge:'<path d="M12 14l4-4"/><path d="M3.3 17a10 10 0 1 1 17.4 0"/>'
};
const ic=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true">${I[n]}</svg>`;
const icf=n=>ic(n,'f');
const backBtn=(cls='')=>`<button class="backb ${cls}" data-a="closeov" data-testid="back" aria-label="Back">${ic('back')}<span>Back</span></button>`;

/* ---------- content ---------- */
const TRAITS={
 kite:{name:'Own String',line:'You fly your own kite, not theirs.',tag:'READ · IDENTITY',img:'img/trait_raw1.webp'},
 well:{name:'Deep Digger',line:'You stay in one hole until water shows up.',tag:'LISTEN · FOCUS',img:'img/trait_raw2.webp'},
 listener:{name:'The Listener',line:'You ask before you guess.',tag:'WATCH · FOUNDERS',img:'img/ep/e1endB.webp'},
 pause:{name:'Pause Keeper',line:'You let wants cool off before they cost you.',tag:'WATCH · MONEY',img:'img/ep/e2endB.webp'},
 voice:{name:'Brave Voice',line:'You speak up for what you need.',tag:'WATCH · SPEAKING',img:'img/ep/e3endB.webp'},
 talker:{name:'Straight Talker',line:'You say it clearly and kindly.',tag:'WATCH · LOVE · 18+',img:'img/ep/e5endB.webp',adult:true},
 steady:{name:'Steady Hand',line:'You let the first try be a try.',tag:'WATCH · CALM',img:'img/ep/e4endB.webp'}
};
const EPS=[
{id:'e1',title:'The Night Market',series:'Founders',thumb:'img/ep/e1a.webp',xp:40,trait:'listener',stats:['Hustle','Kindness'],
 hook:'A stall full of bags. A crowd walking past.',
 take:'Ask why they hesitate before discounting.',
 action:'Ask one person one honest question about something you make or do.',
 act1:[
  {img:'e1a',k:'',t:'With that first sale, Arjun rented a tiny stall at the night market.'},
  {img:'e1a',k:'k2',who:'Kofi',t:'Welcome, neighbour! I\u2019m Kofi. I make lanterns.'},
  {img:'e1a',k:'k3',t:'People crowded around Kofi\u2019s lanterns. They walked right past Arjun\u2019s bags.'},
  {img:'e1b',k:'',who:'Arjun',t:'Kofi, what am I doing wrong?'},
  {img:'e1b',k:'k2',who:'Kofi',t:'I don\u2019t know. Have you asked them?'},
  {img:'e1b',k:'k3',t:'One night was left before the rent was due.'}],
 prompt:'One night left. Arjun decides to:',
 options:[
  {label:'Lower the price',title:'Price was never the problem',why:'Testing a lower price is quick, and the result still teaches you.',img:'e1endA',
   beats:[{t:'He cut the price in half. A few bags sold.'},{who:'Kofi',t:'Cheap didn\u2019t help. They still don\u2019t know why they need it.'},{t:'He paid the rent, just. A lower price rarely fixes a bigger question.'}]},
  {label:'Ask ten visitors what they need',title:'Listen first, then build',why:'Questions find the real reason people hesitate.',img:'e1endB',
   beats:[{t:'He asked ten visitors. Seven said the same thing.'},{who:'Arjun',t:'They want to see it survive the rain!'},{t:'Kofi poured water on a bag. A crowd gathered, and the stall sold out.'},{t:'Asking cost him one evening. It showed him what people needed.'}]}]},
{id:'e2',title:'The Cart',series:'Money',thumb:'img/ep/e2a.webp',xp:35,trait:'pause',stats:['Discipline'],
 hook:'Payday. Eleven things in her cart. One hill trip.',
 take:'A pause turns wants into choices.',
 action:'Put one thing in your cart on a 24-hour pause.',
 act1:[
  {img:'e2a',k:'',t:'Payday. By lunch, Zoya had eleven things in her cart.'},
  {img:'e2a',k:'k2',t:'Each one felt like a reward for a long week.'},
  {img:'e2a',k:'k3',t:'Then a text from her friend: hill trip next month. You in?'},
  {img:'e2a',k:'k2',t:'Her balance could cover one or the other. Not both.'}],
 prompt:'Payday. Zoya decides to:',
 options:[
  {label:'Checkout now, plan later',title:'Bought it, learned from it',why:'Buying, then noticing how it feels, teaches fast and sticks.',img:'e2endA',
   beats:[{t:'She bought it all. By Friday the glow had faded.'},{t:'She resold two things, and started a jar for the trip.'}]},
  {label:'Wait 24 hours before buying',title:'The two things that mattered',why:'A one-day pause lets the real wants stand out.',img:'e2endB',
   beats:[{t:'She waited a day. Nine things stopped mattering.'},{t:'She kept two, and the rest went into a jar for the trip.'}]}]},
{id:'e3',title:'The Group Project',series:'Speaking',thumb:'img/ep/e3a.webp',xp:35,trait:'voice',stats:['Courage','Calm'],
 hook:'Her partner is sick. The slides are hers now. So is the microphone.',
 take:'Speak up for what you need.',
 action:'Ask for one small thing you need today, out loud.',
 act1:[
  {img:'e3a',k:'',t:'Presentation day. Mira\u2019s partner texted: \u201cFever. So sorry.\u201d'},
  {img:'e3a',k:'k2',t:'The slides were hers now. So was the microphone.'},
  {img:'e3a',k:'k3',t:'She\u2019d only practised her half. Her name was third on the list.'},
  {img:'e3a',k:'k2',t:'She found the teacher before class, heart racing.'}],
 prompt:'Third on the list. Mira decides to:',
 options:[
  {label:'Present it alone',title:'Two halves, one voice',why:'Stepping up when it\u2019s messy shows you can handle more than you think.',img:'e3endA',
   beats:[{t:'She presented both halves and lost her place twice.'},{t:'The class clapped anyway. She had done it.'}]},
  {label:'Ask to swap to next week',title:'Asking is brave too',why:'Asking for what you need gives you the time to shine.',img:'e3endB',
   beats:[{t:'She asked to swap, and the teacher said yes.'},{t:'A week of practice calls later, she gave her best talk of the term.'}]}]},
{id:'e4',title:'The First Commission',series:'Calm',thumb:'img/ep/e4a.webp',xp:35,trait:'steady',stats:['Calm','Hustle'],
 hook:'Someone wants to pay for her drawing. Now every line feels heavy.',
 take:'Let the first try be a try.',
 action:'Do a rough, two-minute version of something you\u2019ve been putting off.',
 act1:[
  {img:'e4a',k:'',t:'A message: \u201cI love your drawings. Could I pay you to draw my dog?\u201d'},
  {img:'e4a',k:'k2',t:'Leela said yes. Then she froze.'},
  {img:'e4a',k:'k3',t:'Now every line felt heavy. What if it wasn\u2019t good enough?'},
  {img:'e4a',k:'k2',t:'She had erased the same ear five times.'}],
 prompt:'The pressure is on. Leela decides to:',
 options:[
  {label:'Draw it in one sitting',title:'Exactly his ear',why:'Pushing through in one go keeps overthinking out of the way.',img:'e4endA',
   beats:[{t:'She made tea and drew straight through. One ear came out wonky.'},{who:'Owner',t:'That\u2019s exactly his ear!'}]},
  {label:'Sketch three rough versions',title:'The third one had life',why:'Low-stakes drafts let the good version find you.',img:'e4endB',
   beats:[{t:'She drew three quick, messy versions just for herself.'},{t:'The third one had life in it. She painted that one.'}]}]}
,
{id:'e5',title:'So\u2026 What Are We?',series:'Love',adult:true,thumb:'img/ep/e5a.webp',xp:35,trait:'talker',stats:['Courage','Calm'],
 hook:'Two weeks of texting. Now the replies are slowing down.',
 take:'You\u2019re allowed to ask where things stand.',
 action:'Send one clear, kind message you\u2019ve been overthinking.',
 act1:[
  {img:'e5a',k:'',t:'Tara and Rohan matched two weeks ago. They texted every single day.'},
  {img:'e5a',k:'k2',t:'Lately, his replies came slower. One word. A meme. Then nothing till night.'},
  {img:'e5b',k:'',who:'Zoya',t:'So\u2026 what are you two?'},
  {img:'e5b',k:'k3',t:'Tara didn\u2019t know.'}],
 prompt:'Not knowing is getting loud. Tara decides to:',
 options:[
  {label:'Ask him straight',title:'Clear beats clever',why:'A clear question gets a clear answer, even if it\u2019s not the one you hoped for.',img:'e5endA',
   beats:[{t:'She typed: \u201cI like talking to you. Are we looking for the same thing?\u201d'},{who:'Rohan',t:'Honestly, I\u2019m not sure yet.'},{t:'It stung. But now she knew.'}]},
  {label:'Match his pace',title:'Slow and steady',why:'Matching their pace protects your energy while you find out more.',img:'e5endB',
   beats:[{t:'She stopped waiting by the phone and slowed down too.'},{t:'When they met for chai, they talked about it face to face.'}]}]}
];
const SOON_READ=['The Notification Monk','Two Porters','Echo Valley','The Lantern Carrier','The Mirror Auto'];
const SOON_LISTEN=['The Gulmohar and the Banyan','The Last Seat in the Metro','The Painter Who Waited'];
const MODES=[{id:'gym',n:'Gym',s:1.25,d:'A bit faster'},{id:'run',n:'Jogging',s:1,d:'Normal speed'},{id:'com',n:'Commute',s:1,d:'Normal speed'}];
const SKIN=['#fbe0cc','#f1c39d','#dca37a','#b87850','#8e5a38','#5c3a22'];
const HOOD=['#22386a','#F2B544','#f3ead6','#2f8f8a','#e8798a','#5b3f87'];
const LEVELS=[['Spark',0,100],['Ember',100,250],['Flame',250,500],['Beacon',500,900]];

/* ---------- state ---------- */
const fresh=()=>({onboarded:false,hint:false,name:'',age:'',av:{g:'girl',skin:SKIN[2],hoodie:HOOD[1]},xp:0,offset:0,done:{},daily:{},actions:{},traits:{},ep:{}});
let S;try{S=Object.assign(fresh(),JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){S=fresh()}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const dstr=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const dayAt=o=>{const d=new Date();d.setDate(d.getDate()+o);return d};
const today=()=>dstr(dayAt(S.offset));
const ageN=()=>parseInt(S.age,10)||0;
const adult=()=>ageN()>=18;
const teen=()=>ageN()>=14&&ageN()<18;
const visEps=()=>EPS.filter(e=>!e.adult||adult());
const visTraits=()=>Object.keys(TRAITS).filter(k=>!TRAITS[k].adult||adult());
const reduced=matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const dayIdx=()=>((S.offset%2)+2)%2;
const TD=()=>S.daily[today()]||{};
function streaks(){
 let cur=0,o=S.offset;if(!S.daily[dstr(dayAt(o))])o--;
 while(S.daily[dstr(dayAt(o))]){cur++;o--}
 const ks=Object.keys(S.daily).sort();let best=0,run=0,prev=null;
 ks.forEach(k=>{const t=new Date(k+'T00:00').getTime();run=(prev&&Math.round((t-prev)/864e5)===1)?run+1:1;prev=t;best=Math.max(best,run)});
 return{cur,best};
}
const level=()=>{const l=LEVELS.find(l=>S.xp<l[2])||LEVELS[LEVELS.length-1];return{n:l[0],lo:l[1],hi:l[2],p:Math.min(100,(S.xp-l[1])/(l[2]-l[1])*100)}};
let toastT;
function toast(m){const b=$('#toastbox');b.innerHTML=`<div class="toast" role="status">${m}</div>`;clearTimeout(toastT);toastT=setTimeout(()=>b.innerHTML='',2400)}
function complete(layer,id,xp){
 const k=layer+':'+id;const d=S.daily[today()]=S.daily[today()]||{};d[layer]=id;
 const first=!S.done[k];let newTrait=null;
 if(first){S.done[k]=today();S.xp+=xp;
  const t=layer==='watch'?EPS.find(e=>e.id===id).trait:STORIES.find(s=>s.id===id).trait;
  if(!S.traits[t]){S.traits[t]=today();newTrait=t}}
 save();return{first,newTrait,xp};
}
function doAction(key,xp=10){if(S.actions[key])return false;S.actions[key]=today();S.xp+=xp;save();toast('Tiny action done \u00b7 +'+xp+' XP');return true}

/* ---------- avatar ---------- */
function avatar(a,cls='avatar'){
 const hair='#2e1d14';
 const back=a.g==='girl'?`<path d="M25 50c-3-27 12-38 25-38s28 11 25 38l2 26H23z" fill="${hair}"/>`:'';
 const top=a.g==='girl'?`<path d="M28 44c0-17 10-25 22-25s22 8 22 25c-8-2-15-8-18-15-4 8-14 13-26 15z" fill="${hair}"/>`:`<path d="M28 42c-2-18 9-26 22-26s24 8 22 26c-4-6-8-10-14-12-8 5-20 6-30 12z" fill="${hair}"/><path d="M42 18c3-6 12-7 16-2" fill="none" stroke="${hair}" stroke-width="5" stroke-linecap="round"/>`;
 return `<svg class="${cls}" viewBox="0 0 100 100" role="img" aria-label="Your avatar">${back}
 <path d="M12 102c2-22 18-31 38-31s36 9 38 31z" fill="${a.hoodie}"/>
 <path d="M42 74v14M58 74v14" stroke="#fff" stroke-opacity=".75" stroke-width="2" stroke-linecap="round"/>
 <rect x="43" y="56" width="14" height="18" rx="6" fill="${a.skin}" style="filter:brightness(.92)"/>
 <circle cx="50" cy="45" r="21" fill="${a.skin}"/><circle cx="29.5" cy="47" r="4" fill="${a.skin}"/><circle cx="70.5" cy="47" r="4" fill="${a.skin}"/>
 ${top}
 <circle cx="42" cy="47" r="2.6" fill="#1a1210"/><circle cx="58" cy="47" r="2.6" fill="#1a1210"/>
 <circle cx="42.8" cy="46.2" r=".9" fill="#fff"/><circle cx="58.8" cy="46.2" r=".9" fill="#fff"/>
 <circle cx="36" cy="53" r="3.2" fill="#ff8a7a" opacity=".35"/><circle cx="64" cy="53" r="3.2" fill="#ff8a7a" opacity=".35"/>
 <path d="M44 55c3 3 9 3 12 0" fill="none" stroke="#6b3a2a" stroke-width="2" stroke-linecap="round"/></svg>`;
}

/* ---------- routing ---------- */
let tab='today',OB={step:0,edit:false},OV=null,lastTab=null;
const app=$('#app'),ov=$('#overlay'),sheet=$('#sheet');
function go(t){tab=t;closeOverlay(true);render()}
function openOverlay(o){OV=o;renderOverlay();updateMini()}
function closeOverlay(silent){
 const had=ov.classList.contains('show');OV=null;
 if(had&&!reduced){ov.classList.add('out');setTimeout(()=>{if(!OV){ov.classList.remove('show','out');ov.innerHTML=''}},190)}
 else{ov.classList.remove('show','out');ov.innerHTML=''}
 if(!silent){render()}updateMini();
}
function openSheet(html){sheet.innerHTML=`<div class="pane">${html}</div>`;sheet.classList.add('show')}
function closeSheet(){sheet.classList.remove('show');sheet.innerHTML=''}
sheet.addEventListener('click',e=>{if(e.target===sheet)closeSheet()});

function render(){
 if(!S.onboarded){app.innerHTML=viewOnboarding();return}
 const l=level(),st=streaks();
 const body={today:viewToday,read:viewRead,listen:viewListen,watch:viewWatch,you:viewYou}[tab]();
 const nav=[['today','home','Today'],['read','book','Swipe'],['listen','head','Listen'],['watch','film','Watch'],['you','user','Me']]
  .map(([k,i,n])=>`<button data-a="go" data-v="${k}" class="${tab===k?'on':''}" aria-label="${n}" ${tab===k?'aria-current="page"':''}>${ic(i)}<span>${n}</span></button>`).join('');
 app.innerHTML=`<div class="screen" data-tab="${tab}">
  <div class="top"><span class="brand">Ethos<b>SAI</b></span><span class="demo">DEMO</span><span class="sp"></span>
  <span class="chip" title="Streak">${ic('flame')}${st.cur}</span></div>
  <div class="scroll ${tab!==lastTab&&!reduced?'enter':''}" id="scroll">${body}</div>
  <nav class="nav" aria-label="Main">${nav}</nav></div>`;
 lastTab=tab;updateMini();
}

/* ---------- onboarding ---------- */
function ageMsg(v){
 const n=parseInt(v,10);
 if(!v)return{html:'',ok:false};
 if(isNaN(n)||n>99)return{html:'<div class="note warn">Please type your real age, like 16.</div>',ok:false};
 if(n<14)return{html:'<div class="note warn" data-testid="under14">Sorry, EthosSAI is for ages 14 and up. Please come back when you turn 14. We will be here for you!</div>',ok:false};
 if(n<18)return{html:'<div class="note good" data-testid="teen-note">Thanks! Teen-safe mode will be on. It hides stories meant for 18 and up.</div>',ok:true};
 return{html:'<div class="note good">Thanks! You will see all the stories.</div>',ok:true};
}
function viewOnboarding(){
 const s=OB.step;
 const top=`<div class="steps">${s>0?`<button class="backb" data-a="obback" data-testid="ob-back" aria-label="Back">${ic('back')}<span>Back</span></button>`:''}<span class="sp"></span>${s!==1?`<button class="skipb" data-a="obskip" data-testid="skip">Skip</button>`:''}</div>
 <div class="dotsrow" aria-hidden="true">${[0,1,2].map(i=>`<i class="${i<=s?'on':''}"></i>`).join('')}</div><p class="mute stepn">Step ${s+1} of 3</p>`;
 if(s===0)return`<div class="ob" data-ob="0">${top}
  <p class="eyebrow">EthosSAI \u00b7 Demo</p>
  <h1 class="hero-h" style="margin-top:4px">A swipeable story, one tiny action, and you\u2019re <em>done for today.</em></h1>
  <div class="fan"><img src="img/fan1.webp" alt=""><img src="img/ep/e2endB.webp" alt=""><img src="img/fan3.webp" alt=""><span>SWIPE</span><span>WATCH</span><span>LISTEN</span></div>
  <p class="mute" style="font-size:16px;line-height:1.5;margin-bottom:auto">Swipe it, listen to it, or watch it. Then do one small thing for real. For ages 14 and up.</p>
  <button class="btn" data-a="obnext" data-testid="start">Start</button>
  <p class="mute small" style="text-align:center;margin-top:10px">This is a demo with sample stories. Your choices stay on this phone.</p></div>`;
 if(s===1){const m=ageMsg(S.age);return`<div class="ob" data-ob="1">${top}
  <h1 class="hero-h" style="font-size:30px;margin-bottom:8px">How old are you?</h1>
  <p class="mute" style="font-size:16px;line-height:1.5;margin-bottom:14px">We ask so we can show the right stories for you.</p>
  <label class="lbl" for="age" style="margin-top:0">Your age</label>
  <input class="txt" id="age" data-testid="age" type="number" inputmode="numeric" min="14" max="99" placeholder="Type your age" value="${S.age||''}" autocomplete="off">
  <div id="agemsg" role="status" aria-live="polite">${m.html}</div>
  <div style="margin-top:auto"></div>
  <button class="btn" id="agebtn" data-a="obnext" data-testid="age-next" ${m.ok?'':'disabled'}>Next</button></div>`}
 return`<div class="ob" data-ob="2">${top}${lookPanel(false)}</div>`;
}
function lookPanel(edit){
 const a=S.av;
 return`<h1 class="hero-h" style="font-size:30px;text-align:left">Make your look</h1>
 <div id="avwrap">${avatar(a)}</div>
 <div class="seg"><button data-a="g" data-v="girl" class="${a.g==='girl'?'on':''}">Girl</button><button data-a="g" data-v="boy" class="${a.g==='boy'?'on':''}">Boy</button></div>
 <p class="lbl" style="margin-top:0">Skin</p><div class="sw">${SKIN.map(c=>`<button data-a="skin" data-v="${c}" style="background:${c}" class="${a.skin===c?'on':''}" aria-label="Skin ${c}"></button>`).join('')}</div>
 <p class="lbl">Hoodie</p><div class="sw">${HOOD.map(c=>`<button data-a="hood" data-v="${c}" style="background:${c}" class="${a.hoodie===c?'on':''}" aria-label="Hoodie ${c}"></button>`).join('')}</div>
 <p class="lbl">What should we call you?</p><input class="txt" id="nm" maxlength="16" placeholder="Your name" value="${S.name.replace(/"/g,'&quot;')}" autocomplete="off">
 <div style="margin-top:auto;padding-top:14px"><button class="btn" data-a="${edit?'looksave':'obdone'}" data-testid="${edit?'look-save':'finish'}">${edit?'Save':'Finish'}</button></div>`;
}

/* ---------- Today ---------- */
function viewToday(){
 const i=dayIdx(),rd=STORIES[i],ls=STORIES[1-i],ep=visEps()[((S.offset%visEps().length)+visEps().length)%visEps().length],d=TD();
 const n=['read','listen','watch'].filter(k=>d[k]).length,all=n===3;
 const dateLbl=dayAt(S.offset).toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'short'});
 const task=(layer,ic_,kind,title,sub,img)=>`<button class="card task ${d[layer]?'done':''}" data-a="open" data-layer="${layer}" data-id="${layer==='watch'?ep.id:layer==='read'?rd.id:ls.id}">
  <div class="th"><img src="${img}" alt=""></div><div class="tb"><span class="kind">${ic(ic_)}${kind}</span><h3>${title}</h3><small>${sub}</small></div>${d[layer]?`<span class="tick">${ic('check')}</span>`:''}</button>`;
 const act=(layer,key,txt)=>{const unlocked=!!d[layer],on=!!S.actions[key];return`<button class="act ${on?'on':''} ${unlocked?'':'lock'}" data-a="act" data-key="${key}" ${unlocked?'':'disabled'}>
  <span class="cb">${ic('check')}</span><div><small>${layer==='read'?'After you swipe':layer==='listen'?'After you listen':'After you watch'}</small><p>${unlocked?txt:'Finish the '+({read:'story',listen:'audio story',watch:'episode'})[layer]+' to unlock this.'}</p></div></button>`};
 return`<p class="mute" style="font-size:13px">${dateLbl}</p>
 <h1 class="h-title" style="margin-top:2px">Hey ${S.name||'there'}, here\u2019s today.</h1>
 ${teen()?`<p class="note good" style="margin:10px 0 0" data-testid="teen-banner">${ic('lock')}<span>Teen-safe mode is on. Stories for 18 and up are hidden.</span></p>`:''}
 <div class="ringrow"><div class="prog"><i style="width:${n/3*100}%"></i></div><b style="color:var(--amber)">${n} of 3 done</b></div>
 ${task('read','book','Swipe \u00b7 3 min',rd.title,'10 cards to swipe',rd.hero)}
 ${task('listen','head','Listen \u00b7 2 min',ls.title,'Audio story with sleep timer',ls.hero)}
 ${task('watch','film','Watch \u00b7 1 min',ep.title,ep.series+' \u00b7 you choose, no wrong answer',ep.thumb)}
 <p class="sec-t">Your small actions for today</p>
 ${act('read','act:read:'+rd.id,rd.action)}${act('listen','act:listen:'+ls.id,ls.action)}${act('watch','act:watch:'+ep.id,ep.action)}
 <div class="end ${all?'done':''}" data-testid="feed-end">${ic('moon')}
  <h3>${all?'You\u2019re done for today.':'This feed has an end.'}</h3>
  <p class="mute" style="font-size:14px;line-height:1.5">${all?'Nice work. Put your phone down and do your small action. New picks come tomorrow.':'Do these three, then you\u2019re free. Nothing below this line will keep you scrolling.'}</p></div>`;
}

/* ---------- Read ---------- */
function viewRead(){
 return`<h1 class="h-title" style="margin-top:6px">Swipe a story</h1><p class="mute" style="margin:6px 0 16px;font-size:16px;line-height:1.5">Short stories on cards. Each one ends with one small thing to do.</p>
 ${STORIES.map(s=>`<button class="card lib" data-a="open" data-layer="read" data-id="${s.id}"><img src="${s.hero}" alt=""><div><span class="eyebrow">${s.tag}</span><h3>${s.title}</h3><span class="meta">10 cards \u00b7 about ${s.mins} min ${S.done['read:'+s.id]?'\u00b7 <b style="color:var(--amber)">Done</b>':''}</span></div></button>`).join('')}
 <p class="sec-t">Coming soon</p>${SOON_READ.map(t=>`<div class="soon">${ic('lock')}${t}</div>`).join('')}`;
}
/* ---------- Listen ---------- */
function viewListen(){
 return`<h1 class="h-title" style="margin-top:6px">Listen</h1><p class="mute" style="margin:6px 0 14px;font-size:16px;line-height:1.5">Stories to hear at the gym, on a run or on the bus.</p>
 <div class="modes">${MODES.map(m=>`<button data-a="mode" data-v="${m.id}" class="${(S.mode||'com')===m.id?'on':''}"><span>${m.n}</span><small>${m.d}</small></button>`).join('')}</div>
 ${STORIES.map(s=>{const tot=s.chapters.reduce((a,c)=>a+c.dur,0);return`<button class="card lib" data-a="open" data-layer="listen" data-id="${s.id}"><img src="${s.hero}" alt=""><div><span class="eyebrow">Audio story \u00b7 10 chapters</span><h3>${s.title}</h3><span class="meta">${fmt(tot)} \u00b7 Indian-English voice ${S.done['listen:'+s.id]?'\u00b7 <b style="color:var(--amber)">Heard</b>':''}</span></div></button>`}).join('')}
 <p class="mute" style="font-size:13px;margin-top:2px">The voice is made by AI (a sample voice).</p>
 <p class="sec-t">Coming soon</p>${SOON_LISTEN.map(t=>`<div class="soon">${ic('lock')}${t}</div>`).join('')}`;
}
/* ---------- Watch ---------- */
function viewWatch(){
 return`<h1 class="h-title" style="margin-top:6px">Watch</h1><p class="mute" style="margin:6px 0 16px;font-size:16px;line-height:1.5">1-minute anime stories. You choose what happens. There is no wrong answer.</p>
 ${visEps().map(e=>`<button class="card lib" data-a="open" data-layer="watch" data-id="${e.id}"><img src="${e.thumb}" alt=""><div><span class="eyebrow">${e.series}</span><h3>${e.title}</h3><span class="meta">${e.hook}</span><div class="pillrow" style="margin-top:6px"><span class="pill">+${e.xp} XP</span>${e.adult?'<span class="pill">18+</span>':''}${S.done['watch:'+e.id]?'<span class="pill" style="color:var(--amber)">Watched</span>':''}</div></div></button>`).join('')}
 <p class="mute" style="font-size:13px">These are motion comics made from AI pictures, not video.</p>`;
}
/* ---------- You ---------- */
function viewYou(){
 const l=level(),st=streaks(),acts=Object.keys(S.actions).length;
 const days=[...Array(7)].map((_,k)=>{const o=S.offset-6+k,dd=dayAt(o);return`<div class="${k===6?'today':''}"><i class="${S.daily[dstr(dd)]?'on':''}">${ic('check')}</i>${'SMTWTFS'[dd.getDay()]}</div>`}).join('');
 const tr=visTraits().map(k=>traitCard(k,!!S.traits[k])).join('');
 const unlocked=visTraits().filter(k=>S.traits[k]).length;
 return`<h1 class="h-title" style="margin:6px 0 14px">Me</h1>
 <div class="card"><div class="pcard">${avatar(S.av)}<div style="min-width:0"><h2 style="font-size:24px;font-weight:800">${S.name||'You'}</h2><p class="mute" style="font-size:14px;margin:2px 0 8px">Age ${S.age} \u00b7 ${l.n}</p><button class="link" data-a="editlook">Edit look</button></div></div>
  <p style="margin:16px 0 8px;font-weight:700;font-size:15px">${l.n} \u00b7 <span id="xpv">${S.xp}</span> / ${l.hi} XP</p><div class="prog"><i style="width:${l.p}%"></i></div></div>
 <div class="card" style="margin-top:14px"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:17px">Streak</b><span class="chip" data-testid="streak">${ic('flame')}${st.cur}-day streak</span></div>
  <div class="week">${days}</div>
  <div class="stat"><div><b>${st.cur}</b><span>Current</span></div><div><b>${st.best}</b><span>Best</span></div><div><b>${acts}</b><span>Actions done</span></div></div></div>
 <p class="sec-t">Trait cards \u00b7 ${unlocked} of ${visTraits().length}</p>
 <div class="tgrid" data-testid="traits">${tr}</div>
 <p class="mute" style="font-size:13px;margin-top:10px;line-height:1.45">Finish a story, an audio story or an episode to unlock its card.</p>
 ${teen()?`<p class="note good" style="margin-top:12px" data-testid="teen-me">${ic('lock')}<span><b>Teen-safe mode is on.</b> You are under 18, so stories for 18 and up (like Love) are hidden.</span></p>`:''}
 <div class="demo-tools"><b style="color:var(--cream)">Demo tools</b><br>See a second day of streaks and new picks, or start over.
  <button class="btn ghost sm" data-a="nextday">Simulate next day</button><button class="btn ghost sm" data-a="reset" style="border-color:rgba(255,255,255,.25);color:var(--mute)">Reset demo</button></div>`;
}
function traitCard(k,on,big){const t=TRAITS[k];return`<div class="trait ${on?'':'lock'} ${big?'big':''}" data-trait="${k}"><img src="${t.img}" alt=""><span class="tag">${on?t.tag:'LOCKED'}</span>${on?'':`<span class="lk">${ic('lock')}</span>`}<div class="tt"><b>${on?t.name:'???'}</b><span>${on?t.line:'Keep going to unlock.'}</span></div></div>`}

/* ---------- overlays ---------- */
function renderOverlay(){
 if(!OV)return;ov.classList.remove('out');ov.classList.add('show');
 if(OV.type==='reader')return renderReader();
 if(OV.type==='player')return renderPlayer();
 if(OV.type==='ep')return renderEp();
 if(OV.type==='look'){ov.innerHTML=`<div class="ob" style="height:100%"><div class="steps">${backBtn()}</div>${lookPanel(true)}</div>`}
}
/* reader */
let R;
function renderReader(){
 const s=STORIES.find(x=>x.id===OV.id);R={s,i:OV.i||0,n:s.chapters.length+1};
 const slides=s.chapters.map(c=>`<div class="slide"><img src="${c.img}" alt="Card ${c.n}: ${c.text.replace(/"/g,'&quot;')}"></div>`).join('');
 const doneA=!!S.actions['act:read:'+s.id];
 const fin=`<div class="slide"><div class="final" data-testid="final">
  <div class="card lesson"><span class="eyebrow">The takeaway</span><h2>${s.moral}</h2>
  <span class="eyebrow" style="color:var(--coral)">Try this today</span><p style="font-size:16px;line-height:1.45;margin:6px 0 14px">${s.action}</p>
  <button class="bigcheck ${doneA?'ok':''}" data-a="readdone" data-testid="done">${ic('check')}<span>${doneA?'Done \u2713':'Done'}</span></button></div>
  <div style="display:flex;gap:10px;margin-top:12px"><button class="btn ghost sm" data-a="share" style="flex:1">${ic('share')}Share</button><button class="btn sm" data-a="closeov" style="flex:1">Back to Today</button></div>
  <p class="mute" style="font-size:13px;text-align:center;margin-top:10px"><span class="xp" style="font-size:13px;padding:3px 10px">+${XP.read} XP</span> for finishing &middot; Pictures are made by AI</p></div></div>`;
 ov.innerHTML=`<div class="screen"><div class="rd-top">${backBtn()}<div style="flex:1;min-width:0"><span class="eyebrow">Swipe &middot; ${s.tag}</span><div style="font-weight:800;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s.title}</div></div><b class="mute" id="cnt" style="font-size:14px"></b></div>
  <div class="car" id="car"><div class="track" id="track">${slides}${fin}</div>${S.hint?'':`<div class="swipehint" id="hint" data-testid="swipe-hint" role="note"><div class="hand">${ic("back")}${ic("back")}</div><p>Swipe left for the next card</p></div>`}</div>
  <div class="dots" id="dots" role="tablist" aria-label="Card progress">${[...Array(R.n)].map((_,k)=>`<i></i>`).join('')}</div>
  <p class="hint">Swipe left or right, or tap the sides</p>
  <div class="rd-foot"><button class="iconb" data-a="rprev" aria-label="Previous card">${ic('back')}</button><span class="cnt" id="cnt2"></span><button class="iconb" data-a="rnext" aria-label="Next card">${ic('next')}</button></div></div>`;
 rGo(R.i);setupCar();
}
const XP={read:20,listen:20};
function rGo(i){
 i=Math.max(0,Math.min(R.n-1,i));if(i!==R.i&&!S.hint){S.hint=true;save();const h=$('#hint');if(h){h.classList.add('gone');setTimeout(()=>h.remove(),300)}}
 R.i=i;OV.i=i;
 const t=$('#track');if(!t)return;t.style.transform=`translateX(${-i*100}%)`;
 [...$('#dots').children].forEach((d,k)=>d.classList.toggle('on',k===i));
 const lbl=i<R.n-1?`${i+1} / ${R.n-1}`:'Takeaway';$('#cnt').textContent=lbl;$('#cnt2').textContent=lbl;
 if(i===R.n-1){const r=complete('read',R.s.id,XP.read);if(r.first){toast('Story read \u00b7 +'+XP.read+' XP');}if(r.newTrait)setTimeout(()=>showTrait(r.newTrait),700)}
}
function setupCar(){
 const car=$('#car'),tr=$('#track');let sx=0,dx=0,down=false,ok=false;
 car.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;down=true;ok=true;sx=e.clientX;dx=0;tr.classList.add('drag')});
 window.onpointermove=e=>{if(!down)return;dx=e.clientX-sx;tr.style.transform=`translateX(calc(${-R.i*100}% + ${dx}px))`};
 window.onpointerup=e=>{if(!down)return;down=false;tr.classList.remove('drag');
  if(Math.abs(dx)<8){const r=car.getBoundingClientRect(),x=(e.clientX-r.left)/r.width;
   if(R.i<R.n-1){rGo(x<.35?R.i-1:R.i+1)}else rGo(R.i)}
  else if(dx<-50)rGo(R.i+1);else if(dx>50)rGo(R.i-1);else rGo(R.i)};
 window.onpointercancel=()=>{if(down){down=false;tr.classList.remove('drag');rGo(R.i)}};
}
document.addEventListener('keydown',e=>{if(OV&&OV.type==='reader'&&R){if(e.key==='ArrowRight')rGo(R.i+1);if(e.key==='ArrowLeft')rGo(R.i-1)}});

function showTrait(k){const t=TRAITS[k];openSheet(`<p class="eyebrow" style="text-align:center">New trait card unlocked</p>${traitCard(k,true,true)}<button class="btn" style="margin-top:14px" data-a="closesheet">Nice</button>`)}

/* ---------- audio ---------- */
const A=new Audio();A.preload='auto';
let P=null; // {s,ch,speed,timer,tm,eoc}
const fmt=t=>{t=Math.max(0,Math.round(t));return Math.floor(t/60)+':'+String(t%60).padStart(2,'0')};
const SPEEDS=[0.75,1,1.25,1.5,2];
function pTotal(){return P.s.chapters.reduce((a,c)=>a+c.dur,0)}
function pBefore(ch=P.ch){return P.s.chapters.slice(0,ch).reduce((a,c)=>a+c.dur,0)}
function pLoad(ch,play,seek){
 if(P.eoc&&ch!==P.ch){P.eoc=false;P.timerLabel='Off'}
 P.ch=ch;A.src=P.s.chapters[ch].audio;A.defaultPlaybackRate=P.speed;A.playbackRate=P.speed;
 A.onloadedmetadata=()=>{A.playbackRate=P.speed;if(seek)A.currentTime=seek;};
 if(play){const pr=A.play();if(pr&&pr.catch)pr.catch(()=>{})}
 pUI();
}
A.addEventListener('timeupdate',()=>{if(P){pUI()}});
A.addEventListener('play',()=>pUI());A.addEventListener('pause',()=>pUI());
A.addEventListener('ended',()=>{
 if(!P)return;
 if(P.ch>=P.s.chapters.length-1){P.eoc=false;pFinish();return}
 if(P.eoc){P.eoc=false;P.timerLabel='Off';toast('Sleep timer: paused after this chapter');pUI();return}
 pLoad(P.ch+1,true)
});
function pFinish(){
 const r=complete('listen',P.s.id,XP.listen);pUI();
 if(r.first)toast('Story heard \u00b7 +'+XP.listen+' XP');
 openFinish(P.s,r);
}
function openFinish(s,r){
 const on=!!S.actions['act:listen:'+s.id];
 openSheet(`${r&&r.newTrait?`<p class="eyebrow" style="text-align:center">New trait card unlocked</p><div style="max-width:150px;margin:0 auto 14px">${traitCard(r.newTrait,true)}</div>`:''}<span class="eyebrow">Finished \u00b7 ${s.title}</span><h3 style="font-size:23px;margin:6px 0 12px" data-testid="listen-take">${s.moral}</h3>
  <p class="eyebrow" style="color:var(--coral)">Try this today</p><p style="font-size:15.5px;line-height:1.45;margin:6px 0 14px">${s.action}</p>
  <button class="bigcheck ${on?'ok':''}" data-a="listendone" data-id="${s.id}">${ic('check')}<span>${on?'Done \u2713':'Done'}</span></button>
  <div style="display:flex;gap:10px;margin-top:12px"><button class="btn ghost sm" data-a="share" data-id="${s.id}" style="flex:1">${ic('share')}Share</button><button class="btn sm" data-a="closesheet" style="flex:1">Close</button></div>`);
}
function pToggle(){if(A.paused){const pr=A.play();if(pr&&pr.catch)pr.catch(()=>{})}else A.pause()}
function pSeekTotal(t){
 let acc=0;const ch=P.s.chapters;
 for(let k=0;k<ch.length;k++){if(t<acc+ch[k].dur||k===ch.length-1){const off=Math.min(ch[k].dur-.3,t-acc);
  if(k===P.ch){A.currentTime=Math.max(0,off)}else{const was=!A.paused;pLoad(k,was,Math.max(0,off))}return}acc+=ch[k].dur}
}
function setTimer(m){
 clearTimeout(P.tm);P.eoc=false;
 if(m==='off'){P.timerLabel='Off'}
 else if(m==='eoc'){P.eoc=true;P.timerLabel='End of chapter'}
 else{P.timerLabel=m+' min';P.tm=setTimeout(()=>{A.pause();P.timerLabel='Off';toast('Sleep timer: paused. Good night.');pUI()},m*60000)}
 pUI();toast('Sleep timer: '+P.timerLabel);closeSheet();
}
function pUI(){
 if(!P)return;
 const set=(id,fn)=>{const e=document.getElementById(id);if(e)fn(e)};
 const tot=pTotal(),cur=pBefore()+(A.currentTime||0),playing=!A.paused;
 set('p-pp',e=>e.innerHTML=playing?icf('pause'):icf('play'));
 set('p-pp',e=>e.setAttribute('aria-label',playing?'Pause':'Play'));
 set('p-seek',e=>{if(!e.matches(':active'))e.value=cur/tot*1000;e.style.setProperty('--p',cur/tot*100+'%')});
 set('p-cur',e=>e.textContent=fmt(cur));set('p-tot',e=>e.textContent='-'+fmt(tot-cur));
 set('p-ch',e=>e.textContent=`Chapter ${P.ch+1} of ${P.s.chapters.length}`);
 set('p-cap',e=>e.textContent=P.s.chapters[P.ch].text);
 set('p-img',e=>{const src=P.s.chapters[P.ch].art;if(!e.src.endsWith(src))e.src=src});
 set('p-speed',e=>{e.querySelector('span').textContent=P.speed+'\u00d7'});
 set('p-timer',e=>{e.querySelector('span').textContent=P.timerLabel==='Off'?'Sleep':P.timerLabel;e.classList.toggle('on',P.timerLabel!=='Off')});
 const pl=$('.pl');if(pl)pl.classList.toggle('paused',!playing);
 updateMini();
}
function updateMini(){
 const m=$('#mini');
 if(!P||!S.onboarded||OV||!A.src){m.innerHTML='';$('#phone').classList.remove('hasmini');return}
 $('#phone').classList.add('hasmini');
 const playing=!A.paused;
 m.innerHTML=`<div class="mini" data-testid="mini"><button data-a="reopen" style="display:flex;gap:12px;align-items:center;flex:1;min-width:0;text-align:left"><img src="${P.s.chapters[P.ch].art}" alt=""><div>${P.s.title}<small>Chapter ${P.ch+1} \u00b7 ${P.speed}\u00d7</small></div></button><button class="pb" data-a="minipp" aria-label="${playing?'Pause':'Play'}">${playing?icf('pause'):icf('play')}</button></div>`;
}
function renderPlayer(){
 const s=STORIES.find(x=>x.id===OV.id);
 if(!P||P.s.id!==s.id){const mode=MODES.find(m=>m.id===(S.mode||'com'));
  P={s,ch:0,speed:mode.s,timerLabel:'Off',eoc:false};A.pause();pLoad(0,false)}
 ov.innerHTML=`<div class="screen"><div class="pl paused">
  <div style="display:flex;align-items:center;gap:10px">${backBtn()}<span class="eyebrow" style="flex:1;text-align:center">Listen \u00b7 ${MODES.find(m=>m.id===(S.mode||'com')).n}</span><span style="width:48px"></span></div>
  <div class="cover"><img id="p-img" src="${s.chapters[P.ch].art}" alt=""></div>
  <h2>${s.title}</h2><span class="mute" id="p-ch" style="font-size:13px;font-weight:600"></span>
  <p class="cap" id="p-cap"></p>
  <div class="seek"><input id="p-seek" type="range" min="0" max="1000" step="1" value="0" aria-label="Seek"></div>
  <div class="times"><span id="p-cur">0:00</span><span id="p-tot"></span></div>
  <div class="ctl"><button class="sk" data-a="pback" aria-label="Back 15 seconds">\u221215</button><button class="sk nx" data-a="pprev" aria-label="Previous chapter">${ic('skipb')}</button>
  <button class="pp" id="p-pp" data-a="ptoggle" data-testid="play"></button>
  <button class="sk nx" data-a="pnext" aria-label="Next chapter">${ic('skipf')}</button><button class="sk" data-a="pfwd" aria-label="Forward 15 seconds">+15</button></div>
  <div class="tools"><button id="p-speed" data-a="pspeed" data-testid="speed">${ic('gauge')}<span>1\u00d7</span></button><button id="p-timer" data-a="ptimer" data-testid="timer">${ic('moon')}<span>Sleep</span></button><button data-a="pchapters" data-testid="chapters">${ic('list')}<span>Chapters</span></button></div></div></div>`;
 $('#p-seek').addEventListener('input',e=>pSeekTotal(e.target.value/1000*pTotal()));
 pUI();
}
function openChapters(){
 openSheet(`<h3>Chapters</h3>${P.s.chapters.map((c,k)=>`<button class="row ${k===P.ch?'on':''}" data-a="pgoch" data-v="${k}"><span class="n">${c.n}</span><span style="flex:1">${k===9?'The takeaway':c.text.replace(/["“”]/g,'').split(' ').slice(0,6).join(' ')+'\u2026'}</span><span class="mute" style="font-size:13px">${fmt(c.dur)}</span></button>`).join('')}`);
}
function openTimer(){
 const o=[['off','Off'],['eoc','End of chapter'],[5,'5 minutes'],[15,'15 minutes'],[30,'30 minutes']];
 openSheet(`<h3>Sleep timer</h3>${o.map(([v,l])=>`<button class="row ${P.timerLabel===l.replace(' minutes',' min')||(v==='off'&&P.timerLabel==='Off')?'on':''}" data-a="settimer" data-v="${v}">${l}</button>`).join('')}`);
}

/* ---------- episode ---------- */
let E;
function renderEp(){
 const ep=EPS.find(x=>x.id===OV.id);
 if(!E||E.ep.id!==ep.id||OV.restart){E={ep,step:0,pick:OV.pick!=null?OV.pick:null,replay:!!OV.replay};OV.restart=false;if(OV.pick!=null)E.step=ep.act1.length+1}
 epDraw();
}
function epSteps(){const ep=E.ep;return{n1:ep.act1.length,n3:E.pick==null?0:ep.options[E.pick].beats.length}}
function epDraw(){
 const ep=E.ep,{n1,n3}=epSteps(),st=E.step;
 let part=1,view;
 const head=(p,label)=>`<div class="bars">${[1,2,3].map(k=>`<i class="${k<=p?'on':''}"></i>`).join('')}</div>
  <div class="tl">${backBtn('dk')}<div class="t"><b>${ep.series} &middot; ${ep.title}</b><span>Part ${p} of 3 &middot; ${label}</span></div></div>`;
 if(st<n1){const b=ep.act1[st];
  view=`<div class="stagebox ${E.paused?'paused':''}"><img class="${b.k}" src="img/ep/${b.img}.webp" alt=""></div><div class="ui">${head(1,'The setup')}
   <div class="beatbox" data-a="epnext" data-testid="beat">${b.who?`<span class="speaker">${b.who}</span>`:''}<p class="bt ${b.who?'q':''}" key="${st}">${b.t}</p></div>
   <div class="foot"><p class="tapx">Tap anywhere to continue</p><button class="btn" data-a="epnext" data-testid="continue">${st===n1-1?'What would you do?':'Continue'}</button></div></div>`;
 }else if(st===n1){
  const last=ep.act1[n1-1];
  view=`<div class="stagebox dim"><img src="img/ep/${last.img}.webp" alt=""></div><div class="ui">${head(2,'Your choice')}
   <div class="chooser" data-testid="chooser"><h2>${ep.prompt}</h2><p class="mute" style="font-size:14px">There is no wrong answer. Both choices teach you something.</p>
   ${ep.options.map((o,k)=>`<button class="ch ${E.pick===k?'on':''}" data-a="epPick" data-v="${k}" data-testid="opt-${'ab'[k]}"><span class="l">${'AB'[k]}</span>${o.label}</button>`).join('')}
   <button class="btn" style="margin-top:14px" data-a="epgo" ${E.pick==null?'disabled':''} data-testid="watch-what">Watch what happens</button></div></div>`;
 }else if(st<=n1+n3){const o=ep.options[E.pick],b=o.beats[st-n1-1];
  view=`<div class="stagebox"><img class="${['','k2','k3'][(st)%3]}" src="img/ep/${o.img}.webp" alt=""></div><div class="ui">${head(3,'What happens')}
   <div class="beatbox" data-a="epnext" data-testid="beat">${st===n1+1?`<span class="speaker" style="background:var(--coral)">${o.title}</span><br>`:''}${b.who?`<span class="speaker">${b.who}</span>`:''}<p class="bt ${b.who?'q':''}" key="${st}">${b.t}</p></div>
   <div class="foot"><p class="tapx">Tap anywhere to continue</p><button class="btn" data-a="epnext" data-testid="continue">${st===n1+n3?'See the takeaway':'Continue'}</button></div></div>`;
 }else{
  const o=ep.options[E.pick],other=ep.options[1-E.pick];
  const r=E.replay?{first:false,newTrait:null}:complete('watch',ep.id,ep.xp);
  if(!E.replay){E.result=E.result||r;}
  const rr=E.result||r,isNew=rr.newTrait,got=!!S.traits[ep.trait];
  const aKey='act:watch:'+ep.id,aDone=!!S.actions[aKey],sKey=aKey+':small';
  view=`<div class="stagebox dim"><img src="img/ep/${o.img}.webp" alt=""></div><div class="ui">${head(3,'Takeaway')}
  <div class="endsc" data-testid="ep-end"><div style="text-align:center;margin:8px 0 14px"><span class="eyebrow">Episode complete &middot; ${o.title}</span>
   <div style="margin-top:8px"><span class="xp" data-testid="xp">${rr.first?'+'+ep.xp+' XP':'XP earned'}</span></div></div>
  <div class="card lesson"><span class="eyebrow">Takeaway</span><h2 data-testid="takeaway">${ep.take}</h2>
   <span class="eyebrow" style="color:var(--coral)">Your real-life step</span>
   <p style="font-size:16px;line-height:1.45;margin:6px 0 ${ep.small?'8':'14'}px" id="ep-act">${ep.action}</p>
   ${ep.small?`<button class="link" data-a="epSmall" style="margin-bottom:12px;display:block">${E.small?'Back to the full step':'Want a smaller step?'}</button>`:''}
   <button class="bigcheck ${aDone?'ok':''}" data-a="epdone" data-testid="ep-done">${ic('check')}<span>${aDone?'Done \u2713':'I\u2019ll do it'}</span></button></div>
  <p class="sec-t" style="text-align:center">${isNew?'New trait card unlocked':'Your trait card'}</p>${traitCard(ep.trait,got,true)}
  <div class="card" style="margin-top:16px"><span class="eyebrow">The path you didn\u2019t take</span><p style="font-size:15px;font-weight:700;margin:6px 0 4px">${other.label}: ${other.title}</p><p class="mute" style="font-size:14px;line-height:1.45">${other.why}</p>
   <button class="btn ghost sm" style="margin-top:12px" data-a="eptry">Watch the other path</button></div>
  <button class="btn" style="margin-top:14px" data-a="closeov">Back to Today</button></div></div>`;
 }
 ov.innerHTML=`<div class="screen ep">${view}</div>`;
}

/* ---------- share ---------- */
async function share(id){
 const s=STORIES.find(x=>x.id===id)||R&&R.s||P&&P.s;
 const text=`\u201c${s.moral}\u201d \u2014 ${s.title}, a 3-minute story on EthosSAI (demo).`;
 const url=location.href.split('#')[0];
 try{if(navigator.share){await navigator.share({title:s.title,text,url});return}}catch(e){if(e&&e.name==='AbortError')return}
 try{await navigator.clipboard.writeText(text+' '+url);toast('Copied to share')}
 catch(e){const t=document.createElement('textarea');t.value=text+' '+url;document.body.appendChild(t);t.select();try{document.execCommand('copy');toast('Copied to share')}catch(_){toast('Copy this: '+s.moral)}t.remove()}
}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,v=b.dataset.v;
 switch(a){
 case'go':go(v);break;
 case'obnext':if(OB.step===1&&!ageMsg(S.age).ok)break;OB.step++;render();break;
 case'obskip':if(OB.step===0){OB.step=1;render()}else finishOb();break;
 case'obback':OB.step--;render();break;
 case'g':S.av.g=v;save();OB.step===1?refreshLook():refreshOvLook();break;
 case'skin':S.av.skin=v;save();OB.step===1?refreshLook():refreshOvLook();break;
 case'hood':S.av.hoodie=v;save();OB.step===1?refreshLook():refreshOvLook();break;
 case'obdone':finishOb();break;
 case'editlook':openOverlay({type:'look'});break;
 case'looksave':S.name=$('#nm').value.trim();save();closeOverlay();break;
 case'closeov':closeOverlay();break;
 case'open':{const layer=b.dataset.layer,id=b.dataset.id;
  if(layer==='read')openOverlay({type:'reader',id});
  else if(layer==='listen')openOverlay({type:'player',id});
  else{E=null;openOverlay({type:'ep',id})}break}
 case'act':doAction(b.dataset.key);render();break;
 case'mode':S.mode=v;save();render();break;
 case'rnext':rGo(R.i+1);break;case'rprev':rGo(R.i-1);break;
 case'readdone':{const k='act:read:'+R.s.id;if(doAction(k)){b.classList.add('ok');b.querySelector('span').textContent='Done \u2713'}break}
 case'share':share(b.dataset.id);break;
 case'closesheet':closeSheet();break;
 case'reopen':openOverlay({type:'player',id:P.s.id});break;
 case'minipp':pToggle();break;
 case'ptoggle':pToggle();break;
 case'pback':A.currentTime=Math.max(0,A.currentTime-15);break;
 case'pfwd':pSeekTotal(Math.min(pTotal()-.5,pBefore()+A.currentTime+15));break;
 case'pprev':if(A.currentTime>3||P.ch===0)A.currentTime=0;else pLoad(P.ch-1,!A.paused);break;
 case'pnext':if(P.ch<P.s.chapters.length-1)pLoad(P.ch+1,!A.paused);break;
 case'pspeed':{const k=(SPEEDS.indexOf(P.speed)+1)%SPEEDS.length;P.speed=SPEEDS[k];A.defaultPlaybackRate=P.speed;A.playbackRate=P.speed;pUI();toast('Speed '+P.speed+'\u00d7');break}
 case'pchapters':openChapters();break;
 case'pgoch':pLoad(+v,true);closeSheet();break;
 case'ptimer':openTimer();break;
 case'settimer':setTimer(v==='off'||v==='eoc'?v:+v);break;
 case'listendone':{if(doAction('act:listen:'+b.dataset.id)){b.classList.add('ok');b.querySelector('span').textContent='Done \u2713'}break}
 case'epnext':E.step++;epDraw();break;
 case'epPick':E.pick=+v;epDraw();break;
 case'epgo':if(E.pick!=null){E.step++;epDraw()}break;
 case'epSmall':{E.small=!E.small;const ep=E.ep;$('#ep-act').textContent=E.small?ep.small:ep.action;b.textContent=E.small?'Back to the full step':'Want a smaller step?';break}
 case'epdone':{const ep=E.ep;if(doAction('act:watch:'+ep.id)){b.classList.add('ok');b.querySelector('span').textContent='Done \u2713'}break}
 case'eptry':{const ep=E.ep,np=1-E.pick;E={ep,step:ep.act1.length+1,pick:np,replay:true};epDraw();break}
 case'nextday':S.offset++;save();render();toast('Simulated: next day');break;
 case'reset':if(confirm('Reset all demo data on this device?')){A.pause();P=null;A.removeAttribute('src');S=fresh();OB={step:0};save();tab='today';closeOverlay(true);render()}break;
 }
});
function finishOb(){if(!ageMsg(S.age).ok){OB.step=1;render();return}const n=$('#nm');if(n)S.name=n.value.trim();S.onboarded=true;save();tab='today';lastTab=null;render()}
function refreshLook(){const w=$('#avwrap');if(w)w.innerHTML=avatar(S.av);document.querySelectorAll('.sw button,.seg button').forEach(x=>{const act=x.dataset.a,val=x.dataset.v;x.classList.toggle('on',(act==='g'&&S.av.g===val)||(act==='skin'&&S.av.skin===val)||(act==='hood'&&S.av.hoodie===val))})}
function refreshOvLook(){const nm=$('#nm')?$('#nm').value:'';const inner=ov.querySelector('.ob');if(inner){inner.innerHTML=`<div class="steps">${backBtn()}</div>${lookPanel(true)}`;$('#nm').value=nm}}
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='nm'){e.preventDefault()}});
document.addEventListener('input',e=>{
 if(e.target.id==='nm'){S.name=e.target.value;save()}
 if(e.target.id==='age'){const v=e.target.value.trim(),m=ageMsg(v);$('#agemsg').innerHTML=m.html;$('#agebtn').disabled=!m.ok;S.age=m.ok?String(parseInt(v,10)):'';save()}
});

render();
// service worker not used; keep the demo simple
window.__ethos={get state(){return S},audio:A,get player(){return P}};
})();
