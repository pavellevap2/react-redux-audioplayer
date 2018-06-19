import * as R from 'ramda'

export const getPause = R.path(['panel', 'pause'])

export const getVolume = R.path(['panel', 'volume'])

export const getTrackCurrentTime = R.path(['panel', 'currentTime'])

export const getTrackDuration = R.path(['panel', 'duration'])

export const getSelectedTime = R.path(['panel', 'selectedTime'])

export const getSearchInput = R.path(['panel', 'searchInput'])
