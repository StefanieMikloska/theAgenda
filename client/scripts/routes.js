var routes = function () {

  this.resource('courses', function () {

    this.resource('course', {
      path: '/:course_id'
    }, function () {

      this.resource('syllabusItems', {
        path: '/syllabus'
      }, function () {

        this.resource('syllabusItem', {
          path: '/:syllabus_item_id'
        }, function () {});

      });

    });
  });

  this.resource('todos', {
    path: '/todo'
  }, function () {});

  this.route('settings');

};

export default routes;
