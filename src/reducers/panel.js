import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  SELECT_PAUSE,
  SELECT_TRECK,
  SELECT_NEXT_TRECK,
  SELECT_PREV_TRECK,
} from '../actions'

const pause = handleActions(
  {
    [SELECT_PAUSE]: R.not(),
    [SELECT_TRECK]: R.T,
    [SELECT_NEXT_TRECK]: R.T,
    [SELECT_PREV_TRECK]: R.T,
  },
  false,
)

export default combineReducers({
  pause,
})
