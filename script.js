//colocar index dos slides no primeiro
//mostrar slide no index escolhido
//função de passar 1 slide
//função de mostrar o slide
//seleciona a classe do slide
//se passou mais do que a extensao, slide atual tem que ser 1
//se voltou menos que um, é a extensão do slide (que é o último)
//for para display none
//display block

var slideIndex = 1;
showSlides(slideIndex)

function slidePlus(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(){
    var slides = document.querySelectorAll('.slidearea');
    var dots = document.querySelectorAll('.bolinhas');    
    if (slideIndex > 3){ 
        slideIndex = 1
    }
    if (slideIndex < 1){
        slideIndex = 3
    }
    
    for (i = 0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = "flex"; 
    //gostaria de entender este código. Ele percorre os slides e display none nos que não aparecem e display flex no que aparece
    //mas no código está como se o escolhido é display none e slideIndex-1 no display flex. Pela lógica display flex seria no anterior  

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    dots[slideIndex-1].classList.add('active');
    //mesma coisa aqui que no slide anterior, remove active no escolhido e adiciona active no - 1
}

document.querySelector('#bolinha1').addEventListener('click', () => currentSlide(1));
document.querySelector('#bolinha2').addEventListener('click', () => currentSlide(2));
document.querySelector('#bolinha3').addEventListener('click', () => currentSlide(3));
document.querySelector('.slidebutton.prev').addEventListener('click', () => slidePlus(-1));
document.querySelector('.slidebutton.next').addEventListener('click', () => slidePlus(1));

//2 slideshow



const slider3 = document.querySelectorAll('.slideEspecialty')

//slider prev
const buttonsWrapperNext = document.querySelector(".slidebutton2.next2");
buttonsWrapperNext.addEventListener('click', slideNext)
function slideNext (){
    for(let i in slider3){ 
        slider3[i].style.transform = "translatex(-365%)";
    }
}

//slider next
const buttonsWrapperPrev = document.querySelector(".slidebutton2.prev2");
buttonsWrapperPrev.addEventListener('click', slidePrev)

function slidePrev (){
    for(let i in slider3){ 
        slider3[i].style.transform = "translatex(0%)";
    }
}


//tentando fazer loop do next e prev, mas nao está funcionando
/*function sliding(){
    for (i=0;i=10;i++){

    slideNext(); 
}
for (i=0;i=10;i++){

    slidePrev();
}
slidePrev();    
}

sliding();*/

document.querySelector('.button-top').addEventListener('click', () => {
    window.scrollTo(0,0);
})
document.querySelector('nav ul li:nth-child(2)').addEventListener('click', () => {
    window.scrollTo(0,650);
})
document.querySelector('nav ul li:nth-child(3)').addEventListener('click', () => {
    window.scrollTo(0,1450);
})
document.querySelector('nav ul li:nth-child(4)').addEventListener('click', () => {
    window.scrollTo(0,2250);
})
document.querySelector('nav ul li:nth-child(5)').addEventListener('click', () => {
    window.scrollTo(0,2750);
})

//menu opener
var nav = document.querySelector('nav');
document.querySelector('.menu-opener').addEventListener('click', closemenu)


function closemenu(){
    if (nav.style.display = 'none'){
        nav.style.display = 'block'
    } 
}



//testes slideshow debaixo

responsiviness
const mediaQuery = window.matchMedia('(max-width: 850px)')


function transform_0(){
    for(let i in slider3){ 
        slider3[i].style.transform = "translatex(0%)";
    }}


function transform_180(){
    for(let i in slider3){ 
        slider3[i].style.transform = "translatex(-180%)";
    }
}
    

function transform_365(){
    for(let i in slider3){ 
        slider3[i].style.transform = "translatex(-365%)";
    }
}

document.querySelector('.bolas.active').addEventListener('click', function () {
    for(let i in slider3){ 
    slider3[i].style.transform = "translatex(0%)";}
});
document.querySelector('.bolas.dois').addEventListener('click', transform_180);
document.querySelector('.bolas.tres').addEventListener('click', transform_365);

