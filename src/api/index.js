const express = require('express');
const router = express.Router();
const userRoutes = require('./users/routes');
const albumRoutes = require('./albums/routes');
const photoRoutes = require('./photos/routes');

router.use('/users', userRoutes);
router.use('/albums', albumRoutes);
router.use('/photos', photoRoutes);

module.exports = router;