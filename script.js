// LOADER
window.addEventListener('load',()=>{
  const l=document.getElementById('loader');
  setTimeout(()=>{l.classList.add('hidden');setTimeout(()=>l.remove(),700);},600);
});
// NAV — trasparente sopra, solido dopo scroll
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>60);},{passive:true});
// HAMBURGER
const hb=document.getElementById('hamburger'),mm=document.getElementById('mobile-menu'),mc=document.getElementById('mob-close');
hb.addEventListener('click',()=>{mm.classList.add('open');document.body.style.overflow='hidden';});
mc.addEventListener('click',()=>{mm.classList.remove('open');document.body.style.overflow='';});
mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mm.classList.remove('open');document.body.style.overflow='';}));
// SCROLL REVEAL
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(!t)return;e.preventDefault();window.scrollTo({top:t.offsetTop-nav.offsetHeight-16,behavior:'smooth'});});});