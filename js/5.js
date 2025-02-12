$(document).ready(function() {
  // 이미지 클릭하면 사라지게 hide
  // 다시보기 누르면 이미지 나오게 show
  $("#rose").on("click", function() {
    $(this).hide('slow')
  })
  $("#btn_show").on("click", function() {
    $("#rose").show('fast')
  })
  $("#rose").on("mouseenter", function() {
    $(this).hide(3000)
  })
  $("#btn_fadeIn").on("click", function() {
    $(".a").fadeIn('slow');
    $(".b").fadeIn('slow');
    $(".c").fadeIn('slow', function() {
      alert("다 나옴")
    });
  })
  $("#btn_fadeOut").on("click", function() {
    $(".a").fadeOut('slow');
    $(".b").fadeOut('slow');
    $(".c").fadeOut('slow');
  })

    $("#btn_fadeToggle").on("click", function() {
      $(".a").fadeToggle();
    })
    $("#btn_fadeTo").on("click", function() {
      $(".a").fadeTo(3000, 0.5);
    })
})