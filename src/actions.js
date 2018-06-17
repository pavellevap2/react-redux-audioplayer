import { createAction } from 'redux-actions'

const DOMAIN = 'audio-player/'

// Action Types

export const SELECT_SONG = `${DOMAIN}SELECT_SONG`

// Action Creators

export const selectSong = createAction(SELECT_SONG)
