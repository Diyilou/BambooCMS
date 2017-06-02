import React from 'react';
import {Router, Route, Link} from 'react-router';

class Default extends React.Component {
  constructor () {
    super();
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className='business-default'>
        <h1><span>{this.props.businessData.tname}</span></h1>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th colSpan='2'>基本信息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>管理员</td><td>{this.props.businessData.uname}</td>
            </tr>
            <tr>
              <td>电话</td><td>{this.props.businessData.phone}</td>
            </tr>
            <tr>
              <td>邮箱</td><td>{this.props.businessData.email}</td>
            </tr>
            <tr>
              <td>商家ID</td><td>{this.props.businessData.userid}</td>
            </tr>
            <tr>
              <td>注册日期</td><td>{Date(this.props.businessData.jointime)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Default;
