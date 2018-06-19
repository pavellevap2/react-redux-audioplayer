import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const InputContainer = styled.div`
  width: 100%;
  margin: 2em 0;
`

const styles = {
  textField: {
    fontSize: '1em',
    width: '100%',
  },
}

const SearchInput = ({ classes, searchInput, updateSearchInput }) => (
  <InputContainer>
    <TextField
      onChange={e => updateSearchInput(e.target.value)}
      value={searchInput}
      label="search music"
      className={classes.textField}
      color="error"
      margin="normal"
    />
  </InputContainer>
)

export default withStyles(styles)(SearchInput)
