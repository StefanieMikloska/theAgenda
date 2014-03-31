package models;

import play.db.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

import java.util.Date;

@Entity
public class Shard extends Model {

	@Id
	public String id;

	public String name; 

	public Date start;

	public Date end;
}