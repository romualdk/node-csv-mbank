const iconv = require('iconv-lite')

/* Decode from Windows-1250 to UTF-8 */
function decode (csv) {
  return iconv.decode(csv, 'windows-1250')
}

/* Get CSV options from UTF-8 encoded string  */
function options (csv) {
  let options = {
    encoding: 'utf8',
    delimiter: ';',
    escape: '"',
    from_line: 0,
    relax_column_count: true,
    skip_empty_lines: true,
    columns: [
      'date',
      'description',
      'account',
      'category',
      'value'
    ]
  }

  let lines = csv.split('\n')

  if (lines.length === 0 || !lines[0].includes('mBank S.A.')) {
    return false
  }

  let i = 1
  while (options.from_line === 0 && i < lines.length) {
    if (lines[i].includes('#Data operacji;#Opis operacji;#Rachunek;#Kategoria;#Kwota')) {
      options.from_line = i + 1
    }
    i++
  }

  return options
}

module.exports = {
  decode: decode,
  options: options
}
