import * as R from 'ramda'

export const getSongs = R.prop('songs')

export const getCurrentSong = R.pipe(
  R.prop('songs'),
  R.find(R.propEq('active', true)),
  R.prop('url'),
)
