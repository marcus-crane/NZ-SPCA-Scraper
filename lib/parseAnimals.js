const request = require('superagent')
const cheerio = require('cheerio')

parseAnimals = (URLarray) => {
  for (let i = 0; i < URLarray.length; i++) {
    request
      .get(URLarray[i])
      .end(function(err, res) {
        if (err) {
          console.log('Uh oh', err.message)
        } else {
          let $ = cheerio.load(res.text)
          // They really don't give much in the way of descriptive class names
          console.log("Name: ", $('.pull-left').text())
          console.log("Description: ", $('.product-description p').text())
          console.log($('.product-sku').text(), '\n')
        }
      })
  }
}

module.exports = parseAnimals
