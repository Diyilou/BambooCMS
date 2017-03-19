import React from 'react';
import {Router, Route, Link} from 'react-router';

class SystemNav extends React.Component {
  render () {
    return (
      <ul className='bili-modulenav'>
        <li><Link to='/system/basic'>基本参数</Link></li>
        <li><Link to='/system/sql'>数据库</Link></li>
        <li><Link to='/system/doc'>帮助文档</Link></li>
      </ul>
    )
  }
}

class System extends React.Component {
  render () {
    return (
      <div className='bili-system'>
        <SystemNav />
      </div>
    )
  }
}

export default System;
