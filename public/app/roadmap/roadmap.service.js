/**
 * Created by jabau on 7/30/2016.
 */
(function () {
    "use strict";

    angular.module("app.roadmap")
        .factory("roadmapService", roadmapService);

    roadmapService.$inject = ["$firebaseArray", "firebaseDataService"];

    function roadmapService($firebaseArray, firebaseDataService) {

        var roadmaps = {};

        // toastr.info('Are you the 6 fingered man?')

        var getRoadmapsById = function (uid) {
            roadmaps = $firebaseArray(firebaseDataService.users.child(uid).child("roadmaps"));
            return roadmaps;
        };

        var addRoadmap = function (item) {
            roadmaps.$add(item)
                .then(toastr.success("Roadmap created successfully!"));
        };

        var updateRoadmap = function (id) {
            roadmaps.$save(id)
                .then(toastr.success("Roadmap updated successfully!"));;
        };

        var removeRoadmap = function (id) {
            roadmaps.$remove(id)
                .then(toastr.success("Roadmap deleted successfully!"));
        };

        var reset = function () {
            if (roadmaps) {
                roadmaps.$destroy();
                roadmaps = null;
            }
        };

        return {
            getRoadmapsById: getRoadmapsById,
            addRoadmap: addRoadmap,
            updateRoadmap: updateRoadmap,
            removeRoadmap: removeRoadmap,
            reset: reset
        }
    }

})();