/**
 * Exposed Methods
 *
 *
 *
 */
Object.defineProperties( module.exports, {  
  phpUnit: {
    /**
     *
     *
     */
    value: function phpUnit( config, done ) {
      console.log( 'phpUnit', 'start' );
      
      
      return function( done ) {
      
        setTimeout(function() {
          console.log( 'phpUnit', 'done' );          
          done();
          
        }, 1000 );
      }
      
    },
    enumerable: true,
    writable: true
  },
  nodeUnit: {
    /**
     *
     *
     */
    value: function nodeUnit( config, done ) {
      
    },
    enumerable: true,
    writable: true    
  },
  codeQuality: {
    /**
     *
     *
     */
    value: function codeQuality( config, done ) {
      
    },
    enumerable: true,
    writable: true    
  },
  visualRegression: {},
  acceptanceTest: {},
  
  getProject: {
    /**
     * If CWD seems to have a project.yml, find it and convert to object.
     *
     * To verify that called from Mocha Task "module.parent.parent" can be checked.
     */
    value: function getProject( done ) {
      // console.log( 'getProject' );
      
      var findUp = require( 'findup-sync' );
      var YAML = require('yamljs');
      var path = findUp( 'project.yml' );
      
      if( !path ) {
        return null;
      }
      
      return YAML.load( path ) || null;
      
    },
    enumerable: true,
    writable: false
  },  
  testProjectValidity: {
    /**
     * Mocha Test
     *
     * To verify that called from Mocha Task "module.parent.parent" can be checked.
     */
    value: function testProjectValidity( settings ) {
      // console.log( 'testMethods' );

      return function( done ) {
        var project = module.exports.getProject();
      
        if( project ) {
          return done();        
        }

        return done( new Error( 'Does not appear to be a valid project, no project.yml file found.' ) );
      
      }
      
    },
    enumerable: true,
    writable: false    
  },
  testMethods: {
    /**
     * Mocha Test
     *
     * To verify that called from Mocha Task "module.parent.parent" can be checked.
     */
    value: function testMethods( settings ) {
      
      var should = require( 'should' );
      var project = module.exports.getProject();
      var target = require( '../' );
      
      return function( done ) {
        if( !project ) {
          return done( new Error( 'Unable to test methods since this does not appear to be a project, no project.yml file found.' ) );
        }
      
        if( !project.methods ) {
          return done();
        }
      
        project.methods.forEach( function( method ) {        
          target.should.have.property( method );                
        });
            
        done();
      }
      
    },
    enumerable: true,
    writable: false
  },
  testClasses: {
    /**
     * Mocha Test
     *
     * To verify that called from Mocha Task "module.parent.parent" can be checked.
     */
    value: function testClasses( settings ) {
      // console.log( 'testClasses' );

      
      
      return function( done ) {
        done();
      }
      
    },
    enumerable: true,
    writable: false
  },
  testStructure: {
    /**
     * Mocha Test
     *
     * To verify that called from Mocha Task "module.parent.parent" can be checked.
     */
    value: function testStructure( settings ) {
      // console.log( 'testMethods' );

      
      return function( done ) {
        done();
      }
      
    },
    enumerable: true,
    writable: false
  },
  debug: {
    value: require( 'debug' )( 'scaffold-module' ),
    enumerable: true,
    writable: false    
  }    
});