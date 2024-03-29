const content = document.querySelector('.content');

window.addEventListener("load", ()=>{
	const loading = document.getElementById("loadingScreen");
	setTimeout(()=>{
		loading.style.display="none";

	},3500);
	
})

let pageCounter = 1;

const changeToJapanese = () => {
	pageCounter++;

	$('#modal').modal().hide();

	$('.bugsy-container').css({
		background: "url('./assets/bugsy13.png')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		backgroundPosition: 'bottom center',
		animation: 'none'
	})

	$('.screen').css({
		background: "url('./assets/sakura2.png')",
		backgroundPosition: '40% 0%',
		backgroundSize: "cover",
		backgroundRepeat: 'no-repeat'
	})

	$('.modal-body button').css({
		background: "url('./assets/sakura2.png')",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		border: '1px solid white',
		textShadow: "none",
		color: 'rebeccapurple'
	})

	content.innerHTML = "Yes, he knows Japanese. He passed the <strong>Japanese Language Proficiency Test (JLPT) 3 times in a row!</strong> He learned it through self-study. What else would you like to know about him?"

	setTimeout(()=>{
		$('.bugsy-container').css({
			background: "url('./assets/bugsy12.png')",
			backgroundRepeat: "no-repeat",
			backgroundSize: "contain",
			backgroundPosition: 'bottom center',
			animation: 'none'
		})
	},1500)

	setInterval(()=>{
		$('.bugsy-container').css({
			background: "url('./assets/bugsy14.png')",
			backgroundRepeat: "no-repeat",
			backgroundSize: "contain",
			backgroundPosition: 'bottom center',
			animation: 'none'
		})

		setTimeout(()=>{
    		$('.bugsy-container').css({
    			background: "url('./assets/bugsy12.png')",
    			backgroundRepeat: "no-repeat",
    			backgroundSize: "contain",
    			backgroundPosition: 'bottom center',
    			animation: 'none'
    		})
		},75)
	},5000)



	if( pageCounter == 2){
		$('.modal-body .changeText').html('I want to time travel')
	}

	if(pageCounter > 2){
		content.innerHTML="Don't blame me for what is going to happen next. I won't remember everything after you time travel. Thanks for your time and talking with me! <strong>Time travelling starts in 3.. 2... 1...</strong>";
		$('.btn-nextPage').css({
			visibility: "hidden"
		})
		setTimeout(()=>{
			window.location.href = './justin-craft.html';
		},6000)
	}
}

let sampleCounter = 1;
let sampleWebsite = document.querySelector('#sampleWebsite');

const changeSample = () => {
	sampleCounter++;

	if(sampleCounter == 2){
		$("#sampleWebsite button").html("Any mobile app he owns?")
	}

	else if(sampleCounter == 3){
		$("#sampleWebsite button").html("Blockchain/web3 related works?")
		sampleWebsite.href = "https://play.google.com/store/apps/details?id=com.trojan.flipflash";
	}

	else if (sampleCounter == 4){
		$("#sampleWebsite button").html("How about 3D games?");
		sampleWebsite.href = "https://elven-hunt.netlify.app";
	}

	else if (sampleCounter == 5){
		$("#sampleWebsite button").html("Hmm.. 2D games?");
		sampleWebsite.href = "https://jtrajano33.itch.io/dessert-chaos-v02";
	}

	else if (sampleCounter == 6){
		$("#sampleWebsite button").html("Sample of his websites?");
		sampleWebsite.href = "https://jtrajano33.github.io/fortuneTeller/";
	}

	else{
		sampleCounter = 2;
		sampleWebsite.href = "https://pokemmerce.herokuapp.com/";
		$("#sampleWebsite button").html("Any mobile app he owns?");
	}
}