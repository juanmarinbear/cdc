(function() {
  'use strict';

  angular
  .module('app.home')
  .controller('Home', Home);

  Home.$inject = ['$scope', 'template'];

  function Home($scope, template) {
    var vm = this;

    activate();

    function activate() {
      console.log('Activating Home Controller');
    }
  }

})();
