$(".openbtn1").click(function () {
    $(this).toggleClass('active');
});

$(function () {
    $("mobilenav").hide();
    $(".openbtn1").click(function () {
        $("mobilenav").toggle(300);
    });
});

$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if (scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});


$(window).on('load', function () {
    $('body').fadeIn(1000);
});
