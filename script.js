// JS minimal (sans data.js)
const $ = (s, el=document)=>el.querySelector(s);
const $$ = (s, el=document)=>[...el.querySelectorAll(s)];

// Lien actif
(function setActive(){
  const here = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href===here) a.classList.add('active');
  });
})();

// Année
$('#year') && ($('#year').textContent = new Date().getFullYear());
