import * as R from 'ramda'
import { connect } from 'react-redux'
import { getSongs } from '../selectors'
import PlayerTracks from '../components/PlayerTracks'

const mapStateToProps = R.applySpec({
  songs: getSongs,
})

export default connect(mapStateToProps)(PlayerTracks)
