(function() {
  'use strict';

  angular
  .module('app.home')
  .controller('Intro', Intro);

  Intro.$inject = ['$scope', 'template'];

  function Intro($scope, template) {
    var vm = this;

    activate();

    function activate() {
      console.log('Activating Intro Controller');
      template.get('app/home/intro/language/intro.es.json')
      .then(function(result) {
        vm.text = result;
      }); // Loads text files.
    }
  }

})();
