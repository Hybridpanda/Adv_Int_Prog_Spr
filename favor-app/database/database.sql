CREATE DATABASE favorapp; -- I need to change the name to favourapp, favor is american variant.
-- go into database \c ...
-- set extension https://www.xtuple.com/knowledge/how-do-i-install-uuid-ossp
-- *** create extension if not exists "uuid-ossp";
-- I didnt have that primary key in the bottom as its in the user_id already
CREATE TABLE authusers(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);

-- fake data the values need to be in single quotes
INSERT INTO authusers (user_name, user_email, user_password) VALUES ('hello', 'hello@gmail.com', 'cat123');
INSERT INTO authusers (user_name, user_email, user_password) VALUES ('test', 'test@gmail.com', 'dog123');

-- * if your email is not unique *
ALTER TABLE authusers ADD CONSTRAINT email_unique UNIQUE (user_email);

-- I need to change this to be able to make the description accept one of 5 things, and maybe accept an image, and maybe a boolean of completion, and also things relating to requests, im not sure atm
-- I want to change the favours to include an id so it
CREATE TABLE favours(
    favour_id SERIAL,
    user_id UUID,
    description VARCHAR(255) NOT NULL,
    recipient_email VARCHAR(255) NOT NULL,
    PRIMARY KEY (favour_id),
    FOREIGN KEY (user_id) REFERENCES authusers(user_id)
);

--fake favor data the first value should be copied from the user id in authusers
INSERT INTO favours (user_id, description, recipient_email) values ('f37180b7-bbdd-4020-924c-fd241fc27a70', 'coffee', 'test@gmail.com');

INSERT INTO favours (user_id, description, recipient_email) values ('41482fd9-4a40-4fe2-8c58-d087b4755334', 'muffin', 'hello@yahoo.com');

-- resets the counter favour_id back to 1, please only use this when theres nothing in the favours table im not sure how it will react with values already in it. I dont think we need to worry about using this much, only for development
SELECT SETVAL((SELECT pg_get_serial_sequence('favours', 'favour_id')), 1, false);