import React from 'react';
import {Router, Route, Link} from 'react-router';

class ArticleIndex extends React.Component {
  constructor () {
    super();
    console.log(JSON.parse(window.localStorage.getItem('columnarticle')));
    this.state = {
      columnarticle: JSON.parse(window.localStorage.getItem('columnarticle')), // 当前文章所属栏目
      articlelist : []
    }

    this.getColumnArticle = this.getColumnArticle.bind(this);
    this.addArticle = this.addArticle.bind(this);
  }

  componentDidMount () {
    var getColumnArticle = this.getColumnArticle;
    var id = this.state.columnarticle.id;

    $.ajax({
      url: '/route/data.column.php',
      method: 'post',
      data: {tag: 'bili', type: 'allarticle', id: id},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            getColumnArticle(data.data);
            console.log(data);
          } else {
            console.log(data.msg);
            //alert(data.msg);
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  // 获得当前栏目的文章
  getColumnArticle (data) {
    console.log(data);
    this.setState({
      articlelist: data
    });
  }

  delArticle (event) {
    var ele = event.target || event.srcElement;
    var aid = ele.getAttribute('data-aid');

    if (confirm('确定删除本文章？')) {
      $.ajax({
        url: '/route/data.column.php',
        method: 'post',
        data: {tag: 'bili', type: 'delarticle', aid: aid},
          success: function (data) {
            data = JSON.parse(data);
            if (parseInt(data.status) == 1) {
              ele.parentNode.parentNode.remove();
              console.log(data);
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

  updateArticle (event) {
    var ele = event.target || event.srcElement;
    var aid = ele.getAttribute('data-aid');
    window.localStorage.setItem('articlecontrols',JSON.stringify({'aid':aid,'type':'update'}));
  }
  addArticle (event) {
    var columntype = parseInt(this.state.columnarticle.type);
    window.localStorage.setItem('articlecontrols',JSON.stringify({'type':'add','channel': columntype}));
  }
  render () {
    var delArticle = this.delArticle;
    var updateArticle = this.updateArticle;
    var addArticle = this.addArticle;
    var columntype = parseInt(this.state.columnarticle.type);
    var addNewUrl = '';
    if (columntype === 0) {
      addNewUrl = '/column/article/add';
    }else if (columntype === 1) {
      addNewUrl = '/column/shop/add';
    }else if (columntype === 2) {
      addNewUrl = '/column/photo/add';
    }else if (columntype === 3) {
      addNewUrl = '/column/video/add';
    }
    return (
      <div className='bili-articleindex'>
        <ul className='bili-articlenav'>
          <li><span>当前栏目：{this.state.columnarticle.typename}</span></li>
          <li><Link onClick={addArticle} to={addNewUrl}>添加新文章</Link></li>
        </ul>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>ID</th>
              <th>选择</th>
              <th>标题</th>
              <th>更新时间</th>
              <th>点击</th>
              <th>发布人</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.articlelist.map(function (item, index) {
                return <tr key={index}>
                  <td><span>{item.id}</span></td>
                  <td><input type='checkbox' /></td>
                  <td><Link data-aid={item.id} onClick={updateArticle} to='/column/article/update'>{item.title}</Link></td>
                  <td>{new Date(parseInt(item.pubdate) * 1000).toLocaleString()}</td>
                  <td>{item.click}</td>
                  <td>{item.writer}</td>
                  <td>
                    <a data-aid={item.id} onClick={delArticle} href='javascript:void(0)'>删除</a>
                    <Link data-aid={item.id} onClick={updateArticle} to='/column/article/update'>更改</Link>
                    <a href=''>浏览</a>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

class Article extends React.Component {
  render () {
    return (
      <div>
        {this.props.children ? this.props.children : <ArticleIndex/>}
      </div>
    )
  }
}

export default Article;
