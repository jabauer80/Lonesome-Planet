/**
 * Created by jabau on 7/23/2016.
 */
(function () {
    "use strict";

    angular.module("app.project")
        .controller("ProjectController", ProjectController);

    ProjectController.$inject = ["$scope", "projectService", "user"]

    function ProjectController($scope, projectService, user) {
    }
})();

