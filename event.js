var myapp = angular.module("myapp", []);
myapp.controller("myctrl", function($scope, $http) {
    $http.get('https://raw.githubusercontent.com/soniyaasurendra/json/main/event.json')
        .success(function(response) {
            $scope.names = response.securityemployeeInformation;
        });
    $scope.rowlimit = 5;
});