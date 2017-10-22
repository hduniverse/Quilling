quillingApp.controller('sfController',
    function sfController($scope, sfService) {
        $scope.quilling = sfService.quilling;
    });