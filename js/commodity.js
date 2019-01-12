// 放大镜
$(".classify").hover(
    function () {
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




// 返回顶部
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#btn").fadeIn(1500);
        } else {
            $("#btn").fadeOut(1500);
        }
    });
    $("#btn").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    })
})




