const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        minlength: [2, 'First name must be at least 2 characters'],
        maxlength: [50, 'First name cannot exceed 50 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        minlength: [2, 'Last name must be at least 2 characters'],
        maxlength: [50, 'Last name cannot exceed 50 characters']
    },
    hobby: {
        type: String,
        required: [true, 'Hobby is required'],
        trim: true,
        minlength: [2, 'Hobby must be at least 2 characters'],
        maxlength: [100, 'Hobby cannot exceed 100 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt
    versionKey: false // Disable the __v field
});

// Add index for better query performance
userSchema.index({ firstName: 1, lastName: 1 });

const User = mongoose.model('User', userSchema);
module.exports = User;