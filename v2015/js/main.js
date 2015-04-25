angular.module('CommandsModule',['ngResource'])
    .factory('Commands', ['$resource', function($resource) {
        return $resource('/commands.json',null,{
            isArray:true
        });
    }])
    .factory('Exec', ['Commands', function(Commands) {
        var data = Commands.query();
        return function(command){
            return _(data).find( function(value) {
              return value.command === command;
            });
        };
        
    }]);
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
          element.bind('keydown',function(e){
            console.log(e.keyCode);
            if( e.keyCode === 13 ){
                scope.$emit('addCommand');
            }else if( e.keyCode === 9 ){
                
            }
            return true;
          });
        }
      };
    });
angular.module('Portfolio',['PcharaDiretivas','CommandsModule'])
    .controller('BodyController',['$scope',function($scope){
        // body controller
    }])
    .controller('TerminalController',['$scope','Exec',function($scope, Exec){
        $scope.logs = [
            "Enter \"$ help\" to help"
        ];
        $scope.command = '';
        $scope.$on('addCommand',function(){
            var response = Exec( $scope.command );
            console.log(response);
            $scope.logs.push( response.mothod );
            $scope.command = '';
            $scope.$digest();
        });
    }]);