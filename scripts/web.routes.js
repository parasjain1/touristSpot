
touristSpot.config(function($routeProvider, $locationProvider) {
  "use strict";

  $routeProvider.when('/', {
		 templateUrl: 'home.html'
		 });

  $routeProvider.when('/city', {
      templateUrl: 'city.html'
      });

  $routeProvider.when('/place', {
      templateUrl: 'place.html'
      });

  $routeProvider.when('/allCities', {
      templateUrl: 'portfolio.html'
      });

  $routeProvider.when('/contact', {
      templateUrl: 'contact.html'
      });

  $routeProvider.when('/about', {
      templateUrl: 'about.html'
      });


});
