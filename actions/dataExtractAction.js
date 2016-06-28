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
  return {
    type: types.EXECUTE,
    jsonInput
  }
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
