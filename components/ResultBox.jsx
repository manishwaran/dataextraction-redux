import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class ResultBox extends React.Component{
  constructor(props) {
    super(props);
  }
  static propTypes = {
    result: PropTypes.array.isRequired
  }
  render() {
    console.log(this.props);
    var createDivision = function(item,i) {
      return(
        <div>
        <h4>
          <div className="badge" style={{padding:10}}>Result :{i+1}</div>
          <div className="well"> {item.val} </div>
        </h4>
        </div>
      );
    };
    return (
      <div>
        <h2>
          <label className="label label-success">Result : </label>
        </h2>
        <div className="row panel panel-heading" id="result">
          {this.props.result.map(createDivision)}
        </div>
      </div>
    );
  }
}
