CREATE DATABASE IF NOT EXISTS itinarray_test;
USE itinarray_test;

CREATE TABLE users (
    ID int NOT NULL AUTO_INCREMENT,
    name varchar(30) NOT NULL,
    email varchar(30) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user' NOT NULL,
    PRIMARY KEY (ID)
);