/**
  @module models
*/

import FIXTURES from "fixtures/course-fixtures";

/**
  A course with many syllabus items

  @class Course
  @extends DS.Model
  @namespace App
*/
var Course = DS.Model.extend({

  /**
    Friendly course title (e.g., Calulus 1)

    @property title
    @type Ember.ComputedProperty|String
    @default ''
  */
  title: DS.attr('string'),

  /**
    Official course code (e.g., MATH 136)

    @property code
    @type Ember.ComputedProperty|String
    @default ''
  */
  code: DS.attr('string'),

  /**
    The items in the syllabus for this course

    @property items
    @type Ember.ComputedProperty|Array
    @default []
  */
  items: DS.hasMany('syllabusItem')

});

Course.FIXTURES = FIXTURES;

export default Course;
