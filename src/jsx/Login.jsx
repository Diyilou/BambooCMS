import React from 'react';
import {Router, Route, Link} from 'react-router';

class Login extends React.Component {
  constructor () {
    super();
    this.login = this.login.bind(this);
  }

  login (event) {
    var name = this.refs.username.value.toString().trim();
    var pw = this.refs.userpw.value.toString().trim();


    if (name === '' || name === null || name === undefined) {
      alert('用户名无效!');
      return;
    }

    if (pw === '' || pw === null || pw === undefined) {
      alert('密码无效');
      return;
    }

    console.log(name);

    $.ajax({
        url: '/route/data.user.php',
        method: 'post',
        data: {tag: 'bili', type: 'login', 'name': name, 'pw': pw},
        success: function (data) {

          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            window.localStorage.setItem('biliuserid', data.userid);
            window.location.href = '/biliadmin/';
            return;
          }

          alert(data.msg);
        },
        error: function (err) {
            console.log(err);
        }
    });
  }

  render () {
    var login = this.login;
    return (
      <div className='login-status'>
        <input type='text' placeholder='User Name' ref='username'/>
        <input type='password' placeholder='Password' ref='userpw'/>
        <a href='javascript:void(0)' onClick={login}>Login</a>
      </div>
    )
  }
}

export default Login;
