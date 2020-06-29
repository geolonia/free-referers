const fs = require('fs')
const stringifiedJSON = fs.readFileSync(__dirname + '/referers.json', 'utf-8')

const referers = JSON.parse(stringifiedJSON)

if(!Array.isArray(referers)) {
  throw new Error('The referers should be a Array.')
}

if(referers.some(referer => typeof referer !== 'string')) {
  throw new Error('Each referer should be a string.')
}
