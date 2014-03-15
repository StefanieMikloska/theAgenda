/**
  @module agenda
  @submodule models
*/
/**
  A syllabus item is anything that factors into passing the course.
  That includes any assignments, essays, quizzes, and final exams that count
  towards your final grade

  @class SyllabusItem
  @extends DS.Model
  @namespace App
*/
var SyllabusItem = DS.Model.extend({

  /**
    Name of this item (e.g., Assignment 1)

    @property title
    @type Ember.ComputedProperty|String
    @default  ''
  */
  title: DS.attr('string'),

  /**
    Optional description for the scope of this assignment

    @property description
    @type Ember.ComputedProperty|String
    @default ''
  */
  description: DS.attr('string'),

  /**
    Due date for this item (or, for example, when the exam will take place)
    @property  due
    @type Ember.ComputedProperty|Date
  */
  due: DS.attr('date'),

  /**
    The weight of this item. i.e., how much it counts towards the completion of
    the course. Should be a number between 0 and 1.

    @property weight
    @type Ember.ComputedProperty|Number
    @default 0
  */
  weight: DS.attr('number'),

  /**
    The course to which this item belongs to

    @property course
    @type Ember.ComputedProperty|App.Course
  */
  course: DS.belongsTo('course', {
    inverse: 'items'
  }),

  /**
    Shards could be anything from questions on math assignments, to paragraphs
    on essays, to topics of study on an exam. They're the minimum viable portion
    of the syllabus item that you can do in one day.

    @property shards
    @type Ember.ComputedProperty|Array
    @default []
  */
  shards: DS.hasMany('shard')

});

export default SyllabusItem;
