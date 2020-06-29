const fs = require('fs')
const stringifiedJSON = fs.readFileSync(__dirname + '/referers.json', 'utf-8')
JSON.parse(stringifiedJSON)
