/**
 * Created by jabau on 7/23/2016.
 */
(function() {
    'use strict';

    angular
        .module('app.roadmap')
        .directive('zRoadmapForm', zRoadmapForm);

    function zRoadmapForm() {
        return {
            templateUrl: 'app/roadmap/directives/roadmapForm.html',
            restrict: 'E',
            controller: RoadmapFormController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                roadmaps: '='
            }
        };
    }

    RoadmapFormController.$inject = ['roadmapService'];

    function RoadmapFormController(roadmapService) {
        var vm = this;

        vm.newRoadmap = new roadmapService.Roadmap();
        vm.addRoadmap = addRoadmap;

        function addRoadmap() {
            vm.roadmaps.$add(vm.newRoadmap);
            vm.newRoadmap = new roadmapService.Roadmap();
        }
    }

})();