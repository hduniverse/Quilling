quillingApp.controller("homeController",
    function ($scope,$location) {
        $scope.makeNewCard = function () {
            $location.path('/newCardForm');
        };

        $scope.existingCard = function (id) {
            $location.path('/existingCard/'+id);
        };
})