import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import AppendItem from './AppendItem.jsx'

export default class LeftPanel extends React.Component{
  constructor(props, context) {
    super(props, context);
  }
  static propTypes = {
    jsonData: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  render(){
    var _this = this;
    var createDivision = function(item,i) {
      return(
        <div id={"append"+i} className="append-box">
            <div id='close' style={{float: 'right',color:'red'}} onClick={() => _this.props.actions.close.bind(null,i)} >close</div>
            <AppendItem item={item} />
        </div>
      );
    };
    return(
      <div>
        <button className="btn btn-default" onClick={this.props.actions.add} style={{margin:10}}> + </button>
        <button className="btn btn-primary" onClick={this.props.actions.execute} style={{margin:10}}> Execute </button>
        <button className="btn btn-primary" onClick={this.props.actions.clear} style={{margin:10}}> Clear </button>
        {this.props.jsonData.map(createDivision.bind(this))}
      </div>
    );
  }
}
