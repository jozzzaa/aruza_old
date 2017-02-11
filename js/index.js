

$('.double_modal').hide();

$(".hero_button").click(function() {
    $('html, body').animate({
        scrollTop: $(".study_one").offset().top
    }, 1000, "swing");
});

$('.exit_modal').click(function() {
  $('.double_modal').fadeOut()
})

$('.cta_button').click(function() {
  $('.double_modal').fadeIn()
})
