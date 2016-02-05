/// <reference path="angular.min .js" />


var MyApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope, $http, $log)
                {
                    var succesCallBack = function (response) {
                        $scope.employees = response.data;
                    };

                    var errorCallback = function (response) {
                        $scope.error = response.data;
                    };
                    
                    $http(
                        {
                            method: 'GET',
                            url: 'EmployeeService.asmx/GetAllEmployee'
                        }).then(succesCallBack, errorCallback);
                 
                      
                });
                  
                                                                                     