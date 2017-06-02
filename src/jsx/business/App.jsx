import React from 'react';
import {Router, Route, Link} from 'react-router';
import Default from './Default.jsx';

class Nav extends React.Component {
  constructor () {
    super();
    this.off = this.off.bind(this);
  }

  off (event) {
    window.localStorage.clear();
    window.location.href = '/business/';
  }

  render () {
    var off = this.off;
    return (
      <nav className='business-nav'>
        <h1><a href='/business'>半本手帐-商家后台</a></h1>
        <ul>
          <li><a onClick={off} href='javascript:void(0)'>注销</a></li>
          <li><span>{this.props.username}</span></li>
        </ul>
      </nav>
    )
  }
}

class Slide extends React.Component {
  render () {
    return (
      <ul className='business-slide'>
        <li><Link to='/shop'><i className='ion-android-clipboard'></i>商品管理</Link></li>
        <li><Link to='/message'><i className='ion-android-person'></i>商家信息</Link></li>
      </ul>
    )
  }
}
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      username: '',
      businessData: {}
    }
    this.getAmindName = this.getAmindName.bind(this);
  }

  componentDidMount () {
    var getAmindName = this.getAmindName;

    var userid = window.localStorage.getItem('businessuserid');
    $.ajax({
      url: '/route/data.user.php',
      method: 'post',
      data: {tag: 'bili', type: 'getmuserfromid', uid: userid},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            getAmindName(data.data);
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

  getAmindName (data) {
    window.localStorage.setItem('biliusername', data.uname);
    this.setState({
      username: data.uname,
      businessData: data
    });
  }

  render () {
    return (
      <div className='business-container'>
        <Nav username={this.state.username} />
        <Slide />
        <div className='business-content'>
          {this.props.children == null ? <Default businessData={this.state.businessData}/> : this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
