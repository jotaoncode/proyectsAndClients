/**
 * Templates
 */
var fs = require('fs');
var path = require('path');
var projects = fs.readFileSync(__dirname + '/controllers/projects/projects.html', 'utf8');
var projectDetail = fs.readFileSync(__dirname + '/controllers/projects/details/projectDetail.html', 'utf8');

/**
 * projects application
 */
global.App = angular.module('projects', [
  'ngMaterial',
  'ngRoute'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'ProjectsCtrl',
    template: projects
  })
  .when('/projects', {
    controller: 'ProjectsCtrl',
    template: projects
  })
  .when('/projects/:project', {
    controller: 'ProjectDetail',
    template: projectDetail
  });
});
require('./directives/mdTable');
require('./controllers/projects/ProjectsCtrl');
require('./controllers/projects/details/ProjectDetailCtrl');
