const errors = require('restify-errors')

// http://www.movable-type.co.uk/scripts/latlong.html
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371
  var dLat = deg2rad(lat2-lat1)
  var dLon = deg2rad(lon2-lon1) 
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)) 
  var d = R * c
  return d
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


module.exports = function (req, res, next) {
  if (!req.query.latlng || !req.query.latlng2) {
    return res.send(new errors.BadRequestError('You should provide latlng and latlng2 params'))
  }
  const [lat1, lng1] = req.query.latlng.split(',')
  const [lat2, lng2] = req.query.latlng2.split(',')
  res.send({ distance: getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) })
  next()
}