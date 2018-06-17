import React from 'react'
import { TrackContainer } from '../containers'

export default class PlayerTracks extends React.Component {
  render() {
    const { songs } = this.props

    return (
      <React.Fragment>
        {songs.map((track, i) => (
          <TrackContainer track={track} key={i} index={i} />
        ))}
      </React.Fragment>
    )
  }
}
