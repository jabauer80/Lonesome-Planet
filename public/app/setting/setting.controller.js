(function () {
    "use strict";

    angular.module("app.setting")
        .controller("SettingController", SettingController);

    SettingController.$inject = ["$scope", "settingService"]

    function SettingController($scope, settingService) {

        $scope.allocations = settingService.getAllocations();

        $scope.addAllocation = function () {
            settingService.addAllocation(angular.copy($scope.allocation));
            $scope.reset();
        };

            $scope.removeAllocation = function (id) {
            BootstrapDialog.confirm({
                title: "Delete Confirmation",
                message: "Are you sure you want to delete this Roadmap?",
                type: BootstrapDialog.TYPE_DANGER,
                closable: true,
                draggable: false,
                btnCancelLabel: "Cancel",
                btnOKLabel: "Confirm",
                callback: function (result) {
                    if (result) {
                        settingService.removeAllocation(id);
                    }
                }
            });
        };


        $scope.reset = function () {
            $scope.allocation = {};
            $(".modal").modal("hide");
        }
    }
})();

