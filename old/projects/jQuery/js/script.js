$(document).ready(function () {
  $('.text-center').on('click', function () {
    $('.overlay').animate({
      opacity: 'toggle'
    }, 3000);

    $('.modal').fadeToggle('slow');
  });

  $('.close').on('click', function () {
    $('.overlay').animate({
      opacity: 'toggle'
    }, 1500);

    $('.modal').fadeToggle('slow');
  });
});