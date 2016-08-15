(function () {
    "use strict";

    angular
        .module("app.setting")
        .config(configFunction);

    configFunction.$inject = ["$routeProvider"];

    function configFunction($routeProvider) {
        $routeProvider
            .when("/settings", {
                templateUrl: "app/setting/setting.html",
                controller: "SettingController",
                controllerAs: "vm",
                resolve: { user: resolveUser }
            });
          
    }

    resolveUser.$inject = ['authService'];

    function resolveUser(authService) {
        return authService.firebaseAuthObject.$requireSignIn();
    }

})();