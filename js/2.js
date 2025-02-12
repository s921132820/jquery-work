$(document).ready(function() {
  $("#intro").click(function() {
    $("body").css("background-color", "red")
    $(this).css("background-color", "yellow")
    $("p.intro").css("background-color", "green")
  })
  
  $(".btn_1").click(function() {
    $("li:last").css("color", "green")
  })

  $("#btn_2").click(function() {
    $("[href]").css("background-color", "gold")
  })

  $("#btn_3").click(function() {
    $("[href!='www.daum.net']").css("color", "black")
  })

  $("#btn_4").click(function() {
    // tr:even ->짝수 tr:odd -> 홀수
    $("tr:odd").css("background-color", "gold")
  })
})