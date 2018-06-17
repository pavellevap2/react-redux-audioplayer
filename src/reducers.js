import * as R from 'ramda'
import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import { SELECT_SONG, SELECT_NEXT_SONG, GET_SONGS_REQUEST } from './actions'
import * as tracks from './assets/audios'

const songs = handleActions(
  { [GET_SONGS_REQUEST]: (_, { payload }) => payload },
  [],

  //   {
  //     name: 'Anti autotune rap',
  //     band: 'Unknown',
  //     url: tracks.track1,
  //     active: true,
  //   },
  //   {
  //     name: 'Badly sung la marseillaise',
  //     band: 'French Anthem',
  //     url: tracks.track2,
  //     active: false,
  //   },
  //   {
  //     name: 'Could be Acapella',
  //     band: 'Jenny Mayhem and Jesse Taylor',
  //     url: tracks.track3,
  //     active: false,
  //   },
  //   {
  //     name: 'Live concert male',
  //     band: 'Vox devotional',
  //     url: tracks.track4,
  //     active: false,
  //   },
  //   {
  //     name: 'Lofi hindi fem sung',
  //     band: 'Deewana',
  //     url: tracks.track5,
  //     active: false,
  //   },
  // ],
)

export default combineReducers({ songs })
