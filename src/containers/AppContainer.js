import { connect } from 'react-redux'
import { getTrecks } from '../actions'
import App from '../components/App'

const mapDisptachToProps = {
  getTrecks,
}

export default connect(
  undefined,
  mapDisptachToProps,
)(App)
