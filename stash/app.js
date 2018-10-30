
//Immediately invoked function to contain variable leeking out of scope
(function () {
  //good practice to force declartion with var
  'use strict';

//gotta be declared in html head too
angular.module('myFirstApp', [])

//var angular avec $
.controller('myController', function($scope) {
  $scope.name = "Ben";
  $scope.sayHello = function () {
    var x = 2;
    x += 2;
    return ("what's 2+2 ? "+ x);
  };

});

})();
