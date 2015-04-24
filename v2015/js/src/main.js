angular.module('Portfolio',['PcharaDiretivas'])
    .controller('BodyController',['$scope',function($scope){
    }])
    .controller('TerminalController',['$scope',function($scope){
        $scope.logs = [
            "Enter \"$ help\" to help"
        ];
        $scope.command = '';
        $scope.$on('addCommand',function(){
            $scope.logs.push($scope.command);
            $scope.command = '';
            $scope.$digest();
        });
    }]);