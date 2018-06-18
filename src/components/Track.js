import React from 'react'
import styled from 'styled-components'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import PauseIcon from '@material-ui/icons/PauseCircleFilled'
import Icon from '@material-ui/core/IconButton'

const TrackContainer = styled.div`
  background: ${({ active }) => active && 'red'};
  cursor: pointer;
  margin: 1em;
  padding: 0.2em;
`

export default class Track extends React.Component {
  render() {
    const { track, index, selectTrack, currentTrack, pause } = this.props
    const isActive = currentTrack.index === index ? true : false

    return (
      <TrackContainer active={isActive} onClick={() => selectTrack(index)}>
        {`${track.band} - ${track.name}`}
      </TrackContainer>
    )
  }
}
