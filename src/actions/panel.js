import { createAction } from 'redux-actions'

const DOMAIN = 'panel/'

// Action Types

export const SELECT_PAUSE = `${DOMAIN}SELECT_PAUSE`

// Action Creators

export const selectPause = createAction(SELECT_PAUSE)
