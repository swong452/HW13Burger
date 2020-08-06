#### Schema

CREATE DATABASE burger_db;
USE burger_db;


CREATE TABLE burger (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    devour BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);