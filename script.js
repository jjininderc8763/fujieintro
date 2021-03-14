$(function () {
  $(".scroll").click(function () {
    var target = $(this.hash);
    $("html,body").animate(
      {
        scrollTop: target.offset().top
      },
      500
    );
    return false;
  });
});