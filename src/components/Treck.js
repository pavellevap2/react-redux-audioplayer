import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const TreckContainer = styled.div`
  background: ${({ active }) => active && 'red'};
  cursor: pointer;
  display: flex;
  direction: row;
  justify-content: space-between;
  text-align: center;
  margin: 1em;
  padding: 0.2em;
`

export default class Treck extends React.Component {
  componentWillReceiveProps() {
    this.duration = this.audio.duration
  }

  _selectTreck = () => {
    const {
      index,
      selectTreck,
      currentTreck,
      selectCurrentTreck,
      pause,
      selectPause,
    } = this.props
    const isActive = currentTreck.index === index ? true : false

    if (isActive && !pause) {
      selectCurrentTreck()
    } else if (isActive && pause) {
      selectPause()
    } else {
      selectTreck(index)
    }
  }

  render() {
    const { track, index, currentTreck } = this.props
    const isActive = currentTreck.index === index ? true : false
    const duration = Math.round(this.duration)

    return (
      <TreckContainer active={isActive} onClick={this._selectTreck}>
        <p>{track.info}</p>
        <audio
          ref={audio => {
            this.audio = audio
          }}
          src={track.url}
        />
        <span>{duration ? duration : <CircularProgress size={25} />}</span>
      </TreckContainer>
    )
  }
}
