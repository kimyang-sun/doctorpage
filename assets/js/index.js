console.clear();

// 이 코드는 창이 열릴때 첫번째 슬라이더의 트랜지션을 적용하기 위한 코드입니다.
$(".main-slider").on("init", function (event, slick) {
  $(".main-slider")
    .find(".slick-current")
    .removeClass("slick-active")
    .addClass("reset-animation");
  setTimeout(function () {
    $(".main-slider")
      .find(".slick-current")
      .removeClass("reset-animation")
      .addClass("slick-active");
  }, 1);
});

// 메인 비주얼 슬라이더 slick 적용
$(".main-slider")
  .slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    draggable: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
    touchThreshold: 100,
    centerMode: true,
    centerPadding: "0",
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (currentSlide !== nextSlide) {
      $(".slick-center + .slick-cloned").each(function (index, node) {
        let $node = $(node);
        setTimeout(function () {
          $node.addClass("slick-current");
          $node.addClass("slick-center");
        });
      });
    }
  }); // 이 코드는 slick infinite 가 맨끝에서 다시 처음으로 돌아가거나 할때 트랜지션이 적용되기 위한 코드입니다.
