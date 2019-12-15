const screenPage = document.querySelector('.screen');
const content = document.querySelector('.content');
const inkscape = document.querySelector('.image-container-1');
const autocad = document.querySelector('.image-container-2');
const sai = document.querySelector('.image-container-3');
const bugsy = document.querySelector('.bugsy');

window.addEventListener("load", ()=>{
	const loading = document.getElementById("loadingScreen");
	setTimeout(()=>{
		loading.style.display="none";

		screenPage.classList.add('scene-1');
		inkscape.classList.add('appear1');
		autocad.classList.add('appear2');
		sai.classList.add('appear3');

	},1000);
	
})

let pageCounter = 1;

const changePage = () => {
	pageCounter++;

	if(pageCounter == 2){
		bugsy.style.display = "none";
		screenPage.classList.remove('scene-1');
		screenPage.classList.add('scene-2');
		$('.inkscape-icon, .autocad-icon, .sai-icon').css({ opacity: 0 });
		$('.tools-icons').css({
			backgroundImage: "url('./assets/saya.JPG')", 
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			width: "95%",
			height: "95%"
		})

// <a href='https://pngtree.com/so/peach blossom festival'>peach blossom festival png from pngtree.com</a>

		$('.tools').css({
			display: "grid",
			justifyItems: "center",
			alignItems: "center"
		})
		const backButton = document.querySelector('.btn-nextPage');
		backButton.innerHTML="Back ";
		content.innerHTML = "Here's a sample of his works. If you want to see more of Justin's digital drawings, click this <a href='https://www.deviantart.com/mutekisaru' target='_blank' style='text-decoration: none'>LINK</a>. It will redirect you his <strong>Deviantart page</strong>. Leave a comment there if you like it!";

	}

	else if(pageCounter > 2){
		window.location.href = "./justin-craft.html";
	}
}