/**
 * Created by jabau on 7/30/2016.
 */
(function () {
    "use strict";

    angular.module("app.setting")
        .factory("settingService", settingService);

    settingService.$inject = ["$firebaseArray", "firebaseDataService"];

    function settingService($firebaseArray, firebaseDataService) {

        var allocations = {};

        var getAllocations = function () {
            allocations = $firebaseArray(firebaseDataService.allocations);
            console.log(allocations);
            return allocations;
        };

        var addAllocation = function (item) {
            allocations.$add(item);
        };

        //  var updateProject = function (id) {
        //      projects.$save(id);
        //  };

         var removeAllocation = function (id) {
             // console.log(id);
              allocations.$remove(id);
          };

        var reset = function () {
            if (allocations) {
                allocations.$destroy();
                allocations = null;
            }
        };

        return {
            getAllocations: getAllocations,
            addAllocation: addAllocation,
            // updateProject: updateProject,
             removeAllocation: removeAllocation,
            reset: reset
        }
    }

})();