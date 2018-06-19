import * as R from 'ramda'
import { Treck } from '../components'
import { connect } from 'react-redux'
import { selectTreck, selectCurrentTreck, selectPause } from '../actions'
import { getPause, getCurrentTreck } from '../selectors'

const mapStateToProps = R.applySpec({
  pause: getPause,
  currentTreck: getCurrentTreck,
})

const mapDispatchToProps = {
  selectTreck,
  selectCurrentTreck,
  selectPause,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Treck)
