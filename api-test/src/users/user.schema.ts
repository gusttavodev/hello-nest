import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 80,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        minlength: 4,
        maxlength: 84,
// tslint:disable-next-line: max-line-length
        validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
        type: String,
    },
}, { timestamps: true });
