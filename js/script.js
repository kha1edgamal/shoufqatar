$(document).ready(function () {
  $('.category-select').select2({
      width: "50%"
  });
    const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("mouseover", function () {
    this.play();
    $(this).siblings('img').fadeOut();
      $(this).siblings('.video-play').children('span').children('i').removeClass().addClass('fas fa-pause');
  });

  video.addEventListener("mouseout", function () {
    this.pause();
      $(this).siblings('img').fadeIn();
      $(this).siblings('.video-play').children('span').children('i').removeClass().addClass('fas fa-play');

  });

  video.addEventListener("touchstart", function () {
    this.play();
      $(this).siblings('img').fadeOut();
      $(this).siblings('.video-play').children('span').children('i').addClass('fas fa-pause');
  });

  video.addEventListener("touchend", function () {
    this.pause();
      $(this).siblings('img').fadeIn();
      $(this).siblings('.video-play').children('span').children('i').addClass('fas fa-play');
  });
});
});
