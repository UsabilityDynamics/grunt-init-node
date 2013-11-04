/*
 * {%= name %}
 * {%= homepage %}
 *
 * @class {%= name %}
 * @constructor
 * @version 0.1.0
 */
function {%= name %}() {
  return 'awesome';
};

/**
 * Instance Properties
 *
 */
Object.defineProperties( {%= name %}.prototype, {
  some_action: {
    /**
     * Some Actions
     *
     * @for {%= name %}
     */
    value: function some_action() {

      // @chainable
      return this;
    },
    enumerable: true,
    configurable: true,
    writable: true
  }
})

/**
 * Constructor Properties
 *
 */
Object.defineProperties( module.exports = {%= name %}, {
  create: {
    /**
     * Create Instance
     *
     * @for {%= name %}
     */
    value: function create() {

    },
    enumerable: true,
    configurable: true,
    writable: true
  }
})