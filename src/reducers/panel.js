import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  SELECT_PAUSE,
  CHANGE_VOLUME,
  SELECT_TIME,
  UPDATE_SEARCH_INPUT,
  SELECT_TRACK,
  SELECT_CURRENT_TRACK,
  SELECT_NEXT_TRACK,
  SELECT_PREV_TRACK,
  GET_TRACK_DURRATION,
  GET_TRACK_CURRENT_TIME,
} from '../actions'

const pause = handleActions(
  {
    [SELECT_PAUSE]: R.not(),
    [SELECT_TRACK]: R.T,
    [SELECT_CURRENT_TRACK]: R.not(),
    [SELECT_NEXT_TRACK]: R.T,
    [SELECT_PREV_TRACK]: R.T,
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
  [GET_TRACK_DURRATION],
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  0,
)

const currentTime = handleAction(
  [GET_TRACK_CURRENT_TIME],
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  0,
)

export const selectedTime = handleActions(
  {
    [SELECT_TIME]: R.pipe(
      R.nthArg(1),
      R.prop('payload'),
    ),
    [SELECT_NEXT_TRACK]: R.always(0),
    [SELECT_PREV_TRACK]: R.always(0),
    [SELECT_TRACK]: R.always(0),
  },
  0,
)

const searchInput = handleAction(
  UPDATE_SEARCH_INPUT,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

export default combineReducers({
  pause,
  volume,
  duration,
  currentTime,
  selectedTime,
  searchInput,
})
