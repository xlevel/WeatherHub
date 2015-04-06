CREATE DATABASE weatherhub;

USE weatherhub;

CREATE TABLE reading (time DATETIME, sensorId VARCHAR(50), readingType INT UNSIGNED, value DOUBLE);

ALTER TABLE reading ADD id INT UNSIGNED NOT NULL AUTO_INCREMENT, ADD INDEX (id);

ALTER TABLE reading ADD INDEX (sensorId, readingType);

GRANT USAGE ON *.* TO weatherhubuser@localhost IDENTIFIED BY 'XXXXX';

GRANT insert, update ON weatherhub.reading TO weatherhubuser@localhost;

FLUSH PRIVILEGES;


