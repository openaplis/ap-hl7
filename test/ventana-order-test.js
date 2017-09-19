"use strict"

const path = require('path')
const assert = require('chai').assert

const labOrderRequest = require('../src/core/lab-order-request')
const ventanaOrder = require('../src/core/ventana-order')
const orderData = require(path.join(__dirname, 'order-data'))



describe('Ventana Tests', function () {
  it('HL7 Message Tests', function (done) {
    labOrderRequest.build(orderData, function (err, result) {
      if(err) return console.log(err)
      console.log(result)
      done()
    })
  })

  it('Ventana Order Test', function (done) {
    this.timeout(10000)
    ventanaOrder.send(orderData, function (err, result) {
      if(err) return console.log(err)
      console.log(result)
      done()
    })
  })

})
