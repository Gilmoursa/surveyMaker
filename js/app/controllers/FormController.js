function FormController($scope) {
    $scope.questions = [];

    $scope.add = function() {
        $scope.questions.push({
            text: ""
        });
    };
}

angular
    .module('app')
    .controller('FormController', FormController);
