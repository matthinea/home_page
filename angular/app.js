var mySite = angular.module("mySite", ['ui.router', 'picardy.fontawesome']);

mySite.config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('main', {
            url: "/",
            controller: ["$scope", function ($scope) {
                $scope.iconColor = "white";
            }],
            views: {
                "@": {
                    templateUrl: "templates/index.html"
                },

                "github@main": {
                    templateUrl: "templates/github.html"
                }
            }
        })

        .state('portfolio', {
            url: "/portfolio",
            views: {
                "@": {
                    templateUrl: "templates/portfolio.html"
                }
            }
        })

        .state('about', {
            url: "/about",
            templateUrl: "templates/about.html"
        })

        .state('contact', {
            url: "/contact",
            templateUrl: "templates/contact.html"
        })

}])

