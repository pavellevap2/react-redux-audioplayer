const fetchTracks = () =>
  fetch('http://localhost:8080/api/tracks', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'JSON',
      'Access-Control-Allow-Origin': 'http://localhost',
    },
  })
    .then(data => data.json())
    .then(data =>
      data.map((x, index) => ({
        ...x,
        index,
        info: `${x.band} - ${x.name}`,
      })),
    )

export default fetchTracks
