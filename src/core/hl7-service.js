'use static'

var grpc = require('grpc')
var path = require('path')

var ventanaOrder = require(path.join(__dirname, 'ventana-order'))
var VENTANA_PROTO_PATH = path.join(__dirname, '../../node_modules/ap-protobuf/src/core/hl7/ventana/ventana.proto')
var ventanaProtobuf = grpc.load(VENTANA_PROTO_PATH).ventana
var server = {}

module.exports = {

  start: function (callback) {
    server = new grpc.Server()
    server.addService(ventanaProtobuf.VentanaService.service,
      {
        sendOrder: sendOrder
      })
    server.bind(process.env.AP_HL7_SERVICE_BINDING, grpc.ServerCredentials.createInsecure())
    server.start()

    callback(null, {
      message: 'The HL7 service has started.',
      serviceBinding: process.env.AP_HL7_SERVICE_BINDING
    })
  },

  shutdown: function (callback) {
    server.tryShutdown(function () {
      callback(null, { message: 'The service has been stopped.'} )
    })
  }

}

function buildOrder (call, callback) {
  console.log('hl7-service: buildOrder was called.')
  ventanaOrder.send(call.request, function (err, result) {
    if(err) console.log(err)
    callback(null, result)
  })
}
