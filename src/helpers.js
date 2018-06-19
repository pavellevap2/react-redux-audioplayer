const filterTracks = (tracks, inputTrack) =>
  tracks.filter(cityName => new RegExp(inputTrack).test(cityName.info))

export default filterTracks
