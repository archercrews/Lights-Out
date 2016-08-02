(function(){
'use strict';

angular
  .module('myApp')
  .directive('sampleComponent', sampleComponent);

  function sampleComponent(){
    console.log('sampleComponent');
    var directive = {
      templateUrl: 'app/components/sample-component/sample-component.html',
      controller: Controller
    };

    return directive;
  }

  function Controller() {
    console.log('controller');

    function link(scope, element, attrs) {
      
    }
  }
})();
