# node-csv-mbank
Get CSV options for mBank transactions CSV file.

* decode, from Windows-1250 to UTF-8
* options, from UTF-8 encoded data

## Example

Use other library (e.g. node-csv) to parse file.

See: [example.js](example.js)

```
const fs = require('fs')
const parse = require('csv-parse/lib/sync')
const mbank = require('./csv-mbank')

const path = 'example.csv'

let csv = mbank.decode(fs.readFileSync(path))
let options = mbank.options(csv)

let result = parse(csv, options)

console.log(result)
```

results in

```
[
  ...
  {
    date: '2020-09-01',
    description: 'JMP S.A. BIEDRONKA  ZAKUP PRZY UŻYCIU KARTY W KRAJU                                                     ',
    account: 'mKonto 6011 ... 2216',
    category: 'Żywność i chemia domowa',
    value: '-18,17 PLN'
  }
]

```
