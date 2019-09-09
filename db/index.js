/*
  This file serves to expose to your database directories.
  The structure of this folder groups subdirectories of your db into folders
*/

const admin = require('firebase-admin');

// Uncomment below to enable hiding of API Key through .env file
// require('dotenv').config();

// Imports the required firebase private key
// NOTE: This should be NOT be public!!
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://roadtonodehtn2019.firebaseio.com"
});

// Import firebase directories
const usersRef = admin.database().ref('/users/');

// Export db references
module.exports = {
  usersRef,
};
