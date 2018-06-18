import * as R from 'ramda'

export const getSongs = R.path(['tracks', 'tracks'])

export const getCurrentSongNumber = R.path(['tracks', 'treckNumber'])

export const getCurrentSong = state => {
  const currentNumber = getCurrentSongNumber(state)
  const songs = getSongs(state)
  const currentSong = songs.filter((x, i) => i === currentNumber)
  return currentSong
}

export const getPause = R.path(['panel', 'pause'])
