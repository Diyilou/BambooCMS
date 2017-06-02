(function () {

  var zhuti = ["全部","人物","动物","植物","风景","旅行","食物","学习","建筑","天气","英语字","拉条","纯色","其他"];
  var fengge = ["全部","可爱","梦幻","复古","古风","黑白","写实","简单","华丽","其他"];

  var $zhuti = $('#zhuti');
  var $fengge = $('#fengge');
  var $pinpai = $('#pinpai');
  var $shopContainer = $('#shopContainer');

  var zhuti1 = '';
  for (var i = 0, len = zhuti.length; i < len; i++) {
    if (i === 0) {
      zhuti1 += '<li><a data-check="1" class="click" href="javascript:;">'+ zhuti[i] +'</a></li>';
    } else {
      zhuti1 += '<li><a href="javascript:;">'+ zhuti[i] +'</a></li>';
    }

  }
  $zhuti.append(zhuti1);

  var fengge1 = '';
  for (var i = 0, len = fengge.length; i < len; i++) {
    if (i === 0) {
      fengge1 += '<li><a data-check="1" class="click" href="javascript:;">'+ fengge[i] +'</a></li>';
    } else {
      fengge1 += '<li><a href="javascript:;">'+ fengge[i] +'</a></li>';
    }
  }
  $fengge.append(fengge1);

  var z = '';
  var f = '';
  var p = '';

  function changeShopData (data) {
    var data = data.data;
    var html = "";
    for (var i = 0, len = data.length; i < len; i++) {
      html += "<li>";
        html += "<a href='/store/"+data[i].id+".html'><img src='"+data[i].litpic+"' /><p>"+data[i].title+"</p></a>";
        html += "<div><span>￥"+data[i].trueprice+"</span><span>"+data[i].brand+"</span></div>";
      html += "</li>";
    }

    $shopContainer.empty();
    $shopContainer.append(html);
  }

  function changeSearch () {
    $.ajax({
      url: '/route/data.request.php',
      method: 'post',
      data: {tag: 'bili', type: 'changesearch', z: z, f: f, p: p},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            changeShopData(data.data);
          } else {
            console.log('当前没有胶带');
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  $zhuti.find('a').each(function () {
    $(this).click(function () {
      var check = $(this).attr('data-check');
      $(this).addClass('click');
      $(this).parent('li').siblings('li').children('a').removeClass('click');
      z = $(this).text();
      changeSearch();
    });
  });
  $fengge.find('a').each(function () {
    $(this).click(function () {
      var check = $(this).attr('data-check');
      $(this).addClass('click');
      $(this).parent('li').siblings('li').children('a').removeClass('click');
      f = $(this).text();
      changeSearch();
    });
  });
  $pinpai.find('a').each(function () {
    $(this).click(function () {
      var check = $(this).attr('data-check');
      $(this).addClass('click');
      $(this).parent('li').siblings('li').children('a').removeClass('click');
      p = $(this).text();
      changeSearch();
    });
  });
})();
