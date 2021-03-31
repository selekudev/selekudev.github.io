let a = document.querySelector("#show");
let b = document.querySelector("#nav-hidden");

a.onclick = ()=>{
	b.classList.toggle("on-mobile-active");
}