(function(){
'use strict';

angular
  .module('myApp')
  .service('gridState', gridStateService);

    gridStateService.$inject = ['Tile'];
    function gridStateService(Tile) {
      var grid = [
        [new Tile(0,0), new Tile(1,0), new Tile(2,0)],
        [new Tile(0,1), new Tile(1,1), new Tile(2,1)],
        [new Tile(0,2), new Tile(1,2), new Tile(2,2)]
      ];
      var service = {
        grid: grid,
        tileChanged: function(tile){
          tile.toggle();
          var tiles = _.flatten(grid);
          var foundTile = _.find(tiles, function(t) {
            return tile.x -1 == t.x && tile.y == t.y;
          });
          foundTile.toggle();
        }
      };

      return service;
    }
})();
