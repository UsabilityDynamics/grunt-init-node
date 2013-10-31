/**
 * Run Coverage Tests / Load Core Module
 *
 */
module.exports = process.env.APP_COVERAGE ? require( './static/lib-cov/{%= name %}.js' ) : require( './lib/{%= name %}.js' );

