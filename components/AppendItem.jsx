import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class AppendItem extends React.Component{
  static propTypes = {
    item: PropTypes.object.isRequired
  }
  render() {
    return(
      <div>
        <form role = "form" >
            <div className="row" style={{padding:5}}>
                <label className="col-lg-4 pull-left">CSS Field</label>
                <input className="col-lg-6 pull-left" type="text" name="css-input" id="css-input"  value={this.props.item.css} />
            </div>
            <div className="row" style={{padding:5}}>
                <label className="col-lg-4 pull-left">Attribute Field</label>
                <input className="col-lg-6 pull-left" type="text" name="attr-input" id="attr-input"  value={this.props.item.attr} />
            </div>
        </form>
      </div>
    );
  }
}
