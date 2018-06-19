import { createAction } from 'redux-actions'

const DOMAIN = 'panel/'

// Action Types

export const SELECT_PAUSE = `${DOMAIN}SELECT_PAUSE`

export const CHANGE_VOLUME = `${DOMAIN}CHANGE_VOLUME`

export const GET_TRACK_DURRATION = `${DOMAIN}GET_TRACK_DURRATION`

export const GET_TRACK_CURRENT_TIME = `${DOMAIN}GET_TRACK_CURRENT_TIME`

export const SELECT_TIME = `${DOMAIN}SELECT_TIME`

export const UPDATE_SEARCH_INPUT = `${DOMAIN}UPDATE_SEARCH_INPUT`

// Action Creators

export const selectPause = createAction(SELECT_PAUSE)

export const changeVolume = createAction(CHANGE_VOLUME)

export const getTrackDuration = createAction(GET_TRACK_DURRATION)

export const getTrackCurrentTime = createAction(GET_TRACK_CURRENT_TIME)

export const selectTime = createAction(SELECT_TIME)

export const updateSearchInput = createAction(UPDATE_SEARCH_INPUT)
