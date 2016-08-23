(function(){
'use strict';

angular
  .module('myApp')
  .service('gridState', gridStateService);

    gridStateService.$inject = ['Tile'];
    function gridStateService(Tile, $scope) {
      var grid = [
        [new Tile(), new Tile(), new Tile()],
        [new Tile(), new Tile(), new Tile()]
      ];
      var service = {
        grid: grid,
        tileChanged: function(){}
      };

      return service;
    }
})();
