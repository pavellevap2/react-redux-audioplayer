import * as R from 'ramda'
import { connect } from 'react-redux'
import { getSongs, getPause } from '../selectors'
import PlayerTracks from '../components/PlayerTracks'

const mapStateToProps = R.applySpec({
  songs: getSongs,
  pause: getPause,
})

export default connect(mapStateToProps)(PlayerTracks)
