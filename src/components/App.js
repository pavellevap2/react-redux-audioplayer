import React from 'react'
import Grid from '@material-ui/core/Grid'
import { injectGlobal } from 'styled-components'
import {
  PlayerTracksContainer,
  PlayerContainer,
  PlayerPanelContainer,
} from '../containers'

injectGlobal`
  html{
    height:100%;
  }
  body{
    height:100%;
    margin:0;
    padding:0;
    overflow-x:hidden;
  }
  #root{
    height:100%;
  }
  a{
    text-decoration: none
  }
  li{
    list-style:none
  }
  ul{
    padding:0,
    margin:0;
  }
  `

export default class App extends React.Component {
  componentDidMount() {
    this.props.getTracks()
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <PlayerPanelContainer />
          <PlayerContainer />
          <PlayerTracksContainer />
        </Grid>
      </Grid>
    )
  }
}
