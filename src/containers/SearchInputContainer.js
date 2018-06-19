import * as R from 'ramda'
import { connect } from 'react-redux'
import { updateSearchInput } from '../actions'
import { getSearchInput } from '../selectors'
import { SearchInput } from '../components'

const mapStateToProps = R.applySpec({
  searchInput: getSearchInput,
})

const mapDispatchToProps = {
  updateSearchInput,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput)
