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
$(document).ready(function() {
	var width = $("body").width();
	if (width < 801) {
		$("nav a.logo img").attr('src', 'images/logo.png').css('width', '65px');
		$("nav .links a").each(function( ) {
			if ($(this).html() == "Student Highlights") {
				$(this).html('Highlights');
			} else if ($(this).html() == "Student Projects") {
				$(this).html('Projects');
			}
		});
	}
});