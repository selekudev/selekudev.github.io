
function toView(locateX,locateY){

	window.scrollTo(locateX,locateY);

}

toView(0,0);


function getContentList(node){

	let result = ["<h1># list content</h1>"];

	if(node.children !== void 0){

		for(let x of node.children){


			if(x.tagName.toLowerCase() === "h1"){

				result.push(`<div class="menu" style="font-size:1.3rem;" onclick="toView(0,${Math.round(Math.abs(x.getClientRects()[0].top))})">--<li class="fas fa-chevron-right" style="font-size: 12px;margin-right:10px;font-weight:bold;"></li> ${x.textContent}</div>`)

			}

			if(x.tagName.toLowerCase() === "h2"){

				result.push(`<div class="menu" style="padding-left:30px;font-size:1rem;" onclick="toView(0,${Math.round(Math.abs(x.getClientRects()[0].top))})"> --<li class="fas fa-chevron-right" style="font-size: 12px;margin-right:10px"></li> ${x.textContent}</div>`)

			}

			if(x.tagName.toLowerCase() === "h3"){

				result.push(`<div onclick="toView(0,${Math.round(Math.abs(x.getClientRects()[0].top))})" class="menu" style="padding-left:40px;font-size:0.8rem;"> --<li class="fas fa-chevron-right" style="font-size: 12px;margin-right:10px"></li> ${x.textContent}</div>`)

			}

			if(x.tagName.toLowerCase() === "h4"){

				result.push(`<div onclick="toView(0,${Math.round(Math.abs(x.getClientRects()[0].top))})" class="menu" style="padding-left:50px;font-size:12px;"> --<li class="fas fa-chevron-right" style="font-size: 12px;margin-right:10px"></li> ${x.textContent}</div>`)

			}

			

		}

	}else{

		return "";

	}

	return result;

}

document.querySelector(".left-content-d").style.height = innerHeight+"px";
document.querySelector(".left-content-d").innerHTML = getContentList(document.querySelector(".right-content-d")).join(" ");


document.querySelector("#show-menu").onclick = ()=>{


	document.querySelector(".left-content-d").classList.toggle("show");

	console.log(0);


}
