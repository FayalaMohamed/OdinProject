(()=>{"use strict";function e(){const e=document.querySelector(".mainDiv");e.innerHTML="";const n=document.createElement("div");n.classList="displayDivHome",n.innerHTML="<p> The best sandwiches in town </p><p> Come and visit us at 20 Avenue Albert Einstein, 69100 Villeurbanne ! </p>",e.appendChild(n)}const n=[["Kebab","5.5","kebab.jpg"],["Menu Kebab","7","kebab.jpg"],["Beef Burger","5","burger.jpg"],["Menu Beef Burger","6.5","burger.jpg"],["Tacos tenders algérienne","6","tacos.jpg"],["Menu Tacos tenders algérienne","7.5","tacos.jpg"]];function t(e){document.querySelectorAll("nav>button").forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}(function(){const a=document.getElementById("content"),c=document.createElement("header"),i=document.createElement("h1");i.className="title",i.innerText="Chamas Tacos",c.appendChild(i);const d=document.createElement("nav"),l=document.createElement("button");l.className="navBtn homeBtn",l.innerText="Home",l.addEventListener("click",(n=>{n.preventDefault(),t(l),e()})),d.appendChild(l);const o=document.createElement("button");o.className="navBtn menuBtn",o.innerText="Menu",o.addEventListener("click",(e=>{e.preventDefault(),t(o),function(){const e=document.querySelector(".mainDiv");e.innerHTML="";const t=document.createElement("div");t.classList="displayDivMenu",n.forEach((e=>{let n=document.createElement("div");n.classList="menu-item";let a=document.createElement("p");if(a.textContent=`${e[0]} - ${e[1]}€`,e[2]){let t=document.createElement("img");t.src=`../images/${e[2]}`,t.alt=e[0],n.appendChild(t)}n.appendChild(a),t.appendChild(n)})),e.appendChild(t)}()})),d.appendChild(o),c.appendChild(d),a.appendChild(c)})(),function(){const e=document.createElement("div");e.classList.add("mainDiv"),document.getElementById("content").appendChild(e)}(),e(),t(document.querySelector(".homeBtn"))})();