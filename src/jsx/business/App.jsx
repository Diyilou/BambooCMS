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
          <li><a target='_blank' href={this.props.basehost}>网站主页</a></li>
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
        <li><Link to='/column/all'><i className='ion-android-folder-open'></i>栏目管理</Link></li>
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
      basicData: {},
      username: ''
    }
    this.getBasicData = this.getBasicData.bind(this);
    this.getAmindName = this.getAmindName.bind(this);
  }

  componentDidMount () {
    var getBasicData = this.getBasicData;
    var getAmindName = this.getAmindName;

    var userid = window.localStorage.getItem('businessuserid');
    $.ajax({
      url: '/route/data.user.php',
      method: 'post',
      data: {tag: 'bili', type: 'getmuserfromid', uid: userid},
        success: function (data) {
          data = JSON.parse(data);
          console.log(data);
          if (parseInt(data.status) == 1) {
            getAmindName(data.data);
          } else {
            alert('获得商家用户名失败');
            window.location.href = '/business/';
            return;
          }
        },
        error: function (err) {
          console.log(err);
        }
    });

    $.ajax({
      url: '/route/data.system.php',
      method: 'post',
      data: {tag: 'bili', type: 'getbasic'},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            getBasicData(data.data);
          } else {
            alert('获取系统配置信息失败');
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  getAmindName (data) {
    console.log(data);
    window.localStorage.setItem('biliusername', data.uname);
    this.setState({
      username: data.uname
    });
  }

  getBasicData (data) {
    console.log(data);
    this.setState({
      basicData: data
    });
  }

  render () {
    return (
      <div className='business-container'>
        <Nav basehost={this.state.basicData.basehost} username={this.state.username} />
        <Slide />
        <div className='business-content'>
          {this.props.children == null ? <Default basicData={this.state.basicData}/> : this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
