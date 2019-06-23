import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPost } from './post.interface';
import { Model } from 'mongoose';
import { ObjectID } from 'bson';

@Injectable()
export class PostsService {

    constructor(
        @InjectModel('Post') private readonly postSchema: Model<IPost>,
    ) { }

    async findAll(): Promise<IPost[]> {
        try {
            return await this.postSchema.find().populate('categories', 'name');
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async create(post: IPost): Promise<IPost> {
        try {
            return await this.postSchema.create(post);
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async update(post: IPost): Promise<IPost> {
        try {
            return await this.postSchema.findByIdAndUpdate({_id: post.id},
                post, {new: true});
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async delete(postId: ObjectID): Promise<IPost> {
        try {
            return await this.postSchema.findByIdAndDelete({_id: postId});
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
