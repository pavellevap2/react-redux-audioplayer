import React from 'react'

export default class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    const { pause, volume } = this.props

    if (pause) {
      this.audio.play()
    } else {
      this.audio.pause()
    }

    this.audio.volume = volume
  }

  render() {
    const { currentSong, volume } = this.props

    return (
      <audio
        ref={audio => {
          this.audio = audio
        }}
        autoPlay
        preload="auto"
        src={currentSong.url}
      />
    )
  }
}
