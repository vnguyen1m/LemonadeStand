DROP DATABASE IF EXISTS lemonades_db;
CREATE DATABASE lemonades_db;

USE lemonades_db;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	sell_items BOOLEAN NOT NULL,
	buy_items BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE lemonades (
	id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NOT NULL,
	price INT NOT NULL,
	quantity DECIMAL(6, 2) NOT NULL,
	description VARCHAR(255) NOT NULL,
	image VARCHAR(300),
	sold BOOLEAN NOT NULL,
	seller_id INT NOT NULL,
	buyer_id INT,
	PRIMARY KEY (id),
	FOREIGN KEY (seller_id) REFERENCES users(id),
	FOREIGN KEY (buyer_id) REFERENCES users(id)
);