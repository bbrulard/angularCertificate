
//Immediately invoked function to contain variable leeking out of scope
(function () {
  //good practice to force declartion with var
  'use strict';

//gotta be declared in html head too
angular.module('NameCalculator', [])

//var angular avec $
.controller('NameCalculatorController', function($scope) {
  $scope.name = "Toasty";
  $scope.totalValue = 0;


  $scope.displayNumeric = function() {
    var totalValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalValue;
  };

  function calculateNumericForString(string) {
    var stringValue = 0;
    for (var i = 0; i < string.length; i++) {
      stringValue += string.charCodeAt(i);
    }

    return stringValue;
  }
});

})();
