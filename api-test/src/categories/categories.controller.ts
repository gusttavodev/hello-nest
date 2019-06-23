import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ICategory } from './category.interface';

@Controller('categories')
export class CategoriesController { 
    constructor(
        private readonly categoriesService: CategoriesService,
    ) { }

    @Get() // Decorator
    async index() {
                    // Função do service
      return await this.categoriesService.findAll();
    }

    @Post()
    // Body pega dados da requisição
    async create(@Body() category: ICategory) {
        return await this.categoriesService.create(category);
    }

    @Put()
    async update(@Body() category: ICategory) {
        return await this.categoriesService.update(category);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.categoriesService.delete(params.id);
    }
}
