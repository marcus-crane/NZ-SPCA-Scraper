const request = require('superagent')
const cheerio = require('cheerio')

const SPCA_API = "https://www.wellingtonspca.org.nz/CDF_Core/Product/GetProductsInfiniteScroll/"

// This whole thing should really use streams. Maybe I'll refactor it in the future

let animals = []

getAnimals = (num) => {
  for (let i = 0; i < num; i++) {
    let skip = 0
    request
      .post(SPCA_API)
      // SPCAs wonky way of accessing the site
      // Skip amount is essentially an index.
      // eg; 2 will request starting from the 3rd entry
      // Take amount doesn't do much if you change it
      .send( { "skipAmount": 0, "takeAmount": 8 } )
      .set('Content-Type', 'application/json')
      // Having a cookie is the important thing
      // Just do a Postman request to the URL and one will be generated you can use or just visit the site and use that one
      .set('Cookie', 'ASP.NET_SessionId=bp3l2vfht1ogzy4g0b22ix1n; SELECTEDPRODUCTKEY=0; SELECTEDNAVIGATIONNODEKEY=23994')
      .end(function(err, res) {
        if (err) {
          console.log('Something broke')
        } else {
          for (i in res.body) {
            animals.push('https://www.wellingtonspca.org.nz' + res.body[i].Path)
          }
        }
        parseAnimals(animals)
      })
  }
}

// We've got the URLs of the animals, now to scrape them!

parseAnimals = (URLarray) => {
  for (let i = 0; i < URLarray.length; i++) {
    request
      .get(URLarray[i])
      .end(function(err, res) {
        if (err) {
          console.log('Uh oh')
        } else {
          let $ = cheerio.load(res.text)
          console.log("Name: ", $('.pull-left').text())
          console.log("Description: ", $('.product-description p').text())
          console.log($('.product-sku').text(), '\n')
        }
      })
  }
}

getAnimals(1)
