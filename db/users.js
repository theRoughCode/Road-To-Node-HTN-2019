/*
  This file implements the functions that interface with the users db.
  Each user is stored by their id and has the following fields:
  - first : first name
  - last : last name
*/

const { usersRef } = require('./index');

/****************************
 *													*
 *			S E T T E R S 			*
 *													*
 ****************************/

// Creates (or overwrites) user in db
function setUser(id, user) {
  return usersRef
    .child(id)
    .set(user);
}

// Updates user
function updateUser(id, user) {
  return usersRef
    .child(id)
    .update(user);
}

// Deletes user from db
function deleteUser(id) {
  return usersRef
    .child(id)
    .remove();
}



/****************************
 *													*
 *			G E T T E R S 			*
 *													*
 ****************************/

// Retrieves user from db by id
// Returns { user, err }
async function getUser(id) {
  try {
    const snapshot = await usersRef.child(id).once('value');
    return { user: snapshot.val(), err: null };
  } catch (err) {
    return { user: null, err };
  }
}

// Retrieves all users from db
// Returns { users, err }
async function getAllUsers() {
  try {
    const snapshot = await usersRef.once('value');
    return { users: snapshot.val(), err: null };
  } catch (err) {
    return { users: null, err };
  }
}

module.exports = {
  setUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
};
