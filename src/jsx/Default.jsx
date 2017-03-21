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
      <div>
        <h1><span>{this.props.basicData.webname}</span><a href={this.props.basicData.basehost} target='_blank'>{this.props.basicData.basehost}</a></h1>
        <h3>{this.props.basicData.description}</h3>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>信息统计</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Default;
