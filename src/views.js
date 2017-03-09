var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lab-order-request'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["segments/orc"],depth0,{"name":"segments/orc","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["segments/obr"],depth0,{"name":"segments/obr","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  ((stack1 = container.invokePartial(partials["segments/msh"],depth0,{"name":"segments/msh","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["segments/pid"],depth0,{"name":"segments/pid","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["segments/pv1"],depth0,{"name":"segments/pv1","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials["segments/sac"],depth0,{"name":"segments/sac","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.stain_orders || (depth0 != null ? depth0.stain_orders : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"stain_orders","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.stain_orders) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"usePartial":true,"useData":true});
templates['segments/msh'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "MSH|^~\\&|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.msh : depth0)) != null ? stack1.sending_application : stack1), depth0))
    + "|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.msh : depth0)) != null ? stack1.sending_facility : stack1), depth0))
    + "|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.msh : depth0)) != null ? stack1.receiving_application : stack1), depth0))
    + "|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.msh : depth0)) != null ? stack1.receiving_facility : stack1), depth0))
    + "|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.msh : depth0)) != null ? stack1.date_time_of_message : stack1), depth0))
    + "||"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.msh : depth0)) != null ? stack1.message_type : stack1), depth0))
    + "|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.msh : depth0)) != null ? stack1.message_control_id : stack1), depth0))
    + "|P|2.4|\r\n";
},"useData":true});
templates['segments/obr'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "OBR|1|VEN-10001 A1-2||123^HER2^STAIN|||20110115||||||||Breast^Left Breast Upper Node^Breast Biopsy|1234^LastName^FirstName^MI|||VEN-10001;A;1;2^2|VEN-10001;A;1^1|VEN-10001;A^A|||||||||||||||||||||||||||\r\n";
},"useData":true});
templates['segments/orc'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "ORC|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.orc : depth0)) != null ? stack1.order_control : stack1), depth0))
    + "|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.orc : depth0)) != null ? stack1.placer_order_number : stack1), depth0))
    + "|||||||||||||||"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.orc : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "^"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.orc : depth0)) != null ? stack1.site_description : stack1), depth0))
    + "||||"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.orc : depth0)) != null ? stack1.facility_code : stack1), depth0))
    + "^"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.orc : depth0)) != null ? stack1.facility_name : stack1), depth0))
    + "|\r\n";
},"useData":true});
templates['segments/pid'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "PID|||"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pid : depth0)) != null ? stack1.medical_record_number : stack1), depth0))
    + "||"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pid : depth0)) != null ? stack1.last_name : stack1), depth0))
    + "^"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pid : depth0)) != null ? stack1.first_name : stack1), depth0))
    + "^"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pid : depth0)) != null ? stack1.middle_initial : stack1), depth0))
    + "||"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pid : depth0)) != null ? stack1.birthdate : stack1), depth0))
    + "|"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pid : depth0)) != null ? stack1.sex : stack1), depth0))
    + "|\r\n";
},"useData":true});
templates['segments/pv1'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "PV1|||||||"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pv1 : depth0)) != null ? stack1.requesting_physician_npi : stack1), depth0))
    + "^"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pv1 : depth0)) != null ? stack1.requesting_physician_lastname : stack1), depth0))
    + "^"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.pv1 : depth0)) != null ? stack1.requesting_physician_firstname : stack1), depth0))
    + "|\r\n";
},"useData":true});
templates['segments/sac'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "SAC|||||||"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.sac : depth0)) != null ? stack1.registration_date_time : stack1), depth0))
    + "|\r\n";
},"useData":true});
