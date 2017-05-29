CREATE DATABASE IF NOT EXISTS itinarray_test;
USE itinarray_test;

CREATE TABLE Users (
    ID int NOT NULL,
    UserName varchar(30) NOT NULL,
    Email varchar(30) UNIQUE NOT NULL,
    Password varchar(30) NOT NULL,
    Role ENUM('user', 'admin') DEFAULT 'user',
    PRIMARY KEY (ID)
);