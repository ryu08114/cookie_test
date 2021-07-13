$(function() {
  $.cookie('test_cookie');
  var cookie = $.cookie('test_cookie');

  if(cookie == 1) {
    //cookieが保存されていたらアラートを表示
    alert('cookieがあります');
  } else {
    //cookieが保存されていなかったらモーダルを表示
    $.magnificPopup.open({
      items: {src: '#modal'},
      type: 'inline', 
      closeOnBgClick:true
    })
  }

  //追加ボタンでcookieを保存
  $('.add').on('click',function() {
    $.cookie('test_cookie',1,{expires: 183,});
  })

  //削除ボタンでcookieを削除
  $('.remove').on('click',function() {
    $.removeCookie('test_cookie');
  })

  //閉じるボタンでモーダルを閉じる
  $('.closeBtn').on('click',function() {
    $('#modal').magnificPopup('close');
  })
});