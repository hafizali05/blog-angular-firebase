'use strict';

angular.module('Blog.posts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/posts', {
    templateUrl: 'posts/posts.html',
    controller: 'postsCtrl'
  });
}])

.controller('postsCtrl', [function() {

}]);