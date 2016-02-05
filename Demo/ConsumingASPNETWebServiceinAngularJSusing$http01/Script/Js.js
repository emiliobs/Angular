/// <reference path="angular.js" />

var app = angular
        .module("MyModule", [])
        .controller("MyController", function ($scope, $http)
        {      //post funciona sin configurar el webconfig
            $http.get('EmployeeService.asmx/GEtAllEmployees')
                .then(function (response)
                {
                    $scope.employees = response.data;
                });
        });
