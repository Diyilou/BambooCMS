import React from 'react';
import {Router, Route, Link} from 'react-router';

class Message extends React.Component {
  constructor () {
    super();
    this.state = {
      basicdata: ''
    }
    this.createSystemBasic = this.createSystemBasic.bind(this);
    this.getBasicData = this.getBasicData.bind(this);
  }

  componentDidMount () {
    var getBasicData = this.getBasicData;

    var userid = window.localStorage.getItem('businessuserid');
    $.ajax({
      url: '/route/data.user.php',
      method: 'post',
      data: {tag: 'bili', type: 'getmuserfromid', uid: userid},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            getBasicData(data.data);
          } else {
            alert('获得商家用户名失败');
            window.localStorage.clear();
            window.location.href = '/business/';
            return;
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  getBasicData (data) {
    this.refs.tname.value = data.tname;
    this.refs.uname.value = data.uname;
    this.refs.phone.value = data.phone;
    this.refs.email.value = data.email;
  }

  createSystemBasic () {

    if (this.refs.tname.value === null || this.refs.tname.value === '') {
      alert('用户名不能为空');
      event.preventDefault();
      return false;
    }
    if (this.refs.uname.value === null || this.refs.uname.value === '') {
      alert('用户名不能为空');
      event.preventDefault();
      return false;
    }
    if (this.refs.phone.value === null || this.refs.phone.value === '') {
      alert('电话不能为空');
      event.preventDefault();
      return false;
    }
    if (this.refs.email.value === null || this.refs.email.value === '') {
      alert('邮箱不能为空');
      event.preventDefault();
      return false;
    }

    var userData = {
      tname: this.refs.tname.value,
      uname: this.refs.uname.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      userid : window.localStorage.getItem('businessuserid')
    }

    $.ajax({
      url: '/route/data.user.php',
      method: 'post',
      data: {tag: 'bili', type: 'updatemember', 'data': userData},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            alert('修改成功');
          } else {
            alert(data.msg);
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }
  render () {
    var createSystemBasic = this.createSystemBasic;
    return (
      <div className='bili-system-basic'>
        <h1>商家信息修改</h1>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>参数</th>
              <th>参数值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>商家名*</td>
              <td><input type='text' ref='tname'/></td>
            </tr>
            <tr>
              <td>用户名*</td>
              <td><input type='text' ref='uname'/></td>
            </tr>
            <tr>
              <td>电话*</td>
              <td><input type='text' ref='phone'/></td>
            </tr>
            <tr>
              <td>邮箱*</td>
              <td><input type='text' ref='email'/></td>
            </tr>
          </tbody>
        </table>
        <a onClick={createSystemBasic} href='javascript:void(0)'>确认</a>
      </div>
    )
  }
}

export default Message;
