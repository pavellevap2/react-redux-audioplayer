import * as R from 'ramda'
import { connect } from 'react-redux'
import { getCurrentSong, getPause, getVolume } from '../selectors'
import Player from '../components/Player'

const mapStateToProps = R.applySpec({
  currentSong: getCurrentSong,
  pause: getPause,
  volume: getVolume,
})

export default connect(mapStateToProps)(Player)
