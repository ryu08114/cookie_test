$(function() {
  $.cookie('test_cookie');
  var cookie = $.cookie('test_cookie');

  $(window).on('load',function() {
    if(cookie == 1) {
      alert('cookieがあります');
    } else {
      $.magnificPopup.open({
        items: {src: '#modal'},
        type: 'inline', 
        closeOnBgClick:true
      })
    }
  })

  $('.add').on('click',function() {
    $.cookie('test_cookie',1,{expires: 183,});
  })

  $('.remove').on('click',function() {
    $.removeCookie('test_cookie');
  })
});