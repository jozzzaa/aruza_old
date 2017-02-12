

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

$("#smm_button").on('click', function() {
    $('html, body').animate({
        scrollTop: $(".study_one").offset().top
    }, 1000, "swing");
    console.log('hey');
});

$("#growth_button").click(function() {
    $('html, body').animate({
        scrollTop: $(".study_two").offset().top
    }, 1000, "swing");
});

$("#marketing_button").click(function() {
    $('html, body').animate({
        scrollTop: $(".study_three").offset().top
    }, 1000, "swing");
});

// $("#web_button").click(function() {
//     $('html, body').animate({
//         scrollTop: $(".study_one").offset().top
//     }, 1000, "swing");
// });
