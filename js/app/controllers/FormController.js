function FormController(this) {
    this.questions = [];

    this.add = function() {
        this.questions.push({
            text: ""
        });
    };
     this.submit = function() {
        if (this.questions) {
          this.questions.push(this.questions);
          this.questions = '';
        }
      };
}

angular
    .module('app')
    .controller('FormController', FormController);
