const AlbumModel = require('../models/Albums');
const PhotoModel = require('../models/Photos');

class Album {
    static async addAlbum(album) {
        try {
            const newAlbum = await AlbumModel.create(album);
            return newAlbum;
        } catch(err) {
            throw err;
        }
    }

    static async fetchAlbumsByUserId(userId) {
        try {
            const albums = await AlbumModel.find({userId});
            return albums;
        } catch(err) {
            throw err;
        }
    }

    static async deleteAlbum(id) {
        try {
            const album = await AlbumModel.findByIdAndDelete(id).lean();
            const photos = await PhotoModel.deleteMany({albumId: id});
            return {album, photos};
        } catch(err) {
            throw err;
        }
    }
}

module.exports = Album;