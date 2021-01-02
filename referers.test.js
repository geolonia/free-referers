const fs = require('fs')
const referersjson = fs.readFileSync('./referers.json')

// should be parsed as JSON.
const referers = JSON.parse(referersjson)

// Should be an Array.
if(!Array.isArray(referers)) {
    throw new Error('Should be an Array.')
}

// Should be string values.
if(referers.some(referer => typeof referer !== 'string')) {
    throw new Error('Should be string values.')
}