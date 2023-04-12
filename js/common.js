$(document).ready(function () {
  $(".family_text").on("click", function () {
    $(this).siblings(".family_list").stop().slideToggle(300);
  });

  $(".family_text").click(function () {
    $(".family_text").toggleClass("active");
  });
});
