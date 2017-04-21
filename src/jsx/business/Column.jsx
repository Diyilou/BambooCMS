import React from 'react';
import {Router, Route, Link} from 'react-router';

class ColumnSlide extends React.Component {
  columnControl () {
    // 缓存栏目的操作方式
    window.localStorage.setItem('columncontrols', JSON.stringify({'id':0,'type':'addtop'}));
  }
  render () {
    var columnControl = this.columnControl;
    return (
      <ul className='business-columnslide'>
        <li>
          <span>栏目管理</span>
          <ul>
            <li><Link to='/column/all'>所有栏目</Link></li>
            <li><Link onClick={columnControl} to='/column/addtop'>增加栏目</Link></li>
          </ul>
        </li>
      </ul>
    )
  }
}

class Column extends React.Component {
  render () {
    return (
      <div className='business-column'>
        <ColumnSlide />
        <div className='business-columncontent'>
        {this.props.children}
        </div>
      </div>
    )
  }
}

export default Column;
