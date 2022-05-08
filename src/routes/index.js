const router = require('express').Router();

const { checkApi } = require('../controllers/api.controller');

router.get('/', checkApi);

module.exports = router;
