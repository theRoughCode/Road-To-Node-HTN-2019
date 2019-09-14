const UsersRouter = require('express').Router();
const usersDB = require('../db/users');

// Define router
UsersRouter.get('/', (req, res) => res.send('Welcome to Road to Node!'));

// Retrieves list of users
// http://localhost:8080/users/list
UsersRouter.get('/list', async (req, res) => {
  const { users, err } = await usersDB.getAllUsers();
  if (err) return res.status(400).send(err);
  return res.send(users);
});

// Creates new user
// http://localhost:8080/users/create
UsersRouter.post('/create', async (req, res) => {
  // Get first name, last name, and id from request body
  const { first, last, id } = req.body;

  // Return error if missing parameters
  if (!first || !last || !id) return res.status(400).send('Missing fields');

  // Create user object
  const user = {
    first,
    last,
  };

  // Creates user in users db
  try {
    await usersDB.setUser(id, user);
    // Send a success message
    res.send(`Successfully created user with id ${id}!`);
  } catch (err) {
    // Error occurred
    res.status(500).send(err);
  }
});

// Gets user by id
// http://localhost:8080/users/query/peterparker
UsersRouter.get('/query/:id', async (req, res) => {
  const id = req.params.id;

  const { user, err } = await usersDB.getUser(id);
  if (err) res.status(500).send(err);
  else res.send(user);
});

// Deletes user by id
// http://localhost:8080/users/delete/peterparker
UsersRouter.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await usersDB.deleteUser(id);
    res.send(`Successfully deleted user ${id}!`);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Export router
module.exports = UsersRouter;
