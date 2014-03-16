/**
  @module controllers
*/
/**
  Controller whose content is an array of syllabus items

  @class SyllabusItemsController
  @extends Ember.ArrayController
  @namespace App
*/
var SyllabusItemsController = Ember.ArrayController.extend({
  itemController: 'syllabusItem',
  needs: ['course'],
  course: Em.computed.alias('controllers.course')
});

export default SyllabusItemsController;
