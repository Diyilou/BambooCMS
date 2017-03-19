import React from 'react';
import {Router, Route, Link} from 'react-router';

class ModuleNav extends React.Component {
  render () {
    return (
      <ul className='bili-modulenav'>
        <li><Link to='/module/adv'>广告管理</Link></li>
        <li><Link to='/module/flink'>友情链接</Link></li>
        <li><Link to='/module/comment'>评论管理</Link></li>
        <li><Link to='/module/data'>数据统计</Link></li>
      </ul>
    )
  }
}

class Module extends React.Component {
  render () {
    return (
      <div className='bili-module'>
        <ModuleNav />
      </div>
    )
  }
}

export default Module;
