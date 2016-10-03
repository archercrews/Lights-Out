(function(){
'use strict';

angular
  .module('myApp')
  .factory('Tile', tileFactory)
    function tileFactory() {
      // Checks that coordinates are not null and of type number
      var isValid = function(coordinate) {
          return coordinate !== null && typeof coordinate === 'number';
          };

      
      function Tile(enteredX, enteredY) {
        var tileOn = false;
        var x,y;

        Object.defineProperty(this, 'isOn', {
          enumerable: true,
          configurable: false,
          get: function(){
            return tileOn;
          },
          set: function(value){
            tileOn = value;
          }

        });

        Object.defineProperty(this, 'x', {
          enumerable: true,
          configurable: false,
          get: function(){
            return x;
          },
          set: function(value){
            if(isValid(value)){
              x = value;
            }
            else{
              throw new Error();
            }
          }
        });

        Object.defineProperty(this, 'y', {
          enumerable: true,
          configurable: false,
          get: function(){
            return y;
          },
          set: function(value){
            if(isValid(value)){
              y = value;
            }
            else{
              throw new Error();
            }
          }
        });

        // Checks that the entered coordinates are valid
        if(isValid(enteredX) && isValid(enteredY)) {
            x = angular.copy(enteredX);
            y = angular.copy(enteredY);
        }
    }

    // Changes the tile value of isOn to true/false
    Tile.prototype.toggle = function(){
      this.isOn = !this.isOn;
    };

    return Tile;
  }
})();
