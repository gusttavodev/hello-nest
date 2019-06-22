import { ObjectID } from "bson";
import * as mongoose from 'mongoose';

// Tipo de dado ICategory tem um nome e um objectId
// Eu crio o tipo
export interface ICategory extends mongoose.Document {
    id?: ObjectID,
    name: String, 
}