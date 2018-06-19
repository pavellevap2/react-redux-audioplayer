import * as R from 'ramda'
import { connect } from 'react-redux'
import { getTrecks } from '../selectors'
import PlayerTracks from '../components/PlayerTracks'

const mapStateToProps = R.applySpec({
  trecks: getTrecks,
})

export default connect(mapStateToProps)(PlayerTracks)
