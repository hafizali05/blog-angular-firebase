'use strict';

var app = angular.module('Blog.create', ["ngRoute","firebase"])

app.config(['$routeProvider', function($routeProvider) {
  var config = {
      apiKey: "AIzaSyCSXUG3oSjYXwngO_zB7A-PD1fsX5rc8qE",
      authDomain: "gleat-1242.firebaseapp.com",
      databaseURL: "https://gleat-1242.firebaseio.com",
      projectId: "gleat-1242",
      storageBucket: "gleat-1242.appspot.com",
      messagingSenderId: "68621401681"
  };
  firebase.initializeApp(config);
  $routeProvider.when('/create', {
    templateUrl: 'create/create.html',
    controller: 'createCtrl'
  });
}]);

app.controller("createCtrl", ["$scope","$firebaseArray","$firebaseStorage",
    function($scope, $firebaseArray,$firebaseStorage) {
        var ref = firebase.database().ref();
        var storageRef = firebase.storage().ref('/hafizupload');
        $scope.posts = $firebaseArray(ref);
        // $scope.uploadPhoto.bind("change",function(e,i){
        //     console.log(e,i);
        // })
        $scope.createPost = function(){
          $scope.photo = $('#photo').val();
          // console.log('form submitting',file);
          $scope.posts.$add({
              title: $scope.title,
              status: $scope.status,
              detail: $scope.inputDetail
          }).then(function(ref){
              var id = ref.key;
              console.log('added post with id :',id);
          })

        }
    }
]);