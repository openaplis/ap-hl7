const path = require('path')
const grpc = require('grpc')

const PROTO_PATH = path.join(__dirname, '../node_modules/ap-protobuf/src/core/hl7/ventana/ventana.proto')
const ventana_proto = grpc.load(PROTO_PATH).ventana
const ventanaService = new ventana_proto.VentanaService(process.env.AP_HL7_SERVICE_BINDING, grpc.credentials.createInsecure())
const orderData = require(path.join(__dirname, 'order-data'))

console.log('Connecting to: ' + process.env.AP_HL7_SERVICE_BINDING)

ventanaService.sendOrder(orderData, function (err, message) {
  if(err) return console.log(err)
  console.log(message)
})
