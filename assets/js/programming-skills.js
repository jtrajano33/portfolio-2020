
const mongo = document.querySelector('.image-container-1');
const express = document.querySelector('.image-container-2');
const react = document.querySelector('.image-container-3');
const node = document.querySelector('.image-container-4');
const screenPage = document.querySelector('.screen');
const bootcampIcons = document.querySelector('.bugsy-container-bootcamp');

window.addEventListener("load", ()=>{
	const loading = document.getElementById("loadingScreen");
	setTimeout(()=>{
		loading.style.display="none";
		bootcampIcons.style.opacity = 0;

		screenPage.classList.add('scene-1');
		mongo.classList.add('appear1');
		express.classList.add('appear2');
		react.classList.add('appear3');
		node.classList.add('appear4');
	},1000);
	
})


const content = document.querySelector('.content');
const bugsy = document.querySelector('.bugsy-container');
const mern = document.querySelector('.mern');

let pageCounter = 1;

    
if(pageCounter == 1){
    content.innerHTML = "Justin loves to code using <strong>JavaScript</strong>! He use it in both front-end and back-end development. He mostly use <strong>MERN Stack</strong> (<strong>M</strong>ongoDB, <strong>E</strong>xpress, <strong>R</strong>eact and <strong>N</strong>ode) in developing apps.";
}

const changePage = () => {
	pageCounter++;

	if(pageCounter == 2){

		$('.bugsy-container').css({
                    background: 'url("./assets/bugsy9.PNG") no-repeat', 
                    animation: "none",
                    backgroundSize: "contain",
                    backgroundPosition: "bottom center",
                 });

		content.innerHTML = "He discovered his passion in programming when he decided to make a website for their family's business. He enjoyed making the website and decided to make programming a career.";
	}

	if(pageCounter == 3){
        mern.style.display = "none";
        screenPage.classList.remove('scene-1');
        screenPage.classList.add('scene-2');
		bootcampIcons.style.opacity=1;
		$('.bugsy-container').css({background: 'none', animation: "none"})

		content.innerHTML = "He enrolled in a coding bootcamp and studied for 3 months full-stack web development. There they taught him <strong>HTML, CSS , Javascript, Bootstrap, jQuery, PHP, mySQL and Laravel</strong>."
	}

	if(pageCounter == 4){
		$('.html-icon-image').css({backgroundImage: 'url("./assets/icons/firebase.PNG")'})
		$('.css-icon-image').css({backgroundImage: 'url("./assets/icons/lambda.PNG")'})
		$('.javascript-icon-image').css({backgroundImage: 'url("./assets/icons/sass.PNG")'})
		$('.bootstrap-icon-image').css({backgroundImage: 'url("./assets/icons/bulma.PNG")', backgroundSize: "65px"})
		$('.jquery-icon-image').css({backgroundImage: 'url("./assets/icons/heroku.PNG")'})
		$('.laravel-icon-image').css({backgroundImage: 'url("./assets/icons/github.PNG")', backgroundSize: '97px'})
		$('.mysql-icon-image').css({backgroundImage: 'url("./assets/icons/graphql.PNG")'})
		$('.php-icon-image').css({backgroundImage: 'url("./assets/icons/unity.PNG")', backgroundSize: "65px"})

		content.innerHTML = "Along the way, he learned other programming language and web technologies like <strong>Firebase, AWS Lambda, SASS, Bulma, Heroku and many more</strong>. He use <strong>Github</strong> for version control."
	}

	if(pageCounter > 4){
		window.location.href="./last-page.html";
	}
}