import { call, put, select, takeEvery } from 'redux-saga/effects'
import getTracks from './manger'
import { GET_SONGS, getSongsRequest } from './actions'

const getTracksWorker = function*() {
  const tracks = yield call(getTracks)
  yield put(getSongsRequest(tracks))
}

const getTracksWatcher = function*() {
  yield takeEvery(GET_SONGS, getTracksWorker)
}

export default function*() {
  yield call(getTracksWatcher)
}
