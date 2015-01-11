(function() {

  'use strict';

  /**
   * filechooser Service
   *
   * Usage
   filechooser
        .selectFile()
        .then(function(uri) {
          console.log('file: ' + uri);
        })
   */
  angular
    .module('mb.cordova')
    .service('filechooser', ['$window', '$q', filechooser]);

  function filechooser($window, $q) {

    //-------------------------------
    //
    // API
    //
    //-------------------------------
    this.selectFile = selectFile;

    function selectFile() {
      var deferred = $q.defer();

      $window.fileChooser
        .open(function(uri) {
          deferred.resolve(uri);
        }, function(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }
    
  }

})();
