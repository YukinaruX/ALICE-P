import assert from 'node:assert/strict';
import {chromium} from '@playwright/test';
const browser=await chromium.launch({executablePath:'C:/Users/jvgsl/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe'});
try {for(const width of [390,1440]) {
 const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'no-preference'});await page.goto('http://localhost:5173');await page.locator('h1').waitFor();
 assert.equal(await page.locator('.chapter-transition').count(),4,'quatro transições de papel');
 const seek=async(selector,progress)=>{await page.evaluate(({selector,progress})=>{const el=document.querySelector(selector);scrollTo({top:el.getBoundingClientRect().top+scrollY+(el.offsetHeight-innerHeight)*progress,behavior:'instant'});},{selector,progress});await page.waitForTimeout(100);};
 await seek('.chapter-transition',0);const closed=await page.locator('.tear-sheet-top').first().evaluate(e=>getComputedStyle(e).transform);
 await seek('.chapter-transition',.65);const opened=await page.locator('.tear-sheet-top').first().evaluate(e=>getComputedStyle(e).transform);assert.notEqual(closed,opened,'papel abre na rolagem');await page.screenshot({path:'docs/motion-tear-'+width+'.png'});
 await seek('.chapter-transition',0);assert.equal(await page.locator('.tear-sheet-top').first().evaluate(e=>getComputedStyle(e).transform),closed,'papel fecha na rolagem inversa');
 const at=async(selector,y)=>{await page.locator(selector).evaluate((e,y)=>scrollTo({top:e.getBoundingClientRect().top+scrollY-y,behavior:'instant'}),y);await page.waitForTimeout(100);};
 await at('.postcard',700);const front=await page.locator('.postcard-inner').evaluate(e=>getComputedStyle(e).transform);await at('.postcard',30);const back=await page.locator('.postcard-inner').evaluate(e=>getComputedStyle(e).transform);assert.notEqual(front,back,'cartão vira na rolagem');
 await at('.polaroids',850);const stacked=await page.locator('.polaroid').first().evaluate(e=>getComputedStyle(e).transform);await at('.polaroids',100);const spread=await page.locator('.polaroid').first().evaluate(e=>getComputedStyle(e).transform);assert.notEqual(stacked,spread,'polaroids se abrem com a rolagem');
 await at('.route',800);const routeStart=await page.locator('.route-draw').evaluate(e=>getComputedStyle(e).strokeDashoffset);await at('.route',40);const routeEnd=await page.locator('.route-draw').evaluate(e=>getComputedStyle(e).strokeDashoffset);assert.notEqual(routeStart,routeEnd,'rota é desenhada');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'sem overflow');
 await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('.chapter-transition').first().isVisible(),false,'sem cenas intercaladas com redução de movimento');assert.equal(await page.locator('.route-draw').evaluate(e=>getComputedStyle(e).strokeDashoffset),'0px');
 await page.close();console.log('PASS animações e reversão em '+width+'px');}}
 finally{await browser.close();}
