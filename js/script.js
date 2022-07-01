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