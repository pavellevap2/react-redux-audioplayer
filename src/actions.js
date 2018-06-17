import { createAction } from 'redux-actions'

const DOMAIN = 'audio-player/'

// Action Types
export const GET_SONGS = `${DOMAIN}GET_SONGS`

export const GET_SONGS_REQUEST = `${DOMAIN}GET_SONGS_REQUEST`

export const GET_SONGS_SUCCESS = `${DOMAIN}GET_SONGS_SUCCESS`

export const GET_SONGS_FAILURE = `${DOMAIN}GET_SONGS_FAILURE`

export const SELECT_SONG = `${DOMAIN}SELECT_SONG`

export const SELECT_NEXT_SONG = `${SELECT_SONG}SELECT_NEXT_SONG`

// Action Creators

export const getSongs = createAction(GET_SONGS)

export const getSongsRequest = createAction(GET_SONGS_REQUEST)

export const getSongsSuccess = createAction(GET_SONGS_SUCCESS)

export const getSongsFailure = createAction(GET_SONGS_FAILURE)

export const selectSong = createAction(SELECT_SONG)

export const selectNextSong = createAction(SELECT_NEXT_SONG)
