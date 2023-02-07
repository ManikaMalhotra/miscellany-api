const PhotoModel = require('../models/Photos');

class Photo {
    static async addPhoto(photo) {
        try {
            const newPhoto = await PhotoModel.create(photo);
            return newPhoto;
        } catch(err) {
            throw err;
        }
    }

    static async fetchPhotosByAlbumId(albumId) {
        try {
            const photos = await PhotoModel.find({albumId});
            return photos;
        } catch(err) {
            throw err;
        }
    }

    static async deletePhoto(id) {
        try {
            const photo = await PhotoModel.findByIdAndDelete(id).lean();
            return photo;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = Photo;