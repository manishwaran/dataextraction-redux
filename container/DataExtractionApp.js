import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as DataExtractActions from '../actions/dataExtractAction'
import UrlBox from '../components/UrlBox.jsx';
import ResultBox from '../components/ResultBox.jsx';
import LeftPanel from '../components/LeftPanel.jsx';
import Iframe from '../components/Iframe.jsx';
import AppendItem from '../components/AppendItem.jsx';
import cssPath from '../components/utils/css-path'

@connect(state => {
  const { jsonInput, jsonOutput, url, rawData } = state;
  return {
    jsonOutput,
    jsonInput,
    url,
    rawData
  }
})

export default class DataExtractionApp extends React.Component{

  static propTypes = {
    url: PropTypes.string.isRequired,
    rawData: PropTypes.string.isRequired,
    jsonInput: PropTypes.array.isRequired,
    jsonOutput: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render(){
    console.log("this.props.jsonOutput");
    console.log(this.props.jsonOutput);
    const { jsonOutput, jsonInput, rawData, url, dispatch } = this.props;

    const actions = bindActionCreators(DataExtractActions, dispatch);
    return(
       <div>
        <div className="row">
          <UrlBox load = { actions.loadUrl } val = { url } />
        </div>
        <div className="row" style={{padding:25}}>
          <div  className="col col-lg-7" >``
            <div className="row">
              <Iframe onSelect={actions.iframeClick}/>
            </div>
            <div className="row">
              <ResultBox result={jsonOutput}/>
            </div>
          </div>
          <div className="col col-lg-4">
            <LeftPanel jsonData={jsonInput} actions={actions} />
          </div>
        </div>
       </div>
     );
   }
}
