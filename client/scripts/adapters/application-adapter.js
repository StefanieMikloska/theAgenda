/**
  @module adapters
*/
/**
  API adapter for the Agendas app.

  TODO: Replace with RESTAdapter once API is in place

  @class ApplicationAdapter
  @extends DS.FixtureAdapter
  @namespace App
*/
var ApplicationAdapter = DS.FixtureAdapter.extend({

  /**
    Simple query checking method that returns all the fixtures
    whose properties match those of the given query

    @method queryFixtures
    @param {Array} fixtures
    @param {Hash} query
    @return {Array} fixtures
  */
  queryFixtures: function (fixtures, query) {

    fixtures = fixtures.filter(function (fixture) {

      // The fixture starts out as matching the query
      var value, result = true;

      for (var prop in query) {

        value = Em.get(fixture, prop);

        if (Em.typeOf(value) === 'instance') {

          // This is an object for some reason, get the ID
          value = value.get('id');
        }

        if (Em.isArray(query[prop])) {
          result = result && query[prop].indexOf(value) >= 0;
        } else {
          result = result && (query[prop] + '') === (value + '');
        }

        if (!result) {
          // We know it doesn't match the query, return false
          return false;
        }
      }

      return result;

    });

    return fixtures;
  }
});

export default ApplicationAdapter;
