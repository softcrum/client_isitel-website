'use strict';

angular.module('clientIsitelWebsiteApp')
  .directive('header', function () {
    return {
      templateUrl: 'components/header/header.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
