import React from 'react'

export default class Player extends React.Component {
  render() {
    const { currentSong } = this.props

    console.log(currentSong)
    return <audio autoPlay={false} src={currentSong} />
  }
}
