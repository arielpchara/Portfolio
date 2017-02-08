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
                        // console.log(e.keyCode);
                        element[0].focus();
                        // setTimeout(function() {
                        //     console.log(element[0].focus);
                        // }, 500);
                        return false;
                    }
                    return true;
                }).bind('focus', function() {
                    console.log(this);
                });
            }
        };
    });