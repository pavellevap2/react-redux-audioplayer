import { createAction } from 'redux-actions'

const DOMAIN = 'tracks/'

// Action Types

export const GET_TRACKS = `${DOMAIN}GET_TRACKS`

export const GET_TRACKS_REQUEST = `${DOMAIN}GET_TRACKS_REQUEST`

export const GET_TRACKS_SUCCESS = `${DOMAIN}GET_TRACKS_SUCCESS`

export const GET_TRACKS_FAILURE = `${DOMAIN}GET_TRACKS_FAILURE`

export const SELECT_TRECK = `${DOMAIN}SELECT_TRECK`

export const SELECT_CURRENT_TRECK = `${DOMAIN}SELECT_CURRENT_TRECK`

export const SELECT_NEXT_TRECK = `${DOMAIN}SELECT_NEXT_TRECK`

export const SELECT_PREV_TRECK = `${DOMAIN}SELECT_PREV_TRECK`

// Action Creators

export const getTracks = createAction(GET_TRACKS)

export const getTracksRequest = createAction(GET_TRACKS_REQUEST)

export const getTracksSuccess = createAction(GET_TRACKS_SUCCESS)

export const getTracksFailure = createAction(GET_TRACKS_FAILURE)

export const selectTrack = createAction(SELECT_TRECK)

export const selectCurrentTreck = createAction(SELECT_CURRENT_TRECK)

export const selectNextTrack = createAction(SELECT_NEXT_TRECK)

export const selectPrevTreck = createAction(SELECT_PREV_TRECK)
