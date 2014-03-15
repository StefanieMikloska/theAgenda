var routes = function () {

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

};

export default routes;
