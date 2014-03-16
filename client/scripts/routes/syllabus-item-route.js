/**
  @module routes
*/
/**
  Route for the URL at /courses{course_id}/syllabus/{syllabus_item_id}

  @class SyllabusItemRoute
  @extends Ember.Route
  @namespace App
*/
var SyllabusItemRoute = Ember.Route.extend({

  /**
    Provides the model for the syllabusItems route, which should be an array of SyllabusItem
    objects.

    @method model
    @return {Ember.RSVP.Promise|DS.RecordArray} syllabusItems
  */
  model: function (params) {
    return this.get('store').find('syllabusItem', params.syllabus_item_id);
  }

});

export default SyllabusItemRoute;
