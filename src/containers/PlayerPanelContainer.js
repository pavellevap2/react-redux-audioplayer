import * as R from 'ramda'
import { connect } from 'react-redux'
import { PlayerPanel } from '../components'
import {
  selectNextTreck,
  selectPause,
  selectPrevTreck,
  changeVolume,
  selectTime,
} from '../actions'
import {
  getPause,
  getVolume,
  getTreckDuration,
  getTreckCurrentTime,
} from '../selectors'

const mapStateToProps = R.applySpec({
  pause: getPause,
  volume: getVolume,
  duration: getTreckDuration,
  currentTime: getTreckCurrentTime,
})

const mapDispatchToProps = {
  selectNextTreck,
  selectPrevTreck,
  selectPause,
  changeVolume,
  selectTime,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerPanel)
