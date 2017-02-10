
$(".hero_button").click(function() {
  console.log('hey');
    $('html, body').animate({
        scrollTop: $(".study_one").offset().top
    }, 1000, "swing");
});
