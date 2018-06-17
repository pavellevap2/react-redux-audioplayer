import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { SELECT_SONG } from './actions'
import * as tracks from './assets/audios'

const songs = handleActions(
  {
    [SELECT_SONG]: (state, { payload }) =>
      state.map(
        (x, i) =>
          i === payload ? { ...x, active: true } : { ...x, active: false },
      ),
  },
  [
    {
      name: 'Anti autotune rap',
      band: 'Unknown',
      url: tracks.track1,
      active: true,
    },
    {
      name: 'Badly sung la marseillaise',
      band: 'French Anthem',
      url: tracks.track2,
      active: false,
    },
    {
      name: 'Could be Acapella',
      band: 'Jenny Mayhem and Jesse Taylor',
      url: tracks.track3,
      active: false,
    },
    {
      name: 'Live concert male',
      band: 'Vox devotional',
      url: tracks.track4,
      active: false,
    },
    {
      name: 'Lofi hindi fem sung',
      band: 'Deewana',
      url: tracks.track5,
      active: false,
    },
  ],
)

export default combineReducers({ songs })
