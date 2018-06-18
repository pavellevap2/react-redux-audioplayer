import * as R from 'ramda'
import { connect } from 'react-redux'
import { getTreckCurrentTime, getTreckDuration } from '../actions'
import {
  getCurrentSong,
  getPause,
  getVolume,
  getSelectedTime,
} from '../selectors'
import Player from '../components/Player'

const mapStateToProps = R.applySpec({
  currentSong: getCurrentSong,
  pause: getPause,
  volume: getVolume,
  selectedTime: getSelectedTime,
})

const mapDispatchToProps = {
  getTreckCurrentTime,
  getTreckDuration,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)
