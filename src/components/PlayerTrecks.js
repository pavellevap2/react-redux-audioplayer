import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import { TreckContainer } from '../containers'

const TrecksContainer = styled.div`
  border: ${({ preloader }) => (!preloader ? '1px solid blue' : null)};
  width: 100%;
`

const PlayerTrecks = ({ trecks, preloader }) => (
  <TrecksContainer preloader={preloader}>
    {preloader ? (
      <CircularProgress size={50} />
    ) : (
      trecks.map((track, i) => (
        <TreckContainer track={track} key={i} index={i} />
      ))
    )}
  </TrecksContainer>
)
export default PlayerTrecks
