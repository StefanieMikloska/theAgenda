/**
  @module models
*/

import FIXTURES from "fixtures/shard-fixtures";

/**
  Shards could be anything from questions on math assignments, to paragraphs
  on essays, to topics of study on an exam. They're the minimum viable portion
  of the syllabus item that you can do in one day.

  @class Shard
  @extends DS.Model
  @namespace App
*/
var Shard = DS.Model.extend({

  /**
    Quick description of tasks that has to be done. e.g., "Question A",
    "Introduction paragraph", "Study Algorithms section", etc.

    @property name
    @type Ember.ComputedProperty|String
    @default ''
  */
  name: DS.attr('string'),

  /**
    The amount of time (in minutes) that it takes to complete this shard

    @property time
    @type Ember.ComputedProperty|Number
    @default 0
  */
  time: DS.attr('number'),

  /**
    The syllabus item to which this shard belongs

    @property syllabusItem
    @type Ember.ComputedProperty|App.SyllabusItem
  */
  syllabusItem: DS.belongsTo('syllabusItem')

});

Shard.FIXTURES = FIXTURES;

export default Shard;
