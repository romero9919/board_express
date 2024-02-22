CREATE DATABASE guestbook;

USE guestbook;

CREATE TABLE guestbook (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL DEFAULT '',
    email VARCHAR(60) NOT NULL DEFAULT '',
    message TEXT NOT NULL,
    PRIMARY KEY(id)
)
;

ALTER TABLE guestbook ADD COLUMN title VARCHAR(60) NOT NULL DEFAULT '';

SELECT * FROM guestbook;

INSERT INTO guestbook (name, title, email, message) VALUES ('민병관', '웃지 마 민병관', 'dontlau12@naver.com', '웃지 마!!!!!!!!!');