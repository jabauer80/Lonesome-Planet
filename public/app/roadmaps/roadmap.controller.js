(function () {
    "use strict";

    angular.module("app.roadmap")
        .controller("RoadmapController", RoadmapController);

    RoadmapController.$inject = ["$scope", "roadmapService", "user"]

    function RoadmapController($scope, roadmapService, user) {

        var vm = this;
        vm.roadmaps = roadmapService.getRoadmaps();
        vm.addRoadmap = addRoadmap;
        vm.editRoadmap = editRoadmap;
        vm.updateRoadmap = updateRoadmap;
        vm.deleteRoadmap = deleteRoadmap;
        vm.userId = user.uid;

        function addRoadmap() {
            vm.newRoadmap.createdOn = new Date().toISOString();
            vm.newRoadmap.createdBy = vm.userId;
            vm.newRoadmap.updatedOn = new Date().toISOString();
            vm.newRoadmap.updatedBy = vm.userId;

            roadmapService.addRoadmap(vm.newRoadmap);
            $scope.reset();
        }

        function editRoadmap(item) {
            vm.roadmap = item;
        }

        function updateRoadmap() {
            vm.roadmap.updatedOn = new Date().toISOString();
            vm.roadmap.updatedBy = vm.userId;

            roadmapService.updateRoadmap(vm.roadmap);
            $scope.reset();
        }

        function deleteRoadmap(item) {
            vm.roadmap = item;
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
                        roadmapService.removeRoadmap(vm.roadmap);
                    }
                }
            });
        }

        $scope.reset = function () {
            vm.newRoadmap = new roadmapService.Roadmap();
            $(".modal").modal("hide");
        }
    }

})();