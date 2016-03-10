var projects = require('./projects.json');
var tableDirective = require('../../directives/mdTable');

function ProjectsCtrl ($scope, $location) {
  //Headers of table
  $scope.headers =  [{
    name: "Id",
    field: 'id'
  }, {
    name: "Name",
    field: 'name'
  }, {
    name: "Client",
    field: 'client'
  }, {
    name: "Budge",
    field: 'budge'
  }, {
    name: "Options",
    field: 'options'
  }];
  _.each(projects, function (project) {
    project.options = {
      isOptions: true,
      isButton: true,
      click: function (projectClicked) {
        projects = _.without(projects, _.findWhere(projects, {id: projectClicked.id}));
        $scope.content = projects;
      }
    };
  });
  $scope.content = projects;
}

App.controller('ProjectsCtrl', ['$scope', '$location', ProjectsCtrl]).directive('projectsTable', tableDirective);

module.exports = ProjectsCtrl;
