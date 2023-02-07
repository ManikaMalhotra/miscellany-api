const User = require('../../database/repository/Users');

exports.fetchUsers = async (req, res) => {
    try {
        const users = await User.fetchUsers();
        res.status(200).send(users);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}

exports.addUser = async (req, res) => {
    try {
        const user = await User.addUser(req.body);
        res.status(201).send(user);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.deleteUser(req.params.id);
        res.status(200).send(user);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}