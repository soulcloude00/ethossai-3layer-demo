(()=>{
'use strict';
const $=s=>document.querySelector(s);
const KEY='ethossai_3layer_demo_v3';
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
 gauge:'<path d="M12 14l4-4"/><path d="M3.3 17a10 10 0 1 1 17.4 0"/>',
 gift:'<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
 snow:'<path d="M12 2v20M4.9 7l14.2 10M4.9 17 19.1 7M2 12h20"/>',
 trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 6h2a2 2 0 0 1 0 4h-2M7 6H5a2 2 0 0 0 0 4h2"/>',
 download:'<path d="M12 3v12M7 11l5 5 5-5M4 21h16"/>',
 game:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/>'
};
const ic=(n,c='')=>`<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true">${I[n]}</svg>`;
const icf=n=>ic(n,'f');
const im=(src,alt='',lazy=true)=>`<img src="${src}" alt="${String(alt).replace(/"/g,'&quot;')}" decoding="async"${lazy?' loading="lazy"':''}>`;
const backBtn=(cls='')=>`<button class="backb ${cls}" data-a="closeov" data-testid="back" aria-label="Back">${ic('back')}<span>Back</span></button>`;

/* ---------- content ---------- */
const TRAITS={
 kite:{name:'Own String',line:'You fly your own kite, not theirs.',tag:'READ · IDENTITY',img:'img/trait_raw1.webp',rarity:'rare'},
 well:{name:'Deep Digger',line:'You stay in one hole until water shows up.',tag:'LISTEN · FOCUS',img:'img/trait_raw2.webp',rarity:'rare'},
 listener:{name:'The Listener',line:'You ask before you guess.',tag:'WATCH · FOUNDERS',img:'img/ep/e1endB.webp',rarity:'common'},
 pause:{name:'Pause Keeper',line:'You let wants cool off before they cost you.',tag:'WATCH · MONEY',img:'img/ep/e2endB.webp',rarity:'common'},
 voice:{name:'Brave Voice',line:'You speak up for what you need.',tag:'WATCH · SPEAKING',img:'img/ep/e3endB.webp',rarity:'common'},
 talker:{name:'Straight Talker',line:'You say it clearly and kindly.',tag:'WATCH · LOVE · 18+',img:'img/ep/e5endB.webp',adult:true,rarity:'rare'},
 steady:{name:'Steady Hand',line:'You let the first try be a try.',tag:'WATCH · CALM',img:'img/ep/e4endB.webp',rarity:'common'},
 honest:{name:'Honest Rupee',line:'You do not pay to “get a refund.”',tag:'PLAY · HONESTY',img:'img/ep/e2a.webp',rarity:'rare'},
 patient:{name:'The Pauser',line:'You let a want wait a day.',tag:'PLAY · PATIENCE',img:'img/hero_s2.webp',rarity:'common'},
 respect:{name:'Kind No',line:'You can say no and still be kind.',tag:'PLAY · SELF-RESPECT',img:'img/ep/e3endB.webp',rarity:'rare'},
 kind:{name:'Soft Voice',line:'A clear no can still be warm.',tag:'VALUES · KINDNESS',img:'img/ep/e4endB.webp',rarity:'common'},
 focus:{name:'Quiet Desk',line:'You keep the pings off your notes.',tag:'PLAY · FOCUS',img:'img/ep/e4a.webp',rarity:'rare'},
 saver:{name:'Jar Starter',line:'You put a little aside first.',tag:'MONEY · PATIENCE',img:'img/ep/e2endB.webp',rarity:'rare'},
 shield:{name:'Scam Shield',line:'You can spot a money trap in time.',tag:'PLAY · LEGENDARY',img:'img/ep/e1endA.webp',rarity:'legendary'},
 warm:{name:'Warm Hello',line:'You notice the people next to you.',tag:'VALUES · KINDNESS',img:'img/fan3.webp',rarity:'common'},
 dawn:{name:'Early Light',line:'You start small, then show up again.',tag:'HABIT · PATIENCE',img:'img/fan1.webp',rarity:'common'},
 root:{name:'Deep Roots',line:'You stay with one hard thing a little longer.',tag:'FOCUS · RARE',img:'img/hero_s2.webp',rarity:'rare'},
 lantern:{name:'Light Keeper',line:'You keep a small promise to yourself.',tag:'HABIT · COMMON',img:'img/ep/e1a.webp',rarity:'common'},
 compass:{name:'Own Path',line:'You choose your sky, not theirs.',tag:'IDENTITY · LEGENDARY',img:'img/trait_raw1.webp',rarity:'legendary'},
 comeback:{name:'Comeback',line:'A missed day did not end your streak.',tag:'STREAK · LEGENDARY',img:'img/ep/e1endB.webp',rarity:'legendary'}
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
const LEVELS=[['Spark',0,80],['Flame',80,200],['Torch',200,400],['Blaze',400,99999]];

/* ---------- state ---------- */
const fresh=()=>({onboarded:false,hint:false,name:'',age:'',av:{g:'girl',skin:SKIN[2],hoodie:HOOD[1]},xp:0,offset:0,done:{},daily:{},actions:{},traits:{},ep:{},freeze:0,freezeEarned:false,weekXp:0,weekStart:0,week:{xp:0,stories:0,listens:0,actions:0,plays:0,traits:[]},kite:{},mystery:{},best:{trap:0,focus:0},demoHour:null,sound:false,lang:'en',interests:[],cue:'',goalN:1,daysActive:0,repair:null,pauseLeft:0,remind:false,remindHour:21,debug:false,events:[],offeredGoal3:false});
let S;try{S=Object.assign(fresh(),JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){S=fresh()}
const save=()=>{if(!S.onboarded)return;try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const dstr=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const dayAt=o=>{const d=new Date();d.setDate(d.getDate()+o);return d};
const today=()=>dstr(dayAt(S.offset));
const ageN=()=>parseInt(S.age,10)||0;
const adult=()=>ageN()>=18;
const teen=()=>ageN()>=14&&ageN()<18;
const visEps=()=>EPS.filter(e=>!e.adult||adult());
const visTraits=()=>Object.keys(TRAITS).filter(k=>!TRAITS[k].adult||adult());
const QS=new URLSearchParams(location.search);
function lang(){return S.lang==='hi'?'hi':'en'}
function t(k,a,b){
 const pack=window.ETHOS_LANG||{};
 const d=pack[lang()]||pack.en||{};
 const v=d[k]!=null?d[k]:(pack.en||{})[k];
 return typeof v==='function'?v(a,b):(v!=null?v:k);
}
function trapCopy(c){if(!c)return c;const hi=lang()==='hi'&&window.HI_TRAP&&window.HI_TRAP[c.id];return hi?Object.assign({},c,hi):c}
function chText(s,ch){const hi=lang()==='hi'&&window.HI_STORIES&&window.HI_STORIES[s.id]&&window.HI_STORIES[s.id].cards;return (hi&&hi[ch.n])||ch.text}
function storyMoral(s){const hi=lang()==='hi'&&window.HI_STORIES&&window.HI_STORIES[s.id];return hi?hi.moral:s.moral}
function storyAction(s){const hi=lang()==='hi'&&window.HI_STORIES&&window.HI_STORIES[s.id];return hi?hi.action:s.action}
function track(name,props){
 S.events=S.events||[];
 S.events.push({name,props:props||{},t:Date.now()});
 if(S.events.length>200)S.events=S.events.slice(-200);
 if(S.onboarded)save();
}
function haptic(kind){
 if(reduced)return;
 if(navigator.vibrate)try{navigator.vibrate(kind==='bad'?[35,25,35]:kind==='win'?[12,24,18]:10)}catch(e){}
}
const INTRO_IDS=['upi','prize','emi','intern','jar'];
function introCards(){return INTRO_IDS.map(id=>TRAP_CARDS.find(c=>c.id===id)).filter(Boolean)}

const reduced=matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const dayIdx=()=>((S.offset%2)+2)%2;
const TD=()=>S.daily[today()]||{};
function itemsToday(day){const d=S.daily[day]||{};let n=0;if(d.read)n++;if(d.listen)n++;if(d.watch)n++;if(d.play)n++;if(d.action)n++;return n}
function dayDone(k){const d=S.daily[k]||{};return !!(d.streakOn||d.frozen||d.paused||d.repaired)}
function streaks(){
 let cur=0,o=S.offset;if(!dayDone(dstr(dayAt(o))))o--;
 while(dayDone(dstr(dayAt(o)))){cur++;o--}
 const ks=Object.keys(S.daily).sort();let best=0,run=0,prev=null;
 ks.forEach(k=>{if(!dayDone(k)){run=0;prev=null;return}const t=new Date(k+'T00:00').getTime();run=(prev&&Math.round((t-prev)/864e5)===1)?run+1:1;prev=t;best=Math.max(best,run)});
 return{cur,best:Math.max(best,cur)};
}
const level=()=>{const l=LEVELS.find(l=>S.xp<l[2])||LEVELS[LEVELS.length-1];return{n:l[0],lo:l[1],hi:l[2],p:Math.min(100,(S.xp-l[1])/(l[2]-l[1])*100)}};
function goalTarget(){return S.goalN===3?3:1}
function goalOf(day){
 const d=S.daily[day]||{};
 const story=!!(d.read||d.watch);
 const listen=!!d.listen;
 const action=!!(d.action||d.play||Object.keys(S.actions).some(k=>S.actions[k]===day));
 const n=itemsToday(day);
 const tgt=goalTarget();
 return{story,listen,action,n,target:tgt,done:n>=tgt};
}
function weekObj(){S.week=S.week||{xp:0,stories:0,listens:0,actions:0,plays:0,traits:[]};return S.week}
function addXP(n){
 if(!n)return false;
 const before=level().n;
 S.xp+=n;weekObj().xp=(S.week.xp||0)+n;S.weekXp=(S.weekXp||0)+n;
 save();
 const after=level().n;
 if(after!==before) setTimeout(()=>showLevelUp(after),400);
 return after!==before;
}
function grantTrait(k){
 if(!k||S.traits[k]||(TRAITS[k]&&TRAITS[k].adult&&!adult()))return false;
 S.traits[k]=today();
 const w=weekObj();w.traits=w.traits||[];if(!w.traits.includes(k))w.traits.push(k);
 save();return true;
}
let toastT;
function clearToast(){clearTimeout(toastT);const b=$('#toastbox');if(b)b.innerHTML=''}
function toast(m){const b=$('#toastbox');if(!b)return;b.innerHTML=`<div class="toast" role="status">${m}</div>`;clearTimeout(toastT);toastT=setTimeout(()=>b.innerHTML='',2400)}
function complete(layer,id,xp){
 const k=layer+':'+id;const d=S.daily[today()]=S.daily[today()]||{};d[layer]=id;
 const first=!S.done[k];let newTrait=null;
 if(first){S.done[k]=today();addXP(xp);
  const w=weekObj();
  if(layer==='watch'||(layer==='read'&&id!=='s1-p1'))w.stories=(w.stories||0)+1;
  if(layer==='listen')w.listens=(w.listens||0)+1;
  if(layer==='play')w.plays=(w.plays||0)+1;
  let tid=null;
  if(layer==='watch')tid=(EPS.find(e=>e.id===id)||{}).trait;
  else if(layer==='listen'||(layer==='read'&&id!=='s1-p1')){const s=STORIES.find(x=>x.id===id||(id&&id.startsWith(x.id)));tid=s&&s.trait}
  if(tid&&grantTrait(tid))newTrait=tid}
 maybeStreak();
 save();track('item_complete',{layer,id});return{first,newTrait,xp};
}
function doAction(key,xp=10){if(S.actions[key])return false;S.actions[key]=today();const d=S.daily[today()]=S.daily[today()]||{};d.action=key;weekObj().actions=(S.week.actions||0)+1;addXP(xp);maybeStreak();save();track('micro_action_done',{key});toast('Tiny action done \u00b7 +'+xp+' XP');return true}
function maybeStreak(){
 const d=S.daily[today()]=S.daily[today()]||{};
 if(itemsToday(today())>=1 && !d.streakOn){
  d.streakOn=true;
  if(!d.activeCounted){d.activeCounted=true;S.daysActive=(S.daysActive||0)+1}
  track('streak_extend',{streak:streaks().cur});
  haptic('ok');
  const st=streaks();
  if(st.cur>=3&&!S.freezeEarned){S.freeze=(S.freeze||0)+1;S.freezeEarned=true;setTimeout(()=>toast('Streak freeze earned. Miss a day, keep the streak.'),800)}
  save();
 }
 if(S.repair&&S.repair.need){
  S.repair.got=itemsToday(today());
  if(S.repair.got>=S.repair.need){
   const miss=S.repair.miss;
   if(miss){S.daily[miss]=S.daily[miss]||{};S.daily[miss].repaired=true}
   toast('Your '+S.repair.save+'-day streak is safe.');
   S.repair=null;haptic('win');save();
  }
 }
 maybeGoal();
}
function maybeGoal(){
 const g=goalOf(today());
 if(g.done){const d=S.daily[today()]=S.daily[today()]||{};
  if(!d.goal){d.goal=true;
   if(!d.celebrated){d.celebrated=true;save();confetti();toast('You hit today\u2019s goal.');haptic('win')}
  }save()}
}
const SAMPLE_PEOPLE=[
 {name:'Kabir M.',xp:160},
 {name:'Meera S.',xp:120},
 {name:'Dev P.',xp:85},
 {name:'Zoya K.',xp:55}
];
const SAMPLE_FRIEND={name:'Anaya',streak:5};
function leagueTier(xp){return xp>=200?'gold':xp>=100?'silver':'bronze'}
function leagueBoard(){
 const me={name:(S.name||'You')+' (you)',xp:S.weekXp||0,me:true};
 return SAMPLE_PEOPLE.concat([me]).sort((a,b)=>b.xp-a.xp||(a.me?-1:1));
}
const MYSTERY_ROT=[
 {kind:'quote',xp:8,text:'A small honest no today is worth more than a loud yes you cannot keep.',trait:null},
 {kind:'xp',xp:15,text:'Bonus XP for showing up today. Put it toward the next hard thing, not a treat you do not need.'},
 {kind:'trait',xp:10,text:'A rare trait card slipped out of the box.',trait:'compass'},
 {kind:'quote',xp:8,text:'Comparing two prices takes five minutes. A rushed buy can cost a week of lunch money.',trait:null},
 {kind:'trait',xp:10,text:'Patience showed up in the box.',trait:'patient'},
 {kind:'xp',xp:12,text:'A little bonus XP. Like a SIP, it only matters if you come back tomorrow.'},
 {kind:'trait',xp:10,text:'A kind-no card for the next time a group spends more than you can.',trait:'kind'}
];
function mysteryFor(day){
 S.mystery=S.mystery||{};
 if(S.mystery[day])return S.mystery[day];
 const i=Math.abs(S.offset||0)%MYSTERY_ROT.length;
 const src=MYSTERY_ROT[i];
 let trait=src.trait;
 if(trait&&(S.traits[trait]||(TRAITS[trait]&&TRAITS[trait].adult&&!adult())))trait=(['dawn','warm','lantern','root'].find(k=>!S.traits[k]))||null;
 const m={kind:trait?'trait':src.kind,xp:src.xp,text:src.text,trait,opened:false};
 S.mystery[day]=m;save();return m;
}

function beep(kind){
 haptic(kind);
 if(!S.sound||reduced)return;
 try{
  const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
  const ctx=beep._c||(beep._c=new C());
  const o=ctx.createOscillator(),g=ctx.createGain();
  o.type='sine';o.frequency.value=kind==='bad'?180:kind==='win'?660:420;
  g.gain.value=0.06;o.connect(g);g.connect(ctx.destination);o.start();
  g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.12);o.stop(ctx.currentTime+0.13);
 }catch(e){}
}
function confetti(){
 const host=$('#phone');if(!host)return;
 const c=document.createElement('canvas');c.className='fx-canvas';c.setAttribute('data-testid','confetti');
 host.appendChild(c);const r=host.getBoundingClientRect();c.width=r.width;c.height=r.height;
 const x=c.getContext('2d'),bits=[];
 const cols=['#F2B544','#FFE7AE','#FF8A7A','#2f8f8a','#f3ead6'];
 for(let i=0;i<80;i++)bits.push({x:c.width/2+(Math.random()-0.5)*80,y:c.height*0.28,vx:(Math.random()-0.5)*7,vy:-Math.random()*7-3,s:4+Math.random()*6,c:cols[i%cols.length],a:1,rot:Math.random()*6});
 let n=0;const tick=()=>{x.clearRect(0,0,c.width,c.height);bits.forEach(b=>{b.vy+=0.18;b.x+=b.vx;b.y+=b.vy;b.rot+=0.1;b.a-=0.012;x.save();x.translate(b.x,b.y);x.rotate(b.rot);x.globalAlpha=Math.max(0,b.a);x.fillStyle=b.c;x.fillRect(-b.s/2,-b.s/2,b.s,b.s*0.6);x.restore()});
  if(++n<90&&bits.some(b=>b.a>0))requestAnimationFrame(tick);else c.remove()};
 if(reduced)c.remove();else requestAnimationFrame(tick);
}
function showLevelUp(name){
 if(sheet.classList.contains('show')){pendingLevel=name;return}
 openSheet(`<div class="lvlup" data-testid="level-up"><div class="fl">${icf('flame')}</div><p class="eyebrow">Level up</p><h3 style="font-size:28px;margin:6px 0 8px">You reached ${name}!</h3><p class="mute" style="font-size:15px;line-height:1.45">Keep the habit small. The level is just a name for showing up.</p><button class="btn" style="margin-top:16px" data-a="closesheet" data-testid="level-up-ok">Nice</button></div>`);
}

const TRAP_CARDS=[
 {id:'upi',ans:'trap',value:'Honesty',title:'A \u201ccustomer care\u201d call',scene:'Your UPI payment looks like it failed. The person on the phone says: \u201cScan this QR code to get a refund.\u201d',why:'Real banks never ask you to scan a QR code to get a refund. If someone rushes you, it is not help.'},
 {id:'prize',ans:'trap',value:'Patience',title:'You won a prize?',scene:'A text says: \u201cYou have won \u20b950,000! Pay \u20b999 now to claim your prize.\u201d',why:'If you must pay to collect a prize, it is not a prize. A real win does not start with a fee.'},
 {id:'emi',ans:'trap',value:'Patience',title:'No-cost EMI',scene:'A shop offers a new phone at \u20b90 down and \u201cno-cost EMI.\u201d Your old phone still works, and you have exams this month.',why:'EMI is still a loan. \u201cNo-cost\u201d can hide fees. A phone you do not need can quietly eat next month\u2019s money.'},
 {id:'bets',ans:'trap',value:'Self-respect',title:'A sure-shot tip',scene:'A WhatsApp group sells \u201csure-shot\u201d cricket bets and crypto tips. Two friends already put in \u20b9500 and tell you to hurry.',why:'Betting groups and crypto \u201ctip\u201d chats are built to take your money, not to share a secret. Walking away is self-respect.'},
 {id:'intern',ans:'trap',value:'Honesty',title:'Pay to intern',scene:'A \u201cremote internship\u201d asks for a \u20b92,000 registration fee before you start, and promises a certificate in two weeks.',why:'A real internship pays you, or at least costs you nothing to join. Honesty does not start with a fee to \u201cget in.\u201d'},
 {id:'party',ans:'trap',value:'Self-respect',title:'Just this once',scene:'At a friend\u2019s birthday, the table orders kebabs and mocktails you cannot afford. Someone says, \u201cCome on, just this once.\u201d',why:'A kind, clear \u201cI\u2019ll sit this one out\u201d is self-respect, not rudeness. Friends who care will still want you there.'},
 {id:'jar',ans:'smart',value:'Patience',title:'First stipend',scene:'Your first stipend just landed. Before you buy anything, you put \u20b9500 into a jar and leave it for a bad day.',why:'An emergency fund is money for a hard day, not for a want. That is how you stay kind to future you.'},
 {id:'sip',ans:'smart',value:'Patience',title:'A small SIP',scene:'A cousin says you can start a SIP (a Systematic Investment Plan) with \u20b9100 a month in a simple index fund, using money you can leave untouched.',why:'A SIP is just a small, regular investment. It does not promise profit. Starting tiny, and staying, beats one \u201chot tip.\u201d'}
];

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
function go(t){tab=t;clearToast();closeOverlay(true);render()}
function openOverlay(o){OV=o;renderOverlay();updateMini()}
function closeOverlay(silent){
 stopFocus();clearToast();if(trapSwipeOff){trapSwipeOff();trapSwipeOff=null}
 const had=ov.classList.contains('show');OV=null;
 if(had&&!reduced){ov.classList.add('out');setTimeout(()=>{if(!OV){ov.classList.remove('show','out');ov.innerHTML=''}},190)}
 else{ov.classList.remove('show','out');ov.innerHTML=''}
 if(!silent){render()}updateMini();
}
let pendingLevel=null;
function openSheet(html){sheet.innerHTML=`<div class="pane">${html}</div>`;sheet.classList.add('show')}
function closeSheet(){sheet.classList.remove('show');sheet.innerHTML='';if(pendingLevel){const n=pendingLevel;pendingLevel=null;setTimeout(()=>showLevelUp(n),250)}}

sheet.addEventListener('click',e=>{if(e.target===sheet)closeSheet()});

function render(){
 if(QS.get('parents')==='1'){app.innerHTML=viewParents(true);return}
 if(!S.onboarded){app.innerHTML=viewOnboarding();return}
 const l=level(),st=streaks();
 const body={today:viewToday,read:viewRead,listen:viewListen,watch:viewWatch,you:viewYou}[tab]();
 const nav=[['today','home','Today'],['read','book','Swipe'],['listen','head','Listen'],['watch','film','Watch'],['you','user','Me']]
  .map(([k,i,n])=>`<button data-a="go" data-v="${k}" class="${tab===k?'on':''}" aria-label="${n}" ${tab===k?'aria-current="page"':''}>${ic(i)}<span>${n}</span></button>`).join('');
 app.innerHTML=`<div class="screen" data-tab="${tab}">
  <div class="top"><span class="brand">Ethos<b>SAI</b></span><button class="demo-hit" data-a="demodots" data-testid="demo-badge" aria-label="Demo"><span class="demo">DEMO</span></button><span class="sp"></span>
  <button class="chip flamechip" title="Streak" data-a="scrollstreak" data-testid="streak-chip">${icf('flame')}<span>${st.cur}</span></button></div>
  <div class="scroll ${tab!==lastTab&&!reduced?'enter':''}" id="scroll">${body}</div>
  <nav class="nav" aria-label="Main">${nav}</nav></div>`;
 lastTab=tab;updateMini();
}

/* ---------- onboarding ---------- */
function ageMsg(v){
 const n=parseInt(v,10);
 if(!v)return{html:'',ok:false};
 if(isNaN(n)||n>99)return{html:'<div class="note warn">'+t('badAge')+'</div>',ok:false};
 if(n<14)return{html:'<div class="note warn" data-testid="under14">'+t('under14')+'</div>',ok:false};
 if(n<18)return{html:'<div class="note good" data-testid="teen-note">'+t('teenNote')+'</div>',ok:true};
 return{html:'<div class="note good">'+t('adultNote')+'</div>',ok:true};
}
function langToggle(){
 return `<div class="lang-switch" data-testid="lang-toggle"><button data-a="setlang" data-v="en" class="${lang()==='en'?'on':''}" data-testid="lang-en">${t('langEn')}</button><button data-a="setlang" data-v="hi" class="${lang()==='hi'?'on':''}" data-testid="lang-hi">${t('langHi')}</button></div>`;
}
function startIntroTrap(challenge){
 const cards=introCards();
 openOverlay({type:'trap',intro:true,challenge:!!challenge,g:{i:0,score:0,locked:false,verdict:null,marks:[],cards,paid:true}});
 track('onboarding_step',{step:challenge?'challenge_trap':'intro_trap'});
}
function viewOnboarding(){
 const s=OB.step;
 const back=s>0?`<button class="backb" data-a="obback" data-testid="ob-back" aria-label="Back">${ic('back')}<span>${t('back')}</span></button>`:'';
 if(s===0)return`<div class="ob" data-ob="0" data-testid="first-screen">
  <div class="steps">${langToggle()}<span class="sp"></span><span class="demo">DEMO</span></div>
  <p class="eyebrow">EthosSAI · Demo</p>
  <h1 class="hero-h" style="margin-top:6px" data-testid="headline">${t('tagline')}</h1>
  <p class="mute" style="font-size:16px;line-height:1.45;margin:10px 0 0">${t('subline')}</p>
  <p class="mute" style="font-size:15px;margin-top:6px">${t('hiLine')}</p>
  <div class="need-row">
   <button class="need" data-a="trychip" data-v="money" data-testid="chip-upi">🛡️ ${t('chipUpi')}</button>
   <button class="need" data-a="trychip" data-v="speak" data-testid="chip-speak">🎤 ${t('chipSpeak')}</button>
   <button class="need" data-a="trychip" data-v="calm" data-testid="chip-calm">🧘 ${t('chipCalm')}</button>
  </div>
  <div class="fan">${im("img/fan1.webp","",false)}${im("img/ep/e2endB.webp","",false)}${im("img/fan3.webp","",false)}<span>WATCH</span><span>LISTEN</span><span>SWIPE</span></div>
  <p class="mute" style="font-size:14px;text-align:center;margin:4px 0 10px">${t('fanCap')}</p>
  <p class="mute" style="font-size:14px;line-height:1.45;margin-bottom:auto;text-align:center">${t('agesNote')}</p>
  <button class="btn" data-a="tryone" data-testid="start">${t('ctaTry')}</button>
  <p class="mute small" style="text-align:center;margin-top:10px">${t('demoStay')}</p></div>`;
 if(s===1){const m=ageMsg(S.age);return`<div class="ob" data-ob="1">
  <div class="steps">${back}<span class="sp"></span>${langToggle()}</div>
  <h1 class="hero-h" style="font-size:30px;margin-bottom:8px">${t('howOld')}</h1>
  <p class="mute" style="font-size:16px;line-height:1.5;margin-bottom:14px">${t('howOldSub')}</p>
  <label class="lbl" for="age" style="margin-top:0">${t('howOld')}</label>
  <input class="txt" id="age" data-testid="age" type="number" inputmode="numeric" min="14" max="99" placeholder="${t('agePh')}" value="${S.age||''}" autocomplete="off">
  <div id="agemsg" role="status" aria-live="polite">${m.html}</div>
  <div style="margin-top:auto"></div>
  <button class="btn" id="agebtn" data-a="obnext" data-testid="age-next" ${m.ok?'':'disabled'}>${t('next')}</button></div>`}
 if(s===2){
  const ints=S.interests||[];
  const opts=[['money',t('intMoney')],['speak',t('intSpeak')],['focus',t('intFocus')],['calm',t('intCalm')],['build',t('intBuild')]];
  if(adult())opts.push(['love',t('intLove')+' · 18+']);
  return`<div class="ob" data-ob="2" data-testid="goal-picker">
   <div class="steps">${back}<span class="sp"></span>${langToggle()}</div>
   <h1 class="hero-h" style="font-size:28px">${t('goalQ')}</h1>
   <p class="mute" style="font-size:15px;line-height:1.5;margin:8px 0 4px">${t('goalSub')}</p>
   <div class="pickgrid">${opts.map(([id,lab])=>`<button class="pick ${ints.includes(id)?'on':''}" data-a="pickint" data-v="${id}" data-testid="int-${id}">${lab}</button>`).join('')}</div>
   <div style="margin-top:auto"></div>
   <button class="btn" data-a="obnext" data-testid="goal-next">${t('next')}</button></div>`;
 }
 const cue=S.cue||'';
 const cues=[['class',t('cueClass')],['commute',t('cueCommute')],['dinner',t('cueDinner')],['bed',t('cueBed')]];
 return`<div class="ob" data-ob="3" data-testid="when-picker">
  <div class="steps">${back}<span class="sp"></span>${langToggle()}</div>
  <h1 class="hero-h" style="font-size:28px">${t('whenQ')}</h1>
  <p class="mute" style="font-size:15px;line-height:1.5;margin:8px 0 12px">${t('whenSub')}</p>
  <div class="cue-list">${cues.map(([id,lab])=>`<button class="btn ${cue===id?'':'ghost'} sm" data-a="pickcue" data-v="${id}" data-testid="cue-${id}">${lab}</button>`).join('')}</div>
  <div style="margin-top:auto;padding-top:16px"></div>
  <button class="btn" data-a="obdone" data-testid="finish" ${cue?'':'disabled'}>${t('letsGo')}</button></div>`;
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
function isItemDone(it){
 const d=TD();
 if(!it)return true;
 if(it.kind==='read'){
  if(it.id==='s1'){const k=S.kite||{};if(it.part==='p2')return !!k.p2;return !!k.p1}
  return !!S.done['read:'+it.id]
 }
 if(it.kind==='listen')return !!d.listen||!!S.done['listen:'+it.id]
 if(it.kind==='watch')return !!S.done['watch:'+it.id]
 if(it.kind==='play')return d.play===it.game
 return false;
}
function heroOrder(){
 const kite=S.kite||{};
 const kiteItem=(!kite.p1)?{kind:'read',id:'s1',part:'p1',title:'The Kite That Copied',sub:'Part 1 · 6 cards and a cliffhanger',img:'img/hero_s1.webp'}:
  (kite.p2ready&&!kite.p2)?{kind:'read',id:'s1',part:'p2',title:'The Kite That Copied',sub:'Part 2 is ready',img:'img/cards/s1_07.webp',testid:'part2-ready'}:
  {kind:'read',id:'s2',title:'The Hole He Didn’t Leave',sub:'10 cards · about 3 min',img:'img/hero_s2.webp'};
 const trap={kind:'play',game:'trap',title:'Spot the Trap',sub:'Real money traps vs smart moves',img:'img/ep/e2a.webp'};
 const focus={kind:'play',game:'focus',title:'Focus Tap',sub:'Study 30 seconds. Ignore the pings.',img:'img/hero_s2.webp'};
 const eps=Object.fromEntries(visEps().map(e=>[e.id,{kind:'watch',id:e.id,title:e.title,sub:e.series+' · 1 min',img:e.thumb}]));
 const listen={kind:'listen',id:STORIES[1-dayIdx()].id,title:STORIES[1-dayIdx()].title,sub:'Audio story · about 2 min',img:STORIES[1-dayIdx()].hero};
 const map={money:[trap,eps.e2].filter(Boolean),speak:[eps.e3].filter(Boolean),focus:[focus,listen],calm:[eps.e4].filter(Boolean),build:[eps.e1,kiteItem].filter(Boolean),love:adult()&&eps.e5?[eps.e5]:[]};
 const pref=(S.interests||[]).flatMap(i=>map[i]||[]);
 const rest=[kiteItem,trap,listen,eps[visEps()[0]&&visEps()[0].id],focus].filter(Boolean);
 const seen=new Set();const out=[];
 [...pref,...rest].forEach(it=>{const k=it.kind+':'+(it.id||it.game);if(!seen.has(k)){seen.add(k);out.push(it)}});
 return out;
}
function heroItem(){return heroOrder().find(it=>!isItemDone(it))||null}
function openHero(it){
 if(!it)return;
 if(it.kind==='play'&&it.game==='trap')openOverlay({type:'trap'});
 else if(it.kind==='play'&&it.game==='focus')openOverlay({type:'focus'});
 else openOverlay({type:it.kind==='watch'?'ep':it.kind,id:it.id,layer:it.kind==='read'?'read':it.kind==='listen'?'listen':'watch'});
}
function viewToday(){
 const i=dayIdx(),rd=STORIES[i],ls=STORIES[1-i],ep=visEps()[((S.offset%visEps().length)+visEps().length)%visEps().length],d=TD();
 const g=goalOf(today()),st=streaks(),all=g.done;
 const dateLbl=dayAt(S.offset).toLocaleDateString('en-IN',{weekday:'long',day:'numeric',month:'short'});
 const hour=S.demoHour!=null?S.demoHour:new Date().getHours();
 const night=hour>=21&&st.cur>0&&itemsToday(today())===0;
 const hero=heroItem();
 const circ=2*Math.PI*20,frac=Math.min(1,g.n/Math.max(1,g.target)),dash=circ*(1-frac);
 const myst=itemsToday(today())>=1?mysteryFor(today()):null;
 const task=(layer,ic_,kind,title,sub,img,id)=>`<button class="card task ${d[layer]?'done':''}" data-a="open" data-layer="${layer}" data-id="${id}">
  <div class="th">${im(img,"",true)}</div><div class="tb"><span class="kind">${ic(ic_)}${kind}</span><h3>${title}</h3><small>${sub}</small></div>${d[layer]?`<span class="tick">${ic('check')}</span>`:''}</button>`;
 const act=(layer,key,txt)=>{const unlocked=!!d[layer],on=!!S.actions[key];return`<button class="act ${on?'on':''} ${unlocked?'':'lock'}" data-a="act" data-key="${key}" ${unlocked?'':'disabled'}>
  <span class="cb">${ic('check')}</span><div><small>${layer==='read'?'After you swipe':layer==='listen'?'After you listen':'After you watch'}</small><p>${unlocked?txt:'Finish the '+({read:'story',listen:'audio story',watch:'episode'})[layer]+' to unlock this.'}</p></div></button>`};
 const offer3=(S.daysActive||0)>=3&&S.goalN!==3&&!S.offeredGoal3;
 const repair=S.repair&&S.repair.need;
 const p2ready=(S.kite&&S.kite.p2ready&&!S.kite.p2);
 return`<p class="mute" style="font-size:13px">${dateLbl}</p>
 <h1 class="h-title" style="margin-top:2px">${S.name?('Hey '+S.name):t('todayHero')}.</h1>
 ${teen()?`<p class="note good" style="margin:10px 0 0" data-testid="teen-banner">${ic('lock')}<span>${t('teenBanner')}</span></p>`:''}
 <div class="slim" id="streakhero" data-testid="streak-hero">
  <span class="fl" style="font-size:22px" aria-hidden="true">${icf('flame')}</span>
  <div class="keep"><b data-testid="streak-count">${st.cur}-day streak</b><p style="margin:2px 0 0">${t('keepStreak')}</p></div>
  <div class="ring" data-testid="goal-ring" aria-hidden="true"><svg viewBox="0 0 48 48" width="44" height="44"><circle cx="24" cy="24" r="20" fill="none" stroke="#0b1530" stroke-width="6"/><circle cx="24" cy="24" r="20" fill="none" stroke="#F2B544" stroke-width="6" stroke-linecap="round" stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${(circ*(1-frac)).toFixed(1)}"/></svg></div>
 </div>
 ${S.pauseLeft?`<p class="note good">Exam pause: ${S.pauseLeft} day${S.pauseLeft>1?'s':''} left.</p>`:''}
 ${repair?`<div class="note good" data-testid="repair-banner">${t('repair',S.repair.save)} <b>${S.repair.got||0}/2</b></div>`:''}
 ${night?`<div class="banner-night" data-testid="ninepm-banner">${ic('moon')}<div>${t('calmBanner')} <span class="demo">DEMO</span></div></div>`:''}
 ${offer3?`<div class="card" data-testid="goal-upgrade" style="margin-bottom:14px"><p>${t('goFor3')}</p><div style="display:flex;gap:8px;margin-top:10px"><button class="btn sm" data-a="goal3">${t('goFor3Yes')}</button><button class="btn ghost sm" data-a="goal1">${t('stay1')}</button></div></div>`:''}
 ${hero?`<div class="hero-card" data-testid="hero-today"><p class="eyebrow">${t('todayHero')}</p><h2>${hero.title}</h2><p class="mute">${hero.sub}</p>
  <button class="btn playbig" data-a="heroplay" data-testid="hero-play">${t('play')}</button></div>`:
  `<div class="hero-card" data-testid="hero-today"><p class="eyebrow">${t('todayHero')}</p><h2>${t('doneToday')}</h2><p class="mute">${t('doneSub')}</p></div>`}
 ${p2ready&&(!hero||hero.part!=='p2')?`<button class="card task" style="margin-top:12px" data-a="open" data-layer="read" data-id="s1" data-testid="part2-ready"><div class="th">${im("img/cards/s1_07.webp","")}</div><div class="tb"><span class="kind">${ic('book')}Part 2 is ready</span><h3>The Kite That Copied</h3><small>Finish the story you left last night</small></div></button>`:''}
 ${myst?`<button class="card myst ${myst.opened?'open':''}" style="margin-top:14px" data-a="mystery" data-testid="mystery"><span class="box">${ic(myst.opened?'spark':'gift')}</span><div><h3>${t('mysteryReward')}</h3><p class="mute" style="font-size:14px;margin:0">${myst.opened?'Tap to see it again.':'A quote, bonus XP, or a rare card.'}</p></div></button>`:''}
 <div class="morebox" style="margin-top:16px">
  <button class="more-toggle" data-a="togglemore" data-testid="more-toggle">${t('moreWant')}</button>
  <div id="more-panel" data-testid="more-panel" style="display:${S.moreOpen?'block':'none'};padding:4px 8px 12px">
   ${task('read','book','Swipe',rd.title,'Swipe a story',rd.hero,rd.id)}
   ${task('listen','head','Listen',ls.title,'Audio story with sleep timer',ls.hero,ls.id)}
   ${task('watch','film','Watch',ep.title,ep.series+' · you choose, no wrong answer',ep.thumb,ep.id)}
   <div class="playgrid">
    <button class="card" data-a="trap" data-testid="play-trap">${ic('game')}<h3>Spot the Trap</h3><p>Real money traps vs smart moves.</p><span class="best">Best ${S.best&&S.best.trap||0}/8</span></button>
    <button class="card" data-a="focus" data-testid="play-focus">${ic('spark')}<h3>Focus Tap</h3><p>Study for 30 seconds. Ignore the pings.</p><span class="best">Best ${S.best&&S.best.focus||0}s focused</span></button>
   </div>
   <p class="sec-t">Your small actions for today</p>
   ${act('read','act:read:'+rd.id,storyAction(rd))}${act('listen','act:listen:'+ls.id,storyAction(ls))}${act('watch','act:watch:'+ep.id,ep.action)}
  </div>
 </div>
 <div class="end ${all?'done':''}" data-testid="feed-end">${ic('moon')}
  <h3>${all?t('doneToday'):t('feedEnd')}</h3>
  <p class="mute" style="font-size:14px;line-height:1.5">${all?t('doneSub'):t('feedSub')}</p>
  ${all||hero&&hero.part==='p2'|| (S.kite&&S.kite.p1&&!S.kite.p2)?`<div class="teaser" data-testid="tomorrow-teaser">${im('img/cards/s1_07.webp','Tomorrow',false)}<p>${S.kite&&S.kite.p1&&!S.kite.p2?'Part 2 unlocks tomorrow':t('tomorrowTrap')}</p></div>
  <button class="btn ghost sm" style="margin-top:12px" data-a="remind" data-testid="remind-optin">${S.kite&&S.kite.p1&&!S.kite.p2?t('remindPart'):t('remindToday')}</button>`:''}
 </div>
 ${S.debug?`<div class="debug-tools" data-testid="debug-tools"><b>Demo tools</b>
  <button class="btn ghost sm" data-a="nextday" data-testid="nextday">Simulate next day</button>
  <button class="btn ghost sm" data-a="ninepm" data-testid="ninepm">${hour>=21?'Back to day time':'Pretend it’s 9 PM'}</button>
 </div>`:`<button class="btn ghost sm" hidden aria-hidden="true" aria-label="Simulate next day" data-a="nextday" data-testid="nextday">Simulate next day</button><button class="btn ghost sm" hidden aria-hidden="true" aria-label="Pretend it is 9 PM" data-a="ninepm" data-testid="ninepm">Pretend it is 9 PM</button>`}`;
}

function viewRead(){
 return`<h1 class="h-title" style="margin-top:6px">Swipe a story</h1><p class="mute" style="margin:6px 0 16px;font-size:16px;line-height:1.5">Short stories on cards. Each one ends with one small thing to do.</p>
 ${STORIES.map(s=>{const ks=S.kite||{};let meta=`10 cards \u00b7 about ${s.mins} min`;if(s.id==='s1'){if(ks.p2)meta='Part 1 + Part 2 \u00b7 done';else if(ks.p2ready)meta='Part 2 is ready';else if(ks.p1)meta='Part 1 done \u00b7 Part 2 unlocks tomorrow';else meta='Part 1 \u00b7 6 cards + a cliffhanger'}else if(S.done['read:'+s.id])meta+=' \u00b7 <b style="color:var(--amber)">Done</b>';return `<button class="card lib" data-a="open" data-layer="read" data-id="${s.id}">${im(s.hero,s.title)}<div><span class="eyebrow">${s.tag}</span><h3>${s.title}</h3><span class="meta">${meta}</span></div></button>`}).join('')}
 <p class="sec-t">Coming soon</p>${SOON_READ.map(t=>`<div class="soon">${ic('lock')}${t}</div>`).join('')}`;
}
/* ---------- Listen ---------- */
function viewListen(){
 return`<h1 class="h-title" style="margin-top:6px">Listen</h1><p class="mute" style="margin:6px 0 14px;font-size:16px;line-height:1.5">Stories to hear at the gym, on a run or on the bus.</p>
 <div class="modes">${MODES.map(m=>`<button data-a="mode" data-v="${m.id}" class="${(S.mode||'com')===m.id?'on':''}"><span>${m.n}</span><small>${m.d}</small></button>`).join('')}</div>
 ${STORIES.map(s=>{const tot=s.chapters.reduce((a,c)=>a+c.dur,0);return`<button class="card lib" data-a="open" data-layer="listen" data-id="${s.id}">${im(s.hero,s.title)}<div><span class="eyebrow">Audio story \u00b7 10 chapters</span><h3>${s.title}</h3><span class="meta">${fmt(tot)} \u00b7 Indian-English voice ${S.done['listen:'+s.id]?'\u00b7 <b style="color:var(--amber)">Heard</b>':''}</span></div></button>`}).join('')}
 <p class="mute" style="font-size:13px;margin-top:2px">The voice is made by AI (a sample voice).</p>
 <p class="sec-t">Coming soon</p>${SOON_LISTEN.map(t=>`<div class="soon">${ic('lock')}${t}</div>`).join('')}`;
}
/* ---------- Watch ---------- */
function viewWatch(){
 return`<h1 class="h-title" style="margin-top:6px">Watch</h1><p class="mute" style="margin:6px 0 16px;font-size:16px;line-height:1.5">1-minute anime stories. You choose what happens. There is no wrong answer.</p>
 ${visEps().map(e=>`<button class="card lib" data-a="open" data-layer="watch" data-id="${e.id}">${im(e.thumb,e.title)}<div><span class="eyebrow">${e.series}</span><h3>${e.title}</h3><span class="meta">${e.hook}</span><div class="pillrow" style="margin-top:6px"><span class="pill">+${e.xp} XP</span>${e.adult?'<span class="pill">18+</span>':''}${S.done['watch:'+e.id]?'<span class="pill" style="color:var(--amber)">Watched</span>':''}</div></div></button>`).join('')}
 <p class="mute" style="font-size:13px">These are motion comics made from AI pictures, not video.</p>`;
}
/* ---------- You ---------- */
function viewYou(){
 const l=level(),st=streaks();
 const days=[...Array(7)].map((_,k)=>{const o=S.offset-6+k,dd=dayAt(o);return`<div class="${k===6?'today':''}"><i class="${dayDone(dstr(dd))?'on':''}">${ic('check')}</i>${'SMTWTFS'[dd.getDay()]}</div>`}).join('');
 const tr=visTraits().map(k=>traitCard(k,!!S.traits[k])).join('');
 const unlocked=visTraits().filter(k=>S.traits[k]).length,total=visTraits().length;
 const tier=leagueTier(S.weekXp||0);
 return`<h1 class="h-title" style="margin:6px 0 14px">Me</h1>
 ${langToggle()}
 <div class="card" style="margin-top:12px"><div class="pcard">${avatar(S.av)}<div style="min-width:0"><h2 style="font-size:24px;font-weight:800">${S.name||'You'}</h2><p class="mute" style="font-size:14px;margin:2px 0 8px">Age ${S.age} · ${l.n}</p><button class="link" data-a="editlook">Edit look</button></div></div>
  <p style="margin:16px 0 8px;font-weight:700;font-size:15px">${l.n} · <span id="xpv">${S.xp}</span> / ${l.hi===99999?'max':l.hi} XP</p><div class="prog"><i style="width:${l.p}%"></i></div>
  <p class="mute" style="font-size:13px;margin-top:8px">Levels: Spark, then Flame, then Torch, then Blaze.</p></div>
 <div class="card" style="margin-top:14px"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:17px">Streak</b><span class="chip" data-testid="streak">${icf('flame')}${st.cur}-day streak</span></div>
  <div class="week">${days}</div>
  <div class="stat"><div><b data-testid="streak-cur">${st.cur}</b><span>Current</span></div><div><b>${st.best}</b><span>Best</span></div><div><b data-testid="freeze-count">${S.freeze||0}</b><span>Freezes</span></div></div>
  <button class="btn ghost sm" style="margin-top:12px" data-a="sharecard" data-testid="share-streak">${ic('share')}Share my streak</button>
  <button class="btn ghost sm" style="margin-top:8px" data-a="pause-exams" data-testid="pause-exams">${t('pauseExams')}</button>
 </div>
 ${teen()?'':`<button class="card" style="margin-top:14px;width:100%;text-align:left;padding:16px" data-a="league" data-testid="league">
  <div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:17px">Weekly league</b><span class="tier ${tier}">${tier}</span></div>
  <p class="mute" style="font-size:14px;margin:6px 0 0">${S.weekXp||0} XP this week · <span class="sampletag">Sample players</span></p>
 </button>`}
 <button class="card" style="margin-top:14px;width:100%;text-align:left;padding:16px" data-a="recap" data-testid="recap-open">
  <span class="eyebrow">This week</span><h3 style="margin:4px 0 0;font-size:18px">You grew</h3>
  <p class="mute" style="font-size:14px;margin:4px 0 0">A short recap of what you actually did.</p>
 </button>
 <button class="card" style="margin-top:14px;width:100%;text-align:left;padding:16px" data-a="parents" data-testid="for-parents">${t('parents')}</button>
 <button class="card" style="margin-top:10px;width:100%;text-align:left;padding:16px" data-a="feedback" data-testid="feedback">${t('feedback')}</button>
 <p class="sec-t">Trait cards · <span data-testid="collection">${unlocked}/${total} collected</span></p>
 <div class="tgrid col20" data-testid="traits">${tr}</div>
 <p class="mute" style="font-size:13px;margin-top:10px;line-height:1.45">Common, rare and legendary cards. Finish a story, a game or a mystery box to collect more.</p>
 ${teen()?`<p class="note good" style="margin-top:12px" data-testid="teen-me">${ic('lock')}<span><b>Teen-safe mode is on.</b> You are under 18, so stories for 18 and up (like Love) are hidden. No public leagues or purchases.</span></p>`:''}
 ${S.debug?`<div class="demo-tools"><b style="color:var(--cream)">Demo tools</b>
  <button class="btn ghost sm" data-a="nextday" aria-hidden="true" aria-label="Simulate next day" data-testid="nextday-me">Simulate next day</button>
  <button class="btn ghost sm" data-a="togglesound">${S.sound?t('soundsOn'):t('soundsOff')}</button>
  <button class="btn ghost sm" data-a="reset" style="border-color:rgba(255,255,255,.25);color:var(--mute)">Reset demo</button></div>`:
  `<div hidden><button data-a="nextday" aria-hidden="true" aria-label="Simulate next day" data-testid="nextday-me"></button><button data-a="togglesound"></button></div>`}`;
}

function traitCard(k,on,big){const t=TRAITS[k];const rar=t.rarity||'common';return`<div class="trait ${on?'':'lock'} ${big?'big':''}" data-trait="${k}">${im(t.img,on?t.name:'Locked trait')}<span class="tag">${on?t.tag:'LOCKED'}</span>${on?`<span class="rar rarity ${rar}">${rar}</span>`:`<span class="lk">${ic('lock')}</span>`}<div class="tt"><b>${on?t.name:'???'}</b><span>${on?t.line:'Keep going to unlock.'}</span></div></div>`}

/* ---------- overlays ---------- */
function renderOverlay(){
 if(!OV)return;ov.classList.remove('out');ov.classList.add('show');
 if(OV.type==='reader')return renderReader();
 if(OV.type==='player')return renderPlayer();
 if(OV.type==='ep')return renderEp();
 if(OV.type==='look'){ov.innerHTML=`<div class="ob" style="height:100%"><div class="steps">${backBtn()}</div>${lookPanel(true)}</div>`}
 if(OV.type==='trap')return renderTrap();
 if(OV.type==='parents'){ov.innerHTML=viewParents(false);return}
 if(OV.type==='feedback')return openFeedback();
 if(OV.type==='focus')return renderFocus();
 if(OV.type==='league')return renderLeague();
 if(OV.type==='recap')return renderRecap();
 if(OV.type==='share')return renderShare();
}
/* reader */
let R;
const XP={read:20,listen:20,p1:15,p2:20};
function kiteMode(s){
 if(s.id!=='s1')return 'full';
 const k=S.kite||{};
 if(k.p2)return 'full';
 if(k.p2ready)return 'p2';
 return 'p1';
}
function renderReader(){
 const s=STORIES.find(x=>x.id===OV.id);const mode=kiteMode(s);
 let chapters,finale,recap=false,title=s.title,tag=s.tag;
 if(mode==='p1'){chapters=s.chapters.slice(0,6);finale='cliff';title=s.title+' \u00b7 Part 1'}
 else if(mode==='p2'){chapters=s.chapters.slice(6);finale='take';recap=true;title=s.title+' \u00b7 Part 2'}
 else {chapters=s.chapters;finale='take'}
 const extra=recap?1:0;
 R={s,i:OV.i||0,n:chapters.length+extra+1,mode,finale,chapters};
 const recapSlide=recap?`<div class="slide"><div class="final"><div class="card lesson"><span class="eyebrow">Last time</span><h2>The string snapped.</h2><p style="font-size:16px;line-height:1.45;margin:8px 0 0">Kabir\u2019s patchwork kite fell into a lane below. The sky went quiet. Swipe to see what Baba Iqbal does next.</p></div></div></div>`:'';
 const slides=chapters.map((c,i)=>`<div class="slide">${im(c.img,'Card '+c.n+': '+chText(s,c),i!==0)}</div>`).join('');
 const doneA=!!S.actions['act:read:'+s.id];
 const cliff=`<div class="slide"><div class="cliff" data-testid="cliffhanger">${im("img/cards/s1_06.webp","The kite falls",false)}<div class="cc"><span class="eyebrow">Cliffhanger</span><h2>The string snaps. The kite is gone.</h2><p style="font-size:16px;line-height:1.45;margin:0">What does Kabir do now? You will find out tomorrow.</p><div class="countdown" data-testid="p2-countdown">Part 2 unlocks tomorrow</div><p class="mute" style="font-size:13px;text-align:center;margin-top:10px">In this demo, use Simulate next day to unlock it. +${XP.p1} XP for Part 1.</p></div></div></div>`;
 const fin=`<div class="slide"><div class="final" data-testid="final">
  <div class="card lesson"><span class="eyebrow">The takeaway</span><h2>${storyMoral(s)}</h2>
  <span class="eyebrow" style="color:var(--coral)">Try this today</span><p style="font-size:16px;line-height:1.45;margin:6px 0 14px">${storyAction(s)}</p>
  <button class="bigcheck ${doneA?'ok':''}" data-a="readdone" data-testid="done">${ic('check')}<span>${doneA?'Done \u2713':'Done'}</span></button></div>
  <div style="display:flex;gap:10px;margin-top:12px"><button class="btn ghost sm" data-a="share" style="flex:1">${ic('share')}Share</button><button class="btn sm" data-a="closeov" style="flex:1">Back to Today</button></div>
  <p class="mute" style="font-size:13px;text-align:center;margin-top:10px"><span class="xp" style="font-size:13px;padding:3px 10px">+${mode==='p2'?XP.p2:XP.read} XP</span> for finishing &middot; Pictures are made by AI</p></div></div>`;
 const last=finale==='cliff'?cliff:fin;
 ov.innerHTML=`<div class="screen"><div class="rd-top">${backBtn()}<div style="flex:1;min-width:0"><span class="eyebrow">Swipe &middot; ${tag}</span><div class="ttl">${title}</div></div><b class="mute" id="cnt" style="font-size:14px"></b></div>
  <div class="car" id="car"><div class="track" id="track">${recapSlide}${slides}${last}</div>${S.hint?'':`<div class="swipehint" id="hint" data-testid="swipe-hint" role="note"><div class="hand">${ic("next")}</div><p>Swipe left for the next card</p></div>`}</div>
  <div class="dots" id="dots" role="tablist" aria-label="Card progress">${[...Array(R.n)].map((_,k)=>`<i></i>`).join('')}</div>
  <p class="hint">Swipe left or right, or tap the sides</p>
  <div class="rd-foot"><button class="iconb" data-a="rprev" aria-label="Previous card">${ic('back')}</button><span class="cnt" id="cnt2"></span><button class="iconb" data-a="rnext" aria-label="Next card">${ic('next')}</button></div></div>`;
 rGo(R.i);setupCar();
}
function rGo(i){
 i=Math.max(0,Math.min(R.n-1,i));if(i!==R.i&&!S.hint){S.hint=true;save();const h=$('#hint');if(h){h.classList.add('gone');setTimeout(()=>h.remove(),300)}}
 R.i=i;OV.i=i;
 const t=$('#track');if(!t)return;t.style.transform=`translateX(${-i*100}%)`;
 const dots=$('#dots');if(dots)[...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i));
 const lastLbl=R.finale==='cliff'?'Cliffhanger':'Takeaway';
 const lbl=i<R.n-1?`${i+1} / ${R.n-1}`:lastLbl;const c1=$('#cnt'),c2=$('#cnt2');if(c1)c1.textContent=lbl;if(c2)c2.textContent=lbl;
 if(i===R.n-1 && !R.awarded){R.awarded=true;
  if(R.mode==='p1'){S.kite=S.kite||{};const first=!S.kite.p1;S.kite.p1=true;const r=complete('read','s1-p1',XP.p1);if(r.first||first)toast('Part 1 done \u00b7 +'+XP.p1+' XP. Part 2 unlocks tomorrow.')}
  else {if(R.s.id==='s1'){S.kite=S.kite||{};S.kite.p2=true;S.kite.p2ready=true}
   const r=complete('read',R.s.id,R.mode==='p2'?XP.p2:XP.read);if(r.first)toast('Story read \u00b7 +'+(R.mode==='p2'?XP.p2:XP.read)+' XP');if(r.newTrait)setTimeout(()=>showTrait(r.newTrait),700)}}
}
function setupCar(){
 const car=$('#car'),tr=$('#track');let sx=0,dx=0,down=false,ok=false;
 car.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;down=true;ok=true;sx=e.clientX;dx=0;tr.classList.add('drag')});
 window.onpointermove=e=>{if(!down||!OV||OV.type!=='reader'||!R)return;dx=e.clientX-sx;const tr=$('#track');if(!tr)return;tr.style.transform=`translateX(calc(${-R.i*100}% + ${dx}px))`};
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
 if(ch!==P.ch||play)P.held=false;
 P.ch=ch;A.src=P.s.chapters[ch].audio;A.defaultPlaybackRate=P.speed;A.playbackRate=P.speed;
 A.onloadedmetadata=()=>{A.playbackRate=P.speed;if(seek)A.currentTime=seek;};
 if(play){const pr=A.play();if(pr&&pr.catch)pr.catch(()=>{})}
 pUI();
}
A.addEventListener('timeupdate',()=>{if(P){pUI()}});
A.addEventListener('play',()=>pUI());A.addEventListener('pause',()=>pUI());
function maybeEocPause(){
 if(!P||!P.eoc)return false;
 if(P.ch>=P.s.chapters.length-1){P.eoc=false;P.held=true;A.pause();pFinish();return true}
 A.pause();P.eoc=false;P.held=true;P.timerLabel='Off';toast('Sleep timer: paused after this chapter');pUI();return true;
}
function nearEnd(){return A.duration>0&&A.currentTime>=A.duration-0.2}
A.addEventListener('timeupdate',()=>{if(P&&P.eoc&&!A.paused&&nearEnd())maybeEocPause()});
A.addEventListener('seeked',()=>{if(P&&P.eoc&&!A.paused&&nearEnd())maybeEocPause()});
A.addEventListener('ended',()=>{
 if(!P)return;
 if(P.ch>=P.s.chapters.length-1){P.eoc=false;pFinish();return}
 if(P.eoc||P.held){P.eoc=false;P.held=true;A.pause();P.timerLabel='Off';pUI();return}
 pLoad(P.ch+1,true)
});
function pFinish(){
 clearSleepTimer();
 try{A.pause()}catch(e){}
 const r=complete('listen',P.s.id,XP.listen);pUI();
 if(r.first)toast('Story heard \u00b7 +'+XP.listen+' XP');
 openFinish(P.s,r);
}
function openFinish(s,r){
 const on=!!S.actions['act:listen:'+s.id];
 const next=STORIES.find(x=>x.id!==s.id);
 openSheet(`${r&&r.newTrait?`<p class="eyebrow" style="text-align:center">New trait card unlocked</p><div style="max-width:150px;margin:0 auto 14px">${traitCard(r.newTrait,true)}</div>`:''}<span class="eyebrow">Finished \u00b7 ${s.title}</span><h3 style="font-size:23px;margin:6px 0 12px" data-testid="listen-take">${storyMoral(s)}</h3>
  <p class="eyebrow" style="color:var(--coral)">Try this today</p><p style="font-size:15.5px;line-height:1.45;margin:6px 0 14px">${storyAction(s)}</p>
  <button class="bigcheck ${on?'ok':''}" data-a="listendone" data-id="${s.id}">${ic('check')}<span>${on?'Done \u2713':'Done'}</span></button>
  <p class="mute" style="margin-top:12px" data-testid="listen-hook">Tomorrow: ${next?next.title:'a new chapter'}.</p>
  <button class="btn ghost sm" data-a="remind" data-testid="remind-optin">${t('remindToday')}</button>
  <div style="display:flex;gap:10px;margin-top:12px"><button class="btn ghost sm" data-a="share" data-id="${s.id}" style="flex:1">${ic('share')}Share</button><button class="btn sm" data-a="closesheet" style="flex:1">Close</button></div>`);
}
function pToggle(){if(A.paused){if(P)P.held=false;const pr=A.play();if(pr&&pr.catch)pr.catch(()=>{})}else A.pause()}
function pSeekTotal(t){
 let acc=0;const ch=P.s.chapters;
 for(let k=0;k<ch.length;k++){if(t<acc+ch[k].dur||k===ch.length-1){const off=Math.min(ch[k].dur-.3,t-acc);
  if(k===P.ch){A.currentTime=Math.max(0,off)}else{const was=!A.paused;pLoad(k,was,Math.max(0,off))}return}acc+=ch[k].dur}
}
function clearSleepTimer(){
 if(!P)return;
 if(P.tm){clearTimeout(P.tm);P.tm=null}
 if(P.tick){clearInterval(P.tick);P.tick=null}
 P.endsAt=null;
}
function fireSleepTimer(){
 if(!P)return false;
 clearSleepTimer();P.eoc=false;P.timerLabel='Off';
 try{A.pause()}catch(e){}
 toast('Sleep timer: paused. Good night.');pUI();return true;
}
function setTimer(m){
 clearSleepTimer();P.eoc=false;
 if(m==='off'){P.timerLabel='Off'}
 else if(m==='eoc'){P.eoc=true;P.timerLabel='End of chapter'}
 else{P.timerLabel=m+' min';P.endsAt=Date.now()+m*60000;P.tm=setTimeout(fireSleepTimer,m*60000);P.tick=setInterval(()=>{if(!P||!P.endsAt)return;if(Date.now()>=P.endsAt)fireSleepTimer();else pUI()},1000)}
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
 set('p-cap',e=>e.textContent=chText(P.s,P.s.chapters[P.ch]));
 set('p-img',e=>{const src=P.s.chapters[P.ch].art;if(!e.src.endsWith(src))e.src=src});
 set('p-speed',e=>{e.querySelector('span').textContent=P.speed+'\u00d7'});
 set('p-timer',e=>{let lab=P.timerLabel==='Off'?'Sleep':P.timerLabel;if(P.endsAt){const s=Math.max(0,Math.round((P.endsAt-Date.now())/1000));lab=Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}e.querySelector('span').textContent=lab;e.classList.toggle('on',P.timerLabel!=='Off')});
 const pl=$('.pl');if(pl)pl.classList.toggle('paused',!playing);
 updateMini();
}
function updateMini(){
 const m=$('#mini');
 if(!P||!S.onboarded||OV||!A.src){m.innerHTML='';$('#phone').classList.remove('hasmini');return}
 $('#phone').classList.add('hasmini');
 const playing=!A.paused;
 m.innerHTML=`<div class="mini" data-testid="mini"><button data-a="reopen" style="display:flex;gap:12px;align-items:center;flex:1;min-width:0;text-align:left">${im(P.s.chapters[P.ch].art,"",false)}<div>${P.s.title}<small>Chapter ${P.ch+1} \u00b7 ${P.speed}\u00d7</small></div></button><button class="pb" data-a="minipp" aria-label="${playing?'Pause':'Play'}">${playing?icf('pause'):icf('play')}</button></div>`;
}
function renderPlayer(){
 const s=STORIES.find(x=>x.id===OV.id);
 if(!P||P.s.id!==s.id){if(P)clearSleepTimer();const mode=MODES.find(m=>m.id===(S.mode||'com'));
  P={s,ch:0,speed:mode.s,timerLabel:'Off',eoc:false,endsAt:null};A.pause();pLoad(0,false)}
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
function localizedEp(ep){
 if(!(lang()==='hi'&&ep.id==='e2'&&window.HI_EP_E2))return ep;
 const H=window.HI_EP_E2;
 const out=Object.assign({},ep,{hook:H.hook,take:H.take,action:H.action,prompt:H.prompt,
  act1:ep.act1.map((b,i)=>Object.assign({},b,{t:H.act1[i]||b.t})),
  options:ep.options.map((o,i)=>{
   const ho=H.options[i]||{};
   return Object.assign({},o,{label:ho.label||o.label,title:ho.title||o.title,why:ho.why||o.why,
    beats:(o.beats||[]).map((bt,j)=>Object.assign({},bt,{t:(ho.beats&&ho.beats[j])||bt.t}))});
  })
 });
 return out;
}
function epDraw(){
 const ep=localizedEp(E.ep),{n1,n3}=epSteps(),st=E.step;
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
  ${visEps().filter(x=>x.id!==ep.id)[0]?`<p class="mute" data-testid="watch-hook" style="text-align:center;margin-top:12px">Tomorrow: ${visEps().filter(x=>x.id!==ep.id)[0].title}.</p><button class="btn ghost sm" data-a="remind" data-testid="remind-optin">${t('remindToday')}</button>`:''}
  <div class="card" style="margin-top:16px"><span class="eyebrow">The path you didn\u2019t take</span><p style="font-size:15px;font-weight:700;margin:6px 0 4px">${other.label}: ${other.title}</p><p class="mute" style="font-size:14px;line-height:1.45">${other.why}</p>
   <button class="btn ghost sm" style="margin-top:12px" data-a="eptry">Watch the other path</button></div>
  <button class="btn" style="margin-top:14px" data-a="closeov">Back to Today</button></div></div>`;
 }
 ov.innerHTML=`<div class="screen ep">${view}</div>`;
}


/* ---------- growth: games, league, recap, share ---------- */
let FOCUS=null;
function stopFocus(){if(FOCUS&&FOCUS.tm){clearInterval(FOCUS.tm);FOCUS.tm=null}if(FOCUS&&FOCUS.tick){clearInterval(FOCUS.tick);FOCUS.tick=null}}
function playReward(game,score,xp,trait){
 const d=S.daily[today()]=S.daily[today()]||{};
 const first=!d.play;
 d.play=game;
 if(first)complete('play',game,xp);
 else addXP(Math.max(3,Math.round(xp/3)));
 if(trait&&grantTrait(trait))setTimeout(()=>showTrait(trait),500);
 maybeStreak();save();
}
function trapDeck(){return (OV&&OV.g&&OV.g.cards)||TRAP_CARDS}
function renderTrap(){
 const intro=!!(OV&&OV.intro),challenge=!!(OV&&OV.challenge);
 if(!OV.g)OV.g={i:0,score:0,locked:false,verdict:null,marks:[],cards:intro?introCards():null,paid:intro};
 const G=OV.g,deck=trapDeck(),n=deck.length,raw=deck[G.i],c=trapCopy(raw);
 if(G.i>=n){
  if(!intro && !G.paid){
   const best=Math.max(S.best.trap||0,G.score);S.best.trap=best;
   const perfect=G.score===n,trait=perfect?'shield':(G.score>=6?'honest':(G.score>=4?'patient':null));
   const xp=perfect?25:(10+G.score);
   G.paid=true;playReward('trap',G.score,xp,trait)
  }
  const best=S.best&&S.best.trap||G.score;
  const shareBtns=(!intro||challenge)?`<div class="share-actions">
    <button class="btn sm" data-a="trap-share-wa" data-testid="share-wa">Share to WhatsApp</button>
    <button class="btn ghost sm" data-a="trap-share-ig" data-testid="share-ig">Instagram Story</button>
    <button class="btn ghost sm" data-a="trap-challenge" data-testid="challenge-friend">Challenge a friend</button>
   </div>
   <img alt="" data-testid="trap-share-img" id="trap-share-img" style="display:none">
   <a hidden id="trap-share-dl" data-testid="trap-share-dl" download="ethossai-trap.png">Download</a>`:'';
  const cta=intro&&!challenge?`<button class="btn" style="margin-top:auto" data-a="intro-continue" data-testid="intro-continue">${t('introGo')}</button>`:
    challenge?`<button class="btn" style="margin-top:auto" data-a="challenge-daily" data-testid="get-daily">Get a new one daily</button>`:
    `<button class="btn" style="margin-top:14px" data-a="trap-again">Play again</button>
     <p class="mute" style="text-align:center;margin-top:10px">${t('tomorrowTrap')}</p>
     <button class="btn ghost sm" data-a="remind" data-testid="remind-optin">${t('remindToday')}</button>`;
  ov.innerHTML=`<div class="screen"><div class="gwrap"><div style="display:flex;align-items:center;gap:10px">${backBtn()}<h1 class="h-title" style="font-size:22px;flex:1">Spot the Trap</h1></div>
   <div class="card" style="margin-top:18px;text-align:center" data-testid="${intro?'intro-result':'trap-end'}">
    <p class="eyebrow">Your score</p>
    <h2 style="font-size:36px;margin:6px 0" data-testid="trap-score">${G.score} / ${n}</h2>
    <p style="font-size:17px;line-height:1.45">${intro?t('introNice',G.score,n):(G.score===n?'You caught every trap. That is a rare skill.':'A miss is practice. The same traps show up in real life.')}</p>
    ${!intro?`<p style="font-size:15px;margin-top:12px">A SIP is a small, regular investment. It does not promise profit. A real bank will not ask you to scan a QR code for a refund.</p>`:''}
    ${shareBtns}
   </div>${cta}</div></div>`;
  if(!intro||challenge)setTimeout(()=>buildTrapShare(G),40);
  return;
 }
 const fb=G.verdict==null?'':`<div class="whybox ${G.verdict===raw.ans?'fb-ok':'fb-no'}" data-testid="trap-why"><b>${G.verdict===raw.ans?t('yes'):t('notThis')}</b> ${c.why}</div>`;
 ov.innerHTML=`<div class="screen" data-testid="${intro?'intro-trap':'trap-play'}"><div class="gwrap"><div class="ghead">${backBtn()}<div class="gmeta"><span class="eyebrow">Spot the Trap</span><div style="font-weight:800">${G.i+1}&nbsp;of&nbsp;${n} · ${t('trapOrSmart')}</div></div><b class="gcount" data-testid="trap-sofar">${G.score} right</b></div>
  <div class="trap-card" id="trapcard"><div class="scene ${G.verdict==null?'':(G.verdict===raw.ans?'flash-smart':'flash-trap')}" data-testid="trap-scene"><span class="valbadge">${c.value}</span><p class="mute" style="font-size:13px;margin:0 0 6px">${c.title}</p><h2 style="font-size:22px;line-height:1.3;margin:0">${c.scene}</h2>${fb}</div>
  ${G.verdict==null?`<div class="trap-btns"><button class="btn trap" data-a="trap-ans" data-v="trap" data-testid="ans-trap">Trap</button><button class="btn smart" data-a="trap-ans" data-v="smart" data-testid="ans-smart">Smart</button></div>`:`<button class="btn" style="margin-top:14px" data-a="trap-next" data-testid="trap-next">${G.i===n-1?'See my score':'Next'}</button>`}
  <p class="mute" style="font-size:13px;text-align:center;margin-top:10px">Swipe left for Trap, right for Smart · or use the buttons</p></div></div></div>`;
 if(G.verdict==null)setupTrapSwipe();
}

let trapSwipeOff=null;
function setupTrapSwipe(){
 if(trapSwipeOff){trapSwipeOff();trapSwipeOff=null}
 const el=$('#trapcard');if(!el)return;
 let sx=0,dx=0,down=false,sc=el.querySelector('.scene');
 const move=e=>{if(!down)return;dx=e.clientX-sx;if(sc)sc.style.transform=`translateX(${dx*0.4}px) rotate(${dx*0.04}deg)`};
 const up=()=>{if(!down)return;down=false;if(Math.abs(dx)>60)trapAns(dx<0?'trap':'smart');else if(sc)sc.style.transform=''};
 const downFn=e=>{if(e.target.closest('button'))return;down=true;sx=e.clientX;dx=0};
 el.addEventListener('pointerdown',downFn);
 window.addEventListener('pointermove',move);
 window.addEventListener('pointerup',up);
 window.addEventListener('pointercancel',up);
 trapSwipeOff=()=>{el.removeEventListener('pointerdown',downFn);window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);window.removeEventListener('pointercancel',up);down=false};
}
function trapAns(v){
 const G=OV&&OV.g;if(!G||G.locked||G.verdict!=null)return;
 const c=trapDeck()[G.i];if(!c)return;
 G.verdict=v;G.locked=true;
 G.marks=G.marks||[];
 const ok=v===c.ans;G.marks[G.i]=ok;
 if(ok){G.score++;beep('ok')}else beep('bad');
 if(trapSwipeOff){trapSwipeOff();trapSwipeOff=null}
 renderTrap();
}
function trapNext(){const G=OV&&OV.g;if(!G||G.verdict==null)return;G.i++;G.verdict=null;G.locked=false;renderTrap()}

function renderFocus(){
 const F=OV.f||(OV.f={t:30,left:30,score:0,wrong:0,focused:0,clean:0,running:false,over:false,spawned:0});
 if(F.over){
  const focused=Math.max(0,Math.min(30,Math.round(F.focused)));
  S.best.focus=Math.max(S.best.focus||0,focused);save();
  const trait=focused>=20?'focus':null;
  if(!F.paid){F.paid=true;playReward('focus',focused,focused>=20?20:10,trait)}
  ov.innerHTML=`<div class="screen"><div class="gwrap"><div style="display:flex;align-items:center;gap:10px">${backBtn()}<h1 class="h-title" style="font-size:22px;flex:1">Focus Tap</h1></div>
   <div class="card focus-end" style="margin-top:18px;text-align:center" data-testid="focus-end">
    <p class="eyebrow">You stayed focused</p><h2 data-testid="focus-seconds">${focused} seconds</h2>
    <p class="mute" style="font-size:16px;line-height:1.45">You tapped ${F.score} study cues and ${F.wrong} pings. Best: ${S.best.focus}s.</p>
    <p style="font-size:16px;line-height:1.45;margin-top:12px" data-testid="focus-take">A ping can wait. The next half hour of study belongs to you.</p></div>
   <button class="btn" style="margin-top:auto" data-a="focus-again">Play again</button></div></div>`;
  return;
 }
 ov.innerHTML=`<div class="screen"><div class="gwrap"><div style="display:flex;align-items:center;gap:10px">${backBtn()}<div style="flex:1"><span class="eyebrow">Focus Tap</span><div style="font-weight:800">Tap only study cues</div></div></div>
  <div class="focus-hud"><span data-testid="focus-time">${F.left}s</span><span>Cues ${F.score}</span></div>
  <div class="focus-stage" id="fstage" data-testid="focus-stage"><div class="focus-desk"></div><div class="focus-book"></div></div>
  <p class="mute" style="font-size:14px;text-align:center">Ignore WhatsApp and Insta pings. Tap the yellow study cues.</p>
  ${F.running?'':`<button class="btn" data-a="focus-start" data-testid="focus-start">Start 30 seconds</button>`}
  </div></div>`;
 if(F.running){/* stage was rebuilt; intervals keep spawning into #fstage */}
}
function startFocus(){
 stopFocus();
 OV.f={t:30,left:30,score:0,wrong:0,focused:0,clean:0,running:true,over:false,spawned:0,paid:false};
 renderFocus();
 const F=OV.f;
 const cues=['Read the next line','Solve this sum','Highlight this note','One more paragraph','Check this formula','Write the heading'];
 const pings=[
  {k:'wa',t:'WhatsApp \u00b7 3 new in the group'},
  {k:'ig',t:'Insta \u00b7 your story is expiring'},
  {k:'ig',t:'Insta \u00b7 12 people liked this'},
  {k:'yt',t:'YouTube \u00b7 a new Short'},
  {k:'wa',t:'WhatsApp \u00b7 \u201cWhere are you??\u201d'}
 ];
 F.tick=setInterval(()=>{if(!OV||OV.type!=='focus'||!F.running)return stopFocus();
  F.left=Math.max(0,F.left-1);if(F.clean>=0){F.clean++;F.focused=Math.max(F.focused,F.clean)}
  const tm=$('[data-testid=focus-time]');if(tm)tm.textContent=F.left+'s';
  if(F.left<=0){F.running=false;F.over=true;stopFocus();renderFocus()}
 },1000);
 const spawn=()=>{
  if(!OV||OV.type!=='focus'||!F.running||F.left<=0)return;
  const stage=$('#fstage');if(!stage)return;
  const study=Math.random()<0.48;
  const b=document.createElement('button');
  if(study){b.className='ping study';b.textContent=cues[F.spawned%cues.length];b.dataset.k='study'}
  else {const p=pings[F.spawned%pings.length];b.className='ping '+p.k;b.textContent=p.t;b.dataset.k='ping'}
  F.spawned++;
  b.style.left=(8+Math.random()*55)+'%';b.style.top=(8+Math.random()*58)+'%';
  b.addEventListener('click',e=>{e.stopPropagation();
   if(b.dataset.k==='study'){F.score++;beep('ok');b.remove()}
   else {F.wrong++;F.clean=0;beep('bad');b.classList.add('miss');setTimeout(()=>b.remove(),280)}
  });
  stage.appendChild(b);
  setTimeout(()=>{if(b.parentNode)b.remove()},1400);
 };
 F.tm=setInterval(spawn,850);
 setTimeout(spawn,300);
}

function renderLeague(){
 const board=leagueBoard(),tier=leagueTier(S.weekXp||0);
 const rows=board.map((p,i)=>`<div class="league-row ${p.me?'me':''}" ${p.me?'data-testid="league-me"':''}><span class="rk">${i+1}</span><div style="flex:1">${p.name}${p.me?'':` <span class="sampletag">Sample</span>`}</div><b>${p.xp} XP</b></div>`).join('');
 ov.innerHTML=`<div class="screen"><div class="gwrap">${backBtn()}
  <h1 class="h-title" style="margin-top:8px">Weekly league</h1>
  <p class="mute" style="font-size:15px;line-height:1.45;margin:6px 0 14px">You are in <span class="tier ${tier}">${tier}</span> this week. Actions and stories move you up. All other names are sample players, not real people.</p>
  <div class="card" style="padding:8px 10px" data-testid="league-board"><p class="sampletag" style="margin:8px 8px 0">Sample players</p>${rows}</div>
  <div class="card friendrow" style="margin-top:14px"><span class="avmini">${avatar({g:'girl',skin:SKIN[2],hoodie:HOOD[3]},'avatar avmini')}</span><div><span class="sampletag">Sample friend</span><h3 style="margin:4px 0 0;font-size:16px">${SAMPLE_FRIEND.name} \u00b7 ${SAMPLE_FRIEND.streak}-day streak</h3><p class="mute" style="font-size:13px;margin:2px 0 0">Demo only. Not a real person.</p></div></div>
 </div></div>`;
}
function renderRecap(){
 const w=weekObj(),st=streaks(),newT=(w.traits||[]).filter(k=>visTraits().includes(k));
 ov.innerHTML=`<div class="screen"><div class="gwrap recap">${backBtn()}
  <p class="eyebrow">This week</p><h2 data-testid="recap-title">You grew.</h2>
  <p class="mute" style="font-size:16px;line-height:1.45">A look at what you actually did. No fake scores from other users.</p>
  <div class="stat"><div><b data-testid="recap-stories">${w.stories||0}</b><span>Stories</span></div><div><b>${w.listens||0}</b><span>Listens</span></div><div><b>${w.actions||0}</b><span>Actions</span></div></div>
  <div class="stat"><div><b>${w.plays||0}</b><span>Games</span></div><div><b>${w.xp||0}</b><span>XP this week</span></div><div><b>${st.cur}</b><span>Streak</span></div></div>
  ${newT.length?`<p class="sec-t">New trait cards</p><div class="tgrid">${newT.map(k=>traitCard(k,true)).join('')}</div>`:'<p class="mute" style="margin-top:16px">Finish a story or a game this week to grow the set.</p>'}
  <div class="share-actions" style="margin-top:auto">
   <button class="btn" data-a="recap-share-wa" data-testid="recap-share-wa">Share to WhatsApp</button>
   <button class="btn ghost sm" data-a="sharecard" data-testid="recap-share-ig">Instagram Story</button>
   <button class="btn ghost sm" data-a="trap-challenge" data-testid="recap-challenge">Challenge a friend</button>
  </div>
 </div></div>`;
}
function renderShare(){
 ov.innerHTML=`<div class="screen"><div class="gwrap">${backBtn()}
  <h1 class="h-title" style="font-size:24px">Share card</h1>
  <p class="mute" style="font-size:15px;margin:6px 0 12px">A picture for an Instagram story. Nothing is posted unless you share it yourself.</p>
  <img class="shareprev" id="shareprev" data-testid="share-img" alt="Share preview">
  <a class="btn" id="sharedl" data-testid="share-download" download="ethossai-streak.png" style="margin-top:14px;text-decoration:none">${ic('download')}Download image</a>
 </div></div>`;
 buildShareImage().then(({url})=>{
  const img=$('#shareprev'),a=$('#sharedl');if(img)img.src=url;if(a)a.href=url;
 }).catch(()=>toast('Could not make the image'));
}
function buildShareImage(){
 return new Promise(res=>{
  const c=document.createElement('canvas');c.width=1080;c.height=1920;const x=c.getContext('2d');
  const g=x.createLinearGradient(0,0,0,1920);g.addColorStop(0,'#0B1A3A');g.addColorStop(1,'#1a2a4f');x.fillStyle=g;x.fillRect(0,0,1080,1920);
  x.fillStyle='#F2B544';x.font='800 36px system-ui,sans-serif';x.fillText('EthosSAI  \u00b7  DEMO',80,140);
  const st=streaks(),l=level();
  x.fillStyle='#F2B544';x.beginPath();x.moveTo(540,430);x.bezierCurveTo(640,300,780,520,540,780);x.bezierCurveTo(300,520,440,300,540,430);x.fill();
  x.fillStyle='#f3ead6';x.font='800 96px system-ui,sans-serif';x.textAlign='center';
  x.fillText(st.cur+'-day streak',540,920);
  x.font='700 42px system-ui,sans-serif';x.fillStyle='#FFE7AE';
  x.fillText((S.name||'You')+' \u00b7 '+l.n,540,1000);
  const owned=visTraits().filter(k=>S.traits[k]);
  x.fillStyle='#f3ead6';x.font='600 34px system-ui,sans-serif';
  x.fillText(owned.length?('Latest: '+(TRAITS[owned[owned.length-1]]||{}).name):'One small action a day.',540,1120);
  x.font='600 28px system-ui,sans-serif';x.fillStyle='#aeb6c8';
  x.fillText('A swipeable story. Then you\u2019re done for today.',540,1720);
  x.fillText('Sample card \u00b7 not a real rank',540,1780);
  c.toBlob(b=>{const url=URL.createObjectURL(b);res({url,canvas:c})},'image/png');
 });
}
function openMystery(){
 const day=today(),m=mysteryFor(day);
 const first=!m.opened;m.opened=true;save();
 if(first){addXP(m.xp);if(m.trait&&grantTrait(m.trait))setTimeout(()=>showTrait(m.trait),500);maybeStreak()}
 const body=m.trait?`${traitCard(m.trait,true,true)}<p class="mute" style="text-align:center;margin-top:8px">+${m.xp} XP</p>`:`<h3 style="font-size:22px;line-height:1.35;margin:8px 0 12px">${m.text}</h3><p class="xp">+${m.xp} XP</p>`;
 openSheet(`<p class="eyebrow" style="text-align:center">Mystery card</p><div data-testid="mystery-reveal">${body}</div><p class="mute" style="font-size:14px;margin-top:12px">${m.text&&m.trait?m.text:''}</p><button class="btn" style="margin-top:14px" data-a="closesheet" data-testid="mystery-ok">Nice</button>`);
}
function nextDay(){
 const d=today(),st=streaks();
 if(!dayDone(d) && st.cur>0){
  if((S.pauseLeft||0)>0){S.pauseLeft--;const rec=S.daily[d]=S.daily[d]||{};rec.paused=true;toast('Exam pause kept your streak.');}
  else if((S.freeze||0)>0){S.freeze--;const rec=S.daily[d]=S.daily[d]||{};rec.frozen=true;if(!S.traits.comeback)grantTrait('comeback');toast('Streak freeze used. Your streak is safe.');}
  else {S.repair={need:2,got:0,save:st.cur,miss:d}}
 }
 if(S.kite&&S.kite.p1&&!S.kite.p2)S.kite.p2ready=true;
 const next=S.offset+1;
 const showRecap=(next%7===0)&&S.offset>0;
 if((next-(S.weekStart||0))>=7){S.week={xp:0,stories:0,listens:0,actions:0,plays:0,traits:[]};S.weekXp=0;S.weekStart=next}
 S.offset=next;S.demoHour=null;save();
 if(showRecap){openOverlay({type:'recap'});toast('A new week. Here is your recap.')}
 else{render();toast('Simulated: next day')}
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

function demoUrl(extra){
 const u=new URL(location.href);u.hash='';
 if(extra){Object.entries(extra).forEach(([k,v])=>u.searchParams.set(k,v))}
 else u.search='';
 return u.toString();
}
function askRemind(){
 track('reminder_optin',{hour:S.remindHour||21});
 S.remind=true;save();
 const msg=t('remindOk');
 if(window.Notification&&Notification.permission==='default'){
  Notification.requestPermission().then(p=>{toast(msg)}).catch(()=>toast(msg));
 }else toast(msg);
 haptic('ok');
}
function viewParents(standalone){
 const url=demoUrl({parents:'1'});
 const mail='hello@ethossai.in';
 const text="Hi, I'm looking at EthosSAI, a 1-minute stories demo for ages 14+. Data stays on the phone. Teen-safe mode hides 18+ stories and public leagues. Please read this page: "+url;
 return`<div class="screen"><div class="scroll parent-page" style="padding:20px" data-testid="parents-page">
  ${standalone?'<p class="eyebrow">EthosSAI · Demo</p>':backBtn()}
  <h1 class="h-title" style="margin:8px 0 12px">${t('parents')}</h1>
  <p>EthosSAI is a short daily habit: one 1-minute story or money-trap game, then one small real-life step. ${t('ageLine')}</p>
  <p><b>What's inside.</b> Swipe stories, audio stories, choice episodes, and Spot the Trap (real India money situations: UPI/QR refunds, fake prizes, EMI, betting tips, fake internships). Nothing here is a financial advisor, and a SIP does not promise profit.</p>
  <p><b>Data stays on this phone.</b> This demo saves progress in the phone's own storage. It does not create an account, and it does not send your child's name, age or choices to a server.</p>
  <p><b>How 18+ is locked.</b> Anyone under 18 is in teen-safe mode. Love stories, public leagues and any purchase screens stay hidden. Under-18s are not shown stranger leaderboards.</p>
  <p><b>Contact.</b> <a href="mailto:${mail}" style="color:var(--amber)">${mail}</a></p>
  <p class="mute" style="font-size:13px">From about 13 May 2027, India's DPDP Rule 10 will ask for verifiable parental consent before a child's data leaves the device. This demo does not send under-18 data off the phone at all. Only on-device counts are kept. This page is for parents and guardians. It is not legal advice.</p>
  <a class="btn" style="margin-top:16px;text-decoration:none" data-testid="send-parent-wa" href="https://wa.me/?text=${encodeURIComponent(text)}" target="_blank" rel="noopener">${t('sendParent')} · WhatsApp</a>
  <a class="btn ghost sm" style="margin-top:8px;text-decoration:none" data-testid="send-parent-mail" href="mailto:?subject=${encodeURIComponent('EthosSAI — a note for parents')}&body=${encodeURIComponent(text)}">${t('sendParent')} · Email</a>
  ${standalone?`<button class="btn ghost sm" style="margin-top:16px" data-a="parents-home">Back to the demo</button>`:''}
 </div></div>`;
}
function openFeedback(){
 if(!OV||OV.type!=='feedback'){openOverlay({type:'feedback'});return}
 const rows=JSON.parse(localStorage.getItem('ethossai_feedback')||'[]');
 const pay=adult()?`<label>Would you pay for this?</label>
   <div class="stars" data-testid="fb-pay">${['No','Maybe','Yes'].map(x=>`<button type="button" data-a="fb-pay" data-v="${x}">${x}</button>`).join('')}</div>`:'';
 ov.innerHTML=`<div class="screen"><div class="gwrap">${backBtn()}<h1 class="h-title" style="font-size:24px;flex:1">${t('feedback')}</h1>
  <form class="fb-form" data-testid="feedback-form" onsubmit="return false">
   <label>What did you love?</label><textarea id="fb-love" maxlength="400"></textarea>
   <label>What was boring?</label><textarea id="fb-bore" maxlength="400"></textarea>
   <label>Would you use it daily?</label>
   <div class="stars" data-testid="fb-daily">${[1,2,3,4,5].map(n=>`<button type="button" data-a="fb-star" data-v="${n}">${n}</button>`).join('')}</div>
   ${pay}
   <button class="btn" style="margin-top:16px" data-a="fb-save" data-testid="fb-save">Save on this phone</button>
   <button class="btn ghost sm" style="margin-top:8px" data-a="fb-export" data-testid="feedback-export">Export ${rows.length?rows.length+' saved':''}</button>
   <p class="mute" style="font-size:13px;margin-top:10px">Saved only on this device. There is no Google Form connected yet.</p>
  </form></div></div>`;
}
function saveFeedback(){
 const daily=[...document.querySelectorAll('[data-a=fb-star].on')].map(x=>x.dataset.v)[0];
 const pay=adult()?(([...document.querySelectorAll('[data-a=fb-pay].on')].map(x=>x.dataset.v)[0])||''):'';
 const row={loved:($('#fb-love')||{}).value||'',boring:($('#fb-bore')||{}).value||'',daily:daily?+daily:null,pay,age:S.age,t:Date.now()};
 const rows=JSON.parse(localStorage.getItem('ethossai_feedback')||'[]');rows.push(row);
 localStorage.setItem('ethossai_feedback',JSON.stringify(rows));
 toast('Feedback saved on this phone.');haptic('ok');closeOverlay();
}
function exportFeedback(){
 const rows=localStorage.getItem('ethossai_feedback')||'[]';
 const blob=new Blob([rows],{type:'application/json'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ethossai-feedback.json';a.click();
}
function buildTrapShare(G){
 const n=(G.cards||TRAP_CARDS).length,score=G.score,marks=G.marks||[];
 const c=document.createElement('canvas');c.width=720;c.height=1280;
 const x=c.getContext('2d');
 const g=x.createLinearGradient(0,0,0,1280);g.addColorStop(0,'#0B1A3A');g.addColorStop(1,'#0A1028');
 x.fillStyle=g;x.fillRect(0,0,720,1280);
 x.fillStyle='#F2B544';x.font='800 22px Outfit,sans-serif';x.fillText('EthosSAI  ·  DEMO',48,80);
 x.fillStyle='#F6EFE0';x.font='800 52px Syne,sans-serif';
 const lines=['I spotted',score+'/'+n,'money traps.','Can you?'];
 lines.forEach((ln,i)=>{x.fillText(ln,48,220+i*70)});
 const grid=marks.map(ok=>ok?'🟩':'🟥').join('')||'🟩'.repeat(score)+'🟥'.repeat(Math.max(0,n-score));
 x.font='64px sans-serif';x.fillText(grid,48,620);
 x.fillStyle='#B8C0D4';x.font='600 24px Outfit,sans-serif';
 x.fillText('1 minute a day. No install needed.',48,1180);
 const url=c.toDataURL('image/png');
 const img=$('#trap-share-img'),a=$('#trap-share-dl');
 if(img){img.src=url;img.style.display='block';img.style.width='100%';img.style.borderRadius='18px';img.style.marginTop='12px'}
 if(a)a.href=url;
 OV.shareUrl=url;OV.shareText='I spotted '+score+'/'+n+' money traps. Can you? '+demoUrl({play:'trap'});
}
function shareTrap(kind){
 const text=OV.shareText||('I spotted some money traps. Can you? '+demoUrl({play:'trap'}));
 track('share',{kind,game:'trap'});
 if(kind==='wa'){location.href='https://wa.me/?text='+encodeURIComponent(text);return}
 if(kind==='ig'){
  const a=$('#trap-share-dl');if(a&&a.href)a.click();
  toast('Image ready. Open Instagram and add it to a story.');return
 }
 if(kind==='challenge'){location.href='https://wa.me/?text='+encodeURIComponent('Can you beat me at Spot the Trap? '+demoUrl({play:'trap'}));}
}
function showDebug(){S.debug=true;if(S.onboarded)save();render();toast('Demo tools unlocked.')}
function openPause(){
 openSheet(`<h3>${t('pauseExams')}</h3><p class="mute" style="margin:0 0 12px">${t('pauseSub')}</p>
  ${[1,2,3,5,7].map(n=>`<button class="row" data-a="pause-set" data-v="${n}">${n} day${n>1?'s':''}</button>`).join('')}
  <button class="btn ghost sm" style="margin-top:12px" data-a="closesheet">Close</button>`);
}

function renderLook(){ov.innerHTML=`<div class="screen"><div class="ob">${lookPanel(true)}</div></div>`}

document.addEventListener('click',e=>{
 const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,v=b.dataset.v;
 switch(a){
 case'go':go(v);break;
 case'tryone':case'trychip':startIntroTrap(false);if(v){S.interests=S.interests||[];if(v&&!S.interests.includes(v))S.interests=[v]};break;
 case'setlang':S.lang=v==='hi'?'hi':'en';if(S.onboarded)save();if(OV)renderOverlay();else render();break;
 case'pickint':{S.interests=S.interests||[];const i=S.interests.indexOf(v);if(i>=0)S.interests.splice(i,1);else if(S.interests.length<2)S.interests.push(v);render();break}
 case'pickcue':S.cue=v;render();break;
 case'intro-continue':closeOverlay(true);OB.step=1;track('onboarding_step',{step:'age'});render();break;
 case'heroplay':openHero(heroItem());break;
 case'togglemore':S.moreOpen=!S.moreOpen;render();break;
 case'goal3':S.goalN=3;S.offeredGoal3=true;save();render();break;
 case'goal1':S.offeredGoal3=true;save();render();break;
 case'remind':askRemind();break;
 case'parents':openOverlay({type:'parents'});break;
 case'parents-home':{const u=new URL(location.href);u.searchParams.delete('parents');history.replaceState({},'',u);QS.delete('parents');render();break}
 case'feedback':openFeedback();break;
 case'fb-star':case'fb-pay':document.querySelectorAll(`[data-a="${a}"]`).forEach(x=>x.classList.toggle('on',x===b));break;
 case'fb-save':saveFeedback();break;
 case'fb-export':exportFeedback();break;
 case'pause-exams':openPause();break;
 case'pause-set':S.pauseLeft=+v;save();closeSheet();toast('Paused for '+v+' day'+(+v>1?'s':'')+'.');render();break;
 case'trap-share-wa':shareTrap('wa');break;
 case'trap-share-ig':shareTrap('ig');break;
 case'trap-challenge':shareTrap('challenge');break;
 case'challenge-daily':{const u=new URL(location.href);u.searchParams.delete('play');history.replaceState({},'',u);QS.delete('play');closeOverlay(true);if(!S.onboarded){OB.step=0;render()}else {tab='today';render()}break}
 case'demodots':{showDebug._n=(showDebug._n||0)+1;if(showDebug._n>=5){showDebug._n=0;showDebug()}break}
 case'obnext':if(OB.step===1&&!ageMsg(S.age).ok)break;OB.step++;render();break;
 case'obskip':if(OB.step===0){OB.step=1;render()}else finishOb();break;
 case'obback':OB.step--;render();break;
 case'g':S.av.g=v;if(S.onboarded)save();OV?refreshOvLook():refreshLook();break;
 case'skin':S.av.skin=v;if(S.onboarded)save();OV?refreshOvLook():refreshLook();break;
 case'hood':S.av.hoodie=v;if(S.onboarded)save();OV?refreshOvLook():refreshLook();break;
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
 case'nextday':nextDay();break;
 case'ninepm':S.demoHour=(S.demoHour>=21?null:21);save();render();break;
 case'scrollstreak':tab='today';closeOverlay(true);render();setTimeout(()=>{const e=$('#streakhero');if(e)e.scrollIntoView({block:'start'})},50);break;
 case'mystery':openMystery();break;
 case'trap':openOverlay({type:'trap'});break;
 case'trap-ans':trapAns(v);break;
 case'trap-next':trapNext();break;
 case'trap-again':OV.g={i:0,score:0,locked:false,verdict:null};renderTrap();break;
 case'focus':openOverlay({type:'focus'});break;
 case'focus-start':startFocus();break;
 case'focus-again':stopFocus();OV.f=null;renderFocus();break;
 case'league':openOverlay({type:'league'});break;
 case'recap':openOverlay({type:'recap'});break;
 case'recap-share-wa':{track('share',{kind:'wa',type:'recap'});location.href='https://wa.me/?text='+encodeURIComponent('I grew this week on EthosSAI (demo). Can you? '+demoUrl({play:'trap'}));break}
 case'sharecard':openOverlay({type:'share'});break;
 case'togglesound':S.sound=!S.sound;save();render();break;
 case'reset':if(confirm('Reset all demo data on this device?')){A.pause();P=null;A.removeAttribute('src');try{localStorage.removeItem(KEY)}catch(e){}S=fresh();OB={step:0};tab='today';closeOverlay(true);render()}break;
 }
});
function finishOb(){
 if(!ageMsg(S.age).ok){OB.step=1;render();return}
 const n=$('#nm');if(n)S.name=n.value.trim();
 const hours={class:16,commute:18,dinner:20,bed:22};
 if(S.cue&&hours[S.cue])S.remindHour=hours[S.cue];
 S.onboarded=true;save();track('onboarding_step',{step:'complete',interests:S.interests,cue:S.cue});
 tab='today';lastTab=null;render();haptic('win');
}
function refreshLook(){const w=$('#avwrap');if(w)w.innerHTML=avatar(S.av);document.querySelectorAll('.sw button,.seg button').forEach(x=>{const act=x.dataset.a,val=x.dataset.v;x.classList.toggle('on',(act==='g'&&S.av.g===val)||(act==='skin'&&S.av.skin===val)||(act==='hood'&&S.av.hoodie===val))})}
function refreshOvLook(){const nm=$('#nm')?$('#nm').value:'';const inner=ov.querySelector('.ob');if(inner){inner.innerHTML=`<div class="steps">${backBtn()}</div>${lookPanel(true)}`;$('#nm').value=nm}}
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='nm'){e.preventDefault()}});
document.addEventListener('input',e=>{
 if(e.target.id==='nm'){S.name=e.target.value;save()}
 if(e.target.id==='age'){const v=e.target.value.trim(),m=ageMsg(v);$('#agemsg').innerHTML=m.html;$('#agebtn').disabled=!m.ok;S.age=m.ok?String(parseInt(v,10)):'';save()}
});

render();
if(QS.get('play')==='trap'&&QS.get('parents')!=='1')startIntroTrap(true);
window.__ethos={get state(){return S},audio:A,get player(){return P},complete,doAction,nextDay,goalOf,today,addXP,grantTrait,
 finishFocus(secs){if(!OV||OV.type!=='focus'||!OV.f)return false;stopFocus();OV.f.focused=secs;OV.f.running=false;OV.f.over=true;renderFocus();return true},
 finishListen(){if(P)pFinish()},
 dismiss(){pendingLevel=null;sheet.classList.remove('show');sheet.innerHTML=''},
 nudgeEoc(){return maybeEocPause()},
 fireTimer(){return fireSleepTimer()},
 showDebug,track,startIntroTrap,t,lang,render,
 finishTrap(){if(!OV||OV.type!=='trap'||!OV.g)return false;const deck=trapDeck();OV.g.marks=deck.map(()=>true);OV.g.score=deck.length;OV.g.i=deck.length;OV.g.verdict=null;OV.g.locked=false;renderTrap();return true},
 setLang(v){S.lang=v==='hi'?'hi':'en';if(S.onboarded)save();render()}};
})();
