import React from 'react'
import styled from 'styled-components'
import { TrackContainer } from '../containers'

const TracksContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
`

export default class PlayerTracks extends React.Component {
  render() {
    const { songs } = this.props

    return (
      <TracksContainer>
        {songs.map((track, i) => (
          <TrackContainer track={track} key={i} index={i} />
        ))}
      </TracksContainer>
    )
  }
}
