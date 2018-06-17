import * as R from 'ramda'
import { connect } from 'react-redux'
import { getCurrentSong } from '../selectors'
import Player from '../components/Player'

const mapStateToProps = R.applySpec({
  currentSong: getCurrentSong,
})

export default connect(mapStateToProps)(Player)
