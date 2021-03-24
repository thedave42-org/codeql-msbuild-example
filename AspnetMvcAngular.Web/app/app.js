(function (angular) {
    'use strict';

    angular
        .module('app', [])
        .controller('homeCtrl', function () {
            var vm = this;

            vm.submit = function() {
                alert('Hello from angular, form submitted.');
            };
        });

})(angular);