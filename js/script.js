$(document).ready(function () {
  $('.category-select').select2({
      width: "50%",
  });
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
});
