CREATE DATABASE IF NOT EXISTS itinarray_test;

USE itinarray_test;

CREATE TABLE IF NOT EXISTS users (
    ID int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    email varchar(30) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user' NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO users (name,email, password, role) VALUES('test', 'test@test.com', '$2a$10$0YC.fQvCmWNMruKLSoaZGuQgjnBLilYreYN8W5McjT0gEjAD9EBzi', 'user');
INSERT INTO users (name,email, password, role) VALUES('admin', 'admin@admin.com', '$2a$10$0YC.fQvCmWNMruKLSoaZGuQgjnBLilYreYN8W5McjT0gEjAD9EBzi', 'admin');