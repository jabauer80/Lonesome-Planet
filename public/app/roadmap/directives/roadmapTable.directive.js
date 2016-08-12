// /**
//  * Created by jabau on 7/23/2016.
//  */
// (function() {
//     "use strict";
//
//     angular
//         .module("app.roadmap")
//         .directive("zRoadmapTable", zRoadmapTable);
//
//     function zRoadmapTable() {
//         return {
//             templateUrl: "app/roadmap/directives/roadmapTable.html",
//             restrict: "E",
//             controller: RoadmapTableController,
//             controllerAs: "vm",
//             bindToController: true,
//             scope: {
//                 roadmaps: "="
//             }
//         };
//     }
//
//     RoadmapTableController.$inject = ["roadmapService"];
//
//     function RoadmapTableController(roadmapService) {
//         var vm = this;
//
//         vm.removeRoadmap = removeRoadmap;
//
//         function removeRoadmap(roadmap) {
//             vm.roadmaps.$remove(roadmap);
//         }
//
//
//     }
//
// })();