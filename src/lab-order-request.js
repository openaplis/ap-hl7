var fs = require('fs')
var Handlebars = require('handlebars/runtime')
var templates = require(__dirname + '/views.js')
var grpc = require('grpc')

var PROTO_PATH = 'node_modules/ap-protobuf/src/hl7/ventana/ventana.proto'
var ventana_proto = grpc.load(PROTO_PATH).ventana

function getOrder(call, callback) {
  var template = Handlebars.templates['lab-order-request']
  var result = template(call.request)
  callback(null, result)
}

function main() {
  setupTemplates()
  var server = new grpc.Server()
  server.addProtoService(ventana_proto.StainOrder.service, { getOrder: getOrder })
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
  server.start()
  console.log('listening on port 50051!')
}

function setupTemplates() {
  Handlebars.registerPartial('lab-order-request', Handlebars.templates['lab-order-request'])
  Handlebars.registerPartial('segments/msh', Handlebars.templates['segments/msh'])
  Handlebars.registerPartial('segments/pid', Handlebars.templates['segments/pid'])
  Handlebars.registerPartial('segments/pv1', Handlebars.templates['segments/pv1'])
  Handlebars.registerPartial('segments/sac', Handlebars.templates['segments/sac'])
  Handlebars.registerPartial('segments/orc', Handlebars.templates['segments/orc'])
  Handlebars.registerPartial('segments/obr', Handlebars.templates['segments/obr'])
}

main()
