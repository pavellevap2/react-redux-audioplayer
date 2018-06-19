import React from 'react'
import styled from 'styled-components'
import { TreckContainer } from '../containers'

const TrecksContainer = styled.div`
  border: 1px solid blue;
  width: 100%;
`

export default class PlayerTracks extends React.Component {
  render() {
    const { trecks } = this.props

    return (
      <TrecksContainer>
        {trecks.map((track, i) => (
          <TreckContainer track={track} key={i} index={i} />
        ))}
      </TrecksContainer>
    )
  }
}
