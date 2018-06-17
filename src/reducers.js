import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { SELECT_SONG } from './actions'
import * as tracks from './assets/audios'

const songs = handleActions(
  {
    [SELECT_SONG]: (state, { payload }) => payload,
  },
  [
    {
      name: 'first track',
      src: tracks.track1,
      active: true,
    },
    {
      name: 'first track',
      src: tracks.track2,
      active: false,
    },
    {
      name: 'second track',
      src: tracks.track3,
      active: false,
    },
    {
      name: 'third track',
      src: tracks.track4,
      active: false,
    },
    {
      name: 'fifth track',
      src: tracks.track5,
      active: false,
    },
  ],
)

export default combineReducers({ songs })
