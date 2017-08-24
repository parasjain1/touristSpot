var dbcntrl = angular.module('touristSpot.controllers.home', [
		'touristSpot.services', 'ngResource', 'ngRoute', 'ngCookies',
		'LocalStorageModule' ,'angularFileUpload']);

dbcntrl.controller('home', function($rootScope, $scope, $http, $routeParams,
		queryData, $cookieStore, localStorageService,$upload) {



	$rootScope.file = null;
	$scope.inAppEnabled = false;
	$scope.cities = cities;

	$scope.isFullScreen = false;
	$scope.makeFullScreen = function(){
  	$scope.isFullScreen = true;
	};

	$scope.$on('mapInitialized', function (event, map) {
            $scope.mapObj = map; });

	$scope.showInfoWindow = function (event, city) {
            var infowindow = new google.maps.InfoWindow();
            var center = new google.maps.LatLng(city.lat, city.lng);

						var url = "#city?id=" + city.id;

            infowindow.setContent(
							'<img src="images/cities/' + city.id + '/landscape.jpg" style="height:100px;width:auto;margin-bottom:10px" /> <br/>' +
                '  <a href="' + url + '" > <span style="font-size:1.5">' + city.name + ' | ' + city.places.length + ' Places </span> </a>'
							);

            infowindow.setPosition(center);
            infowindow.open($scope.mapObj);
         };

	 $scope.mapFullScreen = function(event) {
		 elem = document.getElementById('mapContainer');
			 if (elem.requestFullScreen) {
			 elem.requestFullScreen();
		 } else if (elem.mozRequestFullScreen) {
			 elem.mozRequestFullScreen();
		 } else if (elem.webkitRequestFullScreen) {
			 elem.webkitRequestFullScreen();
		 }
	 }

});


dbcntrl.controller('city', function($rootScope, $scope, $http, $routeParams,
		queryData, $cookieStore, localStorageService,$upload) {

	$("#container").animate({ scrollTop: 0 }, "fast");


	var cityId = $routeParams.id;
	$scope.city = cities[cityId - 1];
	$scope.places = $scope.city.places;

	$scope.$on('mapInitialized', function (event, map) {
            $scope.mapObj = map; });

	$scope.showInfoWindow = function (event, place) {
            var infowindow = new google.maps.InfoWindow();
            var center = new google.maps.LatLng(place.lat, place.lng);

						var url = "#place?id=" + place.id + "&cityId=" + $scope.city.id;

            infowindow.setContent(
							'<img src="images/cities/' + ($scope.city.id - 1) + '/' + (place.id - 1) +'.jpg" style="height:100px;width:auto;margin-bottom:10px" /> <br/>' +
                '  <a href="' + url + '" > <span style="font-size:1.5">' + place.name + ' </span> </a>'
							);

            infowindow.setPosition(center);
            infowindow.open($scope.mapObj);
         };

	 $scope.mapFullScreen = function(event) {
		 elem = document.getElementById('mapContainer');
			 if (elem.requestFullScreen) {
			 elem.requestFullScreen();
		 } else if (elem.mozRequestFullScreen) {
			 elem.mozRequestFullScreen();
		 } else if (elem.webkitRequestFullScreen) {
			 elem.webkitRequestFullScreen();
		 }
	 }

});


dbcntrl.controller('place', function($rootScope, $scope, $http, $routeParams,
		queryData, $cookieStore, localStorageService,$upload) {

	$("#container").animate({ scrollTop: 0 }, "fast");


	var cityId = $routeParams.cityId;
	var placeId = $routeParams.id;
	$scope.city = cities[cityId - 1];
	$scope.places = $scope.city.places;
	$scope.place = $scope.places[placeId - 1];

	$scope.$on('mapInitialized', function (event, map) {
            $scope.mapObj = map; });

	$scope.showInfoWindow = function (event, place) {
            var infowindow = new google.maps.InfoWindow();
            var center = new google.maps.LatLng(place.lat, place.lng);

						var url = "#place?id=" + place.id + "&cityId=" + $scope.city.id;

            infowindow.setContent(
							'<img src="images/cities/' + ($scope.city.id - 1) + '/' + (place.id - 1) +'.jpg" style="height:100px;width:auto;margin-bottom:10px" /> <br/>' +
                '  <a href="' + url + '" > <span style="font-size:1.5">' + place.name + ' </span> </a>'
							);

            infowindow.setPosition(center);
            infowindow.open($scope.mapObj);
         };

	 $scope.mapFullScreen = function(event) {
		 elem = document.getElementById('mapContainer');
			 if (elem.requestFullScreen) {
			 elem.requestFullScreen();
		 } else if (elem.mozRequestFullScreen) {
			 elem.mozRequestFullScreen();
		 } else if (elem.webkitRequestFullScreen) {
			 elem.webkitRequestFullScreen();
		 }
	 }

});


dbcntrl.controller('allCities', function($rootScope, $scope, $http, $routeParams,
		queryData, $cookieStore, localStorageService,$upload) {


	$scope.cities = cities;

});
