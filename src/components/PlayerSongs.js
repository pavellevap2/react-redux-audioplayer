import React from 'react'

export default class PlayerSongs extends React.Component {
  render() {
    const { songs } = this.props

    return (
      <React.Fragment>
        {songs.map(({ name }, i) => <div>{name}</div>)}
      </React.Fragment>
    )
  }
}
