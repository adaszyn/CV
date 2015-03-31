var app = angular.module('mainApp', ['ui.router','ngProgress']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("");
    $stateProvider
        .state('cv', {
            url: "/cv",
            templateUrl: "partials/cv.html",
        })
        .state('projects', {
            url: "/projects",
            templateUrl: "partials/projects.html"
        })
        .state('links', {
            url: "/links",
            templateUrl: "partials/links.html"
        })

});


app.controller("TestController",['$scope', function($scope){
    $scope.test = "test"

}
]);
