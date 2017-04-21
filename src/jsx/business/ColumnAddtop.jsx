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

    if (columncontrols.type === 'update') {
      var item = JSON.parse(columncontrols.item);
      this.refs.columnTitle.value = item.typename;
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
    var columnType = 1; // 栏目类型
    var preurl = ''; // 上级目录
    var cururl = ''; // 当前栏目目录
    var position = 0; // 目录相对位置（初始化为相对于根目录）
    var columnTemplate = 'index.htm'; // 栏目模板
    var articleTemplate = 'article.htm'; // 文章模板
    var columnTitle = ''; // 栏目标题
    var columnSeoTitle = 'seo'; //seo title
    var columnKeywords = ''; //关键字
    var columnDescription = ''; //描述
    var columnContent = ''; // 内容
    var typedir = '/';

    if (!this.checkData(this.refs.columnTitle, '栏目标题不能为空')) {
      return false;
    }

    columnTitle = this.refs.columnTitle.value;

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
      <div className='business-addtopcolumn'>
        <h1>栏目管理 > 增加商品栏目</h1>
        <h3>商品栏目名称</h3>
        <div>
          <input ref='columnTitle' type='text' />
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
