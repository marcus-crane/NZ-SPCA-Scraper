const request = require('superagent')

const SPCA_API = "https://www.wellingtonspca.org.nz/CDF_Core/Product/GetProductsInfiniteScroll/"

let animals = []

getAnimals = (amount) => {
  request
    .post(SPCA_API)
    // SPCAs wonky way of accessing the site
    // Skip amount is essentially an index.
    // eg; 2 will request starting from the 3rd entry
    // Take amount doesn't do much if you change it
    .send( { "skipAmount": 0, "takeAmount": amount } )
    .set('Content-Type', 'application/json')
    .set('Referer', 'https://www.wellingtonspca.org.nz/adopt/dogs/')
    // Having a cookie is the important thing
    // Just do a Postman request to the URL and one will be generated you can use or just visit the site and use that one
    .set('Cookie', 'ASP.NET_SessionId=bp3l2vfht1ogzy4g0b22ix1n; SELECTEDPRODUCTKEY=0; SELECTEDNAVIGATIONNODEKEY=23995')
    .end(function(err, res) {
      if (err) {
        console.log('Something broke')
      } else {
        for (i in res.body) {
          // We wanna get the URLs in full so we gotta manually complete them before they're pushed
          animals.push('https://www.wellingtonspca.org.nz' + res.body[i].Path)
        }
      }
      // We got the URLs, now lets visit them and get the data!
      parseAnimals(animals)
    })
}

module.exports = getAnimals
