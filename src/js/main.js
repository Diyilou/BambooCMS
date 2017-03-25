(function () {
  var $videoColumn = $('#videoColumn');
  var $videoList = $('#videoList');
  var $divs = $videoList.children('div');

  $videoColumn.find('a').on('click', function () {
    var id = $(this).attr('data-id');
    $(this).removeClass('column-leave').addClass('column-click');
    $(this).parent('li').siblings('li').children('a').removeClass('column-click').addClass('column-leave');
    for (var i = 0, len = $divs.length; i < len; i++) {
      var cid = $($divs[i]).attr('data-id');
      if (id === cid) {
        $($divs[i]).css('display', 'block');
      }else {
        $($divs[i]).css('display', 'none');
      }
    }
  });

  var href = window.location.href;
  var len = href.split('/').length;
  var id = href.split('/')[len-1].split('.')[0];
  if (id) {
    $.ajax({
      url: '/route/data.request.php',
      method: 'post',
      data: {tag: 'bili', type: 'changeclickdata', aid: id},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            console.log('ok');
          } else {
            alert(data.msg);
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }
})();
