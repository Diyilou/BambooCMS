import React from 'react';
import {Router, Route, Link} from 'react-router';

class ColumnList extends React.Component {
  constructor () {
    super();
  }

  render () {
    var delColumn = this.props.delColumn;
    var updateColumn = this.props.updateColumn;
    var addSonColumn = this.props.addSonColumn;
    var showSonColumn = this.props.showSonColumn;
    var showArticles = this.props.showArticles;
    var __this = this.props.__this;

    var columnnav = window.localStorage.getItem('columnnav');
    if (columnnav == '' || columnnav == null) {
      columnnav = [];
    }
    else {
      columnnav = JSON.parse(columnnav);
    }
    return (
      <ul className='business-columnlist'>
        {
          this.props.topcolumn.map(function (item, index) {
            var columntype = parseInt(item.type);
            var newcolumnurl = '';
            if (columntype === 0) {
              newcolumnurl = '/column/article';
            }else if (columntype === 1) {
              newcolumnurl = '/column/shop';
            }else if (columntype === 2) {
              newcolumnurl = '/column/photo';
            }else if (columntype === 3) {
              newcolumnurl = '/column/video';
            }
            return <li key={index} id='clist{item.id}'>
                    <div>
                      <Link data-item={JSON.stringify(item)} onClick={showArticles} to={newcolumnurl}>{item.typename}</Link>
                    </div>
                    <div>
                      <Link data-item={JSON.stringify(item)} onClick={showArticles} to={newcolumnurl}>添加商品</Link>
                      <Link data-id={item.id} data-item={JSON.stringify(item)} onClick={updateColumn} to='/column/update'>更改</Link>
                      <a data-id={item.id} onClick={delColumn} href='javascript:void(0)'>删除</a>
                    </div>
                  </li>
          })
        }
      </ul>
    )
  }
}

class ColumnAll extends React.Component {
  constructor () {
    super();
    this.state = {
      topcolumn : []
    }
    window.localStorage.setItem('columnnav', []);
    this.getTopColumn = this.getTopColumn.bind(this);
    this.createSonColumn = this.createSonColumn.bind(this);
  }
  getTopColumn (data) {
    var newdata = [];
    for (var i = 0, len = data.length; i< len; i++) {
      newdata.push({node:data[i], children: [], id: data[i].id});
    }
    console.log(newdata);
    this.setState({
      topcolumn: data
    });
  }
  componentDidMount () {

    var getTopColumn = this.getTopColumn;
    $.ajax({
      url: '/route/data.column.php',
      method: 'post',
      data: {tag: 'bili', type: 'allcolumn'},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            getTopColumn(data.data);
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
  updateColumn (event) {
    var ele = event.target || event.srcElement;
    var id = ele.getAttribute('data-id');
    var item = ele.getAttribute('data-item');
    window.localStorage.setItem('columncontrols', JSON.stringify({'id':id,'type':'update', 'item': item}));
  }
  addSonColumn (event) {
    var ele = event.target || event.srcElement;
    var id = ele.getAttribute('data-id');
    var typedir = ele.getAttribute('data-typedir');
    window.localStorage.setItem('columncontrols', JSON.stringify({'id':id,'typedir':typedir,'type':'addson'}));
  }
  delColumn (event) {
    var ele = event.target || event.srcElement;
    var id = ele.getAttribute('data-id');
    if (confirm('确定删除ID为'+id+'的栏目吗，此操作不会清除该栏目的子栏目和该栏目下的文章')) {
      $.ajax({
        url: '/route/data.column.php',
        method: 'post',
        data: {tag: 'bili', type: 'delcolumn', id: id},
          success: function (data) {
            data = JSON.parse(data);
            if (parseInt(data.status) == 1) {
              console.log(data);
              alert('栏目删除成功');
              ele.parentNode.parentNode.remove();
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
  createSonColumn (data, id) {
    console.log(data);

    this.setState({
      topcolumn: data
    });
  }
  showSonColumn (event) {
    var createSonColumn = this.createSonColumn;
    var ele = event.target || event.srcElement;
    var id = ele.getAttribute('data-id');

    var reid = ele.getAttribute('data-reid');
    var typename = ele.getAttribute('data-typename');

    var columnnav = window.localStorage.getItem('columnnav');
    if (columnnav === '' || columnnav === null || reid == 0) {
      columnnav = [{id, reid, typename}];
    }else {
      columnnav = JSON.parse(columnnav);

      for (var n = 0, l = columnnav.length; n < l; n++) {
        if (columnnav[n].id == id) {
            columnnav = columnnav.splice(0,n);
            break;
        }
      }
      columnnav.push({id, reid, typename});
    }

    window.localStorage.setItem('columnnav', JSON.stringify(columnnav));
    if (parseInt(id) === 0) {
      window.localStorage.setItem('columnnav', '[]');
    }
    $.ajax({
      url: '/route/data.column.php',
      method: 'post',
      data: {tag: 'bili', type: 'getsoncolumn', id: id},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            console.log(data);
            data = data.data;
            createSonColumn(data, id);
          } else {
            console.log(data.msg);
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  showArticles (event) {
    var ele = event.target || event.srcElement;
    var item = ele.getAttribute('data-item');
    window.localStorage.setItem('columnarticle', item);
  }

  render () {
    var delColumn = this.delColumn;
    var updateColumn = this.updateColumn;
    var addSonColumn = this.addSonColumn;
    var showSonColumn = this.showSonColumn;
    var showArticles = this.showArticles;
    var __this = this;
    console.log(this.state.topcolumn);
    var topcolumn = this.state.topcolumn;
    return (
      <ColumnList __this={__this} showArticles={showArticles} topcolumn={this.state.topcolumn}  delColumn={delColumn} updateColumn={updateColumn} addSonColumn={addSonColumn} showSonColumn={showSonColumn}/>
    )
  }
}

export default ColumnAll;
