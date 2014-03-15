/**
  @module controllers
*/
/**
  Controller whose content is an array of courses

  @class CoursesController
  @extends Ember.ArrayController
  @namespace App
*/
var CoursesController = Ember.ArrayController.extend({
  itemController: 'course'
});

export default CoursesController;
