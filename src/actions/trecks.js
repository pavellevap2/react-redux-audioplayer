import { createAction } from 'redux-actions'

const DOMAIN = 'tracks/'

// Action Types

export const GET_TRECKS = `${DOMAIN}GET_TRECKS`

export const GET_TRECKS_REQUEST = `${DOMAIN}GET_TRECKS_REQUEST`

export const GET_TRECKS_SUCCESS = `${DOMAIN}GET_TRECKS_SUCCESS`

export const GET_TRECKS_FAILURE = `${DOMAIN}GET_TRECKS_FAILURE`

export const SELECT_TRECK = `${DOMAIN}SELECT_TRECK`

export const SELECT_CURRENT_TRECK = `${DOMAIN}SELECT_CURRENT_TRECK`

export const SELECT_NEXT_TRECK = `${DOMAIN}SELECT_NEXT_TRECK`

export const SELECT_PREV_TRECK = `${DOMAIN}SELECT_PREV_TRECK`

// Action Creators

export const getTrecks = createAction(GET_TRECKS)

export const getTrecksRequest = createAction(GET_TRECKS_REQUEST)

export const getTrecksSuccess = createAction(GET_TRECKS_SUCCESS)

export const getTrecksFailure = createAction(GET_TRECKS_FAILURE)

export const selectTreck = createAction(SELECT_TRECK)

export const selectCurrentTreck = createAction(SELECT_CURRENT_TRECK)

export const selectNextTreck = createAction(SELECT_NEXT_TRECK)

export const selectPrevTreck = createAction(SELECT_PREV_TRECK)
