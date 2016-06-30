import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import cssPath from './utils/css-path'

class Iframe extends React.Component{
  constructor(props, context){
    super(props, context)
    this.onFrameLoaded=this.onFrameLoaded.bind(this)
  }
  static propTypes = {
    rawData: PropTypes.string,
    onSelect: PropTypes.func.isRequired
  }
  onFrameLoaded(frame){
    var that = this;
      $("#myIframe").contents().click(function(e){
        e.preventDefault();
        var output={}
        var cssSelector=cssPath(e.target, $);
        var uniqueCssSelector=cssSelector
        var idAry=e.target.getAttribute("id");
        var classAry=e.target.getAttribute("class");
        var str="";
        var flag=false
        if(idAry != null ){
          str+=idAry.toString();
          flag=true;
        }
        if(classAry != null ){
          if(flag)
            str+=","
          str+=classAry.toString();
        }
        output = {
          "css" : uniqueCssSelector,
          "attr": str
        }
        that.props.onSelect(output);
        // alert("iframe")
        // console.log(output);
        // console.log(frame);
      });
    }
    render() {
      return (
        <iframe ref={this.onFrameLoaded} className="col col-lg-12" height="700px" allowfullscreen="" id="myIframe" sandbox="allow-same-origin allow-scripts"></iframe>
      );
    }
}

export default Iframe;
