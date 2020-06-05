const server = require('../server')
const chai = require('chai')
const chaiHttp = require('chai-http')
const nock = require('nock')
const expect = require('chai').expect
const responses = require('./mock')

const { geocodeResponse, reverseGeocodeResponse } = responses
chai.use(chaiHttp)

describe('server', function () {
  before(function () {
    server.listen(8000)
  })

  beforeEach(() => {
    nock('https://maps.googleapis.com/')
      .get(`/maps/api/geocode/json?key=${process.env.GOOGLE_MAPS_API_KEY}&address=1600+Amphitheatre+Parkway,+Mountain+View,+CA`)
      .reply(200, geocodeResponse);
    nock('https://maps.googleapis.com/maps/api/geocode/')
      .get(`/json?key=${process.env.GOOGLE_MAPS_API_KEY}&latlng=40.714224,-73.961452`)
      .reply(200, reverseGeocodeResponse);
  });

  after(function () {
    server.close()
  })

  describe('/', function () {
    it('should return an error if no address provided', function (done) {
      chai.request('http://localhost:8080')
        .get('/')
        .end(function (err, res) {
          expect(res.status).to.equal(400)
          expect(res.body).to.deep.equal({ code: 'BadRequest', message: 'You should provide an address' })
          done()
        })
    })

    it('should return something', function (done) {
      chai.request('http://localhost:8080')
        .get('/?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA')
        .end(function (err, res) {
          expect(res.body).to.deep.equal(geocodeResponse.results)
          expect(res.status).to.equal(200)
          done()
        })
    })
  })

  describe('/reverse', function () {
    it('should return an error if not latlng param provided', function (done) {
      chai.request('http://localhost:8080')
        .get('/reverse')
        .end(function (err, res) {
          expect(res.status).to.equal(400)
          expect(res.body).to.deep.equal({ code: 'BadRequest', message: 'You should provide latlng param' })
          done()
        })
    })

    it('should return something', function (done) {
      chai.request('http://localhost:8080')
        .get('/reverse?latlng=40.714224,-73.961452')
        .end(function (err, res) {
          expect(res.body).to.deep.equal(reverseGeocodeResponse)
          expect(res.status).to.equal(200)
          done()
        })
    })
  })

  describe('/distance', function () {
    it('should return an error if not latlng or latng2 params provided', function (done) {
      chai.request('http://localhost:8080')
        .get('/distance')
        .end(function (err, res) {
          expect(res.status).to.equal(400)
          expect(res.body).to.deep.equal({ code: 'BadRequest', message: 'You should provide latlng and latlng2 params' })
          done()
        })
    })

    it('should return something', function (done) {
      chai.request('http://localhost:8080')
        .get('/distance?latlng=50.0663889,-5.714722222222222&latlng2=58.6438889,-3.0700000000000003')
        .end(function (err, res) {
          expect(res.body).to.deep.equal({distance: 968.8535467049107})
          expect(res.status).to.equal(200)
          done()
        })
    })
  })
})