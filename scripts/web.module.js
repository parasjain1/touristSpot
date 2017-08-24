
var touristSpot  = angular.module('touristSpot',[
		'ngRoute',
    'ngCookies' ,
    'touristSpot.services',
    'touristSpot.controllers.home',
		'ngMap'
]).directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);


touristSpot.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

touristSpot.filter('range', function() {
        return function(input) {
            var lowBound, highBound;
            switch (input.length) {
            case 1:
                lowBound = 0;
                highBound = parseInt(input[0]) - 1;
                break;
            case 2:
                lowBound = parseInt(input[0]);
                highBound = parseInt(input[1]);
                break;
            default:
                return input;
            }
            var result = [];
            for (var i = lowBound; i <= highBound; i++)
                result.push(i);
            return result;
        };
    });

touristSpot.run(function($rootScope, $window) {

  $rootScope.$on('$routeChangeSuccess', function () {

    var interval = setInterval(function(){
      if (document.readyState == 'complete') {
        $window.scrollTo(0, 0);
        clearInterval(interval);
      }
    }, 200);

  });
});
