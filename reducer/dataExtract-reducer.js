import * as types from '../constants/actionTypes';

const initialState = {
  url: "",
  rawData: "",
  jsonInput: [],
  jsonOutput: []
}

export default function dataExtract(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_URL:
      // console.log(state)
      // console.log(action)
      // fetch('/loadwebpage', {
      //   method: 'post',
      //   body: JSON.stringify({
      //     url: action.url
      //   })
      // }).then(response => {
      //   return {
      //     ...state,
      //     url: action.url,
      //     rawData: response.text()
      //   };
      //   // $('#myIframe').contents().find('body').html();
      // })
      $.post("/loadwebpage",{"url":action.url},function(data, status){
        $('#myIframe').contents().find('body').html(data);
      })
      return {
        ...state,
        url: action.url
      };
      break;
    case types.ADD:
      var obj={};
      obj.css="";
      obj.attr="";
      return {
        ...state,
        jsonInput: state.jsonInput.concat(obj)
      };
    case types.IFRAME_CLICK:
      return{
        ...state,
        jsonInput: state.jsonInput.slice(0,Object.keys(state.jsonInput).length-1).concat(action.obj)
      };
    case types.EXECUTE:
        return {
          ...state,
          jsonOutput: action.json
        }
    case types.CLEAR:
      return{
        ...state,
        jsonInput: [],
        jsonOutput: []
      };
    case types.CLOSE:
      return{
        ...state,
        jsonInput: state.jsonInput.slice(0,action.index)
        .concat(state.jsonInput.slice(action.index+1,Object.keys(state.jsonInput).length))
      };

    default:
      return state;
  }
}
