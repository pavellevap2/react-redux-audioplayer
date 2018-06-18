import * as R from 'ramda'
import { connect } from 'react-redux'
import PlayerPanel from '../components/PlayerPanel'
import {
  selectNextTrack,
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
  selectNextTrack,
  selectPrevTreck,
  selectPause,
  changeVolume,
  selectTime,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerPanel)
