import React from 'react'
import styled from 'styled-components'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import PauseIcon from '@material-ui/icons/PauseCircleFilled'
import Repeat from '@material-ui/icons/Repeat'
import RepeatOne from '@material-ui/icons/RepeatOne'
import NextArrow from '@material-ui/icons/FastForward'
import PrevArrow from '@material-ui/icons/FastRewind'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/IconButton'

const PlayerPanel = ({}) => (
  <Grid container>
    <Grid item>
      <Icon>
        <PrevArrow color="error" />
      </Icon>
      <Icon>
        <PlayIcon />
      </Icon>
      <Icon>
        <NextArrow color="error" />
      </Icon>
    </Grid>
  </Grid>
)

export default PlayerPanel
