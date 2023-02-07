const { Schema, model, default: mongoose } = require('mongoose');
const Album = require('./Albums');

const PhotoSchema = new Schema({
    albumId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: Album.modelName,
        index: true
    },
    url: {
        type: String,
        required: true,
    },
});

PhotoSchema.methods.toJSON = function () {
    const photo = this.toObject();
    photo.id = photo._id;
    delete photo.__v;
    delete photo._id;
    return photo;
}

const PhotosModel = model('photos', PhotoSchema);

PhotosModel.createIndexes({
    albumId: 1,
});

module.exports = PhotosModel;