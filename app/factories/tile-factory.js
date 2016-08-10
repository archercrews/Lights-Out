(function(){
'use strict';

angular
  .module('myApp')
  .factory('Tile', tileFactory)
    function tileFactory() {
      var isOn = false;
      function Tile() {}
      Tile.prototype.isOn = function(){
        return isOn;
      }

      return Tile;
    }
})();
