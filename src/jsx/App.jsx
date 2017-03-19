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
          <li><a href='/'>网站主页</a></li>
          <li><a onClick={off} href='javascript:void(0)'>注销</a></li>
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
        <li><Link to='/system'><i className='ion-android-settings'></i>系统</Link></li>
      </ul>
    )
  }
}
class App extends React.Component {
  render () {
    return (
      <div className='bili-container'>
        <Nav />
        <Slide />
        <div className='bili-content'>
          {this.props.children == null ? <Default/> : this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
