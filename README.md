This application is a test on backend developer position application.

It is intented to handle the creation of a todo application with unit tests 

It comprizes of a CRUD endpoints - Create, Read, Update and Delete

To run the application;

Clone the repository

Run `npm install` to install all necessary dependencies

Run `npm start` to to initiate the server

Run `npm run test ` for the test cases

For the sake of testing, a test database url is provided in this readme. To use it please create an environment variable file `.env` and create a variable called `TEST_DB` and asign it this way
`TEST_DB = mongodb+srv://davinchi:ejikejude4me@cluster0.rlaut.mongodb.net/test_DB?retryWrites=true&w=majority`
OR
you can use your local database
`TEST_DB = mongodb://localhost:27017/test_db`

You can also create an `.env file`with these
`TEST_PORT = 3000`
`TEST_DB = mongodb://localhost:27017/test_db`

