const { Schema, model, default: mongoose } = require('mongoose');
const User = require('./Users');

const AlbumSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: User.modelName,
        index: true
    },
    title: {
        type: String,
        required: true,
    },
});

AlbumSchema.methods.toJSON = function () {
    const album = this.toObject();
    album.id = album._id;
    delete album.__v;
    delete album._id;
    return album;
}

const AlbumsModel = model('albums', AlbumSchema);

AlbumsModel.createIndexes({
    userId: 1,
});

module.exports = AlbumsModel;