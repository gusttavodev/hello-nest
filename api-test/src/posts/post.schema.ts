import * as mongoose from 'mongoose';

export const post = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
        maxlength: 80,
        unique: true,
    },
    desciption: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 3,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }]

}, { timestamps: true})