const getTracks = () =>
  fetch('http://localhost:8080/api/tracks', {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'JSON',
      'Access-Control-Allow-Origin': 'http://localhost',
    },
  }).then(data => data.json())

export default getTracks
