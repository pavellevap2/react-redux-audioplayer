const Express = require('express')
const bodyParser = require('body-parser')
const Cors = require('cors')

const app = Express()
const trecksDB = require('./trecks')

app.set('port', process.env.PORT || 8080)

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  Cors(),
)

app.use(bodyParser.json())

app.get('/api/trecks', (req, res) => {
  res.send(trecksDB)
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}, pid ${process.pid}`)
})
