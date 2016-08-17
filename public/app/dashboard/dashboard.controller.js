/**
 * Created by jabau on 7/22/2016.
 */
(function () {
    "use strict";

    angular.module("app.dashboard")
        .controller("DashboardController", DashboardController);

    DashboardController.$inject = ["$scope", "roadmapService"]

    function DashboardController($scope, roadmapService) {
        var vm = this;
    vm.roadmaps = roadmapService.getRoadmaps();
        // console.log(user.uid);

        // vm.parties  = partyService.getPartiesByUser(user.uid);
    }

})();