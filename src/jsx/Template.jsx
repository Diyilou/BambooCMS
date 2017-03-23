import React from 'react';
import {Router, Route, Link} from 'react-router';

class Default extends React.Component {

  constructor () {
    super();
    this.updateTemplate = this.updateTemplate.bind(this);
  }

  updateTemplate (event) {
    var ele = event.target || event.srcElement;
    var name = ele.getAttribute('data-name');

    window.localStorage.setItem('templatename', name);
  }
  render () {
    var updateTemplate = this.updateTemplate;
    return <div className='bili-template'>
            <h3><span>所有模板</span><Link to='/template/add'>新增模板</Link></h3>
            <table cellSpacing='0'>
              <thead>
                <tr>
                  <th>文件名</th>
                  <th>修改时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.templets.map(function (item, index) {
                    return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.mtime}</td>
                            <td><Link data-name={item.name} onClick={updateTemplate} to='/template/update'>修改</Link></td>
                          </tr>
                  })
                }
              </tbody>
            </table>
          </div>
  }
}

class Template extends React.Component {
  constructor () {
    super();

    this.state = {
      templets: []
    }

    this.showTemplets = this.showTemplets.bind(this);
  }

  componentDidMount () {
    var showTemplets = this.showTemplets;
    $.ajax({
      url: '/route/data.templets.php',
      method: 'post',
      data: {tag: 'bili', type: 'gettemplets'},
        success: function (data) {
          data = JSON.parse(data);
          if (parseInt(data.status) == 1) {
            showTemplets(data.data);
          } else {
            alert(data.msg);
          }
        },
        error: function (err) {
          console.log(err);
        }
    });
  }

  showTemplets (data) {
    this.setState({
      templets: data
    });
  }

  render () {
    return (
      <div>
        {this.props.children ? this.props.children : <Default templets={this.state.templets}/>}
      </div>
    )
  }
}

export default Template;
