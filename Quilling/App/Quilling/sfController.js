quillingApp.controller('sfController',
    function sfController($scope, sfService) {
        $scope.card = sfService.card;

        $scope.occasions = [
            "Wedding",
            "Birthday",
            "Valentine's Day",
            "Christmas",
            "Kefish me shti zvynna..."
        ];

        $scope.submitForm = function () {
            alert("Form submitted");
        };
    });