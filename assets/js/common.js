$(document).ready(function () {
  function typed() {
    new Typed(".typed1", {
      strings: ["Support"],
      typeSpeed: 70,
      fadeOut: true,
      loop: false,
      cursorChar: "",
    });

    new Typed(".typed2", {
      strings: ["Q&A"],
      typeSpeed: 70,
      fadeOut: true,
      loop: false,
      cursorChar: "",
    });

    new Typed(".en.step1", {
      strings: ["About US"],
      typeSpeed: 70,
      fadeOut: true,
      loop: false,
      cursorChar: "",
    });

    new Typed(".en.step2", {
      strings: ["Data<br />Service"],
      typeSpeed: 70,
      fadeOut: true,
      loop: false,
      cursorChar: "",
    });

    new Typed(".en.step3", {
      strings: ["IOT<br />Product"],
      typeSpeed: 70,
      fadeOut: true,
      loop: false,
      cursorChar: "",
    });

    new Typed(".ko.step1", {
      strings: ["회사소개<br />포트폴리오"],
      typeSpeed: 70,
      fadeOut: true,
      loop: false,
      cursorChar: "",
    });

    new Typed(".ko.step2", {
      strings: ["서비스 소개"],
      typeSpeed: 70,
      fadeOut: true,
      loop: false,
      cursorChar: "",
    });

    new Typed(".ko.step3", {
      strings: ["제품소개"],
      typeSpeed: 70,
      fadeOut: true,
      loop: false,
      cursorChar: "",
    });
  }
  typed();

  $(".section1 .img .box").click(function () {
    let nth = $(this).attr("data-set");
    $(".section1 .img div").eq(nth).toggleClass("on");
  });

  $("#botton_arrow").click(function () {
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $(".section2").offset().top },
        { duration: 600, easing: "easeInOutCubic" }
      );
  });

  $(".section2 .slide_lists").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
  });

  function scrollAnimation() {
    $(".ani").each(function () {
      var bottom_of_element = $(this).offset().top + 100;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("active");
      }
    });
  }

  scrollAnimation();
  $(window).scroll(function () {
    scrollAnimation();
  });
});
