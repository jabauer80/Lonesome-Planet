/**
 * Created by jabau on 7/22/2016.
 */
(function () {
    "use strict";

    angular
        .module("app.project")
        .config(configFunction);

    configFunction.$inject = ["$routeProvider"];

    function configFunction($routeProvider) {
        $routeProvider.when("/projects", {
            templateUrl: "app/project/project.html",
            controller: "ProjectController",
            controllerAs: "vm",
            resolve: { user: resolveUser }
        });
    }

    resolveUser.$inject = ['authService'];

    function resolveUser(authService) {
        return authService.firebaseAuthObject.$requireSignIn();
    }

})();