
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {templateUrl: "app/view/view.html", controller: 'ViewCtrl'})
		.otherwise({redirectTo: "/"}); 
});
