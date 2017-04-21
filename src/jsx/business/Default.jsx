import React from 'react';
import {Router, Route, Link} from 'react-router';

class Default extends React.Component {
  constructor () {
    super();
    this.state = {
      tongji: {}
    }
    this.getBasicData = this.getBasicData.bind(this);
  }

  componentDidMount () {
    var getBasicData = this.getBasicData;
    $.ajax({
      url: '/route/data.get.php',
      method: 'post',
      data: {tag: 'bili', type: 'getindexdata'},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status, 10) === 1) {
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

  getBasicData (data) {
    console.log(data);
    this.setState({
      tongji: data
    });
  }

  render () {
    return (
      <div className='business-default'>
        <h1><span>{this.props.basicData.webname}</span><a href={this.props.basicData.basehost} target='_blank'>{this.props.basicData.basehost}</a></h1>
        <p>{this.props.basicData.description}</p>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th colSpan='2'>信息统计</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>管理员</td><td>{this.state.tongji.admin}</td>
            </tr>
            <tr>
              <td>会员</td><td>{this.state.tongji.member}</td>
            </tr>
            <tr>
              <td>文章</td><td>{this.state.tongji.article}</td>
            </tr>
            <tr>
              <td>商品</td><td>{this.state.tongji.shop}</td>
            </tr>
            <tr>
              <td>图片</td><td>{this.state.tongji.photo}</td>
            </tr>
            <tr>
              <td>视频</td><td>{this.state.tongji.video}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Default;
