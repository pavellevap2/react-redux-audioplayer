import React from 'react'

export default class Player extends React.Component {
  render() {
    const { currentSong, pause } = this.props

    const songUrl = currentSong[0] ? currentSong[0].url : ''

    console.log(songUrl, 'pause', pause)
    return <audio played={pause} src={songUrl} />
  }
}
