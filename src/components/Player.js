import React from 'react'

export default class Player extends React.Component {
  componentDidUpdate() {
    const {
      pause,
      volume,
      getTrackCurrentTime,
      getTrackDuration,
      selectedTime,
    } = this.props

    getTrackCurrentTime(this.audio.currentTime)
    getTrackDuration(this.audio.duration)

    if (pause) {
      this.audio.play()
    } else {
      this.audio.pause()
    }

    if (selectedTime && this.audio.duration) {
      this.audio.currentTime = (this.audio.duration * selectedTime) / 100
    }
    this.audio.volume = volume
  }

  render() {
    const { currentTrack } = this.props

    return (
      <audio
        ref={audio => {
          this.audio = audio
        }}
        autoPlay
        preload="auto"
        src={currentTrack.url}
      />
    )
  }
}
