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
import SyllabusItemController from "controllers/syllabus-item-controller";
import SyllabusItemsController from "controllers/syllabus-items-controller";

// Routes
import CourseRoute from "routes/course-route";
import CoursesRoute from "routes/courses-route";
import SyllabusItemRoute from "routes/syllabus-item-route";
import SyllabusItemsRoute from "routes/syllabus-items-route";

import App from "app";

App.Course = Course;
App.SyllabusItem = SyllabusItem;
App.Shard = Shard;

App.ApplicationAdapter = ApplicationAdapter;

App.CourseController = CourseController;
App.CoursesController = CoursesController;
App.SyllabusItemController = SyllabusItemController;
App.SyllabusItemsController = SyllabusItemsController;

App.CourseRoute = CourseRoute;
App.CoursesRoute = CoursesRoute;
App.SyllabusItemRoute = SyllabusItemRoute;
App.SyllabusItemsRoute = SyllabusItemsRoute;

// Add to window for easier debugging
window.App = App;

export default App;
