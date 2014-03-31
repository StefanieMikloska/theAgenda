# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table assignment (
  id                        varchar(255) not null,
  name                      varchar(255),
  start                     timestamp,
  end                       timestamp,
  constraint pk_assignment primary key (id))
;

create table course (
  id                        varchar(255) not null,
  course_type               varchar(255),
  course_code               integer,
  course_name               varchar(255),
  semester                  varchar(255),
  constraint pk_course primary key (id))
;

create table shard (
  id                        varchar(255) not null,
  name                      varchar(255),
  start                     timestamp,
  end                       timestamp,
  constraint pk_shard primary key (id))
;

create table task (
  id                        integer not null,
  name                      varchar(255),
  start                     timestamp,
  end                       timestamp,
  constraint pk_task primary key (id))
;

create table user (
  id                        varchar(255) not null,
  name                      varchar(255),
  start                     timestamp,
  end                       timestamp,
  constraint pk_user primary key (id))
;

create sequence assignment_seq;

create sequence course_seq;

create sequence shard_seq;

create sequence task_seq;

create sequence user_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists assignment;

drop table if exists course;

drop table if exists shard;

drop table if exists task;

drop table if exists user;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists assignment_seq;

drop sequence if exists course_seq;

drop sequence if exists shard_seq;

drop sequence if exists task_seq;

drop sequence if exists user_seq;

