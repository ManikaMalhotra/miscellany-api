const Album = require('../../database/repository/Albums');

exports.fetchAlbums = async (req, res) => {
    try {
        const albums = await Album.fetchAlbumsByUserId(req.query.userId);
        res.status(200).send(albums);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}

exports.addAlbum = async (req, res) => {
    try {
        const album = await Album.addAlbum(req.body);
        res.status(201).send(album);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}

exports.deleteAlbum = async (req, res) => {
    try {
        const album = await Album.deleteAlbum(req.params.id);
        res.status(200).send(album);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}