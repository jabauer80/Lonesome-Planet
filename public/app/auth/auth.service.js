(function () {
    "use strict";

    angular
        .module("app.auth")
        .factory("authService", authService);

    authService.$inject =
        [
            "$firebaseAuth",
            "firebaseDataService",
            "roadmapService"
        ];

    function authService($firebaseAuth, firebaseDataService, roadmapService) {
        var firebaseAuthObject = $firebaseAuth();

        var service = {
            firebaseAuthObject: firebaseAuthObject,
            register: register,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            sendWelcomeEmail: sendWelcomeEmail
        };

        return service;

        ////////////

        function register(user) {
            return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
        }

        function login(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
        }

        function logout() {
            roadmapService.reset();
            firebaseAuthObject.$signOut();
        }

        function isLoggedIn() {
            return firebaseAuthObject.$getAuth();
        }

        function sendWelcomeEmail(emailAddress) {
            firebaseDataService.emails.push({
                emailAddress: emailAddress
            });
        }

    }

})();