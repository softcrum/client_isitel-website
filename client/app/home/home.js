'use strict';

angular.module('clientIsitelWebsiteApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
