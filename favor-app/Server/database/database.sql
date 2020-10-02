CREATE DATABASE favorapp;
-- go into database \c ...
-- set extension https://www.xtuple.com/knowledge/how-do-i-install-uuid-ossp
-- create extension if not exists "uuid-ossp";
CREATE TABLE authusers(
    user_id uuid //PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    //PRIMARY KEY(user_id)
);

-- fake data the values need to be in single quotes
INSERT INTO authusers (user_name, user_email, user_password) VALUES ('henry', 'henry123@gmail.com', 'cat123456');

CREATE TABLE favors(
    favor_id SERIAL,
    user_id UUID,
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (favor_id),
    FOREIGN KEY (user_id) REFERENCES authusers(user_id)
)