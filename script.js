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
/*const buttonsWrapperNext = document.querySelector(".slidebutton2.next2");
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

//orange buttons below slider



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
document.querySelector('nav ul li:nth-child(2)').addEventListener('click', scrollPerfil)
document.querySelector('nav ul li:nth-child(3)').addEventListener('click', scrollEspecialidades)
document.querySelector('nav ul li:nth-child(4)').addEventListener('click', scrollTratamentos)
document.querySelector('nav ul li:nth-child(5)').addEventListener('click', scrollContato)

function scrollPerfil(){
    const perfil = document.querySelector('.perfil')
    perfil.scrollIntoView({ behavior: 'smooth', block: 'center' });

}
function scrollEspecialidades (){
    const especialidades = document.querySelector('.containerEspecialty')
    especialidades.scrollIntoView({behavior: 'smooth', block: 'center'});
}

function scrollTratamentos(){
    const tratamentos = document.querySelector('.tratamentos')
    tratamentos.scrollIntoView({behavior: 'smooth', block: "start", inline: "nearest"})
}
function scrollContato(){
    const contatos = document.querySelector('.section-contact')
    contatos.scrollIntoView({behavior: 'smooth', block: 'center'})
}

//menu opener and closer
//variables
var nav = document.querySelector('nav');
const menuX = document.querySelector('.menu-closer')

//events
document.querySelector('.menu-opener').addEventListener('click', openmenu)
menuX.addEventListener('click', closemenu)

//functions
function openmenu(){
    menuX.classList.add('menu-show'); 
    
    nav.style.width = '50vw';
}

function closemenu(){
    nav.style.width = '0px';
    menuX.classList.remove('menu-show');
}




//responsive slideshow using addListener method of JS for 850 max-width
const mediaQueryList = window.matchMedia('(max-width: 850px)');
const bolaUm = document.querySelector('.bolas.um')
const bolaDois =  document.querySelector('.bolas.dois')
const bolaTres = document.querySelector('.bolas.tres')

function screenTest(e) {
  if (e.matches) {
    document.querySelector('.bolas.um').addEventListener('click', transform_1);
    bolaDois.addEventListener('click', transform_2);
    bolaTres.addEventListener('click', transform_3);
  } 
}

mediaQueryList.addListener(screenTest);

function transform_1 (){
    bolaUm.classList.add('active')
    bolaDois.classList.remove('active');
    bolaTres.classList.remove('active')
    for(let i in slider3){ 
        slider3[i].style.transform = "translatex(0%)";
    }

}

function transform_2(){
    bolaDois.classList.add('active');
    bolaUm.classList.remove('active')
    for(let i in slider3){ 
        slider3[i].style.transform = "translateX(-600px)";
    }
}
    

function transform_3(){
    bolaDois.classList.remove('active');
    bolaUm.classList.remove('active')
    bolaTres.classList.add('active')
    for(let i in slider3){ 
        slider3[i].style.transform = "translateX(-1200px)";
    }
}


//responsive slideshow using addListener method of JS for 650 max-width
const mediaQueryList2 = window.matchMedia('(max-width: 650px)');

function screenTest2(event){ 
    if (event.matches){

    }

}

mediaQueryList2.addListener(screenTest2)

const sliderContainer = document.querySelector('.containerEspecialty')
const slider2 = document.querySelector('.slideEspecialty')
const contemWidth = 300;//330px que inclui width e margins
const buttonsWrapperNext = document.querySelector(".slidebutton2.next2");
const buttonsWrapperPrev = document.querySelector(".slidebutton2.prev2");

buttonsWrapperNext.addEventListener('click', slideNext)
buttonsWrapperPrev.addEventListener('click', slidePrev)

function slideNext(){
    //poderia ser também slider.Container.scrollleft +- slider2.clientWidth, mas daria uma leve diferença
    sliderContainer.scrollLeft += contemWidth;
}

function slidePrev(){
    //poderia ser também slider.Container.scrollleft +- slider2.clientWidth, mas daria uma leve diferença
    sliderContainer.scrollLeft -= contemWidth;
}