var portifa = angular.module('portifa', [ 'ngSanitize', 'ngResource' ]);


portifa.factory('Profile', [ '$resource', function($resource) {
	return $resource('http://ariel.pchara.com/app/data/profile.json');
	//return $resource('profile.json');
} ]);

portifa.factory('Code', [ '$resource', function($resource) {
	return $resource('http://ariel.pchara.com/app/data/code.json');
	//return $resource('code.json');
} ]);

portifa.factory('Portfolio', [ '$resource', function($resource) {
	return $resource('http://ariel.pchara.com/app/data/portfolio.json');
	//return $resource('portfolio.json');
} ]);

portifa.factory('Experience', [ '$resource', function($resource) {
	return $resource('http://ariel.pchara.com/app/data/experiences.json');
	//return $resource('experiences.json');
} ]);


portifa.config([ '$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
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

portifa.controller('portfolio', [ '$scope', '$http', 'Portfolio',
		function($scope, $http, Portfolio) {
			$scope.itens = Portfolio.query();
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