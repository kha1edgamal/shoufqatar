$(document).ready(function () {
new WOW().init();


    //Start Owl
    $('.hero-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots: false,
    stagePadding: 50,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
    //End Owl


    //Start Select Init
  $('.category-select').select2({
      placeholder:"Select certain type of activities",
      width: "50%",
  });
      $('.location-select').select2({
      placeholder:"Enter address, landmark in Qatar",
      width: "50%",
  });
    //End Select Init

    //Start Video Play On Click
    const clickedVideo = document.querySelectorAll(".clickedVideo");
    clickedVideo.forEach((cVideo) => {
    cVideo.addEventListener("click", function () {


    $(this).siblings('img').css({"display": "none"});
      $(this).siblings('h1').css({"display": "none"});
      $(this).css({"opacity": "1"});
        $(this).siblings('.video-play').css({"display": "none"});
      $(this).siblings('.video-play').children('span').children('i').removeClass().addClass('fas fa-pause');
  });

});
    $('.clickedVideo').click(function(){
        $(this).play();
        this.paused ? this.play() : this.pause();
    })





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
