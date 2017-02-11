
$(".hero_button").click(function() {
    $('html, body').animate({
        scrollTop: $(".study_one").offset().top
    }, 1000, "swing");
});
