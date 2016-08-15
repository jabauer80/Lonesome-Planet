(function () {
    "use strict";

    angular
        .module("app", [
            // Angular modules.
            "ngRoute",

            // Third party modules.
            "firebase",

            // Custom modules.
            "app.auth",
            "app.core",
            "app.landing",
            "app.layout",
            "app.dashboard",
            "app.roadmap",
            "app.project",
            "app.setting"
        ])
        .config(configFunction)
        .run(runFunction);

    configFunction.$inject = ["$routeProvider"];

    function configFunction($routeProvider) {

        // set default route
        $routeProvider.otherwise({
            redirectTo: "/"
        });

        // initialize firebase
        var config = {
            apiKey: "AIzaSyBm8LCjJaMWrZ7KNVBv5lzOZUJEedvWI8o",
            authDomain: "digital-jupiter.firebaseapp.com",
            databaseURL: "https://digital-jupiter.firebaseio.com",
            storageBucket: "digital-jupiter.appspot.com",
        };
        firebase.initializeApp(config);
    }

    runFunction.$inject = ["$rootScope", "$location"];

    function runFunction($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function (event, next, previous, error) {
            if (error === "AUTH_REQUIRED") {
                $location.path("/");
            }
        });
    }

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

})();