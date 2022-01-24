$(document).ready(function(){

    $(window).scroll(function(){

        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }

        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // script de slide para cima //

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0}); 
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });    

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // script para mostar/esconder menu //
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script //

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programador", "Designer", "Gestor de BD", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Programador", "Designer", "Gestor de BD", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel script //

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },

            600:{
                items: 2,
                nav: false
            },

            1000:{
                items: 3,
                nav: false
            }
        }
    });

});
