import { connect } from 'react-redux'
import { getSongs } from '../actions'
import App from '../components/App'

const mapDisptachToProps = {
  getSongs,
}

export default connect(
  undefined,
  mapDisptachToProps,
)(App)
