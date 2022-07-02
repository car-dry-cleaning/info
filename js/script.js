function menuOpen(){
    let hamburger=document.querySelector('#hamburger');
    let navLinks=document.querySelector('.nav__links');
    let body=document.querySelector('#body');
    hamburger.onclick=function(){
        hamburger.classList.toggle('hamburger_active');
        navLinks.classList.toggle('nav__links_active');
        body.classList.toggle('scroll_none');
    }
    let navLinksA=document.querySelectorAll('.nav__links a');
    for (let number = 0; number < 3; number++){
        navLinksA[number].onclick=function(){
            hamburger.classList.remove('hamburger_active');
            navLinks.classList.remove('nav__links_active');
            body.classList.remove('scroll_none');
        }
    }
}
menuOpen();

new Swiper('.header__foto__swiper',{
    effect: 'fade',
    autoplay:{
        delay:2000,
        stopOnlastSlide: false,
        disableOnInteraction: false,
    },
    loop:true,
     speed: 1500,
});

function formSubmit(){
    let iframe = document.querySelector('iframe');
    let wrapper = document.querySelector('.wrapper');
    iframe.onload = function(){
        wrapper.classList.add('wrapper_active');
        setTimeout(() => {    //функция запускается с нужной нам задержкой
            document.forms.order.reset();
            wrapper.classList.remove('wrapper_active');
        }, 2500);
    }
}
formSubmit();

function navShow(){
    console.log('ok')
    let animationElements=document.querySelectorAll('.animation-element');
    let windowHight=window.screen.height;
    let screen=window.pageYOffset; //создаём переменную, которая показывает на какой высоте сайта мы находимся
    let nav=document.querySelector('#nav');
    let startPosition = window.scrollY;

    let navContact=document.querySelector('.nav__contact');
    window.onscroll=function(){ 
        for (let number=0;number<animationElements.length;number++){
            let element=animationElements[number]
            let elementHight=element.offsetTop;
            console.log(elementHight)
            let scrollHight=window.pageYOffset;
            if (scrollHight+windowHight*0.8>elementHight){
                element.classList.add('animation_active');
            }
        }       
        let scrollPosition=window.scrollY; //перезаписывается в момент прокрутки
        if  (scrollPosition == 0){ //если прокрутка вниз, то нав прячется
            nav.style.top='0px';
            navContact.style.top='52px';
        }else if(scrollPosition > startPosition && scrollPosition > 0){ // иначе, если прокрутка вверх, то нав показывается
            nav.style.top='-200px';
            navContact.style.top='-300px';
        }else{
            nav.style.top='0px';
            navContact.style.top='52px';
        }
        startPosition = scrollPosition;
        screen=scrollHight; //перезапивывается в конце прокрутки
    }  
}
navShow();