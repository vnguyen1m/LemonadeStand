DROP DATABASE IF EXISTS lemonades_db;
CREATE DATABASE lemonades_db;

USE lemonades_db;

CREATE TABLE lemonades (
	id INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(50) NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	price DECIMAL(5,2) NOT NULL,
	description VARCHAR(255) NOT NULL,
	image VARCHAR(900),
	seller_id VARCHAR(50) NOT NULL,
	sold BOOLEAN DEFAULT false,
	buyer_id INT,
	PRIMARY KEY (id)
);

-- CREATE TABLE users (
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	username VARCHAR(50) NOT NULL,
-- 	email VARCHAR(50) NOT NULL,
-- 	sell_items BOOLEAN NOT NULL,
-- 	buy_items BOOLEAN NOT NULL,
-- 	PRIMARY KEY (id)
-- );