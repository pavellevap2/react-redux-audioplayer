import { call, put, takeEvery, select } from 'redux-saga/effects'
import fetchTracks from './manger'
import { GET_TRACKS, getTracksRequest } from './actions'

const getTracksWorker = function*() {
  const tracks = yield call(fetchTracks)
  yield put(getTracksRequest(tracks))
}

const getTracksWatcher = function*() {
  yield takeEvery(GET_TRACKS, getTracksWorker)
}

export default function*() {
  yield call(getTracksWatcher)
}
