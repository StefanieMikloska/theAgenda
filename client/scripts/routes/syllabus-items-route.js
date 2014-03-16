/**
  @module routes
*/
/**
  Route for the URL at /courses/{course_id}/syllabus

  @class SyllabusItemsRoute
  @extends Ember.Route
  @namespace App
*/
var SyllabusItemsRoute = Ember.Route.extend({

  /**
    Provides the model for the courses route, which should be an array of Course
    objects.

    @method model
    @return {Ember.RSVP.Promise|DS.RecordArray} courses
  */
  model: function () {
    var course = this.modelFor('course');
    return this.get('store').find('syllabusItem', {
      course: course.get('id')
    });
  }

});

export default SyllabusItemsRoute;
