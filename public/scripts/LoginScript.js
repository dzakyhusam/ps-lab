//JQuery for Sign Up Form Box Shadow

$(function() {
    $('.name input').focus(function() {
      $('.name').css('box-shadow','0 0 1pt 1pt black');
    }).blur(function() {
      $('.name').css('box-shadow','none');
    });
});

$(function() {
  $('.job select').focus(function() {
    $('.job').css('box-shadow','0 0 1pt 1pt black');
  }).blur(function() {
    $('.job').css('box-shadow','none');
  });
});

$(function() {
  $('.email input').focus(function() {
    $('.email').css('box-shadow','0 0 1pt 1pt black');
  }).blur(function() {
    $('.email').css('box-shadow','none');
  });
});

$(function() {
  $('.password input').focus(function() {
    $('.password').css('box-shadow','0 0 1pt 1pt black');
  }).blur(function() {
    $('.password').css('box-shadow','none');
  });
});

$(function() {
  $('.re-password input').focus(function() {
    $('.re-password').css('box-shadow','0 0 1pt 1pt black');
  }).blur(function() {
    $('.re-password').css('box-shadow','none');
  });
});