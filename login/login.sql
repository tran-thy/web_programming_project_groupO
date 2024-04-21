drop table if exists login;

CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);
-- insert into login (email, username, password) values ('123@qq.com', 'name123', 'password123');
