import React from 'react';
import {Router, Route, Link} from 'react-router';

class TemplateUpdate extends React.Component {
  constructor () {
    super();
    this.initTeplate = this.initTeplate.bind(this);
    this.saveTemplate = this.saveTemplate.bind(this);
  }

  componentDidMount () {
    var tname = window.localStorage.getItem('templatename');
    var initTeplate = this.initTeplate;
    $.ajax({
      url: '/route/data.templets.php',
      method: 'post',
      data: {tag: 'bili', type: 'gettempletscontent', name: tname},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            initTeplate(data.data);
          } else {
            alert(data.msg);
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  initTeplate (data) {
    this.refs.tcontent.value = data;
  }

  saveTemplate () {
    var data = this.refs.tcontent.value;
    var tname = window.localStorage.getItem('templatename');
    $.ajax({
      url: '/route/data.templets.php',
      method: 'post',
      data: {tag: 'bili', type: 'updatetemplate', con: data, name: tname},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            console.log(data);
            window.location.href = '/biliadmin/#/template';
          } else {
            alert(data.msg);
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  render () {
    var saveTemplate = this.saveTemplate;
    return (
      <div className='bili-template-update'>
          <h3>修改模板<span>{window.localStorage.getItem('templatename')}</span></h3>
          <textarea ref='tcontent'></textarea>
          <div><a onClick={saveTemplate} href='javascript:void(0)'>确定</a></div>
      </div>
    )
  }
}

export default TemplateUpdate;
