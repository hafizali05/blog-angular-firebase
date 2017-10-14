'use strict';

// Initialize Firebase

// Declare app level module which depends on views, and components

var app = angular.module('Blog', [
  'ngRoute',
  'firebase',
  'Blog.posts',
  'Blog.create'
]);
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/create'});
}]);

