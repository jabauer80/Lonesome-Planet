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

        var getRoadmapsById = function (uid) {
            roadmaps = $firebaseArray(firebaseDataService.users.child(uid).child("roadmaps"));
            return roadmaps;
        };

        var addRoadmap = function (item) {
            roadmaps.$add(item);
        };

        var updateRoadmap = function (id) {
            roadmaps.$save(id);
        };

        var removeRoadmap = function (id) {
            console.log(id);
            roadmaps.$remove(id);
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