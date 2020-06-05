const errors = require('restify-errors')

module.exports = function getGeocode(axiosInstance) {
  return function (req, res, next) {
    if (!req.query.address) {
      return res.send(new errors.BadRequestError('You should provide an address'))
    }

    axiosInstance.get('json', {
      params: {
        address: req.query.address
      }
    })
      .then(response => {
        res.send(response.data.results)
        next()
      })
      .catch(err => next(err))
  }
}