///<reference path='lib.d.ts'/>
///<reference path='../../app/lib/angular/angular.js'/>

'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
