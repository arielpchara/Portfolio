var portifa = angular.module('portfolio', [ 'ngSanitize', 'ngResource']);

/**
portifa.factory('Profile', [ '$resource', function($resource) {
	return $resource('profile.json');
} ]);

portifa.factory('Code', [ '$resource', function($resource) {
	return $resource('code.json');
} ]);

portifa.factory('Portfolio', [ '$resource', function($resource) {
	return $resource('portfolio.json');
} ]);

portifa.controller('code', [ '$scope', '$http', 'Code',
		function($scope, $http, Code) {
			$scope.code = Code.get();
			$scope.stars = [ 1, 2, 3, 4, 5 ];
		} ]);

portifa.controller('profile', [ '$scope', '$http', 'Profile',
		function($scope, $http, Profile) {
			$scope.profile = Profile.get();
		} ]);

**/


portifa.factory('Portfolio', [ '$resource', function($resource) {
	return $resource('data/portfolio.json');
} ]);

portifa.controller('portfolio', [ '$scope', '$http', 'Portfolio',
		function($scope, $http, Portfolio) {
			$scope.itens = Portfolio.query();
		}]);

portifa.factory('Experience', [ '$resource', function($resource) {
	return $resource('data/experiences.json');
} ]);
portifa.controller('experiences', [ '$scope', '$http', 'Experience',
		function($scope, $http, Experience) {
			$scope.itens = Experience.query();
			$scope.order = 'time';
		} ]);

portifa.filter('plus', function() {
	return function(value) {
		return value.join(" + ");
	}
});
portifa.filter('to', function() {
	return function(value) {
		return value.join(" - ");
	}
});
portifa.filter('classes', function() {
	return function(value) {
		return value.join(" ");
	}
});