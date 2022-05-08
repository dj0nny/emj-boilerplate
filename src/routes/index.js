const router = require('express').Router();

const { checkApi } = require('../controllers/api.controller');
const auth = require('./auth.route');

// middleware for protecting the route
// const { protect } = require('../middleware/auth.middleware');

router.get('/', checkApi);

router.use('/auth', auth);

module.exports = router;
