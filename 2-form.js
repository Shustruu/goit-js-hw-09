import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s=document.querySelector("input");s.classList.add("input-form-email");const m=document.querySelector("textarea");m.classList.add("textarea-form-message");const n=document.querySelector("button");n.classList.add("btn-form-submit");const r=document.querySelector(".feedback-form");let o={email:"",message:""};const c=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e===null)return;o=e;for(const t in e)r.elements[t].value=e[t]}catch(e){console.log(e)}};c();const i=e=>{const{target:t}=e,a=t.value,l=t.name;o[l]=a,localStorage.setItem("feedback-form-state",JSON.stringify(o))},d=e=>{e.preventDefault(),o.email===""||o.message===""?alert("Fill please all fields"):console.log(o);const{currentTarget:t}=e;t.reset(),localStorage.removeItem("feedback-form-state")};r.addEventListener("input",i);r.addEventListener("submit",d);
//# sourceMappingURL=2-form.js.map
