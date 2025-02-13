$(document).ready(function() {
  $.ajax({
    url : 'https://jsonplaceholder.typicode.com/posts?_limit=10',
    type : 'GET',
    dataType : 'json',
    success : function(response) {
      let tableBody = $("#data-table");
      tableBody.empty();

      $.each(response, function(index, item) {
        let shortTitle = item.title
        .length > 15 ? item.title.substring(0, 15) + "..." : item.title;

        let shortBody = item.body
        .length > 20 ? item.body.substring(0, 20) + "..." : item.body;

        let row = `<tr>
        <td>${item.userId}</td>
        <td>${item.id}</td>
        <td>${shortTitle}</td>
        <td>${shortBody}</td>
        <td>
          <button class="view-detail" data-id="${item.id}">자세히 보기</button>
        </td>
      </tr>`

      tableBody.append(row);
      })

      $(".view-detail").on("click", function() {
        let postId = $(this).data("id");
        let post = response.find(item => item.id === postId);

        // 모달 내용 추가
        $("#detail").html(`
          <h4>${post.title}</h4>
          <p>${post.body}</p>
          `);
        $("#modal").show();
      })
      // 모달 닫기
      $("#close-modal").on("click", function() {
        $("#modal").hide();
      })
    }
  })
})