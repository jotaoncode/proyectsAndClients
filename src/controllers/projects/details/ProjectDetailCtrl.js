var project = require('./project.json');

function ProjectDetail($scope) {
  $scope.project = _.clone(project);
  $scope.project.dob = moment(project.dob).format('L');
}
App.controller('ProjectDetail', ['$scope', ProjectDetail]);
