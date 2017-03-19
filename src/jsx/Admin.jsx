import React from 'react';
import {Router, Route, Link} from 'react-router';

class AdminAll extends React.Component {
  constructor () {
    super();
    this.state = {
      adminall: []
    }
    this.refreshAdminList = this.refreshAdminList.bind(this);
    this.delAdmin = this.delAdmin.bind(this);
  }
  refreshAdminList (data) {
  console.log(data);
    this.setState({
      adminall: data
    });
  }

  componentDidMount () {
    var refreshAdminList = this.refreshAdminList;
    $.ajax({
      url: '/route/data.user.php',
      method: 'post',
      data: {tag: 'bili', type: 'alladmin'},
        success: function (data) {
          data = JSON.parse(data);
          console.log(data);
          if (parseInt(data.status) == 1) {
            refreshAdminList(data.data);
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

  delAdmin (event) {
    var ele = event.target || event.srcElement;
    var id = ele.getAttribute('data-id');
    console.log(id);
    if (confirm('删除本用户？')) {
      $.ajax({
        url: '/route/data.user.php',
        method: 'post',
        data: {tag: 'bili', type: 'deladmin', id: id},
          success: function (data) {
            console.log(data);
            data = JSON.parse(data);
            if (parseInt(data.status) == 1) {
              console.log(data);
              alert('删除成功');
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
  render () {
    var delAdmin = this.delAdmin;
    return (
      <div className='bili-adminall'>
        <h3><Link to='/user/admin/add'>新增管理员</Link></h3>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>ID</th>
              <th>独立ID</th>
              <th>用户类型</th>
              <th>用户名</th>
              <th>邮箱</th>
              <th>电话</th>
              <th>注册时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.adminall.map(function (item, index) {
                return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.userid}</td>
                        <td>{item.usertype}</td>
                        <td>{item.uname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.logintime}</td>
                        <td><a data-id={item.id} onClick={delAdmin} href='javascript:void(0)'>删除</a></td>
                        </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

class Admin extends React.Component {
  render () {
    return (
      <div className='bili-admin'>
        {this.props.children ? this.props.children : <AdminAll />}
      </div>
    )
  }
}

export default Admin;
