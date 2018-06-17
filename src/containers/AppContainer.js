import { connect } from 'react-redux'
import { getTracks } from '../actions'
import App from '../components/App'

const mapDisptachToProps = {
  getTracks,
}

export default connect(
  undefined,
  mapDisptachToProps,
)(App)
