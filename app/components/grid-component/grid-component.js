(function(){
'use strict';

angular
  .module('myApp')
  .directive('gridComponent', gridComponent);

  function gridComponent(){
    var directive = {
      templateUrl: 'app/components/grid-component/grid-component.html',
      controller: Controller,
      controllerAs: 'grid',
      bindToController: true,
      scope: {}
    };

    return directive;
  }

  Controller.$inject = ['gridState'];

  function Controller(gridState) {
    var vm = this;
    vm.grid = gridState.grid;
  }
})();
