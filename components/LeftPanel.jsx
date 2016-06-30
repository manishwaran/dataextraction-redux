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

  addFunction() {
    this.props.actions.add();
  }

  executeFunction() {
    console.log("this.props.jsonData");
    console.log(this.props.jsonData);
    this.props.actions.execute(this.props.jsonData)
    console.log(this.props.jsonData);
  }

  clearFunction() {
    this.props.actions.clear();
  }

  render(){
    var _this=this
    return(
      <div>
        <button className="btn btn-default" onClick={this.addFunction.bind(this)} style={{margin:10}}> + </button>
        <button className="btn btn-primary" onClick={this.executeFunction.bind(this)} style={{margin:10}}> Execute </button>
        <button className="btn btn-primary" onClick={this.clearFunction.bind(this)} style={{margin:10}}> Clear </button>
        {
          this.props.jsonData.map(function(item, i) {
            return(
              <div id={"append"+i} className="append-box">
                  <div id='close' style={{float: 'right',color:'red'}} onClick={() => _this.props.actions.close(i)} >close</div>
                  <AppendItem item={item} />
              </div>
            )
          })
        }
      </div>
    );
  }
}
