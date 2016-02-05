/// <reference path="angular.min .js" />


var MyApp = angular
                .module("myModule", [])
                .controller("myController", function ($scope)
                {
                    var employees =
                        [
                            { name: "Emilio", gender: "Male", salary: 55000, city: "Madrid" },
                            { name: "zina", gender: "famele", salary: 000, city: "Roma" },
                            { name: "Hector", gender: "Male", salary: 55450, city: "Medellin" },
                            { name: "Camilo", gender: "Male", salary: 78450, city: "Bogota" },
                            { name: "Claudia", gender: "Famele", salary: 55478, city: "Valencia" }
                        ];

                    $scope.employees = employees;

                    $scope.search = function (item)
                    {
                        if($scope.SearchText == undefined)
                        {
                            return true;
                        }
                        else
                        {
                            if ( item.name.toLowerCase().indexOf($scope.SearchT.toLowerCase()) != -1 ||
                                 item.city.toLowerCase().indexOf($scope.SearchT.toLowerCase()) != -1)
                            {
                                return true;
                            }
                        }

                        return false;
                    };
                });
                  
                                                                                     