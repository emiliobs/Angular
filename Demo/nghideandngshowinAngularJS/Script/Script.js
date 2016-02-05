/// <reference path="angular.min .js" />


var MyApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope)
                {
                    var employees =
                        [
                            { name: "Emilio", gender:"Male",city:"Madrid",salary: 55000.898 },
                            { name: "Camilo", gender:"Male",city:"Londres", salary: 3540008 },
                            { name: "Zina",   gender: "Female",city:"Miami", salary: 200000.788 },
                            { name: "Leo", gender: "Male", city: "cali", salary: 95000 },
                            { name: "Mayi", gender: "Female", city: "Popayan", salary: 58000.55 }
                        ];

                    $scope.employees = employees;
                    

                    
                });
                  
                                                                                     