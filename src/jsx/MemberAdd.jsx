import React from 'react';
import {Router, Route, Link} from 'react-router';

class MemberAdd extends React.Component {

  constructor () {
    super();
    this.addMember = this.addMember.bind(this);
  }
  addMember () {
    if (this.refs.uname.value === null || this.refs.uname.value === '') {
      alert('用户名不能为空');
      event.preventDefault();
      return false;
    }
    if (this.refs.pwd.value === null || this.refs.pwd.value === '') {
      alert('密码不能为空');
      event.preventDefault();
      return false;
    }
    if (this.refs.email.value === null || this.refs.email.value === '') {
      alert('邮箱不能为空');
      event.preventDefault();
      return false;
    }
    var userData = {
      usertype: 0, // 普通会员，如果为0，则为商家
      uname: this.refs.uname.value,
      pwd: this.refs.pwd.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value
    }
    console.log(userData);

    $.ajax({
      url: '/route/data.user.php',
      method: 'post',
      data: {tag: 'bili', type: 'addmember', 'data': userData},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
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
  render () {
    var addMember = this.addMember;
    return (
      <div className='bili-adminadd'>
        <h2>添加会员</h2>
        <h3><span>用户名*</span><input ref='uname' type='text' /></h3>
        <h3><span>密码*</span><input ref='pwd' type='password' /></h3>
        <h3><span>邮箱*</span><input ref='email' type='text' /></h3>
        <h3><span>电话</span><input ref='phone' type='text' /></h3>
        <div>
          <Link to='/user/member' onClick={addMember}>确认</Link>
        </div>
      </div>
    )
  }
}

export default MemberAdd;
