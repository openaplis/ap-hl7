'use strict'

const path = require('path')
const fs = require('fs')
const objectId = require('bson-objectid')

const labOrderRequest = require(path.join(__dirname, 'lab-order-request'))
const interfacePath = '\\\\10.1.2.31\\ChannelData\\Outgoing\\Ventana'

module.exports.build = function (data, callback) {
  labOrderRequest.build(data, function (err, result) {
    if(err) return callback(err)
    callback(null, result)    
  })
}
