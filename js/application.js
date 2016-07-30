var myApp= angular.module("myAppModule",["ngRoute"]);

myApp.config(["$routeProvider",function($routeProvider){

		$routeProvider
		.when("/forgotPwd",{

			templateUrl : "templates/forgotPassword.htm",
			controller  :"forgotPwdController"

		}).when("/register",{

			templateUrl : "templates/registration.htm",
			controller  :"registrationController"


		}).when("/products",{

			templateUrl : "templates/productDetails.htm",
			controller  :"productDetailsController"


		}).otherwise({

			templateUrl:"templates/login.htm"
		})

	}]);

/* Navigation should be always from the mainController because we are navigating always from this page i.e index.html initially */
myApp.controller("mainController",["$scope","$location",function($scope,$location){

	$scope.test = "Welcome";
	$scope.loadfgtPassword = function(){

		$location.url("/forgotPwd");
	}
	$scope.loadRegister = function(){

		$location.url("/register");
	}
	
	$scope.sendEmail = function(){

		$location.url("/");
	}

	$scope.loadProducts = function(){

		$location.url("/products");
	}

}]);

myApp.controller("forgotPwdController",["$scope","$location","$http",function($scope,$location,$http){





}]);

myApp.controller("registrationController",["$scope","$location",function($scope,$location){






}]);
myApp.controller("productDetailsController",["$scope","$location","$http",function($scope,$location,$http){
	alert("controller");
 
	var url = "http://localhost/productsApi/api/Values";

	// $scope.details = [];
	// $scope.showProductDetails = function() {
	// 	$scope.showDetails = true;
		$http({
			url: url,
			method: "GET"
		}).then(function success(response){

			// var jsonData = JSON.stringify(response.data);
			// console.log(jsonData);
			// var javaScriptObject = JSON.parse(jsonData)
			// console.log(javaScriptObject);

			$scope.details=response.data;
			console.log(response.data)

		},function error(response){

			alert(response.statusText);

		});

	// }
	$scope.logout = function(){

		$location.url("/");
	}

}]);




