import axios from 'axios';

import {
  ROOT,
  REQUEST_ACTIONS,
  RECEIVE_ACTIONS,
  REQUEST_ACTION,
  RECEIVE_ACTION
} from "./types";


export function fetchActions(){
  return (dispatch)=>axios.get(`${ROOT}`)
    .then((res)=>{
      dispatch({type: RECEIVE_ACTIONS, payload: res.data})
    })
    .catch((error)=>{
      dispatch({type: RECEIVE_ACTIONS, payload:[]})
    })
  
}

export function fetchAction(id){
  return (dispatch)=>{
    dispatch({type: REQUEST_ACTION});
    axios.get(`${ROOT}?id=${id}`)
    .then((res)=>{
      dispatch({type: RECEIVE_ACTION, payload: res.data[0]})
    })
    .catch((error)=>{
      dispatch({type: RECEIVE_ACTION, payload:[]})
    })
  }
}