
## Description

This is a template for the backend capstone project. It includes a basic structure for the project, as well as a basic structure for the database. It also includes a basic structure for the tests.

## Setup

1. Clone this repository.
2. `cd` into the directory.
3. `npm install` to install the dependencies.
4. `npm start` to run the server.
5. `npm test` to run the tests.

## Structure
```bash
├── db
│   ├── connection.js
│   ├── models
│   │   ├── event.js
│   │   └── user.js
│   └── seed.js
├── routes
│   ├── event.js
│   └── user.js
├── tests
│   ├── event.test.js
│   └── user.test.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

## Authentication
For authentication purposes, JWT tokens have been used which can only access certain endpoints after being authenticated by
the server. The token is generated when the user logs in and is stored in the session. The token is then sent to the server
with each request and the server verifies the token before sending the response. The token is valid for 24 hours and the user
has to log in again after the token expires.

## Authorization
For authorization purposes, the user's role is checked before sending the response. The user's role is stored in the session
and is sent to the server with each request. The server checks the user's role before sending the response. If the user's role
is not authorized to access the endpoint, the server sends a 403 Forbidden response.

## Validation
For validation purposes, the data sent to the server is checked before sending the response. If the data is not valid, the
server sends a 400 Bad Request response.

## Logging
For logging purposes, the server logs the request method, request url, request body, response status code, and response body
for each request.

## Error Handling
For error handling purposes, the server sends a 500 Internal Server Error response for any unhandled errors.

## Security
For security purposes, the server uses the helmet(?) package to set various HTTP headers for security purposes.

## Models
Our application has two main entities - Users & Events. We define them as mongoose schemas which can then
be used to create models. The models are defined in db/models directory.

## Routes
Our application has two main routes - Users & Events. The routes are defined in routes directory.
Each of the files contains multiple endpoints such as GET /users/:id or POST /events
which handle different actions on users or events respectively

## Controllers
Our application has two main controllers - Users & Events. The controllers are defined in controllers directory.
Each of the files contains multiple functions such as getUsers or createEvent
which handle different actions on users or events respectively

## Middlewares
Our application has two main middlewares - Users & Events. The middlewares are defined in middlewares directory.
Each of the files contains multiple functions such as checkUserExists or checkEventExists
which handle different actions on users or events respectively

## Services
Our application has two main services - Users & Events. The services are defined in services directory.
Each of the files contains multiple functions such as getUsers or createEvent
which handle different actions on users or events respectively

## Utils
Our application has two main utils - Users & Events. The utils are defined in utils directory.
Each of the files contains multiple functions such as getUsers or createEvent
which handle different actions on users or events respectively

## Database

In this project we are using MongoDB database and set our models with Mongoose.
It includes a `user` collection and a `event` collection. We are using referenced approach to connect two collections. 
The database connection is setup in db/connection.js.

## API

We provide our API's under `user` route and a `event` route. The routes are setup in routes/index.js.

## Tests

We use jest for testing.

## User Stories

1. As a user, I want to be able to create an account.
2. As a user, I want to be able to login to my account.
3. As a user, I want to be able to create an event.
4. As a user, I want to be able to see all events.
5. As a user, I want to be able to see all events that I created.
6. As a user, I want to be able to update my event.
7. As a user, I want to be able to delete my event.
8. As a user, I want to be able to see all events that I am attending.
9. As a user, I want to be able to attend an event.
10. As a user, I want to be able to unattend an event.
## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Jest
- Supertest
- Bcrypt
- Jsonwebtoken
- Dotenv
- Nodemon
- Morgan
- Nodemailer

## Environment Variables
All environment variables required by application should be defined before running it on production or development environments.
The environment variables are defined in .env file. The .env file is not included in the repository. You should create your own .env file and define the environment variables in it.
To run locally you need to have environment variables defined:
- PORT
- MONGODB_URI
- JWT_SECRET
- JWT_EXPIRES_IN
- JWT_COOKIE_EXPIRES_IN
- JWT_COOKIE_SECURE
- JWT_COOKIE_HTTPONLY


## Authors

- [Ceyda Esen]()
<br>
<br>
<a href="https://www.linkedin.com/in/ceyda-esen/" target="_blank">LinkedIn</a>
<br>

<a style="color:black; text-decoration:underline;" href="https://github.com/tomiece317" target="_blank">Github </a>
<br>
<br>

- [Rasam Rabiee]()
<br>
<br>

<a href="https://www.linkedin.com/in/rasam-rabiee" target="_blank">LinkedIn</a>

<br>

<a style="color:black; text-decoration:underline;" href="https://github.com/cyberRasam" target="_blank">Github </a>











    


