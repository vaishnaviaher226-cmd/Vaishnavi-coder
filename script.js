const records=[
{id:"AV-001",name:"Fragment Cluster Alpha",type:"Debris",orbit:"LEO · 550 km",detail:"Illustrative fragment group"},
{id:"AV-002",name:"Earth Observation Satellite",type:"Satellite",orbit:"LEO · 720 km",detail:"Illustrative active spacecraft"},
{id:"AV-003",name:"Retired Rocket Stage",type:"Debris",orbit:"MEO · 12,000 km",detail:"Illustrative spent launch stage"}
];
let active="All";
const list=document.getElementById("objectList"),search=document.getElementById("search");
function render(){const q=search.value.toLowerCase();const found=records.filter(x=>(active==="All"||x.type===active)&&[x.id,x.name,x.type,x.orbit].some(v=>v.toLowerCase().includes(q)));list.innerHTML=found.length?found.map(x=>'<article class="object"><div><strong>'+x.name+'</strong><small>'+x.id+' · '+x.orbit+'<br>'+x.detail+'</small></div><span class="tag '+(x.type==="Satellite"?"sat":"")+'">'+x.type+'</span></article>').join(""):'<div class="empty">No matching sample objects. Try another search.</div>'}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{active=b.dataset.filter;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));render()}));
search.addEventListener("input",render);render();
