const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const templates=['chatgpt/four-disciplines-coach','hermes/four-disciplines-execution','chatgpt/en/four-disciplines-coach-en','hermes/en/four-disciplines-execution-en'];
function fixture(lang){
 const ids=['a1','b1','a2','b2','c1','c2','c3'];
 return {schemaVersion:1,lang,cycleId:'fixture',revision:1,updatedAt:'',approval:'agreed',
 wig:{statement:lang==='ru'?'Я достиг проверяемого результата':'I achieved a verifiable outcome',baseline:4,baselinePeriod:'baseline period',target:8,unit:'units',deadline:'2030-12-31',successCriterion:'Each of three consecutive periods, not their average',lagName:'Outcome',direction:'higher',range:null},
 currentStageId:'s1',stages:[{id:'s1',title:'I prepared the work',deadline:'2030-02-01',status:'active',acceptance:'Review the evidence',steps:[{id:'a',title:'I completed materials',unitIds:['a1','a2']},{id:'b',title:'I completed practice',unitIds:['b1','b2']}]}],
 units:ids.map(id=>({id,label:'I completed '+id,quality:'Evidence reviewed',leadId:id[0],status:'unknown'})),
 pairs:[{label:'Matched parts',groups:[['a1','b1'],['a2','b2']]}],
 weeks:[{id:'w1',start:'2030-01-01',end:'2030-01-07',unitIds:ids,closed:false,snapshot:null,review:'2030-01-08',planStatus:'agreed'}],measurements:[],changes:[]};
}
function boot(html,config){
 const nodes=new Map(),downloads=[],window={confirm:()=>true};
 class El{
 constructor(tag='div'){this.tagName=tag;this.children=[];this.attrs={};this.dataset={};this.value='';this.textContent='';this.hidden=false;this.disabled=false;this.listeners={};this.checked=false;}
 append(...xs){this.children.push(...xs);}
 replaceChildren(...xs){this.children=[...xs];}
 setAttribute(k,v){this.attrs[k]=v;}
 addEventListener(k,f){this.listeners[k]=f;}
 querySelectorAll(selector){const all=[];const walk=n=>{for(const c of n.children){if(selector==='input:checked'&&c.tagName==='input'&&c.checked)all.push(c);walk(c);}};walk(this);return all;}
 click(){if(this.tagName==='a'){downloads.push(this.href);return;}if(!this.disabled)return this.listeners.click?.({preventDefault(){}});}
 remove(){}
 }
 for(const m of html.matchAll(/<([a-z][a-z0-9]*)\b[^>]*\bid="([^"]+)"[^>]*>/gi)){assert(!nodes.has(m[2]),'duplicate ID');const el=new El(m[1]);el.hidden=/\bhidden\b/.test(m[0]);nodes.set(m[2],el);}
 const doc={getElementById:id=>{assert(nodes.has(id),'missing '+id);return nodes.get(id);},createElement:t=>new El(t),body:new El('body'),documentElement:{lang:''}};
 const blobs=new Map();class Blob{constructor(parts){this.text=parts.join('');}}
 const URL={createObjectURL:b=>{const key='blob:'+blobs.size;blobs.set(key,b.text);return key;},revokeObjectURL(){}};
 let code=html.match(/<script>([\s\S]*?)<\/script>/)[1];new vm.Script(code);
 code=code.replace(/const CONFIG = [\s\S]*?;\n\/\* units:/,'const CONFIG = '+JSON.stringify(config)+';\n/* units:');
 vm.runInNewContext(code,{document:doc,window,structuredClone,Blob,URL,setTimeout:()=>0,Date,console});
 const q=id=>nodes.get(id),click=id=>q(id).click(),exportData=()=>{click('export-json');return JSON.parse(blobs.get(downloads.at(-1)));};
 return {q,click,exportData,async importData(data){q('import-json').files=[{size:100,text:async()=>JSON.stringify(data)}];await q('import-json').listeners.change();},
 mark(i){q('week-grid').children[i].children[0].click();},
 submit(id){q(id).listeners.submit({preventDefault(){}});},
 allText(el){return [el.textContent,...el.children.map(c=>this.allText(c))].join(' ');}};
}
(async()=>{
 for(const base of templates){
 const html=fs.readFileSync(path.join(root,base,'assets/dashboard.html'),'utf8'),lang=base.includes('/en/')?'en':'ru';
 assert(!/<script\b[^>]*src=/.test(html));assert(!/fetch\(|XMLHttpRequest|localStorage/.test(html));
 // Blank reusable form must also initialize.
 const raw=html.match(/const CONFIG = ([\s\S]*?);\n\/\* units:/)[1];const blank=vm.runInNewContext('('+raw+')');assert.equal(blank.lang,lang);boot(html,JSON.parse(JSON.stringify(blank)));
 const app=boot(html,fixture(lang));
 assert.match(app.q('week-verdict').textContent,lang==='ru'?/ещё не внёс/:/not entered/);
 assert.match(app.allText(app.q('steps')),/— \/ 2/);
 app.mark(0);app.mark(3); // a1 + b2 are not a matching pair.
 assert.match(app.allText(app.q('pairs')),/0 \/ 2/);
 app.mark(1);assert.match(app.allText(app.q('pairs')),/1 \/ 2/);
 // Round-trip and atomic rejection of malformed or foreign-cycle imports.
 const saved=app.exportData();await app.importData({...saved,cycleId:'wrong'});
 assert.deepEqual(app.exportData(),saved);
 const bad=structuredClone(saved);bad.weeks[0].unitIds.push('missing');await app.importData(bad);assert.deepEqual(app.exportData(),saved);
 app.mark(0);await app.importData(saved);assert.deepEqual(app.exportData(),saved);
 // Text remains text, never executable markup.
 const safe=structuredClone(saved);safe.units[0].label='<img src=x onerror=alert(1)>';await app.importData(safe);
 assert(app.q('week-grid').children[0].children[1].textContent.includes('<img'));
 await app.importData(fixture(lang));app.mark(0);app.mark(1);app.click('close-week');
 assert.match(app.q('week-verdict').textContent,lang==='ru'?/без отметки|неполный/:/unreported|Incomplete/);
 const unknownSnapshot=app.exportData().weeks[0].snapshot;assert.equal(unknownSnapshot.filter(s=>s==='unknown').length,5);
 // New fixture, two done and five explicitly missed.
 await app.importData(fixture(lang));app.mark(0);app.mark(1);
 for(let i=2;i<7;i++){app.mark(i);app.mark(i);}
 app.click('close-week');assert.equal(app.q('week-verdict').dataset.tone,'bad');
 assert.match(app.q('week-verdict').textContent,lang==='ru'?/План недели не выполнен/:/Weekly plan not met/);
 const archived=app.exportData().weeks[0].snapshot;
 // Late completion through inventory preserves the closed week's snapshot.
 const inv=app.q('inventory');const a2=inv.children[0].children[1].children[1].children[0];a2.click();a2.click();
 assert.equal(app.exportData().units.find(u=>u.id==='a2').status,'done');
 assert.deepEqual(app.exportData().weeks[0].snapshot,archived);assert.equal(app.q('week-verdict').dataset.tone,'bad');
 // New plan uses unfinished units and resets their marks, retaining completed units.
 app.q('start').value='2030-01-08';app.q('end').value='2030-01-14';
 const option=app.q('planner-list').children[0].children[0];option.checked=true;const selected=option.value;
 app.submit('planner');let state=app.exportData();
 assert.equal(state.weeks.length,2);assert.equal(state.units.find(u=>u.id===selected).status,'unknown');
 assert.equal(state.units.find(u=>u.id==='a1').status,'done');assert.deepEqual(state.weeks[0].snapshot,archived);
 // Blank actual remains null; numeric outcome is separate from action counts.
 app.q('period').value='period-1';app.q('plan').value='6';app.q('actual').value='';app.q('source').value='test evidence';app.q('measured').value='2030-01-08';app.submit('measure-form');
 assert.equal(app.exportData().measurements[0].actual,null);
 app.q('actual').value='5';app.submit('measure-form');assert.equal(app.exportData().measurements.length,2);
 assert.match(app.allText(app.q('lag-rows')),lang==='ru'?/Отстаём/:/Behind/);
 // Full stage does not auto-complete the stage or WIG.
 state=app.exportData();state.units.forEach(u=>u.status='done');await app.importData(state);
 assert.match(app.q('stage-verdict').textContent,lang==='ru'?/готово к приёмке/:/ready for acceptance/);
 assert.equal(app.exportData().stages[0].status,'active');
 app.click('report-button');assert(app.q('report').value.includes('Each of three consecutive periods'));
 assert.deepEqual(app.exportData(),state);
 console.log('PASS '+base+': linked marks, matching components, 2/7 verdict, unknowns, snapshots, next week, null actuals, export/import, safe text, acceptance boundary');
 }
 console.log('Logic checks use a minimal DOM harness; browser layout and live model behavior are not tested here.');
})().catch(e=>{console.error(e);process.exitCode=1;});
