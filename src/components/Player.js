import React from 'react'

export default class Player extends React.Component {
  componentDidUpdate() {
    const { pause, volume, getTreckCurrentTime, getTreckDuration } = this.props

    getTreckCurrentTime(this.audio.currentTime)
    getTreckDuration(this.audio.duration)

    if (pause) {
      this.audio.play()
    } else {
      this.audio.pause()
    }

    this.audio.volume = volume
  }

  render() {
    const { currentSong } = this.props

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
