import React from 'react'
import styled from 'styled-components'

const TrackContainer = styled.div`
  background: ${({ active }) => active && 'red'};
`

const Track = ({ track, index, selectSong }) => (
  <TrackContainer>{`${track.band} - ${track.name}`} </TrackContainer>
)

export default Track
