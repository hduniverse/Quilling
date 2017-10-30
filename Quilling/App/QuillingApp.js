var quillingApp = angular.module('quillingApp', ["ngRoute"]);
quillingApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "App/Home.html",
            controller: "homeController"
        })
        .when("/newCardForm", {
            templateUrl: "App/Quilling/sfTemplate.html",
            controller: "sfController"
        })

        .when("/existingCard/:id", {
            templateUrl: "App/Quilling/sfTemplate.html",
            controller: "sfController"
        })

        .otherwise({
            redirectTo: "/home"
        })


});