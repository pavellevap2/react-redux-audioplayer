import React from 'react'
import Slider from '@material-ui/lab/Slider'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import PauseIcon from '@material-ui/icons/PauseCircleFilled'
import NextArrow from '@material-ui/icons/FastForward'
import PrevArrow from '@material-ui/icons/FastRewind'
import Icon from '@material-ui/core/IconButton'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const PanelContainer = styled.div`
  display: flex;
  margin-top: 3em;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid blue;
`

const SliderContainer = styled.div`
  width: 7em;
`

const styles = {
  progress: {
    width: '33em',
    cursor: 'pointer',
  },
}

class PlayerPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: 0,
    }
    this.timer = null
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  progress = () => {
    const { completed } = this.state
    const { duration, currentTime } = this.props
    const progress = Math.round((currentTime / duration) * 100)

    if (completed === 100) {
      this.setState({ completed: 0 })
    } else {
      this.setState({ completed: progress })
    }
  }

  render() {
    const {
      selectNextTrack,
      selectPrevTreck,
      pause,
      selectPause,
      classes,
      volume,
      changeVolume,
    } = this.props

    const { completed } = this.state
    return (
      <PanelContainer>
        <div>
          <Icon onClick={() => selectPrevTreck()}>
            <PrevArrow color="error" />
          </Icon>
          <Icon onClick={() => selectPause()}>
            {!pause ? <PlayIcon /> : <PauseIcon />}
          </Icon>
          <Icon onClick={() => selectNextTrack()}>
            <NextArrow color="error" />
          </Icon>
        </div>
        <LinearProgress
          className={classes.progress}
          variant="determinate"
          value={completed}
        />
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
  }
}

export default withStyles(styles)(PlayerPanel)
