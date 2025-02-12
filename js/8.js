$(document).ready(function() {
  $("#btn_get").on("click", function() {
    alert($("#message").text())
    alert($("#message").html())
  })

  $("#getName").on("click", function() {
    // let myName = document.querySelector("#name").value
    // alert(myName)
    let myName = $("#name").val()
    alert(myName)
  })

  $("#attr-url").on("click", function() {
    $("#getDaumUrl").val($("#daum").attr('href'))
  })

  $("#btn_set").on("click", function() {
    $("#setText span")
    .text('장원영')
    .css({
      "color": "blue",
      "font-weight": 600
    });
  })

  $("#btn_ive").on("click", function() {
    $("#ive").text(function(index, orgin) {
      let str = "안녕하세요" + orgin;
      return str;
    })
  })

  $("#btn_girl_group").on("click", function() {
    $(".girl-group").text(function(index, origin) {
      let str = "안녕하세요." + index + "번" + origin + "그룹입니다."
      return str;
    })
  })

  // $("#btn_change").on("click", function() {
  //   $("#site")
  //   .text("네이버")
  //   .attr("href", "http://naver.com")
  // })
  $("#btn_change").on("click", function() {
    let site = $("#site");

    if (site.data("state") === "naver") {
        site.text("구글").attr("href", "http://google.com").data("state", "google");
        $("#btn_change span").text("네이버")
    } else {
        site.text("네이버").attr("href", "http://naver.com").data("state", "naver");
        $("#btn_change span").text("구글")
    }
});
})