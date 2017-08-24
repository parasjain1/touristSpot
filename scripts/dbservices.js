
angular.module('touristSpot.services', ['ngResource','angularFileUpload'])
  .value('version', '0.1')

  .service('queryData', function ($http,$upload) {
    "use strict";
    this.callRest = function ($title) {


    	return $upload.upload({
        url: '/',
        method: "POST",
        headers: {'Authorization': fcmToken, 'Content-Type':'application/x-www-form-urlencoded'},
    	data: {'heading':$title}
      });
    };
  });
