var app = angular.module('Questionnaire', []);
app.controller('main', function ($scope, $http) {
    $scope.page1 = true;
    $scope.questions = angular.copy(data);
    $scope.alternatif = {};
    $scope.GetTotal = function () {
        $scope.page1 = false;
        $scope.page2 = true;
        $scope.Total = 0;
        $scope.alternatif.Preoccupation = 0;
        $scope.alternatif.EmotionalImpact = 0;
        $scope.alternatif.SexuelImpact = 0;
        $scope.alternatif.Transmission = 0;
        $scope.alternatif.Positives = 0;
        $scope.alternatif.Negatives = 0;
        $scope.principal = {};
        $scope.principal.Preoccupation = 0;
        $scope.principal.EmotionalImpact = 0;
        $scope.principal.SexuelImpact = 0;
        $scope.principal.SelfImage = 0;
        $scope.principal.Partner = 0;
        $scope.principal.Doctor = 0;
        $scope.principal.Life = 0;

        angular.forEach($scope.questions, function (value, key) {
            $scope.Total += value.value;
            if (value.Id == 3 || value.Id == 7 || value.Id == 12 ||
                value.Id == 13 || value.Id == 15 || value.Id == 16 ||
                value.Id == 17 || value.Id == 20) 
            {
                $scope.alternatif.Preoccupation += value.value;
            }
            else if(value.Id == 2 || value.Id == 5 || value.Id == 8 || value.Id == 26)
            {
                $scope.alternatif.EmotionalImpact += value.value;
            }
            else if(value.Id == 9 || value.Id == 24 || value.Id == 25)
            {
                $scope.alternatif.SexuelImpact += value.value;
            }
            else if(value.Id == 18 || value.Id == 19 || value.Id == 21 || value.Id == 22)
            {
                $scope.alternatif.Transmission += value.value;
            }
            else if(value.Id == 1 || value.Id == 4 || value.Id == 6 || value.Id == 10 || value.Id == 14 || value.Id == 27)
            {
                $scope.alternatif.Positives += value.value;
            }
            else if(value.Id == 11 || value.Id == 23 || value.Id == 28 || value.Id == 29)
            {
                $scope.alternatif.Negatives += value.value;
            }


            if (value.Id == 7 || value.Id == 12 || value.Id == 13 || value.Id == 15 || value.Id == 16 ||
                value.Id == 17 ||value.Id == 18 || value.Id == 19 || value.Id == 20) 
            {
                $scope.principal.Preoccupation += value.value;
            }
            else if(value.Id == 2 || value.Id == 3 || value.Id == 5 || value.Id == 8 || value.Id == 14)
            {
                $scope.principal.EmotionalImpact += value.value;
            }
            else if( value.Id == 24 || value.Id == 25)
            {
                $scope.principal.SexuelImpact += value.value;
            }
            else if(value.Id == 1 || value.Id == 10 || value.Id == 11 || value.Id == 23)
            {
                $scope.principal.SelfImage += value.value;
            }
            else if(value.Id == 9 || value.Id == 21 || value.Id == 22)
            {
                $scope.principal.Partner += value.value;
            }
            else if(value.Id == 27 || value.Id == 28 || value.Id == 29)
            {
                $scope.principal.Doctor += value.value;
            }
            else if(value.Id == 4 || value.Id == 6 || value.Id == 26)
            {
                $scope.principal.Life += value.value;
            }
        });
    }
});