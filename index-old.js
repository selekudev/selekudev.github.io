let a = document.querySelector("#show");
let b = document.querySelector("#nav-hidden");
let c = document.querySelector(".content");
let d = document.querySelector(".navbar");
let f = document.querySelectorAll(".card");
let g = document.querySelector(".on-mobile-nav");
let mode = document.querySelectorAll("#mode");



a.onclick = ()=>{
	b.classList.toggle("on-mobile-active");
}

window.onload = ()=>{
	let check = localStorage.getItem("seleku-dark-mode");

	if(check === "true"){
		a.classList.toggle("dark-button");
		document.body.classList.toggle("dark");
		document.querySelector("html").classList.toggle("dark");
		c.classList.toggle("dark");
		d.classList.toggle("dark");
		g.classList.toggle("dark");
		f.forEach(card =>{
			card.classList.toggle("primary-dark");
		});

		[...c.children].forEach(e =>{
			e.classList.toggle("dark");
		})
	}
}

mode.forEach(el =>{
	el.onclick=()=>{

		let check = localStorage.getItem("seleku-dark-mode");

		if(check === "true"){
			localStorage.setItem("seleku-dark-mode",false);
		}else{
			localStorage.setItem("seleku-dark-mode",true);
		}

		a.classList.toggle("dark-button");
		document.body.classList.toggle("dark");
		document.querySelector("html").classList.toggle("dark");
		c.classList.toggle("dark");
		d.classList.toggle("dark");
		g.classList.toggle("dark");
		f.forEach(card =>{
			card.classList.toggle("primary-dark");
		});

		[...c.children].forEach(e =>{
			e.classList.toggle("dark");
		})
	}
})
