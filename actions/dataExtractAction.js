import * as types from '../constants/actionTypes';

export function loadUrl(url) {
  return {
    type: types.LOAD_URL,
    url
  }
}

export function add() {
  return {
    type: types.ADD
  }
}

export function iframeClick(obj) {
  return {
    type: types.IFRAME_CLICK,
    obj
  }
}

export function execute(jsonInput) {
  return dispatch => fetch('/getresult', {
    method: 'post',
    body: JSON.stringify({
      data: jsonInput
    })
  })
  .then(response => response.json())
  .then(json =>
    dispatch({
      type: types.EXECUTE,
      json
    })
  )

  // return {
  //   type: types.EXECUTE,
  //   jsonInput
  // }
}

export function clear() {
  return {
    type: types.CLEAR
  }
}

export function close(index) {
  return {
    type: types.CLOSE,
    index
  }
}
