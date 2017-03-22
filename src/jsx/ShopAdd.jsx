import React from 'react';
import {Router, Route, Link} from 'react-router';

class ShopAdd extends React.Component {
  constructor () {
    super();
    this.state = {
      columnarticle: JSON.parse(window.localStorage.getItem('columnarticle')), // 当前文章所属栏目
      imgsrc: '',
      litpic: ''
    }
    this.postArticle = this.postArticle.bind(this);
    this.changeImgSrc = this.changeImgSrc.bind(this);
    this.changeLitpic = this.changeLitpic.bind(this);
    this.setArticle = this.setArticle.bind(this);
  }

  changeImgSrc (data) {
		this.setState({
			imgsrc: data.url
		});
	}

  changeLitpic (data) {
    this.setState({
      litpic: data.url
    });
  }

  componentDidMount () {
    this.refs.writer.value = window.localStorage.getItem('biliusername');
    var setArticle = this.setArticle;
    var articlecontrols = window.localStorage.getItem('articlecontrols');
    if (articlecontrols != '' && articlecontrols != null) {
      articlecontrols = JSON.parse(articlecontrols);
      if (articlecontrols.type === 'update') {
        var aid = parseInt(articlecontrols.aid);
        $.ajax({
          url: '/route/data.column.php',
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

  setArticle (data) {

    this.refs.title.value = data.title;
    this.refs.shorttitle.value = data.shorttitle;
    this.refs.tag.value = data.tag;
    this.refs.redirecturl.value = data.redirecturl;
    this.refs.source.value = data.source;
    this.refs.keywords.value = data.keywords,
    this.refs.description.value = data.description;
    this.refs.body.value = data.body;
    this.refs.writer.value = data.writer;
    this.refs.price.value = data.price;
    this.refs.trueprice.value = data.trueprice;
    this.refs.units.value = data.units;
    this.refs.brand.value = data.brand;

    this.setState({
      litpic: data.litpic
    });

    var flag = data.flag.split(',');
    for (var i = 0, len = flag.length; i< len; i++) {
      if (flag[i] === 'h') {
        this.refs.articletype1.setAttribute('checked','checked');
      } else if (flag[i] === 'c') {
        this.refs.articletype2.setAttribute('checked','checked');
      } else if (flag[i] === 'f') {
        this.refs.articletype3.setAttribute('checked','checked');
      } else if (flag[i] === 'a') {
        this.refs.articletype4.setAttribute('checked','checked');
      } else if (flag[i] === 's') {
        this.refs.articletype5.setAttribute('checked','checked');
      } else if (flag[i] === 'b') {
        this.refs.articletype6.setAttribute('checked','checked');
      } else if (flag[i] === 'p') {
        this.refs.articletype7.setAttribute('checked','checked');
      } else if (flag[i] === 'j') {
        this.refs.articletype8.setAttribute('checked','checked');
      }
    }


    console.log(data);
  }

  uploadImg (event) {
		var changeImgSrc = this.changeImgSrc;
		var subData = new FormData(this.refs.subForm2);
    $.ajax({
        type: "POST",
        url: "/route/data.upload.php",
        data: subData,
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            data = JSON.parse(data);
            console.log(data);
            changeImgSrc(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("上传失败，请检查网络后重试");
        }
    });
  }
  uploadLitpic (event) {
		var changeLitpic = this.changeLitpic;
		var subData = new FormData(this.refs.subForm1);
    $.ajax({
        type: "POST",
        url: "/route/data.upload.php",
        data: subData,
        cache: false,
        contentType: false,
        processData: false,
        success: function(data) {
            data = JSON.parse(data);
            console.log(data);
            changeLitpic(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("上传失败，请检查网络后重试");
        }
    });
  }
  postArticle (event) {
    var ele = event.target || event.srcElement;
    var columnarticle = ele.getAttribute('data-columnarticle');

    if (columnarticle === '' || columnarticle === null) {
      alert('请选择需要添加文章的栏目');
      event.preventDefault();
      return false;
    }
    if (this.refs.title.value === '' || this.refs.title.value === null) {
      alert('请填写文章标题');
      event.preventDefault();
      return false;
    }
    if (this.refs.keywords.value === '' || this.refs.keywords.value === null) {
      alert('请填写关键字');
      event.preventDefault();
      return false;
    }
    if (this.refs.description.value === '' || this.refs.description.value === null) {
      alert('请填写描述');
      event.preventDefault();
      return false;
    }

    var articletype = [];

    if (this.refs.articletype1.checked) {
      articletype.push(this.refs.articletype1.value);
    }
    if (this.refs.articletype2.checked) {
      articletype.push(this.refs.articletype2.value);
    }
    if (this.refs.articletype3.checked) {
      articletype.push(this.refs.articletype3.value);
    }
    if (this.refs.articletype4.checked) {
      articletype.push(this.refs.articletype4.value);
    }
    if (this.refs.articletype5.checked) {
      articletype.push(this.refs.articletype5.value);
    }
    if (this.refs.articletype6.checked) {
      articletype.push(this.refs.articletype6.value);
    }
    if (this.refs.articletype7.checked) {
      articletype.push(this.refs.articletype7.value);
    }
    if (this.refs.articletype8.checked) {
      articletype.push(this.refs.articletype8.value);
    }


    articletype = articletype.join(',');
    console.log(articletype);
    var sendData = {
        typeid: JSON.parse(columnarticle).id,
        title: this.refs.title.value,
        shorttitle: this.refs.shorttitle.value,
        tag: this.refs.tag.value,
        redirecturl: this.refs.redirecturl.value,
        source: this.refs.source.value,
        writer: this.refs.writer.value,
        keywords: this.refs.keywords.value,
        description: this.refs.description.value,
        body: this.refs.body.value,
        flag: articletype,
        litpic: this.state.litpic,
        price: this.refs.price.value,
        trueprice: this.refs.trueprice.value,
        units: this.refs.units.value,
        brand: this.refs.brand.value
    }

    console.log(sendData);

    var articlecontrols = window.localStorage.getItem('articlecontrols');

    if (articlecontrols != '' && articlecontrols != null) {
      articlecontrols = JSON.parse(articlecontrols);
      if (articlecontrols.type === 'update') {
        $.ajax({
          url: '/route/data.column.php',
          method: 'post',
          data: {tag: 'bili', type: 'updateshop', 'data': sendData, 'aid': articlecontrols.aid},
            success: function (data) {
            console.log(data);
              data = JSON.parse(data);
              if (parseInt(data.status) == 1) {
                console.log(data);
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
        sendData.channel = articlecontrols.channel;
        $.ajax({
          url: '/route/data.column.php',
          method: 'post',
          data: {tag: 'bili', type: 'addshop', 'data': sendData},
            success: function (data) {
              data = JSON.parse(data);
              if (parseInt(data.status) == 1) {
                console.log(data);
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
    var postArticle = this.postArticle;
    var uploadImg = this.uploadImg;
    var uploadLitpic = this.uploadLitpic;
    return (
      <div className='bili-articleadd'>
        <ul>
          <li><Link to='/column/all'>{this.state.columnarticle.typename}</Link></li>
          <li>添加商品</li>
        </ul>
        <h3><span>标题*</span><input ref='title' type='text' /></h3>
        <h3><span>短标题</span><input ref='shorttitle' type='text' /></h3>
        <h3><span>Tag标签</span><input ref='tag' type='text' />(tag使用英文','分隔)</h3>
        <h3>
          <span>自定义属性</span>
          <input ref='articletype1' name='articletype' value='h' type='checkbox'/>头条[h]
          <input ref='articletype2' name='articletype' value='c' type='checkbox'/>推荐[c]
          <input ref='articletype3' name='articletype' value='f' type='checkbox'/>幻灯[f]
          <input ref='articletype4' name='articletype' value='a' type='checkbox'/>特荐[a]
          <input ref='articletype5' name='articletype' value='s' type='checkbox'/>滚动[s]
          <input ref='articletype6' name='articletype' value='b' type='checkbox'/>加粗[b]
          <input ref='articletype7' name='articletype' value='p' type='checkbox'/>图片[p]
          <input ref='articletype8' name='articletype' value='j' type='checkbox'/>跳转[j]
        </h3>
        <h3><span>跳转URL</span><input ref='redirecturl' type='text' /></h3>
        <h3>
          <span>文章来源</span><input ref='source' type='text' />
          <span>作者</span><input ref='writer' type='text' />
        </h3>
        <h3>
          <span>上传缩略图</span>
          <form className="uploadimgform" name="form1" ref="subForm1" encType="multipart/form-data" method="post">
            <input type="file" name="file" accept="image/jpg,image/jpeg,image/png,image/gif" onChange={uploadLitpic.bind(this)} />
          </form>
          <img src={this.state.litpic} />
        </h3>
        <h3>关键字*</h3>
        <div>
          <textarea ref='keywords'></textarea>
        </div>
        <h3>描述*</h3>
        <div>
          <textarea ref='description'></textarea>
        </div>
        <h3>内容</h3>
        <h3>
          <span>上传图片</span>
          <form className="uploadimgform" name="form2" ref="subForm2" encType="multipart/form-data" method="post">
            <input type="file" name="file" accept="image/jpg,image/jpeg,image/png,image/gif" onChange={uploadImg.bind(this)} />
          </form>
          <img src={this.state.imgsrc} />
        </h3>
        <div>
          <textarea ref='body'></textarea>
        </div>
        <h3><span>市场价</span><input ref='price' type='text' />(数值)</h3>
        <h3><span>优惠价</span><input ref='trueprice' type='text' />(数值)</h3>
        <h3><span>计量单位</span><input ref='units' type='text' /></h3>
        <h3><span>品牌</span><input ref='brand' type='text' /></h3>
        <div>
          <Link data-columnarticle={JSON.stringify(this.state.columnarticle)} onClick={postArticle} to='/column/shop'>保存</Link>
        </div>
      </div>
    )
  }
}

export default ShopAdd;
