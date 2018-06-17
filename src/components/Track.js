import React from 'react'
import styled from 'styled-components'

const Track = ({ track, index, selectSong }) => (
  <React.Fragment>
    <div>{`${track.band} - ${track.name}`} </div>
  </React.Fragment>
)

export default Track
