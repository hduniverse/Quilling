quillingApp.controller("homeController",
    function ($scope,$location) {
        $scope.makeNewCard = function () {
            $location.path('/newCardForm');
        };
})