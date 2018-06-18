import * as R from 'ramda'
import { connect } from 'react-redux'
import PlayerPanel from '../components/PlayerPanel'
import { selectNextTrack, selectPause } from '../actions'
import { getPause } from '../selectors'

const mapStateToProps = R.applySpec({
  pause: getPause,
})

const mapDispatchToProps = {
  selectNextTrack,
  selectPause,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerPanel)
