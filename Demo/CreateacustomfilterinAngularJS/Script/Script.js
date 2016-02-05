/// <reference path="angular.min .js" />


var MyApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope)
                {
                    var employees =
                        [
                            { name: "Emilio", gender: 1,salary: 55000.898 },
                            { name: "Camilo", gender: 2, salary: 3540008 },
                            { name: "Zina",   gender: 1, salary: 200000.788 },
                            { name: "Leo",    gender: 2, salary: 95000 },
                            { name: "Mayi",   gender: 3, salary: 58000.55 }
                        ];

                    $scope.employees = employees;
                    

                    
                });
                  
                                                                                     