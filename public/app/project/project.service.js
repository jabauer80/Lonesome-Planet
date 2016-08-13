/**
 * Created by jabau on 7/30/2016.
 */
(function () {
    "use strict";

    angular.module("app.project")
        .factory("projectService", projectService);

    projectService.$inject = ["$firebaseArray", "firebaseDataService"];

    function projectService($firebaseArray, firebaseDataService) {

        var projects = {};

        var getProjectsById = function (uid) {
            projects = $firebaseArray(firebaseDataService.users.child(uid).child("projects"));
            return projects;
        };

        var addProject = function (item) {
            projects.$add(item);
        };

        var updateProject = function (id) {
            projects.$save(id);
        };

        var removeProject = function (id) {
            console.log(id);
            projects.$remove(id);
        };

        var reset = function () {
            if (projects) {
                projects.$destroy();
                projects = null;
            }
        };

        return {
            getProjectsById: getProjectsById,
            addProject: addProject,
            updateProject: updateProject,
            removeProject: removeProject,
            reset: reset
        }
    }

})();