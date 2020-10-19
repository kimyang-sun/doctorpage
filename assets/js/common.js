console.clear();

// 지정되지 않은 a 링크 return false 임시코드
$("a").click(function (e) {
  if ($(this).attr("href") == "#") {
    //return false;
    e.preventDefault();
  }
});

/* 상단 헤더 스크롤 시 변화 */
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > 0) {
    $("html").addClass("not-scroll-top-0");
  } else {
    $("html").removeClass("not-scroll-top-0");
  }
});

// 모바일 사이드바
$(".m-header-top .m-btn-side-bar").on("click", function () {
  $(".m-side-bar-wrap").addClass("active");
  $("html, body").css("overflow-y", "hidden");
});

$(".m-side-bar-wrap").on("click", function () {
  $(this).removeClass("active");
  $("html, body").css("overflow-y", "auto");
});

$(".m-side-bar").on("click", function (e) {
  e.stopPropagation();
});

// 모바일 gnd 2차 메뉴
$(".m-side-bar .m-side-bar-gnb > ul > li > .m-depth-1").on(
  "click",
  function () {
    let depth_gnb = $(this).siblings("ul");

    if (depth_gnb.hasClass("active")) {
      depth_gnb.removeClass("active");
      depth_gnb.stop().slideUp(300);
    } else {
      depth_gnb.addClass("active");
      depth_gnb.stop().slideDown(300);
    }
  }
);

// 검색창 열기 닫기 버튼
$(".btn-header-search, .m-btn-header-search").on("click", function () {
  $(".search-box").show(400);
});

$(".search-box .btn-close-search").on("click", function () {
  $(".search-box").hide(400);
});
