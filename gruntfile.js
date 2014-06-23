/**
 * Library Build.
 *
 * @author peshkov@UD
 * @version 1.1.2
 * @param grunt
 */
module.exports = function Gruntfile( grunt ) {

  grunt.initConfig({
    
    // Read Composer File.
    config: grunt.file.readJSON( 'package.json' ).config,
    
    // Sets generic config settings, callable via grunt.config.get('meta').environment or <%= grunt.config.get("meta").environment %>
    meta: {
      ci: process.env.CI || process.env.CIRCLECI ? true : false,
      environment: process.env.NODE_ENV || 'production'
    }

  });
  
  // Require Utility Modules.
  var joinPath  = require( 'path' ).join;
  var findup    = require( 'findup-sync' );

  // Determine Paths.
  module.exports._paths = {
    staticFiles: findup( 'static' )
  };

  // Automatically Load Tasks.
  require( 'load-grunt-tasks' )( grunt, {
    pattern: 'grunt-*',
    config: './package.json',
    scope: 'devDependencies'
  });
  
  // Register Internal Tasks.
  grunt.loadTasks( 'tasks' );
  
};

// Add prototype methods.
module.exports = require( 'utils-merge' )( module.exports, require( './lib/scaffold-module.js' ) );
