import React from 'react';
import {Router, Route, Link} from 'react-router';

class Template extends React.Component {
  render () {
    return (
      <div className='bili-template'>
        <h3><span>所有模板</span><Link to='/template/add'>新增模板</Link></h3>
        <table cellSpacing='0'>
          <thead>
            <tr>
              <th>文件名</th>
              <th>描述</th>
              <th>修改时间</th>
              <th>操作</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default Template;
