//dropdown

$(function () {
    $('.navbar li').hover(
        function () {
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function () {
            $('>ul.sub', this).slideUp(300);
        }
    );
});     

//section home

window.addEventListener("load",function(){
    let video = window.document.querySelector("#video");
    video.play();
    video.loop = true;
});

//carousel

var swiper = new Swiper(".mySwiper",{
    spaceBetween:30,
    centeredSlides: true,
    autoplay:{delay:2500,disableOnInteraction:false,},
    pagination:{el:".swiper-pagination",clickable:true},
    navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},
});

