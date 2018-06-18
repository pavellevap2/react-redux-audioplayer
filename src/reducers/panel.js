import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  SELECT_PAUSE,
  SELECT_TRECK,
  SELECT_NEXT_TRECK,
  SELECT_PREV_TRECK,
  CHANGE_VOLUME,
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

const volume = handleAction(
  CHANGE_VOLUME,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  0.5,
)

export default combineReducers({
  pause,
  volume,
})
