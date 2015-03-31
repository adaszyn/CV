app.controller("CvController", ['$scope',function ($scope) {
    $scope.details = {
        "personal": {
            "name": "Wojciech",
            "surname": "Adaszyński",
            "birth": "1994-07-13",
            "email": "wojciech.adaszynski@gmail.com",
            "nationality": "polish"

        },
        "education": {
            "highschool": {
                "name": "1 Liceum Ogólnokształcące w Zielonej Górze",
                "description": "blas",
                "date": "2010-2013"
            },
            "university": {
                "name": "AGH University of Science and Technology",
                "description": "Undergraduate programme in Computer Science",
                "date": "2013-"

            }
        }
    };
}]);