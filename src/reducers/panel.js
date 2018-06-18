import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  SELECT_PAUSE,
  SELECT_TRECK,
  SELECT_NEXT_TRECK,
  SELECT_PREV_TRECK,
  CHANGE_VOLUME,
  GET_TRECK_DURRATION,
  GET_TRECK_CURRENT_TIME,
  SELECT_CURRENT_TRECK,
} from '../actions'

const pause = handleActions(
  {
    [SELECT_PAUSE]: R.not(),
    [SELECT_TRECK]: R.T,
    [SELECT_CURRENT_TRECK]: R.not(),
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

const duration = handleAction(
  [GET_TRECK_DURRATION],
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  0,
)

const currentTime = handleAction(
  [GET_TRECK_CURRENT_TIME],
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  0,
)

export default combineReducers({
  pause,
  volume,
  duration,
  currentTime,
})
