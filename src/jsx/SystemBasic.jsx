import React from 'react';
import {Router, Route, Link} from 'react-router';

class SystemBasic extends React.Component {
  constructor () {
    super();
    this.state = {
      basicdata: ''
    }
    this.createSystemBasic = this.createSystemBasic.bind(this);
    this.getBasicData = this.getBasicData.bind(this);
  }

  componentDidMount () {
    var getBasicData = this.getBasicData;

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

  getBasicData (data) {
    this.refs.basehost.value = data.basehost;
    this.refs.webname.value = data.webname;
    this.refs.arcdir.value = data.arcdir;
    this.refs.powerby.value = data.powerby;
    this.refs.keywords.value = data.keywords;
    this.refs.description.value = data.description;
    this.refs.beian.value = data.beian;
  }

  createSystemBasic () {

    var systemBasicData = {
      basehost: this.refs.basehost.value,
      webname: this.refs.webname.value,
      arcdir: this.refs.arcdir.value,
      powerby: this.refs.powerby.value,
      keywords : this.refs.keywords.value,
      description: this.refs.description.value,
      beian: this.refs.beian.value
    }

    $.ajax({
      url: '/route/data.system.php',
      method: 'post',
      data: {tag: 'bili', type: 'setbasic', 'data': systemBasicData},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            alert('修改成功');
          } else {
            alert('修改失败，请刷新后重试');
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }
  render () {
    var createSystemBasic = this.createSystemBasic;
    return (
      <div className='bili-system-basic'>
        <h1>BiliCMS 系统基本参数配置</h1>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>参数</th>
              <th>参数值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>站点根网址</td>
              <td><input type='text' ref='basehost'/></td>
            </tr>
            <tr>
              <td>网站名称</td>
              <td><input type='text' ref='webname'/></td>
            </tr>
            <tr>
              <td>图片/上传文件默认路径</td>
              <td><input type='text' ref='arcdir'/></td>
            </tr>
            <tr>
              <td>网站版权信息</td>
              <td><textarea ref='powerby'></textarea></td>
            </tr>
            <tr>
              <td>站点关键字</td>
              <td><input type='text' ref='keywords'/></td>
            </tr>
            <tr>
              <td>站点描述</td>
              <td><textarea ref='description'></textarea></td>
            </tr>
            <tr>
              <td>备案</td>
              <td><input type='text' ref='beian'/></td>
            </tr>
          </tbody>
        </table>
        <a onClick={createSystemBasic} href='javascript:void(0)'>确认</a>
      </div>
    )
  }
}

export default SystemBasic;
