import { connect } from 'react-redux'
import { selectTrack } from '../actions'
import Track from '../components/Track'

const mapDispatchToProps = {
  selectTrack,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(Track)
