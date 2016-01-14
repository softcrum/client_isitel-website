'use strict';

angular.module('clientIsitelWebsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('services', {
        url: '/services',
        templateUrl: 'app/services/services.html',
        controller: 'ServicesCtrl'
      });
  });
