/**
  @main
*/
// Models
import Course from "models/course";
import SyllabusItem from "models/syllabus-item";
import Shard from "models/shard";

// Adapters
import ApplicationAdapter from "adapters/application-adapter";

// Controllers
import CourseController from "controllers/course-controller";
import CoursesController from "controllers/courses-controller";

import App from "app";

App.Course = Course;
App.SyllabusItem = SyllabusItem;
App.Shard = Shard;

App.ApplicationAdapter = ApplicationAdapter;

App.CourseController = CourseController;
App.CoursesController = CoursesController;

export default App;
