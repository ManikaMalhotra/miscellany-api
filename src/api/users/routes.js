const express = require('express');
const router = express.Router();
const { fetchUsers, addUser, deleteUser } = require('./controller');

router.route('/')
    .get(fetchUsers)
    .post(addUser)
router.route('/:id')
    .delete(deleteUser);

module.exports = router;