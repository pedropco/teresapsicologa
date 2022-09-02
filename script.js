
//SLIDE INDEX OF INITIAL BANNER
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
      

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    dots[slideIndex-1].classList.add('active');
}

document.querySelector('#bolinha1').addEventListener('click', () => currentSlide(1));
document.querySelector('#bolinha2').addEventListener('click', () => currentSlide(2));
document.querySelector('#bolinha3').addEventListener('click', () => currentSlide(3));
document.querySelector('.slidebutton.prev').addEventListener('click', () => slidePlus(-1));
document.querySelector('.slidebutton.next').addEventListener('click', () => slidePlus(1));




//HEADER SCROLL
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



//RESPONSIVE MENU OPENER AND CLOSER
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




//responsive slideshow using addListener method of JS for 650 and 850 width
const mediaQueryList = window.matchMedia('(max-width: 850px)');
const bolaUm = document.querySelector('.bolas.um')
const bolaDois =  document.querySelector('.bolas.dois')
const bolaTres = document.querySelector('.bolas.tres')
const slider3 = document.querySelectorAll('.slideEspecialty')

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


//slideShow with ScrollLeft

const sliderContainer = document.querySelector('.containerEspecialty')
const slider2 = document.querySelector('.slideEspecialty')
const contemWidth = 300;//330px que inclui width e margins, se fosse clientWidth, daria diferença
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