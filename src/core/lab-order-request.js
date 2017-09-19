'use strict'


var Handlebars = require('handlebars/runtime')
var templates = require(__dirname + '/views.js')

module.exports.build = (data, callback) => {
  Handlebars.registerPartial('lab-order-request', Handlebars.templates['lab-order-request'])
  Handlebars.registerPartial('segments/msh', Handlebars.templates['segments/msh'])
  Handlebars.registerPartial('segments/pid', Handlebars.templates['segments/pid'])
  Handlebars.registerPartial('segments/pv1', Handlebars.templates['segments/pv1'])
  Handlebars.registerPartial('segments/sac', Handlebars.templates['segments/sac'])
  Handlebars.registerPartial('segments/orc', Handlebars.templates['segments/orc'])
  Handlebars.registerPartial('segments/obr', Handlebars.templates['segments/obr'])

  var template = Handlebars.templates['lab-order-request']
  var result = template(data)
  callback(null, result)
}
