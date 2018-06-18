import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  GET_TRACKS_REQUEST,
  GET_TRACKS_SUCCESS,
  GET_TRACKS_FAILURE,
  SELECT_NEXT_TRECK,
  SELECT_PREV_TRECK,
  SELECT_TRECK,
} from '../actions'

const tracks = handleAction(
  GET_TRACKS_REQUEST,
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
    [GET_TRACKS_FAILURE]: R.F,
  },
  false,
)

const treckNumber = handleActions(
  {
    [SELECT_NEXT_TRECK]: R.inc(),
    [SELECT_PREV_TRECK]: R.dec(),
    [SELECT_TRECK]: R.pipe(
      R.nthArg(1),
      R.prop('payload'),
    ),
  },
  0,
)

export default combineReducers({ tracks, isFetching, treckNumber })
