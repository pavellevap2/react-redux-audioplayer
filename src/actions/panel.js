import { createAction } from 'redux-actions'

const DOMAIN = 'panel/'

// Action Types

export const SELECT_PAUSE = `${DOMAIN}SELECT_PAUSE`

export const CHANGE_VOLUME = `${DOMAIN}CHANGE_VOLUME`

// Action Creators

export const selectPause = createAction(SELECT_PAUSE)

export const changeVolume = createAction(CHANGE_VOLUME)
