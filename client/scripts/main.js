import App from "app";

// Models
import Course from "models/course";
import SyllabusItem from "models/syllabus-item";
import Shard from "models/shard";

// Adapters
import ApplicationAdapter from "adapters/application-adapter";

App.Course = Course;
App.SyllabusItem = SyllabusItem;
App.Shard = Shard;

App.ApplicationAdapter = ApplicationAdapter;

App.Router.map(function () {

  this.resource('courses', function () {

    this.resource('course', {
      path: '/:course_id'
    }, function () {

      this.resource('courseItems', {
        path: '/syllabus'
      }, function () {

        this.resource('courseItem', {
          path: '/course_item_id'
        }, function () {});

      });

    });
  });

  this.resource('todos', {
    path: '/todo'
  }, function () {});

  this.route('settings');

});

export default App;
