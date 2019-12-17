window.addEventListener("load", ()=>{
	const loading = document.getElementById("loadingScreen");

	setTimeout(()=>{
		loading.style.display="none";

	},2000);

	setTimeout(()=>{
		$('.bugsy-container').css({
			background: 'url("./assets/bugsy11.png")',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition:'bottom center'
		})
	},3500)
	
})

const returnToLastPage = () => {
	window.history.back();
}