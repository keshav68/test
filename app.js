   'use strict';

var app = angular.module("myApp", []); 
        
		
		
app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.PUT = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});

 
 app.controller('myCtrl',['$scope','$http','userData', function($scope,$http,userData) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
	
	$scope.getUserData=function(){
		
		var promise=userData.getUser();
		promise.then(
		function(payload){
			$scope.getData=payload.data;
		},
		function(errorPayload) {
              $scope.getData='error';
          });
		
	};
	
	$scope.sendData=function(){		
	
		var value={
			name:$scope.name,
			email:$scope.email
		};
		 
		
		var res=$http.post("http://localhost:5004/keshav/add?name="+$scope.name+"&email="+$scope.email);
		res.success(function(data, status, headers, config) {
			$scope.message = 'Insertion successfull';
		});
		
	};
	
	$scope.updtaeData=function(){		
	
		var value={
			name:$scope.updatedname,
			email:$scope.updtaedemail
		};
		 
		
		var res=$http.put("http://localhost:5004/keshav/update?name=keshav1136&email=keshavrrrr@gmail.com");
		res.success(function(data, status, headers, config) {
			$scope.updateMessage = 'Update successfull';
		});
		
		
		
	};
	$scope.sendDataAngular=function(){		
	
		var value={
			'name':$scope.name,
			'email':$scope.email
		};	
		 
		
		
		
		
		
		
	
		var req = {
				method: 'POST',
				url: 'http://localhost:5004/keshav/addFromAngular',
				headers: {
					'Content-Type': 'application/json'
					},
					data: {"email": "aawwxx@hxx.com", "name": "eeexxddd"  }
		}
		
		$http(req)
		.success(function(data) {
		  $scope.gists = data;
		})
		.error(function(data, status) {
		  console.log("Repos error");
		})
		.finally(function() {
		  console.log("finally finished repos");
		});
		
	};
}]);

app.factory('userData',function($http){
	return{
		getUser:function(){
			 return $http.get('http://localhost:5004/keshav/getUserALL');
		}
		
		
	}
});