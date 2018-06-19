import * as R from 'ramda'
import { connect } from 'react-redux'
import { getTrackCurrentTime, getTrackDuration } from '../actions'
import {
  getPause,
  getVolume,
  getSelectedTime,
  getCurrentTrack,
} from '../selectors'
import { Player } from '../components'

const mapStateToProps = R.applySpec({
  currentTrack: getCurrentTrack,
  pause: getPause,
  volume: getVolume,
  selectedTime: getSelectedTime,
})

const mapDispatchToProps = {
  getTrackCurrentTime,
  getTrackDuration,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)
