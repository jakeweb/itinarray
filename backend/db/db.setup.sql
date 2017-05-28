CREATE DATABASE IF NOT EXISTS itinarray_test_database;

--types
CREATE TYPE "status_type" as enum('admin','user');

--tables
CREATE TABLE "users"(
  "id" serial primary key,
  "full_name" varchar not null,
  "password" varchar not null,
  "email" varchar unique not null,
  "role" status_type default 'user'
);