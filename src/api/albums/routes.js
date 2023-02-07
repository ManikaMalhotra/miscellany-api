const express = require('express');
const router = express.Router();
const { fetchAlbums, addAlbum, deleteAlbum } = require('./controller');

router.route('/')
    .get(fetchAlbums)
    .post(addAlbum)
router.route('/:id')
    .delete(deleteAlbum);

module.exports = router;