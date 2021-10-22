const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const mbank = require('./csv-mbank')

const path = 'example.csv'

let csv = mbank.decode(fs.readFileSync(path))
let options = mbank.options(csv)

let result = parse(csv, options)

console.log(result)
