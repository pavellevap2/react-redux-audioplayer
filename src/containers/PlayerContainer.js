import * as R from 'ramda'
import { connect } from 'react-redux'
import { getCurrentSong, getPause } from '../selectors'
import Player from '../components/Player'

const mapStateToProps = R.applySpec({
  currentSong: getCurrentSong,
  pause: getPause,
})

export default connect(mapStateToProps)(Player)
