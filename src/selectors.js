import * as R from 'ramda'

export const getSongs = R.path(['tracks', 'tracks'])

export const getCurrentSong = R.pipe(
  R.path(['tracks', 'tracks']),
  R.find(R.propEq('active', true)),
  R.prop('url'),
)
