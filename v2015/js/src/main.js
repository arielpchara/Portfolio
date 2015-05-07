angular.module('Portfolio',['PcharaDiretivas','CommandsModule'])
    .controller('BodyController',['$scope',function($scope){
        // body controller
    }])
    .controller('TerminalController',['$scope','Exec',function($scope, Exec){
        $scope.logs = [
            "Enter \"$ help\" to help"
        ];
        $scope.command = '';
        $scope.$on('terminal',function(){
            var response = Exec( $scope.command );
            $scope.logs.push( response.mothod );
            $scope.command = '';
            $scope.$digest();
        });
    }]);