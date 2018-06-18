import * as R from 'ramda'
import Track from '../components/Track'
import { connect } from 'react-redux'
import { selectTrack, stopTreck } from '../actions'
import { getPause, getCurrentSong } from '../selectors'

const mapStateToProps = R.applySpec({
  pause: getPause,
  currentTrack: getCurrentSong,
})

const mapDispatchToProps = {
  selectTrack,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Track)
