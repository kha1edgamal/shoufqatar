$(document).ready(function () {
new WOW().init();
    //Start Owl Carousel
  $('.category-select').select2({
      width: "50%",
  });
    //End Owl Carousel

    //Start Video Play On Hover
    const videos = document.querySelectorAll(".hoverVideo");
videos.forEach((video) => {
  video.addEventListener("mouseover", function () {
    this.play();
    $(this).siblings('img').fadeOut();
      $(this).siblings('h1').fadeOut();
      $(this).css({"opacity": "1"});
      $(this).siblings('.video-play').children('span').children('i').removeClass().addClass('fas fa-pause');
  });

  video.addEventListener("mouseout", function () {
    this.pause();
      $(this).css({"opacity": "0"});
      $(this).siblings('img').fadeIn();
      $(this).siblings('h1').fadeIn();
      $(this).siblings('.video-play').children('span').children('i').removeClass().addClass('fas fa-play');

  });

  video.addEventListener("touchstart", function () {
    this.play();
      $(this).css({"opacity": "1"});
      $(this).siblings('img').fadeOut();
      $(this).siblings('h1').fadeOut();
      $(this).siblings('.video-play').children('span').children('i').addClass('fas fa-pause');
  });

  video.addEventListener("touchend", function () {
    this.pause();
      $(this).css({"opacity": "0"});
      $(this).siblings('img').fadeIn();
      $(this).siblings('h1').fadeIn();
      $(this).siblings('.video-play').children('span').children('i').addClass('fas fa-play');
  });
});
    //End video play on hover

    //Start Mobile Navigation Slide Down
    $(".mobile-nav .slide-btn").click(function(){
        $(".slide-panel").slideToggle("slow");
    });
    var $toggleButton = $('.toggle-button');

  // Hamburger button
  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
  });
});
