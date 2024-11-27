/*global $*/
$(document).ready(function () {
    $(".footer-links-wrapper h3").on("click", function () {
      if ($(window).width() <= 768) {
        $(this).next().slideToggle();
        $(this).toggleClass("expanded");
      }
    });
  
    $(window).resize(function () {
      if ($(window).width() > 768) {
        $(".footer-links-wrapper ul").show();
        $(".footer-links-wrapper h3").removeClass("expanded");
      } else {
        $(".footer-links-wrapper ul").hide();
      }
    });
  });

