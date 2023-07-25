$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    }) 
    // error 
    $(window).on('load-scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 30){
            $('.header').css({'background':'#000'});
        }
        else{
            $('.header').css({'background':'none'});
        }
    });

    $('.accordion-header').click(function(){
        $('.accordion .accordion-body').slideUp();
        $(this).next('.accordion-body').slideDown();
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    })
});

let menu = document.querySelector('.fa-bars');
let navabr = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    menu.classList.remove('fa-times');
    navabr.classList.remove('nav-toggle');
})