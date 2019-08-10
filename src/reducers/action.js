import {
    REQUEST_ACTION,
    RECEIVE_ACTION
  } from "../actions/types";
  
  const INITIAL_STATE = {
    isFetching:false
  };
  
  export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
      case REQUEST_ACTION: {
        return { ...state, isFetching: true };
      }
      case RECEIVE_ACTION: {
        return { ...state, isFetching: false, ...action.payload };
      }
      default: return state;
    }
  };