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