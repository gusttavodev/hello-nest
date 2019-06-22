import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICategory } from 'dist/categories/category.interface';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel('Category') private readonly categoriesSchema: Model<ICategory>,
    ) { }
    // Funçao para o controller
    async findAll() {
        try {
            return await this.categoriesSchema.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async create(category: ICategory) {
        try {
            return await this.categoriesSchema.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async update() {
        try {
            return await this.categoriesSchema.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async delete() {
        try {
            return await this.categoriesSchema.find();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
