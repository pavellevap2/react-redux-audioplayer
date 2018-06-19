import * as R from 'ramda'
import { connect } from 'react-redux'
import { PlayerPanel } from '../components'
import {
  selectPause,
  changeVolume,
  selectTime,
  selectNextTrack,
  selectPrevTrack,
} from '../actions'
import {
  getPause,
  getVolume,
  getTrackDuration,
  getTrackCurrentTime,
} from '../selectors'

const mapStateToProps = R.applySpec({
  pause: getPause,
  volume: getVolume,
  duration: getTrackDuration,
  currentTime: getTrackCurrentTime,
})

const mapDispatchToProps = {
  selectNextTrack,
  selectPrevTrack,
  selectPause,
  changeVolume,
  selectTime,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerPanel)
