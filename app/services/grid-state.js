(function(){
'use strict';

angular
  .module('myApp')
  .service('gridState', gridStateService);

    gridStateService.$inject = ['Tile'];
    function gridStateService(Tile) {
      var grid = [
        [new Tile(), new Tile(), new Tile()],
        [new Tile(), new Tile(), new Tile()]
      ];
      var service = {
        grid: grid
      };

      return service;
    }
})();
