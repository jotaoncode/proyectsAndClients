var fs = require('fs');
var template = fs.readFileSync(__dirname + '/table.html', 'utf8');

var TableDirective = function () {
  return {
    controller: function ($location) {
      this.goToDetail = function ($someId, details) {
        $location.url(details + '/' + $someId);
      };
    },
    restrict: 'E',
    controllerAs: 'tableCtrl',
    template: template,
    scope: {
      headers: "=",
      content: "=",
      details: "@"
    }
  };
};

module.exports = TableDirective;
