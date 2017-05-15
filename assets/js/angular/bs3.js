(function () {

    /**
     * Config
     */
    var moduleName = 'bs3';

    /**
     * Module
     */
    var module;
    try {
        module = angular.module(moduleName);
    } catch (err) {
        // named module does not exist, so create one
        module = angular.module(moduleName, []);
    }

    module.directive('collapse', [
        function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var id = attrs['collapse'];
                    element.on('click', function(e){
                        e.preventDefault();
                        $(id).collapse('toggle');
                    });
                }
            };
        }
    ]);
})(angular);