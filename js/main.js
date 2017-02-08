angular.module('CommandsModule',['ngResource'])
    .factory('Commands', ['$resource', function($resource) {
        return $resource('/commands.json',null,{
            isArray:true
        });
    }])
    .factory('Exec', ['Commands', function(Commands) {
        var data = Commands.query();
        return function(command){
            var c = _(data).find( function(value) {
              return value.command === command;
            });
            if( c ){
                return c;
            }else{
                return false;
            }
        };
        
    }]);


var HelpCommand = function(){
    var self = this;

    self.exec = function(){
        return false;
    };

};
angular.module('PcharaDiretivas', [])
    .directive('focusInput', function($timeout, $parse) {
        return {
            //scope: true,   // optionally create a child scope
            link: function(scope, element, attrs) {
                var id = $parse(attrs.focusMe);
                element.bind('click', function() {
                    this.querySelector('input[type=text]').focus();
                })[0].click();
            }
        };
    })
    .directive('addCommand', function($timeout, $parse) {
        return {
            //scope: true,   // optionally create a child scope
            link: function(scope, element, attrs) {
                var id = $parse(attrs.focusMe);
                element.bind('keydown', function(e) {
                    if (e.keyCode === 13) {
                        scope.$emit('terminal');
                    } else if (e.keyCode === 9) {
                        element[0].focus();
                        return false;
                    }
                    return true;
                }).bind('focus', function() {
                    console.log(this);
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
        $scope.$on('terminal',function(){
            var response = Exec( $scope.command );
            $scope.logs.push( response.mothod );
            $scope.command = '';
            $scope.$digest();
        });
    }]);