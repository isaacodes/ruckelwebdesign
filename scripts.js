$(document).scroll(function () {
    var s = $(document).scrollTop() / 4;
    var viewport = $('header').height() - 65;
    $("header").css('background-position-y', -s + 'px');
    if (s * 4 >= viewport) {
        $("aside").addClass("stick");
    } else {
        $('aside').removeClass('stick');
    }
    if (s * 4 >= viewport / 2) {
        $("nav").addClass('shadow');
    } else {
        $('nav').removeClass('shadow');
    }
});