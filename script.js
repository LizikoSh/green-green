const plants = [
  {name:"Калатея Зебрина",latin:"Calathea zebrina",difficulty:"hard",conditions:["shade","bathroom"],safety:"safe",light:"Розсіяне",price:"1 593 грн",image:"https://dflora.com.ua/content/images/14/600x600l80mc0/29632904843585.webp",url:"https://dflora.com.ua/kalateia-zebryna/"},
  {name:"Калатея Аргентина",latin:"Calathea 'Argentea'",difficulty:"hard",conditions:["shade","bathroom"],safety:"safe",light:"М’яке",price:"441 грн",image:"https://dflora.com.ua/content/images/15/600x600l80mc0/88111312899132.webp",url:"https://dflora.com.ua/kalateia-arhentyna/"},
  {name:"Калатея Леопардина",latin:"Calathea leopardina",difficulty:"hard",conditions:["shade","bathroom"],safety:"safe",light:"Розсіяне",price:"486 грн",image:"https://dflora.com.ua/content/images/16/600x600l80mc0/89444523196397.webp",url:"https://dflora.com.ua/kalateia-leopardyna/"},
  {name:"Сингоніум Батерфляй",latin:"Syngonium 'Butterfly'",difficulty:"beginner",conditions:["shade","bathroom"],safety:"toxic",light:"Розсіяне",price:"434 грн",image:"https://dflora.com.ua/content/images/24/600x600l80mc0/99921659301130.webp",url:"https://dflora.com.ua/synhonium-baterfliai/"},
  {name:"Сингоніум Ред Арроу",latin:"Syngonium 'Red Arrow'",difficulty:"beginner",conditions:["shade","bathroom"],safety:"toxic",light:"Розсіяне",price:"684 грн",image:"https://dflora.com.ua/content/images/27/600x600l80mc0/23374671296656.webp",url:"https://dflora.com.ua/synhonium-red-arrou/"},
  {name:"Філодендрон Біллітає",latin:"Philodendron billietiae",difficulty:"beginner",conditions:["shade","bathroom"],safety:"toxic",light:"Яскраве розсіяне",price:"576 грн",image:"https://dflora.com.ua/content/images/30/574x600l80mc0/77704277759275.webp",url:"https://dflora.com.ua/filodendron-billitaia-billietiae/"},
  {name:"Філодендрон Біркін",latin:"Philodendron 'Birkin'",difficulty:"beginner",conditions:["shade","bathroom"],safety:"toxic",light:"Яскраве розсіяне",price:"585 грн",image:"https://dflora.com.ua/content/images/34/591x600l80mc0/92415158443920.webp",url:"https://dflora.com.ua/filodendron-birkin-/533/"},
  {name:"Філодендрон Бразіл",latin:"Philodendron hederaceum 'Brasil'",difficulty:"easy",conditions:["shade","bathroom"],safety:"toxic",light:"Розсіяне",price:"765 грн",image:"https://dflora.com.ua/content/images/38/600x600l80mc0/filodendron-brazil-90461888898372.webp",url:"https://dflora.com.ua/filodendron-brazil/"},
  {name:"Спатифілум Алана",latin:"Spathiphyllum 'Alana'",difficulty:"beginner",conditions:["shade","bathroom"],safety:"toxic",light:"Півтінь",price:"306 грн",image:"https://dflora.com.ua/content/images/47/597x600l80mc0/59141232481009.webp",url:"https://dflora.com.ua/spatyfillum-alana-d12/"},
  {name:"Спатифілум Кватро",latin:"Spathiphyllum 'Quatro'",difficulty:"beginner",conditions:["shade","bathroom"],safety:"toxic",light:"Півтінь",price:"198 грн",image:"https://dflora.com.ua/content/images/50/600x600l80mc0/86330113120053.webp",url:"https://dflora.com.ua/spatyfillum-/549/"},
  {name:"Пеперомія Хеппі",latin:"Peperomia 'Happy Bean'",difficulty:"easy",conditions:["shade","dry"],safety:"safe",light:"Розсіяне",price:"243 грн",image:"https://dflora.com.ua/content/images/3/600x600l80mc0/59537741331077.webp",url:"https://dflora.com.ua/sukulent/"},
  {name:"Крассула Перфората",latin:"Crassula perforata",difficulty:"easy",conditions:["sun","dry"],safety:"toxic",light:"Яскраве",price:"153 грн",image:"https://dflora.com.ua/content/images/7/600x600l80mc0/krassula-perforata-crassula-perforata-d5.5-39614722954933.webp",url:"https://dflora.com.ua/krassula-perforata-crassula-perforata-d5.5/"},
  {name:"Каланхое Томеноза",latin:"Kalanchoe tomentosa",difficulty:"easy",conditions:["sun","dry"],safety:"toxic",light:"Яскраве",price:"144 грн",image:"https://dflora.com.ua/content/images/11/600x600l80mc0/sukulent560-44646796256052.webp",url:"https://dflora.com.ua/sukulent/560/"},
  {name:"Алоказія Лоу Райдер",latin:"Alocasia 'Low Rider'",difficulty:"hard",conditions:["shade","bathroom"],safety:"toxic",light:"Яскраве розсіяне",price:"504 грн",image:"https://dflora.com.ua/content/images/16/600x600l80mc0/alokaziia565-38715183725727.webp",url:"https://dflora.com.ua/alokaziia/565/"},
  {name:"Аглаонема Марія",latin:"Aglaonema 'Maria'",difficulty:"easy",conditions:["shade","dry"],safety:"toxic",light:"Півтінь",price:"639 грн",image:"https://dflora.com.ua/content/images/24/600x600l80mc0/13377519902443.webp",url:"https://dflora.com.ua/ahlaonema-mariia/"}
];
const difficultyNames={easy:"Легка",beginner:"Для початківців",hard:"Потребує досвіду"};
const conditionNames={shade:"Тінь / півтінь",sun:"Яскраве світло",bathroom:"Любить вологість",dry:"Терпить сухіше повітря"};

const grid=document.querySelector('#plant-grid');
if(grid){
  const search=document.querySelector('#plant-search');
  const difficulty=document.querySelector('#difficulty-filter');
  const condition=document.querySelector('#condition-filter');
  const safety=document.querySelector('#safety-filter');
  const count=document.querySelector('#catalog-count');
  const empty=document.querySelector('#empty-state');
  const reset=document.querySelector('#reset-filters');
  const card=p=>`<article class="plant-card"><div class="plant-image"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="plant-safety ${p.safety==='safe'?'':'caution'}">${p.safety==='safe'?'Безпечніша для тварин':'Тримати поза доступом'}</span></div><div class="plant-body"><h2>${p.name}</h2><p class="latin">${p.latin}</p><div class="plant-meta"><div><span>Складність</span><b>${difficultyNames[p.difficulty]}</b></div><div><span>Світло</span><b>${p.light}</b></div><div><span>Умови</span><b>${conditionNames[p.conditions[0]]}</b></div><div><span>Безпечність</span><b>${p.safety==='safe'?'Нижчий ризик':'Потрібна обережність'}</b></div></div><div class="plant-footer"><span class="plant-price">${p.price}</span><a class="source-link" href="${p.url}" target="_blank" rel="noopener noreferrer">Картка Dflora ↗</a></div></div></article>`;
  function render(){
    const q=search.value.trim().toLocaleLowerCase('uk');
    const result=plants.filter(p=>(`${p.name} ${p.latin}`.toLocaleLowerCase('uk').includes(q))&&(difficulty.value==='all'||p.difficulty===difficulty.value)&&(condition.value==='all'||p.conditions.includes(condition.value))&&(safety.value==='all'||p.safety===safety.value));
    grid.innerHTML=result.map(card).join('');
    count.textContent=`Знайдено: ${result.length} із ${plants.length}`;
    empty.hidden=result.length!==0;
  }
  [search,difficulty,condition,safety].forEach(el=>{el.addEventListener('input',render);el.addEventListener('change',render)});
  reset.addEventListener('click',()=>{search.value='';difficulty.value='all';condition.value='all';safety.value='all';render()});
  render();
}

const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.inner-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')}));
}
