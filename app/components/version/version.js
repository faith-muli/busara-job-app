'use strict';

angular.module('jobApp.version', [
  'jobApp.version.interpolate-filter',
  'jobApp.version.version-directive'
])

.value('version', '0.1');
