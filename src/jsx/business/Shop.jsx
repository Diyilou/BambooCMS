import React from 'react';
import {Router, Route, Link} from 'react-router';

class ShopIndex extends React.Component {
  constructor () {
    super();
    this.state = {
      shopdata:[]
    }
    this.setShopData = this.setShopData.bind(this);
    this.updateShop = this.updateShop.bind(this);
    this.delShop = this.delShop.bind(this);
    this.addNewShop = this.addNewShop.bind(this);
  }

  componentDidMount () {
    var setShopData = this.setShopData;
    $.ajax({
      url: '/route/data.business.php',
      method: 'post',
      data: {tag: 'bili', type: 'getallshop', 'userid': window.localStorage.getItem('businessuserid')},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            setShopData(data);
          } else {
            alert(data.msg);
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  setShopData (data) {
    this.setState({
      shopdata: data.data
    });
  }

  updateShop (event) {
    var ele = event.target || event.srcElement;
    var aid = ele.getAttribute('data-aid');
    window.localStorage.setItem('articlecontrols',JSON.stringify({'aid':aid,'type':'update'}));
  }

  delShop (event) {
    var ele = event.target || event.srcElement;
    var aid = ele.getAttribute('data-aid');

    if (confirm('确定删除商品？')) {
      $.ajax({
        url: '/route/data.business.php',
        method: 'post',
        data: {tag: 'bili', type: 'delshop', aid: aid},
          success: function (data) {
            data = JSON.parse(data);
            if (parseInt(data.status) == 1) {
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

  addNewShop (event) {
    window.localStorage.setItem('articlecontrols',JSON.stringify({'type':'add'}));
  }

  render () {
    var updateShop = this.updateShop;
    var delShop = this.delShop;
    var addNewShop = this.addNewShop;
    return (
      <div className='bili-articleindex'>
        <div>
          <Link to='shop/add' onClick={addNewShop}>添加商品</Link>
        </div>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>ID</th>
              <th>选择</th>
              <th>标题</th>
              <th>更新时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.shopdata.map(function (item, index) {
                return <tr key={index}>
                  <td><span>{index}</span></td>
                  <td><input type='checkbox' /></td>
                  <td><Link data-aid={item.id} onClick={updateShop} to='/shop/update'>{item.title}</Link></td>
                  <td>{new Date(parseInt(item.pubdate) * 1000).toLocaleString()}</td>
                  <td>
                    <a data-aid={item.id} onClick={delShop} href='javascript:void(0)'>删除</a>
                    <Link data-aid={item.id} onClick={updateShop} to='/shop/update'>更改</Link>
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

class Shop extends React.Component {
  render () {
    return (
      <div>
        {this.props.children ? this.props.children : <ShopIndex/>}
      </div>
    )
  }
}

export default Shop;
