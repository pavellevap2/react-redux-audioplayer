import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import { TrackContainer } from '../containers'

const TracksContainer = styled.div`
  border: ${({ preloader }) => (!preloader ? '1px solid blue' : null)};
  width: 100%;
`

const PlayerTracks = ({ tracks, preloader }) => (
  <TracksContainer preloader={preloader}>
    {preloader ? (
      <CircularProgress size={50} />
    ) : (
      tracks.map((track, i) => (
        <TrackContainer track={track} key={i} index={i} />
      ))
    )}
  </TracksContainer>
)
export default PlayerTracks
