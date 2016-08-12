/**
 * Created by jabau on 7/23/2016.
 */
(function () {
    "use strict";

    angular.module("app.roadmap")
        .factory("roadmapService", roadmapService);

    roadmapService.$inject = ["$firebaseArray", "firebaseDataService"];

    function roadmapService($firebaseArray, firebaseDataService) {

        var roadmaps = null;
       // var newRoadmap = new Roadmap();

        var service = {
            Roadmap: Roadmap,
            getRoadmapsByUser: getRoadmapsByUser,
            addRoadmap:addRoadmap,
            removeRoadmap:removeRoadmap,
            updateRoadmap:updateRoadmap,
            reset: reset
        };

        return service;

        ///// implementation

        function Roadmap() {
            this.title = "";
            this.startDate = "";
        }

        function getRoadmapsByUser(uid) {
            if (!roadmaps) {
                roadmaps = $firebaseArray(firebaseDataService.users.child(uid).child("roadmaps"));
            }
            return roadmaps;
        }

        function addRoadmap(newRoadmap) {
            roadmaps.$add(newRoadmap);
           // newRoadmap = new Roadmap();
        }

        function removeRoadmap(roadmap){
            roadmaps.$remove(roadmap);
        }

        function updateRoadmap(roadmap){
            roadmaps.$update(roadmap);
        }

        function reset() {
            if (roadmaps) {
                roadmaps.$destroy();
                roadmaps = null;
            }
        }
    }

})();