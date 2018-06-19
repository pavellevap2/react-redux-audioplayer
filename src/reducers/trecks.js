import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import {
  SELECT_NEXT_TRECK,
  SELECT_PREV_TRECK,
  SELECT_TRECK,
  GET_TRECKS_REQUEST,
  GET_TRECKS_SUCCESS,
  GET_TRECKS_FAILURE,
} from '../actions'

const trecks = handleAction(
  GET_TRECKS_SUCCESS,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  [],
)

const isFetching = handleActions(
  {
    [GET_TRECKS_REQUEST]: R.T,
    [GET_TRECKS_SUCCESS]: R.F,
    [GET_TRECKS_FAILURE]: R.F,
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

export default combineReducers({ trecks, isFetching, treckNumber })
