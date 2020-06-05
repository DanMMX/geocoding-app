const errors = require('restify-errors')

module.exports = function getReverseGeocode(axiosInstance) {
  return function (req, res, next) {
    if (!req.query.latlng) {
      return res.send(new errors.BadRequestError('You should provide latlng param'))
    }

    axiosInstance.get('json', {
      params: {
        latlng: req.query.latlng
      }
    })
      .then(response => {
        res.send(response.data)
        next()
      })
      .catch(err => next(err))
  }
}