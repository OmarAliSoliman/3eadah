$(document).ready(function () {
  if ($(".slider-top").length) {
    $(".slider-top").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      // rtl: currentDir == "rtl" ? true : false,
      asNavFor: ".slider-bottom",
    });
    $(".slider-bottom").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: ".slider-top",
      // rtl: currentDir == "rtl" ? true : false,
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".companies-slider").length) {
    $(".companies-slider").slick({
      dots: true,
      infinite: false,
      touchMove: true,
      swipe: true,
      swipeToSlide: true,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      autoplaySpeed: 2000,
      arrows: false,
      infinite: true,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".funcy-box-media").length) {
    $(".funcy-box-media").fancybox({
      transitionIn: "none",
      transitionOut: "none",
      titlePosition: "over",
      titleFormat: function (title, currentArray, currentIndex, currentOpts) {
        return (
          '<span id="fancybox-title-over">Image ' +
          (currentIndex + 1) +
          " / " +
          currentArray.length +
          (title.length ? " &nbsp; " + title : "") +
          "</span>"
        );
      },
    });
  }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-200px";
}
