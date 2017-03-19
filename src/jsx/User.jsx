import React from 'react';
import {Router, Route, Link} from 'react-router';

class UserNav extends React.Component {
  render () {
    return (
      <ul className='bili-usernav'>
        <li><Link to='/user/admin'>管理员</Link></li>
        <li><Link to='/user/member'>普通会员</Link></li>
      </ul>
    )
  }
}

class User extends React.Component {
  render () {
    return (
      <div className='bili-user'>
        <UserNav />
        {this.props.children}
      </div>
    )
  }
}

export default User;
