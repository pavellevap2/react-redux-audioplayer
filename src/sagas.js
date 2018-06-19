import { call, put, takeEvery } from 'redux-saga/effects'
import fetchTracks from './manger'
import { getTracksSuccess, getTracksRequest, GET_TRACKS } from './actions'

const getTracksWorker = function*() {
  yield put(getTracksRequest())
  const tracks = yield call(fetchTracks)
  yield put(getTracksSuccess(tracks))
}

const getTracksWatcher = function*() {
  yield takeEvery(GET_TRACKS, getTracksWorker)
}

export default function*() {
  yield call(getTracksWatcher)
}
