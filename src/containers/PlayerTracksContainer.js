import * as R from 'ramda'
import { connect } from 'react-redux'
import { getTrecks, getPreloader } from '../selectors'
import { PlayerTrecks } from '../components'

const mapStateToProps = R.applySpec({
  trecks: getTrecks,
  preloader: getPreloader,
})

export default connect(mapStateToProps)(PlayerTrecks)
