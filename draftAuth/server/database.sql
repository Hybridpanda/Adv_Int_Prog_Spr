CREATE DATABASE authdraft;

-- set extension https://www.xtuple.com/knowledge/how-do-i-install-uuid-ossp
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- fake data the values need to be in single quotes
INSERT INTO users (user_name, user_email, user_password) VALUES ('henry', 'henry123@gmail.com', 'cat123456');