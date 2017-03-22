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
    window.location.href = '/biliadmin/';
  }

  render () {
    var off = this.off;
    return (
      <nav className='bili-nav'>
        <h1><a href='/biliadmin'>BiliCMS</a></h1>
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
      <ul className='bili-slide'>
        <li><Link to='/column/all'><i className='ion-ios-infinite'></i>栏目</Link></li>
        <li><Link to='/module'><i className='ion-model-s'></i>模块</Link></li>
        <li><Link to='/template'><i className='ion-android-folder-open'></i>模板</Link></li>
        <li><Link to='/user/admin'><i className='ion-ios-person'></i>用户</Link></li>
        <li><Link to='/system/basic'><i className='ion-android-settings'></i>系统</Link></li>
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

    var userid = window.localStorage.getItem('biliuserid');
    $.ajax({
      url: '/route/data.user.php',
      method: 'post',
      data: {tag: 'bili', type: 'getuserfromid', uid: userid},
        success: function (data) {
          data = JSON.parse(data);
          console.log(data);
          if (parseInt(data.status) == 1) {
            getAmindName(data.data);
          } else {
            alert('获得管理员用户名失败');
            window.location.href = '/biliadmin/';
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
      <div className='bili-container'>
        <Nav basehost={this.state.basicData.basehost} username={this.state.username} />
        <Slide />
        <div className='bili-content'>
          {this.props.children == null ? <Default basicData={this.state.basicData}/> : this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
