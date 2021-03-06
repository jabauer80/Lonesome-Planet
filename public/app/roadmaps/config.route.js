(function () {
    "use strict";

    angular
        .module("app.roadmap")
        .config(configFunction);

    configFunction.$inject = ["$routeProvider"];

    function configFunction($routeProvider) {
        $routeProvider.when("/roadmaps", {
            templateUrl: "app/roadmaps/roadmap.html",
            controller: "RoadmapController",
            controllerAs: "vm",
            resolve: { user: resolveUser }
        });
    }

    resolveUser.$inject = ['authService'];
    function resolveUser(authService) {
        return authService.firebaseAuthObject.$requireSignIn();
    }

})();