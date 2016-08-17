(function () {
    "use strict";

    angular.module("app.roadmap")
        .factory("roadmapService", roadmapService);

    roadmapService.$inject = ["$firebaseArray", "firebaseDataService"];

    function roadmapService($firebaseArray, firebaseDataService) {

        var roadmaps = null;

        var service = {
            Roadmap: Roadmap,
            getRoadmaps: getRoadmaps,
            addRoadmap: addRoadmap,
            updateRoadmap: updateRoadmap,
            removeRoadmap: removeRoadmap,
        };

        return service;

        ////////// implementation

        function Roadmap() {
            this.title = "";
            this.startDate = "";
            this.createdOn = "";
            this.createdBy = "";
            this.updatedOn = "";
            this.updatedBy = "";
        }

        function getRoadmaps() {
            if (!roadmaps) {
                roadmaps = $firebaseArray(firebaseDataService.roadmaps);
            }
            return roadmaps;
        }

        function addRoadmap(item) {
            roadmaps.$add(item)
                .then(function () {
                    toastr.success("Roadmap created successfully!")
                })
                .catch(function (error) {
                    toastr.error(error);
                });
        }

        function updateRoadmap(item) {
            roadmaps.$save(item)
                .then(function () {
                    toastr.success("Roadmap updated successfully!")
                })
                .catch(function (error) {
                    toaster.error(error);
                });
        }

        function removeRoadmap(item) {
            roadmaps.$remove(item)
                .then(function () {
                    toastr.success("Roadmap deleted successfully!")
                })
                .catch(function (error) {
                    toaster.error(error);
                });
        }
    }

})();