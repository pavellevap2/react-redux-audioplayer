import * as R from 'ramda'
import { connect } from 'react-redux'
import { getTracks, getPreloader } from '../selectors'
import { PlayerTracks } from '../components'

const mapStateToProps = R.applySpec({
  tracks: getTracks,
  preloader: getPreloader,
})

export default connect(mapStateToProps)(PlayerTracks)
