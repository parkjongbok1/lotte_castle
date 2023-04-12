$(document).ready(function () {
  $(".pr_slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: $(".pr_p"), //이전 화살표
    nextArrow: $(".pr_n"), //다음 화살표
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 800,
    // asNavFor: ".dormitory_title01", //다른 슬라이드 연동 여부
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    fade: true,
  });

  function slickActive() {
    if ($(".pr_item01").hasClass("slick-active")) {
      $(".desc.pr_01").addClass("active");
    } else if ($(".pr_item02").hasClass("slick-active")) {
      $(".desc.pr_02").addClass("active");
    } else if ($(".pr_item03").hasClass("slick-active")) {
      $(".desc.pr_03").addClass("active");
    } else if ($(".pr_item04").hasClass("slick-active")) {
      $(".desc.pr_04").addClass("active");
    } else if ($(".pr_item05").hasClass("slick-active")) {
      $(".desc.pr_05").addClass("active");
    }
  }

  $(".pr_slider").on({
    init: function (event, slick) {},
    beforeChange: function (event, slick, currentSlide, nextSlide) {
      $(".desc").removeClass("active");
    },
    afterChange: function (event, slick, currentSlide, nextSlide) {
      slickActive();
    },
  });
});
