import{a as f,i as c,S as v}from"./assets/vendor-550cebad.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();async function h(s){s=encodeURIComponent(s);const r="42609290-856768105ab9e79485c69bf61",o=new URLSearchParams({per_page:y,page:d,key:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await f.get(`https://pixabay.com/api/?${o}&q=${s}`)).data}async function g(s){console.log(s);const r=s.hits;r.length==0&&(a.className="visually-hidden",document.getElementsByClassName("loader")[0].className="loader visually-hidden",c.error({title:"Error",message:"No such pictures",position:"topRight"}));const o=r.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");m.insertAdjacentHTML("beforeend",o);const i={captionsData:"alt"};let t=new v(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const m=document.querySelector("ul.gallery");let n="";const p=document.getElementById("search-input");let d=1,y=15;const a=document.getElementById("load-button"),l=document.getElementById("loader");p.addEventListener("input",s=>{n=p.value.trim(),m.innerHTML="",a.className="visually-hidden",l.className="visually-hidden"});const L=document.getElementById("search-button");L.addEventListener("click",async()=>{m.innerHTML="",l.className="loader",d=1,y=15;try{if(n){a.className="";const s=await h(n);g(s),l.className="loader visually-hidden",d+=1}}catch(s){a.className="visually-hidden",console.log(s),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});a.addEventListener("click",async()=>{l.className="loader";try{if(n){const s=await h(n),r=s.totalHits;if(document.querySelectorAll(".gallery-item").length>=r)return a.className="visually-hidden",l.className="visually-hidden",c.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});g(s),l.className="loader visually-hidden",d+=1}}catch(s){console.log(s),c.error({title:"Error",message:"Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
