/**
  @module routes
*/
/**
  Route for the URL at /courses/{course_id}

  @class CourseRoute
  @extends Ember.Route
  @namespace App
*/
var CourseRoute = Ember.Route.extend({

  /**
    Provides the model for the courses route, which should be an array of Course
    objects.

    @method model
    @return {Ember.RSVP.Promise|DS.RecordArray} courses
  */
  model: function (params) {
    return this.get('store').find('course', params.course_id);
  }

});

export default CourseRoute;
