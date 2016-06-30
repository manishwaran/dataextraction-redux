import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

import DataExtractionApp from './DataExtractionApp'

// const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <DataExtractionApp />
        </Provider>

      </div>
    );
  }
}
