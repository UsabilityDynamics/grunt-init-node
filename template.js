/*
 * Node.js Scaffolding Template
 *
 *
 * @version 1.0.0
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

    props.keywords = [ 'node', 'module' ];

    props.private = true;

    props.main = "lib/" + props.name + ".js";

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
      "auto": "git+ssh://git@github.com:UsabilityDynamics/node-auto#master",
      "commander": "~2.0.0",
      "lodash": "~2.2.1",
      "advanced-require": "git+ssh://git@github.com:UsabilityDynamics/node-advanced-require#master",
      "object-settings": "git+ssh://git@github.com:UsabilityDynamics/node-object-settings#master",
      "object-emitter": "git+ssh://git@github.com:UsabilityDynamics/node-object-emitter#master",
      "object-validation": "git+ssh://git@github.com:UsabilityDynamics/node-object-validation#master"
    };

    props.devDependencies = {
      "grunt-contrib-symlink": "~0.2.0",
      "grunt-contrib-yuidoc": "~0.5.0",
      "grunt-contrib-watch": "~0.5.3",
      "grunt-contrib-less": "~0.8.1",
      "grunt-contrib-concat": "~0.3.0",
      "grunt-contrib-clean": "~0.5.0",
      "grunt-jscoverage": "~0.0.3",
      "grunt-markdown": "~0.4.0",
      "grunt-mocha-cli": "~1.3.0",
      "grunt-shell": "~0.5.0"
    };

    props.repo = {
      type: 'git',
      url: 'git@github.com:UsabilityDynamics/node-' + props.name
    };

    props.homepage = 'http://github.com/UsabilityDynamics/node-' + props.name;

    props.bugs = 'http://github.com/UsabilityDynamics/node-' + props.name + '/issues';

    props.copyright = "Copyright (c) 2013 Usability Dynamics, Inc.";

    var _files = init.filesToCopy( props );

    init.copyAndProcess( _files , props );

    init.addLicenseFiles( _files , props.licenses);

    init.writePackageJSON( 'package.json', props );

    done();

  });

};
