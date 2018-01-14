$(document).ready(function() {
  
  /* Variables */
  var $window   = $(window);
  var $nav      = $('nav');
  var brandPos  = $('.js--section-personal-brand').position();
  var quotePos  = $('.js--performance-last-child').position(); 
  
  navToggle();

  /* "Learn More" button scroll */
  $('.js--scroll-down').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-personal-brand').offset().top}, 1000);
  });
  
  /* Sticky Navigation Menu */  
  $window.scroll(function() {
    var windowPos   = $window.scrollTop();
    
    if (!$nav.hasClass('mobile-nav')) {
      if (windowPos >= brandPos.top - 50) {
          $nav.addClass('sticky'); 
      } else {
        $nav.removeClass('sticky');
      }
    }
  });
  
  $window.resize(function() {
    navToggle();
  });
  
  $('.js--nav-icon').click(function () {
    if ($('.js--nav-icon i').hasClass('ion-navicon-round')) {
      $('.mobile-nav li').css('display', 'block');
      $('.js--nav-icon i').removeClass('ion-navicon-round');
      $('.js--nav-icon i').addClass('ion-close-round');
    } else {
      $('.mobile-nav li').css('display', 'none');
      $('.js--nav-icon i').removeClass('ion-close-round');
      $('.js--nav-icon i').addClass('ion-navicon-round');
    }
  });
  
  function navToggle() {
    if($window.width() >= 1200) {
      $nav.addClass('main-nav');
      $('.mobile-nav li').css('display', 'inline-block')
      $nav.removeClass('mobile-nav');
    } else {
      $nav.addClass('mobile-nav');
      $nav.removeClass('main-nav');
      $('.mobile-nav li').css('display', 'none');
    }
  }
  
});