const app=document.querySelector('.experience');
const open=document.querySelector('#open');
const see=document.querySelector('#see');
const inside=document.querySelector('#inside');
const controls=document.querySelector('.controls');
const status=document.querySelector('.status');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let state='closed';
function setState(next){state=next;app.dataset.state=next}
function reveal(){if(state!=='closed')return;setState('opening');open.disabled=true;window.setTimeout(()=>{setState('cover');see.focus({preventScroll:true})},reduced.matches?40:1650)}
function showInside(){if(state!=='cover')return;setState('turning');window.setTimeout(()=>{inside.hidden=false;controls.hidden=false;setState('inside');inside.scrollIntoView({behavior:reduced.matches?'instant':'smooth'});document.querySelector('#cover').focus({preventScroll:true})},reduced.matches?40:450)}
function showCover(){inside.hidden=true;controls.hidden=true;setState('cover');window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});see.focus({preventScroll:true})}
function reset(){inside.hidden=true;controls.hidden=true;open.disabled=false;setState('closed');window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});open.focus({preventScroll:true})}
async function share(){const data={title:'Chá de bebê de Vicenzo e Valentim',text:'Venha celebrar com a gente!',url:location.href};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(location.href);status.textContent='Link copiado para compartilhar.'}}catch(e){if(e.name!=='AbortError')status.textContent='Copie o endereço desta página para compartilhar.'}}
open.addEventListener('click',reveal);see.addEventListener('click',showInside);document.querySelector('#cover').addEventListener('click',showCover);document.querySelector('#reopen').addEventListener('click',reset);document.querySelector('#share').addEventListener('click',share);
const zoomDialog=document.querySelector('#zoom-dialog');
document.querySelector('#zoom').addEventListener('click',()=>zoomDialog.showModal());
document.querySelector('#zoom-close').addEventListener('click',()=>zoomDialog.close());
