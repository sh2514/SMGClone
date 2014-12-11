'use strict';

angular.module('myApp')
.service('pushService', function ($log, $window, $scope, $rootScope) {
    function pushSomeEvent()
    {
        $scope.$emit('pushEvent');
    }
    this.pushSomeEvent = pushSomeEvent;
});