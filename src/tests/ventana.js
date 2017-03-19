"use strict"

var expect = require('chai').expect

module.exports = (data) {
  describe('DataChecks', function() {
      describe('#PatientLastName()', function() {
          it('should not be null', function() {
              expect(data.lastname.to.be.equal('hello'))
          })
      })
  })
}
