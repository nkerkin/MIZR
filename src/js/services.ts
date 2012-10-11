///<reference path='lib.d.ts'/>
///<reference path='../../app/lib/angular/angular.js'/>

'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1.0');
