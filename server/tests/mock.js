exports.geocodeResponse = {
  results: [{
    access_points: [
      { access_point_type: 'TYPE_SEGMENT', location: { latitude: 37.4213102, longitude: -122.0852443 }, location_on_segment: { latitude: 37.4212816, longitude: -122.0852472 }, place_id: 'ChIJpdYZQgK6j4ARnmfrthhmnZ8', segment_position: 0.5404474139213562, unsuitable_travel_modes: [] }
    ],
    address_components: [
      { long_name: '1600', short_name: '1600', types: ['street_number'] },
      { long_name: 'Amphitheatre Parkway', short_name: 'Amphitheatre Pkwy', types: ['route'] },
      { long_name: 'Mountain View', short_name: 'Mountain View', types: ['locality', 'political'] },
      { long_name: 'Santa Clara County', short_name: 'Santa Clara County', types: ['administrative_area_level_2', 'political'] },
      { long_name: 'California', short_name: 'CA', types: ['administrative_area_level_1', 'political'] },
      { long_name: 'United States', short_name: 'US', types: ['country', 'political'] },
      { long_name: '94043', short_name: '94043', types: ['postal_code'] }
    ],
    formatted_address: '1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA',
    geometry: {
      location: { lat: 37.4223105, lng: -122.0846329 },
      location_type: 'ROOFTOP',
      viewport: {
        northeast: { lat: 37.4236594802915, lng: -122.0832839197085 },
        southwest: { lat: 37.42096151970851, lng: -122.0859818802915 }
      }
    },
    place_id: 'ChIJtYuu0V25j4ARwu5e4wwRYgE',
    plus_code: {
      compound_code: 'CWC8+W4 Mountain View, CA, United States',
      global_code: '849VCWC8+W4'
    },
    types: ['street_address']
  }],
  status: 'OK'
}

exports.reverseGeocodeResponse = {
  plus_code: {
    compound_code: "P27Q+MC New York, NY, USA",
    global_code: "87G8P27Q+MC"
  },
  results: [{
    access_points: [
      {
        access_point_type: "TYPE_SEGMENT",
        location: {
          latitude: 40.7142348,
          longitude: -73.961373
        },
        location_on_segment: {
          latitude: 40.7142621,
          longitude: -73.9614479
        },
        place_id: "ChIJ8ThWRGBZwokR3E1zUisk3LU",
        segment_position: 0.6031255722045898,
        unsuitable_travel_modes: []
      }
    ],
    address_components: [
      {long_name: "279", short_name: "279", types: [ "street_number" ]},
      {long_name: "Bedford Avenue", short_name: "Bedford Ave", types: [ "route" ]},
      {long_name: "Williamsburg", short_name: "Williamsburg", types: [ "neighborhood", "political" ]},
      {long_name: "Brooklyn", short_name: "Brooklyn", types: [ "political", "sublocality","sublocality_level_1" ]},
      {long_name: "Kings County", short_name: "Kings County", types: [ "administrative_area_level_2", "political" ]},
      {long_name: "New York", short_name: "NY", types: [ "administrative_area_level_1", "political" ]},
      {long_name: "United States", short_name: "US", types: [ "country", "political" ]},
      {long_name: "11211", short_name: "11211", types: [ "postal_code" ] }
    ],
    formatted_address: "279 Bedford Ave, Brooklyn, NY 11211, USA",
    geometry: {
      location: { lat: 40.71423350000001, lng: -73.9613686 },
      location_type: "ROOFTOP",
      viewport: {
        northeast: { lat: 40.71558248029151, lng: -73.9600196197085 },
        southwest: { lat: 40.71288451970851, lng: -73.96271758029151 }
      }
    },
    place_id: "ChIJT2x8Q2BZwokRpBu2jUzX3dE",
    plus_code: {
      compound_code: "P27Q+MF Brooklyn, NY, United States",
      global_code: "87G8P27Q+MF"
    },
    types: [
      "bakery",
      "cafe",
      "establishment",
      "food",
      "point_of_interest",
      "store"
    ]
  }],
  status: "OK"
}
