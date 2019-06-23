import * as mongoose from 'mongoose';
import { ObjectID } from 'bson';

export interface IPost extends mongoose.Document {
    id?: ObjectID,
    title: string,
    description: string,
    category: [ObjectID],
}