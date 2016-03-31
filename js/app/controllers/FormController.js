function FormController($scope) {
    $scope.questions = [];

    $scope.add = function() {
        $scope.questions.push({
            text: ""
        });
    };
     $scope.submit = function() {
        if ($scope.questions) {
          $scope.questions.push(this.questions);
          $scope.questions = '';
        }
      };
}

angular
    .module('app')
    .controller('FormController', FormController);
