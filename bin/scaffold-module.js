#!/usr/bin/env node

require( 'veneer-terminal' ).create( function scaffoldTerminal( error ) {

  var findUp = require( 'findup-sync' );
  var path = require('path');

  this.set({
    name: 'scaffold-module',
    version: this.get( 'package.version' ),
    description: this.get( 'package.description' ),
    path: path.dirname( findUp( 'package.json', { cwd: __dirname } ) )
  });  
  
  this.command( 'create', 'Create new module in current directory from scaffold.' ).action( Create.bind( this ) );
  this.command( 'update',   'Updte existing module' ).action( Update.bind( this ) );
  this.command( 'validate', 'Validate an existing module' ).action( Validate.bind( this ) );

});

function Validate() {  
  this.write( 'Validating ' + process.cwd() );
}

function Update() {
    this.write( 'Updating ' + process.cwd() );    
}

function Create() {

  var spawn = require('child_process').spawn;
  var async = require( 'async' );
  var self  = this;

  async.auto({
    
    scaffold: [ function( done, report ) {
      self.write( 'Setting up structure.' );
      
      spawn( 'grunt-init', [ self.get( 'path' ), '--no-color' ], {
        end: process.env,
        cwd: process.cwd(),
        stdio: 'inherit',
        encoding: 'utf8'
      }).on( 'close', function( code, signal ) {
        self.log( 'Module scaffold complete.' );        
        done();
      });
            
    }],    
    
    // Should install all modules and then run "grunt install"
    npm: [ 'scaffold', function( done, report ) {
      self.log( 'Updating NPM...' );
      
      spawn( 'npm', [ 'install' ], {
        end: process.env,
        cwd: process.cwd(),
        stdio: 'inherit',
        encoding: 'utf8'
      }).on( 'close', function() {
        self.log( 'Modules installed.' );
        done();
      });
        
    }],
    
    // Should update composer.
    composer: [ 'scaffold', function( done, report ) {
      //self.log( 'Updating Composer....' );      
      done();      
    }],
    
    // Should initialize repository, create a GitHub Wiki and add as a submodule to static/wiki
    github: [ 'npm', 'composer', function( done, report ) {
      // self.log( 'Setting up GitHub repository.' );      
      done();      
    }]
    
    
    
    
  });
  
}

