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