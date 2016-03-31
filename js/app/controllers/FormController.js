function FormController($scope) {
    $scope.questions = [];

    $scope.add = function() {
        $scope.questions.push({
            question: "",
            questionPlaceholder: "foo",
            text: ""
        });
    };
}

angular
    .module('app')
    .controller('FormController', FormController);
