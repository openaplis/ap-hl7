var path = require('path')
var hl7Service = require(path.join(__dirname, './core/hl7-service'))

hl7Service.start(function (err, message) {
  if(err) return console.log(err)
  console.log(message)
})
