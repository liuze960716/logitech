$(".classify").hover(function () {
    var secnav = $(this).find(".classify_nav");
    secnav.show();
    secnav.animate({
        opacity:"1"
    },"fast");
},
function () {
    var secnav = $(this).find(".classify_nav");
    secnav.animate({
        opacity: "0"
    }, 'fast');
    secnav.hide();
});