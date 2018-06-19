import * as R from 'ramda'
import filterTrecks from '../helpers'
import { getSearchInput } from './panel'

export const getTrecks = R.converge(filterTrecks, [
  R.path(['trecks', 'trecks']),
  getSearchInput,
])

const getTrecksLength = R.pipe(
  getTrecks,
  R.length,
)

const getTreckNumber = R.path(['trecks', 'treckNumber'])

const getCurrentTreckNumber = R.converge(R.flip(R.modulo), [
  getTrecksLength,
  getTreckNumber,
])

export const getCurrentTreck = state => {
  const trecks = getTrecks(state)
  const currentNumber = getCurrentTreckNumber(state)
  const trecksLength = getTrecksLength(state)

  const usefullNumber =
    currentNumber < 0 ? trecksLength - R.negate(currentNumber) : currentNumber

  const currentTreck = trecks.find((x, i) => i === usefullNumber)
  return currentTreck ? currentTreck : ''
}
