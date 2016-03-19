import { REQUEST_CHARACTERS } from './actions/index'
import { combineReducers } from 'redux'

const intialState = [];



function characters(state = intialState, action) {

  if (action.type === 'REQUEST_CHARACTERS') {
    return action;
  }

  return state;
};


const rootReducer = combineReducers({
	characters
})

export default rootReducer