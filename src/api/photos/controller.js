const Photo = require('../../database/repository/Photos');

exports.fetchPhotos = async (req, res) => {
    try {
        const photos = await Photo.fetchPhotosByAlbumId(req.query.albumId);
        res.status(200).send(photos);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}

exports.addPhoto = async (req, res) => {
    try {
        const photo = await Photo.addPhoto(req.body);
        res.status(201).send(photo);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}

exports.deletePhoto = async (req, res) => {
    try {
        const photo = await Photo.deletePhoto(req.params.id);
        res.status(200).send(photo);
    } catch(err) {
        console.log(err);
        res.status(400).send({message: err.message});
    }
}