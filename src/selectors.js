import * as R from 'ramda'

export const getSongs = R.path(['tracks', 'tracks'])

const getSongsLength = R.pipe(
  getSongs,
  R.length,
)

const getTreckNumber = R.path(['tracks', 'treckNumber'])

const getCurrentSongNumber = R.converge(R.flip(R.modulo), [
  getSongsLength,
  getTreckNumber,
])

export const getCurrentSong = state => {
  const songs = getSongs(state)
  const currentNumber = getCurrentSongNumber(state)
  const songsLength = getSongsLength(state)

  const usefullNumber =
    currentNumber < 0 ? songsLength - R.negate(currentNumber) : currentNumber

  const currentSong = songs.find((x, i) => i === usefullNumber)
  return currentSong ? currentSong : ''
}

export const getPause = R.path(['panel', 'pause'])

export const getVolume = R.path(['panel', 'volume'])

export const getTreckCurrentTime = R.path(['panel', 'currentTime'])

export const getTreckDuration = R.path(['panel', 'duration'])

export const getSelectedTime = R.path(['panel', 'selectedTime'])
