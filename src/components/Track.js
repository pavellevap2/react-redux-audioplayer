import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const TrackContainer = styled.div`
  background: ${({ active }) => active && 'red'};
  cursor: pointer;
  display: flex;
  direction: row;
  justify-content: space-between;
  text-align: center;
  margin: 1em;
  padding: 0.2em;
`

export default class Track extends React.Component {
  componentWillReceiveProps() {
    this.duration = this.audio.duration
  }

  _selectTrack = () => {
    const {
      index,
      selectTrack,
      selectCurrentTrack,
      currentTrack,
      pause,
      selectPause,
    } = this.props
    const isActive = currentTrack.index === index ? true : false

    if (isActive && !pause) {
      selectCurrentTrack()
    } else if (isActive && pause) {
      selectPause()
    } else {
      selectTrack(index)
    }
  }

  render() {
    const { track, index, currentTrack } = this.props
    const isActive = currentTrack.index === index ? true : false
    const duration = Math.round(this.duration)

    return (
      <TrackContainer active={isActive} onClick={this._selectTrack}>
        <p>{track.info}</p>
        <audio
          ref={audio => {
            this.audio = audio
          }}
          src={track.url}
        />
        <span>{duration ? duration : <CircularProgress size={25} />}</span>
      </TrackContainer>
    )
  }
}
