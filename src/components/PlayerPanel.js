import React from 'react'
import Slider from '@material-ui/lab/Slider'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import PauseIcon from '@material-ui/icons/PauseCircleFilled'
import Repeat from '@material-ui/icons/Repeat'
import RepeatOne from '@material-ui/icons/RepeatOne'
import NextArrow from '@material-ui/icons/FastForward'
import PrevArrow from '@material-ui/icons/FastRewind'
import Icon from '@material-ui/core/IconButton'
import styled from 'styled-components'

const PanelContainer = styled.div`
  margin: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const SliderContainer = styled.div`
  width: 7em;
  margin-top: 0.5em;
`

const PlayerPanel = ({
  selectNextTrack,
  selectPrevTreck,
  pause,
  selectPause,
  classes,
  volume,
  changeVolume,
}) => (
  <PanelContainer>
    <Icon onClick={() => selectPrevTreck()}>
      <PrevArrow color="error" />
    </Icon>
    <Icon onClick={() => selectPause()}>
      {!pause ? <PlayIcon /> : <PauseIcon />}
    </Icon>
    <Icon onClick={() => selectNextTrack()}>
      <NextArrow color="error" />
    </Icon>
    <SliderContainer>
      <Slider
        value={volume}
        min={0}
        max={1}
        step={0.1}
        onChange={(e, value) => changeVolume(value)}
      />
    </SliderContainer>
  </PanelContainer>
)

export default PlayerPanel
