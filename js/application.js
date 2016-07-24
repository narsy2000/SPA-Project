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

/* Navigation should be always from the mainController */
myApp.controller("mainController",["$scope","$location",function($scope,$location){

	$scope.test = "Welcome";
	$scope.loadfgtPassword = function(){

		$location.url("/forgotPwd");
	}
	$scope.loadRegister = function(){

		$location.url("/register");
	}
	$scope.loadProducts = function(){

		$location.url("/forgotPwd");
	}	

	$scope.sendEmail = function(){

		$location.url("/");
	}

	$scope.loadProducts = function(){

		$location.url("/products");
	}

}]);

myApp.controller("forgotPwdController",["$scope","$location",function($scope,$location){





}]);

myApp.controller("registrationController",["$scope","$location",function($scope,$location){






}]);
myApp.controller("productDetailsController",["$scope","$location",function($scope,$location){






}]);




