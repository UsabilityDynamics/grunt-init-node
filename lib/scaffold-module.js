/**
 * Exposed Methods
 *
 *
 *
 */
Object.defineProperties( module.exports, {  
  getProject: {
    /**
     * If CWD seems to have a project.yml, find it and convert to object.
     *
     * To verify that called from Mocha Task "module.parent.parent" can be checked.
     */
    value: function getProject( done ) {
      // console.log( 'getProject' );

      
      
      
      done();
      
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
    value: function testProjectValidity( done ) {
      // console.log( 'testMethods' );

      
      
      done( new Error( 'Nope!' ) );
      
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
    value: function testMethods( done ) {
      // console.log( 'testMethods' );

      
      
      done();
      
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
    value: function testClasses( done ) {
      // console.log( 'testClasses' );

      
      
      done();
      
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
    value: function testStructure( done ) {
      // console.log( 'testMethods' );

      
      
      done();
      
    },
    enumerable: true,
    writable: false
  },
  
  
});