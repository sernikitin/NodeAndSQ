
use kf541zde0fbs5gd0;


CREATE TABLE burgers_db (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NOT NULL,
  devoured boolean default false,
  PRIMARY KEY (id)
);

select * from burgers_db;