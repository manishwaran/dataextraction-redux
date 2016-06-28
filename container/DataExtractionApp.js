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

@connect(state => ({
  dataExtractState: state.dataExtractState
}))
export default class DataExtractionApp extends React.Component{

  static propTypes = {
    url: PropTypes.string.isRequired,
    rawData: PropTypes.string.isRequired,
    jsonInput: PropTypes.object.isRequired,
    jsonOutput: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render(){
    console.log('this.props')
    console.log(this.props)
    // debugger;
    const { dataExtractState, dispatch } = this.props;

    const actions = bindActionCreators(DataExtractActions, dispatch);
    return(
       <div>
        <div className="row">
          <UrlBox load = { actions.loadUrl } val = { dataExtractState.url } />
        </div>
        <div className="row" style={{padding:25}}>
          <div  className="col col-lg-7" >``
            <div className="row">
              <Iframe onSelect={actions.iframeClick}/>
            </div>
            <div className="row">
              <ResultBox result={dataExtractState.jsonOutput}/>
            </div>
          </div>
          <div className="col col-lg-4">
            <LeftPanel jsonData={dataExtractState.jsonInput} actions={actions} />
          </div>
        </div>
       </div>
     );
   }
}
