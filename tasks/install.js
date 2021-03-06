module.exports = function( grunt ) {

  var symlink   = require( 'fs' ).symlink;

  grunt.registerTask( 'install', 'Create symbolic links.', function() {
  
    var done = this.async();
  
    symlink( require( 'path' ).dirname( __dirname ), '/Users/potanin/.grunt-init/module', 'dir', function( error ) {      

      if( error && error.code === 'EEXIST' ) { return done(); }
      
      console.log( 'linked', error ? error.message : 'successfully' );      
      done();      
    });      
  
  });

}