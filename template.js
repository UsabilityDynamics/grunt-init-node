/*
 * scaffold-module
 *
 *
 */

// Basic template description.
exports.description = 'Create a Node.js module.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
  'be a unique ID not already in use at search.npmjs.org. The "node-" prefix will be used for repository URL.';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process( {type: 'module'}, [

    init.prompt( 'name' ),
    init.prompt( 'description' ),
    init.prompt( 'version', '0.0.1' ),
    init.prompt( 'licenses' ),
    init.prompt( 'author_name', 'Usability Dynamics' ),
    init.prompt( 'author_email', 'info@UsabilityDynamics.com' ),
    init.prompt( 'author_url', 'http://UsabilityDynamics.com' ),
    init.prompt( 'node_version', '>=0.10.21' )

  ], function( err, props ) {

    props.keywords = [];

    props.private = true;

    props.main = props.name + ".js";

    props.directories = {
      "doc": "./static/codex",
      "bin": "./bin",
      "lib": "./lib"
    };

    props.contributors = [
      {
        "name": "Andy Potanin",
        "email": "andy.potanin@UsabilityDynamics.com",
        "url": "http://UsabilityDynamics.com"
      }
    ];

    props.dependencies = {
      "auto": "UsabilityDynamics/node-auto",
      "abstract": "UsabilityDynamics/node-abstract",
      "advanced-require": "UsabilityDynamics/node-advanced-require",
      "object-settings": "UsabilityDynamics/node-object-settings",
      "object-emitter": "UsabilityDynamics/node-object-emitter"
    };

    props.devDependencies = {
      "grunt-markdown": "~0.4.0",
      "grunt-contrib-symlink": "*",
      "grunt-contrib-yuidoc": "*",
      "grunt-contrib-watch": "*",
      "grunt-contrib-less": "*",
      "grunt-contrib-concat": "*",
      "grunt-contrib-clean": "*",
      "grunt-jscoverage": "0.0.3",
      "grunt-shell": "*",
      "mocha": "*",
      "should": "*",
      "grunt": "~0.4.1"
    };

    props.repo = {
      type: 'git',
      url: 'git://github.com/UsabilityDynamics/node-' + props.name
    };

    props.homepage = 'http://github.com/UsabilityDynamics/node-' + props.name;

    props.bugs = 'http://github.com/UsabilityDynamics/node-' + props.name + '/issues';

    props.copyright = "Copyright (c) 2013 Usability Dynamics, Inc.";

    var _files = init.filesToCopy( props );

    init.copyAndProcess( _files , props );

    init.addLicenseFiles( _files , props.licenses);

    init.writePackageJSON( 'package.json', props );

    done();

  } );

};
