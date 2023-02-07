const UserModel = require('../models/Users');
const AlbumRepo = require('../repository/Albums');

class User {

    static async #getAndDeleteAlbums(userId) {
        try {
            const albums = await AlbumRepo.fetchAlbumsByUserId(userId);
            const photos = await Promise.allSettled(albums.map(async album => {
                return await AlbumRepo.deleteAlbum(album._id);
            }));
            return photos;
        } catch(err) {
            throw err;
        }
    }

    static async addUser(user) {
        try {
            const newUser = await UserModel.create(user);
            return newUser;
        } catch(err) {
            throw err;
        }
    }

    static async fetchUsers() {
        try {
            const users = await UserModel.find({});
            return users;
        } catch(err) {
            throw err;
        }
    }

    static async deleteUser(id) {
        try {
            const user = await UserModel.findByIdAndDelete(id).lean();
            const albums = await this.#getAndDeleteAlbums(id);
            return {user, albums};
        } catch(err) {
            throw err;
        }
    }
}

module.exports = User;