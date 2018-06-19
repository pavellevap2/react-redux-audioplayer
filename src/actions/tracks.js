import { createAction } from 'redux-actions'

const DOMAIN = 'tracks/'

// Action Types

export const GET_TRACKS = `${DOMAIN}GET_TRACKS`

export const GET_TRACKS_REQUEST = `${DOMAIN}GET_TRACKS_REQUEST`

export const GET_TRACKS_SUCCESS = `${DOMAIN}GET_TRACKS_SUCCESS`

export const SELECT_TRACK = `${DOMAIN}SELECT_TRACK`

export const SELECT_CURRENT_TRACK = `${DOMAIN}SELECT_CURRENT_TRACK`

export const SELECT_NEXT_TRACK = `${DOMAIN}SELECT_NEXT_TRACK`

export const SELECT_PREV_TRACK = `${DOMAIN}SELECT_PREV_TRACK`

// Action Creators

export const getTracks = createAction(GET_TRACKS)

export const getTracksRequest = createAction(GET_TRACKS_REQUEST)

export const getTracksSuccess = createAction(GET_TRACKS_SUCCESS)

export const selectTrack = createAction(SELECT_TRACK)

export const selectCurrentTrack = createAction(SELECT_CURRENT_TRACK)

export const selectNextTrack = createAction(SELECT_NEXT_TRACK)

export const selectPrevTrack = createAction(SELECT_PREV_TRACK)
