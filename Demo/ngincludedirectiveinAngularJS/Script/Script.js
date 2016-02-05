/// <reference path="angular.min .js" />


var MyApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope)
                {
                    var employees =
                        [
                            { name: "Emilio", dateOfBirth: new Date("April 9, 2000"), gender: "Male", salary: 55000.898 },
                            { name: "Camilo", dateOfBirth: new Date("May 15, 1985"), gender: "Male", salary: 3540008 },
                            { name: "Zina", dateOfBirth: new Date("August 10, 1975"), gender: "Female", salary: 200000.788 },
                            { name: "Leo", dateOfBirth: new Date("Octuber 12, 1979"), gender: "Male", salary: 95000 },
                            { name: "Mayi", dateOfBirth: new Date("December 8, 1978"), gender: "Femele", salary: 58000.55 }
                        ];

                    $scope.employees = employees;
                    $scope.employeeView = "EmloyeeTable.html";
                   
                });
                  
                                                                                     