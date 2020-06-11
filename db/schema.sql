DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger(
    id INT AUTO_INCREMENT,
    name VARCHAR(40),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);