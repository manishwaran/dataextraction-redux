import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import * as reducers from '../reducer';

import DataExtractionApp from './DataExtractionApp'

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <DataExtractionApp /> }
        </Provider>

      </div>
    );
  }
}
