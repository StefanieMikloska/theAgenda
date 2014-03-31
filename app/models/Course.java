package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

import java.util.Date;

@Entity
public class Course extends Model {

	@Id
	public String id;

	public String courseType; 

	public int courseCode;

	public String courseName;

	public String semester;

}