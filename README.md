# Road to Node - Hack the North 2019 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png" width="100px">

Welcome to Road to Node!  In this workshop, we'll be going through a basic example of a web server complete with database interaction.  The goals of this workshop are:
- Introduce Node.js and express to setup a local server
- Introduce routing
- Introduce HTTP requests (POST, GET, DELETE) with Postman
- Integrate with Firebase API

You can check out the slides [HERE](https://docs.google.com/presentation/d/1Gufz0Yj0IhMx1XAN_nYnROz7aKQpFEUgS9qzlq-ATf0/edit?usp=sharing)!!

## What You Need to Have
First, make sure you have the following installed:
1. **Install Node.js** [here](https://nodejs.org/en/)
    - To check if you have it installed:
      1. Open CLI (Command Line Interface)
        - Windows:
          - Open the **Run** window (Win + R)
          - Type "cmd"
        - Mac:
          - Open **Applications** -> **Utilities** -> **Terminal**
      2. Type ```node -v``` and hit **Enter**
      3. If successful, you should get the version number (i.e. ```v8.11.0```)
2. Text Editor (If you already have a preferred Text Editor, ignore the following subpoints)
    - [Atom.io](https://atom.io/)
    - Install helpful packages:
      - [autoclose-html](https://atom.io/packages/autoclose-html) - autocloses HTML tags
      - [javascript-snippets](https://atom.io/packages/javascript-snippets) - shortcuts for JS functions
    - [HOW DO I INSTALL ATOM PACKAGES???](http://flight-manual.atom.io/using-atom/sections/atom-packages/)
3. [Google Chrome](https://www.google.ca/chrome/browser/desktop/index.html)
4. Install nodemon: ```npm install -g nodemon```
5. Install Postman [here](https://www.getpostman.com/downloads/)
6. Clone this repo.
7. Go into this folder and run `npm install` or `npm i` to install dependencies

## Project Structure
Before we dive into the code, here's an overview of how this project is organized.  The structure might seem a bit overkill for such a small example, but this structure is designed to be scalable for larger projects.

In the root folder, we have:
- `app.js`: This is our entry file for our server.  In this file, we set up the necessary configs for our server and start the server with `app.listen()`.
- `index.html`: This is our front end which displays our list of users.
- `package.json`:  Our configuration for our build and makes it easily reproducible.  It contains a list of our packages that any one who downloads our package can install with `npm install`.  The `main` attribute determines the entry point for your app (i.e. `app.js`).
- `package-lock.json`: Automatically generated file when you run `npm install` and modify the package dependency tree.  You won't need to touch this file.
- `.gitignore`: Contains files that you don't want git to push to your online repo.

The `routes` folder contains our endpoints for our server:
- `index.js`: Entry point for our routes.  It is a directory for different routes.  We currently only have one sub-directory for `users`.  You can extend this file by adding more subdirectories like `customers` or `merchandise`.
- `users.js`: Contains all endpoints that live under the `users` subdirectory.  This is the file you'll be working with to implement required endpoints.
- `solutions.js`: Solutions for `users.js`.

The `db` folder has functions that serve as the interface to our database:
- `index.js`: Imports Firebase API and exports references to the directories in the database.
- `users.js`: Holds all `users` database functions.

## Setting up `UsersRouter`
Now that you have an idea of the general project structure, let's look into implementing `UsersRouter`.  We first begin by creating `UsersRouter` and importing the required database functions:
```javascript
const UsersRouter = require('express').Router();
const usersDB = require('../db/users');
```
We use a `Router` to keep our routing clean and structured.  Next, we can begin defining our endpoints. The general format of defining an endpoint with Express.js is: `UsersRouter.<HTTP Request Method>('<endpoint>', reqHandler)`, where `reqHandler` is a function that takes in a request as its first argument and a response as its second.  An example of a default endpoint has been given to you:
```javascript
UsersRouter.get('/', (req, res) => res.send('Welcome to Road to Node!'));
```
Now, it's your turn to give it a try at implementing the example endpoints given to you in that file!  You can refer to the [Express.js API docs](https://expressjs.com/en/5x/api.html#req) for help.  Any database functions you'll need are all in `db/users.js`, or if you're really stuck, you can find the solutiosn in `routes/solutions.js`.

## Running your server
To run your server, go into your terminal and run `nodemon` or `node app.js`.  You can use Postman to test your endpoints to see if they work.  Download the endpoints [here](https://tinyurl.com/yym6x9bk).  You can also open `index.html` to see your users list being populated!
<br />
<br />
![image](https://user-images.githubusercontent.com/19257435/64902885-bf490300-d67d-11e9-96d2-4cea9fd7891f.png)
<br />

## Hosting your server
You can host your server on [Heroku](heroku.com) which has a free tier that I like to use. To set it up:
1. Create Heroku account
2. Create Procfile with the following content: `web: node app.js`
3. Run:
```
heroku create
git push heroku master
heroku ps:scale web=1
heroku open
```
For more details, check out [this tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs).


## Useful Resources
- [Firebase set-up guide](https://firebase.google.com/docs/admin/setup)
- [Express.js API docs](https://expressjs.com/en/5x/api.html#req)
- [Heroku Node.js tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
