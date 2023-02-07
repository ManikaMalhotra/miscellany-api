const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
});

UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    user.id = user._id;
    delete user.__v;
    delete user._id;
    return user;
}

module.exports = User = model('users', UserSchema);