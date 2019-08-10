import { combineReducers } from 'redux';
import Actions from "./actions";
import Action from "./action";

export default combineReducers({
  actions: Actions,
  action: Action
});