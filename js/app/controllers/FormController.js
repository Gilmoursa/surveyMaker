function FormController($scope, $http) {
    this.surveys = []; //only on page load
    this.survey = {};
    this.survey.questions = [{}];

    this.add = function() {

        this.survey.questions.push({
          title: ""
        });
    };
     this.submit = function() {
          $http.post('http://exampleserver.com', this.survey).then(function(response){
            // Here's where I would put the code from lines 16-20 if I received a response from http://exampleserver.com
          });
            this.surveys.push(this.survey);
            this.survey = {};
            this.survey.questions = [{}];

            $scope.form.$setUntouched()

      };
}

angular
    .module('app')
    .controller('FormController', FormController);
