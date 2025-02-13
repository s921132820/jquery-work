$(document).ready(function() {
  let data = [
    { name : '장원영', age : 21 },
    { name : '안유진', age : 22 },
    { name : '리즈', age : 21 },
    { name : '레이', age : 22 },
    { name : '이서', age : 18 },
    { name : '가을', age : 23 },
  ]

  $("#forLoop").on("click", function() {
    let result = ''
    // for 구문
    for(let i=0; i < data.length; i ++) {
      result = result + `
      <tr>
        <td>${i + 1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
      </tr>
      `
    }
    $("#forOut").html(result)
  })

  $("#forEach").on("click", function() {
    let result = ''
    data.forEach((user, index) => {
      result = result + `
            <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
      </tr>
      `
    })
    $("#forEachTable").html(result)
  })

  $("#jQueryEach").on("click", function() {
    let result = ''
    $.each(data, (index, x) => {
      result = result + `
      <tr>
        <td>${index + 1}</td>
        <td>${x.name}</td>
        <td>${x.age}</td>
      </tr>
      `
    })
    $("#jqueryEachTable").html(result)
  })
})