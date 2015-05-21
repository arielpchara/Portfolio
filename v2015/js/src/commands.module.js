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