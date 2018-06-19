import * as R from 'ramda'
import Track from '../components/Track'
import { connect } from 'react-redux'
import { selectTrack, selectCurrentTreck, selectPause } from '../actions'
import { getPause, getCurrentTreck } from '../selectors'

const mapStateToProps = R.applySpec({
  pause: getPause,
  currentTrack: getCurrentTreck,
})

const mapDispatchToProps = {
  selectTrack,
  selectCurrentTreck,
  selectPause,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Track)
