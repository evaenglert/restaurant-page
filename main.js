(()=>{"use strict";const e=()=>{document.querySelector("#content");const e=document.querySelector("#changing-content"),t=document.createElement("nav"),n=document.createElement("h2");n.classList.add("restaurant-name"),n.textContent="Food-On-A-Plate";const d=document.createElement("ul");d.classList.add("menu-items");const c=document.createElement("li");c.textContent="Home",c.classList.add("menu-item");const a=document.createElement("li");a.textContent="Menu",a.classList.add("menu-item");const o=document.createElement("li");o.textContent="Contact us",o.classList.add("menu-item"),d.appendChild(c),d.appendChild(a),d.appendChild(o),t.appendChild(n),t.appendChild(d);const s=document.createElement("div");s.setAttribute("id","main-content");const i=document.createElement("div");i.classList.add("greeting");const l=document.createElement("h1");l.textContent="Come on down for some delicious cuisine!";const m=document.createElement("h3");m.textContent="Tasty and affordable!";const r=document.createElement("button");r.textContent="Order Now",i.appendChild(l),i.appendChild(m),i.appendChild(r);const u=document.createElement("div");u.classList.add("restaurant-info");const p=document.createElement("div");p.classList.add("address");const C=document.createElement("p");C.textContent="1024 Oakwood Ave";const h=document.createElement("p");h.textContent="San Diego, CA 22434",p.appendChild(C),p.appendChild(h);const E=document.createElement("div");E.classList.add("opening-time");const b=document.createElement("p");b.textContent="Mon-Thurs: 8am-8pm";const g=document.createElement("p");g.textContent="Fri-Sun: 8am-11pm",E.appendChild(b),E.appendChild(g),u.appendChild(p),u.appendChild(E),s.appendChild(i),s.appendChild(u),e.appendChild(s)};e();const t=document.querySelectorAll(".menu-item"),n=t[0],d=t[1],c=t[2];n.addEventListener("click",(()=>{document.querySelector("#changing-content").innerHTML="",e()})),d.addEventListener("click",(()=>{document.querySelector("#changing-content").innerHTML="",(()=>{document.querySelector("#content");const e=document.querySelector("#changing-content"),t=document.createElement("nav"),n=document.createElement("h2");n.classList.add("restaurant-name"),n.textContent="Food-On-A-Plate";const d=document.createElement("ul");d.classList.add("menu-items");const c=document.createElement("li");c.textContent="Home",c.classList.add("menu-item");const a=document.createElement("li");a.textContent="Menu",a.classList.add("menu-item");const o=document.createElement("li");o.textContent="Contact us",o.classList.add("menu-item"),d.appendChild(c),d.appendChild(a),d.appendChild(o),t.appendChild(n),t.appendChild(d);const s=document.createElement("div");s.setAttribute("id","main-content");const i=document.createElement("h2");i.setAttribute("id","page-title"),i.textContent="Menu";const l=document.createElement("div");function m(e,t,n){const d=document.createElement("div");d.classList.add("food-item");const c=document.createElement("span");c.classList.add("food-info");const a=document.createElement("p");a.classList.add("food-name"),a.textContent=e;const o=document.createElement("p");o.classList.add("food-price"),o.textContent=t;const s=document.createElement("span");s.textContent=n,c.appendChild(a),c.appendChild(o),d.appendChild(c),d.appendChild(s),l.appendChild(d)}l.classList.add("menu-food-items"),m("Hamburger","$2.49","Buns, patty, tomato, onions, lettuce, and our secret family recipe."),m("Cheeseburger","$2.99","Similar to our hamburger, but with cheese."),m("Double Cheeseburger","$3.49","Similar to our cheeseburger, but with an extra patty."),m("Steak","$8.99","A juicy steak made just how you like it."),m("BBQ Ribs","$8.99","Barbecue ribs with your choice of a add-ons."),m("Grilled Cheese Sandwich","$4.99","A toasted and grilled cheese sandwich, dipped in our special sauce."),m("Caesar Salad","$7.99","Your typical caesar salad that comes with your choice of dressings."),m("French Fries","$1.99","Sometimes you don't want to eat your burger alone, why not add some french fries ?"),s.appendChild(i),s.appendChild(l),e.appendChild(s)})()})),c.addEventListener("click",(()=>{document.querySelector("#changing-content").innerHTML="",(()=>{document.querySelector("#content");const e=document.querySelector("#changing-content");document.createElement("div").setAttribute("id","main-content");const t=document.createElement("h2");t.setAttribute("id","page-title"),t.textContent="Contact";const n=document.createElement("div");n.classList.add("contact-page-content");const d=document.createElement("form");d.setAttribute("action","example.com/path"),d.setAttribute("method","post");const c=document.createElement("h3");c.textContent="Message Us";const a=document.createElement("label");a.setAttribute("for","full_name"),a.textContent="Full Name";const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("id","full_name");const s=document.createElement("label");s.setAttribute("for","email"),s.textContent="Email";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","email");const l=document.createElement("label");l.setAttribute("for","message"),l.textContent="Type your message...";const m=document.createElement("input");m.setAttribute("type","text"),m.setAttribute("id","message"),d.appendChild(c),d.appendChild(a),d.appendChild(o),d.appendChild(s),d.appendChild(i),d.appendChild(l),d.appendChild(m);const r=document.createElement("div");r.classList.add("restaurant-info");const u=document.createElement("div");u.classList.add("address");const p=document.createElement("p");p.textContent="1024 Oakwood Ave";const C=document.createElement("p");C.textContent="San Diego, CA 22434",u.appendChild(p),u.appendChild(C);const h=document.createElement("div");h.classList.add("opening-time");const E=document.createElement("p");E.textContent="Mon-Thurs: 8am-8pm";const b=document.createElement("p");b.textContent="Fri-Sun: 8am-11pm",h.appendChild(E),h.appendChild(b),r.appendChild(u),r.appendChild(h),n.appendChild(d),n.appendChild(r),e.appendChild(n)})()}))})();