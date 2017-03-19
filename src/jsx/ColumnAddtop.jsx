import React from 'react';
import {Router, Route, Link} from 'react-router';

class ColumnAddtop extends React.Component {
  constructor () {
    super()
  }
  componentDidMount () {
    // 初始化上级目录
    var columncontrols = JSON.parse(window.localStorage.getItem('columncontrols'));
    if (columncontrols === '' || columncontrols === null) {
      alert('栏目选择错误，不能新建栏目');
      return;
    }

    if (columncontrols.type === 'addtop') {
      this.refs.preurl.value = '/';
    }else if (columncontrols.type === 'addson') {
      this.refs.preurl.value = columncontrols.typedir;
    }else if (columncontrols.type === 'update') {
      var item = JSON.parse(columncontrols.item);
      if (item.ishidden == 0) {
        this.refs.ishidden0.setAttribute('checked', 'checked');
      }else {
        this.refs.ishidden1.setAttribute('checked', 'checked');
      }

      var dirArr = item.typedir.split('/');
      var newdirArr = dirArr;
      console.log(dirArr);
      if (dirArr.length === 3) {
        this.refs.preurl.value = '/';
        this.refs.cururl.value = dirArr.splice(dirArr.length-2, 1);
        this.refs.position0.setAttribute('checked', 'checked');
      }else {
        this.refs.cururl.value = dirArr.splice(dirArr.length-2, 1);
        this.refs.preurl.value = '/'+newdirArr.splice(1,newdirArr.length -2).join('/')+'/';
        this.refs.position1.setAttribute('checked', 'checked');
      }

      var type = parseInt(item.type);
      var lis = this.refs.columntype.children;
      lis[type].setAttribute('selected', 'selected');

      this.refs.columnTemplate.value = item.templetindex;
      this.refs.articleTemplate.value = item.templetarticle;
      this.refs.columnTitle.value = item.typename;
      this.refs.columnSeoTitle.value = item.seotitle;
      this.refs.columnKeywords.value = item.keywords;
      this.refs.columnDescription.value = item.description;
      this.refs.columnContent.value = item.content;
      console.log(columncontrols);
    }
  }
  checkData (element, msg) {
    if (element.value === '' || element.value === null || !!element.value === false) {
      alert(msg);
      return false;
    }else {
      return true;
    }
  }
  // 保存栏目数据
  saveColumnData () {
    var columncontrols = JSON.parse(window.localStorage.getItem('columncontrols'));
    if (columncontrols === '' || columncontrols === null) {
      alert('栏目选择错误，不能新建栏目');
      return;
    }

    var columnId = 0;
    if (columncontrols.type === 'addtop') {
      columnId = 0;
    } else if (columncontrols.type === 'addson') {
      columnId = parseInt(columncontrols.id);
    } else if (columncontrols.type === 'update') {
      columnId = parseInt(columncontrols.id);
    }

    var ishidden = 0; // 是否隐藏
    var columnType = 0; // 栏目类型
    var preurl = ''; // 上级目录
    var cururl = ''; // 当前栏目目录
    var position = 0; // 目录相对位置（初始化为相对于根目录）
    var columnTemplate = ''; // 栏目模板
    var articleTemplate = ''; // 文章模板
    var columnTitle = ''; // 栏目标题
    var columnSeoTitle = ''; //seo title
    var columnKeywords = ''; //关键字
    var columnDescription = ''; //描述
    var columnContent = ''; // 内容

    var ishidden1 = this.refs.ishidden1;
    if (ishidden1.checked) {
      ishidden = 1; // 隐藏
    }

    // 内容模型判断
    var selectTag = this.refs.columntype;
    var option = selectTag.children;
    for (var i = 0, len = option.length; i< len; i++) {
      if (option[i].selected) {
        columnType = i;
      }
    }

    if (!this.checkData(this.refs.preurl, '上级目录不能为空')) {
      return false;
    }
    preurl = this.refs.preurl.value;

    if (!this.checkData(this.refs.cururl, '本栏目目录不能为空')) {
      return false;
    }
    var regExp = /[^A-Za-z0-9\_]/;
    if(regExp.test(this.refs.cururl.value)) {
      alert('本栏目目录名称必须使用英文和数字');
      return false;
    }

    cururl = this.refs.cururl.value;

    var position1 = this.refs.position1;
    if (position1.checked) {
      position = 1; // 相对于上一级目录
    }

    if (!this.checkData(this.refs.columnTemplate, '栏目模板不能为空')) {
      return false;
    }
    columnTemplate = this.refs.columnTemplate.value;

    if (!this.checkData(this.refs.articleTemplate, '文章模板不能为空')) {
      return false;
    }
    articleTemplate = this.refs.articleTemplate.value;

    if (!this.checkData(this.refs.columnTitle, '栏目标题不能为空')) {
      return false;
    }

    if (!this.checkData(this.refs.columnSeoTitle, '栏目seo标题不能为空')) {
      return false;
    }


    columnTitle = this.refs.columnTitle.value;
    columnSeoTitle = this.refs.columnSeoTitle.value;
    columnDescription = this.refs.columnDescription.value;
    columnKeywords = this.refs.columnKeywords.value;
    columnContent = this.refs.columnContent.value;

    var typedir = '';
    if (position == 0) {
      typedir = '/' + cururl + '/';
    }else {
      typedir = preurl + cururl + '/';
    }
    var sendData = {
      reid: columnId,
      ishidden: ishidden,
      typename: columnTitle,
      typedir: typedir,
      templetindex: columnTemplate,
      templetarticle: articleTemplate,
      description: columnDescription,
      keywords: columnKeywords,
      seotitle: columnSeoTitle,
      content: columnContent,
      type: columnType
    }

    if (columncontrols.type === 'update') {
      $.ajax({
        url: '/route/data.column.php',
        method: 'post',
        data: {tag: 'bili', type: 'updatecolumn', 'data': sendData},
          success: function (data) {
            data = JSON.parse(data);
            if (parseInt(data.status) == 1) {
              console.log(data);
              window.localStorage.setItem('columnid', '');
            } else {
              alert(data.msg);
            }
          },
          error: function (err) {
            console.log(err);
          }
      });
    } else {
      $.ajax({
        url: '/route/data.column.php',
        method: 'post',
        data: {tag: 'bili', type: 'addcolumn', 'data': sendData},
          success: function (data) {
            data = JSON.parse(data);
            if (parseInt(data.status) == 1) {
              console.log(data);
              window.localStorage.setItem('columnid', '');
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
  render () {
    return (
      <div className='bili-addtopcolumn'>
        <h1>栏目管理 > 增加栏目</h1>
        <h3>是否隐藏栏目(0->显示,1->隐藏)*</h3>
        <div>
          <input ref='ishidden0' type='radio' value='show' name='ishidden' defaultChecked/><span>显示</span>
          <input ref='ishidden1' type='radio' value='hidden' name='ishidden'/><span>隐藏</span>
        </div>
        <h3>内容模型(0->文章,1->商品,2->图集,3->视频)*</h3>
        <div>
          <select ref='columntype'>
            <option>文章</option>
            <option>商品</option>
            <option>图集</option>
            <option>视频</option>
          </select>
        </div>
        <h3>上级目录*</h3>
        <div>
          <input ref='preurl' type='text' />
        </div>
        <h3>本栏目目录(目录名称使用英文)*</h3>
        <div>
          <input ref='cururl' type='text' />
        </div>
        <h3>目录相对位置(0->根目录,1->上级目录)*</h3>
        <div>
          <input ref='position0' type='radio' name='position' defaultChecked /><span>根目录</span>
          <input ref='position1' type='radio' name='position' /><span>上级目录</span>
        </div>
        <h3>栏目模板*</h3>
        <div>
          <input ref='columnTemplate' type='text' />
        </div>
        <h3>文章模板*</h3>
        <div>
          <input ref='articleTemplate' type='text' />
        </div>
        <h3>栏目标题*</h3>
        <div>
          <input ref='columnTitle' type='text' />
        </div>
        <h3>seo标题*</h3>
        <div>
          <input ref='columnSeoTitle' type='text' />
        </div>
        <h3>关键字</h3>
        <div>
          <textarea ref='columnKeywords'></textarea>
        </div>
        <h3>描述</h3>
        <div>
          <textarea ref='columnDescription'></textarea>
        </div>
        <h3>内容</h3>
        <div>
          <textarea ref='columnContent'></textarea>
        </div>
        <div>
          <Link onClick={this.saveColumnData.bind(this)} to='/column/all'>确认</Link>
          <a href='javascript:void(0)'>返回</a>
        </div>
      </div>
    )
  }
}

export default ColumnAddtop;
