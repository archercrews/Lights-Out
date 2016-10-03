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

    // Sets the tile on and off colors if they don't already exist
    if(!vm.onColor) {
      vm.onColor = 'yellow';
    }
    if(!vm.offColor) {
      vm.offColor = 'black';
    }

    // Sets the default tile color upon starting the app
    vm.tileStyle = {
      backgroundColor: vm.offColor
    };

    // Watches for a change of the isOn value in tile factory
    // and sets the color of the tile based on the value of tile.isOn
    $scope.$watch(function() {
      return vm.tile.isOn;
    },
    function () {
      if(vm.tile.isOn){
        vm.tileStyle.backgroundColor = vm.onColor;
      }
      else {
        vm.tileStyle.backgroundColor = vm.offColor;
      }
    });
  }
})();
