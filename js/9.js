$(document).ready(function() {
  $("#btn_append").on("click",function() {
    // $("p").append(" Hi~~");
    $("p")
    .prepend("Hi~~ ")
    .append(" Bye~~")
  })
  
  $("#btn_item-prepend").on("click", function() {
    $("ol").prepend("<li>0번째 아이템</li>")
  })
  $("#btn_item-append").on("click", function() {
    $("ol").append("<li>4번째 아이템</li>")
  })

  $("#img_add").on("click", function() {
    let left = $("<img></img>")
    .attr("src", "./img/left.jpg")
    .css("width", "50px")
    let right = $("<img></img>")
    .attr("src", "./img/right.jpg")
    .css("width", "50px")
    $("img").before(left).after(right)
  })

  $("#remove").on("click", function() {
    $(".del").remove()
  })

  $("#empty").on("click", function() {
    $(".del").empty()
  })
})