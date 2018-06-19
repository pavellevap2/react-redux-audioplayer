import * as R from 'ramda'
import { Track } from '../components'
import { connect } from 'react-redux'
import { selectTrack, selectCurrentTrack, selectPause } from '../actions'
import { getPause, getCurrentTrack } from '../selectors'

const mapStateToProps = R.applySpec({
  pause: getPause,
  currentTrack: getCurrentTrack,
})

const mapDispatchToProps = {
  selectTrack,
  selectCurrentTrack,
  selectPause,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Track)
