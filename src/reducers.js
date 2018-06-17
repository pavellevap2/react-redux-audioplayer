import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { SELECT_SONG, SELECT_NEXT_SONG, GET_SONGS_REQUEST } from './actions'

const songs = handleActions(
  { [GET_SONGS_REQUEST]: (_, { payload }) => payload },
  [],
)

export default combineReducers({ songs })
