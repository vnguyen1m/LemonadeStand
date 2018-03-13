INSERT INTO lemonades (product_name, price, description, image, seller_id)
VALUES (
	'Simply Lemonade',
	14.69,
	'Sweet lemonade drink',
	'https://images-na.ssl-images-amazon.com/images/I/41dP1bmZAPL._SL160_.jpg',
	1);
INSERT INTO lemonades (product_name, price, description, image, seller_id)
VALUES (
	'Strawberry Lemonade',
	 4.85,
	 'No artificial sweeteners',
	 'https://images-na.ssl-images-amazon.com/images/I/71bF6N8xNrL._SY679SX449_SY679_CR,0,0,449,679_PIbundle-12,TopRight,0,0_SX449_SY679_CR,0,0,449,679_SH20_.jpg',
	 2);
INSERT INTO lemonades (product_name, price, description, image, seller_id)
VALUES (
	'Green Tea Lemonade',
	4.95,
	'Mildly sweet lemonade',
	'https://globalassets.starbucks.com/assets/a2b8437c14174fa38a45280d52e92b22.jpg',
	3);
INSERT INTO lemonades (product_name, price, description, image, seller_id)
VALUES (
	'Lipton iced tea',
	12.00,
	'Natural flavor',
	'https://images-na.ssl-images-amazon.com/images/I/91sBXCUaibL._SX522_.jpg',
	4
);
INSERT INTO lemonades (product_name, price, description, image, seller_id)
VALUES (
	'Country Time Pink Lemonade',
	18.57,
	'No artifical sweeteners or flavors',
	'https://images-na.ssl-images-amazon.com/images/I/71zJYGkweiL._SX522_.jpg',
	4);


INSERT INTO users (username, email, sell_items, buy_items)
VALUES ('Pink', 'pink@', true, false);
INSERT INTO users (username, email, sell_items, buy_items)
VALUES ('lemonadelover', 'lemonadelover@', true, false);
INSERT INTO users (username, email, sell_items, buy_items)
VALUES ('special123', 'special123@', true, true);
INSERT INTO users (username, email, sell_items, buy_items)
VALUES ('Simply Lemonade', 'corporate@', true, false);