import { connect } from 'react-redux'
import { selectSong } from '../actions'
import Track from '../components/Track'

const mapDispatchToProps = {
  selectSong,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(Track)
