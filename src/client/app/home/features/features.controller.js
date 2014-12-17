(function() {
  'use strict';

  angular
  .module('app.home')
  .controller('Features', Features);

  Features.$inject = ['$scope', 'template'];

  function Features($scope, template) {
    var vm = this;

    activate();

    function activate() {
      console.log('Activating Features Controller');
      template.get('app/home/features/language/features.es.json')
      .then(function(result) {
        vm.text = result;
      }); // Loads text files.
    }
  }

})();
