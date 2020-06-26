$(function() {
     
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="name">
          ${message.user_name}
        </div>
        <div class="name__date">
          ${message.created_at}
        </div>
        <div class="message">
          <p>
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >`
      return html;
    } else {
      var html =
       `<div class="name">
          ${message.user_name}
        </div>
        <div class="name__date">
          ${message.created_at}
        </div>
        <div class="message">
          <p>
            ${message.content}
          </p>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('.btn').prop('disabled', false);
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.btn').prop('disabled', false);
    });
  })

});