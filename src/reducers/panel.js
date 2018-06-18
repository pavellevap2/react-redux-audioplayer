import * as R from 'ramda'
import { handleActions, handleAction } from 'redux-actions'
import { combineReducers } from 'redux'
import { SELECT_PAUSE } from '../actions'

const pause = handleAction(SELECT_PAUSE, R.not(), false)

export default combineReducers({
  pause,
})
