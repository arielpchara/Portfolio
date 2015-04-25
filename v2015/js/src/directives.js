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