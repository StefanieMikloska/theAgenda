/**
  @module routes
*/
/**
  Route for the URL at /courses

  @class CoursesRoute
  @extends Ember.Route
  @namespace App
*/
var CoursesRoute = Ember.Route.extend({

  /**
    Provides the model for the courses route, which should be an array of Course
    objects.

    @method model
    @return {Ember.RSVP.Promise|DS.RecordArray} courses
  */
  model: function () {
    return this.get('store').find('course');
  }

});

export default CoursesRoute;
