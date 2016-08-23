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
        offColor: '=?tcOffColor',
        tile: '=tcTile'
      }
    };

    return directive;
  }

  Controller.$inject = ['Tile'];

  function Controller(Tile) {
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
      vm.tile.toggle();
      if(vm.tile.isOn){
        vm.tileStyle.backgroundColor = vm.offColor;
      }
      else {
        vm.tileStyle.backgroundColor = vm.onColor;
      }


    };
  }
})();
