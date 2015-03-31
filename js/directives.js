app.directive('cvSection', function () {
    return{
        restrict: "E",
        templateUrl: "partials/directives/cvSectionTemplate.htm",
        transclude: true
    }
});