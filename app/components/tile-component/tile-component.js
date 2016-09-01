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

  Controller.$inject = ['Tile', '$scope', 'gridState'];

  function Controller(Tile, $scope, gridState) {
    var vm = this;
    vm.gridState = gridState;

    if(!vm.onColor) {
      vm.onColor = 'yellow';
    }
    if(!vm.offColor) {
      vm.offColor = 'black';
    }
    vm.tileStyle = {
      backgroundColor: vm.offColor
    };
    
    $scope.$watch(function() {
      return vm.tile.isOn;
    },    function () {
      if(vm.tile.isOn){
        vm.tileStyle.backgroundColor = vm.offColor;
      }
      else {
        vm.tileStyle.backgroundColor = vm.onColor;
      }


    });
  }
})();
