const UsersRouter = require('express').Router();
const usersDB = require('../db/users');

// Define routes
UsersRouter.get('/', (req, res) => res.send('Welcome to Road to Node!'));

// Get a list of users  (GET)
// http://localhost:8080/users/list

// Create new user (POST)
// http://localhost:8080/users/create
// Uses 'first', 'last', 'id' in req.body
// const user = { first, last, id };


// Gets user by id (GET)
// http://localhost:8080/users/query/peterparker
// /:id
// Use req.params.id to retrieve id


// Deletes user by id (DELETE)
// http://localhost:8080/users/delete/peterparker


// Export router
module.exports = UsersRouter;
