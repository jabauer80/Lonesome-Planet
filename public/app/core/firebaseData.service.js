(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('firebaseDataService', firebaseDataService);

  function firebaseDataService() {
    var root = firebase.database().ref();

    var service = {
      root: root,
      //  users: root.child('users'),
      roadmaps: root.child("roadmaps")
      // allocations: root.child("allocations")
      //emails: root.child('emails'),
      //textMessages: root.child('textMessages')
    };

    return service;
  }

})();
