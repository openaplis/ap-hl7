var Mocha = require('mocha')

module.exports = (data, testFile) {
  var mocha = new Mocha({
    reporter: function () {
      //this makes it so there is no reporter
    }
  })

  mocha.addFile(testFile)
  var assertionErrors = []

  mocha.run()
      .on('fail', function(test, err) {
        assertionErrors.push(err)
      })
      .on('end', function() {
          console.log(assertionErrors)
      })
}
