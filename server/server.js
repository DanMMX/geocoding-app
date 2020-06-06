require('dotenv').config()

const restify = require('restify')
const axios = require('axios')
const corsMiddleware = require('restify-cors-middleware');
const getGeocode = require('./controllers/getGeocode')
const calculateDistance = require('./controllers/calculateDistance')
const getReverseGeocode = require('./controllers/getReverseGeocode')

const cors = corsMiddleware({
  origins: ['*']
});

const instance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/'
})

instance.interceptors.request.use((config) => ({
  ...config,
  params: {
      key: process.env.GOOGLE_MAPS_API_KEY,
      ...config.params
  }
}))

const server = this.server = restify.createServer()

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.queryParser())

server.get('/', getGeocode(instance))
server.get('/reverse', getReverseGeocode(instance))
server.get('/distance', calculateDistance)

server.on('restifyError', function (req, res, err, cb) {
  res.send(err)
  return cb()
})

exports.listen = function () {
  server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url)
  });
}

exports.close = function (callback) {
  this.server.close()
}