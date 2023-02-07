const express = require('express');
const router = express.Router();
const { fetchPhotos, addPhoto, deletePhoto } = require('./controller');

router.route('/')
    .get(fetchPhotos)
    .post(addPhoto)
router.route('/:id')
    .delete(deletePhoto);

module.exports = router;