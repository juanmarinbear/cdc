(function() {
  'use strict';

  angular
  .module('app.home')
  .controller('Signup', Signup);

  Signup.$inject = ['$scope', 'template'];

  function Signup($scope, template) {
    var vm = this;

    activate();

    function activate() {
      console.log('Activating Signup Controller');
      template.get('app/home/signup/language/signup.es.json')
      .then(function(result) {
        vm.text = result;
      }); // Loads text files.
    }
  }

})();
