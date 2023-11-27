$(document).ready(() =>{
    $('.slideshow').slick({
        dots:true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Change every 2 seconds
    });
    $(".slideshow .slick-prev").html('<i class="fa-solid fa-chevron-left" style="color: #ffffff; " ></i>')
    $(".slideshow .slick-next").html('<i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>')
    $(".slideshow .slick-dots li").html('')
   
   
});
window.addEventListener('scroll', function() {
    var navMenu = document.querySelector('.nav-menu');
    if (window.pageYOffset > 88) {
        navMenu.classList.add('show');
    } else {
        navMenu.classList.remove('show');
    }
});
