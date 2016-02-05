/// <reference path="angular.min .js" />


var MyApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope)
                {
                    //var employees = [
                    //             { name: 'Emilio', gender: 'Male', city: 'Madrid' },
                    //             { name: 'Camilo', gender: 'Male', city: 'Roma' },
                    //             { name: 'Zina', gender: 'Female', city: 'Medellin' },
                    //             { name: 'Leo', gender: 'Male', city: 'Caceres' },
                    //             { name: 'Mayi', gender: 'Female', city: 'belfast' }
                    //];

                    //$scope.employees = employees;

                    var countries =
                        [
                            {
                                name: "India",
                                cities:
                                    [
                                        { name: "Hyderabad" },
                                        { name: "Chennai" }
                                    ]

                            },
                            {
                                name: "USA",
                                cities:
                                    [
                                        { name: "Loas Angeles" },
                                        { name: "Chicago" }
                                    ]
                            }
                        ];
                    
                    $scope.countries = countries;
                    
                });
                  
                                                                                     