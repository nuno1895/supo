CREATE DATABASE saveup_development_db;
-- USE saveup_development_db;

CREATE TABLE budgets
(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
	-- user_id INTEGER,
	month VARCHAR(30),
  the_date DATE,
  budget INTEGER,
  takehome INTEGER,
  frequency INTEGER,
  food INTEGER,
  groceries INTEGER,
  eatingout INTEGER
);

