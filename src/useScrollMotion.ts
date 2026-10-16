import { useEffect, type RefObject } from 'react';
const clamp = (value:number) => Math.max(0,Math.min(1,value));
const smooth = (value:number) => { const p=clamp(value); return p*p*(3-2*p); };
export function useScrollMotion(root:RefObject<HTMLDivElement|null>, manualCard:RefObject<boolean>, onCardFlip:(flipped:boolean)=>void){
 useEffect(()=>{
 const media=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;
 const update=()=>{frame=0;const node=root.current;if(!node)return;const height=innerHeight;const reduced=media.matches;
 node.querySelectorAll<HTMLElement>('[data-scene]').forEach(el=>{const r=el.getBoundingClientRect();el.style.setProperty('--progress',String(reduced?.5:clamp((height-r.top)/(height+r.height))));});
 node.querySelectorAll<HTMLElement>('[data-tear-scene]').forEach(el=>{const r=el.getBoundingClientRect();const p=reduced?1:smooth(-r.top/Math.max(1,r.height-height));el.style.setProperty('--open',String(p));});
 const card=node.querySelector<HTMLElement>('.postcard');if(card){const p=reduced?0:smooth((height*.65-card.getBoundingClientRect().top)/(height*.65));card.style.setProperty('--flip',String(p));if(!manualCard.current)onCardFlip(p>.5);}
 const cards=node.querySelector<HTMLElement>('.polaroids');if(cards){const r=cards.getBoundingClientRect();const p=reduced?1:smooth((height*.95-r.top)/(height*.55));cards.style.setProperty('--spread',String(p));cards.querySelectorAll<HTMLElement>('.polaroid').forEach(el=>{const x=innerWidth>700?cards.clientWidth/2-el.offsetLeft-el.offsetWidth/2:0;el.style.setProperty('--stack-x',x+'px');});}
 const route=node.querySelector<HTMLElement>('.route');if(route){const r=route.getBoundingClientRect();route.style.setProperty('--draw',String(reduced?1:clamp((height*.85-r.top)/(height*.85))));}
 };
 const tick=()=>{if(!frame)frame=requestAnimationFrame(update);};update();addEventListener('scroll',tick,{passive:true});addEventListener('resize',tick);media.addEventListener('change',tick);
 return()=>{removeEventListener('scroll',tick);removeEventListener('resize',tick);media.removeEventListener('change',tick);cancelAnimationFrame(frame);};
 },[root,manualCard,onCardFlip]);
}
