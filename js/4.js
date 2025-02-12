$(document).ready(function() {
  $(".outer").mouseover(function() {
    console.log("Outer mouse over event ...")
  })
  $(".outer").mouseenter(function() {
    console.log("Outer mouse enter event ...")
  })

  $(".inner").mouseover(function() {
    console.log("Inner mouse over event ...")
  })
  $(".inner").mouseenter(function() {
    console.log("Inner mouse enter event ...")
  })

  // input 상자가 선택되면 핑크색
  $("input[type='password']").focus(function() {
    $(this).css("background-color", "pink")
  })

  // 선택이 해제되면 노란색
  $("input[type='password").blur(function() {
    $(this).css("background-color", "yellow")
  })
})