const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaWJhYmljIiwiYSI6ImNsY2kwY3JsYzA1cnozb3A2aGY4ODVraWYifQ.kWz9oFgNvD69n5PTn-f5fw'

    request({ url, json: true}, (error, { body } ) => {
        if (error){
            callback('Unable to connect to location services!')
        } else if(body.features.length === 0) {
            callback('Unable to find location, try another')
        } else {
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode