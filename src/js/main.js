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
})();
