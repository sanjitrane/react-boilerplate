import {
    REQUEST_ACTIONS,
    RECEIVE_ACTIONS
  } from "../actions/types";
  
  const INITIAL_STATE = {
    data: [],
    isFetching: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case REQUEST_ACTIONS: {
        return { ...state, isFetching: true };
      }
      case RECEIVE_ACTIONS: {
        return { ...state, isFetching: false, data: action.payload };
      }
      default:
        return state;
    }
  };