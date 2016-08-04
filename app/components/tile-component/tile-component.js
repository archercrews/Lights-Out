(function(){
'use strict';

angular
  .module('myApp')
  .directive('tileComponent', tileComponent);

  function tileComponent(){
    var directive = {
      templateUrl: 'app/components/tile-component/tile-component.html',
      controller: Controller,
      controllerAs: 'tile',
      bindToController: true,
      scope: {
        onColor: '=?tcOnColor',
        offColor: '=?tcOffColor'
      }
    };

    return directive;
  }

  function Controller() {
    var vm = this;

    if(!vm.onColor) {
      vm.onColor = 'yellow';
    }
    if(!vm.offColor) {
      vm.offColor = 'black';
    }
    vm.tileStyle = {
      backgroundColor: vm.offColor
    };
    vm.tileClick = tileClick;

    function tileClick() {
      if(vm.tileStyle.backgroundColor === vm.onColor){
        vm.tileStyle.backgroundColor = vm.offColor;
      }
      else {
        vm.tileStyle.backgroundColor = vm.onColor;
      }


    };
  }
})();
