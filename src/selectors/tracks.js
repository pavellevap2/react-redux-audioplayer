import * as R from 'ramda'
import filterTracks from '../helpers'
import { getSearchInput } from './panel'

export const getTracks = R.converge(filterTracks, [
  R.path(['tracks', 'tracks']),
  getSearchInput,
])

export const getPreloader = R.path(['tracks', 'isFetching'])

const getTracksLength = R.pipe(
  getTracks,
  R.length,
)

const getTrackNumber = R.path(['tracks', 'trackNumber'])

const getCurrentTrackNumber = R.converge(R.flip(R.modulo), [
  getTracksLength,
  getTrackNumber,
])

export const getCurrentTrack = state => {
  const tracks = getTracks(state)
  const currentNumber = getCurrentTrackNumber(state)
  const tracksLength = getTracksLength(state)

  const usefullNumber =
    currentNumber < 0 ? tracksLength - R.negate(currentNumber) : currentNumber

  const currentTrack = tracks.find((x, i) => i === usefullNumber)
  return currentTrack ? currentTrack : ''
}
