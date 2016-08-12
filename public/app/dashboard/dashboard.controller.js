/**
 * Created by jabau on 7/22/2016.
 */
(function () {
    "use strict";

    angular.module("app.dashboard")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ["$scope", "roadmapService", "user"]

    function DashboardController($scope, roadmapService, user) {
        var vm = this;
        $scope.roadmaps = roadmapService.getRoadmapsById(user.uid);
        // console.log(user.uid);

        // vm.parties  = partyService.getPartiesByUser(user.uid);
    }

})();