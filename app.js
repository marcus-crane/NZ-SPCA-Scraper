const request = require('superagent')
const cheerio = require('cheerio')

const getAnimals = require('./lib/getAnimals')
const parseAnimals = require('./lib/parseAnimals')

// Let's do this!

getAnimals(process.argv[2])
