const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        maxlength: [40, 'Name must be less than 40 characters'],
        minlength: [4, 'Name must be more than 4 characters']
    },
    email: {
        type: String,
        required: [true, 'A user must have anemail'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Enter a valid email']
    },
    photo: {
        type: String,
        default: 'default.jpg'
    },
    role: {
        type: String,
        enum: ['user','admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
})


const User = mongoose.model('User', userSchema);

module.exports = User;
