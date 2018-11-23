
//Immediately invoked function to contain variable leeking out of scope
(function () {
  //good practice to force declartion with var
  'use strict';

//gotta be declared in html head too
angular.module('DIApp', [])

//var angular avec $
.controller('DIController',DIController);


function DIController($scope, $filter, $injector) {
  $scope.name = "Ben";

  $scope.upper = function () {
    var upCase = $filter("uppercase");
    $scope.name = upCase($scope.name);

  };

  console.log($injector.annotate(DIController));
}

function AnnonateMe(name, job, blah0 {
  return "Blah !";
}

console.log(DIController.toString());
})
})();
