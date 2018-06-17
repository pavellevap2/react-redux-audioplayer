import * as R from 'ramda'
import { connect } from 'react-redux'
import { getSongs } from '../selectors'
import PlayerSongs from '../components/PlayerSongs'

const mapStateToProps = R.applySpec({
  songs: getSongs,
})

export default connect(mapStateToProps)(PlayerSongs)
