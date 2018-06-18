import { createAction } from 'redux-actions'

const DOMAIN = 'panel/'

// Action Types

export const SELECT_PAUSE = `${DOMAIN}SELECT_PAUSE`

export const CHANGE_VOLUME = `${DOMAIN}CHANGE_VOLUME`

export const GET_TRECK_DURRATION = `${DOMAIN}GET_TRECK_DURRATION`

export const GET_TRECK_CURRENT_TIME = `${DOMAIN}GET_TRECK_CURRENT_TIME`

export const SELECT_TIME = `${DOMAIN}SELECT_TIME`

// Action Creators

export const selectPause = createAction(SELECT_PAUSE)

export const changeVolume = createAction(CHANGE_VOLUME)

export const getTreckDuration = createAction(GET_TRECK_DURRATION)

export const getTreckCurrentTime = createAction(GET_TRECK_CURRENT_TIME)

export const selectTime = createAction(SELECT_TIME)
