angular.module('PcharaDiretivas',[])
    .directive('focusInput',function($timeout, $parse) {
      return {
        //scope: true,   // optionally create a child scope
        link: function(scope, element, attrs) {
          var id = $parse(attrs.focusMe);
          element.bind('click',function(){
            this.querySelector('input[type=text]').focus();
          })[0].click();
        }
      };
    })
    .directive('addCommand',function($timeout, $parse) {
      return {
        //scope: true,   // optionally create a child scope
        link: function(scope, element, attrs) {
          var id = $parse(attrs.focusMe);
          element.bind('keyup',function(e){
            if( e.keyCode === 13 ){
                scope.$emit('addCommand');
            }
            return true;
          });
        }
      };
    });
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