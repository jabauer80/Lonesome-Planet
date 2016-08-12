/**
 * Created by jabau on 7/23/2016.
 */
(function () {
    "use strict";

    angular.module("app.roadmap")
        .controller("RoadmapController", RoadmapController);

    RoadmapController.$inject = ["$scope", "roadmapService", "user"]

    function RoadmapController($scope, roadmapService, user) {

        $scope.roadmaps = roadmapService.getRoadmapsById(user.uid);

        $scope.addRoadmap = function () {
            roadmapService.addRoadmap(angular.copy($scope.roadmap));
            $scope.reset();
        };

        $scope.editRoadmap = function (id) {
            $scope.roadmap = $scope.roadmaps[id];
        }

        $scope.updateRoadmap = function () {
            roadmapService.updateRoadmap($scope.roadmap);
            $scope.reset();
        };

        $scope.removeRoadmap = function (id) {
            BootstrapDialog.confirm({
                title: "Delete Confirmation",
                message: "Are you sure you want to delete this Roadmap?",
                type: BootstrapDialog.TYPE_DANGER,
                closable: true,
                draggable: false,
                btnCancelLabel: "Cancel",
                btnOKLabel: "Confirm",
                callback: function (result) {
                    if (result) {
                        roadmapService.removeRoadmap(id);
                    }
                }
            });
        };

        $scope.reset = function () {
            $scope.roadmap = {};
            $(".modal").modal("hide");
        }
    }
})();

