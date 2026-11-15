const $=s=>document.querySelector(s),R=document.documentElement;
// Theme toggle (remembers choice)
$('#theme').onclick=()=>{const t=R.dataset.theme==='dark'?'light':'dark';R.dataset.theme=t;try{localStorage.theme=t}catch(e){}};
// Mobile menu
$('#menu').onclick=()=>$('#nav').classList.toggle('open');
document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
// Architecture carousel arrow: scroll forward, loop back at the end
$('#next').onclick=()=>{const t=$('#track'),end=t.scrollLeft+t.clientWidth>=t.scrollWidth-4;t.scrollBy({left:end?-t.scrollWidth:t.clientWidth*.8,behavior:'smooth'})};
// Category cards
const D=[['db','CWE-89','SQL Injection','Exploit un-sanitized database queries. Progression starts with raw statement concatenation up to heavily filtered blind evasion.',['DAST','SAST','Spring Data']],['tm','OWASP-LLM01','Prompt Injection','Bypass foundational LLM system instructions via adversarial inputs, targeting context window hijacking and tool calling.',['GenAI','LangChain','Public']],['ky','CWE-347','JWT Vulnerability','Manipulate signature validation states, brute-force weak symmetric keys, and exploit header parameter parsing flaws.',['OAuth','AuthN','Unsafe']]];
const cat=$('#cat');cat.innerHTML=[0,0,1,2,2].map(i=>{const[ic,c,t,p,g]=D[i];return`<article class="cc"><div class="ch"><span class="ib"><svg width="24" height="24"><use href="#${ic}"/></svg></span><span class="pill">${c}</span></div><div><h3>${t}</h3><p>${p}</p></div><div class="tags">${g.map(x=>`<span>${x}</span>`).join('')}</div></article>`}).join('');
// Start scrolled by one card on desktop so cards bleed off both edges, as in the design
if(innerWidth>900)cat.scrollLeft=356;
// Copy buttons
document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy)}catch(e){}b.classList.add('ok');setTimeout(()=>b.classList.remove('ok'),1400)});
