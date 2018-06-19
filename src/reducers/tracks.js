import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  GET_TRACKS_REQUEST,
  GET_TRACKS_SUCCESS,
  SELECT_NEXT_TRACK,
  SELECT_PREV_TRACK,
  SELECT_TRACK,
} from '../actions'

const tracks = handleAction(
  GET_TRACKS_SUCCESS,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  [],
)

const isFetching = handleActions(
  {
    [GET_TRACKS_REQUEST]: R.T,
    [GET_TRACKS_SUCCESS]: R.F,
  },
  false,
)

const trackNumber = handleActions(
  {
    [SELECT_NEXT_TRACK]: R.inc(),
    [SELECT_PREV_TRACK]: R.dec(),
    [SELECT_TRACK]: R.pipe(
      R.nthArg(1),
      R.prop('payload'),
    ),
  },
  0,
)

export default combineReducers({ tracks, isFetching, trackNumber })
