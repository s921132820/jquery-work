$(document).ready(function() {
  $("body").dblclick(function() {
    alert("Double click")
  })
  $("#btn_1").click(function() {
    $("p").hide()
  })

  // 마우스 관련 이벤트
  // mouseenter
  $("p").mouseenter(function() {
    $(this).css("background-color", "gold")
  })
  // mouseleave
  $("p").mouseleave(function() {
    $(this).css("background-color", "white")
  })
  // mousedown
  $("p").mousedown(function() {
    $(this).css("background-color", "pink")
  })
  // mouseup
  $("p").mouseup(function() {
    $(this).css("background-color", "grey")
  })

  //mouseover
})