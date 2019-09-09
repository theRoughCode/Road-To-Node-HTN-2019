const router = require('express').Router();

// Define router
router.get('/', (req, res) => res.send('Welcome to Hack the North!'));
router.use('/users', require('./users'));
router.all('*', (req, res) => res.sendStatus(404));

// Export router
module.exports = router;
