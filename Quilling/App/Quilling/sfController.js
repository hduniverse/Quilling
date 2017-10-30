quillingApp.controller('sfController',
    function sfController($scope, $window, $routeParams, sfService) {
        if ($routeParams.id) {
            $scope.card = sfService.getCard($routeParams.id);
        }
        else {
            $scope.card = { id: 0 };
        }
        //$scope.card = sfService.getCard($routeParams.id);
        
        $scope.updatedCard = angular.copy($scope.card);

        $scope.occasions = [
            "Wedding",
            "Birthday",
            "Valentine's Day",
            "Christmas",
            "Kefish me shti zvynna..."
        ];

        $scope.submitForm = function () {
            if ($scope.updatedCard.id == 0) {
                sfService.insertCard($scope.updatedCard);
            }
            else {
                sfService.updateCard($scope.updatedCard);
            }

            $scope.card = angular.copy($scope.updatedCard);
            window.history.back();
        }


        $scope.cancelForm = function () {
            window.history.back();
        }
    });