(()=>{"use strict";(()=>{const e=document.querySelector("#content"),t=document.createElement("nav"),n=document.createElement("h2");n.classList.add("restaurant-name"),n.textContent="Food-On-A-Plate";const d=document.createElement("ul");d.classList.add("menu-items");const a=document.createElement("li");a.textContent="Home",a.classList.add("menu-item");const c=document.createElement("li");c.textContent="Menu",c.classList.add("menu-item");const o=document.createElement("li");o.textContent="Contact us",o.classList.add("menu-item"),d.appendChild(a),d.appendChild(c),d.appendChild(o),t.appendChild(n),t.appendChild(d);const s=document.createElement("div");s.setAttribute("id","main-content");const m=document.createElement("div");m.classList.add("greeting");const i=document.createElement("h1");i.textContent="Come on down for some delicious cuisine!";const l=document.createElement("h3");l.textContent="Tasty and affordable!";const p=document.createElement("button");p.textContent="Order Now",m.appendChild(i),m.appendChild(l),m.appendChild(p);const u=document.createElement("div");u.classList.add("restaurant-info");const r=document.createElement("div");r.classList.add("address");const C=document.createElement("p");C.textContent="1024 Oakwood Ave";const h=document.createElement("p");h.textContent="San Diego, CA 22434",r.appendChild(C),r.appendChild(h);const E=document.createElement("div");E.classList.add("opening-time");const x=document.createElement("p");x.textContent="Mon-Thurs: 8am-8pm";const L=document.createElement("p");L.textContent="Fri-Sun: 8am-11pm",E.appendChild(x),E.appendChild(L),u.appendChild(r),u.appendChild(E),s.appendChild(m),s.appendChild(u),e.appendChild(t),e.appendChild(s)})()})();