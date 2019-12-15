window.addEventListener("load", ()=>{
	const loading = document.getElementById("loadingScreen");

	setTimeout(()=>{
		loading.style.display="none";

	},1000);

	setTimeout(()=>{
		$('.bugsy-container').css({
			background: 'url("./assets/bugsy11.PNG")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition:'bottom center'
		})
	},2500)
	
})

const returnToLastPage = () => {
	window.history.back();
}