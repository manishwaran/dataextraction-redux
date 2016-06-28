import * as types from '../constants/actionTypes';

const initialState = {
  url: "",
  rawData: "",
  jsonInput: [
    {
      css: "css1",
      attr: "attr1"
    },
    {
      css: "css2",
      attr: "attr2"
    }
  ],
  jsonOutput: [
    {
      val: "v1"
    },
    {
      val: "v2"
    }
  ]
}

export default function dataExtract(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_URL:
      fetch('/loadwebpage', {
        method: 'post',
        body: JSON.stringify({
          url: action.url
        })
      }).then(response => {
        debugger;
        return {
          ...state,
          url: action.url,
          rawData: response.text()
        };
        // $('#myIframe').contents().find('body').html();
      })
      // $.post("/loadwebpage",{"url":state.url},function(data, status){
      //   $('#myIframe').contents().find('body').html(data);
      //
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
      fetch('/getresult', {
        method: 'post',
        body: {
          data: JSON.stringify(state.jsonInput)
        }
      }).then(response => {
        return {
          ...state,
          jsonOutput: response.json()
        }
        // return Object.assign({},state,{jsonOutput: data});
      })
      // $.post("/getresult",{data: JSON.stringify(state.jsonInput)},function(data, status){
      // });
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
