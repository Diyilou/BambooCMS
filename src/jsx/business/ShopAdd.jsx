import React from 'react';
import {Router, Route, Link} from 'react-router';

var zhuti = ["人物","动物","植物","风景","旅行","食物","学习","建筑","天气","英语字","拉条","纯色","其他"];
var fengge = ["可爱","梦幻","复古","古风","黑白","写实","简单","华丽","其他"];

var isNumber = function (value) {
    var patrn = /^(-)?\d+(\.\d+)?$/;
    if (patrn.exec(value) == null || value == "") {
        return false
    } else {
        return true
    }
}

class ShopAdd extends React.Component {
  constructor () {
    super();
    this.state = {
      litpic: '',
      quill: '',
      imgsrc: ''
    }
    this.uploadImg = this.uploadImg.bind(this);
    this.changeImgSrc = this.changeImgSrc.bind(this);
    this.postArticle = this.postArticle.bind(this);
    this.setArticle = this.setArticle.bind(this);
  }

  componentDidMount () {
    var setArticle = this.setArticle;
    this.setState({
      quill: new Quill('#editor', {
        modules: {
          toolbar: toolbarOptions
        },
        theme: 'snow'
      })
    });

    var articlecontrols = window.localStorage.getItem('articlecontrols');
    if (articlecontrols != '' && articlecontrols != null) {
      articlecontrols = JSON.parse(articlecontrols);
      if (articlecontrols.type === 'update') {
        var aid = parseInt(articlecontrols.aid);
        $.ajax({
          url: '/route/data.business.php',
          method: 'post',
          data: {tag: 'bili', type: 'getshopdata', aid: aid},
            success: function (data) {
              data = JSON.parse(data);
              if (parseInt(data.status) == 1) {
                setArticle(data.data[0]);
              } else {
                alert(data.msg);
              }
            },
            error: function (err) {
              console.log(err);
            }
        });
      }
    }
  }

  changeImgSrc (data) {
		this.setState({
			imgsrc: data.url
		});
	}

  setArticle (data) {
    this.refs.title.value = data.title;
    this.refs.price.value = data.price;
    this.refs.trueprice.value = data.trueprice;
    this.refs.brand.value = data.brand;
    this.refs.redirecturl.value = data.redirecturl;
    var delta = JSON.parse(data.delta);
    this.state.quill.setContents(delta);
    this.setState({
      imgsrc: data.litpic
    });
  }

  uploadImg (event) {
		var changeImgSrc = this.changeImgSrc;
		var subData = new FormData(this.refs.subForm);
    $.ajax({
        type: "POST",
        url: "/route/data.upload.php",
        data: subData,
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            data = JSON.parse(data);
            changeImgSrc(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("上传失败，请检查网络后重试");
        }
    });
  }

  postArticle (event) {
    if (this.refs.title.value === '' || this.refs.title.value === null) {
      alert('请填写商品名');
      event.preventDefault();
      return false;
    }

    if (!isNumber(this.refs.price.value) || !isNumber(this.refs.trueprice.value)) {
      alert('价格不能为空或者非数字');
      event.preventDefault();
      return false;
    }

    var qlContent = document.querySelector(".ql-editor").innerHTML;
    var delta = this.state.quill.getContents();
    delta = JSON.stringify(delta.ops).toString();

    var zhuti = $(this.refs.zhutiMap).find("input:checked");
    var fengge = $(this.refs.fenggeMap).find("input:checked");
    var zhutiNew = [];
    for (var i = 0, len = zhuti.length; i < len; i++) {
      zhutiNew.push(zhuti[i].value);
    }
    var fenggeNew = [];
    for (var i = 0, len = fengge.length; i < len; i++) {
      fenggeNew.push(fengge[i].value);
    }

    var sendData = {
        typeid: '-100',
        title: this.refs.title.value,
        shorttitle: '',
        tag: '',
        redirecturl: this.refs.redirecturl.value,
        source: '',
        writer: window.localStorage.getItem('businessuserid'),
        keywords: zhutiNew.join(','),
        description: fenggeNew.join(','),
        body: qlContent,
        delta: delta,
        flag: '',
        litpic: this.state.imgsrc,
        price: this.refs.price.value,
        trueprice: this.refs.trueprice.value,
        units: '',
        brand: this.refs.brand.value,
        channel: 1
    }

    var articlecontrols = window.localStorage.getItem('articlecontrols');

    if (articlecontrols != '' && articlecontrols != null) {
      articlecontrols = JSON.parse(articlecontrols);
      if (articlecontrols.type === 'update') {
        $.ajax({
          url: '/route/data.business.php',
          method: 'post',
          data: {tag: 'bili', type: 'updateshop', 'data': sendData, 'aid': articlecontrols.aid},
            success: function (data) {
              data = JSON.parse(data);
              if (parseInt(data.status) == 1) {
                window.localStorage.setItem('articlecontrols','[]');
              } else {
                alert(data.msg);
              }
            },
            error: function (err) {
              console.log(err);
            }
        });
      } else if (articlecontrols.type === 'add') {
        $.ajax({
          url: '/route/data.business.php',
          method: 'post',
          data: {tag: 'bili', type: 'addshop', 'data': sendData},
            success: function (data) {
              data = JSON.parse(data);
              if (parseInt(data.status) == 1) {
                window.localStorage.setItem('articlecontrols','[]');
              } else {
                alert(data.msg);
              }
            },
            error: function (err) {
              console.log(err);
            }
        });
      }
    } else {
      alert('未知的文章操作方式');
    }
  }

  render () {
    var uploadImg = this.uploadImg;
    var postArticle = this.postArticle;
    return (
      <div className='business-articleadd'>
        <ul>
          <li><Link to='/shop'>商品列表</Link></li>
        </ul>
        <h3><span>商品名*</span><input ref='title' type='text' /></h3>
        <h3 ref='zhutiMap'>
          <span>主题</span>
          {
            zhuti.map(function (item, index) {
              return <span key={index}><input name='zhuti' value={item} type='checkbox' />{item}</span>
            })
          }
        </h3>
        <h3 ref='fenggeMap'>
          <span>风格</span>
          {
            fengge.map(function (item, index) {
              return <span key={index}><input name='fengge' value={item} type='checkbox' />{item}</span>
            })
          }
        </h3>
        <h3><span>跳转URL</span><input ref='redirecturl' type='text' /></h3>
        <h3>
          <span>上传图片</span>
          <form className="uploadimgform" name="form2" ref="subForm" encType="multipart/form-data" method="post">
            <input type="file" name="file" accept="image/jpg,image/jpeg,image/png,image/gif" onChange={uploadImg.bind(this)} />
          </form>
          <img src={this.state.imgsrc} />
        </h3>
        <h3>内容</h3>
        <div>
          <div id="editor" ref="body">
          </div>
        </div>
        <h3><span>市场价</span><input ref='price' type='text' />(数值)</h3>
        <h3><span>优惠价</span><input ref='trueprice' type='text' />(数值)</h3>
        <h3><span>品牌</span><input ref='brand' type='text' /></h3>
        <div>
          <Link data-columnarticle={JSON.stringify(this.state.columnarticle)} onClick={postArticle} to='/shop'>保存</Link>
        </div>
      </div>
    )
  }
}

export default ShopAdd;
