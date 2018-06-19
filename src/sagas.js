import { call, put, takeEvery } from 'redux-saga/effects'
import fetchTracks from './manger'
import { getTrecksSuccess, getTrecksRequest, GET_TRECKS } from './actions'

const getTracksWorker = function*() {
  yield put(getTrecksRequest())
  const tracks = yield call(fetchTracks)
  yield put(getTrecksSuccess(tracks))
}

const getTracksWatcher = function*() {
  yield takeEvery(GET_TRECKS, getTracksWorker)
}

export default function*() {
  yield call(getTracksWatcher)
}
