1. Create data in postgres: database: Food
CREATE TABLE Users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Blogs (
    ID SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50) NOT NULL,
    image_link VARCHAR(255),
    UserID INTEGER REFERENCES Users(ID)
);
INSERT INTO USERS (username, password) VALUES ('abcd', 'abcd');
INSERT INTO Blogs (title, content, category, image_link, userid) VALUES ('test title 1', 'test content 1', 'Vietnamese', 'test_image_link', 1);
------------------------
Note: username: abcd
      password: abcd
use for sign up
-------------------------
2. In root, create: .env:
DB_HOST=localhost
DB_NAME=Food
DB_USER=postgres
DB_PASSWORD= (put your password in pg)
DB_PORT=5432

3. Navigate to the project directory:
    cd postBlog_Ha

 4.Install packages
     npm install
 5. Run project
    node app.js

---browser: http://localhost:3000


