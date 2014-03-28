package controllers;

import play.*;
import play.mvc.*;

import views.html.*;
import models.*;
import play.data.Form;
import java.util.List;
import play.libs.Json;
import play.libs.Json.*;
import play.db.ebean.Model;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render("Hello User!"));
    }

    public static Result create() {
    	Task t = Form.form(Task.class).bindFromRequest().get();
    	t.save();
    	return redirect(routes.Application.index()); 
    }

    public static Result showTasks() {
    	List<Task> ts = new Model.Finder(String.class, Task.class).all();
    	return ok(Json.toJson(ts)); 
    }

}
