import * as R from 'ramda'
import { connect } from 'react-redux'
import { getTreckCurrentTime, getTreckDuration } from '../actions'
import {
  getPause,
  getVolume,
  getSelectedTime,
  getCurrentTreck,
} from '../selectors'
import { Player } from '../components'

const mapStateToProps = R.applySpec({
  currentTreck: getCurrentTreck,
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
